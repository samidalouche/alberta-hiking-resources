const a='import{d as o,o as s,e as l,X as m}from"./CYbnhFt7.js";import{u as i}from"./Cb8aLWvA.js";const d=o({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(e){const t=`\n::code-group{${e.inStack?"in-stack":""} ${e.noSync?"":`sync="${e.sync}"`}}\n${i().packageManagers.value.map(a=>{const n=e.name?`${a.command}${a.install}${e.saveDev?a.saveDev:""}${e.name}`:`${a.command}${a.installEmpty}`;return`\\`\\`\\`bash [${a.name}]\n${n}\n\\`\\`\\`\n`}).join(`\n`)}\n::\n`;return(a,n)=>{const c=m;return s(),l(c,{value:t,class:"[&:not(:first-child)]:mt-5"})}}});export{d as default};\n';export{a as default};
