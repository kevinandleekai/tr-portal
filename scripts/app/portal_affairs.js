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


      var SERVER_PATH = global.SERVER_PATH;

      var createHtmlFactory =  component.createHtmlFactory;

      var createObjFactory = component.createObjFactory;

      var reqPath = SERVER_PATH + 'GetPageList';

      var ajax = myajax.ajax;

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var parentId = getParam('parentId');
      var action = getParam('action');


      //页面配置参数
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: SERVER_PATH + action,
             data: "{'parentId': "+parentId+", pageType:1, 'userNo': 'shangchaoshi'}",
             success: function(data) {
                 data = eval('('+ data +')');
                 //render(data['plateList']);
             }
          }
      };
      var lstCompt = null;
      function render(data, domNode) {
          domNode = domNode || getByClass('affairs-list');
          var tpl = '<li class="affairs-item" data-plateid="{{plateId}}">{{plateTitle}}</li>';
          createHtmlFactory(tpl, data, domNode);

          var config = {
          	 nodes: getByClass('affairs-item'),
             css: {borderColor: '#f60'},
             oldStyle: {borderColor: "#110f7c"},
             up: function() {
             	  this.handleUp();
             },
             down: function() {
                this.handleDown(pageNationCompt);
             },
             href: function() {
             	 var self = this,
                 nowNode = self.aItems[self.nowIndex],
                 plateId = nowNode.getAttribute('data-plateid');
	              if (plateId.length) {
	                 location.href = './affairsDesc.html?plateId=' + plateId;
	              }
             }
          };
          lstCompt = createObjFactory(config);
      }

      // 组件参数配置
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
      }
      var pageNationCompt = null;
      pageNationCompt = createObjFactory(config);
      pageNationCompt.init(1);

     // 页面初始化
     ajax(GLOBAL_CONFIG.pageInitParam);
});
