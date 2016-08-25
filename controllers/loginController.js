app.controller('loginCtrl',function($scope, $state){
    $scope.name = 'KAKA';
    $scope.login = function (user) {
        console.log(user);
        $state.go('home');
    }
});