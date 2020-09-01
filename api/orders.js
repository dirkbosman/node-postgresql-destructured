// Create `post`, `delete` and `put` routes for orders (like it's been done for users).

const express = require("express");
const api = express.Router();

const db = require("../dbinit");

api.get("/", (req, res, next) => {
  db.query("SELECT * FROM orders;")
    .then((data) => res.json(data.rows))
    .catch((e) => next(e));
});

api.get("/:id", (req, res, next) => {
  const { id } = req.params;
  db.query("SELECT * FROM orders WHERE id=$1;", [id])
    .then((data) => res.json(data.rows))
    .catch((e) => next(e));
});

// id  SERIAL PRIMARY KEY,
// price float,
// date timestamp,
// user_id int,
// FOREIGN KEY (user_id) REFERENCES users(id)

api.post("/", (req, res, next) => {
  const { name } = req.body;

  db.query("INSERT INTO orders(first_name) values($1);", [name])
    .then((data) => res.status(201).json(data))
    .catch((e) => next(e));
});

api.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  db.query("DELETE FROM orders WHERE id=$1;", [id])
    .then((data) => res.status(201).json(data))
    .catch((e) => next(e));
});

api.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  db.query("UPDATE orders SET first_name=$1 WHERE id=$2;", [name, id])
    .then((data) => res.status(201).json(data))
    .catch((e) => next(e));
});

module.exports = api;
