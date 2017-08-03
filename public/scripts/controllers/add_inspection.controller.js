myApp.controller('Add_inspectionController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_inspectionController running');

  var self = this;

  self.message = 'angular sourced';


  self.addInspectionSite = function(inspectionSite) {
    console.log('inspectionSite: ', inspectionSite);
    FactoryFactory.addInspectionSite(inspectionSite);
  }; //end of addInspectionForm


}]); //end of myApp.controller
