angular.module('app').controller('mvNavBarLoginCtrl', function($scope) {
    $scope.signin = function(username, password) {
        console.log("login attempt");
    }
});
