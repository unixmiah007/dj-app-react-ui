import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post('/api/newsletter', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create a test account on Ethereal Email
    let testAccount = await nodemailer.createTestAccount();

    // Create a transporter object using the test SMTP service
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'rafaela85@ethereal.email', // generated ethereal user
        pass: '7WkGW6fGZktm3D3FfT', // generated ethereal password
      },
    });

    // Setup email data
    let mailOptions = {
      from: email, // sender address
      to: 'shaj.k.miah@gmail.com', // replace with your email
      subject: 'New Newsletter Signup',
      text: `New signup from ${firstName} ${lastName} - Email: ${email}`,
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Preview URL for testing

    res.status(200).json({ message: 'Signup info sent successfully', previewUrl: nodemailer.getTestMessageUrl(info) });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
