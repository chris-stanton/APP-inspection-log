myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

console.log('Add_inspectionController running');

var self = this;
self.message = 'angular sourced';


self.submitInspectionForm = function(inspectionForm) {
  console.log(inspectionForm);
  self.inspectionForm = {};
}; //end of addInspectionForm



self.addNewLog = function() {
  console.log("this works!");
}



}]); //end of myApp.controller
