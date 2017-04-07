define(['keyDefine', 'JAlex'], function(keyDefine, JAlex){
		var page = JAlex.page;

		// 引入上下左右四个变量, 返回键, 退出键
		var ROC_IRKEY_DOWN = keyDefine.ROC_IRKEY_DOWN;
		var ROC_IRKEY_UP = keyDefine.ROC_IRKEY_UP;
		var ROC_IRKEY_LEFT = keyDefine.ROC_IRKEY_LEFT;
		var ROC_IRKEY_RIGHT = keyDefine.ROC_IRKEY_RIGHT;
		var ROC_IRKEY_BACK = keyDefine.ROC_IRKEY_BACK;
		var ROC_IRKEY_EXIT = keyDefine.ROC_IRKEY_EXIT;
		var ROC_IRKEY_SELECT = keyDefine.ROC_IRKEY_SELECT;

		var GKeyLastKey = 0;
		var GKeyRekeyTimes = 0;
		var Need_Confirm = false;
		var LongKeyTag = true; //长按标识
		var allowInput = false;
		var DKeyReturn = true; //标识keydown事件

		var GKeyRetrun = false;
		var GKeyReturnBack = false;
		var GKeyReturnExit = false;
		var GKeyReturnUDLR = true;
		var GKey2LKey = false;

		/**
		 * 键盘事件绑定
		 */
		document.onkeydown = fnDown;
		document.onkeypress = fnPress;
		document.onkeyup = fnUp;

		/**
		 * keydown事件
		 * @param event
		 * @returns {boolean}
		 * @constructor
		 */
		function fnDown(evt){
			var keyCode = evt.which || evt.keyCode;
			//return DKeyReturn;
		}

		/**
		 * keypress事件
		 * @param {Object} event
		 */
		function fnPress(evt){
			var keyCode = evt.which || evt.keyCode;
			if(keyCode == GKeyLastKey){
				GKeyRekeyTimes ++;
			}else{
				LongKeyTag = false;
			}
			GKeyLastKey = keyCode;
			//遥控器返回键
			if(keyCode == ROC_IRKEY_BACK){
				return GKeyReturnBack;
			}
			//遥控器退出按钮
			if(keyCode == ROC_IRKEY_EXIT && GKeyRekeyTimes <= 2){
				return GKeyReturnExit;
			}
			if((keyCode == ROC_IRKEY_DOWN || keyCode == ROC_IRKEY_UP || keyCode == ROC_IRKEY_LEFT || keyCode == ROC_IRKEY_RIGHT) && GKeyRekeyTimes<=2){
				return GKeyReturnUDLR;
			}
			//对长按键进行特殊处理
			if(GKeyRekeyTimes > 2){
				switch(keyCode){
					case ROC_IRKEY_EXIT:
						LongKeyTag = true;
						//window.location.href = "http://"+DataAccess.getInfo("VodApp","PortalAddress");
						SysSetting.setEnv("PORRAL_EXIT","exit");
						var mianAddr = SysSetting.getEnv("MAIN_ADDR");
						if(mianAddr!=""){
							window.location.href = mianAddr;
						}else{
							window.location.href = "../../index.html";
						}
						return GKeyReturnExit;
						case ROC_IRKEY_DOWN:
						case ROC_IRKEY_UP:
						case ROC_IRKEY_LEFT:
						case ROC_IRKEY_RIGHT:
/*						case ROC_IRKEY_CHANNEL_DOWN:
						case ROC_IRKEY_CHANNEL_UP:
						case ROC_IRKEY_VOLUME_DOWN:
						case ROC_IRKEY_VOLUME_UP:*/
						LongKeyTag = false;
						GKey2LKey = true;
						fnUp(event);
						break;
				}
			}
			return GKeyRetrun || allowInput;
		}

		/**
		 * keyup事件
		 * @param {Object} event
		 */
		function fnUp(evt){
			var keyCode = evt.which || evt.keyCode;
			LongKeyTag = false;
			if(LongKeyTag){LongKeyTag = false; return false;}
			if(!GKey2LKey){GKeyRekeyTimes = 0;GKey2LKey=false;}
			GKey2LKey = false;
			page.grabEvent.Listener(evt);
			return allowInput;
		}
})

