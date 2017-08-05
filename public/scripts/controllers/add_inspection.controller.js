myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_inspectionController running');

  var self = this;

  self.message = 'angular sourced';


  self.addInspectionSite = function(inspectionSite) {
    var inspectionSite = {
      users_id : "null",
      companies_id : inspectionSite.companies_id,// dont have
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
    // FactoryFactory.addInspectionSite(inspectionSite);
  }; //end of addInspectionForm


}]); //end of myApp.controller
