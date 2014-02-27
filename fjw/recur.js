function getDependencies(tree)
{
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.

  var myDeps = {}

  // console.log()
  // console.log()
  // console.log('--> t');
  // console.log(tree);

  if (typeof tree == 'undefined')
  {
    // console.log('--> no tree');
    return [];
  }

  // console.log('--> Okt:');
  // console.log(Object.keys(tree));

  if (typeof  tree.dependencies == 'undefined')
  {
    // console.log('--> tree has no dependencies');
    return [];  //  nothing to add to the tree
  }


  else          //  get to work
  {

    // console.log()
    // console.log()
    // // console.log('Okt:');
    // // console.log(Object.keys(tree));
    // console.log('--> t');
    // console.log(tree);
    // console.log('Fc:');
    // console.log(Function.name);
    // console.log('--> Getting these dependencies:');
    // console.log(tree.dependencies);
    // console.log('Oktd:');
    // console.log(Object.keys(tree.dependencies));
    // console.log()
    // console.log('individual dependencies:')

    //  load all the individual dependencies
    Object.keys(tree.dependencies).forEach(function(individualDependency)
    {

      // console.log(individualDependency, tree.dependencies[individualDependency], tree.dependencies[individualDependency].version);

      //  in it goes as (name@ver: 1)
      myDeps[individualDependency + '@' + tree.dependencies[individualDependency].version] = 1;
      // console.log('added this dependency: "' + individualDependency + '@' + tree.dependencies[individualDependency].version + '"');

      //  he's in, now recur for his dependencies

      // console.log('--> t')
      // console.log(tree)
      // console.log()
      // console.log('--> tdid')
      // console.log(tree.dependencies[individualDependency])

      // console.log('------> going deeper')
      // var myDepsDeps = getDependencies(tree.dependencies[individualDependency].dependencies);
      var myDepsDeps = getDependencies(tree.dependencies[individualDependency]);
      // console.log('------> woke up')
      // var myDepsDeps = getDependencies(tree.dependencies);

      // console.log('children of ' + individualDependency + '@' + tree.dependencies[individualDependency].version + '\'s dependencies:');
      // console.log(myDepsDeps);
      //  combine the two by inserting all the child's deps into the parent's
      // console.log('combined dependencies, got:');
      myDepsDeps.forEach(function(childDependency)
      {
        // console.log('adding ' + childDependency)
        myDeps[childDependency] = 1;
      })
      // console.log(myDeps);
    });

    // console.log('------> waking up');
    return Object.keys(myDeps).sort();   //  return an array..sorted
  }

  
  // tree.dependencies.forEach(function(individualDependency)    //  for each dependency in the tree
  // {
  //   var name = individualDependency.name;         //  get the name
  //   var version = individualDependency.version;   //  the version
  //   var fullDependency = name + '@' + version;    //  comibine them

  //   myDeps[fullDependency] = 1;                   
  // });

  // console.log(myDeps)
  // //  now i've got all of my direct dependencies... need to recur for each direct dependency to get inherited dependecies

  

  // else  //  we have no dependencies, so we've reached the base case
  // {  
  //   return [];
  // }

  return 1;
}

module.exports = getDependencies