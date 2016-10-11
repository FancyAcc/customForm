/**
 * Created by Administrator on 2016/9/29.
 */
$(function () {
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
        $('#containment-wrapper').append('<div style="width: 200px;border: 1px solid" id="div' + type + i + '">' +
            '<div style="float: left;vertical-align: middle;height: 100%;">' + this.innerText + '：</div>' +
            '<input id="text' + i + '" type="text" style="margin: 0;width: 100px;height: 17px"/>' +
            '</div>');

        $('#div' + type + i).draggable({
            containment: "#containment-wrapper",
            cursor: "move"
        }).click(function () {
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
        //var divtext = $('<div>', {
        //    id: 'divText' + i,
        //    width: '200px',
        //    height: '50px',
        //    class: 'ui-widget-content',
        //    click: function () {
        //        $(this).draggable({
        //            cursor: "move",
        //            containment: "#containment-wrapper",
        //            scroll: false
        //        }).resizable({
        //            containment: "#containment-wrapper"
        //        });
        //        $('#width').val(this.clientWidth);
        //        $('#height').val(this.clientHeight);
        //        $('#axis-x').val(this.clientTop);
        //        $('#axis-y').val(this.clientLeft);
        //    }
        //}).appendTo('#containment-wrapper');
        //
        //var labelText = $('<input>', {
        //    id: 'labelText' + i,
        //    style: 'border: none',
        //    width: '60px',
        //    value: '文本框',
        //    readOnly: 'true',
        //    click: function () {
        //        $('#ctrlName').val(this.value);
        //        $('#capWidth').val(this.offsetWidth)
        //    }
        //}).appendTo(divtext);
        //
        //var text = $('<input/>', {
        //    id: 'text' + i,
        //    type: 'text',
        //    width: '100px',
        //    height: '40px'
        //}).appendTo(divtext);

    });

});
