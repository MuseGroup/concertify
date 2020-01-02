import cheerio from 'cheerio';
import fetch from 'node-fetch';

const data = await fetch('https://github.com/trending');
const $ = cheerio.load(await data.text());
const allTitles = $('.repo-list li')
  .get()
  .map(repo => {
    const $repo = $(repo);
    const title = $repo.find('h3').text();
    return title;
  });
console.log(allTitles);
