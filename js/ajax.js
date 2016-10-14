/**
 * Created by Administrator on 2016/10/13.
 */
var mobileForm = {};
/*获得的json对象*/
mobileForm.oldJson;
/*通过得到的json重新渲染控件*/
mobileForm.getCtrlrevert;
/**
 * 基本控件的渲染
 */
mobileForm.ctrlRevert = function () {
    var strForm = mobileForm.getCtrlrevert.fieldList;

    for (attrs in strForm) {
        //去除button类型的控件
        if (strForm[attrs].type == 'button') {
            strForm.splice(attrs, 1);
            strForm.length--;
        }
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
        formDivOuter.attr('class', ' revert' + strForm[attrs].type);
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

        //添加控件标签 和 控件名称
        formDivOuter.append(nameSpan);
        formDivOuter.append(titleSpan);
        //获取重绘控件外围 并添加DOM
        $("#baseRevertCtrl").append(formDivOuter);
    }
}
/**
 * 在手机中创建控件
 * @param ele {jquery对象} 当前点击的基本控件本身
 */
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
    mobileDivCtrl.append(mobDivTitle)
    /*创建控件Div*/
    var mobDivCtrl = $('<div></div>');
    mobDivCtrl.attr('class', 'mobDiv' + ele.attr('type'));
    mobileDivCtrl.append(mobDivCtrl);
    //向手机画布中添加控件
    $('#mobileCanvas').append(mobileDivCtrl)
};
/**
 * 获取更改后的json
 * @returns {Array}
 */
mobileForm.getMobileOrderBy = function () {
    /*获取旧的控件json*/
    var olderJsonList = mobileForm.oldJson.fieldList;
    /*获取新的排列好的控件对象*/
    var mobileControl = $('#mobileCanvas')[0].childNodes;
    //判断新旧json 如果相等 加orderby属性 并且一次加一
    for (var i = 1; i < mobileControl.length; i++) {
        for (attr in olderJsonList) {
            if (mobileControl[i].id == olderJsonList[attr].id) {
                var orderby = i + 1;
                olderJsonList[attr].orderby = orderby;
            }
        }
    }
    //重新赋值fieldList
    mobileForm.oldJson.fieldList = olderJsonList;
    /*返回新的json*/
    var mobileCtrlNew = mobileForm.oldJson;

    return mobileCtrlNew;
};
/**
 * 点击提交按钮
 */
function submitDom() {
    /*定义一个object 方整理好的json*/
    var mobileCtrlNewOrderBy = {};
    //获取排列好的json
    var mobileCtrlNew = mobileForm.getMobileOrderBy();
    /*定义一个数组 等于去掉多余信息的值*/
    var mobileCtrlOrderBy = [];
    for (attr in mobileCtrlNew.fieldList) {
        /*一个临时的对象*/
        var mobileOerderBy = {};
        //在里面是对象里添加属性
        mobileOerderBy.id = mobileCtrlNew.fieldList[attr].id;
        mobileOerderBy.orderby = mobileCtrlNew.fieldList[attr].orderby;
        mobileCtrlOrderBy.push(mobileOerderBy);
    }
    //在整理好的对象里 添加属性
    mobileCtrlNewOrderBy.id = mobileCtrlNew.id;
    mobileCtrlNewOrderBy.fieldList = mobileCtrlOrderBy;
    console.log(mobileCtrlNewOrderBy);

    /**
     * 使用ajax请求的post方式 提交数据
     */
    $.ajax({
        data: mobileCtrlNewOrderBy,
        type: 'post',
        url: 'http://192.168.1.49:8080/oa/service/defineform/updateOrderby',
        dataType: 'json',
        contentType: 'charset=utf-8',
        cache: false,
        success: function (req) {
            console.log(req);
        },
        error: function (XMLHttpRequest) {
            alert(XMLHttpRequest.readyState);

        }
    })
}

/**
 * 页面自动加载
 */
$(function () {
    /**
     * 使用ajax请求获取json值
     */
    $.ajax({
        type: 'get', /*请求类型*/
        url: 'js/test.json', /*请求路径*/
        contentType: "application/json; charset=utf-8", /*编码*/
        dataType: 'json', /*数据类型*/
        success: function (mes) {
            /*获取ajax请求后的数据*/
            var ctrlForm = mes.data;
            mobileForm.oldJson = ctrlForm;
            mobileForm.getCtrlrevert = ctrlForm;
            mobileForm.ctrlRevert();
        },
        error: function (mes) {
            alert('数据请求失败!')
        }
    });
    /**
     * 获得画板 规定位置和允许拖动
     */
    $('#mobileCanvas').sortable({
        placeholder: "ui-state-highlight"
    }).disableSelection();
});

