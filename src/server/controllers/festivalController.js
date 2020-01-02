const scraper = require('..utils/scraper')

const festivalController = {};

festivalController.getFestivals=(req, res, next) => {
  const festivals= new Promise((resolve, reject) => {
    scraper
     .scrapeFestivalWizard()
     .then(data => {
       resolve(data)
     })
     .catch(err => reject('Festival Wizard is not sicc'))
  })
}

module.exports = festivalController;