
myApp.controller('Add_companyController',['FactoryFactory',function(FactoryFactory) {

  console.log('Add_companyController running');


  var self = this;


  self.message = 'angular sourced';

  self.addNewCompany = function(newCompany) {
    FactoryFactory.addNewCompany(newCompany);
    self.newCompany = {};
  };


}]);//end of myApp.controller
