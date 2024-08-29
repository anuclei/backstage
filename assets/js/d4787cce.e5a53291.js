/*! For license information please see d4787cce.e5a53291.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[383146],{867035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(785893),o=r(511151);const i={id:"locations",title:"Gerrit Locations",sidebar_label:"Locations",description:"Integrating source code stored in Gerrit into the Backstage catalog"},s=void 0,a={id:"integrations/gerrit/locations",title:"Gerrit Locations",description:"Integrating source code stored in Gerrit into the Backstage catalog",source:"@site/../docs/integrations/gerrit/locations.md",sourceDirName:"integrations/gerrit",slug:"/integrations/gerrit/locations",permalink:"/docs/integrations/gerrit/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/gerrit/locations.md",tags:[],version:"current",frontMatter:{id:"locations",title:"Gerrit Locations",sidebar_label:"Locations",description:"Integrating source code stored in Gerrit into the Backstage catalog"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/integrations/datadog-rum/installation"},next:{title:"Discovery",permalink:"/docs/integrations/gerrit/discovery"}},c={},l=[{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Gerrit integration supports loading catalog entities from Gerrit hosted gits. Entities can\nbe added to ",(0,n.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"static catalog configuration"}),",\nor registered with the\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To use this integration, add at least one Gerrit configuration to your root ",(0,n.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  gerrit:\n    - host: gerrit.company.com\n      gitilesBaseUrl: https://gerrit.company.com/gitiles\n      baseUrl: https://gerrit.company.com/gerrit\n      cloneUrl: https://gerrit.company.com/clone\n      username: ${GERRIT_USERNAME}\n      password: ${GERRIT_PASSWORD}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Directly under the ",(0,n.jsx)(t.code,{children:"gerrit"})," key is a list of provider configurations, where\nyou can list the Gerrit instances you want to fetch data from. Each entry is\na structure with up to six elements:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"host"}),": The host of the Gerrit instance, e.g. ",(0,n.jsx)(t.code,{children:"gerrit.company.com"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"gitilesBaseUrl"}),": The base url of the Gitiles instance."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"baseUrl"})," (optional): Needed if the Gerrit instance is not reachable at\nthe base of the ",(0,n.jsx)(t.code,{children:"host"})," option (e.g. ",(0,n.jsx)(t.code,{children:"https://gerrit.company.com"}),") set the\naddress here. This is the address that you would open in a browser."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"cloneUrl"})," (optional): The base URL for HTTP clones. Will default to ",(0,n.jsx)(t.code,{children:"baseUrl"})," if\nnot set. The address used to clone a repo is the ",(0,n.jsx)(t.code,{children:"cloneUrl"})," plus the repo name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"username"})," (optional): The Gerrit username to use in API requests. If\nneither a username nor password are supplied, anonymous access will be used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"password"})," (optional): The password or http token for the Gerrit user."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(667294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);