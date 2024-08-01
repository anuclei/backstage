/*! For license information please see 2c2d0bda.8952dbe1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[854346],{734881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var r=t(824246),o=t(511151);const u={id:"frontend-plugin-api.anyextensioninputmap",title:"AnyExtensionInputMap",description:"API reference for AnyExtensionInputMap"},i=void 0,a={id:"reference/frontend-plugin-api.anyextensioninputmap",title:"AnyExtensionInputMap",description:"API reference for AnyExtensionInputMap",source:"@site/../docs/reference/frontend-plugin-api.anyextensioninputmap.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.anyextensioninputmap",permalink:"/docs/reference/frontend-plugin-api.anyextensioninputmap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.anyextensioninputmap.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.anyextensioninputmap",title:"AnyExtensionInputMap",description:"API reference for AnyExtensionInputMap"}},c={},s=[];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensioninputmap",children:(0,r.jsx)(n.code,{children:"AnyExtensionInputMap"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsx)(n.p,{children:"This type will be removed."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AnyExtensionInputMap = {\n    [inputName in string]: LegacyExtensionInput<AnyExtensionDataMap, {\n        optional: boolean;\n        singleton: boolean;\n    }>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.legacyextensioninput",children:"LegacyExtensionInput"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondatamap",children:"AnyExtensionDataMap"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:a.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function x(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=_.prototype;var v=b.prototype=new x;v.constructor=b,h(v,_.prototype),v.isPureReactComponent=!0;var g=Array.isArray,E=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var o,u={},i=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(i=""+n.key),n)E.call(n,o)&&!S.hasOwnProperty(o)&&(u[o]=n[o]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:i,ref:a,props:u,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return i=i(c=e),e=""===u?"."+I(c,0):u,g(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),C(i,n,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),n.push(i)),1;if(c=0,u=""===u?".":u+":",g(e))for(var s=0;s<e.length;s++){var f=u+I(a=e[s],s);c+=C(a,n,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)c+=C(a=a.value,n,o,f=u+I(a,s++),i);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},O={transition:null},M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:O,ReactCurrentOwner:j};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=_,n.Fragment=o,n.Profiler=i,n.PureComponent=b,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,a=j.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in n)E.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==c?c[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return A.current.useCallback(e,n)},n.useContext=function(e){return A.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return A.current.useDeferredValue(e)},n.useEffect=function(e,n){return A.current.useEffect(e,n)},n.useId=function(){return A.current.useId()},n.useImperativeHandle=function(e,n,t){return A.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return A.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return A.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return A.current.useMemo(e,n)},n.useReducer=function(e,n,t){return A.current.useReducer(e,n,t)},n.useRef=function(e){return A.current.useRef(e)},n.useState=function(e){return A.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return A.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return A.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(667294);const o={},u=r.createContext(o);function i(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);