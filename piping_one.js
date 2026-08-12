const pipe = (...args) => {
  return function (value) {
    const fun = [...args]
    let res = value
    for (let i = 0; i < fun.length; i++) {
      res = fun[i](res)
    }
    return res
  }
}


//Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax
)({ salary: 10000 });
console.log(result)

// Output:
// 7700