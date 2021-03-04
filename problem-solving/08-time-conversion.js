"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let hour = parseInt(s.slice(0, 2));
  if (s.includes("AM")) {
    if (hour === 12) {
      return s.replace("12", "00").slice(0, -2);
    }
    return s.slice(0, -2);
  } else if (s.includes("PM")) {
    if (hour === 12) {
      return s.slice(0, -2);
    } else if (hour === 1) {
      return s.replace("01", "13").slice(0, -2);
    } else if (hour === 2) {
      return s.replace("02", "14").slice(0, -2);
    } else if (hour === 3) {
      return s.replace("03", "15").slice(0, -2);
    } else if (hour === 4) {
      return s.replace("04", "16").slice(0, -2);
    } else if (hour === 5) {
      return s.replace("05", "17").slice(0, -2);
    } else if (hour === 6) {
      return s.replace("06", "18").slice(0, -2);
    } else if (hour === 7) {
      return s.replace("07", "19").slice(0, -2);
    } else if (hour === 8) {
      return s.replace("08", "20").slice(0, -2);
    } else if (hour === 9) {
      return s.replace("09", "21").slice(0, -2);
    } else if (hour === 10) {
      return s.replace("10", "22").slice(0, -2);
    } else if (hour === 11) {
      return s.replace("11", "23").slice(0, -2);
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
