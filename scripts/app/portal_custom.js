/**
 * -.baseUrl: 所有模块查找的根路径
 * 二.当加载纯.js文件(依赖字串以/开头，或者以.js结尾，或者含有协议)，不会使用baseUrl。
 * 三. 如未显式设置baseUrl，则默认值是加载require.js的HTML所处的位置。如果用了data-main属性，则该路径就变成baseUrl
 * 四. path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的，除非该path设置以"/"开头或含有URL协议（如http:）。
 */

/*require.config({
  baseUrl: '/libs/public',
  paths: {
    'keyDefine': 'keyDefine',
    'global': 'global',
    'JAlex': 'JAlex',
    'GKey': 'GKey',
    'myajax': 'myajax',
    'util': 'util',
    'component': 'component'
  }
});*/
require.config({
   baseUrl: '../../scripts/libs'
});


require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
      util = util;
      component = component;

      var imgList = ['../../imgs/scenic-1.jpg', '../../imgs/scenic-2.jpg', '../../imgs/scenic-3.jpg', '../../imgs/scenic-4.jpg', '../../imgs/scenic-5.jpg', '../../imgs/scenic-4.jpg'];

      var config = {
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
      };

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
      var slider = {
          nowPicIndex: 0,  // 当前显示图片的索引, 默认为 0
          imgBox: util.id('imgBox'),
          imgList: imgList,
          dotBtns: util.id('swiper-dotgroup').children,
          iTimer: null,
          iSize: 6,
          init: function() {
              this.change(this.nowPicIndex);
              this.auto();
          },
          change: function(num) {
              var self = this;
              self.imgBox.src = self.imgList[num];
              self.nowPicIndex = num;
              var regExp = /swiper-dotitem-active/;
              for (var i = 0, len = self.dotBtns.length; i < len; i++) {
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


      /**
       * [页面DOM结构构建完毕后进行初始化]
       */
      function pageInit() {
          var oImgBox = util.id('imgBox');
          var myComponent = component.createObjFactory(config);

          var dotGroup = util.id('swiper-dotgroup');
          var dotBtns = dotGroup.children;

          myComponent.init();
          slider.init();
      }
      pageInit();
});

