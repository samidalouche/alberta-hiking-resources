const e='const e=\'import{d as p,h as w,b as _,o as r,e as u,w as g,c as y,i as d,l as h,t as b,k,u as B,q as v}from"./CYbnhFt7.js";import{a as C}from"./D2_9AgyA.js";import{_ as I}from"./BSP8v4yS.js";const $={key:0,class:"flex items-center border-b p-3 font-mono text-sm"},S={class:"w-auto bg-muted/30 p-2"},V=p({__name:"FileTree",props:{title:{},icon:{},autoSlash:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},tree:{}},setup(i){const a=new Map(Object.entries(w().value.main.codeIcon));function l(e,s){if(e!=="...")return e.endsWith("/")?"lucide:folder":a.get(e.split(".")[e.split(".").length-1])||a.get(e.toLowerCase())||(s==="file"?"lucide:file":"lucide:folder")}function c(e,s,o){let t=e,n=!1;return t.startsWith("^")&&t.endsWith("^")&&(t=t.substring(1,t.length-1),n=!0),s==="file"?{title:t,icon:l(t,"file"),highlighted:n}:{title:`${t}${i.autoSlash?"/":""}`,icon:l(t,"folder"),children:o&&f(o),highlighted:n}}function f(e){const s=[];for(const o of e)if(typeof o=="string")s.push(c(o,"file"));else if(typeof o=="object")for(const t of Object.keys(o))s.push(c(t,"folder",o[t]));return s}const m=_(()=>f(i.tree));return(e,s)=>{const o=v,t=C,n=I;return r(),u(n,{class:"relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5"},{default:g(()=>[e.title?(r(),y("div",$,[e.icon?(r(),u(o,{key:0,name:e.icon,class:"mr-1.5"},null,8,["name"])):d("",!0),h("span",null,b(e.title),1)])):d("",!0),h("div",S,[k(t,{tree:B(m),"show-arrow":e.showArrow,"show-icon":e.showIcon,level:0},null,8,["tree","show-arrow","show-icon"])])]),_:1})}}});export{V as default};\\n\';export{e as default};\n';export{e as default};
