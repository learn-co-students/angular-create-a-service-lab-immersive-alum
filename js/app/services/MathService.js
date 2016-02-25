// Your code here!
function MathService(){
  this.sum = function(arr){
    var total = 0;
    arr.forEach(function(number){
      total += number;
    })
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService)
