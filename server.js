require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const users = require("./api/users");
const app = express();

app.use(bodyParser.json());
app.use("/users", users);
app.use("/orders", users);

app.get("/", (req, res) => res.send("hello world"));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen("3000", () => console.log("connected"));
