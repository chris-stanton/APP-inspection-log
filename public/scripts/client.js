var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
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
        .when ('/manage_inspections', {
            templateUrl: '/views/manage_inspections.html',
            controller: 'Manage_inspectionsController',
            controllerAs: 'mic'
        })
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
        .otherwise ( {
            redirectTo: '/login'
        });
}]);
