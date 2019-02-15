import * as nodemailer from "nodemailer";
import config from '../configs/configs';


class Mail {

    constructor(
        public to?: string,
        public bcc?: string[],
        public subject?: string,
        public message?: string) { }


    sendMail() {
        // let mail: MailOptions;
        let mailOptions = {
            from: "jmamani@exisoft.com.ar",
            to: this.to,
            bcc: this.bcc,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: false,
            tls: { rejectUnauthorized: true }
        });


        console.log(mailOptions);

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return error;
            } else {
                return "E-mail enviado com sucesso!" + info;
            }
        });
    }
}

export default new Mail;