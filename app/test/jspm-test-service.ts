'format esm';
console.log('i always print');
//throw new Error('error outside');
angular.module('theAppImAddingTo').factory(
  'myService', [
  function() {
    throw new Error('inside error');
    console.log('i never print');
  }]);
