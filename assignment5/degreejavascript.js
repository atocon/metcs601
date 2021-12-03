async function getDegrees(url) {
    // fetch the url
    await fetch(url)
        // get your data here, and check for the response status. If it is not 200, throw an error
        .then((response) => response.json())
        .then((data) =>
            document.write(`My first degreee was a ${data.degree_data[0].type} in ${data.degree_data[0].major} from ${data.degree_data[0].school}.`)
        );
}

document.getElementById("button").onclick = getDegrees("https://atocon.github.io/metcs601-assignment5/");