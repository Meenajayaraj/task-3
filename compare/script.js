let object1 = {
    name: 'Person1',
    age: 5
    country:'india'
  };
      
  let object2 = {
    age: 5,
    country:'india',
    name: 'Person1',
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
      
  _.isEqual(object1, object2)
