
myApp.factory('FactoryFactory',['$http', '$location', function($http, $location) {
  console.log('FactoryFactory running');


// containers form DB results queries
  var allCompanies = { list : [] };
  var allEmployeeNames = { list : [] };


// adds new user to DB
  function addNewUser(newUser) {
    $http({
      method: 'POST',
      url: '/login/addNewUser',
      data: newUser
    }).then(function(response){
      alertify.success('User was added to DB');
        $location.path('/dashboard');
    }).catch(function(error) {
      alertify.alert("User could not be added to DB");
        console.log('error adding new user to DB', error);
    });
  }; // end addNewUser()

//adds company profile to DB
  function addNewCompany(newCompany) {
    $http({
      method: 'POST',
      url: '/login/addNewCompany',
      data: newCompany
    }).then(function(response){
      alertify.success('Company profile was added to DB');
        $location.path('/add_user');
    }).catch(function(error) {
      alertify.alert("Company profile could not be added to DB");
        console.log('error adding company profile to DB', error);
    });
  }; // end addNewCompany()

// calls DB on add user init for all companies
  function getAllCompanies() {
    $http({
      method: 'GET',
      url: '/init/getAllCompanies'
    }).then(function(response) {
      allCompanies.list = response.data;
    });
  }; // end getAllCompanies()

// calls DB on add user init for all companies
  function getAllEmployeeNames() {
    $http({
      method: 'GET',
      url: '/init/getAllEmployeeNames'
    }).then(function(response) {
      allEmployeeNames.list = response.data;
    });
  }; // end getAllCompanies()

// adds new inspection to DB
  function addInspectionSite(inspectionSite) {
    $http({
      method: 'POST',
      url: '/inspection/addInspectionSite',
      data: inspectionSite
    }).then(function(response) {
      alertify.success('Inspection location was added to DB');
        $location.path('/dashboard');
    }).catch(function(error) {
      alertify.alert("Inspection location could not be added to DB");
        console.log('error adding inspection site profile to DB', error);
    });
  }; // addInspectionSite()









//public API
  return {
// adds new user to DB
  addNewUser : addNewUser,
// adds new company profile to DB
  addNewCompany : addNewCompany,
// calls DB on add user init for all companies
  getAllCompanies : getAllCompanies,
// all companies from DB
  allCompanies : allCompanies,
// calls DB for all employees on init
  getAllEmployeeNames : getAllEmployeeNames,
//all employee names from DB
  allEmployeeNames : allEmployeeNames,
// adds new inspection site to DB
  addInspectionSite : addInspectionSite

  }


}]);
