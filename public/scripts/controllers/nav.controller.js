
myApp.controller('NavController',['$location', 'UserService',function($location, UserService) {

  console.log('NavController Running...');

  var self = this;

//gets authenticed user's info from service
  var user = UserService.userObject;
  self.userName = user.userName;
  self.companies_id = user.companies_id;

// calls service to log user out of session
  self.logout = UserService.logout;

}]); // end app.controller
