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

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var reqPath = SERVER_PATH + 'GetPageList';
      var url = '../../testData/focusDesc.json';

      //页面配置参数
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


      function render(data, domNode) {
          domNode = domNode || getByClass('river-main');
          var tpl = '<div class="river-cont">{{pageContent}}</div>';

          // 构建DOM结构
          createHtmlFactory(tpl, data, domNode);
      }

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

      // 分页组件创建
      var pageNationCompt = null;
      pageNationCompt = createObjFactory(config);
      pageNationCompt.init(1);

      // 页面初始化
      ajax(GLOBAL_CONFIG.pageInitParam);
});
