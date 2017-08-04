
myApp.controller('Page_threeController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_threeController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page three newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// button click to submit data to DB
  self.nextPage = function(pageThree){
    FactoryFactory.postPageThree(pageThree)
  }

}]);//end of myApp.controller
