import nodemailer from "nodemailer";
import { pass, user } from "./constants.js";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

export const sendMail = async (email, firstName) => {
  const messageTemplate = `
    <div>
    <h2> Welcome message </h2>
    <ul>
    <li>Name: ${firstName}</li>
    <li>Email: ${email}</li>
    </ul>
    <div>
    <p>Dear ${firstName}</p>
    <p>Welcome to our Ace App.</p>
    <p style="text-align:'end'">Sincerely, the Ace team.</p>
    </div>
    </div>
    `;

  const mailOptions = {
    from: user,
    to: email,
    subject: "Registration Message",
    text: "ace",
    html: messageTemplate,
  };
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info.response);
  } catch (error) {
    throw {
      name: "MailerError",
      message: `Error sending mail: ${error}`,
    };
  }
};
