"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  const julianCalendar = year >= 1700 && year <= 1917;
  const transitionYear = year === 1918;
  const gregorianCalendar = year >= 1919;
  const julianLeap = year % 4 === 0;
  const gregorianLeap =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (julianCalendar) {
    return julianLeap ? `12.09.${year}` : `13.09.${year}`;
  } else if (transitionYear) {
    return `26.09.${year}`;
  } else if (gregorianCalendar) {
    return gregorianLeap ? `12.09.${year}` : `13.09.${year}`;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
