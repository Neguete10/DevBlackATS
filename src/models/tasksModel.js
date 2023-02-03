const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  sorteado: {
    type: String,
  },
});

module.exports = mongoose.model("tasksModel", taskSchema);
