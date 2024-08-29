/*! For license information please see 5d92131f.049ac7f0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[531982],{70343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(785893),a=n(511151);const c={id:"plugin-scaffolder-backend.createwaitaction",title:"createWaitAction()",description:"API reference for createWaitAction()"},i=void 0,o={id:"reference/plugin-scaffolder-backend.createwaitaction",title:"createWaitAction()",description:"API reference for createWaitAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createwaitaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createwaitaction",permalink:"/docs/reference/plugin-scaffolder-backend.createwaitaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createwaitaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createwaitaction",title:"createWaitAction()",description:"API reference for createWaitAction()"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.createwaitaction",children:(0,r.jsx)(t.code,{children:"createWaitAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Waits for a certain period of time."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createWaitAction(options?: {\n    maxWaitTime?: Duration | HumanDuration;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<HumanDuration, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["{ maxWaitTime?: Duration | ",(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"}),"; }"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"(Optional)"})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<",(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"}),', import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"This task is useful to give some waiting time for manual intervention. Has to be used in a combination with other actions."})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,c={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(667294);const a={},c=r.createContext(a);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);