
myApp.controller('LoginController',['$http', '$location', 'UserService',function($http, $location, UserService) {

  console.log('LoginController Running...');

    var self = this;
// setting user variable to empty string on init
    self.user = {
      username: '',
      password: ''
    };
// setting message to empty string on init
    self.message = '';

// login button click
    self.login = function() {
      if(self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
      } else {
        console.log('LoginController -- login -- sending to server...', self.user);
        $http.post('/', self.user).then(function(response) {
          if(response.data.username) {
            console.log('LoginController -- login -- success: ', response.data);
            // redirect if login is successfull
            $location.path('/dashboard');
          } else {
            console.log('LoginController -- login -- failure: ', response);
            self.message = "Wrong!!";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          self.message = "Wrong!!";
        })
      }
    } // end login

}]); // end app.controller
