require("dotenv").config();
// para conectarnos a una base de datos, primero debes crear una instancia
// de Sequelize
const { Sequelize } = require("sequelize");
// en la creación de la instancia pasamos los parámetros de configuración
const db = new Sequelize({
  database: process.env.DB_NAME, // nombre de la base de datos en donde realizarás tu conexión
  username: process.env.DB_USER, // nombre del usuario propietario de la base de datos
  host: process.env.DB_HOST, // el host donde se encuentra tu base de datos
  port: process.env.DB_PORT, // el puerto de conexión a tu base de datos (puede ser igual 5433)
  password: process.env.DB_PASSWORD, // la contraseña del usuario en postgres
  dialect: process.env.DB_DIALECT, // el dialecto de la base de datos que estamos usando
});

// finalmente exportamos la instancia hecha en la variable db
module.exports = db;
