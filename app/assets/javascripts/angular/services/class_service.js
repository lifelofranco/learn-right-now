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


    this.voucher = function(ticket) {
      console.log(ticket)
      return {
         content: [
              { text: 'Demo Class', style: 'subheader' },
  				       'For ' + ticket.firstName + ' ' + ticket.lastName + ' | Ticket Type ' + ticket.type,
  				    {
  						style: 'tableExample',
  						color: '#444',
              table: {
                widths: ['*', '*', '*'],
								body: [
                    [{ text: 'Date and Time', style: 'subheader' }, { text: 'Location', style: 'subheader' }, { text: 'Order Info', style: 'subheader' }],
										[ticket.email, ticket.email, 'Order #575789946. Ordered by Leo Lope Lofranco on November 30, 2016 3:44PM']
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
      }).success(function(data){
          d.resolve(data);
      }).catch(function(data){
          d.reject(data);
      });

        return d.promise;
    }

}]);
