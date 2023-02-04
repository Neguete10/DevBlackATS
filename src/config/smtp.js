const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mail.henriquemlima@gmail.com",
    pass: "tleuzipzswmdsglj",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
