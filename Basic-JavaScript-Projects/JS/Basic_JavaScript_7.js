// understanding global and local variables
// using console.log to debug issues

// var x = 7;

// function add(){
//     var y = 3;
//     document.write(x + y);
//     console.log(x + y);
// }

// function subtract() {
//     document.write(x - y);
//     console.log(x - y);
// }
// add();
// subtract();

//if statement utilizing Date().getHours() method
function timeOfDay() {
    var hours = new Date().getHours();
    if (hours < 18) {
        document.getElementById("if_statement").innerHTML =
        "Good day to you sir!";
    }
}


//another if statement
var fave_num = Math.ceil((Math.random() * 10));
function number_guess() {
    console.log(fave_num);
    var guess = document.getElementById("number_guess").value;
    var output = document.getElementById("number_output");
    if (guess < fave_num) {
        output.innerHTML = "That's too low...";
    }
    else if (guess > fave_num) {
        output.innerHTML = "That's too high...";
    }
    else {
        output.innerHTML = "That's right!";
    }
}

//if, else statement

function color_generator() {
    var user_color = document.getElementById("color_input").value;
    console.log(user_color);
    var color_output = document.getElementById("color_sample");
    color_output.style.color = user_color;
    if (user_color == "blue") {
        color_output.innerHTML = "Nice choice!";
    }
    else {
        color_output.innerHTML = "This is nice, but blue is better."
    }
}



//if, else if, else example
function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



//print out the month
function wordMonth() {
    var a = new Date();
    var b = a.getMonth();
    var months = ["January", "February", "March", 
    "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];
    return months[b];
}

currentMonth = wordMonth();
document.write("The current month is " + currentMonth + ".");