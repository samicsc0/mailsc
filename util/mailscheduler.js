const nodeschedule = require('node-schedule');
const mailSender = require("./mailsender");

const mailScheduler = (minutes, email, subject, message, mailId) => {
  console.log("cron triggered");
  nodeschedule.scheduleJob(`*/${minutes} * * * *`, async () => {
    mailSender(email, subject, message, mailId)
  });
};

module.exports = mailScheduler;