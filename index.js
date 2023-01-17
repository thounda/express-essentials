// Import the express module
import express, { request, response } from "express";

// Import mock-data json file
import data from "./data/mock-data.json";

// create variable for the express module
const app = express();

// create variable for express port #
const PORT = 3000;

// Define middleware function, express.static to serve static file from 'public' folder
app.use(express.static("public"));

// Using the images folder at the route /images
app.use("/images", express.static("images"));

// Define a GET method to pull data from JSON file
app.get("/", (request, response) => {
  response.json(data);
});

// Define a GET method with next() function - Route Handler
app.get(
  "/next",
  (request, response, next) => {
    console.log(`The response will be sent by the next function.`);
    // 1st callback function - next() - set within the route handler
    next();
  },
  // 2nd callback function within route handler
  (request, response) => {
    response.send(`I just set up a route with a second callback!`);
  }
);

// GET with Routing Parameters
app.get("/class/:id", (request, response) => {
  // console.log(request.params);  // echo param to terminal
  // set constant and convert param to a number
  const studentId = Number(request.params.id);
  // Set constant to mock JSON data which is an array
  /*  // Return the student from mock data - matching studentID - via a filter */
  const student = data.filter((student) => student.id === studentId);
  // Pass the response using the method SEND to client
  response.send(student);
});

// Route parameters are stored in the request under the property params

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
  // console.log(data);
});
