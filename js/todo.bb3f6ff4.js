(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["todo"],{"1dde":function(t,e,n){var a=n("d039"),o=n("b622"),r=n("2d00"),s=o("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3666:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("menu",{staticClass:"Content-Menu"},[n("p",{on:{click:function(e){return t.changeFlagCreateTask(!0)}}},[t._v("Создать задачу")]),n("p",[t._v("Архив задач")]),n("p",[t._v("Выход")])]),n("div",{staticClass:"Content-Tasks"},t._l(t.dataForComponent,(function(e){return n("OneTask",{key:e.id,staticClass:"Home-OneTask",attrs:{data:e},on:{changeStatus:t.changeT,editTask:t.editT,deleteTask:t.deleteT,arhiveTask:t.arhiveT}})})),1),n("CreateTask",{attrs:{flagShow:t.flagCreateTask},on:{closeWindow:t.changeFlagCreateTask,saveTask:t.createNewTask}})],1)},o=[],r=(n("4de4"),n("d3b7"),{name:"Home",data:function(){return{dataForComponent:[],flagCreateTask:!1}},components:{OneTask:function(){return n.e("chunk-1e7ceb96").then(n.bind(null,"30e3"))},CreateTask:function(){return n.e("chunk-4995434a").then(n.bind(null,"80dd"))}},methods:{changeFlagCreateTask:function(t){this.flagCreateTask=t},createNewTask:function(t){var e=this;this.$store.commit("setLoaderFlag",!0);var n={user:localStorage.getItem("user"),task:t};this.$store.dispatch("createTask",n).then((function(t){200===t.data.status&&(e.flagCreateTask=!1,e.getData())})).catch((function(){}))},changeT:function(t){var e=this;this.$store.commit("setLoaderFlag",!0);for(var n=function(n){e.dataForComponent[n]._id===t.target.id&&e.$store.dispatch("endTask",{user:localStorage.getItem("user"),id:t.target.id}).then((function(t){console.log(t),200===t.data.status&&(e.dataForComponent[n].completeStatus=!0)})).finally((function(){e.$store.commit("setLoaderFlag",!1)}))},a=0;a<this.dataForComponent.length;a++)n(a)},editT:function(t){console.log("Edit task",t)},deleteT:function(t){var e=this;this.$store.commit("setLoaderFlag",!0),this.$store.dispatch("deleteTask",{id:t,user:localStorage.getItem("user")}).then((function(n){200===n.data.status?e.dataForComponent=e.dataForComponent.filter((function(e){return e._id!==t})):console.log("не удалось")})).catch((function(){console.log("Не удалось")})).finally((function(){e.$store.commit("setLoaderFlag",!1)}))},arhiveT:function(t){console.log(t)},getData:function(){var t=this;this.$store.dispatch("getData",{collection:localStorage.getItem("user")}).then((function(e){console.log(e),t.dataForComponent=e.data.data})).finally((function(){t.$store.commit("setLoaderFlag",!1)}))}},mounted:function(){this.$store.commit("setLoaderFlag",!0),this.getData()}}),s=r,i=(n("70dd"),n("0c7c")),c=Object(i["a"])(s,a,o,!1,null,null,null);e["default"]=c.exports},"4de4":function(t,e,n){"use strict";var a=n("23e7"),o=n("b727").filter,r=n("1dde"),s=n("ae40"),i=r("filter"),c=s("filter");a({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var a=n("861d"),o=n("e8b5"),r=n("b622"),s=r("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"70dd":function(t,e,n){"use strict";n("d1c8")},ae40:function(t,e,n){var a=n("83ab"),o=n("d039"),r=n("5135"),s=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return i[t]=!!n&&!o((function(){if(u&&!a)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,d)}))}},b727:function(t,e,n){var a=n("0366"),o=n("44ad"),r=n("7b0b"),s=n("50c4"),i=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(h,g,m,p){for(var v,k,T=r(h),C=o(T),b=a(g,m,3),F=s(C.length),y=0,w=p||i,S=e?w(h,F):n?w(h,0):void 0;F>y;y++)if((f||y in C)&&(v=C[y],k=b(v,y,T),t))if(e)S[y]=k;else if(k)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:c.call(S,v)}else if(l)return!1;return d?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d1c8:function(t,e,n){},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=todo.bb3f6ff4.js.map