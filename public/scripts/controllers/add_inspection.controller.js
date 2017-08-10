myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_inspectionController running');

  var self = this;

// gets all companys on init
  FactoryFactory.getAllCompanies();

  self.message = 'angular sourced';
// return of all companies from db
  self.allCompanies = FactoryFactory.allCompanies;

  self.addInspectionSite = function(inspectionSite) {
    var inspectionSite = {
      users_id : "null",
      companies_id : inspectionSite.companies_id,
      contactName : inspectionSite.contactName,
      companyName : inspectionSite.companyName,
      licenseNumber : inspectionSite.licenseNumber,
      streetAddress : inspectionSite.streetAddress,
      city : inspectionSite.city,
      state : inspectionSite.state,
      zipCode : inspectionSite.zipCode,
      country : inspectionSite.country,
      phone : inspectionSite.phone,
      email : inspectionSite.email,
      fax : inspectionSite.fax,
      schedualedDate : inspectionSite.schedualedDate,
      inspectedDate : "null"
    }
    console.log('inspectionSite: ', inspectionSite);
    FactoryFactory.addInspectionSite(inspectionSite);
  }; //end of addInspectionForm


}]); //end of myApp.controller
