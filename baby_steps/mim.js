var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, func)
{
  var val = [];

  fs.readdir(dir, function (err, data)
  {
    if (err)
      return func(err);
    data.forEach(function(filename, index)
    {
      if (path.extname(filename) == "." + ext)
      {
        val.push(filename);
      }
      if (index == data.length - 1)
      {
        func(null, val);
      }
    });
  });
}