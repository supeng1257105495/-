var myapp = angular.module('myapp');
myapp.controller('platfromctr',['$scope',function($scope){
    var $index2=$('li.active').index();
    var $li=$("li");
    var $tab_pane=$(".tab-pane");
    /*tabͷ���л�*/
    $li.hover(function(){
        var $index=$(this).index();
        $li.removeClass('active');
        $tab_pane.hide();
        $(this).addClass('active');
        $tab_pane.eq($index).show();
    },function(){
    });
    /*tab��һҳ�л�*/
    $('#prev').click(function(){
        console.log($index2);
        if($index2==0){
            $('#prev').css({"color":"red"})
        }else{
            $('#prev').css({"color":"#989898"});
            $('#next').css({"color":"#989898"});
            $li.removeClass("active");
            $li.eq($index2-1).addClass("active");
            $tab_pane.hide();
            $tab_pane.eq($index2-1).show();
            $index2-=1;
        }

    });
    /*tab��һҳ�л�*/
    $('#next').click(function(){
        console.log($index2);
        if($index2==7){
            $('#next').css({"color":"red"})
        }else{
            $('#prev').css({"color":"#989898"});
            $('#next').css({"color":"#989898"});
            $li.removeClass("active");
            $li.eq($index2+1).addClass("active");
            $tab_pane.hide();
            $tab_pane.eq($index2+1).show();
            $index2+=1;
        }

    });
}]);