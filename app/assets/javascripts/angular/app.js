var Lrn = angular.module('Lrn', [
  'ui.router',
  'ngMessages',
  'ngDialog',
  'templates',
  'ngProgress',
  'ngCookies',
  'Lrn.controllers',
  'Lrn.services'
]);

Lrn.run(['$rootScope', '$state', 'AuthService', '$location', function($rootScope, $state, AuthService, $location) {
    AuthService.currentUser();
}]);
