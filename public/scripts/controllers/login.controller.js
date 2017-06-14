
myApp.controller('LoginController', function() {
  console.log('LoginController running');

  var self = this;


  self.message = 'angular sourced';


// button click from to check login username and password
  self.checkLogin = function(login) {
    console.log(login);
    self.login = {};
  }



}); // end controller code block
