// minutes:secondes
var m = 0;
var s = 0;
// empêcher de clicker plusieurs fois sur play
var limitPlay = false;
// nom de mon setInterval pour pouvoir le cibler et le mettre avec clearInterval
var chrono;
// tâche en cours
var ongoing;
// pour enregistrer dans la table
var tabTask = "";
// nombres de tâches finis
var nbTask = 0;
// son d'alarme
var alarm = document.getElementById("alarmSound");
// on desactive le bouton stop
$("#stop").prop('disabled', true);

// le timer
function timer() {
    if (limitPlay === false) {
        limitPlay = true;
        $("#stop").prop('disabled', false);
        $("#play").css("display", "none");
        $("#pause").css("display", "inline-block");
        ongoing = $("#task").val();
        $("#ongoing").text(ongoing);
        chrono = setInterval(function () {
            if (s == 60) {
                s = 0;
                m++;
                if (m >= 10) {
                    $("#minutes").text(m);
                } else {
                    $("#minutes").text("0" + m);
                }
            }
            if (s >= 10) {
                $("#secondes").text(s);
            } else {
                $("#secondes").text("0" + s);
            }
            if (m == 25) {
                $("#stop").removeClass("btn-default");
                $("#stop").addClass("btn-success");
                clearInterval(chrono);
                $.notify("Valide ta tâche si elle est terminé !", "info");
                playAudio();
            }
            if (s + m > 0) {
                $("#task").prop('disabled', true);
            }
            s++;
        }, 1000);
    }
}

// fonction stop, task fini ! ! !
function stopChrono() {
    limitPlay = false;
    m = 0;
    $("#minutes").text("00");
    s = 0;
    $("#secondes").text("00");
    clearInterval(chrono);
    tabTask = '<tr><td>' + ongoing + '</td></tr>' + tabTask;
    document.getElementById('done').innerHTML = tabTask;
    $("#play").css("display", "inline-block");
    $("#pause").css("display", "none");
    $.notify("Bravo ! Ta tâche est terminé !", "info");
    $("#task").prop('disabled', false);
    nbTask++;
    $(".nb-task").text(nbTask);
}

// le décompte tourne
$("#play").click(function () {
    timer();
});
// pause
$("#pause").click(function () {
    limitPlay = false;
    clearInterval(chrono);
    $("#play").css("display", "inline-block");
    $("#pause").css("display", "none");
});
// stop (reset)
$("#stop").click(function () {
    $("#stop").removeClass("btn-success");
    $("#stop").addClass("btn-default");
    stopChrono();
    $("#stop").prop('disabled', true);
    pauseAudio();
});

// sound
function playAudio() {
    alarm.play();
}

function pauseAudio() {
    alarm.pause();
}