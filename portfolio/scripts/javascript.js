//-------------------------------------------------------------------
// NAVBAR
//-------------------------------------------------------------------
function navOpenClose() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar container") {
        x.className += " responsive";
        var y = document.getElementById("homeButton");
        y.style = "animation:none;"
    } else {
        x.className = "navbar container";
    }
}

//-------------------------------------------------------------------
// SLIDESHOW
//-------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next and Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} // clicking next on last image will go back to first image
    if (n < 1) {slideIndex = slides.length} // clicking previous on first image will go to the last image
    for (i = 0; i < slides.length; i++) { // each slide display is set to none
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // active class is removed from each dot
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // only the current slide is shown
    dots[slideIndex - 1].className += " active"; // only the current dot gets the active style
}   


//-------------------------------------------------------------------
// CONTACT FORM
//-------------------------------------------------------------------
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("contactButton").style.width = "30vw";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("contactButton").style.width = "25vw";
}

function messageValidation() {
    message = document.getElementById("message");
    if (message.value == "") {
        alert("Please leave a message so I can better help you.");
    }
}