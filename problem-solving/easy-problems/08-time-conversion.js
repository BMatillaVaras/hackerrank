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
  } else {
    let newHour = hour + 12;
    if (hour === 12) {
      return s.slice(0, -2);
    } else {
      return s.replace(s.slice(0, 2), newHour).slice(0, -2);
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
