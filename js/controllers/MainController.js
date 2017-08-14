app.controller('booksCtrl', function($scope, $http) {
  $scope.method = 'GET';
  $scope.url = "https://s3-us-west-2.amazonaws.com/joshuamfernandes/california.json";
  $http({method:$scope.method, url:$scope.url})
    .then(function(response) {
      $scope.data = response.data;
    }, function(response){
      $scope.data = response.data || 'Request failed';
    });
});
