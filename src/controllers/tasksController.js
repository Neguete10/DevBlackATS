const tasksModel = require("../models/tasksModel");
const helper = require("../helpers/helper");

const getAll = async (_request, response) => {
  try {
    const tasksList = await tasksModel.find();
    const Participantes = await tasksModel.count();
    return response.render("index", { edit: false, tasksList, Participantes });
  } catch (err) {
    response.status(500).send({ error: err.message });
  }
};

const createTask = async (request, response) => {
  try {
    await tasksModel.create(request.body);
    response.redirect("/");
  } catch (err) {
    console.log(err);
    response.status(500).send({ error: err.message });
  }
};

const deleteTask = async (request, response) => {
  try {
    await tasksModel.deleteOne({ _id: request.params.id });
    response.redirect("/");
  } catch (err) {
    response.status(500).send({ error: err.message });
  }
};

const getById = async (request, response) => {
  try {
    const { id } = request.params;
    const task = await tasksModel.findOne({ _id: id });
    const tasksList = await tasksModel.find();
    const Participantes = await tasksModel.count();
    response.render("index", { edit: true, task, tasksList, Participantes });
  } catch (err) {
    response.status(500).send({ error: err.message });
  }
};

const updateTask = async (request, response) => {
  try {
    const { id } = request.params;
    const task = request.body;
    await tasksModel.updateOne({ _id: id }, task);
    response.redirect("/");
  } catch (err) {
    response.status(500).send({ error: err.message });
  }
};

const sorteio = async (req, res) => {
  try {    
    const tasksList = await tasksModel.find();
    const counter = await tasksModel.count();
    const sortedArray = helper.shuffle(tasksList);
    await helper.linkarParticipantes(sortedArray, counter);
    //await helper.sendAllEmails(sortedArray, counter);
    res.redirect("/lista");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const lista = async (_req, res) => {
  try {
    const tasksList = await tasksModel.find();
    res.render("final", { tasksList });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  createTask,
  getById,
  deleteTask,
  updateTask,
  sorteio,
  lista,
};
