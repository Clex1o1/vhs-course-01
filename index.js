// Importiere die benötigten Programme (Dependencies)
const express = require("express"); // Express ist ein Framework für Webserver
const app = express(); // Erstelle eine neue Express-Anwendung
const ejsExamplesRouter = require("./routes/ejs-examples"); // Importiere die EJS-Beispiele-Route
const expressLayouts = require("express-ejs-layouts"); // Importiere das Layout-System

// Konfiguriere EJS als Template-Engine
// EJS erlaubt uns, dynamische HTML-Seiten zu erstellen
app.set("view engine", "ejs");
app.set("views", "./templates"); // Ordner, in dem unsere Templates gespeichert sind

// Konfiguriere das Layout-System
// Dies erlaubt uns, ein einheitliches Layout für alle Seiten zu verwenden
app.use(expressLayouts);
app.set("layout", "layout"); // Standard-Layout für alle Seiten
app.set("layout extractScripts", true); // JavaScript-Dateien werden am Ende des Body-Tags eingefügt
app.set("layout extractStyles", true); // CSS-Dateien werden im Head-Bereich eingefügt

// Middleware für die Verarbeitung von Formulardaten
// Diese Zeilen sind wichtig, damit wir Daten von Formularen verarbeiten können
app.use(express.urlencoded({ extended: true })); // Verarbeitet Formulardaten
app.use(express.json()); // Verarbeitet JSON-Daten

// Verwende die EJS-Beispiele-Route
// Alle URLs, die mit /ejs beginnen, werden an diese Route weitergeleitet
app.use("/ejs", ejsExamplesRouter);

// Beispiel-Route für POST-Anfragen
// Diese Route antwortet einfach mit "OK" auf POST-Anfragen
app.get("/post", (req, res) => {
  res.send("OK");
});

// Hauptseite (Root-Route)
// Diese Route wird aufgerufen, wenn jemand die Startseite besucht
app.get("/", (req, res) => {
  // Sammle verschiedene Informationen über die Anfrage
  const body = req.body; // Daten aus dem Body der Anfrage
  const params = req.params; // URL-Parameter
  const query = req.query; // Query-String-Parameter (z.B. ?name=Max)
  const headers = req.headers; // HTTP-Header
  const cookies = req.cookies; // Cookies
  const ip = req.ip; // IP-Adresse des Besuchers
  const userAgent = req.userAgent; // Browser-Informationen

  // Gib die ausgewählte Option in der Konsole aus
  console.log(query.auswahl);

  // Sende alle gesammelten Informationen als JSON zurück
  res.status(200).json({
    body,
    params,
    query,
    headers,
    cookies,
    ip,
  });

  // Beispiele für andere mögliche Antworten (auskommentiert):
  // res.status(400).json({
  //     error: "Bad Request",
  // });

  // res.status(500).json({
  //     error: "Internal Server Error",
  // });
});

// Zweite Beispiel-Route
// Diese Route zeigt, wie man eine einfache Textnachricht zurückgibt
app.get("/route-2", (req, res) => {
  console.log("Diese Seite wurde besucht 3");
  res.send("Hello World 2");
});

// Starte den Server
// Der Server läuft auf Port 3000 und ist dann unter http://localhost:3000 erreichbar
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
