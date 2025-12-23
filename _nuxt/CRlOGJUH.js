import{d as o,b as s,o as m,bl as r}from"./DsgNEGEL.js";import{u}from"./Cf2jiQvf.js";const i=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${u().packageManagers.value.map(a=>{const e=`${a.command}${a.run}${n.script}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const t=r;return m(),s(t,{value:c,class:"[&:not(:first-child)]:mt-5"})}}}),f=Object.assign(i,{__name:"PmRun"});export{f as default};
