
myApp.controller('Page_threeController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_threeController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page three newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// button click to submit data to DB
  self.nextPage = function(pageThree){
    var pageThree = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      quantityBuildingTemp : pageThree.quantityBuildingTemp,
      circuitStyleBuildingTemp : pageThree.circuitStyleBuildingTemp,
      quantityWaterTemp : pageThree.quantityWaterTemp,
      circuitStyleWaterTemp : pageThree.circuitStyleWaterTemp
    }
    console.log('pageThree: ', pageThree);
    FactoryFactory.postPageThree(pageThree);
  }

}]);//end of myApp.controller
