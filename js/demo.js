/**
 * Created by Administrator on 2016/9/29.
 */
$(function () {

    //准备变量
    var i = 0;
    /**
     * 获取"文本框控件",并添加控件到画板
     */
    $('#inp').bind('click', function () {
        //控件类型
        var type = 'text';
        i++;
        //在画布中添加控件
        $('#containment-wrapper').append('<div style="width: 200px;border: 1px solid;z-index: " id="div' + type + i + '">' +
            '<div style="float: left;vertical-align: middle;height: 100%;">' + this.innerText + '：</div>' +
            '<input id="text' + i + '" type="text" style="margin: 0;width: 100px;height: 17px"/>' +
            '</div>');
        /**
         * 外层div 添加拖拽事件
         */
        $('#div' + type + i).draggable({
            containment: "#containment-wrapper",
            cursor: "move"
            /*外层div 添加点击事件*/
        }).click(function () {
            console.log($(this).children())
        });
        /**
         *  控件上添加改变大小的事件,并改变外围的div
         */
        $('#text' + i).resizable({
            containment: "#containment-wrapper",
            minHeight: 17,
            minWidth: 50,
            /*外围的div随控件大小改变而改变*/
            resize: function (event, ui) {
                this.parentNode.style.width = this.offsetWidth + $(this).prev()[0].offsetWidth + 'px';
            }
        });


    });

});
