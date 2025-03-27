const express = require("express");
const app = express();
const ejsExamplesRouter = require('./routes/ejs-examples');
const expressLayouts = require('express-ejs-layouts');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', './templates');

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Set the default layout
app.set("layout extractScripts", true); // Extract scripts to the end of the body
app.set("layout extractStyles", true); // Extract styles to the head

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the EJS examples router
app.use('/ejs', ejsExamplesRouter);

app.get("/post", (req, res) => {
    res.send("OK")
})

app.get("/", (req, res) => {
    const body = req.body;
    const params = req.params;
    const query = req.query;
    const headers = req.headers;
    const cookies = req.cookies;
    const ip = req.ip;
    const userAgent = req.userAgent;

    console.log(query.auswahl)
    
    res.status(200).json({
        body,
        params,
        query,
        headers,
        cookies,
        ip,
    });
    
    // res.status(400).json({
    //     error: "Bad Request",
    // });
    
    // res.status(500).json({
    //     error: "Internal Server Error",
    // });
});

app.get("/route-2", (req, res) => {
    console.log("Diese Seite wurde besucht 3");
    res.send("Hello World 2");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});