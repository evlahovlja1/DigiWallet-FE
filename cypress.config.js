const { defineConfig } = require("cypress");
const nodemailer = require("nodemailer")

const host = process.env.SMTP_HOST || 'localhost'
const port = Number(process.env.SMTP_PORT || 7777)

// create your own SMTP transport
const transport = nodemailer.createTransport({
  host,
  port,
  secure: port === 456,
})



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-email-results')(on, config, {
		email: ['user1@email.com', 'user2@email.com'],
		emailOnSuccess: true,
		dry: true
		// pass your transport object
		//transport,
	  })
    },
  },
  //baseUrl: ""
});

