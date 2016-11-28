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

    function getNum(num) {
      num = parseInt(num);
      var emptyArray = [];
      for (i=0; i < num; i++) {
          emptyArray.push({});
      }
      return emptyArray;

     }

    $scope.book = function() {

      ngDialog.openConfirm({
                    templateUrl: 'class/book.html',
                    className: 'ngdialog-theme-default',
                    controller: 'ModalController',
                    scope: $scope
                }).then(function (tickets) {
                    $scope.ticketSelected = tickets
                    $scope.classId = $state.params.id;
                    _.each(tickets, function (a, idx) {
                       $scope.ticketSelected[idx].details = getNum(a.quantity)
                    })
                    $state.go('nav.checkout')
                }, function (value) {
                    //Do something
                });

    }
}])
