const mutationService = require("../services/mutationService");

const concertarCita = async (req, res) => {
  try {
    const bookingData = req.body;
    const cita = await mutationService.postCita(bookingData);

    return res.json(cita);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

const cancelarCita = async (req, res) => {
  try {
    const { id } = req.params;
    const cita = await mutationService.postCancelarCita(id);

    return res.json(cita);
  } catch (e) {
    const msg = `[${e.message}]`;
    return res.status(500).json(msg);
  }
};

module.exports = {
  concertarCita,
  cancelarCita,
};
