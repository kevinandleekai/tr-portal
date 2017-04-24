require.config({
   baseUrl: '../scripts/libs'
});

require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
      var ajax = myajax.ajax,
          id = util.id;
          getByClass =  util.getByClass,
          getClientInfo = util.getClientInfo,
          getParam = util.getParam;

          createObjFactory = component.createObjFactory,
          SERVER_PATH = global.SERVER_PATH, // 请求的服务地址
          PIC_PATH = global.PIC_PATH,  // 图片的地址

          pageNationCompt = null,
          lstCompt = null,

          parentId = getParam('parentId'),
          action = getParam('action'),
          smartNo = getClientInfo()['smartNo'],
          smartNo = smartNo || 'shangcaoshi',

          //全局页面配置参数
          GLOBAL_CONFIG = {
              pageInitParam: {
                  url: SERVER_PATH + action,
                  data: "{'userNo': '"+smartNo+"', 'parentId': '"+parentId+"'}",
                  success: function(data) {
                      data = eval('('+ data +')');
                      var resultCode = parseInt(data['resultCode'], 10);
                      // resultCode为非0时, 直接当失败处理
                      if (resultCode !== 0) {
                         alert('请求失败!');
                         return false;
                      }
                      // 如果columnList字段的数据长度为0，直接当做没有数据处理
                      var columnList = data['columnList'];
                      if (!columnList.length) {
                          alert('没有任何数据!');
                          return false;
                      }
                      // 填充列表的数据
                      fillListData(columnList[0]);
                  }
              },
              // 列表项
              serviceItem: getByClass('leader-item')
          };

      function fillListData(data) {
          var columnList = data['columnList'],
              i = 0,
              len = columnList.length,
              currDom = null,
              childImg = null;
          if (!len) return false;
          for (; i < len; i++) {
              currDom = GLOBAL_CONFIG.serviceItem[i];
              childImg = currDom.getElementsByTagName('img')[0];
              childImg.src = PIC_PATH + columnList[i]['columnCover'].replace('..', '');
          }
      }

      // 页面初始操作
      function pageInit() {
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
                  alert(self.nowIndex);
              }
          };
          pageNationCompt = createObjFactory(config);
          pageNationCompt.init(1);

          ajax(GLOBAL_CONFIG.pageInitParam);
      }
      pageInit();

});
