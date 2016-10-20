Lrn.service('UserService', ["$q", "$http",
  function($q, $http){

  this.subscribe = function(data) {

    var d = $q.defer();
    $http({
      method: 'POST',
      url: '/subscribe',
      data: data
    }).success(function(data){
      d.resolve(data);
    });

    return d.promise;
  }
}]);
