// Get the button and output elements
const helloButton = document.getElementById("helloButton");
const output = document.getElementById("output");

// Add a click event listener to the button
helloButton.addEventListener("click", function() {
  // Update the output element with "Hello, World"
  output.innerText = "Hello, World";
});
