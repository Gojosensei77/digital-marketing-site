var Iy=Object.defineProperty;var Ly=(e,t,n)=>t in e?Iy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var rn=(e,t,n)=>(Ly(e,typeof t!="symbol"?t+"":t,n),n);function Ny(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function en(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gp={exports:{}},Il={},Kp={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),My=Symbol.for("react.portal"),Dy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Wy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),xd=Symbol.iterator;function Qy(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,Zp={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||qp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jp(){}Jp.prototype=Kr.prototype;function Zs(e,t,n){this.props=e,this.context=t,this.refs=Zp,this.updater=n||qp}var Js=Zs.prototype=new Jp;Js.constructor=Zs;Xp(Js,Kr.prototype);Js.isPureReactComponent=!0;var wd=Array.isArray,eh=Object.prototype.hasOwnProperty,ec={current:null},th={key:!0,ref:!0,__self:!0,__source:!0};function nh(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)eh.call(t,r)&&!th.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:to,type:e,key:o,ref:l,props:i,_owner:ec.current}}function Gy(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function Ky(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ky(""+e.key):t.toString(36)}function Do(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case to:case My:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+za(l,0):r,wd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),Do(i,t,n,"",function(s){return s})):i!=null&&(tc(i)&&(i=Gy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",wd(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+za(o,a);l+=Do(o,t,n,u,i)}else if(u=Qy(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+za(o,a++),l+=Do(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function fo(e,t,n){if(e==null)return e;var r=[],i=0;return Do(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},$o={transition:null},Xy={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ec};function rh(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:fo,forEach:function(e,t,n){fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fo(e,function(){t++}),t},toArray:function(e){return fo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Kr;ie.Fragment=Dy;ie.Profiler=By;ie.PureComponent=Zs;ie.StrictMode=$y;ie.Suspense=Vy;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;ie.act=rh;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)eh.call(t,u)&&!th.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:to,type:e.type,key:i,ref:o,props:r,_owner:l}};ie.createContext=function(e){return e={$$typeof:Uy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jy,_context:e},e.Consumer=e};ie.createElement=nh;ie.createFactory=function(e){var t=nh.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:Hy,render:e}};ie.isValidElement=tc;ie.lazy=function(e){return{$$typeof:Yy,_payload:{_status:-1,_result:e},_init:qy}};ie.memo=function(e,t){return{$$typeof:Wy,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};ie.unstable_act=rh;ie.useCallback=function(e,t){return rt.current.useCallback(e,t)};ie.useContext=function(e){return rt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return rt.current.useEffect(e,t)};ie.useId=function(){return rt.current.useId()};ie.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return rt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};ie.useRef=function(e){return rt.current.useRef(e)};ie.useState=function(e){return rt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return rt.current.useTransition()};ie.version="18.3.1";Kp.exports=ie;var D=Kp.exports;const $e=en(D),Zy=Ny({__proto__:null,default:$e},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=D,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)n0.call(t,r)&&!i0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:e0,type:e,key:o,ref:l,props:i,_owner:r0.current}}Il.Fragment=t0;Il.jsx=ih;Il.jsxs=ih;Gp.exports=Il;var nc=Gp.exports;const oh=nc.Fragment,v=nc.jsx,z=nc.jsxs;var Nu={},lh={exports:{}},kt={},ah={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var x=L.length;L.push(W);e:for(;0<x;){var ne=x-1>>>1,N=L[ne];if(0<i(N,W))L[ne]=W,L[x]=N,x=ne;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],x=L.pop();if(x!==W){L[0]=x;e:for(var ne=0,N=L.length,g=N>>>1;ne<g;){var B=2*(ne+1)-1,Y=L[B],T=B+1,ee=L[T];if(0>i(Y,x))T<N&&0>i(ee,Y)?(L[ne]=ee,L[T]=x,ne=T):(L[ne]=Y,L[B]=x,ne=B);else if(T<N&&0>i(ee,x))L[ne]=ee,L[T]=x,ne=T;else break e}}return W}function i(L,W){var x=L.sortIndex-W.sortIndex;return x!==0?x:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],c=1,d=null,p=3,f=!1,k=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var W=n(s);W!==null;){if(W.callback===null)r(s);else if(W.startTime<=L)r(s),W.sortIndex=W.expirationTime,t(u,W);else break;W=n(s)}}function E(L){if(w=!1,y(L),!k)if(n(u)!==null)k=!0,xe(P);else{var W=n(s);W!==null&&ae(E,W.startTime-L)}}function P(L,W){k=!1,w&&(w=!1,h(O),O=-1),f=!0;var x=p;try{for(y(W),d=n(u);d!==null&&(!(d.expirationTime>W)||L&&!j());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var N=ne(d.expirationTime<=W);W=e.unstable_now(),typeof N=="function"?d.callback=N:d===n(u)&&r(u),y(W)}else r(u);d=n(u)}if(d!==null)var g=!0;else{var B=n(s);B!==null&&ae(E,B.startTime-W),g=!1}return g}finally{d=null,p=x,f=!1}}var S=!1,F=null,O=-1,H=5,V=-1;function j(){return!(e.unstable_now()-V<H)}function $(){if(F!==null){var L=e.unstable_now();V=L;var W=!0;try{W=F(!0,L)}finally{W?J():(S=!1,F=null)}}else S=!1}var J;if(typeof m=="function")J=function(){m($)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Q=oe.port2;oe.port1.onmessage=$,J=function(){Q.postMessage(null)}}else J=function(){C($,0)};function xe(L){F=L,S||(S=!0,J())}function ae(L,W){O=C(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||f||(k=!0,xe(P))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var x=p;p=W;try{return L()}finally{p=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var x=p;p=L;try{return W()}finally{p=x}},e.unstable_scheduleCallback=function(L,W,x){var ne=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?ne+x:ne):x=ne,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=x+N,L={id:c++,callback:W,priorityLevel:L,startTime:x,expirationTime:N,sortIndex:-1},x>ne?(L.sortIndex=x,t(s,L),n(u)===null&&L===n(s)&&(w?(h(O),O=-1):w=!0,ae(E,x-ne))):(L.sortIndex=N,t(u,L),k||f||(k=!0,xe(P))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var W=p;return function(){var x=p;p=W;try{return L.apply(this,arguments)}finally{p=x}}}})(uh);ah.exports=uh;var o0=ah.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=D,wt=o0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sh=new Set,Ii={};function ar(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(Ii[e]=t,e=0;e<t.length;e++)sh.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sd={},Cd={};function u0(e){return Mu.call(Cd,e)?!0:Mu.call(Sd,e)?!1:a0.test(e)?Cd[e]=!0:(Sd[e]=!0,!1)}function s0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c0(e,t,n,r){if(t===null||typeof t>"u"||s0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var rc=/[\-:]([a-z])/g;function ic(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ke[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rc,ic);Ke[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rc,ic);Ke[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function oc(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c0(t,n,i,r)&&(n=null),r||i===null?u0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),ch=Symbol.for("react.provider"),dh=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),fh=Symbol.for("react.offscreen"),Ed=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,Oa;function yi(e){if(Oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oa=t&&t[1]||""}return`
`+Oa+e}var _a=!1;function Ra(e,t){if(!e||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function d0(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=Ra(e.type,!1),e;case 11:return e=Ra(e.type.render,!1),e;case 1:return e=Ra(e.type,!0),e;default:return""}}function ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case Du:return"Profiler";case lc:return"StrictMode";case $u:return"Suspense";case Bu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dh:return(e.displayName||"Context")+".Consumer";case ch:return(e._context.displayName||"Context")+".Provider";case ac:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uc:return t=e.displayName||null,t!==null?t:ju(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return ju(e(t))}catch{}}return null}function f0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(t);case 8:return t===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ph(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=ph(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=p0(e))}function hh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ph(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uu(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mh(e,t){t=t.checked,t!=null&&oc(e,"checked",t,!1)}function Hu(e,t){mh(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vu(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vu(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vi=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(vi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function gh(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,vh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){h0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function xh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function wh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var m0=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(e,t){if(t){if(m0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Gu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qu=null,Fr=null,zr=null;function Fd(e){if(e=io(e)){if(typeof qu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=$l(t),qu(e.stateNode,e.type,t))}}function kh(e){Fr?zr?zr.push(e):zr=[e]:Fr=e}function Sh(){if(Fr){var e=Fr,t=zr;if(zr=Fr=null,Fd(e),t)for(e=0;e<t.length;e++)Fd(t[e])}}function Ch(e,t){return e(t)}function Eh(){}var Ia=!1;function Th(e,t,n){if(Ia)return e(t,n);Ia=!0;try{return Ch(e,t,n)}finally{Ia=!1,(Fr!==null||zr!==null)&&(Eh(),Sh())}}function Ni(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Xu=!1;if(cn)try{var li={};Object.defineProperty(li,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Xu=!1}function g0(e,t,n,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var Si=!1,rl=null,il=!1,Zu=null,y0={onError:function(e){Si=!0,rl=e}};function v0(e,t,n,r,i,o,l,a,u){Si=!1,rl=null,g0.apply(y0,arguments)}function x0(e,t,n,r,i,o,l,a,u){if(v0.apply(this,arguments),Si){if(Si){var s=rl;Si=!1,rl=null}else throw Error(_(198));il||(il=!0,Zu=s)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zd(e){if(ur(e)!==e)throw Error(_(188))}function w0(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zd(i),e;if(o===r)return zd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ph(e){return e=w0(e),e!==null?Ah(e):null}function Ah(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ah(e);if(t!==null)return t;e=e.sibling}return null}var Fh=wt.unstable_scheduleCallback,Od=wt.unstable_cancelCallback,k0=wt.unstable_shouldYield,S0=wt.unstable_requestPaint,Re=wt.unstable_now,C0=wt.unstable_getCurrentPriorityLevel,cc=wt.unstable_ImmediatePriority,zh=wt.unstable_UserBlockingPriority,ol=wt.unstable_NormalPriority,E0=wt.unstable_LowPriority,Oh=wt.unstable_IdlePriority,Ll=null,Xt=null;function T0(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:A0,b0=Math.log,P0=Math.LN2;function A0(e){return e>>>=0,e===0?32:31-(b0(e)/P0|0)|0}var go=64,yo=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=xi(a):(o&=l,o!==0&&(r=xi(o)))}else l=n&~i,l!==0?r=xi(l):o!==0&&(r=xi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function F0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ut(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=F0(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ju(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _h(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function La(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function O0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,fc,Lh,Nh,Mh,es=!1,vo=[],Pn=null,An=null,Fn=null,Mi=new Map,Di=new Map,kn=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R0(e,t,n,r,i){switch(t){case"focusin":return Pn=ai(Pn,e,t,n,r,i),!0;case"dragenter":return An=ai(An,e,t,n,r,i),!0;case"mouseover":return Fn=ai(Fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mi.set(o,ai(Mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,ai(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function Dh(e){var t=qn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=bh(n),t!==null){e.blockedOn=t,Mh(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ku=r,n.target.dispatchEvent(r),Ku=null}else return t=io(n),t!==null&&fc(t),e.blockedOn=n,!1;t.shift()}return!0}function Rd(e,t,n){Bo(e)&&n.delete(t)}function I0(){es=!1,Pn!==null&&Bo(Pn)&&(Pn=null),An!==null&&Bo(An)&&(An=null),Fn!==null&&Bo(Fn)&&(Fn=null),Mi.forEach(Rd),Di.forEach(Rd)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,I0)))}function $i(e){function t(i){return ui(i,e)}if(0<vo.length){ui(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&ui(Pn,e),An!==null&&ui(An,e),Fn!==null&&ui(Fn,e),Mi.forEach(t),Di.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&kn.shift()}var Or=hn.ReactCurrentBatchConfig,al=!0;function L0(e,t,n,r){var i=pe,o=Or.transition;Or.transition=null;try{pe=1,pc(e,t,n,r)}finally{pe=i,Or.transition=o}}function N0(e,t,n,r){var i=pe,o=Or.transition;Or.transition=null;try{pe=4,pc(e,t,n,r)}finally{pe=i,Or.transition=o}}function pc(e,t,n,r){if(al){var i=ts(e,t,n,r);if(i===null)Wa(e,t,r,ul,n),_d(e,r);else if(R0(i,e,t,n,r))r.stopPropagation();else if(_d(e,r),t&4&&-1<_0.indexOf(e)){for(;i!==null;){var o=io(i);if(o!==null&&Ih(o),o=ts(e,t,n,r),o===null&&Wa(e,t,r,ul,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wa(e,t,r,null,n)}}var ul=null;function ts(e,t,n,r){if(ul=null,e=sc(r),e=qn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function $h(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case cc:return 1;case zh:return 4;case ol:case E0:return 16;case Oh:return 536870912;default:return 16}default:return 16}}var Cn=null,hc=null,jo=null;function Bh(){if(jo)return jo;var e,t=hc,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return jo=i.slice(e,1<r?1-r:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function Id(){return!1}function St(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xo:Id,this.isPropagationStopped=Id,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=St(qr),ro=Fe({},qr,{view:0,detail:0}),M0=St(ro),Na,Ma,si,Nl=Fe({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Na=e.screenX-si.screenX,Ma=e.screenY-si.screenY):Ma=Na=0,si=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Ma}}),Ld=St(Nl),D0=Fe({},Nl,{dataTransfer:0}),$0=St(D0),B0=Fe({},ro,{relatedTarget:0}),Da=St(B0),j0=Fe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=St(j0),H0=Fe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=St(H0),W0=Fe({},qr,{data:0}),Nd=St(W0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function gc(){return K0}var q0=Fe({},ro,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X0=St(q0),Z0=Fe({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=St(Z0),J0=Fe({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),e1=St(J0),t1=Fe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=St(t1),r1=Fe({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=St(r1),o1=[9,13,27,32],yc=cn&&"CompositionEvent"in window,Ci=null;cn&&"documentMode"in document&&(Ci=document.documentMode);var l1=cn&&"TextEvent"in window&&!Ci,jh=cn&&(!yc||Ci&&8<Ci&&11>=Ci),Dd=String.fromCharCode(32),$d=!1;function Uh(e,t){switch(e){case"keyup":return o1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function a1(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:($d=!0,Dd);case"textInput":return e=t.data,e===Dd&&$d?null:e;default:return null}}function u1(e,t){if(yr)return e==="compositionend"||!yc&&Uh(e,t)?(e=Bh(),jo=hc=Cn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jh&&t.locale!=="ko"?null:t.data;default:return null}}var s1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s1[e.type]:t==="textarea"}function Vh(e,t,n,r){kh(r),t=sl(t,"onChange"),0<t.length&&(n=new mc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,Bi=null;function c1(e){tm(e,0)}function Ml(e){var t=wr(e);if(hh(t))return e}function d1(e,t){if(e==="change")return t}var Wh=!1;if(cn){var $a;if(cn){var Ba="oninput"in document;if(!Ba){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Ba=typeof jd.oninput=="function"}$a=Ba}else $a=!1;Wh=$a&&(!document.documentMode||9<document.documentMode)}function Ud(){Ei&&(Ei.detachEvent("onpropertychange",Yh),Bi=Ei=null)}function Yh(e){if(e.propertyName==="value"&&Ml(Bi)){var t=[];Vh(t,Bi,e,sc(e)),Th(c1,t)}}function f1(e,t,n){e==="focusin"?(Ud(),Ei=t,Bi=n,Ei.attachEvent("onpropertychange",Yh)):e==="focusout"&&Ud()}function p1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(Bi)}function h1(e,t){if(e==="click")return Ml(t)}function m1(e,t){if(e==="input"||e==="change")return Ml(t)}function g1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:g1;function ji(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mu.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Hd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function Qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gh(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function y1(e){var t=Gh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qh(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vd(n,o);var l=Vd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v1=cn&&"documentMode"in document&&11>=document.documentMode,vr=null,ns=null,Ti=null,rs=!1;function Wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||vr==null||vr!==nl(r)||(r=vr,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&ji(Ti,r)||(Ti=r,r=sl(ns,"onSelect"),0<r.length&&(t=new mc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},ja={},Kh={};cn&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Dl(e){if(ja[e])return ja[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kh)return ja[e]=t[n];return e}var qh=Dl("animationend"),Xh=Dl("animationiteration"),Zh=Dl("animationstart"),Jh=Dl("transitionend"),em=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){em.set(e,t),ar(t,[e])}for(var Ua=0;Ua<Yd.length;Ua++){var Ha=Yd[Ua],x1=Ha.toLowerCase(),w1=Ha[0].toUpperCase()+Ha.slice(1);$n(x1,"on"+w1)}$n(qh,"onAnimationEnd");$n(Xh,"onAnimationIteration");$n(Zh,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Jh,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x0(r,t,void 0,e),e.currentTarget=null}function tm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Qd(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Qd(i,a,s),o=u}}}if(il)throw e=Zu,il=!1,Zu=null,e}function Ce(e,t){var n=t[us];n===void 0&&(n=t[us]=new Set);var r=e+"__bubble";n.has(r)||(nm(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),nm(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[ko]){e[ko]=!0,sh.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Va("selectionchange",!1,t))}}function nm(e,t,n,r){switch($h(t)){case 1:var i=L0;break;case 4:i=N0;break;default:i=pc}n=i.bind(null,t,n,e),i=void 0,!Xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=qn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Th(function(){var s=o,c=sc(n),d=[];e:{var p=em.get(e);if(p!==void 0){var f=mc,k=e;switch(e){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":f=X0;break;case"focusin":k="focus",f=Da;break;case"focusout":k="blur",f=Da;break;case"beforeblur":case"afterblur":f=Da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=e1;break;case qh:case Xh:case Zh:f=U0;break;case Jh:f=n1;break;case"scroll":f=M0;break;case"wheel":f=i1;break;case"copy":case"cut":case"paste":f=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Md}var w=(t&4)!==0,C=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var m=s,y;m!==null;){y=m;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,h!==null&&(E=Ni(m,h),E!=null&&w.push(Hi(m,E,y)))),C)break;m=m.return}0<w.length&&(p=new f(p,k,null,n,c),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Ku&&(k=n.relatedTarget||n.fromElement)&&(qn(k)||k[dn]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(k=n.relatedTarget||n.toElement,f=s,k=k?qn(k):null,k!==null&&(C=ur(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(f=null,k=s),f!==k)){if(w=Ld,E="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Md,E="onPointerLeave",h="onPointerEnter",m="pointer"),C=f==null?p:wr(f),y=k==null?p:wr(k),p=new w(E,m+"leave",f,n,c),p.target=C,p.relatedTarget=y,E=null,qn(c)===s&&(w=new w(h,m+"enter",k,n,c),w.target=y,w.relatedTarget=C,E=w),C=E,f&&k)t:{for(w=f,h=k,m=0,y=w;y;y=cr(y))m++;for(y=0,E=h;E;E=cr(E))y++;for(;0<m-y;)w=cr(w),m--;for(;0<y-m;)h=cr(h),y--;for(;m--;){if(w===h||h!==null&&w===h.alternate)break t;w=cr(w),h=cr(h)}w=null}else w=null;f!==null&&Gd(d,p,f,w,!1),k!==null&&C!==null&&Gd(d,C,k,w,!0)}}e:{if(p=s?wr(s):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var P=d1;else if(Bd(p))if(Wh)P=m1;else{P=p1;var S=f1}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=h1);if(P&&(P=P(e,s))){Vh(d,P,n,c);break e}S&&S(e,p,s),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Vu(p,"number",p.value)}switch(S=s?wr(s):window,e){case"focusin":(Bd(S)||S.contentEditable==="true")&&(vr=S,ns=s,Ti=null);break;case"focusout":Ti=ns=vr=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Wd(d,n,c);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Wd(d,n,c)}var F;if(yc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else yr?Uh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(jh&&n.locale!=="ko"&&(yr||O!=="onCompositionStart"?O==="onCompositionEnd"&&yr&&(F=Bh()):(Cn=c,hc="value"in Cn?Cn.value:Cn.textContent,yr=!0)),S=sl(s,O),0<S.length&&(O=new Nd(O,e,null,n,c),d.push({event:O,listeners:S}),F?O.data=F:(F=Hh(n),F!==null&&(O.data=F)))),(F=l1?a1(e,n):u1(e,n))&&(s=sl(s,"onBeforeInput"),0<s.length&&(c=new Nd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:s}),c.data=F))}tm(d,t)})}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ni(e,n),o!=null&&r.unshift(Hi(e,o,i)),o=Ni(e,t),o!=null&&r.push(Hi(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Ni(n,o),u!=null&&l.unshift(Hi(n,u,a))):i||(u=Ni(n,o),u!=null&&l.push(Hi(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var S1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Kd(e){return(typeof e=="string"?e:""+e).replace(S1,`
`).replace(C1,"")}function So(e,t,n){if(t=Kd(t),Kd(e)!==t&&n)throw Error(_(425))}function cl(){}var is=null,os=null;function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var as=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(b1)}:as;function b1(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Xr,Vi="__reactProps$"+Xr,dn="__reactContainer$"+Xr,us="__reactEvents$"+Xr,P1="__reactListeners$"+Xr,A1="__reactHandles$"+Xr;function qn(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xd(e);e!==null;){if(n=e[Gt])return n;e=Xd(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[Gt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function $l(e){return e[Vi]||null}var ss=[],kr=-1;function Bn(e){return{current:e}}function Ee(e){0>kr||(e.current=ss[kr],ss[kr]=null,kr--)}function ke(e,t){kr++,ss[kr]=e.current,e.current=t}var Dn={},et=Bn(Dn),ut=Bn(!1),tr=Dn;function jr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function dl(){Ee(ut),Ee(et)}function Zd(e,t,n){if(et.current!==Dn)throw Error(_(168));ke(et,t),ke(ut,n)}function rm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,f0(e)||"Unknown",i));return Fe({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,tr=et.current,ke(et,e),ke(ut,ut.current),!0}function Jd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=rm(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Ee(ut),Ee(et),ke(et,e)):Ee(ut),ke(ut,n)}var ln=null,Bl=!1,Qa=!1;function im(e){ln===null?ln=[e]:ln.push(e)}function F1(e){Bl=!0,im(e)}function jn(){if(!Qa&&ln!==null){Qa=!0;var e=0,t=pe;try{var n=ln;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,Bl=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),Fh(cc,jn),i}finally{pe=t,Qa=!1}}return null}var Sr=[],Cr=0,pl=null,hl=0,Tt=[],bt=0,nr=null,an=1,un="";function Qn(e,t){Sr[Cr++]=hl,Sr[Cr++]=pl,pl=e,hl=t}function om(e,t,n){Tt[bt++]=an,Tt[bt++]=un,Tt[bt++]=nr,nr=e;var r=an;e=un;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,an=1<<32-Ut(t)+i|n<<i|r,un=o+e}else an=1<<o|n<<i|r,un=e}function xc(e){e.return!==null&&(Qn(e,1),om(e,1,0))}function wc(e){for(;e===pl;)pl=Sr[--Cr],Sr[Cr]=null,hl=Sr[--Cr],Sr[Cr]=null;for(;e===nr;)nr=Tt[--bt],Tt[bt]=null,un=Tt[--bt],Tt[bt]=null,an=Tt[--bt],Tt[bt]=null}var xt=null,yt=null,Te=!1,Bt=null;function lm(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ef(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,yt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:an,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,yt=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(Te){var t=yt;if(t){var n=t;if(!ef(e,t)){if(cs(e))throw Error(_(418));t=zn(n.nextSibling);var r=xt;t&&ef(e,t)?lm(r,n):(e.flags=e.flags&-4097|2,Te=!1,xt=e)}}else{if(cs(e))throw Error(_(418));e.flags=e.flags&-4097|2,Te=!1,xt=e}}}function tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Co(e){if(e!==xt)return!1;if(!Te)return tf(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ls(e.type,e.memoizedProps)),t&&(t=yt)){if(cs(e))throw am(),Error(_(418));for(;t;)lm(e,t),t=zn(t.nextSibling)}if(tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=xt?zn(e.stateNode.nextSibling):null;return!0}function am(){for(var e=yt;e;)e=zn(e.nextSibling)}function Ur(){yt=xt=null,Te=!1}function kc(e){Bt===null?Bt=[e]:Bt.push(e)}var z1=hn.ReactCurrentBatchConfig;function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nf(e){var t=e._init;return t(e._payload)}function um(e){function t(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=In(h,m),h.index=0,h.sibling=null,h}function o(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,y,E){return m===null||m.tag!==6?(m=eu(y,h.mode,E),m.return=h,m):(m=i(m,y),m.return=h,m)}function u(h,m,y,E){var P=y.type;return P===gr?c(h,m,y.props.children,E,y.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&nf(P)===m.type)?(E=i(m,y.props),E.ref=ci(h,m,y),E.return=h,E):(E=Ko(y.type,y.key,y.props,null,h.mode,E),E.ref=ci(h,m,y),E.return=h,E)}function s(h,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=tu(y,h.mode,E),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function c(h,m,y,E,P){return m===null||m.tag!==7?(m=er(y,h.mode,E,P),m.return=h,m):(m=i(m,y),m.return=h,m)}function d(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=eu(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case po:return y=Ko(m.type,m.key,m.props,null,h.mode,y),y.ref=ci(h,null,m),y.return=h,y;case mr:return m=tu(m,h.mode,y),m.return=h,m;case xn:var E=m._init;return d(h,E(m._payload),y)}if(vi(m)||oi(m))return m=er(m,h.mode,y,null),m.return=h,m;Eo(h,m)}return null}function p(h,m,y,E){var P=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:a(h,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case po:return y.key===P?u(h,m,y,E):null;case mr:return y.key===P?s(h,m,y,E):null;case xn:return P=y._init,p(h,m,P(y._payload),E)}if(vi(y)||oi(y))return P!==null?null:c(h,m,y,E,null);Eo(h,y)}return null}function f(h,m,y,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(y)||null,a(m,h,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case po:return h=h.get(E.key===null?y:E.key)||null,u(m,h,E,P);case mr:return h=h.get(E.key===null?y:E.key)||null,s(m,h,E,P);case xn:var S=E._init;return f(h,m,y,S(E._payload),P)}if(vi(E)||oi(E))return h=h.get(y)||null,c(m,h,E,P,null);Eo(m,E)}return null}function k(h,m,y,E){for(var P=null,S=null,F=m,O=m=0,H=null;F!==null&&O<y.length;O++){F.index>O?(H=F,F=null):H=F.sibling;var V=p(h,F,y[O],E);if(V===null){F===null&&(F=H);break}e&&F&&V.alternate===null&&t(h,F),m=o(V,m,O),S===null?P=V:S.sibling=V,S=V,F=H}if(O===y.length)return n(h,F),Te&&Qn(h,O),P;if(F===null){for(;O<y.length;O++)F=d(h,y[O],E),F!==null&&(m=o(F,m,O),S===null?P=F:S.sibling=F,S=F);return Te&&Qn(h,O),P}for(F=r(h,F);O<y.length;O++)H=f(F,h,O,y[O],E),H!==null&&(e&&H.alternate!==null&&F.delete(H.key===null?O:H.key),m=o(H,m,O),S===null?P=H:S.sibling=H,S=H);return e&&F.forEach(function(j){return t(h,j)}),Te&&Qn(h,O),P}function w(h,m,y,E){var P=oi(y);if(typeof P!="function")throw Error(_(150));if(y=P.call(y),y==null)throw Error(_(151));for(var S=P=null,F=m,O=m=0,H=null,V=y.next();F!==null&&!V.done;O++,V=y.next()){F.index>O?(H=F,F=null):H=F.sibling;var j=p(h,F,V.value,E);if(j===null){F===null&&(F=H);break}e&&F&&j.alternate===null&&t(h,F),m=o(j,m,O),S===null?P=j:S.sibling=j,S=j,F=H}if(V.done)return n(h,F),Te&&Qn(h,O),P;if(F===null){for(;!V.done;O++,V=y.next())V=d(h,V.value,E),V!==null&&(m=o(V,m,O),S===null?P=V:S.sibling=V,S=V);return Te&&Qn(h,O),P}for(F=r(h,F);!V.done;O++,V=y.next())V=f(F,h,O,V.value,E),V!==null&&(e&&V.alternate!==null&&F.delete(V.key===null?O:V.key),m=o(V,m,O),S===null?P=V:S.sibling=V,S=V);return e&&F.forEach(function($){return t(h,$)}),Te&&Qn(h,O),P}function C(h,m,y,E){if(typeof y=="object"&&y!==null&&y.type===gr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case po:e:{for(var P=y.key,S=m;S!==null;){if(S.key===P){if(P=y.type,P===gr){if(S.tag===7){n(h,S.sibling),m=i(S,y.props.children),m.return=h,h=m;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&nf(P)===S.type){n(h,S.sibling),m=i(S,y.props),m.ref=ci(h,S,y),m.return=h,h=m;break e}n(h,S);break}else t(h,S);S=S.sibling}y.type===gr?(m=er(y.props.children,h.mode,E,y.key),m.return=h,h=m):(E=Ko(y.type,y.key,y.props,null,h.mode,E),E.ref=ci(h,m,y),E.return=h,h=E)}return l(h);case mr:e:{for(S=y.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=tu(y,h.mode,E),m.return=h,h=m}return l(h);case xn:return S=y._init,C(h,m,S(y._payload),E)}if(vi(y))return k(h,m,y,E);if(oi(y))return w(h,m,y,E);Eo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,y),m.return=h,h=m):(n(h,m),m=eu(y,h.mode,E),m.return=h,h=m),l(h)):n(h,m)}return C}var Hr=um(!0),sm=um(!1),ml=Bn(null),gl=null,Er=null,Sc=null;function Cc(){Sc=Er=gl=null}function Ec(e){var t=ml.current;Ee(ml),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){gl=e,Sc=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(Sc!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(gl===null)throw Error(_(308));Er=e,gl.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Xn=null;function Tc(e){Xn===null?Xn=[e]:Xn.push(e)}function cm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,fn(e,n)}return i=r.interleaved,i===null?(t.next=t,Tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,fn(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}function rf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=s:a.next=s,c.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;l=0,c=s=u=null,a=o;do{var p=a.lane,f=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(p=t,f=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){d=k.call(f,d,p);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,p=typeof k=="function"?k.call(f,d,p):k,p==null)break e;d=Fe({},d,p);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else f={eventTime:f,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(s=c=f,u=d):c=c.next=f,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(u=d),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=l,e.lanes=l,e.memoizedState=d}}function of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var oo={},Zt=Bn(oo),Wi=Bn(oo),Yi=Bn(oo);function Zn(e){if(e===oo)throw Error(_(174));return e}function Pc(e,t){switch(ke(Yi,t),ke(Wi,e),ke(Zt,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yu(t,e)}Ee(Zt),ke(Zt,t)}function Vr(){Ee(Zt),Ee(Wi),Ee(Yi)}function fm(e){Zn(Yi.current);var t=Zn(Zt.current),n=Yu(t,e.type);t!==n&&(ke(Wi,e),ke(Zt,n))}function Ac(e){Wi.current===e&&(Ee(Zt),Ee(Wi))}var Pe=Bn(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=[];function Fc(){for(var e=0;e<Ga.length;e++)Ga[e]._workInProgressVersionPrimary=null;Ga.length=0}var Vo=hn.ReactCurrentDispatcher,Ka=hn.ReactCurrentBatchConfig,rr=0,Ae=null,Ue=null,Ve=null,xl=!1,bi=!1,Qi=0,O1=0;function Xe(){throw Error(_(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,o){if(rr=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?L1:N1,e=n(r,i),bi){o=0;do{if(bi=!1,Qi=0,25<=o)throw Error(_(301));o+=1,Ve=Ue=null,t.updateQueue=null,Vo.current=M1,e=n(r,i)}while(bi)}if(Vo.current=wl,t=Ue!==null&&Ue.next!==null,rr=0,Ve=Ue=Ae=null,xl=!1,t)throw Error(_(300));return e}function _c(){var e=Qi!==0;return Qi=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ae.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ot(){if(Ue===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ve===null?Ae.memoizedState:Ve.next;if(t!==null)Ve=t,Ue=e;else{if(e===null)throw Error(_(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?Ae.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Gi(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=Ot(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var c=s.lane;if((rr&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=d,l=r):u=u.next=d,Ae.lanes|=c,ir|=c}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,Vt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=Ot(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Vt(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pm(){}function hm(e,t){var n=Ae,r=Ot(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Rc(ym.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Ki(9,gm.bind(null,n,r,i,t),void 0,null),We===null)throw Error(_(349));rr&30||mm(n,t,i)}return i}function mm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gm(e,t,n,r){t.value=n,t.getSnapshot=r,vm(t)&&xm(e)}function ym(e,t,n){return n(function(){vm(t)&&xm(e)})}function vm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function xm(e){var t=fn(e,1);t!==null&&Ht(t,e,1,-1)}function lf(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=I1.bind(null,Ae,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wm(){return Ot().memoizedState}function Wo(e,t,n,r){var i=Yt();Ae.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var l=Ue.memoizedState;if(o=l.destroy,r!==null&&zc(r,l.deps)){i.memoizedState=Ki(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Ki(1|t,n,o,r)}function af(e,t){return Wo(8390656,8,e,t)}function Rc(e,t){return jl(2048,8,e,t)}function km(e,t){return jl(4,2,e,t)}function Sm(e,t){return jl(4,4,e,t)}function Cm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Em(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,Cm.bind(null,t,e),n)}function Ic(){}function Tm(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bm(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pm(e,t,n){return rr&21?(Vt(n,t)||(n=_h(),Ae.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function _1(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Ka.transition;Ka.transition={};try{e(!1),t()}finally{pe=n,Ka.transition=r}}function Am(){return Ot().memoizedState}function R1(e,t,n){var r=Rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fm(e))zm(t,n);else if(n=cm(e,t,n,r),n!==null){var i=nt();Ht(n,e,r,i),Om(n,t,r)}}function I1(e,t,n){var r=Rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fm(e))zm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Vt(a,l)){var u=t.interleaved;u===null?(i.next=i,Tc(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=cm(e,t,i,r),n!==null&&(i=nt(),Ht(n,e,r,i),Om(n,t,r))}}function Fm(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function zm(e,t){bi=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Om(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dc(e,n)}}var wl={readContext:zt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},L1={readContext:zt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:lf,useDebugValue:Ic,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=lf(!1),t=e[0];return e=_1.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Yt();if(Te){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),We===null)throw Error(_(349));rr&30||mm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,af(ym.bind(null,r,o,e),[e]),r.flags|=2048,Ki(9,gm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=We.identifierPrefix;if(Te){var n=un,r=an;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N1={readContext:zt,useCallback:Tm,useContext:zt,useEffect:Rc,useImperativeHandle:Em,useInsertionEffect:km,useLayoutEffect:Sm,useMemo:bm,useReducer:qa,useRef:wm,useState:function(){return qa(Gi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Ot();return Pm(t,Ue.memoizedState,e)},useTransition:function(){var e=qa(Gi)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:hm,useId:Am,unstable_isNewReconciler:!1},M1={readContext:zt,useCallback:Tm,useContext:zt,useEffect:Rc,useImperativeHandle:Em,useInsertionEffect:km,useLayoutEffect:Sm,useMemo:bm,useReducer:Xa,useRef:wm,useState:function(){return Xa(Gi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Ot();return Ue===null?t.memoizedState=e:Pm(t,Ue.memoizedState,e)},useTransition:function(){var e=Xa(Gi)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:hm,useId:Am,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Rn(e),o=sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=On(e,o,i),t!==null&&(Ht(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Rn(e),o=sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=On(e,o,i),t!==null&&(Ht(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Rn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=On(e,i,r),t!==null&&(Ht(t,e,r,n),Ho(t,e,r))}};function uf(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,o):!0}function _m(e,t,n){var r=!1,i=Dn,o=t.contextType;return typeof o=="object"&&o!==null?o=zt(o):(i=st(t)?tr:et.current,r=t.contextTypes,o=(r=r!=null)?jr(e,i):Dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=zt(o):(o=st(t)?tr:et.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ps(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ul.enqueueReplaceState(i,i.state,null),yl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var n="",r=t;do n+=d0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var D1=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,Ts=r),ms(e,t)},n}function Im(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ms(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new D1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Z1.bind(null,e,t,n),t.then(e,e))}function df(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ff(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,On(n,t,1))),n.lanes|=1),e)}var $1=hn.ReactCurrentOwner,at=!1;function tt(e,t,n,r){t.child=e===null?sm(t,null,n,r):Hr(t,e.child,n,r)}function pf(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=Oc(e,t,n,r,o,i),n=_c(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(Te&&n&&xc(t),t.flags|=1,tt(e,t,r,i),t.child)}function hf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lm(e,t,o,r,i)):(e=Ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(l,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=In(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ji(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,pn(e,t,i)}return gs(e,t,n,r,i)}function Nm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(br,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(br,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(br,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(br,gt),gt|=r;return tt(e,t,i,n),t.child}function Mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,n,r,i){var o=st(n)?tr:et.current;return o=jr(t,o),_r(t,i),n=Oc(e,t,n,r,o,i),r=_c(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(Te&&r&&xc(t),t.flags|=1,tt(e,t,n,i),t.child)}function mf(e,t,n,r,i){if(st(n)){var o=!0;fl(t)}else o=!1;if(_r(t,i),t.stateNode===null)Yo(e,t),_m(t,n,r),hs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=zt(s):(s=st(n)?tr:et.current,s=jr(t,s));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&sf(t,l,r,s),wn=!1;var p=t.memoizedState;l.state=p,yl(t,r,l,i),u=t.memoizedState,a!==r||p!==u||ut.current||wn?(typeof c=="function"&&(ps(t,n,c,r),u=t.memoizedState),(a=wn||uf(t,n,a,r,p,u,s))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,dm(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Dt(t.type,a),l.props=s,d=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=st(n)?tr:et.current,u=jr(t,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||p!==u)&&sf(t,l,r,u),wn=!1,p=t.memoizedState,l.state=p,yl(t,r,l,i);var k=t.memoizedState;a!==d||p!==k||ut.current||wn?(typeof f=="function"&&(ps(t,n,f,r),k=t.memoizedState),(s=wn||uf(t,n,s,r,p,k,u)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ys(e,t,n,r,o,i)}function ys(e,t,n,r,i,o){Mm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Jd(t,n,!1),pn(e,t,o);r=t.stateNode,$1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,a,o)):tt(e,t,a,o),t.memoizedState=r.state,i&&Jd(t,n,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?Zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zd(e,t.context,!1),Pc(e,t.containerInfo)}function gf(e,t,n,r,i){return Ur(),kc(i),t.flags|=256,tt(e,t,n,r),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $m(e,t,n){var r=t.pendingProps,i=Pe.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Pe,i&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Wl(l,r,0,null),e=er(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xs(n),t.memoizedState=vs,e):Lc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=In(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=In(a,o):(o=er(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?xs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=vs,r}return o=e.child,e=o.sibling,r=In(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,n,r){return r!==null&&kc(r),Hr(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Za(Error(_(422))),To(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wl({mode:"visible",children:r.children},i,0,null),o=er(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,l),t.child.memoizedState=xs(l),t.memoizedState=vs,o);if(!(t.mode&1))return To(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Za(o,r,void 0),To(e,t,l,r)}if(a=(l&e.childLanes)!==0,at||a){if(r=We,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,fn(e,i),Ht(r,e,i,-1))}return jc(),r=Za(Error(_(421))),To(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=J1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=zn(i.nextSibling),xt=t,Te=!0,Bt=null,e!==null&&(Tt[bt++]=an,Tt[bt++]=un,Tt[bt++]=nr,an=e.id,un=e.overflow,nr=t),t=Lc(t,r.children),t.flags|=4096,t)}function yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function Ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(tt(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,n,t);else if(e.tag===19)yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ja(t,!0,n,null,o);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j1(e,t,n){switch(t.tag){case 3:Dm(t),Ur();break;case 5:fm(t);break;case 1:st(t.type)&&fl(t);break;case 4:Pc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ke(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?$m(e,t,n):(ke(Pe,Pe.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Nm(e,t,n)}return pn(e,t,n)}var jm,ws,Um,Hm;jm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};Um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn(Zt.current);var o=null;switch(n){case"input":i=Uu(e,i),r=Uu(e,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=Wu(e,i),r=Wu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Qu(n,r);var l;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ii.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&Ce("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}};Hm=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U1(e,t,n){var r=t.pendingProps;switch(wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return st(t.type)&&dl(),Ze(t),null;case 3:return r=t.stateNode,Vr(),Ee(ut),Ee(et),Fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(As(Bt),Bt=null))),ws(e,t),Ze(t),null;case 5:Ac(t);var i=Zn(Yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ze(t),null}if(e=Zn(Zt.current),Co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Gt]=t,r[Vi]=o,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)Ce(wi[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Td(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":Pd(r,o),Ce("invalid",r)}Qu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&So(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&So(r.textContent,a,e),i=["children",""+a]):Ii.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ce("scroll",r)}switch(n){case"input":ho(r),bd(r,o,!0);break;case"textarea":ho(r),Ad(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Gt]=t,e[Vi]=r,jm(e,t,!1,!1),t.stateNode=e;e:{switch(l=Gu(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)Ce(wi[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":Td(e,r),i=Uu(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":Pd(e,r),i=Wu(e,r),Ce("invalid",e);break;default:i=r}Qu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?wh(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vh(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Li(e,u):typeof u=="number"&&Li(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ii.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ce("scroll",e):u!=null&&oc(e,o,u,l))}switch(n){case"input":ho(e),bd(e,r,!1);break;case"textarea":ho(e),Ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Hm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Zn(Yi.current),Zn(Zt.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:So(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return Ze(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&yt!==null&&t.mode&1&&!(t.flags&128))am(),Ur(),t.flags|=98560,o=!1;else if(o=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Gt]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Bt!==null&&(As(Bt),Bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?He===0&&(He=3):jc())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Vr(),ws(e,t),e===null&&Ui(t.stateNode.containerInfo),Ze(t),null;case 10:return Ec(t.type._context),Ze(t),null;case 17:return st(t.type)&&dl(),Ze(t),null;case 19:if(Ee(Pe),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)di(o,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=vl(e),l!==null){for(t.flags|=128,di(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Re()>Yr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=vl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Te)return Ze(t),null}else 2*Re()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Re(),t.sibling=null,n=Pe.current,ke(Pe,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function H1(e,t){switch(wc(t),t.tag){case 1:return st(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),Ee(ut),Ee(et),Fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ac(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return Vr(),null;case 10:return Ec(t.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var bo=!1,Je=!1,V1=typeof WeakSet=="function"?WeakSet:Set,U=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function ks(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var vf=!1;function W1(e,t){if(is=al,e=Gh(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,c=0,d=e,p=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++s===i&&(a=l),p===o&&++c===r&&(u=l),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},al=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,C=k.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Dt(t.type,w),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){Oe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return k=vf,vf=!1,k}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ks(t,n,o)}i=i.next}while(i!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Vi],delete t[us],delete t[P1],delete t[A1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wm(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var Qe=null,$t=!1;function yn(e,t,n){for(n=n.child;n!==null;)Ym(e,t,n),n=n.sibling}function Ym(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:Je||Tr(n,t);case 6:var r=Qe,i=$t;Qe=null,yn(e,t,n),Qe=r,$t=i,Qe!==null&&($t?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&($t?(e=Qe,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),$i(e)):Ya(Qe,n.stateNode));break;case 4:r=Qe,i=$t,Qe=n.stateNode.containerInfo,$t=!0,yn(e,t,n),Qe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ks(n,t,l),i=i.next}while(i!==r)}yn(e,t,n);break;case 1:if(!Je&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,t,a)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,yn(e,t,n),Je=r):yn(e,t,n);break;default:yn(e,t,n)}}function wf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V1),t.forEach(function(r){var i=ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,$t=!1;break e;case 3:Qe=a.stateNode.containerInfo,$t=!0;break e;case 4:Qe=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Qe===null)throw Error(_(160));Ym(o,l,i),Qe=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){Oe(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qm(t,e),t=t.sibling}function Qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Wt(e),r&4){try{Pi(3,e,e.return),Hl(3,e)}catch(w){Oe(e,e.return,w)}try{Pi(5,e,e.return)}catch(w){Oe(e,e.return,w)}}break;case 1:Mt(t,e),Wt(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(Mt(t,e),Wt(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(w){Oe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mh(i,o),Gu(a,l);var s=Gu(a,o);for(l=0;l<u.length;l+=2){var c=u[l],d=u[l+1];c==="style"?wh(i,d):c==="dangerouslySetInnerHTML"?vh(i,d):c==="children"?Li(i,d):oc(i,c,d,s)}switch(a){case"input":Hu(i,o);break;case"textarea":gh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Ar(i,!!o.multiple,f,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ar(i,!!o.multiple,o.defaultValue,!0):Ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vi]=o}catch(w){Oe(e,e.return,w)}}break;case 6:if(Mt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Oe(e,e.return,w)}}break;case 3:if(Mt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(w){Oe(e,e.return,w)}break;case 4:Mt(t,e),Wt(e);break;case 13:Mt(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Dc=Re())),r&4&&wf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(s=Je)||c,Mt(t,e),Je=s):Mt(t,e),Wt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(p=U,f=p.child,p.tag){case 0:case 11:case 14:case 15:Pi(4,p,p.return);break;case 1:Tr(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:Tr(p,p.return);break;case 22:if(p.memoizedState!==null){Sf(d);continue}}f!==null?(f.return=p,U=f):Sf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xh("display",l))}catch(w){Oe(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(w){Oe(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(t,e),Wt(e),r&4&&wf(e);break;case 21:break;default:Mt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var o=xf(e);Es(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xf(e);Cs(e,a,l);break;default:throw Error(_(161))}}catch(u){Oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Y1(e,t,n){U=e,Gm(e)}function Gm(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||bo;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Je;a=bo;var s=Je;if(bo=l,(Je=u)&&!s)for(U=i;U!==null;)l=U,u=l.child,l.tag===22&&l.memoizedState!==null?Cf(i):u!==null?(u.return=l,U=u):Cf(i);for(;o!==null;)U=o,Gm(o),o=o.sibling;U=i,bo=a,Je=s}kf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):kf(e)}}function kf(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&of(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}of(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Je||t.flags&512&&Ss(t)}catch(p){Oe(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Sf(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Cf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(u){Oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Oe(t,i,u)}}var o=t.return;try{Ss(t)}catch(u){Oe(t,o,u)}break;case 5:var l=t.return;try{Ss(t)}catch(u){Oe(t,l,u)}}}catch(u){Oe(t,t.return,u)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var Q1=Math.ceil,kl=hn.ReactCurrentDispatcher,Nc=hn.ReactCurrentOwner,Ft=hn.ReactCurrentBatchConfig,ce=0,We=null,De=null,Ge=0,gt=0,br=Bn(0),He=0,qi=null,ir=0,Vl=0,Mc=0,Ai=null,lt=null,Dc=0,Yr=1/0,on=null,Sl=!1,Ts=null,_n=null,Po=!1,En=null,Cl=0,Fi=0,bs=null,Qo=-1,Go=0;function nt(){return ce&6?Re():Qo!==-1?Qo:Qo=Re()}function Rn(e){return e.mode&1?ce&2&&Ge!==0?Ge&-Ge:z1.transition!==null?(Go===0&&(Go=_h()),Go):(e=pe,e!==0||(e=window.event,e=e===void 0?16:$h(e.type)),e):1}function Ht(e,t,n,r){if(50<Fi)throw Fi=0,bs=null,Error(_(185));no(e,n,r),(!(ce&2)||e!==We)&&(e===We&&(!(ce&2)&&(Vl|=n),He===4&&Sn(e,Ge)),ct(e,r),n===1&&ce===0&&!(t.mode&1)&&(Yr=Re()+500,Bl&&jn()))}function ct(e,t){var n=e.callbackNode;z0(e,t);var r=ll(e,e===We?Ge:0);if(r===0)n!==null&&Od(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Od(n),t===1)e.tag===0?F1(Ef.bind(null,e)):im(Ef.bind(null,e)),T1(function(){!(ce&6)&&jn()}),n=null;else{switch(Rh(r)){case 1:n=cc;break;case 4:n=zh;break;case 16:n=ol;break;case 536870912:n=Oh;break;default:n=ol}n=ng(n,Km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Km(e,t){if(Qo=-1,Go=0,ce&6)throw Error(_(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=ll(e,e===We?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=ce;ce|=2;var o=Xm();(We!==e||Ge!==t)&&(on=null,Yr=Re()+500,Jn(e,t));do try{q1();break}catch(a){qm(e,a)}while(1);Cc(),kl.current=o,ce=i,De!==null?t=0:(We=null,Ge=0,t=He)}if(t!==0){if(t===2&&(i=Ju(e),i!==0&&(r=i,t=Ps(e,i))),t===1)throw n=qi,Jn(e,0),Sn(e,r),ct(e,Re()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!G1(i)&&(t=El(e,r),t===2&&(o=Ju(e),o!==0&&(r=o,t=Ps(e,o))),t===1))throw n=qi,Jn(e,0),Sn(e,r),ct(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Gn(e,lt,on);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Dc+500-Re(),10<t)){if(ll(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=as(Gn.bind(null,e,lt,on),t);break}Gn(e,lt,on);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ut(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){e.timeoutHandle=as(Gn.bind(null,e,lt,on),r);break}Gn(e,lt,on);break;case 5:Gn(e,lt,on);break;default:throw Error(_(329))}}}return ct(e,Re()),e.callbackNode===n?Km.bind(null,e):null}function Ps(e,t){var n=Ai;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=El(e,t),e!==2&&(t=lt,lt=n,t!==null&&As(t)),e}function As(e){lt===null?lt=e:lt.push.apply(lt,e)}function G1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Mc,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Ef(e){if(ce&6)throw Error(_(327));Rr();var t=ll(e,0);if(!(t&1))return ct(e,Re()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Ju(e);r!==0&&(t=r,n=Ps(e,r))}if(n===1)throw n=qi,Jn(e,0),Sn(e,t),ct(e,Re()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,lt,on),ct(e,Re()),null}function $c(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Yr=Re()+500,Bl&&jn())}}function or(e){En!==null&&En.tag===0&&!(ce&6)&&Rr();var t=ce;ce|=1;var n=Ft.transition,r=pe;try{if(Ft.transition=null,pe=1,e)return e()}finally{pe=r,Ft.transition=n,ce=t,!(ce&6)&&jn()}}function Bc(){gt=br.current,Ee(br)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E1(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Vr(),Ee(ut),Ee(et),Fc();break;case 5:Ac(r);break;case 4:Vr();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Ec(r.type._context);break;case 22:case 23:Bc()}n=n.return}if(We=e,De=e=In(e.current,null),Ge=gt=t,He=0,qi=null,Mc=Vl=ir=0,lt=Ai=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Xn=null}return e}function qm(e,t){do{var n=De;try{if(Cc(),Vo.current=wl,xl){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(rr=0,Ve=Ue=Ae=null,bi=!1,Qi=0,Nc.current=null,n===null||n.return===null){He=1,qi=t,De=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Ge,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=df(l);if(f!==null){f.flags&=-257,ff(f,l,a,o,t),f.mode&1&&cf(o,s,t),t=f,u=s;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){cf(o,s,t),jc();break e}u=Error(_(426))}}else if(Te&&a.mode&1){var C=df(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ff(C,l,a,o,t),kc(Wr(u,a));break e}}o=u=Wr(u,a),He!==4&&(He=2),Ai===null?Ai=[o]:Ai.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Rm(o,u,t);rf(o,h);break e;case 1:a=u;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_n===null||!_n.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Im(o,a,t);rf(o,E);break e}}o=o.return}while(o!==null)}Jm(n)}catch(P){t=P,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Xm(){var e=kl.current;return kl.current=wl,e===null?wl:e}function jc(){(He===0||He===3||He===2)&&(He=4),We===null||!(ir&268435455)&&!(Vl&268435455)||Sn(We,Ge)}function El(e,t){var n=ce;ce|=2;var r=Xm();(We!==e||Ge!==t)&&(on=null,Jn(e,t));do try{K1();break}catch(i){qm(e,i)}while(1);if(Cc(),ce=n,kl.current=r,De!==null)throw Error(_(261));return We=null,Ge=0,He}function K1(){for(;De!==null;)Zm(De)}function q1(){for(;De!==null&&!k0();)Zm(De)}function Zm(e){var t=tg(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Jm(e):De=t,Nc.current=null}function Jm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H1(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,De=null;return}}else if(n=U1(n,t,gt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);He===0&&(He=5)}function Gn(e,t,n){var r=pe,i=Ft.transition;try{Ft.transition=null,pe=1,X1(e,t,n,r)}finally{Ft.transition=i,pe=r}return null}function X1(e,t,n,r){do Rr();while(En!==null);if(ce&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(O0(e,o),e===We&&(De=We=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,ng(ol,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ft.transition,Ft.transition=null;var l=pe;pe=1;var a=ce;ce|=4,Nc.current=null,W1(e,n),Qm(n,e),y1(os),al=!!is,os=is=null,e.current=n,Y1(n),S0(),ce=a,pe=l,Ft.transition=o}else e.current=n;if(Po&&(Po=!1,En=e,Cl=i),o=e.pendingLanes,o===0&&(_n=null),T0(n.stateNode),ct(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=Ts,Ts=null,e;return Cl&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===bs?Fi++:(Fi=0,bs=e):Fi=0,jn(),null}function Rr(){if(En!==null){var e=Rh(Cl),t=Ft.transition,n=pe;try{if(Ft.transition=null,pe=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,Cl=0,ce&6)throw Error(_(331));var i=ce;for(ce|=4,U=e.current;U!==null;){var o=U,l=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(U=s;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Pi(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var p=c.sibling,f=c.return;if(Vm(c),c===s){U=null;break}if(p!==null){p.return=f,U=p;break}U=f}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}U=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,U=l;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){l=U;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,U=y;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(P){Oe(a,a.return,P)}if(a===l){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(ce=i,jn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{pe=n,Ft.transition=t}}return!1}function Tf(e,t,n){t=Wr(n,t),t=Rm(e,t,1),e=On(e,t,1),t=nt(),e!==null&&(no(e,1,t),ct(e,t))}function Oe(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=Wr(n,e),e=Im(t,e,1),t=On(t,e,1),e=nt(),t!==null&&(no(t,1,e),ct(t,e));break}}t=t.return}}function Z1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Ge&n)===n&&(He===4||He===3&&(Ge&130023424)===Ge&&500>Re()-Dc?Jn(e,0):Mc|=n),ct(e,t)}function eg(e,t){t===0&&(e.mode&1?(t=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):t=1);var n=nt();e=fn(e,t),e!==null&&(no(e,t,n),ct(e,n))}function J1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eg(e,n)}function ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),eg(e,n)}var tg;tg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,j1(e,t,n);at=!!(e.flags&131072)}else at=!1,Te&&t.flags&1048576&&om(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yo(e,t),e=t.pendingProps;var i=jr(t,et.current);_r(t,n),i=Oc(null,t,r,e,i,n);var o=_c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(o=!0,fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bc(t),i.updater=Ul,t.stateNode=i,i._reactInternals=t,hs(t,r,e,n),t=ys(null,t,r,!0,o,n)):(t.tag=0,Te&&o&&xc(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nv(r),e=Dt(r,e),i){case 0:t=gs(null,t,r,e,n);break e;case 1:t=mf(null,t,r,e,n);break e;case 11:t=pf(null,t,r,e,n);break e;case 14:t=hf(null,t,r,Dt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),gs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),mf(e,t,r,i,n);case 3:e:{if(Dm(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dm(e,t),yl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(_(423)),t),t=gf(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(_(424)),t),t=gf(e,t,r,n,i);break e}else for(yt=zn(t.stateNode.containerInfo.firstChild),xt=t,Te=!0,Bt=null,n=sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){t=pn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return fm(t),e===null&&ds(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ls(r,i)?l=null:o!==null&&ls(r,o)&&(t.flags|=32),Mm(e,t),tt(e,t,l,n),t.child;case 6:return e===null&&ds(t),null;case 13:return $m(e,t,n);case 4:return Pc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),pf(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ke(ml,r._currentValue),r._currentValue=l,o!==null)if(Vt(o.value,l)){if(o.children===i.children&&!ut.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=sn(-1,n&-n),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),fs(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),fs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=zt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),hf(e,t,r,i,n);case 15:return Lm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Yo(e,t),t.tag=1,st(r)?(e=!0,fl(t)):e=!1,_r(t,n),_m(t,r,i),hs(t,r,i,n),ys(null,t,r,!0,e,n);case 19:return Bm(e,t,n);case 22:return Nm(e,t,n)}throw Error(_(156,t.tag))};function ng(e,t){return Fh(e,t)}function tv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new tv(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nv(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ac)return 11;if(e===uc)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Uc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gr:return er(n.children,i,o,t);case lc:l=8,i|=8;break;case Du:return e=At(12,n,t,i|2),e.elementType=Du,e.lanes=o,e;case $u:return e=At(13,n,t,i),e.elementType=$u,e.lanes=o,e;case Bu:return e=At(19,n,t,i),e.elementType=Bu,e.lanes=o,e;case fh:return Wl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ch:l=10;break e;case dh:l=9;break e;case ac:l=11;break e;case uc:l=14;break e;case xn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=At(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function er(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=At(22,e,r,t),e.elementType=fh,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(e,t,n,r,i,o,l,a,u){return e=new rv(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=At(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(o),e}function iv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rg(e){if(!e)return Dn;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(st(n))return rm(e,n,t)}return t}function ig(e,t,n,r,i,o,l,a,u){return e=Hc(n,r,!0,e,i,o,l,a,u),e.context=rg(null),n=e.current,r=nt(),i=Rn(n),o=sn(r,i),o.callback=t??null,On(n,o,i),e.current.lanes=i,no(e,i,r),ct(e,r),e}function Yl(e,t,n,r){var i=t.current,o=nt(),l=Rn(i);return n=rg(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=On(i,t,l),e!==null&&(Ht(e,i,l,o),Ho(e,i,l)),l}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vc(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function ov(){return null}var og=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}Ql.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Yl(e,t,null,null)};Ql.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Yl(null,e,null,null)}),t[dn]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&Dh(e)}};function Yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function lv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=Tl(l);o.call(s)}}var l=ig(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=l,e[dn]=l.current,Ui(e.nodeType===8?e.parentNode:e),or(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=Tl(u);a.call(s)}}var u=Hc(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=u,e[dn]=u.current,Ui(e.nodeType===8?e.parentNode:e),or(function(){Yl(t,u,n,r)}),u}function Kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=Tl(l);a.call(u)}}Yl(t,l,e,i)}else l=lv(n,t,e,i,r);return Tl(l)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(dc(t,n|1),ct(t,Re()),!(ce&6)&&(Yr=Re()+500,jn()))}break;case 13:or(function(){var r=fn(e,1);if(r!==null){var i=nt();Ht(r,e,1,i)}}),Vc(e,1)}};fc=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=nt();Ht(t,e,134217728,n)}Vc(e,134217728)}};Lh=function(e){if(e.tag===13){var t=Rn(e),n=fn(e,t);if(n!==null){var r=nt();Ht(n,e,t,r)}Vc(e,t)}};Nh=function(){return pe};Mh=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};qu=function(e,t,n){switch(t){case"input":if(Hu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$l(r);if(!i)throw Error(_(90));hh(r),Hu(r,i)}}}break;case"textarea":gh(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};Ch=$c;Eh=or;var av={usingClientEntryPoint:!1,Events:[io,wr,$l,kh,Sh,$c]},fi={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uv={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Ll=Ao.inject(uv),Xt=Ao}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av;kt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(t))throw Error(_(200));return iv(e,t,null,n)};kt.createRoot=function(e,t){if(!Yc(e))throw Error(_(299));var n=!1,r="",i=og;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hc(e,1,!1,null,null,n,!1,r,i),e[dn]=t.current,Ui(e.nodeType===8?e.parentNode:e),new Wc(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return or(e)};kt.hydrate=function(e,t,n){if(!Gl(t))throw Error(_(200));return Kl(null,e,t,!0,n)};kt.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=og;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ig(t,null,e,1,n??null,i,!1,o,l),e[dn]=t.current,Ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ql(t)};kt.render=function(e,t,n){if(!Gl(t))throw Error(_(200));return Kl(null,e,t,!1,n)};kt.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(_(40));return e._reactRootContainer?(or(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};kt.unstable_batchedUpdates=$c;kt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Kl(e,t,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lg)}catch(e){console.error(e)}}lg(),lh.exports=kt;var sv=lh.exports,Af=sv;Nu.createRoot=Af.createRoot,Nu.hydrateRoot=Af.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const Ff="popstate";function cv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Fs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bl(i)}return fv(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ag(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dv(){return Math.random().toString(36).substr(2,8)}function zf(e,t){return{usr:e.state,key:e.key,idx:t}}function Fs(e,t,n,r){return n===void 0&&(n=null),Xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||dv()})}function bl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Tn.Pop,u=null,s=c();s==null&&(s=0,l.replaceState(Xi({},l.state,{idx:s}),""));function c(){return(l.state||{idx:null}).idx}function d(){a=Tn.Pop;let C=c(),h=C==null?null:C-s;s=C,u&&u({action:a,location:w.location,delta:h})}function p(C,h){a=Tn.Push;let m=Fs(w.location,C,h);n&&n(m,C),s=c()+1;let y=zf(m,s),E=w.createHref(m);try{l.pushState(y,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}o&&u&&u({action:a,location:w.location,delta:1})}function f(C,h){a=Tn.Replace;let m=Fs(w.location,C,h);n&&n(m,C),s=c();let y=zf(m,s),E=w.createHref(m);l.replaceState(y,"",E),o&&u&&u({action:a,location:w.location,delta:0})}function k(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:bl(C);return m=m.replace(/ $/,"%20"),Ie(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let w={get action(){return a},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ff,d),u=C,()=>{i.removeEventListener(Ff,d),u=null}},createHref(C){return t(i,C)},createURL:k,encodeLocation(C){let h=k(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(C){return l.go(C)}};return w}var Of;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Of||(Of={}));function pv(e,t,n){return n===void 0&&(n="/"),hv(e,t,n,!1)}function hv(e,t,n,r){let i=typeof t=="string"?Zr(t):t,o=Qc(i.pathname||"/",n);if(o==null)return null;let l=ug(e);mv(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let s=bv(o);a=Ev(l[u],s,r)}return a}function ug(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=Ln([r,u.relativePath]),c=n.concat(u);o.children&&o.children.length>0&&(Ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),ug(o.children,t,c,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:Sv(s,o.index),routesMeta:c})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of sg(o.path))i(o,l,u)}),t}function sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=sg(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gv=/^:[\w-]+$/,yv=3,vv=2,xv=1,wv=10,kv=-2,_f=e=>e==="*";function Sv(e,t){let n=e.split("/"),r=n.length;return n.some(_f)&&(r+=kv),t&&(r+=vv),n.filter(i=>!_f(i)).reduce((i,o)=>i+(gv.test(o)?yv:o===""?xv:wv),r)}function Cv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ev(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],s=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Rf({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},c),p=u.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=Rf({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Ln([o,d.pathname]),pathnameBase:zv(Ln([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=Ln([o,d.pathnameBase]))}return l}function Rf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((s,c,d)=>{let{paramName:p,isOptional:f}=c;if(p==="*"){let w=a[d]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const k=a[d];return f&&!k?s[p]=void 0:s[p]=(k||"").replace(/%2F/g,"/"),s},{}),pathname:o,pathnameBase:l,pattern:e}}function Tv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ag(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ag(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zr(e):e;return{pathname:n?n.startsWith("/")?n:Av(n,t):t,search:Ov(r),hash:_v(i)}}function Av(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gc(e,t){let n=Fv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zr(e):(i=Xi({},e),Ie(!i.pathname||!i.pathname.includes("?"),nu("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),nu("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),nu("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let u=Pv(i,a),s=l&&l!=="/"&&l.endsWith("/"),c=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||c)&&(u.pathname+="/"),u}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ov=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cg=["post","put","patch","delete"];new Set(cg);const Iv=["get",...cg];new Set(Iv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}const qc=D.createContext(null),Lv=D.createContext(null),Un=D.createContext(null),ql=D.createContext(null),mn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),dg=D.createContext(null);function Nv(e,t){let{relative:n}=t===void 0?{}:t;Jr()||Ie(!1);let{basename:r,navigator:i}=D.useContext(Un),{hash:o,pathname:l,search:a}=mg(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ln([r,l])),i.createHref({pathname:u,search:a,hash:o})}function Jr(){return D.useContext(ql)!=null}function lo(){return Jr()||Ie(!1),D.useContext(ql).location}function fg(e){D.useContext(Un).static||D.useLayoutEffect(e)}function pg(){let{isDataRoute:e}=D.useContext(mn);return e?Kv():Mv()}function Mv(){Jr()||Ie(!1);let e=D.useContext(qc),{basename:t,future:n,navigator:r}=D.useContext(Un),{matches:i}=D.useContext(mn),{pathname:o}=lo(),l=JSON.stringify(Gc(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return fg(()=>{a.current=!0}),D.useCallback(function(s,c){if(c===void 0&&(c={}),!a.current)return;if(typeof s=="number"){r.go(s);return}let d=Kc(s,JSON.parse(l),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ln([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,l,o,e])}function hg(){let{matches:e}=D.useContext(mn),t=e[e.length-1];return t?t.params:{}}function mg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=D.useContext(Un),{matches:i}=D.useContext(mn),{pathname:o}=lo(),l=JSON.stringify(Gc(i,r.v7_relativeSplatPath));return D.useMemo(()=>Kc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Dv(e,t){return $v(e,t)}function $v(e,t,n,r){Jr()||Ie(!1);let{navigator:i}=D.useContext(Un),{matches:o}=D.useContext(mn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let s=lo(),c;if(t){var d;let C=typeof t=="string"?Zr(t):t;u==="/"||(d=C.pathname)!=null&&d.startsWith(u)||Ie(!1),c=C}else c=s;let p=c.pathname||"/",f=p;if(u!=="/"){let C=u.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=pv(e,{pathname:f}),w=Vv(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Ln([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Ln([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?D.createElement(ql.Provider,{value:{location:Zi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Tn.Pop}},w):w}function Bv(){let e=Gv(),t=Rv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:i},n):null,o)}const jv=D.createElement(Bv,null);class Uv extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?D.createElement(mn.Provider,{value:this.props.routeContext},D.createElement(dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hv(e){let{routeContext:t,match:n,children:r}=e,i=D.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(mn.Provider,{value:t},r)}function Vv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||Ie(!1),l=l.slice(0,Math.min(l.length,c+1))}let u=!1,s=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<l.length;c++){let d=l[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(s=c),d.route.id){let{loaderData:p,errors:f}=n,k=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||k){u=!0,s>=0?l=l.slice(0,s+1):l=[l[0]];break}}}return l.reduceRight((c,d,p)=>{let f,k=!1,w=null,C=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||jv,u&&(s<0&&p===0?(qv("route-fallback",!1),k=!0,C=null):s===p&&(k=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,p+1)),m=()=>{let y;return f?y=w:k?y=C:d.route.Component?y=D.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,D.createElement(Hv,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?D.createElement(Uv,{location:n.location,revalidation:n.revalidation,component:w,error:f,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var gg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gg||{}),Pl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pl||{});function Wv(e){let t=D.useContext(qc);return t||Ie(!1),t}function Yv(e){let t=D.useContext(Lv);return t||Ie(!1),t}function Qv(e){let t=D.useContext(mn);return t||Ie(!1),t}function yg(e){let t=Qv(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function Gv(){var e;let t=D.useContext(dg),n=Yv(Pl.UseRouteError),r=yg(Pl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Kv(){let{router:e}=Wv(gg.UseNavigateStable),t=yg(Pl.UseNavigateStable),n=D.useRef(!1);return fg(()=>{n.current=!0}),D.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zi({fromRouteId:t},o)))},[e,t])}const If={};function qv(e,t,n){!t&&!If[e]&&(If[e]=!0)}function Xv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function vg(e){let{to:t,replace:n,state:r,relative:i}=e;Jr()||Ie(!1);let{future:o,static:l}=D.useContext(Un),{matches:a}=D.useContext(mn),{pathname:u}=lo(),s=pg(),c=Kc(t,Gc(a,o.v7_relativeSplatPath),u,i==="path"),d=JSON.stringify(c);return D.useEffect(()=>s(JSON.parse(d),{replace:n,state:r,relative:i}),[s,d,i,n,r]),null}function hr(e){Ie(!1)}function Zv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:o,static:l=!1,future:a}=e;Jr()&&Ie(!1);let u=t.replace(/^\/*/,"/"),s=D.useMemo(()=>({basename:u,navigator:o,static:l,future:Zi({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=Zr(r));let{pathname:c="/",search:d="",hash:p="",state:f=null,key:k="default"}=r,w=D.useMemo(()=>{let C=Qc(c,u);return C==null?null:{location:{pathname:C,search:d,hash:p,state:f,key:k},navigationType:i}},[u,c,d,p,f,k,i]);return w==null?null:D.createElement(Un.Provider,{value:s},D.createElement(ql.Provider,{children:n,value:w}))}function Jv(e){let{children:t,location:n}=e;return Dv(zs(t),n)}new Promise(()=>{});function zs(e,t){t===void 0&&(t=[]);let n=[];return D.Children.forEach(e,(r,i)=>{if(!D.isValidElement(r))return;let o=[...t,i];if(r.type===D.Fragment){n.push.apply(n,zs(r.props.children,o));return}r.type!==hr&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=zs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}function ex(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nx(e,t){return e.button===0&&(!t||t==="_self")&&!tx(e)}const rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ix="6";try{window.__reactRouterVersion=ix}catch{}const ox="startTransition",Lf=Zy[ox];function lx(e){let{basename:t,children:n,future:r,window:i}=e,o=D.useRef();o.current==null&&(o.current=cv({window:i,v5Compat:!0}));let l=o.current,[a,u]=D.useState({action:l.action,location:l.location}),{v7_startTransition:s}=r||{},c=D.useCallback(d=>{s&&Lf?Lf(()=>u(d)):u(d)},[u,s]);return D.useLayoutEffect(()=>l.listen(c),[l,c]),D.useEffect(()=>Xv(r),[r]),D.createElement(Zv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ft=D.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:c,viewTransition:d}=t,p=ex(t,rx),{basename:f}=D.useContext(Un),k,w=!1;if(typeof s=="string"&&ux.test(s)&&(k=s,ax))try{let y=new URL(window.location.href),E=s.startsWith("//")?new URL(y.protocol+s):new URL(s),P=Qc(E.pathname,f);E.origin===y.origin&&P!=null?s=P+E.search+E.hash:w=!0}catch{}let C=Nv(s,{relative:i}),h=sx(s,{replace:l,state:a,target:u,preventScrollReset:c,relative:i,viewTransition:d});function m(y){r&&r(y),y.defaultPrevented||h(y)}return D.createElement("a",Os({},p,{href:k||C,onClick:w||o?r:m,ref:n,target:u}))});var Nf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var Mf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mf||(Mf={}));function sx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=pg(),s=lo(),c=mg(e,{relative:l});return D.useCallback(d=>{if(nx(d,n)){d.preventDefault();let p=r!==void 0?r:bl(s)===bl(c);u(e,{replace:p,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[s,u,c,r,i,n,e,o,l,a])}var xg={exports:{}},ve={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Symbol.for("react.transitional.element"),Zc=Symbol.for("react.portal"),Xl=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),ea=Symbol.for("react.consumer"),ta=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),la=Symbol.for("react.lazy"),cx=Symbol.for("react.view_transition"),dx=Symbol.for("react.client.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xc:switch(e=e.type,e){case Xl:case Jl:case Zl:case ra:case ia:case cx:return e;default:switch(e=e&&e.$$typeof,e){case ta:case na:case la:case oa:return e;case ea:return e;default:return t}}case Zc:return t}}}ve.ContextConsumer=ea;ve.ContextProvider=ta;ve.Element=Xc;ve.ForwardRef=na;ve.Fragment=Xl;ve.Lazy=la;ve.Memo=oa;ve.Portal=Zc;ve.Profiler=Jl;ve.StrictMode=Zl;ve.Suspense=ra;ve.SuspenseList=ia;ve.isContextConsumer=function(e){return _t(e)===ea};ve.isContextProvider=function(e){return _t(e)===ta};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xc};ve.isForwardRef=function(e){return _t(e)===na};ve.isFragment=function(e){return _t(e)===Xl};ve.isLazy=function(e){return _t(e)===la};ve.isMemo=function(e){return _t(e)===oa};ve.isPortal=function(e){return _t(e)===Zc};ve.isProfiler=function(e){return _t(e)===Jl};ve.isStrictMode=function(e){return _t(e)===Zl};ve.isSuspense=function(e){return _t(e)===ra};ve.isSuspenseList=function(e){return _t(e)===ia};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xl||e===Jl||e===Zl||e===ra||e===ia||typeof e=="object"&&e!==null&&(e.$$typeof===la||e.$$typeof===oa||e.$$typeof===ta||e.$$typeof===ea||e.$$typeof===na||e.$$typeof===dx||e.getModuleId!==void 0)};ve.typeOf=_t;xg.exports=ve;var wg=xg.exports,fx=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),a=Object.keys(n);if(l.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),s=0;s<l.length;s++){var c=l[s];if(!u(c))return!1;var d=t[c],p=n[c];if(o=r?r.call(i,d,p,c):void 0,o===!1||o===void 0&&d!==p)return!1}return!0};const px=en(fx);function hx(e){function t(N,g,B,Y,T){for(var ee=0,M=0,fe=0,re=0,ue,X,Be=0,qe=0,le,je=le=ue=0,se=0,Le=0,Vn=0,Ne=0,Wn=B.length,Yn=Wn-1,pt,q="",be="",ni="",A="",R;se<Wn;){if(X=B.charCodeAt(se),se===Yn&&M+re+fe+ee!==0&&(M!==0&&(X=M===47?10:47),re=fe=ee=0,Wn++,Yn++),M+re+fe+ee===0){if(se===Yn&&(0<Le&&(q=q.replace(p,"")),0<q.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:q+=B.charAt(se)}X=59}switch(X){case 123:for(q=q.trim(),ue=q.charCodeAt(0),le=1,Ne=++se;se<Wn;){switch(X=B.charCodeAt(se)){case 123:le++;break;case 125:le--;break;case 47:switch(X=B.charCodeAt(se+1)){case 42:case 47:e:{for(je=se+1;je<Yn;++je)switch(B.charCodeAt(je)){case 47:if(X===42&&B.charCodeAt(je-1)===42&&se+2!==je){se=je+1;break e}break;case 10:if(X===47){se=je+1;break e}}se=je}}break;case 91:X++;case 40:X++;case 34:case 39:for(;se++<Yn&&B.charCodeAt(se)!==X;);}if(le===0)break;se++}switch(le=B.substring(Ne,se),ue===0&&(ue=(q=q.replace(d,"").trim()).charCodeAt(0)),ue){case 64:switch(0<Le&&(q=q.replace(p,"")),X=q.charCodeAt(1),X){case 100:case 109:case 115:case 45:Le=g;break;default:Le=xe}if(le=t(g,Le,le,X,T+1),Ne=le.length,0<L&&(Le=n(xe,q,Vn),R=a(3,le,Le,g,J,$,Ne,X,T,Y),q=Le.join(""),R!==void 0&&(Ne=(le=R.trim()).length)===0&&(X=0,le="")),0<Ne)switch(X){case 115:q=q.replace(S,l);case 100:case 109:case 45:le=q+"{"+le+"}";break;case 107:q=q.replace(m,"$1 $2"),le=q+"{"+le+"}",le=Q===1||Q===2&&o("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=q+le,Y===112&&(le=(be+=le,""))}else le="";break;default:le=t(g,n(g,q,Vn),le,Y,T+1)}ni+=le,le=Vn=Le=je=ue=0,q="",X=B.charCodeAt(++se);break;case 125:case 59:if(q=(0<Le?q.replace(p,""):q).trim(),1<(Ne=q.length))switch(je===0&&(ue=q.charCodeAt(0),ue===45||96<ue&&123>ue)&&(Ne=(q=q.replace(" ",":")).length),0<L&&(R=a(1,q,g,N,J,$,be.length,Y,T,Y))!==void 0&&(Ne=(q=R.trim()).length)===0&&(q="\0\0"),ue=q.charCodeAt(0),X=q.charCodeAt(1),ue){case 0:break;case 64:if(X===105||X===99){A+=q+B.charAt(se);break}default:q.charCodeAt(Ne-1)!==58&&(be+=i(q,ue,X,q.charCodeAt(2)))}Vn=Le=je=ue=0,q="",X=B.charCodeAt(++se)}}switch(X){case 13:case 10:M===47?M=0:1+ue===0&&Y!==107&&0<q.length&&(Le=1,q+="\0"),0<L*x&&a(0,q,g,N,J,$,be.length,Y,T,Y),$=1,J++;break;case 59:case 125:if(M+re+fe+ee===0){$++;break}default:switch($++,pt=B.charAt(se),X){case 9:case 32:if(re+ee+M===0)switch(Be){case 44:case 58:case 9:case 32:pt="";break;default:X!==32&&(pt=" ")}break;case 0:pt="\\0";break;case 12:pt="\\f";break;case 11:pt="\\v";break;case 38:re+M+ee===0&&(Le=Vn=1,pt="\f"+pt);break;case 108:if(re+M+ee+oe===0&&0<je)switch(se-je){case 2:Be===112&&B.charCodeAt(se-3)===58&&(oe=Be);case 8:qe===111&&(oe=qe)}break;case 58:re+M+ee===0&&(je=se);break;case 44:M+fe+re+ee===0&&(Le=1,pt+="\r");break;case 34:case 39:M===0&&(re=re===X?0:re===0?X:re);break;case 91:re+M+fe===0&&ee++;break;case 93:re+M+fe===0&&ee--;break;case 41:re+M+ee===0&&fe--;break;case 40:if(re+M+ee===0){if(ue===0)switch(2*Be+3*qe){case 533:break;default:ue=1}fe++}break;case 64:M+fe+re+ee+je+le===0&&(le=1);break;case 42:case 47:if(!(0<re+ee+fe))switch(M){case 0:switch(2*X+3*B.charCodeAt(se+1)){case 235:M=47;break;case 220:Ne=se,M=42}break;case 42:X===47&&Be===42&&Ne+2!==se&&(B.charCodeAt(Ne+2)===33&&(be+=B.substring(Ne,se+1)),pt="",M=0)}}M===0&&(q+=pt)}qe=Be,Be=X,se++}if(Ne=be.length,0<Ne){if(Le=g,0<L&&(R=a(2,be,Le,N,J,$,Ne,Y,T,Y),R!==void 0&&(be=R).length===0))return A+be+ni;if(be=Le.join(",")+"{"+be+"}",Q*oe!==0){switch(Q!==2||o(be,2)||(oe=0),oe){case 111:be=be.replace(E,":-moz-$1")+be;break;case 112:be=be.replace(y,"::-webkit-input-$1")+be.replace(y,"::-moz-$1")+be.replace(y,":-ms-input-$1")+be}oe=0}}return A+be+ni}function n(N,g,B){var Y=g.trim().split(C);g=Y;var T=Y.length,ee=N.length;switch(ee){case 0:case 1:var M=0;for(N=ee===0?"":N[0]+" ";M<T;++M)g[M]=r(N,g[M],B).trim();break;default:var fe=M=0;for(g=[];M<T;++M)for(var re=0;re<ee;++re)g[fe++]=r(N[re]+" ",Y[M],B).trim()}return g}function r(N,g,B){var Y=g.charCodeAt(0);switch(33>Y&&(Y=(g=g.trim()).charCodeAt(0)),Y){case 38:return g.replace(h,"$1"+N.trim());case 58:return N.trim()+g.replace(h,"$1"+N.trim());default:if(0<1*B&&0<g.indexOf("\f"))return g.replace(h,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+g}function i(N,g,B,Y){var T=N+";",ee=2*g+3*B+4*Y;if(ee===944){N=T.indexOf(":",9)+1;var M=T.substring(N,T.length-1).trim();return M=T.substring(0,N).trim()+M+";",Q===1||Q===2&&o(M,1)?"-webkit-"+M+M:M}if(Q===0||Q===2&&!o(T,1))return T;switch(ee){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(j,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return M=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+T+"-ms-flex-pack"+M+T;case 1005:return k.test(T)?T.replace(f,":-webkit-")+T.replace(f,":-moz-")+T:T;case 1e3:switch(M=T.substring(13).trim(),g=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(g)){case 226:M=T.replace(P,"tb");break;case 232:M=T.replace(P,"tb-rl");break;case 220:M=T.replace(P,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+M+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(g=(T=N).length-10,M=(T.charCodeAt(g)===33?T.substring(0,g):T).substring(N.indexOf(":",7)+1).trim(),ee=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:T=T.replace(M,"-webkit-"+M)+";"+T;break;case 207:case 102:T=T.replace(M,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+T.replace(M,"-webkit-"+M)+";"+T.replace(M,"-ms-"+M+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return M=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+M+"-ms-flex-"+M+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(O,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(O,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(V.test(N)===!0)return(M=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),g,B,Y).replace(":fill-available",":stretch"):T.replace(M,"-webkit-"+M)+T.replace(M,"-moz-"+M.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,B+Y===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+T}return T}function o(N,g){var B=N.indexOf(g===1?":":"{"),Y=N.substring(0,g!==3?B:10);return B=N.substring(B+1,N.length-1),W(g!==2?Y:Y.replace(H,"$1"),B,g)}function l(N,g){var B=i(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return B!==g+";"?B.replace(F," or ($1)").substring(4):"("+g+")"}function a(N,g,B,Y,T,ee,M,fe,re,ue){for(var X=0,Be=g,qe;X<L;++X)switch(qe=ae[X].call(c,N,Be,B,Y,T,ee,M,fe,re,ue)){case void 0:case!1:case!0:case null:break;default:Be=qe}if(Be!==g)return Be}function u(N){switch(N){case void 0:case null:L=ae.length=0;break;default:if(typeof N=="function")ae[L++]=N;else if(typeof N=="object")for(var g=0,B=N.length;g<B;++g)u(N[g]);else x=!!N|0}return u}function s(N){return N=N.prefix,N!==void 0&&(W=null,N?typeof N!="function"?Q=1:(Q=2,W=N):Q=0),s}function c(N,g){var B=N;if(33>B.charCodeAt(0)&&(B=B.trim()),ne=B,B=[ne],0<L){var Y=a(-1,g,B,B,J,$,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(g=Y)}var T=t(xe,B,g,0,0);return 0<L&&(Y=a(-2,T,B,B,J,$,T.length,0,0,0),Y!==void 0&&(T=Y)),ne="",oe=0,$=J=1,T}var d=/^\0+/g,p=/[\0\r\f]/g,f=/: */g,k=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,F=/([\s\S]*?);/g,O=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,$=1,J=1,oe=0,Q=1,xe=[],ae=[],L=0,W=null,x=0,ne="";return c.use=u,c.set=s,e!==void 0&&s(e),c}var mx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function gx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var yx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Df=gx(function(e){return yx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),kg={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Jc=Ye?Symbol.for("react.element"):60103,ed=Ye?Symbol.for("react.portal"):60106,aa=Ye?Symbol.for("react.fragment"):60107,ua=Ye?Symbol.for("react.strict_mode"):60108,sa=Ye?Symbol.for("react.profiler"):60114,ca=Ye?Symbol.for("react.provider"):60109,da=Ye?Symbol.for("react.context"):60110,td=Ye?Symbol.for("react.async_mode"):60111,fa=Ye?Symbol.for("react.concurrent_mode"):60111,pa=Ye?Symbol.for("react.forward_ref"):60112,ha=Ye?Symbol.for("react.suspense"):60113,vx=Ye?Symbol.for("react.suspense_list"):60120,ma=Ye?Symbol.for("react.memo"):60115,ga=Ye?Symbol.for("react.lazy"):60116,xx=Ye?Symbol.for("react.block"):60121,wx=Ye?Symbol.for("react.fundamental"):60117,kx=Ye?Symbol.for("react.responder"):60118,Sx=Ye?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jc:switch(e=e.type,e){case td:case fa:case aa:case sa:case ua:case ha:return e;default:switch(e=e&&e.$$typeof,e){case da:case pa:case ga:case ma:case ca:return e;default:return t}}case ed:return t}}}function Sg(e){return Ct(e)===fa}he.AsyncMode=td;he.ConcurrentMode=fa;he.ContextConsumer=da;he.ContextProvider=ca;he.Element=Jc;he.ForwardRef=pa;he.Fragment=aa;he.Lazy=ga;he.Memo=ma;he.Portal=ed;he.Profiler=sa;he.StrictMode=ua;he.Suspense=ha;he.isAsyncMode=function(e){return Sg(e)||Ct(e)===td};he.isConcurrentMode=Sg;he.isContextConsumer=function(e){return Ct(e)===da};he.isContextProvider=function(e){return Ct(e)===ca};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jc};he.isForwardRef=function(e){return Ct(e)===pa};he.isFragment=function(e){return Ct(e)===aa};he.isLazy=function(e){return Ct(e)===ga};he.isMemo=function(e){return Ct(e)===ma};he.isPortal=function(e){return Ct(e)===ed};he.isProfiler=function(e){return Ct(e)===sa};he.isStrictMode=function(e){return Ct(e)===ua};he.isSuspense=function(e){return Ct(e)===ha};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===aa||e===fa||e===sa||e===ua||e===ha||e===vx||typeof e=="object"&&e!==null&&(e.$$typeof===ga||e.$$typeof===ma||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===pa||e.$$typeof===wx||e.$$typeof===kx||e.$$typeof===Sx||e.$$typeof===xx)};he.typeOf=Ct;kg.exports=he;var Cx=kg.exports,nd=Cx,Ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rd={};rd[nd.ForwardRef]=bx;rd[nd.Memo]=Cg;function $f(e){return nd.isMemo(e)?Cg:rd[e.$$typeof]||Ex}var Px=Object.defineProperty,Ax=Object.getOwnPropertyNames,Bf=Object.getOwnPropertySymbols,Fx=Object.getOwnPropertyDescriptor,zx=Object.getPrototypeOf,jf=Object.prototype;function Eg(e,t,n){if(typeof t!="string"){if(jf){var r=zx(t);r&&r!==jf&&Eg(e,r,n)}var i=Ax(t);Bf&&(i=i.concat(Bf(t)));for(var o=$f(e),l=$f(t),a=0;a<i.length;++a){var u=i[a];if(!Tx[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var s=Fx(t,u);try{Px(e,u,s)}catch{}}}}return e}var Ox=Eg;const _x=en(Ox);function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Uf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},_s=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wg.typeOf(e)},Al=Object.freeze([]),Nn=Object.freeze({});function Ji(e){return typeof e=="function"}function Hf(e){return e.displayName||e.name||"Component"}function id(e){return e&&typeof e.styledComponentId=="string"}var Qr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",od=typeof window<"u"&&"HTMLElement"in window,Rx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Ix={};function ao(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Lx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&ao(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,c=r.length;s<c;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),qo=new Map,Fl=new Map,zi=1,Fo=function(e){if(qo.has(e))return qo.get(e);for(;Fl.has(zi);)zi++;var t=zi++;return qo.set(e,t),Fl.set(t,e),t},Nx=function(e){return Fl.get(e)},Mx=function(e,t){t>=zi&&(zi=t+1),qo.set(e,t),Fl.set(t,e)},Dx="style["+Qr+'][data-styled-version="5.3.11"]',$x=new RegExp("^"+Qr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Bx=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},jx=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match($x);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(Mx(s,u),Bx(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},Ux=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Tg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var c=u[s];if(c&&c.nodeType===1&&c.hasAttribute(Qr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qr,"active"),r.setAttribute("data-styled-version","5.3.11");var l=Ux();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Hx=function(){function e(n){var r=this.element=Tg(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var u=o[l];if(u.ownerNode===i)return u}ao(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Vx=function(){function e(n){var r=this.element=Tg(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Wx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Vf=od,Yx={isServer:!od,useCSSOMInjection:!Rx},zl=function(){function e(n,r,i){n===void 0&&(n=Nn),r===void 0&&(r={}),this.options=qt({},Yx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&od&&Vf&&(Vf=!1,function(o){for(var l=document.querySelectorAll(Dx),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(Qr)!=="active"&&(jx(o,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Fo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Wx(l):o?new Hx(l):new Vx(l),new Lx(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Fo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Fo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=Nx(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var c=Qr+".g"+l+'[id="'+a+'"]',d="";u!==void 0&&u.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+s+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),Qx=/(a)(d)/gi,Wf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wf(t%52)+n;return(Wf(t%52)+n).replace(Qx,"$1-$2")}var Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bg=function(e){return Pr(5381,e)};function Pg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ji(n)&&!id(n))return!1}return!0}var Gx=bg("5.3.11"),Kx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Pg(t),this.componentId=n,this.baseHash=Pr(Gx,n),this.baseStyle=r,zl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=lr(this.rules,t,n,r).join(""),a=Rs(Pr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var u=r(l,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,c=Pr(this.baseHash,r.hash),d="",p=0;p<s;p++){var f=this.rules[p];if(typeof f=="string")d+=f;else if(f){var k=lr(f,t,n,r),w=Array.isArray(k)?k.join(""):k;c=Pr(c,w+p),d+=w}}if(d){var C=Rs(c>>>0);if(!n.hasNameForId(i,C)){var h=r(d,"."+C,void 0,i);n.insertRules(i,C,h)}o.push(C)}}return o.join(" ")},e}(),qx=/^\s*\/\/.*$/gm,Xx=[":","[",".","#"];function Zx(e){var t,n,r,i,o=e===void 0?Nn:e,l=o.options,a=l===void 0?Nn:l,u=o.plugins,s=u===void 0?Al:u,c=new hx(a),d=[],p=function(w){function C(h){if(h)try{w(h+"}")}catch{}}return function(h,m,y,E,P,S,F,O,H,V){switch(h){case 1:if(H===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(y[0]+m),"";default:return m+(V===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(C)}}}(function(w){d.push(w)}),f=function(w,C,h){return C===0&&Xx.indexOf(h[n.length])!==-1||h.match(i)?w:"."+t};function k(w,C,h,m){m===void 0&&(m="&");var y=w.replace(qx,""),E=C&&h?h+" "+C+" { "+y+" }":y;return t=m,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(h||!C?"":C,E)}return c.use([].concat(s,[function(w,C,h){w===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,f))},p,function(w){if(w===-2){var C=d;return d=[],C}}])),k.hash=s.length?s.reduce(function(w,C){return C.name||ao(15),Pr(w,C.name)},5381).toString():"",k}var Ag=$e.createContext();Ag.Consumer;var Fg=$e.createContext(),Jx=(Fg.Consumer,new zl),Is=Zx();function zg(){return D.useContext(Ag)||Jx}function Og(){return D.useContext(Fg)||Is}var ew=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Is);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return ao(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Is),this.name+t.hash},e}(),tw=/([A-Z])/,nw=/([A-Z])/g,rw=/^ms-/,iw=function(e){return"-"+e.toLowerCase()};function Yf(e){return tw.test(e)?e.replace(nw,iw).replace(rw,"-ms-"):e}var Qf=function(e){return e==null||e===!1||e===""};function lr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=lr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Qf(e))return"";if(id(e))return"."+e.styledComponentId;if(Ji(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return lr(u,t,n,r)}var s;return e instanceof ew?n?(e.inject(n,r),e.getName(r)):e:_s(e)?function c(d,p){var f,k,w=[];for(var C in d)d.hasOwnProperty(C)&&!Qf(d[C])&&(Array.isArray(d[C])&&d[C].isCss||Ji(d[C])?w.push(Yf(C)+":",d[C],";"):_s(d[C])?w.push.apply(w,c(d[C],C)):w.push(Yf(C)+": "+(f=C,(k=d[C])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||f in mx||f.startsWith("--")?String(k).trim():k+"px")+";"));return p?[p+" {"].concat(w,["}"]):w}(e):e.toString()}var Gf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _g(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ji(e)||_s(e)?Gf(lr(Uf(Al,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Gf(lr(Uf(e,n)))}var Rg=function(e,t,n){return n===void 0&&(n=Nn),e.theme!==n.theme&&e.theme||t||n.theme},ow=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function ru(e){return e.replace(ow,"-").replace(lw,"")}var Ig=function(e){return Rs(bg(e)>>>0)};function zo(e){return typeof e=="string"&&!0}var Ls=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},aw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function uw(e,t,n){var r=e[n];Ls(t)&&Ls(r)?Lg(r,t):e[n]=t}function Lg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Ls(l))for(var a in l)aw(a)&&uw(e,l[a],a)}return e}var ld=$e.createContext();ld.Consumer;var iu={};function Ng(e,t,n){var r=id(e),i=!zo(e),o=t.attrs,l=o===void 0?Al:o,a=t.componentId,u=a===void 0?function(m,y){var E=typeof m!="string"?"sc":ru(m);iu[E]=(iu[E]||0)+1;var P=E+"-"+Ig("5.3.11"+E+iu[E]);return y?y+"-"+P:P}(t.displayName,t.parentComponentId):a,s=t.displayName,c=s===void 0?function(m){return zo(m)?"styled."+m:"Styled("+Hf(m)+")"}(e):s,d=t.displayName&&t.componentId?ru(t.displayName)+"-"+t.componentId:t.componentId||u,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,f=t.shouldForwardProp;r&&e.shouldForwardProp&&(f=t.shouldForwardProp?function(m,y,E){return e.shouldForwardProp(m,y,E)&&t.shouldForwardProp(m,y,E)}:e.shouldForwardProp);var k,w=new Kx(n,d,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,h=function(m,y){return function(E,P,S,F){var O=E.attrs,H=E.componentStyle,V=E.defaultProps,j=E.foldedComponentIds,$=E.shouldForwardProp,J=E.styledComponentId,oe=E.target,Q=function(Y,T,ee){Y===void 0&&(Y=Nn);var M=qt({},T,{theme:Y}),fe={};return ee.forEach(function(re){var ue,X,Be,qe=re;for(ue in Ji(qe)&&(qe=qe(M)),qe)M[ue]=fe[ue]=ue==="className"?(X=fe[ue],Be=qe[ue],X&&Be?X+" "+Be:X||Be):qe[ue]}),[M,fe]}(Rg(P,D.useContext(ld),V)||Nn,P,O),xe=Q[0],ae=Q[1],L=function(Y,T,ee,M){var fe=zg(),re=Og(),ue=T?Y.generateAndInjectStyles(Nn,fe,re):Y.generateAndInjectStyles(ee,fe,re);return ue}(H,F,xe),W=S,x=ae.$as||P.$as||ae.as||P.as||oe,ne=zo(x),N=ae!==P?qt({},P,{},ae):P,g={};for(var B in N)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?g.as=N[B]:($?$(B,Df,x):!ne||Df(B))&&(g[B]=N[B]));return P.style&&ae.style!==P.style&&(g.style=qt({},P.style,{},ae.style)),g.className=Array.prototype.concat(j,J,L!==J?L:null,P.className,ae.className).filter(Boolean).join(" "),g.ref=W,D.createElement(x,g)}(k,m,y,C)};return h.displayName=c,(k=$e.forwardRef(h)).attrs=p,k.componentStyle=w,k.displayName=c,k.shouldForwardProp=f,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Al,k.styledComponentId=d,k.target=r?e.target:e,k.withComponent=function(m){var y=t.componentId,E=function(S,F){if(S==null)return{};var O,H,V={},j=Object.keys(S);for(H=0;H<j.length;H++)O=j[H],F.indexOf(O)>=0||(V[O]=S[O]);return V}(t,["componentId"]),P=y&&y+"-"+(zo(m)?m:ru(Hf(m)));return Ng(m,qt({},E,{attrs:p,componentId:P}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?Lg({},e.defaultProps,m):m}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),i&&_x(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var Ns=function(e){return function t(n,r,i){if(i===void 0&&(i=Nn),!wg.isValidElementType(r))return ao(1,String(r));var o=function(){return n(r,i,_g.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,qt({},i,{},l))},o.attrs=function(l){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Ng,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ns[e]=Ns(e)});var sw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Pg(n),zl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(lr(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&zl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function cw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_g.apply(void 0,[e].concat(n)),o="sc-global-"+Ig(JSON.stringify(i)),l=new sw(i,o);function a(s){var c=zg(),d=Og(),p=D.useContext(ld),f=D.useRef(c.allocateGSInstance(o)).current;return c.server&&u(f,s,c,p,d),D.useLayoutEffect(function(){if(!c.server)return u(f,s,c,p,d),function(){return l.removeStyles(f,c)}},[f,s,c,p,d]),null}function u(s,c,d,p,f){if(l.isStatic)l.renderStyles(s,Ix,d,f);else{var k=qt({},c,{theme:Rg(c,p,a.defaultProps)});l.renderStyles(s,k,d,f)}}return $e.memo(a)}const b=Ns;var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const fw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pw=(e,t)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,children:a,...u},s)=>D.createElement("svg",{ref:s,...dw,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:`lucide lucide-${fw(e)}`,...u},[...t.map(([c,d])=>D.createElement(c,d)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var ze=pw;const Mg=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Ms=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Ol=ze("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]),Ds=ze("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),hw=ze("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),eo=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),mw=ze("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),gw=ze("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),yw=ze("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),vw=ze("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Xo=ze("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Dg=ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),xw=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),ww=ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),kw=ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),_l=ze("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Sw=ze("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),Cw=ze("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),bn=ze("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Oi=ze("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Ir=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ew=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Tw=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Gr=[{id:1,title:"Bitcoin's Next Bull Run: Technical Analysis and Market Predictions",excerpt:"Analyzing key technical indicators and market trends that could signal Bitcoin's next major price movement. What do the charts tell us about BTC's future?",content:`# Bitcoin's Next Bull Run: Technical Analysis and Market Predictions

Bitcoin has been consolidating in a tight range for several months, and many analysts are wondering when the next significant move will occur. In this comprehensive analysis, we'll examine the key technical indicators and market dynamics that could influence Bitcoin's next major price movement.

## Key Technical Indicators

### Moving Averages
The 200-day moving average continues to act as strong support, with Bitcoin maintaining its position above this critical level. The 50-day MA is approaching a potential golden cross with the 200-day MA, which historically has been bullish for BTC.

### RSI and MACD
The Relative Strength Index (RSI) is currently in neutral territory, suggesting room for upward movement without being overbought. The MACD indicator shows signs of bullish divergence on the weekly timeframe.

## Market Fundamentals

### Institutional Adoption
Major institutions continue to accumulate Bitcoin, with companies like MicroStrategy and Tesla maintaining significant holdings. The approval of Bitcoin ETFs has opened new avenues for institutional investment.

### Regulatory Environment
Recent regulatory clarity in major markets has reduced uncertainty and created a more favorable environment for crypto adoption.

## Price Predictions

Based on current technical analysis and market fundamentals, several scenarios are possible:

- **Conservative Target**: $80,000 - $100,000
- **Optimistic Target**: $150,000 - $200,000
- **Timeframe**: 12-18 months

## Conclusion

While predicting exact price movements is impossible, the confluence of technical indicators and improving fundamentals suggests Bitcoin may be positioning for its next major bull run. Investors should always do their own research and consider their risk tolerance.`,author:"Alex Thompson",date:"2024-01-15",category:"Analysis",tags:["Bitcoin","Technical Analysis","Price Prediction"],readTime:"8 min",image:"/hero-illustration.svg"},{id:2,title:"Ethereum 2.0 Staking: A Complete Guide for Beginners",excerpt:"Everything you need to know about Ethereum staking, from setting up validators to understanding rewards and risks in the proof-of-stake ecosystem.",content:`# Ethereum 2.0 Staking: A Complete Guide for Beginners

Ethereum's transition to proof-of-stake has opened new opportunities for holders to earn rewards through staking. This comprehensive guide will walk you through everything you need to know about Ethereum staking.

## What is Ethereum Staking?

Ethereum staking involves locking up your ETH to help secure the network and validate transactions. In return, you earn rewards in the form of additional ETH.

## How to Start Staking

### Option 1: Solo Staking (32 ETH Required)
- Set up your own validator node
- Requires technical knowledge
- Maximum control and rewards

### Option 2: Staking Pools
- Lower barrier to entry
- Shared rewards and risks
- Popular platforms: Lido, Rocket Pool, Coinbase

### Option 3: Centralized Exchanges
- Easiest option for beginners
- Lower rewards due to fees
- Examples: Binance, Kraken, Coinbase

## Staking Rewards and Risks

### Current Rewards
- Annual yield: 4-6%
- Rewards depend on network participation
- Paid in ETH

### Risks to Consider
- Slashing penalties for misbehavior
- Liquidity lock-up
- Technical risks for solo stakers

## Getting Started

1. Choose your staking method
2. Research platforms and fees
3. Start with a small amount
4. Monitor your rewards and performance

Staking Ethereum can be a great way to earn passive income while supporting the network's security and decentralization.`,author:"Sarah Chen",date:"2024-01-12",category:"Guide",tags:["Ethereum","Staking","DeFi","Passive Income"],readTime:"6 min",image:"/hero-illustration.svg"},{id:3,title:"DeFi Security: Protecting Your Crypto Assets in 2024",excerpt:"Learn essential security practices to protect your DeFi investments from hacks, scams, and smart contract vulnerabilities.",content:`# DeFi Security: Protecting Your Crypto Assets in 2024

Decentralized Finance (DeFi) offers unprecedented opportunities but comes with unique security challenges. Here's how to protect your assets in the DeFi ecosystem.

## Common DeFi Risks

### Smart Contract Vulnerabilities
- Code bugs and exploits
- Flash loan attacks
- Reentrancy attacks

### Governance Attacks
- Hostile takeovers
- Vote manipulation
- Proposal attacks

### User-Related Risks
- Phishing attacks
- Private key compromise
- Social engineering

## Security Best Practices

### Wallet Security
1. Use hardware wallets for large amounts
2. Enable multi-signature where possible
3. Keep private keys offline
4. Use separate wallets for DeFi vs. long-term storage

### Protocol Research
1. Check audit reports
2. Review team credentials
3. Analyze tokenomics
4. Monitor governance activities

### Transaction Safety
1. Verify contract addresses
2. Use reputable front-ends
3. Start with small amounts
4. Double-check transaction details

## Security Tools

### Portfolio Tracking
- DeBank
- Zapper
- Zerion

### Audit Databases
- ConsenSys Diligence
- Trail of Bits
- OpenZeppelin

### Risk Assessment
- DeFi Safety
- DeFi Pulse
- Token Terminal

## Red Flags to Avoid

- Anonymous teams
- Unaudited contracts
- Unrealistic yields
- Poor documentation
- No governance mechanism

## Conclusion

DeFi security requires constant vigilance and education. By following these best practices and staying informed about emerging threats, you can significantly reduce your risk while participating in the DeFi ecosystem.`,author:"Mike Rodriguez",date:"2024-01-10",category:"Security",tags:["DeFi","Security","Risk Management","Smart Contracts"],readTime:"10 min",image:"/hero-illustration.svg"},{id:4,title:"Layer 2 Solutions: Scaling Ethereum for Mass Adoption",excerpt:"Exploring the latest Layer 2 technologies that are making Ethereum faster and cheaper, from Optimistic Rollups to Zero-Knowledge proofs.",content:`# Layer 2 Solutions: Scaling Ethereum for Mass Adoption

Ethereum's scaling challenges have led to innovative Layer 2 solutions that promise to make the network faster and more affordable. Let's explore the current landscape.

## Types of Layer 2 Solutions

### Optimistic Rollups
- Examples: Arbitrum, Optimism
- Assume transactions are valid by default
- 7-day withdrawal period
- Lower gas fees

### Zero-Knowledge Rollups
- Examples: Polygon zkEVM, zkSync Era
- Cryptographic proofs for validity
- Faster withdrawals
- Higher security guarantees

### State Channels
- Examples: Lightning Network (Bitcoin), Connext
- Off-chain transaction processing
- Instant settlements
- Limited to specific use cases

## Popular Layer 2 Networks

### Arbitrum
- Largest Layer 2 by TVL
- Optimistic Rollup technology
- Ethereum Virtual Machine compatible
- Growing DeFi ecosystem

### Optimism
- Optimistic Rollup with governance token
- Retroactive public goods funding
- Strong developer support
- Growing user base

### Polygon
- Multiple scaling solutions
- Polygon PoS (sidechain)
- Polygon zkEVM (zero-knowledge rollup)
- Enterprise partnerships

## Benefits of Layer 2

### Cost Reduction
- 10-100x lower gas fees
- Micro-transactions become viable
- Broader accessibility

### Speed Improvements
- Near-instant transactions
- Better user experience
- Real-time applications

### Ethereum Security
- Inherit Ethereum's security
- Decentralized validation
- Censorship resistance

## Challenges and Considerations

### Liquidity Fragmentation
- Assets spread across chains
- Bridge dependencies
- Complexity for users

### Technical Risks
- Bridge vulnerabilities
- Centralization concerns
- Withdrawal delays

## The Future of Layer 2

Layer 2 solutions are rapidly evolving, with new innovations in:
- Cross-chain interoperability
- Shared sequencing
- Data availability layers
- Zero-knowledge virtual machines

As these technologies mature, they will play a crucial role in Ethereum's path to global adoption.`,author:"David Park",date:"2024-01-08",category:"Technology",tags:["Layer 2","Ethereum","Scaling","Rollups"],readTime:"7 min",image:"/hero-illustration.svg"},{id:5,title:"NFT Market Trends: What's Next for Digital Collectibles?",excerpt:"Analyzing the current state of the NFT market and emerging trends that could shape the future of digital ownership and creativity.",content:`# NFT Market Trends: What's Next for Digital Collectibles?

The NFT market has evolved significantly since its explosive growth in 2021. Let's examine current trends and what the future might hold for digital collectibles.

## Current Market State

### Trading Volume
- Significant decline from 2021 peaks
- Quality over quantity focus
- Selective buyer behavior
- Blue-chip collections maintaining value

### Market Maturation
- Professional galleries entering space
- Institutional collectors emerging
- Improved user experiences
- Better creator tools

## Emerging Trends

### Utility-Focused NFTs
- Gaming integration
- Membership benefits
- Real-world perks
- Subscription models

### AI-Generated Art
- Algorithmic creativity
- Collaborative AI tools
- Copyright considerations
- Authenticity questions

### Fractionalized Ownership
- NFT fragments
- Collective ownership
- Investment accessibility
- Liquidity solutions

## Technology Improvements

### Gas Optimization
- Layer 2 minting
- Batch transactions
- Lazy minting
- Green alternatives

### Metadata Standards
- Enhanced properties
- Dynamic attributes
- Interoperability
- Preservation solutions

## Creative Applications

### Music NFTs
- Album releases
- Concert tickets
- Royalty sharing
- Fan engagement

### Virtual Real Estate
- Metaverse plots
- Virtual galleries
- Social spaces
- Investment opportunities

### Photography
- Limited editions
- Artistic expression
- Documentary projects
- Community building

## Challenges Ahead

### Environmental Concerns
- Energy consumption
- Carbon footprint
- Sustainable alternatives
- Green blockchains

### Regulatory Uncertainty
- Classification questions
- Tax implications
- Consumer protection
- International standards

### Market Speculation
- Price volatility
- Pump and dump schemes
- Due diligence importance
- Long-term value

## Future Outlook

The NFT space is evolving toward:
- Practical utility integration
- Enhanced creative tools
- Better user experiences
- Sustainable practices
- Regulatory clarity

While the hype has cooled, the underlying technology and creative potential remain strong foundations for future growth.`,author:"Emma Williams",date:"2024-01-05",category:"NFTs",tags:["NFTs","Digital Art","Collectibles","Market Trends"],readTime:"9 min",image:"/hero-illustration.svg"}],$g=["All","Analysis","Guide","Security","Technology","NFTs","DeFi","Trading","News"],dr=Gr[0];var bw=typeof Element<"u",Pw=typeof Map=="function",Aw=typeof Set=="function",Fw=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Zo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Zo(e[r],t[r]))return!1;return!0}var o;if(Pw&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Zo(r.value[1],t.get(r.value[0])))return!1;return!0}if(Aw&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Fw&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(bw&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Zo(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var zw=function(t,n){try{return Zo(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Ow=en(zw);var _w=function(e,t,n,r,i,o,l,a){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,o,l,a],c=0;u=new Error(t.replace(/%s/g,function(){return s[c++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Rw=_w;const Kf=en(Rw);var Bg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Bg||{}),ou={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},qf=Object.values(Bg),ad={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Iw=Object.entries(ad).reduce((e,[t,n])=>(e[n]=t,e),{}),jt="data-rh",Lr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Nr=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Lw=e=>{let t=Nr(e,"title");const n=Nr(e,Lr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Nr(e,Lr.DEFAULT_TITLE);return t||r||void 0},Nw=e=>Nr(e,Lr.ON_CHANGE_CLIENT_STATE)||(()=>{}),lu=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Mw=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),Dw=e=>console&&typeof console.warn=="function"&&console.warn(e),pi=(e,t,n)=>{const r={};return n.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&Dw(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,o)=>{const l={};o.filter(u=>{let s;const c=Object.keys(u);for(let p=0;p<c.length;p+=1){const f=c[p],k=f.toLowerCase();t.indexOf(k)!==-1&&!(s==="rel"&&u[s].toLowerCase()==="canonical")&&!(k==="rel"&&u[k].toLowerCase()==="stylesheet")&&(s=k),t.indexOf(f)!==-1&&(f==="innerHTML"||f==="cssText"||f==="itemprop")&&(s=f)}if(!s||!u[s])return!1;const d=u[s].toLowerCase();return r[s]||(r[s]={}),l[s]||(l[s]={}),r[s][d]?!1:(l[s][d]=!0,!0)}).reverse().forEach(u=>i.push(u));const a=Object.keys(l);for(let u=0;u<a.length;u+=1){const s=a[u],c={...r[s],...l[s]};r[s]=c}return i},[]).reverse()},$w=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Bw=e=>({baseTag:Mw(["href"],e),bodyAttributes:lu("bodyAttributes",e),defer:Nr(e,Lr.DEFER),encode:Nr(e,Lr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:lu("htmlAttributes",e),linkTags:pi("link",["rel","href"],e),metaTags:pi("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:pi("noscript",["innerHTML"],e),onChangeClientState:Nw(e),scriptTags:pi("script",["src","innerHTML"],e),styleTags:pi("style",["cssText"],e),title:Lw(e),titleAttributes:lu("titleAttributes",e),prioritizeSeoTags:$w(e,Lr.PRIORITIZE_SEO_TAGS)}),jg=e=>Array.isArray(e)?e.join(""):e,jw=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},au=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(jw(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Xf=(e,t)=>({...e,[t]:void 0}),Uw=["noscript","script","style"],$s=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ug=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Hw=(e,t,n,r)=>{const i=Ug(n),o=jg(t);return i?`<${e} ${jt}="true" ${i}>${$s(o,r)}</${e}>`:`<${e} ${jt}="true">${$s(o,r)}</${e}>`},Vw=(e,t,n=!0)=>t.reduce((r,i)=>{const o=i,l=Object.keys(o).filter(s=>!(s==="innerHTML"||s==="cssText")).reduce((s,c)=>{const d=typeof o[c]>"u"?c:`${c}="${$s(o[c],n)}"`;return s?`${s} ${d}`:d},""),a=o.innerHTML||o.cssText||"",u=Uw.indexOf(e)===-1;return`${r}<${e} ${jt}="true" ${l}${u?"/>":`>${a}</${e}>`}`},""),Hg=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=ad[r];return n[i||r]=e[r],n},t),Ww=(e,t,n)=>{const r={key:t,[jt]:!0},i=Hg(n,r);return[$e.createElement("title",i,t)]},Jo=(e,t)=>t.map((n,r)=>{const i={key:r,[jt]:!0};return Object.keys(n).forEach(o=>{const a=ad[o]||o;if(a==="innerHTML"||a==="cssText"){const u=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[a]=n[o]}),$e.createElement(e,i)}),Et=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Ww(e,t.title,t.titleAttributes),toString:()=>Hw(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Hg(t),toString:()=>Ug(t)};default:return{toComponent:()=>Jo(e,t),toString:()=>Vw(e,t,n)}}},Yw=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=au(e,ou.meta),o=au(t,ou.link),l=au(n,ou.script);return{priorityMethods:{toComponent:()=>[...Jo("meta",i.priority),...Jo("link",o.priority),...Jo("script",l.priority)],toString:()=>`${Et("meta",i.priority,r)} ${Et("link",o.priority,r)} ${Et("script",l.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:l.default}},Qw=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:l,title:a="",titleAttributes:u,prioritizeSeoTags:s}=e;let{linkTags:c,metaTags:d,scriptTags:p}=e,f={toComponent:()=>{},toString:()=>""};return s&&({priorityMethods:f,linkTags:c,metaTags:d,scriptTags:p}=Yw(e)),{priority:f,base:Et("base",t,r),bodyAttributes:Et("bodyAttributes",n,r),htmlAttributes:Et("htmlAttributes",i,r),link:Et("link",c,r),meta:Et("meta",d,r),noscript:Et("noscript",o,r),script:Et("script",p,r),style:Et("style",l,r),title:Et("title",{title:a,titleAttributes:u},r)}},Bs=Qw,Oo=[],Vg=!!(typeof window<"u"&&window.document&&window.document.createElement),js=class{constructor(e,t){rn(this,"instances",[]);rn(this,"canUseDOM",Vg);rn(this,"context");rn(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Oo:this.instances,add:e=>{(this.canUseDOM?Oo:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Oo:this.instances).indexOf(e);(this.canUseDOM?Oo:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Bs({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Gw={},Wg=$e.createContext(Gw),$r,Yg=($r=class extends D.Component{constructor(n){super(n);rn(this,"helmetData");this.helmetData=new js(this.props.context||{},$r.canUseDOM)}render(){return $e.createElement(Wg.Provider,{value:this.helmetData.value},this.props.children)}},rn($r,"canUseDOM",Vg),$r),fr=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${jt}]`),i=[].slice.call(r),o=[];let l;return t&&t.length&&t.forEach(a=>{const u=document.createElement(e);for(const s in a)if(Object.prototype.hasOwnProperty.call(a,s))if(s==="innerHTML")u.innerHTML=a.innerHTML;else if(s==="cssText")u.styleSheet?u.styleSheet.cssText=a.cssText:u.appendChild(document.createTextNode(a.cssText));else{const c=s,d=typeof a[c]>"u"?"":a[c];u.setAttribute(s,d)}u.setAttribute(jt,"true"),i.some((s,c)=>(l=c,u.isEqualNode(s)))?i.splice(l,1):o.push(u)}),i.forEach(a=>{var u;return(u=a.parentNode)==null?void 0:u.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},Us=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(jt),i=r?r.split(","):[],o=[...i],l=Object.keys(t);for(const a of l){const u=t[a]||"";n.getAttribute(a)!==u&&n.setAttribute(a,u),i.indexOf(a)===-1&&i.push(a);const s=o.indexOf(a);s!==-1&&o.splice(s,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(jt):n.getAttribute(jt)!==l.join(",")&&n.setAttribute(jt,l.join(","))},Kw=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=jg(e)),Us("title",t)},Zf=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:l,noscriptTags:a,onChangeClientState:u,scriptTags:s,styleTags:c,title:d,titleAttributes:p}=e;Us("body",r),Us("html",i),Kw(d,p);const f={baseTag:fr("base",n),linkTags:fr("link",o),metaTags:fr("meta",l),noscriptTags:fr("noscript",a),scriptTags:fr("script",s),styleTags:fr("style",c)},k={},w={};Object.keys(f).forEach(C=>{const{newTags:h,oldTags:m}=f[C];h.length&&(k[C]=h),m.length&&(w[C]=f[C].oldTags)}),t&&t(),u(e,k,w)},hi=null,qw=e=>{hi&&cancelAnimationFrame(hi),e.defer?hi=requestAnimationFrame(()=>{Zf(e,()=>{hi=null})}):(Zf(e),hi=null)},Xw=qw,Jf=class extends D.Component{constructor(){super(...arguments);rn(this,"rendered",!1)}shouldComponentUpdate(t){return!px(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const i=Bw(t.get().map(o=>{const l={...o.props};return delete l.context,l}));Yg.canUseDOM?Xw(i):Bs&&(r=Bs(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Lu,Zw=(Lu=class extends D.Component{shouldComponentUpdate(e){return!Ow(Xf(this.props,"helmetData"),Xf(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Kf(qf.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${qf.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Kf(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return $e.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,l=Object.keys(o).reduce((u,s)=>(u[Iw[s]||s]=o[s],u),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,l,i);break;default:t=this.mapObjectTypeChildren(r,t,l,i);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof js)){const i=r;r=new js(i.context,!0),delete n.helmetData}return r?$e.createElement(Jf,{...n,context:r.value}):$e.createElement(Wg.Consumer,null,i=>$e.createElement(Jf,{...n,context:i}))}},rn(Lu,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Lu);function uo({title:e="CryptoBlog - Cryptocurrency News & Analysis",description:t="CryptoBlog: trusted cryptocurrency news, analysis, and insights.",keywords:n="cryptocurrency, bitcoin, ethereum, blockchain, crypto news, trading",url:r="https://example.com",image:i="/social-banner.png",noindex:o=!1,type:l="website",publishedTime:a,modifiedTime:u,authorName:s}){const c=r,d=o?"noindex, nofollow":"index, follow",p={"@context":"https://schema.org","@type":l==="article"?"Article":"WebSite",name:e,description:t,url:c,image:i&&(i.startsWith("http")?i:`${i}`),...l==="article"?{headline:e,datePublished:a,dateModified:u||a,author:s?{"@type":"Person",name:s}:void 0}:{potentialAction:{"@type":"SearchAction",target:`${c}/blog?search={search_term_string}`,"query-input":"required name=search_term_string"}}};return z(Zw,{children:[v("title",{children:e}),v("meta",{name:"description",content:t}),v("meta",{name:"keywords",content:n}),v("meta",{name:"robots",content:d}),v("link",{rel:"canonical",href:c}),v("meta",{property:"og:type",content:l}),v("meta",{property:"og:title",content:e}),v("meta",{property:"og:description",content:t}),v("meta",{property:"og:url",content:c}),i&&v("meta",{property:"og:image",content:i}),v("meta",{name:"twitter:card",content:"summary_large_image"}),v("meta",{name:"twitter:title",content:e}),v("meta",{name:"twitter:description",content:t}),i&&v("meta",{name:"twitter:image",content:i}),v("script",{type:"application/ld+json",children:JSON.stringify(p)})]})}const Jw=b.div`
  padding-top: 80px; /* Account for fixed navbar */
`,ek=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/hero-illustration.svg') center/cover no-repeat;
    opacity: 0.1;
    z-index: 1;
  }
`,tk=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`,nk=b.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
    line-height: 1.6;
  }
`,rk=b.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,ik=b(ft)`
  background: linear-gradient(135deg, #FF5A5F 0%, #FFD600 100%);
  color: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 90, 95, 0.3);
  }
`,ok=b(ft)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,lk=b.section`
  padding: 5rem 0;
  background: #f8fafc;
`,uu=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,ep=b.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
`,ak=b.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,tp=b.div`
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    min-height: 200px;
  }
`,uk=b.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,np=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  width: fit-content;
`,sk=b.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`,ck=b.p`
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,rp=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #64748b;
`,_o=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,dk=b(ft)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`,fk=b.section`
  padding: 5rem 0;
  background: white;
`,pk=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,hk=b(ft)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,mk=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,gk=b.div`
  padding: 1.5rem;
`,yk=b.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`,vk=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,xk=b.section`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0;
`,wk=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`,Ro=b.div`
  padding: 1.5rem;
  
  .icon {
    margin-bottom: 1rem;
    color: #0A84FF;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #0A84FF;
  }
  
  p {
    color: #94a3b8;
  }
`;function kk(){const e=Gr.slice(1,4);return z(Jw,{children:[v(uo,{title:"CryptoBlog - Cryptocurrency News & Analysis",description:"Daily crypto news, deep-dive analysis, guides, and market insights.",keywords:"crypto, bitcoin, ethereum, blockchain, defi, trading, news, analysis",url:"https://example.com",image:"/social-banner.png",type:"website"}),v(ek,{children:z(tk,{children:[z(nk,{children:[z("h1",{children:["Navigate the ",v("span",{className:"text-gradient",children:"Crypto World"})," with Confidence"]}),v("p",{children:"Get expert insights, market analysis, and educational content to make informed decisions in the rapidly evolving cryptocurrency landscape."}),z(rk,{children:[z(ik,{to:"/blog",children:["Explore Articles",v(Ms,{size:20})]}),v(ok,{to:"/about",children:"Learn More"})]})]}),v("div",{children:v(tp,{style:{borderRadius:"16px",fontSize:"4rem"},children:"₿"})})]})}),v(lk,{children:z(uu,{children:[z(ep,{children:[v("h2",{children:"Featured Article"}),v("p",{children:"Deep dive into our latest comprehensive analysis and insights"})]}),z(ak,{children:[v(tp,{children:v(bn,{size:80})}),z(uk,{children:[v(np,{children:dr.category}),v(sk,{children:dr.title}),z(rp,{children:[z(_o,{children:[v(Ir,{size:16}),dr.author]}),z(_o,{children:[v(eo,{size:16}),dr.readTime]})]}),v(ck,{children:dr.excerpt}),z(dk,{to:`/post/${dr.id}`,children:["Read Full Article",v(Ms,{size:16})]})]})]})]})}),v(fk,{children:z(uu,{children:[z(ep,{children:[v("h2",{children:"Latest Insights"}),v("p",{children:"Stay updated with the latest trends, analysis, and guides in the crypto space"})]}),v(pk,{children:e.map(n=>z(hk,{to:`/post/${n.id}`,children:[v(mk,{children:n.category==="Guide"?v(Ds,{size:60}):n.category==="Security"?v(_l,{size:60}):v(bn,{size:60})}),z(gk,{children:[v(np,{children:n.category}),v(yk,{children:n.title}),z(vk,{children:[n.excerpt.substring(0,120),"..."]}),z(rp,{children:[z(_o,{children:[v(eo,{size:14}),n.readTime]}),z(_o,{children:[v(Ir,{size:14}),n.author]})]})]})]},n.id))})]})}),v(xk,{children:v(uu,{children:z(wk,{children:[z(Ro,{children:[v("div",{className:"icon",children:v(Ds,{size:48})}),v("h3",{children:"50+"}),v("p",{children:"In-depth Articles"})]}),z(Ro,{children:[v("div",{className:"icon",children:v(bn,{size:48})}),v("h3",{children:"10K+"}),v("p",{children:"Monthly Readers"})]}),z(Ro,{children:[v("div",{className:"icon",children:v(_l,{size:48})}),v("h3",{children:"100%"}),v("p",{children:"Trusted Content"})]}),z(Ro,{children:[v("div",{className:"icon",children:v(Ir,{size:48})}),v("h3",{children:"5+"}),v("p",{children:"Expert Authors"})]})]})})})]})}const Sk=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,Ck=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`,Ek=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: #e2e8f0;
    max-width: 600px;
    margin: 0 auto;
  }
`,Tk=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,bk=b.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Pk=b.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Ak=b.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: #0A84FF;
      box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
    }
    
    &::placeholder {
      color: #64748b;
    }
  }
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
  }
`,Fk=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,zk=b.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${e=>e.active?"#0A84FF":"#e2e8f0"};
  background: ${e=>e.active?"#0A84FF":"white"};
  color: ${e=>e.active?"white":"#64748b"};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0A84FF;
    color: ${e=>e.active?"white":"#0A84FF"};
  }
`,Ok=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_k=b(ft)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,Rk=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`,Ik=b.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Lk=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1rem;
`,Nk=b.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  line-height: 1.4;
`,Mk=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`,Dk=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`,ip=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$k=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`,Bk=b.span`
  background: #f8fafc;
  color: #64748b;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`,jk=b.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,Uk=b.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;function Hk(){const[e,t]=D.useState(""),[n,r]=D.useState("All"),i="https://example.com/blog",o=Gr.filter(l=>{const a=l.title.toLowerCase().includes(e.toLowerCase())||l.excerpt.toLowerCase().includes(e.toLowerCase())||l.author.toLowerCase().includes(e.toLowerCase())||l.tags.some(s=>s.toLowerCase().includes(e.toLowerCase())),u=n==="All"||l.category===n;return a&&u});return z(Sk,{children:[v(uo,{title:"All Crypto Articles - CryptoBlog",description:"Browse cryptocurrency articles by topic with filters and search.",url:i,image:"/social-banner.png",type:"website"}),v(Ck,{children:z(Ek,{children:[v("h1",{children:"Crypto Blog"}),v("p",{children:"Explore our comprehensive collection of cryptocurrency insights, analysis, and educational content"})]})}),z(Tk,{children:[v(bk,{children:z(Pk,{children:[z(Ak,{children:[v(kw,{className:"search-icon",size:20}),v("input",{type:"text",placeholder:"Search articles, authors, or topics...",value:e,onChange:l=>t(l.target.value)})]}),v(Fk,{children:$g.map(l=>v(zk,{active:n===l,onClick:()=>r(l),children:l},l))})]})}),o.length>0?z(oh,{children:[z(Uk,{children:["Showing ",o.length," article",o.length!==1?"s":"",e&&` for "${e}"`,n!=="All"&&` in ${n}`]}),v(Ok,{children:o.map(l=>z(_k,{to:`/post/${l.id}`,children:[v(Rk,{children:l.category==="Analysis"?"📈":l.category==="Guide"?"📖":l.category==="Security"?"🛡️":l.category==="Technology"?"⚙️":l.category==="NFTs"?"🎨":"₿"}),z(Ik,{children:[v(Lk,{children:l.category}),v(Nk,{children:l.title}),v(Mk,{children:l.excerpt}),z(Dk,{children:[z(ip,{children:[v(Ir,{size:14}),l.author]}),z(ip,{children:[v(eo,{size:14}),l.readTime]})]}),v($k,{children:l.tags.slice(0,3).map(a=>v(Bk,{children:a},a))})]})]},l.id))})]}):z(jk,{children:[v("h3",{children:"No articles found"}),v("p",{children:"Try adjusting your search terms or selecting a different category"})]})]})]})}const op=["http","https","mailto","tel"];function Vk(e){const t=(e||"").trim(),n=t.charAt(0);if(n==="#"||n==="/")return t;const r=t.indexOf(":");if(r===-1)return t;let i=-1;for(;++i<op.length;){const o=op[i];if(r===o.length&&t.slice(0,o.length).toLowerCase()===o)return t}return i=t.indexOf("?"),i!==-1&&r>i||(i=t.indexOf("#"),i!==-1&&r>i)?t:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Wk=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)};const Qg=en(Wk);function _i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?lp(e.position):"start"in e||"end"in e?lp(e):"line"in e||"column"in e?Hs(e):""}function Hs(e){return ap(e&&e.line)+":"+ap(e&&e.column)}function lp(e){return Hs(e&&e.start)+"-"+Hs(e&&e.end)}function ap(e){return e&&typeof e=="number"?e:1}class Rt extends Error{constructor(t,n,r){const i=[null,null];let o={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const l=r.indexOf(":");l===-1?i[1]=r:(i[0]=r.slice(0,l),i[1]=r.slice(l+1))}n&&("type"in n||"position"in n?n.position&&(o=n.position):"start"in n||"end"in n?o=n:("line"in n||"column"in n)&&(o.start=n)),this.name=_i(n)||"1:1",this.message=typeof t=="object"?t.message:t,this.stack="",typeof t=="object"&&t.stack&&(this.stack=t.stack),this.reason=this.message,this.fatal,this.line=o.start.line,this.column=o.start.column,this.position=o,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}Rt.prototype.file="";Rt.prototype.name="";Rt.prototype.reason="";Rt.prototype.message="";Rt.prototype.stack="";Rt.prototype.fatal=null;Rt.prototype.column=null;Rt.prototype.line=null;Rt.prototype.source=null;Rt.prototype.ruleId=null;Rt.prototype.position=null;const Qt={basename:Yk,dirname:Qk,extname:Gk,join:Kk,sep:"/"};function Yk(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');so(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.charCodeAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.charCodeAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.charCodeAt(i)===t.charCodeAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Qk(e){if(so(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.charCodeAt(0)===47?"/":".":t===1&&e.charCodeAt(0)===47?"//":e.slice(0,t)}function Gk(e){so(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.charCodeAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Kk(...e){let t=-1,n;for(;++t<e.length;)so(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":qk(n)}function qk(e){so(e);const t=e.charCodeAt(0)===47;let n=Xk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Xk(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.charCodeAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function so(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Zk={cwd:Jk};function Jk(){return"/"}function Vs(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function e2(e){if(typeof e=="string")e=new URL(e);else if(!Vs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return t2(e)}function t2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){const r=t.charCodeAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const su=["history","path","basename","stem","extname","dirname"];class Gg{constructor(t){let n;t?typeof t=="string"||n2(t)?n={value:t}:Vs(t)?n={path:t}:n=t:n={},this.data={},this.messages=[],this.history=[],this.cwd=Zk.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<su.length;){const o=su[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)su.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(t){Vs(t)&&(t=e2(t)),du(t,"path"),this.path!==t&&this.history.push(t)}get dirname(){return typeof this.path=="string"?Qt.dirname(this.path):void 0}set dirname(t){up(this.basename,"dirname"),this.path=Qt.join(t||"",this.basename)}get basename(){return typeof this.path=="string"?Qt.basename(this.path):void 0}set basename(t){du(t,"basename"),cu(t,"basename"),this.path=Qt.join(this.dirname||"",t)}get extname(){return typeof this.path=="string"?Qt.extname(this.path):void 0}set extname(t){if(cu(t,"extname"),up(this.dirname,"extname"),t){if(t.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Qt.join(this.dirname,this.stem+(t||""))}get stem(){return typeof this.path=="string"?Qt.basename(this.path,this.extname):void 0}set stem(t){du(t,"stem"),cu(t,"stem"),this.path=Qt.join(this.dirname||"",t+(this.extname||""))}toString(t){return(this.value||"").toString(t||void 0)}message(t,n,r){const i=new Rt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=null,i}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}}function cu(e,t){if(e&&e.includes(Qt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Qt.sep+"`")}function du(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function up(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function n2(e){return Qg(e)}function sp(e){if(e)throw e}var el=Object.prototype.hasOwnProperty,Kg=Object.prototype.toString,cp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,fp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Kg.call(t)==="[object Array]"},pp=function(t){if(!t||Kg.call(t)!=="[object Object]")return!1;var n=el.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&el.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||el.call(t,i)},hp=function(t,n){cp&&n.name==="__proto__"?cp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},mp=function(t,n){if(n==="__proto__")if(el.call(t,n)){if(dp)return dp(t,n).value}else return;return t[n]},r2=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,s=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<s;++u)if(t=arguments[u],t!=null)for(n in t)r=mp(a,n),i=mp(t,n),a!==i&&(c&&i&&(pp(i)||(o=fp(i)))?(o?(o=!1,l=r&&fp(r)?r:[]):l=r&&pp(r)?r:{},hp(a,{name:n,newValue:e(c,l,i)})):typeof i<"u"&&hp(a,{name:n,newValue:i}));return a};const gp=en(r2);function Ws(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function i2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...s){const c=e[++o];let d=-1;if(u){l(u);return}for(;++d<i.length;)(s[d]===null||s[d]===void 0)&&(s[d]=i[d]);i=s,c?o2(c,a)(...s):l(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function o2(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(s){const c=s;if(a&&n)throw c;return i(c)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const l2=Xg().freeze(),qg={}.hasOwnProperty;function Xg(){const e=i2(),t=[];let n={},r,i=-1;return o.data=l,o.Parser=void 0,o.Compiler=void 0,o.freeze=a,o.attachers=t,o.use=u,o.parse=s,o.stringify=c,o.run=d,o.runSync=p,o.process=f,o.processSync=k,o;function o(){const w=Xg();let C=-1;for(;++C<t.length;)w.use(...t[C]);return w.data(gp(!0,{},n)),w}function l(w,C){return typeof w=="string"?arguments.length===2?(hu("data",r),n[w]=C,o):qg.call(n,w)&&n[w]||null:w?(hu("data",r),n=w,o):n}function a(){if(r)return o;for(;++i<t.length;){const[w,...C]=t[i];if(C[0]===!1)continue;C[0]===!0&&(C[0]=void 0);const h=w.call(o,...C);typeof h=="function"&&e.use(h)}return r=!0,i=Number.POSITIVE_INFINITY,o}function u(w,...C){let h;if(hu("use",r),w!=null)if(typeof w=="function")P(w,...C);else if(typeof w=="object")Array.isArray(w)?E(w):y(w);else throw new TypeError("Expected usable value, not `"+w+"`");return h&&(n.settings=Object.assign(n.settings||{},h)),o;function m(S){if(typeof S=="function")P(S);else if(typeof S=="object")if(Array.isArray(S)){const[F,...O]=S;P(F,...O)}else y(S);else throw new TypeError("Expected usable value, not `"+S+"`")}function y(S){E(S.plugins),S.settings&&(h=Object.assign(h||{},S.settings))}function E(S){let F=-1;if(S!=null)if(Array.isArray(S))for(;++F<S.length;){const O=S[F];m(O)}else throw new TypeError("Expected a list of plugins, not `"+S+"`")}function P(S,F){let O=-1,H;for(;++O<t.length;)if(t[O][0]===S){H=t[O];break}H?(Ws(H[1])&&Ws(F)&&(F=gp(!0,H[1],F)),H[1]=F):t.push([...arguments])}}function s(w){o.freeze();const C=mi(w),h=o.Parser;return fu("parse",h),yp(h,"parse")?new h(String(C),C).parse():h(String(C),C)}function c(w,C){o.freeze();const h=mi(C),m=o.Compiler;return pu("stringify",m),vp(w),yp(m,"compile")?new m(w,h).compile():m(w,h)}function d(w,C,h){if(vp(w),o.freeze(),!h&&typeof C=="function"&&(h=C,C=void 0),!h)return new Promise(m);m(null,h);function m(y,E){e.run(w,mi(C),P);function P(S,F,O){F=F||w,S?E(S):y?y(F):h(null,F,O)}}}function p(w,C){let h,m;return o.run(w,C,y),xp("runSync","run",m),h;function y(E,P){sp(E),h=P,m=!0}}function f(w,C){if(o.freeze(),fu("process",o.Parser),pu("process",o.Compiler),!C)return new Promise(h);h(null,C);function h(m,y){const E=mi(w);o.run(o.parse(E),E,(S,F,O)=>{if(S||!F||!O)P(S);else{const H=o.stringify(F,O);H==null||(s2(H)?O.value=H:O.result=H),P(S,O)}});function P(S,F){S||!F?y(S):m?m(F):C(null,F)}}}function k(w){let C;o.freeze(),fu("processSync",o.Parser),pu("processSync",o.Compiler);const h=mi(w);return o.process(h,m),xp("processSync","process",C),h;function m(y){C=!0,sp(y)}}}function yp(e,t){return typeof e=="function"&&e.prototype&&(a2(e.prototype)||t in e.prototype)}function a2(e){let t;for(t in e)if(qg.call(e,t))return!0;return!1}function fu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function pu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function hu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function vp(e){if(!Ws(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function xp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function mi(e){return u2(e)?e:new Gg(e)}function u2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function s2(e){return typeof e=="string"||Qg(e)}const c2={};function d2(e,t){const n=t||c2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Zg(e,r,i)}function Zg(e,t,n){if(f2(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return wp(e.children,t,n)}return Array.isArray(e)?wp(e,t,n):""}function wp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Zg(e[i],t,n);return r.join("")}function f2(e){return!!(e&&typeof e=="object")}function Jt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function Pt(e,t){return e.length>0?(Jt(e,e.length,0,t),e):t}const kp={}.hasOwnProperty;function p2(e){const t={};let n=-1;for(;++n<e.length;)h2(t,e[n]);return t}function h2(e,t){let n;for(n in t){const i=(kp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){kp.call(i,l)||(i[l]=[]);const a=o[l];m2(i[l],Array.isArray(a)?a:a?[a]:[])}}}function m2(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Jt(e,0,0,r)}const g2=/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Kt=Hn(/[A-Za-z]/),vt=Hn(/[\dA-Za-z]/),y2=Hn(/[#-'*+\--9=?A-Z^-~]/);function Ys(e){return e!==null&&(e<32||e===127)}const Qs=Hn(/\d/),v2=Hn(/[\dA-Fa-f]/),x2=Hn(/[!-/:-@[-`{-~]/);function K(e){return e!==null&&e<-2}function dt(e){return e!==null&&(e<0||e===32)}function de(e){return e===-2||e===-1||e===32}const w2=Hn(g2),k2=Hn(/\s/);function Hn(e){return t;function t(n){return n!==null&&e.test(String.fromCharCode(n))}}function Se(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return de(u)?(e.enter(n),a(u)):t(u)}function a(u){return de(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const S2={tokenize:C2};function C2(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return K(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const E2={tokenize:T2},Sp={tokenize:b2};function T2(e){const t=this,n=[];let r=0,i,o,l;return a;function a(y){if(r<n.length){const E=n[r];return t.containerState=E[1],e.attempt(E[0].continuation,u,s)(y)}return s(y)}function u(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const E=t.events.length;let P=E,S;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){S=t.events[P][1].end;break}h(r);let F=E;for(;F<t.events.length;)t.events[F][1].end=Object.assign({},S),F++;return Jt(t.events,P+1,0,t.events.slice(E)),t.events.length=F,s(y)}return a(y)}function s(y){if(r===n.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return k(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Sp,c,d)(y)}function c(y){return i&&m(),h(r),p(y)}function d(y){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,k(y)}function p(y){return t.containerState={},e.attempt(Sp,f,k)(y)}function f(y){return r++,n.push([t.currentConstruct,t.containerState]),p(y)}function k(y){if(y===null){i&&m(),h(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),w(y)}function w(y){if(y===null){C(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return K(y)?(e.consume(y),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),w)}function C(y,E){const P=t.sliceStream(y);if(E&&P.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(P),t.parser.lazy[y.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const F=t.events.length;let O=F,H,V;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){if(H){V=t.events[O][1].end;break}H=!0}for(h(r),S=F;S<t.events.length;)t.events[S][1].end=Object.assign({},V),S++;Jt(t.events,O+1,0,t.events.slice(F)),t.events.length=S}}function h(y){let E=n.length;for(;E-- >y;){const P=n[E];t.containerState=P[1],P[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function b2(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Cp(e){if(e===null||dt(e)||k2(e))return 1;if(w2(e))return 2}function ud(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Gs={name:"attention",tokenize:A2,resolveAll:P2};function P2(e,t){let n=-1,r,i,o,l,a,u,s,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),p=Object.assign({},e[n][1].start);Ep(d,-u),Ep(p,u),l={type:u>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:p},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Pt(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=Pt(s,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),s=Pt(s,ud(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=Pt(s,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,s=Pt(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,Jt(e,r-1,n-r+3,s),n=r+s.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function A2(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Cp(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const s=e.exit("attentionSequence"),c=Cp(u),d=!c||c===2&&i||n.includes(u),p=!i||i===2&&c||n.includes(r);return s._open=!!(o===42?d:d&&(i||!p)),s._close=!!(o===42?p:p&&(c||!d)),t(u)}}function Ep(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const F2={name:"autolink",tokenize:z2};function z2(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return Kt(f)?(e.consume(f),l):s(f)}function l(f){return f===43||f===45||f===46||vt(f)?(r=1,a(f)):s(f)}function a(f){return f===58?(e.consume(f),r=0,u):(f===43||f===45||f===46||vt(f))&&r++<32?(e.consume(f),a):(r=0,s(f))}function u(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||Ys(f)?n(f):(e.consume(f),u)}function s(f){return f===64?(e.consume(f),c):y2(f)?(e.consume(f),s):n(f)}function c(f){return vt(f)?d(f):n(f)}function d(f){return f===46?(e.consume(f),r=0,c):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):p(f)}function p(f){if((f===45||vt(f))&&r++<63){const k=f===45?p:d;return e.consume(f),k}return n(f)}}const ya={tokenize:O2,partial:!0};function O2(e,t,n){return r;function r(o){return de(o)?Se(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||K(o)?t(o):n(o)}}const Jg={name:"blockQuote",tokenize:_2,continuation:{tokenize:R2},exit:I2};function _2(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return de(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function R2(e,t,n){const r=this;return i;function i(l){return de(l)?Se(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Jg,t,n)(l)}}function I2(e){e.exit("blockQuote")}const ey={name:"characterEscape",tokenize:L2};function L2(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return x2(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Tp=document.createElement("i");function sd(e){const t="&"+e+";";Tp.innerHTML=t;const n=Tp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}const ty={name:"characterReference",tokenize:N2};function N2(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),o=31,l=vt,c(d))}function s(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=v2,c):(e.enter("characterReferenceValue"),o=7,l=Qs,c(d))}function c(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return l===vt&&!sd(r.sliceSerialize(p))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),c):n(d)}}const bp={tokenize:D2,partial:!0},Pp={name:"codeFenced",tokenize:M2,concrete:!0};function M2(e,t,n){const r=this,i={tokenize:P,partial:!0};let o=0,l=0,a;return u;function u(S){return s(S)}function s(S){const F=r.events[r.events.length-1];return o=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(S)}function c(S){return S===a?(l++,e.consume(S),c):l<3?n(S):(e.exit("codeFencedFenceSequence"),de(S)?Se(e,d,"whitespace")(S):d(S))}function d(S){return S===null||K(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(bp,w,E)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(S))}function p(S){return S===null||K(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(S)):de(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,f,"whitespace")(S)):S===96&&S===a?n(S):(e.consume(S),p)}function f(S){return S===null||K(S)?d(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(S))}function k(S){return S===null||K(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(S)):S===96&&S===a?n(S):(e.consume(S),k)}function w(S){return e.attempt(i,E,C)(S)}function C(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),h}function h(S){return o>0&&de(S)?Se(e,m,"linePrefix",o+1)(S):m(S)}function m(S){return S===null||K(S)?e.check(bp,w,E)(S):(e.enter("codeFlowValue"),y(S))}function y(S){return S===null||K(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),y)}function E(S){return e.exit("codeFenced"),t(S)}function P(S,F,O){let H=0;return V;function V(Q){return S.enter("lineEnding"),S.consume(Q),S.exit("lineEnding"),j}function j(Q){return S.enter("codeFencedFence"),de(Q)?Se(S,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):$(Q)}function $(Q){return Q===a?(S.enter("codeFencedFenceSequence"),J(Q)):O(Q)}function J(Q){return Q===a?(H++,S.consume(Q),J):H>=l?(S.exit("codeFencedFenceSequence"),de(Q)?Se(S,oe,"whitespace")(Q):oe(Q)):O(Q)}function oe(Q){return Q===null||K(Q)?(S.exit("codeFencedFence"),F(Q)):O(Q)}}}function D2(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const mu={name:"codeIndented",tokenize:B2},$2={tokenize:j2,partial:!0};function B2(e,t,n){const r=this;return i;function i(s){return e.enter("codeIndented"),Se(e,o,"linePrefix",4+1)(s)}function o(s){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?l(s):n(s)}function l(s){return s===null?u(s):K(s)?e.attempt($2,l,u)(s):(e.enter("codeFlowValue"),a(s))}function a(s){return s===null||K(s)?(e.exit("codeFlowValue"),l(s)):(e.consume(s),a)}function u(s){return e.exit("codeIndented"),t(s)}}function j2(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Se(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):K(l)?i(l):n(l)}}const U2={name:"codeText",tokenize:W2,resolve:H2,previous:V2};function H2(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function V2(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function W2(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(o=e.enter("codeTextSequence"),i=0,c(d)):K(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),s(d))}function s(d){return d===null||d===32||d===96||K(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),s)}function c(d){return d===96?(e.consume(d),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",s(d))}}function ny(e){const t={};let n=-1,r,i,o,l,a,u,s;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Y2(e,n)),n=t[n],s=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),Jt(e,i,n-i+1,a))}}return!s}function Y2(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],s={};let c,d,p=-1,f=n,k=0,w=0;const C=[w];for(;f;){for(;e[++i][1]!==f;);o.push(i),f._tokenizer||(c=r.sliceStream(f),f.next||c.push(null),d&&l.defineSkip(f.start),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(c),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(w=p+1,C.push(w),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(l.events=[],f?(f._tokenizer=void 0,f.previous=void 0):C.pop(),p=C.length;p--;){const h=a.slice(C[p],C[p+1]),m=o.pop();u.unshift([m,m+h.length-1]),Jt(e,m,2,h)}for(p=-1;++p<u.length;)s[k+u[p][0]]=k+u[p][1],k+=u[p][1]-u[p][0]-1;return s}const Q2={tokenize:q2,resolve:K2},G2={tokenize:X2,partial:!0};function K2(e){return ny(e),e}function q2(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):K(a)?e.check(G2,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function X2(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Se(e,o,"linePrefix")}function o(l){if(l===null||K(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function ry(e,t,n,r,i,o,l,a,u){const s=u||Number.POSITIVE_INFINITY;let c=0;return d;function d(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),p):h===null||h===32||h===41||Ys(h)?n(h):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),w(h))}function p(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===62?(e.exit("chunkString"),e.exit(a),p(h)):h===null||h===60||K(h)?n(h):(e.consume(h),h===92?k:f)}function k(h){return h===60||h===62||h===92?(e.consume(h),f):f(h)}function w(h){return!c&&(h===null||h===41||dt(h))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(h)):c<s&&h===40?(e.consume(h),c++,w):h===41?(e.consume(h),c--,w):h===null||h===32||h===40||Ys(h)?n(h):(e.consume(h),h===92?C:w)}function C(h){return h===40||h===41||h===92?(e.consume(h),w):w(h)}}function iy(e,t,n,r,i,o){const l=this;let a=0,u;return s;function s(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),c}function c(f){return a>999||f===null||f===91||f===93&&!u||f===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):K(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===null||f===91||f===93||K(f)||a++>999?(e.exit("chunkString"),c(f)):(e.consume(f),u||(u=!de(f)),f===92?p:d)}function p(f){return f===91||f===92||f===93?(e.consume(f),a++,d):d(f)}}function oy(e,t,n,r,i,o){let l;return a;function a(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),l=p===40?41:p,u):n(p)}function u(p){return p===l?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(o),s(p))}function s(p){return p===l?(e.exit(o),u(l)):p===null?n(p):K(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),Se(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===l||p===null||K(p)?(e.exit("chunkString"),s(p)):(e.consume(p),p===92?d:c)}function d(p){return p===l||p===92?(e.consume(p),c):c(p)}}function Ri(e,t){let n;return r;function r(i){return K(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):de(i)?Se(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}function Mr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z2={name:"definition",tokenize:eS},J2={tokenize:tS,partial:!0};function eS(e,t,n){const r=this;let i;return o;function o(f){return e.enter("definition"),l(f)}function l(f){return iy.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=Mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),u):n(f)}function u(f){return dt(f)?Ri(e,s)(f):s(f)}function s(f){return ry(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function c(f){return e.attempt(J2,d,d)(f)}function d(f){return de(f)?Se(e,p,"whitespace")(f):p(f)}function p(f){return f===null||K(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function tS(e,t,n){return r;function r(a){return dt(a)?Ri(e,i)(a):n(a)}function i(a){return oy(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return de(a)?Se(e,l,"whitespace")(a):l(a)}function l(a){return a===null||K(a)?t(a):n(a)}}const nS={name:"hardBreakEscape",tokenize:rS};function rS(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return K(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const iS={name:"headingAtx",tokenize:lS,resolve:oS};function oS(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Jt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function lS(e,t,n){let r=0;return i;function i(c){return e.enter("atxHeading"),o(c)}function o(c){return e.enter("atxHeadingSequence"),l(c)}function l(c){return c===35&&r++<6?(e.consume(c),l):c===null||dt(c)?(e.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(e.enter("atxHeadingSequence"),u(c)):c===null||K(c)?(e.exit("atxHeading"),t(c)):de(c)?Se(e,a,"whitespace")(c):(e.enter("atxHeadingText"),s(c))}function u(c){return c===35?(e.consume(c),u):(e.exit("atxHeadingSequence"),a(c))}function s(c){return c===null||c===35||dt(c)?(e.exit("atxHeadingText"),a(c)):(e.consume(c),s)}}const aS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ap=["pre","script","style","textarea"],uS={name:"htmlFlow",tokenize:fS,resolveTo:dS,concrete:!0},sS={tokenize:hS,partial:!0},cS={tokenize:pS,partial:!0};function dS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function fS(e,t,n){const r=this;let i,o,l,a,u;return s;function s(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),d}function d(g){return g===33?(e.consume(g),p):g===47?(e.consume(g),o=!0,w):g===63?(e.consume(g),i=3,r.interrupt?t:x):Kt(g)?(e.consume(g),l=String.fromCharCode(g),C):n(g)}function p(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,a=0,k):Kt(g)?(e.consume(g),i=4,r.interrupt?t:x):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:x):n(g)}function k(g){const B="CDATA[";return g===B.charCodeAt(a++)?(e.consume(g),a===B.length?r.interrupt?t:$:k):n(g)}function w(g){return Kt(g)?(e.consume(g),l=String.fromCharCode(g),C):n(g)}function C(g){if(g===null||g===47||g===62||dt(g)){const B=g===47,Y=l.toLowerCase();return!B&&!o&&Ap.includes(Y)?(i=1,r.interrupt?t(g):$(g)):aS.includes(l.toLowerCase())?(i=6,B?(e.consume(g),h):r.interrupt?t(g):$(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?m(g):y(g))}return g===45||vt(g)?(e.consume(g),l+=String.fromCharCode(g),C):n(g)}function h(g){return g===62?(e.consume(g),r.interrupt?t:$):n(g)}function m(g){return de(g)?(e.consume(g),m):V(g)}function y(g){return g===47?(e.consume(g),V):g===58||g===95||Kt(g)?(e.consume(g),E):de(g)?(e.consume(g),y):V(g)}function E(g){return g===45||g===46||g===58||g===95||vt(g)?(e.consume(g),E):P(g)}function P(g){return g===61?(e.consume(g),S):de(g)?(e.consume(g),P):y(g)}function S(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),u=g,F):de(g)?(e.consume(g),S):O(g)}function F(g){return g===u?(e.consume(g),u=null,H):g===null||K(g)?n(g):(e.consume(g),F)}function O(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||dt(g)?P(g):(e.consume(g),O)}function H(g){return g===47||g===62||de(g)?y(g):n(g)}function V(g){return g===62?(e.consume(g),j):n(g)}function j(g){return g===null||K(g)?$(g):de(g)?(e.consume(g),j):n(g)}function $(g){return g===45&&i===2?(e.consume(g),xe):g===60&&i===1?(e.consume(g),ae):g===62&&i===4?(e.consume(g),ne):g===63&&i===3?(e.consume(g),x):g===93&&i===5?(e.consume(g),W):K(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(sS,N,J)(g)):g===null||K(g)?(e.exit("htmlFlowData"),J(g)):(e.consume(g),$)}function J(g){return e.check(cS,oe,N)(g)}function oe(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),Q}function Q(g){return g===null||K(g)?J(g):(e.enter("htmlFlowData"),$(g))}function xe(g){return g===45?(e.consume(g),x):$(g)}function ae(g){return g===47?(e.consume(g),l="",L):$(g)}function L(g){if(g===62){const B=l.toLowerCase();return Ap.includes(B)?(e.consume(g),ne):$(g)}return Kt(g)&&l.length<8?(e.consume(g),l+=String.fromCharCode(g),L):$(g)}function W(g){return g===93?(e.consume(g),x):$(g)}function x(g){return g===62?(e.consume(g),ne):g===45&&i===2?(e.consume(g),x):$(g)}function ne(g){return g===null||K(g)?(e.exit("htmlFlowData"),N(g)):(e.consume(g),ne)}function N(g){return e.exit("htmlFlow"),t(g)}}function pS(e,t,n){const r=this;return i;function i(l){return K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function hS(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ya,t,n)}}const mS={name:"htmlText",tokenize:gS};function gS(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),s):x===47?(e.consume(x),P):x===63?(e.consume(x),y):Kt(x)?(e.consume(x),O):n(x)}function s(x){return x===45?(e.consume(x),c):x===91?(e.consume(x),o=0,k):Kt(x)?(e.consume(x),m):n(x)}function c(x){return x===45?(e.consume(x),f):n(x)}function d(x){return x===null?n(x):x===45?(e.consume(x),p):K(x)?(l=d,ae(x)):(e.consume(x),d)}function p(x){return x===45?(e.consume(x),f):d(x)}function f(x){return x===62?xe(x):x===45?p(x):d(x)}function k(x){const ne="CDATA[";return x===ne.charCodeAt(o++)?(e.consume(x),o===ne.length?w:k):n(x)}function w(x){return x===null?n(x):x===93?(e.consume(x),C):K(x)?(l=w,ae(x)):(e.consume(x),w)}function C(x){return x===93?(e.consume(x),h):w(x)}function h(x){return x===62?xe(x):x===93?(e.consume(x),h):w(x)}function m(x){return x===null||x===62?xe(x):K(x)?(l=m,ae(x)):(e.consume(x),m)}function y(x){return x===null?n(x):x===63?(e.consume(x),E):K(x)?(l=y,ae(x)):(e.consume(x),y)}function E(x){return x===62?xe(x):y(x)}function P(x){return Kt(x)?(e.consume(x),S):n(x)}function S(x){return x===45||vt(x)?(e.consume(x),S):F(x)}function F(x){return K(x)?(l=F,ae(x)):de(x)?(e.consume(x),F):xe(x)}function O(x){return x===45||vt(x)?(e.consume(x),O):x===47||x===62||dt(x)?H(x):n(x)}function H(x){return x===47?(e.consume(x),xe):x===58||x===95||Kt(x)?(e.consume(x),V):K(x)?(l=H,ae(x)):de(x)?(e.consume(x),H):xe(x)}function V(x){return x===45||x===46||x===58||x===95||vt(x)?(e.consume(x),V):j(x)}function j(x){return x===61?(e.consume(x),$):K(x)?(l=j,ae(x)):de(x)?(e.consume(x),j):H(x)}function $(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,J):K(x)?(l=$,ae(x)):de(x)?(e.consume(x),$):(e.consume(x),oe)}function J(x){return x===i?(e.consume(x),i=void 0,Q):x===null?n(x):K(x)?(l=J,ae(x)):(e.consume(x),J)}function oe(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||dt(x)?H(x):(e.consume(x),oe)}function Q(x){return x===47||x===62||dt(x)?H(x):n(x)}function xe(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function ae(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),L}function L(x){return de(x)?Se(e,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):W(x)}function W(x){return e.enter("htmlTextData"),l(x)}}const cd={name:"labelEnd",tokenize:SS,resolveTo:kS,resolveAll:wS},yS={tokenize:CS},vS={tokenize:ES},xS={tokenize:TS};function wS(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function kS(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},c={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",s,t]],a=Pt(a,e.slice(o+1,o+r+3)),a=Pt(a,[["enter",c,t]]),a=Pt(a,ud(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=Pt(a,[["exit",c,t],e[l-2],e[l-1],["exit",s,t]]),a=Pt(a,e.slice(l+1)),a=Pt(a,[["exit",u,t]]),Jt(e,o,e.length,a),e}function SS(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(p){return o?o._inactive?d(p):(l=r.parser.defined.includes(Mr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),u):n(p)}function u(p){return p===40?e.attempt(yS,c,l?c:d)(p):p===91?e.attempt(vS,c,l?s:d)(p):l?c(p):d(p)}function s(p){return e.attempt(xS,c,d)(p)}function c(p){return t(p)}function d(p){return o._balanced=!0,n(p)}}function CS(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return dt(d)?Ri(e,o)(d):o(d)}function o(d){return d===41?c(d):ry(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return dt(d)?Ri(e,u)(d):c(d)}function a(d){return n(d)}function u(d){return d===34||d===39||d===40?oy(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function s(d){return dt(d)?Ri(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function ES(e,t,n){const r=this;return i;function i(a){return iy.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function TS(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const bS={name:"labelStartImage",tokenize:PS,resolveAll:cd.resolveAll};function PS(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const AS={name:"labelStartLink",tokenize:FS,resolveAll:cd.resolveAll};function FS(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const gu={name:"lineEnding",tokenize:zS};function zS(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const tl={name:"thematicBreak",tokenize:OS};function OS(e,t,n){let r=0,i;return o;function o(s){return e.enter("thematicBreak"),l(s)}function l(s){return i=s,a(s)}function a(s){return s===i?(e.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||K(s))?(e.exit("thematicBreak"),t(s)):n(s)}function u(s){return s===i?(e.consume(s),r++,u):(e.exit("thematicBreakSequence"),de(s)?Se(e,a,"whitespace")(s):a(s))}}const ot={name:"list",tokenize:IS,continuation:{tokenize:LS},exit:MS},_S={tokenize:DS,partial:!0},RS={tokenize:NS,partial:!0};function IS(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(f){const k=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Qs(f)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(tl,n,s)(f):s(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(f)}return n(f)}function u(f){return Qs(f)&&++l<10?(e.consume(f),u):(!r.interrupt||l<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),s(f)):n(f)}function s(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(ya,r.interrupt?n:c,e.attempt(_S,p,d))}function c(f){return r.containerState.initialBlankLine=!0,o++,p(f)}function d(f){return de(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),p):n(f)}function p(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function LS(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ya,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!de(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(RS,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(ot,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function NS(e,t,n){const r=this;return Se(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function MS(e){e.exit(this.containerState.type)}function DS(e,t,n){const r=this;return Se(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!de(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Fp={name:"setextUnderline",tokenize:BS,resolveTo:$S};function $S(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function BS(e,t,n){const r=this;let i;return o;function o(s){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=s,l(s)):n(s)}function l(s){return e.enter("setextHeadingLineSequence"),a(s)}function a(s){return s===i?(e.consume(s),a):(e.exit("setextHeadingLineSequence"),de(s)?Se(e,u,"lineSuffix")(s):u(s))}function u(s){return s===null||K(s)?(e.exit("setextHeadingLine"),t(s)):n(s)}}const jS={tokenize:US};function US(e){const t=this,n=e.attempt(ya,r,e.attempt(this.parser.constructs.flowInitial,i,Se(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Q2,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const HS={resolveAll:ay()},VS=ly("string"),WS=ly("text");function ly(e){return{tokenize:t,resolveAll:ay(e==="text"?YS:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(c){return s(c)?o(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),u}function u(c){return s(c)?(n.exit("data"),o(c)):(n.consume(c),u)}function s(c){if(c===null)return!0;const d=i[c];let p=-1;if(d)for(;++p<d.length;){const f=d[p];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function ay(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function YS(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const s=i[o];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(s===-2)u=!0,a++;else if(s!==-1){o++;break}}if(a){const s={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},s.start),r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(n,0,["enter",s,t],["exit",s,t]),n+=2)}n++}return e}function QS(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:m,enter:y,exit:E,attempt:F(P),check:F(S),interrupt:F(S,{interrupt:!0})},s={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:p,now:k,defineSkip:w,write:d};let c=t.tokenize.call(s,u);return t.resolveAll&&o.push(t),s;function d(j){return l=Pt(l,j),C(),l[l.length-1]!==null?[]:(O(t,0),s.events=ud(o,s.events,s),s.events)}function p(j,$){return KS(f(j),$)}function f(j){return GS(l,j)}function k(){const{line:j,column:$,offset:J,_index:oe,_bufferIndex:Q}=r;return{line:j,column:$,offset:J,_index:oe,_bufferIndex:Q}}function w(j){i[j.line]=j.column,V()}function C(){let j;for(;r._index<l.length;){const $=l[r._index];if(typeof $=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<$.length;)h($.charCodeAt(r._bufferIndex));else h($)}}function h(j){c=c(j)}function m(j){K(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,V()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=j}function y(j,$){const J=$||{};return J.type=j,J.start=k(),s.events.push(["enter",J,s]),a.push(J),J}function E(j){const $=a.pop();return $.end=k(),s.events.push(["exit",$,s]),$}function P(j,$){O(j,$.from)}function S(j,$){$.restore()}function F(j,$){return J;function J(oe,Q,xe){let ae,L,W,x;return Array.isArray(oe)?N(oe):"tokenize"in oe?N([oe]):ne(oe);function ne(T){return ee;function ee(M){const fe=M!==null&&T[M],re=M!==null&&T.null,ue=[...Array.isArray(fe)?fe:fe?[fe]:[],...Array.isArray(re)?re:re?[re]:[]];return N(ue)(M)}}function N(T){return ae=T,L=0,T.length===0?xe:g(T[L])}function g(T){return ee;function ee(M){return x=H(),W=T,T.partial||(s.currentConstruct=T),T.name&&s.parser.constructs.disable.null.includes(T.name)?Y():T.tokenize.call($?Object.assign(Object.create(s),$):s,u,B,Y)(M)}}function B(T){return j(W,x),Q}function Y(T){return x.restore(),++L<ae.length?g(ae[L]):xe}}}function O(j,$){j.resolveAll&&!o.includes(j)&&o.push(j),j.resolve&&Jt(s.events,$,s.events.length-$,j.resolve(s.events.slice($),s)),j.resolveTo&&(s.events=j.resolveTo(s.events,s))}function H(){const j=k(),$=s.previous,J=s.currentConstruct,oe=s.events.length,Q=Array.from(a);return{restore:xe,from:oe};function xe(){r=j,s.previous=$,s.currentConstruct=J,s.events.length=oe,a=Q,V()}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function GS(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function KS(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const qS={42:ot,43:ot,45:ot,48:ot,49:ot,50:ot,51:ot,52:ot,53:ot,54:ot,55:ot,56:ot,57:ot,62:Jg},XS={91:Z2},ZS={[-2]:mu,[-1]:mu,32:mu},JS={35:iS,42:tl,45:[Fp,tl],60:uS,61:Fp,95:tl,96:Pp,126:Pp},eC={38:ty,92:ey},tC={[-5]:gu,[-4]:gu,[-3]:gu,33:bS,38:ty,42:Gs,60:[F2,mS],91:AS,92:[nS,ey],93:cd,95:Gs,96:U2},nC={null:[Gs,HS]},rC={null:[42,95]},iC={null:[]},oC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:rC,contentInitial:XS,disable:iC,document:qS,flow:JS,flowInitial:ZS,insideSpan:nC,string:eC,text:tC},Symbol.toStringTag,{value:"Module"}));function lC(e){const n=p2([oC,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(S2),document:i(E2),flow:i(jS),string:i(VS),text:i(WS)};return r;function i(o){return l;function l(a){return QS(r,o,a)}}}const zp=/[\0\t\n\r]/g;function aC(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let s,c,d,p,f;for(o=t+o.toString(l),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(zp.lastIndex=d,s=zp.exec(o),p=s&&s.index!==void 0?s.index:o.length,f=o.charCodeAt(p),!s){t=o.slice(d);break}if(f===10&&d===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<p&&(u.push(o.slice(d,p)),e+=p-d),f){case 0:{u.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,u.push(-2);e++<c;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}function uC(e){for(;!ny(e););return e}function uy(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCharCode(n)}const sC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function cC(e){return e.replace(sC,dC)}function dC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return uy(n.slice(o?2:1),o?16:10)}return sd(n)||e}const sy={}.hasOwnProperty,fC=function(e,t,n){return typeof t!="string"&&(n=t,t=void 0),pC(n)(uC(lC(n).document().write(aC()(e,t,!0))))};function pC(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Ne),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(je),blockQuote:a(ue),characterEscape:j,characterReference:j,codeFenced:a(X),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:a(X,u),codeText:a(Be,u),codeTextData:j,data:j,codeFlowValue:j,definition:a(qe),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:a(le),hardBreakEscape:a(se),hardBreakTrailing:a(se),htmlFlow:a(Le,u),htmlFlowData:j,htmlText:a(Le,u),htmlTextData:j,image:a(Vn),label:u,link:a(Ne),listItem:a(Yn),listItemValue:k,listOrdered:a(Wn,f),listUnordered:a(Wn),paragraph:a(pt),reference:Y,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:a(je),strong:a(q),thematicBreak:a(ni)},exit:{atxHeading:c(),atxHeadingSequence:F,autolink:c(),autolinkEmail:re,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:$,characterReferenceMarkerHexadecimal:ee,characterReferenceMarkerNumeric:ee,characterReferenceValue:M,codeFenced:c(m),codeFencedFence:h,codeFencedFenceInfo:w,codeFencedFenceMeta:C,codeFlowValue:$,codeIndented:c(y),codeText:c(ae),codeTextData:$,data:$,definition:c(),definitionDestinationString:S,definitionLabelString:E,definitionTitleString:P,emphasis:c(),hardBreakEscape:c(oe),hardBreakTrailing:c(oe),htmlFlow:c(Q),htmlFlowData:$,htmlText:c(xe),htmlTextData:$,image:c(W),label:ne,labelText:x,lineEnding:J,link:c(L),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:T,resourceDestinationString:N,resourceTitleString:g,resource:B,setextHeading:c(V),setextHeadingLineSequence:H,setextHeadingText:O,strong:c(),thematicBreak:c()}};cy(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(A){let R={type:"root",children:[]};const G={stack:[R],tokenStack:[],config:t,enter:s,exit:d,buffer:u,resume:p,setData:o,getData:l},ge=[];let ye=-1;for(;++ye<A.length;)if(A[ye][1].type==="listOrdered"||A[ye][1].type==="listUnordered")if(A[ye][0]==="enter")ge.push(ye);else{const Nt=ge.pop();ye=i(A,Nt,ye)}for(ye=-1;++ye<A.length;){const Nt=t[A[ye][0]];sy.call(Nt,A[ye][1].type)&&Nt[A[ye][1].type].call(Object.assign({sliceSerialize:A[ye][2].sliceSerialize},G),A[ye][1])}if(G.tokenStack.length>0){const Nt=G.tokenStack[G.tokenStack.length-1];(Nt[1]||Op).call(G,void 0,Nt[0])}for(R.position={start:vn(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:vn(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},ye=-1;++ye<t.transforms.length;)R=t.transforms[ye](R)||R;return R}function i(A,R,G){let ge=R-1,ye=-1,Nt=!1,gn,tn,ri,ii;for(;++ge<=G;){const _e=A[ge];if(_e[1].type==="listUnordered"||_e[1].type==="listOrdered"||_e[1].type==="blockQuote"?(_e[0]==="enter"?ye++:ye--,ii=void 0):_e[1].type==="lineEndingBlank"?_e[0]==="enter"&&(gn&&!ii&&!ye&&!ri&&(ri=ge),ii=void 0):_e[1].type==="linePrefix"||_e[1].type==="listItemValue"||_e[1].type==="listItemMarker"||_e[1].type==="listItemPrefix"||_e[1].type==="listItemPrefixWhitespace"||(ii=void 0),!ye&&_e[0]==="enter"&&_e[1].type==="listItemPrefix"||ye===-1&&_e[0]==="exit"&&(_e[1].type==="listUnordered"||_e[1].type==="listOrdered")){if(gn){let Fa=ge;for(tn=void 0;Fa--;){const nn=A[Fa];if(nn[1].type==="lineEnding"||nn[1].type==="lineEndingBlank"){if(nn[0]==="exit")continue;tn&&(A[tn][1].type="lineEndingBlank",Nt=!0),nn[1].type="lineEnding",tn=Fa}else if(!(nn[1].type==="linePrefix"||nn[1].type==="blockQuotePrefix"||nn[1].type==="blockQuotePrefixWhitespace"||nn[1].type==="blockQuoteMarker"||nn[1].type==="listItemIndent"))break}ri&&(!tn||ri<tn)&&(gn._spread=!0),gn.end=Object.assign({},tn?A[tn][1].start:_e[1].end),A.splice(tn||ge,0,["exit",gn,_e[2]]),ge++,G++}_e[1].type==="listItemPrefix"&&(gn={type:"listItem",_spread:!1,start:Object.assign({},_e[1].start),end:void 0},A.splice(ge,0,["enter",gn,_e[2]]),ge++,G++,ri=void 0,ii=!0)}}return A[R][1]._spread=Nt,G}function o(A,R){n[A]=R}function l(A){return n[A]}function a(A,R){return G;function G(ge){s.call(this,A(ge),ge),R&&R.call(this,ge)}}function u(){this.stack.push({type:"fragment",children:[]})}function s(A,R,G){return this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([R,G]),A.position={start:vn(R.start)},A}function c(A){return R;function R(G){A&&A.call(this,G),d.call(this,G)}}function d(A,R){const G=this.stack.pop(),ge=this.tokenStack.pop();if(ge)ge[0].type!==A.type&&(R?R.call(this,A,ge[0]):(ge[1]||Op).call(this,A,ge[0]));else throw new Error("Cannot close `"+A.type+"` ("+_i({start:A.start,end:A.end})+"): it’s not open");return G.position.end=vn(A.end),G}function p(){return d2(this.stack.pop())}function f(){o("expectingFirstListItemValue",!0)}function k(A){if(l("expectingFirstListItemValue")){const R=this.stack[this.stack.length-2];R.start=Number.parseInt(this.sliceSerialize(A),10),o("expectingFirstListItemValue")}}function w(){const A=this.resume(),R=this.stack[this.stack.length-1];R.lang=A}function C(){const A=this.resume(),R=this.stack[this.stack.length-1];R.meta=A}function h(){l("flowCodeInside")||(this.buffer(),o("flowCodeInside",!0))}function m(){const A=this.resume(),R=this.stack[this.stack.length-1];R.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),o("flowCodeInside")}function y(){const A=this.resume(),R=this.stack[this.stack.length-1];R.value=A.replace(/(\r?\n|\r)$/g,"")}function E(A){const R=this.resume(),G=this.stack[this.stack.length-1];G.label=R,G.identifier=Mr(this.sliceSerialize(A)).toLowerCase()}function P(){const A=this.resume(),R=this.stack[this.stack.length-1];R.title=A}function S(){const A=this.resume(),R=this.stack[this.stack.length-1];R.url=A}function F(A){const R=this.stack[this.stack.length-1];if(!R.depth){const G=this.sliceSerialize(A).length;R.depth=G}}function O(){o("setextHeadingSlurpLineEnding",!0)}function H(A){const R=this.stack[this.stack.length-1];R.depth=this.sliceSerialize(A).charCodeAt(0)===61?1:2}function V(){o("setextHeadingSlurpLineEnding")}function j(A){const R=this.stack[this.stack.length-1];let G=R.children[R.children.length-1];(!G||G.type!=="text")&&(G=be(),G.position={start:vn(A.start)},R.children.push(G)),this.stack.push(G)}function $(A){const R=this.stack.pop();R.value+=this.sliceSerialize(A),R.position.end=vn(A.end)}function J(A){const R=this.stack[this.stack.length-1];if(l("atHardBreak")){const G=R.children[R.children.length-1];G.position.end=vn(A.end),o("atHardBreak");return}!l("setextHeadingSlurpLineEnding")&&t.canContainEols.includes(R.type)&&(j.call(this,A),$.call(this,A))}function oe(){o("atHardBreak",!0)}function Q(){const A=this.resume(),R=this.stack[this.stack.length-1];R.value=A}function xe(){const A=this.resume(),R=this.stack[this.stack.length-1];R.value=A}function ae(){const A=this.resume(),R=this.stack[this.stack.length-1];R.value=A}function L(){const A=this.stack[this.stack.length-1];if(l("inReference")){const R=l("referenceType")||"shortcut";A.type+="Reference",A.referenceType=R,delete A.url,delete A.title}else delete A.identifier,delete A.label;o("referenceType")}function W(){const A=this.stack[this.stack.length-1];if(l("inReference")){const R=l("referenceType")||"shortcut";A.type+="Reference",A.referenceType=R,delete A.url,delete A.title}else delete A.identifier,delete A.label;o("referenceType")}function x(A){const R=this.sliceSerialize(A),G=this.stack[this.stack.length-2];G.label=cC(R),G.identifier=Mr(R).toLowerCase()}function ne(){const A=this.stack[this.stack.length-1],R=this.resume(),G=this.stack[this.stack.length-1];if(o("inReference",!0),G.type==="link"){const ge=A.children;G.children=ge}else G.alt=R}function N(){const A=this.resume(),R=this.stack[this.stack.length-1];R.url=A}function g(){const A=this.resume(),R=this.stack[this.stack.length-1];R.title=A}function B(){o("inReference")}function Y(){o("referenceType","collapsed")}function T(A){const R=this.resume(),G=this.stack[this.stack.length-1];G.label=R,G.identifier=Mr(this.sliceSerialize(A)).toLowerCase(),o("referenceType","full")}function ee(A){o("characterReferenceType",A.type)}function M(A){const R=this.sliceSerialize(A),G=l("characterReferenceType");let ge;G?(ge=uy(R,G==="characterReferenceMarkerNumeric"?10:16),o("characterReferenceType")):ge=sd(R);const ye=this.stack.pop();ye.value+=ge,ye.position.end=vn(A.end)}function fe(A){$.call(this,A);const R=this.stack[this.stack.length-1];R.url=this.sliceSerialize(A)}function re(A){$.call(this,A);const R=this.stack[this.stack.length-1];R.url="mailto:"+this.sliceSerialize(A)}function ue(){return{type:"blockquote",children:[]}}function X(){return{type:"code",lang:null,meta:null,value:""}}function Be(){return{type:"inlineCode",value:""}}function qe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function le(){return{type:"emphasis",children:[]}}function je(){return{type:"heading",depth:void 0,children:[]}}function se(){return{type:"break"}}function Le(){return{type:"html",value:""}}function Vn(){return{type:"image",title:null,url:"",alt:null}}function Ne(){return{type:"link",title:null,url:"",children:[]}}function Wn(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function Yn(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function pt(){return{type:"paragraph",children:[]}}function q(){return{type:"strong",children:[]}}function be(){return{type:"text",value:""}}function ni(){return{type:"thematicBreak"}}}function vn(e){return{line:e.line,column:e.column,offset:e.offset}}function cy(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?cy(e,r):hC(e,r)}}function hC(e,t){let n;for(n in t)if(sy.call(t,n)){if(n==="canContainEols"){const r=t[n];r&&e[n].push(...r)}else if(n==="transforms"){const r=t[n];r&&e[n].push(...r)}else if(n==="enter"||n==="exit"){const r=t[n];r&&Object.assign(e[n],r)}}}function Op(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+_i({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is still open")}function mC(e){Object.assign(this,{Parser:n=>{const r=this.data("settings");return fC(n,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}function gC(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function yC(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function vC(e,t){const n=t.value?t.value+`
`:"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=["language-"+r]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function xC(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wC(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ei(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&vt(e.charCodeAt(n+1))&&vt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function dy(e,t){const n=String(t.identifier).toUpperCase(),r=ei(n.toLowerCase()),i=e.footnoteOrder.indexOf(n);let o;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,o=e.footnoteOrder.length):(e.footnoteCounts[n]++,o=i+1);const l=e.footnoteCounts[n],a={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,a);const u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function kC(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:t.children}],position:t.position},dy(e,{type:"footnoteReference",identifier:i,position:t.position})}function SC(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function CC(e,t){if(e.dangerous){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}return null}function fy(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return{type:"text",value:"!["+t.alt+r};const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function EC(e,t){const n=e.definition(t.identifier);if(!n)return fy(e,t);const r={src:ei(n.url||""),alt:t.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,i),e.applyData(t,i)}function TC(e,t){const n={src:ei(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function bC(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function PC(e,t){const n=e.definition(t.identifier);if(!n)return fy(e,t);const r={href:ei(n.url||"")};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function AC(e,t){const n={href:ei(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function FC(e,t,n){const r=e.all(t),i=n?zC(n):py(t),o={},l=[];if(typeof t.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const c=r[a];(i||a!==0||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?l.push(...c.children):l.push(c)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,s),e.applyData(t,s)}function zC(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=py(n[r])}return t}function py(e){const t=e.spread;return t??e.children.length>1}function OC(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function _C(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function RC(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function IC(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const dd=hy("start"),fd=hy("end");function LC(e){return{start:dd(e),end:fd(e)}}function hy(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function NC(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=dd(t.children[1]),u=fd(t.children[t.children.length-1]);a.line&&u.line&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function MC(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const s=[];for(;++u<a;){const d=t.children[u],p={},f=l?l[u]:void 0;f&&(p.align=f);let k={type:"element",tagName:o,properties:p,children:[]};d&&(k.children=e.all(d),e.patch(d,k),k=e.applyData(t,k)),s.push(k)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}function DC(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const _p=9,Rp=32;function $C(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Ip(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Ip(t.slice(i),i>0,!1)),o.join("")}function Ip(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===_p||o===Rp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===_p||o===Rp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function BC(e,t){const n={type:"text",value:$C(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function jC(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const UC={blockquote:gC,break:yC,code:vC,delete:xC,emphasis:wC,footnoteReference:dy,footnote:kC,heading:SC,html:CC,imageReference:EC,image:TC,inlineCode:bC,linkReference:PC,link:AC,listItem:FC,list:OC,paragraph:_C,root:RC,strong:IC,table:NC,tableCell:DC,tableRow:MC,text:BC,thematicBreak:jC,toml:Io,yaml:Io,definition:Io,footnoteDefinition:Io};function Io(){return null}const my=function(e){if(e==null)return YC;if(typeof e=="string")return WC(e);if(typeof e=="object")return Array.isArray(e)?HC(e):VC(e);if(typeof e=="function")return va(e);throw new Error("Expected function, string, or object as test")};function HC(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=my(e[n]);return va(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].call(this,...i))return!0;return!1}}function VC(e){return va(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function WC(e){return va(t);function t(n){return n&&n.type===e}}function va(e){return t;function t(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&e.call(this,n,...r))}}function YC(){return!0}const QC=!0,Lp=!1,GC="skip",KC=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null);const i=my(t),o=r?-1:1;l(e,void 0,[])();function l(a,u,s){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(a.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=[],f,k,w;if((!t||i(a,u,s[s.length-1]||null))&&(p=qC(n(a,s)),p[0]===Lp))return p;if(a.children&&p[0]!==GC)for(k=(r?a.children.length:-1)+o,w=s.concat(a);k>-1&&k<a.children.length;){if(f=l(a.children[k],k,w)(),f[0]===Lp)return f;k=typeof f[1]=="number"?f[1]:k+o}return p}}};function qC(e){return Array.isArray(e)?e:typeof e=="number"?[QC,e]:[e]}const pd=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null),KC(e,t,i,r);function i(o,l){const a=l[l.length-1];return n(o,a?a.children.indexOf(o):null,a)}};function XC(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const Np={}.hasOwnProperty;function ZC(e){const t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return pd(e,"definition",r=>{const i=Mp(r.identifier);i&&!Np.call(t,i)&&(t[i]=r)}),n;function n(r){const i=Mp(r);return i&&Np.call(t,i)?t[i]:null}}function Mp(e){return String(e||"").toUpperCase()}const Rl={}.hasOwnProperty;function JC(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={};return l.dangerous=r,l.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,l.footnoteLabel=n.footnoteLabel||"Footnotes",l.footnoteLabelTagName=n.footnoteLabelTagName||"h2",l.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},l.footnoteBackLabel=n.footnoteBackLabel||"Back to content",l.unknownHandler=n.unknownHandler,l.passThrough=n.passThrough,l.handlers={...UC,...n.handlers},l.definition=ZC(e),l.footnoteById=i,l.footnoteOrder=[],l.footnoteCounts={},l.patch=eE,l.applyData=tE,l.one=a,l.all=u,l.wrap=rE,l.augment=o,pd(e,"footnoteDefinition",s=>{const c=String(s.identifier).toUpperCase();Rl.call(i,c)||(i[c]=s)}),l;function o(s,c){if(s&&"data"in s&&s.data){const d=s.data;d.hName&&(c.type!=="element"&&(c={type:"element",tagName:"",properties:{},children:[]}),c.tagName=d.hName),c.type==="element"&&d.hProperties&&(c.properties={...c.properties,...d.hProperties}),"children"in c&&c.children&&d.hChildren&&(c.children=d.hChildren)}if(s){const d="type"in s?s:{position:s};XC(d)||(c.position={start:dd(d),end:fd(d)})}return c}function l(s,c,d,p){return Array.isArray(d)&&(p=d,d={}),o(s,{type:"element",tagName:c,properties:d||{},children:p||[]})}function a(s,c){return gy(l,s,c)}function u(s){return hd(l,s)}}function eE(e,t){e.position&&(t.position=LC(e))}function tE(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:[]}),n.type==="element"&&o&&(n.properties={...n.properties,...o}),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function gy(e,t,n){const r=t&&t.type;if(!r)throw new Error("Expected node, got `"+t+"`");return Rl.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?"children"in t?{...t,children:hd(e,t)}:t:e.unknownHandler?e.unknownHandler(e,t,n):nE(e,t)}function hd(e,t){const n=[];if("children"in t){const r=t.children;let i=-1;for(;++i<r.length;){const o=gy(e,r[i],t);if(o){if(i&&r[i-1].type==="break"&&(!Array.isArray(o)&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,"")),!Array.isArray(o)&&o.type==="element")){const l=o.children[0];l&&l.type==="text"&&(l.value=l.value.replace(/^\s+/,""))}Array.isArray(o)?n.push(...o):n.push(o)}}}return n}function nE(e,t){const n=t.data||{},r="value"in t&&!(Rl.call(n,"hProperties")||Rl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:hd(e,t)};return e.patch(t,r),e.applyData(t,r)}function rE(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function iE(e){const t=[];let n=-1;for(;++n<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;const i=e.all(r),o=String(r.identifier).toUpperCase(),l=ei(o.toLowerCase());let a=0;const u=[];for(;++a<=e.footnoteCounts[o];){const d={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+l+(a>1?"-"+a:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};a>1&&d.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(a)}]}),u.length>0&&u.push({type:"text",value:" "}),u.push(d)}const s=i[i.length-1];if(s&&s.type==="element"&&s.tagName==="p"){const d=s.children[s.children.length-1];d&&d.type==="text"?d.value+=" ":s.children.push({type:"text",value:" "}),s.children.push(...u)}else i.push(...u);const c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+l},children:e.wrap(i,!0)};e.patch(r,c),t.push(c)}if(t.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:`
`}]}}function yy(e,t){const n=JC(e,t),r=n.one(e,null),i=iE(n);return i&&r.children.push({type:"text",value:`
`},i),Array.isArray(r)?{type:"root",children:r}:r}const oE=function(e,t){return e&&"run"in e?aE(e,t):uE(e||t)},lE=oE;function aE(e,t){return(n,r,i)=>{e.run(yy(n,t),r,o=>{i(o)})}}function uE(e){return t=>yy(t,e)}var vy={exports:{}},sE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cE=sE,dE=cE;function xy(){}function wy(){}wy.resetWarningCache=xy;var fE=function(){function e(r,i,o,l,a,u){if(u!==dE){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wy,resetWarningCache:xy};return n.PropTypes=n,n};vy.exports=fE();var pE=vy.exports;const Z=en(pE);class co{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}co.prototype.property={};co.prototype.normal={};co.prototype.space=null;function ky(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new co(n,r,t)}function Ks(e){return e.toLowerCase()}class It{constructor(t,n){this.property=t,this.attribute=n}}It.prototype.space=null;It.prototype.boolean=!1;It.prototype.booleanish=!1;It.prototype.overloadedBoolean=!1;It.prototype.number=!1;It.prototype.commaSeparated=!1;It.prototype.spaceSeparated=!1;It.prototype.commaOrSpaceSeparated=!1;It.prototype.mustUseProperty=!1;It.prototype.defined=!1;let hE=0;const te=sr(),Me=sr(),Sy=sr(),I=sr(),we=sr(),Dr=sr(),mt=sr();function sr(){return 2**++hE}const qs=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Me,commaOrSpaceSeparated:mt,commaSeparated:Dr,number:I,overloadedBoolean:Sy,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),yu=Object.keys(qs);class md extends It{constructor(t,n,r,i){let o=-1;if(super(t,n),Dp(this,"space",i),typeof r=="number")for(;++o<yu.length;){const l=yu[o];Dp(this,yu[o],(r&qs[l])===qs[l])}}}md.prototype.defined=!0;function Dp(e,t,n){n&&(e[t]=n)}const mE={}.hasOwnProperty;function ti(e){const t={},n={};let r;for(r in e.properties)if(mE.call(e.properties,r)){const i=e.properties[r],o=new md(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ks(r)]=r,n[Ks(o.attribute)]=r}return new co(t,n,e.space)}const Cy=ti({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Ey=ti({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ty(e,t){return t in e?e[t]:t}function by(e,t){return Ty(e,t.toLowerCase())}const Py=ti({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:by,properties:{xmlns:null,xmlnsXLink:null}}),Ay=ti({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Me,ariaAutoComplete:null,ariaBusy:Me,ariaChecked:Me,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:Me,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:Me,ariaFlowTo:we,ariaGrabbed:Me,ariaHasPopup:null,ariaHidden:Me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:I,ariaLive:null,ariaModal:Me,ariaMultiLine:Me,ariaMultiSelectable:Me,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:Me,ariaReadOnly:Me,ariaRelevant:null,ariaRequired:Me,ariaRoleDescription:we,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:Me,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null}}),gE=ti({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:by,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Dr,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:we,autoFocus:te,autoPlay:te,blocking:we,capture:null,charSet:null,checked:te,cite:null,className:we,cols:I,colSpan:null,content:null,contentEditable:Me,controls:te,controlsList:we,coords:I|Dr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Sy,draggable:Me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:we,height:I,hidden:te,high:I,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:we,itemRef:we,itemScope:te,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:I,pattern:null,ping:we,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:we,required:te,reversed:te,rows:I,rowSpan:I,sandbox:we,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:Me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Me,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:Me,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:te,disableRemotePlayback:te,prefix:null,property:null,results:I,security:null,unselectable:null}}),yE=ti({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Ty,properties:{about:mt,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Dr,g2:Dr,glyphName:Dr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:mt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mt,rev:mt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mt,requiredFeatures:mt,requiredFonts:mt,requiredFormats:mt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:mt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mt,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),vE=/^data[-\w.:]+$/i,$p=/-[a-z]/g,xE=/[A-Z]/g;function wE(e,t){const n=Ks(t);let r=t,i=It;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&vE.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace($p,SE);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!$p.test(o)){let l=o.replace(xE,kE);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=md}return new i(r,t)}function kE(e){return"-"+e.toLowerCase()}function SE(e){return e.charAt(1).toUpperCase()}const Bp={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},CE=ky([Ey,Cy,Py,Ay,gE],"html"),EE=ky([Ey,Cy,Py,Ay,yE],"svg");function TE(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{pd(t,"element",(n,r,i)=>{const o=i;let l;if(e.allowedElements?l=!e.allowedElements.includes(n.tagName):e.disallowedElements&&(l=e.disallowedElements.includes(n.tagName)),!l&&e.allowElement&&typeof r=="number"&&(l=!e.allowElement(n,r,o)),l&&typeof r=="number")return e.unwrapDisallowed&&n.children?o.children.splice(r,1,...n.children):o.children.splice(r,1),r})}}var Fy={exports:{}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Symbol.for("react.element"),yd=Symbol.for("react.portal"),xa=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),Sa=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),bE=Symbol.for("react.server_context"),Ea=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),Aa=Symbol.for("react.lazy"),PE=Symbol.for("react.offscreen"),zy;zy=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gd:switch(e=e.type,e){case xa:case ka:case wa:case Ta:case ba:return e;default:switch(e=e&&e.$$typeof,e){case bE:case Ca:case Ea:case Aa:case Pa:case Sa:return e;default:return t}}case yd:return t}}}me.ContextConsumer=Ca;me.ContextProvider=Sa;me.Element=gd;me.ForwardRef=Ea;me.Fragment=xa;me.Lazy=Aa;me.Memo=Pa;me.Portal=yd;me.Profiler=ka;me.StrictMode=wa;me.Suspense=Ta;me.SuspenseList=ba;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return Lt(e)===Ca};me.isContextProvider=function(e){return Lt(e)===Sa};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gd};me.isForwardRef=function(e){return Lt(e)===Ea};me.isFragment=function(e){return Lt(e)===xa};me.isLazy=function(e){return Lt(e)===Aa};me.isMemo=function(e){return Lt(e)===Pa};me.isPortal=function(e){return Lt(e)===yd};me.isProfiler=function(e){return Lt(e)===ka};me.isStrictMode=function(e){return Lt(e)===wa};me.isSuspense=function(e){return Lt(e)===Ta};me.isSuspenseList=function(e){return Lt(e)===ba};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xa||e===ka||e===wa||e===Ta||e===ba||e===PE||typeof e=="object"&&e!==null&&(e.$$typeof===Aa||e.$$typeof===Pa||e.$$typeof===Sa||e.$$typeof===Ca||e.$$typeof===Ea||e.$$typeof===zy||e.getModuleId!==void 0)};me.typeOf=Lt;Fy.exports=me;var AE=Fy.exports;const FE=en(AE);function zE(e){const t=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof t=="string"&&t.replace(/[ \t\n\f\r]/g,"")===""}function OE(e){return e.join(" ").trim()}function _E(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var vd={exports:{}},jp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,RE=/\n/g,IE=/^\s*/,LE=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,NE=/^:\s*/,ME=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,DE=/^[;\s]*/,$E=/^\s+|\s+$/g,BE=`
`,Up="/",Hp="*",Kn="",jE="comment",UE="declaration",HE=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(k){var w=k.match(RE);w&&(n+=w.length);var C=k.lastIndexOf(BE);r=~C?k.length-C:r+k.length}function o(){var k={line:n,column:r};return function(w){return w.position=new l(k),s(),w}}function l(k){this.start=k,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(k){var w=new Error(t.source+":"+n+":"+r+": "+k);if(w.reason=k,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function u(k){var w=k.exec(e);if(w){var C=w[0];return i(C),e=e.slice(C.length),w}}function s(){u(IE)}function c(k){var w;for(k=k||[];w=d();)w!==!1&&k.push(w);return k}function d(){var k=o();if(!(Up!=e.charAt(0)||Hp!=e.charAt(1))){for(var w=2;Kn!=e.charAt(w)&&(Hp!=e.charAt(w)||Up!=e.charAt(w+1));)++w;if(w+=2,Kn===e.charAt(w-1))return a("End of comment missing");var C=e.slice(2,w-2);return r+=2,i(C),e=e.slice(w),r+=2,k({type:jE,comment:C})}}function p(){var k=o(),w=u(LE);if(w){if(d(),!u(NE))return a("property missing ':'");var C=u(ME),h=k({type:UE,property:Vp(w[0].replace(jp,Kn)),value:C?Vp(C[0].replace(jp,Kn)):Kn});return u(DE),h}}function f(){var k=[];c(k);for(var w;w=p();)w!==!1&&(k.push(w),c(k));return k}return s(),f()};function Vp(e){return e?e.replace($E,Kn):Kn}var VE=HE;function Oy(e,t){var n=null;if(!e||typeof e!="string")return n;for(var r,i=VE(e),o=typeof t=="function",l,a,u=0,s=i.length;u<s;u++)r=i[u],l=r.property,a=r.value,o?t(l,a,r):a&&(n||(n={}),n[l]=a);return n}vd.exports=Oy;vd.exports.default=Oy;var WE=vd.exports;const YE=en(WE),Xs={}.hasOwnProperty,QE=new Set(["table","thead","tbody","tfoot","tr"]);function _y(e,t){const n=[];let r=-1,i;for(;++r<t.children.length;)i=t.children[r],i.type==="element"?n.push(GE(e,i,r,t)):i.type==="text"?(t.type!=="element"||!QE.has(t.tagName)||!zE(i))&&n.push(i.value):i.type==="raw"&&!e.options.skipHtml&&n.push(i.value);return n}function GE(e,t,n,r){const i=e.options,o=i.transformLinkUri===void 0?Vk:i.transformLinkUri,l=e.schema,a=t.tagName,u={};let s=l,c;if(l.space==="html"&&a==="svg"&&(s=EE,e.schema=s),t.properties)for(c in t.properties)Xs.call(t.properties,c)&&qE(u,c,t.properties[c],e);(a==="ol"||a==="ul")&&e.listDepth++;const d=_y(e,t);(a==="ol"||a==="ul")&&e.listDepth--,e.schema=l;const p=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},f=i.components&&Xs.call(i.components,a)?i.components[a]:a,k=typeof f=="string"||f===$e.Fragment;if(!FE.isValidElementType(f))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(u.key=n,a==="a"&&i.linkTarget&&(u.target=typeof i.linkTarget=="function"?i.linkTarget(String(u.href||""),t.children,typeof u.title=="string"?u.title:null):i.linkTarget),a==="a"&&o&&(u.href=o(String(u.href||""),t.children,typeof u.title=="string"?u.title:null)),!k&&a==="code"&&r.type==="element"&&r.tagName!=="pre"&&(u.inline=!0),!k&&(a==="h1"||a==="h2"||a==="h3"||a==="h4"||a==="h5"||a==="h6")&&(u.level=Number.parseInt(a.charAt(1),10)),a==="img"&&i.transformImageUri&&(u.src=i.transformImageUri(String(u.src||""),String(u.alt||""),typeof u.title=="string"?u.title:null)),!k&&a==="li"&&r.type==="element"){const w=KE(t);u.checked=w&&w.properties?!!w.properties.checked:null,u.index=vu(r,t),u.ordered=r.tagName==="ol"}return!k&&(a==="ol"||a==="ul")&&(u.ordered=a==="ol",u.depth=e.listDepth),(a==="td"||a==="th")&&(u.align&&(u.style||(u.style={}),u.style.textAlign=u.align,delete u.align),k||(u.isHeader=a==="th")),!k&&a==="tr"&&r.type==="element"&&(u.isHeader=r.tagName==="thead"),i.sourcePos&&(u["data-sourcepos"]=JE(p)),!k&&i.rawSourcePos&&(u.sourcePosition=t.position),!k&&i.includeElementIndex&&(u.index=vu(r,t),u.siblingCount=vu(r)),k||(u.node=t),d.length>0?$e.createElement(f,u,d):$e.createElement(f,u)}function KE(e){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if(n.type==="element"&&n.tagName==="input")return n}return null}function vu(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type==="element"&&r++;return r}function qE(e,t,n,r){const i=wE(r.schema,t);let o=n;o==null||o!==o||(Array.isArray(o)&&(o=i.commaSeparated?_E(o):OE(o)),i.property==="style"&&typeof o=="string"&&(o=XE(o)),i.space&&i.property?e[Xs.call(Bp,i.property)?Bp[i.property]:i.property]=o:i.attribute&&(e[i.attribute]=o))}function XE(e){const t={};try{YE(e,n)}catch{}return t;function n(r,i){const o=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;t[o.replace(/-([a-z])/g,ZE)]=i}}function ZE(e,t){return t.toUpperCase()}function JE(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}const Wp={}.hasOwnProperty,e5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Lo={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function Ry(e){for(const o in Lo)if(Wp.call(Lo,o)&&Wp.call(e,o)){const l=Lo[o];console.warn(`[react-markdown] Warning: please ${l.to?`use \`${l.to}\` instead of`:"remove"} \`${o}\` (see <${e5}#${l.id}> for more info)`),delete Lo[o]}const t=l2().use(mC).use(e.remarkPlugins||[]).use(lE,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(TE,e),n=new Gg;typeof e.children=="string"?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=t.runSync(t.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let i=$e.createElement($e.Fragment,{},_y({options:e,schema:CE,listDepth:0},r));return e.className&&(i=$e.createElement("div",{className:e.className},i)),i}Ry.propTypes={children:Z.string,className:Z.string,allowElement:Z.func,allowedElements:Z.arrayOf(Z.string),disallowedElements:Z.arrayOf(Z.string),unwrapDisallowed:Z.bool,remarkPlugins:Z.arrayOf(Z.oneOfType([Z.object,Z.func,Z.arrayOf(Z.oneOfType([Z.bool,Z.string,Z.object,Z.func,Z.arrayOf(Z.any)]))])),rehypePlugins:Z.arrayOf(Z.oneOfType([Z.object,Z.func,Z.arrayOf(Z.oneOfType([Z.bool,Z.string,Z.object,Z.func,Z.arrayOf(Z.any)]))])),sourcePos:Z.bool,rawSourcePos:Z.bool,skipHtml:Z.bool,includeElementIndex:Z.bool,transformLinkUri:Z.oneOfType([Z.func,Z.bool]),linkTarget:Z.oneOfType([Z.func,Z.string]),transformImageUri:Z.func,components:Z.object};const t5=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,n5=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`,r5=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,i5=b(ft)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`,o5=b.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-block;
`,l5=b.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,a5=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #e2e8f0;
`,xu=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,u5=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    color: #e2e8f0;
    font-size: 0.875rem;
  }
`,s5=b.div`
  display: flex;
  gap: 0.75rem;
`,wu=b.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,c5=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,d5=b.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,f5=b.div`
  line-height: 1.7;
  color: #374151;
  
  h1, h2, h3, h4, h5, h6 {
    color: #1a1a1a;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h1 {
    font-size: 2rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  blockquote {
    border-left: 4px solid #0A84FF;
    padding-left: 1.5rem;
    margin: 2rem 0;
    color: #64748b;
    font-style: italic;
    background: #f8fafc;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
  }
  
  code {
    background: #f8fafc;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    color: #e53e3e;
  }
  
  pre {
    background: #1a1a1a;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
    
    code {
      background: none;
      color: inherit;
      padding: 0;
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      border: 1px solid #e2e8f0;
      padding: 0.75rem;
      text-align: left;
    }
    
    th {
      background: #f8fafc;
      font-weight: 600;
    }
  }
  
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }
  
  a {
    color: #0A84FF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,p5=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`,h5=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,m5=b.section`
  background: #f8fafc;
  padding: 3rem 0;
`,g5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,y5=b.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #1a1a1a;
`,v5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,x5=b(ft)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,w5=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,k5=b.div`
  padding: 1.5rem;
`,S5=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`,C5=b.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`,E5=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
`;function T5(){const{id:e}=hg(),t=Gr.find(o=>o.id===parseInt(e));if(!t)return v(vg,{to:"/blog",replace:!0});const n=Gr.filter(o=>o.category===t.category&&o.id!==t.id).slice(0,3),r=window.location.href,i=t.title;return z(t5,{children:[v(uo,{title:`${t.title} - CryptoBlog`,description:t.excerpt,url:`https://example.com/post/${t.id}`,image:t.image||"/social-banner.png",type:"article",publishedTime:t.date,authorName:t.author}),v(n5,{children:z(r5,{children:[z(i5,{to:"/blog",children:[v(Mg,{size:20}),"Back to Blog"]}),v(o5,{children:t.category}),v(l5,{children:t.title}),z(a5,{children:[z(xu,{children:[v(Ir,{size:16}),t.author]}),z(xu,{children:[v(hw,{size:16}),new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),z(xu,{children:[v(eo,{size:16}),t.readTime," read"]})]}),z(u5,{children:[v("span",{children:"Share this article:"}),z(s5,{children:[v(wu,{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(i)}&url=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:v(Oi,{size:18})}),v(wu,{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:v(gw,{size:18})}),v(wu,{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:v(Xo,{size:18})})]})]})]})}),z(c5,{children:[v(d5,{children:v(f5,{children:v(Ry,{children:t.content})})}),v(p5,{children:t.tags.map(o=>z(h5,{children:[v(Sw,{size:14}),o]},o))})]}),n.length>0&&v(m5,{children:z(g5,{children:[v(y5,{children:"Related Articles"}),v(v5,{children:n.map(o=>z(x5,{to:`/post/${o.id}`,children:[v(w5,{children:o.category==="Analysis"?"📈":o.category==="Guide"?"📖":o.category==="Security"?"🛡️":o.category==="Technology"?"⚙️":o.category==="NFTs"?"🎨":"₿"}),z(k5,{children:[v(S5,{children:o.category}),v(C5,{children:o.title}),z(E5,{children:[o.excerpt.substring(0,120),"..."]})]})]},o.id))})]})})]})}const b5=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,P5=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
`,A5=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,F5=b.div`
  margin: 0 auto 2rem;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,z5=b.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,O5=b.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  line-height: 1.6;
`,ku=b.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: #f8fafc;
  }
`,No=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Su=b.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
`,_5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,Cu=b.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,Eu=b.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,Tu=b.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`,bu=b.p`
  color: #64748b;
  line-height: 1.6;
`,R5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,Pu=b.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,Au=b.div`
  margin: 0 auto 1.5rem;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`,Fu=b.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`,zu=b.p`
  color: #0A84FF;
  font-weight: 500;
  margin-bottom: 1rem;
`,Ou=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,_u=b.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`,pr=b.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0A84FF;
    color: white;
    transform: translateY(-2px);
  }
`,I5=b.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 2rem;
  }
`,L5=b.section`
  background: #1a1a1a;
  color: white;
  padding: 5rem 0;
  text-align: center;
`,N5=b.div`
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #e2e8f0;
    margin-bottom: 2rem;
  }
`,M5=b.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,D5=b(ft)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(10, 132, 255, 0.3);
  }
`,$5=b.a`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;function B5(){return z(b5,{children:[v(uo,{title:"About CryptoBlog - Mission and Team",description:"We provide trustworthy cryptocurrency news, analysis, and education for all levels.",url:"https://example.com/about",image:"/social-banner.png",type:"website"}),v(P5,{children:z(A5,{children:[v(F5,{children:v(Ol,{size:50})}),v(z5,{children:"About CryptoBlog"}),v(O5,{children:"We're passionate about making cryptocurrency accessible, understandable, and profitable for everyone. Our mission is to educate, inform, and empower the next generation of crypto enthusiasts."})]})}),v(ku,{children:z(No,{children:[z(Su,{children:[v("h2",{children:"Our Mission"}),v("p",{children:"Democratizing cryptocurrency knowledge through high-quality, accessible content and expert insights."})]}),z(_5,{children:[z(Cu,{children:[v(Eu,{children:v(Cw,{size:40})}),v(Tu,{children:"Educate"}),v(bu,{children:"We provide comprehensive guides and tutorials to help newcomers understand the complexities of cryptocurrency and blockchain technology."})]}),z(Cu,{children:[v(Eu,{children:v(_l,{size:40})}),v(Tu,{children:"Protect"}),v(bu,{children:"Security is paramount in crypto. We share best practices and safety measures to help you protect your digital assets."})]}),z(Cu,{children:[v(Eu,{children:v(Ew,{size:40})}),v(Tu,{children:"Community"}),v(bu,{children:"Building a supportive community of crypto enthusiasts who share knowledge, insights, and experiences together."})]})]})]})}),v(ku,{children:v(No,{children:z(I5,{children:[z(Su,{children:[v("h2",{children:"Our Story"}),v("p",{children:"How we became passionate advocates for cryptocurrency education and adoption."})]}),v("p",{children:"Founded in 2023, CryptoBlog emerged from a simple realization: the cryptocurrency space was full of complex information but lacked accessible, trustworthy educational content for everyday people."}),v("p",{children:"Our team of crypto experts, financial analysts, and blockchain developers came together with a shared vision: to bridge the knowledge gap between crypto complexity and public understanding. We believe that everyone deserves access to clear, accurate, and actionable cryptocurrency information."}),v("p",{children:"Today, we're proud to serve thousands of readers monthly, helping them navigate the exciting world of digital assets with confidence and security."})]})})}),v(ku,{children:z(No,{children:[z(Su,{children:[v("h2",{children:"Meet Our Team"}),v("p",{children:"Passionate crypto experts dedicated to bringing you the best insights and analysis."})]}),z(R5,{children:[z(Pu,{children:[v(Au,{children:"AT"}),v(Fu,{children:"Alex Thompson"}),v(zu,{children:"Lead Analyst"}),v(Ou,{children:"Former Wall Street analyst with 8+ years in traditional finance and 5 years in crypto. Specializes in technical analysis and market predictions."}),z(_u,{children:[v(pr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:v(Oi,{size:16})}),v(pr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:v(Xo,{size:16})})]})]}),z(Pu,{children:[v(Au,{children:"SC"}),v(Fu,{children:"Sarah Chen"}),v(zu,{children:"DeFi Specialist"}),v(Ou,{children:"Blockchain developer turned educator with deep expertise in DeFi protocols, smart contracts, and yield farming strategies."}),z(_u,{children:[v(pr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:v(Oi,{size:16})}),v(pr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:v(Xo,{size:16})})]})]}),z(Pu,{children:[v(Au,{children:"MR"}),v(Fu,{children:"Mike Rodriguez"}),v(zu,{children:"Security Expert"}),v(Ou,{children:"Cybersecurity professional focused on crypto security, wallet safety, and protecting digital assets from threats and scams."}),z(_u,{children:[v(pr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:v(Oi,{size:16})}),v(pr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:v(Xo,{size:16})})]})]})]})]})}),v(L5,{children:v(No,{children:z(N5,{children:[v("h2",{children:"Join Our Journey"}),v("p",{children:"Ready to dive deeper into the world of cryptocurrency? Explore our latest articles or get in touch with our team."}),z(M5,{children:[z(D5,{to:"/blog",children:["Read Our Blog",v(Ms,{size:20})]}),z($5,{href:"mailto:contact@cryptoblog.com",children:[v(Dg,{size:20}),"Contact Us"]})]})]})})})]})}const j5=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,U5=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`,H5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,V5=b(ft)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`,W5=b.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`,Y5=b.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Q5=b.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 600px;
  margin: 0 auto;
`,G5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,K5=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,q5=b(ft)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,X5=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`,Z5=b.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,J5=b.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  line-height: 1.4;
`,e4=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`,t4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`,Yp=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,n4=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`,r4=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`,i4=b.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,o4=b(ft)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`,l4=b.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  text-align: center;
`,a4={Analysis:{icon:v(bn,{size:40}),description:"In-depth market analysis, price predictions, and technical insights to help you understand crypto trends."},Guide:{icon:v(Ds,{size:40}),description:"Step-by-step tutorials and comprehensive guides to help you navigate the crypto ecosystem."},Security:{icon:v(_l,{size:40}),description:"Essential security practices and tips to protect your crypto assets and stay safe in DeFi."},Technology:{icon:v(mw,{size:40}),description:"Exploring the latest blockchain technologies, protocols, and innovations shaping the future."},NFTs:{icon:v(ww,{size:40}),description:"Everything about Non-Fungible Tokens, from art and collectibles to utility and market trends."},DeFi:{icon:v(bn,{size:40}),description:"Decentralized Finance protocols, yield farming, liquidity mining, and DeFi strategies."},Trading:{icon:v(bn,{size:40}),description:"Trading strategies, market analysis, and insights for both beginners and experienced traders."},News:{icon:v(bn,{size:40}),description:"Latest cryptocurrency news, regulatory updates, and important developments in the industry."}};function u4(){const{category:e}=hg();if(!$g.includes(e)&&e!=="All")return v(vg,{to:"/blog",replace:!0});const t=Gr.filter(r=>r.category===e),n=a4[e]||{icon:v(bn,{size:40}),description:`Explore articles in the ${e} category.`};return z(j5,{children:[v(uo,{title:`${e} Articles - CryptoBlog`,description:`Explore the latest ${e} articles on CryptoBlog.`,url:`https://example.com/category/${encodeURIComponent(e)}`,image:"/social-banner.png",type:"website"}),v(U5,{children:z(H5,{children:[z(V5,{to:"/blog",children:[v(Mg,{size:20}),"Back to Blog"]}),v(W5,{children:n.icon}),v(Y5,{children:e}),v(Q5,{children:n.description})]})}),v(G5,{children:t.length>0?z(oh,{children:[z(l4,{children:[t.length," article",t.length!==1?"s":""," in ",e]}),v(K5,{children:t.map(r=>z(q5,{to:`/post/${r.id}`,children:[v(X5,{children:e==="Analysis"?"📈":e==="Guide"?"📖":e==="Security"?"🛡️":e==="Technology"?"⚙️":e==="NFTs"?"🎨":e==="DeFi"?"🏦":e==="Trading"?"💹":e==="News"?"📰":"₿"}),z(Z5,{children:[v(J5,{children:r.title}),v(e4,{children:r.excerpt}),z(t4,{children:[z(Yp,{children:[v(Ir,{size:14}),r.author]}),z(Yp,{children:[v(eo,{size:14}),r.readTime]})]}),v(n4,{children:r.tags.slice(0,3).map(i=>v(r4,{children:i},i))})]})]},r.id))})]}):z(i4,{children:[z("h3",{children:["No articles in ",e," yet"]}),v("p",{children:"We're working on adding more content to this category. Check back soon or explore other categories."}),v(o4,{to:"/blog",children:"Browse All Articles"})]})})]})}const s4=b.nav`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,c4=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,d4=b(ft)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #0A84FF;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  
  &:hover {
    color: #0056d3;
  }
`,f4=b.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"flex":"none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,gi=b(ft)`
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: #0A84FF;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0A84FF, #FF5A5F);
    transition: width 0.2s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,p4=b.button`
  display: none;
  background: none;
  border: none;
  color: #e2e8f0;
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #0A84FF;
  }
`,h4=b.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;function m4(){const[e,t]=D.useState(!1),n=()=>{t(!e)},r=()=>{t(!1)};return v(s4,{children:z(c4,{children:[z(d4,{to:"/",children:[v(Ol,{size:28}),"CryptoBlog"]}),z(f4,{isOpen:e,children:[v(gi,{to:"/",onClick:r,children:"Home"}),v(gi,{to:"/blog",onClick:r,children:"Blog"}),v(gi,{to:"/category/Analysis",onClick:r,children:"Analysis"}),v(gi,{to:"/category/Guide",onClick:r,children:"Guides"}),v(gi,{to:"/about",onClick:r,children:"About"}),v(h4,{onClick:r,children:"Subscribe"})]}),v(p4,{onClick:n,children:e?v(Tw,{size:24}):v(xw,{size:24})})]})})}const g4=b.footer`
  background: #1a1a1a;
  color: #e2e8f0;
  padding: 3rem 0 1rem;
  margin-top: auto;
`,y4=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,v4=b.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Mo=b.div`
  h3 {
    color: #0A84FF;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`,Ru=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ht=b(ft)`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0A84FF;
  }
`,x4=b.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Iu=b.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(10, 132, 255, 0.1);
  border-radius: 8px;
  color: #0A84FF;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0A84FF;
    color: white;
    transform: translateY(-2px);
  }
`,w4=b.div`
  background: rgba(10, 132, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h3 {
    color: #0A84FF;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #94a3b8;
    margin-bottom: 1rem;
  }
`,k4=b.form`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,S4=b.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #0A84FF;
    box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
  }
`,C4=b.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`,E4=b.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,Qp=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0A84FF;
  font-size: 1.25rem;
  font-weight: 700;
`,T4=b.p`
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;function b4(){return v(g4,{children:z(y4,{children:[z(w4,{children:[v("h3",{children:"Stay Updated"}),v("p",{children:"Get the latest crypto insights delivered to your inbox weekly."}),z(k4,{onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing! (This is a demo)")},children:[v(S4,{type:"email",placeholder:"Enter your email",required:!0}),v(C4,{type:"submit",children:"Subscribe"})]})]}),z(v4,{children:[z(Mo,{children:[z(Qp,{children:[v(Ol,{size:24}),"CryptoBlog"]}),v("p",{children:"Your trusted source for cryptocurrency news, analysis, and insights. We cover everything from Bitcoin and Ethereum to DeFi and NFTs."}),z(x4,{children:[v(Iu,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:v(Oi,{size:18})}),v(Iu,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:v(yw,{size:18})}),v(Iu,{href:"mailto:contact@cryptoblog.com",children:v(Dg,{size:18})})]})]}),z(Mo,{children:[v("h3",{children:"Content"}),z(Ru,{children:[v(ht,{to:"/blog",children:"All Posts"}),v(ht,{to:"/category/Analysis",children:"Analysis"}),v(ht,{to:"/category/Guide",children:"Guides"}),v(ht,{to:"/category/Security",children:"Security"}),v(ht,{to:"/category/DeFi",children:"DeFi"})]})]}),z(Mo,{children:[v("h3",{children:"Resources"}),z(Ru,{children:[v(ht,{to:"/about",children:"About Us"}),v(ht,{to:"/privacy",children:"Privacy Policy"}),v(ht,{to:"/terms",children:"Terms of Service"}),v(ht,{to:"/contact",children:"Contact"})]})]}),z(Mo,{children:[v("h3",{children:"Categories"}),z(Ru,{children:[v(ht,{to:"/category/Bitcoin",children:"Bitcoin"}),v(ht,{to:"/category/Ethereum",children:"Ethereum"}),v(ht,{to:"/category/NFTs",children:"NFTs"}),v(ht,{to:"/category/Trading",children:"Trading"})]})]})]}),z(E4,{children:[z(T4,{children:["© 2024 CryptoBlog. Made with ",v(vw,{size:16,color:"#FF5A5F"})," for the crypto community."]}),z(Qp,{children:[v(Ol,{size:20}),"CryptoBlog"]})]})]})})}const P4=cw`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
    color: #1a1a1a;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #0A84FF;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0056d3;
    }
  }

  button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (max-width: 1200px) {
      padding: 0 2rem;
    }
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
    color: white;
    border: none;

    &:hover {
      background: linear-gradient(135deg, #0056d3 0%, #003d99 100%);
    }
  }

  .btn-secondary {
    background: white;
    color: #0A84FF;
    border: 2px solid #0A84FF;

    &:hover {
      background: #0A84FF;
      color: white;
    }
  }

  .text-gradient {
    background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 50%, #FFD600 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  /* Code syntax highlighting */
  pre {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
  }

  code {
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
  }

  /* Markdown content styling */
  .markdown-content {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }

    li {
      margin: 0.5rem 0;
    }

    blockquote {
      border-left: 4px solid #0A84FF;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #666;
      font-style: italic;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }

    th, td {
      border: 1px solid #e1e5e9;
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background: #f8f9fa;
      font-weight: 600;
    }
  }
`;function A4(){return z(lx,{children:[v(P4,{}),v(m4,{}),z(Jv,{children:[v(hr,{path:"/",element:v(kk,{})}),v(hr,{path:"/blog",element:v(Hk,{})}),v(hr,{path:"/post/:id",element:v(T5,{})}),v(hr,{path:"/category/:category",element:v(u4,{})}),v(hr,{path:"/about",element:v(B5,{})})]}),v(b4,{})]})}const F4=Nu.createRoot(document.getElementById("root"));F4.render(v(Yg,{children:v(A4,{})}));
