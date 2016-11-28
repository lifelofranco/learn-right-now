Lrn.service('ClassService', ["$rootScope", "$q", "$http", "$window", "$cookies", "$state", "ngDialog",
  function($rootScope, $q, $http, $window, $cookies, $state, ngDialog) {

    this.classes = function() {
      var d = $q.defer();
      $http({
        method: 'GET',
        url: 'https://lrn-api.herokuapp.com/api/v1/classes'
      }).success(function(data) {
        d.resolve(data)
      });
      return d.promise;
    }

    this.getClass = function(class_id) {
      var d = $q.defer();
          $http({
          method: 'GET',
          url: 'https://lrn-api.herokuapp.com/api/v1/classes/' + class_id
      }).success(function(data){
          d.resolve(data);
      }).catch(function(data){
          d.reject(data);
      });

        return d.promise;
    }


    this.getUserClasses = function(class_ids) {
      $http.defaults.headers.post["Content-Type"] = "application/json";
      var params = {
        "arrayOfIds" : class_ids
      }
      var d = $q.defer();
          $http({
          method: 'POST',
          url: 'https://lrn-api.herokuapp.com/api/v1/classes/get_batch',
          data: params
      }).success(function(data){
          d.resolve(data);
      }).catch(function(data){
          d.reject(data);
      });

        return d.promise;
    }

}]);
