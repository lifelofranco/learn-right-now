Lrn.controller('IndexController', ['$scope','anchorSmoothScroll', '$location', 'UserService', 'ngDialog',
  function($scope, anchorSmoothScroll, $location, UserService, ngDialog) {
    this.showNav = false;

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

   $scope.gotoElement = function (eID){
     // set the location.hash to the id of
     // the element you wish to scroll to.
     $location.hash('bottom');

     // call $anchorScroll()
     anchorSmoothScroll.scrollTo(eID);
   };

   $scope.user = function() {

     console.log($scope.demo)
     ngDialog.open({ templateUrl: 'main/success.html',
         className: 'ngdialog-theme-default',
         width: 500,
         controller: ['$scope', function($scope) {
           $scope.close = function() {
             ngDialog.close();
           }
         }]
       })
     };

     UserService.subscribe($scope.demo.user).then(function(d) {
       console.log(d)
    });

}]);
