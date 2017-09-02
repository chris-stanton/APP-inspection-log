
myApp.controller('SignatureController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('SignatureController Running...');

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
    var signature = {
      newInspectionSite_Id : newInspectionSite_Id,
      users_id : signature.users_id,
      inspected_date : new Date(signature.inspected_date).toDateString()
    }
    console.log('signature: ', signature);
    FactoryFactory.completeInspection(signature);
  }

}]);//end of myApp.controller
