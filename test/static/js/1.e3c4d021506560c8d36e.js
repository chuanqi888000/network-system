webpackJsonp([1],{203:function(e,n,t){t(306);var o=t(3)(t(308),t(309),"data-v-1bd2bcf7",null);o.options.__file="D:\\learn\\datacenter\\src\\pages\\register\\Register.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),o.options.functional,e.exports=o.exports},207:function(e,n,t){e.exports=t.p+"static/img/login-bg.cc6d7ad.jpg"},306:function(e,n,t){var o=t(307);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(70)("35915071",o,!1)},307:function(e,n,t){n=e.exports=t(69)(),n.push([e.i,'\n@charset "UTF-8";\n/*颜色*/\n/*字体*/\n.box-siz[data-v-1bd2bcf7] {\n  box-sizing: border-box;\n}\n.login[data-v-1bd2bcf7] {\n  width: 100%;\n  height: 100vh;\n}\n.login .login-head[data-v-1bd2bcf7] {\n    color: #fff;\n    height: 6vh;\n    width: 100%;\n    background: #181e21;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    padding: 0 20px;\n}\n.login .login-head span[data-v-1bd2bcf7]:hover {\n      color: #00c1de;\n      cursor: pointer;\n}\n.login .login-content[data-v-1bd2bcf7] {\n    height: 88vh;\n    width: 100%;\n    color: #fff;\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    background: url('+t(207)+") no-repeat center;\n    background-size: cover;\n}\n.login .login-content .login-cover[data-v-1bd2bcf7] {\n      width: 1200px;\n      height: 100%;\n      margin: 0 auto;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: center;\n          align-items: center;\n      overflow: hidden;\n}\n.login .login-content .login-cover .login-from[data-v-1bd2bcf7] {\n        width: 720px;\n        height: 500px;\n        background: #fff;\n        padding: 20px 180px;\n        color: #9b9ea0;\n        text-align: center;\n}\n.login .login-content .login-cover .login-from .login-title[data-v-1bd2bcf7] {\n          font-size: 20px;\n          line-height: 40px;\n          margin-bottom: 40px;\n}\n.login .login-content .login-cover .login-from .checkbtn[data-v-1bd2bcf7] {\n          font-size: 12px !important;\n          margin-bottom: 20px;\n          float: left;\n}\n.login .login-content .login-cover .login-from .agree[data-v-1bd2bcf7] {\n          float: left;\n          font-size: 12px;\n          margin-left: -20px;\n}\n.login .login-content .login-cover .login-from .agree a[data-v-1bd2bcf7] {\n            color: #409EFF;\n            cursor: pointer;\n}\n.login .login-content .login-cover .login-from .agree a[data-v-1bd2bcf7]:hover {\n              text-decoration: underline;\n}\n.login .login-footer[data-v-1bd2bcf7] {\n    color: #fff;\n    height: 6vh;\n    width: 100%;\n    background: #181e21;\n    line-height: 6vh;\n    text-align: center;\n}\n.submitbtn[data-v-1bd2bcf7] {\n  width: 100% !important;\n}\n.otherbtn[data-v-1bd2bcf7] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #9b9ea0;\n  font-size: 12px;\n  cursor: pointer;\n}\n.otherbtn span[data-v-1bd2bcf7]:hover {\n    color: #00c1de;\n}\n@keyframes time {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n",""])},308:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{checked:!1,ruleForm:{user:"",pass:"",checkPass:"",phone:""},rules:{user:[{required:!0,message:"请输入登录账号",trigger:"blur"},{min:4,max:8,message:"长度在 4 到 8个字符",trigger:["blur","change"]}],pass:[{required:!0,message:"请输入登录账号",trigger:"blur"},{min:4,max:8,message:"长度在 4 到 8个字符",trigger:["blur","change"]}],checkPass:[{required:!0,message:"请输入正确密码",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:["blur","change"]}]}}},mounted:function(){},methods:{toindex:function(){this.$router.push({path:"/"})},handleChange:function(e){},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return!1;alert("submit!")})}}}},309:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("div",{staticClass:"login-head box-siz"},[t("span",[e._v("MINIVISION")]),e._v(" "),t("span",{on:{click:e.toindex}},[e._v("首页")])]),e._v(" "),t("div",{staticClass:"login-content box-siz"},[t("div",{staticClass:"login-cover box-siz"},[t("div",{staticClass:"login-from box-siz"},[t("p",{staticClass:"login-title"},[e._v("欢迎注册")]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[t("el-form-item",{attrs:{label:"",prop:"user"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入登录账号"},model:{value:e.ruleForm.pass,callback:function(n){e.$set(e.ruleForm,"pass",n)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入登录密码"},model:{value:e.ruleForm.pass,callback:function(n){e.$set(e.ruleForm,"pass",n)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请再次输入登录密码"},model:{value:e.ruleForm.checkPass,callback:function(n){e.$set(e.ruleForm,"checkPass",n)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"phone"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.ruleForm.phone,callback:function(n){e.$set(e.ruleForm,"phone",n)},expression:"ruleForm.phone"}})],1),e._v(" "),t("div",[t("el-checkbox",{staticClass:"checkbtn",on:{change:e.handleChange},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}}),e._v(" "),t("span",{staticClass:"agree"},[e._v("我同意"),t("a",[e._v("《浪潮云用户协议》")]),t("a",[e._v("《云服务法律声明与隐私政策》")])])],1),e._v(" "),t("el-form-item",[t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.checked,expression:"!checked"}],staticClass:"submitbtn",attrs:{type:"info",plain:"",disabled:""}},[e._v("同意协议并注册")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.checked,expression:"checked"}],staticClass:"submitbtn",attrs:{type:"primary"},on:{click:function(n){return e.submitForm("ruleForm")}}},[e._v("同意协议并注册")])],1)],1)],1)])]),e._v(" "),t("div",{staticClass:"login-footer box-siz"},[e._v("\n        Copyright © 2018 版权所有：南京甄视智能科技有限公司 苏ICP备15029681号-1 增值电信业务经营许可证 苏B2-20180542\n    ")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=1.e3c4d021506560c8d36e.js.map