myApp.controller('Manage_inspectionsController',['FactoryFactory', 'UserService',function(FactoryFactory, UserService) {

  console.log('Manage_inspectionsController running');
  var self = this;
  self.message = 'angular sourced';

  self.logout = UserService.logout;
  var user = UserService.userObject;
  console.log('user ', user);


}]);//end of myApp.controller
