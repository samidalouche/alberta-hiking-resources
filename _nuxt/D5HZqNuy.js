const n='import{d as t,o as s,e as m,X as r}from"./CYbnhFt7.js";import{u as l}from"./Cb8aLWvA.js";const i=t({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const c=`\n::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}\n${l().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\\`\\`\\`bash [${a.name}]\n${e}\n\\`\\`\\`\n`}).join(`\n`)}\n::\n`;return(a,e)=>{const o=r;return s(),m(o,{value:c,class:"[&:not(:first-child)]:mt-5"})}}});export{i as default};\n';export{n as default};
