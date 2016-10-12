/**
 * Created by hanzhongjian on 11/10/16.
 */
var controlPro = {};
controlPro.attriList = [];
controlPro.setCurrentEl = function(el){
    controlPro.currentEl = $(el);
}

//获取当前dom的具体位置
controlPro.getChangePosition = function(el) {
    controlPro.currentEl = $(el);
    controlPro.changeElPro({
        "positionX":parseFloat(controlPro.currentEl.css('left').replace('px','')) - customForm.defaultX,
        "positionY":parseFloat(controlPro.currentEl.css('top').replace('px','')) - customForm.defaultY
    });
}

//显示属性
controlPro.changeElPro = function(attrs) {
    for(var i=0; i<controlPro.attriList.length ; i++){
        for(var j in attrs){
            if($(controlPro.attriList[i]).attr('id') ==j)$(controlPro.attriList[i]).val(attrs[j]);
        }
    }
}

controlPro.getChangeResize = function(){

}

//获取右侧所有的表单
controlPro.getAttributteEL = function(){
    controlPro.attriList = $("#attribute input");
}

controlPro.getAttributteEL();

