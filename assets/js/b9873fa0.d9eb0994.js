/*! For license information please see b9873fa0.d9eb0994.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[835597],{518424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var n=r(824246),o=r(511151);const c={id:"plugin-catalog-backend.entitiessearchfilter",title:"EntitiesSearchFilter",description:"API reference for EntitiesSearchFilter"},i=void 0,u={id:"reference/plugin-catalog-backend.entitiessearchfilter",title:"EntitiesSearchFilter",description:"API reference for EntitiesSearchFilter",source:"@site/../docs/reference/plugin-catalog-backend.entitiessearchfilter.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.entitiessearchfilter",permalink:"/docs/reference/plugin-catalog-backend.entitiessearchfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.entitiessearchfilter.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.entitiessearchfilter",title:"EntitiesSearchFilter",description:"API reference for EntitiesSearchFilter"}},a={},s=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.entitiessearchfilter",children:(0,n.jsx)(t.code,{children:"EntitiesSearchFilter"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(t.p,{children:["import from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-node"})," instead"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type EntitiesSearchFilter = _EntitiesSearchFilter;\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.entitiessearchfilter",children:"_EntitiesSearchFilter"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,c={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}t.Fragment=c,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var v=g.prototype=new b;v.constructor=g,h(v,_.prototype),v.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,c={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!j.hasOwnProperty(o)&&(c[o]=t[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:u,props:c,_owner:E.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,c,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===c?"."+C(a,0):c,k(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(a=0,c=""===c?".":c+":",k(e))for(var s=0;s<e.length;s++){var l=c+C(u=e[s],s);a+=$(u,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)a+=$(u=u.value,t,o,l=c+C(u,s++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},T={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:E};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)S.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,r){return F.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,r){return F.current.useReducer(e,t,r)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return F.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return F.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>i});var n=r(667294);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);