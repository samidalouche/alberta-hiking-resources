import{d as t,c as l,r as o,n as p,o as r}from"./DdCWcsim.js";const d=t({__name:"Steps",props:{level:{default:"3"}},setup(a){const s={1:"[&>h1]:step",2:"[&>h2]:step",3:"[&>h3]:step",4:"[&>h4]:step",5:"[&>h5]:step",6:"[&>h6]:step"};return(e,n)=>(r(),l("div",{class:p(["[&>li]:step ml-4 border-l pl-8 [counter-reset:step] [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-12",s[e.level]])},[o(e.$slots,"default")],2))}});export{d as default};
