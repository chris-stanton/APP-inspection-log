
myApp.controller('Add_companyController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_companyController running');


  var self = this;


  self.message = 'angular sourced';

  self.addNewCompany = function(newCompany) {
    console.log(newCompany);

    if (newCompany.companyName == null) {
      console.log("enter company name");
        alertify.alert("Please Enter COMPANY NAME To Continue");
    } else if (newCompany.streetAddress == null) {
      console.log("enter street address");
        alertify.alert("Please Enter STREET ADDRESS To Continue");
    } else if (newCompany.city == null) {
      console.log("enter city");
        alertify.alert("Please Enter CITY To Continue");
    } else if (newCompany.state == null) {
      console.log("enter state");
        alertify.alert("Please Enter STATE To Continue");
    } else if (newCompany.zipCode == null) {
      console.log("enter zip code");
        alertify.alert("Please Enter ZIP CODE To Continue");
    } else if (newCompany.country == null) {
      console.log("enter contry");
        alertify.alert("Please Enter COUNTRY To Continue");
    } else {
      // FactoryFactory.addNewCompany(newCompany);
      self.newCompany = {};
    } // end else if

  }; // end addNewCompany()


}]);//end of myApp.controller
