#!/usr/bin/env node

const ora = require('ora');
const fetch = require('node-fetch');
const chalk = require('chalk');
const emoji = require('node-emoji');

async function fetchquotes(){
	const spinner = ora('Fetching Quotes').start();
  
	try {
		await new Promise(resolve => setTimeout(resolve, 1000));
		const response = await fetch('https://quotesapi.mskian.com/all');
		if (response.ok) {
			const json = await response.json();
			spinner.stop();
			printContent(json);
		} else {
			json = await response.json();
			spinner.stop();
			console.log(`title: ${json.errors.title}
              detail: ${json.errors.detail}`);
		}
	} catch (err) {
		spinner.stop();
  
		console.error(err);
	}
}

fetchquotes();

const printContent = json => {
	console.log();
	var random = json.quoteswritten[Math.floor(Math.random() * json.quoteswritten.length)];
	console.log(emoji.get('point_right'), chalk.bgYellowBright.bold.black(random.quotes));
	console.log();
};