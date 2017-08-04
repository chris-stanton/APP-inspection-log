
myApp.controller('Page_twoController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('Page_twoController');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
  console.log('page two newInspectionSite_Id: ', newInspectionSite_Id.id);

  self.message = 'angular sourced';

// next button click listener
  self.nextPage = function(pageTwo) {
    var pageTwo = {
      quantityBells : pageTwo.quantityBells,
      circuitStyleBells : pageTwo.circuitStyleBells,
      quantityHorns : pageTwo.quantityHorns,
      circuitStyleHorns : pageTwo.circuitStyleHorns,
      inspection_site_id : Number(newInspectionSite_Id.id)
    }
    console.log('pageTwo: ', pageTwo);
    FactoryFactory.postPageTwo(pageTwo);
    };

}]);//end of myApp.controller
