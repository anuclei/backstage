/*! For license information please see 5e7bcf5e.9dabef4e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[987926],{832494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(785893),o=t(511151);const r={id:"generate-client",title:"Generate a client from your OpenAPI spec",description:"Documentation on how to create a client for a given OpenAPI spec"},a=void 0,s={id:"openapi/generate-client",title:"Generate a client from your OpenAPI spec",description:"Documentation on how to create a client for a given OpenAPI spec",source:"@site/../docs/openapi/generate-client.md",sourceDirName:"openapi",slug:"/openapi/generate-client",permalink:"/docs/openapi/generate-client",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/openapi/generate-client.md",tags:[],version:"current",frontMatter:{id:"generate-client",title:"Generate a client from your OpenAPI spec",description:"Documentation on how to create a client for a given OpenAPI spec"},sidebar:"docs",previous:{title:"Schema-first plugins with OpenAPI (Experimental)",permalink:"/docs/openapi/01-getting-started"},next:{title:"Validate your OpenAPI spec against test data",permalink:"/docs/openapi/test-case-validation"}},c={},l=[{value:"How to generate a client with <code>repo-tools package schema openapi generate client</code>?",id:"how-to-generate-a-client-with-repo-tools-package-schema-openapi-generate-client",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Generating your client",id:"generating-your-client",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"how-to-generate-a-client-with-repo-tools-package-schema-openapi-generate-client",children:["How to generate a client with ",(0,i.jsx)(n.code,{children:"repo-tools package schema openapi generate client"}),"?"]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Set your OpenAPI file's ",(0,i.jsx)(n.code,{children:"info.title"})," to your pluginID like so,"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"info:\n  # your pluginId\n  title: catalog\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Find or create a new plugin to house your new generated client. Currently, we do not support generating an entirely new plugin and instead just generate client files."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generating-your-client",children:"Generating your client"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"yarn backstage-repo-tools package schema openapi generate client --client-package <directory>"}),". This will create a new folder in ",(0,i.jsx)(n.code,{children:"<directory>/src/generated"})," to house the generated content."]}),"\n",(0,i.jsx)(n.li,{children:"You should use the generated files as follows,"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"apis/DefaultApi.client.ts"})," - this is the client that you should use. It has types for all of the various operations on your API."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"models/*"})," - These are the types generated from your OpenAPI file, ideally you should not need to use these directly and can instead use the inferred types from ",(0,i.jsx)(n.code,{children:"apis/DefaultApi.client.ts"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"everything else is directory specific and shouldn't be touched."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var i=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,r={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:s.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(667294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);