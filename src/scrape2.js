const request = require('request')
const cheerio = require('cheerio')

request('https://www.musicfestivalwizard.com/music-festival-news/', (error, response, html)=> {
if(!err && response.statusCode == 200){
  const $ = cheerio.load(html);

  $('.post-preview').each((i, el) =>{
    const title = $(el)
      .find('post-title')
      .text()
      .replace(/\s\s+/g,'');

      console.log(title);
  });
  }
});