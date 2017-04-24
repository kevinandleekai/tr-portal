/**
 * 视频播放处理
 * **/
var vdo = {
		video : null,//视频对象
		//ewm: null,
		playUrl: '',//播放地址
		data: null,
		track: 1,  //原伴唱状态,1为原唱，0为伴唱
		volume: 16,//初始音量
		serverUrl: DSERVERPATH,
		svideo: 0,//小视频窗口
		smartNo: getUserInfo().cardNo,//智能卡号
		model: 0,
	    // pageType: 0, //代表页面类型 0代表没有小视频 1代表
		status: 0,//0为正常播放状态，1为暂停,2为快进，3为快退
        volumnBarStatus: "hide",
        iTimer: null,
        rTime: 0,
		/**事件处理**/
		_deal: function(){
			if(vdo.data.cmdType == 'play'){
				if(vdo.playUrl == ''){
					vdo._toPagePlay(vdo.data.playUrl.replace("10.10.2.61:9000","10.10.1.233:9000"));
				}else{
					vdo.playUrl = vdo.data.playUrl.replace("10.10.2.61:9000","10.10.1.233:9000");
					vdo._play();
				}
			}
			else if(vdo.data.cmdType =='pause'){  //暂停
				vdo._pause();
			}
			else if(vdo.data.cmdType=='resume'){
				vdo._resume();
			}
			else if(vdo.data.cmdType=='stop'){
				vdo._keyStop();
			}
			else if(vdo.data.cmdType=='volumn'){
				vdo._volumn(vdo.data.volumnNo);
			}
			else if(vdo.data.cmdType=='forward'){
				vdo._forward();
			}
			else if(vdo.data.cmdType=='rewind'){
        	       vdo._rewind();
			}
			else if(vdo.data.cmdType=='repeat'){
        	       vdo._repeat();
			}
			else if(vdo.data.cmdType == 'soundTrack'){
	       	 	   vdo._soundTrack();
	        }
			else if(vdo.data.cmdType=='drag'){    //拖动进度条
	        	 vdo._drag(vdo.data.range);
	        }
		},

		/**播放**/
		_play: function(){
              vdo.rTime = 0;
              // var MyMediaPlayer = new MediaPlayer();
              // // var MyInstanceID = MyMediaPlayer.createPlayerInstance("video",2);
              // MyMediaPlayer.position = "1,0,0,0,0";
              vdo.video.source = vdo.playUrl;
              //vdo.video = MyMediaPlayer;
              //MyMediaPlayer.play();
              vdo.video.refresh();

		},
		/**跳转到播放页*/
		_toPagePlay: function(url){
			window.location.href = "play.html?playUrl=" + url;
		},

		/**暂停/播放**/
		_pause: function(){
			 var oMask = document.getElementById("mask");
            if(vdo.status == 0){
                vdo.video.pause();
                vdo.status = 1
                if(oMask!=null){
					oMask.style.display = "block";
				}

            }else{
                vdo.video.play();
                vdo.status = 0;
                if(oMask!=null){
					oMask.style.display = "none";
				}

            }
		},

    	/**退出**/
		_stop: function(){

            vdo.playUrl = "";
            vdo.video.releasePlayerInstance();
            vdo.video.refresh();
            history.go(-1);

		},

		/**调节音量**/
        _volumn: function(value){
			 var volume = parseInt(DataAccess.getInfo("MediaSetting", "OutputVolumn"));

			  if(value == 1){//
				volume =  volume + 1;
				if(volume >= 32){
                    //最大音量为32
                    volume = 32;
				}

			  }else if(value == 0){//音量减
                volume = volume - 1;
				if(volume <= 0){
				  //最小音量为0
                   volume = 0;
				}
              }
             var  oVolumnBar = document.getElementById("volumn-bar");
             if(oVolumnBar!=null){
				 clearTimeout(vdo.iTimer);
               var  oVolumnBar = document.getElementById("volumn-bar"),
                  oVolumnPercent = document.getElementById("volumn-percent"),
                  oVolumnNumber = document.getElementById("volumn-number");
             if (vdo.volumnBarStatus === "hide") {
                oVolumnBar.style.display = "block";
                vdo.volumnBarStatus = "show";
              }
            oVolumnPercent.style.width = volume * 10 + "px";
            oVolumnNumber.innerHTML = volume;
			 vdo.iTimer = setTimeout(function () {
                oVolumnBar.style.display = "none";
                vdo.volumnBarStatus = "hide";
            }, 5 * 1000);
			 }

            DataAccess.setInfo("MediaSetting", "OutputVolumn", volume);
            setCookie("volumNO",volume);

		},

		/**快进**/
		_forward: function(){
            vdo.video.refresh();
            var time = 0;
            var playTime = vdo.video.currentPoint;
            //alert("快进:" + playTime);
            //var playTime = vdo.rTime;
            time = 10 + playTime;
            //vdo.rTime = time;

            vdo.video.point = time;
            vdo.video.refresh();
		},

		/**快退**/
		_rewind: function(){
            vdo.video.refresh();
            var time = 0;
            var playTime = vdo.video.currentPoint;
            //alert("后退:" + playTime);
            //var playTime = vdo.rTime;
            time = playTime - 10;
            //vdo.rTime = time;
            vdo.video.point = time;
            vdo.video.refresh();
		},

		/**重播**/
		_repeat: function(){
            vdo.video.point = 1 ;
            vdo.video.refresh();
        },

		/**原伴唱切换**/
		_soundTrack: function(){
            if(vdo.track == 1){
                var modeRet = DataAccess.setInfo("MediaSetting", "soundMode","left");
                vdo.track = 0;
            }else{
                var modeRet = DataAccess.setInfo("MediaSetting", "soundMode","right");
                vdo.track = 1;
            }
		},

		/**捕捉按键事件**/
		_key: function(event){
          var evtCode = event.which;
          var evtType = event.type;
        //  alert("evtCode:" + evtCode + "||" + "evtType:" + evtType);
          if(evtType == 1004){//捕捉遥控器按键消息

              if(evtCode ==8 ){//返回键
                vdo._keyStop();
              }
              else if(evtCode ==27){//退出
                vdo._keyStop();
              }
              else if(evtCode ==72){//退出
                vdo._keyStop();
              }
              else if(evtCode ==51){//按键3
                vdo._nextSong();
              }
              else if(evtCode ==52){//按键4
                vdo._rewind();
              }
              else if(evtCode ==53){//按键5
                vdo._pause();
              }
              else if(evtCode ==54){//按键6
                vdo._forward();
              }
              else if(evtCode ==55){//按键7
                vdo._soundTrack();
              }
              else if(evtCode ==57){//按键9
                vdo._keyStop();
              }
              else if(evtCode ==48){//按键0
                vdo._nextSong();
              }
              else if(evtCode ==36){//home
                vdo._keyStop();
              }
          }
          if(evtType == 1001) {//捕捉遥控器按键消息
             /* if (evtCode === 10901) {
              }else*/
              if(evtCode === 10901){
                    if (vdo.svideo == 0) {
                      //视频播放完毕
                      //setTimeout(function(){vdo._nextSong()}, 5000);
                      vdo._nextSong()
                    }
              }else if(evtCode === 10935){
              	    if(vdo.svideo != 0){
              	    	setTimeout(function(){vdo._repeat()}, 5000);
              	    }
              }


          }
        },
        /**按键退出**/
		_soundkey: function (event){
			var evtCode = event.which;
            var evtType = event.type;
            if(evtCode == 61  ){//音量+
                vdo._volumn(1);
              }
              else if(evtCode ==45){//音量-
                vdo._volumn(0);
              }
         //   alert(evtType);
		},

		/**按键退出**/
		_keyStop: function(){
				if(vdo.video!=null){
					vdo._stop();
				}else{
					history.go(-1);
				}
				var xmlhttp = new XMLHttpRequest();
				if (!xmlhttp || xmlhttp == null) {
					alert('No browser XMLHttpRequest (AJAX) support');
					return;
				}
				url = vdo.serverUrl+"/KeyStop?smartNo="+ vdo.smartNo;
				xmlhttp.open("POST", url, true);
				xmlhttp.send(null);
		},



		/**切歌**/
		_nextSong:function(){
				var xmlhttp = new XMLHttpRequest();
				if (!xmlhttp || xmlhttp == null) {
					alert('No browser XMLHttpRequest (AJAX) support');
					return;
				}
				var url = vdo.serverUrl + "/NextSong?smartNo="+ vdo.smartNo;
				xmlhttp.open("POST", url, true);
				xmlhttp.send(null);
				xmlhttp.onreadystatechange = function(){
                    if(xmlhttp.readyState === 4){
                        if(xmlhttp.status === 200){
                            var data = eval('('+xmlhttp.responseText+')');
                            var resultCode = parseInt(data["resultCode"]);
                            if(resultCode === -6 || resultCode === -5){
                                    vdo._keyStop();
                                    window.location.href = "../pages/tv_rectMusic.html";
                            }
                        }
                    }
				};
		},

		/**小视频**/
		_smallVideoPlay: function(position){
				var xmlhttp = new XMLHttpRequest(),
					data = null;
                position = position || "0,180,30,524,393";
				if (!xmlhttp || xmlhttp == null) {
					alert('No browser XMLHttpRequest (AJAX) support');
					return;
				}
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						if (xmlhttp.status == 200) {
                            vdo.svideo = 1;
							data = eval('('+xmlhttp.responseText+')');
                            var MyMediaPlayer = new MediaPlayer();
                            var MyInstanceID = MyMediaPlayer.createPlayerInstance("video",2);
                            MyMediaPlayer.position = position;
                            MyMediaPlayer.source = data.playUrl.replace("10.10.2.61:9000","10.10.1.233:9000");
                            vdo.video = MyMediaPlayer;
                            MyMediaPlayer.play();
                            vdo.video = MyMediaPlayer;
							xmlhttp = null;
						}
					}
				};
				//url = vdo.serverUrl+"/NextSong?smartNo="+ vdo.smartNo;
				var url = vdo.serverUrl + "/smallPlayUrl";
				xmlhttp.open("POST", url, true);
				xmlhttp.send(null);
		},

		/**从一个时间点播放**/
		_drag: function(range){
			 vdo.video.playByTime(1,range,0);
		},

		_listen: function(){
			if(getCookie("volumNO") !=null){
				setCookie("volumNO",16);
				DataAccess.setInfo("MediaSetting", "OutputVolumn", 16);
			}

		    document.onkeypress = function(event) {
                vdo._key(event);
            };
            document.onsystemevent = function (event) {
                vdo._key(event);
            };
            /*document.onkeyup = function(event){

            };*/
            /**  **/
            window.onunload=function(){
              //vdo.svideo = 0;
              /*var id = getCookie("MyInstanceID");
              var MyMediaPlayer = new MediaPlayer();
              MyMediaPlayer.bindPlayerInstance(id);*/
              vdo.video.releasePlayerInstance();
              vdo.video.refresh();
           };
		},
        closeMediaPlayer: function () {
            var id = getCookie("nativePlayerInstanceId");
            var player = new MediaPlayer();
            player.bindNativePlayerInstance(nativePlayerInstanceId);
            if (player) {
                player.stop();
            }
        },
        calcuteTime: function () {
              // var timeArr = vdo.video.getMediaDuration().split(":"),
              //     hour = parseInt(timeArr[0], 10),
              //     minutes = parseInt(timeArr[1]),
              //     seconds = parseInt(timeArr[2]),
              //     totalTime = hour * 60 * 60 + minutes * 60 + seconds;
              // alert(vdo.video.currentTime + "-=="+ totalTime );
              // if (vdo.video.currentPoint >= totalTime - 5) {
              //     vdo._nextSong();
              // }
              // setTimeout(vdo.calcuteTime, 5000);
              vdo.rTime += 1;
              //document.getElementById("time").innerHTML = "时间为:" + vdo.rTime;
              setTimeout(vdo.calcuteTime, 1000);
        }
};
