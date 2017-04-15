// 本文件定义一些常见的公共函数及变量, 也可以将里面的发放放到util.js模块里面去
//cookie设置
define(function(){
    var PIC_PATH = 'http://192.168.38.47:8090/gportal/';   // 图片地址
    var SERVER_PATH = 'http://192.168.38.47:8090/gportal/';  // 远程请求数据地址

    var SysSetting = {
    "setEnv":function(key,value){
      var cookieString = key + "=" + escape(value);
      document.cookie = cookieString;
      },
    "getEnv":function(key){
      var arrCookie = unescape(document.cookie.split(';'));
          for(var i = 0; i < arrCookie.length; i++){
              var arr = arrCookie[i].split('=');
              if(arr[0].replace(' ','') === key){         //键值对的判断
                  return arr[1];
              }
          }
      return "";
    }
  };
  var DataAccess = {
      "setInfo":function(VodApp,NTPAddress,SIM_IP){},
      "save":function(VodApp,NTPPort){},
      "getInfo":function(key){
         return "";
      }
  };
  //具体的IP配置,必须注意的是，页面上引用js时必须把config.js放在global.js 或global2.0.js前面
  var stbVersion = false;
  var G_NOTICE_INFO_SHOW_OR_HIDE = false;
  var MY_PORTAL_IP = "172.16.254.33";
  var MY_PORTAL_PORT="80";

  //获取portal 地址，如果没有获取到，则
  var tempPortalAddress = DataAccess.getInfo("VodApp","PortalAddress");
  var expIP = /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/;
  if( expIP.test(tempPortalAddress)){
    MY_PORTAL_ADDR = tempPortalAddress+":" + DataAccess.getInfo("VodApp","PortalPort");
  }else{
    MY_PORTAL_ADDR = MY_PORTAL_IP +":"+MY_PORTAL_PORT;
  }
  if(!stbVersion){
    MY_PORTAL_ADDR = MY_PORTAL_IP +":"+MY_PORTAL_PORT;
  }
  var TEST_UI_DEMO = "http://172.16.254.33/webnew24/ui/index.html";

  // 暴露给外部的对象
  return {
      SysSetting: SysSetting,
      DataAccess: DataAccess,
      PIC_PATH: PIC_PATH,
      SERVER_PATH: SERVER_PATH
  };
})
