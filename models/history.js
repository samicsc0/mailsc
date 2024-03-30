const Sequelize = require("sequelize");
const db = require("../config/database");
const Mail = require("./mail");

const History = db.define("history", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  mailId: Sequelize.INTEGER,
  deliveryStatus: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
History.belongsTo(Mail, { foreignKey: "mailId" });
module.exports = History;
