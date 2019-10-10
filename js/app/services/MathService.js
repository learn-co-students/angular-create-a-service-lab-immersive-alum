function MathService() {
  this.sum = function(array){
    array.reduce((a, b) => a + b, 0);
  };
}

angular
  .module('app')
  .service('MathService', MathService);