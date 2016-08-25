app.controller('homeCtrl',function($scope){
    $scope.name = 'KAKA';
    $scope.addUser = false;
    $scope.openAddUser = function(){
        $scope.addUser = true;
    };
})