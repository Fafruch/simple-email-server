const getMailClient = () => ({
  user: process.env.BOT_EMAIL,
  pass: process.env.BOT_PASSWORD
});

module.exports = getMailClient;
