const t=`import{u as h,s as D,ae as y,af as H,P as v,z as g,d as x,v as S,a9 as _,x as c}from"./CYbnhFt7.js";import b from"./BrDWsI0h.js";import q from"./YveKRICw.js";import"./CMDUD70u.js";const a=(s,f=y())=>{const e=h(s),p=g();D(()=>h(s),(n=e)=>{if(!f.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),p.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),H(()=>v(t))},{immediate:!0})},$=x({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(s){const{contentHead:f}=g().public.content,e=S(),{tag:p,excerpt:m,path:n,query:t,head:r}=s,u=r===void 0?f:r,l={...t||{},path:n||(t==null?void 0:t.path)||_(y().path),find:"one"},C=(i,o)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return c(q,l,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:w})=>{var d;return u&&a(i),(d=e.default)==null?void 0:d.call(e,{doc:i,refresh:o,isPartial:w,excerpt:m,...this.$attrs})}:({data:i})=>(u&&a(i),c(b,{value:i,excerpt:m,tag:p,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):C("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),N=$;export{N as default};
`;export{t as default};
