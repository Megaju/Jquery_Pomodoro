// minutes:secondes
var m = 0;
var s = 0;
// empêcher de clicker plusieurs fois sur play
var limitPlay = false;
// nom de mon setInterval pour pouvoir le cibler et le mettre avec clearInterval
var chrono;

// le timer
function timer() {
    if (limitPlay === false) {
        limitPlay = true;
        chrono = setInterval(function () {
            if (s == 60) {
                s = 0;
                m++;
                $("#minutes").text(m);
            }
            if (s >= 10) {
                $("#secondes").text(s);
            } else {
                $("#secondes").text("0" + s);
            }
            s++;
        }, 100);
    }
}

// le décompte tourne
$("#play").click(function () {
    timer();
});
// pause
$("#pause").click(function () {
    limitPlay = false;
    clearInterval(chrono);
});
// stop (reset)
$("#stop").click(function () {
    limitPlay = false;
    m = 0;
    $("#minutes").text("00");
    s = 0;
    $("#secondes").text("00");
    clearInterval(chrono);
});