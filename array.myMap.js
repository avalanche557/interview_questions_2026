//this is a pollyfil for array.map function

Array.prototype.myMap = function(callback) {
    const result = []
    for(let i = 0; i < this.length; i++){
        const temp = callback(this[i], i, this)
        result.push(temp)
    }
    return result
}