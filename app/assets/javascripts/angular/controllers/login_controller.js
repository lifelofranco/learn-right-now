Lrn.controller('LoginController', ['$scope', '$location', '$firebaseAuth',
    function($scope, $location, $firebaseAuth){
      $scope.createUser = function () {
        $scope.message = null;
        $scope.error = null;
        if ($scope.email && $scope.password) {

          $firebaseAuth().$signInWithEmailAndPassword($scope.email, $scope.password)
          .then(function(user){
            $scope.message = "User logged in with uid: " + user.uid;
            console.log("USER:",user);
          }).catch(function(error){
            $scope.error = error.message;
          });
        } else {
          $scope.error = "Please fill up the blank fields.";
        }

      };
}]);
