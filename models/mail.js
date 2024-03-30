const Sequelize = require("sequelize");
const db = require("../config/database");

const Mail = db.define("mail", {
  mail_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: { type: Sequelize.STRING, allowNull: false },
  subject: Sequelize.STRING,
  message: Sequelize.STRING,
  duration: Sequelize.INTEGER,
});

module.exports = Mail;
