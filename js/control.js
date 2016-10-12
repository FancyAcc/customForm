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

input.createDom = function (property) {
    input.textNum++;
    var controlDiv = customForm.resizeDiv();
    var textInput = $('<input/>');
    textInput.attr('id', input.type + input.textNum);
    textInput.attr('name', input.type + input.textNum);
    textInput.attr('class', 'textControl');
    controlDiv.append(textInput);
    var dragDiv = customForm.createDragDiv('#div' + input.type + input.textNum, property);
    var textControl = customForm.addLabel(dragDiv[0], property.title + input.textNum + ":");

    //设置属性
    property = dragDiv[1];
    property.ctrlName = property.title + input.textNum;
    property.width = input.width;
    property.height = input.height;
    property.maxLength = input.maxlength;

    //控件及属性返回
    return [customForm.insertControl(textControl, controlDiv), property]
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
baseCtrl('inp', '单行文本框', 'text', 'baseInp');
baseCtrl('area', '多行文本框', 'testarea', 'baseArea');
baseCtrl('num', '整数', 'number', 'baseNum');
baseCtrl('date', '日期', 'date', 'baseDate');
baseCtrl('title', '标签', 'title', 'baseTit');
baseCtrl('btn', '按钮', 'button', 'baseBtn');