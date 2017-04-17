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

      var getParam = util.getParam;
      var ajax = myajax.ajax;

      var SERVER_PATH = global.SERVER_PATH;
      var action = getParam('action');
      var parentId = getParam('parentId');

      var GLOBAL_CONFIG = {
          pageInitParam: {
            url: SERVER_PATH + action,
            data: '{"parentId": '+parentId+', "userNo":"shangchaoshi", "pageType": 1}',
            success: function(data) {
                data = eval('('+ data +')');
                var resultCode = parseInt(data['resultCode'], 10);
                // resultCode为非0时, 直接当失败处理
                if (resultCode !== 0) {
                   alert('请求失败!');
                   return false;
                }
                // 如果columnList字段的数据长度为0，直接当做没有数据处理
                var columnList = data['columnList'][0]['columnList'];
                if (!columnList.length) {
                    alert('没有任何数据!');
                    return false;
                }
                //构建导航DOM结构
                render(columnList);
            }
          }
      };
      /*var config = {
          nodes: util.getByClass('custom-relateitem'),
          css: {borderColor: '#f60'},
          oldStyle: {borderColor: '#110f7c'},
          right: function(){
              handleRight.call(this);
          },
          left: function(){
              handleLeft.call(this);
          },
          back: function() {
              history.back();
          }
      };*/

      /**
       * [向右切换处理函数]
       */
      function handleRight() {
          var self = this;
          if (self.nowIndex < self.itemSize - 1) {
              self.blur();
              self.nowIndex ++;
              self.focus();
              clearTimeout(slider.iTimer);
              slider.nowPicIndex = this.nowIndex;
              slider.change(slider.nowPicIndex);
          }
      }
      /**
       * [向左切换处理函数]
       */
      function handleLeft() {
          var self = this;
          if (self.nowIndex > 0) {
            self.blur();
            self.nowIndex --;
            self.focus();
            slider.nowPicIndex = this.nowIndex;
            slider.change(slider.nowPicIndex);
          }
      }
      function render(data) {
          var swiperList = [],  // 幻灯片用到的图片
              ruralList = [];   // 底部乡村图片列表
          for (var i = 0, len = data.length; i < len; i++) {
              var currSwiperPic = data[i]['albumList'],
                  currRuralPic = data[i]['columnCover'],
                  currRualTitle = data[i]['columnTitle'],
                  currRualObj = null;
              if (currSwiperPic) {
                  currSwiperPic = currSwiperPic[0]['albumCover'].replace('..', '');
                  currSwiperPic = SERVER_PATH + currSwiperPic;
                  swiperList.push(currSwiperPic);
              }
              if (currRuralPic) {
                  currRuralPic = SERVER_PATH + currRuralPic.replace('..', '');
                  currRuralObj = {
                      currRuralPic: currRuralPic,
                      currRuralPic: currRualTitle
                  };
                  ruralList.push(currRuralObj);
              }
          }
          console.dir(swiperList);
          var slider = {
              nowPicIndex: 0,  // 当前显示图片的索引, 默认为 0
              imgBox: util.id('imgBox'),
              imgList: swiperList,
              hasExist: false,  /*标识幻灯片按钮组是否已经存在*/
              dotGroup: util.id('swiper-dotgroup'),
              iTimer: null,
              iSize: 6,
              init: function() {
                  this.change(this.nowPicIndex);
                  //this.auto();
              },
              change: function(num) {
                  var self = this;
                  self.imgBox.src = self.swiperList[num];
                  self.nowPicIndex = num;
                  if (!self.hasExist) {
                     var html = '';
                     for (var i = 0, len = self.swiperList.length; i < len; i++) {
                          if (i === 0) {
                              html += '<span class="swiper-dotitem swiper-dotitem-active"></span>';
                          } else {
                              html += '<span class="swiper-dotitem"></span>';
                          }
                     }
                     self.dotGroup.innerHTML = html;
                  }
                  var regExp = /swiper-dotitem-active/;
                  for (var i = 0, len = self.swiperList.length; i < len; i++) {
                       if (num === i) {
                          if (!regExp.test(self.dotBtns[num].className)) {
                              self.dotBtns[num].className += ' swiper-dotitem-active';
                          }
                       } else {
                          self.dotBtns[i].className = self.dotBtns[i].className.replace('swiper-dotitem-active', '');
                       }
                  }
              },
              auto: function() {
                  var self = this;
                  self.iTimer = setTimeout(function(){
                     self.nowPicIndex ++;
                     self.nowPicIndex  = (self.nowPicIndex === self.iSize) ? 0 : self.nowPicIndex;
                     self.change(self.nowPicIndex);
                     self.auto();
                  }, 3000);
              }
          };
          //slider.init();

      }

      /**
       * [页面DOM结构构建完毕后进行初始化]
       */
      function pageInit() {
          var oImgBox = util.id('imgBox');
          var myComponent = component.createObjFactory(config);

          var dotGroup = util.id('swiper-dotgroup');
          var dotBtns = dotGroup.children;

          myComponent.init();
      }
      //pageInit();
      ajax(GLOBAL_CONFIG.pageInitParam);
});

