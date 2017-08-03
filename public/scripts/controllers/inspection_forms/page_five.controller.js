
myApp.controller('Page_fiveController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_fiveController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page five newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
    $location.path('/page_six/' + $routeParams.newInspectionSite_Id);
  };

}]);//end of myApp.controller
