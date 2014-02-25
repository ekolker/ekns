var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]]

var collection = ["", "", ""];
var k = 0;

while (k < 3)
{
  console.log(urls[k]);
  http.get(urls[k], function(stream)
  {
    stream.setEncoding("utf8")
    stream.on("data", function(data)
    {
      collection[k] += data.toString();
      console.log(data.toString());
    });
    stream.on('end', function(data)
    {
      k++;
      if (k == 2)
      {
        console.log(collection);
      }
    });
    stream.on('error', console.error);
  });
}
