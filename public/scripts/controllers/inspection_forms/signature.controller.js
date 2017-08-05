
myApp.controller('SignatureController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('SignatureController');

  var self = this;
  self.message = 'angular sourced';

// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('signature newInspectionSite_Id: ', newInspectionSite_Id.id);

// inspector's company ID
  var company_id = $routeParams;
    console.log('signature company_id: ', company_id.company_id);
      var company_id = company_id.company_id;

  FactoryFactory.getUserByCompanyId(company_id);
  self.company = FactoryFactory.company;



  self.completeInspection = function(signature) {
    console.log(signature);
     $location.path('/dashboard')
  }

}]);//end of myApp.controller
