var $li=$("li");
var $tab_pane=$(".tab-pane");
var $prev=$(".prev").eq(0);
var  $next=$(".next").eq(0);

/*tab正常切换方式*/
$li.hover(function(){
    var $index=$(this).index();
    $li.removeClass('active');
    $li.eq($index).addClass('active');
    $tab_pane.hide();
    $tab_pane.eq($index).show();
})
/*tab点击上一页切换*/
$prev.click(function(){
    var $index=$('.active').index();
    console.log($index);
    if($index==0){
        $index=7;
        $li.eq($index).addClass("active");
        $tab_pane.eq($index).show();
        $li.eq(0).removeClass("active");
        $tab_pane.eq(0).hide();
    }else{
        $li.eq($index-1).addClass("active");
        $tab_pane.eq($index-1).show();
        $li.eq($index).removeClass("active");
        $tab_pane.eq($index).hide();
    }
});
/*tab点击下一页切换*/
$next.click(function(){
    var $index=$('.active').index();
    if($index==7){
        $index=0;
        $li.eq($index).addClass("active");
        $tab_pane.eq($index).show();
        $li.eq(7).removeClass("active");
        $tab_pane.eq(7).hide();
    }else{
        $li.eq($index+1).addClass("active");
        $tab_pane.eq($index+1).show();
        $li.eq($index).removeClass("active");
        $tab_pane.eq($index).hide();
    }
});

window.scrollReveal = new scrollReveal({reset: true, move: '100px'});
