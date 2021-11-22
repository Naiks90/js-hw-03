const findBestEmployee = function (employees) {
  const allEmployee = Object.keys(employees);
  let BestEmployee = allEmployee[0];

  for (let i = 0; i < allEmployee.length; i += 1) {
    if (employees[allEmployee[i]] > employees[BestEmployee]) {
      BestEmployee = allEmployee[i];
    }
  }
  return BestEmployee;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
