require.config({
   baseUrl: '../../scripts/libs'
});
require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
      keyDefine = keyDefine;
      global = global ;
      JAlex = JAlex;
      GKey = GKey;
      myajax = myajax;
      util = util;
      component = component;

      var createHtmlFactory =  component.createHtmlFactory;
      var createObjFactory = component.createObjFactory;
      var ajax = myajax.ajax;

      var SERVER_PATH = global.SERVER_PATH; // 请求的服务地址
      var PIC_PATH = global.PIC_PATH;  // 图片的地址

      /*var URL =  "http://192.168.1.111:8090/gportal/GetColumnList.action?parentId="+columnNo+"pageType=1"+"&userNo=shangcaoshi";*/


      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var parentId = getParam('parentId');
      var action = getParam('action');

      //页面配置参数
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: SERVER_PATH + action,
             data: "{'parentId': "+parentId+", pageType:2, 'userNo': 'shangchaoshi'}",
             success: function(data) {
                 data = eval('('+ data +')');
                 var resultCode = parseInt(data['resultCode'], 10);
                 // resultCode值为非0时，直接当错误处理
                 if (resultCode !== 0) {
                     alert('请求错误！');
                     return false;
                 }
                 var articleList = data['columnList'][0]['articleList'];
                 if (!articleList.length) {
                    alert('没有返回数据');
                    return false;
                 }
                 render(articleList);
                 //render(data['plateList']);
             }
          }
      };

      var lstCompt = null, pageNationCompt = null;
      function render(data, domNode) {
          domNode = domNode || getByClass('txt-list');
          var tpl = '<li class="txt-list-item" data-plateid="{{plateId}}">{{plateTitle}}</li>';
          // 构建DOM节点
          //createHtmlFactory(tpl, data, domNode);

          var config = {
          	 nodes: getByClass('txt-list-item'),
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
  	                location.href = './focusDesc.html?plateId=' + plateId;
  	             }
  	         }
          };
          // 创建组件对象
          //lstCompt = createObjFactory(config);
      }

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
          ajax(GLOBAL_CONFIG.pageInitParam);
      }
      pageInit();
});
