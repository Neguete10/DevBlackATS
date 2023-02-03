const express = require("express");
const tasksController = require("../controllers/tasksController");
const tasksMiddleware = require("../middleware/tasksMiddleware");
const router = express.Router();

router.get("/", tasksController.getAll);
router.post("/create", tasksMiddleware.validateName, tasksMiddleware.validateEmail, tasksController.createTask);
router.get("/getById/:id", tasksController.getById);
router.post("/updateTask/:id",  tasksMiddleware.validateName, tasksMiddleware.validateEmail, tasksController.updateTask);
router.get("/deleteTask/:id", tasksController.deleteTask);
router.get("/smtp", tasksController.sorteio);

/*
router.get('/loggin', tasksController.logginPage);
router.get('/signup', tasksController.signupPage);
router.get('/main', tasksController.getUser);


router.post('/newuser', tasksController.createUser);

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateTitle, tasksMiddleware.validateStatus, tasksController.updateTask);
*/
module.exports = router;
