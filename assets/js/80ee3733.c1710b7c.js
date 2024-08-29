/*! For license information please see 80ee3733.c1710b7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[974834],{776238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(785893),c=n(511151);const o={id:"plugin-auth-backend.stateencoder",title:"StateEncoder",description:"API reference for StateEncoder"},s=void 0,a={id:"reference/plugin-auth-backend.stateencoder",title:"StateEncoder",description:"API reference for StateEncoder",source:"@site/../docs/reference/plugin-auth-backend.stateencoder.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.stateencoder",permalink:"/docs/reference/plugin-auth-backend.stateencoder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.stateencoder.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.stateencoder",title:"StateEncoder",description:"API reference for StateEncoder"}},d={},i=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.stateencoder",children:(0,r.jsx)(t.code,{children:"StateEncoder"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"createOAuthRouteHandlers"})," from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type StateEncoder = (req: OAuthStartRequest) => Promise<{\n    encodedState: string;\n}>;\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.oauthstartrequest",children:"OAuthStartRequest"})]})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,o={},i=null,u=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!d.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:i,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const c={},o=r.createContext(c);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);