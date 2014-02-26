module.exports = function arrayMap(arr, fn)
{
  // console.log(arr, fn)
  return arr.reduce(function(prev, curr, ind, arr)
  {
    // console.log(curr)
    return prev.concat(fn(curr));
  }, []);
}