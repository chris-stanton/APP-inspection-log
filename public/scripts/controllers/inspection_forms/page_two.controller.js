
myApp.controller('Page_twoController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_twoController');

  var self = this;

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(inspectionFormTwo) {
    console.log(inspectionFormTwo);
    $location.path('/page_three');
    };

}]);//end of myApp.controller
