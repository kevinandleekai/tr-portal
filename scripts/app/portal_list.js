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

        PIC_PATH = global.PIC_PATH,    // 图片地址
        SERVER_PATH = global.SERVER_PATH,

        lstCompt = null,
        pageNationCompt = null,
        action = getParam('action'),
        parentId = getParam('parentId'),

        subParentId = null,

        //全局页面配置参数
        GLOBAL_CONFIG = {
            pageInitParam: {
                url: SERVER_PATH + action,
                /*url: './testData/index.json',*/
                /*method: 'get',*/
                data: "{'userNo': 'shangcaoshi', 'parentId': '"+parentId+"'}",
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
                    subParentId = columnList[0]['columnNo'];
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
            listItems: getByClass('common-article-item')
        };


    //填充列表数据
    function fillListData(data) {
        // 填充标题数据
        GLOBAL_CONFIG.listTitle.innerHTML = data['columnTitle'];

        var listData = data['articleList'],
            listItems = GLOBAL_CONFIG.listItems;
        if (!listData) return false;
        // 填充列表项数据
        var len = listData.length > listItems.length ? listItems.length : listData.length;
        for (var i = 0; i < len; i++) {
            var currNode = listItems[i],
                currNodeChild = currNode.children[0];
            currNodeChild.innerHTML = listData[i]['title'];
            // 添加class
            addClass(currNode, 'common-article-item-div');
            currNode.setAttribute('data-pageid', listData[i]['articleId']);
            currNode.setAttribute('data-action', listData[i]['action']);
            currNode.setAttribute('data-mainhtml', listData[i]['mainHtml']);
            currNode.setAttribute('data-title', listData[i]['title']);
        }

        // 进行组件构建
        var config = {
           nodes: getByClass('common-article-item-div'),
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
              } else {
                  self.blur();
                  self.showHighLight = false;
                  pageNationCompt.show();
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
    }

    // 创建分页
    var config = {
        nodes: getByClass('pagenation-btn'),
        css: {backgroundColor: '#f60'},
        right: function() {
           this.handleRight();
        },
        left: function() {
           this.handleLeft();
        },
        href: function() {
           var self = this;
        },
        up: function() {
           var self = this;
           if (!lstCompt) return false;
           self.blur();
           self.showHighLight = false;
           lstCompt.show();
        }
    };

    //创建组件
    pageNationCompt = createObjFactory(config);
    pageNationCompt.init(1);
    // 页面初始化开始
    function pageInit() {
       ajax(GLOBAL_CONFIG.pageInitParam);
    }
    pageInit();
});
