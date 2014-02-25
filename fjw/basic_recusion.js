module.exports = function reduce(arr, fn, initial)
{
  //  base case?
  if (arr == [])    //  all out of objects, time to start working 
    return initial;
  //  now that we're back, we need to go deeper
  // console.log(fn)
  var latest = fn(arr[0]);
  var rest = arr.slice(1);
  var p = reduce(rest, fn, initial);
  return latest.concat(p);
}