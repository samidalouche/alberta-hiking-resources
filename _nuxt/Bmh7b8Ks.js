import{f as o,k as s,o as m,ak as r}from"./DQ4XA6Nq.js";import{u}from"./zNsrhsDN.js";const f=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${u().packageManagers.value.map(a=>{const e=`${a.command}${a.run}${n.script}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const t=r;return m(),s(t,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{f as default};
