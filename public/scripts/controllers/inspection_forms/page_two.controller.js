
myApp.controller('Page_twoController',['FactoryFactory',function(FactoryFactory) {

  console.log('Page_twoController');

  var self = this;

  self.message = 'angular sourced';

// button click to submit data to DB
  self.submitPageTwo = function(inspectionFormTwo) {
    console.log(inspectionFormTwo);
  };


}]);//end of myApp.controller
