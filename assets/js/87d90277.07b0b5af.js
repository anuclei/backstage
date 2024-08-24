/*! For license information please see 87d90277.07b0b5af.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[662415],{564073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",title:"KubernetesStructuredMetadataTableDrawerProps.renderObject",description:"API reference for KubernetesStructuredMetadataTableDrawerProps.renderObject"},a=void 0,c={id:"reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",title:"KubernetesStructuredMetadataTableDrawerProps.renderObject",description:"API reference for KubernetesStructuredMetadataTableDrawerProps.renderObject",source:"@site/../docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",permalink:"/docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",title:"KubernetesStructuredMetadataTableDrawerProps.renderObject",description:"API reference for KubernetesStructuredMetadataTableDrawerProps.renderObject"}},s={},i=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops",children:(0,n.jsx)(r.code,{children:"KubernetesStructuredMetadataTableDrawerProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops.renderobject",children:(0,n.jsx)(r.code,{children:"renderObject"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"renderObject: (obj: T) => object;\n"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:u,_owner:c.current}}r.Fragment=u,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||b}function _(){}function k(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var v=k.prototype=new _;v.constructor=k,y(v,h.prototype),v.isPureReactComponent=!0;var j=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,u={},a=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)S.call(r,o)&&!g.hasOwnProperty(o)&&(u[o]=r[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:c,props:u,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var O=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return a=a(s=e),e=""===u?"."+P(s,0):u,j(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),R(a,r,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(s=0,u=""===u?".":u+":",j(e))for(var i=0;i<e.length;i++){var l=u+P(c=e[i],i);s+=R(c,r,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(c=e.next()).done;)s+=R(c=c.value,r,o,l=u+P(c,i++),a);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function C(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:w};function M(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=h,r.Fragment=o,r.Profiler=a,r.PureComponent=k,r.StrictMode=u,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.act=M,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=w.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)S.call(r,i)&&!g.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:a,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=D.transition;D.transition={};try{e()}finally{D.transition=r}},r.unstable_act=M,r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,t){return T.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,t){return T.current.useReducer(e,r,t)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return T.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return T.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(667294);const o={},u=n.createContext(o);function a(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);