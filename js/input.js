/**
 * Created by hanzhongjian on 12/10/16.
 */
var input = {}

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
    var textControl = customForm.addLabel(dragDiv[0], property.title + input.textNum+":");

    //设置属性
    property = dragDiv[1];
    property.ctrlName = property.title + input.textNum;
    property.name =input.type + input.textNum;
    property.width = input.width;
    property.height = input.height;
    property.maxLength = input.maxlength;

    //控件及属性返回
    return [customForm.insertControl(textControl, controlDiv),property]
}

