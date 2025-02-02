import{d as D,F as V,V as d,u as P,o as l,e as f,w as a,k as _,j as m,t as R,W as e,X as T}from"./BOMjgPVl.js";import{_ as I,a as O,b as L}from"./C3VLlWc5.js";import k from"./CkTxJTw0.js";const $=D({__name:"CodeSnippet",props:{file:{},url:{},language:{},title:{},highlights:{},meta:{},start:{},offset:{}},async setup(n){let i,u;const r=V(""),p=Object.assign({"/README.md":()=>e(()=>import("./BCwsEYAR.js"),[],import.meta.url).then(t=>t.default),"/app.config.ts":()=>e(()=>import("./DyX0RAFp.js"),[],import.meta.url).then(t=>t.default),"/assets/css/tailwind.css":()=>e(()=>import("./nGZh8fx2.js"),[],import.meta.url).then(t=>t.default),"/content/1.getting-started/1.introduction.md":()=>e(()=>import("./CHWaJZLV.js"),[],import.meta.url).then(t=>t.default),"/content/1.getting-started/2.contributing.md":()=>e(()=>import("./DG7xm7sH.js"),[],import.meta.url).then(t=>t.default),"/content/1.getting-started/_dir.yml":()=>e(()=>import("./CI92G5_L.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/1.by-category/1.index.md":()=>e(()=>import("./BCZdd0VM.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/1.by-category/2.meetups.md":()=>e(()=>import("./qMbm8blM.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/1.by-category/3.inspirational.md":()=>e(()=>import("./D-Je6NJT.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/1.by-category/4.practical-information.md":()=>e(()=>import("./BtD-4j7w.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/2.group-info/_dir.yml":()=>e(()=>import("./CRHWgAO4.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/2.group-info/alberta-hikers-and-climbers.md":()=>e(()=>import("./BcgIZ_Qj.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/2.group-info/alberta-hikers-together.md":()=>e(()=>import("./VFqnAk6U.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/2.group-info/find-hiking-groups-partners-alberta.md":()=>e(()=>import("./CUnc1kLA.js"),[],import.meta.url).then(t=>t.default),"/content/2.hiking-groups/_dir.yml":()=>e(()=>import("./BPGQigew.js"),[],import.meta.url).then(t=>t.default),"/content/3.hike-organizers/1.index.md":()=>e(()=>import("./DRwxud5-.js"),[],import.meta.url).then(t=>t.default),"/content/3.hike-organizers/sami.md":()=>e(()=>import("./D_5g3K_G.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/1.index.md":()=>e(()=>import("./GzNb1WMb.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/2.guidebooks.md":()=>e(()=>import("./DNXZGWuv.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/3.trip-reports.md":()=>e(()=>import("./PaUPSclG.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/4.gear.md":()=>e(()=>import("./CZkQv6dW.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/5.weather.md":()=>e(()=>import("./C9SqT9W7.js"),[],import.meta.url).then(t=>t.default),"/content/4.practical-information/6.bookings.md":()=>e(()=>import("./C9yMtslB.js"),[],import.meta.url).then(t=>t.default),"/content/5.faq.md":()=>e(()=>import("./v9Lk_pRK.js"),[],import.meta.url).then(t=>t.default),"/content/index.md":()=>e(()=>import("./D_XWhPAz.js"),[],import.meta.url).then(t=>t.default),"/package.json":()=>e(()=>import("./B3DqEI7q.js"),[],import.meta.url).then(t=>t.default),"/pnpm-lock.yaml":()=>e(()=>import("./icU20ypY.js"),[],import.meta.url).then(t=>t.default),"/public/CNAME":()=>e(()=>import("./KYVSzgIs.js"),[],import.meta.url).then(t=>t.default),"/public/favicon.ico":()=>e(()=>import("./Dy6JZSzQ.js"),[],import.meta.url).then(t=>t.default),"/public/logo-dark.svg":()=>e(()=>import("./bD5si953.js"),[],import.meta.url).then(t=>t.default),"/public/logo.svg":()=>e(()=>import("./AW1XDS0j.js"),[],import.meta.url).then(t=>t.default),"/tailwind.config.ts":()=>e(()=>import("./V9-GvzOo.js"),[],import.meta.url).then(t=>t.default),"/tsconfig.json":()=>e(()=>import("./VAWG9YF_.js"),[],import.meta.url).then(t=>t.default)});if(n.file){const t=p[n.file];t&&(r.value=([i,u]=d(()=>t()),i=await i,u(),i))}else if(n.url)try{const t=([i,u]=d(()=>$fetch(n.url,{parseResponse:o=>o})),i=await i,u(),i);t&&(r.value=t)}catch{}if(r.value&&n.start&&n.offset){const t=r.value.split(`
`);r.value=t.slice(Number(n.start||1)-1,Number(n.start||1)-1+Number(n.offset)).join(`
`)}const s=`
::div
\`\`\`\`${n.language} ${n.title&&`[${n.title}]`} ${n.highlights&&`{${n.highlights}}`} ${n.meta||""}
${r.value}
\`\`\`\`
::
`;return(t,o)=>{const c=T,E=I,g=k,h=O,A=L;return P(r)?(l(),f(c,{key:0,value:s,class:"[&:not(:first-child)]:mt-5"})):(l(),f(A,{key:1,variant:"destructive"},{default:a(()=>[_(E,null,{default:a(()=>o[0]||(o[0]=[m("Error")])),_:1}),_(h,null,{default:a(()=>[o[1]||(o[1]=m(" Cannot load code: ")),_(g,null,{default:a(()=>[m(R(t.file||t.url),1)]),_:1})]),_:1})]),_:1}))}}});export{$ as default};
