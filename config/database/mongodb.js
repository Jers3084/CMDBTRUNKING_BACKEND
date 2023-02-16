const mongoose = require("mongoose");

//Realiza la conexion a la base de datos cuyo link se especifica en las variables de entorno archivo .env
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Conectado a la DB " + process.env.DB_CONNECTION);
  } catch (e) {
    console.log("problema al conectarse a la BD");
    console.log(e);
    throw new Error("Problema con la conexion");
  }
};

module.exports = { dbConnection };
