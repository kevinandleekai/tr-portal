define(function(){
	function JPage(){
		this.grabWidget = new grabWidget();	
		this.grabEvent = new grabEvent();
		function grabWidget() {
			this.widgetGroup = [];  //存储订阅者数组
			this.regedit = function(_obj) {
				//注册页面组件,将页面对象加入widgetGroup[""]这个对象数组里
				if (_obj !== null) {
					if (_obj.widgetGroup != null) {
						for (var i = 0, len = _obj.widgetGroup.length; i < len; i++) {
							if (this.widgetGroup[_obj.widgetGroup[i]] == null){
								this.widgetGroup[_obj.widgetGroup[i]] = [];
							}
							this.widgetGroup[_obj.widgetGroup[i]].push(_obj);
						}
					}
				}
			};
			this.unregedit = function(_obj){
				if(_obj != null){
					if(_obj.widgetGroup != null){
						for(var i=0,len = _obj.widgetGroup.length;i<len;i++){
							if(this.widgetGroup[_obj.widgetGroup[i]] != null){
								for(var j=0; j<this.widgetGroup[_obj.widgetGroup[i]].length; j++) {
									if(_obj == this.widgetGroup[_obj.widgetGroup[i]][j]) {
										for(var m=j; m<this.widgetGroup[_obj.widgetGroup[i]].length-1; m++) {
											this.widgetGroup[_obj.widgetGroup[i]][m] = this.widgetGroup[_obj.widgetGroup[i]][m+1];
										}
										this.widgetGroup[_obj.widgetGroup[i]].pop();
									}
								}
							}
						}
					}
				}
			};

			this.showWidget = new showWidget();
			function showWidget() {
				this.objGroup = [];
				this.init = function(_obj){
					self.grabEvent.eventHandling && this.objGroup.push(_obj);		
				}
				this.show = function(){
					for(var i = 0,len = this.objGroup.length; i<len; i++){
						var _obj = this.objGroup.pop();
						_obj.show();
						this.Listener(_obj);
					}
				}
			}
			this.Listener = function(_obj){
				if(_obj.widgetGroup!=null){
					for(var j=0,lens = _obj.widgetGroup.length;j<lens;j++){
						for(var i = 0,len = this.widgetGroup[_obj.widgetGroup[j]].length;i<len;i++){
							if(this.widgetGroup[_obj.widgetGroup[j]][i] != _obj){
								this.widgetGroup[_obj.widgetGroup[j]][i].hide();
							}
						}
					}
				}
			};
		}
		function grabEvent(){
			this.eventGroup = {
				"sup":[],
				"pro":[],
				"sta":[],
				"low":[]
			};
			this.eventLevel = ["sup","pro","sta","low"];
			this.eventHandling = false;
			this.regedit = function(_obj){			
				//注册页面事件,将页面对象加入eventGroup[""]这个对象数组里
				if(_obj.Listener != null){
					if(_obj.eventLeval=="sup"||_obj.eventLeval=="pro"||_obj.eventLeval=="sta"||_obj.eventLeval=="low"&&_obj.Listener!=null){
						this.eventGroup[_obj.eventLeval].push(_obj);
					}else{
						this.eventGroup["sta"].push(_obj);
					}
				}		
			};
			this.unregedit = function(_obj) {
				if(null != _obj && null != _obj.Listener) {
					if(_obj.eventLeval=="sup"||_obj.eventLeval=="pro"||_obj.eventLeval=="sta"||_obj.eventLeval=="low"&&_obj.Listener!=null){
						for(var i=0; i<this.eventGroup[_obj.eventLeval].length; i++) {
							if(_obj == this.eventGroup[_obj.eventLeval][i]) {
								for(var j=i; j<this.eventGroup[_obj.eventLeval].length-1; j++) {
									this.eventGroup[_obj.eventLeval][j] = this.eventGroup[_obj.eventLeval][j+1];
								}
								this.eventGroup[_obj.eventLeval].pop();
							}
						}
					}else{
						for(var i=0; i<this.eventGroup["sta"].length; i++) {
							if(_obj == this.eventGroup["sta"][i]) {
								for(var j=i; j<this.eventGroup["sta"].length-1; j++) {
									this.eventGroup["sta"][j] = this.eventGroup["sta"][j+1];
								}
								this.eventGroup["sta"].pop();
							}
						}
					}
				}
			};
			this.ListenerSubFunc = function(_level, i, event){
					return this.eventGroup[_level][i].Listener(event);
			};
			this.ListenerSub = function(event, _level){
					// this.eventGroup = {
					// 	"sup": [],
					// 	"pro": [],
					// 	"sta": [],
					// 	"low": []
				 //  };
					var re = true;
					var val = event.which || event.keyCode;
					for (var i = 0, len = this.eventGroup[_level].length; i<len; i++) {
						var result = this.ListenerSubFunc(_level,i,event);
						re = (result == 0) ? 0 : re;
						if (!re) {
							break;
						}
				  }
				  return re;
			};
			this.Listener = function(event){
				//this.eventLevel = ["sup","pro","sta","low"];	
				this.eventHandling = true;
				var val = event.which || event.keyCode;
				var re = true;
				for (var i = 0, len = this.eventLevel.length; i < len; i++) {
						re = this.ListenerSub(event,this.eventLevel[i]);
						if (!re) {
							 break;
						}
				}
				if(re){
					re = true;
				}
				return re;
			};		
		}
		//注册页面对象
		this.regedit = function(_obj){
			this.grabWidget.regedit(_obj);
			this.grabEvent.regedit(_obj);
		};
		//注销页面对象
		this.unregedit = function(_obj) {
			this.grabWidget.unregedit(_obj);
			this.grabEvent.unregedit(_obj);
		};
	}
	return {
			page: new JPage()
	};
});
