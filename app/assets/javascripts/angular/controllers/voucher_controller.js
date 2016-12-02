Lrn.controller('VoucherController', ['$scope', '$location', 'BookService', 'ngDialog', '$state',
  function($scope, $location, BookService, ngDialog, $state) {

    BookService.getBooking($scope.user._id)
    .then(function(d) {
      console.log(d);
    })
}])
