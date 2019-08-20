function someFunction() {
    var string = "How are you today?";
    var color = string.fontcolor("green");
    color = color.fontsize("10rem");
    document.getElementById("press").innerHTML= color;
}

function next() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("blue").innerHTML = sentence;
}

function secret() {
    var sentence = "I once ate";
    sentence += " a whole pizza.";
    document.getElementById("secret").innerHTML = sentence;
}

function keep() {
    document.getElementById("secret").innerHTML = "Don't tell anyone...";
}