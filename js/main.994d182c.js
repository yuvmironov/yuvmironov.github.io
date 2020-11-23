(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{5091:function(s,t,e){"use strict";e("5c80")},"5c80":function(s,t,e){},cd56:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"Main"},[e("Button",{attrs:{text:s.loginButton.text,onClick:s.LoginShow}}),e("Button",{attrs:{text:s.registrationButton.text,onClick:s.RegistrationShow}}),s.flagLogin?e("div",{staticClass:"Main-Login Login"},[e("div",{staticClass:"Login-Content"},[e("p",[s._v("Логин")]),e("label",{attrs:{for:"Login"}},[s._v("Имя пользователя")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.loginForm.login,expression:"loginForm.login"}],attrs:{type:"text",id:"Login",name:"Login"},domProps:{value:s.loginForm.login},on:{keyup:s.validLogin,input:function(t){t.target.composing||s.$set(s.loginForm,"login",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.loginMessage.status,"Login-Message_Suc":s.loginMessage.status}},[s._v(s._s(s.loginMessage.text))]),e("label",{attrs:{for:"Password"}},[s._v("Пароль")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",id:"Password",name:"Password"},domProps:{value:s.loginForm.password},on:{keyup:s.validPassword,input:function(t){t.target.composing||s.$set(s.loginForm,"password",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.passMessage.status,"Login-Message_Suc":s.passMessage.status}},[s._v(s._s(s.passMessage.text))]),e("div",{staticClass:"Login-ButtonBlock"},[e("Button",{attrs:{text:s.loginButton.text,onClick:s.Login}}),e("Button",{attrs:{text:s.canselButton.text,onClick:s.LoginShow}})],1),e("ErrText",{attrs:{flagShow:s.loginErr,text:s.loginErrText}})],1)]):s._e(),s.flagRegistration?e("div",{staticClass:"Main-Registration Registration"},[e("div",{staticClass:"Registration-Content"},[e("p",[s._v("Регистрация")]),e("label",{attrs:{for:"emailR"}},[s._v("E-mail")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.registrationForm.email,expression:"registrationForm.email"}],attrs:{type:"email",id:"emailR",name:"email"},domProps:{value:s.registrationForm.email},on:{keyup:s.validEmail,input:function(t){t.target.composing||s.$set(s.registrationForm,"email",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.mailMessage.status,"Login-Message_Suc":s.mailMessage.status}},[s._v(s._s(s.mailMessage.text))]),e("label",{attrs:{for:"LoginR"}},[s._v("Имя пользователя")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.registrationForm.login,expression:"registrationForm.login"}],attrs:{type:"text",id:"LoginR",name:"Login"},domProps:{value:s.registrationForm.login},on:{keyup:s.validUserName,input:function(t){t.target.composing||s.$set(s.registrationForm,"login",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.userMessage.status,"Login-Message_Suc":s.userMessage.status}},[s._v(s._s(s.userMessage.text))]),e("label",{attrs:{for:"PasswordR"}},[s._v("Пароль")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.registrationForm.password,expression:"registrationForm.password"}],attrs:{type:"password",id:"PasswordR",name:"Password"},domProps:{value:s.registrationForm.password},on:{keyup:s.validPass,input:function(t){t.target.composing||s.$set(s.registrationForm,"password",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.passRegMess.status,"Login-Message_Suc":s.passRegMess.status}},[s._v(s._s(s.passRegMess.text))]),e("label",{attrs:{for:"RepeatePassword"}},[s._v("Пароль")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.registrationForm.repPassword,expression:"registrationForm.repPassword"}],attrs:{type:"password",id:"RepeatePassword",name:"Password"},domProps:{value:s.registrationForm.repPassword},on:{keyup:s.validRepPass,input:function(t){t.target.composing||s.$set(s.registrationForm,"repPassword",t.target.value)}}}),e("div",{staticClass:"Login-Message",class:{"Login-Message_Err":!s.passRepMess.status,"Login-Message_Suc":s.passRepMess.status}},[s._v(s._s(s.passRepMess.text))]),e("ErrText",{attrs:{flagShow:s.regError,text:s.regErrorText}}),e("div",{staticClass:"Registration-ButtonBlock"},[e("Button",{attrs:{text:s.registrationButton.text,onClick:s.Registration}}),e("Button",{attrs:{text:s.canselButton.text,onClick:s.RegistrationShow}})],1)],1)]):s._e()],1)},i=[],o=(e("d3b7"),{name:"Main",components:{Button:function(){return e.e("chunk-2d0bceb2").then(e.bind(null,"2a7d"))},ErrText:function(){return e.e("chunk-748b0520").then(e.bind(null,"e28a"))}},data:function(){return{flagLogin:!1,flagRegistration:!1,loginErr:!1,regError:!1,errConnect:!1,loginForm:{login:"",password:""},registrationForm:{login:"",email:"",password:"",repPassword:""},loginButton:{text:"Логин"},registrationButton:{text:"Регистрация"},canselButton:{text:"Отмена"},loginErrText:"",regErrorText:"",loginMessage:{status:Boolean,text:""},passMessage:{status:Boolean,text:""},mailMessage:{status:Boolean,text:""},userMessage:{status:Boolean,text:""},passRegMess:{status:Boolean,text:""},passRepMess:{status:Boolean,text:""}}},methods:{validEmail:function(){var s=this.$NewValid({type:"email",data:this.registrationForm.email});s.status,this.mailMessage.status=s.status,this.mailMessage.text=s.text},validPassword:function(){var s=this.$NewValid({type:"password",data:this.loginForm.password});s.status,this.passMessage.status=s.status,this.passMessage.text=s.text},validPass:function(){var s=this.$NewValid({type:"password",data:this.registrationForm.password});s.status,this.passRegMess.status=s.status,this.passRegMess.text=s.text},validLogin:function(){var s=this.$NewValid({type:"login",data:this.loginForm.login});s.status,this.loginMessage.status=s.status,this.loginMessage.text=s.text},validUserName:function(){var s=this.$NewValid({type:"login",data:this.registrationForm.login});s.status,this.userMessage.status=s.status,this.userMessage.text=s.text},validRepPass:function(){var s=this.$NewValid({type:"repPassword",data:{pass:this.registrationForm.password,repPass:this.registrationForm.repPassword}});s.status,this.passRepMess.status=s.status,this.passRepMess.text=s.text},LoginShow:function(){console.log("login"),this.flagLogin=!this.flagLogin,this.flagLogin||(this.loginErr=!1,this.errConnect=!1)},RegistrationShow:function(){this.flagRegistration=!this.flagRegistration,this.regError=!1},Login:function(){var s=this;this.loginForm.login&&this.loginForm.password?this.loginMessage.status&&this.passMessage.status?(this.$store.commit("setLoaderFlag",!0),this.$store.dispatch("loginAction",{name:this.loginForm.login,pass:this.loginForm.password}).then((function(t){200===t.data.status&&t.data.data?(localStorage.setItem("user",s.loginForm.login),s.$router.push("home")):(s.loginErr=!0,s.loginErrText="Пользватель не найден")})).catch((function(){s.errConnect=!0})).finally((function(){s.$store.commit("setLoaderFlag",!1)}))):(this.loginErr=!0,this.loginErrText="Не все данные валидны"):(this.loginErr=!0,this.loginErrText="Не все поля заполнены")},Registration:function(){var s=this;this.passMessage.status&&this.mailMessage.status&&this.userMessage.status&&this.passRegMess.status&&this.passRepMess.status?this.registrationForm.email&&this.registrationForm.login&&this.registrationForm.repPassword&&this.registrationForm.password?(this.$store.commit("setLoaderFlag",!0),this.$store.dispatch("registrationAction",this.registrationForm).then((function(t){console.log(t),300===t.data.status?(s.regError=!0,s.regErrorText="Email или имя пользователя уже заняты"):200===t.data.status&&(localStorage.setItem("user",s.registrationForm.login),s.$router.push("home"))})).catch((function(){})).finally((function(){s.$store.commit("setLoaderFlag",!1)}))):(this.regError=!0,this.regErrorText="Заполнены не все поля"):(this.regError=!0,this.regErrorText="Не все данные валидны"),console.log("registr")}}}),r=o,n=(e("5091"),e("0c7c")),g=Object(n["a"])(r,a,i,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=main.994d182c.js.map