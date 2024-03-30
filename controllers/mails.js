const History = require("../models/history");
const Mail = require("../models/mail");
const mailScheduler = require("../util/mailscheduler");

exports.createMail = (req, res, next) => {
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const duration = req.body.duration;
  Mail.create({
    email: email,
    subject: subject,
    message: message,
    duration: duration,
  })
    .then((result) => {
      console.log("Created a mail");
      mailScheduler(
        duration,
        email,
        subject,
        message,
        result.mail_id
      );
      res.status(201).json({ message: "Created a mail", mail: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.insertHistory = (req, res, next) => {
  const mailId = req.body.mailId;
  const deliveryStatus = req.body.deliveryStatus;
  History.create({
    mailId: mailId,
    deliveryStatus: deliveryStatus,
  }).then((result) => {
    res.status(201).json({ message: "Inserted a new mail", mail: result });
  });
};

exports.getHistory = (req, res, next) => {
  const mailId = req.params.mailId;
  History.findAll({
    where: {
      mailId: mailId,
    },
  }).then((result) => {
    res.status(200).json({ mails: result });
  });
};
