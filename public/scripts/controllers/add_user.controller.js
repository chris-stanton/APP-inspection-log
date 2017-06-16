
  myApp.controller('Add_userController', ['FactoryFactory', function(FactoryFactory) {
    console.log('Add_userController running');


      var self = this;


      self.message = 'angular sourced';

// button click to add new user to DB
      self.addNewUser = function(newUser) {
        console.log('New User', newUser);
        FactoryFactory.addNewUser(newUser);
        // empties inputs after submit
        self.newUser = {};
        self.password = '';
      }



    }]); // end controller code block
