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
app.post("/wolf", (req, res) => {
    res.send(`You have reached the wolf`);
});

// Get Request With Query
app.get("/wolf", (req, res) => {
    res.send(`This is an ${req.query.name} Api!`);
});

// Get Request With Query
app.get("/dragon:name", (req, res) => {
    res.send(`This is an ${req.param.name} Api!`);
});

app.listen(4000);

console.log("SERVER IS RUNNING! :) ");