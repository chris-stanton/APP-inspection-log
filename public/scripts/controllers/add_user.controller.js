
  myApp.controller('Add_userController', function() {
    console.log('Add_userController running');


      var self = this;


      self.message = 'angular sourced';

// button click to add new user to DB
      self.addNewUser = function(newUser) {
        console.log(newUser);
        alertify.success('Success message');
        self.newUser = {};
      }



    }); // end controller code block
