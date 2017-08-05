
myApp.controller('Start_inspectionController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Start_inspectionController');

  var self = this;

// gets all companies on init
  FactoryFactory.getAllCompanies();
// return of all companies on init
  self.allCompanies = FactoryFactory.allCompanies;

  self.getInspectionSites = function(company) {
    // inspection site users companies_id value
    var company_Id = company.company_id;
    console.log('company_Id: ', company_Id);
    // calls DB for all active inspection sites
    FactoryFactory.getAllInspectionSites(company_Id);

}


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
