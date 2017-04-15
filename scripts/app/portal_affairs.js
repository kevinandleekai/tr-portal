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
      var PIC_PATH = global.PIC_PATH;

      var createHtmlFactory =  component.createHtmlFactory;
      var createObjFactory = component.createObjFactory;

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
             data: "{'parentId': "+parentId+", 'pageType':1, 'userNo': 'shangchaoshi'}",
             success: function(data) {
                 data = eval('('+ data +')');
                 var resultCode = parseInt(data['resultCode'], 10);
                 // 如果resultCode为非0是,直接当请求错误处理
                 if (resultCode !== 0) {
                    alert('请求错误!');
                    return false;
                 }
                 // 如果columnList字段的长度值为0, 直接当没有数据处理
                 if (!data['columnList'].length) {
                    alert('没有数据！');
                    return false;
                 }
                 render(data['columnList'][0]['columnList']);
             }
          }
      };
      var lstCompt = null;
      function render(data, domNode) {
          domNode = domNode || getByClass('gallery-list');
          var html = '';
          for (var i = 0, len = data.length; i < len; i++) {
              var picHref = data[i]['columnCover'];
              picHref = picHref.replace('..', '');
              picHref = PIC_PATH + picHref;
              html += '<li class="gallery-item" data-parentid='+data[i]['columnNo']+' data-action='+data[i]['action']+'>'+
                          '<img src="'+picHref+'">'+
                          '<p class="gallery-item-info">'+data[i]['columnTitle']+'</p>'+
                      '</li>';
          }
          domNode.innerHTML = html;

          var config = {
          	 nodes: getByClass('gallery-item'),
             css: {borderColor: '#f60'},
             oldStyle: {borderColor: "#110f7c"},
             up: function() {
             	  this.handleUp();
             },
             right: function() {
                this.handleRight();
             },
             left: function() {
                this.handleLeft();
             },
             down: function() {
                this.handleDown(pageNationCompt);
             },
             href: function() {
             	   var self = this,
                     currDom = self.aItems[self.nowIndex],
                     parentId = currDom.getAttribute('data-parentid'),
                     action = currDom.getAttribute('data-action');
	              if (!parentId && !action) return false;
                // 直接跳转， 不做加密处理了
	              location.href = './affairsDesc.html?parentId=' + parentId + '&action=' + action;
             }
          };
          lstCompt = createObjFactory(config);
          lstCompt.init();
      }
     // 页面初始化
     ajax(GLOBAL_CONFIG.pageInitParam);
});
