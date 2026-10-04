import nodemailer from "nodemailer";
import ejs from "ejs"
import path from "path";


// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT) || 587,
//   service: process.env.SMTP_SERVICE,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS
//   }
// });

// const transporter1 = nodemailer.createTransport({
//   service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
//   auth: {
//     type: "OAuth2",
//     user: process.env.SMTP_USER,
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD, 
  },
});

const renderEmailTemplate = async(templateName:string, data:Record<string, any>):Promise<string> => {
    const templatePath = path.join(
        process.cwd(),
        "src",
        "utils",
        "email-template",
        `${templateName}.ejs`
    )
    return ejs.renderFile(templatePath, data)
}

// Send an email using nodemailer
export const sendEmail = async(to:string, subject:string, templateName:string, data:Record<string,any>)=>{
    try {
        const html = await renderEmailTemplate(templateName,data)
        await transporter.sendMail({
            from: `${process.env.SMTP_USER}`,
            to,
            subject,
            html
        })
        return true
    } catch (error) {
        console.log("Error sending email", error)
    }
}