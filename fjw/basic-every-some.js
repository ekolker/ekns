module.exports = function checkUsersValid(goodUsers)
{
  return function(submittedUsers)
  {
    return submittedUsers.every(function(submittedUser)
    {
      // console.log(submittedUser)      
      return goodUsers.some(function(possiblyGoodUser)
      {
        // console.log(submittedUser)
        return possiblyGoodUser.id == submittedUser.id;
      });
    })
  };
}