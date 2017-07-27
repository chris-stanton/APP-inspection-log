
myApp.controller('Page_threeController',['FactoryFactory',function(FactoryFactory) {

  console.log('Page_threeController');

  var self = this;

  self.message = 'angular sourced';

// button click to submit data to DB
  self.submitPageThree = function(inspectionFormThree){
    console.log(inspectionFormThree);
  }

}]);//end of myApp.controller
