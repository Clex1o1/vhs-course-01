# Simple Server

## Struktur

- `index.html`: Eine einfache Startseite
- `aufgabe2.html`: Erste Schritte mit CSS
- `aufgabe3.html`: Fortgeschrittene CSS-Techniken
- `aufgabe4.html`: Komplexere Layouts und Interaktionen

---

- `simple-server.js`: Ein minimaler Express-Server
- Grundlegende Server-Konfiguration
- Einfache Routen
- Statische Dateien ausliefern

---

- `index.js`: Hauptserver mit Template-Engine
- `routes/`: Verschiedene Routen für unterschiedliche Seiten
- `templates/`: Wiederverwendbare HTML-Templates
  - `layout.ejs`: Grundgerüst für alle Seiten
  - `index.ejs`: Startseite mit dynamischen Daten
  - `about.ejs`: Über uns Seite
  - `users.ejs`: Benutzerliste mit Tabellen

### Voraussetzungen

- Node.js (eine Software, die JavaScript außerhalb des Browsers ausführen kann)
- Ein Texteditor (wie VS Code)

### Installation

1. Öffne die Kommandozeile (Terminal)
2. Navigiere in den Projektordner
3. Führe folgende Befehle aus:
   ```bash
   npm install
   ```
   Dies installiert alle benötigten Programme (sogenannte "Dependencies")

### Starten des Servers

Je nach Lernphase kannst du verschiedene Server starten:

```bash
npm run server:start:simple
# oder
npm run server:start
```

Der Server läuft dann unter: http://localhost:3000

## 📁 Projektstruktur

```
.
├── index.html, aufgabe2.html, ...  # Phase 1: HTML & CSS Beispiele
├── simple-server.js                # Phase 2: Einfacher Express-Server
├── index.js                        # Phase 3: Hauptserver
├── routes/                         # Phase 3: Routen
│   └── ejs-examples.js
└── templates/                      # Phase 3: Templates
    ├── layout.ejs
    ├── index.ejs
    ├── about.ejs
    └── users.ejs
```

## 🛠️ Technische Details

- HTML5 für die Struktur
- CSS3 für das Design
- Express.js als Webserver-Framework
- EJS als Template-Engine
- Bootstrap für das Design-Framework

## 📚 Nächste Schritte

Nach diesem Kurs solltest du:

- Verstehen, wie Webseiten aufgebaut sind
- Eigene HTML-Seiten mit CSS gestalten können
- Einen einfachen Webserver erstellen können
- Dynamische Webseiten mit Templates bauen können
- Daten verarbeiten und anzeigen können

Viel Erfolg beim Lernen! 🎉
