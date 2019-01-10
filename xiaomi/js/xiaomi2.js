// 头部js样式
window.onload = function(){
	var ohead = document.getElementById("toubu2");
	var oa = ohead.getElementsByTagName("a");
	var odiv = document.getElementById('ddiv');
	var otime = null;
	for(var i = 0; i <= 8; i++){
		oa[i].onmouseover = function(){
			var speed = 20;
			odiv.style.display = "block";
			clearInterval(otime);
			otime = setInterval(function(){
				if(parseInt(getStyle(odiv,"height")) == 200){
					clearInterval(otime);
				}else{
					odiv.style.height = parseInt(getStyle(odiv,"height")) + speed + "px";
				}
			},30)
		}
	}
	for(var i = 0; i <= 8 ; i++){
		oa[i].onmouseout = function(){
			var speed = -20; 
			clearInterval(otime);
			otime = setInterval(function(){
				if(parseInt(getStyle(odiv,"height")) == 0){
					clearInterval(otime);
					odiv.style.display = "none";
				}else{
					odiv.style.height = parseInt(getStyle(odiv,"height")) + speed + "px";
				}
			},30)
		}
	}
	function getStyle(node, styleStr){
				return node.currentStyle ? node.currentStyle[styleStr] : getComputedStyle(node)[styleStr];
			}
}
