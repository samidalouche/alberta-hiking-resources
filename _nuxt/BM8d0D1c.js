const a='const a=\'import{d,I as l,b as f,M as v,y as p,J as g,K as m,v as h,N as y,x as u,A as _}from"./CYbnhFt7.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${m(n.value)}`,()=>y(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>u(_,{to:e._path},()=>e.title),a=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),a(s.children,r+1)]):u("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),q=C;export{q as default};\\n\';export{a as default};\n';export{a as default};
