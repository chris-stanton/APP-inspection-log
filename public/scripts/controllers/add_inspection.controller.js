myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

console.log('Add_inspectionController running');

var self = this;
self.message = 'angular sourced';


self.addInspectionForm = function(inspectionForm) {
  console.log(inspectionForm);
};



}]);//end of myApp.controller
