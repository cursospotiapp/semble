const { logger } = require("../utils/logger");
const queries = require("../queries/queries");
const apiCallGraphQL = require("./shared/apiCallGraphQL");

const queriesService = {
  getPaciente: (id, start, end) => {
    logger.info(
      `Llamada a metodo [getPaciente] con id: ${id}, start: ${start}, end: ${end}`
    );
    return apiCallGraphQL(queries.getPaciente, { id, start, end });
  },

  getPacientes: (search, start, end) => {
    logger.info(
      `Llamada a metodo [getPacientes] parametros: search: ${search}, start: ${start}, end: ${end}`
    );
    return apiCallGraphQL(queries.getPacientes, { search, start, end });
  },

  getDoctores: async (start, end) => {
    logger.info(
      `Llamada a metodo [getDoctores] con parametros: start: ${start}, end: ${end}`
    );
    return apiCallGraphQL(queries.getDoctores, { start, end });
  },

  getDoctor: async (id, start, end) => {
    logger.info(
      `Llamada a metodo [getDoctor] con parametros: id: ${id}, start. ${start}, end: ${end} `
    );
    return apiCallGraphQL(queries.getDoctor, { id, start, end });
  },
};

module.exports = queriesService;
