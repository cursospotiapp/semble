# Servicio para el manaejo de pacientes y doctores y citas

Este API es una capa que envuleve los servicio de la api de semble desarrollada en GraphQL y nos permite obtener resultados de tipo REST.

# DESPLIEGUE LOCAL

Para desplegar la aplicación en local únicamente debemos ejecutar:

```bash
npm run dev
```

### Documentacion de la API (Swagger)

http://localhost:3000/docs

## EJEMPLOS ENDPOINT PARA USO EN LOCAL

- **Obtener un paciente**: http://localhost:3000/api-semble/v1/obtener-paciente/62c58efd171cbd00126f56c0?fechaCitaInicio=2017-01-01&fechaCitaFin=2023-01-01
- **Obetener pacientes**: http://localhost:3000/api-semble/v1/obtener-pacientes?name=pa&fechaCitaInicio=2017-01-01&fechaCitaFin=2023-01-01
- **Obtener un doctor**: 'http://localhost:3000/api-semble/v1/obtener-doctor/62c58efd171cbd00126f5664?fechaCitaInicio=2000-01-01&fechaCitaFin=2023-01-01
- **Obtener doctores**: http://localhost:3000/api-semble/v1/obtener-doctores?fechaCitaInicio=2000-01-01&fechaCitaFin=2023-01-01'
- **Eliminar un cita**: http://localhost:3000/api-semble/v1/cancelar-cita/638e0467ebd713001219f6c6
- **Concertar un cita**: http://localhost:3000/api-semble/v1/concertar-cita

Parámetros post:

```bash
{
  "bookingData": {
    "patient": 4,
    "location": 5,
    "bookingType": "62c58f00171cbd00126f5715",
    "doctor": 6,
    "comments": "xyz789",
    "start": "2007-12-03",
    "end": "2022-12-03",
    "sendPatientMessages":{"confirmation": true }

  }
}
```

## Variables fichero .env

**PORT** Puerto en el que se despliega y expone la API. Ejemplo: 3000

**APP_ID** Id asignado a esta API. Ejemplo: SEMBLE_API

**LOG_LEVEL** El nivel para mostrarse los logs. Ejemplo: info / debug / error

**SEMBLE_API_URL** URL que apunta al playground del servicio GraphQL contra el que queremos laznar las consultas

**SEMBLE_API_KEY** Key para acceder a la API de Semble

**SEMBLE_ACCOUNT_PASSWORD** Password para acceder la API de Semble
