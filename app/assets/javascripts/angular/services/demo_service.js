Lrn.service('DemoService', ["$q", "$http",
  function($q, $http){

    this.class = function() {
       return [
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        }
      ];
    };

    this.dummyUserData = function() {
       return [
         {
           "first_name": "Joseph",
           "last_name": "Gordon-Levitt",
           "profile_photo": "https://m1.joe.ie/YToyOntzOjQ6ImRhdGEiO3M6MTc0OiJhOjM6e3M6MzoidXJsIjtzOjExMjoiaHR0cDovL21lZGlhLWpvZS5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMi8xNzE4MjkyMy9Kb3NlcGgtR29yZG9uLUxldml0dC0yLmpwZyI7czo1OiJ3aWR0aCI7aTo2NDc7czo2OiJoZWlnaHQiO2k6MzQwO30iO3M6NDoiaGFzaCI7czo0MDoiMzllYzIwODk5OTcyZjc2ZmU1NDk0Mjk0N2E4MGY4NzNlOTcwNThhOCI7fQ==/joseph-gordon-levitt-2.jpg",
           "email": "josephgordonlevitt@yahoo.com",
           "location": "Manila, PHIL",
           "interests": ["Finance", "Business", "Cooking"],
           "date_joined": new Date()
         }
      ];
    };

    this.getDummyUpcomingClasses = function() {
       return [
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        },
        {
          "title": "Social Media Marketing",
          "image": "https://dl.dropboxusercontent.com/s/0go6tuhwl9whnue/class.png?dl=0",
          "price": 400,
          "date": "Wed, Nov. 2, 1:00 pm",
          "location": "Ateneo de Manila University",
          "tags": [
            "entrepreneur", "business"
          ]
        }
      ];
    };

/*    this.dummyUserData = function() {
      return
          [{
            "first_name": "Joseph",
            "last_name": "Gordon-Levitt",
            "profile_photo": "https://m1.joe.ie/YToyOntzOjQ6ImRhdGEiO3M6MTc0OiJhOjM6e3M6MzoidXJsIjtzOjExMjoiaHR0cDovL21lZGlhLWpvZS5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMi8xNzE4MjkyMy9Kb3NlcGgtR29yZG9uLUxldml0dC0yLmpwZyI7czo1OiJ3aWR0aCI7aTo2NDc7czo2OiJoZWlnaHQiO2k6MzQwO30iO3M6NDoiaGFzaCI7czo0MDoiMzllYzIwODk5OTcyZjc2ZmU1NDk0Mjk0N2E4MGY4NzNlOTcwNThhOCI7fQ==/joseph-gordon-levitt-2.jpg",
            "email": "josephgordonlevitt@yahoo.com",
            "location": "Manila, PHIL",
            "interests": ["Finance", "Business", "Cooking"]
          }];
      };*/
}]);
