function choiceTheme(theme) {
    if (theme === "base") {
        $("body").css({
            "background": "#eee",
            "background-size": "cover",
            "font-family": "'Open Sans', cursive"
        })
        
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        
        $("h1").css({
            "color": "#222"
        })
        
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "#333",
            "border": "1px solid #111"
        })
        $(".nb-task").css({
            "background-color": "#333",
            "font-size": "25px",
            "line-height": "40px"
        })
        $("h6").css({
            "color": "black"
        })
        // input
        $(".form-control-plus").css({
            "background-color": "#333",
            "color": "#fff"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid #333",
                    "box-shadow": "0 0 8px #333"
                });
            }
        });
    }
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
            "font-size": "35px"
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
        $("h6").css({
                "color": "white"
            })
        // input
        $(".form-control-plus").css({
            "background-color": "#fff",
            "color": "#333"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid rebeccapurple",
                    "box-shadow": "0 0 8px rebeccapurple"
                });
            }
        });
    }
    if (theme === "red") {
        $("body").css({
            "background": "url(images/bg.jpg) no-repeat",
            "background-size": "cover",
            "font-family": "'Pacifico', cursive"
        });
        $(".container").css({
            "box-shadow": "0 0 180px #A79A66",
            "border-radius": "0"
        });
        $("h1").css({
            "color": "red"
        })
        $("p.time i").css({
            "font-size": "55px"
        })
        $(".btn-success").css({
            "background-color": "green",
            "border": "1px solid green"
        })
        $(".nb-task").css({
            "background-color": "green",
            "font-size": "32px",
            "line-height": "32px"
        })
        $("h6").css({
            "color": "black"
        })
        // input
        $(".form-control-plus").css({
            "background-color": "#fff",
            "color": "#333"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid green",
                    "box-shadow": "0 0 8px green"
                });
            }
        });
    }
    if (theme === "dreamy") {
        $("body").css({
            "background": "url(images/bg-dreamy.jpg) no-repeat",
            "background-size": "cover",
            "font-family": "'Nova Mono', cursive"
        });
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        $("h1").css({
            "color": "#4b9bff"
        })
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "#4b9bff",
            "border": "1px solid #568cd0"
        })
        $(".nb-task").css({
            "background-color": "#4b9bff",
            "font-size": "25px",
            "line-height": "40px"
        })
        $("h6").css({
            "color": "white"
        })
        // input
        $(".form-control-plus").css({
            "background-color": "#fff",
            "color": "#333"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid #4b9bff",
                    "box-shadow": "0 0 8px #4b9bff"
                });
            }
        });
    }
    if (theme === "cat") {
        $("body").css({
            "background-image": "url(images/bg-cat.jpg)",
            "background-size": "cover",
            "font-family": "'Open Sans', cursive"
        })
        
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        
        $("h1").css({
            "color": "#222"
        })
        
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "#333",
            "border": "1px solid #111"
        })
        $(".nb-task").css({
            "background-color": "#333",
            "font-size": "25px",
            "line-height": "40px"
        })
        $("h6").css({
            "color": "white"
        })
        // input
        $(".form-control-plus").css({
            "background-color": "#333",
            "color": "#fff"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid #333",
                    "box-shadow": "0 0 8px #333"
                });
            }
        });
    }
    if (theme === "lama") {
        $("body").css({
            "background-image": "url(images/bg-lama.jpg)",
            "background-position": "center center",
            "background-size": "cover",
            "font-family": "'Open Sans', cursive"
        })
        
        $(".container").css({
            "box-shadow": "0 0 180px #000",
            "border-radius": "0"
        });
        
        $("h1").css({
            "color": "#222"
        })
        
        $("p.time i").css({
            "font-size": "40px"
        })
        $(".btn-success").css({
            "background-color": "#333",
            "border": "1px solid #111"
        })
        $(".nb-task").css({
            "background-color": "#333",
            "font-size": "25px",
            "line-height": "40px"
        })
        $("h6").css({
            "color": "white"
        })
        // input
        $(".form-control-plus").css({
            "background-color": "#333",
            "color": "#fff"
        })
        $(".form-control-plus").on({
            blur: function () {
                $(this).css({
                    "border": "0",
                    "box-shadow": "0 0 0 #000"
                });
            },
            focus: function () {
                $(this).css({
                    "border": "1px solid #333",
                    "box-shadow": "0 0 8px #333"
                });
            }
        });
    }
}