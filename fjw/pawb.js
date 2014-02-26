module.exports = function (namespace)
{
  // return console.log.bind(console, [namespace].concat(Array.prototype.slice.call(arguments)));
  return console.log.bind(console, namespace.concat(Array.prototype.slice.call(arguments).slice(3)));

  //   return console.log.bind(console, namespace);
}