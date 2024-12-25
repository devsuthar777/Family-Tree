
const twilio = require("twilio");
require('dotenv').config();
const accountSid = process.env.TWILIO_AUTH_SID ;
const authToken = process.env.TWILIO_AUTH_TOKEN ;
const whatsappNumberSender = process.env.TWILIO_AUTH_WHATSAAP_NUMBER;
const client = twilio(accountSid, authToken);

exports.sendOtpMessage = (mobileNo,otp) => {

    return client.messages
    .create({
      from: "whatsapp:+14155238886", // Twilio WhatsApp Sandbox number
      to: `whatsapp:+91${mobileNo}`,  // Recipient's WhatsApp number
      body: `Hello! Thank you for registering with Family Tree.\n\n Here is your OTP: *${otp}*.\n\nPlease don't share it with anyone!`,
    })
    

}