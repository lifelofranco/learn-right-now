Lrn.controller('CheckoutController', ['$scope', '$location', 'ClassService', 'BookService', 'ngDialog', '$state',
  function($scope, $location, ClassService, BookService, ngDialog, $state) {
    if(!$scope.ticketSelected) {
      $state.go('nav.class ')
    }

    ClassService.getClass($scope.classId)
    .then(function(data) {
      $scope.class.details = data;
      for(i=0; i<data.dates.length; i++) {
        if(typeof(data.dates[i]) != String ) {
          $scope.class.details.dates[i] = new Date(data.dates[i]);
        }
      }
    });

    $scope.tickets = [];

    $scope.submitForm = function (valid) {
      $scope.submitted = true;
      if(valid) {
        participants = []
        _.each($scope.ticketSelected, function(a) {
            _.each(a.details, function(b) {

                participant = {
                  "classId": $scope.classId,
                  "firstName": b.firstName,
                  "lastName": b.lastName,
                  "email": b.email,
                  "status": "Reserved",
                  "type": a.name
                }
              participants.push(participant);
          });

        });
        var booking = {
          "userId": $scope.user._id,
          "tickets": participants
        }
        // console.log(booking);
        BookService.createBooking(booking)
        .then(function(d) {
          console.log(d);
          $state.go('nav.profile');
        })
      }
    }
}])
