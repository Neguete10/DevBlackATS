const express = require("express");
const tasksController = require("../controllers/tasksController");
const router = express.Router();

router.get("/", tasksController.getAll);
router.post("/create", tasksController.createTask);
router.get("/getById/:id", tasksController.getById);
router.post("/updateTask/:id", tasksController.updateTask);
router.get("/deleteTask/:id", tasksController.deleteTask);
router.get("/smtp", tasksController.sorteio);
router.get("/lista", tasksController.lista);
router.get("/novoSorteio", tasksController.novoSorteio);

//Error handler
router.get("*", tasksController.error);
router.post("*", tasksController.error);


module.exports = router;
