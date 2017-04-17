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
      var reqPath = SERVER_PATH + 'GetPageList';

      var ajax = myajax.ajax;
      var url = '../../testData/focusDesc.json';

      var getByClass =  util.getByClass;
      var id = util.id;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      // 需要发送请求的参数
      var pageId = getParam('pageId');
      var parentId = getParam('parentId');
      var userNo = getParam('userNo');
      var action = getParam('action');


      // 页面全局参数配置
      var GLOBAL_CONFIG = {
          pageInitParam: {
             url: SERVER_PATH + action,
             data: '{"pageId": "'+pageId+'", "parentId": '+parentId+', "userNo": "'+userNo+'"}',
             success: function(data) {
                 data = eval('('+ data +')');
                 var resultCode = data['resultCode'];
                 // 如果 resultCode值为非0，直接当请求错误处理
                 if (!resultCode) {
                    alert('请求错误！');
                    return false;
                 }
                 // 如果请求的数据url地址为空字符串直接作没有数据处理
                 var href = data['pageList'][0]['pageUrl'];
                 href = href.replace('..', '');
                 if (!data['pageList'][0]['pageUrl']) {
                     alert('没有数据！');
                     return false;
                 }
                 var config = {
                    url: SERVER_PATH + href,
                    method: 'get',
                    success: function(data) {
                        if (!data) {
                            alert('没有数据');
                            return false;
                        }
                        id('common-article-body').innerHTML = html;
                    }
                 };
                 ajax(config);
             }
          }
      };

      /*// 页面DOM结构渲染
      function render(data, domNode) {
          domNode = domNode || getByClass('focus-main');
          var tpl = '<div class="focus-cont">{{pageContent}}</div>';
          // 构建DOM结构
          createHtmlFactory(tpl, data, domNode);
      }*/
    // 页面初始化
    ajax(GLOBAL_CONFIG.pageInitParam);
});
