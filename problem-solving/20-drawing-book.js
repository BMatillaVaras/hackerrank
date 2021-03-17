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
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  /*
   * Write your code here.
   */
  const begining = p - 1;
  const ending = n - p;
  if (p === 1 || n === p) {
    return 0;
  } else if (begining === 1) {
    return 1;
  } else if (begining < ending) {
    return Math.round(begining / 2);
  } else if (n % 2 === 0 && ending === 1) {
    return 1;
  } else {
    return Math.floor(ending / 2);
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = parseInt(readLine(), 10);

  let result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
