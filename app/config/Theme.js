// app/controllers/Theme.js

/**
  * Config app theme
**/

angular.module('amicale').config(Theme);

function Theme($mdThemingProvider) {
  $mdThemingProvider.theme("error-toast")
  $mdThemingProvider.theme("success-toast")
  $mdThemingProvider.theme("info-toast")
  $mdThemingProvider.theme("warn-toast")
}
