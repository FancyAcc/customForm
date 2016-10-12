/**
 * Created by Administrator on 2016/9/29.
 */
$(function () {
    //准备变量
    var textNum = 0;
    /**
     * 获取"文本框控件",并添加控件到画板
     */
    $('#inp').bind('click', function () {
        //控件类型
        var type = 'text';
        textNum++;
        //创建控件input外层div
        var controlDiv = $('<div></div>');
        //添加 class属性
        controlDiv.attr("class", "controlDiv");
        //jquery-ui 可改变大小的方法
        controlDiv.resizable({
            /*尺寸变更(在画布的范围内)*/
            containment: "#containment-wrapper",
            /*设置可变的最小范围*/
            minHeight: 30,
            minWidth: 130
        });
        //创建input控件
        var textInput = $('<input/>');
        //添加id
        textInput.attr('id', type + textNum);
        //添加类名
        textInput.attr('class', 'textControl');
        //放到父元素里面
        controlDiv.append(textInput);
        //添加控件的标签
        var textControl = customForm.addLabel(customForm.createDragDiv('#div' + type + textNum), '名称:');
        //在画布上添加控件
        $('#containment-wrapper').append(customForm.insertControl(textControl, controlDiv));
    });

});
