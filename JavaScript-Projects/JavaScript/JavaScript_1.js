// use of switch 
function switch_function() {
    let input = document.getElementById("switch-input").value;
    let output = document.getElementById("switch-output");
    switch (input) {
        case "2":
            output.innerHTML = "Two is for you!";
            break;
        case "4":
            output.innerHTML = "Shut the door!";
            break;
        case "8":
            output.innerHTML = "Eight is for you mate!";
            break;
        case "6":
        case "10":
            output.innerHTML = "That's an even number!";
            break;
        case "1":
        case "5":
        case "9":
            output.innerHTML = "That's an odd number!";
            break;
        case "3":
            output.innerHTML = "Three is for me!";
            break;
        case "7":
            output.innerHTML = "That's lucky number seven!";
            break;
        default:
            output.innerHTML = "Please choose between 1 and 10";
    }
}

//use of getElementsByClassname()
function changeByClass() {
    let name = document.getElementsByClassName("class-name");
    name[1].innerHTML = "This line has magically been changed!";
}


//use canvas element
var c1 = document.getElementById("myCanvas1");
var cd1 = c1.getContext("2d");

var grd = cd1.createRadialGradient(75, 150, 5, 100, 100, 100);
grd.addColorStop(0, "teal");
grd.addColorStop(0.5, "white");
grd.addColorStop(1, "purple");

cd1.fillStyle = grd;
cd1.fillRect(10,10,180,180);

var c2 = document.getElementById("myCanvas2");
var cd2 = c2.getContext("2d");
var grd2 = cd2.createLinearGradient(10, 10, 130, 140);
grd2.addColorStop(0, "black");
grd2.addColorStop(1, "teal");
grd2.addColorStop(0.5, "white");

cd2.fillStyle = grd2;
cd2.fillRect(10,10,180,180);