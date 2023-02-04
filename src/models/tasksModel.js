const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sorteado: {
    nome: { type: String, required: false},
    email: { type: String, required: false },
  },
});

module.exports = mongoose.model("tasksModel", taskSchema);
