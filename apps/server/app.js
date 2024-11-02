const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./confing/db');
const taskRouter = require('./routes/taskRouter');
const requestLogger = require('./middlewares/logger');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();


connectDB();


app.use(bodyParser.json());
app.use(requestLogger);


app.use('/', taskRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
