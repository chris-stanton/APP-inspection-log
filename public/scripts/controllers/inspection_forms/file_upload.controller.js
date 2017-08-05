
myApp.controller('File_uploadController',['FactoryFactory', '$location', '$routeParams',function(FactoryFactory, $location, $routeParams) {

  console.log('File_uploadController');

  var self = this;
// new inspection site ID
  var newInspectionSite_Id = $routeParams;
    console.log('fileUpload newInspectionSite_Id: ', newInspectionSite_Id.id);
// inspector's company ID
  var company_id = $routeParams;
    console.log('fileUpload company_id: ', company_id.company_id);


  self.message = 'angular sourced';

  var fileUpload = {};
// next button click listener
  self.nextPage = function(fileUpload) {
    var fileUpload = {
      inspection_site_id : Number(newInspectionSite_Id.id),
      company_id : Number(company_id.company_id)
    }
    console.log('fileUpload: ', fileUpload);
    FactoryFactory.postPageFileUpload(fileUpload);
  };

}]);//end of myApp.controller
