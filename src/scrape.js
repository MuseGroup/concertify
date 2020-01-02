const request = require('request')
const cheerio = require('cheerio')

//

request('https://www.musicfestivalwizard.com/music-festival-news/', (error, response, html)=> {
if(!err && response.statusCode == 200){
  const $ = cheerio.load(html);

  const festivant = $('.article lineup-item grid__item one-third lap-one-third palm-one-third mobile-one-whole')
  console.log(festivant.html());
  console.log(festivant.html.text());
  const output = festivant.find('h1').text();
  const output1 = festivant.children('h1').text();
  const output2 = festivant
    .children('h1')
    .next()
    .text();
    

  console.log("line 14 of scrape.js and output:",output);
  console.log("line 15 of scrape and output1 is:", output1);

  $('.nav-item a').each((i, el) =>{
    const item = $(el).text();
    console.log("item in line 23 of scrape.js is ",item)
    const link = $(el).attr('href');
    console.log("link on line 25 of scrape is",link);
  }); 
}
});