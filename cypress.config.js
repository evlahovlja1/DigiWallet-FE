const { defineConfig } = require("cypress");
const nodemailer = require("nodemailer")

const host = process.env.SMTP_HOST || 'localhost'
const port = Number(process.env.SMTP_PORT || 7777)

// create your own SMTP transport
const transport = nodemailer.createTransport({
  port: 587,
  host: "smtp.office365.com",
  secure: port === 465,
  auth: {
	  user: "siprojekat@outlook.com",
	  pass: "sifra"
  },
})



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-email-results')(on, config, {
		email: ['evlahovlja1@etf.unsa.ba'],
		emailOnSuccess: true,
		dry: true,
		// pass your transport object
		transport,
	  })
    },
  },
  //baseUrl: ""
});

