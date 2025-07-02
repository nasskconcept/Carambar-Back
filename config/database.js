const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./blagues.sqlite",
  logging: false,
});

module.exports = sequelize;
