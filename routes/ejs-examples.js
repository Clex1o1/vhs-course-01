// Importiere Express und erstelle einen Router
// Ein Router ist wie ein kleiner Server, der nur für bestimmte URLs zuständig ist
const express = require("express");
const router = express.Router();

// Startseite mit dynamischen Daten
// Diese Route wird aufgerufen, wenn jemand /ejs/ besucht
router.get("/", (req, res) => {
  // Erstelle Beispieldaten, die wir an die Seite übergeben
  const data = {
    title: "Welcome to My Express App", // Titel der Seite
    message: "This is a sample page using EJS", // Willkommensnachricht
    items: ["Item 1", "Item 2", "Item 3"], // Liste von Beispiel-Items
    user: {
      name: "John Doe", // Beispiel-Benutzerinformationen
      age: 30,
    },
  };
  // Rendere die index.ejs Seite mit den Daten
  res.render("index", data);
});

// Über uns Seite
// Diese Route wird aufgerufen, wenn jemand /ejs/about besucht
router.get("/about", (req, res) => {
  // Rendere die about.ejs Seite mit Titel und Inhalt
  res.render("about", {
    title: "About Us",
    content: "This is the about page content.",
  });
});

// Benutzerliste
// Diese Route wird aufgerufen, wenn jemand /ejs/users besucht
router.get("/users", (req, res) => {
  // /users?ort=Wuppertal
  // Erstelle eine Liste von Beispiel-Benutzern
  const ort = req.query.ort; // Wuppertal
  const users = [
    { name: "John", age: 30, ort: "Wuppertal" }, // stelle 0
    { name: "Jane", age: 25, ort: "Solingen" }, // stelle 1
    { name: "Bob", age: 35, ort: "Wuppertal" }, // stelle 2
  ];

  let filteredUsers = []; // leere Liste
  for (let i = 0; i < users.length; i++) {
    const user = users[i]; //  { name: "John", age: 30, ort: "Wuppertal" }
    if (user.ort === ort) {
      filteredUsers.push(user); //  [{ name: "Jane", age: 25, ort: "Solingen" }]
    }
  }

  // Rendere die users.ejs Seite mit der Benutzerliste
  // { filteredUsers: filteredUsers }
  res.render("users", { users: filteredUsers, title: "Users List" });
});

// Einzelne Benutzerseite
// Diese Route wird aufgerufen, wenn jemand /ejs/users/1 (oder eine andere ID) besucht
// :userId ist ein Platzhalter für die tatsächliche Benutzer-ID
router.get("/users/:userId/:name", (req, res) => {
  // Erstelle eine Liste von Beispiel-Benutzern
  const userId = req.params.userId;
  const name = req.params.name;
  const list1 = [userId, name, age];
  let age = req.query.age;

  // Ort + BenutzerID
  console.log(userId, name, age);
  const users = [
    { name: "John", age: 30, ort: "Wuppertal" },
    { name: "Jane", age: 25, ort: "Solingen" },
    { name: "Bob", age: 35, ort: "Remscheid" },
  ];

  // Rendere die users.ejs Seite mit der Benutzerliste
  res.render("users", { users, title: "Users List" });
});

var bastelItems = [];

router.get("/bastel-item", (req, res) => {
  const name = req.query.name;
  const color = req.query.color;
  bastelItems.push({ name: name, color: color });

  const search = req.query.search;
  let searchResult;
  for (let i = 0; i < bastelItems.length; i++) {
    if (bastelItems[i].color === search) {
      searchResult = bastelItems[i];
    }
  }
  res.json({ searchResult });
});

// Exportiere den Router, damit er in index.js verwendet werden kann
module.exports = router;
