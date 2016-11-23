Lrn.controller('NavController', ['$scope', '$location', 'DemoService', 'ngDialog', '$cookies', '$state', '$window',
  function($scope, $location, DemoService, ngDialog, $cookies, $state, $window) {

    $scope.register = function() {
      ngDialog.open({ templateUrl: 'shared/register.html',
          className: 'ngdialog-theme-default',
          width: 300,
          controller: 'AuthController'
        })
    };

    $scope.login = function() {
      ngDialog.open({ templateUrl: 'shared/login.html',
          className: 'ngdialog-theme-default',
          width: 300,
          controller: 'AuthController'
        })
    };

    $scope.logout = function() {
        $cookies.remove("token");
        $window.location.href="/";
    };



    $scope.goToProfile = function() {
      if($cookies.get("token")) {
        $state.go('nav.profile');
        var timestamp = $scope.user._id.toString().substring(0,8);
        $scope.user.createdIn = new Date( parseInt( timestamp, 16 ) * 1000 )
      }
      else {
        $state.go('index');
      }
    }

    $scope.book = function() {

      ngDialog.openConfirm({
                    templateUrl: 'shared/book.html',
                    className: 'ngdialog-theme-default',
                    controller: 'ModalController'
                }).then(function (tickets) {
                  console.log(tickets)
                    $scope.ticketSelected = tickets
                }, function (value) {
                    //Do something
                });

    }
}])
