
  myApp.controller('Add_userController', ['FactoryFactory', '$location', '$http', function(FactoryFactory, $location, $http) {
    console.log('Add_userController running');

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
          self.message = "Choose a username and password!";
        } else {
          console.log('LoginController -- registerUser -- sending to server...', self.user);
          $http.post('/register', self.user).then(function(response) {
            console.log('LoginController -- registerUser -- success');
            alertify.success('User profile was added to DB');
            $location.path('/dashboard');
          }).catch(function(response) {
            console.log('LoginController -- registerUser -- error');
            self.message = "Please try again."
          })
        }
      }; // end addNewUser()


    }]); // end controller code block
