(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["taskList"],{3418:function(e,t,a){},"4cd3":function(e,t,a){"use strict";a("f754")},"7a80":function(e,t,a){"use strict";a("3418")},a434:function(e,t,a){"use strict";var n=a("23e7"),i=a("da84"),s=a("23cb"),c=a("5926"),l=a("07fa"),o=a("7b0b"),r=a("65f0"),u=a("8418"),d=a("1dde"),v=d("splice"),f=i.TypeError,k=Math.max,O=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!v},{splice:function(e,t){var a,n,i,d,v,h,m=o(this),j=l(m),p=s(e,j),T=arguments.length;if(0===T?a=n=0:1===T?(a=0,n=j-p):(a=T-2,n=O(k(c(t),0),j-p)),j+a-n>b)throw f(g);for(i=r(m,n),d=0;d<n;d++)v=p+d,v in m&&u(i,d,m[v]);if(i.length=n,a<n){for(d=p;d<j-n;d++)v=d+n,h=d+a,v in m?m[h]=m[v]:delete m[h];for(d=j;d>j-n+a;d--)delete m[d-1]}else if(a>n)for(d=j-n;d>p;d--)v=d+n-1,h=d+a-1,v in m?m[h]=m[v]:delete m[h];for(d=0;d<a;d++)m[d+p]=arguments[d+2];return m.length=j-n+a,i}})},bb03:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),i={class:"Lk"},s=Object(n["g"])("h1",{class:"HeaderPage"},"Задачи",-1),c={class:"Lk-Actions"},l=Object(n["g"])("span",{class:"icon icon-plus"},null,-1),o=Object(n["g"])("span",null,"Новая задача",-1),r=[l,o],u=Object(n["g"])("span",{class:"icon icon-inbox"},null,-1),d=Object(n["g"])("span",null,"Архивные задачи",-1),v=[u,d],f=Object(n["g"])("span",{class:"icon icon-inbox"},null,-1),k=Object(n["g"])("span",null,"Текущие задачи",-1),O=[f,k],b={class:"Lk-Tasks"},g={key:0},h={key:1},m=Object(n["g"])("span",{class:"icon icon-x"},null,-1),j=Object(n["h"])(" Очистить список архивных задач "),p=[m,j];function T(e,t,a,l,o,u){var d=Object(n["D"])("one-task"),f=Object(n["D"])("form-create-task"),k=Object(n["D"])("form-edit");return Object(n["v"])(),Object(n["f"])("div",i,[s,Object(n["g"])("div",c,[Object(n["g"])("div",{class:"Lk-NewTask",onClick:t[0]||(t[0]=function(){return l.newTask&&l.newTask.apply(l,arguments)})},r),"main"===l.taskFlag?(Object(n["v"])(),Object(n["f"])("div",{key:0,class:"Lk-NewTask",onClick:t[1]||(t[1]=function(){return l.getArchivedTask&&l.getArchivedTask.apply(l,arguments)})},v)):(Object(n["v"])(),Object(n["f"])("div",{key:1,class:"Lk-NewTask",onClick:t[2]||(t[2]=function(){return l.getMainTask&&l.getMainTask.apply(l,arguments)})},O))]),Object(n["g"])("div",b,[l.taskLists.length||"main"!==l.taskFlag?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("p",g," У вас еще нет активных задач. ")),l.taskLists.length||"archive"!==l.taskFlag?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("p",h," Архив задач пуст ")),(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(l.taskLists,(function(e){return Object(n["v"])(),Object(n["d"])(d,{key:e._id,task:e,onEditTask:l.editOneTask,onArchivedTask:l.archivedOneTask,onFinishedTask:l.finishedOneTask,onChangeStatus:l.changeStatusOneTask},null,8,["task","onEditTask","onArchivedTask","onFinishedTask","onChangeStatus"])})),128))]),"archive"===l.taskFlag&&l.taskLists.length?(Object(n["v"])(),Object(n["f"])("span",{key:0,class:"Lk-NewTask",onClick:t[3]||(t[3]=function(){return l.clearArchive&&l.clearArchive.apply(l,arguments)})},p)):Object(n["e"])("",!0),Object(n["i"])(f,{ref:"createTaskForm",onNewTask:l.newTaskSave},null,8,["onNewTask"]),Object(n["i"])(k,{ref:"editTaskForm","data-in-form":l.editData,onSaveEditData:l.saveAfterEdit},null,8,["data-in-form","onSaveEditData"])])}a("a4d3"),a("e01a");var F={class:"OneTask-ActionsButtons"},S={class:"OneTask-Header"},y=["value","disabled"],N=["value"],w={class:"OneTask-Name"},D={class:"OneTask-NameValue"},A={class:"OneTask-Description"},G=Object(n["g"])("span",{class:"OneTask-NameHead"},[Object(n["g"])("b",null,"Описание"),Object(n["h"])(": ")],-1),J={class:"OneTask-NameValue"},C={class:"OneTask-Dates"},E={class:"OneTask-DateCreate"},L=Object(n["g"])("span",{class:"OneTask-NameHead"},[Object(n["g"])("b",null,"Дата создания"),Object(n["h"])(": ")],-1),_={class:"OneTask-DateFinish"},x=Object(n["g"])("span",{class:"OneTask-NameHead"},[Object(n["g"])("b",null,"Дата окончания"),Object(n["h"])(": ")],-1);function U(e,t,a,i,s,c){return Object(n["v"])(),Object(n["f"])("div",{class:Object(n["o"])(["OneTask","OneTask__".concat(i.status)])},[Object(n["g"])("div",F,[Object(n["g"])("div",S,[Object(n["g"])("select",{onChange:t[0]||(t[0]=function(e){return i.changeStatusesTask(e,a.task._id)}),class:"OneTask-StatusWork",value:a.task.status.val,disabled:a.task.finish.val},[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(e.$store.state.statuses,(function(e,t){return Object(n["v"])(),Object(n["f"])("option",{key:t,value:t},Object(n["F"])(e),9,N)})),128))],40,y),Object(n["g"])("p",w,[Object(n["g"])("span",D,[Object(n["g"])("b",null,Object(n["F"])(a.task.nameTask.val),1)])])]),Object(n["g"])("div",null,[a.task.finish.val?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("span",{key:0,class:"OneTask-ActionButton icon icon-edit",onClick:t[1]||(t[1]=function(e){return i.editTask(a.task._id)})})),!a.task.archive.val&&a.task.finish.val?(Object(n["v"])(),Object(n["f"])("span",{key:1,class:"OneTask-ActionButton icon icon-inbox",onClick:t[2]||(t[2]=function(e){return i.archivedTask(a.task._id)})})):Object(n["e"])("",!0),a.task.finish.val?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("span",{key:2,class:"OneTask-ActionButton icon icon-check",onClick:t[3]||(t[3]=function(e){return i.finishedTask(a.task._id)})}))])]),Object(n["g"])("p",A,[G,Object(n["g"])("span",J,Object(n["F"])(a.task.description.val),1)]),Object(n["g"])("div",C,[Object(n["g"])("p",E,[L,Object(n["h"])(" "+Object(n["F"])(i.FormattingDate(a.task.dateCreate.val)),1)]),Object(n["g"])("p",_,[x,Object(n["h"])(" "+Object(n["F"])(i.FormattingDate(a.task.dateFinish.val)),1)])])],2)}var V=a("844a"),M={name:"one-task",props:{task:{type:Object}},setup:function(e,t){var a=t.emit,i=Object(n["b"])((function(){if(e.task.archive.val)return"Archive";if(e.task.finish.val)return"Finished";var t=String(new Date(e.task.dateFinish.val).getDate())+String(new Date(e.task.dateFinish.val).getMonth())+String(new Date(e.task.dateFinish.val).getFullYear()),a=String((new Date).getDate())+String((new Date).getMonth())+String((new Date).getFullYear());return console.log(e.task.nameTask.val),console.log(t,a,t===a),t<a?"Time":t>a?"InTime":"InNow"})),s=function(e,t){a("ChangeStatus",{id:t,val:e.target.value})},c=function(e){a("editTask",e)},l=function(e){a("archivedTask",e)},o=function(e){a("finishedTask",e)};return{changeStatusesTask:s,FormattingDate:V["FormattingDate"],editTask:c,archivedTask:l,finishedTask:o,status:i}}},B=(a("d5c0"),a("6b0d")),I=a.n(B);const H=I()(M,[["render",U]]);var Y=H,P={key:0,class:"FormEdit"},W={class:"FormEdit-Content"},$=Object(n["g"])("h2",{class:"FormEdit-Header"},"Редактирование задачи",-1),q={class:"FormEdit-Buttons"};function z(e,t,a,i,s,c){var l=Object(n["D"])("yuv-input"),o=Object(n["D"])("yuv-textarea"),r=Object(n["D"])("yuv-button");return i.show?(Object(n["v"])(),Object(n["f"])("div",P,[Object(n["g"])("div",W,[$,Object(n["i"])(l,{id:"nameTask",label:"Имя задачи",modelValue:i.dataForForm.nameTask.val,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.dataForForm.nameTask.val=e}),"err-message":"Не может быть пустым"},null,8,["modelValue"]),Object(n["i"])(l,{class:"FormEdit-Input",id:"dateFinish",type:"date",label:"Дата окончания",modelValue:i.dataForForm.dateFinish.val,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.dataForForm.dateFinish.val=e})},null,8,["modelValue"]),Object(n["i"])(o,{class:"FormEdit-Input",id:"description",label:"Описание",modelValue:i.dataForForm.description.val,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.dataForForm.description.val=e})},null,8,["modelValue"]),Object(n["g"])("div",q,[Object(n["i"])(r,{label:"Сохранить",fun:i.save},null,8,["fun"]),Object(n["i"])(r,{label:"Отменить",fun:i.cansel},null,8,["fun"])])])])):Object(n["e"])("",!0)}a("e9c4");var K={name:"form-edit",props:["dataInForm"],setup:function(e,t){var a=t.emit,i=Object(n["A"])(!1),s=function(){i.value=!0},c=function(){i.value=!1},l=Object(n["A"])({nameTask:{val:""},dateFinish:{val:""},description:{val:""}});Object(n["J"])((function(){return e.dataInForm}),(function(e){e.dateFinish.val=Object(V["InputDate"])(e.dateFinish.val),l.value=e}));var o=function(){a("saveEditData",JSON.parse(JSON.stringify(l.value)))},r=function(){c()};return{dataForForm:l,show:i,onOpen:s,onClose:c,save:o,cansel:r}}};a("4cd3");const Q=I()(K,[["render",z]]);var R=Q,X=(a("b0c0"),a("d3b7"),a("5502"));function Z(e){var t=Object(X["b"])(),a=Object(n["A"])(null),i=function(){a.value.onOpen()},s=function(a){var n={nameTask:{type:"text",val:a.name},dateCreate:{type:"date",val:new Date(a.dateCreate)},dateFinish:{type:"date",val:new Date(a.dateFinish)},finish:{type:"checkbox",val:!1},archive:{type:"checkbox",val:!1},description:{type:"textarea",val:a.description},status:{type:"select",val:"appointed"}},i={listName:t.getters.GetUserName,task:n};t.commit("SetGloaderFlag",!0),t.dispatch("apiAddTask",i).then((function(t){e.value.push(t)})).finally((function(){t.commit("SetGloaderFlag",!1)}))};return{createTaskForm:a,newTask:i,newTaskSave:s}}function ee(){var e=Object(X["b"])(),t=Object(n["A"])("main"),a=Object(n["A"])([]),i=function(){t.value="main",e.commit("SetGloaderFlag",!0),e.dispatch("apiGetList",{listName:e.getters.GetUserName}).then((function(t){a.value=JSON.parse(JSON.stringify(t.payload)),e.dispatch("apiGetStatuses").then((function(){})).finally((function(){e.commit("SetGloaderFlag",!1)}))}))},s=function(){t.value="archive",e.commit("SetGloaderFlag",!0),e.dispatch("apiGetArchiveList",{listName:e.getters.GetUserName}).then((function(e){a.value=JSON.parse(JSON.stringify(e.payload))})).finally((function(){e.commit("SetGloaderFlag",!1)}))};return Object(n["t"])((function(){i()})),{taskFlag:t,taskLists:a,getMainTask:i,getArchivedTask:s}}function te(e){var t=Object(X["b"])(),a=Object(n["A"])(null),i=Object(n["A"])(""),s=function(t){console.log("edit",t);for(var n=0;n<e.value.length;n++)if(e.value[n]._id===t){i.value=JSON.parse(JSON.stringify(e.value[n]));break}a.value.onOpen()},c=function(n){n.dateCreate.val=new Date(n.dateCreate.val),n.dateFinish.val=new Date(n.dateFinish.val),t.commit("SetGloaderFlag",!0),t.dispatch("apiEditTask",{listName:t.getters.GetUserName,task:n}).then((function(i){t.commit("SetNotification",{header:"Успех",body:i.payload,flag:!0,status:"success",duration:5e3});for(var s=0;s<e.value.length;s++)e.value[s]._id===n._id&&(e.value[s]=n);a.value.onClose()})).catch((function(){t.commit("SetNotification",{header:"Ошибка",body:"Не удалось обновить задачу. Попробуйте позже",flag:!0,status:"error",duration:5e3})})).finally((function(){t.commit("SetGloaderFlag",!1)}))},l=function(a){t.commit("SetGloaderFlag",!0);for(var n={},i={},s=0,c=0;c<e.value.length;c++)if(e.value[c]._id===a.id){n=JSON.parse(JSON.stringify(e.value[c])),i=JSON.parse(JSON.stringify(e.value[c])),s=c,n.status.val=a.val;break}t.dispatch("apiEditTask",{listName:t.getters.GetUserName,task:n}).then((function(a){t.commit("SetNotification",{header:"Успех",body:a.payload,flag:!0,status:"success",duration:5e3}),e.value[s]=JSON.parse(JSON.stringify(n))})).catch((function(){e.value[s]=JSON.parse(JSON.stringify(i))})).finally((function(){t.commit("SetGloaderFlag",!1)}))};return{editTaskForm:a,editData:i,editOneTask:s,saveAfterEdit:c,changeStatusOneTask:l}}a("a434");function ae(e){var t=Object(X["b"])(),a=function(a){console.log("archived",a);for(var n="",i=0;i<e.value.length;i++)if(e.value[i]._id===a){n=JSON.parse(JSON.stringify(e.value[i]));break}n.archive.val=!0,t.commit("SetGloaderFlag",!0),t.dispatch("apiEditTask",{listName:t.getters.GetUserName,task:n}).then((function(){t.commit("SetNotification",{header:"Успех",body:"Задача успешно отправлена в архив",flag:!0,status:"success",duration:5e3});for(var n=0;n<e.value.length;n++)if(e.value[n]._id===a){e.value[n].archive.val=!0,e.value.splice(n,1);break}})).catch((function(){t.commit("SetNotification",{header:"Ошибка",body:"Не удалось отправить задачу в архив. Попробуйте позже",flag:!0,status:"error",duration:5e3})})).finally((function(){t.commit("SetGloaderFlag",!1)}))},n=function(){t.commit("SetGloaderFlag",!0),t.dispatch("apiClearArchive",{listName:t.getters.GetUserName}).then((function(a){t.commit("SetNotification",{header:"Успех",body:a.message,flag:!0,status:"success",duration:5e3}),e.value=[]})).catch((function(){t.commit("SetNotification",{header:"Ошибка",body:"Не удалось очистить архивные задачи. Попробуйте позже",flag:!0,status:"error",duration:5e3})})).finally((function(){t.commit("SetGloaderFlag",!1)}))};return{archivedOneTask:a,clearArchive:n}}function ne(e){var t=Object(X["b"])(),a=function(a){console.log("finished",a);for(var n="",i=0;i<e.value.length;i++)if(e.value[i]._id===a){n=JSON.parse(JSON.stringify(e.value[i]));break}n.finish.val=!0,t.commit("SetGloaderFlag",!0),t.dispatch("apiEditTask",{listName:t.getters.GetUserName,task:n}).then((function(){t.commit("SetNotification",{header:"Успех",body:"Задача завершена",flag:!0,status:"success",duration:5e3});for(var n=0;n<e.value.length;n++)if(e.value[n]._id===a){e.value[n].finish.val=!0;break}})).catch((function(){t.commit("SetNotification",{header:"Ошибка",body:"Не удалось завершить задачу. Попробуйте позже",flag:!0,status:"error",duration:5e3})})).finally((function(){t.commit("SetGloaderFlag",!1)}))};return{finishedOneTask:a}}var ie={name:"lk",components:{OneTask:Y,FormEdit:R},setup:function(){var e=ee(),t=e.taskFlag,a=e.taskLists,n=e.getArchivedTask,i=e.getMainTask,s=Z(a),c=s.createTaskForm,l=s.newTask,o=s.newTaskSave,r=te(a),u=r.editTaskForm,d=r.editData,v=r.changeStatusOneTask,f=r.editOneTask,k=r.saveAfterEdit,O=ae(a),b=O.archivedOneTask,g=O.clearArchive,h=ne(a),m=h.finishedOneTask;return{getMainTask:i,createTaskForm:c,editTaskForm:u,taskFlag:t,taskLists:a,editData:d,newTask:l,newTaskSave:o,editOneTask:f,saveAfterEdit:k,archivedOneTask:b,finishedOneTask:m,changeStatusOneTask:v,getArchivedTask:n,clearArchive:g}}};a("7a80");const se=I()(ie,[["render",T]]);t["default"]=se},d5c0:function(e,t,a){"use strict";a("fe84")},f754:function(e,t,a){},fe84:function(e,t,a){}}]);
//# sourceMappingURL=taskList.js.map