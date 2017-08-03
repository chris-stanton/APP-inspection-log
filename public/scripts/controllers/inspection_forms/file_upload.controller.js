
myApp.controller('File_uploadController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('File_uploadController');

  var self = this;

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    console.log();
    $location.path('/signature');
  };

}]);//end of myApp.controller
