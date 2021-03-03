function processData(input) {
  //Enter your code here
  const inputArray = input.split("\n");
  const sizePhoneBook = parseInt(inputArray[0]);
  const phonesList = inputArray.slice(1, sizePhoneBook + 1).map((item) => {
    let list = {
      name: item.split(" ")[0],
      phone: item.split(" ")[1],
    };
    return list;
  });
  const namesList = inputArray.slice(sizePhoneBook + 1);
  let guide = {};
  for (const item of phonesList) {
    guide[item.name] = item.phone;
  }
  for (const name of namesList) {
    if (guide[name]) {
      console.log(`${name}=${guide[name]}`);
    } else {
      console.log("Not found");
    }
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
