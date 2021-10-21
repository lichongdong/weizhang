var home = {};
var maps = null;

//执行方法
home.init = function(successCb){
	fGetCityLimit(successCb)
}

mui.plusReady(function () {
    //获取当前的地理位置
    plus.geolocation.watchPosition(function(data){
		maps = data.address.city.replace('市','')
    	// console.log(JSON.stringify(data.address.city.replace('市','')))
    }, function(){
    	mui.toast('定位获取失败,请检查网络')
    },{
		provider:"baidu"
	})
})

//当前定位的位置和数据拿到的所有位置做对比
function fGetFilterCity(arr){
	for(i in arr){
		if(arr[i].cityname == maps){
			return arr[i];
		}
	}
	return arr[0];
}
//请求限行城市的数据
function fGetCityLimit(successCb){
	mui.ajax('https://api.jisuapi.com/vehiclelimit/city',{
		data:'json',
		data:{
			  appkey:'15b163096b822dbf'
		},
		success:function(data){
		   var result = data.result;
		   var targetCity = fGetFilterCity(result)
		   successCb(targetCity);
		}
	})
}