
myApp.controller('Page_fiveController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_fiveController');

  var self = this;

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    console.log();
    $location.path('/page_six');
  };

}]);//end of myApp.controller
