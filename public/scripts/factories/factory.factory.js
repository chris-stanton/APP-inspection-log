
myApp.factory('FactoryFactory',['$http', '$location', '$routeParams',function($http, $location, $routeParams) {
  console.log('FactoryFactory running...');

// new inspection site ID
  var newInspectionSite_Id = $routeParams;
  var company_id = $routeParams;

// containers form DB results queries
  var allCompanies = { list : [] };
  var allEmployeeNames = { list : [] };
  var allInspectionSites = { list : [] };
  var company = { list : [] };


//adds company profile to DB
  function addNewCompany(newCompany) {
    $http({
      method: 'POST',
      url: '/login/addNewCompany',
      data: newCompany
    }).then(function(response){
      alertify.success('Company profile was added to DB');
        $location.path('/dashboard');
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

// // calls DB on add user init for all companies
//   function getAllEmployeeNames() {
//     $http({
//       method: 'GET',
//       url: '/init/getAllEmployeeNames'
//     }).then(function(response) {
//       allEmployeeNames.list = response.data;
//     });
//   }; // getAllEmployeeNames()

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
  };

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
  };

// post page two to db
  function postPageTwo(pageTwo) {
    $http({
      method: 'POST',
      url: '/inspection/postPageTwo',
      data: pageTwo
    }).then(function(response) {
      alertify.success('Page Two was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $routeParams.company_id = company_id.company_id;
        $location.path('/page_three/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
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
        $routeParams.company_id = company_id.company_id;
        $location.path('/page_five/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
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
        $routeParams.company_id = company_id.company_id;
        $location.path('/page_six/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
    }).catch(function(error) {
      alertify.alert("Page five could not be added to DB");
        console.log('error adding page five to DB', error);
    });
  }; // postPageFive()

// adds page six to db
  function postPageSix(pageSix) {
    $http({
      method: 'POST',
      url: '/inspection/postPageSix',
      data: pageSix
    }).then(function(response) {
      alertify.success('Page six was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $routeParams.company_id = company_id.company_id;
        $location.path('/page_seven/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
    }).catch(function(error) {
      alertify.alert("Page six could not be added to DB");
        console.log('error adding page six to DB', error);
    });
  }; // postPageSix()

// adds page seven to db
  function postPageSeven(pageSeven) {
    $http({
      method: 'POST',
      url: '/inspection/postPageSeven',
      data: pageSeven
    }).then(function(response) {
      alertify.success('Page seven was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $routeParams.company_id = company_id.company_id;
        $location.path('/file_upload/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
    }).catch(function(error) {
      alertify.alert("Page seven could not be added to DB");
        console.log('error adding page seven to DB', error);
    });
  }; // postPageSeven()

  function postPageFileUpload(fileUpload) {
    $http({
      method: 'POST',
      url: '/inspection/postPageFileUpload',
      data: fileUpload
    }).then(function(response) {
      alertify.success('File Upload was added to DB');
        $routeParams.newInspectionSite_Id = newInspectionSite_Id.id;
        $routeParams.company_id = company_id.company_id;
        $location.path('/signature/' + $routeParams.newInspectionSite_Id + '/' + $routeParams.company_id);
    }).catch(function(error) {
      alertify.alert("File Upload could not be added to DB");
        console.log('error adding file upload to DB', error);
    });
  }; // postFileUpload

// gets all users from company_id
  function getUserByCompanyId(company_id) {
    $http({
      method: 'GET',
      url: '/init/getUserByCompanyId',
      headers: {
        company_id : company_id
      }
    }).then(function(response) {
      company.list = response.data;
    });
  }; // end getUserByCompanyId()

  function completeInspection(signature) {
    $http({
      method: 'PUT',
      url: '/inspection/completeInspection/' + signature.newInspectionSite_Id,
      data: signature
    }).then(function(response) {
      alertify.success('Inspection was added to DB');
        $location.path('/dashboard')
    });
  }; // end completeInspection()



//public API
  return {
// adds new company profile to DB
  addNewCompany : addNewCompany,
// calls DB on add user init for all companies
  getAllCompanies : getAllCompanies,
// all companies from DB
  allCompanies : allCompanies,
// calls DB for all employees
  // getAllEmployeeNames : getAllEmployeeNames,
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
  postPageSix : postPageSix,
// posts page seven to db
  postPageSeven : postPageSeven,
// post file uploads to db
  postPageFileUpload : postPageFileUpload,
// gets specific company id for signature view
  getUserByCompanyId : getUserByCompanyId,
// return of specific company id for signature view
  company : company,
// signature submission to db
  completeInspection : completeInspection

  }


}]);
