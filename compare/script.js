let object1 = {
    name: 'Person1',
    age: 5,
    country:'india',
  };
      
  let object2 = {
    age: 5,
    country:'india',
    name: 'Person1',
  };
      let flag = true;
      if(Object.keys(object1).length== Object.keys(object2))
      {
        for ( key in object1)
        {
          if(object1[key]==object2[key])
          {
            continue;
          }
          else
          {
            flag = false;
            break;
          }
        } 
      }
      else
      {
        flag=false;
      }
      console.log("object is"+ flag);
      