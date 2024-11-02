const Task = require('../models/Task');
const logger = require('../utils/logger');


exports.createTask = async (req, res) => {
  try {
    const { title, description, startDate, dueDate } = req.body;
    const task = await Task.create({ title, description, startDate, dueDate });
    logger.info('Task created successfully');
    res.status(201).json(task);
  } catch (error) {
    logger.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    logger.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
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
      return res.status(404).json({ error: 'Task not found' });
    }
    logger.info(`Task ${id} updated successfully`);
    res.json(task);
  } catch (error) {
    logger.error(`Error updating task ${id}:`, error);
    res.status(500).json({ error: 'Failed to update task' });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    logger.info(`Task ${id} deleted successfully`);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    logger.error(`Error deleting task ${id}:`, error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
