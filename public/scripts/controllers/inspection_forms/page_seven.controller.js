
myApp.controller('Page_sevenController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_sevenController Running...');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('page seven newInspectionSite_Id: ', newInspectionSite_Id.id);
// inspector's company ID
  var company_id = $routeParams;
    console.log('page seven company_id: ', company_id.company_id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageSeven) {
    var pageSeven = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      company_id : Number(company_id.company_id),
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
