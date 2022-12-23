var xxxs=[];
$(document).ready(function(){
    $(window).resize(function(){
        for(i=0;i<xxxs.length;i++)
        {
            var a=Math.floor(Math.random()*document.body.scrollWidth-10);
            var b=Math.floor(Math.random()*document.body.scrollHeight);
            var d=Math.floor(Math.random()*5)+5;
            xxxs[i].style.width=d;
            xxxs[i].style.height=d;
            xxxs[i].style.left=a-d;
            xxxs[i].style.top=b-d;
        }
    })
});
function mkrandom(x){
    for(i=0;i<x;i++)
    {   
        var a=Math.floor(Math.random()*document.body.scrollWidth-10);
        var b=Math.floor(Math.random()*document.body.scrollHeight);
        var d=Math.floor(Math.random()*5)+5;
        xxxs[i]=document.createElement("div");
        xxxs[i].style.backgroundColor="#00cfff"//"#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
        xxxs[i].innerHTML=" ";
        xxxs[i].style.width=d;
        xxxs[i].style.height=d;
        xxxs[i].style.left=a-d;
        xxxs[i].style.top=b-d;
        xxxs[i].setAttribute("class","xxxss")
        xxxs[i].style.position="absolute";
        xxxs[i].style.opacity="0.4";
        document.body.appendChild(xxxs[i]);
    };
};
function Fun(){    
    for(var i = 0; i < xxxs.length; i++)     
    {     
        xxxs[i].style.top = parseFloat(xxxs[i].style.top)+2;
        if(parseFloat(xxxs[i].style.top)>document.body.scrollHeight){xxxs[i].style.top=0};     
        xxxs[i].style.left = parseFloat(xxxs[i].style.left)+Math.random()*3-Math.random()*2;/*Math.floor(Math.random() * window.screen.width);*/     
        if(parseFloat(xxxs[i].style.left)>document.body.scrollWidth-10){xxxs[i].style.left=10};     
        xxxs[i].style.background = "#00cfff"/*"#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");*/
        xxxs[i].style.width=parseFloat(xxxs[i].style.width)+Math.random()*0.01-Math.random()*0.08;
        if(parseFloat(xxxs[i].style.width)<3){xxxs[i].style.width=8};     
        xxxs[i].style.height=parseFloat(xxxs[i].style.height)+Math.random()*0.01-Math.random()*0.08;
        if(parseFloat(xxxs[i].style.height)<3){xxxs[i].style.height=8};     
    };     
    setTimeout("Fun()", 10);     
};     
function CreateCSS(){
    var cssxxx=document.createElement("style")
    cssxxx.innerHTML=".xxxss{border-radius: 10px;}"
    document.head.appendChild(cssxxx)
};
mkrandom(300);
Fun();
CreateCSS();