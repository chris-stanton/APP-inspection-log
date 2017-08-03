
myApp.controller('Page_sixController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sixController');

  var self = this;

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    console.log();
    $location.path('/page_seven');
  };

}]);//end of myApp.controller
