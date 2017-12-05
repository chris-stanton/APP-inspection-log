
myApp.factory('UserService', function($http, $location, alertify){

  console.log('UserService Running...');

  // setting screen notifiaction position
  alertify.logPosition('bottom right');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
        if(response.data.username) {
          console.log('searching DB for userName: ', response.data.username);
            // user info that has a current session on the server
            userObject.userName = response.data.username;
            userObject.user_id = response.data.user_id;
            userObject.companies_id = response.data.companies_id;
            alertify.success("Welcome " + userObject.userName);
            console.log('SUCCESSFULL LOGIN, found username: ', userObject.userName);
        } else {
            console.log('getuser -- failure');
            $location.path("/login");
        }
      },function(response){
        alertify.error("Wrong Login Credentials");
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/login");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/login");
      });
    }
  }; // end return

}); //end myApp
