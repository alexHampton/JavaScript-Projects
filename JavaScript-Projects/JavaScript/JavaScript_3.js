function animalType(element) {
    let animal = element.getAttribute("data-pet-type");
    let name = element.innerHTML;
    let middle = " is a ";
    if (animal == "inch worm") {
        middle = " is an ";
    }
    alert(name + middle + animal + ".");
    

}



