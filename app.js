const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const authRouter = require("./routes/api/auth");
const productsRouter = require("./routes/api/products");
const categoriesRouter = require("./routes/api/categories");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));

app.use("/users", authRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/static", express.static(__dirname + "/static"));
app.use("/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
// 503

module.exports = app;
