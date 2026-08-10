//this is a pollyfil for array.filter function


Array.prototype.myFilter = function(callback) {
    const result = []
    //this here referes to the array
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}