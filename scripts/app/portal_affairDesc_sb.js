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
      var ajax = myajax.ajax;

      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var id = util.id;

      // 需要发送请求的参数
      var pageId = getParam('pageId');
      var parentId = getParam('parentId');
      var action = getParam('action');



      // 页面全局参数配置
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: SERVER_PATH + action,
             data: '{"pageId": "'+pageId+'", "parentId": '+parentId+', "userNo": "shangchaosi"}',
             success: function(data) {
                 if (!data) {
                    alert('没有数据！');
                    return false;
                 }
                 id('common-article-body').innerHTML = data;
             }
          }
      };
    // 页面初始化
    ajax(GLOBAL_CONFIG.pageInitParam);
});

