
myApp.controller('Page_sixController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sixController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page six newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageSix) {
    var pageSix = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      controlUnitInspected : pageSix.controlUnitInspected,
      controlUnitComments : pageSix.controlUnitComments,
      interfaceEqInspected : pageSix.interfaceEqInspected,
      interfaceEqComments : pageSix.interfaceEqComments
    }
    console.log('pageSix: ', pageSix);
    FactoryFactory.postPageSix(pageSix);
    };

}]);//end of myApp.controller
