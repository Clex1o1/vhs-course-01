# Simple Express Server with EJS

This is the simplest possible setup for server-side rendering with Express and EJS.

## Setup

1. Install dependencies:

```bash
npm install express ejs
```

2. Create the following files:

`simple-server.js`:

```javascript
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
```

`views/index.ejs`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= title %></h1>
    <p><%= message %></p>
  </body>
</html>
```

## Running the Server

```bash
node simple-server.js
```

Visit http://localhost:3000 to see your rendered page.

## How it Works

1. Express is configured to use EJS as the view engine
2. When you visit the root route ('/'), Express renders the 'index' template
3. The template receives two variables: `title` and `message`
4. EJS replaces `<%= title %>` and `<%= message %>` with the actual values
5. The final HTML is sent to the browser

## Key Concepts

- `app.set('view engine', 'ejs')`: Tells Express to use EJS for rendering
- `app.set('views', './views')`: Sets the directory where templates are stored
- `res.render()`: Renders a template with data
- `<%= variable %>`: EJS syntax to output a variable's value

## Docs

[EJS](https://ejs.co/#install)
