import cheerio from 'cheerio';
import fetch from 'node-fetch';


const data = await fetch('https://www.musicfestivalwizard.com/music-festival-news/');
const $ = cheerio.load(await data.text());
const allTitles = $('.article lineup-item grid__item one-third lap-one-third palm-one-third mobile-one-whole')
  .get()
  .map(festival => {
    const $festival = $(festival);
    const title = $festival.find('h2').text();
    return title;
  })
  console.log(allTitles)