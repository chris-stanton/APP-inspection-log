var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/dashboard', {
          templateUrl: '/views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dbc'
        })
        .when ('/view-1', {
            templateUrl: '/views/view_1.html',
            controller: 'OneController',
            controllerAs: 'one'
        })
        .when ('/view-2', {
            templateUrl: '/views/view_2.html',
            controller: 'TwoController',
            controllerAs: 'two'
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
            redirectTo: '/dashboard'
        });
}]);
