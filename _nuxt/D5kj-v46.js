const t='const v=[[/^(<!--)(.+)(-->)$/,!1],[/^(\\/\\*)(.+)(\\*\\/)$/,!1],[/^(\\/\\/|["\'#]|;{1,2}|%{1,2}|--)(.*)$/,!0],[/^(\\*)(.+)$/,!0]];function x(t,i,n){const r=[];for(const l of t){const o=l.children;let c=o.length-1;n==="v1"?c=0:i&&(c=o.length-2);for(let s=Math.max(c,0);s<o.length;s++){const h=o[s];if(h.type!=="element")continue;const e=h.children.at(0);if((e==null?void 0:e.type)!=="text")continue;const a=s===o.length-1,f=A(e.value,a);f&&(i&&!a&&s!==0?r.push({info:f,line:l,token:h,isJsxStyle:p(o[s-1],"{")&&p(o[s+1],"}")}):r.push({info:f,line:l,token:h,isJsxStyle:!1}))}}return r}function p(t,i){if(t.type!=="element")return!1;const n=t.children[0];return n.type!=="text"?!1:n.value.trim()===i}function A(t,i){let n=t.trimStart();const r=t.length-n.length;n=n.trimEnd();const l=t.length-n.length-r;for(const[o,c]of v){if(c&&!i)continue;const s=o.exec(n);if(s)return[" ".repeat(r)+s[1],s[2],s[3]?s[3]+" ".repeat(l):void 0]}}function k(t){const n=/(?:\\/\\/|["\'#]|;{1,2}|%{1,2}|--)(.*)$/.exec(t);return n&&n[1].trim().length===0?t.slice(0,n.index):t}function y(t,i,n,r="v1"){return{name:t,code(l){const o=l.children.filter(e=>e.type==="element"),c=[];l.data??(l.data={});const s=l.data;s._shiki_notation??(s._shiki_notation=x(o,["jsx","tsx"].includes(this.options.lang),r));const h=s._shiki_notation;for(const e of h){if(e.info[1].length===0)continue;const a=e.line.children.length===(e.isJsxStyle?3:1);let f=o.indexOf(e.line);a&&r!=="v1"&&f++;let m=!1;if(e.info[1]=e.info[1].replace(i,(...u)=>n.call(this,u,e.line,e.token,o,f)?(m=!0,""):u[0]),!m)continue;r==="v1"&&(e.info[1]=k(e.info[1]));const d=e.info[1].trim().length===0;if(d&&(e.info[1]=""),d&&a)c.push(e.line);else if(d&&e.isJsxStyle)e.line.children.splice(e.line.children.indexOf(e.token)-1,3);else if(d)e.line.children.splice(e.line.children.indexOf(e.token),1);else{const u=e.token.children[0];u.type==="text"&&(u.value=e.info.join(""))}}for(const e of c)l.children.splice(l.children.indexOf(e),1)}}}function j(t){return t.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}function g(t={},i="@shikijs/transformers:notation-map"){const{classMap:n={},classActivePre:r=void 0}=t;return y(i,new RegExp(`\\\\s*\\\\[!code (${Object.keys(n).map(j).join("|")})(:\\\\d+)?\\\\]`),function([l,o,c=":1"],s,h,e,a){const f=Number.parseInt(c.slice(1),10);for(let m=a;m<Math.min(a+f,e.length);m++)this.addClassToHast(e[m],n[o]);return r&&this.addClassToHast(this.pre,r),!0},t.matchAlgorithm)}function L(t={}){const{classLineAdd:i="diff add",classLineRemove:n="diff remove",classActivePre:r="has-diff"}=t;return g({classMap:{"++":i,"--":n},classActivePre:r,matchAlgorithm:t.matchAlgorithm},"@shikijs/transformers:notation-diff")}function M(t={}){const{classMap:i={error:["highlighted","error"],warning:["highlighted","warning"]},classActivePre:n="has-highlighted"}=t;return g({classMap:i,classActivePre:n,matchAlgorithm:t.matchAlgorithm},"@shikijs/transformers:notation-error-level")}function N(t={}){const{classActiveLine:i="focused",classActivePre:n="has-focused"}=t;return g({classMap:{focus:i},classActivePre:n,matchAlgorithm:t.matchAlgorithm},"@shikijs/transformers:notation-focus")}function $(t={}){const{classActiveLine:i="highlighted",classActivePre:n="has-highlighted"}=t;return g({classMap:{highlight:i,hl:i},classActivePre:n,matchAlgorithm:t.matchAlgorithm},"@shikijs/transformers:notation-highlight")}export{L as transformerNotationDiff,M as transformerNotationErrorLevel,N as transformerNotationFocus,$ as transformerNotationHighlight,g as transformerNotationMap};\n';export{t as default};
