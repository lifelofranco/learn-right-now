Lrn.controller('ModalController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state',
  function($scope, $location, DemoService, ngDialog, $state) {

    $scope.tickets = DemoService.ticket();
    console.log($scope.tickets);

    $scope.checkout = function() {
      ngDialog.close();
      $state.go('nav.checkout')
    }
}]);
