/**
 * Created by Administrator on 2016/9/29.
 */
$(function () {

    var defaultX = $('#containment-wrapper').position().left;
    var defaultY = $('#containment-wrapper').position().top;

    $('#drag').draggable({
        /*拖动*/
        cursor: "move",
        containment: "#containment-wrapper",
        scroll: false
    }).resizable({
        /*尺寸变更*/
        containment: "#containment-wrapper",
        minHeight: 40,
        minWidth: 300
    });


    /**
     * 获取"文本框控件",并添加
     */
    var i = 0;
    $('#inp').bind('click', function () {
        var type = 'text';
        i++;
        $('#containment-wrapper').append('<div style="width: 200px;border: 1px solid;left:0px;top:1px;position:absolute" id="div' + type + i + '">' +
            '<div style="float: left;vertical-align: middle;height: 100%;">' + this.innerText + '：</div>' +
            '<input id="text' + i + '" type="text" style="margin: 0;width: 100px;height: 17px"/>' +
            '</div>');

        $('#div' + type + i).draggable({
            containment: "#containment-wrapper",
            cursor: "move",
            drag: function (event, ui) {
                //获取dom的位置
                controlPro.getChangePosition(this);
            }
        }).click(function () {
            controlPro.setCurrentEl(this);
            console.log($(this).children())
        });
        $('#text' + i).resizable({
            containment: "#containment-wrapper",
            minHeight: 17,
            minWidth: 50,
            resize: function (event, ui) {
                this.parentNode.style.width = this.offsetWidth + $(this).prev()[0].offsetWidth + 'px';

            }
        });
    });

});
