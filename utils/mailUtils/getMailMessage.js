const getMailContent = require('./getMailContent');

const getMailMessage = (body) => {
  const mailContent = getMailContent(body);

  return {
    from: `${process.env.BOT_NAME} <${process.env.BOT_EMAIL}>`,
    to: `${process.env.RECIPIENT_NAME} <${process.env.RECIPIENT_EMAIL}>`,
    subject: mailContent.subject,
    text: mailContent.text,
    html: mailContent.html,
  };
};

module.exports = getMailMessage;
