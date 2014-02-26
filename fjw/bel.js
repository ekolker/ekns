function repeat(operation, num) {
  //      original
  // 
  // // modify this so it can be interrupted
  // if (num <= 0)
  // {
  //   return;
  // }
  // operation();
  // return repeat(operation, --num);
  // 

  // console.log(num);
  
  if (num <= 0)
  {
    return;
  }

  setInterval(operation, 1);
  return repeat(operation, (num - 1)/10);   //  this is clearly a hack, but if it was just num-1 it would exceed the stack size
}

module.exports = repeat;



/*
nominal solution:

  function repeat(operation, num) {
    if (num <= 0) return

    operation()

    // release control every 10 or so
    // iterations.
    // 10 is arbitrary.
    if (num % 10 === 0) {
      setTimeout(function() {
        repeat(operation, --num)
      })
    } else {
      repeat(operation, --num)
    }
  }

  module.exports = repeat
