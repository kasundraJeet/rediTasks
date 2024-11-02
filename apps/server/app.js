const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const connectDB = require("./confing/db");
const cors = require("cors");
const taskRouter = require("./routes/taskRouter");
const requestLogger = require("./middlewares/logger");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");

dotenv.config();
const app = express();

const upload = multer();
app.use(upload.none());

connectDB();

app.use(bodyParser.json());
app.use(requestLogger);

app.use(cors());

app.use("/", taskRouter);

app.use((req, res, next) => {
  logger.error("Route not found", error);
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
