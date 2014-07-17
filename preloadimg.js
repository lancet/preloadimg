/**************************************************************

 @Name: preLoadImg
 @Author: lancet
 @Date: 2014-07-10
		
 *************************************************************/
 ;(function(window, undefined){
	var preload = {
		v : '1.0.0',
		id : '',
		className :'',
		init : function(){
			var loadImg = new Image();
			loadImg.src = window.cloudstoreUrl+"/images/48-48.png";
			loadImg.onload = function(){
				loadimg();
			};
		}
	};
	var delay = 1;
	function loadimg(){
		var domname = "body",imgCol=new Image() ,imgsize = "48-48";
		if(preload.id != "")
			domname = "#"+preload.id;
		if(preload.className != "")
			domname = "."+preload.className;
		$(domname).find("img[srcd]").each(function(i,e){
			imgCol = new Image();
			imgCol.src = $(this).attr("srcd");
			if($(this).attr("size"))
				imgsize = $(this).attr("size");
			$(this).attr("src",window.cloudstoreUrl+"/images/"+imgsize+".png");
			var _that = this;
			imgCol.onload=function(){
				$(_that).attr("src",$(_that).attr("srcd"));
			};
			imgCol.onerror=function(){
				if(delay<4){
					if(timeout)
						clearTimeout(timeout);
					var timeout = setTimeout(loadimg, 3000);   
					delay++;
				}
			};
		});
	}
	window.preImg = preload;
	$(window).scroll(function(e){
		b();	
		$("#detailHtml img").each(function(i,e){
			var domTop = e.offsetTop;//某个元素距离窗口顶部的高度,假设该元素高为0
			var WH = $(window).height();//当前窗口的可视高度
			var WT = $(window).scrollTop();//当前窗口距离顶部的高度
			if( WT < domTop && WH+WT>domTop ){
				//某元素在当前窗口
				imgCol = new Image();
				imgCol.src = $(this).attr("srcd");
				var _that = this;
				imgCol.onload=function(){
					$(_that).attr("src",$(_that).attr("srcd"));
				};
				console.log(1);		
			}
		});
		
		
	});
})(window)