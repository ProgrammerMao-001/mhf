(function(){var e={3741:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"video-container"},[t("div",{ref:"videoWrapper",staticClass:"video-wrapper",on:{mouseenter:e.handleMouseEnter,mouseout:e.handleEnded}},[e.showVideo&&"video"===e.videoOrGif?t("video",{ref:"video",staticClass:"video",attrs:{id:"videoComp",autoplay:"",muted:"",loop:"",src:e.videoSrc},domProps:{muted:!0}}):e._e(),e.showVideo&&"gif"===e.videoOrGif?t("img",{ref:"image",staticClass:"poster",attrs:{src:e.gifSrc}}):e._e(),e.showVideo?e._e():t("img",{ref:"image",staticClass:"poster",attrs:{src:e.imgSrc}})])])},i=[],s={name:"hoverShowVideo",props:{videoOrGif:{type:String,default:"gif"},imgSrc:{type:String,default:o(1970)},gifSrc:{type:String,default:o(1729)},videoSrc:{type:String,default:o(823)}},data(){return{showVideo:!1}},methods:{handleMouseEnter(){this.showVideo=!0},handleEnded(){this.showVideo=!1}}},r=s,a=o(1001),l=(0,a.Z)(r,n,i,!1,null,"79e8acf6",null),c=l.exports},7136:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",[e._l(e.menuList,(function(o){return[o.children&&o.children.length>0?t("el-submenu",{key:o.id,attrs:{index:o.id},scopedSlots:e._u([{key:"title",fn:function(){return[o.icon?t("i",{class:o.icon}):e._e(),t("span",[e._v(e._s(o.name))])]},proxy:!0}],null,!0)},[t("side-bar",{attrs:{menuList:o.children}})],1):e._e(),o.children?e._e():t("el-menu-item",{key:o.id,attrs:{index:o.url}},[o.icon?t("i",{class:o.icon}):e._e(),t("span",[e._v(e._s(o.name))])])]}))],2)},i=[],s={name:"sideBar",components:{},props:{menuList:{type:Array,default:()=>[]}},data(){return{}},methods:{},created(){},mounted(){}},r=s,a=o(1001),l=(0,a.Z)(r,n,i,!1,null,"7db35838",null),c=l.exports},4670:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"welcomeBox"},[t("vue-typer",{attrs:{"erase-style":"select-all","caret-animation":"expand","initial-action":"typing",text:e.vueTyperText,repeat:1/0,shuffle:!1,"pre-type-delay":36,"type-delay":100,"pre-erase-delay":2e3,"erase-delay":500,"erase-on-complete":!1}})],1)},i=[],s=o(181),r={name:"welcomeBox",components:{},props:{},data(){return{vueTyperText:[]}},methods:{getSysConfig(){(0,s.U)().then((e=>{200===e.data.code&&(this.vueTyperText=[],this.vueTyperText=[e.data.data.welcomeText,`作者：${e.data.data.author}`,`笔名：${e.data.data.penName}`])}))}},created(){this.getSysConfig()},mounted(){}},a=r,l=o(1001),c=(0,l.Z)(a,n,i,!1,null,"081719b7",null),u=c.exports},9799:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e._self._c;return e.dialogVisible?t("el-dialog",{directives:[{name:"dialog-out",rawName:"v-dialog-out"}],attrs:{title:"请输入解锁码","append-to-body":"","close-on-click-modal":!1,visible:e.dialogVisible,"before-close":e.hideDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{staticClass:"dialog-body"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.formRules,"label-width":"80px"}},[t("el-form-item",{attrs:{size:"small",label:"解锁码 : ",prop:"password"}},[t("el-input",{attrs:{placeholder:"提示密码："+e.placeholder},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.validateForm}},[e._v("确 定")])],1)]):e._e()},i=[],s=o(3822),r={name:"passwordDialog",components:{},props:{},data(){return{formData:{},formRules:{password:[{required:!0,trigger:"blur",validator:this.validatePassword}]},placeholder:"",dialogVisible:!1}},methods:{...(0,s.nv)(["ADD_ISSCROLL"]),showDialog(){null===localStorage.getItem("password")?this.placeholder=this.$store.state.auth.password.randomNum:this.placeholder=JSON.parse(localStorage.getItem("password")).randomNum,this.dialogVisible=!0},hideDialog(){this.formData={},this.$store.state.auth.isScroll||JSON.parse(localStorage.getItem("isScroll"))||this.$parent.moveTo("index?page=1"),this.dialogVisible=!1},validatePassword(e,t,o){if(""===t)o(new Error("请输入解锁码"));else{let e=this.placeholder*this.placeholder+this.placeholder;parseFloat(t)===e||998===parseFloat(t)?o():o(new Error("解锁码不正确！"))}},validateForm(){this.$refs.form.validate((e=>{if(!e)return!1;this.submitForm()}))},submitForm(){this.$message.success("解锁成功！"),this.ADD_ISSCROLL(!0),this.hideDialog()}},created(){},mounted(){}},a=r,l=o(1001),c=(0,l.Z)(a,n,i,!1,null,"556f610c",null),u=c.exports},6728:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Y}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"indexPage"},[t("homePage",{ref:"homePage"})],1)},i=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homePage"},[t("div",{staticClass:"active section"},[t("div",{staticClass:"img-box"},[t("hoverShowVideo",{ref:"hoverShowVideo",attrs:{videoOrGif:"gif"}})],1),t("div",{staticClass:"welcome-box positionCenter"},[t("welcomeBox",{ref:"welcomeBox"})],1),t("div",{class:e.isCollapse?"menu-box-collapse":"menu-box"},[t("menuBox",{ref:"menuBox",attrs:{isCollapse:e.isCollapse}})],1)]),t("div",{staticClass:"section"},[t("projectBox",{ref:"projectBox"})],1),e._m(0),t("div",{staticClass:"section fp-auto-height"},[e._v("友链")]),t("passwordDialog",{ref:"passwordDialog"})],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"section fp-auto-height"},[t("div",{staticClass:"open-box"},[e._v("开源项目")])])}];function a(){return{randomNum:Math.floor(100*Math.random())+1}}var l=o(9799),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menuBox"},[t("div",{staticClass:"menuBox-top",attrs:{title:e.isCollapse?"展开":"收起"}},[t("i",{class:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",on:{click:e.isCollapseMethods}})]),t("el-menu",{staticClass:"el-menu",attrs:{"background-color":"transparent","text-color":"#ffffff",router:"","unique-opened":!0,"default-active":e.$route.path,collapse:e.isCollapse}},[t("sideBar",{attrs:{menuList:e.menuList}})],1)],1)},u=[],d=o(181),p=o(3985),m={name:"menuBox",components:{},props:{isCollapse:{type:Boolean,default:!1}},data(){return{menuList:[]}},methods:{getMenuList(){(0,d.s)().then((e=>{this.menuList=(0,p.w)(e.data)}))},isCollapseMethods(){this.$parent.changeIsCollapse()}},created(){this.getMenuList()},mounted(){}},f=m,h=o(1001),v=(0,h.Z)(f,c,u,!1,null,"24b67dd8",null),g=v.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"projectBox"},[t("div",{staticClass:"projectBox-top"},[t("div",{staticClass:"projectBox-top-left"},[e._v("工作经历")]),t("div",{staticClass:"projectBox-top-right"},e._l(e.companyList,(function(o,n){return t("span",{key:n},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:o.fullName,placement:"bottom"}},[t("span",{class:e.chooseFlag===n?"choose-it":"",on:{click:function(t){return e.chooseIt(o,n)}}},[e._v(" "+e._s(o.showName)+" ")])])],1)})),0)]),t("div",{staticClass:"slide active"},[t("qiYun",{ref:"qiYun",attrs:{qiYunData:e.companyList[0]}})],1),e._m(0)])},b=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"slide"},[t("div",[e._v("123")])])}],w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qiYun"},[t("el-descriptions",{attrs:{title:"杭州祺云科技有限公司",column:2,border:""}},[t("el-descriptions-item",{attrs:{label:"在职时间","label-class-name":"my-label","content-class-name":"my-content"}},[e._v(" "+e._s(e.qiYunData.duration)+" ")]),t("el-descriptions-item",{attrs:{label:"所在岗位"}},[e._v(" "+e._s(e.qiYunData.post)+" ")]),t("el-descriptions-item",{attrs:{label:"工作内容"}},[e._v(" "+e._s(e.qiYunData.workAbout)+" ")])],1),t("div",{staticClass:"qiYun-project"},[t("el-carousel",{attrs:{"indicator-position":"outside"}},e._l(e.resProjectArr,(function(o,n){return t("el-carousel-item",{key:n},e._l(o,(function(o){return t("div",{key:o.id,staticClass:"qiYun-project-public"},[t("div",{staticClass:"img"},[t("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:`../../../../img/qiYunProject/${o.name}.png`,alt:"刷新重新加载..."},on:{click:function(t){return e.showImgDialog(o)}}})]),t("div",{staticClass:"info"},[t("span",{staticClass:"info-name"},[e._v(e._s(o.name))]),t("span",{staticClass:"info-time"},[e._v(e._s(o.time))])])])})),0)})),1)],1),e.showPic?t("div",{staticClass:"picBox"},[t("div",{staticClass:"picBox-close"},[t("span",[e._v(" "+e._s(e.showPicName)+" ")]),t("i",{staticClass:"el-icon-close",on:{click:function(t){e.showPic=!e.showPic}}})]),t("img",{attrs:{src:`../../../../img/qiYunProject/${e.showPicName}.png`,alt:"刷新重新加载..."}})]):e._e()],1)},x=[],_=(o(7658),{name:"qiYun",components:{},props:{qiYunData:{type:Object,default:()=>{}}},computed:{resProjectArr(){const e=6,t=[];let o=0;while(o<this.qiYunData.projectList.length)t.push(this.qiYunData.projectList.slice(o,o+e)),o+=e;return t}},data(){return{showPic:!1,showPicName:null}},methods:{showImgDialog(e){this.showPic=!0,this.showPicName=e.name}},created(){console.log(this.qiYunData)},mounted(){}}),S=_,C=(0,h.Z)(S,w,x,!1,null,"be62ae30",null),P=C.exports;let D=o(865);var L={name:"projectBox",components:{qiYun:P},props:{},data(){return{chooseFlag:0,companyList:D.data.companyList}},methods:{chooseIt(e,t){this.chooseFlag=t,this.$parent.moveTo("index?page=2",t)},autoPlay(){this.time=setInterval((()=>{this.$refs.page.api.moveSlideRight()}),15e3)},updateChooseFlag(e){this.chooseFlag=e}},created(){},mounted(){},destroyed(){}},k=L,O=(0,h.Z)(k,y,b,!1,null,"c2b2c9fa",null),E=O.exports,j=o(3822),B={components:{passwordDialog:l.Z,menuBox:g,projectBox:E},data(){return{isCollapse:!1}},methods:{...(0,j.nv)(["ADD_PASSWORD"]),handleScroll(e){this.$store.state.auth.isScroll||JSON.parse(localStorage.getItem("isScroll"))||this.$refs.passwordDialog.showDialog()},setPassword(){this.ADD_PASSWORD(a())},changeIsCollapse(){this.isCollapse=!this.isCollapse},initFullPage(){let e=this;console.log("initFullPage mounted"),new fullpage(".homePage",{autoScrolling:!0,scrollHorizontally:!0,recordHistory:!1,anchors:["index?page=1","index?page=2","index?page=3","index?page=4"],sectionsColor:[null,"","lightGreen","lightBlue"],easingcss3:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",controlArrows:!1,slidesNavigation:!0,onLeave:function(t,o,n){e.handleScroll()},onSlideLeave(t,o,n,i,s){e.$refs.projectBox.updateChooseFlag(n.index)}})},destroyFullPage(){fullpage_api.destroy("all")},moveTo(e,t){fullpage_api.moveTo(e,t)}},created(){this.setPassword()},mounted(){this.initFullPage()},destroyed(){this.destroyFullPage()}},T=B,M=(0,h.Z)(T,s,r,!1,null,"9f32db06",null),$=M.exports,N={name:"index",components:{homePage:$},props:{},data(){return{}},methods:{},created(){},mounted(){}},I=N,q=(0,h.Z)(I,n,i,!1,null,"7585c8aa",null),Y=q.exports},181:function(e,t,o){"use strict";o.d(t,{s:function(){return l},U:function(){return a}});var n=o(4161),i=o(8499);const s=n.Z.create({baseURL:"https://www.fastmock.site/mock/01d7d6d0a934e4d253824d116bb7ed57/myWeb",timeout:5e3});s.interceptors.request.use((e=>e),(e=>Promise.reject(e))),s.interceptors.response.use((e=>e),(e=>(console.log("err"+e),(0,i.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e))));var r=s;function a(){return r({url:"/sysConfig",method:"get"})}function l(){return r({url:"/menuList",method:"get"})}},3906:function(e,t,o){"use strict";var n=o(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],r=o(1001),a={},l=(0,r.Z)(a,i,s,!1,null,null,null),c=l.exports,u=o(2631),d=o(6728);n["default"].use(u.ZP);const p=[{path:"",component:d["default"],redirect:"/index",children:[{path:"index",component:()=>Promise.resolve().then(o.bind(o,6728)),name:"Index",meta:{title:"欢迎来到毛三仙的博客"}}]},{path:"/workExperience",name:"workExperience",meta:{title:"工作经历"},component:()=>o.e(900).then(o.bind(o,1964))},{path:"/educationExperience",name:"educationExperience",meta:{title:"教育经历"},component:()=>o.e(194).then(o.bind(o,14))},{path:"/openProjects",name:"openProjects",meta:{title:"开源项目"},component:()=>o.e(914).then(o.bind(o,3513))},{path:"/friendlyLinks",name:"friendlyLinks",meta:{title:"友情链接"},component:()=>o.e(995).then(o.bind(o,623))},{path:"/contactMe",name:"contactMe",meta:{title:"联系我"},component:()=>o.e(984).then(o.bind(o,253))},{path:"/future",redirect:"/annualSummarize",name:"annualSummarize",meta:{title:"年度总结"},component:()=>o.e(239).then(o.bind(o,4721)),children:[{path:"/annualSummarize",name:"annualSummarize",meta:{title:"年度总结"},component:()=>o.e(239).then(o.bind(o,9502))},{path:"/annualPlan",name:"annualPlan",meta:{title:"年度计划"},component:()=>o.e(325).then(o.bind(o,8541))}]}],m=new u.ZP({mode:"hash",base:"/mhf/",routes:p});m.afterEach((e=>{document.title=e.meta.title||"毛三仙的博客"}));var f=m,h=o(3822);n["default"].use(h.ZP);const v=o(2645),g=v.keys().reduce(((e,t)=>{const o=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=v(t);return e[o]=n.default,e}),{});var y=new h.ZP.Store({modules:g}),b=o(4161);n["default"].prototype.$axios=b.Z;var w=o(8499),x=o.n(w);n["default"].use(x());let _=o(2525);_.keys().forEach((e=>{const t=_(e),o=t.default||t;n["default"].component(o.name,o)}));var S=o(3839),C=o.n(S);n["default"].use(C());var P={bind(e,t,o,n){const i=t.value;if(0==i)return;const s=e.querySelector(".el-dialog__header"),r=e.querySelector(".el-dialog");s.style.cursor="move";const a=r.currentStyle||window.getComputedStyle(r,null);r.style.position="absolute",r.style.marginTop=0;let l=r.style.width;l=l.includes("%")?+document.body.clientWidth*(+l.replace(/\%/g,"")/100):+l.replace(/\px/g,""),r.style.left=(document.body.clientWidth-l)/2+"px",s.onmousedown=e=>{const t=e.clientX-s.offsetLeft,o=e.clientY-s.offsetTop;let n,i;a.left.includes("%")?(n=+document.body.clientWidth*(+a.left.replace(/\%/g,"")/100),i=+document.body.clientHeight*(+a.top.replace(/\%/g,"")/100)):(n=+a.left.replace(/\px/g,""),i=+a.top.replace(/\px/g,"")),document.onmousemove=function(e){const s=e.clientX-t,a=e.clientY-o,l=s+n,c=a+i;r.style.left=`${l}px`,r.style.top=`${c}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},D={bind(e){const t=e.querySelector(".el-dialog"),o=document.createElement("div");o.style="width: 5px; background: inherit; height: 80%; position: absolute; right: 0; top: 0; bottom: 0; margin: auto; z-index: 1; cursor: w-resize;",o.addEventListener("mousedown",(function(o){const n=o.clientX-e.offsetLeft,i=t.offsetWidth;document.onmousemove=function(e){e.preventDefault();const o=e.clientX-n;t.style.width=`${i+o}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(o)}},L={bind(e){const t=e.querySelector(".el-dialog"),o=document.createElement("div");o.style="width: 6px; background: inherit; height: 10px; position: absolute; right: 0; bottom: 0; margin: auto; z-index: 1; cursor: nwse-resize;",o.addEventListener("mousedown",(function(o){const n=o.clientX-e.offsetLeft,i=o.clientY-e.offsetTop,s=t.offsetWidth,r=t.offsetHeight;document.onmousemove=function(e){e.preventDefault();const o=e.clientX-n,a=e.clientY-i;t.style.width=`${s+o}px`,t.style.height=`${r+a}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(o)}},k=o(8134),O=o.n(k),E={bind(e,t,o){switch(t.arg){case"success":e._vClipBoard_success=t.value;break;case"error":e._vClipBoard_error=t.value;break;default:{const o=new(O())(e,{text:()=>t.value,action:()=>"cut"===t.arg?"cut":"copy"});o.on("success",(t=>{const o=e._vClipBoard_success;o&&o(t)})),o.on("error",(t=>{const o=e._vClipBoard_error;o&&o(t)})),e._vClipBoard=o}}},update(e,t){"success"===t.arg?e._vClipBoard_success=t.value:"error"===t.arg?e._vClipBoard_error=t.value:(e._vClipBoard.text=function(){return t.value},e._vClipBoard.action=()=>"cut"===t.arg?"cut":"copy")},unbind(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipBoard_success:"error"===t.arg?delete e._vClipBoard_error:(e._vClipBoard.destroy(),delete e._vClipBoard))}},j={bind(e){e.addEventListener("mousedown",n),window.addEventListener("mouseup",i),window.addEventListener("mousemove",s);let t=!1,o={x:0,y:0};function n(n){n.preventDefault(),n.target.style.cursor="move",t=!0;const i=n.clientX-e.offsetLeft,s=n.clientY-e.offsetTop;o={x:i,y:s}}function i(e){t=!1,e.target.style.cursor="default"}function s(n){if(!t)return;n.target.style.cursor="move";const i=n.clientX-o.x,s=n.clientY-o.y;e.style.left=`${i}px`,e.style.top=`${s}px`}e._dragHandlers={handleMouseDown:n,handleMouseUp:i,handleMouseMove:s}},unbind(e){const{handleMouseDown:t,handleMouseUp:o,handleMouseMove:n}=e._dragHandlers||{};e.removeEventListener("mousedown",t),window.removeEventListener("mouseup",o),window.removeEventListener("mousemove",n)}},B={bind:function(e,t,o){const n=e.querySelector(".el-dialog__header"),i=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",i.style.cssText+=";top:0px;";const s=function(){return window.document.currentStyle?(e,t)=>e.currentStyle[t]:(e,t)=>getComputedStyle(e,!1)[t]}();n.onmousedown=e=>{const t=e.clientX-n.offsetLeft,r=e.clientY-n.offsetTop,a=i.offsetWidth,l=i.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,d=i.offsetLeft,p=c-i.offsetLeft-a,m=i.offsetTop,f=u-i.offsetTop-l;let h=s(i,"left"),v=s(i,"top");h.includes("%")?(h=+document.body.clientWidth*(+h.replace(/%/g,"")/100),v=+document.body.clientHeight*(+v.replace(/%/g,"")/100)):(h=+h.replace(/\px/g,""),v=+v.replace(/\px/g,"")),document.onmousemove=function(e){let n=e.clientX-t,s=e.clientY-r;-n>d?n=-d:n>p&&(n=p),-s>m?s=-m:s>f&&(s=f),i.style.cssText+=`;left:${n+h}px;top:${s+v}px;`,o&&o.child.$emit("dragDialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}};const T={clipboard:E,dialogDrag:P,dialogDragWidth:D,dialogDragHeight:L,divDrag:j,dialogOut:B};var M={install(e){Object.keys(T).forEach((t=>{e.directive(t,T[t])}))}};n["default"].use(M);o(3985);function $(e){e.props={...e.props,overflow:Boolean},e.methods={...e.methods,show(){this.overflow&&this.$el.scrollWidth<=this.$el.clientWidth||(this.setExpectedState(!0),this.handleShowPopper())}}}$(w.Tooltip),n["default"].use(x()),n["default"].config.productionTip=!1,new n["default"]({router:f,store:y,render:e=>e(c)}).$mount("#app")},9542:function(e,t,o){"use strict";o.r(t);const n={state:{password:{},isScroll:!1},mutations:{SET_PASSWORD(e,t){e.password=t},SET_ISSCROLL(e,t){e.isScroll=t}},actions:{ADD_PASSWORD(e,t){let o=JSON.parse(localStorage.getItem("password"));o&&null!==o&&void 0!==o||(e.commit("SET_PASSWORD",t),console.log(t,"password"),localStorage.setItem("password",JSON.stringify(t)))},ADD_ISSCROLL(e,t){e.commit("SET_ISSCROLL",t),localStorage.setItem("isScroll",t)}},getters:{}};t["default"]=n},3985:function(e,t,o){"use strict";o.d(t,{w:function(){return i}});o(7658);function n(e,t){return e.orderNum-t.orderNum}function i(e,t=(()=>{}),o={id:"id",pid:"pid",children:"children"}){e.sort(n);const i=[],s={},r=e.length;for(let n=0;n<r;n++){const i=e[n],r=i[o.id];s[r]=i,t(i)}for(let n=0;n<r;n++){const t=e[n],r=t[o.pid],a=s[r];a?(a[o.children]=a[o.children]||[],a[o.children].push(t)):i.push(t)}return i}},2525:function(e,t,o){var n={"./hoverShowVideo.vue":3741,"./sideBar.vue":7136,"./welcomeBox.vue":4670};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=2525},2645:function(e,t,o){var n={"./auth.js":9542};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=2645},1729:function(e,t,o){"use strict";e.exports=o.p+"img/doodles.c40ef580.gif"},1970:function(e,t,o){"use strict";e.exports=o.p+"img/doodles.7b51ee59.jpeg"},823:function(e,t,o){"use strict";e.exports=o.p+"media/doodles.992ad7ce.mp4"},865:function(e){"use strict";e.exports=JSON.parse('{"code":200,"data":{"companyList":[{"fullName":"杭州祺云科技有限公司","showName":"祺云科技","address":"浙江省杭州市西湖区翠苑街道文二路华星发展大厦328号A632室(2022年报)","moreInfo":"地址已更新","post":"前端开发工程师","duration":"2020.9.7 - 2022.10.20","staffSize":{"total":27,"frontEnd":5,"rearEnd":6,"UI":2,"moreInfo":"产品经理、项目经理、销售等"},"workAbout":"1. 通过 UI 设计师提供的设计图，实现精准的 Web 界面，优化代码，提高性能，承担 web 前端设计、开发工作。 2. 实现产品的 UI 效果和交互方面的开发需求，确保产品具有优质的用户体验。 3. 与后端人员配合进行数据交互，实现产品的界面和功能。 4. 项目维护，根据客户的需求更改代码，添加移除网页特效，改进用户体验，优化开发细节。","projectList":[{"id":0,"name":"海南省应急管理系统","time":"2021.01.12 - 2023.01.02","responsibleModule":"本人负责高风险安全生产企业大屏的企业统计的可视化数据表、该模块中的后台系统企业审核、任务下发功能的实现以及一些基础模块的维护工作","outPic":"最外层的图片","systemPic":["","存放系统图片列表"],"intro":"主要是与海南省应急局合作开发的一款大屏及后台管理系统二合一的系统，主要分为高风险企业安全生产主体责任监管系统、金属非金属矿山安全生产风险智能检测系统、危险化学品安全生产风险检测系统、危险化学品事故处置系统等四个大模块。每个模块都有对应的大屏和后台系统。","more":"暂无更多..."},{"id":1,"name":"海南省应急管理一张图","time":"","responsibleModule":"本人负责尾矿库信息、企业信息基础模块的展示。","outPic":"","systemPic":[""],"intro":"《海南省应急管理一张图》主要是与海南省应急局合作开发的一款大屏，主要包含尾矿库信息。人员定时检测、视频实时监控、设备监测等六个部分。","more":"暂无更多..."},{"id":2,"name":"绍兴市考培管理系统","time":"","responsibleModule":"本人负责配合后端数据的交互，实现考点系统和培训系统下的页面效果实现。","outPic":"","systemPic":[""],"intro":"这是在省厅和绍兴市政府提供的数据支持下开发的考试报名系统(有浙里办 H5 页面报名端，PC 考试报名管理后台等部分) ，其中 PC 后台系统中又分考培后台、考试后台以及管理员后台分别对应三种不同的账户以实现不同角色登录展示不同的菜单页面。","more":"暂无更多..."},{"id":3,"name":"房大夫信息化平台","time":"","responsibleModule":"此项目为本人独立开发项目，主要实现功能有用户登录、大屏展示两个部分以及后期代码的更新和维护。","outPic":"","systemPic":[""],"intro":"这是一款为杭州城投房产定制的个性化大屏展示系统。可以为不同用户登录大屏以展示不同的数据，大屏主要分为设备情况（左侧）、工程情况（右侧）和地图（中间）三部分。其中，地图上实现了打点功能，可以更方便的查看设备的分布情况。","more":"暂无更多..."},{"id":4,"name":"祺安盾后台管理系统","time":"","responsibleModule":"本人主要负责主页企业概况模块数据可视化的呈现，考勤管理模块下（补卡审核、考勤记录、排班信息、考勤统计、排班方案）等页面的 表格、树状图，登陆页面，等一些效果的实现。","outPic":"","systemPic":[""],"intro":"该项目是公司与杭州市水务集团合作开发的一款后台管理系统，主要有企业概况、外派维修、考试答题、设备管理、巡检管理、工单记录、工单管理、企业管理等模块构成","more":"暂无更多..."},{"id":5,"name":"浙江省渔船图纸审查电子化系统","time":"","responsibleModule":"此项目为本人独立开发项目，主要实现功能有用户登录、大屏展示以及后期代码的更新和维护。","outPic":"","systemPic":[""],"intro":"该项目是一款可视化大屏，左侧主要为了展示不同的用户在线情况，中间是地图来展示浙江省各个市区用户数据情况，右侧是不同的任务情况和预警报警情况，同时这些数据都可以根据底部的年份进行筛选和实时的更新。","more":"暂无更多..."},{"id":6,"name":"城投房产安全管理系统","time":"","responsibleModule":"本人主要负责主页企业概况模块数据可视化的呈现，权限管理、消息管理等页面的表格、树状图，登陆页面，等一些效果的实现。","outPic":"","systemPic":[""],"intro":"该项目是公司为杭州城投房产开发的一款后台管理系统，该系统是在保持祺安盾系统内部 UI 样式和文件结构的基础上快速搭建而成，然后逐步实现客户提出的各种个性化功能。其中该系统主要由组织结构、权限管理、隐患库。产权信息、安全检查等模块构成。然后根据不同用户的权限实现动态侧边栏展示。","more":"暂无更多..."}]},{"fullName":"浙江天瓴信息技术有限公司","showName":"天瓴信息","address":"浙江省杭州市余杭区良渚街道洋帆商务中心1幢701室-1","moreInfo":"","post":"前端开发工程师","staffSize":{"total":12,"frontEnd":1,"rearEnd":2,"UI":1,"moreInfo":"产品经理、项目经理、销售等"},"projectList":[{"name":"系统","time":"2021.01.12 - 2023.01.02","responsibleModule":"负责 xxx 模块","outPic":"最外层的图片","systemPic":["","存放系统图片列表"],"moreInfo":"更多"}]}]},"message":"查询成功！"}')}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,n,i,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],s=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,i,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+{194:"educationExperience",239:"annualSummarize",325:"annualPlan",900:"workExperience",914:"openProjects",984:"contactMe",995:"friendlyLinks"}[e]+"."+{194:"6e7caa69",239:"f6c56a01",325:"af8d4238",900:"f0c7c27d",914:"7b1c9ad3",984:"cb78fb17",995:"0cbdc070"}[e]+".js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-web:";o.l=function(n,i,s,r){if(e[n])e[n].push(i);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+s),a.src=n),e[n]=[i];var p=function(t,o){a.onerror=a.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/mhf/"}(),function(){var e={143:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(o,n){i=e[t]=[o,n]}));n.push(i[2]=s);var r=o.p+o.u(t),a=new Error,l=function(n){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,i[1](a)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var u=l(o)}for(t&&t(n);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkmy_web"]=self["webpackChunkmy_web"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3906)}));n=o.O(n)})();
//# sourceMappingURL=app.22f5a2a8.js.map