(function(){var e={7559:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"video-container"},[t("div",{ref:"videoWrapper",staticClass:"video-wrapper",on:{mouseenter:e.handleMouseEnter,mouseout:e.handleEnded}},[t("video",{directives:[{name:"show",rawName:"v-show",value:e.showVideo&&"video"===e.videoOrGif,expression:"showVideo && videoOrGif === 'video'"}],ref:"video",staticClass:"video",attrs:{id:"videoComp",autoplay:"",muted:"",loop:"",src:e.videoSrc},domProps:{muted:!0}}),t("img",{directives:[{name:"show",rawName:"v-show",value:e.showVideo&&"gif"===e.videoOrGif,expression:"showVideo && videoOrGif === 'gif'"}],ref:"image",staticClass:"poster",attrs:{src:e.gifSrc}}),e.showVideo?e._e():t("img",{ref:"image",staticClass:"poster",attrs:{src:e.imgSrc}})])])},i=[],s={name:"hoverShowVideo",props:{videoOrGif:{type:String,default:"gif"},imgSrc:{type:String,default:o(1970)},gifSrc:{type:String,default:o(1729)},videoSrc:{type:String,default:o(823)}},data(){return{showVideo:!1}},methods:{handleMouseEnter(){this.showVideo=!0},handleEnded(){this.showVideo=!1}}},a=s,r=o(1001),l=(0,r.Z)(a,n,i,!1,null,"fce02c94",null),c=l.exports},1735:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("img",{attrs:{src:e.url,alt:"刷新重新加载..."}})},i=[],s={name:"imgComp",props:{src:{type:String,required:!1,default:()=>(void 0).url}},data(){return{url:o(701)}},mounted(){var e=new Image;e.src=this.src,e.onerror=()=>{e.src=this.url},e.onload=()=>{this.url=e.src}}},a=s,r=o(1001),l=(0,r.Z)(a,n,i,!1,null,null,null),c=l.exports},7136:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",[e._l(e.menuList,(function(o){return[o.children&&o.children.length>0?t("el-submenu",{key:o.id,attrs:{index:o.id},scopedSlots:e._u([{key:"title",fn:function(){return[o.icon?t("i",{class:o.icon}):e._e(),t("span",[e._v(e._s(o.name))])]},proxy:!0}],null,!0)},[t("side-bar",{attrs:{menuList:o.children}})],1):e._e(),o.children?e._e():t("el-menu-item",{key:o.id,attrs:{index:o.url}},[o.icon?t("i",{class:o.icon}):e._e(),t("span",[e._v(e._s(o.name))])])]}))],2)},i=[],s={name:"sideBar",components:{},props:{menuList:{type:Array,default:()=>[]}},data(){return{}},methods:{},created(){},mounted(){}},a=s,r=o(1001),l=(0,r.Z)(a,n,i,!1,null,"7db35838",null),c=l.exports},4670:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"welcomeBox"},[t("vue-typer",{attrs:{"erase-style":"select-all","caret-animation":"expand","initial-action":"typing",text:e.vueTyperText,repeat:1/0,shuffle:!1,"pre-type-delay":36,"type-delay":100,"pre-erase-delay":2e3,"erase-delay":500,"erase-on-complete":!1}})],1)},i=[],s=o(6614),a={name:"welcomeBox",components:{},props:{},data(){return{vueTyperText:[]}},methods:{getSysConfig(){(0,s.Uy)().then((e=>{200===e.data.code&&(this.vueTyperText=[],this.vueTyperText=[e.data.data.welcomeText,`作者：${e.data.data.author}`,`笔名：${e.data.data.penName}`])}))}},created(){this.getSysConfig()},mounted(){}},r=a,l=o(1001),c=(0,l.Z)(r,n,i,!1,null,"081719b7",null),u=c.exports},7765:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e._self._c;return e.dialogVisible?t("el-dialog",{directives:[{name:"dialog-out",rawName:"v-dialog-out"}],attrs:{title:"请输入解锁码","append-to-body":"","close-on-click-modal":!1,visible:e.dialogVisible,"before-close":e.hideDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{staticClass:"dialog-body"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.formRules,"label-width":"80px"}},[t("el-form-item",{attrs:{size:"small",label:"解锁码 : ",prop:"password"}},[t("el-input",{ref:"input",attrs:{placeholder:"提示密码："+e.placeholder},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.validateForm}},[e._v("确 定")])],1)]):e._e()},i=[],s=o(3822),a=o(6614),r={name:"passwordDialog",components:{},props:{},computed:{permissionArr(){return this.$store.state.permission.permissionArr}},data(){return{formData:{},formRules:{password:[{required:!0,trigger:"blur",validator:this.validatePassword}]},placeholder:"",dialogVisible:!1,resPassword:null}},methods:{...(0,s.nv)(["ADD_PERMISSION"]),showDialog(){null===localStorage.getItem("password")?this.placeholder=this.$store.state.auth.password.randomNum:this.placeholder=JSON.parse(localStorage.getItem("password")).randomNum,this.dialogVisible=!0,this.autoFocus(),this.getPassword()},autoFocus(){this.$nextTick((()=>{let e=this.$refs.input;e&&e.focus()}))},getPassword(){(0,a.Bj)().then((e=>{200===e.data.code&&(this.resPassword=e.data.data.password)}))},hideDialog(){this.formData={},1!==this.$store.state.auth.permission.id&&localStorage.getItem("permission")||this.$parent.moveTo("index?page=1"),this.dialogVisible=!1},validatePassword(e,t,o){if(""===t)o(new Error("请输入解锁码"));else{let e=this.placeholder*this.placeholder+this.placeholder;parseFloat(t)===e?(this.ADD_PERMISSION(this.permissionArr.filter((e=>2===e.id))[0]),o()):parseFloat(t)===this.resPassword+1?(this.ADD_PERMISSION(this.permissionArr.filter((e=>3===e.id))[0]),o()):(this.ADD_PERMISSION(this.permissionArr.filter((e=>1===e.id))[0]),o(new Error("解锁码不正确！")))}},validateForm(){this.$refs.form.validate((e=>{if(!e)return!1;this.submitForm()}))},submitForm(){this.$message.success("解锁成功！"),this.hideDialog()}},created(){},mounted(){}},l=r,c=o(1001),u=(0,c.Z)(l,n,i,!1,null,"1ecbfcd3",null),d=u.exports},6256:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ce}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"indexPage"},[t("homePage",{ref:"homePage"})],1)},i=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"homePage"},[t("div",{staticClass:"section active"},[t("div",{staticClass:"img-box"},[t("hoverShowVideo",{ref:"hoverShowVideo",attrs:{videoOrGif:"gif"}})],1),t("div",{staticClass:"welcome-box positionCenter"},[t("welcomeBox",{ref:"welcomeBox"})],1),t("div",{class:e.isCollapse?"menu-box-collapse":"menu-box"},[t("menuBox",{ref:"menuBox",attrs:{isCollapse:e.isCollapse}})],1)]),t("div",{staticClass:"section"},[t("projectBox",{ref:"projectBox"})],1),t("div",{staticClass:"section fp-auto-height"},[t("div",{staticClass:"open-box"},[t("openBox",{ref:"openBox"})],1)]),t("div",{staticClass:"section fp-auto-height"},[t("friendlyLink",{ref:"friendlyLink"})],1),t("passwordDialog",{ref:"passwordDialog"})],1)},a=[];function r(){return{randomNum:Math.floor(10*Math.random())+1}}var l=o(7765),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menuBox"},[t("div",{staticClass:"menuBox-top",attrs:{title:e.isCollapse?"展开":"收起"}},[t("i",{class:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",on:{click:e.isCollapseMethods}})]),t("el-menu",{staticClass:"el-menu",attrs:{"background-color":"transparent","text-color":"#ffffff",router:"","unique-opened":!0,"default-active":e.$route.path,collapse:e.isCollapse}},[t("sideBar",{attrs:{menuList:e.menuList}})],1)],1)},u=[],d=o(6614);o(7658);function m(e,t){return e.orderNum-t.orderNum}function p(e,t=(()=>{}),o={id:"id",pid:"pid",children:"children"}){e.sort(m);const n=[],i={},s=e.length;for(let a=0;a<s;a++){const n=e[a],s=n[o.id];i[s]=n,t(n)}for(let a=0;a<s;a++){const t=e[a],s=t[o.pid],r=i[s];r?(r[o.children]=r[o.children]||[],r[o.children].push(t)):n.push(t)}return n}var f={name:"menuBox",components:{},props:{isCollapse:{type:Boolean,default:!1}},data(){return{menuList:[]}},methods:{getMenuList(){(0,d.sh)().then((e=>{this.menuList=p(e.data)}))},isCollapseMethods(){this.$parent.changeIsCollapse()}},created(){this.getMenuList()},mounted(){}},h=f,v=o(1001),g=(0,v.Z)(h,c,u,!1,null,"24b67dd8",null),y=g.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"projectBox"},[t("div",{staticClass:"projectBox-top"},[t("div",{staticClass:"projectBox-top-left"},[e._v("工作经历")]),t("div",{staticClass:"projectBox-top-right"},e._l(e.companyList,(function(o,n){return t("span",{key:n},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:o.fullName,placement:"bottom"}},[t("span",{class:e.chooseFlag===n?"choose-it":"",on:{click:function(t){return e.chooseIt(o,n)}}},[e._v(" "+e._s(o.showName)+" ")])])],1)})),0)]),t("div",{staticClass:"slide active"},[t("qiYun",{ref:"qiYun"})],1),t("div",{staticClass:"slide"},[t("tianLing",{ref:"tianLing"})],1)])},b=[],x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qiYun"},[t("el-descriptions",{attrs:{title:e.qiYunData.fullName,column:2,border:""}},[t("el-descriptions-item",{attrs:{label:"在职时间","label-class-name":"my-label","content-class-name":"my-content"}},[e._v(" "+e._s(e.qiYunData.duration)+" ")]),t("el-descriptions-item",{attrs:{label:"所在岗位","label-class-name":"my-label","content-class-name":"my-content"}},[e._v(" "+e._s(e.qiYunData.post)+" ")]),t("el-descriptions-item",{attrs:{label:"工作内容","label-class-name":"my-label","content-class-name":"my-content"}},[e._v(" "+e._s(e.qiYunData.workAbout)+" ")])],1),t("div",{staticClass:"qiYun-title"},[e._v("项目经历")]),t("div",{staticClass:"qiYun-project"},[t("el-carousel",{attrs:{"indicator-position":"outside",interval:1e4,arrow:"always"}},e._l(e.resProjectArr,(function(o,n){return t("el-carousel-item",{key:n},e._l(o,(function(o){return t("div",{key:o.id,staticClass:"qiYun-project-public"},[t("div",{staticClass:"img",on:{click:function(t){return e.showImgDialog(o)}}},[t("imgComp",{staticClass:"imgComp",attrs:{src:e._f("imgFormat")(`/img/qiYunProject/${o.name}.png`)}})],1),t("div",{staticClass:"info",on:{click:function(t){return e.showProjectDetailDialog(o)}}},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:`点击查看${o.name}详情`,placement:"top"}},[t("span",{staticClass:"info-name"},[e._v(e._s(o.name))]),t("span",{staticClass:"info-time"},[e._v(e._s(o.time))])])],1)])})),0)})),1)],1),e.showPic?t("div",{staticClass:"picBox"},[t("div",{staticClass:"picBox-close"},[t("span",[e._v(" "+e._s(e.showPicName)+" ")]),t("i",{staticClass:"el-icon-close",on:{click:function(t){e.showPic=!e.showPic}}})]),t("imgComp",{attrs:{src:e._f("imgFormat")(`/img/qiYunProject/${e.showPicName}.png`)}})],1):e._e()],1)},_=[],C=o(3094);let k="https://mock.apifox.com/m1/3871863-0-default";function D(){return(0,C.Z)({url:k+"/qiYun/encryption",method:"get",headers:{isToken:!0}})}function P(){return(0,C.Z)({url:k+"/tianLing/encryption",method:"get",headers:{isToken:!0}})}function L(){return(0,C.Z)({url:k+"/companyList/encryption",method:"get",headers:{isToken:!0}})}function S(e,t){const o=[];let n=0;while(n<e.length)o.push(e.slice(n,n+t)),n+=t;return o}var j={name:"qiYun",components:{},props:{},computed:{},data(){return{showPic:!1,showPicName:null,qiYunData:{},resProjectArr:[]}},methods:{showImgDialog(e){this.showPic=!0,this.showPicName=e.name},showProjectDetailDialog(e){console.log(e)},getQiYunData(){D().then((e=>{this.qiYunData=e.data,this.resProjectArr=e.data?.projectList&&e.data.projectList.length>0?S(e.data.projectList,6):[]}))}},created(){this.getQiYunData()},mounted(){}},B=j,A=(0,v.Z)(B,x,_,!1,null,"421bb138",null),N=A.exports,$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tianLing"},[t("el-descriptions",{attrs:{title:e.tianLingData.fullName,column:2,border:""}},[t("el-descriptions-item",{attrs:{label:"在职时间","label-class-name":"my-label","content-class-name":"my-content"}},[e._v(" "+e._s(e.tianLingData.duration)+" ")]),t("el-descriptions-item",{attrs:{label:"所在岗位"}},[e._v(" "+e._s(e.tianLingData.post)+" ")]),t("el-descriptions-item",{attrs:{label:"工作内容"}},[e._v(" "+e._s(e.tianLingData.workAbout)+" ")])],1),t("div",{staticClass:"tianLing-title"},[e._v("项目经历")]),t("div",{staticClass:"tianLing-project"},[t("el-carousel",{attrs:{"indicator-position":"outside",interval:1e4,arrow:"always"}},e._l(e.resProjectArr,(function(o,n){return t("el-carousel-item",{key:n},e._l(o,(function(o){return t("div",{key:o.id,staticClass:"tianLing-project-public"},[t("div",{class:-1===o.name.indexOf("App")?"img":"imgApp",on:{click:function(t){return e.showImgDialog(o)}}},[t("imgComp",{staticClass:"imgComp",attrs:{src:e._f("imgFormat")(`/img/tianLingProject/${o.name}.png`)}})],1),t("div",{staticClass:"info",on:{click:function(t){return e.showProjectDetailDialog(o)}}},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:`点击查看${o.name}详情`,placement:"top"}},[t("span",{staticClass:"info-name"},[e._v(e._s(o.name))]),t("span",{staticClass:"info-time"},[e._v(e._s(o.time))])])],1)])})),0)})),1)],1),e.showPic?t("div",{staticClass:"picBox",style:{width:-1===e.showPicName.indexOf("App")?"1200px":"380px"}},[t("div",{staticClass:"picBox-close"},[t("span",[e._v(" "+e._s(e.showPicName)+" ")]),t("i",{staticClass:"el-icon-close",on:{click:function(t){e.showPic=!e.showPic}}})]),t("imgComp",{attrs:{src:e._f("imgFormat")(`/img/tianLingProject/${e.showPicName}.png`)}})],1):e._e()],1)},O=[],E={name:"tianLing",components:{},props:{},computed:{},data(){return{showPic:!1,showPicName:null,tianLingData:{},resProjectArr:[]}},methods:{showImgDialog(e){this.showPic=!0,this.showPicName=e.name},showProjectDetailDialog(e){console.log(e)},getTianLingData(){P().then((e=>{this.tianLingData=e.data,this.resProjectArr=e.data?.projectList&&e.data.projectList.length>0?S(e.data.projectList,6):[]}))}},created(){this.getTianLingData()},mounted(){}},T=E,I=(0,v.Z)(T,$,O,!1,null,"2eb7a642",null),F=I.exports,M={name:"projectBox",components:{qiYun:N,tianLing:F},props:{},data(){return{chooseFlag:0,companyList:[]}},methods:{chooseIt(e,t){this.chooseFlag=t,this.$parent.moveTo("index?page=2",t)},autoPlay(){this.time=setInterval((()=>{this.$refs.page.api.moveSlideRight()}),15e3)},updateChooseFlag(e){this.chooseFlag=e},getCompanyList(){L().then((e=>{this.companyList=e.data}))}},created(){this.getCompanyList()},mounted(){},destroyed(){}},q=M,Z=(0,v.Z)(q,w,b,!1,null,"1c137dcb",null),Y=Z.exports,R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"friendlyLink"},[t("div",{staticClass:"friendlyLink-outBox1"},[t("div",{staticClass:"friendlyLink-title"},[e._v("关于我：")]),e._l(e.friendlyLinkObj,(function(o,n){return t("div",{key:n},[t("div",{staticClass:"friendlyLink-outBox1-box"},[t("div",{staticClass:"friendlyLink-outBox1-icon"},[t("i",{class:`iconfont icon-${n}`}),t("span",[e._v(e._s(n)+":")])]),t("div",{staticClass:"friendlyLink-outBox1-aBox"},[t("a",{staticClass:"friendlyLink-outBox1-a",attrs:{href:o,target:"_blank"}},[e._v(" "+e._s(o)+" ")])])])])}))],2),t("div",{staticClass:"friendlyLink-outBox2"},[t("div",{staticClass:"friendlyLink-title"},[e._v("留言板：")]),t("div",{staticClass:"friendlyLink-outBox2-form"},[t("el-form",{ref:"form",attrs:{rules:e.formRules,model:e.formData,"label-width":"96px"}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名: ",prop:"name"}},[t("el-input",{attrs:{clearable:"",size:"mini",placeholder:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}},[t("i",{staticClass:"iconfont icon-xingming",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"邮箱: ",prop:"email"}},[t("el-input",{attrs:{clearable:"",size:"mini",placeholder:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}},[t("i",{staticClass:"iconfont icon-youxiang",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"留言内容: ",prop:"message"}},[t("el-input",{attrs:{clearable:"",size:"mini",placeholder:"",type:"textarea",rows:"3",maxlength:"300","show-word-limit":""},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1)],1)],1)],1),t("div",{staticClass:"friendlyLink-outBox2-btn"},[t("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small"},on:{click:e.validateForm}},[e._v(" 发 送")])],1)],1)])])},z=[],V={name:"friendlyLink",components:{},props:{},data(){return{friendlyLinkObj:{},formData:{},formRules:{email:[{required:!0,message:"请输入邮箱！",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址！",trigger:["blur","change"]}],message:[{required:!0,message:"请输入留言内容！",trigger:"blur"}]},fullscreenLoading:!1}},methods:{getFriendlyLink(){(0,d.hD)().then((e=>{200===e.data.code&&(this.friendlyLinkObj=e.data.data)}))},validateForm(){this.$refs.form.validate((e=>{if(!e)return!1;this.submitForm()}))},submitForm(){this.fullscreenLoading=!0,this.$axios({method:"post",url:"https://formspree.io/f/xzblkknl",headers:{"Content-Type":"text/html; charset=utf-8"},data:this.formData}).then((e=>{e.data.ok&&(this.fullscreenLoading=!1,this.$message.success("发送成功！"),this.formData={})})).catch((e=>{throw this.fullscreenLoading=!1,e}))}},created(){this.getFriendlyLink()},mounted(){}},W=V,H=(0,v.Z)(W,R,z,!1,null,"14812586",null),X=H.exports,U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"openBox"},[e._m(0),t("div",{staticClass:"openBox-content"},[t("el-carousel",{attrs:{interval:1e4,type:"card",arrow:"always"}},e._l(e.openProjectData,(function(o,n){return t("el-carousel-item",{key:n},[t("div",{staticClass:"openBox-content-box"},[t("div",{on:{click:function(t){return e.showImgDialog(o)}}},[t("imgComp",{staticClass:"imgComp",attrs:{src:e._f("imgFormat")(`/img/openProject/${o.projectName}.png`)}})],1),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:`点击访问${o.projectName}线上地址`,placement:"top"}},[t("div",{staticClass:"openBox-content-box-content",on:{click:function(t){return e.openProjectLink(o.projectLink)}}},[t("span",{staticClass:"openBox-content-box-content-name"},[e._v(" "+e._s(o.projectName)+" ")]),t("span",{staticClass:"openBox-content-box-content-info"},[e._v(" "+e._s(o.moreInfo)+" ")])])])],1)])})),1)],1),e.showPic?t("div",{staticClass:"picBox"},[t("div",{staticClass:"picBox-close"},[t("span",[e._v(" "+e._s(e.showPicName)+" ")]),t("i",{staticClass:"el-icon-close",on:{click:function(t){e.showPic=!e.showPic}}})]),t("imgComp",{attrs:{src:e._f("imgFormat")(`/img/openProject/${e.showPicName}.png`)}})],1):e._e()])},G=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"openBox-top"},[t("div",{staticClass:"openBox-top-left"},[e._v("开源项目")]),t("div",{staticClass:"openBox-top-right"})])}],J={name:"openBox",components:{},props:{},data(){return{showPic:!1,showPicName:null,openProjectData:[]}},methods:{getOpenProjectData(){(0,d.dn)().then((e=>{200===e.data.code&&(this.openProjectData=e.data.data)}))},showImgDialog(e){this.showPic=!0,this.showPicName=e.projectName},openProjectLink(e){window.open(e,"_blank")}},created(){this.getOpenProjectData()},mounted(){},destroyed(){}},Q=J,K=(0,v.Z)(Q,U,G,!1,null,"6924d242",null),ee=K.exports,te=o(3822),oe={components:{passwordDialog:l.Z,menuBox:y,projectBox:Y,friendlyLink:X,openBox:ee},data(){return{isCollapse:!0}},computed:{permissionArr(){return this.$store.state.permission.permissionArr}},methods:{...(0,te.nv)(["ADD_PASSWORD"]),handleScroll(e){console.log(this.$store.state.auth.permission,"permission"),1!==this.$store.state.auth.permission.id&&localStorage.getItem("permission")||this.$refs.passwordDialog.showDialog()},setPassword(){this.ADD_PASSWORD(r())},changeIsCollapse(){this.isCollapse=!this.isCollapse},initFullPage(){let e=this;new fullpage(".homePage",{autoScrolling:!0,scrollHorizontally:!0,recordHistory:!1,anchors:["index?page=1","index?page=2","index?page=3","index?page=4"],sectionsColor:[null,null,null,null],easingcss3:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",controlArrows:!1,slidesNavigation:!0,onLeave:function(t,o,n){e.handleScroll()},onSlideLeave(t,o,n,i,s){e.$refs.projectBox.updateChooseFlag(n.index)}})},destroyFullPage(){fullpage_api.destroy("all")},moveTo(e,t){fullpage_api.moveTo(e,t)},initPermission(){let e=localStorage.getItem("permission");e&&this.$store.dispatch("ADD_PERMISSION",this.permissionArr.filter((t=>t.localSet===e))[0])}},created(){console.log(this.permissionArr),this.initPermission(),this.setPassword()},mounted(){console.warn("%c联系我:mhf.work@qq.com","font-size:18px;color:red;"),console.error("请勿在此输入非法内容！"),this.initFullPage()},destroyed(){this.destroyFullPage()}},ne=oe,ie=(0,v.Z)(ne,s,a,!1,null,"7ffe0e17",null),se=ie.exports,ae={name:"index",components:{homePage:se},props:{},data(){return{}},methods:{},created(){},mounted(){}},re=ae,le=(0,v.Z)(re,n,i,!1,null,"7585c8aa",null),ce=le.exports},6614:function(e,t,o){"use strict";o.d(t,{Bj:function(){return l},Uy:function(){return i},dn:function(){return r},hD:function(){return a},sh:function(){return s}});var n=o(3094);function i(){return(0,n.Z)({url:"/sysConfig",method:"get"})}function s(){return(0,n.Z)({url:"/menuList",method:"get"})}function a(){return(0,n.Z)({url:"/friendlyLink",method:"get"})}function r(){return(0,n.Z)({url:"/openProject",method:"get"})}function l(){return(0,n.Z)({url:"/password",method:"get"})}},2357:function(e,t,o){"use strict";var n=o(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],a=o(1001),r={},l=(0,a.Z)(r,i,s,!1,null,null,null),c=l.exports,u=o(2631),d=o(6256);n["default"].use(u.ZP);const m=[{path:"",component:d["default"],redirect:"/index",children:[{path:"index",component:()=>Promise.resolve().then(o.bind(o,6256)),name:"Index",meta:{title:"欢迎来到毛三仙的博客"}}]},{path:"/about",name:"about",meta:{title:"about"},component:()=>o.e(900).then(o.bind(o,3275))},{path:"/workExperience",name:"workExperience",meta:{title:"工作经历"},component:()=>o.e(900).then(o.bind(o,1964))},{path:"/educationExperience",name:"educationExperience",meta:{title:"教育经历"},component:()=>o.e(194).then(o.bind(o,14))},{path:"/openProjects",name:"openProjects",meta:{title:"开源项目"},component:()=>o.e(914).then(o.bind(o,3513))},{path:"/friendlyLinks",name:"friendlyLinks",meta:{title:"友情链接"},component:()=>o.e(995).then(o.bind(o,623))},{path:"/contactMe",name:"contactMe",meta:{title:"联系我"},component:()=>o.e(984).then(o.bind(o,9208))},{path:"/future",redirect:"/annualSummarize",name:"annualSummarize",meta:{title:"年度总结"},component:()=>o.e(239).then(o.bind(o,4721)),children:[{path:"/annualSummarize",name:"annualSummarize",meta:{title:"年度总结"},component:()=>o.e(239).then(o.bind(o,9502))},{path:"/annualPlan",name:"annualPlan",meta:{title:"年度计划"},component:()=>o.e(325).then(o.bind(o,8541))}]}],p=new u.ZP({mode:"hash",base:"/mhf/",routes:m});p.afterEach((e=>{document.title=e.meta.title||"毛三仙的博客"}));var f=p,h=o(3822);n["default"].use(h.ZP);const v=o(2645),g=v.keys().reduce(((e,t)=>{const o=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=v(t);return e[o]=n.default,e}),{});var y=new h.ZP.Store({modules:g}),w=o(4161);n["default"].prototype.$axios=w.Z;var b=o(8499),x=o.n(b);n["default"].use(x());let _=o(2525);_.keys().forEach((e=>{const t=_(e),o=t.default||t;n["default"].component(o.name,o)}));var C=o(3839),k=o.n(C);n["default"].use(k());var D={bind(e,t,o,n){const i=t.value;if(0==i)return;const s=e.querySelector(".el-dialog__header"),a=e.querySelector(".el-dialog");s.style.cursor="move";const r=a.currentStyle||window.getComputedStyle(a,null);a.style.position="absolute",a.style.marginTop=0;let l=a.style.width;l=l.includes("%")?+document.body.clientWidth*(+l.replace(/\%/g,"")/100):+l.replace(/\px/g,""),a.style.left=(document.body.clientWidth-l)/2+"px",s.onmousedown=e=>{const t=e.clientX-s.offsetLeft,o=e.clientY-s.offsetTop;let n,i;r.left.includes("%")?(n=+document.body.clientWidth*(+r.left.replace(/\%/g,"")/100),i=+document.body.clientHeight*(+r.top.replace(/\%/g,"")/100)):(n=+r.left.replace(/\px/g,""),i=+r.top.replace(/\px/g,"")),document.onmousemove=function(e){const s=e.clientX-t,r=e.clientY-o,l=s+n,c=r+i;a.style.left=`${l}px`,a.style.top=`${c}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},P={bind(e){const t=e.querySelector(".el-dialog"),o=document.createElement("div");o.style="width: 5px; background: inherit; height: 80%; position: absolute; right: 0; top: 0; bottom: 0; margin: auto; z-index: 1; cursor: w-resize;",o.addEventListener("mousedown",(function(o){const n=o.clientX-e.offsetLeft,i=t.offsetWidth;document.onmousemove=function(e){e.preventDefault();const o=e.clientX-n;t.style.width=`${i+o}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(o)}},L={bind(e){const t=e.querySelector(".el-dialog"),o=document.createElement("div");o.style="width: 6px; background: inherit; height: 10px; position: absolute; right: 0; bottom: 0; margin: auto; z-index: 1; cursor: nwse-resize;",o.addEventListener("mousedown",(function(o){const n=o.clientX-e.offsetLeft,i=o.clientY-e.offsetTop,s=t.offsetWidth,a=t.offsetHeight;document.onmousemove=function(e){e.preventDefault();const o=e.clientX-n,r=e.clientY-i;t.style.width=`${s+o}px`,t.style.height=`${a+r}px`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(o)}},S=o(8134),j=o.n(S),B={bind(e,t,o){switch(t.arg){case"success":e._vClipBoard_success=t.value;break;case"error":e._vClipBoard_error=t.value;break;default:{const o=new(j())(e,{text:()=>t.value,action:()=>"cut"===t.arg?"cut":"copy"});o.on("success",(t=>{const o=e._vClipBoard_success;o&&o(t)})),o.on("error",(t=>{const o=e._vClipBoard_error;o&&o(t)})),e._vClipBoard=o}}},update(e,t){"success"===t.arg?e._vClipBoard_success=t.value:"error"===t.arg?e._vClipBoard_error=t.value:(e._vClipBoard.text=function(){return t.value},e._vClipBoard.action=()=>"cut"===t.arg?"cut":"copy")},unbind(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipBoard_success:"error"===t.arg?delete e._vClipBoard_error:(e._vClipBoard.destroy(),delete e._vClipBoard))}},A={bind(e){e.addEventListener("mousedown",n),window.addEventListener("mouseup",i),window.addEventListener("mousemove",s);let t=!1,o={x:0,y:0};function n(n){n.preventDefault(),n.target.style.cursor="move",t=!0;const i=n.clientX-e.offsetLeft,s=n.clientY-e.offsetTop;o={x:i,y:s}}function i(e){t=!1,e.target.style.cursor="default"}function s(n){if(!t)return;n.target.style.cursor="move";const i=n.clientX-o.x,s=n.clientY-o.y;e.style.left=`${i}px`,e.style.top=`${s}px`}e._dragHandlers={handleMouseDown:n,handleMouseUp:i,handleMouseMove:s}},unbind(e){const{handleMouseDown:t,handleMouseUp:o,handleMouseMove:n}=e._dragHandlers||{};e.removeEventListener("mousedown",t),window.removeEventListener("mouseup",o),window.removeEventListener("mousemove",n)}},N={bind:function(e,t,o){const n=e.querySelector(".el-dialog__header"),i=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",i.style.cssText+=";top:0px;";const s=function(){return window.document.currentStyle?(e,t)=>e.currentStyle[t]:(e,t)=>getComputedStyle(e,!1)[t]}();n.onmousedown=e=>{const t=e.clientX-n.offsetLeft,a=e.clientY-n.offsetTop,r=i.offsetWidth,l=i.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,d=i.offsetLeft,m=c-i.offsetLeft-r,p=i.offsetTop,f=u-i.offsetTop-l;let h=s(i,"left"),v=s(i,"top");h.includes("%")?(h=+document.body.clientWidth*(+h.replace(/%/g,"")/100),v=+document.body.clientHeight*(+v.replace(/%/g,"")/100)):(h=+h.replace(/\px/g,""),v=+v.replace(/\px/g,"")),document.onmousemove=function(e){let n=e.clientX-t,s=e.clientY-a;-n>d?n=-d:n>m&&(n=m),-s>p?s=-p:s>f&&(s=f),i.style.cssText+=`;left:${n+h}px;top:${s+v}px;`,o&&o.child.$emit("dragDialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}};const $={clipboard:B,dialogDrag:D,dialogDragWidth:P,dialogDragHeight:L,divDrag:A,dialogOut:N};var O={install(e){Object.keys($).forEach((t=>{e.directive(t,$[t])}))}};n["default"].use(O);var E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"update-modal"},[t("div",{staticClass:"title"},[e._v("系统更新🚀")]),t("div",{staticClass:"content"},[e._v(" 系统已更新，请刷新页面（请在刷新前注意保存当前页面数据）。 ")]),t("div",{staticClass:"actions"},[t("button",{on:{click:e.handleAfterLeave}},[e._v("忽略")]),t("button",{on:{click:e.refresh}},[e._v("刷新")])])])},T=[],I={methods:{handleAfterLeave(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},refresh(){this.handleAfterLeave(),location.reload(!0)}}},F=I,M=(0,a.Z)(F,E,T,!1,null,"11a299e5",null),q=M.exports;let Z=0,Y="",R=!0,z=null,V=async()=>{if(Z>=5)return clearInterval(z),z=null;let e=await fetch(`/version.txt?v=${(new Date).getTime().toString()}`).then((e=>e.json())).catch((e=>(console.log(e),H())));if(Y){if(Y!=e){console.log("发现版本更新",Y);let e=n["default"].extend(q),t=new e({data:{}});return t.id=(new Date).getTime().toString(),t.$mount(),document.body.appendChild(t.$el),H()}}else Y=e,console.log("首次加载版本",Y);Z++},W=()=>{R&&(Z=0,z||(z=setInterval(V,1e3)))};R&&(z=setInterval(V,5e3)),window.addEventListener("mousemove",W);let H=()=>{clearInterval(z),window.removeEventListener("mousemove",W),z=null};function X(e){return"string"===typeof e?"/mhf"+e:"object"===typeof e?["/mhf"+e[0]]:void 0}var U={imgFormat:X};const G=function(e,t){e.filter("imgFormat",U.imgFormat)};var J={install:G};n["default"].use(J),n["default"].config.productionTip=!1,new n["default"]({router:f,store:y,render:e=>e(c)}).$mount("#app")},9542:function(e,t,o){"use strict";o.r(t);const n={state:{password:{},permission:{id:1,name:"visitor",localSet:"AvAiAsAiAtAoArA"}},mutations:{SET_PASSWORD(e,t){e.password=t},SET_PERMISSION(e,t){e.permission=t}},actions:{ADD_PASSWORD(e,t){let o=JSON.parse(localStorage.getItem("password"));o&&null!==o&&void 0!==o||(e.commit("SET_PASSWORD",t),localStorage.setItem("password",JSON.stringify(t)))},ADD_PERMISSION(e,t){e.commit("SET_PERMISSION",t),localStorage.setItem("permission",t.localSet)}},getters:{}};t["default"]=n},6042:function(e,t,o){"use strict";o.r(t);const n={state:{permissionArr:[{id:1,name:"visitor",localSet:"AvAiAsAiAtAoArA"},{id:2,name:"fans",localSet:"BfBaBnBsB"},{id:3,name:"root",localSet:"CrCoCoCtC"}]}};t["default"]=n},3094:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var n=o(4161),i=o(8499);const s={key:"apifoxToken",value:"s3yRjMF58RDf8nk9BZmovIBXlMiDwJRO"};var a=s;const r=n.Z.create({baseURL:"https://www.fastmock.site/mock/01d7d6d0a934e4d253824d116bb7ed57/myWeb",timeout:5e3});r.interceptors.request.use((e=>{const t=(e.headers||{}).isToken;return t&&(e.headers[a.key]=a.value),e}),(e=>Promise.reject(e))),r.interceptors.response.use((e=>e),(e=>(console.log("err"+e),(0,i.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e))));var l=r},2525:function(e,t,o){var n={"./hoverShowVideo.vue":7559,"./imgComp.vue":1735,"./sideBar.vue":7136,"./welcomeBox.vue":4670};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=2525},2645:function(e,t,o){var n={"./auth.js":9542,"./permission.js":6042};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=2645},1729:function(e,t,o){"use strict";e.exports=o.p+"img/doodles.c40ef580.gif"},1970:function(e,t,o){"use strict";e.exports=o.p+"img/doodles.454e09ca.jpeg"},701:function(e,t,o){"use strict";e.exports=o.p+"img/loading.9ebd367e.gif"},823:function(e,t,o){"use strict";e.exports=o.p+"media/doodles.992ad7ce.mp4"}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,n,i,s){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],s=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<a&&(a=s));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,i,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+{194:"educationExperience",239:"annualSummarize",325:"annualPlan",900:"workExperience",914:"openProjects",984:"contactMe",995:"friendlyLinks"}[e]+"."+{194:"6e7caa69",239:"f6c56a01",325:"af8d4238",900:"2aace21a",914:"7b1c9ad3",984:"9e9a7576",995:"0cbdc070"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/workExperience.8f215d48.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-web:";o.l=function(n,i,s,a){if(e[n])e[n].push(i);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",t+s),r.src=n),e[n]=[i];var m=function(t,o){r.onerror=r.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/mhf/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=r,s.parentNode&&s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=a,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var i=o[n],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){i=a[n],s=i.getAttribute("data-href");if(s===e||s===t)return i}},n=function(n){return new Promise((function(i,s){var a=o.miniCssF(n),r=o.p+a;if(t(a,r))return i();e(n,r,null,i,s)}))},i={143:0};o.f.miniCss=function(e,t){var o={900:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=n(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(o,n){i=e[t]=[o,n]}));n.push(i[2]=s);var a=o.p+o.u(t),r=new Error,l=function(n){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,i[1](r)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,a=n[0],r=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var u=l(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkmy_web"]=self["webpackChunkmy_web"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2357)}));n=o.O(n)})();
//# sourceMappingURL=app.3ffb5ba4.js.map