/**
 * author: leekai
 * created on 2017/4/6 0006
 */
require.config({
    baseUrl: './scripts/libs'
});
require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
  var URL = '../../testData/index.json';
  var getByClass = util.getByClass;
  var id = util.id;
  var ajax = myajax.ajax;
  var createHtmlFactory = component.createHtmlFactory;
  var createObjFactory = component.createObjFactory;
  var PIC_PATH = global.PIC_PATH;
  var page = JAlex.page;
  var simpleTemplateEngine = util.simpleTemplateEngine;

  var addClass = util.addClass;

  var ALL_DATAS = null;    // 引用第一次请求时, 返回回来的所有数据。

  //全局页面配置参数
  var GLOBAL_CONFIG = {
      //页面初始化时, 请求参数
      pageInitParam: {
         url: URL,
         method: 'get',
         success: function(data) {
             data = eval('('+ data +')');
             ALL_DATAS = data;
             render(data);
             fnFirst(ALL_DATAS[0]);
         }
      },

      //每个导航项内对应的内容容器集合
      serviceList: getByClass('service-list', id('service-box')),

      // 每个导航项对应的内容区域(HTML)渲染方法集合, 这里面每个变量对应着一个函数名称
      // 能这样写的原因在于: JS当中变量存在作用域提升的特性
      rendHtmlList: [
          tvgoverHtml, ruralHtml, conviHtml,
          travelHtml, argHtml, teachHtml, elecHtml
      ]
  };
  // 组件引用变量(这里不把这些变量集成到一个对象或者数组里面是因为之前有试过, 但是出现BUG
  // 还没有解决, 等时间充足再试一试)
  var navbarCompt = null, tvgoverCompt = null, ruralCompt = null, conviCompt = null,
      travelCompt = null, argCompt = null, teachCompt = null, elecCompt = null;

  //渲染页面导航菜单和对应的菜单项内容区域
  function render(data) {
      // 构建导航区域DOM结构
      navbarHtml(data, id("navbar"));
  }

  // 这里分开这么多构建DOM方法,的恶心写法原因在于, 页面设计的恶心, 很多的DOM结构无法公用
  // 数据也是一次性给我返回所有, 都很恶心，暂时没有想出更好的解决办法
  //导航菜单DOM
  function navbarHtml(data, domNode) {
      domNode = domNode || id("navbar");

      // 定义对应的DOM字符串模板
      var tpl = '<li class="navbar-item">{{columnTitle}}</li>';

      //创建对应的DOM结构
      createHtmlFactory(tpl, data, domNode);

      // 组件对象配置
      var config = {
         nodes: getByClass('navbar-item', domNode),
         css: {color: '#f00'},
         right: function() {
             //this.handleRight(tab);
             var self = this, nowIndex = self.nowIndex,
                 list = GLOBAL_CONFIG.serviceList;

             if (this.nowIndex < self.itemSize - 1) {
                  self.blur();
                  self.nowIndex ++;
                  self.focus();
                  tab.call(this);
                  if (self.nowIndex === 1) {
                      fnSecond(ALL_DATAS[1]);
                  } else if (self.nowIndex === 2) {
                      fnThird(ALL_DATAS[2]);
                  } else if (self.nowIndex === 3) {
                      fnFour(ALL_DATAS[3]);
                  } else if (self.nowIndex === 4) {
                      fnFive(ALL_DATAS[4]);
                  } else if (self.nowIndex === 5) {
                      fnSix(ALL_DATAS[5]);
                  } else if (self.nowIndex === 6) {
                      fnSeven(ALL_DATAS[6]);
                  }
             }
         },
         left: function() {
             this.handleLeft(tab);
         },
         down: function() {
          var self = this, nowIndex = self.nowIndex;
          if (nowIndex == 0) {
              if (tvgoverCompt) {
                 self.blur();
                 self.showHighLight = false;
                 tvgoverCompt.show();
              }
          } else if (nowIndex == 1) {
             if (ruralCompt) {
                self.blur();
                self.showHighLight = false;
                ruralCompt.show();
             }
          } else if (nowIndex == 2) {
             if (conviCompt) {
                self.blur();
                self.showHighLight = false;
                conviCompt.show();
             }
          } else if (nowIndex == 3) {
             if (travelCompt) {
                self.blur();
                self.showHighLight = false;
                travelCompt.show();
             }
          } else if (nowIndex == 4) {
             if (argCompt) {
                self.blur();
                self.showHighLight = false;
                argCompt.show();
             }
          } else if (nowIndex == 5) {
             if (teachCompt) {
                self.blur();
                self.showHighLight = false;
                teachCompt.show();
             }
          } else if (nowIndex == 6) {
              if (elecCompt) {
                self.blur();
                self.showHighLight = false;
                elecCompt.show();
              }
            }
        }
      };
      navbarCompt = createObjFactory(config);
      navbarCompt.init();
  }
// 电视政务
  function tvgoverHtml(data, domNode) {
      domNode = domNode || GLOBAL_CONFIG.serviceList[0];

      domNode.innerHTML = data;
      var nodes = domNode.children;
      for (var i = 0, len = nodes.length; i < len; i++) {
          var currNode = nodes[i],
              oImg = currNode.getElementsByTagName('img')[0];
          addClass(currNode, 'service-gov');
          oImg.src = ALL_DATAS[0]['columnList'][i]['columnCover'];
      }
      var config = {
          nodes: getByClass('service-gov', domNode),
          css: {borderColor: '#f00'},
          oldStyle: {borderColor: 'transparent'},
          up: function() {
             var self = this,
             nowIndex = self.nowIndex;
             if (nowIndex > 1) {
                self.blur();
                self.nowIndex = nowIndex - 2;
                self.focus();
             } else {
                self.blur();
                self.showHighLight = false;
                navbarCompt.show();
             }
          },
          right: function() {
              this.handleRight();
          },
          down: function() {
              var self = this,
              nowIndex = self.nowIndex,
              size = self.itemSize;
              if (size > 2) {
                if (nowIndex < 2) {
                    self.blur();
                    self.nowIndex = nowIndex + 2;
                    self.focus();
                }
             }
          },
          left: function() {
             this.handleLeft();
          },
          href: function() {
              var self = this,
                  nowIndex = self.nowIndex,
                  parentId = self.aItems[nowIndex].getAttribute('data-parentid');
              self.blur();
              self.showHighLight = false;
             if (self.nowIndex == 0) {
                location.href = '../../pages/tv/leader.html?parentId=' + parentId;
                //location.href = './pages/test.html?parentId=' + parentId;
             } else if (self.nowIndex == 1) {
                location.href = '../../pages/tv/focus.html?parentId=' + parentId;
             } else if (self.nowIndex == 2) {
                location.href = '../../pages/tv/river.html?parentId=' + parentId;
             } else if (self.nowIndex == 3) {
                location.href = '../../pages/tv/affairs.html?parentId=' + parentId;
             }
          }
      };

      tvgoverCompt = createObjFactory(config);
}

  function fnFirst(data) {
      var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            tvgoverHtml(data);
         }
      };
      ajax(config);
  }

  function fnSecond(data) {
      var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            ruralHtml(data);
         }
      };
      ajax(config);
  }

  function fnThird(data) {
      var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            conviHtml(data);
         }
      };
      ajax(config);
  }
  function fnFour(data) {
      var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            travelHtml(data);
         }
      };
      ajax(config);
  }
  function fnFive(data) {
      var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            argHtml(data);
         }
      };
      ajax(config);
  }
  function fnSix(data) {
    var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            teachHtml(data);
         }
    };
    ajax(config);
  }
  function fnSeven(data) {
    var config = {
         url: data['href'],
         method: 'get',
         success: function(data) {
            elecHtml(data);
         }
    };
    ajax(config);
  }
  //智慧乡村
  function ruralHtml(data, domNode) {
    domNode = domNode || GLOBAL_CONFIG.serviceList[1];
    domNode.innerHTML = data;

    var nodes = domNode.children;
    for (var i = 0, len = nodes.length; i < len; i++) {
        var currNode = nodes[i],
            oImg = currNode.getElementsByTagName('img')[0];
        addClass(currNode, 'service-rural');
        oImg.src = ALL_DATAS[0]['columnList'][i]['columnCover'];
    }


    ruralCompt = createObjFactory({
        nodes: getByClass('service-rural'),
        css: {borderColor: '#f00'},
        oldStyle: {borderColor: 'transparent'},
        up: function() {
           var self = this,
           nowIndex = self.nowIndex;
           if (nowIndex > 1) {
              self.blur();
              self.nowIndex = nowIndex - 2;
              self.focus();
           } else {
              self.blur();
              self.showHighLight = false;
              navbarCompt.show();
           }
        },
        right: function() {
            this.handleRight();
        },
        down: function() {
             var self = this,
             nowIndex = self.nowIndex,
             size = self.itemSize;
             if (size > 2) {
                if (nowIndex < 2) {
                    self.blur();
                    self.nowIndex = nowIndex + 2;
                    self.focus();
                }
             }
        },
        left: function() {
           this.handleLeft();
        },
        href: function() {
             var self = this,
             nowIndex = self.nowIndex,
                 parentId = self.aItems[nowIndex].getAttribute('data-parentid');
             if (self.nowIndex == 0) {
                self.blur();
                self.showHighLight = false;
                location.href = './pages/leader.html';
             } else if (self.nowIndex == 1) {
                self.blur();
                self.showHighLight = false;
                location.href = '../../pages/rural/custom.html?parentId=' + parentId;
             }else if (self.nowIndex == 2) {
                self.blur();
                self.showHighLight = false;
                location.href = '../../pages/rural/custom.html?parentId=' + parentId;
             }  else if (self.nowIndex == 3) {
                self.blur();
                self.showHighLight = false;
                location.href = './pages/affairs.html';
             }
        }
    });
  }
  // 便民服务
  function conviHtml(data, domNode) {

      domNode = domNode || GLOBAL_CONFIG.serviceList[2];
      domNode.innerHTML = data;

      var nodes = domNode.children;

      for (var i = 0, len = nodes.length; i < len; i++) {
          var currNode = nodes[i],
              oImg = currNode.getElementsByTagName('img')[0];
          addClass(currNode, 'service-convenient');
          oImg.src = ALL_DATAS[2]['columnList'][i]['columnCover'];
      }

      conviCompt = createObjFactory({
        nodes: getByClass('service-convenient'),
        css: {borderColor: '#f00'},
        oldStyle: {borderColor: 'transparent'},
        up: function() {
            var self = this,
               nowIndex = self.nowIndex;
           if (nowIndex > 1) {
              self.blur();
              self.nowIndex = nowIndex - 2;
              self.focus();
           } else {
              self.blur();
              self.showHighLight = false;
              navbarCompt.show();
           }
        },
        right: function() {
           this.handleRight();
        },
        down: function() {
           var self = this,
               nowIndex = self.nowIndex,
               size = self.itemSize;
           if (size > 2) {
              if (nowIndex < 2) {
                  self.blur();
                  self.nowIndex = nowIndex + 2;
                  self.focus();
              }
           }
        },
        left: function() {
           this.handleLeft();
        },
        href: function() {
            var self = this;
           if (self.nowIndex == 0) {
              self.blur();
              self.showHighLight = false;
              location.href = './pages/leader.html';
           } else if (self.nowIndex == 1) {
              self.blur();
              self.showHighLight = false;
              location.href = './pages/focus.html';
           } else if (self.nowIndex == 3) {
              self.blur();
              self.showHighLight = false;
              location.href = './pages/affairs.html';
           }
        }
     });
  }
  // 智慧旅游
  function travelHtml(data, domNode) {
    domNode = domNode || GLOBAL_CONFIG.serviceList[3];
    domNode.innerHTML = data;

    var nodes = domNode.children;

    for (var i = 0, len = nodes.length; i < len; i++) {
        var currNode = nodes[i],
            oImg = currNode.getElementsByTagName('img')[0];
        addClass(currNode, 'service-travel');
        oImg.src = ALL_DATAS[3]['columnList'][i]['columnCover'];
    }

    travelCompt = createObjFactory({
        nodes: getByClass('service-travel'),
        css: {borderColor: '#f00'},
        oldStyle: {borderColor: 'transparent'},
        up: function() {
           var self = this, nowIndex = self.nowIndex;
           if (nowIndex < 2) {
              self.blur();
              self.showHighLight = false;
              navbarCompt.show();
           } else {
              if (nowIndex < 4) {
                  self.blur();
                  nowIndex --;
                  self.nowIndex = nowIndex;
                  self.focus();
              } else {
                  self.blur();
                  self.nowIndex = 0;
                  self.focus();
              }
           }
        },
        right: function() {
           var self = this, size = self.itemSize;
           if (self.nowIndex < size - 1) {
              self.blur();
              self.nowIndex ++;
              self.focus();
           } else {
             self.blur();
             self.nowIndex = size - 2;
             self.focus();
           }
        },
        down: function() {
              var self = this,
               nowIndex = self.nowIndex,
               size = self.itemSize;
           if (nowIndex == 0) {
              self.blur();
              self.nowIndex = size - 1;
              self.focus();
           } else if (nowIndex > 0 && nowIndex < size - 1) {
              self.blur();
              nowIndex ++;
              self.nowIndex = nowIndex;
              self.focus();
           }
        },
        left: function() {
           this.handleLeft();
        },
     });
  }
  // 智慧农业
  function argHtml(data, domNode) {
      domNode = domNode || GLOBAL_CONFIG.serviceList[4];
      domNode.innerHTML = data;

      var nodes = domNode.children;
      for (var i = 0, len = nodes.length; i < len; i++) {
          var currNode = nodes[i],
              oImg = currNode.getElementsByTagName('img')[0];
          addClass(currNode, 'service-arg');
          oImg.src = ALL_DATAS[4]['columnList'][i]['columnCover'];
      }

      argCompt = createObjFactory({
          nodes: getByClass('service-arg'),
          css: {borderColor: '#f00'},
          oldStyle: {borderColor: 'transparent'},
          up: function() {
              var self = this,
                 nowIndex = self.nowIndex;
             if (nowIndex > 1) {
                self.blur();
                self.nowIndex = nowIndex - 2;
                self.focus();
             } else {
                self.blur();
                self.showHighLight = false;
                navbarCompt.show();
             }
          },
          right: function() {
             this.handleRight();
          },
          down: function() {
             var self = this,
                 nowIndex = self.nowIndex,
                 size = self.itemSize;
             if (size > 2) {
                if (nowIndex < 2) {
                    self.blur();
                    self.nowIndex = nowIndex + 2;
                    self.focus();
                }
             }
          },
          left: function() {
             this.handleLeft();
          },
          href: function() {
              var self = this;
             if (self.nowIndex == 0) {
                self.blur();
                self.showHighLight = false;
                location.href = './pages/leader.html';
             } else if (self.nowIndex == 1) {
                self.blur();
                self.showHighLight = false;
                location.href = './pages/focus.html';
             } else if (self.nowIndex == 3) {
                self.blur();
                self.showHighLight = false;
                location.href = './pages/affairs.html';
             }
          }
      });
  }
  // 智慧教育
  function teachHtml(data, domNode) {
    domNode = domNode || GLOBAL_CONFIG.serviceList[5];
    domNode.innerHTML = data;

    var nodes = domNode.children;
    for (var i = 0, len = nodes.length; i < len; i++) {
        var currNode = nodes[i],
            oImg = currNode.getElementsByTagName('img')[0];
        addClass(currNode, 'service-teach');
        oImg.src = ALL_DATAS[5]['columnList'][i]['columnCover'];
    }

    teachCompt = createObjFactory({
        nodes: getByClass('service-teach'),
        css: {borderColor: '#f00'},
        oldStyle: {borderColor: 'transparent'},
        up: function() {
           var self = this;
           if (self.nowIndex < 2) {
              self.blur();
              self.showHighLight = false;
              navbarCompt.show();
           } else {
              self.blur();
              self.nowIndex = 0;
              self.focus();
           }
        },
        right: function() {
           this.handleRight();
        },
        down: function() {
           var self = this;
           if (self.nowIndex == 0) {
              self.blur();
              self.nowIndex = self.itemSize - 1;
              self.focus();
           }
        },
        left: function() {
           this.handleLeft();
        }
    });
  }
  // 电子商务
  function elecHtml(data, domNode) {
    domNode = domNode || GLOBAL_CONFIG.serviceList[6];
    domNode.innerHTML = data;

    var nodes = domNode.children;
    for (var i = 0, len = nodes.length; i < len; i++) {
        var currNode = nodes[i],
            oImg = currNode.getElementsByTagName('img')[0];
        oImg.src = ALL_DATAS[5]['columnList'][i]['columnCover'];
    }

    elecCompt = createObjFactory({
        nodes: getByClass('service-elec'),
        css: {borderColor: '#f00'},
        oldStyle: {borderColor: 'transparent'},
        up: function() {
            var self = this;
             if (self.nowIndex < 2) {
                self.blur();
                self.showHighLight = false;
                navbarCompt.show();
             } else {
                self.blur();
                self.nowIndex = 0;
                self.focus();
             }
        },
        right: function() {
           this.handleRight();
        },
        down: function() {
            var self = this;
           if (self.nowIndex == 0) {
              self.blur();
              self.nowIndex = self.itemSize - 1;
              self.focus();
           }
        },
        left: function() {
            this.handleLeft();
        }
    });
  }
  /**
  ***  tab切换
  **/
  function tab() {
      var serviceList = GLOBAL_CONFIG.serviceList,
          regTxt = 'service-list-active';
      for (var i = 0; i < serviceList.length; i++) {
          var className = serviceList[i].className;
          className = className.replace(regTxt, '');
          serviceList[i].className = className;
      }
      serviceList[this.nowIndex].className = className + ' ' + regTxt;
  }

  // 页面初始化开始
  ajax(GLOBAL_CONFIG.pageInitParam);
});
