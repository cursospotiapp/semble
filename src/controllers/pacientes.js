const queriesService = require("../services/queriesService");

const obtenerPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const { fechaCitaInicio, fechaCitaFin } = req.query;
    const pacientes = await queriesService.getPaciente(
      id,
      fechaCitaInicio,
      fechaCitaFin
    );

    return res.json(pacientes);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

const obtenerPacientes = async (req, res) => {
  try {
    const { name, fechaCitaInicio, fechaCitaFin } = req.query;
    const pacientes = await queriesService.getPacientes(
      name,
      fechaCitaInicio,
      fechaCitaFin
    );

    return res.json(pacientes);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

module.exports = {
  obtenerPaciente,
  obtenerPacientes,
};
