(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["todo"],{"1dde":function(t,e,a){var n=a("d039"),o=a("b622"),r=a("2d00"),s=o("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3666:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Content"},[a("menu",{staticClass:"Content-Menu"},[a("p",{on:{click:function(e){return t.changeFlagCreateTask(!0)}}},[t._v("Создать задачу")]),a("p",[t._v("Архив задач")]),a("p",[t._v("Выход")])]),a("div",{staticClass:"Content-Tasks"},t._l(t.dataForComponent,(function(e){return a("OneTask",{key:e.id,staticClass:"Home-OneTask",attrs:{data:e},on:{changeStatus:t.changeT,editTask:t.editT,deleteTask:t.deleteT,arhiveTask:t.arhiveT}})})),1),a("CreateTask",{attrs:{flagShow:t.flagCreateTask},on:{closeWindow:t.changeFlagCreateTask,saveTask:t.createNewTask}}),a("EditTask",{attrs:{flagShow:t.flagEditTask,task:t.taskForChange},on:{closeWindow:t.changeFlagEditTask,saveTask:t.editTaskSave}})],1)},o=[],r=(a("4de4"),a("d3b7"),{name:"Home",data:function(){return{dataForComponent:[],flagCreateTask:!1,flagEditTask:!1,taskForChange:{}}},components:{OneTask:function(){return a.e("chunk-1e7ceb96").then(a.bind(null,"30e3"))},CreateTask:function(){return a.e("chunk-4995434a").then(a.bind(null,"80dd"))},EditTask:function(){return a.e("chunk-427667b2").then(a.bind(null,"1ac1"))}},methods:{changeFlagCreateTask:function(t){this.flagCreateTask=t},changeFlagEditTask:function(t){this.flagEditTask=t},createNewTask:function(t){var e=this;this.$store.commit("setLoaderFlag",!0);var a={user:localStorage.getItem("user"),task:t};this.$store.dispatch("createTask",a).then((function(t){200===t.data.status&&(e.flagCreateTask=!1,e.getData())})).catch((function(){}))},changeT:function(t){var e=this;this.$store.commit("setLoaderFlag",!0);for(var a=function(a){e.dataForComponent[a]._id===t.target.id&&e.$store.dispatch("endTask",{user:localStorage.getItem("user"),id:t.target.id}).then((function(t){console.log(t),200===t.data.status&&(e.dataForComponent[a].completeStatus=!0)})).finally((function(){e.$store.commit("setLoaderFlag",!1)}))},n=0;n<this.dataForComponent.length;n++)a(n)},editT:function(t){console.log("Edit task",t),this.flagEditTask=!0;for(var e=0;e<this.dataForComponent.length;e++)this.dataForComponent[e]._id===t&&(this.taskForChange=this.dataForComponent[e])},editTaskSave:function(t){var e=this;this.$store.commit("setLoaderFlag",!0),this.$store.dispatch("updateTask",{user:localStorage.getItem("user"),taskForUpdate:t}).then((function(t){200===t.data.status&&e.getData()})).catch((function(t){})).finally((function(){e.flagEditTask=!1}))},deleteT:function(t){var e=this;this.$store.commit("setLoaderFlag",!0),this.$store.dispatch("deleteTask",{id:t,user:localStorage.getItem("user")}).then((function(a){200===a.data.status?e.dataForComponent=e.dataForComponent.filter((function(e){return e._id!==t})):console.log("не удалось")})).catch((function(){console.log("Не удалось")})).finally((function(){e.$store.commit("setLoaderFlag",!1)}))},arhiveT:function(t){console.log(t)},getData:function(){var t=this;this.$store.dispatch("getData",{collection:localStorage.getItem("user")}).then((function(e){console.log(e),t.dataForComponent=e.data.data})).finally((function(){t.$store.commit("setLoaderFlag",!1)}))}},mounted:function(){this.$store.commit("setLoaderFlag",!0),this.getData()}}),s=r,i=(a("70dd"),a("0c7c")),c=Object(i["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},"4de4":function(t,e,a){"use strict";var n=a("23e7"),o=a("b727").filter,r=a("1dde"),s=a("ae40"),i=r("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,a){var n=a("861d"),o=a("e8b5"),r=a("b622"),s=r("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"70dd":function(t,e,a){"use strict";a("d1c8")},ae40:function(t,e,a){var n=a("83ab"),o=a("d039"),r=a("5135"),s=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var a=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,d=r(e,0)?e[0]:c,l=r(e,1)?e[1]:void 0;return i[t]=!!a&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,d,l)}))}},b727:function(t,e,a){var n=a("0366"),o=a("44ad"),r=a("7b0b"),s=a("50c4"),i=a("65f0"),c=[].push,u=function(t){var e=1==t,a=2==t,u=3==t,d=4==t,l=6==t,f=5==t||l;return function(h,g,k,m){for(var p,T,v=r(h),C=o(v),F=n(g,k,3),b=s(C.length),S=0,w=m||i,y=e?w(h,b):a?w(h,0):void 0;b>S;S++)if((f||S in C)&&(p=C[S],T=F(p,S,v),t))if(e)y[S]=T;else if(T)switch(t){case 3:return!0;case 5:return p;case 6:return S;case 2:c.call(y,p)}else if(d)return!1;return l?-1:u||d?d:y}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d1c8:function(t,e,a){},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=todo.cd0f22cb.js.map