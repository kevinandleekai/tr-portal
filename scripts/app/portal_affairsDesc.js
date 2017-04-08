require.config({
   baseUrl: '../../scripts/libs'
});
require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
        keyDefine = keyDefine;
      global = keyDefine ;
      JAlex = JAlex;
      GKey = GKey;
      myajax = myajax;
      util = util;
      component = component;


      var SERVER_PATH = global.SERVER_PATH;

      var createHtmlFactory =  component.createHtmlFactory;

      var createObjFactory = component.createObjFactory;

      var reqPath = SERVER_PATH + 'GetPageList';

      var ajax = myajax.ajax;

      var url = '../../testData/focusDesc.json';

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      // 页面全局参数配置
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: url,
             method: 'GET',
             data: {
                client: getClientInfo().smartNo,
                parentId: getParam('parentId'),
                reginCode: getClientInfo().reginCode,
                pageType: 1,
                parentType: 1,
                startPage: 1,
                pageSize: 8,
                exds: ''
             },
             success: function(data) {
                 data = eval('('+ data +')');
                 render(data['pageList']);
             }
          }
      };

      // 页面DOM结构渲染
      function render(data, domNode) {
          domNode = domNode || getByClass('affairs-main');
          var tpl = '<div class="affairs-cont">{{pageContent}}</div>';
          // 构建DOM结构
          createHtmlFactory(tpl, data, domNode);
      }

      // 组件参数配置
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
             history.go(-1);
         }
      };
      var pageNationCompt = null;
      // 创建组件
      pageNationCompt = createObjFactory(config);
      pageNationCompt.init(1);

    // 页面初始化
    ajax(GLOBAL_CONFIG.pageInitParam);
});
