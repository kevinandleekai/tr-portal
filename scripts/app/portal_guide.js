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

    var lstCompt = null,   //列表对象引用
        getByClass = util.getByClass,
        createObjFactory = component.createObjFactory;
    function render() {
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
                /*var self = this,
                    currDom = self.aItems[self.nowIndex],
                    pageId = currDom.getAttribute('data-pageid'),
                    parentId = getParam('parentId'),
                    action = currDom.getAttribute('data-action');
                if (pageId && parentId && action) {
                    location.href = './focusDesc.html?pageId=' + pageId + '&parentId=' + parentId + '&userNo=shangchaoshi' + '&action=' + action;
                }*/
                location.href = './guideDesc.html';
            }
        };
        // 创建组件对象
        lstCompt = createObjFactory(config);
    }
    render();
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
    var pageNationCompt = null;
    //创建组件
    pageNationCompt = createObjFactory(config);
    pageNationCompt.init(1);
});
