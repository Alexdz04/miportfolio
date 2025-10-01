const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tuemail@gmail.com',
    pass: 'tucontraseña' 
  }
});

app.post('/send-email', (req, res) => {
  const { nombre, email, razon } = req.body;

  const mailOptions = {
    from: email,
    to: 'tuemail@gmail.com',
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${email}\nRazon: ${razon}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error al enviar');
    }
    res.status(200).send('Correo enviado');
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo http://localhost:${PORT}`));