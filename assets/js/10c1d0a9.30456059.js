/*! For license information please see 10c1d0a9.30456059.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[804388],{133957:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=r(785893),t=r(511151);const s={id:"plugin-scaffolder-node.clonerepo",title:"cloneRepo()",description:"API reference for cloneRepo()"},c=void 0,d={id:"reference/plugin-scaffolder-node.clonerepo",title:"cloneRepo()",description:"API reference for cloneRepo()",source:"@site/../docs/reference/plugin-scaffolder-node.clonerepo.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.clonerepo",permalink:"/docs/reference/plugin-scaffolder-node.clonerepo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-node.clonerepo.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-node.clonerepo",title:"cloneRepo()",description:"API reference for cloneRepo()"}},i={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.clonerepo",children:(0,o.jsx)(n.code,{children:"cloneRepo"})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function cloneRepo(options: {\n    url: string;\n    dir: string;\n    auth: {\n        username: string;\n        password: string;\n    } | {\n        token: string;\n    };\n    logger?: Logger | undefined;\n    ref?: string | undefined;\n    depth?: number | undefined;\n    noCheckout?: boolean | undefined;\n}): Promise<void>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"{ url: string; dir: string; auth: { username: string; password: string; } | { token: string; }; logger?: Logger | undefined; ref?: string | undefined; depth?: number | undefined; noCheckout?: boolean | undefined; }"}),(0,o.jsx)(n.td,{})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(n.p,{children:"Promise<void>"})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},675251:(e,n,r)=>{var o=r(667294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,s={},l=null,a=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var o=r(667294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);