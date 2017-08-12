myApp.controller('Manage_inspectionsController',['DataFactory', 'UserService',function(DataFactory, UserService) {

  console.log('Manage_inspectionsController running');

  var self = this;
  var user = UserService.userObject;
  var user_id = user.user_id;
  console.log('user_id: ', user_id);

  self.message = 'angular sourced';







}]);//end of myApp.controller
