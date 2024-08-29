/*! For license information please see 2be5b566.b7b80563.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[841388],{280150:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(785893),o=n(511151);const s={id:"plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()"},a=void 0,i={id:"reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setGroupTransformer()"}},d={},c=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:(0,t.jsx)(r.code,{children:"LdapOrgEntityProviderTransformsExtensionPoint"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setgrouptransformer",children:(0,t.jsx)(r.code,{children:"setGroupTransformer"})})]}),"\n",(0,t.jsx)(r.p,{children:"Set the function that transforms a group entry in LDAP to an entity. Optionally, you can pass separate transformers per provider ID."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"setGroupTransformer(transformer: GroupTransformer | Record<string, GroupTransformer>): void;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"transformer"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"})," | Record<string, ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"}),">"]}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"void"})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},675251:(e,r,n)=>{var t=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,p=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:p,props:s,_owner:i.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(667294);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);