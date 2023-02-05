require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const swaggerUI = require("swagger-ui-express");
const OpenApiValidator = require("express-openapi-validator");
const yaml = require("yamljs");

const { queryLogger } = require("./middlewares");
const routerSemble = require("./routes/routerSemble");

const app = express();
const swaggerDoc = yaml.load(path.join(__dirname, "./api/semble.yaml"));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(
  OpenApiValidator.middleware({
    apiSpec: swaggerDoc,
    validateRequests: true,
    validateResponses: false,
    validateFormats: "full",
  })
);

app.use(queryLogger);
app.use("/api-semble/v1", routerSemble);

module.exports = app;
