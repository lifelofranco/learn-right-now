Lrn.controller('StudentController', ['$scope', 'DemoService','$state', 'ClassService', 'AuthService', 'BookService',
  function($scope, DemoService, $state, ClassService, AuthService, BookService) {

    if(!$scope.user) {
      $state.go('index');
    }
    var timestamp = $scope.user._id.toString().substring(0,8);
    $scope.user.createdIn = new Date( parseInt( timestamp, 16 ) * 1000 )

    $scope.user_data = DemoService.dummyUserData()[0];
    $scope.full_name = $scope.user_data.first_name + " " + $scope.user_data.last_name;

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    $scope.month_joined = monthNames[$scope.user_data.date_joined.getMonth()];
    $scope.year_joined = $scope.user_data.date_joined.getFullYear();

    $scope.upcoming_classes = DemoService.getDummyUpcomingClasses();
    $scope.past_classes = DemoService.getDummyPastClasses();

    $scope.format_date_class = function(original_date) {
      var formatted_date = original_date.split(', ');
      formatted_date = formatted_date.join(' | ');
      return formatted_date;
    }


    function convertFileToDataURLviaFileReader(ticket) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          ticket.base64 = reader.result;
          var docDefinition = ClassService.voucher(ticket);
          pdfMake.createPdf(docDefinition).download();
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', ticket.classImage);
      xhr.responseType = 'blob';
      xhr.send();
    }

    $scope.download = function(ticket) {
      convertFileToDataURLviaFileReader(ticket);
    }


    AuthService.updateUser($scope.user._id)
    .then(function (d) {
      console.log(d);
      $scope.classes = d.data;
    })

}]);
