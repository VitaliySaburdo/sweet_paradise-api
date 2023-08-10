const express = require("express");
const users = require("./data")

const app = express();

module.exports = app;

app.get("/users", (req, res) => {
    res.send(users)
})