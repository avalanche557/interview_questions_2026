const myPromiseAll = (taskList) => {
    const result = []
    let promiseResolveCount = 0
    return new Promise((resolve, reject) => {
         taskList.forEach(task => {
            task.then((value, index) => {
                result[index] = value
                promiseResolveCount += 1
                if(taskList.length === promiseResolveCount) {
                    resolve(result)
                }
            }).catch(error => {
                reject(error)
            })
         });
    })
}



//Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

function task2(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(time < 3000){
        reject("Rejected");
      }else{
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

//Output:
//"got results" [1000,5000,3000]