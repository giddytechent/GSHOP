import nodemailer from "nodemailer";
import ejs from "ejs"
import path from "path";

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