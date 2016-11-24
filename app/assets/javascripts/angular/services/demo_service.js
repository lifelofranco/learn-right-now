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

    this.getDummyPastClasses = function() {
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
        }
      ];
    };

    this.getDummyFeaturedClasses = function() {
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

    this.getDummyPastClasses = function() {
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
        }
      ];
    };

    this.getSpeakers = function() {
      return [
        {
          "name": "Father Dacanay, SJ",
          "position": "Ateneo Professor",
          "image": "http://ateneo.edu/sites/default/files/styles/full/public/adolfo%20dacanay%201_0.JPG",
          "bio": "Fr. Adolfo N. Dacanay is a professor here in The Ateneo who teaches TH131: Marriage,Family Life and Human Sexuality in a Catholic Perspective. He graduated with a Bachelor’s Degree in Philosophy at the Ateneo de Manila University in 1974, entered the society of Jesus in 1977, earned his Master’s Degree in Theology at the Ateneo de Manila University, and finished both his J.C.L(Graduate studies) and J.C.D(Doctorate studies) in Canon law at the Gregorian University in 1986 and 1989 respectively. "
        },
        {
          "name": "Ambeth Ocampo",
          "position": "Ateneo Professor",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Ambeth_R._Ocampo.jpg/220px-Ambeth_R._Ocampo.jpg",
          "bio": "Ambeth R. Ocampo (born 1961) is a Filipino historian, academic, journalist, cultural administrator and author best known for his writings about Philippines' national hero José Rizal and for Looking Back, his bi-weekly editorial page column in the Philippine Daily Inquirer. He has served as the Chairman of the National Historical Commission of the Philippines (2002-2011) and concurrently Chairman of the National Commission for Culture and the Arts in (2005-2007)."
        }
      ];
    }

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
