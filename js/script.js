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

// le timer
function timer() {
    if (limitPlay === false) {
        limitPlay = true;
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
                stopChrono();
            }
            s++;
        }, 10);
    }
}

// fonction stop
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
    $.notify("Votre tâche est terminé !");
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
    stopChrono();
});