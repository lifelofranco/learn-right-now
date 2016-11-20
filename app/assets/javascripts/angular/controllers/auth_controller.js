Lrn.controller('AuthController', ['$scope', '$location', 'AuthService', 'ngDialog', 'ngProgress',
  function($scope, $location, AuthService, ngDialog, ngProgress) {
    $scope.registerUser = function(valid) {

        if (valid) {
          ngProgress.start();
          var payload = {
            email: $scope.register.email,
            firstName: $scope.register.firstName,
            lastName: $scope.register.lastName,
            password: $scope.register.password
          }
          AuthService.register(payload);
          ngProgress.complete();
        }

    };

    $scope.loginUser = function(valid) {

        if (valid) {
          ngProgress.start();


          var payload = {
            email: $scope.login.email,
            password: $scope.login.password
          }
          AuthService.login(payload);
          ngProgress.complete();
        }

    };

}])
