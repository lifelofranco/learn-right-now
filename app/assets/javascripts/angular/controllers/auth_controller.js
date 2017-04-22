Lrn.controller('AuthController', ['$scope', '$location', 'AuthService', 'UserService', 'ngDialog', 'ngProgressFactory', '$state', '$window',
  function($scope, $location, AuthService, UserService, ngDialog, ngProgressFactory, $state, $window) {
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

    $scope.fbLogin = function() {
        FB.login(function(response){
          if (response.authResponse) {
           FB.api('/me', 'GET', {fields: 'email, first_name, last_name, name, id, picture'}, function(response) {
             console.log(response)
             console.log('Good to see you, ' + response.name + '.');

             var email = {
                 email: response.email
             };

             UserService.getSpecificUser(email)
             .then(function(user){
                console.log(user)
                var user = user.data;
                if (user){
                    var payload = {
                      email: user.email,
                      password: user.password
                    }
                    AuthService.login(payload)
                } else {
                  var password = (Math.random()*1e32).toString(36);
                  var payload = {
                    email: response.email,
                    firstName: response.first_name,
                    lastName: response.last_name,
                    password: password,
                    profilePicture: response.picture.data.url
                  }
                  AuthService.register(payload);
                }
             })
           });
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
        }, {scope: 'email, public_profile', redirect_uri: $window.location.href})
    }

    $scope.signup = function() {
      ngDialog.close()
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 300,
          controller: 'AuthController'
        })
    }

}])
