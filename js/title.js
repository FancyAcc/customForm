/**
 * Created by Administrator on 2016/10/11.
 */
$(function () {
    /*准备变量*/
    var i = 0;
    var type = 'title';
    /**
     * 获取控件按钮 绑定点击事件
     */
    $('#title').bind('click', function () {
        //在画布中添加控件
        $('#containment-wrapper').append('<div id="div' + type + i + '" style="text-align: center;border: 1px solid;font-size: 24px;width: 200px;height: 40px">' + this.innerText + '</div>');
        /**
         * 获取控件并添加拖拽和改变大小的事件
         */
        $('#div' + type + i).draggable({
            containment: "#containment-wrapper",
            cursor: "move"
        }).resizable({
            containment: "#containment-wrapper",
            minHeight: 30,
            minWidth: 150
        });
    });

});