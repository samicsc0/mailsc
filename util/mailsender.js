const { insertHistory } = require("../controllers/mails");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'process.env.DOMAIN ', key: process.env.MAILGUN_API_KEY});
function mailSender (receiver, subject, message, mailId){
  console.log("send mail called");
  return mg.messages
    .create("sandbox-123.mailgun.org", {
      from: "Excited User <mailgun@sandbox-123.mailgun.org>",
      to: receiver,
      subject: subject,
      text: message,
      html: "<h1>Testing some Mailgun awesomeness!</h1>",
    })
    .then((msg) => {
      console.log(`email sent to ${receiver}`);
      insertHistory(
        {
          body: {
            mailId: mailId,
            deliveryStatus: true,
          },
        },
        { status: 201, json: {} }
      );
    })
    .catch((err) => {
      insertHistory(
        {
          body: {
            mailId: mailId,
            deliveryStatus: false,
          },
        },
        { status: 201, json: {} }
      );
    });
};

 module.exports = mailSender;
