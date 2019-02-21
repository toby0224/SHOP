const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "daklaksql", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
