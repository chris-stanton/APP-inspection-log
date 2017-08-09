
// myApp.controller('LoginController', function() {
//   console.log('LoginController running');
//
//   var self = this;
//
//
//   self.message = 'angular sourced';
//
//
// // button click from to check login username and password
//   self.checkLogin = function(login) {
//     console.log(login);
//
// // checks to see is user entered both username and password
//     if (login.username == null) {
//       console.log("enter username");
//         alertify.alert("Please Enter USERNAME To Continue");
//     } else if (login.password == null) {
//       console.log("enter password");
//         alertify.alert("Please Enter PASSWORD To Continue");
//     } else if (login.username == null && login.password == null){
//       console.log("enter username and password");
//         alertify.alert("Please Enter USERNAME And PASSWORD To Continue");
//     } else {
//       self.login = {};
//     } // end of else if
//
//   }; // end checkLogin()
//
//
//
// }); // end controller code block

myApp.controller('LoginController', function($http, $location, UserService) {

console.log('LoginController Working...');
    var vm = this;
    vm.user = {
      username: '',
      password: ''
    };
    vm.message = '';

    vm.login = function() {
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Enter your username and password!";
      } else {
        console.log('LoginController -- login -- sending to server...', vm.user);
        $http.post('/', vm.user).then(function(response) {
          if(response.data.username) {
            console.log('LoginController -- login -- success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/dashboard');
          } else {
            console.log('LoginController -- login -- failure: ', response);
            vm.message = "Wrong!!";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          vm.message = "Wrong!!";
        });
      }
    };

    vm.registerUser = function() {
      console.log('LoginController -- registerUser');
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Choose a username and password!";
      } else {
        console.log('LoginController -- registerUser -- sending to server...', vm.user);
        $http.post('/register', vm.user).then(function(response) {
          console.log('LoginController -- registerUser -- success');
          $location.path('/dashboard');
        }).catch(function(response) {
          console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
      }
    }


});
