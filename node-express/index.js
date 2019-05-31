const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("This is an Express Api!");
});

app.get("/dragon", (req, res) => {
    response.send("You have reached the dragon");
});

app.listen(4000);

console.log("SERVER IS RUNNING! :) ");