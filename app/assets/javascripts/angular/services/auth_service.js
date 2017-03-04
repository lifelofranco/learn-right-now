Lrn.service('AuthService', ["$rootScope", "$q", "$http", "$window", "$cookies", "$state", "ngDialog",
  function($rootScope, $q, $http, $window, $cookies, $state, ngDialog){

  var setUser = function(data) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http.post('https://lrn-api.herokuapp.com/api/v1/users/login', $.param(data))
    .then(function(data){
      $cookies.put('token', data.data.token);
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
      }).then(function(success) {
        console.log(success);
        setUser(data);
        d.resolve(success);
      }).catch(function(data){
        console.log(data);
        d.reject(data.data);
      });


      return d.promise;
  };


  this.login = function(data) {
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http.post('https://lrn-api.herokuapp.com/api/v1/users/login', $.param(data))
      .then(function(data){
        $cookies.put('token', data.data.token);

        $window.location.reload();
      });

  };

  this.currentUser = function() {
      var token = $cookies.get('token');

      if (token) {
          var payload = token.split('.')[1];
          payload = $window.atob(payload);
          payload = JSON.parse(payload);
          // return payload._doc;

          this.updateUser(payload._id)
          .then(function(data){
              $rootScope.user = data.data;
          })
      }
  };

  this.updateUser = function(user_id) {
      var d = $q.defer();

      $http({
        method: 'GET',
        url: 'https://lrn-api.herokuapp.com/api/v1/users/'+ user_id
      }).then(function(data){
        d.resolve(data);
      });

      return d.promise;
    }


}]);
