/**
 * author: leekai
 * created on 2017/4/6 0006
 */
require.config({
    baseUrl: '../scripts/libs'
});
require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
    var getByClass = util.getByClass,  // 根据class来获取元素
        id = util.id,  // 根据id来获取元素
        ajax = myajax.ajax,   // ajax 请求通用函数
        createObjFactory = component.createObjFactory,
        page = JAlex.page,
        addClass = util.addClass,  // 为dom元素添加class
        getParam = util.getParam,
        getClientInfo = util.getClientInfo,

        PIC_PATH = global.PIC_PATH,    // 图片地址
        SERVER_PATH = global.SERVER_PATH,

        lstCompt = null,

        action = getParam('action'),
        parentId = getParam('parentId'),
        smartNo = getClientInfo()['smartNo'],
        smartNo = smartNo || 'shangcaoshi',
        //全局页面配置参数
        GLOBAL_CONFIG = {
            pageInitParam: {
                url: SERVER_PATH + action,
                /*url: './testData/index.json',*/
                /*method: 'get',*/
                data: "{'userNo': '"+smartNo+"', 'parentId': '"+parentId+"'}",
                success: function(data) {
                    data = eval('('+ data +')');
                    var resultCode = parseInt(data['resultCode'], 10);
                    // resultCode为非0时, 直接当失败处理
                    if (resultCode !== 0) {
                       alert('请求失败!');
                       return false;
                    }
                    // 如果columnList字段的数据长度为0，直接当做没有数据处理
                    var columnList = data['columnList'];
                    if (!columnList.length) {
                        alert('没有任何数据!');
                        return false;
                    }
                    // 填充左侧图片内容
                    fillLeftList(columnList[0]);
                    // 填充右侧图片内容
                    fillRightList(columnList[0]);
                }
            },
            //左侧列表项
            leftListItems: getByClass('common-pic-item'),
            //右侧列表
            rightListItems: getByClass('grid-list-item')
        };

    //填充左侧列表数据
    function fillLeftList(data) {
        var imageList = data['albumList'][0]['imageList'],
            len = imageList.length,
            i = 0,
            currNode = null,
            childNode = null;
        if (!imageList.length) return false;
        // 填充数据
        for (; i < len; i++) {
           currNode = GLOBAL_CONFIG.leftListItems[i];
           childNode = currNode.getElementsByTagName('img')[0];
           childNode.src = PIC_PATH + imageList[i]['imageUrl'].replace('..', '');
        }
    }
    /**
     * @param {[node 要追加内容的节点]}
     * @param {[sName 要追加的class名称]}
     * @param {[data  主要取图片地址]}
     */
    function fillRightList(data) {
        var columnList = data['columnList'],
            len = columnList.length;
        if (!len) return false;
        // 绑定自定义属性数据和追加对应的class
        addOption(GLOBAL_CONFIG.rightListItems, columnList, 'service-item-div');

        // 进行组件构建
        var config = {
            nodes: getByClass('service-item-div'),
            up: function() {
                var self = this,
                nowIndex = self.nowIndex;
                if (nowIndex > 1) {
                    self.blur();
                    self.nowIndex = nowIndex - 2;
                    self.focus();
                }
            },
            right: function() {
                this.handleRight();
            },
            down: function() {
                var self = this,
                nowIndex = self.nowIndex,
                size = self.itemSize;
                if (size > 2) {
                  if (nowIndex < 2) {
                      self.blur();
                      self.nowIndex = nowIndex + 2;
                      self.focus();
                  }
               }
            },
            left: function() {
               this.handleLeft();
            },
            href: function() {
                var self = this,
                    currDom = self.aItems[self.nowIndex],
                    linkHref = currDom.getAttribute('data-mainHtml'),
                    parentId = currDom.getAttribute('data-parentid');
                    action = currDom.getAttribute('data-action');
                if (!linkHref) return;
                location.href = linkHref + '?action=' + action + '&parentId='+parentId;
            }
        };
        lstCompt = createObjFactory(config);
        lstCompt.init();
    }
    function addOption(node, data, sName) {
        if (!node || !data) return false;
        var len = node.length, currNode, i, oImg;
        for (i = 0; i < len; i++) {
            currNode = node[i];
            currNode.setAttribute('data-mainhtml', data[i]['mainHtml']);
            currNode.setAttribute('data-parentid', data[i]['columnNo']);
            currNode.setAttribute('data-action', data[i]['action']);

            sName && addClass(currNode, sName);
            oImg = currNode.getElementsByTagName('img')[0];
            var columnCover = data[i]['columnCover'].replace('..', '');
            columnCover = PIC_PATH + columnCover;
            oImg.src = columnCover;
        }
    }
    // 页面初始化开始
    function pageInit() {
        ajax(GLOBAL_CONFIG.pageInitParam);
    }
    pageInit();
});
