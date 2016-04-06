// app/controllers/LoginCtrl.js

/**
  * Login controller of the app
**/

angular.module('amicale').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(AuthService) {
  var vm = this;

  vm.user = {
    email: "",
    password: ""
  }

  vm.printCoucou = function(){
    console.log("coucou")
  }

  vm.login = function() {
    console.log("login function")
    console.log(vm.user.email)
    AuthService.login(vm.user.email, vm.user.password, function(error, res) {
      if (error) {
        console.log("error on login: "+error)
      } else {
        console.log("okay")
      }
    })
  }
}
