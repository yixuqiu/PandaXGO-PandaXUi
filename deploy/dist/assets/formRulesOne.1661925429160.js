var B=Object.defineProperty;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(u,e,o)=>e in u?B(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o,c=(u,e)=>{for(var o in e||(e={}))F.call(e,o)&&f(u,o,e[o]);if(p)for(var o of p(e))b.call(e,o)&&f(u,o,e[o]);return u};import{_ as D,k as V,m as A,p as E,a as v,h as l,w as a,r as t,o as h}from"./index.1661925429160.js";const w={name:"pagesFormRulesOne",props:{data:{type:Object,default:()=>{}}},setup(u){const e=V({form:{},rules:{name:{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"},email:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",trigger:"blur"},autograph:{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u9646\u8D26\u6237\u540D",trigger:"blur"},occupation:{required:!0,message:"\u8BF7\u9009\u62E9\u804C\u52A1",trigger:"change"}}}),o=()=>{e.form=u.data};return A(()=>{o()}),c({},E(e))}},C={class:"form-rules-one-container"};function R(u,e,o,q,O,U){const n=t("el-input"),m=t("el-form-item"),s=t("el-col"),d=t("el-option"),i=t("el-select"),_=t("el-row"),g=t("el-form");return h(),v("div",C,[l(g,{model:u.form,rules:u.rules,ref:"formRulesOneRef","label-width":"100px",class:"mt35"},{default:a(()=>[l(_,{gutter:35},{default:a(()=>[l(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:a(()=>[l(m,{label:"\u59D3\u540D",prop:"name"},{default:a(()=>[l(n,{modelValue:u.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>u.form.name=r),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:a(()=>[l(m,{label:"\u90AE\u7BB1",prop:"email"},{default:a(()=>[l(n,{modelValue:u.form.email,"onUpdate:modelValue":e[1]||(e[1]=r=>u.form.email=r),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:a(()=>[l(m,{label:"\u767B\u9646\u8D26\u6237\u540D",prop:"autograph"},{default:a(()=>[l(n,{modelValue:u.form.autograph,"onUpdate:modelValue":e[2]||(e[2]=r=>u.form.autograph=r),placeholder:"\u8BF7\u8F93\u5165\u767B\u9646\u8D26\u6237\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:a(()=>[l(m,{label:"\u804C\u52A1",prop:"occupation"},{default:a(()=>[l(i,{modelValue:u.form.occupation,"onUpdate:modelValue":e[3]||(e[3]=r=>u.form.occupation=r),placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",clearable:"",class:"w100"},{default:a(()=>[l(d,{label:"\u8BA1\u7B97\u673A / \u4E92\u8054\u7F51 / \u901A\u4FE1",value:"1"}),l(d,{label:"\u751F\u4EA7 / \u5DE5\u827A / \u5236\u9020",value:"2"}),l(d,{label:"\u533B\u7597 / \u62A4\u7406 / \u5236\u836F",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}var x=D(w,[["render",R]]);export{x as default};
