const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize("mail_reminder", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
