
myApp.controller('Page_twoController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_twoController');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('page two newInspectionSite_Id: ', newInspectionSite_Id.id);
// inspector's company ID
  var company_id = $routeParams;
    console.log('page two company_id: ', company_id.company_id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageTwo) {
    var pageTwo = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      company_id : Number(company_id.company_id),
      quantityBells : pageTwo.quantityBells,
      circuitStyleBells : pageTwo.circuitStyleBells,
      quantityHorns : pageTwo.quantityHorns,
      circuitStyleHorns : pageTwo.circuitStyleHorns

    }
    console.log('pageTwo: ', pageTwo);
    FactoryFactory.postPageTwo(pageTwo);
    };

}]);//end of myApp.controller
