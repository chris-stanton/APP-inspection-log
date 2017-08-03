
myApp.controller('New_inspectionController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('New_inspectionController');

  var self = this;

// calls DB on init for all companies
  FactoryFactory.getAllCompanies();//needs to be refactored to only company site names
// calss DB on init for all employee names
  FactoryFactory.getAllEmployeeNames();


  self.message = 'angular sourced';
// all companies for DB
  self.allCompanies = FactoryFactory.allCompanies;
// all employee names from DB
  self.allEmployeeNames = FactoryFactory.allEmployeeNames;

// next button click listener
  self.nextPage = function(newInspection) {
    console.log(newInspection);
    $location.path('/page_two');
  };

}]);//end of myApp.controller
