/**
 * author: leekai
 * created on 2017/4/6 0006
 */
require.config({
    baseUrl: '../scripts/libs'
});
require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
    var getByClass = util.getByClass,  // 根据class来获取元素
        ajax = myajax.ajax,   // ajax 请求通用函数
        createObjFactory = component.createObjFactory,
        page = JAlex.page,
        addClass = util.addClass,  // 为dom元素添加class
        getParam = util.getParam,
        getClientInfo = util.getClientInfo,

        SERVER_PATH = global.SERVER_PATH,
        PIC_PATH = global.PIC_PATH,    // 图片地址

        lstCompt = null,
        action = getParam('action'),
        parentId = getParam('parentId'),
        smartNo = getClientInfo().smartNo,
        smartNo = smartNo || 'shangcaosi',

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
                    // 填充列表数据
                    fillListData(columnList[0]);
                }
            },
            // 列表顶级标题
            listTitle: getByClass('common-title'),
            // 列表项
            listItems: getByClass('agent-item')
        };


    //填充列表数据
    function fillListData(data) {
        // 填充标题数据
        GLOBAL_CONFIG.listTitle.innerHTML = data['columnTitle'];
        var columnList = data['columnList'],
            len = columnList.length,
            i = 0;
        if (!len) return false;
        len = len > 4 ? 4 : len;
        // 填充列表项数据
        for (; i < len; i++) {
            var currNode = GLOBAL_CONFIG.listItems[i],
                oImg = currNode.getElementsByTagName('img')[0];
            oImg.src = PIC_PATH + (columnList[i]['columnCover'].replace('..', ''));
            // 添加class
            addClass(currNode, 'agent-item-div');
            currNode.setAttribute('data-pageid', columnList[i]['columnNo']);
            currNode.setAttribute('data-action', columnList[i]['action']);
            currNode.setAttribute('data-mainhtml', columnList[i]['mainHtml']);
        }

        // 进行组件构建
        var config = {
           nodes: getByClass('agent-item-div'),
           up: function() {
              var self = this;
              if (self.nowIndex === 0) return false;
              self.blur();
              self.nowIndex --;
              self.focus();
           },
           right: function() {
                var self = this;
                if (self.nowIndex < self.itemSize - 1) {
                    self.blur();
                    self.nowIndex ++;
                    self.focus();
                    var currDom = self.aItems[self.nowIndex],
                        linkAddr = currDom.getAttribute('data-mainhtml');
                    if (linkAddr) {
                        location.href = linkAddr;
                    }
                }
           },
           left: function() {
               this.handleLeft();
           },
           down: function() {
              var self = this;
              if (self.nowIndex < self.itemSize - 1) {
                  self.blur();
                  self.nowIndex ++;
                  self.focus();
              }
           },
           href: function() {
              var self = this,
                  currNode = self.aItems[self.nowIndex],
                  pageId = currNode.getAttribute('data-pageid'),
                  action = currNode.getAttribute('data-action'),
                  linkAddr = currNode.getAttribute('data-mainhtml'),
                  title = currNode.getAttribute('data-title');
                  title = escape(title);
              linkAddr && (location.href = linkAddr + '?pageId=' + pageId + '&action=' + action + '&title=' + title + '&parentId=' + subParentId);
           }
        };
        lstCompt = createObjFactory(config);
        lstCompt.init();
    }

    // 页面初始化开始
    function pageInit() {
       ajax(GLOBAL_CONFIG.pageInitParam);
    }
    pageInit();
});
