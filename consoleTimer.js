const args = process.argv;
let argsSlice = args.slice(2);

const consoleTimer = function(arr) {
  let sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (let input of sorted) {
    setTimeout(() => {
      console.log('yes!');
    }, input * 1000);
  }
};

consoleTimer(argsSlice);
