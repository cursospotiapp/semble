require("dotenv").config();
const { logger } = require("./utils/logger");
const app = require("./app");

const port = process.env.PORT || 3000;

const start = () => {
  const appSever = app.listen(port, () => {
    logger.info(`Server running on port: ${port}`);
  });

  process.on("unhandledRejection", (err) => {
    logger.error("Ha ocurrido el siguiente error:", err.message);
    appSever.close(() => {
      process.exit(1);
    });
  });

  module.exports = appSever;
};

start();
