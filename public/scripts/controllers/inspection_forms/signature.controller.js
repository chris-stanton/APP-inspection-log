
myApp.controller('SignatureController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('SignatureController');

  var self = this;

  self.message = 'angular sourced';

  self.completeInspection = function(signature) {
    console.log(signature);
     $location.path('/dashboard')
  }

}]);//end of myApp.controller
