const express = require('express');
const { createTask,updateTask, getTasks, deleteTask } = require('../controllers/task');

const router = express.Router();

router.post("/createtask", createTask);
router.patch("/updatetask/:taskId", updateTask)
router.get("/gettasks", getTasks)
router.delete("/deletetask/:taskId",deleteTask)
module.exports = router;
