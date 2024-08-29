/*! For license information please see 1b60d278.fb074d89.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[169612],{630518:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=r(785893),t=r(511151);const c={id:"backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices"},i=void 0,d={id:"reference/backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices",source:"@site/../docs/reference/backend-test-utils.mockservices.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockservices",permalink:"/docs/reference/backend-test-utils.mockservices",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.mockservices.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices"}},o={},l=[{value:"Functions",id:"functions",level:2},{value:"Namespaces",id:"namespaces",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils",children:(0,n.jsx)(s.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices",children:(0,n.jsx)(s.code,{children:"mockServices"})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"namespace mockServices \n"})}),"\n",(0,n.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Function"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.auth",children:"auth(options)"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.discovery",children:"discovery()"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httpauth",children:"httpAuth(options)"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.p,{children:["Creates a mock implementation of the ",(0,n.jsx)(s.code,{children:"HttpAuthService"}),"."]}),(0,n.jsxs)(s.p,{children:["By default all requests without credentials are treated as requests from the default mock user principal. This behavior can be configured with the ",(0,n.jsx)(s.code,{children:"defaultCredentials"})," option."]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootconfig",children:"rootConfig(options)"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlogger",children:"rootLogger(options)"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.userinfo",children:"userInfo(customInfo)"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsxs)(s.p,{children:["Creates a mock implementation of the ",(0,n.jsx)(s.code,{children:"UserInfoService"}),"."]}),(0,n.jsx)(s.p,{children:"By default it extracts the user's entity ref from a user principal and returns that as the only ownership entity ref, but this can be overridden by passing in a custom set of user info."})]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"namespaces",children:"Namespaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Namespace"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.auth",children:"auth"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.cache",children:"cache"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.database",children:"database"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.discovery",children:"discovery"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.events",children:"events"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httpauth",children:"httpAuth"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httprouter",children:"httpRouter"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.lifecycle",children:"lifecycle"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.logger",children:"logger"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.permissions",children:"permissions"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootconfig",children:"rootConfig"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.roothealth",children:"rootHealth"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.roothttprouter",children:"rootHttpRouter"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlifecycle",children:"rootLifecycle"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlogger",children:"rootLogger"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.scheduler",children:"scheduler"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.urlreader",children:"urlReader"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.userinfo",children:"userInfo"})}),(0,n.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,s,r)=>{var n=r(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,r){var n,c={},l=null,h=null;for(n in void 0!==r&&(l=""+r),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(h=s.ref),s)i.call(s,n)&&!o.hasOwnProperty(n)&&(c[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:t,type:e,key:l,ref:h,props:c,_owner:d.current}}s.Fragment=c,s.jsx=l,s.jsxs=l},785893:(e,s,r)=>{e.exports=r(675251)},511151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>i});var n=r(667294);const t={},c=n.createContext(t);function i(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);