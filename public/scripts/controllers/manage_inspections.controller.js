myApp.controller('Manage_inspectionsController',['DataFactory', 'UserService',function(DataFactory, UserService) {

  console.log('Manage_inspectionsController Running...');

  var self = this;
// data from services API
  var user = UserService.userObject;
  var user_id = user.user_id;

  self.message = 'angular sourced';

// gets user inspection data on init by user_id
  DataFactory.getInspectionSitesByUser_id(user_id);
// return of user inspection data from DB
  self.inspectionSitesByUser_id = DataFactory.inspectionSitesByUser_id;





}]);//end of myApp.controller
