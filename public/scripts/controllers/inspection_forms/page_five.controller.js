
myApp.controller('Page_fiveController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_fiveController');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('page five newInspectionSite_Id: ', newInspectionSite_Id.id);
// inspector's company ID
  var company_id = $routeParams;
    console.log('page five company_id: ', company_id.company_id);


  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageFive) {
    var pageFive = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      company_id : Number(company_id.company_id),
      monitoringEntityInspected : pageFive.monitoringEntityInspected,
      monitoringEntityInspector : pageFive.monitoringEntityInspector,
      monitoringEntityTime : pageFive.monitoringEntityTime,
      buildingOccupantsInspected : pageFive.buildingOccupantsInspected,
      buildingOccupantsInspector : pageFive.buildingOccupantsInspector,
      buildingOccupantsTime : pageFive.buildingOccupantsTime
    }
    console.log('pageFive: ', pageFive);
    FactoryFactory.postPageFive(pageFive);
  };

}]);//end of myApp.controller
