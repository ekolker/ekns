var mim = require('./mim.js');

// console.log(mim);

var args = process.argv;
    dir = args[2];
    ext = args[3];

// console.log(args)

mim.filteredLS(dir, ext, function(data)
{
  console.log(data);
});