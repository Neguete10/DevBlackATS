const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.HOST,
  port: SMTP_CONFIG.PORT,
  secure: false,
  auth: {
    user: SMTP_CONFIG.USER,
    pass: SMTP_CONFIG.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run(){
  const mailSent = await transporter.sendMail({
    text: "Texto do Email",
    subject: "Assunto do Email",
    from: "Henrique Lima <hmedeirosdelima@cedarville.edu>",
    to: "henriquemlima@hotmail.com",    
  })
}
//run();

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function linkarParticipantes(array) {

  
}

module.exports = { shuffle, linkarParticipantes };
