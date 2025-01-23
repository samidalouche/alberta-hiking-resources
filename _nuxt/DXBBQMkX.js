import{d as o,o as s,e as l,X as m}from"./MmLFbGpN.js";import{u as i}from"./BvuBFT3f.js";const d=o({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(e){const t=`
::code-group{${e.inStack?"in-stack":""} ${e.noSync?"":`sync="${e.sync}"`}}
${i().packageManagers.value.map(a=>{const n=e.name?`${a.command}${a.install}${e.saveDev?a.saveDev:""}${e.name}`:`${a.command}${a.installEmpty}`;return`\`\`\`bash [${a.name}]
${n}
\`\`\`
`}).join(`
`)}
::
`;return(a,n)=>{const c=m;return s(),l(c,{value:t,class:"[&:not(:first-child)]:mt-5"})}}});export{d as default};
