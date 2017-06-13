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
            controllerAs: 'ln'
        })
        .when ('/add_user', {
            templateUrl: '/views/add_user.html',
            controller: 'Add_userController',
            controllerAs: 'auc'
        })
        .otherwise ( {
            redirectTo: '/login'
        });
}]);
