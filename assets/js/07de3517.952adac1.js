/*! For license information please see 07de3517.952adac1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[833449],{586394:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>f,toc:()=>a});var n=t(824246),o=t(511151);const u={id:"plugin-scaffolder-react.scaffolderrjsffieldprops.required",title:"ScaffolderRJSFFieldProps.required",description:"API reference for ScaffolderRJSFFieldProps.required"},c=void 0,f={id:"reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required",title:"ScaffolderRJSFFieldProps.required",description:"API reference for ScaffolderRJSFFieldProps.required",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsffieldprops.required",title:"ScaffolderRJSFFieldProps.required",description:"API reference for ScaffolderRJSFFieldProps.required"}},s={},a=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFieldProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.required",children:(0,n.jsx)(r.code,{children:"required"})})]}),"\n",(0,n.jsx)(r.p,{children:"The required status of this field"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"required?: boolean;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,u={},a=null,i=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(i=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:i,props:u,_owner:f.current}}r.Fragment=u,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var S=v.prototype=new b;S.constructor=v,h(S,_.prototype),S.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,u={},c=null,f=null;if(null!=r)for(o in void 0!==r.ref&&(f=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var a=Array(s),i=0;i<s;i++)a[i]=arguments[i+2];u.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:c,ref:f,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,u,c){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var s=!1;if(null===e)s=!0;else switch(f){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return c=c(s=e),e=""===u?"."+P(s,0):u,g(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(s=0,u=""===u?".":u+":",g(e))for(var a=0;a<e.length;a++){var i=u+P(f=e[a],a);s+=C(f,r,o,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),a=0;!(f=e.next()).done;)s+=C(f=f.value,r,o,i=u+P(f,a++),c);else if("object"===f)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function q(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},O={transition:null},I={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=c,r.PureComponent=v,r.StrictMode=u,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.act=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,f=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in r)j.call(r,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==s?s[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){s=Array(a);for(var i=0;i<a;i++)s[i]=arguments[i+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:f}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:q}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=O.transition;O.transition={};try{e()}finally{O.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return F.current.useCallback(e,r)},r.useContext=function(e){return F.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return F.current.useDeferredValue(e)},r.useEffect=function(e,r){return F.current.useEffect(e,r)},r.useId=function(){return F.current.useId()},r.useImperativeHandle=function(e,r,t){return F.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return F.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return F.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return F.current.useMemo(e,r)},r.useReducer=function(e,r,t){return F.current.useReducer(e,r,t)},r.useRef=function(e){return F.current.useRef(e)},r.useState=function(e){return F.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return F.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return F.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>f,a:()=>c});var n=t(667294);const o={},u=n.createContext(o);function c(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function f(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);