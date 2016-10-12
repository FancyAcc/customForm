/**
 * Created by hanzhongjian on 11/10/16.
 */
var customForm = {};
//初始化
customForm.init = function () {
    //获取画板位置进行
    console.log($('#containment-wrapper').position());
    customForm.defaultX = 0;
    customForm.defaultY = 0;
}
//元素基础 zindex
customForm.controlIndex = 100;
//页面增加计数
customForm.controlNum = 0;
//当前选中的控件
customForm.currentControl;
//所有存在控件
customForm.elementArr = [];
//所有控件属性
customForm.elementProperty = [];
//当前位标
customForm.selIndex = -1;

customForm.init();

customForm.createControl = function (property) {
    property.titleWidth = 100;
    var controll;
    //判断类型
    switch (property.type) {
        case 'text':
            controll = input.createDom(property);
    }
    $('#containment-wrapper').append(controll[0]);
    customForm.elementProperty.push(controll[1]);
}

//创建拖动div
customForm.createDragDiv = function (id ,property) {
    customForm.controlNum++;
    property.positionX = customForm.defaultX + customForm.controlNum * 10 ;
    property.positionY = customForm.defaultY + customForm.controlNum * 10;
    var dragDiv = $("<div></div>");
    dragDiv.attr('class', 'dragDiv');
    dragDiv.attr('id', id);
    dragDiv.css({
        'position': 'absolute',
        'left': property.positionX,
        'top': property.positionY,
        'zIndex': customForm.controlIndex + customForm.controlNum * 1
    })
    dragDiv.draggable({
        containment: "#containment-wrapper",
        cursor: "move",
        drag: function (event, ui) {
            //设置选中
            customForm.selControlEl(this)
            //获取dom的位置
            customForm.bindBase()
        }
    }).click(function () {
        //设置选中
        customForm.selControlEl(this)
    });

    property.positionX = property.positionX-customForm.defaultX;
    property.positionY = property.positionY-customForm.defaultY;
    return [dragDiv,property];
}

//创建自定义div
customForm.resizeDiv = function () {
    var controlDiv = $('<div></div>');
    controlDiv.attr("class", "controlDiv");
    controlDiv.resizable({
        /*尺寸变更*/
        containment: "#containment-wrapper",
        minHeight: 30,
        minWidth: 130,
        resize: function (event, ui) {
            customForm.selControlEl($(this).parent());
            controlPro.resize(this);
        }
    });

    return controlDiv;
}

//选中的当前控件
customForm.selControlEl = function (el) {
    el = $(el)
    //清空其他控件选中状态
    for (var i in customForm.elementArr) {
        var ele = $(customForm.elementArr[i])
        ele.removeClass('sel');
        if (ele.attr('id') == el.attr('id')) {
            customForm.selIndex = i
        }
    }
    el.addClass('sel')
    /*外层div 添加点击事件*/
    controlPro.setCurrentEl(el);
    customForm.currentControl = el;
    //获取当前控件所在位标
    controlPro.changeElPro(customForm.elementProperty[customForm.selIndex]);

}

//往控件中增加label
customForm.addLabel = function (el, title) {
    var titleDiv = $('<div></div>');
    titleDiv.text(title)
    titleDiv.attr('class', 'controlLabel');
    el.append(titleDiv);
    return el;
}

//往画布上添加控件
customForm.insertControl = function (el, control) {
    var control = el.append(control);
    customForm.elementArr.push(control);
    return control;
}

//删除控件方法
customForm.deleteControl = function () {
    if (customForm.currentControl) {
        customForm.currentControl.remove();
    }
    for (var i in customForm.elementArr) {
        if (customForm.elementArr[i].attr('id') == customForm.currentControl.attr('id')) {
            customForm.elementArr.splice(i, 1);
            customForm.elementProperty.splice(i, 1);
        }
    }
};

//绑定右侧基本属性设置
customForm.bindBase = function () {
    //绑定右侧控件名称

    //绑定右侧高度

    //绑定右侧宽度

    //绑定右侧标题宽度

    //绑定位置
    controlPro.position();
}

//delete键删除
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode == 46) {
        customForm.deleteControl();
    }
});
