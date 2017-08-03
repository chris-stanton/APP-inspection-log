
myApp.controller('Page_sixController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sixController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page six newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function() {
    $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
    $location.path('/page_seven/' + $routeParams.newInspectionSite_Id);
  };

}]);//end of myApp.controller
