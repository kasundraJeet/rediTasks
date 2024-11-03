const Task = require("../models/Task");
const logger = require("../utils/logger");
const {
  successResponse,
  successResponseWithData,
  errorResponse,
  notFoundResponse,
} = require("../utils/responseHandlers");

let tasksList = [
  {
    title: "Create Landing Page",
    description:
      "Develop a responsive landing page for the new product launch.",
    startDate: new Date("2024-11-02T09:00:00"),
    dueDate: new Date(
      new Date("2024-11-02T09:00:00").setDate(
        new Date("2024-11-02T09:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Setup Database",
    description: "Configure the database for the new application.",
    startDate: new Date("2024-11-03T10:00:00"),
    dueDate: new Date(
      new Date("2024-11-03T10:00:00").setDate(
        new Date("2024-11-03T10:00:00").getDate() + 7
      )
    ),
    status: "0",
    tags: ["Database", "SQL", "Backend"],
  },
  {
    title: "Write API Documentation",
    description: "Draft and finalize the API documentation for developers.",
    startDate: new Date("2024-11-04T11:00:00"),
    dueDate: new Date(
      new Date("2024-11-04T11:00:00").setDate(
        new Date("2024-11-04T11:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["API", "Documentation", "Technical Writing"],
  },
  {
    title: "Design Logo",
    description: "Create a new logo for the marketing campaign.",
    startDate: new Date("2024-11-05T12:00:00"),
    dueDate: new Date(
      new Date("2024-11-05T12:00:00").setDate(
        new Date("2024-11-05T12:00:00").getDate() + 7
      )
    ),
    status: "2",
    tags: ["Design", "Graphics", "Marketing"],
  },
  {
    title: "Conduct User Testing",
    description: "Plan and execute user testing for the new feature.",
    startDate: new Date("2024-11-06T13:00:00"),
    dueDate: new Date(
      new Date("2024-11-06T13:00:00").setDate(
        new Date("2024-11-06T13:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Testing", "UX", "Research"],
  },
  {
    title: "Develop Mobile App",
    description: "Create a mobile application for the project.",
    startDate: new Date("2024-11-07T14:00:00"),
    dueDate: new Date(
      new Date("2024-11-07T14:00:00").setDate(
        new Date("2024-11-07T14:00:00").getDate() + 7
      )
    ),
    status: "0",
    tags: ["Mobile", "Development", "Android"],
  },
  {
    title: "Setup CI/CD Pipeline",
    description: "Implement a CI/CD pipeline for automated deployments.",
    startDate: new Date("2024-11-08T15:00:00"),
    dueDate: new Date(
      new Date("2024-11-08T15:00:00").setDate(
        new Date("2024-11-08T15:00:00").getDate() + 7
      )
    ),
    status: "0",
    tags: ["DevOps", "Automation", "CI/CD"],
  },
  {
    title: "Prepare Marketing Strategy",
    description: "Draft a marketing strategy for the upcoming product.",
    startDate: new Date("2024-11-09T16:00:00"),
    dueDate: new Date(
      new Date("2024-11-09T16:00:00").setDate(
        new Date("2024-11-09T16:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Marketing", "Strategy", "Planning"],
  },
  {
    title: "Update Website Content",
    description: "Refresh the content on the main website for better SEO.",
    startDate: new Date("2024-11-10T17:00:00"),
    dueDate: new Date(
      new Date("2024-11-10T17:00:00").setDate(
        new Date("2024-11-10T17:00:00").getDate() + 7
      )
    ),
    status: "2",
    tags: ["Content", "SEO", "Web"],
  },
  {
    title: "Analyze Sales Data",
    description: "Review and analyze the latest sales data for insights.",
    startDate: new Date("2024-11-11T18:00:00"),
    dueDate: new Date(
      new Date("2024-11-11T18:00:00").setDate(
        new Date("2024-11-11T18:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Analytics", "Sales", "Data"],
  },
  {
    title: "Create User Personas",
    description: "Develop user personas for better product targeting.",
    startDate: new Date("2024-11-12T19:00:00"),
    dueDate: new Date(
      new Date("2024-11-12T19:00:00").setDate(
        new Date("2024-11-12T19:00:00").getDate() + 7
      )
    ),
    status: "0",
    tags: ["UX", "Research", "Personas"],
  },
  {
    title: "Build Newsletter Template",
    description: "Design a template for the monthly newsletter.",
    startDate: new Date("2024-11-13T20:00:00"),
    dueDate: new Date(
      new Date("2024-11-13T20:00:00").setDate(
        new Date("2024-11-13T20:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Email", "Design", "Marketing"],
  },
  {
    title: "Conduct Market Research",
    description: "Research market trends and customer preferences.",
    startDate: new Date("2024-11-14T21:00:00"),
    dueDate: new Date(
      new Date("2024-11-14T21:00:00").setDate(
        new Date("2024-11-14T21:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Research", "Market", "Trends"],
  },
  {
    title: "Implement Feedback System",
    description: "Create a feedback system for users to submit suggestions.",
    startDate: new Date("2024-11-15T22:00:00"),
    dueDate: new Date(
      new Date("2024-11-15T22:00:00").setDate(
        new Date("2024-11-15T22:00:00").getDate() + 7
      )
    ),
    status: "2",
    tags: ["Feedback", "User Experience", "Development"],
  },
  {
    title: "Plan Team Retreat",
    description: "Organize a team retreat for team building and planning.",
    startDate: new Date("2024-11-16T23:00:00"),
    dueDate: new Date(
      new Date("2024-11-16T23:00:00").setDate(
        new Date("2024-11-16T23:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Team", "Planning", "Retreat"],
  },
  {
    title: "Optimize Codebase",
    description: "Refactor and optimize the existing codebase for performance.",
    startDate: new Date("2024-11-17T09:00:00"),
    dueDate: new Date(
      new Date("2024-11-17T09:00:00").setDate(
        new Date("2024-11-17T09:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Development", "Code", "Performance"],
  },
  {
    title: "Launch Social Media Campaign",
    description:
      "Prepare and launch a social media campaign for product awareness.",
    startDate: new Date("2024-11-18T10:00:00"),
    dueDate: new Date(
      new Date("2024-11-18T10:00:00").setDate(
        new Date("2024-11-18T10:00:00").getDate() + 7
      )
    ),
    status: "1",
    tags: ["Social Media", "Campaign", "Marketing"],
  },
];

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
        $lt: new Date(new Date(targetDate).setDate(new Date(targetDate).getDate() + 1))
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

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
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
