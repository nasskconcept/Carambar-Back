const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const joke = sequelize.define("Joke", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = joke;
