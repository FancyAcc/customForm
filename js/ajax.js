/**
 * Created by Administrator on 2016/10/13.
 */
var mobileForm = {};
mobileForm.oldJson;
mobileForm.createMobileCtrl = function (ele) {

    /*创建外围div*/
    var mobileDivCtrl = $('<div></div>');
    mobileDivCtrl.attr('class', 'mobileCtrlDiv');
    mobileDivCtrl.attr('id', ele.attr('id'));
    mobileDivCtrl.attr('name', ele.attr('name'));

    /*创建标签div*/
    var mobDivTitle = $('<div></div>');
    mobDivTitle.attr('class', 'controlTitle');
    var mobileTitle = ele.attr('ctrlname');
    mobDivTitle.append(mobileTitle);
    $('#mobileCanvas').append(mobileDivCtrl.append(mobDivTitle))
};
/**
 * 获取更改后的json
 * @returns {Array}
 */
mobileForm.getMobileCtrl = function () {
    var mobileControl = [];
    var indexCtrl = 0;
    mobileControl = $('#mobileCanvas')[0].childNodes;

    for (var i = 1; i < mobileControl.length; i++) {
        for (attr in mobileForm.oldJson) {
            if (mobileControl[i].id == mobileForm.oldJson[attr].id) {
                var orderBy = i + 1;
                mobileForm.oldJson[attr].orderBy = orderBy;
            }
        }
    }
    console.log(mobileControl);
    console.log(mobileForm.oldJson);
    return mobileControl
};

function submitDom() {
    mobileForm.getMobileCtrl();
}

$(function () {

    /**
     * 使用ajax请求获取json值
     */
    $.ajax({
        type: 'post', /*请求类型*/
        url: 'js/test.json', /**/
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (message) {
            /*获取ajax请求后的数据*/
            var strForm = message;
            mobileForm.oldJson = strForm;
            for (attrs in strForm) {
                /*创建li元素回流重绘*/
                var formDivOuter = $('<li></li>');
                //添加各种属性
                formDivOuter.attr('height', strForm[attrs].height);
                formDivOuter.attr('maxLength', strForm[attrs].maxLength);
                formDivOuter.attr('positionX', strForm[attrs].positionX);
                formDivOuter.attr('positionY', strForm[attrs].positionY);
                formDivOuter.attr('title', strForm[attrs].title);
                formDivOuter.attr('titleWidth', strForm[attrs].titleWidth);
                formDivOuter.attr('width', strForm[attrs].width);
                formDivOuter.attr('type', strForm[attrs].type);
                formDivOuter.attr('ctrlName', strForm[attrs].ctrlName);
                formDivOuter.attr('class', ' revert' + strForm[attrs].type)
                formDivOuter.attr('id', strForm[attrs].id);
                formDivOuter.attr('name', strForm[attrs].name);
                //添加点击事件 删除本身
                formDivOuter.click(function (event) {
                    event.stopPropagation();
                    mobileForm.createMobileCtrl($(this));
                    $(this).remove();
                });
                //创建span标签 显示控件标题
                var titleSpan = $('<span></span>');
                titleSpan.attr('class', 'mobileTitleCtrl');
                var reverTitle = strForm[attrs].title;
                titleSpan.append(reverTitle);

                //创建span标签 显示控件名称
                var nameSpan = $('<span></span>');
                nameSpan.attr('class', 'mobileNameCtrl');
                var revertName = strForm[attrs].ctrlName;
                nameSpan.append(revertName);


                formDivOuter.append(nameSpan);
                formDivOuter.append(titleSpan);
                //获取重绘控件外围 并添加DOM
                $("#baseRevertCtrl").append(formDivOuter);
            }
        },
        error: function (message) {
            alert('数据请求失败!')
        }
    });
    $('#mobileCanvas').sortable().disableSelection();

});

