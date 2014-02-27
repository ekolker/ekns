function repeat(operation, num)
{
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) 
  {
    return 0;
  }

  return function()
    {
      operation();
      return repeat(operation, --num);
    }
}

function trampoline(fn)
{
  // You probably want to implement a trampoline!
  while (fn != 0)
  {  
    fn = fn();
  }
}

module.exports = function(operation, num)
{
  // You probably want to call your trampoline here!
  trampoline(function()
    {
      return repeat(operation, num);
    });
}





























//  answer

// function repeat(operation, num)
// {
//   if (num <= 0)
//   {
//     return;
//   }
//   return function()
//     {
//       operation();
//       return repeat(operation, --num);
//     };
// }

// function trampoline(fn)
// {
//   while (fn && typeof fn === 'function')
//   {
//     fn = fn();
//   }
// }

// module.exports = function(operation, num)
// {
//   trampoline(function()
//     {
//       return repeat(operation, num);
//     });
// }