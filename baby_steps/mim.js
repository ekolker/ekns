var fs = require('fs');
var path = require('path');

exports.filteredLS = function(dir, ext, func)
{
  fs.readdir(dir, function (err, data)
  {
    data.forEach(function(func)
    {
      func(data);
      // if (path.extname(data[f]) == "." + ext)
//       {
//         func(f);
//       }
    })
  })
}



//     for (f in data)
//     {
//       // console.log(f, path.extname(data[f]))
//       if (path.extname(data[f]) == "." + ext)
//       {
//         func(f);
//       }
//     }
//   });
// }