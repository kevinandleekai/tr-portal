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

        navbarCompt = null,
        lstCompt = null,

        action = getParam('action'),
        showOrder = getParam('showOrder'),
        parentId = getParam('parentId'),
        ALL_DATAS = null,    // 存储请求回来的所有数据
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
                    ALL_DATAS = data['columnList'];
                    if (!ALL_DATAS.length) {
                        alert('没有任何数据!');
                        return false;
                    }
                    // 填充导航条数据
                    fillNavbarData(id('navbar'), ALL_DATAS[0]);

                    // 填充对应子版块的数据
                    fillSubModuleData(GLOBAL_CONFIG.serviceItem, ALL_DATAS[0]);
                }
            },
            //列表容器
            serviceList: getByClass('service-list'),
            // 列表项
            serviceItem: getByClass('service-item')
        };

    //填充导航数据
    function fillNavbarData(domNode, data) {
        domNode = domNode || null;
        data = data['topColumnInfo'] || null;
        if (!domNode || !data.length) return false;
        var navItems = domNode.children;
        // 填充数据
        for (var i = 0, len = data.length; i < len; i++) {
            var currNode = navItems[i];
            currNode.innerHTML = data[i]['columnTitle'];
            addClass(currNode, 'navbar-item-div');

            currNode.setAttribute('data-mainHtml', data[i]['mainHtml']);
            currNode.setAttribute('data-showorder', data[i]['showOrder']);
            currNode.setAttribute('data-action', data[i]['action']);
            currNode.setAttribute('data-columnno', data[i]['columnNo']);
        }

        // 进行组件构建
        var config = {
           nodes: getByClass('navbar-item-div'),
           css: {color: '#fd7f04'},
           right: function() {
               var self = this;
               // this.handleRight();
               if (self.nowIndex < self.itemSize - 1) {
                  self.blur();
                  self.nowIndex ++;
                  self.focus();
               } else {
                  self.blur();
                  self.nowIndex = 0;
                  self.focus();
               }
           },
           left: function() {
               this.handleLeft();
           },
           down: function() {
               var self = this;
               if (!lstCompt) return false;
               lstCompt.show();
               self.blur();
               self.showHighLight = false;
           },
           href: function() {
            /*currNode.setAttribute('data-mainHtml', data[i]['mainHtml']);
            currNode.setAttribute('data-showorder', data[i]['showOrder']);
            currNode.setAttribute('data-action', data[i]['action']);
            currNode.setAttribute('data-columnno', data[i]['columnNo']);*/
              var self = this,
                  currDom = self.aItems[self.nowIndex],
                  linkAddr = currDom.getAttribute('data-mainhtml'),
                  showOrder = currDom.getAttribute('data-showorder'),
                  action = currDom.getAttribute('data-action'),
                  parentId = currDom.getAttribute('data-columnno');
              linkAddr && (location.href = linkAddr + '?showOrder=' + showOrder + '&action=' + action + '&parentId=' + parentId);

           }
        };
        navbarCompt = createObjFactory(config);
        if (showOrder) {
            showOrder = showOrder - 1;
        } else {
            showOrder = 0;
        }
        navbarCompt.init(showOrder);
    }
    /**
     * @param {[node 要追加内容的节点]}
     * @param {[sName 要追加的class名称]}
     * @param {[data  主要取图片地址]}
     */
    function fillSubModuleData(domNode, data) {
        if (!domNode || !data) return false;
        data = data['columnList'];
        // 绑定自定义属性数据和追加对应的class
        addOption(domNode, data, 'service-item-div');

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
               } else {
                  self.blur();
                  self.showHighLight = false;
                  navbarCompt.show();
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
    }
    function addOption(node, data, sName) {
        if (!node || !data) return false;
        var len = node.length, currNode, i, oImg;
        for (i = 0; i < len; i++) {
            currNode = node[i];
            currNode.setAttribute('data-mainHtml', data[i]['mainHtml']);
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
