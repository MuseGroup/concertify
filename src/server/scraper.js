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

function convertAngleToCompass(degrees) {
  const directionsIndex = Math.floor((degrees / 22.5) + 0.5);
  const compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return compass[(directionsIndex % 16)];
}

function fetchAndProcessTides(url) {
  const locationId = url.split('/').pop();
  const surflineTideApiCall = `https://www.musicfestivalwizard.com/music-festival-news/${locationId}&days=1&accesstoken=7fc56562b343878b456943a4216bfa4d08aadcbe`;
  return fetch(surflineTideApiCall)
    .then(res => res.json())
    .then(res => res.data.tides.filter(el => el.type !== 'NORMAL'))
    .then(tidesWithUnix => tidesWithUnix.map((el) => {
      const formatedData = el;
      formatedData.timestamp = moment.unix(el.timestamp).local().format('h:mma');
      return formatedData;
    }));
}

function fetchAndProcessWind(url) {
  const locationId = url.split('/').pop();
  const indexesToKeep = [6, 9, 12, 15, 18];
  const surflineWindApiCall = `https://www.musicfestivalwizard.com/music-festival-news=${locationId}&days=1&intervalHours=1&accesstoken=7fc56562b343878b456943a4216bfa4d08aadcbe`;
  return fetch(surflineWindApiCall)
    .then(res => res.json())
    .then(res => res.data.wind.filter((el, ind) => indexesToKeep.includes(ind)))
    .then(partialWindInfo => partialWindInfo.map((el) => {
      const formatedData = el;
      formatedData.timestamp = moment.unix(el.timestamp).local().format('h:mma');
      formatedData.direction = convertAngleToCompass(formatedData.direction);
      delete formatedData.optimalScore;
      return formatedData;
    }));
}

async function festivalToObject($, url) {
  const cleanedLocationData = $('.sl-forecast-header__main__title')
    .text()
    .replace(' Festival News Updates', '');
  const cleanedSwellData = $('.sl-spot-forecast-summary__stat-swells')
    .text()
    .replace('Swells', '')
    .split('º')
    .slice(0, 3);
  const tideInfo = await fetchAndProcessTides(url);
  const windInfo = await fetchAndProcessWind(url);
  return {
    location: cleanedLocationData,
    tides: tideInfo,
    swells: cleanedSwellData,
    wind: windInfo,
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