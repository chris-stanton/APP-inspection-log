
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
      // checking for null login values
      if(self.user.username === '' && self.user.password === '') {
        self.message = "Enter your Username and Password";
      } else if (self.user.username === '' && self.user.password !== '' ){
        self.message = "Enter Username";
      } else if (self.user.password === '' && self.user.username !== ''){
        self.message = "Enter your Password";
      } else {
        // if login credentials are correct
        console.log('Login credentials sent to server...', self.user);
        $http.post('/', self.user).then(function(response) {
          if(response.data.username) {
            console.log('Login success: ', response.data);
            // redirect if login is successfull
            $location.path('/dashboard');
          } else {
            console.log('Login failure response: ', response);
            self.message = "Wrong Login Credentials";
          }
        }).catch(function(response){
          console.log('Register User failure response: ', response);
          self.message = "Wrong Login Credentials";
        })
      } // end else
    }; // end login


}]); // end app.controller
