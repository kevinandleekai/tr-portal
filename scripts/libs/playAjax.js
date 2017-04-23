define(function() {
	var xmlHttp = null;
	var setting = {
		url: "",
		method: "POST",
		data: {},
		async: true,
		success: function(){}
	}

	if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		throw "Unsupported ajax request";
	}

	function send() {
		xmlHttp.open(setting.method, setting.url, setting.async);

		if("GET" != setting.method) {
			xmlHttp.send(setting.data);
		}

		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState==4 && xmlHttp.status==200)
		    {
		   		setting.success(xmlHttp);
		    }
		};
	}

	function serialData(setting) {
		if("object" == typeof(setting.data)) {
			var str = "";
			var i = 0;
			for(var i in setting.data) {
				if(0 != i) {
					str += ("&" + i + "=" + setting.data[i]);
				} else {
					str += (i + "=" + setting.data[i])
				}
			}
			return str;
		} else {
			return setting.data;
		}
	}

	return function(param) {
		if(!param.url) {
			throw "url is empty";
		}
		for(var i in param) {
			setting[i] = param[i];
		}

		if("GET" == setting.method.toUpperCase()) {
			var url = setting.url;
			if(-1 < url.indexOf("?")) {
				setting.url = url + "&" + serialData(setting);
			} else {
				setting.url = url + "?" + serialData(setting);
			}
		}
		send();
	};
})
