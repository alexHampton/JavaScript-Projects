//use while loop
function Call_Loop() {
    var para = document.getElementById("loop");
    var i = 1;
    while (i < 11) {
        para.innerHTML += i + "<br>";

        i += 1;
    }
    para.innerHTML += "<br>";
}

//use String.length 

function String_Loop() {
    var word = document.getElementById("string_input").value;
    var i = 0;
    var para_2 = document.getElementById("string_loop");
    para_2.innerHTML = "";
    while (i < word.length) {
        para_2.innerHTML += word[i] + "<br>";
        i += 1;
    }
    para_2.innerHTML += "<br>";
    document.getElementById("string-length").innerHTML =
    "The length of this string is " + word.length;
}