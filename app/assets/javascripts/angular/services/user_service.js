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
}]);
