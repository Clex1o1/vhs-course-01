const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Set up EJS
app.set("view engine", "ejs");
app.set("views", "./views");

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];
// Simple route that renders a template
// /1/hallo
app.get("/:userId/:msg", (req, res) => {
  const userId = req.params.userId;
  const msg = req.params.msg;
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.render("index", {
    title: "Simple Server",
    message: `${msg} ${user.name}`,
  });
});

// /
// body {userId: 1, msg: "hallo"}
app.post("/", (req, res) => {
  const userId = req.body.userId;
  const msg = req.body.msg;
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.render("index", {
    title: "Simple Server",
    message: `${msg} ${user.name}`,
  });
});

// /?userId=1
app.get("/", (req, res) => {
  const userId = req.query.userId;
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.render("index", {
    title: "Simple Server",
    user,
    message: `${user.name}`,
  });
});

// login
const user = {
  username: "admin",
  password: "admin",
};
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === user.username && password === user.password) {
    res.render("logged-in", {
      title: "Logged In",
      message: "You are logged in",
    });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Simple Login",
    username: "",
    password: "",
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
