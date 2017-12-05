var myApp = angular.module('myApp', ['ngRoute', 'ngAlertify']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');

  //routes
    $routeProvider
        .when ('/login', {
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'lc'
        })
        .when ('/add_user', {
            templateUrl: '/views/add_user.html',
            controller: 'Add_userController',
            controllerAs: 'auc'

              // currently setup without authentication neeeded to add a user
              // to complany and database

            // resolve: {
            //     getuser : function(UserService){
            //     return UserService.getuser();
            //   }
            // }
        })
        .when ('/add_company', {
            templateUrl: '/views/add_company.html',
            controller: 'Add_companyController',
            controllerAs: 'acc',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/dashboard', {
            templateUrl: '/views/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dbc',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/manage_inspections', {
            templateUrl: '/views/manage_inspections.html',
            controller: 'Manage_inspectionsController',
            controllerAs: 'mic',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/add_inspection', {
            templateUrl: '/views/add_inspection.html',
            controller: 'Add_inspectionController',
            controllerAs: 'aic',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/start_inspection', {
            templateUrl: '/views/inspection_forms/start_inspection.html',
            controller: 'Start_inspectionController',
            controllerAs: 'sic',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/page_two/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/page_two.html',
            controller: 'Page_twoController',
            controllerAs: 'two',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/page_three/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/page_three.html',
            controller: 'Page_threeController',
            controllerAs: 'three',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/page_five/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/page_five.html',
            controller: 'Page_fiveController',
            controllerAs: 'five',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/page_six/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/page_six.html',
            controller: 'Page_sixController',
            controllerAs: 'six',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/page_seven/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/page_seven.html',
            controller: 'Page_sevenController',
            controllerAs: 'seven',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/file_upload/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/file_upload.html',
            controller: 'File_uploadController',
            controllerAs: 'upload',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .when ('/signature/:id?/:company_id?', {
            templateUrl: '/views/inspection_forms/signature.html',
            controller: 'SignatureController',
            controllerAs: 'sig',
            resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .otherwise ({
            redirectTo: '/login'
        });
}]);
