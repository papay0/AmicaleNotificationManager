angular.module('amicale').config(Router);

function Router($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'loginCtrl'
  })
  .when('/', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl',
    controllerAs: 'postsCtrl',
    resolve: {
      "currentAuth": ["AuthService", function(AuthService) {
        return AuthService.requireAuth()
      }]
    }
  })
  .otherwise({
    redirectTo: '/'
  })
}
