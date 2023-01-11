// Import the express module
import express from "express";

// create variable for the express module
const app = express();

// create variable for express port #
const PORT = 3000;

// Specify the listening port for the express app
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
