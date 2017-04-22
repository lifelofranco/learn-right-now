Lrn.service('UserService', ["$q", "$http",
  function($q, $http){

  this.subscribe = function(data) {

    var d = $q.defer();
    $http({
      method: 'POST',
      url: '/subscribe',
      data: data
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

  this.getAll = function() {
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '/list',
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

  this.getSpecificUser = function(email) {
      var d = $q.defer();
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      var query = $.param(email);
      console.log('query', query);
      var url = 'http://localhost:8180/api/v1/users?';
      $http.get(url + query)
      .then(function(data){
        console.log('data', data);
        d.resolve(data);
      });

      return d.promise;
  };
}]);
