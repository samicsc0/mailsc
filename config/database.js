require(dotenv).config()
const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize("mail_reminder", "postgres", process.env.DB_PASS), {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
