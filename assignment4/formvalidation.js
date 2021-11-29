function validateForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    validateName(firstName);
    validateName(lastName);
    validateFacilitators();
}

function validateName(name) {
    let name = name;
    let alphaNum = /^[A-Za-z]+$/;
    if (name.value.length <= 2) {
        alert("Error: The entered name must contain two (2) or more characters.")
        name.focus();
        return false;
    } 
    if (!name.value.match(alphaNum)) {
        alert("Error: The entered name must only contain alphanumeric characters.");
        name.focus();
        return false;
    } else {
        return true;
    }
}

function validateFacilitators() {
    let facilitator = document.getElementById("Facilitator");
    if (facilitator === "Josh" || "Chris" || "Fazil" || "Christian") {
        return true;
    } else {
        alert("Error: The entered facilitator name is not valid.");
        facilitator.focus();
        return false;
    }
}