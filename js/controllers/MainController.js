app.controller('booksCtrl', function($scope, $http) {

  $http.get("https://population.datanab.net/united_states/california_json")
    .then(function(response) {
      $scope.data = response.data;
    });
});
