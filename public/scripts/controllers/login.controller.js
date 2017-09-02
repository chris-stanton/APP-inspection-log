
myApp.controller('LoginController',['$http', '$location', 'UserService',function($http, $location, UserService) {

  console.log('LoginController Running...');

    var self = this;
    self.user = {
      username: '',
      password: ''
    };
    self.message = '';

    self.login = function() {
      if(self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
      } else {
        console.log('LoginController -- login -- sending to server...', self.user);
        $http.post('/', self.user).then(function(response) {
          if(response.data.username) {
            console.log('LoginController -- login -- success: ', response.data);
            // location works with SPA (ng-route)
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
    }


}]); // end app.controller
