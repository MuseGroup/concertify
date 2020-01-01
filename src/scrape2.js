const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv');

writeStream.write(`Title, Link, Date \n`)
request('https://www.musicfestivalwizard.com/music-festival-news/', (error, response, html)=> {
if(!err && response.statusCode == 200){
  const $ = cheerio.load(html);

  $('.post-preview').each((i, el) =>{
    const title = $(el)
      .find('post-title')
      .text()
      .replace(/\s\s+/g,'');
    const link = $(el)
      .find('a')
      .attr('href')
    const date = $(el)
      .find('.post-date')
      .text()
      .replace(/,/,' ');
      console.log("title on line 17 of scrape 2 is", title);
      console.log("link in line 20 of scrape2 is", link, date);


      //write row to csv
      writeStream.write(`${title}, ${link},${date} \n`);
      console.log('scraping festivals done');
  });
  }
});