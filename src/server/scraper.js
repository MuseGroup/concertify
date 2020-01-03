const cheerio = require('cheerio');
const request = require('request');
const mcache = require('memory-cache');
const fetch = require('node-fetch');
const moment = require('moment');
const festivals = {
  wizard: 'https://www.musicfestivalwizard.com/music-festival-news/',
};

function cleanString(str) {
  return str.replace(/\r?\n|\r|-/g, '').trim();
}

async function festivalToObject($, url) {
  const cleanedTitle = $('.class="entry-title search-title headline-title"')
    .text()
    .replace(' Festival News Updates', '');
  const cleanedImage = $('.article--grid__thumb article__featured-image')
    .text()
    .replace('Festival', '')
    .split('º')
    .slice(0, 3);
 
  return {
    title: cleanedTitle,
    image: cleanedImage,
  };
}
function oneFestival(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, html) => {
      const $ = cheerio.load(html);
      const festival = festivalToObject($, url);
      resolve(festival);
    });
  });
}

const scrapeController = {
  getData: (req, res) => {
    const festivalName = req.params['0'];
    if (mcache.get(festivalhName)) {
      res.send(mcache.get(festivalName));
      return;
    }
    request(festivals[festivalName], (error, response, html) => {
      const $ = cheerio.load(html);
      const festival = festivalToObject($);
      mcache.put(festivalName, surf);
      res.send(festival);
    });
  },

  getAllData: (req, res) => {
    if (mcache.get('all')) {
      res.send(mcache.get('all'));
      return;
    }
    const allBeachData = [
      oneFestival(festivals.wizard),
    ];
    Promise.all(allFestivalData).then((fulfilled) => {
      mcache.put('all', fulfilled);
      res.send(fulfilled);
    });
  },
};

module.exports = scrapeController;