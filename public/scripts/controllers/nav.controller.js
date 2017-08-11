
myApp.controller('NavController',['$location', 'UserService',function($location, UserService) {

  console.log('NavController Working...');

  var self = this;

//gets authenticed user's info from service
  self.logout = UserService.logout;
  var user = UserService.userObject;

// username for DOM
  self.userName = user.userName;



}]); // end app.controller
