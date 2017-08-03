var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

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
        })
        .when ('/add_company', {
            templateUrl: '/views/add_company.html',
            controller: 'Add_companyController',
            controllerAs: 'acc'
        })
        .when ('/dashboard', {
          templateUrl: '/views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dbc'
        })
        .when ('/manage_inspections', {
            templateUrl: '/views/manage_inspections.html',
            controller: 'Manage_inspectionsController',
            controllerAs: 'mic'
        })
        .when ('/add_inspection', {
            templateUrl: '/views/add_inspection.html',
            controller: 'Add_inspectionController',
            controllerAs: 'aic'
        })
        .when ('/start_inspection', {
            templateUrl: '/views/inspection_forms/start_inspection.html',
            controller: 'Start_inspectionController',
            controllerAs: 'sic'
        })
        .when ('/page_two/:id', {
            templateUrl: '/views/inspection_forms/page_two.html',
            controller: 'Page_twoController',
            controllerAs: 'two'
        })
        .when ('/page_three/:id', {
            templateUrl: '/views/inspection_forms/page_three.html',
            controller: 'Page_threeController',
            controllerAs: 'three'
        })
        .when ('/page_five/:id', {
            templateUrl: '/views/inspection_forms/page_five.html',
            controller: 'Page_fiveController',
            controllerAs: 'five'
        })
        .when ('/page_six/:id', {
            templateUrl: '/views/inspection_forms/page_six.html',
            controller: 'Page_sixController',
            controllerAs: 'six'
        })
        .when ('/page_seven/:id', {
            templateUrl: '/views/inspection_forms/page_seven.html',
            controller: 'Page_sevenController',
            controllerAs: 'seven'
        })
        .when ('/file_upload', {
            templateUrl: '/views/inspection_forms/file_upload.html',
            controller: 'File_uploadController',
            controllerAs: 'upload'
        })
        .when ('/signature', {
            templateUrl: '/views/inspection_forms/signature.html',
            controller: 'SignatureController',
            controllerAs: 'sig'
        })
        .otherwise ({
            redirectTo: '/login'
        });
}]);
