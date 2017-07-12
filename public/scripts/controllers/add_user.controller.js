
  myApp.controller('Add_userController', ['FactoryFactory', function(FactoryFactory) {
    console.log('Add_userController running');


      var self = this;
// calls DB on init for all companies
      FactoryFactory.getAllCompanies();
      self.allCompanies = FactoryFactory.allCompanies;

      self.message = 'angular sourced';

// button click to add new user to DB
      self.addNewUser = function(newUser) {
        console.log('New User', newUser);
        FactoryFactory.addNewUser(newUser);
        // empties inputs after submit
        self.newUser = {};
        self.password = '';
      }


// delete after testing
      self.addNewInspectionForm = function() {
          console.log("button click");
      };







    self.addNewLog = function() {
      console.log("this works!");
    }



    }]); // end controller code block
