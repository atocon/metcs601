/* An event listener function is utilized to check for error conditions.
when the form is submitted with the "Submit" button*/
document.getElementById("cuisineForm").addEventListener("submit", e => {

    // The first and last name values entered as input by the user are assignd to a variable.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // If block executes if there are less than 2 letters in the first name.
    if (firstName.length < 2) {
        // Styles the border around the first name input box with a red border.
        document.getElementById("firstName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("firstNameError").innerHTML = 
        "Error: First name must contain two (2) or more characters.";
        // Stops the form from being submitted, so the user can retry to enter correct data.
        e.preventDefault();
    } 

    // If block executes if there are less than 2 letters in the last name.
    if (lastName.length < 2) {
        // Styles the border around the last name input box with a red border.
        document.getElementById("lastName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must contain two (2) or more characters.";
        e.preventDefault();
    }

    // A regular expression which matches with only alphabetical characters.
    const alpha = /^[A-Za-z]+$/;

    // If block executes if the first name contains non-alphabetical characters.
    if (!firstName.match(alpha)) {
        // Styles the border around the first name input box with a red border.
        document.getElementById("firstName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("firstNameError").innerHTML = 
        "Error: First name must only contain alphabetical characters.";
        e.preventDefault();
    }

    // If block executes if the last name contains non-alphabetical characters.
    if (!lastName.match(alpha)) {
        // Styles the border around the last name input box with a red border.
        document.getElementById("lastName").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("lastNameError").innerHTML = 
        "Error: Last name must only contain alphabetical characters.";
        e.preventDefault();
    }

    // The facilitator name entered as input by the user is assigned to a variable.
    const facilitator = document.getElementById("facilitator").value;

    // If block executes if the facilitator name matches the name of an active facilitator.
    if (facilitator === "Chris" || facilitator === "Josh" || facilitator === 
        "Christian" || facilitator === "Fazil") {
        // Do nothing.
    // Else block executes if the entered facilitator name does not match a current facilitator.
    } else {
        // Styles the border around the facilitator name input box with a red border.
        document.getElementById("facilitator").style.borderColor = "red";
        // Writes an error message to the DOM.
        document.getElementById("facilitatorNameError").innerHTML = 
        "Error: Facilitator name is not valid.";
        e.preventDefault();
    }
});