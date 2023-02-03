//const { request, response } = require('express');
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
    helper.shuffle(tasksList);  
    helper.linkarParticipantes(tasksList);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

//********************************************************************* */

const indexPage = async (_request, response) => {
  response.render("index", { title: "Amigo Secreto" });
};

const logginPage = async (_request, response) => {
  response.render("loggin", { title: "Log-in" });
};

const signupPage = async (_request, response) => {
  response.render("signup", { title: "Sign-up" });
};

const createUser = async (request, response) => {
  const createdUser = await tasksModel.createUser(request.body);
  return response.status(201).json(createdUser);
};

const getUser = async (request, response) => {
  const gotUser = await tasksModel.getUser(request.body);
  return response.status(200).json(gotUser);
};

module.exports = {
  getAll,
  createTask,
  getById,
  deleteTask,
  updateTask,
  sorteio,
  indexPage,
  logginPage,
  signupPage,
  createUser,
  getUser,
};
