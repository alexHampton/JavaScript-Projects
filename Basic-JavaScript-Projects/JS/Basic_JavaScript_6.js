function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_Ride + " to ride.";
}

function Vote_Function() {
    var age, can_vote;
    age = document.getElementById("voter-age").value;
    can_vote = (age >= 18) ? "You are old":"You are not old";
    document.getElementById("vote").innerHTML = can_vote + " enough to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Home(Size, Bed, Bath, Year) {
    this.Size = Size;
    this.Bed = Bed;
    this.Bath = Bath;
    this.Year = Year;
}

var home_1 = new Home(2000, 3, 2, 1996);

function homes() {
    document.getElementById("New_and_This").innerHTML = 
    "The first home is a beautiful " + home_1.Bed + "-bed, " + home_1.Bath + "-bath, built in " + home_1.Year + "."
}

//This is an Object Constructor Function.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = this.firstName + " " + this.lastName;
}


var myFather = new Person("John", "Doe", 57, "hazel");
var myMother = new Person("Jane", "Doe", 52, "green");

myMother.nationality = "U.S.";

function Customer_Data() {
    var first_Name = document.getElementById("Cust_First").value;
    var last_name = document.getElementById("Cust_Last").value;
    var email = document.getElementById("Cust_email").value;
    document.getElementById("Cust_output").innerHTML = first_Name + " " + last_name + 
    ", thank you for your submission! Your email is " + email + ", is that correct?";
}


//NESTED FUNCTION
var num = 10;
function minus() {
    document.getElementById("Nested_Function").innerHTML = 
    num + " Keep clicking!";
    function lower() {
        if (num > 0) {
            num --;
            return num;
        }
        else {            
            function reset() {num = 10;}
            reset();
        }
    }
    lower();
}
