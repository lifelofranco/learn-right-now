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

    $scope.speakerName = "Father Dacanay, SJ";
    $scope.speakers = DemoService.getSpeakers();
    for (var i = 0; i < $scope.speakers.length; i++) {
      if ($scope.speakers[i].name === $scope.speakerName) {
        $scope.speaker = $scope.speakers[i];
        break;
      }
    }

//    console.log($scope.speaker);

    $scope.getSpeaker = function() {
      ngDialog.open({ templateUrl: 'class/speaker.html',
          className: 'ngdialog-theme-default',
          width: 640,
          scope: $scope,
          controller: 'SpeakerController'
        });
    }
}])
