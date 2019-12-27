"use strict";
const sgMail = require("@sendgrid/mail");

module.exports.sendgridTest = async event => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "test@example.com",
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  sgMail.send(msg);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "mail send"
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
