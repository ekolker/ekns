function recur (func, num)
{
  recur(func, num - 1);
}

exports = {recur};