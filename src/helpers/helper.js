const smtp = require("../config/smtp");

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

async function linkarParticipantes(allDocs, counter) {
  
  for (let i = 0; i < counter; i++) {
    
    const current = allDocs[i];

    if (i == counter - 1) {
      current.sorteado = allDocs[0];
      await current.save();
    } else {
      const next = allDocs[i+1];
      current.sorteado = next;
      await current.save();
    }
  }
}

async function sendAllEmails(allDocs, counter) {
  for (let i = 0; i < counter; i++) {
    const current = allDocs[i];

    await smtp.transporter.sendMail({
      text:
        "Segue as informacoes com relacao ao sorteio do amigo oculto, parabens voce tirou " +
        current.sorteado.nome,
      subject: "Amigo Oculto Sorteio",
      from: "Sorteio <mail.henriquemlima@gmail.com>",
      to: current.email,
    });
  }
}
module.exports = { shuffle, linkarParticipantes, sendAllEmails };
