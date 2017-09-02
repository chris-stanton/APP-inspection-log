
myApp.controller('Page_threeController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_threeController Running...');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('page three newInspectionSite_Id: ', newInspectionSite_Id.id);
// inspector's company ID
  var company_id = $routeParams;
    console.log('page three company_id: ', company_id.company_id);


  self.message = 'angular sourced';

// button click to submit data to DB
  self.nextPage = function(pageThree){
    var pageThree = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      company_id : Number(company_id.company_id),
      quantityBuildingTemp : pageThree.quantityBuildingTemp,
      circuitStyleBuildingTemp : pageThree.circuitStyleBuildingTemp,
      quantityWaterTemp : pageThree.quantityWaterTemp,
      circuitStyleWaterTemp : pageThree.circuitStyleWaterTemp
    }
    console.log('pageThree: ', pageThree);
    FactoryFactory.postPageThree(pageThree);
  }

}]);//end of myApp.controller
