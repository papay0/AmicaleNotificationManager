angular.module('amicale').config(Router);

function Router($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .otherwise({
    redirectTo: '/login'
  })
}
