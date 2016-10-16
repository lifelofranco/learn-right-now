Lrn.controller('IndexController', ['$scope',
  function($scope) {
    this.showNav = false;

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }
  }
]);
