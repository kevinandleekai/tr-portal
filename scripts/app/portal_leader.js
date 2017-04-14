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
  	  //var reqPath = SERVER_PATH + 'GetPageList';
      var ajax = myajax.ajax;

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      /*var URL =  "http://192.168.1.111:8090/gportal/GetColumnList.action?parentId="+columnNo+"pageType=1"+"&userNo=shangcaoshi";*/
      var URL = 'http://192.168.38.47:8090/gportal/GetColumnList.action';

      var parentId = getParam('parentId');

      var GLOBAL_CONFIG = {
          pageInitParam: {
              url: URL,
              data: "{'parentId': "+parentId+", pageType:1, 'userNo': 'shangchaoshi'}",
              success: function(data) {
                 data = eval('('+ data +')');
                 var resultCode = parseInt(data['resultCode'], 10);
                 // resultCode为非0时, 直接当失败处理
                 if (resultCode !== 0) {
                     alert('请求失败!');
                     return false;
                 } else {
                     // resultCode为0, 并且pageCover的长度大于0才进行DOM操作
                     var columnList = data['columnList'];
                     if (columnList.length) {
                        render(columnList[0]);
                     }
                 }
                 console.dir(data);
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
