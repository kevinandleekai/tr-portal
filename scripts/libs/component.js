// 组件模块
define(['util', 'JAlex', 'keyDefine'], function(util, JAlex, keyDefine){
    var simpleTemplateEngine = util.simpleTemplateEngine;
    var page = JAlex.page;

    // 引入上下左右四个变量, 返回键, 退出键
    var ROC_IRKEY_DOWN = keyDefine.ROC_IRKEY_DOWN;
    var ROC_IRKEY_UP = keyDefine.ROC_IRKEY_UP;
    var ROC_IRKEY_LEFT = keyDefine.ROC_IRKEY_LEFT;
    var ROC_IRKEY_RIGHT = keyDefine.ROC_IRKEY_RIGHT;
    var ROC_IRKEY_BACK = keyDefine.ROC_IRKEY_BACK;
    var ROC_IRKEY_EXIT = keyDefine.ROC_IRKEY_EXIT;
    var ROC_IRKEY_SELECT = keyDefine.ROC_IRKEY_SELECT;

    var Component = function(opts) {
        this.nodes = opts.nodes;  //DOM节点列表
        this.iCss = opts.css || {backgroundColor: '#ff0'};  //用户自定义css样式
        this.oldStyle = opts.oldStyle || null; //DOM之前的样式, 本来是不用的, 但是后面重置元素样式为之前的样式时,会出现问题
        this.aItems = opts.nodes,
        this.itemSize = opts.nodes.length;
        this.nowIndex = 0;
        this.showHighLight = false;
        this.data = opts.data || [];
        this.clearStyle = opts.clearStyle || true;  // 用于标识失去焦点时，是否要清除已添加的样式
    };
    Component.prototype = {
        constructor: Component,
        init: function(index) {
            var self = this;
            self.showHighLight = true;
            self.nowIndex = index || 0;
            self.focus();
        },
        focus: function() {
            var self = this,
                css = self.iCss,
                nowIndex = self.nowIndex,
                changeStyle = self.changeStyle,
                node = self.aItems[nowIndex];
            if (self.itemSize === 0) return;
            for (var attr in css) {
                changeStyle(node, attr, css[attr]);
            }
        },
        blur: function() {
            var self = this,
                css = self.iCss,
                oldStyle = self.oldStyle,
                nowIndex = self.nowIndex,
                changeStyle = self.changeStyle,
                node = self.aItems[nowIndex];
            if (self.itemSize === 0) return;
            if (oldStyle) {
                for (var oldAttr in oldStyle) {
                    changeStyle(node, oldAttr, oldStyle[oldAttr]);
                }
            } else {
                for (var attr in css) {
                    changeStyle(node, attr, '');
                }
            }
        },
        show: function() {
            var self = this;
            self.showHighLight = true;
            self.focus();
        },
        changeStyle: function(node, attr, value) {
            node.style[attr] = value;
        },
        listen: function(evt) {
            var self = this;
            self.Listener = function(evt) {
                var key_code = evt.which || evt.keyCode;
                if (self.showHighLight) {
                    switch (key_code) {
                        case ROC_IRKEY_UP:
                            self.up && self.up();
                            return false;
                        case ROC_IRKEY_RIGHT:
                            self.right && self.right();
                            return false;
                        case ROC_IRKEY_DOWN:
                            self.down && self.down();
                            return false;
                        case ROC_IRKEY_LEFT:
                            self.left && self.left();
                            return false;
                        case ROC_IRKEY_SELECT:
                            self.href && self.href();
                            return false;
                        case ROC_IRKEY_BACK:
                            self.back && self.back();
                        default:
                            break;
                    }
                }
            };
        },
        // handleRight, handleLeft, handleUp, handleDown 能够做到一部分通用
        // 主要在于每个实例的上下左右逻辑大部分都不一样
        // 所以这也是为什么不在listen方法里面去调用的原因
        handleRight: function(callback) {
            var self = this;
            if (self.nowIndex < self.itemSize - 1) {
                self.blur();
                self.nowIndex ++;
                self.focus();
                callback && callback.call(self);
            }
        },
        handleLeft: function(callback) {
            var self = this;
            if (self.nowIndex > 0) {
                self.blur();
                self.nowIndex --;
                self.focus();
                callback && callback.call(self);
            }
        },
        handleUp: function() {
            var self = this;
            if (self.nowIndex > 0) {
                self.blur();
                self.nowIndex --;
                self.focus();
            }
        },
        handleDown: function(component) {
            var self = this;
            if (self.nowIndex < self.itemSize - 1) {
                self.blur();
                self.nowIndex ++;
                self.focus();
            } else {
               if (component) {
                   self.blur();
                   self.showHighLight = false;
                   component.show();
               }
            }
        }
    };


    // 根据参数创建Component类型对象实例的统一方法(由于时间问题, 省略了很多的容错判断)
    function createObjFactory(opts) {
        opts = opts || {};
        var myComponent = new Component(opts);

        opts.up && (myComponent.up = opts.up);
        opts.right && (myComponent.right = opts.right);
        opts.down && (myComponent.down = opts.down);
        opts.left && (myComponent.left = opts.left);
        opts.back && (myComponent.back = opts.back);
        opts.href && (myComponent.href = opts.href);

        myComponent.listen();
        page.regedit(myComponent);
        return myComponent;
    }

    // 根据模板字符串和数据(tplType 和 domNode并不是必须的) 组装成指定的HTML
    function createHtmlFactory(tpl, data, domNode, tplType) {
        tpl = tpl || "";
        data = data || [];
        tplType = tplType;

        var html = '';
        for (var i = 0, len = data.length; i < len; i++) {
           html += simpleTemplateEngine(tpl, data[i]);
        }
        domNode.innerHTML = html;
    }

    return {
        "Component": Component,
        "createObjFactory": createObjFactory,
        "createHtmlFactory": createHtmlFactory
    };
})
