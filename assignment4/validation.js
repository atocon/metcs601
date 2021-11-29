document.getElementById('cuisineForm').addEventListener('submit', e => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    if (firstName.length < 2) {
        alert("Error: The entered first name must contain two (2) or more characters.");
        e.preventDefault();
    } 
    if (lastName.length < 2) {
        alert("Error: The entered last name must contain two (2) or more characters.");
        e.preventDefault();
    }

    //const alpha = /^[A-Za-z]+$/;
    //if (!firstName.match(alpha)) {
        //alert("Error: The entered first name must only contain alphanumeric characters.");
        //e.preventDefault();
    //}
    //if (!lastName.match(alpha)) {
        //alert("Error: The entered last name must only contain alphanumeric characters.");
        //e.preventDefault();
    //}

    //const facilitator = document.getElementById("Facilitator").value;
    //if (facilitator !== "Josh" || "Chris" || "Fazil" || "Christian") {
        //alert("Error: The entered facilitator name is not valid.");
        //e.preventDefault();
    //}
});