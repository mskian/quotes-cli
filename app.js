#!/usr/bin/env node

const ora = require("ora");
const fetch = require("node-fetch");
const chalk = require("chalk");
const emoji = require('node-emoji');

async function fetchquotes(){
    const spinner = ora("Fetching Quotes").start()
  
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      res = await fetch("https://quotesapi.mskian.com/all")
      if (res.ok) {
        json = await res.json()
        spinner.stop()
        printContent(json)
      } else {
        json = await res.json()
        spinner.stop()
        console.log(`title: ${json.errors.title}
              detail: ${json.errors.detail}`)
      }
    } catch (err) {
      spinner.stop()
  
      console.error(err)
    }
  }

  fetchquotes();

  const printContent = json => {
    console.log();
    var random = json.quoteswritten[Math.floor(Math.random() * json.quoteswritten.length)];
    console.log(emoji.get('unicorn_face'), chalk.bgYellowBright.bold.black(random.quotes));
    console.log();
  }
