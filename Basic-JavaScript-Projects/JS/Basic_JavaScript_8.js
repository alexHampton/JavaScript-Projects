//practice with String.concat()
var phrase_1 = "This is";
var phrase_2 = " now a";
var phrase_3 = " complete sentence";
var phrase_4 = " thanks to concatenation.";

var complete_sentence = phrase_1.concat(phrase_2, phrase_3, phrase_4);
document.getElementById("concatenation").innerHTML =
complete_sentence;

//pracitce with String.slice()
var slice_sentence = "My favorite Japanese food is sushi.";
document.getElementById("slice_sentence").innerHTML = slice_sentence;
var section = slice_sentence.slice(29, 34);
document.getElementById("slice").innerHTML = section;
var sentence_upper = slice_sentence.toUpperCase();
document.getElementById("uppercase").innerHTML = sentence_upper;
var food_loc = sentence_upper.search("FOOD");
document.getElementById("search").innerHTML = 
"Did you know that the word \"FOOD\" in that last sentence is found at index location " + food_loc + "?";


//practice using toString() method
var n = 455;
document.getElementById("to_string").innerHTML = 
"Is " + n.toString() + " a number or a string? Well, " + n.toString() + " plus 5 equals " + (n.toString()+ 5) + ".";


//toPrecision method
function precision_Method() {
    var o = document.getElementById("precision_input").value;
    o = parseFloat(o);
    console.log("o value is " + o + " and type is " + typeof o);
    var limit = document.getElementById("precision_limit").value; 
    limit = parseFloat(limit);
    console.log("limit value is " + limit + " and type is " + typeof limit);
    document.getElementById("precision").innerHTML = 
    "Your new number is " + o.toPrecision(limit) + ".";
}

//toFixed method
function fixed_Method() {
    var o = document.getElementById("fixed_input").value;
    o = parseFloat(o);
    console.log("o value is " + o + " and type is " + typeof o);
    var limit = document.getElementById("fixed_limit").value;
    limit = parseFloat(limit);
    console.log("limit value is " + limit + " and type is " + typeof limit);
    document.getElementById("fixed").innerHTML =
        "Your new number is " + o.toFixed(limit) + ".";
}


//understand valueOf() method
function customer(name, age, country, email) {
    this.Name = name;
    this.Age = age;
    this.Country = country;
    this.Email = email;
}

var customer_1 = new customer("Bob", 42, "Canada", "bobc@email.com");
document.write(customer_1.valueOf());

