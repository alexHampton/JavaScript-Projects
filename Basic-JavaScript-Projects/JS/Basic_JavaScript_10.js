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

//use String.length  + while loop

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

// for loopo
function for_Loop() {
    var inst = ["Guitar", "Drums", "Piano", "Bass", "Sax", "Electric Triangle"];
    var inst_list = "";
    for(i = 0; i < inst.length; i++) {
        inst_list += inst[i];
        inst_list += "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = inst_list;
}

// array

function array_Function() {
    var food = [];
    food[0] = "carrot";
    food[1] = "avocado";
    food[2] = "chips";
    food[3] = "broccoli";
    document.getElementById("my-array").innerHTML = food[3];
}


// constant object
const pet = {name:"Fluffy", age:3, color:"gray", sound:"meow"}
pet.age = 4;
pet.type = "cat";

function constant_function() {
    document.getElementById("constant").innerHTML = 
    "My pet is a " + pet.type + ". She is " + pet.age + " years old.";
}

// use of let
var d = 43;
document.getElementById("let-1").innerHTML = d;
{
    let d = 7;
    document.getElementById("let-2").innerHTML = d;
}
document.getElementById("let-3").innerHTML = d;

// use of return statement
function return_statement() {
    return 43 + 546;
}
document.getElementById("return-statement").innerHTML = 
return_statement();


//use of object with a method
let my_pet = {
    type: "cat",
    color: "black-and-white",
    name: "Skunky",
    age: 3,
    description: function() {
        return "My pet is a " + my_pet.color + " " + my_pet.type + " named " + my_pet.name + "." ;
    }
};

document.getElementById("object-reference").innerHTML = my_pet.description();


//use of break and continue statments in a for loop
function count_odds() {
    var count = "";
    for (i = 0; i < 100; i++) {
        if (i % 2 == 0 || i % 3 == 0) {
            continue;
        }
        if (i == 53) {
            break;
        }
        count += i + "<br>";
    }
    document.getElementById("break-continue").innerHTML = count;
}