
myApp.controller('Page_sevenController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sevenController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page seven newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    console.log();
    $location.path('/file_upload');
  };

}]);//end of myApp.controller
