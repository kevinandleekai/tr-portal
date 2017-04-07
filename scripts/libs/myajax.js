define(function () {
    var ajax = function (opts) {
      if (!opts) return;
      //设置默认参数
      var settings = {
        method: "POST",
        url: "",
        data: null,
        async: true,
        cache: true,
        contentType: "application/x-www-form-urlencoded",
        success: function () {},
        error: function () {}
      };
      //扩展默认参数
      for (var key in opts) {
        settings[key] = opts[key];
      }

      //对数据进行处理
      if (typeof settings.data === "object" && !!settings.data) {
          settings.data = serialize(settings.data);
      }

      settings.method = settings.method.toUpperCase(); //处理method
      settings.cache = settings.cache ? "" : "&" + new Date().getTime();  //处理cache

      //处理GET请求参数问题
      if (settings.method === "GET" && (settings.data || settings.cache)) {
          settings.url += "?" + settings.data + settings.cache;
      }

      //开始ajax
      var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

      // 表示异步发送请求
      if (settings.async) {
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               callback();
            }
          }
      }

      //和服务器建立连接
      xhr.open(settings.method, settings.url, settings.async);

      //发送请求
      if (settings.method === "GET") {
          xhr.send(null);
      }else {
          xhr.setRequestHeader("Content-type", settings.contentType);
          settings.data ? xhr.send(settings.data) : xhr.send();
      }

      //同步请求
      if (settings.async === false) {
          callback();
      }

      //回调函数
      function callback() {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            settings.success.call(xhr, xhr.responseText);
        }else {
            settings.error();
        }
      }

      //对数据进行序列化成字符串
      function serialize(data) {
        var arr = [];
        for (var key in data) {
          arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }
        return arr.join("&");
      }
    };

    return {
       "ajax": ajax
    };
})