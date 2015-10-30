//window.onload=function(){
//var autocode=document.getElementById('autocode');
//var str=autocode.innerHTML;
//var re=/(\/\*[\s\S]*?\*\/[\s\S]*?function\s*?([a-zA-Z0-9_]+?)\s*?\(.*?\)\s*?\{[\s\S]*\}[\s\S]*)/ig;
//var match;
//var arr=new Array();	
//while(match=re.exec(str)){
//	arr.push(match);
//	}
//console.log(match);
////var divstr='<div class="function"><a name="'+match[2]+'" class="mark"></a><pre class="brush:js;toolbar:false">'+match[1]+'</pre></div>';
////str=str.replace(match[1],divstr);
////autocode.innerHTML=str;
//};
$(function(){
var left=$('#leftdir');
var leftdl=$('#leftdir dl');
var right=$('#rightdir');
right.find('.function').each(function(index, element) {
    var ch=$(this).children().eq(0);
	var name=ch.attr('name');
	var str='<dd><a href="#'+name+'">'+name+'</a></dd>';
	leftdl.append(str);
	
});
});