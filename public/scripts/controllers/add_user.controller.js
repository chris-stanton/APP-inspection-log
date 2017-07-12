
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

        if (newUser.firstName == null) {
          console.log("enter first name");
            alertify.alert("Please Enter First Name To Continue");
        } else if (newUser.lastName == null) {
          console.log("enter last name");
            alertify.alert("Please Enter Last Name To Continue");
        } else if (newUser.username == null) {
          console.log("enter username");
            alertify.alert("Please Enter Username To Continue");
        } else if (newUser.password == null) {
          console.log("enter password");
            alertify.alert("Please Enter Password To Continue");
        } else if (newUser.companyId == null) {
          console.log("select company");
            alertify.alert("Please Select Your Company To Continue");
        } else {
          FactoryFactory.addNewUser(newUser);
          // empties inputs after submit
          self.newUser = {};
          self.password = '';
        }

      }; // end addNewUser()


    }]); // end controller code block
