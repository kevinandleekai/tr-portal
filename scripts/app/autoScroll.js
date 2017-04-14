/**
 * 该文件响应遥控器方向键，自动向上、向下滚动页面
 */

var scroll = {	//滚动对象
	$temp_obj$ : null,
	$intervalFlag$ : null,
	$speed$:1,
	$keyCode$: null
};

scroll.init = function(id) { //初始化滚动对象
	this.$temp_obj$ = document.getElementById(id);
}

function scrollDown(eve) {	//向下滚动
	if(scroll.$temp_obj$.scrollTop > scroll.$temp_obj$.scrollHeight - scroll.$temp_obj$.clientHeight) {
		clearInterval(scroll.$intervalFlag$);
	} else {
		scroll.$temp_obj$.scrollTop += 2 * scroll.$speed$;
	}
}

function scrollUp(eve) { //向上滚动
	if(scroll.$temp_obj$.scrollTop <=0) {
		clearInterval(scroll.$intervalFlag$);
	} else {
		scroll.$temp_obj$.scrollTop -= 2 * scroll.$speed$;
	}
}

function scrollFun(eve) { //响应事件
	if(scroll.$keyCode$ != eve.keyCode) {
		scroll.$keyCode$ = eve.keyCode;
		scroll.$speed$ = 1;
		clearInterval(scroll.$intervalFlag$);
		if(83 == eve.keyCode) {
			scroll.$intervalFlag$ = setInterval(scrollDown, 100);
		} else if(87 == eve.keyCode) {
			scroll.$intervalFlag$ = setInterval(scrollUp, 100);	
		}
	} else {
		scroll.$speed$++;
	}	
}

function addEvent(eve, fun) {	//注册监听器
	if(window.addEventListener) {
		document.addEventListener(eve, fun, false);
	} else if(window.attachEvent) {
		document.attachEvent("on" + eve, fun);
	}
}

addEvent("keydown", scrollFun);	//添加事件
