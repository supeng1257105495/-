/**
 * Created by Administrator on 2017/5/19/019.
 */
var myapp = angular.module('myapp');
myapp.controller('contactusctr',['$scope',function($scope){
    //�����ͳ�ʼ����ͼ������
    function initMap(){
        createMap();//������ͼ
        setMapEvent();//���õ�ͼ�¼�
        addMapControl();//���ͼ���ӿؼ�
        addMarker();//���ͼ������marker
    }

//������ͼ������
    function createMap(){
        var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
        var point = new BMap.Point(112.898694,28.220532);//����һ�����ĵ�����
        map.centerAndZoom(point,18);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
        window.map = map;//��map�����洢��ȫ��
    }

//��ͼ�¼����ú�����
    function setMapEvent(){
        map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
        map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
        map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
        map.disableKeyboard();//���ü����������Ҽ��ƶ���ͼ��Ĭ�Ͻ���(�ɲ�д)
    }

//��ͼ�ؼ����Ӻ�����
    function addMapControl(){
    }

//��ע������
    var markerArr = [{title:"",content:"",point:"112.897818|28.220508",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
    ];
//����marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                borderColor:"#808080",
                color:"#333",
                cursor:"pointer"
            });

            (function(){
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close",function(){
                    _marker.getLabel().show();
                })
                label.addEventListener("click",function(){
                    _marker.openInfoWindow(_iw);
                })
                if(!!json.isOpen){
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
//����InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
//����һ��Icon
    function createIcon(json){
        icon = new BMap.Icon("F:/project1/161201/static/img/images/marker_red_sprite.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)});
        return icon;
    }
//    var map = new BMap.Map("allmap");
//    var point = new BMap.Point(112.897818,28.220508);
//    map.centerAndZoom(point, 15);
//    var marker = new BMap.Marker(point);  // ������ע
//    map.addOverlay(marker);


    initMap();//�����ͳ�ʼ����ͼ
}]);