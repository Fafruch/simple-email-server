const getMailMessage = require('./mailUtils/getMailMessage');
const getTransporter = require('./mailUtils/getTransporter');
const sendUsing = require('./mailUtils/sendUsing');

const sendMailWith = (body) => {
  const transporter = getTransporter();
  const mailMessage = getMailMessage(body);

  sendUsing(transporter, mailMessage);
};

module.exports = sendMailWith;
