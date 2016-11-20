Lrn.controller('NavController', ['$scope', '$location', 'DemoService', 'ngDialog', '$cookies', '$state', '$window',
  function($scope, $location, DemoService, ngDialog, $cookies, $state, $window) {

    $scope.register = function() {
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: 'AuthController'
        })
    };

    $scope.login = function() {
      ngDialog.open({ templateUrl: 'shared/login.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: 'AuthController'
        })
    };

    $scope.logout = function() {
        $cookies.remove("token");
        $window.location.href="/";
    };



    $scope.goToProfile = function() {
      if($cookies.get("token")) {
        $state.go('nav.profile');
      }
      else {
        $state.go('index');
      }
    }
}])
