
myApp.factory('UserService', function($http, $location){

  console.log('UserService Rorking...');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
            console.log('getuser -- userName: ', response.data.username);
              // user has a current session on the server
              userObject.userName = response.data.username;
              userObject.user_id = response.data.user_id;
              userObject.companies_id = response.data.companies_id;
              console.log('getuser -- success: ', userObject.userName);
          } else {
              console.log('getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/login");
          }
      },function(response){
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
  };
});
