/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Dec 14 16:55
*/
KISSY.add("swf",function(i,d,l,n,k,o){function f(a){f.superclass.constructor.apply(this,arguments);var b=this.get("expressInstall"),h,e;e=this.get("params");var c=this.get("attrs"),g=this.get("document"),j=d.create("<span>",o,g),m=this.get("elBefore"),t=this.get("src"),u=this.get("version");h=c.id=c.id||i.guid("ks-swf-");if(v()){if(u&&!w(u)&&(this.set("status",f.STATUS.TOO_LOW),b)){t=b;if(!("width"in c)||!/%$/.test(c.width)&&310>parseInt(c.width,10))c.width="310";if(!("height"in c)||!/%$/.test(c.height)&&
137>parseInt(c.height,10))c.height="137";b=e.flashVars=e.flashVars||{};i.mix(b,{MMredirectURL:location.toString,MMplayerType:p.ie?"ActiveX":"PlugIn",MMdoctitle:g.title.slice(0,47)+" - Flash Player Installation"})}this.set("html",e=q(t,c,e));m?d.insertBefore(j,m):d.append(j,this.get("render"));"outerHTML"in j?j.outerHTML=e:j.parentNode.replaceChild(j,d.create(e));h=d.get("#"+h,g);this.set("swfObject",h);p.ie?this.set("swfObject",h):this.set("swfObject",h.parentNode);this.set("el",h);this.get("status")||
this.set("status",f.STATUS.SUCCESS)}else this.set("status",f.STATUS.NOT_INSTALLED)}function q(a,b,h){var e,d=c,f=c,k=c,l=c;i.each(b,function(a,b){var h=m(b,a);k+=h;"id"!=b&&"style"!=b&&(l+=h)});p.ie?(e=l,b=k):(b=l,e=k);e+=m("src",a);e+=m("type",z);i.each(h,function(a,b){b=b.toLowerCase();if(b in A){d=d+m(b,a);f=f+g(b,a)}else if(b==B){d=d+m(b,j(a));f=f+g(b,j(a))}});h=r+C+e+d+"/"+s;b+=m("classid",D);f+=g("movie",a);return r+x+b+s+f+h+r+"/"+x+s}function j(a){var b=[];i.each(a,function(a,e){"string"!=
typeof a&&(a=l.stringify(a));a&&b.push(e+"="+E(a))});return b.join("&")}function g(a,b){return'<param name="'+a+'" value="'+b+'"></param>'}function m(a,b){return F+a+G+y+b+y}var p=i.UA,z="application/x-shockwave-flash",D="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",B="flashvars",c="",F=" ",G="=",y='"',r="<",s=">",H=i.Env.host.document,v=k.fpv,w=k.fpvGEQ,C="embed",x="object",E=encodeURIComponent,A={wmode:c,allowscriptaccess:c,allownetworking:c,allowfullscreen:c,play:"false",loop:c,menu:c,quality:c,
scale:c,salign:c,bgcolor:c,devicefont:c,hasPriority:c,base:c,swliveconnect:c,seamlesstabbing:c};i.extend(f,n,{callSWF:function(a,b){var c=this.get("el"),e,b=b||[];try{c[a]&&(e=c[a].apply(c,b))}catch(d){e="",0!==b.length&&(e="'"+b.join("', '")+"'"),e=(new Function("swf","return swf."+a+"("+e+");"))(c)}return e},destroy:function(){this.detach();var a=this.get("swfObject");p.ie?(a.style.display="none",function(){if(4==a.readyState){for(var b in a)"function"==typeof a[b]&&(a[b]=null);a.parentNode.removeChild(a)}else setTimeout(arguments.callee,
10)}()):a.parentNode.removeChild(a)}},{ATTRS:{expressInstall:{value:i.config("base")+"swf/assets/expressInstall.swf"},src:{},version:{value:"9"},params:{value:{}},attrs:{value:{}},render:{setter:function(a){"string"==typeof a&&(a=d.get(a,this.get("document")));return a},valueFn:function(){return document.body}},elBefore:{setter:function(a){"string"==typeof a&&(a=d.get(a,this.get("document")));return a}},document:{value:H},status:{},el:{},swfObject:{},html:{}},fpv:v,fpvGEQ:w});f.getSrc=function(a){var b=
a=d.get(a),c="",e,a=[],c=d.nodeName(b);if("object"==c){(c=d.attr(b,"data"))&&a.push(b);b=b.childNodes;for(c=0;c<b.length;c++)e=b[c],1==e.nodeType&&("movie"==(d.attr(e,"name")||"").toLowerCase()?a.push(e):"embed"==d.nodeName(e)?a.push(e):"object"==d.nodeName(b[c])&&a.push(e))}else"embed"==c&&a.push(b);b=(a=a[0])&&d.nodeName(a);return"embed"==b?d.attr(a,"src"):"object"==b?d.attr(a,"data"):"param"==b?d.attr(a,"value"):null};f.STATUS={TOO_LOW:"flash version is too low",NOT_INSTALLED:"flash is not installed",
SUCCESS:"success"};return f},{requires:["dom","json","base","swf/ua"]});
KISSY.add("swf/ua",function(i,d){function l(d){var g="string"==typeof d?d.match(/\d+/g).splice(0,3):d;i.isArray(g)&&(d=parseFloat(g[0]+"."+n(g[1],3)+n(g[2],5)));return d||0}function n(d,g){var d=(d||0)+"",f=g+1-d.length;return Array(0<f?f:0).join("0")+d}function k(j){if(j||f){f=!1;var g;if(navigator.plugins&&navigator.mimeTypes.length)g=(navigator.plugins["Shockwave Flash"]||0).description;else if(q.ActiveXObject)try{g=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(i){}o=!g?
d:g.match(/\d+/g).splice(0,3)}return o}var o,f=!0,q=i.Env.host;return{fpv:k,fpvGEQ:function(d,f){return l(k(f))>=l(d)}}});