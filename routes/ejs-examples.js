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
  // Erstelle eine Liste von Beispiel-Benutzern
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
  ];
  // Rendere die users.ejs Seite mit der Benutzerliste
  res.render("users", { users, title: "Users List" });
});

// Einzelne Benutzerseite
// Diese Route wird aufgerufen, wenn jemand /ejs/users/1 (oder eine andere ID) besucht
// :userId ist ein Platzhalter für die tatsächliche Benutzer-ID
router.get("/users/:userId", (req, res) => {
  // Erstelle eine Liste von Beispiel-Benutzern
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
  ];
  // Rendere die users.ejs Seite mit der Benutzerliste
  res.render("users", { users, title: "Users List" });
});

// Exportiere den Router, damit er in index.js verwendet werden kann
module.exports = router;
