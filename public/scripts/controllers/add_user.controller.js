
  myApp.controller('Add_userController', ['FactoryFactory', function(FactoryFactory) {
    console.log('Add_userController running');

      var self = this;

// calls DB on init for all companies
      FactoryFactory.getAllCompanies();

      self.message = 'angular sourced';
      self.allCompanies = FactoryFactory.allCompanies;

// button click to add new user to DB
      self.addNewUser = function(newUser) {
        console.log('New User', newUser);

        // checks for all inputs to have data
        if (newUser.firstName == null) {
          console.log("enter first name");
            alertify.alert("Please Enter FIRST NAME To Continue");
        } else if (newUser.lastName == null) {
          console.log("enter last name");
            alertify.alert("Please Enter LAST NAME To Continue");
        } else if (newUser.username == null) {
          console.log("enter username");
            alertify.alert("Please Enter USERNAME To Continue");
        } else if (newUser.password == null) {
          console.log("enter password");
            alertify.alert("Please Enter PASSWORD To Continue");
        } else if (newUser.companyId == null) {
          console.log("select company");
            alertify.alert("Please Select YOUR COMPANY To Continue");
        } else {
          FactoryFactory.addNewUser(newUser);
          // empties inputs after submit
          self.newUser = {};
          self.password = '';
        }

      }; // end addNewUser()


    }]); // end controller code block
