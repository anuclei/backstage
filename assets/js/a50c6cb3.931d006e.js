/*! For license information please see a50c6cb3.931d006e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[728728],{287170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var c=t(785893),r=t(511151);const s={id:"cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common"},i=void 0,o={id:"reference/cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common",source:"@site/../docs/reference/cli-common.md",sourceDirName:"reference",slug:"/reference/cli-common",permalink:"/docs/reference/cli-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/cli-common.md",tags:[],version:"current",frontMatter:{id:"cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common"}},a={},l=[{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-common",children:(0,c.jsx)(n.code,{children:"@backstage/cli-common"})})]}),"\n",(0,c.jsx)(n.p,{children:"Common functionality used by cli, backend, and create-app"}),"\n",(0,c.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Function"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.findpaths",children:"findPaths(searchDir)"})}),(0,c.jsx)(n.td,{children:"Find paths related to a package and its execution context."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.ischildpath",children:"isChildPath(base, path)"})}),(0,c.jsx)(n.td,{children:"Checks if path is the same as or a child path of base."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Variable"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.backstage_json",children:"BACKSTAGE_JSON"})}),(0,c.jsx)(n.td,{children:"The name of the backstage's config file"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Type Alias"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.paths",children:"Paths"})}),(0,c.jsx)(n.td,{children:"Common paths and resolve functions used by the cli. Currently assumes it is being executed within a monorepo."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.resolvefunc",children:"ResolveFunc"})}),(0,c.jsx)(n.td,{children:"A function that takes a set of path fragments and resolves them into a single complete path, relative to some root."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var c=t(667294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var c,s={},l=null,d=null;for(c in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,c)&&!a.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var c=t(667294);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);