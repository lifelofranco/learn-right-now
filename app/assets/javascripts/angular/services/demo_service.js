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

    this.ticket = function() {
      return [
        {
          "title": "Early Bird",
          "price": 200
        },
        {
          "title": "Registration",
          "price": 400
        },
      ];
    };
}]);
