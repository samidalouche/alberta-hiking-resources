import{_ as f}from"./CYvNOVAv.js";import{d as i,l as h,o as u,e as m,n as p}from"./BsCsd1iR.js";const S=i({__name:"Tabs",props:{variant:{default:"separate"},padded:{type:Boolean,default:!0},inStack:{type:Boolean,default:!1},disableSearch:{type:Boolean,default:!1},searchPlaceholder:{default:"Search Tab..."},searchEmpty:{default:"No tab found."},sync:{}},setup(a){const e=h();function s(){var n;const t=((n=e==null?void 0:e.default)==null?void 0:n.call(e))||[],c=t.map((r,o)=>{var l,d;return{label:((l=r.props)==null?void 0:l.label)||((d=r.props)==null?void 0:d.filename)||"",index:o}});return p(f,{variant:a.variant,padded:a.padded,inStack:a.inStack,disableSearch:a.disableSearch,searchEmpty:a.searchEmpty,searchPlaceholder:a.searchPlaceholder,slotsData:c,sync:a.sync},()=>t)}return(t,c)=>(u(),m(s))}});export{S as _};
