Lrn.controller('ClassController', ['$scope', '$location', 'UserService', 'ngDialog',
  function($scope, $location, UserService, ngDialog) {

    this.topics = false;
    this.prices = false;

    $scope.showTopics = function() {
      this.topics = !this.topics;
    }

    $scope.showPrices = function() {
      this.prices = !this.prices;
    }

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


}])
