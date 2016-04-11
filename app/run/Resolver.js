// app/run/Resolver.js

/**
 * Resolver for routing
 **/
 angular.module('amicale').run(Resolver);

 function Resolver($rootScope, $location) {
     $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
       console.log("In resolver 2")
         if (error === "AUTH_REQUIRED") {
           console.log("In resolver")
             $location.path("/login");
         }
     })
 }
