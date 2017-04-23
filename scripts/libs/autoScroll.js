/**
 * 该文件响应遥控器方向键，自动向上、向下滚动页面
 */
define(["keyDefine"], function(keyDefine){
	var scroll = {
		node: null,
		speed:2,
		multiple:1,
		up: keyDefine.ROC_IRKEY_UP,
		down: keyDefine.ROC_IRKEY_DOWN,
		interval:100
	};
	var $speed$ = 1;
	var $intervalFlag$ = null;
	var $keyCode$ = null;

	function scrollDown(){	//向下滚动
		if(this.node.scrollTop > this.node.scrollHeight - this.node.clientHeight) {
			clearInterval($intervalFlag$);
		} else {
			this.node.scrollTop += this.multiple * this.speed;
		}
	}

	function scrollUp() { //向上滚动
		if(this.node.scrollTop <=0) {
			clearInterval($intervalFlag$);
		} else {
			this.node.scrollTop -= this.multiple * this.speed;
		}
	}

	function scrollFun(eve) { //响应事件
		var self = this;
		if($keyCode$ != eve.keyCode) {
			$keyCode$ = eve.keyCode;
			self.speed = $speed$ ;
			clearInterval($intervalFlag$);
			if(self.down == eve.keyCode) {
				$intervalFlag$ = setInterval(function(){scrollDown.call(self)}, self.interval);
			} else if(self.up == eve.keyCode) {
				$intervalFlag$ = setInterval(function(){scrollUp.call(self)}, self.interval);
			}
		} else {
			self.speed += self.multiple * self.speed;
		}
	}

	function addEvent(eve, fun) {	//注册监听器
		if(window.addEventListener) {
			document.addEventListener(eve, fun, false);
		} else if(window.attachEvent) {
			document.attachEvent("on" + eve, fun);
		}
	}

	addEvent("keydown", function(eve){scrollFun.call(scroll, eve)});	//添加事件

	return function(param){	//滚动对象
		for(var i in param) {
			scroll[i] = param[i] || scroll[i];
		}
		$speed$ = scroll.speed;
	};
});
