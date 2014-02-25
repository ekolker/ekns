module.exports = function getShortMessages(things)
{
  return things.filter(function(thing)
                {
                  return (thing.message.length < 50);
                })
                .map(function(thing)
                {
                  return thing.message;
                });
}