
myApp.controller('Start_inspectionController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Start_inspectionController');

  var self = this;
  var inspectionSite_Id = 1;
// calls DB for all active inspection sites
  FactoryFactory.getAllInspectionSites(inspectionSite_Id);


  self.message = 'angular sourced';
// all companies for DB
  self.allInspectionSites = FactoryFactory.allInspectionSites;

// next button click listener
  self.nextPage = function(newInspection) {
    console.log(newInspection);
    $location.path('/page_two');
  };

}]);//end of myApp.controller
