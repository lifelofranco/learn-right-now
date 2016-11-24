Lrn.controller('AuthController', ['$scope', '$location', 'AuthService', 'ngDialog', 'ngProgressFactory', '$state',
  function($scope, $location, AuthService, ngDialog, ngProgressFactory, $state) {
    $scope.progressbar = ngProgressFactory.createInstance();
    // $scope.progressbar.setColor('#77B6FF');

    $scope.registerUser = function(valid) {
      $scope.submitted = true;
      $scope.withError = false;

        if (valid) {
          $scope.withError = false
          $scope.progressbar.start();
          var payload = {
            email: $scope.register.email,
            firstName: $scope.register.firstName,
            lastName: $scope.register.lastName,
            password: $scope.register.password
          }
          AuthService.register(payload)
          .then(function(data) {
          })
          .catch(function(data){
            $scope.withError = true
            $scope.reason = data;
            console.log(data);
          });
          $scope.progressbar.complete();
        }

    };

    $scope.loginUser = function(valid) {
      $scope.submitted = true;
        if (valid) {
          $scope.withError = false
          $scope.progressbar.start();
          var payload = {
            email: $scope.login.email,
            password: $scope.login.password
          }
          AuthService.login(payload);
          $scope.progressbar.complete();
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
