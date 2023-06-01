var texts = ["Welcome to my portfolio!", "Looking to expand my portfolio", "Feel free to explore my work."];
var index = 0;
var speed = 80;

function typeWriter() {
    if (index < texts.length) {
        var text = texts[index];
        var element = document.querySelector(".typewriter-text");
        element.innerHTML = "";

        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(function() {
                    deleteText();
                }, 2000);
            }
        }, speed);
    }
}

function deleteText() {
    var element = document.querySelector(".typewriter-text");
    var text = element.innerHTML;
    var i = text.length;
    var timer = setInterval(function() {
        if (i > 0) {
            element.innerHTML = text.substring(0, i - 1);
            i--;
        } else {
            clearInterval(timer);
            index++;
            if (index >= texts.length) {
                index = 0;
            }
            setTimeout(function() {
                typeWriter();
            }, 1000);
        }
    }, speed);
}

typeWriter();
