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
        $scope.class.details = data;
        for(i=0; i<data.dates.length; i++) {
          if(typeof(data.dates[i]) != String ) {
            $scope.class.details.dates[i] = new Date(data.dates[i]);
          }
        }
      });
    }

    $scope.speakerName = "Father Dacanay, SJ";
    $scope.speakers = DemoService.getSpeakers();
    for (var i = 0; i < $scope.speakers.length; i++) {
      if ($scope.speakers[i].name === $scope.speakerName) {
        $scope.speaker = $scope.speakers[i];
        break;
      }
    }

    $scope.getSpeaker = function() {
      ngDialog.open({ templateUrl: 'class/speaker.html',
          className: 'ngdialog-theme-default',
          width: 640,
          scope: $scope,
          controller: 'SpeakerController'
        });
    }


}])
