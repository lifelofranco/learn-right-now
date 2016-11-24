Lrn.controller('SpeakerController', ['$scope', '$location', 'DemoService', 'ngDialog', '$state',
  function($scope, $location, DemoService, ngDialog, $state) {

    $scope.checkout = function() {
      ngDialog.close();
      $state.go('nav.checkout')
    }
}]);
