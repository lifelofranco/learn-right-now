Lrn.controller('AuthController', ['$scope', '$location', 'AuthService', 'ngDialog',
  function($scope, $location, AuthService, ngDialog) {

    $scope.registerUser = function(valid) {
      $scope.submitted = true;

        if (valid) {
          $scope.withError = false
          var payload = {
            email: $scope.register.email,
            firstName: $scope.register.firstName,
            lastName: $scope.register.lastName,
            password: $scope.register.password
          }
          AuthService.register(payload);
        }

        else {
          $scope.withError = true
        }

    };

    $scope.loginUser = function(valid) {
      $scope.submitted = true;
        if (valid) {
          $scope.withError = false
          var payload = {
            email: $scope.login.email,
            password: $scope.login.password
          }
          AuthService.login(payload);
        }
        else {
          $scope.withError = true
        }


    };

    $scope.signup = function() {
      ngDialog.close()
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 300,
          controller: 'AuthController'
        })
    }

}])
