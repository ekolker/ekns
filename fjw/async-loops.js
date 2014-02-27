function loadUsers(userIds, load, done)
{
  var users = [];
  
  // for (var i = 0; i < userIds.length; i++)
  // {
  //   users.push(load(userIds[i]));
  // }

  // userIds.forEach(function(id)
  // {
  //   users.push(load(id, done));
  // });



  var completed = 0;

  userIds.forEach(function(id, index)       //  TIL: the second argument to the callback given to forEach is the index of the element (#1) in the original array (#3)
  {
    load(id, function(user)
    {
      users[index] = user;                  //  assign it
      if (++completed === userIds.length)   //  check it
      {
        return done(users);                 //  only return when we're actually done
      }
    });
  });
}

module.exports = loadUsers;