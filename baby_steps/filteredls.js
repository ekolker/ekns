var fs = require('fs');
var path = require('path');

// console.log(process.argv[3]);

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function (err, data)
{
  for (f in data)
  {
    // console.log(f, path.extname(data[f]))
    if (path.extname(data[f]) == "." + extension)
    {
      console.log(data[f]);
    }
  }
});