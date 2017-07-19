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
        .when ('/add_inspection', {
            templateUrl: '/views/add_inspection.html',
            controller: 'Add_inspectionController',
            controllerAs: 'aic'
        })
        .when ('/page_two', {
            templateUrl: '/views/inspection_forms/page_two.html',
            controller: 'Page_twoController',
            controllerAs: 'two'
        })
        .when ('/page_three', {
            templateUrl: '/views/inspection_forms/page_three.html',
            controller: 'Page_threeController',
            controllerAs: 'three'
        })
        .when ('/page_four', {
            templateUrl: '/views/inspection_forms/page_four.html',
            controller: 'Page_fourController',
            controllerAs: 'four'
        })
        .when ('/page_five', {
            templateUrl: '/views/inspection_forms/page_five.html',
            controller: 'Page_fiveController',
            controllerAs: 'five'
        })
        .when ('/page_six', {
            templateUrl: '/views/inspection_forms/page_six.html',
            controller: 'Page_sixController',
            controllerAs: 'six'
        })
        .when ('/page_seven', {
            templateUrl: '/views/inspection_forms/page_seven.html',
            controller: 'Page_sevenController',
            controllerAs: 'seven'
        })
        .when ('/manage_inspections', {
            templateUrl: '/views/manage_inspections.html',
            controller: 'Manage_inspectionsController',
            controllerAs: 'mic'
        })
        .otherwise ( {
            redirectTo: '/login'
        });
}]);
