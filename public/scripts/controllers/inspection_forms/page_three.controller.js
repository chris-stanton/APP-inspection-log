
myApp.controller('Page_threeController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_threeController');

  var self = this;

  self.message = 'angular sourced';

// button click to submit data to DB
  self.nextPage = function(inspectionFormThree){
    console.log(inspectionFormThree);
    $location.path('/page_five');
  }

}]);//end of myApp.controller
