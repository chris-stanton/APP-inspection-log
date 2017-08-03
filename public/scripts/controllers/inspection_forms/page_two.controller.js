
myApp.controller('Page_twoController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_twoController');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page two newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(inspectionFormTwo) {
    $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
    $location.path('/page_three/' + $routeParams.newInspectionSite_Id);
    };

}]);//end of myApp.controller
