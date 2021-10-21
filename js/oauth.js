    var oauth = {};
	var oauthList = null;
	
    mui.plusReady(function(){
	plus.oauth.getServices(function(data){
		// console.log(JSON.stringify(data))
		oauthList = data;
	},function(){
		mui.toast('获取列表失败')
	})
})

	
	//获取列表的跟当前点击做对比
	oauth.fFilterOauth = function(id){
		for(var i in oauthList){
			if(oauthList[i].id == id){
				return oauthList[i]
			}
		}
		return null;
	}
