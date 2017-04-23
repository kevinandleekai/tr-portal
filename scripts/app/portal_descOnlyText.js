/**
 * author: leekai
 * created on 2017/4/6 0006
 */
require.config({
    baseUrl: '../scripts/libs'
});
require(['global', 'myajax', 'util', 'autoScroll'], function(global, myajax, util, autoScroll){
    var getByClass = util.getByClass,  // 根据class来获取元素
        id = util.id,  // 根据id来获取元素
        ajax = myajax.ajax,   // ajax 请求通用函数
        getParam = util.getParam,
        getByClass = util.getByClass,
        getClientInfo = util.getClientInfo,

        PIC_PATH = global.PIC_PATH,    // 图片地址
        SERVER_PATH = global.SERVER_PATH,

        action = getParam('action'),
        parentId = getParam('parentId'),
        pageId = getParam('pageId'),
        title = getParam('title'),
        smartNo = getClientInfo()['smartNo'],
        smartNo = smartNo || 'shangcaoshi',

        //全局页面配置参数
        GLOBAL_CONFIG = {
            pageInitParam: {
                url: SERVER_PATH + action,
                /*method: 'get',*/
                data: "{'userNo': 'shangcaoshi', 'parentId': '"+parentId+"', 'pageId': '"+pageId+"'}",
                success: function(data) {
                    data = eval('('+ data +')');
                    var resultCode = parseInt(data['resultCode'], 10);
                    // resultCode为非0时, 直接当失败处理
                    if (resultCode !== 0) {
                       alert('请求失败!');
                       return false;
                    }
                    // 如果pageList字段的数据长度为0，直接当做没有数据处理
                    var pageList = data['pageList'];
                    if (!pageList.length) {
                        alert('没有任何数据!');
                        return false;
                    }
                    // 填充内容数据
                    fillContData(pageList[0]);
                }
            },
            // 文章 标题
            listTitle: getByClass('common-title'),
            // 文章正文容器
            listCont: getByClass('common-article-detail')
        };
    // 填充内容数据
    function fillContData(data) {
        GLOBAL_CONFIG.listTitle.innerHTML = data['pageTitle'];
        GLOBAL_CONFIG.listCont.innerHTML = data['textContent'];
    }
    // 页面初始化开始
    function pageInit() {
        GLOBAL_CONFIG.listTitle.innerHTML = unescape(title);
        ajax(GLOBAL_CONFIG.pageInitParam);
    }
    pageInit();
    autoScroll({
        node: document.getElementById('common-article-cont')
    });
});
