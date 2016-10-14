/**
 * Created by hanzhongjian on 12/10/16.
 */
var input = {};
//准备变量
input.textNum = 0;
input.type = 'text';
input.width = 130;
input.height = 30;
input.maxlength = 255;

input.createDom = function (property, type) {
    input.textNum++;
    var controlDiv = customForm.resizeDiv();
    var textInput = $('<input/>');
    textInput.attr('type', type);
    textInput.attr('id', input.type + input.textNum);
    textInput.attr('name', input.type + input.textNum);
    textInput.attr('class', 'textControl');
    textInput.attr('cf','true');
    controlDiv.append(textInput);
    var dragDiv = customForm.createDragDiv('#div' + input.type + input.textNum, property);
    var textControl = customForm.addLabel(dragDiv[0], property.title + input.textNum + ":");
    //console.log(dragDiv);
    //设置属性
    property = dragDiv[1];
    property.ctrlName = property.title + input.textNum;
    property.width = input.width;
    property.height = input.height;
    property.id =input.type + input.textNum;
    property.name =input.type + input.textNum;
    property.fieldname = property.ctrlName;
    property.field =input.type + input.textNum;
    if (type != 'date')
        property.maxLength = input.maxlength;

    //控件及属性返回
    return [customForm.insertControl(textControl, controlDiv), property]
};

//标签控件
var title = {};
title.titleNum = 0;

title.createDom = function (property) {
    title.titleNum++;
    var controlDiv = $('<div></div>')
    var titleText = property.title + title.titleNum;
    controlDiv.append(titleText);
    var dragDiv = customForm.createDragDiv('#divTitle' + title.titleNum, property);
    property = dragDiv[1];
    property.ctrlName = property.title + title.titleNum;

    return [customForm.insertControl(dragDiv[0], controlDiv), property];
};


//多行文本框
var textarea = {};
textarea.areaNum = 0;
textarea.width = 200;
textarea.height = 100;
textarea.maxlength = 255;
textarea.type = 'textarea';
//创建dom
textarea.createDom = function (property) {
    textarea.areaNum++;
    var controlDiv = customForm.resizeDiv();
    controlDiv.attr('class', 'areaDiv')

    var area = $('<textarea></textarea>');
    area.attr('cf','true');
    area.attr('class', 'textControl');
    area.attr('id', 'area' + textarea.areaNum);
    area.attr('name', 'area' + textarea.areaNum);
    controlDiv.append(area);

    var dragDiv = customForm.createDragDiv('#divArea' + textarea.areaNum, property);
    var areaControl = customForm.addLabel(dragDiv[0], property.title + textarea.areaNum + ":");

    //设置属性
    property = dragDiv[1];
    property.ctrlName = property.title + textarea.areaNum;
    property.width = textarea.width;
    property.height = textarea.height;
    property.maxlength = textarea.maxlength;
    property.id ='area' + textarea.areaNum
    property.name ='area' + textarea.areaNum
    property.fieldname = property.ctrlName;
    property.field =textarea.type + textarea.areaNum;

    return [customForm.insertControl(areaControl, controlDiv), property]
};

//创建按钮
var button = {};
button.btnNum = 0;
button.width = 100;
button.height = 30;
button.type = 'button';
//创建DOM
button.createDom = function (property) {
    button.btnNum++;
    var controlDiv = customForm.resizeDiv();
    var textBtn = $('<div></div>');
    textBtn.attr('class', 'btnControl');
    textBtn.text(property.title + button.btnNum);
    controlDiv.append(textBtn);

    var dragDiv = customForm.createDragDiv('#divBtn' + button.btnNum, property);
    //设置属性
    property = dragDiv[1];
    property.ctrlName = property.title + button.btnNum;
    property.width = button.width;
    property.height = button.height;

    return [customForm.insertControl(dragDiv[0], controlDiv), property]
};


/**
 * 创建基本控件按钮
 * @param id string
 * @param name string
 * @param type string
 */
function baseCtrl(id, name, type, cla) {
    //创建按钮外部li元素
    var liBtn = $('<li></li>');
    liBtn.attr('class', cla);
    liBtn.on('click', function () {
        customForm.createControl({'type': type, 'title': name})
    });
    //创建按钮
    var spanBtn = $('<span></span>');
    spanBtn.text(name);

    $('#baseCtrl').append(liBtn.append(spanBtn));
}
baseCtrl('inp', '单行文本框', 0, 'baseInp');
baseCtrl('area', '多行文本框', 4, 'baseArea');
baseCtrl('num', '整数', 1, 'baseNum');
baseCtrl('date', '日期', 2, 'baseDate');
baseCtrl('title', '标签', 3, 'baseTit');
baseCtrl('btn', '按钮', '5', 'baseBtn');
