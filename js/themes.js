function choiceTheme(theme) {
    if (theme === "dark") {
        $("body").css({
            "background": "url(images/bg-dark.png) repeat",
            "font-family": "'PT Mono', sans-serif"
        });
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        $("h1").css({
            "color": "rebeccapurple"
        })
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "rebeccapurple",
            "border": "1px solid #542585"
        })
        $(".nb-task").css({
            "background-color": "rebeccapurple",
            "font-size": "25px",
            "line-height": "40px"
        })
    }
    if (theme === "girly") {
        $("body").css({
            "background": "url(images/bg.jpg) no-repeat cover",
            "font-family": "'Pacifico', cursive"
        });
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        $("h1").css({
            "color": "red"
        })
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "green",
            "border": "1px solid #542585"
        })
        $(".nb-task").css({
            "background-color": "green",
            "font-size": "25px",
            "line-height": "40px"
        })
    }
}