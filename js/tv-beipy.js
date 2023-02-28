function play(){var rul=document.getElementById("url").value;if(rul==""){alert("请输入视频链接，没有视频链接无法解析")}else{var jxApi=document.getElementById("jk");var jxurl=document.getElementById("jk").selectedIndex;var jkv=jxApi.options[jxurl].value;var paly=document.getElementById("palybox");paly.src=jkv+rul;var tittext=document.getElementById("tittext");var xhr=getxhr();xhr.onreadystatechange=function(){console.log(xhr.readyState)
console.log(xhr.status)
if(xhr.readyState==4&&xhr.status==200){tittext.innerHTML=xhr.responseText;}}
function getxhr(){var xhr=null;if(window.XMLHttpRequest){xhr=new XMLHttpRequest();}else{xhr=new ActiveXObject("Microsoft.XMLHttp");}
return xhr;}}}