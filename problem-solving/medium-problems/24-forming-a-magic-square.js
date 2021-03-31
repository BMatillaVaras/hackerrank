"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  let n = 8,
    costs = Array(n).fill(0),
    magic = [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ];

  for (let i = 0; i < n; i++) {
    const isEven = i % 2 === 0;

    magic.forEach(([a, b, c], j) => {
      costs[i] += Math.abs(s[isEven ? 0 : 2][j] - a);
      costs[i] += Math.abs(s[1][j] - b);
      costs[i] += Math.abs(s[isEven ? 2 : 0][j] - c);
    });

    if (isEven) s = [0, 1, 2].map((j) => [s[2][j], s[1][j], s[0][j]]);
  }

  return Math.min(...costs);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let s = Array(3);

  for (let i = 0; i < 3; i++) {
    s[i] = readLine()
      .split(" ")
      .map((sTemp) => parseInt(sTemp, 10));
  }

  const result = formingMagicSquare(s);

  ws.write(result + "\n");

  ws.end();
}
