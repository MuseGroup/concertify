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
// const scrapeTopFestivals= async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.musicfestivalwizard.com/the-top-music-festivals/?topfests=us-festivals')

//     const scrapedData = await page.evaluate(() =>
//         Array.from(
//             document.querySelectorAll('.article lineup-item grid__item')
//         )
//         .map(link => ({
//             title: link.textContent,
//             link: `https://www.musicfestivalwizard.com/${link.getAttribute('href')}`
//         }))
//     )

//     await browser.close()
//     return scrapedData
// }

module.exports.scrapeFestivalWizard = scrapeFestivalWizard
