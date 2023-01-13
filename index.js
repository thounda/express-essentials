// Import the express module
import express, { response } from "express";

// Import mock-data json file
import data from "./data/mock-data.json";

// create variable for the express module
const app = express();

// create variable for express port #
const PORT = 3000;

// Define a GET method to pull data from JSON file
app.get("/", (request, response) => {
  response.json(data);
});

// Define a POST method to establish a route
app.post("/create", (request, response) => {
  // Define a send method on the response to send a message to the established route
  response.send(`This is a POST request at /create`);
});

// Define a PUT method to establish a route
app.put("/edit", (request, response) => {
  // Define a send method on the response to send a message to the established route
  response.send(`This is a PUT request at /edit`);
});

// Define a DELETE method to establish a route
app.delete("/delete", (request, response) => {
  // Define a send method on the response to send a message to the established route
  response.send(`This is a DELETE request at /delete`);
});

// Specify the listening port for the express app
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
  // Display json data from file via CL
  console.log(data);
});
