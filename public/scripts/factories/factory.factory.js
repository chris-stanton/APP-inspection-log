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











//public API
  return {
// adds new user to DB
  addNewUser : addNewUser

  }


}]);
