
myApp.controller('Start_inspectionController',['FactoryFactory', 'UserService', '$location', '$routeParams',function(FactoryFactory, UserService, $location, $routeParams) {

  console.log('Start_inspectionController');

  var self = this;
  var user = UserService.userObject;
  var companies_id = user.companies_id;

  self.message = 'angular sourced';

// gets all active inspection sites by companies_id
  FactoryFactory.getAllInspectionSites(companies_id);
// all companies for DB
  self.allInspectionSites = FactoryFactory.allInspectionSites;

// next button click listener
  self.nextPage = function(newInspectionId) {
    $routeParams.newInspectionSite_Id = newInspectionId.inspectionSiteId;
    $routeParams.company_id = companies_id;
    $location.path('/page_two/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
  };

}]);//end of myApp.controller
