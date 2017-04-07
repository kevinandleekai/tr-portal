require.config({
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
});

require(['keyDefine', 'global', 'JAlex', 'GKey', 'myajax', 'util', 'component'], function(keyDefine, global, JAlex, GKey, myajax, util, component){
      keyDefine = keyDefine;
      global = keyDefine ;
      JAlex = JAlex;
      GKey = GKey;
      myajax = myajax;
      util = util;
      component = component;

      var config = {
          url: '../../pages/test2.html',
          method: 'GET',
          success: function(data) {
               render(data);
          }
      };

      function render(data, domNode) {
          var oBox = domNode || document.getElementById("box");
          oBox.innerHTML = data;


          
      }

      myajax.ajax(config);
});