import nodemailer, { Transporter } from "nodemailer";
// import { Request, Response } from "express";
import { validationResult } from "express-validator";
import type { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
  floating_first_name: string;
  floating_last_name: string;
  floating_phone: string;
  floating_company?: string;
  floating_email: string;
  floating_message: string;
  floating_checkbox: boolean;
}

// Initialize nodemailer transporter
const transporter: Transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
      ? process.env.SMTP_PASSWORD
      : process.env.SMTP_PASSWORD_MOBILE,
  },
});

// Define validation rules for contact form input
// const validateContactForm = [
//   body("floating_first_name").notEmpty().withMessage("First name is required"),
//   body("floating_last_name").notEmpty().withMessage("Last name is required"),
//   body("floating_phone").notEmpty().withMessage("Phone number is required"),
//   body("floating_email").isEmail().withMessage("Invalid email address"),
//   body("floating_message").notEmpty().withMessage("Message is required"),
//   body("floating_checkbox").notEmpty().withMessage("Terms must be accepted"),
// ];

// Define endpoint for sending email
export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const formData: ContactFormData = request.body;
    // Validate input
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Send email
    await transporter.sendMail({
      from: formData.floating_email,
      to: "info@dokirin.com",
      subject: `Contact form submission from ${formData.floating_first_name} ${formData.floating_last_name}`,
      html: `<p>You have a contact form submission</p><br>
       <p><strong>Company: </strong> ${formData.floating_company ?? ""}</p><br>
       <p><strong>Email: </strong> ${formData.floating_email}</p><br>
       <p><strong>Phone: </strong> ${formData.floating_phone}</p><br>
       <p><strong>Terms: </strong> ${formData.floating_checkbox}</p><br>
       <p><strong>Message: </strong> ${formData.floating_message}</p><br>
       `,
      // Embedded image links to content ID
      // attachments: [
      //   {
      //     filename: "image.png",
      //     path: "./img1.jpg",
      //     cid: "unique@gmail.com", // Sets content ID
      //   },
      // ],
    });

    // Log email data
    // TODO: implement database or logging system

    // Verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // Send success response
    return response.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    // Log error
    console.log(error);
    // Send error response
    return response?.status(500).send({ error: "Failed to send email" });
  }
};
