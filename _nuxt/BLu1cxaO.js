import{d as w,b as h,h as C,o as i,e as g,w as _,c as b,u as n,U as d,C as u,P as k,A as r,a1 as v,t as y,r as S,a2 as $,D as B,a3 as G}from"./BsCsd1iR.js";import{_ as z}from"./BNBZ-5cE.js";import{_ as M}from"./BAim3QKB.js";const N={key:0,class:"flex items-center border-b p-3 font-mono text-sm"},U={key:1,class:"absolute right-3 top-3 z-10"},V={class:"bg-muted/30"},L=w({__name:"ProseCode",props:{code:{default:""},language:{},filename:{},inGroup:{type:Boolean,default:!1},inStack:{type:Boolean,default:!1},highlights:{},meta:{}},setup(a){const s=h(()=>{var t;const e=((t=a.meta)==null?void 0:t.split(" "))??[],o=new Map;for(const l of e){const[c,m]=l.split("=");o.set(c,m)}return o}),f=new Map(Object.entries(C().value.main.codeIcon)),p=h(()=>{var o;const e=(o=a.filename)==null?void 0:o.toLowerCase();return s.value.get("icon")||e&&f.get(e)||a.language&&f.get(a.language)});return(e,o)=>{const t=B,l=z,c=G,m=M;return i(),g(m,{class:y(["relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5",[e.inGroup&&"mb-0 rounded-t-none border-none shadow-none",e.inStack&&"mb-0 rounded-none border-none shadow-none"]])},{default:_(()=>[!e.inGroup&&e.filename?(i(),b("div",N,[n(p)?(i(),g(t,{key:0,name:n(p),class:"mr-1.5"},null,8,["name"])):d("",!0),u("span",null,k(e.filename),1),r(l,{code:e.code,class:"ml-auto mr-1"},null,8,["code"])])):d("",!0),e.filename?d("",!0):(i(),b("span",U,[r(l,{code:e.code},null,8,["code"])])),u("div",V,[r(c,{style:v([n(s).has("height")&&`height: ${n(s).get("height")}px`])},{default:_(()=>[u("div",{class:y(["overflow-x-auto py-3 text-sm",[!e.inGroup&&!e.filename&&"inline-copy",!e.language&&"pl-3",!e.inGroup,n(s).has("line-numbers")&&"show-line-number"]])},[S(e.$slots,"default")],2),r($,{orientation:"horizontal"})]),_:3},8,["style"])])]),_:3},8,["class"])}}});export{L as _};
