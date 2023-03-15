import * as MailComposer from "expo-mail-composer";
export default class Mail {
    async send(to, subject, body, username) {
        return MailComposer.composeAsync({
            recipients: to,
            subject:subject,
            body: "Greeting " + username + ", " + body,
            host: "mail.smtpbucket.com",
            port: 8025,
            from: "walterkiprono81@gmail.com"
          });     
    }
}