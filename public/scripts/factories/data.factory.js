myApp.factory('DataFactory',['$http', '$location', '$routeParams',function($http, $location, $routeParams) {

  console.log('DataFactory Running...');

  var inspectionSitesByUser_id = { list : [] };
    console.log('inspectionSitesByUser_id: ', inspectionSitesByUser_id);


// gets inspection sites by users logged in ID
  function getInspectionSitesByUser_id(user_id) {
    $http({
      method: 'GET',
      url: '/init/getInspectionSitesByUser_id',
      headers: {
        user_id : user_id
      }
    }).then(function(response) {
      inspectionSitesByUser_id.list = response.data;
    });
  }; // end getInspectionSitesByUser_id()



  //public API
    return {
// gets all inspection sites to users id
    getInspectionSitesByUser_id : getInspectionSitesByUser_id,
// return of all inspection sites to users id
    inspectionSitesByUser_id : inspectionSitesByUser_id
    }


  }]); // end myApp
