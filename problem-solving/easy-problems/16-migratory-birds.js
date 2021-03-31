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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  let types = [0, 0, 0, 0, 0];
  for (const element of arr) {
    if (element === 1) {
      types[0]++;
    } else if (element === 2) {
      types[1]++;
    } else if (element === 3) {
      types[2]++;
    } else if (element === 4) {
      types[3]++;
    } else {
      types[4]++;
    }
  }
  const max = types.indexOf(Math.max(...types)) + 1;
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
