import React from "react";
import { StyleSheet, View } from "react-native";
import { routes, colors, buttons, placeholders } from "../../shared/constants";
import {
  FlexCentered,
  Button,
  Text,
  TextInput,
  Centered,
  CenteredHome
} from "../../shared/styledComponents";
import Logo from "../Logo";

// const Nightmare = require('nightmare');
// const nightmare = Nightmare({ show: false });
// have this set to false for performance but can set to true if you'd like to see what it's scraping

// export const webScraper = () => {
//   nightmare
//     .goto(`https://www.musicfestivalwizard.com/music-festival-news`)
//     .wait('.desc_text')
//     .evaluate(() => {
//       let thing = document.querySelector('.h2');
//       return thing.innerHTML
//     })
//     .end()
//     .then((result) => {
//       return result
//     })
//     .catch((error) => {
//       console.error('Search failed:', error);
//     });
// }
// const rp = require('request-promise');
// const cheerio = require('cheerio-without-node-native');
// const Table = require('cli-table');

// let table = new Table({
// 	head: ['username', '❤️', 'challenges'],
// 	colWidths: [15, 5, 10]
// })

// const options = {
// 	url: `https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1518604435748`,
// 	json: true
// }

// rp(options)
// 	.then((data) => {
// 		let userData = [];
// 		for (let user of data.directory_items) {
// 			userData.push({name: user.user.username,likes_received: user.likes_received});
// 		}
// 		process.stdout.write('loading');
// 		getChallengesCompletedAndPushToUserArray(userData);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// function getChallengesCompletedAndPushToUserArray(userData) {
// 	var i = 0;
// 	function next() {
// 		if (i < userData.length) {
// 			var options = {
// 				url: `https://www.freecodecamp.org/` + userData[i].name,
// 				transform: body => cheerio.load(body)
// 			}
// 			rp(options)
// 				.then(function ($) {
// 					process.stdout.write(`.`);
// 					const fccAccount = $('h1.landing-heading').length == 0;
// 					const challengesPassed = fccAccount ? $('tbody tr').length : 'unknown';
// 					table.push([userData[i].name, userData[i].likes_received, challengesPassed]);
// 					++i;
// 					return next();
// 				})
// 		} else {
// 			printData();
// 		}
// 	}
// 	return next();
// };

// function printData() {
// 	console.log("✅");
// 	console.log(table.toString());
// }



const Home = () => (
  <FlexCentered>
    <Logo />
    <Text>Search</Text>
    <CenteredHome>
      <TextInput placeholder={placeholders.playlist} />
      <Button>
        <Text
          color={colors.bright}
          onPress={() => {
            alert("Playlist sent!");
          }}
        >
          {buttons.sendPlaylist}
        </Text>
      </Button>
    </CenteredHome>
  </FlexCentered>
);
export default Home;
