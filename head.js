//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f514182e4bfeb9121240841eae3f7446";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//加入收藏夹
 function addFavorite22() {
      var url = window.location;
      var title = document.title;
     var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("360se") > -1) {
          alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
      }
      else if (ua.indexOf("msie 8") > -1) {
          window.external.AddToFavoritesBar(url, title); //IE8
     }
     else if (document.all) {
   try{
    window.external.addFavorite(url, title);
   }catch(e){
    alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
   }
     }
     else if (window.sidebar) {
         window.sidebar.addPanel(title, url, "");
     }
     else {
   alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
     }
 }


//首页打开视频函数
function openWin()
         {   
		     var a=document.getElementById("jk").value; 
             var b=document.getElementById("url").value; 
			 b=b.split("?")[0];
             window.open('play.html?jk='+a+b),'_blank';  
         }

function openWin1(a)
         {   
		    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
			 {}
            else
			 { window.open('play.html?jk=https://jx.aidouer.net/?url='+a),'_blank';  }
         }

//公告
 function gonggao()
 {
document.writeln("<span class=\"yanse1\">公告：</span>VIP接口4月16日更新,更多接口选择！");
 }
 //公告2
 function gonggao2()
 {
document.writeln("<span class=\"yanse2\">公告：</span><span>若播放不了，</span><span class=\"yanse2\">请用其他接口播放！</span>");
 }
//播放页面播放函数
function GetRequest3() 
       { 
    
            var url = location.search; 
            var gg1 = document.getElementById("url").value.trim();
			 if(gg1 == null || gg1 == ""){
                 // alert("播放地址为空");
                var str = url.substr(1); 
				strs = str.split("jk=");
				strs1=str.split("url=");
				var bfdz=strs[1]
				var bfdz1=strs1[1]
				 // alert(bfdz);
				document.getElementById("url").value=bfdz1;
				document.getElementById("gher").src =bfdz;  
                }    
        
        } 

function GetRequest2() 
       { 
             var a=document.getElementById("jk").value; 
			 var b=document.getElementById("url").value;
			 document.getElementById("gher").src =a+b;      
        } 


