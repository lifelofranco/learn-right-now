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

  this.getAll = function() {
    var d = $q.defer();
    $http({
      method: 'GET',
      url: '/list',
    }).success(function(data){
      d.resolve(data);
    });

    return d.promise;
  }

  this.dummyUserData = function() {
       return [
        {
          "first_name": "Joseph",
          "last_name": "Gordon-Levitt",
          "profile_photo": "https://m1.joe.ie/YToyOntzOjQ6ImRhdGEiO3M6MTc0OiJhOjM6e3M6MzoidXJsIjtzOjExMjoiaHR0cDovL21lZGlhLWpvZS5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMi8xNzE4MjkyMy9Kb3NlcGgtR29yZG9uLUxldml0dC0yLmpwZyI7czo1OiJ3aWR0aCI7aTo2NDc7czo2OiJoZWlnaHQiO2k6MzQwO30iO3M6NDoiaGFzaCI7czo0MDoiMzllYzIwODk5OTcyZjc2ZmU1NDk0Mjk0N2E4MGY4NzNlOTcwNThhOCI7fQ==/joseph-gordon-levitt-2.jpg",
          "email": "josephgordonlevitt@yahoo.com",
          "location": "Manila, PHIL",
          "interests": [
            "Finance, Business, Cooking"
          ]
        }
      ];
    }
