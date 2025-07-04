const Joke = require("../models/joke");

// POST /api/v1/blagues
exports.addJoke = async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res
      .status(400)
      .json({ error: "Merci de fournir une question ET une réponse." });
  }
  try {
    const joke = await Joke.create({ question, answer });
    res.status(201).json(joke);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'ajout de la blague." });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des blagues." });
  }
};

// GET /api/v1/blagues/:id
exports.getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByPk(id);
    if (!joke) {
      return res
        .status(404)
        .json({ error: "Erreur lors de la récupération de la blague." });
    }
    res.json(joke);
  } catch (err) {
    res
      .status(500)
      .json({ error: "erreur lors de la récupérztion de la blague." });
  }
};

// GET /api/v1/blagues/random
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    if (count === 0) {
      return res.status(404).json({ error: "Aucune blague trouvée." });
    }
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });
    res.json(joke);
  } catch (err) {
    res.status(500).json({
      error: "Erreur lors de la récupération de la blague aléatoire.",
    });
  }
};
