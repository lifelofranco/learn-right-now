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

    this.voucher = function() {
      return {
         content: [
              { text: 'Event: 4th Entrepreneur & Franchise Expo Philippines', style: 'subheader' },
  				       'For: Leo Lope Lofranco | Ticket Type: Early Bird',
  				    {
  						style: 'tableExample',
  						color: '#444',
              table: {
                widths: ['*', '*', '*'],
								body: [
										['Date and Time', 'Location', 'Order Info'],
										['Friday, March 10, 2017 at 11:00AM - Sunday, March 12, 2017 at 8:00 PM (PHT)', 'Megatrade Hall 1 Mandaluyong Philippines', 'OOrder #575789946. Ordered by Leo Lope Lofranco on November 30, 2016 3:44PM']
								]
						        }
  				      }
          ],
          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 0, 0, 10]
      		  },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5]
            },
            tableExample: {
              margin: [0, 5, 0, 15]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            }
      	 },
    };
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
