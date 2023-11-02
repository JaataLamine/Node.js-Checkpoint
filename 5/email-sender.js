const nodemailer = require("nodemailer");

/**
 * Create a transporter
 * @param{String}service- Email address of the sender
 * @param{Object}auth- Object for authentification infos
 * @param{String}user- Email address of the sender
 * @param{String}pass- Password of the sender
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "123456",
  },
});

/**
 * {Object}mailOptions - Email info for sendEmail function
 * @param{String}from - Email address of the sender
 * @param{Array}to - recipients email address
 * @param{String}subject - Subject of the email
 * @param{String}text - Email body
 */
const mailOptions = {
  from: "youremail@gmail.com",
  to: "myotherfriend@yahoo.com",
  subject: "Node.js Checkpoint using nodemailer",
  text: "I am trying to send myself an email message using nodemailer, I hope everything will do well. So let's try it.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Email sent succesfully: ${info.messageId}`);
  }
});
