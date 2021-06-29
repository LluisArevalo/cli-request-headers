const yargs = require("yargs");

const options = yargs
  .usage("Usage: -u <url> [-i <iterations>] [-p <prefix>]")
  .option("u", {
    alias: "url",
    describe: "URL you want to do the request to",
    type: "string",
    demandOption: true,
  })
  .option("i", {
    alias: "iterations",
    describe: "Number of iterations you want to do the request",
    type: "number",
  })
  .option("p", {
    alias: "prefix",
    describe: "Header prefix that you want to see",
    type: "string",
  }).argv;

module.exports = { options };
