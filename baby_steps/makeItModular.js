var mim = require('./mim.js');

var args = process.argv;
    dir = args[2];
    ext = args[3];

// console.log(args)

mim(dir, ext, function(err, data)
{
  data.forEach(function(filename)
  {
  console.log(filename);
  // if (path.extname(filename) == "." + ext)
  //   {
  //     console.log(filename);
  //   };
  });
});