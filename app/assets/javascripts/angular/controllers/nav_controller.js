Lrn.controller('NavController', ['$scope', '$location', 'DemoService', 'ngDialog',
  function($scope, $location, DemoService, ngDialog) {

    $scope.register = function() {
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: ['$scope', function($scope) {
            $scope.close = function() {
              ngDialog.close();
            }
          }]
        })
    }

    $scope.login = function() {
      ngDialog.open({ templateUrl: 'shared/login.html',
          className: 'ngdialog-theme-default',
          width: 500,
          controller: ['$scope', function($scope) {
            $scope.close = function() {
              ngDialog.close();
            }
          }]
        })
    }

}])
