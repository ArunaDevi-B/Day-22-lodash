const myList = [
    "Cookies",
    "Icecream",
    "Biscuits",
    "Chocolates",
    "Drinks",
    "Chips",
  ];
  var users = [
    { user: "disney", age: 24, active: true },
    { user: "jacob", age: 07, active: true },
    { user: "Eby", age: 19, active: false },
    { user: "Jency", age: 92, active: true },
    { user: "Antony", age: 15, active: false },
    { user: "Steve", age: 44, active: true },
    { user: "Celina", age: 28, active: false },
  ];
  
  //chunk() Method
  const chunk = _.chunk(myList, 3);
  console.log(chunk);
  document.write(chunk);
  
  //reduce() method
  const reduce = _.reduce(
    myList,
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    },
    []
  );
  console.log(reduce);
  
  //filter() method
  const filter = _.filter(users, function (result) {
    return !result.active;
  });
  console.log(filter);
  
  //find() method
  const find = _.find(users, function (result) {
    return result.age < 30;
  });
  console.log(find);
  
  //sum() method
  const sum = _.sum([12, 26,38, 49, 53, 65]);
  console.log(sum);