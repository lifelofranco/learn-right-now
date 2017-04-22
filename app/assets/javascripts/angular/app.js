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

Lrn.run(['$rootScope', '$window', '$state', 'AuthService', '$location', 'ngProgressFactory', function($rootScope, $window, $state, AuthService, $location, ngProgressFactory) {
    AuthService.currentUser();

    $rootScope.progressbar = ngProgressFactory.createInstance();
   $rootScope.$on("$stateChangeStart", function () {
       $rootScope.progressbar.start();
   });

   $rootScope.$on("$stateChangeSuccess", function () {
       $rootScope.progressbar.complete();
   });

   window.fbAsyncInit = function() {
     FB.init({
       appId      : '1073764279433839',
       cookie     : true,
       xfbml      : true,
       version    : 'v2.8'
     });

     FB.getLoginStatus();

   };

   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


}]);
