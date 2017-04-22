Lrn.service('PasswordService', ["$q", "$http",
  function($q, $http){

  this.resetPassword = function(data) {

    // var url = 'https://lrn-api.herokuapp.com/api/v1/users/reset_password/' + data.id;
    var url = 'http://localhost:8180/api/v1/users/reset_password/' + data.id
    var d = $q.defer();
    $http({
      method: 'POST',
      url: url,
      data: data
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

  this.sendForgotPwEmail = function(data) {
    var d = $q.defer();
    // var url ='https://lrn-api.herokuapp.com/api/v1/users/forgot_password/';
    var url = 'http://localhost:8180/api/v1/users/forgot_password/'
    $http({
      method: 'POST',
      url: url,
      data: data
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

}]);
