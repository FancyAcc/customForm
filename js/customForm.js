/**
 * Created by hanzhongjian on 11/10/16.
 */
var customForm = {};
//初始化
customForm.init = function () {
    //获取画板位置进行
    customForm.defaultX = $('#containment-wrapper').position().left;
    customForm.defaultY = $('#containment-wrapper').position().top;
}

customForm.controlIndex = 100;
customForm.controlNum = 0;
customForm.currentControl;
customForm.init();

customForm.createDragDiv = function (id) {
    customForm.controlNum++;
    var dragDiv = $("<div></div>");
    dragDiv.attr('class', 'dragDiv');
    dragDiv.attr('id', id);
    dragDiv.css({
        'position': 'absolute',
        'left': customForm.defaultX + customForm.controlNum * 10,
        top: customForm.defaultY + customForm.controlNum * 10,
        'zIndex': customForm.controlIndex + customForm.controlNum * 1
    })
    dragDiv.draggable({
        containment: "#containment-wrapper",
        cursor: "move",
        drag: function (event, ui) {
            //获取dom的位置
            controlPro.getChangePosition(this);
        }
    }).click(function () {
        //todo 选中样式方法
        dragDiv.attr('class', 'sel')
        /*外层div 添加点击事件*/
        controlPro.setCurrentEl(this);
        customForm.currentControl = this;
    });
    return dragDiv;
}

customForm.addLabel = function (el, title) {
    var titleDiv = $('<div></div>');
    titleDiv.text(title)
    titleDiv.attr('class', 'controlLabel');
    el.append(titleDiv);
    return el;
}

customForm.insertControl = function (el, control) {
    return el.append(control)
}

customForm.deleteControl = function () {
    if (customForm.currentControl)
        customForm.currentControl.remove();
}

customForm.createDragDiv('divText1');

$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode == 46) {
        customForm.deleteControl();
    }
});
