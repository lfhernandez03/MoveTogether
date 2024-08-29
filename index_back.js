require("dotenv").config();
import express, { static as expressStatic, json, urlencoded } from "express";
import { default as mongoose } from "mongoose";
import connectDB from "config/db.config.js";
import { join } from "path";
const app = express();
const PORT = process.env.PORT || 3000;

//imporar rutas

import crearUsuario from "./src/rutas/crearUsuarioRuta";
import login from "./src/rutas/loginRuta";

// Conexión a la base de datos
connectDB();

// Configuración
app.use(expressStatic(join(__dirname, "public")));
app.use(json());
app.use(urlencoded({ extended: true }));

// Rutas
app.use("/api", crearUsuario);
app.use("/api", login);

// Servidor
app.listen(PORT, () => {
  console.log(
    `--------> Backend escuchando en http://localhost:${PORT} <--------`
  );
});
