 const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: 'katiwamawia@gmail.com', // Replace with your email address
    pass: '@dantosh#33^9+5' // Replace with your email password
  }
});

// Route to handle form submission and send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'mawia33damah@gmail.com', // Replace with your email address
    to: 'katiwamawia@gmail.com', // Replace with the recipient's email address
    subject: 'New Form Submission',
    text: Name: ${name}\nEmail: ${email}\nMessage: ${message}
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});