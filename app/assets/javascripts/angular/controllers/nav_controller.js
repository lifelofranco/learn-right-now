Lrn.controller('NavController', ['$scope', '$location', 'DemoService', 'ngDialog', '$cookies', '$state', '$window', '$stateParams', 'ClassService',
  function($scope, $location, DemoService, ngDialog, $cookies, $state, $window, $stateParams, ClassService) {

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
      }
      else {
        $state.go('index');
        $window.location.reload();
      }
    }
    $scope.class = {}



        //
        // $scope.book = function() {
        //   ngDialog.open({ templateUrl: 'class/book.html',
        //       className: 'ngdialog-theme-default',
        //       width: 640,
        //       controller: 'ClassController'
        //     });
        // }
    $scope.book = function() {

      ngDialog.openConfirm({
                    templateUrl: 'class/book.html',
                    className: 'ngdialog-theme-default',
                    controller: 'ModalController',
                    scope: $scope
                }).then(function (tickets) {
                    $scope.ticketSelected = tickets
                    $state.go('nav.checkout')
                }, function (value) {
                    //Do something
                });

    }
}])
