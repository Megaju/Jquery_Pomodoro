// minutes:secondes
var m = 0;
var s = 0;
// state chrono
var state = true;
// empêcher de clicker plusieurs fois sur play
var limitPlay = false;

// le décompte tourne
$("#play").click(function () {
    if (state === true) {
        setInterval(function () {
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
});