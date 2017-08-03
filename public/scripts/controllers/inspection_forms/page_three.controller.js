
myApp.controller('Page_threeController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_threeController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page three newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// button click to submit data to DB
  self.nextPage = function(inspectionFormThree){
    $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
    $location.path('/page_five/' + $routeParams.newInspectionSite_Id);
  }

}]);//end of myApp.controller
