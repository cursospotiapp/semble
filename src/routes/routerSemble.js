const express = require("express");

const router = express.Router();
const {
  obtenerPaciente,
  obtenerPacientes,
  obtenerDoctor,
  obtenerDoctores,
  concertarCita,
  cancelarCita,
} = require("../controllers");

// Rutas pacientes
router.get("/obtener-paciente/:id", obtenerPaciente);
router.get("/obtener-pacientes/", obtenerPacientes);

// Rutas doctores
router.get("/obtener-doctor/:id", obtenerDoctor);
router.get("/obtener-doctores/", obtenerDoctores);

// Rutas citas
router.get("/cancelar-cita/:id", cancelarCita);
router.post("/concertar-cita/", concertarCita);

module.exports = router;
