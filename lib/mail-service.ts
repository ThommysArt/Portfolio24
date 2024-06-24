import emailjs from '@emailjs/browser'


emailjs.init({
  publicKey: "1fGvX8u7wygasmuQq",
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

export type EmailProps = {
    name: string,
    email: string,
    message: string
}

const sendMail = (mailData: EmailProps) => {
    emailjs.send("service_xt59xyn", "template_xog046i", mailData)
}

export {sendMail}