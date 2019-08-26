function getReceipt() {
    // initializes our string so it can get passed from function
    // to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize == "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize == "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize == "Extra Large Pizza") {
        sizeTotal = 18;
    } else if (selectedSize == "Leaning Tower of Pizza") {
        sizeTotal = 24;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    //console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getVeggies(runningTotal, text1); //after getting the size price, move on to the vegetables
};

function getVeggies(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veggies");
    for (let i = 0; i < vegArray.length; i++) { //for every type of vegetable, see which ones have been checked
        if (vegArray[i].checked) {
            selectedVeg.push(vegArray[i].value); // if checked, add them to the array
            text1 = text1 + vegArray[i].value + "<br>"; // also add them to the text to be printed out
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 2) { // you get 2 free vegetables with every pizza!
        vegTotal = (vegCount - 2);
    } else {
        vegTotal = 0; //your veggies are freeeeee!!!
    }
    runningTotal = runningTotal + vegTotal;
    console.log("total selected veggie items: " + vegCount);
    console.log(vegCount + " type(s) - 2 free veggies = $" + vegTotal + ".00");
    
    getMeat(runningTotal, text1); //after totalling the size and vegetable price, move on to the meats
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            //console.log("selected meat item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = runningTotal + meatTotal;
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = $" + meatTotal+ ".00");
    //console.log("meat text1: " + text1);
    console.log("Purchase total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = 
    "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
