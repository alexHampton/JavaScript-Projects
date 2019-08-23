//JS form validation
function validateForm() {
    var x = document.forms["myForm"]["phone"].value;
    console.log(x);
    if (x == "") {
        alert("Sorry, a phone number is also required...");
        return false;
    }
}