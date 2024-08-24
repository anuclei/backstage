/*! For license information please see ab075086.007d69d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[954191],{521938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),a=r(511151);const s={id:"v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0"},o=void 0,i={id:"releases/v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0",source:"@site/../docs/releases/v1.6.0.md",sourceDirName:"releases",slug:"/releases/v1.6.0",permalink:"/docs/releases/v1.6.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.6.0.md",tags:[],version:"current",frontMatter:{id:"v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0"},sidebar:"releases",previous:{title:"v1.7.0",permalink:"/docs/releases/v1.7.0"},next:{title:"v1.5.0",permalink:"/docs/releases/v1.5.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Moved to <code>swc</code> for transpilation",id:"moved-to-swc-for-transpilation",level:3},{value:"React Router Stable Compatibility",id:"react-router-stable-compatibility",level:3},{value:"Yarn 3 Support",id:"yarn-3-support",level:3},{value:"New plugin: <code>@backstage/plugin-user-settings-backend</code>",id:"new-plugin-backstageplugin-user-settings-backend",level:3},{value:"New plugin: <code>@backstage/plugin-playlist</code>",id:"new-plugin-backstageplugin-playlist",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.6.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsxs)(t.h3,{id:"moved-to-swc-for-transpilation",children:["Moved to ",(0,n.jsx)(t.code,{children:"swc"})," for transpilation"]}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve replaced ",(0,n.jsx)(t.code,{children:"sucrase"})," with ",(0,n.jsx)(t.a,{href:"https://swc.rs/",children:(0,n.jsx)(t.code,{children:"swc"})})," for transpilation in the Backstage CLI. While ",(0,n.jsx)(t.code,{children:"swc"})," has slightly slower transpilation times, it\u2019s a library backed by a larger community, and allows us to take advantage of ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-refresh",children:"React Refresh"})," out of the box. There\u2019s a few things that could possibly break installations of Backstage and compilation, you can read more about it in the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/515aadf8840591860e4bbdcc7d99cef8f9d7ac3c/docs/releases/v1.6.0-changelog.md#patch-changes-1",children:"changelog"})]}),"\n",(0,n.jsx)(t.h3,{id:"react-router-stable-compatibility",children:"React Router Stable Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["Backstage has for a long time been using React Router version ",(0,n.jsx)(t.code,{children:"6.0.0-beta.0"}),". We adopted this unstable version because v6 had some new features that fit really well with Backstage, particularly relative routing. Because we jumped on this early and unstable version, we knew that we would at some point need a breaking migration to the stable version of React Router v6, which is the point we're at now!"]}),"\n",(0,n.jsxs)(t.p,{children:["The migration is controlled by each app, meaning this release will not force you to migrate straight away, you can do so at your own pace. Check out the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/react-router-stable-migration",children:"migration guide"})," for all you need to know!"]}),"\n",(0,n.jsx)(t.h3,{id:"yarn-3-support",children:"Yarn 3 Support"}),"\n",(0,n.jsxs)(t.p,{children:["It is now possible to migrate Backstage projects to use Yarn 3. See the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/yarn-migration",children:"migration guide"})," for more information. Migrating to Yarn 3 is optional, and Backstage projects created with ",(0,n.jsx)(t.code,{children:"@backstage/create-app"})," will still use classic Yarn by default."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-user-settings-backend",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-user-settings-backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"user-settings"})," plugin now has an associated backend. This allows for the persistence of settings in your database, essentially in the form of a basic per-user key-value JSON store."]}),"\n",(0,n.jsxs)(t.p,{children:["As this backend was added, ",(0,n.jsx)(t.code,{children:"user-settings"})," also gained a ",(0,n.jsx)(t.code,{children:"UserSettingsStore"})," class that implements the ",(0,n.jsx)(t.code,{children:"storageApiRef"})," Utility API. If you install the backend as well as this frontend API, your starred entities and other storage-API-based features will no longer just be persisted in your browser\u2019s local storage, but centrally so that all your devices can leverage them."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/dschwank",children:"@dschwank"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13570",children:"#13570"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-playlist",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-playlist"})]}),"\n",(0,n.jsx)(t.p,{children:"This plugin can be used to create custom collections of Entities that can be shared throughout Backstage or for private usage."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12870",children:"#12870"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.p,{children:["Be sure to upgrade to the latest version of ",(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"}),", as it contains an explicit bump of a transitive dependency where a vulnerability was discovered. If you subscribe to CVE notifications you will already have received this update."]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.6.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var k=v.prototype=new m;k.constructor=v,g(k,b.prototype),k.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,s={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=t[a]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===s[a]&&(s[a]=c[a]);return{$$typeof:r,type:e,key:o,ref:i,props:s,_owner:w.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function B(e,t,a,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return o=o(c=e),e=""===s?"."+E(c,0):s,j(o)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),B(o,t,a,"",(function(e){return e}))):null!=o&&(R(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(c=0,s=""===s?".":s+":",j(e))for(var l=0;l<e.length;l++){var u=s+E(i=e[l],l);c+=B(i,t,a,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=B(i=i.value,t,a,u=s+E(i,l++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,r){if(null==e)return e;var n=[],a=0;return B(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:r,type:e.type,key:s,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(667294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);