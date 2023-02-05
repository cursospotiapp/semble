const { format, createLogger, transports } = require("winston");

const { combine, timestamp, label, printf } = format;

const customFormat = printf(
  // eslint-disable-next-line no-shadow
  ({ level, message, label, timestamp }) =>
    `${timestamp} [${label}] ${level}: ${message}`
);

const logger = createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: combine(
    label({ label: process.env.APP_ID || "SEMBLE_API" }),
    timestamp({
      format: "DD/MM/YYYY HH:mm:ss",
    }),
    customFormat
  ),
  transports: [new transports.Console()],
});

module.exports = { logger };
