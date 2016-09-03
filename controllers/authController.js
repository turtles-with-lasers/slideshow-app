app.controller('authCtrl',function($scope, $state, $http){
    $scope.name = 'KAKA';
    $scope.login = function (user) {
        console.log(user);
        $http.post('http://127.0.0.1:3000/api/auth/login',user)
            .success(function(data){
                console.log(data)
            })
            .error(function(err){
                console.log(err)
            })
        //$state.go('home');
    };
    $scope.signup = function(user){
        $http.post('http://127.0.0.1:3000/api/auth/register',user)
            .success(function(data){
                console.log(data)
            })
            .error(function(err){
                console.log(err)
            })
        console.log(user)
    }
});