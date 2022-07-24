/*
A function which fetches degree data from a json file stored on a GitHub Pages web server. This function 
fetches degree information and displays the information on a web page if the web server responds correctly.
*/
function runFetch() {
  // An async function to fetch data data from the GitHub Pages web server.
  async function getDegrees(url) {
    // Fetches the data and waits for a response before proceeding.
    await fetch(url)
      // After the server responds, the http response is checked.
      .then(response => {
        // If block is executed if the response is okay (http response is 200).
        if (response.ok) {
          // Returns a promise which resolves to anything that can be represented by JSON.
          return response.json();
          // Else block executes if the http response is not okay (http response is not 200).
        } else {
          // Throws an error.
          throw new Error ("The server could not be reached.");
        }
      })
      // If the web page response is okay, the degree data is processed.
      . then(data => {
          // A function is called to process the degree data stored in the JSON data.
          processDegreeData(data);
          // The HTML button is disabled to prevent the same degree data to be displayed on the web page.
          document.getElementById("button").disabled = true;
      })
      // Catches any errors.
      .catch(error => {
        const buttonElement = document.getElementById("button");
        // Error message is displayed in an element inserted after the button element on the web page.
        buttonElement.insertAdjacentHTML("afterend", "<p>Error: The degree data could not be fetched.</p>");
        // The caught error is logged to the console.
        console.log(error);
      })
    };

  // Calls the getDegrees() function with the appropriate GitHub Pages url as an argument.
  getDegrees("https://atocon.github.io/metcs601-assignment5/degrees.json");
};

/*
A function which uses a for loop to process the degree information stored in a JSON file on a GitHub Pages
web server. The degree information is inserted into an element which is added to the web page.
*/
function processDegreeData(data) {
  // Iterates through an array of degree information contained in a JSON file.
  for (let i=0; i<2; i++) {
    const degreeInfoElement = document.getElementById("degreeInfo");
    // Inserts a newly created element into the web page with degree information pulled from the JSON file.
    degreeInfoElement.insertAdjacentHTML("beforebegin", `<p>I earned a ${data.degree_data[i].degree.type} in 
    ${data.degree_data[i].degree.major} from ${data.degree_data[i].degree.school} in 
    ${data.degree_data[i].degree.year_conferred}.</p>`);
  }
};

// Utilizes an event listener to call the runFetch() function when an HTML button is clicked.
document.getElementById("button").addEventListener("click", runFetch);