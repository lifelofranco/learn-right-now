Lrn.controller('IndexController', ['$scope','anchorSmoothScroll', '$location', 'UserService', 'DemoService', 'ngDialog',
  function($scope, anchorSmoothScroll, $location, UserService, DemoService, ngDialog) {
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

    //  console.log($scope.demo)


     UserService.subscribe($scope.demo.user).then(function(d) {
       console.log(d)
       ngDialog.open({ templateUrl: 'main/success.html',
           className: 'ngdialog-theme-default',
           width: 500,
           controller: ['$scope', function($scope) {
             $scope.close = function() {
               ngDialog.close();
             }
           }]
         })
         $scope.userDetail.$setPristine();
         $scope.demo.user = {};
    });
  }

  $scope.featuredClasses = DemoService.getDummyFeaturedClasses();
}]);
