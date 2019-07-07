// Your code here!
function MathService(){
  this.sum = (arr) => {
    let result = 0
    arr.forEach(num => result += num)
    return result
  }
}

angular
  .module('app')
  .service('MathService', MathService)
