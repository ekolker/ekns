var input = process.argv;
var sum = 0;

for (var i = 2; i < input.length; i++)
  sum = sum + +input[i];

console.log(sum);