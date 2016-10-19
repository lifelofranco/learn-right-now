Lrn.controller('IndexController', ['$scope','anchorSmoothScroll', '$location',
  function($scope, anchorSmoothScroll, $location) {
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

}]);
