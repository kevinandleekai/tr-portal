require.config({
   baseUrl: '../../scripts/libs'
});

require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
      keyDefine = keyDefine;
      global = keyDefine;
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

      var URL = '../../testData/leader.json';

      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: URL,
             method: 'GET',
             data: {
                client: getClientInfo().smartNo,
                regionCode: getClientInfo().reginCode,
                parentId: getParam('parentId'),
                startPage: 1,
                pageSize: 2,
                pageType: 1,
                parentType: 1
             },
             success: function(data) {
                 data = eval('('+ data +')');
                 data = data[0]['pageList'][0]['pageCover'];
                 render(data);
             }
          }
      };

      // 渲染DOM结构
      function render(data, domNode) {
          domNode = domNode || getByClass('leader');
          var tpl = '<img src={{picSrc}} class="leader-item">';
          // 构建DOM
          createHtmlFactory(tpl, data, domNode);

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
  	        }
     		 };
    		 var pageNationCompt = null;
       		//创建组件
         pageNationCompt = createObjFactory(config);
         pageNationCompt.init(1);
      }

      // 页面初始操作
      ajax(GLOBAL_CONFIG.pageInitParam);
});
