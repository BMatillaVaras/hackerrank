function processData(input) {
  const [returnDate, dueDate] = input.split("\n");
  const [returnDay, returnMonth, returnYear] = returnDate.split(" ");
  const [dueDay, dueMonth, dueYear] = dueDate.split(" ");

  if (returnYear > dueYear) {
    console.log(10000);
  } else if (returnYear === dueYear) {
    if (parseInt(returnMonth) > parseInt(dueMonth)) {
      console.log((returnMonth - dueMonth) * 500);
    } else if (returnMonth === dueMonth) {
      if (returnDay > dueDay) {
        console.log((returnDay - dueDay) * 15);
      } else {
        console.log(0);
      }
    } else {
      console.log(0);
    }
  } else {
    console.log(0);
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
