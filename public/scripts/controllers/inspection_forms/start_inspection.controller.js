
myApp.controller('Start_inspectionController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Start_inspectionController');

  var self = this;
// inspection site users companies_id value - hard coded needs to change from user to user
  var company_Id = 1;


// calls DB for all active inspection sites
  FactoryFactory.getAllInspectionSites(company_Id);


  self.message = 'angular sourced';
// all companies for DB
  self.allInspectionSites = FactoryFactory.allInspectionSites;

// next button click listener
  self.nextPage = function(newInspectionId) {
    console.log(newInspectionId.inspectionSiteId);
    $routeParams.newInspectionSite_Id = newInspectionId.inspectionSiteId;
    $location.path('/page_two/' + $routeParams.newInspectionSite_Id);
  };

}]);//end of myApp.controller
