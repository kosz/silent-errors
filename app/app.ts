import './test/jspm-test-service';
angular.module('bootstrapedModule', ['theAppImAddingTo']);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['bootstrapedModule']);
});
