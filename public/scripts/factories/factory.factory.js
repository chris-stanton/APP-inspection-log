myApp.factory('FactoryFactory',['$http', '$location', function($http, $location) {
  console.log('FactoryFactory running');


// containers form DB results
  var allCompanies = { list : [] };


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
  }; // addNewUser()

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
  }; // adds company profile to DB

// calls DB on add user init for all companies
  function getAllCompanies() {
    $http({
      method: 'GET',
      url: '/init/getAllCompanies'
    }).then(function(response) {
      allCompanies.list = response.data;
    });
  }; // end getAllCompanies()





//public API
  return {
// adds new user to DB
  addNewUser : addNewUser,
// adds new company profile to DB
  addNewCompany : addNewCompany,
// calls DB on add user init for all companies
  getAllCompanies : getAllCompanies,
// all companies from DB for add user viewHeadings
  allCompanies : allCompanies

  }


}]);
