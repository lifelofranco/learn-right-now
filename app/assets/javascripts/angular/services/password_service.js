Lrn.service('PasswordService', ["$q", "$http",
  function($q, $http){

  this.resetPassword = function(data) {

    var d = $q.defer();
    $http({
      method: 'POST',
      url: 'https://lrn-api.herokuapp.com/api/v1/users/reset_password/' + data.id,
      data: data
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

  this.sendForgotPwEmail = function(data) {

    console.log("dito na ko sa service :D")
    var d = $q.defer();
    $http({
      method: 'POST',
      url: 'https://lrn-api.herokuapp.com/api/v1/users/forgot_password/',
      data: data
    }).then(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

}]);
