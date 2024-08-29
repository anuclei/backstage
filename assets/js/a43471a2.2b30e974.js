/*! For license information please see a43471a2.2b30e974.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[465763],{58084:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(785893),s=n(511151);const o={id:"plugin-auth-node.authproviderroutehandlers.refresh",title:"AuthProviderRouteHandlers.refresh()",description:"API reference for AuthProviderRouteHandlers.refresh()"},d=void 0,a={id:"reference/plugin-auth-node.authproviderroutehandlers.refresh",title:"AuthProviderRouteHandlers.refresh()",description:"API reference for AuthProviderRouteHandlers.refresh()",source:"@site/../docs/reference/plugin-auth-node.authproviderroutehandlers.refresh.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authproviderroutehandlers.refresh",permalink:"/docs/reference/plugin-auth-node.authproviderroutehandlers.refresh",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authproviderroutehandlers.refresh.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authproviderroutehandlers.refresh",title:"AuthProviderRouteHandlers.refresh()",description:"API reference for AuthProviderRouteHandlers.refresh()"}},i={},c=[{value:"Parameters",id:"parameters",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers",children:(0,t.jsx)(r.code,{children:"AuthProviderRouteHandlers"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers.refresh",children:(0,t.jsx)(r.code,{children:"refresh"})})]}),"\n",(0,t.jsx)(r.p,{children:"(Optional) If the auth provider supports refresh tokens then this method handles requests to get a new access token."}),"\n",(0,t.jsx)(r.p,{children:"Other types of providers may also use this method to implement its own logic to create new sessions upon request. For example, this can be used to create a new session for a provider that handles requests from an authenticating proxy."}),"\n",(0,t.jsx)(r.p,{children:"Request - to contain a refresh token cookie and scope (Optional) query parameter. Response - payload with accessToken, expiryInSeconds?, idToken?, scope and user profile information."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"refresh?(req: Request, res: Response): Promise<void>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"req"}),(0,t.jsx)(r.td,{children:"Request"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"res"}),(0,t.jsx)(r.td,{children:"Response"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,o={},c=null,h=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,t)&&!i.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:h,props:o,_owner:a.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var t=n(667294);const s={},o=t.createContext(s);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);