const queriesService = require("../services/queriesService");

const obtenerDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { fechaCitaInicio, fechaCitaFin } = req.query;

    const doctor = await queriesService.getDoctor(
      id,
      fechaCitaInicio,
      fechaCitaFin
    );

    return res.json(doctor);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

const obtenerDoctores = async (req, res) => {
  try {
    const { fechaCitaInicio, fechaCitaFin } = req.query;

    const doctores = await queriesService.getDoctores(
      fechaCitaInicio,
      fechaCitaFin
    );

    return res.json(doctores);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

module.exports = {
  obtenerDoctor,
  obtenerDoctores,
};
