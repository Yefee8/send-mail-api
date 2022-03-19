(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],m=0,f=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2f5c":function(t,e,n){},"38e7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css",integrity:"sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}}),n("header",[n("h1",{staticStyle:{"margin-left":"2.5%"}},[n("router-link",{staticStyle:{color:"#f1f1f1","text-decoration":"none"},attrs:{to:"/"}},[t._v("Send-Mail-API ")])],1),n("h3",[n("router-link",{staticClass:"link",attrs:{to:"/documentation"}},[t._v("Documentation")])],1),t._m(0)]),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticStyle:{"margin-right":"2.5%"}},[n("a",{staticClass:"link",staticStyle:{"font-size":"22px"},attrs:{href:"https://github.com/Yefee8/send-mail-api",target:"_blank"}},[n("i",{staticClass:"fa-brands fa-github"})])])}],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,i,o,!1,null,null,null),l=c.exports,u=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("Send mails "),n("span",{style:{transition:"500ms",opacity:t.opacity,color:"crimson"}},[t._v(t._s(t.text))]),t._v("!")]),n("router-link",{attrs:{to:"/documentation"}},[n("DarkButton",{staticStyle:{padding:"12px","margin-top":"10%","font-size":"22px"},attrs:{border:!0,fill:!0,value:"Get Started"}})],1)],1)},f=[],p=n("e953"),d={name:"Home",data(){return{texts:["easily","dynamical","with Send-Mail-API"],text:"easily",count:0,opacity:1}},components:{DarkButton:p["a"]},created(){setInterval(()=>{2===this.count?this.count=0:this.count++,this.opacity=0,setTimeout(()=>{this.opacity=1,this.text=this.texts[this.count]},501)},2500)}},h=d,v=(n("ee03"),Object(a["a"])(h,m,f,!1,null,"d13800de",null)),_=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"doc"}},[n("IndigoListLink",{staticStyle:{"font-size":"15px",position:"absolute",top:"25px",left:"25px"},attrs:{title:"Parts",list:t.list}}),n("h1",[t._v("Documentation!")]),n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"start"}},[n("h1",[t._v("Get started")]),t._m(0),n("div",{staticClass:"code"},[n("code",{staticStyle:{"margin-top":"7.5%"}},[t._v(" "+t._s(t.code1)+" ")])])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(" For getting started, you might be create an http request. "),n("br"),t._v(" For example (HTTP): "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"from"}},[n("h1",[t._v("From")]),n("div",{staticClass:"code"},[t._v(" from param is sender's gmail, if you don't want to use you're own mail, don't use this. "),n("br"),t._v(" (from must be string and gmail.) ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"pass"}},[n("h1",[t._v("Pass")]),n("div",{staticClass:"code"},[t._v(" pass param is sender's password(don't worry we don't use this :D), if you don't use from param, don't use that too. "),n("br"),t._v(" (pass must be string) ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"to"}},[n("h1",[t._v("To")]),n("div",{staticClass:"code"},[t._v(" to param is e-mail of the person receiving the e-mail. "),n("br"),t._v(" (to must be string.) ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"title"}},[n("h1",[t._v("Title")]),n("div",{staticClass:"code"},[t._v(" title param is subject of mail. "),n("br"),t._v(" (title must be string) ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"15%"},attrs:{id:"html"}},[n("h1",[t._v("Html")]),n("div",{staticClass:"code"},[t._v(" html param is html of mail( you can write html or just text) "),n("br"),t._v(" (html must be string) ")])])}],g=n("f247"),x={name:"Documentation",components:{IndigoListLink:g["a"]},data(){return{list:[{content:"Example",link:"#start"},{content:"From",link:"#from"},{content:"Pass",link:"#pass"},{content:"To",link:"#to"},{content:"Title",link:"#title"},{content:"Html",link:"#html"}],code1:'   POST / HTTP/1.1 Host: yefee-send-mail-api.herokuapp.com Content-Type: application/json Cache-Control: no-cache {  "to":"findikliyavuzefe@gmail.com", "title": "Hi!", "html": "<h1 style=\'font-size:300px; color:crimson;\'>heeei!</h1>"}\n'}}},w=x,S=(n("89cb"),Object(a["a"])(w,y,b,!1,null,"8d70e626",null)),k=S.exports;r["a"].use(u["a"]);const j=[{path:"/",name:"Home",component:_},{path:"/documentation",name:"Documentation",component:k}],C=new u["a"]({mode:"history",base:"/",routes:j});var O=C;r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},"89cb":function(t,e,n){"use strict";n("38e7")},ee03:function(t,e,n){"use strict";n("2f5c")}});
//# sourceMappingURL=app.27f8ad52.js.map