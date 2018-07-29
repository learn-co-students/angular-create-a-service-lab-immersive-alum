// Your code here!
function MathService(){
  this.sum = (arr) => {
    return arr.reduce((a, b) => {
      return a + b
    })
  }
}

angular
  .module('app')
  .service('MathService', MathService)
