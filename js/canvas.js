/**
 * Created by Administrator on 2016/10/12.
 */
//创建一个画布对象
var canvasDiv = {};
/**
 * 创建画板div
 */
canvasDiv.createCanvasInner = function (id) {
    var canvasInner = $('<div></div>');
    canvasInner.attr({'id': id});
    return canvasInner;
};
//护板对象放到外层div中
$('#painter').append(canvasDiv.createCanvasInner('containment-wrapper'));
