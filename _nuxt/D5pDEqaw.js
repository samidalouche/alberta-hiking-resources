import{d as t,b as s,o as m,bl as l}from"./Bk54dgA8.js";import{u as r}from"./OQIDL7mk.js";const i=t({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${r().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const o=l;return m(),s(o,{value:c,class:"[&:not(:first-child)]:mt-5"})}}}),f=Object.assign(i,{__name:"PmX"});export{f as default};
