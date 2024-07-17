/*! For license information please see bbbbc1d4.3db539a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[338319],{610629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"provider",title:"Microsoft Azure Authentication Provider",sidebar_label:"Azure",description:"Adding Microsoft Azure as an authentication provider in Backstage"},s=void 0,a={id:"auth/microsoft/provider",title:"Microsoft Azure Authentication Provider",description:"Adding Microsoft Azure as an authentication provider in Backstage",source:"@site/../docs/auth/microsoft/provider.md",sourceDirName:"auth/microsoft",slug:"/auth/microsoft/provider",permalink:"/docs/auth/microsoft/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/microsoft/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Microsoft Azure Authentication Provider",sidebar_label:"Azure",description:"Adding Microsoft Azure as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"AWS ALB",permalink:"/docs/auth/aws-alb/provider"},next:{title:"Azure Easy Auth",permalink:"/docs/auth/microsoft/easy-auth"}},c={},l=[{value:"Configure App Registration on Azure",id:"configure-app-registration-on-azure",level:2},{value:"Outbound Network Access",id:"outbound-network-access",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Microsoft authentication\nprovider that can authenticate users using Azure OAuth."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-app-registration-on-azure",children:"Configure App Registration on Azure"}),"\n",(0,r.jsx)(t.p,{children:"Depending on how locked down your company is, you may need a directory administrator to do some or all of these instructions."}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.a,{href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",children:"Azure Portal > App registrations"})," and find your existing app registration, or create a new one.\nIf you have an existing App Registration for Backstage, use that rather than create a new one."]}),"\n",(0,r.jsxs)(t.p,{children:["On your app registration's overview page, add a new ",(0,r.jsx)(t.code,{children:"Web"})," platform configuration, with the configuration:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Redirect URI"}),": ",(0,r.jsx)(t.code,{children:"https://your-backstage.com/api/auth/microsoft/handler/frame"})," (for local dev, typically ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/microsoft/handler/frame"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Front-channel logout Url"}),": blank"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Implicit grant and hybrid flows"}),": All unchecked"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.strong,{children:"API permissions"})," tab, click on ",(0,r.jsx)(t.code,{children:"Add Permission"}),", then add the following ",(0,r.jsx)(t.code,{children:"Delegated"})," permission for the ",(0,r.jsx)(t.code,{children:"Microsoft Graph"})," API."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"email"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"offline_access"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"openid"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"profile"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"User.Read"})}),"\n",(0,r.jsxs)(t.li,{children:["Optional custom scopes of the ",(0,r.jsx)(t.code,{children:"Microsoft Graph"})," API defined in the app-config.yaml file."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Your company may require you to grant ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/user-admin-consent-overview",children:"admin consent"})," for these permissions.\nEven if your company doesn't require admin consent, you may wish to do so as it means users don't need to individually consent the first time they access backstage.\nTo grant admin consent, a directory admin will need to come to this page and click on the ",(0,r.jsx)(t.strong,{children:"Grant admin consent for COMPANY NAME"})," button."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"App Registration Permissions",src:n(540852).Z+"",width:"1534",height:"773"})}),"\n",(0,r.jsxs)(t.p,{children:["If you're using an existing app registration, and backstage already has a client secret, you can re-use that.\nIf not, go to the ",(0,r.jsx)(t.strong,{children:"Certificates & Secrets"})," page, then the ",(0,r.jsx)(t.strong,{children:"Client secrets"})," tab and create a new client secret.\nMake a note of this value as you'll need it in the next section."]}),"\n",(0,r.jsx)(t.h2,{id:"outbound-network-access",children:"Outbound Network Access"}),"\n",(0,r.jsx)(t.p,{children:"If your environment has restrictions on outgoing access (e.g. through\nfirewall rules), make sure your Backstage backend has access to the following\nhosts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"login.microsoftonline.com"}),", to get and exchange authorization codes and access\ntokens"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"graph.microsoft.com"}),", to fetch user profile information (as seen\nin ",(0,r.jsx)(t.a,{href:"https://github.com/seanfisher/passport-microsoft/blob/0456aa9bce05579c18e77f51330176eb26373658/lib/strategy.js#L93-L95",children:"this source code"}),").\nIf this host is unreachable, users may see an ",(0,r.jsx)(t.code,{children:"Authentication failed, failed to fetch user profile"})," error when they attempt to log in."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,r.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    microsoft:\n      development:\n        clientId: ${AZURE_CLIENT_ID}\n        clientSecret: ${AZURE_CLIENT_SECRET}\n        tenantId: ${AZURE_TENANT_ID}\n        domainHint: ${AZURE_TENANT_ID}\n        additionalScopes:\n          - Mail.Send\n        signIn:\n          resolvers:\n            # typically you would pick one of these\n            - resolver: emailMatchingUserEntityProfileEmail\n            - resolver: emailLocalPartMatchingUserEntityName\n            - resolver: emailMatchingUserEntityAnnotation\n"})}),"\n",(0,r.jsx)(t.p,{children:"The Microsoft provider is a structure with three mandatory configuration keys:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientId"}),": Application (client) ID, found on App Registration > Overview"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientSecret"}),": Secret, found on App Registration > Certificates & secrets"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"tenantId"}),": Directory (tenant) ID, found on App Registration > Overview"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"domainHint"})," (optional): Typically the same as ",(0,r.jsx)(t.code,{children:"tenantId"}),".\nLeave blank if your app registration is multi tenant.\nWhen specified, this reduces login friction for users with accounts in multiple tenants by automatically filtering away accounts from other tenants.\nFor more details, see ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/home-realm-discovery-policy",children:"Home Realm Discovery"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"additionalScopes"})," (optional): List of scopes for the App Registration. The default and mandatory value is ['user.read']."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,r.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailMatchingUserEntityAnnotation"}),": Matches the email address from the auth provider with the User entity where the value of the ",(0,r.jsx)(t.code,{children:"microsoft.com/email"})," annotation matches. If no match is found it will throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,r.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,r.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-microsoft-provider\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then we will need to this line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-microsoft-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,r.jsx)(t.code,{children:"microsoftAuthApiRef"})," reference and\n",(0,r.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,r.jsx)(t.a,{href:"/docs/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},540852:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permissions-1b98f6b542dfb1313b29e075e8ab8094.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var j=x.prototype=new v;j.constructor=x,m(j,g.prototype),j.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+S(c,0):i,b(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),I(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",b(e))for(var l=0;l<e.length;l++){var d=i+S(a=e[l],l);c+=I(a,t,o,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)c+=I(a=a.value,t,o,d=i+S(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},O={transition:null},T={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=x,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);