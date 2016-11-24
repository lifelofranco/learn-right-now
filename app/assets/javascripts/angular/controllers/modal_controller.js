Lrn.controller('ModalController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state',
  function($scope, $location, DemoService, ngDialog, $state) {

    $scope.tickets = DemoService.ticket();
    console.log($scope.tickets);

}]);
