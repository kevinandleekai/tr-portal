// 工具模块
define(function(){
    /*
        简单的属性复制
    */
    var extend = function(source, parame) {
        source = source || {};
        parame = parame || {};
        for (var attr in parame) {
            if (parame.hasOwnProperty(attr)) {
                source[attr] = parame[attr];
            }
        }
        return source;
    };
    /**
     * [getByClass 根据class名称获取DOM元素]
     * @param  {[String]} className [class类名称]
     * @param  {[type]} parent    [父节点]
     * @return {[type]}           [匹配到的节点]
     */
    var getByClass = function(className, parent) {
        parent = parent || document;
        if (parent.getElementsByClassName) {
            getByClass = function(className, parent) {
                parent = parent || document;
                var eles = parent.getElementsByClassName(className);
                if (eles.length === 1) {
                  eles = eles[0];
                } else if (eles.length === 0) {
                  return null;
                }
                return eles;
            };

        } else {
         getByClass = function(className, parent) {
            if (!className) return null;
            parent = parent || document;
            var eles = parent.getElementsByTagName("*"),
            result = [],
            reg = /(^\s*)|(\s*$)/g;
            for (var i = 0, len = eles.length; i < len; i++) {
              var currClass = eles[i].className.replace(reg, "").split(/\s+/g);
              for (var j = 0; j < currClass.length; j++) {
                  if (className === currClass[j]) {
                      result.push(eles[i]);
                      break;
                  }
              }
            }
            if (result.length === 0) {
              return null;
            } else if (result.length === 1) {
              result = result[0];
            }
            return result;
        };
      }
      return getByClass(className, parent);
    };
    /**
     * [simpleTemplateEngine 简单的模板字符串替换函数]
     * @param  {[String]} tpl  [传递过来的模板html]
     * @param  {[Object]} data [字面量对象]
     * @return {[String]}      [返回替换后的模板字符串]
     */
    var simpleTemplateEngine = function(tpl, data) {
        tpl = tpl || '';
        data = data || null;
        if (!data || !tpl) return;
        var patten = /\{\{([^\}\}]+)\}\}/, mapping;
        while (mapping = patten.exec(tpl)) {
            tpl = tpl.replace(mapping[0], data[mapping[1]]);
        }
        return tpl;
    };
    /**
     * [contains 简单的判断指定数值当中是否存在某个项]
     * @param  {[Array]} arr  [description]
     * @param  {[type]} elem [description]
     * @return {[type]}      [description]
     */
    var contains = function(arr, elem) {
        var len = arr.length;
        while (len --) {
          if (arr[len] === elem) {
            return true;
          }
        }
        return false;
    };
    /**
     * [id 根据id获取DOM元素]
     * @param  {[String]} id [id]
     * @return {[Node]}    [指定的DOM节点]
     */
    var id = function(id) {
        return document.getElementById(id);
    };
    /**
     * [简单的获取url指定参数值]
     * @param  {[String]} name [要获取的参数名称]
     * @return {[String]}      [返回对应的值]
     */
    var getParam = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
    };

    /**
     * [getClientInfo 获取机顶盒智能卡号, 区域码]
     * @return {[Object]} [description]
     */
    var getClientInfo = function() {
        var CA = {};
        return {
          "smartNo": CA.icNo,
          "reginCode": CA.regionCode || '22'
        };
    };

    /**
        简单的为指定的DOM节点添加class
    **/
    var addClass = function(node, sclassName) {
        if (!node || !sclassName) return;
        var classList = node.className.split(' ');
        for (var i = 0, len = classList.length; i < len; i++) {
            if (classList[i] === sclassName) {
                return;
            }
        }
        classList.push(sclassName);
        node.className = classList.join(' ');
    }
    //将所有的方法全部暴露给外部
    return {
        "extend": extend,
        "getByClass": getByClass,
        "simpleTemplateEngine": simpleTemplateEngine,
        "contains": contains,
        "id": id,
        "getParam": getParam,
        "getClientInfo": getClientInfo,
        "addClass": addClass
    }
})
