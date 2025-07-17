import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Received form submission:', req.body);

  try {
    const { name, email, subject, message } = req.body;

    // Log received data
    console.log('Form data received:', { name, email, subject, message });

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Test transporter connection
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (smtpError) {
      console.error('SMTP connection error:', smtpError);
      return res.status(500).json({ 
        error: 'Email service configuration error',
        details: smtpError.message
      });
    }

    // Send email to admin
    console.log('Sending email to admin...');
    try {
      const adminMailResponse = await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: 'victor.bimal.vblsolution@gmail.com',
        subject: `Message du site : ${name}: ${subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log('Admin email sent successfully:', adminMailResponse);
    } catch (adminMailError) {
      console.error('Error sending admin email:', adminMailError);
      throw adminMailError;
    }

    // Send confirmation email to sender
    console.log('Sending confirmation email to sender...');
    try {
      const confirmationMailResponse = await transporter.sendMail({
        from: `"VBL SOLUTION" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Confirmation de réception - VBL SOLUTION',
        html: `
          <h2>Merci de nous avoir contacté</h2>
          <p>Ceci est un message automatique, merci de ne pas y répondre.</p>
          <p>Cher(e) ${name},</p>
          <p>Nous avons bien reçu votre message et nous vous en remercions. Notre équipe va l'examiner dans les plus brefs délais et vous répondra rapidement.</p>
          <p>Pour rappel, voici votre message :</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Cordialement,</p>
          <p>L'équipe VBL SOLUTION</p>
        `,
      });
      console.log('Confirmation email sent successfully:', confirmationMailResponse);
    } catch (confirmationMailError) {
      console.error('Error sending confirmation email:', confirmationMailError);
      throw confirmationMailError;
    }

    console.log('All emails sent successfully');
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Error in contact form handler:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: error.message 
    });
  }
} 