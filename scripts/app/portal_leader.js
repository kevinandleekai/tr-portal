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

      var ajax = myajax.ajax;
      var SERVER_PATH = global.SERVER_PATH;
      var createObjFactory = component.createObjFactory;

      var id = util.id;
      var getByClass =  util.getByClass;
      var getClientInfo = util.getClientInfo;
      var getParam = util.getParam;

      var SERVER_PATH = global.SERVER_PATH; // 请求的服务地址
      var PIC_PATH = global.PIC_PATH;  // 图片的地址

      /*var URL =  "http://192.168.1.111:8090/gportal/GetColumnList.action?parentId="+columnNo+"pageType=1"+"&userNo=shangcaoshi";*/


      var parentId = getParam('parentId');
      var action = getParam('action');

      var FIRST_DATA = null;  //第一次页面初始化的时候，拿到第一次的数据，并将其保存
                              // 在FIRST_DATA变量中

      var GLOBAL_CONFIG = {
          pageInitParam: {
              url: SERVER_PATH + action,
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
                     FIRST_DATA = data['columnList'];
                     if (FIRST_DATA.length) {
                        // 根据第一次拿到的数据， 再次请求模板HTML页面
                        var config = {
                            url: FIRST_DATA[0]["href"],
                            method: 'get',
                            success: function(data) {
                                // 将模板html串装载到对应的容器div里面去
                                var oContainer = id('leader');
                                oContainer.innerHTML = data;

                                // 操作容器里面的内容
                                var aDiv = oContainer.children;
                                for (var i = 0, len = aDiv.length; i < len; i++) {
                                    var currImg = aDiv[i].getElementsByTagName('img')[0];
                                    currImg.src = PIC_PATH + FIRST_DATA[0]['columnList'][i]['columnCover'].replace('..', '');
                                }

                            }
                        }
                        ajax(config);
                     }
                 }
              }
          }
      };

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

       // 页面初始操作
       ajax(GLOBAL_CONFIG.pageInitParam);
});
