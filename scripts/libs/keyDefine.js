// 本文件定义常见的键值(可以自行删减， 我拿到手的版本就是这么多)
//***************************** 键值定义 *****************************
define(function(){
   var ROC_IRKEY_UP            = 38    /*0x0026,  遥控器上的向上键*/
   var ROC_IRKEY_RIGHT         = 37    /*0x0027,  遥控器上的向右键*/
   var ROC_IRKEY_DOWN          = 40    /*0x0028,  遥控器上的向下键*/
   var ROC_IRKEY_LEFT          = 39    /*0x0025,  遥控器上的向左键*/
   var ROC_IRKEY_SELECT        = 13    /*0x000D,  遥控器上的确定键,即OK*/
   var ROC_IRKEY_BACK          = 642   /*0x0280,  遥控器上的返回键,即TOGGLE*/

   var ROC_IRKEY_NUM0          = 48    /*0x0030,  数字键0*/
   var ROC_IRKEY_NUM1          = 49    /*0x0031,  数字键1*/
   var ROC_IRKEY_NUM2          = 50    /*0x0032,  数字键2*/
   var ROC_IRKEY_NUM3          = 51    /*0x0033,  数字键3*/
   var ROC_IRKEY_NUM4          = 52    /*0x0034,  数字键4*/
   var ROC_IRKEY_NUM5          = 53    /*0x0035,  数字键5*/
   var ROC_IRKEY_NUM6          = 54    /*0x0036,  数字键6*/
   var ROC_IRKEY_NUM7          = 55    /*0x0037,  数字键7*/
   var ROC_IRKEY_NUM8          = 56    /*0x0038,  数字键8*/
   var ROC_IRKEY_NUM9          = 57    /*0x0039,  数字键9*/
   var ROC_IRKEY_EXIT          = 27     /*0x0003,  取消/退出键,即CANCEL*/
   var ROC_IRKEY_CHANNEL_DOWN  = 91   /*0x01AC,  遥控器上的频道减少键*/
   var ROC_IRKEY_CHANNEL_UP    = 93   /*0x01AB,  遥控器上的频道增加键*/
   var ROC_IRKEY_RED           = 320   /*0x0193,  遥控器上的功能键COLORED_KEY_0,RocME中代表红色按键*/
   var ROC_IRKEY_YELLOW        = 322   /*0x0194,  遥控器上的功能键COLORED_KEY_1,RocME中代表黄色按键*/
   var ROC_IRKEY_BLUE          = 323   /*0x0195,  遥控器上的功能键COLORED_KEY_2,RocME中代表蓝色按键*/
   var ROC_IRKEY_GREEN         = 321   /*0x0196,  遥控器上的功能键COLORED_KEY_3,RocME中代表绿色按键*/
     var ROC_IRKEY_EPG           = 69;//458   /*0x01CA,  遥控器上的节目指南键,预告键,即GUIDE*/
     var ROC_IRKEY_INFO          = 73   /*0x01C9,  遥控器上的信息键*/
     var ROC_IRKEY_MENU          = 72   /*0x01D4,  遥控器上的菜单键*/
     var ROC_IRKEY_VOLUME_MUTE   = 67   /*0x01C1,  遥控器上的静音键*/
     var ROC_IRKEY_VOLUME_DOWN   = 45   /*0x01C0,  遥控器上音量减小键*/
     var ROC_IRKEY_VOLUME_UP     = 61   /*0x01BF,  遥控器上的音量增大键*/
     var ROC_IRKEY_POWER         = 19    /*0xFFFF,  遥控器上的指示关机与开机键*/
     var ROC_IRKEY_PAGE_UP       = 306    /*0x0021,  遥控器上的向上翻页键*/
     var ROC_IRKEY_PAGE_DOWN     = 307    /*0x0022,  遥控器上的向下翻页键*/
     var ROC_IRKEY_TRACK         = 86   /*0x0197,  遥控器上的声道键,即AUDIO*/
     var ROC_IRKEY_LIKE          = 76   /*0x01CB,  遥控器上的字幕键/频道喜爱键,即TELETEXT*/

     var ROC_IRKEY_PROGRAM_LIST  = 0x0281   /*0x0281,  遥控器上的频道列表键或咨询键,即PROG_LIST*/
     var ROC_IRKEY_TV_RADIO      = 0x0282   /*0x0282,  遥控器上的指示"电视/音频广播"键*/
     var ROC_IRKEY_NVOD          = 315   /*0x0283,  遥控器上的卡信息或点播键,交互键, 即CARD_INFO*/
     var ROC_IRKEY_MAIL          = 77   /*0x0284,  遥控器上的邮件键*/
     var ROC_IRKEY_STAR          = 318 /*星号键*/
     var ROC_IRKEY_POUND         = 319; //#键
     /*以下为SMSX自定义部分*/
     var ROC_IRKEY_INVALID       = 90513   /*0x0201,  未知按键码，SMSX自定义*/
     var ROC_IRKEY_STATE         = 0x0202   /*0x0202,  遥控器上的状态键，SMSX自定义*/
     var ROC_IRKEY_DC            = 0x0203   /*0x0203,  遥控器上的数据广播键，SMSX自定义*/
     var ROC_IRKEY_SORT          = 0x0204   /*0x0204,  遥控器上的节目分类键，SMSX自定义*/
     var ROC_IRKEY_GAME          = 0x0205   /*0x0205,  遥控器上的游戏键，SMSX自定义*/
     var ROC_IRKEY_LAST_CHANNEL  = 314   /*0x0208,  遥控器上的电视回看键，SMSX自定义*/
     var ROC_IRKEY_PAUSE         = 59   /*0x0211,  遥控器上的暂停按键，SMSX自定义*/
     var ROC_IRKEY_HOMEPAGE      = 72   /*0x0213,  遥控器上的主页面键，SMSX自定义*/
     var ROC_IRKEY_MOSAIC        = 0x0214   /*0x0214,  遥控器上的马赛克键，SMSX自定义*/
     var ROC_IRKEY_STOCK         = 0x0215   /*0x0215,  遥控器上的股票键，SMSX自定义*/
     var ROC_IRKEY_VIDEO         = 313   /*0x0216,  遥控器上的电视键，SMSX自定义*/
     var ROC_IRKEY_AUDIO         = 0x0217   /*0x0217,  遥控器上的广播键，SMSX自定义*/
     /*用户自定义按键*/
     var ROC_IRKEY_FUN1          = 0x0206   /*0x0206,  天津项目中代表 :  [视讯] 键 */
     var ROC_IRKEY_FUN2          = 0x0207   /*0x0207,  天津项目中代表 :  [点播] 键 */
     var ROC_IRKEY_FUN3          = 0x0301;           //20769   /*0x0301,  天津项目中代表 :  [股票] 键 */
     var ROC_IRKEY_FUN4          = 0x0302;           //20770   /*0x0302,  天津项目中代表 :  [信箱] 键 */
     var ROC_IRKEY_FUN5          = 0x0303   /*0x0303,  天津项目中代表 :  [步进] 键 */
     var ROC_IRKEY_FUN6          = 0x0304   /*0x0304,  天津项目中代表 :  [上一单元] 键 */
     var ROC_IRKEY_FUN7          = 0x0305   /*0x0305,  天津项目中代表 :  [下一单元] 键 */
     var ROC_IRKEY_STOP          = 47   /*0x0306,  天津项目中代表 :  [停止] 键 */
     var ROC_IRKEY_FUN9          = 44   /*0x0307,  天津项目中代表 :  [快退] 键 */
     var ROC_IRKEY_FUN10         = 46   /*0x0308,  天津项目中代表 :  [快进] 键 */
     var ROC_IRKEY_PLAY         = 39   /*0x0309,  天津项目中代表 :  [播放] 键 */
     var ROC_IRKEY_FUN12         = 59   /*0x030A,  天津项目中代表 :  [暂停/时移] 键 */
     var ROC_IRKEY_FUN13         = 82   /*0x030B,  天津项目中代表 :  [录制] 键 */
     var ROC_IRKEY_FUN14         = 0x030C   /*0x030C,  天津项目中代表 :  [ V+/PIP移动 ] 键 */
     var ROC_IRKEY_FUN15         = 0x030D   /*0x030D,  天津项目中代表 :  [ V-/PIP互换 ] 键 */
     var ROC_IRKEY_FUN16         = 0x030E   /*0x030E,  天津项目中代表 :  [PIP ] 键 */
     var ROC_IRKEY_FUN17         = 0x030F   /*0x030F,  天津项目中代表 :  [预定] 键 */
     var ROC_IRKEY_FUN18         = 0x0310   /*0x0310,  天津项目中代表 :  [全部] 键 */
     var ROC_IRKEY_FUN19         = 0x0311   /*0x0311,  天津项目中代表 :  [] 键 */
     var ROC_IRKEY_FUN20         = 319   /*0x0312,  天津项目中代表 :  # 键 */


          //***************************** 事件值定义 *****************************

          //定义系统事件值                                                                        /* 搜索 */
     var ROC_SYSEVENT_DVB_SEARCH_FINISH                    = 10001;    // 自动、手动或全频段搜索已完毕
     var ROC_SYSEVENT_DVB_SEARCH_FAILED                    = 10002;    // 自动、手动或全频段搜索失败
     var ROC_SYSEVENT_DVB_SEARCH_START                     = 10003;    // 开始搜索某个频点
     var ROC_SYSEVENT_DVB_SEARCH_SERVICE_READY             = 10004;    // 在当前频点下,已经搜索到service
                                                                                   // #modifiers 当前频点频率,单位为KHz
     var ROC_SYSEVENT_DVB_SEARCH_STOP                      = 10005;    // 成功终止频道搜索
     /* 预留 10004-10030 给搜索相关消息使用 */

     /* 锁频 */
     var ROC_SYSEVENT_DVB_TUNE_SUCCESS                     = 10031;    // 成功锁定频点
                                                                                   // #modifiers 锁定的频率,单位为KHz
     var ROC_SYSEVENT_DVB_TUNE_FAILED                      = 10032;    // 锁频失败
                                                                                   // #modifiers 无法锁定的频点值,单位为KHz
                                                                                   /* 预留 10033-10040预留给锁频相关消息使用 */

                                                                                   /* NIT */
     var ROC_SYSEVENT_DVB_NIT_CHANGED                      = 10041;    // NIT版本变化
     var ROC_SYSEVENT_DVB_NIT_NETWORK_DESCRIPTOR_READY     = 10042;    // 已获取到NIT表的某个Network_Descriptor值
                                                                                   // #modifiers 数组{NetworkID,TagContent}其中NetworkID为网络ID,用于划分NIT子表,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前备注

     var ROC_SYSEVENT_DVB_NIT_TS_DESCRIPTOR_READY          = 10043;    // 已获取到NIT表的某个Transport_Descriptor值
                                                                                   // #modifiers 数组{NetworkID,TSID,TagContent}其中NetworkID为网络ID,用于划分NIT子表,数值型,取值范围1-65535;TSID：传输流ID,用于划分transport_stream_loop,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前备注
     var ROC_SYSEVENT_DVB_NIT_TABLE_READY                  = 10044;    // 已获取到整个NIT表内容
     /* 预留 10044-10050 给NIT表相关消息使用 */

     /* PAT */
     /* 预留 10051-10060 给PAT表相关消息使用 */

     /* PMT */
     /* 预留 10061-10070 给PMT表相关消息使用 */

     /* TDT/TOT */
     /* 预留 10071-10080 给TDT/TOT表相关消息使用 */

     /* BAT */
          var ROC_SYSEVENT_DVB_BAT_BOUQUET_DESCRIPTOR_READY     = 10081;    // 已获取到BAT表的某个Bouquet_Descriptor值
                                                                                   // #modifiers 数组{BouquetID,TagContent}其中BouquetID为业务群ID,用于划分BAT子表,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前的备注
          var ROC_SYSEVENT_DVB_BAT_TS_DESCRIPTOR_READY          = 10082;    // 已获取到BAT表的某个Transport_Descriptor值
                                                                                   // #modifiers 数组{BouquetID,TSID,TagContent}其中BouquetID为业务群ID,用于划分BAT子表,数值型,取值范围1-65535;TSID：传输流ID,用于划分transport_stream_loop,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前备注
                                                                                   /* 预留 10083-10090 给BAT表相关消息使用 */

                                                                                   /* SDT */
          var ROC_SYSEVENT_DVB_SDT_SERVICE_DESCRIPTOR_READY     = 10091;    // 已获取到SDT表的某个Service_Descriptor的值
                                                                                   // #modifiers 数组{ONID,TSID,ServiceID,TagContent}其中ONID为原始网络ID,数值型,取值范围1-65535;TSID：传输流ID,数值型,取值范围1-65535;ServiceID：业务ID,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前备注
                                                                                   /* 预留 10092-10100 给SDT表相关消息使用 */

                                                                                   /* 数据备份 */
          var ROC_SYSEVENT_DATA_DEL_ALL_SUCC                    = 10101;    // 成功清除A、B、D区中PSI/SI数据
          var ROC_SYSEVENT_DATA_DEL_ALL_FAILED                  = 10102;    // 无法清除A、B、D区中PSI/SI数据
          var ROC_SYSEVENT_DATA_DEL_TMP_SUCC                    = 10103;    // 成功清除D区PSI/SI数据
          var ROC_SYSEVENT_DATA_DEL_TMP_FAILED                  = 10104;    // 无法清除D区PSI/SI数据
          var ROC_SYSEVENT_DATA_UPDATE_SUCC                     = 10105;    // 成功用D区更新A区数据
          var ROC_SYSEVENT_DATA_UPDATE_FAILED                   = 10106;    // 无法用D区更新A区数据
          var ROC_SYSEVENT_DATA_REVERT_SUCC                     = 10107;    // 成功用B区更换A区数据
          var ROC_SYSEVENT_DATA_REVERT_FAILED                   = 10108;    // 无法用B区更换A区数据
          var ROC_SYSEVENT_DATA_SAVE_SUCC                       = 10109;    // 成功将A区数据写入B区
          var ROC_SYSEVENT_DATA_SAVE_FAILED                     = 10110;    // 无法将A区数据写入B区
          var ROC_SYSEVENT_DATA_BACKUP_SUCC                     = 10111;    // 成功将B区数据备份到C区
          var ROC_SYSEVENT_DATA_BACKUP_FAILED                   = 10112;    // 无法将B区数据备份到C区
                                                                                   // #modifiers 1,无法删除旧数据;2,Flash空间不足;3,其它原因导致失败;
          var ROC_SYSEVENT_DATA_RESTORE_SUCC                    = 10113;    // 成功恢复A、B区数据
          var ROC_SYSEVENT_DATA_RESTORE_FAILED                  = 10114;    // 无法恢复A、B区数据
                                                                                   // #modifiers 1,C区备份为空;2,写入B区失败;3,其它原因导致失败;
                                                                                   /* 预留 10115-10150 给数据备份相关消息使用 */

                                                                                   /* EPG */
          var ROC_SYSEVENT_EPG_SEARCH_SUCC                      = 10201;    // 成功完成EPG搜索
          var ROC_SYSEVENT_EPG_SEARCH_STOP_WHEN_RST_TO_MAX      = 10202;    // 搜索结果达到255个,搜索自动停止
          var ROC_SYSEVENT_EPG_SEARCH_TIMEOUT                   = 10203;    // 搜索EPG超时
          var ROC_SYSEVENT_EPG_ACTUAL_PF_READY                  = 10204;    // 当前频点actual PF信息收取完毕.如果当前频道PF信息更新,则会再次发送此消息.
          var ROC_SYSEVENT_EPG_OTHER_PF_READY                   = 10205;    // 当前频点other PF信息收取完毕.
          var ROC_SYSEVENT_EPG_ACTUAL_SCHEDULE_READY            = 10206;    // 当前频点actual schedule信息收取完毕.
          var ROC_SYSEVENT_EPG_OTHER_SCHEDULE_READY             = 10207;    // 当前频点other schedule信息收取完毕.
          var ROC_SYSEVENT_DVB_EIT_EVENT_DESCRIPTOR_READY       = 10208;    // 已获取到EIT表的某个Event_Descriptor的值
                                                                                   // #modifiers 数组{ONID,TSID,ServiceID,EventID,TagContent}其中ONID为原始网络ID,数值型,取值范围1-65535;TSID：传输流ID,数值型,取值范围1-65535;ServiceID：业务ID,数值型,取值范围1-65535;EventID：事件ID,数值型,取值范围1-65535;TagContent为Descriptor的全部值,包括tag和length,格式参照表前备注
                                                                                   /* 预留 10209-10220 给EPG相关消息使用 */

                                                                                   /* NVOD */
          var ROC_SYSEVENT_NVOD_REFEVENT_READY                  = 10221;    // 接收NVOD参考事件成功,如果当前NVOD参考业务PF信息更新,则会再次发送此消息.
          var ROC_SYSEVENT_NVOD_REFEVENT_TIMEOUT                = 10222;    // NVOD参考事件接收超时
          var ROC_SYSEVENT_NVOD_TISHIEVENT_READY                = 10223;    // 接收NVOD时移事件成功.
                                                                                   // #modifiers 时移事件对应的参考事件ID,数值型,取值范围1-65535
          var ROC_SYSEVENT_NVOD_TISHIEVENT_TIMEOUT              = 10224;    // NVOD时移事件接收超时
                                                                                   // #modifiers 时移事件对应的参考事件ID,数值型,取值范围1-65535
          var ROC_SYSEVENT_NVOD_TISHIEVENT_END                  = 10225;    // NVOD时移事件结束
                                                                                   // #modifiers 时移事件ID，取值范围1-65535，数值型
                                                                                   /* 预留 10225-10250 给NVOD相关消息使用 */

                                                                                   /* CA */
          var ROC_SYSEVENT_CA_SMARTCARD_INSERT                  = 10401;    // 智能卡已插入
          var ROC_SYSEVENT_CA_SMARTCARD_EVULSION                = 10402;    // 智能卡已拔出
          var ROC_SYSEVENT_CA_MSG_INFO                          = 10403;    // CA 的提示信息,为CA指定(CA_INFO)
          var ROC_SYSEVENT_CA_MSG_ALARM                         = 10404;    // CA 的警告信息,为CA指定(CA_ALARM)
          var ROC_SYSEVENT_CA_MSG_COMMAND                       = 10405;    // CA 的命令信息,为CA指定(CA_COMMAND)
          var ROC_SYSEVENT_CA_MSG_STATUS                        = 10406;    // CA的状态信息,为CA指定(CA_STATUS)
          /* 预留 10407-10500 给CA相关消息使用 */

          /* 网络 */
          var ROC_SYSEVENT_NETWORK_CONNECTED                    = 10501;    // 网线已插上
          var ROC_SYSEVENT_NETWORK_DISCONNECTED                 = 10502;    // 网线已断开
          var ROC_SYSEVENT_LAN_NETWORK_CONNECTED                = 10503;    // LAN模式网络已连接.
          var ROC_SYSEVENT_LAN_NETWORK_DISCONNECTED             = 10504;    // LAN模式网络已断开.

          var ROC_SYSEVENT_LAN_NETWORK_DHCP_ENABLE_SUCCESS      = 10508;    // DHCP功能启用成功
          var ROC_SYSEVENT_LAN_NETWORK_DHCP_ENABLE_TIMEOUT      = 10509;    // DHCP功能启用超时
          /* 预留 10505-10520 给LAN模式相关消息使用 */

          var ROC_SYSEVENT_NTPTIME_SYNC_SUCC                    = 10521;    // 网络NTP时间同步成功.
          var ROC_SYSEVENT_NTPTIME_SYNC_TIMEOUT                 = 10522;    // 网络 NTP时间同步超时.
          var ROC_SYSEVENT_PING_RESPONSE                        = 10523;    // PING命令响应.
                                                                                   // #modifiers 取值:-1：超时,服务器无响应;>=0：表示响应的时间,单位为ms.
          var ROC_SYSEVENT_IP_UPDATED                           = 10524;    // IP地址有更新
          /* 预留 10524-10530 给其他网络相关消息使用 */

          /* 硬件 */
          var ROC_SYSEVENT_WRITE_FLASH_SUCC                     = 10601;    // Flash写入成功
          /* 预留 10602-10700 给其它硬件相关消息使用 */

          /* OTA */
          var ROC_SYSEVENT_OTA_FORCE_UPGRADE                    = 10701;    // OTA强制升级信息
          var ROC_SYSEVENT_OTA_MANUAL_UPGRADE                   = 10702;    // OTA手动升级信息
          var ROC_SYSEVENT_OTA_ANALY_UPGRADE_DATA               = 10703;    // OTA 获取并分析升级数据
          var ROC_SYSEVENT_OTA_ANALY_NIT_SUCCESS                = 10704;    // OTA 获取并分析NIT成功
          var ROC_SYSEVENT_OTA_ANALY_NIT_FAILED                 = 10705;    // OTA 获取并分析NIT失败
          var ROC_SYSEVENT_OTA_ANALY_PAT_SUCCESS                = 10706;    // OTA 获取并分析PAT成功
          var ROC_SYSEVENT_OTA_ANALY_PAT_FAILED                 = 10707;    // OTA 获取并分析PAT失败
          var ROC_SYSEVENT_OTA_ANALY_PMT_SUCCESS                = 10708;    // OTA 获取并分析PMT成功
          var ROC_SYSEVENT_OTA_ANALY_PMT_FAILED                 = 10709;    // OTA 获取并分析PMT失败
          var ROC_SYSEVENT_OTA_BURNING                          = 10710;    // OTA 烧录升级参数到flash
          var ROC_SYSEVENT_OTA_BURNING_SUCCESS                  = 10711;    // OTA 烧录升级参数到flash成功
          var ROC_SYSEVENT_OTA_BURNING_FAILED                   = 10712;    // OTA 烧录升级参数到flash失败
          var ROC_SYSEVENT_OTA_UPDATE_SUCCESS                   = 10713;    // OTA 升级参数获取成功,重启升级
          var ROC_SYSEVENT_OTA_NO_UPDGRADE_INFO                 = 10714;    // 未检测到OTA升级信息
          /* 预留 10715-10800 给OTA相关消息 */

          /* 频道管理 */
          var ROC_SYSEVENT_ORDERD_EVENT_WILL_START              = 10801;    // 用户预定的节目将要开始  （该消息在预订节目开始前N分钟触发，N由数据访问接口中的bookedInformTime字段值指定）
                                                                                   // #modifiers 预订节目的order对象的标识符，数值型，取值范围1-65535
          var ROC_SYSEVENT_ORDERD_EVENT_START                   = 10802;    // 用户预定的节目开始
          /* 预留 10803-10900 给频道管理相关消息 */

          /* 媒体播放 */
          var ROC_SYSEVENT_VOD_END_OF_STREAM                    = 10901;
          var ROC_SYSEVENT_VOD_BEGIN_OF_STREAM                  = 10902;
          var ROC_SYSEVENT_VOD_S1_ANNOUNCE_TERMINATE            = 10903;
          var ROC_SYSEVENT_VOD_C1_ANNOUNCE_TERMINATE            = 10904;
          var ROC_SYSEVENT_VOD_EXCEPTION                        = 11000;

          /* CA扩展消息 */
          var ROC_SYSEVENT_CAEXT_INQUIRE_IPP                    = 11701;    // IPP即时购买提示框
          var ROC_SYSEVENT_CAEXT_HIDDEN_PROGRAM                 = 11702;    // 隐藏节目不能观看的提示框


          var ROC_SYSEVENT_VOD_EXTINIT_OVER                     = 20004;
          var ROC_SYSEVENT_EMAIL                                = 11536;


          return {
            "ROC_IRKEY_UP": ROC_IRKEY_UP,
            "ROC_IRKEY_RIGHT":  ROC_IRKEY_RIGHT,
            "ROC_IRKEY_DOWN":  ROC_IRKEY_DOWN,
            "ROC_IRKEY_LEFT":  ROC_IRKEY_LEFT,
            "ROC_IRKEY_SELECT": ROC_IRKEY_SELECT,
            "ROC_IRKEY_BACK": ROC_IRKEY_BACK,
            "ROC_IRKEY_EXIT": ROC_IRKEY_EXIT,
            "ROC_IRKEY_BACK": ROC_IRKEY_BACK
          };
})

