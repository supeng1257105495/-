
var myapp = angular.module('app', []);
myapp.controller('myctrl', ['$scope', function ($scope) {
    $scope.activeIndex=0;
    $scope.changeIndex=function(index){
        $scope.activeIndex=index;
    }

}]);
