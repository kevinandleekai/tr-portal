define(["myajax", "global"], function(myajax, global) {
	var ajax = myajax.ajax;

	return  function pageUtil(param) {
		if("undefined" == param.url || null == param.url) {
			throw "request url is undefined";
		}
		
		var setting = {
			method: "POST",
			pageSize: global.PAGESIZE,
			startPage: global.STARTPAGE,
			success: function(obj){},
			data: {}
		}

		for(var i in param) {
			setting[i] = param[i];
		}

		var callbak = setting.success;

		ajax({
			method: setting.method,
			url: setting.url,
			data: setting.data,
			success: function(obj) {
				callbak(obj);
			}
		});
	};
});

