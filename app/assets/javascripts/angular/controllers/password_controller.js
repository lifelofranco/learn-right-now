Lrn.controller('PasswordController', ['$scope', '$location', 'DemoService', 'ngDialog', '$stateParams', 'PasswordService',
  function($scope, $location, DemoService, ngDialog, $stateParams, PasswordService) {

    $scope.forgotPassword = function() {
        var body = {
          email: $scope.email
        }

        PasswordService.sendForgotPwEmail(body);
    };

    $scope.submitPassword = function(isValid) {
            var body = {
                id: $stateParams.id,
                password: $scope.reset_pw.password
            }

            PasswordService.resetPassword(body)
            .then(function(success){
              console.log(success);
              alert(success.data.message);
            });

        }
    

}]);
