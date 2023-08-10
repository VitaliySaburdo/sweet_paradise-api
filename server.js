const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3030;

app.listen(PORT)
