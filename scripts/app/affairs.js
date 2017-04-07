(function(window){
	  //视频播放
      //Video.stop();
      var reqPath = SERVER_PATH + 'GetColumnList';
      var url = '../testData/affairs.json';
      //页面配置参数
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: url,
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
             method: 'GET',
             success: function(data) {
                 data = eval('('+ data +')');
                 render(data['plateList']);
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
             	 var self = this;
	             if (self.nowIndex > 0) {
	                self.blur();
	                self.nowIndex --;
	                self.focus();
	             }
             },
             down: function() {
             	 var self = this;
	             if (self.nowIndex < self.itemSize - 1) {
	                self.blur();
	                self.nowIndex ++;
	                self.focus();
	             } else {
	                self.blur();
	                self.showHighLight = false;
	                pageNationCompt.show();
	             }
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
      pageNationCompt = createObjFactory(config);
      pageNationCompt.init(1);

     // 页面初始化
     ajax(GLOBAL_CONFIG.pageInitParam);
})(window);