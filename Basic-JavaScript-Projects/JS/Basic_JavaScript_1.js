var color = "blue", food = "banana", 
team = "Mariners", country="Japan";

document.write(team);

team = team.fontcolor("red");

color = color.fontcolor(color);
food = food.fontcolor("yellow");
country = country.fontcolor("#ff84d9");

document.write(color + food + team + country);



document.write(4 % 3);


function My_First_Function() {
    var string = "This text is green!";
    var result = string.fontcolor("green");
    document.getElementById("green_button").innerHTML = result;
}