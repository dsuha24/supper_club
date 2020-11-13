'use strict';
/**
 * `email` service.
 */

const ejs = require('ejs')
const path = require("path");

const MAIL_TEMPLATES = {
  WELCOME: {
    subject: 'Welcome to SupperClub.',
    ejsContent: '../templates/welcome.ejs'
  },
  RESET_PW: {
    subject: 'SupperClub - Reset your password.',
    ejsContent: '../templates/resetPW.ejs'
  },
}

async function renderTemplate(MAIL_NAME, data) {
  const template = MAIL_TEMPLATES[MAIL_NAME]
  if (template) {
    return {
      subject: template.subject,
      // text is not rendered in the mail but it is required
      text: template.subject,
      html: await ejs.renderFile(
        path.resolve(__dirname, template.ejsContent),
        data
      )
    }
  } else {
    throw new Error(`Mail template ${MAIL_NAME} not found.`)
  }
}

module.exports = {
  send: async (to, subject, html, from = process.env.SENDGRID_MAIL_FROM) => {
    return await strapi.plugins['email'].services.email.send({
      to,
      subject,
      html,
      from
    });
  },

  sendTemplatedEmail: async (to, MAIL_NAME, data, from = process.env.SENDGRID_MAIL_FROM) => {
    const template = await renderTemplate(MAIL_NAME, data)

    return await strapi.plugins.email.services.email.sendTemplatedEmail(
      {
        to,
        from
      },
      template
    );
  }
};
