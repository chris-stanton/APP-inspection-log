myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_inspectionController running');

  var self = this;

  self.message = 'angular sourced';


  self.submitInspectionLocation = function(inspectionLocation) {
    console.log(inspectionLocation);
    self.inspectionLocation = {};
  }; //end of addInspectionForm


}]); //end of myApp.controller
