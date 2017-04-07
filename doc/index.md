页面初始化: http://ip:port/GetPlateList?client=8441210213626208&reginCode=202&parentId=&pageType=1&parentType=1&exds=
{
	"totalCount": 2，
	"resultCode": "1",
	"resultDesc": "",
	"columnList": [{
		"serialNo": "0000",
		"systemId" : "0000",
		"columnId": "0001",
		"columnTitle": "电视政务",
		"columnDesc": "电视政务",
		"sortNumber": 1,
		"columnCover": "http://10.10.1.88:80/1.jpg",
		"totalCount": 4,
		"totalPage": 1,
		"currentPage": 1,
		"href": "",
		"columnList": [{
			"serialNo": "1000",
			"systemId" : "0000",
			"columnId": "0001",
			"columnTitle": "领导介绍",
			"columnDesc": "领导介绍",
			"sortNumber": 1,
			"columnCover": "http://10.10.1.88:80/1.jpg",
			"totalCount": 1,
			"totalPage": 1,
			"currentPage": 1，
			"href": "pages/leader.html"
		},
		{
			"serialNo": "1001",
			"systemId" : "0000",
			"columnId": "0001",
			"columnTitle": "今日头条",
			"columnDesc": "今日头条",
			"sortNumber": 1,
			"columnCover": "http://10.10.1.88:80/1.jpg",
			"totalCount": 6,
			"totalPage": 3,
			"currentPage": 1,
			"href": "pages/leader.html"
		}]
	},
	{
		"serialNo": "0000",
		"systemId" : "0000",
		"columnId": "0001",
		"columnTitle": "智慧乡村",
		"columnDesc": "智慧乡村",
		"sortNumber": 1,
		"columnCover": "http://10.10.1.88:80/1.jpg",
		"totalCount": 4,
		"totalPage": 1,
		"currentPage": 1,
		"href": "",
		"columnList": [{
			"serialNo": "1000",
			"systemId" : "0000",
			"columnId": "0001",
			"columnTitle": "美丽点播",
			"columnDesc": "美丽点播",
			"sortNumber": 1,
			"columnCover": "http://10.10.1.88:80/1.jpg",
			"totalCount": 1,
			"totalPage": 1,
			"currentPage": 1，
			"href": "pages/leader.html"
		},
		{
			"serialNo": "1001",
			"systemId" : "0000",
			"columnId": "0001",
			"columnTitle": "文化民俗",
			"columnDesc": "文化民俗",
			"sortNumber": 1,
			"columnCover": "http://10.10.1.88:80/1.jpg",
			"totalCount": 6,
			"totalPage": 3,
			"currentPage": 1,
			"href": "pages/leader.html"
		}]
	}]
}


### 电视政务 
- 领导介绍 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "县委领导",
		"pageSubtitle": "中共沿河土家族自治县委书记 任廷浬",
		"pageContent": "县委书记：任廷浬 县委副书记：何支刚 龙海成 县委常委：龙海成 田 斌 杨雪峰 何志天 李世怀 张 勇 刘明军 杨海英 县委办主任：张永恒",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 每日关注 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "今日头条"，
	"parentDesc": "今日头条",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"贵州铜仁消防官兵积极参与”共……",
			"plateDesc":"贵州铜仁消防官兵积极参与”共……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"贵州铜仁市委书记陈昌旭代表……",
			"plateDesc":"贵州铜仁市委书记陈昌旭代表……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}


- 每日关注详情-> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "今日详情",
	"plateDesc": "今日详情",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageSubtitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageContent": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	},
	{
		"sortNumber": 2,
		"pageId": "201408250002",
		"pageIndex": 2,
		"pageTitle": "贵州铜仁市委书记陈昌旭代表……",
		"pageSubtitle": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageContent": "this is test hello,wolrd",
		"pageCover": [
			"http://10.10.1.88:80/2.jpg",
			"http://10.10.1.88:80/3.jpg"
		],
		"href": "http://10.10.1.88:80/2.html"
	}]
}

- 沿河要闻 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "沿河要闻"，
	"parentDesc": "沿河要闻",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"市委书记陈昌旭在沿河自冶县调研……",
			"plateDesc":"贵州铜仁消防官兵积极参与”共……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"贵州铜仁市委书记陈昌旭代表……",
			"plateDesc":"贵州铜仁市委书记陈昌旭代表……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}


- 沿河要闻详情-> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "沿河要闻",
	"plateDesc": "沿河要闻",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageSubtitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageContent": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	},
	{
		"sortNumber": 2,
		"pageId": "201408250002",
		"pageIndex": 2,
		"pageTitle": "贵州铜仁市委书记陈昌旭代表……",
		"pageSubtitle": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageContent": "this is test hello,wolrd",
		"pageCover": [
			"http://10.10.1.88:80/2.jpg",
			"http://10.10.1.88:80/3.jpg"
		],
		"href": "http://10.10.1.88:80/2.html"
	}]
}

- 政务公开-> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "政务公开"，
	"parentDesc": "政务公开",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河土家族自冶县人民医院2016年公开招聘药剂人员实施方案",
			"plateDesc":"沿河土家族自冶县人民医院2016年公开招聘药剂人员实施方案",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河土家族自治县2016年事业单位公开招聘（引进）高层次有需……",
			"plateDesc":"文化民俗",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

-政务公开详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员公示",
		"pageSubtitle": "沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员公示",
		"pageContent": "根据《沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才实施方案》规定，通过考试、体检和考察环节，经县事业单位新增人员公开招聘领导小组研究，现对2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员予以公示。",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	},
	{
		"sortNumber": 2,
		"pageId": "201408250002",
		"pageIndex": 2,
		"pageTitle": "沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员公示",
		"pageSubtitle": "沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员公示",
		"pageContent": "根据《沿河土家族自治县2016年事业单位公开招聘（引进）高层次及急需紧缺人才实施方案》规定，通过考试、体检和考察环节，经县事业单位新增人员公开招聘领导小组研究，现对2016年事业单位公开招聘（引进）高层次及急需紧缺人才拟聘用人员予以公示。",
		"pageCover": [
			"http://10.10.1.88:80/2.jpg",
			"http://10.10.1.88:80/3.jpg"
		],
		"href": "http://10.10.1.88:80/2.html"
	}]
}


### 智慧乡村
- 文化民俗 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "文化民俗"，
	"parentDesc": "文化民俗",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"中界镇孙家村简介",
			"plateDesc":"中界镇孙家村距沿河县城13公里，全村辖3个村民组，有176户，共726人，少数发族占85%……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"文化民俗",
			"plateDesc":"文化民俗",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 特色产业 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "特色产业"，
	"parentDesc": "特色产业",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"孙家村",
			"plateDesc":"中界镇孙家村距沿河县城13公里，全村辖3个村民组，有176户，共726人，少数发族占85%……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"新民村",
			"plateDesc":"中界镇孙家村距沿河县城13公里，全村辖3个村民组，有176户，共726人，少数发族占85%……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 阳光村务 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "阳光村务",
		"pageSubtitle": "阳光村务",
		"pageContent": "5月20日下午，村委会活动室里已经座无虚席。党支部书记孙本江同志组织深入开展“两学一做”学习教育工作进行专题学习……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 阳光村务图片 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=6&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "阳光村务",
		"pageSubtitle": "阳光村务",
		"pageContent": "5月20日下午，村委会活动室里已经座无虚席。党支部书记孙本江同志组织深入开展“两学一做”学习教育工作进行专题学习……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


### 便民服务
- 办事指南 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "办事指南"，
	"parentDesc": "办事指南",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"安监局",
			"plateDesc":"安监局",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"档案局",
			"plateDesc":"档案局",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 办事指南（档案局） -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "办事指南"，
	"parentDesc": "办事指南",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"安监局",
			"plateDesc":"安监局",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"档案局",
			"plateDesc":"档案局",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 办事指南详情（档案局详情）-> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "沿河县档案局行政审批事项办事指南",
		"pageSubtitle": "沿河县档案局行政审批事项办事指南",
		"pageContent": "",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

-> 通知公告 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "通知公告"，
	"parentDesc": "通知公告",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"市委书记陈昌旭在沿河自冶县调研……",
			"plateDesc":"市委书记陈昌旭在沿河自冶县调研……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"通知公告2",
			"plateDesc":"通知公告2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 通知公告详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "领导介绍",
	"plateDesc": "今日头条图片",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageSubtitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageContent": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


- 中介服务 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "中介服务"，
	"parentDesc": "中介服务",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"服务1",
			"plateDesc":"服务1",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"服务2",
			"plateDesc":"服务2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}


- 中介服务详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "国务院关于第三批清理规范",
	"plateDesc": "国务院部门行政审批中介服务事项的决定人",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageSubtitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageContent": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 交通出行 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "交通出行"，
	"parentDesc": "交通出行",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"公共汽车",
			"plateDesc":"公共汽车",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"出租车",
			"plateDesc":"出租车",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"长途客车",
			"plateDesc":"长途客车",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"客运船舶",
			"plateDesc":"客运船舶",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 交通出行详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "交通出行详情",
	"plateDesc": "交通出行详情",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "公交车线路、站点布局",
		"pageSubtitle": "公交车线路、站点布局",
		"pageContent": "一路起点 城南车站→城南道班→第三中学→农机修理厂→中医院→交通局→花园→天龙宾馆→检查院→供电局→肖家沟→教育局→乌江酒店→民福→人事局→河东二桥(中转站)河东二桥→县人民医院新址→乌航→文广局→民族小学→步行街→门诊→地税局→八一农贸市场→花园→交通局→中医院→农机修理厂→第三中学→城南道班→城南车站(票价1元)。",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 政策解读 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "政策解读"，
	"parentDesc": "政策解读",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"市委书记陈昌旭在沿河自冶县调研……",
			"plateDesc":"市委书记陈昌旭在沿河自冶县调研……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"政策解读2",
			"plateDesc":"政策解读2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"政策解读3",
			"plateDesc":"政策解读3",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"政策解读4",
			"plateDesc":"政策解读4",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 政策解读详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "政策解读",
	"plateDesc": "政策解读",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageSubtitle": "贵州铜仁消防官兵积极参与“共青林”植树活动",
		"pageContent": "3月13日（通讯员 刘斌）为美化驻地环境，共建绿色生态家园。3月11日上午，贵州铜仁消防官兵积极参加由共青团铜仁……",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 服务热线 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "服务热线",
	"plateDesc": "服务热线",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "",
		"pageSubtitle": "",
		"pageContent": " ",
		"pageCover": [
			"imgs/2.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


### 智慧旅游
- 景区实况 -> http://ip:port/GetPlateList?client=8441210213626208&reginCode=202&parentId=000001&pageType=1&parentType=1&exds=;
{
	"totalCount": 2，
	"resultCode": "1",
	"resultDesc": "",
	"columnList": [{
		"serialNo": "0000",
		"systemId" : "0000",
		"columnId": "0001",
		"columnTitle": "电视政务",
		"columnDesc": "电视政务",
		"sortNumber": 1,
		"columnCover": "http://10.10.1.88:80/1.jpg",
		"totalCount": 4,
		"totalPage": 1,
		"currentPage": 1,
		"href": "",
		"albumList": [],
		"columnList": [{
			"serialNo": "0001",
			"systemId" : "0000",
			"columnId": "0002",
			"columnTitle": "景区实况",
			"columnDesc": "景区实况",
			"sortNumber": 1,
			"sortNumber": 1,
			"columnCover": "",
			"totalCount": 5,
			"totalPage": 3,
			"currentPage": 1,
			"href": "",
			"albumList": [],
			"columnList": [{
				"serialNo": "1000",
				"systemId" : "0000",
				"columnId": "0001",
				"columnTitle": "热门景点",
				"columnDesc": "热门景点",
				"sortNumber": 1,
				"columnCover": "http://10.10.1.88:80/1.jpg",
				"totalCount": 6,
				"totalPage": 3,
				"currentPage": 1
				"href": "",
				"albumList": [],
				"columnList": [{
					"serialNo": "1000",
					"systemId" : "0000",
					"columnId": "0001",
					"columnTitle": "乌江画廊景区",
					"columnDesc": "乌江画廊景区",
					"sortNumber": 1,
					"columnCover": "http://10.10.1.88:80/1.jpg",
					"totalCount": 1,
					"totalPage": 1,
					"currentPage": 1，
					"albumList": [],
					"href": "pages/scenic.html"
				},
				{
					"serialNo": "1001",
					"systemId" : "0000",
					"columnId": "0001",
					"columnTitle": "沙洲城市农业公园",
					"columnDesc": "沙洲城市农业公园",
					"sortNumber": 1,
					"columnCover": "http://10.10.1.88:80/1.jpg",
					"totalCount": 6,
					"totalPage": 3,
					"currentPage": 1,
					"albumList": [],
					"href": "pages/leader.html"
				}]
			},
			{
				"serialNo": "1001",
				"systemId" : "0000",
				"columnId": "0001",
				"columnTitle": "公园乐园",
				"columnDesc": "公园乐园",
				"sortNumber": 1,
				"columnCover": "http://10.10.1.88:80/1.jpg",
				"totalCount": 6,
				"totalPage": 3,
				"currentPage": 1
				"href": "pages/leader.html",
				"albumList": [],
				"columnList": [{
					"serialNo": "1000",
					"systemId" : "0000",
					"columnId": "0001",
					"columnTitle": "沙子南庄国家AAA",
					"columnDesc": "沙子南庄国家AAA",
					"sortNumber": 1,
					"columnCover": "http://10.10.1.88:80/1.jpg",
					"totalCount": 1,
					"totalPage": 1,
					"currentPage": 1，
					"albumList": [],
					"href": "pages/leader.html"
				},
				{
					"serialNo": "1001",
					"systemId" : "0000",
					"columnId": "0001",
					"columnTitle": "黔东特区革命委员会",
					"columnDesc": "黔东特区革命委员会",
					"sortNumber": 1,
					"columnCover": "http://10.10.1.88:80/1.jpg",
					"totalCount": 6,
					"totalPage": 3,
					"currentPage": 1,
					"albumList": [],
					"href": "pages/leader.html"
				}]
			}]
		}]
	}]
}

-景区实况翻页 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "热门景点"，
	"parentDesc": "热门景点",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"乌江画廊景区",
			"plateDesc":"乌江画廊景区",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沙洲城市农业公园",
			"plateDesc":"沙洲城市农业公园",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 景区简介 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "景区简介",
	"plateDesc": "景区简介",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "景区简介",
		"pageSubtitle": "景区简介",
		"pageContent": "中国贵州乌江画廊景区，又名“乌江山峡百里画廊”或“乌江画廊”，位于贵州省东北部、铜仁市北部，涉及沿河自治县和平镇、淇滩镇、思渠镇、新景乡、洪渡镇等7个乡镇50个行政村部分区域。2013年成为全省“100个旅游景区”之一，包含淇滩古镇旅游区、沙洲城市农业公园旅游区、思渠古镇文化旅游区和候渡坪旅游区、洪渡风情小镇项目和沿河县城旅游项目，景区总长132公里，总面积132平方公里，共分夹石峡、黎芝峡、银童峡、土坨峡、王坨峡5个峡段，每个峡段风景各异，相互映衬，有“船在江上行，人在画中游”之意境。景区内有一级景源点16个，二级景源点42个，三级景源点127个，部分景观资源在国内具有不可替代性。",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 景区实况 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "景区实况"，
	"parentDesc": "景区实况",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"景区概况",
			"plateDesc":"乌江画廊旅游景区是全省100个旅游景区之一，是千里乌江最具特色的旅游景区，也是贵州旅游的形象窗口……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"景区详细介绍",
			"plateDesc":"乌江画廊旅游景区是全省100个旅游景区之一，是千里乌江最具特色的旅游景区，也是贵州旅游的形象窗口……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 景区酒店 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "景区酒店"，
	"parentDesc": "景区酒店",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"乌江酒店",
			"plateDesc":"乌江画廊旅游景区是全省100个旅游景区之一，是千里乌江最具特色的旅游景区，也是贵州旅游的形象窗口……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"金红商务酒店",
			"plateDesc":"乌江画廊旅游景区是全省100个旅游景区之一，是千里乌江最具特色的旅游景区，也是贵州旅游的形象窗口……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 景区酒店详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "景区酒店",
	"plateDesc": "景区酒店",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "景区酒店",
		"pageSubtitle": "景区酒店",
		"pageContent": "乌江酒店是贵州沿河四星级高端商务酒店，由香港志诚（国际）酒店管理由限公司荣耀管理……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 景区餐饮 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=1&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "景区餐饮"，
	"parentDesc": "景区餐饮",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"乌江画廊景区",
			"plateDesc":"乌江画廊景区",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沙洲城市农业公园",
			"plateDesc":"沙洲城市农业公园",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 景区餐饮详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=2&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "景区餐饮详情",
	"plateDesc": "景区餐饮详情",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "猪脑壳凉面",
		"pageSubtitle": "",
		"pageContent": "",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	},
	{
		"sortNumber": 2,
		"pageId": "201408250002",
		"pageIndex": 2,
		"pageTitle": "江东饭店",
		"pageSubtitle": "",
		"pageContent": "this is test hello,wolrd",
		"pageCover": [
			"http://10.10.1.88:80/2.jpg",
			"http://10.10.1.88:80/3.jpg"
		],
		"href": "http://10.10.1.88:80/2.html"
	}]
}

###智慧农业
- 农业技术 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "农业技术"，
	"parentDesc": "农业技术",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"水稻旱育浅植培训技术",
			"plateDesc":"水稻旱育浅植培训技术",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"水稻抛秧栽培技术",
			"plateDesc":"水稻抛秧栽培技术",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 农业技术详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "农业技术",
	"plateDesc": "农业技术",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "水稻旱育浅植培训技术",
		"pageSubtitle": "水稻旱育浅植培训技术",
		"pageContent": "水稻旱育浅植具有适应范围广（不论冬闲田还是迟熟油菜田，不论泡冬田还是望天田均适宜）、抗逆能力强（特别是“秋风”天气），育秧成本低、移栽无返青期，增产幅度大（一般15%以上）的特点",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 聚焦三农 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "聚焦三农"，
	"parentDesc": "聚焦三农",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"现代高效农业运行情况",
			"plateDesc":"现代高效农业运行情况",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"聚焦三农2",
			"plateDesc":"聚焦三农2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 聚焦三农详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "聚焦三农",
	"plateDesc": "聚焦三农",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "聚焦三农",
		"pageSubtitle": "聚焦三农",
		"pageContent": "今年以来，在省、市农委的大力支持下，县委、县政府的坚强领导下，全县农业园区发展态势良好，转型升级步伐加快。一、园区规模快速增长。目前，全县共建现代高效农业园区26个覆盖22个乡镇，总面积达30万亩，其中：省级园区7个（其中新创建省级园区3个）总面积21.51万亩、市级园区6个（其中新增市级级园区2个）总面积3.19万亩、300～500亩以上县级农业园区13个总面积5.3万亩。",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


- 农广天地 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "农广天地"，
	"parentDesc": "农广天地",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"土家族自治县黑水乡新群……",
			"plateDesc":"土家族自治县黑水乡新群……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河土家族自治县腾跃农……",
			"plateDesc":"聚焦三农2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}



- 农广天地 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "农广天地",
	"plateDesc": "农广天地",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "农广天地",
		"pageSubtitle": "农广天地",
		"pageContent": "",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 每日农经 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "每日农经"，
	"parentDesc": "每日农经",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"农经1",
			"plateDesc":"农经1",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"农经2",
			"plateDesc":"农经2",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 每日农经详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "每日农经",
	"plateDesc": "每日农经",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "水稻抛秧栽培技术",
		"pageSubtitle": "农广天地",
		"pageContent": "1、选用杂稻良种。如，中优169、冈优527、川江优527、湘优109、宜香527、川香优2号、金优207、金优177等。2、适时播种，培育壮苗。海拔300—500米地区3月25日至4月5日播种，海拔500—800米地区4月1—10日播种，海拔800米以上地区4月10—20日播种。育秧方式：塑料秧盘或旱育秧。",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


###智慧教育
- 平安校园 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "平安校园"，
	"parentDesc": "平安校园",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河县第二中学",
			"plateDesc":"沿河县第二中学创建于1975年,其前身属和平镇一小附设初中部,面积884m2,创建初期除一栋可供12个班教学胡砖木结构教学楼和一栋有12个套间的砖木结构教师宿舍外……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河中等职业学校",
			"plateDesc":"沿河中等职业学校创办于1985年,当时校名为"沿河县第三中学".1987年开设职业高中教育，校名改为“沿河县第三职业技术中学……,
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}


- 安全教育 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "安全教育"，
	"parentDesc": "安全教育",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"1岁孩子拿钥匙捅电瓶车充电 瞬……",
			"plateDesc":"",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"关于开展”国家级学校安全教育……",
			"plateDesc":"",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 安全教育详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "安全教育",
	"plateDesc": "安全教育",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "安全教育",
		"pageSubtitle": "",
		"pageContent": "1岁孩子拿钥匙捅电瓶车充电口，瞬间手指焦黑。小天只有1岁半，一天中午，大人都在店里忙生意，小天……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 名师讲座 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "名师讲座"，
	"parentDesc": "名师讲座",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"崔峦：在“学习语言文字运用”……",
			"plateDesc":"",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"课改，路在何方方——语文课程改……",
			"plateDesc":"",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 名师讲座详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "名师讲座",
	"plateDesc": "名师讲座",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "名师讲座",
		"pageSubtitle": "",
		"pageContent": "崔峦：深化小学语文教学改革之我见————“学习语言文字运用”暨小学语文单无整体教学实施论坛上的讲话……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}


### 电子商务
- 农特产品 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "农特产品"，
	"parentDesc": "农特产品",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"沿河土家酥食",
			"plateDesc":"沿河土家酥食就是沿河自治县土家族人的特色风味年糕。在农村，人们还是喜欢用草纸包上包酥食作为……",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"土家苦荞酒",
			"plateDesc":"沿河土家族自治县民族酒业有限公司，注册资本250万元， 公司职工增加到84人，技术人员8人（其中高级技术人员2人，中级技术人员6人）……",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 惠民电商 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "惠民电商"，
	"parentDesc": "惠民电商",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"电商1",
			"plateDesc":"",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"电商2",
			"plateDesc":"",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 惠民电商详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "惠民电商",
	"plateDesc": "惠民电商",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "惠民电商",
		"pageSubtitle": "",
		"pageContent": "沿河电子商务产业园规化面积10万平方米，先期使用面积1.4万米，集服务、孵化、企业、物流仓储为一体……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}

- 电商培训 -> http://ip:port/GetColumnList?client=8441210213626208&parentId=0001&reginCode =202&pageType=2&parentType=1&pageSize=8&startPage=1&exds=
{
	"totalCount":2，
	"resultCode":"00000",
	"resultDesc": "",
	"serialNo":"0000",
	"systemId":"00000",
	"parentId":"000001",	
	"parentTitle": "电商培训"，
	"parentDesc": "电商培训",
	"parentCover":"imgs/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1
	"plateList":[
		{
			"plateId":"0001",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"培训1",
			"plateDesc":"",
			"sortNumber":1,
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        },
		{
			"plateId":"0002",
			"serialNo": "1000",
			"systemId" : "0000",
			"plateTitle":"培训2",
			"plateDesc":"",
			"sortNumber":2
			"plateCover": "imgs/1.jpg",
			"href": "pages/leader.html"
			"albumList"[
				"imgs/1.jpg",
				"imgs/2.jpg",
				"imgs/3.jpg"
			]
        }
	],
	"albumList"[
		"imgs/1.jpg",
		"imgs/2.jpg",
		"imgs/3.jpg"
	]
}

- 电商培训详情 -> http://ip:port/GetPageList?parentId=00001&startPage=1&pageSize=2&client=8441210213626208&pageType=1&parentType=1&reginCode=202&exds=
{
	"serialNo":"201703221619001",
	"systemId":"00000",
	"plateId": "00001",
	"plateTitle": "电商培训",
	"plateDesc": "电商培训",
	"plateCover": "http://10.10.1.88:80/1.jpg",
	"totalCount": 6,
	"totalPage": 3,
	"currentPage": 1,
	"pageList": [{
		"sortNumber": 1,
		"pageId": "201408250001",
		"pageIndex": 1,
		"pageTitle": "电商培训",
		"pageSubtitle": "",
		"pageContent": "电子商务通常是指在全球各地广泛的商业贸易活动中，在因特网开放的网络环境下，基于流览器/服务器应用方式，买卖双……",
		"pageCover": [
			"imgs/2.jpg",
			"imgs/3.jpg"
		],
		"href": "http://10.10.1.88:80/1.html"
	}]
}