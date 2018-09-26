#!/usr/bin/env node

const ora = require('ora');
const axios = require('axios');
const chalk = require('chalk');
const emoji = require('node-emoji');

var apiurl = 'https://quotes.santhoshveer.com/quoteswritten.json';

async function fetchquotes() {

	const spinner = ora('Fetching Quotes').start();

	try {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const wes = await axios(apiurl);
		var sanquotes = wes.data;
		var random = sanquotes.quoteswritten[Math.floor(Math.random() * sanquotes.quoteswritten.length)];
		spinner.stop();
		console.log();
		console.log(emoji.get('point_right'), chalk.bgYellowBright.bold.black(random.quotes));
		console.log();

	} catch (e) {
		spinner.stop();
		console.error(e);
	}
}
  
fetchquotes();