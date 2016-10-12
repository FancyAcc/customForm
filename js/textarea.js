/**
 * Created by Administrator on 2016/10/11.
 */
$(function () {
    /*设置添加控件时候的变量*/
    var i = 0;
    /*添加控件的类型*/
    var type = 'area';
    /**
     * 控件按钮绑定点击事件,进行添加控件
     */
    $('#area').bind('click', function () {
        /*每次点击控件i加一*/
        i++;
        //在画布上添加控件
        $('#containment-wrapper').append('<div id="div' + type + i + '" style="border: 1px solid;width: 500px;z-index: 100;">' +
            '<div style="float: left">' + this.innerText + '：</div>' +
            '<textarea id="textarea' + i + '" rows="5" cols="50"></textarea>' +
            '</div>');
        /**
         * 控件的外部div 添加拖拽事件
         */
        $('#div' + type + i).draggable({
            containment: "#containment-wrapper",
            cursor: "move"
        });
        /**
         * 控件上添加改变大小的事件,并改变外围的div
         */
        $('#textarea' + i).resizable({
            containment: "#containment-wrapper",
            minHeight: 50,
            minWidth: 200,
            /*外围的div随控件大小改变而改变*/
            resize: function () {
                this.parentNode.style.width = this.offsetWidth + $(this).prev()[0].offsetWidth + 'px';
            }
        });
    });
});
