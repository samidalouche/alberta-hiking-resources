import{d as t,e as s,o as m,X as r}from"./DCuFFVJC.js";import{u as l}from"./B283-Pvd.js";const i=t({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${l().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const o=r;return m(),s(o,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{i as default};
