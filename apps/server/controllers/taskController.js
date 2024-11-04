const Task = require("../models/Task");
const logger = require("../utils/logger");
const {
  successResponse,
  successResponseWithData,
  errorResponse,
  notFoundResponse,
} = require("../utils/responseHandlers");

exports.createTask = async (req, res) => {
  try {
    const { title, description, startDate, dueDate } = req.body;
    const task = await Task.create({ title, description, startDate, dueDate });
    logger.info("Task created successfully");
    successResponseWithData(res, "Task created successfully", task);
  } catch (error) {
    logger.error("Error creating task:", error);
    errorResponse(res, "Failed to create task");
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { status, date } = req.query;
    let filter = {};

    if (status) {
      filter.status = status;
    }
    if (date) {
      const targetDate = new Date(date).toISOString().split("T")[0];
      filter.startDate = {
        $gte: new Date(targetDate),
        $lt: new Date(
          new Date(targetDate).setDate(new Date(targetDate).getDate() + 1)
        ),
      };
    }

    const tasks = await Task.find(filter);

    successResponseWithData(res, "Tasks retrieved successfully", tasks);
  } catch (error) {
    logger.error("Error fetching tasks:", error);
    errorResponse(res, "Failed to retrieve tasks");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, startDate, dueDate, isCompleted } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, startDate, dueDate, isCompleted },
      { new: true }
    );
    if (!task) {
      return notFoundResponse(res, "Task not found");
    }
    logger.info(`Task ${id} updated successfully`);
    successResponseWithData(res, "Task updated successfully", task);
  } catch (error) {
    logger.error(`Error updating task ${id}:`, error);
    errorResponse(res, "Failed to update task");
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!task) {
      return notFoundResponse(res, "Task not found");
    }
    logger.info(`Task ${id} deleted successfully`);
    successResponse(res, "Task deleted successfully");
  } catch (error) {
    logger.error(`Error deleting task ${id}:`, error);
    errorResponse(res, "Failed to delete task");
  }
};
