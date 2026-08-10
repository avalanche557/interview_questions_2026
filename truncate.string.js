// Input:
// truncate("What I'd like to tell on this topic is:", 20)

// Output:
// "What I'd like to tel..."


const truncate = (string, target) => {
  if(string.length < target) {
    return string
  } else {
    const temp = string.slice(0, target)
    return `${temp}...`
  }
  
}


console.log(truncate("What I'd like to tell on this topic is:", 20))