var slice = Array.prototype.slice

module.exports = function logger(namespace)
{
  // console.log(console);
  // foo = log.apply(namespace);
  // foo('<-- that was the namespace');
  console.log("foo");
  return function(){;};
}

console.log('wat', console.log.apply('lol'));
