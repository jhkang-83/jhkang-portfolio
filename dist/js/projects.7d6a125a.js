(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"40fe":function(t,e,r){"use strict";r("546c")},"546c":function(t,e,r){},"76fc":function(t,e,r){"use strict";r.r(e);var c=r("7a23"),a={class:"container mx-auto mt-10 sm:mt-20"};function n(t,e,r,n,i,s){var l=Object(c["y"])("SingleProjectHeader"),o=Object(c["y"])("SingleProjectInfo");return Object(c["r"])(),Object(c["e"])("div",a,[Object(c["h"])(l,{title:i.projectData.title,platform:i.projectData.platform,task:i.projectData.task,tech_stack:i.projectData.tech_stack},null,8,["title","platform","task","tech_stack"]),Object(c["h"])(o,{desc:i.projectData.desc,project_img:i.projectData.project_img},null,8,["desc","project_img"])])}var i=r("1da1"),s=r("5530"),l=(r("96cf"),r("a9e3"),r("7db0"),r("5502"));Object(c["u"])("data-v-0e341315");var o={class:"text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-20 mb-7"},j={style:{display:"flex","padding-bottom":"10px"}},d=Object(c["f"])("div",{class:"flex items-center list-title"},[Object(c["f"])("i",{class:"header-list-icon"}),Object(c["f"])("div",{class:"text-primary-gray dark:text-primary-light"},"platform")],-1),b={class:"list-item"},f={style:{display:"flex","padding-bottom":"10px"}},u=Object(c["f"])("div",{class:"flex items-center list-title"},[Object(c["f"])("i",{class:"header-list-icon"}),Object(c["f"])("div",{class:"text-primary-gray dark:text-primary-light"},"task")],-1),p={class:"list-item"},O={style:{display:"flex","padding-bottom":"10px"}},m=Object(c["f"])("div",{class:"flex items-center list-title"},[Object(c["f"])("i",{class:"header-list-icon"}),Object(c["f"])("div",{class:"text-primary-gray dark:text-primary-light"},"task")],-1),y={class:"list-item"},x=Object(c["f"])("div",{class:"h-line"},null,-1);function g(t,e,r,a,n,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",null,[Object(c["f"])("p",o,Object(c["A"])(r.title),1)]),Object(c["f"])("div",null,[Object(c["f"])("div",j,[d,Object(c["f"])("div",b,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.platform,(function(t,e){return Object(c["r"])(),Object(c["e"])("span",{key:e,class:Object(c["n"])(["select-value-color-".concat(Math.floor(8*Math.random())),"header-list-margin text-ternary-dark dark:text-ternary-light"])},Object(c["A"])(t),3)})),128))])]),Object(c["f"])("div",f,[u,Object(c["f"])("div",p,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.task,(function(t,e){return Object(c["r"])(),Object(c["e"])("span",{key:e,class:Object(c["n"])(["select-value-color-".concat(Math.floor(8*Math.random())),"header-list-margin text-ternary-dark dark:text-ternary-light"])},Object(c["A"])(t),3)})),128))])]),Object(c["f"])("div",O,[m,Object(c["f"])("div",y,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.tech_stack,(function(t,e){return Object(c["r"])(),Object(c["e"])("span",{key:e,class:Object(c["n"])(["select-value-color-".concat(Math.floor(8*Math.random())),"header-list-margin text-ternary-dark dark:text-ternary-light"])},Object(c["A"])(t),3)})),128))])])]),x],64)}Object(c["s"])();var h={name:"Projects",props:{title:{type:String,default:""},platform:{type:Array,default:function(){return[]}},task:{type:Array,default:function(){return[]}},tech_stack:{type:Array,default:function(){return[]}}}};r("40fe");h.render=g,h.__scopeId="data-v-0e341315";var v=h,k={class:"block sm:flex gap-0 sm:gap-10"},_={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},A=["src"];function w(t,e,a,n,i,s){return Object(c["r"])(),Object(c["e"])("div",k,[Object(c["f"])("div",_,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.desc,(function(t,e){return Object(c["r"])(),Object(c["e"])("p",{key:e,class:"mb-5 text-sm text-gray-600"},Object(c["A"])(t),1)})),128))]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.project_img,(function(t,e){return Object(c["r"])(),Object(c["e"])("div",{class:"mb-10 sm:mb-0",key:e},[Object(c["f"])("img",{src:r("7584")("./".concat(t))},null,8,A)])})),128))])}var P={name:"Projects",props:{desc:{type:Array,default:function(){return[]}},project_img:{type:Array,default:function(){return[]}}}};P.render=w;var L=P,D={name:"Projects",components:{SingleProjectHeader:v,SingleProjectInfo:L},computed:Object(l["c"])(["projectList"]),props:{projectNo:{type:Number,default:null},projectArr:{type:Object,required:!0}},data:function(){return{projectData:{desc:[],no:null,platform:[],project_img:[],task:[],tech_stack:[],title:""}}},mounted:function(){},created:function(){this.getList()},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])({GET_PROJECT_LIST:"initProjectList"})),{},{getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.GET_PROJECT_LIST();case 2:t.projectData=t.projectList.find((function(e){return e.no===t.projectNo})),console.log("projectNo >>>",t.projectNo),console.log("create projectList >>>",t.projectList);case 5:case"end":return e.stop()}}),e)})))()}})};D.render=n;e["default"]=D},"7db0":function(t,e,r){"use strict";var c=r("23e7"),a=r("b727").find,n=r("44d2"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),c({target:"Array",proto:!0,forced:s},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)}}]);
//# sourceMappingURL=projects.7d6a125a.js.map