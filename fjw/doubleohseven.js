function Spy(target, method)
{
  var result = {count: 0};

  // console.log(count);
  var original = target[method];

  // console.log(original);
  // target[method] = function()
  // {
  //   original.call();
  //   this.count++;
  // }
  target[method] = function()
  {
    result.count++;
    return original.apply(this, arguments);
  }
  return result;
}

module.exports = Spy;

