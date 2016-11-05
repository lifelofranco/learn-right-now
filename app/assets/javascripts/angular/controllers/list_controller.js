Lrn.controller('ListController', ['$scope','anchorSmoothScroll', '$location', 'UserService',
  function($scope, anchorSmoothScroll, $location, UserService) {


    UserService.getAll().then(function(d){
      console.log(d);
      $scope.data = d
    })


}]);
