Lrn.controller('StudentController', ['$scope', 'DemoService',
  function($scope, DemoService) {

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

    $scope.photo_html_string = "background-image:url(" + $scope.user_data.profile_photo + ")";
    console.log($scope.photo_html_string);
}]);
