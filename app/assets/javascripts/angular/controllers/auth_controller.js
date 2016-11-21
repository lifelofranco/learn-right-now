Lrn.controller('AuthController', ['$scope', '$location', 'AuthService', 'ngDialog', 'ngProgressFactory',
  function($scope, $location, AuthService, ngDialog, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.color('#77B6FF');

    $scope.registerUser = function(valid) {

        if (valid) {
          $scope.progressbar.start();
          var payload = {
            email: $scope.register.email,
            firstName: $scope.register.firstName,
            lastName: $scope.register.lastName,
            password: $scope.register.password
          }
          AuthService.register(payload);
          $scope.progressbar.complete();
        }

    };

    $scope.loginUser = function(valid) {

        if (valid) {
          $scope.progressbar.start();


          var payload = {
            email: $scope.login.email,
            password: $scope.login.password
          }
          AuthService.login(payload);
          $scope.progressbar.complete();
        }

    };

}])
