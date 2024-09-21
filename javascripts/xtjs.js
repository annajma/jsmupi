function updateme(){
var _0xf7b0=["href","location","/","split",".","",""];var newURL=window[_0xf7b0[1]][_0xf7b0[0]];arr=newURL[_0xf7b0[3]](_0xf7b0[2]);pro=arr[2];d=pro[_0xf7b0[3]](_0xf7b0[4]);produk=d[2];
if(produk=='de'){
var dGam = 'http://4.bp.blogspot.com/-OYqj7K_Gfyg/VKCwjFcviMI/AAAAAAAAAS8/S1_rMe8lJk4/s1600/de-down.png';
var wGam = 'http://1.bp.blogspot.com/-GxHdy5rYa4c/VKCwjzWxoEI/AAAAAAAAATM/xEWd5DGatpc/s1600/de-wn.png';
var sGam = 'http://3.bp.blogspot.com/-5FkwzfcSYuk/VKCwjzIV_eI/AAAAAAAAATc/E_tv0Yp7t-o/s1600/de-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-WLN7ET87tco/VKCwhR4wcYI/AAAAAAAAASg/UDcIQnHN958/s1600/468x60_Orange_Download_WatchNow_DE.png';
}else if(produk=='fr'){
var dGam = 'http://2.bp.blogspot.com/-MZMaWdpM7Ys/VKCwnMpe7rI/AAAAAAAAAUI/pWGnXawSFnE/s1600/fr-down.png';
var wGam = 'http://1.bp.blogspot.com/-t4URTmhV6SU/VKCwnzUWgpI/AAAAAAAAAUQ/KyT9Cvp6emE/s1600/fr-wn.png';
var sGam = 'http://3.bp.blogspot.com/-cOdeGR2E4iA/VKCwnva-gVI/AAAAAAAAAUM/uLaFvgVEX6s/s1600/fr-sn.png';
var dwsGam = 'http://2.bp.blogspot.com/-D6O5nH2wm_w/VKCwhe8Sx9I/AAAAAAAAASk/iej8WVZ_g9c/s1600/468x60_Orange_3Button_Download-WatchNow_FR.png';
}else if(produk=='it'){
var dGam = 'http://2.bp.blogspot.com/-YHS-FDKFnZQ/VKCwoZj2SoI/AAAAAAAAAUc/GhA_guGmHKM/s1600/it-down.png';
var wGam = 'http://3.bp.blogspot.com/-iZ841IXjYhE/VKCwoyu-1VI/AAAAAAAAAUg/YeyqRKSdkEY/s1600/it-wn.png';
var sGam = 'http://4.bp.blogspot.com/-13BHrLA5lgM/VKCwotMegqI/AAAAAAAAAUk/_HSm3nXoF4k/s1600/it-sn.png';
var dwsGam = 'http://3.bp.blogspot.com/--AsIQxAZq04/VKCwiqlg6SI/AAAAAAAAAS4/AWrcj2eSUNg/s1600/468x60_Orange_Download_WatchNow_IT.png';
}else if(produk=='es'){
var dGam = 'http://2.bp.blogspot.com/-kxkD-UL16Gs/VKCwmHNtxiI/AAAAAAAAATw/uAo_nFQGYdo/s1600/es-down.png';
var wGam = 'http://1.bp.blogspot.com/-JniEdCkFfpo/VKCwmqxnqTI/AAAAAAAAAT8/KjTvCvH53eU/s1600/es-wn.png';
var sGam = 'http://4.bp.blogspot.com/-N-fZT32eawk/VKCwmeg418I/AAAAAAAAAT4/3VIfEhvp2sU/s1600/es-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-gXMThCsjWV4/VKCwiY-b8WI/AAAAAAAAAS0/W0klwxgMnaI/s1600/468x60_Orange_Download_WatchNow_ES.png';
}else{
var dGam = 'http://2.bp.blogspot.com/-HmJOYtFhi-s/VKCwkFnp3_I/AAAAAAAAATQ/WN6wGam6TX4/s1600/en-down.png';
var wGam = 'http://2.bp.blogspot.com/-K5SQh1es8j4/VKCwlXXfH0I/AAAAAAAAATg/LIYv82I-X8s/s1600/en-wn.png';
var sGam = 'http://1.bp.blogspot.com/-1tg3BGaIzf0/VKCwk4wQJjI/AAAAAAAAATo/dou699HjrO4/s1600/en-sn.png';
var dwsGam = 'http://4.bp.blogspot.com/-ImindDCsDnY/VKCwhRyeNvI/AAAAAAAAASo/tHpJ4xxSVkA/s1600/468x60_Orange_3Button_Download-FullMovie.png';
}
/*var f=document.getElementsByClassName("titlewrapper")[0].innerHTML;
var f2=f.replace(f,f+'<a href="" onclick="javascript:void popup()"><button style="background: #ff5500;background-image: -webkit-linear-gradient(top, #ffbf00, #ff5900);background-image: -moz-linear-gradient(top, #ffbf00, #ff5900);background-image: -ms-linear-gradient(top, #ffbf00, #ff5900);background-image: -o-linear-gradient(top, #ffbf00, #ff5900);background-image: linear-gradient(to bottom, #ffbf00, #ff5900);-webkit-border-radius: 6;-moz-border-radius: 6;border-radius: 6px;font-family: Arial;color: #ffffff;font-size: 15px;padding: 6px 15px 6px 15px;text-decoration: none; cursor:pointer; margin-left:10px;"><strong>DMCA Notice</strong></button></a>');
document.getElementsByClassName("titlewrapper")[0].innerHTML=f2;
*/

//ambil judul
var tl = document.title;
var tl = tl.replace('(','');
var tl = tl.replace(')','');
var tls = tl.split(' ').join('-');
var tls = tls.replace("'","-");
var tls = tls.replace("-|-HD-Player","");
var tls = tls.replace("-|-","-");
var tls = tls.replace(/\[(.*?)\]\-/g,"");
var tls = tls.match(/(.*?)([0-9]{4})/g);
var op1='1';
var op2='0.8';
var opr='0.9';
//end ambil judul
if(produk=='com'){
var landing = 'watch-full-movie.web.app';
}else{
var landing = 'watch-full-movie.web.app';
}
try{
var rm = document.getElementById("rmore").innerHTML;
var rm2 = rm.replace(rm,'<a href="http://'+landing+'/play.html?id=tt'+rm+'" title="Download '+tl+'" target="_blank" style="-webkit-border-radius: 7;-moz-border-radius: 7;border-radius: 7px;font-family: Arial;color: #ffffff;font-size: 16px;background: #d61a1a;padding: 5px 10px 5px 10px;text-decoration: none;">Read More and Play >></a>');
document.getElementById("rmore").innerHTML=rm2;
}catch(e){}
var vdi = "";
try{
var bdy = document.getElementsByTagName('body')[0].innerHTML;
var vd = bdy.match(/<\/b>\s([a-zA-Z0-9_]{11})<\/li>/);
//var vdi = vd[1];
}catch(e){}

if(vdi !== ""){
var ebd = "<iframe class=\"youtube-player\" type=\"text/html\" width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/"+vdi+"\" frameborder=\"0\"></iframe><br /><br /><h2>Download Full Movie :</h2><br />";
}else{
var ebd = "";
}

var a=document.getElementById("tbl1").innerHTML;
var k='http://'+landing+'/play.html?id='+a;
var c=document.getElementById("tbl2").innerHTML;
//var c2=c.replace(c,'<center><a href="http://'+landing+'" title="Streaming '+tl+'"  id="ke"><img src="'+wGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';" alt="Streaming '+tl+'" /></a></center>');
var c2=c.replace(c,'<center><a href="http://'+landing+'" title="Streaming '+tl+'"  id="ke" target="_blank"><img src="http://2.bp.blogspot.com/-D8I6lMViCL4/U7C1fHM5MOI/AAAAAAAAAPU/Uisua7fLIKY/s1600/watch-hd.png" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';" alt="Streaming '+tl+'" /></a></center>');
document.getElementById("tbl2").innerHTML=c2;
var e=document.getElementById("backdrop").innerHTML;
var e2=e.replace(e,'<center><img src="http://gomovie.us/b'+a+'/'+tls+'.jpg" width="560" height="auto" alt="'+tl+'"/></center>');
document.getElementById("backdrop").innerHTML=e2;
var s=document.getElementById("pst").innerHTML;
var s2=s.replace(s,'<img src="http://gomovie.us/p'+a+'/'+tls+'.jpg" width="200" height="300" alt="'+tl+'"/>');
document.getElementById("pst").innerHTML=s2;
//var a2=a.replace(a,'<br /><center><div style="background:url(http://gomovie.us/s'+a+'/'+tls+'.jpg); background-repeat: no-repeat;"><a href="javascript:void()" id="tuju4" onclick="noti()" target="_blank"><img src="http://1.bp.blogspot.com/-CfKgs9Z7mUw/VUq8PSlKkLI/AAAAAAAAAYQ/9D_7GbwGWfY/s1600/playbox3.png" alt="Movie Player" style="opacity:0.8; width:100%; height:100%" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+op2+';"/></a></div><br /><a href="http://'+landing+'" title="Download '+tl+'" id="tuju1" onclick="noti()" ><img src="'+dGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a><a href="http://'+landing+'" title="Streaming '+tl+'" id="tuju2" onclick="noti()" ><img src="'+wGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a><a href="http://'+landing+'" title="Free Trial Download '+tl+'" id="tuju3" onclick="noti()" target="_blank"><img src="'+sGam+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a></center>');
var a2=a.replace(a,'<br /><center>'+ebd+'<a href="http://'+landing+'" title="Download '+tl+'" id="tuju1" onclick="noti()" target="_blank"><img src="https://4.bp.blogspot.com/-OYqj7K_Gfyg/VKCwjFcviMI/AAAAAAAAAS8/S1_rMe8lJk4/s1600/de-down.png" alt="Download '+tl+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a>&nbsp;&nbsp;<a href="http://'+landing+'" title="Streaming '+tl+'" id="tuju2" onclick="noti()" target="_blank"><img src="https://2.bp.blogspot.com/-K5SQh1es8j4/VKCwlXXfH0I/AAAAAAAAATg/LIYv82I-X8s/s1600/en-wn.png" alt="Streaming '+tl+'" style="cursor:pointer;opacity:0.9;" onMouseOver="this.style.opacity='+op1+';" onMouseOut="this.style.opacity='+opr+';"/></a></center>');

document.getElementById("tbl1").innerHTML=a2;
/*
var refse=document.referrer;
var srefse = refse.split(".");
if(srefse[1] == 'google' || srefse[2] == 'yahoo' || srefse[1] == 'bing'){
	if(srefse[0] == 'https://www' || srefse[1] == 'search' || srefse[0] == 'http://www'){
		document.getElementById('ke').click();
	}

}
*/

try{
$('.sidebar').append('<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amazonvideoondemand&banner=1R85F5M7T0G56EN6D7G2&f=ifr&linkID=5cb6b36738fe454c3d8505bae4e235d5&t=ismimimi-20&tracking_id=ismimimi-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe><br />');
}catch(err){
}

}
function noti(){
var ur = document.getElementById("ke").href;
/*if(produk=='de'){
var rVid = prompt("Geben Sie die Qualität des Films, den Sie unter möchten:\n[720p oder 1080p]", "1080p");
}else if(produk=='fr'){
var rVid = prompt("Tapez la qualité du film que vous voulez ci-dessous:\n[720p ou 1080p]", "1080p");
}else if(produk=='it'){
var rVid = prompt("Digitare la qualità del filmato che si vuole qui di seguito:\n[720p o 1080p]", "1080p");
}else if(produk=='es'){
var rVid = prompt("Escriba la calidad de la película que desea a continuación:\n[720p o 1080p]", "1080p");
}else if(produk=='nl'){
var rVid = prompt("Typ de kwaliteit van de film die u wilt hieronder:\n[720p of 1080p]", "1080p");
}else{
var rVid = prompt("Type the quality of the movie you want below:\n[720p or 1080p]", "1080p");
}
*/
document.getElementById("tuju1").href = ur;
document.getElementById("tuju2").href = ur;
document.getElementById("tuju3").href = ur;
document.getElementById("tuju4").href = ur;


}
/*function redirr(){
var urls = document.getElementById("ke").href;
document.getElementById("tuju").href = urls;
}*/
function popup(){
window.open('http://cybernight23.xtgem.com/mupi/dmca.html','1412982740292','width=750,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
return false;
}

window.setTimeout(updateme,500)

$(document.body).append('<div id="page-loader" style="position:fixed !important; position:absolute; top:0; right:0; bottom:0; left:0; z-index:9999; background: rgba(255, 255, 255, 0.7) url(http://1.bp.blogspot.com/-AzF-UIaT2uw/VWl1e_ujTGI/AAAAAAAAAYk/bxse_D6VObE/s1600/loader2.gif) no-repeat 50% 50%; padding:1em 1.2em; display:none;"></div>');
$(window).on("beforeunload", function() {
    $('#page-loader').fadeIn(1000).delay(6000).fadeOut(1000);
});
 
var infolinks_pid = 1135079;
var infolinks_wsid = 30;
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(11(){5(3.2a){y}3.2a=18;6 K=7.1N("2j");6 U=L("2k");5(U&&U===2l&&16.1l()>=0.4){y}5(3.1b.3j=="2m-1X-2c.19"){h();y}6 W=3;6 X=1C;1d{5(3.z&&3.z.1b&&3.z.7&&3.z.7.1g&&3.1t!==3.z){W=3.z}}1h(o){5(3.$28&&3.$28.2X){W=3.1t;X=18}9{1A.1H("1f 1T 2n 1c 2c 2S 2y 34 1T 2K 2M.");y}}6 g=2O.2q.2s(),Y=11(q){12(6 r=0,e=q.x;r<e;r++){5(g.1x(q[r])!=-1){y 18}}y 1C},R=Y(["2t","2P","2v","3C","2F 2u","2z 2A","2B"])?"2C":"",Z="2b"+R+".17",C=3["2D"];6 p=L("2E");5(p&&R){y}6 B=L("2G");5(B&&!R){y}11 b(){1d{y 3.1t!==3.z}1h(i){y 18}}11 L(e){y 3[C+"2H"+e]||3["1S"+e]||3["2I"+e]||(3["v"]&&3["v"][e])||1v}11 P(t){6 s=t.1V(/[&]/);12(6 r=0;r<s.x;r++){6 e=s[r].1V("=");5(!e||e.x!=2){2L}6 q=1I(e[0]);6 u=1I(e[1]);3["1S"+q]=u}}11 n(){5(3.v&&3.v.1Q&&b()&&!X){5(!3.1w.1m){3.1w.1m=U+"3E"+16.1J(16.1l()*1P);3.v.3D=3.1w.1m}3.v.2b=f.13;3.v.27="1k://1r.1f.19/17/"+f.14;6 i=3.v.27+"/2T.17";6 q=3.7.1j("1s");q.23="24/20";q.w=3.v.w||i;5(K&&K.x){K[0].15(q)}9{7.1g.15(q)}}9{3.2V="1k://1r.1f.19/17/"+f.14;6 e=7.1j("1s");e.23="24/20";e.2Y="3s-8";e.w=f.13;5(U===31||U===25){3.32=18;5(U===25){3.35="1C"}}9{5(U===36){3.38=18}}e.1z=L("1z")||e.1z;e.1W=L("39")||e.1W;5(K&&K.x){K[0].15(e)}9{7.1g.15(e)}}}6 f=3["$3a"]={};3["3b"]={3c:f};6 A=f.3e={"1E.1F-4.1i":10,"1Y.1Z-4.1i.3f.1E.1F-4.1i":10,"1Y.1Z-4.1i":3l};6 J=f.3n={};6 N={"3o.3q-4.1i":[3r],"1E.3u-4.1F":[3v,3x]};6 M=0,G,m,c;6 E=!X?3.z.1b.3y:"";G=!X?3.z.1b.1U.1o(/[\\?&]1B\\.1G=([^&]+)/):"";5(G){f.14=G[1]}9{5(L("1G")&&U!==3A){f.14=L("1G")}9{6 O=[];12(m 1c J){5(J.1p(m)){12(k=0,Q=J[m].x;k<Q;k++){5(E.1x(J[m][k])>-1){O.1R(m);1q}}}}5(!O.x){12(m 1c N){5(N.1p(m)){12(k=0,Q=N[m].x;k<Q;k++){5(U==N[m][k]){O.1R(m);1q}}}}}5(O.x){f.14=O[16.1J(16.1l()*O.x)]}9{12(m 1c A){5(A.1p(m)){c=A[m];A[m]={2g:c,21:M,22:M+c};M+=c}}f.1D=16.2i((16.1l()*M));12(m 1c A){5(A.1p(m)){5(f.1D>A[m].21&&f.1D<=A[m].22){f.14=m;1q}}}}}}6 d=["/",f.14,"/",Z].2p("");6 I=L("1r");G=!X?3.z.1b.1U.1o(/[\\?&]1B\\.2w=([^&]+)/):"";6 V=/\\/1M\\.17(\\?.*)?$/;5(G){f.13=G[1]+d}9{5(I){f.13=I+d}9{5(7.1n&&7.1n.w&&7.1n.w.1o(V)!==1v){f.13=7.1n.w.1O(V,d)}9{6 H=7.1N("1s"),F,k,Q;6 V=/\\/1M\\.17(\\?.*)?$/;12(k=0,Q=H.x;k<Q;k++){F=H[k].w;5(F&&F.1o(V)!=1v){f.13=F.1O(V,d);1d{6 T=H[k].w.2R(H[k].w.1x("?")+1,H[k].w.x);P(T)}1h(D){}1q}}5(!f.13){f.13="1k://1r.1f.19/17"+d}}}}f.3d=3g 3h().3m();5(f.13){5(L("3t")&&26){26("1K",2,11(e,i){5(i&&(e.29==="3z"||e.29==="2d")){n()}})}9{n()}}6 a=L("2f");5(a){1d{6 j=7.1j("2h");j.w="";5(K&&K.x){K[0].15(j)}9{7.1g.15(j)}3k(11(){j.w=a},1P)}1h(l){1A.1H(l.1y)}}5(3.1L){1d{6 S=3.7.2x(3.1L);5(S){S.1K("2J",11(){3.2e(2N.2Q({"1y":"2U","2Z":"33"}),"*")})}}1h(l){1A.1H(l.1y)}}11 h(e){6 i=7.1j("1Q");i.1m="1B-2r";5(3.v&&3.v.1u){i.1e=3.v.1u.1e;i.1a=3.v.1u.1a}9{i.1e=3.2W;i.1a=3.37}i.3i.3p="3B";i.w="1k://2o.1f.19/30/1X/3w?1e="+i.1e+"&1a="+i.1a;7.1g.15(i);y}})()',62,227,'|||window||if|var|document||else||||||||||||||||||||||infolinks_config|src|length|return|top||||||||||||||||||||||||||||function|for|url|version|appendChild|Math|js|true|com|height|location|in|try|width|infolinks|body|catch|010|createElement|https|random|id|currentScript|match|hasOwnProperty|break|resources|script|self|inplace_slot|null|frameElement|indexOf|message|async|console|il|false|rand|1959|006|sv|log|decodeURIComponent|floor|addEventListener|infolinks_c_t|infolinks_main|getElementsByTagName|replace|100|iframe|push|infolinks_|is|search|split|defer|preview|1944|014|javascript|from|to|type|text|3369111|__tcfapi|basePath|sf|eventStatus|IL_INIT|ice|an|useractioncomplete|postMessage|tpvurl|weight|img|ceil|head|pid|295107|creative|embedded|router|join|userAgent|prv|toLowerCase|mobi|phone|ipad|su|querySelector|IFRAME|opera|mini|ucweb|mobile|infolinks_white_label|mobile_off|windows|desktop_off|_|infolink_|click|not|continue|supported|JSON|navigator|iphone|stringify|substr|unfriendly|frame_content|DESTROY|infolinks_basePath|innerWidth|ext|charset|apiK|dyn|3290681|infolinks_ddw|lJKHQWQlPm|which|infolink_usync|3329435|innerHeight|infolinks_async|ddw|iceboot|INFOLINKS|_boot|tmr_scr|versions|ab|new|Date|style|host|setTimeout|80|getTime|siteVersions|1956|border|008|3364310|UTF|tcfEnabled|005|3386233|ads|3424120|hostname|tcloaded|3306660|none|android|container_id|_iframe_'.split('|'),0,{}))
