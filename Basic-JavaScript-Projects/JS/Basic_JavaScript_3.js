function add() {
    var result = 3 + 7;
    document.getElementById("Math").innerHTML = result;
}

function sub() {
    var result = 5 - 2;
    document.getElementById("sub").innerHTML = result;
}

function mult() {
    var result = 7 * 8;
    document.getElementById('mult').innerHTML = result;
}

function div() {
    var result = 32 / 8;
    document.getElementById('div').innerHTML = result;
}

function simpleMath() {
    var result = (4 + 7) * 10 / 2 - 3;
    document.getElementById("simple-math").innerHTML = result;
}

function mod() {
    var result = 546 % 73;
    document.getElementById("mod").innerHTML = result;
}

function negate() {
    var result = 10;
    document.getElementById("negate").innerHTML = -result;
}

var x = 5;
function inc() {
    x++;
    document.getElementById("incdec").innerHTML = x;
}

function dec() {
    x--;
    document.getElementById("incdec").innerHTML = x;
}

function random() {
    var y = Math.ceil((Math.random() * 3));
    document.getElementById("random").innerHTML = y;
}

function con() {
    var z = Math.PI;
    document.getElementById("constants").innerHTML = z;
}

function highNum() {
    var highest = Math.max(2, 4, 6, 3, 3,63, 7, 3,73, 64);
    document.getElementById("array").innerHTML = highest;
}