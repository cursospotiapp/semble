const { logger } = require("../utils/logger");

const queryLogger = (req, _, next) => {
  const queryParams = req.query;
  const pathParams = req.params;
  const reqBody = req.body;
  logger.info(
    `${req.method}: ${req.originalUrl}, req.query: ${JSON.stringify(
      queryParams
    )}, req.params: ${JSON.stringify(pathParams)}, req.body: ${JSON.stringify(
      reqBody
    )}`
  );
  next();
};

module.exports = { queryLogger };
