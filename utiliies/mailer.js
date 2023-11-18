import nodemailer from "nodemailer"
const sendMail = async (email, firstname) =>{
    const messageTemplate =`
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
    `
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
         user:"aghedopriscilla@gmail.com"   ,
         pass: "hpqp ajqk oowq mlt"
        }
    })
    const mailOptions ={
        from: "aghedopriscilla2gmail.com",
        to:email,
        subjet: "Registration Message",
        text: "ace",
        html: messageTemplate
    }
    try {
        await transporter.sendMail(mailOptions)
        console.log("Mail sent successfully");
    } catch (error) {
        throw{
            name: "MailerError",
            message: `Error sending mail: ${error}`
        }
    }
}

export {sendMail}