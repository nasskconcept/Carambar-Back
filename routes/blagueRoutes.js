const express = require("express");
const router = express.Router();
const blagueController = require("../controllers/blagueController");

// Endpoint pour ajouter une blague
router.post("/", blagueController.addJoke);
router.get("/", blagueController.getAllJokes);
router.get("/random", blagueController.getRandomJoke); // AVANT :id
router.get("/:id", blagueController.getJokeById);

module.exports = router;
