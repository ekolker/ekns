var http = require('http');

var url = process.argv[2]

http.get(url, function(stream)
{
  stream.setEncoding("utf8")
  stream.on("data", function(data)
  {
    console.log(data);
  });
  stream.on('error', console.error);    //  snatched from the solution. TIL.
});

