/*! For license information please see cc77362c.9dabf73f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[205635],{239311:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var o=c(785893),n=c(511151);const t={id:"plugin-catalog-node.catalogprocessorcache",title:"CatalogProcessorCache",description:"API reference for CatalogProcessorCache"},s=void 0,a={id:"reference/plugin-catalog-node.catalogprocessorcache",title:"CatalogProcessorCache",description:"API reference for CatalogProcessorCache",source:"@site/../docs/reference/plugin-catalog-node.catalogprocessorcache.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node.catalogprocessorcache",permalink:"/docs/reference/plugin-catalog-node.catalogprocessorcache",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-node.catalogprocessorcache.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-node.catalogprocessorcache",title:"CatalogProcessorCache",description:"API reference for CatalogProcessorCache"}},l={},i=[{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorcache",children:(0,o.jsx)(r.code,{children:"CatalogProcessorCache"})})]}),"\n",(0,o.jsx)(r.p,{children:"A cache for storing data during processing."}),"\n",(0,o.jsx)(r.p,{children:"The values stored in the cache are always local to each processor, meaning no processor can see cache values from other processors."}),"\n",(0,o.jsx)(r.p,{children:"The cache instance provided to the CatalogProcessor is also scoped to the entity being processed, meaning that each processor run can't see cache values from processing runs for other entities."}),"\n",(0,o.jsx)(r.p,{children:"Values that are set during a processing run will only be visible in the directly following run. The cache will be overwritten every run unless no new cache items are written, in which case the existing values remain in the cache."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export interface CatalogProcessorCache \n"})}),"\n",(0,o.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Method"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorcache.get",children:"get(key)"})}),(0,o.jsx)(r.td,{children:"Retrieve a value from the cache."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorcache.set",children:"set(key, value)"})}),(0,o.jsx)(r.td,{children:"Store a value in the cache."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},675251:(e,r,c)=>{var o=c(667294),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,c){var o,t={},i=null,d=null;for(o in void 0!==c&&(i=""+c),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,o)&&!l.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:n,type:e,key:i,ref:d,props:t,_owner:a.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},785893:(e,r,c)=>{e.exports=c(675251)},511151:(e,r,c)=>{c.d(r,{Z:()=>a,a:()=>s});var o=c(667294);const n={},t=o.createContext(n);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);