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
        "positionX": parseFloat($(customForm.currentControl).css('left').replace('px', '')),
        "positionY": parseFloat($(customForm.currentControl).css('top').replace('px', ''))
    });
}

//显示属性
controlPro.changeElPro = function (attrs) {
    var property = customForm.elementProperty[customForm.selIndex];
    for (var i = 0; i < controlPro.attriList.length; i++) {
        for (var j in attrs) {
            if ($(controlPro.attriList[i]).attr('id') == j) {
                $(controlPro.attriList[i]).val(attrs[j]);
                if (customForm.type == 'canvas'){
                    debugger
                    customForm.property[j] = attrs[j];
                 }else
                    property[j] = attrs[j];
            }
        }
    }
}

//初始化控件属性
controlPro.initElPro = function (attrs, type) {
    var property = customForm.elementProperty[customForm.selIndex];
    for (var i = 0; i < controlPro.attriList.length; i++) {
        $(controlPro.attriList[i]).parent().css({display: 'none'});
        for (var j in attrs) {
            if ($(controlPro.attriList[i]).attr('id') == j) {
                $(controlPro.attriList[i]).parent().css({display: 'block'});
                $(controlPro.attriList[i]).val(attrs[j]);
                if (type != 'canvas'){
                    customForm.type = 'control';
                    property[j] = attrs[j];
                }else customForm.type = 'canvas';
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

//获取右侧所有的表单
controlPro.getAttributteEL = function () {
    controlPro.attriList = $("#attribute input");
    for (var i = 0; i < controlPro.attriList.length; i++) {
        $(controlPro.attriList[i]).bind('blur', function () {
            var ems = $(this);
            var jpro = {};
            jpro[ems.attr('name')] = ems.val();
            controlPro.changeElPro(jpro);
            customForm.displayControlStyle(ems.attr('name'), ems.val());
        });
    }
}

controlPro.getAttributteEL();