document.getElementById("cuisineForm").addEventListener("submit", e => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    if (firstName.length < 2) {
        document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstNameError").innerHTML = 
        "Error: First name must contain two (2) or more characters.";
        e.preventDefault();
    } 
    if (lastName.length < 2) {
        document.getElementById("lastName").style.borderColor = "red";
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must contain two (2) or more characters.";
        e.preventDefault();
    }

    const alpha = /^[A-Za-z]+$/;
    if (!firstName.match(alpha)) {
        document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstNameError").innerHTML = 
        "Error: First name must only contain alphabetical characters.";
        e.preventDefault();
    }
    if (!lastName.match(alpha)) {
        document.getElementById("lastName").style.borderColor = "red";
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must only contain alphabetical characters.";
        e.preventDefault();
    }

    const facilitator = document.getElementById("facilitator").value;
    if (facilitator === "Chris" || facilitator === "Josh" || facilitator === 
        "Christian" || facilitator === "Fazil") {
        // Do nothing.
    } else {
        document.getElementById("facilitator").style.borderColor = "red";
        document.getElementById("facilitatorNameError").innerHTML = 
        "Error: Facilitator name is not valid.";
        e.preventDefault();
    }
});