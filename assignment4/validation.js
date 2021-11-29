document.getElementById("cuisineForm").addEventListener("submit", e => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    if (firstName.length < 2) {
        alert("Error: First name must contain two (2) or more characters.");
        e.preventDefault();
    } 
    if (lastName.length < 2) {
        alert("Error: Last name must contain two (2) or more characters.");
        e.preventDefault();
    }

    const alpha = /^[A-Za-z]+$/;
    if (!firstName.match(alpha)) {
        alert("Error: First name must only contain alphabetical characters.");
        e.preventDefault();
    }
    if (!lastName.match(alpha)) {
        alert("Error: Last name must only contain alphabetical characters.");
        e.preventDefault();
    }

    const facilitator = document.getElementById("facilitator").value;
    if (facilitator === "Chris" || facilitator === "Josh" || facilitator === "Christian" || facilitator === "Fazil") {
        // Do nothing.
    } else {
        alert("Error: Facilitator name is not valid.");
        e.preventDefault();
    }
});