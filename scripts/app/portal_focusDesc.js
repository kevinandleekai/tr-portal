
(function(window){
	var reqPath = SERVER_PATH + 'GetPageList';
      var url = '../testData/focusDesc.json';

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
          domNode = domNode || getByClass('focus-main');
          var tpl = '<div class="focus-cont">{{pageContent}}</div>';
          // 构建DOM结构
          createHtmlFactory(tpl, data, domNode);
      }

      // 组件参数配置
	  var config = {
	  	 nodes: getByClass('pagenation-btn'),
         css: {backgroundColor: '#f60'},
         right: function() {
         	  var self = this;
	          if (self.nowIndex < self.itemSize - 1) {
	              self.blur();
	              self.nowIndex ++;
	              self.focus();
	          }
         },
         left: function() {
         	 var self = this;
	          if (self.nowIndex > 0) {
	              self.blur();
	              self.nowIndex --;
	              self.focus();
	          }
         },
         href: function() {
         	history.go(-1);
         },
	  }

	  var pageNationCompt = null;
	  // 创建组件
	  pageNationCompt = createObjFactory(config);
	  pageNationCompt.init(1);

      // 页面初始化
      ajax(GLOBAL_CONFIG.pageInitParam);
})(window);
