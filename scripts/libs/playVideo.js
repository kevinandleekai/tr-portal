define(["global", "playAjax", "util"], function(global, ajax, util){
	var setting = {
		top: 0,
		left: 0,
		width: 400,
		height: 300,
		playMode: 1,
		muteFlag: 0,
		volume: 10
	};
	function setup(assetId, callback) {
		clearTimeout(this.timeoutFlag);
		// 获取区域码和智能卡号
		var areaCode = Utility.getSystemInfo("ARC");
		var cardNo = Utility.getSystemInfo("SID");

		if(!areaCode) {
			this.timeoutFlag = setTimeout(function(){
				// 这里先这这样递归调用， 没有做超时处理
				setup(assetId, callback);
			}, 1000);
			return false;
		}
		setting.assetId = assetId;
		setting.cardNo = cardNo;
		setting.areaCode = areaCode;
		callback(setting);
	}

	function play(setting) {
		var selection = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><SelectionStart titleProviderId="GZCTV" titleAssetId="{{assetId}}" portalId="102" serviceId="" client="{{cardNo}}" account="{{cardNo}}"/>';
		selection = selection.format({
			assetId: setting.assetId,
			cardNo: setting.cardNo
		});

		ajax({
			url: global.VOD_PATH + "/SelectionStart",
			data: selection,
			success: function(data, res){
				var root = res.documentElement;
				var rtsp = root.getAttribute("rtsp");
				rtsp = rtsp.replace(/areaCode=(\d)*/, "areaCode=" + setting.areaCode);
				videoRun(rtsp);
			}
		});
	}

	//视频播放
	function videoRun(url)
	{
		var videoPlayer = new MediaPlayer();
		var nativePlayerInstanceId =  videoPlayer.getNativePlayerInstanceId();

		videoPlayer.setSingleMedia(url);

		videoPlayer.setVideoDisplayMode(setting.playMode);
		videoPlayer.setVideoDisplayArea(setting.left, setting.top, setting.width, setting.height);
		videoPlayer.refreshVideoDisplay();
		videoPlayer.playFromStart();
		videoPlayer.setMuteFlag(setting.muteFlag);
		videoPlayer.setVolume(setting.volume);

		Utility.setEnv("MEDIAPLAYER_S", nativePlayerInstanceId);
	}

	function videoStop() {
		var sid = Utility.getEnv("MEDIAPLAYER_S");
		var mp = new MediaPlayer(); //创建一个MediaPlayer对象
		mp.bindNativePlayerInstance(sid);  //根据从上一张页面传递过来的 Id ，绑定本地的媒体播放实例
		mp.stop();
		mp.refreshVideoDisplay();
		clearBgImg();
	}

	function clearBgImg(){
		window.setTimeout(function(){
			document.body.style.background = "";
		}, 5000);
	}

	return {
		play: function(param) {
			if(!param.assetId) {
				throw "asset id is null"
			}
			for(var i in param) {
				setting[i] = param[i];
			}
			setup(setting.assetId, play);
		},
		stop:videoStop
	};
})
