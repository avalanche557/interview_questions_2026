Input:
function a(x, y) {
  return new Promise(resolve => setTimeout(() => resolve(x * y), 100));
}

function b(z) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(z + 5), 100));
}

function c(r) {
  return new Promise(resolve => setTimeout(() => resolve(r / 10), 100));
}

const composeAsync = (...functions) => {
  return async(...inputs)  => {
    const reverseFunctionList = functions.reverse()
    let result = inputs
    for(let fn of reverseFunctionList) {
      result = await fn(...(Array.isArray(result) ? result : [result]))
    }
    return result
  }
}

// create this function
composeAsync(c, b, a)(5, 3).then(result => { console.log(result); }).catch(console.error);