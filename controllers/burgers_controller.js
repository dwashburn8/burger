const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const data = await burger.all();

  res.render("index", { burger: data });
});

router.post("/api/burgers", async (req, res) => {
  const data = await burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy]);

  res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  const data = await burger.update({ sleepy: req.body.sleepy }, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;