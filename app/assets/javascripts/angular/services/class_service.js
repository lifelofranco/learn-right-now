Lrn.service('ClassService', ["$rootScope", "$q", "$http", "$window", "$cookies", "$state", "ngDialog",
  function($rootScope, $q, $http, $window, $cookies, $state, ngDialog) {

    this.classes = function() {
      var d = $q.defer();
      $http({
        method: 'GET',
        url: 'https://lrn-api.herokuapp.com/api/v1/classes'
      }).then(function(data) {
        d.resolve(data)
      });
      return d.promise;
    }

    this.getClass = function(class_id) {
      var d = $q.defer();
          $http({
          method: 'GET',
          url: 'https://lrn-api.herokuapp.com/api/v1/classes/' + class_id
      }).then(function(data){
          d.resolve(data);
      }).catch(function(data){
          d.reject(data);
      });

        return d.promise;
    }


    this.voucher = function(ticket) {
      console.log('voucher',ticket)
      dateIssued = moment(ticket.dateIssued).format('LLL')
      return {
         content: [
              {
                  image:ticket.base64,
                  width: 200,
                  height: 150
              },
              { text: ticket.classTitle, style: 'subheader' },
  				       'For ' + ticket.firstName + ' ' + ticket.lastName + ' | Ticket Type ' + ticket.type,
  				    {
  						style: 'tableExample',
  						color: '#444',
              table: {
                widths: ['*', '*', '*'],
								body: [
                    [{ text: 'Date and Time', style: 'subheader' }, { text: 'Location', style: 'subheader' }, { text: 'Order Info', style: 'subheader' }],
										[ticket.classSchedule, ticket.classVenue, 'Order #575789946. Ordered on ' + dateIssued ]
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
              margin: [0, 20, 0, 15],
              alignment: 'center'
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            }
      	 },
    }
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
      }).then(function(data){
          d.resolve(data);
      }).catch(function(data){
          d.reject(data);
      });

        return d.promise;
    }

}]);
