(function(e){function t(t){for(var a,o,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},u=[];function c(e){return i.p+"js/"+({home:"home",job:"job",main:"main",todo:"todo"}[e]||e)+"."+{"chunk-3211a07a":"67fd32e0","chunk-3b61c0d2":"79eb0bf4",home:"0a74f5a4",job:"ec4c2c6c",main:"0f2ea775",todo:"c97e29e4","chunk-2d0bceb2":"f80bb63a","chunk-748b0520":"2e89dabd","chunk-1e7ceb96":"2a073d04"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3211a07a":1,"chunk-3b61c0d2":1,main:1,todo:1,"chunk-748b0520":1,"chunk-1e7ceb96":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({home:"home",job:"job",main:"main",todo:"todo"}[e]||e)+"."+{"chunk-3211a07a":"930f8ba0","chunk-3b61c0d2":"ff8825b7",home:"31d6cfe0",job:"31d6cfe0",main:"5580c0c2",todo:"3665d683","chunk-2d0bceb2":"31d6cfe0","chunk-748b0520":"8957e0d9","chunk-1e7ceb96":"2bb7fa3e"}[e]+".css",r=i.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Home",attrs:{id:"app"}},[n("Header",{staticClass:"Home-Header"}),n("router-view",{staticClass:"Home-Content"}),n("Footer",{staticClass:"Home-Footer"}),n("loader-component")],1)},r=[],u=(n("d3b7"),{name:"Home",components:{Header:function(){return n.e("chunk-3b61c0d2").then(n.bind(null,"0418"))},Footer:function(){return n.e("chunk-3211a07a").then(n.bind(null,"fd2d"))}}}),c=u,i=(n("7faf"),n("0c7c")),s=Object(i["a"])(c,o,r,!1,null,null,null),l=s.exports,d=n("8c4f");a["a"].use(d["a"]);var f=[{path:"/",name:"Main",component:function(){return n.e("main").then(n.bind(null,"cd56"))}},{path:"/home",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},redirect:"/todo",children:[{path:"/todo",name:"todo",component:function(){return n.e("todo").then(n.bind(null,"3666"))}},{path:"/job",name:"job",component:function(){return n.e("job").then(n.bind(null,"0c0e"))}}]}],h=new d["a"]({routes:f}),p=h,m=n("2f62"),b=n("bc3a"),g=n.n(b);a["a"].use(m["a"]);var v=new m["a"].Store({state:{loader:!1},getters:{getLoaderFlag:function(e){return e.loader}},mutations:{setLoaderFlag:function(e,t){e.loader=t}},actions:{getData:function(e,t){return g()({method:"GET",params:t,url:"https://limitless-headland-64818.herokuapp.com/loadDocuments",headers:{"Content-Type":"application/json; charset=utf-8","Accept-Language":"ru-RU"}}).then((function(e){return e}))},loginAction:function(e,t){return g()({method:"GET",url:"https://limitless-headland-64818.herokuapp.com/login",params:t,headers:{"Content-Type":"application/json; charset=utf-8","Accept-Language":"ru-RU"}}).then((function(e){return e}))},registrationAction:function(e,t){return g()({method:"POST",url:"https://limitless-headland-64818.herokuapp.com/registration",data:t,headers:{"Content-Type":"application/json; charset=utf-8","Accept-Language":"ru-RU"}}).then((function(e){return e}))},deleteTask:function(e,t){return g()({method:"POST",url:"https://limitless-headland-64818.herokuapp.com/deleteTask",data:t,headers:{"Content-Type":"application/json; charset=utf-8","Accept-Language":"ru-RU"}}).then((function(e){return e}))}},modules:{}}),k=(n("ac1f"),n("466d"),{install:function(e){console.log("Validation plugin start"),e.prototype.$NewValid=function(e){var t={status:!0,text:""};switch(e.type){case"login":e.data.length>5&&e.data.match(/[A-я]/g)?(t.status=!0,t.text="Валидация пройдена"):(t.status=!1,t.text="Длинна от 6 символов и только латиница");break;case"email":e.data.length>=7&&e.data.length<=64&&e.data.match(/.+@.+\..+/i)?(t.status=!0,t.text="Валидация пройдена"):(t.status=!1,t.text="Введенные данные не являются E-mail");break;case"password":e.data.length>=8&&e.data.length<=64&&e.data.match(/\d/g)&&e.data.match(/[A-Z]/g)&&e.data.match(/[a-z]/g)?(t.status=!0,t.text="Валидация пройдена"):(t.status=!1,t.text="Длинна от 8 символов, цифра, большая и маленькая буква");break;case"repPassword":e.data.pass===e.data.repPass?(t.status=!0,t.text="Пароли совпадают"):(t.status=!1,t.text="Пароли не совпадают");break}return t}}}),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.flagShowLoader?a("div",{staticClass:"MainLoader"},[a("img",{staticClass:"Loader",attrs:{src:n("6e70"),alt:""}})]):e._e()},j=[],w={computed:{flagShowLoader:function(){return this.$store.getters.getLoaderFlag}}},x=w,C=(n("d758"),Object(i["a"])(x,y,j,!1,null,null,null)),T=C.exports,L={install:function(e,t){e.component("loader-component",T)}};a["a"].config.productionTip=!1,a["a"].use(L),a["a"].use(k),new a["a"]({router:p,store:v,render:function(e){return e(l)}}).$mount("#app")},"6e70":function(e,t,n){e.exports=n.p+"img/loader.3c78ee87.svg"},"6f64":function(e,t,n){},"7faf":function(e,t,n){"use strict";n("6f64")},ad66:function(e,t,n){},d758:function(e,t,n){"use strict";n("ad66")}});
//# sourceMappingURL=app.51b6d6d3.js.map