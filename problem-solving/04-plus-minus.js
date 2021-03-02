"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (const element of arr) {
    if (element < 0) {
      negative++;
    } else if (element === 0) {
      zero++;
    } else {
      positive++;
    }
  }
  let ratPositive = (positive / arr.length).toFixed(6);
  let ratNegative = (negative / arr.length).toFixed(6);
  let ratZero = (zero / arr.length).toFixed(6);
  console.log(ratPositive);
  console.log(ratNegative);
  console.log(ratZero);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
