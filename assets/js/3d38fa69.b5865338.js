/*! For license information please see 3d38fa69.b5865338.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[835309],{558552:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var t=r(785893),o=r(511151);const c={id:"core-plugin-api.openidconnectapi",title:"OpenIdConnectApi",description:"API reference for OpenIdConnectApi"},i=void 0,s={id:"reference/core-plugin-api.openidconnectapi",title:"OpenIdConnectApi",description:"API reference for OpenIdConnectApi",source:"@site/../docs/reference/core-plugin-api.openidconnectapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.openidconnectapi",permalink:"/docs/reference/core-plugin-api.openidconnectapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.openidconnectapi.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.openidconnectapi",title:"OpenIdConnectApi",description:"API reference for OpenIdConnectApi"}},p={},a=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.openidconnectapi",children:(0,t.jsx)(n.code,{children:"OpenIdConnectApi"})})]}),"\n",(0,t.jsx)(n.p,{children:"This API provides access to OpenID Connect credentials. It lets you request ID tokens, which can be passed to backend services to prove the user's identity."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type OpenIdConnectApi = {\n    getIdToken(options?: AuthRequestOptions): Promise<string>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.authrequestoptions",children:"AuthRequestOptions"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var t=r(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,c={},a=null,d=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!p.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(667294);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);