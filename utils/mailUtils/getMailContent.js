const moment = require('moment');

const getMailContent = (body) => {
  if (body.requestType === 'IP_DATA') {
    return {
      subject: 'You got a new visit on your site',
      text: `You got visited by somebody from ${body.city}!`,
      html: `
            <h1>Hello ${process.env.RECIPIENT_NAME}!</h1>
              <br>You got visited by somebody near <b>${body.city}</b>
              in <b>${body.country_name}</b> on ${moment().format('L')}, ${moment().format('LTS')}.<br><br> 
              User's IP was  <b>${body.ip}</b>.<br><br><br><br>
              That's all, have a nice day!<br><br>
              ${process.env.BOT_NAME}
            `
    };
  } else {
    return {
      subject: 'You got a new not-supported request',
      text: `Hard to say who what wanted to tell you?`,
      html: `
            Hard to say <b>who</b> <b>what</b> wanted to tell you?<br>
            Anyway, have a nice day!<br>
            ${process.env.BOT_NAME}
            `
    };
  }
};

module.exports = getMailContent;
