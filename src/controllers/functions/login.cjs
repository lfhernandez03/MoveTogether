const { validationResult } = require("express-validator");
const Login = require('../../models/usuarios.cjs');

const loginController = async (req, res) => {
  // Verifica si hay errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  // Verifica si email o password no están presentes en la solicitud
  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña son requeridos" });
  }

  try {
    // Verifica si el usuario existe
    const usuario = await Login.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verifica la contraseña
    if (password !== usuario.password) {
      console.log("Contraseña almacenada en la BD:", usuario.password); // Imprime la contraseña almacenada
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Iniciar sesión exitosamente
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Ocurrió un error al iniciar sesión" });
  }
};

module.exports = loginController;