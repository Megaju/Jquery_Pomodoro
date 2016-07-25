/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * * * * *  NO ! * * * * * *
 * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * */

// minutes - secondes - milisecondes
var m = 0;
var s = 0;

// state chrono
var state = true;
// 
var demandePause = false;
// empêcher de clicker plusieurs fois sur play
var limitPlay = false;

// mettre en route le chrono
//$("#play").click = (state = true);
// arrêt du chrono
//$("#pause").click = (demandePause = true);

// le décompte tourne
$("#play").click(function () {
    if (state === true) {
        if (demandePause === false && limitPlay == false) {
            limitPlay = true;
            // decompte secondes
            setInterval(function () {
                if (s == 60) {
                    s = 0;
                    m++;
                    document.getElementById("minutes").innerHTML = m;
                }
                if (s >= 10) {
                    document.getElementById("secondes").innerHTML = s;
                } else {
                    document.getElementById("secondes").innerHTML = "0" + s;
                }
                s++;
            }, 100);
        }
    } else {
        // mettre en pause
        state = false;
    }
});

// le truc qui marche pas pck on est bloqué dans notre if plus haut...
if (s == 3) {
    m++;
    document.getElementById("minutes").innerHTML = m;
};