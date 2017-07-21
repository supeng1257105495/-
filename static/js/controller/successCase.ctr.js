/**
 * Created by Administrator on 2017/5/18/018.
 */
var myapp = angular.module('myapp');
myapp.controller('successCasectr',['$scope',function($scope){
    $scope.activeIndex=0;
    $scope.changeIndex=function(index){
        $scope.activeIndex=index;
    }

}]);
