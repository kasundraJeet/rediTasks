const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
};

module.exports = requestLogger;
