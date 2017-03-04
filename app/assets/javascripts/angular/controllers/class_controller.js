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

    $scope.topic_filters = [
      {"label": "All Topics",
       "value": "all"},
      {"label": "Business",
       "value": "business"},
      {"label": "Programming",
       "value": "programming"},
      {"label": "Marketing",
      "value": "marketing"},
      {"label": "Entrepreneur",
       "value": "entrepreneur"}
    ]

    $scope.price_filters = [
      {"label": "All Prices",
       "value": "all"},
      {"label": "Paid",
       "value": "paid"},
      {"label": "Free",
       "value": "free"},
    ]

    $scope.topicFilter = function(tag) {
      filtered_cards = []
      _.each(all_cards, function(e, i, l) {
        ifFound = _.contains(e.tags, tag);
        if(ifFound) {
          filtered_cards.push(e);
        }
        else if(tag == 'all') {
          filtered_cards = all_cards
        }
      });
      $scope.cards = filtered_cards
    }

    $scope.priceFilter = function(price) {
      filtered_cards = []
      _.each(all_cards, function(e, i, l) {
        if(e.price === 'free') {
          filtered_cards.push(e);
        }
        else if(price == 'all') {
          filtered_cards = all_cards
        }
      });
      $scope.cards = filtered_cards
    }

    ClassService.classes()
    .then(function(data) {
      $scope.cards = data.data;
      all_cards = $scope.cards
      var index = 0;

      //convert array of dates to date object
      for(i=0; i<data.data.length; i++) {
        for(j=0; j<data.data[j].dates.length; j++) {
          if(typeof(data.data[i].dates[j]) != String ) {
            $scope.cards[i].dates[j] = new Date(data.data[i].dates[j]);
          }
        }
        //get minimum price in all tickets
        //not sure if we need to get the highest price
        for(k=1; k<data.data[i].classTickets.length; k++) {
          if(data.data[i].classTickets[k].price < data.data[i].classTickets[index].price && data.data[i].classTickets[k].maxSlots > 0) {
            index = k;
          }
        }
        $scope.cards[i].price = $scope.cards[i].classTickets[index].price;
        index = 0;
      }
    });

    if ($state.$current.includes['nav.show'] && $stateParams.id) {

      ClassService.getClass($stateParams.id)
      .then(function(data) {
        $scope.class.details = data.data;
        for(i=0; i<data.data.dates.length; i++) {
          if(typeof(data.data.dates[i]) != String ) {
            $scope.class.details.dates[i] = new Date(data.data.dates[i]);
          }
        }
        //get minimum price
        var index = 0;
        for (i =1; i<$scope.class.details.classTickets.length; i++) {
          if($scope.class.details.classTickets[i].price < $scope.class.details.classTickets[index].price) {
            index = i;
          }
        }
        $scope.class.details.price = $scope.class.details.classTickets[index].price;
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
