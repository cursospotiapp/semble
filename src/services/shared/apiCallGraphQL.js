const axios = require("axios");
const { logger } = require("../../utils/logger");
const mutationService = require("../mutationService");

const apiCallGraphQL = async (query, variables) => {
  try {
    const { data } = await axios.post(
      process.env.SEMBLE_API_URL,
      {
        query,
        variables,
      },
      {
        headers: {
          "x-token": await mutationService.getToken(),
          "Content-type": "application/json",
        },
      }
    );

    return data.data;
  } catch (e) {
    logger.error(`Error en metodo: [apiCallGraphQL], descripcion: ${e} `);
    throw new Error("Error: ", e);
  }
};

module.exports = apiCallGraphQL;
