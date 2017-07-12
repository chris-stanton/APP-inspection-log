myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

console.log('Add_inspectionController running');

var self = this;
self.message = 'angular sourced';


self.submitInspectionForm = function(inspectionForm) {
  console.log(inspectionForm);
  self.inspectionForm = {};
}; //end of addInspectionForm


}]); //end of myApp.controller
