myApp.factory('FactoryFactory',['$http', function($http) {
  console.log('FactoryFactory running');


// adds new user to DB
  function addNewUser(newUser) {
    $http({
          method: 'POST',
          url: '/login/addNewUser',
          data: newUser
        }).then(function(response){
          alertify.success('User was added to DB');
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
          alertify.success('Compant profile was added to DB');
        }).catch(function(error) {
          alertify.alert("Company profile could not be added to DB");
          console.log('error adding company profile to DB', error);
        });
  }; // adds company profile to DB








//public API
  return {
// adds new user to DB
  addNewUser : addNewUser,
// adds new company profile to DB
    addNewCompany : addNewCompany

  }


}]);
