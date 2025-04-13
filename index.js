// Importiere die benötigten Programme (Dependencies)
const express = require("express"); // Express ist ein Framework für Webserver
const app = express(); // Erstelle eine neue Express-Anwendung
const ejsExamplesRouter = require("./routes/ejs-examples"); // Importiere die EJS-Beispiele-Route
const sqlExamplesRouter = require("./routes/sql-examples"); // Importiere die SQL-Beispiele-Route
const expressLayouts = require("express-ejs-layouts"); // Importiere das Layout-System
const path = require("path");
const { initializeDatabase, insertSampleData } = require("./db/setup");

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

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Initialize database and insert sample data
// initializeDatabase();
// insertSampleData();

// Verwende die EJS-Beispiele-Route
// Alle URLs, die mit /ejs beginnen, werden an diese Route weitergeleitet
app.use(ejsExamplesRouter);

// Verwende die SQL-Beispiele-Route
// Alle URLs, die mit /sql-examples beginnen, werden an diese Route weitergeleitet
app.use("/sql-examples", sqlExamplesRouter);

// Starte den Server
// Der Server läuft auf Port 3000 und ist dann unter http://localhost:3000 erreichbar
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
