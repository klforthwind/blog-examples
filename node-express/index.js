const express = require("express");
const app = express();

// Get Request
app.get("/", (request, response) => {
    response.send(`This is an Express Api!`);
});

// Post Request
app.post("/dragon", (req, res) => {
    res.send(`You have reached the dragon`);
});

// Any Request
app.use("/wolf", (req, res) => {
    res.send(`You have reached the wolf`);
});

// Get Request With Query
app.get("/monkey", (req, res) => {
    res.send(`This is an ${req.query.name} Api!`);
});

// Get Request With Query
app.get("/cat/:name", (req, res) => {
    res.send(`This is an ${req.params.name} Api!`);
});

// Get Request With Query
app.get("/lemur:name", (req, res) => {
    res.send(`This is an ${req.params.name} Api!`);
});

app.listen(4000);

console.log("SERVER IS RUNNING! :) ");