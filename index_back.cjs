require("dotenv").config(); // Cargar variables de entorno
const express = require("express"); // Importar Express
const mongoose = require("mongoose"); // Importar Mongoose
const connectDB = require("./config/db.config.cjs"); // Importar función de conexión a la BD
const { join } = require("path"); // Importar función join de path

const app = express();
const PORT = process.env.PORT || 3000;

// Importar rutas
const crearUsuario = require("./src/controllers/routes/crearUsuarioRuta.cjs");
const login = require("./src/controllers/routes/loginRuta.cjs");

// Conexión a la base de datos
connectDB();

// Configuración
app.use(express.static(join(__dirname, "public"))); // Ajuste para usar la función `static`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", crearUsuario);
app.use("/api", login);

// Servidor
app.listen(PORT, () => {
  console.log(
    `--------> Backend escuchando en http://localhost:${PORT} <--------`
  );
});
