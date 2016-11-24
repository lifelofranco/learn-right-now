Lrn.controller('ClassController', ['$scope', '$state', '$location', 'DemoService', 'ngDialog', 'ClassService', '$stateParams',
  function($scope, $state, $location, DemoService, ngDialog, ClassService, $stateParams) {

    this.topics = false;
    this.prices = false;

    $scope.showTopics = function() {
      this.topics = !this.topics;
    };

    $scope.showPrices = function() {
      this.prices = !this.prices;
    };

    ClassService.classes()
    .then(function(data) {
      console.log(data);
      $scope.cards = data;
      for(i=0; i<data.length; i++) {
        for(j=0; j<data[j].dates.length; j++) {
          if(typeof(data[i].dates[j]) != String ) {
            $scope.cards[i].dates[j] = new Date(data[i].dates[j]);
          }
        }
      }

    });

    if ($state.$current.includes['nav.show'] && $stateParams.id) {

      ClassService.getClass($stateParams.id)
      .then(function(data) {
        $scope.class = data;
        for(i=0; i<data.dates.length; i++) {
          if(typeof(data.dates[i]) != String ) {
            $scope.class.dates[i] = new Date(data.dates[i]);
          }
        }
        console.log(data);
      });


    };

    $scope.book = function() {
      ngDialog.open({ templateUrl: 'class/book.html',
          className: 'ngdialog-theme-default',
          width: 640,
          controller: 'ClassController'
        });
    }

    $scope.checkout = function() {
      ngDialog.close();
      $state.go('nav.checkout')
    }


    // $scope.cards = DemoService.class();




}])
