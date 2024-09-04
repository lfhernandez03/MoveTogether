const express = require("express");
const router = express.Router();
const loginController = require("../functions/login.cjs");
const loginValidator = require("../middlewares/validacionesLogin.cjs");
const { validationResult } = require("express-validator");

router.post("/login", loginValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  loginController(req, res, next);
});

module.exports = router;
