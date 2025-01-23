import{d as o,o as s,e as m,X as r}from"./XxJ8Tffp.js";import{u}from"./DtaHrHMr.js";const d=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${u().packageManagers.value.map(a=>{const e=`${a.command}${a.run}${n.script}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const t=r;return s(),m(t,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{d as default};
