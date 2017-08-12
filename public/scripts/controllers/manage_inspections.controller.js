myApp.controller('Manage_inspectionsController',['DataFactory', 'UserService',function(DataFactory, UserService) {

  console.log('Manage_inspectionsController running');

  var self = this;
// data from services API
  var user = UserService.userObject;
  var user_id = user.user_id;

  self.message = 'angular sourced';

  DataFactory.getInspectionSitesByUser_id(user_id);
  self.inspectionSitesByUser_id = DataFactory.inspectionSitesByUser_id;





}]);//end of myApp.controller
