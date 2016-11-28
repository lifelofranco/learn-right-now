Lrn.controller('CheckoutController', ['$scope', '$location', 'BookService', 'ngDialog', '$state',
  function($scope, $location, BookService, ngDialog, $state) {
    if(!$scope.ticketSelected) {
      $state.go('nav.show')
    }

    $scope.tickets = [];

    $scope.submitForm = function (valid) {
      $scope.submitted = true;
      if(valid) {
        participants = []
        _.each($scope.ticketSelected, function(a) {
            _.each(a.details, function(b) {

                participant = {
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
          "classId": $scope.classId,
          "tickets": participants
        }

        BookService.createBooking(booking)
        .then(function(d) {
          console.log(d);
          $state.go('voucher');
        })

      }
    };
}])
