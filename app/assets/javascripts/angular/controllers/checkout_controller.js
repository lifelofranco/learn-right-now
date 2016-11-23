Lrn.controller('CheckoutController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state',
  function($scope, $location, DemoService, ngDialog, $state) {

    if(!$scope.ticketSelected) {
      $state.go('nav.show')
    }
    $scope.getNumber = function(num) {
      num = parseInt(num)
      return new Array(num);
    }

}])
