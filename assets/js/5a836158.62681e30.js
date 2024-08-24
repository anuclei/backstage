/*! For license information please see 5a836158.62681e30.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[143885],{814629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var n=r(824246),o=r(511151);const c={id:"plugin-kubernetes-common.deploymentfetchresponse",title:"DeploymentFetchResponse",description:"API reference for DeploymentFetchResponse"},s=void 0,u={id:"reference/plugin-kubernetes-common.deploymentfetchresponse",title:"DeploymentFetchResponse",description:"API reference for DeploymentFetchResponse",source:"@site/../docs/reference/plugin-kubernetes-common.deploymentfetchresponse.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.deploymentfetchresponse",permalink:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.deploymentfetchresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common.deploymentfetchresponse",title:"DeploymentFetchResponse",description:"API reference for DeploymentFetchResponse"}},i={},a=[{value:"Properties",id:"properties",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",children:(0,n.jsx)(t.code,{children:"DeploymentFetchResponse"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface DeploymentFetchResponse \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse.resources",children:"resources"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Array<V1Deployment>"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse.type",children:"type"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"'deployments'"}),(0,n.jsx)(t.td,{})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,c={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:c,_owner:u.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function _(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var j=v.prototype=new _;j.constructor=v,h(j,b.prototype),j.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,c={},s=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(c[o]=t[o]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];c.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:r,type:e,key:s,ref:u,props:c,_owner:g.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,c,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return s=s(i=e),e=""===c?"."+C(i,0):c,x(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),t.push(s)),1;if(i=0,c=""===c?".":c+":",x(e))for(var a=0;a<e.length;a++){var l=c+C(u=e[a],a);i+=$(u,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)i+=$(u=u.value,t,o,l=c+C(u,a++),s);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},F={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:F,ReactCurrentOwner:g};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)k.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:c,ref:s,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>s});var n=r(667294);const o={},c=n.createContext(o);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);