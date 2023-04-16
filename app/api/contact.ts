import nodemailer from "nodemailer";

export default async (
  req: {
    body: {
      floating_first_name: string;
      floating_last_name: string;
      floating_phone: string;
      floating_company: string;
      floating_email: string;
      floating_message: string;
      floating_checkbox: string;
    };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: string }): any; new (): any };
    };
  }
): Promise<any> => {
  const {
    floating_first_name,
    floating_last_name,
    floating_phone,
    floating_company,
    floating_email,
    floating_message,
    floating_checkbox,
  } = req.body;

  const transporter = nodemailer.createTransport({
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

  // const isMobile = window.matchMedia("(max-width: 600px)").matches;
  try {
    await transporter.sendMail({
      from: floating_email,
      to: "info@dokirin.com",
      subject: `Contact form submission from ${floating_first_name} ${floating_last_name}`,
      html: `<p>You have a contact form submission</p><br>
       <p><strong>Company: </strong> ${floating_company}</p><br>
       <p><strong>Email: </strong> ${floating_email}</p><br>
       <p><strong>Phone: </strong> ${floating_phone}</p><br>
       <p><strong>Terms: </strong> ${floating_checkbox}</p><br>
       <p><strong>Message: </strong> ${floating_message}</p><br>
       `,
    });
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
