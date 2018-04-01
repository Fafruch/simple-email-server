const nodemailer = require('nodemailer');
const getMailClient = require('./getMailClient');

const getTransporter = () => {
  const client = getMailClient();
  const transportConfig = {
    service: 'gmail',
    auth: {
      user: client.user,
      pass: client.pass
    }
  };

  return nodemailer.createTransport(transportConfig);
};

module.exports = getTransporter;
