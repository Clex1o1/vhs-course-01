const express = require('express');
const router = express.Router();

// Home page with dynamic data
router.get("/", (req, res) => {
    const data = {
        title: "Welcome to My Express App",
        message: "This is a sample page using EJS",
        items: ["Item 1", "Item 2", "Item 3"],
        user: {
            name: "John Doe",
            age: 30
        }
    };
    res.render('index', data);
});

// About page
router.get("/about", (req, res) => {
    res.render('about', {
        title: "About Us",
        content: "This is the about page content."
    });
});

// Users list page
router.get("/users", (req, res) => {
    const users = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
  ];
  res.render("users", { users, title: "Users List" });
});

module.exports = router; 