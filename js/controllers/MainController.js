app.controller('booksCtrl', function($scope, $http) {

  $http.get("https://s3-us-west-2.amazonaws.com/joshuamfernandes/california.json")
    .then(function(response) {
      $scope.data = response.data;
    });
});
