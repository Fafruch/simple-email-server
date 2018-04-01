const sendUsing = (transporter, message) => {
  const sendRecursive = {
    tryTimes: (times) => transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message);

          if (times >= 2) {
            console.log('Trying to send again...');
            sendRecursive.tryTimes(--times);
          } else {
            console.log('Couldn\'t send a message.');
          }
        } else {
          console.log('Message sent: %s', info.messageId);
          /* Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); */
        }
      })
  };

  console.log('Credentials obtained, sending message...');
  sendRecursive.tryTimes(10);
};

module.exports = sendUsing;
