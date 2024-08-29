/*! For license information please see 6a1e44f9.7e61c621.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[766910],{502824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(785893),s=t(511151);const c={id:"plugin-events-backend-module-gitlab",title:"@backstage/plugin-events-backend-module-gitlab",description:"API Reference for @backstage/plugin-events-backend-module-gitlab"},i=void 0,a={id:"reference/plugin-events-backend-module-gitlab",title:"@backstage/plugin-events-backend-module-gitlab",description:"API Reference for @backstage/plugin-events-backend-module-gitlab",source:"@site/../docs/reference/plugin-events-backend-module-gitlab.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-gitlab",permalink:"/docs/reference/plugin-events-backend-module-gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-gitlab.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-gitlab",title:"@backstage/plugin-events-backend-module-gitlab",description:"API Reference for @backstage/plugin-events-backend-module-gitlab"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-gitlab",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-events-backend-module-gitlab"})})]}),"\n",(0,r.jsx)(n.p,{children:'The module "gitlab" for the Backstage backend plugin "events-backend" adding an event router and token validator for GitLab.'}),"\n",(0,r.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Class"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter",children:"GitlabEventRouter"})}),(0,r.jsxs)(n.td,{children:["Subscribes to the generic ",(0,r.jsx)(n.code,{children:"gitlab"})," topic and publishes the events under the more concrete sub-topic depending on the ",(0,r.jsx)(n.code,{children:"$.event_name"})," field provided."]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-gitlab.creategitlabtokenvalidator",children:"createGitlabTokenValidator(config)"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.p,{children:["Validates a configured secret token against the token received with the ",(0,r.jsx)(n.code,{children:"x-gitlab-token"})," header."]}),(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html%5C#validate-payloads-by-using-a-secret-token",children:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html\\#validate-payloads-by-using-a-secret-token"})," for more details."]})]})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,c={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(667294);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);