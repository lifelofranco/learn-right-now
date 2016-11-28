Lrn.service('BookService', ["$q", "$http", "$window", "$cookies", "$state",
  function($q, $http, $window, $cookies, $state) {

   this.createBooking = function(data) {
     $http.defaults.headers.post["Content-Type"] = "application/json";

     var d = $q.defer();
     $http({
       method: 'POST',
       url: 'https://lrn-api.herokuapp.com/api/v1/booking/create',
       data: data
     }).success(function(data){
       d.resolve(data);
     });

     return d.promise;
   }

   this.getBooking = function(user_id) {
     var d = $q.defer();
     $http({
       method: 'GET',
       url: 'https://lrn-api.herokuapp.com/api/v1/users/'+ user_id
     }).success(function(data){
       d.resolve(data);
     });

     return d.promise;
   }



}]);
