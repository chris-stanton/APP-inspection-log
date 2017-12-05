
  myApp.controller('Add_userController', ['FactoryFactory', '$location', '$http', 'alertify', function(FactoryFactory, $location, $http, alertify) {
    console.log('Add_userController Running...');

      var self = this;

// calls DB on init for all companies
      FactoryFactory.getAllCompanies();

      self.message = 'angular sourced';
// all companies form db
      self.allCompanies = FactoryFactory.allCompanies;

// button click to add new user to DB
      self.addNewUser = function(user) {
        console.log('user', user);
        if(self.user.username === '' || self.user.password === '') {
          alertify.error("Missing Credentials! Please try again");
          // self.error = "Missing Credentials! Please try again";
        } else {
          console.log('registerUser -- sending to server...', self.user);
          $http.post('/register', self.user).then(function(response) {
            console.log('registerUser -- success');
            alertify.success('User profile was added to DB');
            $location.path('/dashboard');
          }).catch(function(response) {
            alertify.error("Missing Credentials! Please try again");
            // self.error = "Please try again."
            console.log('registerUser -- error');
          })
        }
      }; // end addNewUser()


    }]); // end controller code block
