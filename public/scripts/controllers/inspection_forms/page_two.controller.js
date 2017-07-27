
myApp.controller('Page_twoController',['FactoryFactory',function(FactoryFactory) {

  console.log('Page_twoController');

  var self = this;

  self.message = 'angular sourced';

// button click to submit data to DB
  self.submitPageOne = function(inspectionForm) {
    console.log(inspectionForm);
  };


}]);//end of myApp.controller
