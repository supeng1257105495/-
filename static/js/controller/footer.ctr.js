/**
 * Created by Administrator on 2017/5/18/018.
 */
var myapp = angular.module('myapp');
myapp.controller('footerctr',['$scope',function($scope){
    //∆Û“µ«–ªª
    //$(".footer-one").hide();
    //$(".footer-one:first").show();
    $(".all").hover(function(){
        var $index = $(this).index();
        $(".footer-one").hide();
        $(".footer-one").eq($index).show();
    });

}]);
