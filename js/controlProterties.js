/**
 * Created by hanzhongjian on 11/10/16.
 */
var controlPro = {};
controlPro.attriList = [];
controlPro.setCurrentEl = function (el) {
    controlPro.currentEl = $(el);
}

controlPro.position = function () {
    controlPro.getChangePosition();
}

//获取当前dom的具体位置
controlPro.getChangePosition = function () {
    controlPro.changeElPro({
        "positionX": parseFloat($(customForm.currentControl).css('left').replace('px', '')) - customForm.defaultX,
        "positionY": parseFloat($(customForm.currentControl).css('top').replace('px', '')) - customForm.defaultY
    });
}

//显示属性
controlPro.changeElPro = function (attrs) {
    var property = customForm.elementProperty[customForm.selIndex];
    for (var i = 0; i < controlPro.attriList.length; i++) {
        for (var j in attrs) {
            if ($(controlPro.attriList[i]).attr('id') == j) {
                $(controlPro.attriList[i]).val(attrs[j]);
                property[j] =attrs[j];
            }
        }
    }
}

//拖动改变控件位置
controlPro.resize = function (el) {
    controlPro.changeElPro({
        width: $(el).css('width').replace('px', ''),
        height: $(el).css('height').replace('px', '')
    })
}

//获取控件所有属性
controlPro.getAllProperty = function () {
    var current = $(customForm.currentControl);
    controlPro.changeElPro({
        "positionX": parseFloat(current.css('left').replace('px', '')) - customForm.defaultX,
        "positionY": parseFloat(current.css('top').replace('px', '')) - customForm.defaultY
    });
    //获取控件名称

    //获取控件宽度

    //控件高度

    //标题宽度

    //最大输入

    //横坐标

    //纵坐标

}

//获取右侧所有的表单
controlPro.getAttributteEL = function () {
    controlPro.attriList = $("#attribute input");
}

controlPro.getAttributteEL();

