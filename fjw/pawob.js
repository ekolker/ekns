var slice = Array.prototype.slice // this was actually a hint. they could have said so...

module.exports = function logger(namespace)
{
  return function()
  {
    console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
  }
}