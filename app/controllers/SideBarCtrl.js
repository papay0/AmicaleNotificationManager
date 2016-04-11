// app/controllers/SideBarCtrl.js

/**
  * SideBar controller: in charge of the sidebar responsivness
**/

angular.module('amicale').controller('SideBarCtrl', SideBarCtrl);

function SideBarCtrl(SharedService, AuthService, $scope, $location) {
  var vm = this;
  vm.title = 'NOTIFICATIONS'
  vm.userData = null
  vm.week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Monda2y31',
    'Tuesd4ay1',
    'Wedn6esda1y',
    'Thurs5day1',
    'Friday14',
    'Monday31',
    'Tuesda1y',
    'Wednesd1ay',
    'Thursd2ay',
    'Thursd2aya',
    'Thursd2ayt',
    'Thursd2ayi',
    'Thursd2aypp',
    'Thursd2aeey',
    'Thursd2awqy',
    'Frida2y'
  ]
  vm.paragraphe = 'Un petit peu du texte des précédentes notifications. Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  vm.numLimit = 50;

  vm.logout = function() {
    AuthService.logout()
    $location.path('/')
  }

  $scope.$on('SharedService', function () {
    vm.currentSchedule = SharedService.currentSchedule
  })

  $scope.$on('onAuth', function (event, args) {
    vm.userData = args.data
  })
}
