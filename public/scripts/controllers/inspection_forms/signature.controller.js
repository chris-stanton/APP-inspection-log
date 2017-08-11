
myApp.controller('SignatureController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('SignatureController');

  var self = this;
  self.message = 'angular sourced';

// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('signature newInspectionSite_Id: ', newInspectionSite_Id.id);
      var newInspectionSite_Id = newInspectionSite_Id.id;

// inspector's company ID
  var company_id = $routeParams;
    console.log('signature company_id: ', company_id.company_id);
      var company_id = company_id.company_id;

// gets all users that match company_id
  FactoryFactory.getUserByCompanyId(company_id);
// return of all users that match company_id
  self.company = FactoryFactory.company;


  self.completeInspection = function(signature) {
    console.log(signature);
    // send to factory to update inspection site info
     $location.path('/dashboard')
  }

}]);//end of myApp.controller
