Lrn.service('AuthService', ["$rootScope", "$q", "$http", "$window", "$cookies", "$state", "ngDialog",
  function($rootScope, $q, $http, $window, $cookies, $state, ngDialog){

  var setUser = function(data) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http.post('https://lrn-api.herokuapp.com/api/v1/users/login', $.param(data))
    .success(function(data){
      $cookies.put('token', data.token);
      $window.location.reload();
    })


  }

  this.register = function(data) {
    $http.defaults.headers.post["Content-Type"] = "application/json";

      var d = $q.defer();
      $http({
        method: 'POST',
        url: 'https://lrn-api.herokuapp.com/api/v1/users/register',
        data: data
      }).success(function(success) {
        console.log(success);
        setUser(data);
        d.resolve(success);
      }).error(function(data){
        console.log(data);
        d.reject(data);
      });


      return d.promise;
  };


  this.login = function(data) {
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http.post('https://lrn-api.herokuapp.com/api/v1/users/login', $.param(data))
      .success(function(data){
        console.log(data)
        $cookies.put('token', data.token);

        $window.location.reload();
      });

  };

  this.currentUser = function() {
      var token = $cookies.get('token');

      if (token) {
          var payload = token.split('.')[1];
          payload = $window.atob(payload);
          payload = JSON.parse(payload);
          console.log("USER:",payload);
          // return payload._doc;

          delete payload._doc.password;
          $rootScope.user = payload._doc;
      }
  };



}]);
