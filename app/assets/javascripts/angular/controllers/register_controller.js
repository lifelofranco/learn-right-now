Lrn.controller('RegisterController', ['$scope', '$location', '$firebaseAuth',
    function($scope, $location, $firebaseAuth){
      $scope.createUser = function () {
        $scope.message = null;
        $scope.error = null;
        console.log("createUser()")
        if ($scope.email && $scope.password) {
          $scope.error = "";
          $firebaseAuth().$createUserWithEmailAndPassword($scope.email, $scope.password)
          .then(function(user){
            $scope.message = "User created with uid: " + user.uid;
            console.log("USER:",user);
          }).catch(function(error){
            $scope.error = error.message;
          });
        } else {
          $scope.error = "Please fill up the blank fields.";
        }

      };
}]);
