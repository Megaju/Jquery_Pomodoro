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
// ça c'est juste histoire d'avoir un pomodoro bien stressant !
var ms = 0

// state chrono
var state = false;

// mettre en route le chrono
$("#play").click = (state = true);
// arrêt du chrono
////$("#pause").click = (state = false);

// le décompte tourne
$("#play").click(function () {
    if (state === true) {
        // decompte secondes
        setInterval(function () {
            if(s == 59) {s = 0; m++; document.getElementById("minutes").innerHTML = m;}
            s++;
            document.getElementById("secondes").innerHTML = s;
        }, 1000);
        // decompte miliseconde pour les fous
        setInterval(function () {
            if (ms == 1000) {ms = 0; };
            ms++;
            document.getElementById("milisecondes").innerHTML = ms;
        }, 10);
    } else {
        //alert('pause');
    };
});

// le truc qui marche pas pck on est bloqué dans notre if plus haut...
if (s == 3) {
    m++;
    document.getElementById("minutes").innerHTML = m;
};

// mettre en pause (pour les noobs du pomodoro)
// genre "haaaaa j'dois aller faire pipi en fait..."
// INCAPABLE DE SE RETENIR !
// Et du coup... y a du taf en plus à faire ! BRAVO !
/*$("#pause").click(function ()) {
    state = false;*/