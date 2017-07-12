
myApp.controller('Add_companyController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_companyController running');


  var self = this;


  self.message = 'angular sourced';

  self.addNewCompany = function(newCompany) {
    console.log(newCompany);

    if (newCompany.companyName == null) {
      console.log("enter company name");
        alertify.alert("Please Enter Company Name To Continue");
    } else if (newCompany.streetAddress == null) {
      console.log("enter street address");
        alertify.alert("Please Enter Street Address To Continue");
    } else if (newCompany.city == null) {
      console.log("enter city");
        alertify.alert("Please Enter City To Continue");
    } else if (newCompany.state == null) {
      console.log("enter state");
        alertify.alert("Please Enter State To Continue");
    } else if (newCompany.zipCode == null) {
      console.log("enter zip code");
        alertify.alert("Please Enter Zip Code To Continue");
    } else if (newCompany.contry == null) {
      console.log("enter contry");
        alertify.alert("Please Enter Country To Continue");
    } else {
      // FactoryFactory.addNewCompany(newCompany);
      self.newCompany = {};
    } // end of else if

  }; // end addNewCompany()


}]);//end of myApp.controller
