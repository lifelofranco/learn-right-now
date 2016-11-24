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

Lrn.run(['$rootScope', '$state', 'AuthService', '$location', 'ngProgressFactory', function($rootScope, $state, AuthService, $location, ngProgressFactory) {
    AuthService.currentUser();

    $rootScope.progressbar = ngProgressFactory.createInstance();
   $rootScope.$on("$stateChangeStart", function () {
       $rootScope.progressbar.start();
   });

   $rootScope.$on("$stateChangeSuccess", function () {
       $rootScope.progressbar.complete();
   });
}]);
