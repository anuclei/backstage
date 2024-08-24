/*! For license information please see daa8642a.91a8190a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[652441],{781518:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const a={id:"plugin-search.homepagesearchbarprops",title:"HomePageSearchBarProps",description:"API reference for HomePageSearchBarProps"},c=void 0,u={id:"reference/plugin-search.homepagesearchbarprops",title:"HomePageSearchBarProps",description:"API reference for HomePageSearchBarProps",source:"@site/../docs/reference/plugin-search.homepagesearchbarprops.md",sourceDirName:"reference",slug:"/reference/plugin-search.homepagesearchbarprops",permalink:"/docs/reference/plugin-search.homepagesearchbarprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search.homepagesearchbarprops.md",tags:[],version:"current",frontMatter:{id:"plugin-search.homepagesearchbarprops",title:"HomePageSearchBarProps",description:"API reference for HomePageSearchBarProps"}},s={},i=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search.homepagesearchbarprops",children:(0,n.jsx)(r.code,{children:"HomePageSearchBarProps"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Props for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search.homepagesearchbar",children:"HomePageSearchBar"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type HomePageSearchBarProps = Partial<Omit<SearchBarBaseProps, 'onChange' | 'onSubmit'>>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbarbaseprops",children:"SearchBarBaseProps"})]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:a,_owner:u.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function b(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var v=g.prototype=new b;v.constructor=g,y(v,_.prototype),v.isPureReactComponent=!0;var S=Array.isArray,P=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,a={},c=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)P.call(r,o)&&!x.hasOwnProperty(o)&&(a[o]=r[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];a.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:t,type:e,key:c,ref:u,props:a,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,a,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return c=c(s=e),e=""===a?"."+R(s,0):a,S(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(s=0,a=""===a?".":a+":",S(e))for(var i=0;i<e.length;i++){var f=a+R(u=e[i],i);s+=C(u,r,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)s+=C(u=u.value,r,o,f=a+R(u,i++),c);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},I={transition:null},H={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=c,r.PureComponent=g,r.StrictMode=a,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,r.act=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=j.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)P.call(r,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:a,ref:c,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return B.current.useCallback(e,r)},r.useContext=function(e){return B.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return B.current.useDeferredValue(e)},r.useEffect=function(e,r){return B.current.useEffect(e,r)},r.useId=function(){return B.current.useId()},r.useImperativeHandle=function(e,r,t){return B.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return B.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return B.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return B.current.useMemo(e,r)},r.useReducer=function(e,r,t){return B.current.useReducer(e,r,t)},r.useRef=function(e){return B.current.useRef(e)},r.useState=function(e){return B.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return B.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return B.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>c});var n=t(667294);const o={},a=n.createContext(o);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);