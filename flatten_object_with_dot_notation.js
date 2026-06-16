const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
};

const flatten = (obj) => {
  let result = {}
  for(const i in obj) {
    if(typeof obj[i] === 'object' ){
      const temp = flatten(obj[i])
      for(const j in temp) {
        result[i+'.'+j] = temp[j]
      }
    } else {
      result[i] = obj[i]
    }
  }
  return result
}

console.log(flatten(nested));