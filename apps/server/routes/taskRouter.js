const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/tasks", taskController.createTask);
router.get("/tasks", taskController.getTasks);
router.put("/tasks/:id", taskController.updateTask);
router.post("/status-update/:id", taskController.updateStatus);

module.exports = router;
