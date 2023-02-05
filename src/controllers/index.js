const obtenerPacientes = require("./pacientes");
const obtenerDoctores = require("./doctores");
const citas = require("./citas");

module.exports = { ...obtenerPacientes, ...obtenerDoctores, ...citas };
