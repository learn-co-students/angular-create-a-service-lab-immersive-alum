// Your code here!

function MathService() {
  this.sum = function(arr) {
    return arr.reduce((a,b) => {return a+b})
  }
}

angular
  .module('app')
  .service("MathService", MathService)
