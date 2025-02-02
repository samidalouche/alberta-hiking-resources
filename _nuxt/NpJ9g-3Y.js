import{d as D,b as I,e as u,o as a,w as d,r as z,m as A,u as o,g as N,au as fe,ah as _e,aj as ve,ak as ye,av as be,aw as $e,ap as ge,ax as he,ay as ke,G as ee,i as we,c as _,j as w,Y as O,n as j,k as v,a3 as C,a4 as U,az as Ce,p as V,l as Ue,t as S,a1 as E,ad as M,a2 as L,q as P,a5 as Be,aA as Se,a7 as xe,aB as Te,S as Ve,I as Pe,aC as Ie,aD as De,aE as je,aF as Ee,aG as Me,aH as Le}from"./DdCWcsim.js";import{_ as ze}from"./DwB_rYd0.js";import{_ as Ne}from"./DxYFpgjN.js";const Ge=D({__name:"CommandEmpty",props:{asChild:{type:Boolean},as:{},class:{}},setup(p){const m=p,b=I(()=>{const{class:y,...n}=m;return n});return(y,n)=>(a(),u(o(fe),A(b.value,{class:o(N)("py-6 text-center text-sm",m.class)}),{default:d(()=>[z(y.$slots,"default")]),_:3},16,["class"]))}}),Oe=D({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(p,{emit:m}){const n=_e(p,m);return(B,$)=>(a(),u(o(be),ve(ye(o(n))),{default:d(()=>[z(B.$slots,"default")]),_:3},16))}}),Ae=D({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(p){const m=p,b=I(()=>{const{class:y,...n}=m;return n});return(y,n)=>(a(),u(o($e),A(b.value,{class:o(N)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",m.class)}),{default:d(()=>[z(y.$slots,"default")]),_:3},16,["class"]))}}),Fe=D({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(p){const m=p,b=I(()=>{const{class:n,...B}=m;return B}),y=ge(b);return(n,B)=>(a(),u(o(he),A(o(y),{class:o(N)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",m.class)}),{default:d(()=>[z(n.$slots,"default")]),_:3},16,["class"]))}}),Re={class:"flex items-center justify-between pb-3"},qe={class:"relative flex overflow-x-auto border-b p-0.5 text-sm"},He={class:"flex p-1"},Je=["value","onMousedown"],Ye=["value"],Ke={key:3},Qe={class:"flex items-center"},We=["value"],na=D({__name:"TabsInner",props:{slotsData:{},variant:{},padded:{type:Boolean},inStack:{type:Boolean},disableSearch:{type:Boolean},searchPlaceholder:{},searchEmpty:{},sync:{}},setup(p){const m=ke("tabs-sync-state",{default:()=>[]}),b=I(()=>m.value.findIndex(e=>e.scope===p.sync)),y=ee(0),n=I({get:()=>{var e;return p.sync===void 0||b.value===-1?y.value:((e=p.slotsData.find(g=>{var k;return g.label===((k=m.value[b.value])==null?void 0:k.value)}))==null?void 0:e.index)||y.value},set(e){if(p.sync===void 0){y.value=e;return}b.value===-1&&m.value.push({scope:p.sync,value:void 0}),m.value[b.value].value=p.slotsData[e].label,y.value=e}}),B=new Map(Object.entries(we().value.main.codeIcon));function $(e){var g;return(e==null?void 0:e.icon)||B.get((g=e==null?void 0:e.filename)==null?void 0:g.toLowerCase())||B.get(e==null?void 0:e.language)}function c(e){return(e==null?void 0:e.label)||(e==null?void 0:e.filename)}const x=ee(!1);return(e,g)=>{var J,Y;const k=Ue,F=Fe,R=Ae,q=Oe,ae=ze,ne=Be,te=Ne,H=Pe,se=Ve,oe=Te,le=je,re=Ge,ue=Le,de=Me,ce=Ee,ie=De,me=Ie,pe=Ce;return e.variant==="separate"?(a(),u(q,{key:0,modelValue:o(n),"onUpdate:modelValue":g[0]||(g[0]=l=>O(n)?n.value=l:null),class:"[&:not(:first-child)]:mt-5"},{default:d(()=>{var l,i;return[v(R,null,{default:d(()=>{var t,r;return[(a(!0),_(C,null,U(((r=(t=e.$slots).default)==null?void 0:r.call(t))??[],(s,f)=>(a(),u(F,{key:`${f}${c(s.props)}`,value:f},{default:d(()=>[$(s==null?void 0:s.props)?(a(),u(k,{key:0,name:$(s==null?void 0:s.props),class:"mr-1.5 self-center"},null,8,["name"])):w("",!0),V(" "+S(c(s.props)),1)]),_:2},1032,["value"]))),128))]}),_:1}),(a(!0),_(C,null,U(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(t,r)=>E((a(),_("div",{key:`${r}${c(t.props)}`,class:"mt-2"},[(a(),u(M(t)))])),[[L,o(n)===r]])),128))]}),_:1},8,["modelValue"])):e.variant==="line"?(a(),u(q,{key:1,modelValue:o(n),"onUpdate:modelValue":g[1]||(g[1]=l=>O(n)?n.value=l:null),class:"relative mr-auto w-full [&:not(:first-child)]:mt-5"},{default:d(()=>{var l,i;return[P("div",Re,[v(R,{class:"h-9 w-full justify-start rounded-none border-b bg-transparent p-0"},{default:d(()=>{var t,r;return[(a(!0),_(C,null,U(((r=(t=e.$slots).default)==null?void 0:r.call(t))??[],(s,f)=>(a(),u(F,{key:`${f}${c(s.props)}`,value:f,class:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"},{default:d(()=>[$(s==null?void 0:s.props)?(a(),u(k,{key:0,name:$(s==null?void 0:s.props),class:"mr-1.5 self-center"},null,8,["name"])):w("",!0),V(" "+S(c(s.props)),1)]),_:2},1032,["value"]))),128))]}),_:1})]),(a(!0),_(C,null,U(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(t,r)=>E((a(),_("div",{key:`${r}${c(t.props)}`,class:"relative mt-2 space-y-10"},[(a(),u(M(t)))])),[[L,o(n)===r]])),128))]}),_:1},8,["modelValue"])):e.variant==="card"?(a(),u(te,{key:2,class:j(["[&:not(:first-child)]:mt-5",[e.inStack&&"mb-0 rounded-none border-none shadow-none"]])},{default:d(()=>{var l,i;return[v(ne,null,{default:d(()=>{var t,r,s,f,T,K,Q,W,X,Z;return[P("div",qe,[P("div",He,[(a(!0),_(C,null,U(((r=(t=e.$slots).default)==null?void 0:r.call(t))??[],(h,G)=>(a(),_("div",{key:`${G}${c(h.props)}`,value:c(h.props),class:j(["flex cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-75",[o(n)===G&&"bg-muted text-primary"]]),onMousedown:Se(Xe=>n.value=G,["left"])},[$(h==null?void 0:h.props)?(a(),u(k,{key:0,name:$(h==null?void 0:h.props),class:"mr-1.5 self-center"},null,8,["name"])):w("",!0),V(" "+S(c(h.props)),1)],42,Je))),128))]),(K=(T=(f=(s=e.$slots).default)==null?void 0:f.call(s)[o(n)])==null?void 0:T.props)!=null&&K.code?(a(),u(ae,{key:0,class:"ml-auto mr-3 self-center pl-2",code:(Z=(X=(W=(Q=e.$slots).default)==null?void 0:W.call(Q)[o(n)])==null?void 0:X.props)==null?void 0:Z.code},null,8,["code"])):w("",!0)]),v(xe,{orientation:"horizontal"})]}),_:1}),(a(!0),_(C,null,U(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(t,r)=>{var s,f,T;return E((a(),_("div",{key:`${r}${c(t.props)}`,value:c(t.props),class:j(["mt-0",[e.padded&&((T=(f=(s=e.$slots).default)==null?void 0:f.call(s)[o(n)])==null?void 0:T.type).tag!=="pre"&&"p-3"]])},[(a(),u(M(t),{"in-group":!0}))],10,Ye)),[[L,o(n)===r]])}),128))]}),_:1},8,["class"])):e.variant==="combobox"?(a(),_("div",Ke,[v(pe,{open:o(x),"onUpdate:open":g[2]||(g[2]=l=>O(x)?x.value=l:null)},{default:d(()=>[v(oe,{"as-child":""},{default:d(()=>[v(se,{variant:"outline",role:"combobox","aria-expanded":o(x),class:"w-[200px] justify-between"},{default:d(()=>{var l,i,t,r,s,f;return[P("div",Qe,[$((((i=(l=e.$slots).default)==null?void 0:i.call(l))??[])[o(n)].props)?(a(),u(k,{key:0,name:$((((r=(t=e.$slots).default)==null?void 0:r.call(t))??[])[o(n)].props),class:"mr-1.5"},null,8,["name"])):w("",!0),P("span",null,S(c((((f=(s=e.$slots).default)==null?void 0:f.call(s))??[])[o(n)].props)),1)]),v(H,{name:"lucide:chevrons-up-down"})]}),_:1},8,["aria-expanded"])]),_:1}),v(me,{class:"w-[200px] p-0"},{default:d(()=>[v(ie,null,{default:d(()=>[e.disableSearch?w("",!0):(a(),u(le,{key:0,class:"h-9",placeholder:e.searchPlaceholder},null,8,["placeholder"])),v(re,null,{default:d(()=>[V(S(e.searchEmpty),1)]),_:1}),v(ce,null,{default:d(()=>[v(de,null,{default:d(()=>{var l,i;return[(a(!0),_(C,null,U(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(t,r)=>(a(),u(ue,{key:`${r}${c(t.props)}`,value:c(t.props),onSelect:()=>{n.value=r,x.value=!1}},{default:d(()=>[$(t==null?void 0:t.props)?(a(),u(k,{key:0,name:$(t==null?void 0:t.props),class:"mr-1.5 self-center"},null,8,["name"])):w("",!0),V(" "+S(c(t.props))+" ",1),v(H,{name:"lucide:check",class:j(o(N)("ml-auto h-4 w-4",o(n)===r?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"]))),128))]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),(a(!0),_(C,null,U(((Y=(J=e.$slots).default)==null?void 0:Y.call(J))??[],(l,i)=>E((a(),_("div",{key:`${i}${c(l.props)}`,value:c(l.props),class:"mt-4"},[(a(),u(M(l),{"in-group":!0}))],8,We)),[[L,o(n)===i]])),128))])):w("",!0)}}});export{na as _};
