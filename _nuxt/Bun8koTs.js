const n='import{d as o,o as s,e as m,X as r}from"./CYbnhFt7.js";import{u}from"./Cb8aLWvA.js";const d=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`\n::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}\n${u().packageManagers.value.map(a=>{const e=`${a.command}${a.run}${n.script}`;return`\\`\\`\\`bash [${a.name}]\n${e}\n\\`\\`\\`\n`}).join(`\n`)}\n::\n`;return(a,e)=>{const t=r;return s(),m(t,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{d as default};\n';export{n as default};
