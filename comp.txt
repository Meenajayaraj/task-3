let obj1=
{
Name : "person1",
age : 5,
};
let obj2=
{
    age : 5,
    Name : "person1",
};
console.log(Object.is(obj1,obj2));