
myApp.controller('Page_sevenController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sevenController');

  var self = this;

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    console.log();
    $location.path('/file_upload');
  };

}]);//end of myApp.controller
