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
      var ajax = myajax.ajax;

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var parentId = getParam('parentId');
      var action = getParam('action');

      var lstCompt = null; // 列表组件对象

      // 页面全局参数配置
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: SERVER_PATH + action,
             data: '{"parentId": '+parentId+', "pageType": "2", "userNo": "shangchaoshi"}',
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
             }
          }
      };

      // 页面DOM结构渲染
      function render(data, domNode) {
          domNode = domNode || getByClass('common-list');
          var tpl = '<div class="common-list-item" data-pageid={{articleId}} data-href={{bodyPath}}>{{title}}</div>';
          // 构建DOM结构
          createHtmlFactory(tpl, data, domNode);

          //组装组件
          var config = {
              nodes: getByClass('common-list-item'),
              css: {borderColor: '#f90'},
              oldStyle: {borderColor: '#110f7c'}
          };
          lstCompt = createObjFactory(config);
      }

      // 组件参数配置
      var config = {
         nodes: getByClass('pagenation-btn'),
         css: {backgroundColor: '#f60'},
         up: function() {
            if (!lstCompt) return false;
            var self = this;
            self.blur();
            self.showHighLight = false;
            lstCompt.show();
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
      var pageNationCompt = null;
      // 创建组件
      pageNationCompt = createObjFactory(config);
      pageNationCompt.init(1);

    // 页面初始化
    ajax(GLOBAL_CONFIG.pageInitParam);
});
