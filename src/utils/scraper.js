const puppeteer = require('puppeteer')

const scrapeFestivalWizard = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://www.musicfestivalwizard.com/all-festivals`)

    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.article lineup-item grid__item')
        )
        .map(link => ({
            title: link.textContent,
            link: `https://www.musicfestivalwizard.com/${link.getAttribute('href')}`,
            picture: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/The-Kills-6-copy-600x399.jpg'
        }))
    )

    await browser.close()
    return scrapedData
}
const scrapeTopFestivals= async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.musicfestivalwizard.com/the-top-music-festivals/?topfests=us-festivals')

    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.article lineup-item grid__item')
        )
        .map(link => ({
            title: link.textContent,
            link: `https://www.musicfestivalwizard.com/${link.getAttribute('href')}`
        }))
    )

    await browser.close()
    return scrapedData
}

// const scrapeLATimes = async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.latimes.com/search?q=fire&f0=00000163-01e2-d9e5-adef-33e2984a0000&f0=0000016a-b70e-dd5c-abfe-bf3f7b290000&f0=00000168-8692-d5d8-a76d-efdb7d3c0000&f1=0000016a-ea2d-db5d-a57f-fb2dc8680000&s=0')

//     const scrapedData = await page.evaluate(() => {
//         const scrapedMedia = Array.from(document.querySelectorAll('.PromoMedium-wrapper'));
//         let fullArr = [];
//         for(let i = 0; i < scrapedMedia.length; i++){
//             fullArr[i] = {
//                 title: scrapedMedia[i].querySelector('.PromoMedium-title a:first-child').textContent,
//                 link: scrapedMedia[i].querySelector('.PromoMedium-title a:first-child').getAttribute('href'),
//                 picture: scrapedMedia[i].querySelector('.PromoMedium-media img').getAttribute('src'),
//             }
//         }
//         return fullArr
//     })

//     await browser.close()
//     return scrapedData
// }

// //scraping Youtube titles and links
// const scrapeYoutube = async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto( 'https://www.youtube.com/results?search_query=los+angeles+fires' )

//     const scrapedData = await page.evaluate(() => {
//         const scrapedMedia = Array.from(document.querySelectorAll('ytd-video-renderer.ytd-item-section-renderer'));
//         let fullArr = [];
//         for(let i = 0; i < scrapedMedia.length; i++){
//             fullArr[i] = {
//                 title: scrapedMedia[i].querySelector('.ytd-video-renderer #video-title').getAttribute('title'),
//                 link: `https://www.youtube.com${scrapedMedia[i].querySelector('.ytd-video-renderer #video-title').getAttribute('href')}`,
//                 picture: scrapedMedia[i].querySelector('#img').getAttribute('src')
//             }
//         }
//         return fullArr
//     })
  
//     await browser.close()
//     return scrapedData
// }


module.exports.scrapeFestivalWizard = scrapeFestivalWizard
// module.exports.scrapeLAFDAlerts = scrapeLAFDAlerts
// module.exports.scrapeLATimes = scrapeLATimes
// module.exports.scrapeYoutube = scrapeYoutube