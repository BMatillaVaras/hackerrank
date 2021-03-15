function processData(input) {
  //Enter your code here
  let arrayInput = input.split("\n").slice(1);
  for (let j = 0; j < arrayInput.length; j++) {
    let oddInput = "";
    let evenInput = "";
    for (let i = 0; i < arrayInput[j].length; i++) {
      if (i % 2 === 0) {
        evenInput += arrayInput[j][i];
      } else {
        oddInput += arrayInput[j][i];
      }
    }
    console.log(`${evenInput} ${oddInput}`);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
