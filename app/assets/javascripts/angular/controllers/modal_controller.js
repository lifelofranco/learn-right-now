Lrn.controller('ModalController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state',
  function($scope, $location, DemoService, ngDialog, $state) {

    $scope.tickets = DemoService.ticket();
    $scope.atLeastOne = true
    $scope.selector = function(tickets) {
      quantities = 0
      _.each(tickets, function(e, i, l) {
        quantities = quantities + parseInt(e.quantity)
      });
      if(quantities != 0) {
        $scope.atLeastOne = false
      }
      else {
        $scope.atLeastOne = true
      }
    }
}]);
