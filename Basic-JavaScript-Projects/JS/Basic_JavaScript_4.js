var Animal = {
    Type: "Cat",
    Color: "Gray",
    Breed: "Fat",
    Age: 3,
    Sound: "Nyan!"
};

var Meaning = {
    Less: "wondering",
}

function my_Dictionary() {
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML = 
    "My " + Animal.Type + " is a " + Animal.Color + " " + Animal.Type + ".";
}

function meaning() {
    delete Meaning.Less
    document.getElementById("not-found").innerHTML =
    "Some people try to find the meaning of life, but I think it's best left "
    + Meaning.Less + ".";
}