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

function main() {
  const N = parseInt(readLine(), 10);
  let listOfUsers = [];

  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(" ");

    const firstName = firstNameEmailID[0];

    const emailID = firstNameEmailID[1];

    if (emailID.endsWith("@gmail.com")) {
      listOfUsers.push(firstName);
    }
  }
  listOfUsers.sort();
  listOfUsers.forEach((user) => console.log(user));
}
