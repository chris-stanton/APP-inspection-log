myApp.factory('FactoryFactory',['$http', function($http) {
console.log('FactoryFactory running');


// adds new user to DB
  function addNewUser(newUser) {
    console.log(newUser);
  }











//public API
  return {
// adds new user to DB
  addNewUser : addNewUser

  }

}]);
