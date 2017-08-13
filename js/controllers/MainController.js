app.controller('booksCtrl', function($scope, $http) {

var url = "https://s3-us-west-2.amazonaws.com/joshuamfernandes/california.json";
$http({
    method: 'JSONP',
    url: url
}).
success(function(status) {
  $scope.data = response.data;
}).
error(function(status) {
    //your code when fails
});
};
