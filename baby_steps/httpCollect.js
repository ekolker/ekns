var http = require('http');

var url = process.argv[2]

var collection = "";

http.get(url, function(stream)
{
  stream.setEncoding("utf8")
  stream.on("data", function(data)
  {
    collection += data.toString();
  });
  stream.on('end', function(data)
  {
    console.log(collection.length);
    console.log(collection);
  });
  stream.on('error', console.error);
});

