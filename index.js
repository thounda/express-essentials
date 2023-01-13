// Import the express module
import express from "express";

// Import mock-data json file
import data from "./data/mock-data.json";

// create variable for the express module
const app = express();

// create variable for express port #
const PORT = 3000;

// Specify the listening port for the express app
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
  // Display json data from file via CL
  console.log(data);
});
