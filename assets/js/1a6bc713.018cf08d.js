/*! For license information please see 1a6bc713.018cf08d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[246101],{431697:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(785893),s=n(511151);const o={id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",title:"MicrosoftGraphClient.getGroupUserMembers()",description:"API reference for MicrosoftGraphClient.getGroupUserMembers()"},c=void 0,a={id:"reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",title:"MicrosoftGraphClient.getGroupUserMembers()",description:"API reference for MicrosoftGraphClient.getGroupUserMembers()",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",title:"MicrosoftGraphClient.getGroupUserMembers()",description:"API reference for MicrosoftGraphClient.getGroupUserMembers()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:(0,t.jsx)(r.code,{children:"MicrosoftGraphClient"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",children:(0,t.jsx)(r.code,{children:"getGroupUserMembers"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Get a collection of ",(0,t.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," belonging to a ",(0,t.jsx)(r.code,{children:"Group"})," from Graph API and return as ",(0,t.jsx)(r.code,{children:"AsyncIterable"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"getGroupUserMembers(groupId: string, query?: ODataQuery, queryMode?: 'basic' | 'advanced'): AsyncIterable<MicrosoftGraph.User>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupId"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:["The unique identifier for the ",(0,t.jsx)(r.code,{children:"Group"})," resource"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"query"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.odataquery",children:"ODataQuery"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," OData Query ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.odataquery",children:"ODataQuery"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"queryMode"}),(0,t.jsx)(r.td,{children:"'basic' | 'advanced'"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"}),' Mode to use while querying. Some features are only available at "advanced".']})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"AsyncIterable<MicrosoftGraph.User>"})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(667294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);