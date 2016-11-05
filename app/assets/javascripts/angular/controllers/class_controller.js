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


}])
