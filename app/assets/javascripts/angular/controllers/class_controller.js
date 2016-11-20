Lrn.controller('ClassController', ['$scope', '$location', 'DemoService', 'ngDialog',
  function($scope, $location, DemoService, ngDialog) {

    this.topics = false;
    this.prices = false;

    $scope.showTopics = function() {
      this.topics = !this.topics;
    }

    $scope.showPrices = function() {
      this.prices = !this.prices;
    }

    $scope.cards = DemoService.class();

    $scope.book = function() {
      ngDialog.open({ templateUrl: 'shared/book.html',
          className: 'ngdialog-theme-default',
          width: 640,
          controller: 'ModalController'
        });
    }




}])
