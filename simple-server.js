const express = require("express");
const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Simple route that renders a template
app.get("/", (req, res) => {
  res.render("index", {
    title: "Simple Server",
    message: "Hello from Server!",
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
