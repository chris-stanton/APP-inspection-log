
myApp.controller('SignatureController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('SignatureController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('signature newInspectionSite_Id: ', newInspectionSite_Id.id);


  self.message = 'angular sourced';

  self.completeInspection = function(signature) {
    console.log(signature);
     $location.path('/dashboard')
  }

}]);//end of myApp.controller
