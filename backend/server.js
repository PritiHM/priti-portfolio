import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact API
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Mail to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Enquiry",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Mail failed" });
  }
});

// Server start
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend running on http://localhost:5000");
});
