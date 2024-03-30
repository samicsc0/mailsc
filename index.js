const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./config/database");
const Mail = require("./models/mail");
const History = require("./models/history");
const sendEmail = require("./util/mailsender");

const app = express();
app.use(express.json());
app.get("/test", (request, response) => {
  response.status(200).json({ message: "running" });
});
app.use("/mail", require("./routes/mail"));

app.use((error, request, response, next) => {
  response.status(error.statusCode).json({ message: error.message });
});

sequelize
  .sync()
  .then((result) => {
    console.log("database connected");
    app.listen(3000);
  })
  .catch((error) => console.log(error));
