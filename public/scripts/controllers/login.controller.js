
myApp.controller('LoginController', function() {
  console.log('LoginController running');

  var self = this;


  self.message = 'angular sourced';


// button click from to check login username and password
  self.checkLogin = function(login) {
    console.log(login);

// checks to see is user entered both username and password
    if (login.username == null) {
      console.log("enter username");
        alertify.alert("Please Enter USERNAMETo Continue");
    } else if (login.password == null) {
      console.log("enter password");
        alertify.alert("Please Enter PASSWORD To Continue");
    } else if (login.username == null && login.password == null){
      console.log("enter username and password");
        alertify.alert("Please Enter USERNAME And PASSWORD To Continue");
    } else {
      self.login = {};
    } // end of else if

  }; // end checkLogin()



}); // end controller code block
