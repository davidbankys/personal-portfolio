const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(bodyParser.json());


//Test my server
app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

// POST endpoint to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: 'david.bankole14@gmail.com', // Your email
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from your contact form:
    
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
