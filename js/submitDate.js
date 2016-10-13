/**
 * Created by hanzhongjian on 13/10/16.
 */

function subDate(el){
    var subJson = {};
    var subDate = $(el).find('[cf=true]');
    for(var i=0;i<subDate.length;i++){
        subJson[$(subDate[i]).attr('name')] =$(subDate[i]).val()
    }
    //todo 提交数据 接口
    return false;
}