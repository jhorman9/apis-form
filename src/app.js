const cors = require("cors");
const express = require("express");
const db = require("./utils/database");
const transporter = require("./utils/mailer");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor"});
});

let numberSend = 0;

app.post("/form", async (req, res) => {
  const { title, name, correo, description } = req.body;
  const result = await transporter.sendMail({
    to: `<jhorman_nieto97@hotmail.com>`,
    subject: title,
    html: `<div style="background: #ea8f1d; border-radius:25px; width: 100%; padding: 50px; text-align:center;">
                <h2 style="margin-bottom: 50px;">Han enviado un correo desde tu portafolio WEB</h2>
                <h3>Descripcion:</h3> <p><b>${description}</b></p>
                <h3>Nombre de la persona o empresa:</h3> <p><b>${name}</b></p>
                <h3>Correo de empresa o persona:</h3> <p><b>${correo}</b></p>
                <h3>Correo N#${++numberSend}</h3>
           </div>`,
  });
  res.status(200).json(result);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
