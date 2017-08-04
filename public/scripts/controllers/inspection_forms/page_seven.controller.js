
myApp.controller('Page_sevenController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sevenController');

  var self = this;
  // new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page seven newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageSeven) {
    var pageSeven = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      phoneSetVisual : pageSeven.phoneSetVisual,
      phoneSetFunctional : pageSeven.phoneSetFunctional,
      phoneSetComments : pageSeven.phoneSetComments,
      phoneJacksVisual : pageSeven.phoneJacksVisual,
      phoneJacksFunctional : pageSeven.phoneJacksFunctional,
      phoneJacksComments : pageSeven.phoneJacksComments
    }
    console.log('pageSeven: ', pageSeven);
    FactoryFactory.postPageSeven(pageSeven);
  };

}]);//end of myApp.controller
