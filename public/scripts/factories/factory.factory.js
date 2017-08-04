
myApp.factory('FactoryFactory',['$http', '$location', '$routeParams',function($http, $location, $routeParams) {
  console.log('FactoryFactory running');

// new inspection site ID
  var newInspectionSite_Id = $routeParams;

// containers form DB results queries
  var allCompanies = { list : [] };
  var allEmployeeNames = { list : [] };
  var allInspectionSites = { list : [] };


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

// gets all inspection sites by companies_id and active true status
  function getAllInspectionSites(company_Id) {
    $http({
      method: 'GET',
      url: '/init/getAllInspectionSites',
      headers: {
        company_Id : company_Id
      }
    }).then(function(response) {
      allInspectionSites.list = response.data;
    });
  }; // end getAllCompanies()

// post page two to db
  function postPageTwo(pageTwo) {
    $http({
      method: 'POST',
      url: '/inspection/postPageTwo',
      data: pageTwo
    }).then(function(response) {
      alertify.success('Page Two was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $location.path('/page_three/' + $routeParams.newInspectionSite_Id);
    }).catch(function(error) {
      alertify.alert("Page two could not be added to DB");
        console.log('error adding page two to DB', error);
    });
  }; // postPageTwo()

// post page three to db
  function postPageThree(pageThree) {
    $http({
      method: 'POST',
      url: '/inspection/postPageThree',
      data: pageThree
    }).then(function(response) {
      alertify.success('Page Three was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $location.path('/page_five/' + $routeParams.newInspectionSite_Id);
    }).catch(function(error) {
      alertify.alert("Page three could not be added to DB");
        console.log('error adding page three to DB', error);
    });
  }; // postPageThree()

// posts pade five to db
  function postPageFive(pageFive) {
    $http({
      method: 'POST',
      url: '/inspection/postPageFive',
      data: pageFive
    }).then(function(response) {
      alertify.success('Page five was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $location.path('/page_six/' + $routeParams.newInspectionSite_Id);
    }).catch(function(error) {
      alertify.alert("Page five could not be added to DB");
        console.log('error adding page five to DB', error);
    });
  }; // postPageThree()

  function postPageSix(pageSix) {
    $http({
      method: 'POST',
      url: '/inspection/postPageSix',
      data: pageSix
    }).then(function(response) {
      alertify.success('Page six was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $location.path('/page_seven/' + $routeParams.newInspectionSite_Id);
    }).catch(function(error) {
      alertify.alert("Page six could not be added to DB");
        console.log('error adding page six to DB', error);
    });
  }; // postPageThree()






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
// calls DB for all employees
  getAllEmployeeNames : getAllEmployeeNames,
// all employee names from DB
  allEmployeeNames : allEmployeeNames,
// adds new inspection site to DB
  addInspectionSite : addInspectionSite,
// gets all inspection sites from DB
  getAllInspectionSites : getAllInspectionSites,
// all inspections sites from DB to view
  allInspectionSites : allInspectionSites,
// post page two to db
  postPageTwo : postPageTwo,
// post page three to db
  postPageThree : postPageThree,
// post page five to db
  postPageFive : postPageFive,
// post page six to db
  postPageSix : postPageSix

  }


}]);
