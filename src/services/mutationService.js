const axios = require("axios");
const { logger } = require("../utils/logger");
const mutationQueries = require("../queries/mutations");

const mutationService = {
  getToken: async () => {
    try {
      logger.info(`Llamada a metodo [getToken] `);

      const { data } = await axios.post(
        process.env.SEMBLE_API_URL,
        {
          query: mutationQueries.getToken,
          variables: {
            apiKey: process.env.SEMBLE_API_KEY,
            password: process.env.SEMBLE_ACCOUNT_PASSWORD,
          },
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      logger.info(`Metodo [getToken] resultado query: ${JSON.stringify(data)}`);

      return data.data.signIn.token;
    } catch (e) {
      logger.error(`Error en metodo: [getToken], descripcion: ${e} `);
      throw new Error("Error: ", e);
    }
  },

  postCita: async (infoCita) => {
    logger.info(
      `Llamada a metodo [postCita] parametros: bookingData: ${JSON.stringify(
        infoCita
      )}`
    );

    try {
      const { data } = await axios.post(
        process.env.SEMBLE_API_URL,
        {
          query: mutationQueries.postCita,
          variables: infoCita,
        },
        {
          headers: {
            "x-token": await mutationService.getToken(),
            "Content-type": "application/json",
          },
        }
      );

      if (data.errors) {
        logger.error(JSON.stringify(data.errors));
      }

      return data;
    } catch (e) {
      logger.error(`Error en metodo: [postCita], descripcion: ${e} `);
      throw new Error("Error: ", e);
    }
  },

  postCancelarCita: async (id) => {
    logger.info(`Llamada a metodo [postCancelarCita] parametros: id: ${id}`);

    try {
      const { data } = await axios.post(
        process.env.SEMBLE_API_URL,
        {
          query: mutationQueries.postCancelarCita,
          variables: {
            id,
          },
        },
        {
          headers: {
            "x-token": await mutationService.getToken(),
            "Content-type": "application/json",
          },
        }
      );

      if (data?.data?.deleteBooking?.error) {
        logger.error(
          JSON.stringify(
            `Error en metodo [postCancelarCita], descripcion: ${data?.data?.deleteBooking?.error}`
          )
        );
      }

      return data;
    } catch (e) {
      logger.error(`Error en metodo: [postCita], descripcion: ${e} `);
      throw new Error("Error: ", e);
    }
  },
};

module.exports = mutationService;
