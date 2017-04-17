require.config({
   baseUrl: '../../scripts/libs'
});

require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
    keyDefine = keyDefine;
    global = global;
    JAlex = JAlex;
    GKey = GKey;
    myajax = myajax;
    util = util;
    component = component;

    var getByClass = util.getByClass,
        createObjFactory = component.createObjFactory,
        lstCompt = null;

    function render(data, domNode) {
        var config = {
            nodes: getByClass('common-article-item'),
            css: {borderColor: '#f60'},
            oldStyle: {borderColor: "#110f7c"},
            up: function() {
                this.handleUp();
            },
            down: function() {
                this.handleDown(pageNationCompt);
            },
            href: function() {
                /*    var self = this,
                     currDom = self.aItems[self.nowIndex],
                     pageId = currDom.getAttribute('data-pageid');
                     parentId = getParam('parentId'),
                     action = currDom.getAttribute('data-action');
                 if (pageId && parentId && action) {
                    location.href = './focusDesc.html?pageId=' + pageId + '&parentId=' + parentId + '&userNo=shangchaoshi' + '&action=' + action;*/
                location.href = './jobDesc.html';
            }
        };
          // 创建组件对象
        lstCompt = createObjFactory(config);
    }
    render();

    var config = {
        nodes: getByClass('pagenation-btn'),
        css: {backgroundColor: '#f60'},
        up: function() {
            var self = this;
            if (lstCompt) {
               self.blur();
               self.showHighLight = false;
               lstCompt.show();
            }
        },
        right: function() {
              this.handleRight();
           },
        left: function() {
              this.handleLeft();
        },
         href: function() {
              history.go(-1);
        }
    };
    //页面初始化
    function pageInit() {
        pageNationCompt = createObjFactory(config);
        pageNationCompt.init(1);
        //ajax(GLOBAL_CONFIG.pageInitParam);
    }
    pageInit();
});

