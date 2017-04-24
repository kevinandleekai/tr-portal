define(function(){
  var Slideshow = function(opts){
      opts = opts || {};
      if (!(this instanceof Slideshow)) {
          return new Slideshow(opts);
      }
      this.init(opts);
  };
  Slideshow.prototype = {
      constructor: Slideshow,
      init: function(opts) {
          //定义默认的参数值
          this.defaults = {
              parent: opts.parent || null,
              index: 0, //默认从哪张图片显示的序列
              currIndex: 0, //当前显示图片的索引
              interval: 3000, //定时器运行时间间隔
              hasStop: false, //表示定时器是否已经运行结束
              timerMain: null, //图片转换定时器时间戳
              zIndex: 0  //图片的默认层级
          };

          //浅复制
          var extend = function(target, source){
              if (!source) return target;
              for (var attr in source) {
                  if (source.hasOwnProperty(attr)) {
                      target[attr] = source[attr];
                  }
              }
              return target;
          };
          extend(this.defaults, opts);

          this.aLis = this.getByTagName(this.defaults.parent, "li");
          this.oDotGroup = this.getByTagName(this.defaults.parent, "div")[0];
          this.aDots = this.getByTagName(this.defaults.parent, "span");
          this.size = this.aLis.length;
          var self = this;
          //设置必要的属性, 为图片淡入淡出做准备
          for (var i = 0; i < this.size; i++) {
              this.aLis[i].op = 100;
              this.aLis[i].style.opacity = 1;
              //为控制元素绑定事件
              this.aDots[i].index = i;
              this.aDots[i].onclick = function(){
                  if (this.index != self.currIndex) {
                      self.pos(this.index);
                  }
              };
          }
          this.pos(this.defaults.index);
      },
      pos: function(num){
          clearInterval(this.defaults.timerMain);
          clearInterval(this.aLis[num].timerSub);

          this.defaults.hasStop = true;

          this.defaults.zIndex ++;
          this.aLis[num].style.zIndex = this.defaults.zIndex;
          this.oDotGroup.style.zIndex = this.defaults.zIndex + 1;
          //遍历所有的控制按钮
          for (var i = 0; i < this.size; i++) {
              this.aDots[i].className = i === num ? "swiper-dotitem swiper-dotitem-active" : "swiper-dotitem";
          }
          //先将当前图片的透明度设置为0
          if (this.aLis[num].op >= 100) {
              this.aLis[num].op = 0;
              this.aLis[num].style.opacity = 0;
          }
          this.fadeIn(num);
          /*this.aDots[num].className = "active";*/
          //更新当前显示图片的索引
          this.currIndex = num;
          //this.auto();
      },
      auto: function(){
         var self = this;
         this.defaults.timerMain = setInterval(function(){
            self.move(1);
         }, this.defaults.interval);
      },
      move: function(num){
          //num只有两种取值可能,要么1要么-1, 1表示显示下一张图片-1表示显示上一张图
          var m = this.currIndex + num;
          if (num === 1) {
              if (m >= this.size) {
                 m = 0;
              }
          }else {
              if (m <= 0) {
                  m = this.size - 1;
              }
          }
          this.pos(m);
      },
      fadeIn: function(num){
          //淡入当前图片
          this.aLis[num].timerSub = setInterval(function(){
              this.aLis[num].op += 5;
              if (this.aLis[num].op >= 100) {
                  clearInterval(this.aLis[num].timerSub);
                  this.aLis[num].op = 100;
                  this.aLis[num].style.opacity = 1;
                  if (this.defaults.hasStop) {
                      this.auto();
                      this.defaults.hasStop = false;
                  }
              }else {
                  this.aLis[num].style.opacity = this.aLis[num].op / 100;
              }
          }.bind(this), 30);
      },
      getByTagName: function(parent, tag){
          if (!parent && tag) return;
          return parent.getElementsByTagName(tag);
      }
  };

  return Slideshow;
});
