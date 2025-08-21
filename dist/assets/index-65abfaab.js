function ny(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function or(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ep={exports:{}},kl={},Pp={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=Symbol.for("react.element"),ry=Symbol.for("react.portal"),iy=Symbol.for("react.fragment"),oy=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),uy=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),cy=Symbol.for("react.suspense"),dy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),Jc=Symbol.iterator;function py(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Ap={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fp(){}Fp.prototype=Vr.prototype;function _s(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}var Is=_s.prototype=new Fp;Is.constructor=_s;Tp(Is,Vr.prototype);Is.isPureReactComponent=!0;var ed=Array.isArray,zp=Object.prototype.hasOwnProperty,Os={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)zp.call(t,r)&&!Rp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yi,type:e,key:o,ref:l,props:i,_owner:Os.current}}function hy(e,t){return{$$typeof:Yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yi}function my(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?my(""+e.key):t.toString(36)}function To(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yi:case ry:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ya(l,0):r,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),To(i,t,n,"",function(s){return s})):i!=null&&(Ls(i)&&(i=hy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ed(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+ya(o,a);l+=To(o,t,n,u,i)}else if(u=py(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+ya(o,a++),l+=To(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},Ao={transition:null},yy={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Os};function Ip(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Vr;ie.Fragment=iy;ie.Profiler=ly;ie.PureComponent=_s;ie.StrictMode=oy;ie.Suspense=cy;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;ie.act=Ip;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Os.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)zp.call(t,u)&&!Rp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Yi,type:e.type,key:i,ref:o,props:r,_owner:l}};ie.createContext=function(e){return e={$$typeof:uy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ay,_context:e},e.Consumer=e};ie.createElement=_p;ie.createFactory=function(e){var t=_p.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:sy,render:e}};ie.isValidElement=Ls;ie.lazy=function(e){return{$$typeof:fy,_payload:{_status:-1,_result:e},_init:gy}};ie.memo=function(e,t){return{$$typeof:dy,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};ie.unstable_act=Ip;ie.useCallback=function(e,t){return nt.current.useCallback(e,t)};ie.useContext=function(e){return nt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return nt.current.useEffect(e,t)};ie.useId=function(){return nt.current.useId()};ie.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return nt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};ie.useRef=function(e){return nt.current.useRef(e)};ie.useState=function(e){return nt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return nt.current.useTransition()};ie.version="18.3.1";Pp.exports=ie;var D=Pp.exports;const vt=or(D),vy=ny({__proto__:null,default:vt},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=D,wy=Symbol.for("react.element"),ky=Symbol.for("react.fragment"),Sy=Object.prototype.hasOwnProperty,Cy=xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ey={key:!0,ref:!0,__self:!0,__source:!0};function Op(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Sy.call(t,r)&&!Ey.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wy,type:e,key:o,ref:l,props:i,_owner:Cy.current}}kl.Fragment=ky;kl.jsx=Op;kl.jsxs=Op;Ep.exports=kl;var Ns=Ep.exports;const Lp=Ns.Fragment,y=Ns.jsx,F=Ns.jsxs;var wu={},Np={exports:{}},kt={},Mp={exports:{}},Dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var x=L.length;L.push(W);e:for(;0<x;){var ne=x-1>>>1,N=L[ne];if(0<i(N,W))L[ne]=W,L[x]=N,x=ne;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],x=L.pop();if(x!==W){L[0]=x;e:for(var ne=0,N=L.length,g=N>>>1;ne<g;){var B=2*(ne+1)-1,Y=L[B],P=B+1,ee=L[P];if(0>i(Y,x))P<N&&0>i(ee,Y)?(L[ne]=ee,L[P]=x,ne=P):(L[ne]=Y,L[B]=x,ne=B);else if(P<N&&0>i(ee,x))L[ne]=ee,L[P]=x,ne=P;else break e}}return W}function i(L,W){var x=L.sortIndex-W.sortIndex;return x!==0?x:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],d=1,c=null,h=3,f=!1,k=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=n(s);W!==null;){if(W.callback===null)r(s);else if(W.startTime<=L)r(s),W.sortIndex=W.expirationTime,t(u,W);else break;W=n(s)}}function E(L){if(w=!1,v(L),!k)if(n(u)!==null)k=!0,xe(T);else{var W=n(s);W!==null&&ae(E,W.startTime-L)}}function T(L,W){k=!1,w&&(w=!1,p(R),R=-1),f=!0;var x=h;try{for(v(W),c=n(u);c!==null&&(!(c.expirationTime>W)||L&&!j());){var ne=c.callback;if(typeof ne=="function"){c.callback=null,h=c.priorityLevel;var N=ne(c.expirationTime<=W);W=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(u)&&r(u),v(W)}else r(u);c=n(u)}if(c!==null)var g=!0;else{var B=n(s);B!==null&&ae(E,B.startTime-W),g=!1}return g}finally{c=null,h=x,f=!1}}var S=!1,z=null,R=-1,H=5,V=-1;function j(){return!(e.unstable_now()-V<H)}function $(){if(z!==null){var L=e.unstable_now();V=L;var W=!0;try{W=z(!0,L)}finally{W?J():(S=!1,z=null)}}else S=!1}var J;if(typeof m=="function")J=function(){m($)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Q=oe.port2;oe.port1.onmessage=$,J=function(){Q.postMessage(null)}}else J=function(){C($,0)};function xe(L){z=L,S||(S=!0,J())}function ae(L,W){R=C(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||f||(k=!0,xe(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var x=h;h=W;try{return L()}finally{h=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var x=h;h=L;try{return W()}finally{h=x}},e.unstable_scheduleCallback=function(L,W,x){var ne=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?ne+x:ne):x=ne,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=x+N,L={id:d++,callback:W,priorityLevel:L,startTime:x,expirationTime:N,sortIndex:-1},x>ne?(L.sortIndex=x,t(s,L),n(u)===null&&L===n(s)&&(w?(p(R),R=-1):w=!0,ae(E,x-ne))):(L.sortIndex=N,t(u,L),k||f||(k=!0,xe(T))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var W=h;return function(){var x=h;h=W;try{return L.apply(this,arguments)}finally{h=x}}}})(Dp);Mp.exports=Dp;var Py=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=D,wt=Py;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $p=new Set,Pi={};function lr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Pi[e]=t,e=0;e<t.length;e++)$p.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function Ay(e){return ku.call(rd,e)?!0:ku.call(nd,e)?!1:Ty.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function Fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zy(e,t,n,r){if(t===null||typeof t>"u"||Fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ms=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);Ge[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);Ge[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ms,Ds);Ge[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zy(t,n,i,r)&&(n=null),r||i===null?Ay(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),pr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Up=Symbol.for("react.offscreen"),id=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,va;function ui(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var xa=!1;function wa(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function Ry(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=wa(e.type,!1),e;case 11:return e=wa(e.type.render,!1),e;case 1:return e=wa(e.type,!0),e;default:return""}}function Pu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case pr:return"Portal";case Su:return"Profiler";case Bs:return"StrictMode";case Cu:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jp:return(e.displayName||"Context")+".Consumer";case Bp:return(e._context.displayName||"Context")+".Provider";case js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:Pu(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Pu(e(t))}catch{}}return null}function _y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iy(e){var t=Hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Iy(e))}function Vp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function Tu(e,t){Wp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(si(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Yp(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,Gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Oy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Kp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function qp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ly=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(e,t){if(t){if(Ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function _u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,Tr=null,Ar=null;function sd(e){if(e=Ki(e)){if(typeof Ou!="function")throw Error(_(280));var t=e.stateNode;t&&(t=bl(t),Ou(e.stateNode,e.type,t))}}function Xp(e){Tr?Ar?Ar.push(e):Ar=[e]:Tr=e}function Zp(){if(Tr){var e=Tr,t=Ar;if(Ar=Tr=null,sd(e),t)for(e=0;e<t.length;e++)sd(t[e])}}function Jp(e,t){return e(t)}function eh(){}var ka=!1;function th(e,t,n){if(ka)return e(t,n);ka=!0;try{return Jp(e,t,n)}finally{ka=!1,(Tr!==null||Ar!==null)&&(eh(),Zp())}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Lu=!1;if(an)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Lu=!1}function Ny(e,t,n,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(d){this.onError(d)}}var pi=!1,Vo=null,Wo=!1,Nu=null,My={onError:function(e){pi=!0,Vo=e}};function Dy(e,t,n,r,i,o,l,a,u){pi=!1,Vo=null,Ny.apply(My,arguments)}function $y(e,t,n,r,i,o,l,a,u){if(Dy.apply(this,arguments),pi){if(pi){var s=Vo;pi=!1,Vo=null}else throw Error(_(198));Wo||(Wo=!0,Nu=s)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(ar(e)!==e)throw Error(_(188))}function By(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cd(i),e;if(o===r)return cd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function rh(e){return e=By(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ih(e);if(t!==null)return t;e=e.sibling}return null}var oh=wt.unstable_scheduleCallback,dd=wt.unstable_cancelCallback,jy=wt.unstable_shouldYield,Uy=wt.unstable_requestPaint,Ie=wt.unstable_now,Hy=wt.unstable_getCurrentPriorityLevel,Vs=wt.unstable_ImmediatePriority,lh=wt.unstable_UserBlockingPriority,Yo=wt.unstable_NormalPriority,Vy=wt.unstable_LowPriority,ah=wt.unstable_IdlePriority,Sl=null,qt=null;function Wy(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Gy,Yy=Math.log,Qy=Math.LN2;function Gy(e){return e>>>=0,e===0?32:31-(Yy(e)/Qy|0)|0}var oo=64,lo=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ci(a):(o&=l,o!==0&&(r=ci(o)))}else l=n&~i,l!==0?r=ci(l):o!==0&&(r=ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ky(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Bt(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=Ky(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Mu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uh(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function Xy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function sh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ch,Ys,dh,fh,ph,Du=!1,ao=[],En=null,Pn=null,bn=null,Ai=new Map,Fi=new Map,vn=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jy(e,t,n,r,i){switch(t){case"focusin":return En=ti(En,e,t,n,r,i),!0;case"dragenter":return Pn=ti(Pn,e,t,n,r,i),!0;case"mouseover":return bn=ti(bn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,ti(Ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fi.set(o,ti(Fi.get(o)||null,e,t,n,r,i)),!0}return!1}function hh(e){var t=Gn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=nh(n),t!==null){e.blockedOn=t,ph(e.priority,function(){dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Iu=r,n.target.dispatchEvent(r),Iu=null}else return t=Ki(n),t!==null&&Ys(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){Fo(e)&&n.delete(t)}function e0(){Du=!1,En!==null&&Fo(En)&&(En=null),Pn!==null&&Fo(Pn)&&(Pn=null),bn!==null&&Fo(bn)&&(bn=null),Ai.forEach(pd),Fi.forEach(pd)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,e0)))}function zi(e){function t(i){return ni(i,e)}if(0<ao.length){ni(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&ni(En,e),Pn!==null&&ni(Pn,e),bn!==null&&ni(bn,e),Ai.forEach(t),Fi.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)hh(n),n.blockedOn===null&&vn.shift()}var Fr=dn.ReactCurrentBatchConfig,Go=!0;function t0(e,t,n,r){var i=pe,o=Fr.transition;Fr.transition=null;try{pe=1,Qs(e,t,n,r)}finally{pe=i,Fr.transition=o}}function n0(e,t,n,r){var i=pe,o=Fr.transition;Fr.transition=null;try{pe=4,Qs(e,t,n,r)}finally{pe=i,Fr.transition=o}}function Qs(e,t,n,r){if(Go){var i=$u(e,t,n,r);if(i===null)_a(e,t,r,Ko,n),fd(e,r);else if(Jy(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Zy.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&ch(o),o=$u(e,t,n,r),o===null&&_a(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _a(e,t,r,null,n)}}var Ko=null;function $u(e,t,n,r){if(Ko=null,e=Hs(r),e=Gn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hy()){case Vs:return 1;case lh:return 4;case Yo:case Vy:return 16;case ah:return 536870912;default:return 16}default:return 16}}var wn=null,Gs=null,zo=null;function gh(){if(zo)return zo;var e,t=Gs,n=t.length,r,i="value"in wn?wn.value:wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function hd(){return!1}function St(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?uo:hd,this.isPropagationStopped=hd,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=St(Wr),Gi=Fe({},Wr,{view:0,detail:0}),r0=St(Gi),Ca,Ea,ri,Cl=Fe({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(Ca=e.screenX-ri.screenX,Ea=e.screenY-ri.screenY):Ea=Ca=0,ri=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),md=St(Cl),i0=Fe({},Cl,{dataTransfer:0}),o0=St(i0),l0=Fe({},Gi,{relatedTarget:0}),Pa=St(l0),a0=Fe({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=St(a0),s0=Fe({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c0=St(s0),d0=Fe({},Wr,{data:0}),gd=St(d0),f0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h0[e])?!!t[e]:!1}function qs(){return m0}var g0=Fe({},Gi,{key:function(e){if(e.key){var t=f0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y0=St(g0),v0=Fe({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=St(v0),x0=Fe({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),w0=St(x0),k0=Fe({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=St(k0),C0=Fe({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=St(C0),P0=[9,13,27,32],Xs=an&&"CompositionEvent"in window,hi=null;an&&"documentMode"in document&&(hi=document.documentMode);var b0=an&&"TextEvent"in window&&!hi,yh=an&&(!Xs||hi&&8<hi&&11>=hi),vd=String.fromCharCode(32),xd=!1;function vh(e,t){switch(e){case"keyup":return P0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function T0(e,t){switch(e){case"compositionend":return xh(t);case"keypress":return t.which!==32?null:(xd=!0,vd);case"textInput":return e=t.data,e===vd&&xd?null:e;default:return null}}function A0(e,t){if(mr)return e==="compositionend"||!Xs&&vh(e,t)?(e=gh(),zo=Gs=wn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function wh(e,t,n,r){Xp(r),t=qo(t,"onChange"),0<t.length&&(n=new Ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ri=null;function z0(e){Rh(e,0)}function El(e){var t=vr(e);if(Vp(t))return e}function R0(e,t){if(e==="change")return t}var kh=!1;if(an){var ba;if(an){var Ta="oninput"in document;if(!Ta){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Ta=typeof kd.oninput=="function"}ba=Ta}else ba=!1;kh=ba&&(!document.documentMode||9<document.documentMode)}function Sd(){mi&&(mi.detachEvent("onpropertychange",Sh),Ri=mi=null)}function Sh(e){if(e.propertyName==="value"&&El(Ri)){var t=[];wh(t,Ri,e,Hs(e)),th(z0,t)}}function _0(e,t,n){e==="focusin"?(Sd(),mi=t,Ri=n,mi.attachEvent("onpropertychange",Sh)):e==="focusout"&&Sd()}function I0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Ri)}function O0(e,t){if(e==="click")return El(t)}function L0(e,t){if(e==="input"||e==="change")return El(t)}function N0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:N0;function _i(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ku.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eh(){for(var e=window,t=Ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ho(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M0(e){var t=Eh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ch(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ed(n,o);var l=Ed(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D0=an&&"documentMode"in document&&11>=document.documentMode,gr=null,Bu=null,gi=null,ju=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||gr==null||gr!==Ho(r)||(r=gr,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&_i(gi,r)||(gi=r,r=qo(Bu,"onSelect"),0<r.length&&(t=new Ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Aa={},Ph={};an&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Pl(e){if(Aa[e])return Aa[e];if(!yr[e])return e;var t=yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ph)return Aa[e]=t[n];return e}var bh=Pl("animationend"),Th=Pl("animationiteration"),Ah=Pl("animationstart"),Fh=Pl("transitionend"),zh=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){zh.set(e,t),lr(t,[e])}for(var Fa=0;Fa<bd.length;Fa++){var za=bd[Fa],$0=za.toLowerCase(),B0=za[0].toUpperCase()+za.slice(1);Nn($0,"on"+B0)}Nn(bh,"onAnimationEnd");Nn(Th,"onAnimationIteration");Nn(Ah,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Fh,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$y(r,t,void 0,e),e.currentTarget=null}function Rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Td(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Td(i,a,s),o=u}}}if(Wo)throw e=Nu,Wo=!1,Nu=null,e}function Ce(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var r=e+"__bubble";n.has(r)||(_h(t,e,2,!1),n.add(r))}function Ra(e,t,n){var r=0;t&&(r|=4),_h(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[co]){e[co]=!0,$p.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||Ra(n,!1,e),Ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Ra("selectionchange",!1,t))}}function _h(e,t,n,r){switch(mh(t)){case 1:var i=t0;break;case 4:i=n0;break;default:i=Qs}n=i.bind(null,t,n,e),i=void 0,!Lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _a(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Gn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}th(function(){var s=o,d=Hs(n),c=[];e:{var h=zh.get(e);if(h!==void 0){var f=Ks,k=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":f=y0;break;case"focusin":k="focus",f=Pa;break;case"focusout":k="blur",f=Pa;break;case"beforeblur":case"afterblur":f=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=w0;break;case bh:case Th:case Ah:f=u0;break;case Fh:f=S0;break;case"scroll":f=r0;break;case"wheel":f=E0;break;case"copy":case"cut":case"paste":f=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=yd}var w=(t&4)!==0,C=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var m=s,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,p!==null&&(E=Ti(m,p),E!=null&&w.push(Oi(m,E,v)))),C)break;m=m.return}0<w.length&&(h=new f(h,k,null,n,d),c.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Iu&&(k=n.relatedTarget||n.fromElement)&&(Gn(k)||k[un]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(k=n.relatedTarget||n.toElement,f=s,k=k?Gn(k):null,k!==null&&(C=ar(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(f=null,k=s),f!==k)){if(w=md,E="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=yd,E="onPointerLeave",p="onPointerEnter",m="pointer"),C=f==null?h:vr(f),v=k==null?h:vr(k),h=new w(E,m+"leave",f,n,d),h.target=C,h.relatedTarget=v,E=null,Gn(d)===s&&(w=new w(p,m+"enter",k,n,d),w.target=v,w.relatedTarget=C,E=w),C=E,f&&k)t:{for(w=f,p=k,m=0,v=w;v;v=cr(v))m++;for(v=0,E=p;E;E=cr(E))v++;for(;0<m-v;)w=cr(w),m--;for(;0<v-m;)p=cr(p),v--;for(;m--;){if(w===p||p!==null&&w===p.alternate)break t;w=cr(w),p=cr(p)}w=null}else w=null;f!==null&&Ad(c,h,f,w,!1),k!==null&&C!==null&&Ad(c,C,k,w,!0)}}e:{if(h=s?vr(s):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var T=R0;else if(wd(h))if(kh)T=L0;else{T=I0;var S=_0}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=O0);if(T&&(T=T(e,s))){wh(c,T,n,d);break e}S&&S(e,h,s),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Au(h,"number",h.value)}switch(S=s?vr(s):window,e){case"focusin":(wd(S)||S.contentEditable==="true")&&(gr=S,Bu=s,gi=null);break;case"focusout":gi=Bu=gr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Pd(c,n,d);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":Pd(c,n,d)}var z;if(Xs)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else mr?vh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(yh&&n.locale!=="ko"&&(mr||R!=="onCompositionStart"?R==="onCompositionEnd"&&mr&&(z=gh()):(wn=d,Gs="value"in wn?wn.value:wn.textContent,mr=!0)),S=qo(s,R),0<S.length&&(R=new gd(R,e,null,n,d),c.push({event:R,listeners:S}),z?R.data=z:(z=xh(n),z!==null&&(R.data=z)))),(z=b0?T0(e,n):A0(e,n))&&(s=qo(s,"onBeforeInput"),0<s.length&&(d=new gd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:s}),d.data=z))}Rh(c,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ti(e,n),o!=null&&r.unshift(Oi(e,o,i)),o=Ti(e,t),o!=null&&r.push(Oi(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ad(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=Ti(n,o),u!=null&&l.unshift(Oi(n,u,a))):i||(u=Ti(n,o),u!=null&&l.push(Oi(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var U0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Fd(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(H0,"")}function fo(e,t,n){if(t=Fd(t),Fd(e)!==t&&n)throw Error(_(425))}function Xo(){}var Uu=null,Hu=null;function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,V0=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(Y0)}:Wu;function Y0(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Yr,Li="__reactProps$"+Yr,un="__reactContainer$"+Yr,Yu="__reactEvents$"+Yr,Q0="__reactListeners$"+Yr,G0="__reactHandles$"+Yr;function Gn(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[Qt])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Qt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function bl(e){return e[Li]||null}var Qu=[],xr=-1;function Mn(e){return{current:e}}function Ee(e){0>xr||(e.current=Qu[xr],Qu[xr]=null,xr--)}function ke(e,t){xr++,Qu[xr]=e.current,e.current=t}var Ln={},Je=Mn(Ln),ut=Mn(!1),Jn=Ln;function Nr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function Zo(){Ee(ut),Ee(Je)}function _d(e,t,n){if(Je.current!==Ln)throw Error(_(168));ke(Je,t),ke(ut,n)}function Ih(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,_y(e)||"Unknown",i));return Fe({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Jn=Je.current,ke(Je,e),ke(ut,ut.current),!0}function Id(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ih(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,Ee(ut),Ee(Je),ke(Je,e)):Ee(ut),ke(ut,n)}var nn=null,Tl=!1,Oa=!1;function Oh(e){nn===null?nn=[e]:nn.push(e)}function K0(e){Tl=!0,Oh(e)}function Dn(){if(!Oa&&nn!==null){Oa=!0;var e=0,t=pe;try{var n=nn;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Tl=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),oh(Vs,Dn),i}finally{pe=t,Oa=!1}}return null}var wr=[],kr=0,el=null,tl=0,Et=[],Pt=0,er=null,rn=1,on="";function Wn(e,t){wr[kr++]=tl,wr[kr++]=el,el=e,tl=t}function Lh(e,t,n){Et[Pt++]=rn,Et[Pt++]=on,Et[Pt++]=er,er=e;var r=rn;e=on;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var o=32-Bt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,rn=1<<32-Bt(t)+i|n<<i|r,on=o+e}else rn=1<<o|n<<i|r,on=e}function Js(e){e.return!==null&&(Wn(e,1),Lh(e,1,0))}function ec(e){for(;e===el;)el=wr[--kr],wr[kr]=null,tl=wr[--kr],wr[kr]=null;for(;e===er;)er=Et[--Pt],Et[Pt]=null,on=Et[--Pt],Et[Pt]=null,rn=Et[--Pt],Et[Pt]=null}var xt=null,gt=null,Pe=!1,$t=null;function Nh(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,gt=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,gt=null,!0):!1;default:return!1}}function Gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(Pe){var t=gt;if(t){var n=t;if(!Od(e,t)){if(Gu(e))throw Error(_(418));t=Tn(n.nextSibling);var r=xt;t&&Od(e,t)?Nh(r,n):(e.flags=e.flags&-4097|2,Pe=!1,xt=e)}}else{if(Gu(e))throw Error(_(418));e.flags=e.flags&-4097|2,Pe=!1,xt=e}}}function Ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function po(e){if(e!==xt)return!1;if(!Pe)return Ld(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vu(e.type,e.memoizedProps)),t&&(t=gt)){if(Gu(e))throw Mh(),Error(_(418));for(;t;)Nh(e,t),t=Tn(t.nextSibling)}if(Ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=xt?Tn(e.stateNode.nextSibling):null;return!0}function Mh(){for(var e=gt;e;)e=Tn(e.nextSibling)}function Mr(){gt=xt=null,Pe=!1}function tc(e){$t===null?$t=[e]:$t.push(e)}var q0=dn.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nd(e){var t=e._init;return t(e._payload)}function Dh(e){function t(p,m){if(e){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Rn(p,m),p.index=0,p.sibling=null,p}function o(p,m,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,v,E){return m===null||m.tag!==6?(m=ja(v,p.mode,E),m.return=p,m):(m=i(m,v),m.return=p,m)}function u(p,m,v,E){var T=v.type;return T===hr?d(p,m,v.props.children,E,v.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&Nd(T)===m.type)?(E=i(m,v.props),E.ref=ii(p,m,v),E.return=p,E):(E=Do(v.type,v.key,v.props,null,p.mode,E),E.ref=ii(p,m,v),E.return=p,E)}function s(p,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ua(v,p.mode,E),m.return=p,m):(m=i(m,v.children||[]),m.return=p,m)}function d(p,m,v,E,T){return m===null||m.tag!==7?(m=Zn(v,p.mode,E,T),m.return=p,m):(m=i(m,v),m.return=p,m)}function c(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ja(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return v=Do(m.type,m.key,m.props,null,p.mode,v),v.ref=ii(p,null,m),v.return=p,v;case pr:return m=Ua(m,p.mode,v),m.return=p,m;case gn:var E=m._init;return c(p,E(m._payload),v)}if(si(m)||Jr(m))return m=Zn(m,p.mode,v,null),m.return=p,m;ho(p,m)}return null}function h(p,m,v,E){var T=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(p,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return v.key===T?u(p,m,v,E):null;case pr:return v.key===T?s(p,m,v,E):null;case gn:return T=v._init,h(p,m,T(v._payload),E)}if(si(v)||Jr(v))return T!==null?null:d(p,m,v,E,null);ho(p,v)}return null}function f(p,m,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(v)||null,a(m,p,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case no:return p=p.get(E.key===null?v:E.key)||null,u(m,p,E,T);case pr:return p=p.get(E.key===null?v:E.key)||null,s(m,p,E,T);case gn:var S=E._init;return f(p,m,v,S(E._payload),T)}if(si(E)||Jr(E))return p=p.get(v)||null,d(m,p,E,T,null);ho(m,E)}return null}function k(p,m,v,E){for(var T=null,S=null,z=m,R=m=0,H=null;z!==null&&R<v.length;R++){z.index>R?(H=z,z=null):H=z.sibling;var V=h(p,z,v[R],E);if(V===null){z===null&&(z=H);break}e&&z&&V.alternate===null&&t(p,z),m=o(V,m,R),S===null?T=V:S.sibling=V,S=V,z=H}if(R===v.length)return n(p,z),Pe&&Wn(p,R),T;if(z===null){for(;R<v.length;R++)z=c(p,v[R],E),z!==null&&(m=o(z,m,R),S===null?T=z:S.sibling=z,S=z);return Pe&&Wn(p,R),T}for(z=r(p,z);R<v.length;R++)H=f(z,p,R,v[R],E),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?R:H.key),m=o(H,m,R),S===null?T=H:S.sibling=H,S=H);return e&&z.forEach(function(j){return t(p,j)}),Pe&&Wn(p,R),T}function w(p,m,v,E){var T=Jr(v);if(typeof T!="function")throw Error(_(150));if(v=T.call(v),v==null)throw Error(_(151));for(var S=T=null,z=m,R=m=0,H=null,V=v.next();z!==null&&!V.done;R++,V=v.next()){z.index>R?(H=z,z=null):H=z.sibling;var j=h(p,z,V.value,E);if(j===null){z===null&&(z=H);break}e&&z&&j.alternate===null&&t(p,z),m=o(j,m,R),S===null?T=j:S.sibling=j,S=j,z=H}if(V.done)return n(p,z),Pe&&Wn(p,R),T;if(z===null){for(;!V.done;R++,V=v.next())V=c(p,V.value,E),V!==null&&(m=o(V,m,R),S===null?T=V:S.sibling=V,S=V);return Pe&&Wn(p,R),T}for(z=r(p,z);!V.done;R++,V=v.next())V=f(z,p,R,V.value,E),V!==null&&(e&&V.alternate!==null&&z.delete(V.key===null?R:V.key),m=o(V,m,R),S===null?T=V:S.sibling=V,S=V);return e&&z.forEach(function($){return t(p,$)}),Pe&&Wn(p,R),T}function C(p,m,v,E){if(typeof v=="object"&&v!==null&&v.type===hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case no:e:{for(var T=v.key,S=m;S!==null;){if(S.key===T){if(T=v.type,T===hr){if(S.tag===7){n(p,S.sibling),m=i(S,v.props.children),m.return=p,p=m;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&Nd(T)===S.type){n(p,S.sibling),m=i(S,v.props),m.ref=ii(p,S,v),m.return=p,p=m;break e}n(p,S);break}else t(p,S);S=S.sibling}v.type===hr?(m=Zn(v.props.children,p.mode,E,v.key),m.return=p,p=m):(E=Do(v.type,v.key,v.props,null,p.mode,E),E.ref=ii(p,m,v),E.return=p,p=E)}return l(p);case pr:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(p,m.sibling),m=i(m,v.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Ua(v,p.mode,E),m.return=p,p=m}return l(p);case gn:return S=v._init,C(p,m,S(v._payload),E)}if(si(v))return k(p,m,v,E);if(Jr(v))return w(p,m,v,E);ho(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,v),m.return=p,p=m):(n(p,m),m=ja(v,p.mode,E),m.return=p,p=m),l(p)):n(p,m)}return C}var Dr=Dh(!0),$h=Dh(!1),nl=Mn(null),rl=null,Sr=null,nc=null;function rc(){nc=Sr=rl=null}function ic(e){var t=nl.current;Ee(nl),e._currentValue=t}function qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){rl=e,nc=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(rl===null)throw Error(_(308));Sr=e,rl.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Kn=null;function oc(e){Kn===null?Kn=[e]:Kn.push(e)}function Bh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oc(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,oc(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var i=e.updateQueue;yn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=s:a.next=s,d.lastBaseUpdate=u))}if(o!==null){var c=i.baseState;l=0,d=s=u=null,a=o;do{var h=a.lane,f=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(h=t,f=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){c=k.call(f,c,h);break e}c=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,h=typeof k=="function"?k.call(f,c,h):k,h==null)break e;c=Fe({},c,h);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(s=d=f,u=c):d=d.next=f,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(u=c),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nr|=l,e.lanes=l,e.memoizedState=c}}function Dd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var qi={},Xt=Mn(qi),Ni=Mn(qi),Mi=Mn(qi);function qn(e){if(e===qi)throw Error(_(174));return e}function ac(e,t){switch(ke(Mi,t),ke(Ni,e),ke(Xt,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}Ee(Xt),ke(Xt,t)}function $r(){Ee(Xt),Ee(Ni),Ee(Mi)}function Uh(e){qn(Mi.current);var t=qn(Xt.current),n=zu(t,e.type);t!==n&&(ke(Ni,e),ke(Xt,n))}function uc(e){Ni.current===e&&(Ee(Xt),Ee(Ni))}var Te=Mn(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function sc(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var Io=dn.ReactCurrentDispatcher,Na=dn.ReactCurrentBatchConfig,tr=0,Ae=null,je=null,He=null,ll=!1,yi=!1,Di=0,X0=0;function qe(){throw Error(_(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function dc(e,t,n,r,i,o){if(tr=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?t1:n1,e=n(r,i),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(_(301));o+=1,He=je=null,t.updateQueue=null,Io.current=r1,e=n(r,i)}while(yi)}if(Io.current=al,t=je!==null&&je.next!==null,tr=0,He=je=Ae=null,ll=!1,t)throw Error(_(300));return e}function fc(){var e=Di!==0;return Di=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=e:He=He.next=e,He}function zt(){if(je===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=He===null?Ae.memoizedState:He.next;if(t!==null)He=t,je=e;else{if(e===null)throw Error(_(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},He===null?Ae.memoizedState=He=e:He=He.next=e}return He}function $i(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var d=s.lane;if((tr&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=c,l=r):u=u.next=c,Ae.lanes|=d,nr|=d}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,Ut(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,nr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Da(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ut(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hh(){}function Vh(e,t){var n=Ae,r=zt(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,pc(Qh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Yh.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(_(349));tr&30||Wh(n,t,i)}return i}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yh(e,t,n,r){t.value=n,t.getSnapshot=r,Gh(t)&&Kh(e)}function Qh(e,t,n){return n(function(){Gh(t)&&Kh(e)})}function Gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Kh(e){var t=sn(e,1);t!==null&&jt(t,e,1,-1)}function $d(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=e1.bind(null,Ae,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qh(){return zt().memoizedState}function Oo(e,t,n,r){var i=Wt();Ae.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&cc(r,l.deps)){i.memoizedState=Bi(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=Bi(1|t,n,o,r)}function Bd(e,t){return Oo(8390656,8,e,t)}function pc(e,t){return Al(2048,8,e,t)}function Xh(e,t){return Al(4,2,e,t)}function Zh(e,t){return Al(4,4,e,t)}function Jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,Jh.bind(null,t,e),n)}function hc(){}function tm(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nm(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return tr&21?(Ut(n,t)||(n=uh(),Ae.lanes|=n,nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function Z0(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Na.transition;Na.transition={};try{e(!1),t()}finally{pe=n,Na.transition=r}}function im(){return zt().memoizedState}function J0(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},om(e))lm(t,n);else if(n=Bh(e,t,n,r),n!==null){var i=tt();jt(n,e,r,i),am(n,t,r)}}function e1(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(e))lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ut(a,l)){var u=t.interleaved;u===null?(i.next=i,oc(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Bh(e,t,i,r),n!==null&&(i=tt(),jt(n,e,r,i),am(n,t,r))}}function om(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function lm(e,t){yi=ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function am(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}var al={readContext:Ft,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},t1={readContext:Ft,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,Jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J0.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:$d,useDebugValue:hc,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=$d(!1),t=e[0];return e=Z0.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=Wt();if(Pe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ve===null)throw Error(_(349));tr&30||Wh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bd(Qh.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,Yh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Ve.identifierPrefix;if(Pe){var n=on,r=rn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},n1={readContext:Ft,useCallback:tm,useContext:Ft,useEffect:pc,useImperativeHandle:em,useInsertionEffect:Xh,useLayoutEffect:Zh,useMemo:nm,useReducer:Ma,useRef:qh,useState:function(){return Ma($i)},useDebugValue:hc,useDeferredValue:function(e){var t=zt();return rm(t,je.memoizedState,e)},useTransition:function(){var e=Ma($i)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:im,unstable_isNewReconciler:!1},r1={readContext:Ft,useCallback:tm,useContext:Ft,useEffect:pc,useImperativeHandle:em,useInsertionEffect:Xh,useLayoutEffect:Zh,useMemo:nm,useReducer:Da,useRef:qh,useState:function(){return Da($i)},useDebugValue:hc,useDeferredValue:function(e){var t=zt();return je===null?t.memoizedState=e:rm(t,je.memoizedState,e)},useTransition:function(){var e=Da($i)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:im,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),i=zn(e),o=ln(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(jt(t,e,i,r),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),i=zn(e),o=ln(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(jt(t,e,i,r),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=zn(e),i=ln(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(jt(t,e,r,n),_o(t,e,r))}};function jd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function um(e,t,n){var r=!1,i=Ln,o=t.contextType;return typeof o=="object"&&o!==null?o=Ft(o):(i=st(t)?Jn:Je.current,r=t.contextTypes,o=(r=r!=null)?Nr(e,i):Ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function Zu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ft(o):(o=st(t)?Jn:Je.current,i.context=Nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fl.enqueueReplaceState(i,i.state,null),il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var n="",r=t;do n+=Ry(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i1=typeof WeakMap=="function"?WeakMap:Map;function sm(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,ss=r),Ju(e,t)},n}function cm(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ju(e,t),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=v1.bind(null,e,t,n),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var o1=dn.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?$h(t,null,n,r):Dr(t,e.child,n,r)}function Yd(e,t,n,r,i){n=n.render;var o=t.ref;return zr(t,i),r=dc(e,t,n,r,o,i),n=fc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(Pe&&n&&Js(t),t.flags|=1,et(e,t,r,i),t.child)}function Qd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dm(e,t,o,r,i)):(e=Do(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(l,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=Rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,cn(e,t,i)}return es(e,t,n,r,i)}function fm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Er,mt),mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Er,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(Er,mt),mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(Er,mt),mt|=r;return et(e,t,i,n),t.child}function pm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function es(e,t,n,r,i){var o=st(n)?Jn:Je.current;return o=Nr(t,o),zr(t,i),n=dc(e,t,n,r,o,i),r=fc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(Pe&&r&&Js(t),t.flags|=1,et(e,t,n,i),t.child)}function Gd(e,t,n,r,i){if(st(n)){var o=!0;Jo(t)}else o=!1;if(zr(t,i),t.stateNode===null)Lo(e,t),um(t,n,r),Zu(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=Ft(s):(s=st(n)?Jn:Je.current,s=Nr(t,s));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Ud(t,l,r,s),yn=!1;var h=t.memoizedState;l.state=h,il(t,r,l,i),u=t.memoizedState,a!==r||h!==u||ut.current||yn?(typeof d=="function"&&(Xu(t,n,d,r),u=t.memoizedState),(a=yn||jd(t,n,a,r,h,u,s))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jh(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:Mt(t.type,a),l.props=s,c=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=st(n)?Jn:Je.current,u=Nr(t,u));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||h!==u)&&Ud(t,l,r,u),yn=!1,h=t.memoizedState,l.state=h,il(t,r,l,i);var k=t.memoizedState;a!==c||h!==k||ut.current||yn?(typeof f=="function"&&(Xu(t,n,f,r),k=t.memoizedState),(s=yn||jd(t,n,s,r,h,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ts(e,t,n,r,o,i)}function ts(e,t,n,r,i,o){pm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Id(t,n,!1),cn(e,t,o);r=t.stateNode,o1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Dr(t,e.child,null,o),t.child=Dr(t,null,a,o)):et(e,t,a,o),t.memoizedState=r.state,i&&Id(t,n,!0),t.child}function hm(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),ac(e,t.containerInfo)}function Kd(e,t,n,r,i){return Mr(),tc(i),t.flags|=256,et(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Te,i&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_l(l,r,0,null),e=Zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rs(n),t.memoizedState=ns,e):mc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return l1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Rn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Rn(a,o):(o=Zn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?rs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ns,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mc(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&tc(r),Dr(t,e.child,null,n),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function l1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=$a(Error(_(422))),mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_l({mode:"visible",children:r.children},i,0,null),o=Zn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dr(t,e.child,null,l),t.child.memoizedState=rs(l),t.memoizedState=ns,o);if(!(t.mode&1))return mo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=$a(o,r,void 0),mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,at||a){if(r=Ve,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sn(e,i),jt(r,e,i,-1))}return kc(),r=$a(Error(_(421))),mo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=x1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,gt=Tn(i.nextSibling),xt=t,Pe=!0,$t=null,e!==null&&(Et[Pt++]=rn,Et[Pt++]=on,Et[Pt++]=er,rn=e.id,on=e.overflow,er=t),t=mc(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qu(e.return,t,n)}function Ba(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,o);break;case"together":Ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a1(e,t,n){switch(t.tag){case 3:hm(t),Mr();break;case 5:Uh(t);break;case 1:st(t.type)&&Jo(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ke(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?mm(e,t,n):(ke(Te,Te.current&1),e=cn(e,t,n),e!==null?e.sibling:null);ke(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return cn(e,t,n)}var ym,is,vm,xm;ym=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};vm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qn(Xt.current);var o=null;switch(n){case"input":i=bu(e,i),r=bu(e,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=Fu(e,i),r=Fu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Ru(n,r);var l;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pi.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&Ce("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}};xm=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u1(e,t,n){var r=t.pendingProps;switch(ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return st(t.type)&&Zo(),Xe(t),null;case 3:return r=t.stateNode,$r(),Ee(ut),Ee(Je),sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(fs($t),$t=null))),is(e,t),Xe(t),null;case 5:uc(t);var i=qn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)vm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Xe(t),null}if(e=qn(Xt.current),po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qt]=t,r[Li]=o,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Ce(di[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":od(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":ad(r,o),Ce("invalid",r)}Ru(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",""+a]):Pi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ce("scroll",r)}switch(n){case"input":ro(r),ld(r,o,!0);break;case"textarea":ro(r),ud(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Qt]=t,e[Li]=r,ym(e,t,!1,!1),t.stateNode=e;e:{switch(l=_u(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Ce(di[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":od(e,r),i=bu(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":ad(e,r),i=Fu(e,r),Ce("invalid",e);break;default:i=r}Ru(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?qp(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gp(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bi(e,u):typeof u=="number"&&bi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ce("scroll",e):u!=null&&$s(e,o,u,l))}switch(n){case"input":ro(e),ld(e,r,!1);break;case"textarea":ro(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?br(e,!!r.multiple,o,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)xm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=qn(Mi.current),qn(Xt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Xe(t),null;case 13:if(Ee(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&gt!==null&&t.mode&1&&!(t.flags&128))Mh(),Mr(),t.flags|=98560,o=!1;else if(o=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Qt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),o=!1}else $t!==null&&(fs($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ue===0&&(Ue=3):kc())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return $r(),is(e,t),e===null&&Ii(t.stateNode.containerInfo),Xe(t),null;case 10:return ic(t.type._context),Xe(t),null;case 17:return st(t.type)&&Zo(),Xe(t),null;case 19:if(Ee(Te),o=t.memoizedState,o===null)return Xe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)oi(o,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ol(e),l!==null){for(t.flags|=128,oi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>jr&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Pe)return Xe(t),null}else 2*Ie()-o.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Te.current,ke(Te,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function s1(e,t){switch(ec(t),t.tag){case 1:return st(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ee(ut),Ee(Je),sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uc(t),null;case 13:if(Ee(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Te),null;case 4:return $r(),null;case 10:return ic(t.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var go=!1,Ze=!1,c1=typeof WeakSet=="function"?WeakSet:Set,U=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Xd=!1;function d1(e,t){if(Uu=Go,e=Eh(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,d=0,c=e,h=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(u=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(f=c.firstChild)!==null;)h=c,c=f;for(;;){if(c===e)break t;if(h===n&&++s===i&&(a=l),h===o&&++d===r&&(u=l),(f=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:e,selectionRange:n},Go=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,C=k.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Mt(t.type,w),C);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){Re(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return k=Xd,Xd=!1,k}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&os(t,n,o)}i=i.next}while(i!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[Li],delete t[Yu],delete t[Q0],delete t[G0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function km(e){return e.tag===5||e.tag===3||e.tag===4}function Zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}var Ye=null,Dt=!1;function hn(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Ze||Cr(n,t);case 6:var r=Ye,i=Dt;Ye=null,hn(e,t,n),Ye=r,Dt=i,Ye!==null&&(Dt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Dt?(e=Ye,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),zi(e)):Ia(Ye,n.stateNode));break;case 4:r=Ye,i=Dt,Ye=n.stateNode.containerInfo,Dt=!0,hn(e,t,n),Ye=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&os(n,t,l),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Ze&&(Cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,hn(e,t,n),Ze=r):hn(e,t,n);break;default:hn(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c1),t.forEach(function(r){var i=w1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Dt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Dt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(Ye===null)throw Error(_(160));Sm(o,l,i),Ye=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){Re(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}function Cm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Ht(e),r&4){try{vi(3,e,e.return),zl(3,e)}catch(w){Re(e,e.return,w)}try{vi(5,e,e.return)}catch(w){Re(e,e.return,w)}}break;case 1:Nt(t,e),Ht(e),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(Nt(t,e),Ht(e),r&512&&n!==null&&Cr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(w){Re(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Wp(i,o),_u(a,l);var s=_u(a,o);for(l=0;l<u.length;l+=2){var d=u[l],c=u[l+1];d==="style"?qp(i,c):d==="dangerouslySetInnerHTML"?Gp(i,c):d==="children"?bi(i,c):$s(i,d,c,s)}switch(a){case"input":Tu(i,o);break;case"textarea":Yp(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?br(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Li]=o}catch(w){Re(e,e.return,w)}}break;case 6:if(Nt(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Re(e,e.return,w)}}break;case 3:if(Nt(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(w){Re(e,e.return,w)}break;case 4:Nt(t,e),Ht(e);break;case 13:Nt(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vc=Ie())),r&4&&Jd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(s=Ze)||d,Nt(t,e),Ze=s):Nt(t,e),Ht(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(U=e,d=e.child;d!==null;){for(c=U=d;U!==null;){switch(h=U,f=h.child,h.tag){case 0:case 11:case 14:case 15:vi(4,h,h.return);break;case 1:Cr(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:Cr(h,h.return);break;case 22:if(h.memoizedState!==null){tf(c);continue}}f!==null?(f.return=h,U=f):tf(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,u=c.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Kp("display",l))}catch(w){Re(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(w){Re(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Nt(t,e),Ht(e),r&4&&Jd(e);break;case 21:break;default:Nt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(km(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=Zd(e);us(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zd(e);as(e,a,l);break;default:throw Error(_(161))}}catch(u){Re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f1(e,t,n){U=e,Em(e)}function Em(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||go;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ze;a=go;var s=Ze;if(go=l,(Ze=u)&&!s)for(U=i;U!==null;)l=U,u=l.child,l.tag===22&&l.memoizedState!==null?nf(i):u!==null?(u.return=l,U=u):nf(i);for(;o!==null;)U=o,Em(o),o=o.sibling;U=i,go=a,Ze=s}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):ef(e)}}function ef(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&zi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ze||t.flags&512&&ls(t)}catch(h){Re(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function tf(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function nf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(u){Re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Re(t,i,u)}}var o=t.return;try{ls(t)}catch(u){Re(t,o,u)}break;case 5:var l=t.return;try{ls(t)}catch(u){Re(t,l,u)}}}catch(u){Re(t,t.return,u)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var p1=Math.ceil,ul=dn.ReactCurrentDispatcher,gc=dn.ReactCurrentOwner,At=dn.ReactCurrentBatchConfig,ce=0,Ve=null,De=null,Qe=0,mt=0,Er=Mn(0),Ue=0,ji=null,nr=0,Rl=0,yc=0,xi=null,lt=null,vc=0,jr=1/0,tn=null,sl=!1,ss=null,Fn=null,yo=!1,kn=null,cl=0,wi=0,cs=null,No=-1,Mo=0;function tt(){return ce&6?Ie():No!==-1?No:No=Ie()}function zn(e){return e.mode&1?ce&2&&Qe!==0?Qe&-Qe:q0.transition!==null?(Mo===0&&(Mo=uh()),Mo):(e=pe,e!==0||(e=window.event,e=e===void 0?16:mh(e.type)),e):1}function jt(e,t,n,r){if(50<wi)throw wi=0,cs=null,Error(_(185));Qi(e,n,r),(!(ce&2)||e!==Ve)&&(e===Ve&&(!(ce&2)&&(Rl|=n),Ue===4&&xn(e,Qe)),ct(e,r),n===1&&ce===0&&!(t.mode&1)&&(jr=Ie()+500,Tl&&Dn()))}function ct(e,t){var n=e.callbackNode;qy(e,t);var r=Qo(e,e===Ve?Qe:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?K0(rf.bind(null,e)):Oh(rf.bind(null,e)),W0(function(){!(ce&6)&&Dn()}),n=null;else{switch(sh(r)){case 1:n=Vs;break;case 4:n=lh;break;case 16:n=Yo;break;case 536870912:n=ah;break;default:n=Yo}n=_m(n,Pm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pm(e,t){if(No=-1,Mo=0,ce&6)throw Error(_(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=Qo(e,e===Ve?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var i=ce;ce|=2;var o=Tm();(Ve!==e||Qe!==t)&&(tn=null,jr=Ie()+500,Xn(e,t));do try{g1();break}catch(a){bm(e,a)}while(1);rc(),ul.current=o,ce=i,De!==null?t=0:(Ve=null,Qe=0,t=Ue)}if(t!==0){if(t===2&&(i=Mu(e),i!==0&&(r=i,t=ds(e,i))),t===1)throw n=ji,Xn(e,0),xn(e,r),ct(e,Ie()),n;if(t===6)xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!h1(i)&&(t=dl(e,r),t===2&&(o=Mu(e),o!==0&&(r=o,t=ds(e,o))),t===1))throw n=ji,Xn(e,0),xn(e,r),ct(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Yn(e,lt,tn);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=vc+500-Ie(),10<t)){if(Qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wu(Yn.bind(null,e,lt,tn),t);break}Yn(e,lt,tn);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Bt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p1(r/1960))-r,10<r){e.timeoutHandle=Wu(Yn.bind(null,e,lt,tn),r);break}Yn(e,lt,tn);break;case 5:Yn(e,lt,tn);break;default:throw Error(_(329))}}}return ct(e,Ie()),e.callbackNode===n?Pm.bind(null,e):null}function ds(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=dl(e,t),e!==2&&(t=lt,lt=n,t!==null&&fs(t)),e}function fs(e){lt===null?lt=e:lt.push.apply(lt,e)}function h1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~yc,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(ce&6)throw Error(_(327));Rr();var t=Qo(e,0);if(!(t&1))return ct(e,Ie()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=Mu(e);r!==0&&(t=r,n=ds(e,r))}if(n===1)throw n=ji,Xn(e,0),xn(e,t),ct(e,Ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,lt,tn),ct(e,Ie()),null}function xc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(jr=Ie()+500,Tl&&Dn())}}function rr(e){kn!==null&&kn.tag===0&&!(ce&6)&&Rr();var t=ce;ce|=1;var n=At.transition,r=pe;try{if(At.transition=null,pe=1,e)return e()}finally{pe=r,At.transition=n,ce=t,!(ce&6)&&Dn()}}function wc(){mt=Er.current,Ee(Er)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,V0(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:$r(),Ee(ut),Ee(Je),sc();break;case 5:uc(r);break;case 4:$r();break;case 13:Ee(Te);break;case 19:Ee(Te);break;case 10:ic(r.type._context);break;case 22:case 23:wc()}n=n.return}if(Ve=e,De=e=Rn(e.current,null),Qe=mt=t,Ue=0,ji=null,yc=Rl=nr=0,lt=xi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kn=null}return e}function bm(e,t){do{var n=De;try{if(rc(),Io.current=al,ll){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(tr=0,He=je=Ae=null,yi=!1,Di=0,gc.current=null,n===null||n.return===null){Ue=1,ji=t,De=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Qe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=Vd(l);if(f!==null){f.flags&=-257,Wd(f,l,a,o,t),f.mode&1&&Hd(o,s,t),t=f,u=s;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){Hd(o,s,t),kc();break e}u=Error(_(426))}}else if(Pe&&a.mode&1){var C=Vd(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wd(C,l,a,o,t),tc(Br(u,a));break e}}o=u=Br(u,a),Ue!==4&&(Ue=2),xi===null?xi=[o]:xi.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=sm(o,u,t);Md(o,p);break e;case 1:a=u;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fn===null||!Fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=cm(o,a,t);Md(o,E);break e}}o=o.return}while(o!==null)}Fm(n)}catch(T){t=T,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Tm(){var e=ul.current;return ul.current=al,e===null?al:e}function kc(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||!(nr&268435455)&&!(Rl&268435455)||xn(Ve,Qe)}function dl(e,t){var n=ce;ce|=2;var r=Tm();(Ve!==e||Qe!==t)&&(tn=null,Xn(e,t));do try{m1();break}catch(i){bm(e,i)}while(1);if(rc(),ce=n,ul.current=r,De!==null)throw Error(_(261));return Ve=null,Qe=0,Ue}function m1(){for(;De!==null;)Am(De)}function g1(){for(;De!==null&&!jy();)Am(De)}function Am(e){var t=Rm(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Fm(e):De=t,gc.current=null}function Fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s1(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,De=null;return}}else if(n=u1(n,t,mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ue===0&&(Ue=5)}function Yn(e,t,n){var r=pe,i=At.transition;try{At.transition=null,pe=1,y1(e,t,n,r)}finally{At.transition=i,pe=r}return null}function y1(e,t,n,r){do Rr();while(kn!==null);if(ce&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Xy(e,o),e===Ve&&(De=Ve=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,_m(Yo,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var l=pe;pe=1;var a=ce;ce|=4,gc.current=null,d1(e,n),Cm(n,e),M0(Hu),Go=!!Uu,Hu=Uu=null,e.current=n,f1(n),Uy(),ce=a,pe=l,At.transition=o}else e.current=n;if(yo&&(yo=!1,kn=e,cl=i),o=e.pendingLanes,o===0&&(Fn=null),Wy(n.stateNode),ct(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=ss,ss=null,e;return cl&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===cs?wi++:(wi=0,cs=e):wi=0,Dn(),null}function Rr(){if(kn!==null){var e=sh(cl),t=At.transition,n=pe;try{if(At.transition=null,pe=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,cl=0,ce&6)throw Error(_(331));var i=ce;for(ce|=4,U=e.current;U!==null;){var o=U,l=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(U=s;U!==null;){var d=U;switch(d.tag){case 0:case 11:case 15:vi(8,d,o)}var c=d.child;if(c!==null)c.return=d,U=c;else for(;U!==null;){d=U;var h=d.sibling,f=d.return;if(wm(d),d===s){U=null;break}if(h!==null){h.return=f,U=h;break}U=f}}}var k=o.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}U=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,U=l;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){l=U;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,U=v;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zl(9,a)}}catch(T){Re(a,a.return,T)}if(a===l){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(ce=i,Dn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{pe=n,At.transition=t}}return!1}function of(e,t,n){t=Br(n,t),t=sm(e,t,1),e=An(e,t,1),t=tt(),e!==null&&(Qi(e,1,t),ct(e,t))}function Re(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=Br(n,e),e=cm(t,e,1),t=An(t,e,1),e=tt(),t!==null&&(Qi(t,1,e),ct(t,e));break}}t=t.return}}function v1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Qe&n)===n&&(Ue===4||Ue===3&&(Qe&130023424)===Qe&&500>Ie()-vc?Xn(e,0):yc|=n),ct(e,t)}function zm(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=tt();e=sn(e,t),e!==null&&(Qi(e,t,n),ct(e,n))}function x1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zm(e,n)}function w1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),zm(e,n)}var Rm;Rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,a1(e,t,n);at=!!(e.flags&131072)}else at=!1,Pe&&t.flags&1048576&&Lh(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var i=Nr(t,Je.current);zr(t,n),i=dc(null,t,r,e,i,n);var o=fc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(t),i.updater=Fl,t.stateNode=i,i._reactInternals=t,Zu(t,r,e,n),t=ts(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&Js(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=S1(r),e=Mt(r,e),i){case 0:t=es(null,t,r,e,n);break e;case 1:t=Gd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Qd(null,t,r,Mt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),es(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Gd(e,t,r,i,n);case 3:e:{if(hm(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jh(e,t),il(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Br(Error(_(423)),t),t=Kd(e,t,r,n,i);break e}else if(r!==i){i=Br(Error(_(424)),t),t=Kd(e,t,r,n,i);break e}else for(gt=Tn(t.stateNode.containerInfo.firstChild),xt=t,Pe=!0,$t=null,n=$h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=cn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Uh(t),e===null&&Ku(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Vu(r,i)?l=null:o!==null&&Vu(r,o)&&(t.flags|=32),pm(e,t),et(e,t,l,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return mm(e,t,n);case 4:return ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Yd(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ke(nl,r._currentValue),r._currentValue=l,o!==null)if(Ut(o.value,l)){if(o.children===i.children&&!ut.current){t=cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ln(-1,n&-n),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),qu(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),qu(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=Ft(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),Qd(e,t,r,i,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Lo(e,t),t.tag=1,st(r)?(e=!0,Jo(t)):e=!1,zr(t,n),um(t,r,i),Zu(t,r,i,n),ts(null,t,r,!0,e,n);case 19:return gm(e,t,n);case 22:return fm(e,t,n)}throw Error(_(156,t.tag))};function _m(e,t){return oh(e,t)}function k1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new k1(e,t,n,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S1(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===js)return 11;if(e===Us)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Sc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hr:return Zn(n.children,i,o,t);case Bs:l=8,i|=8;break;case Su:return e=Tt(12,n,t,i|2),e.elementType=Su,e.lanes=o,e;case Cu:return e=Tt(13,n,t,i),e.elementType=Cu,e.lanes=o,e;case Eu:return e=Tt(19,n,t,i),e.elementType=Eu,e.lanes=o,e;case Up:return _l(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bp:l=10;break e;case jp:l=9;break e;case js:l=11;break e;case Us:l=14;break e;case gn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Tt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zn(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Up,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Ua(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cc(e,t,n,r,i,o,l,a,u){return e=new C1(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(o),e}function E1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Im(e){if(!e)return Ln;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(st(n))return Ih(e,n,t)}return t}function Om(e,t,n,r,i,o,l,a,u){return e=Cc(n,r,!0,e,i,o,l,a,u),e.context=Im(null),n=e.current,r=tt(),i=zn(n),o=ln(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Qi(e,i,r),ct(e,r),e}function Il(e,t,n,r){var i=t.current,o=tt(),l=zn(i);return n=Im(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,l),e!==null&&(jt(e,i,l,o),_o(e,i,l)),l}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ec(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function P1(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}Ol.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Il(e,t,null,null)};Ol.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){Il(null,e,null,null)}),t[un]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&hh(e)}};function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function af(){}function b1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=fl(l);o.call(s)}}var l=Om(t,r,e,0,null,!1,!1,"",af);return e._reactRootContainer=l,e[un]=l.current,Ii(e.nodeType===8?e.parentNode:e),rr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=fl(u);a.call(s)}}var u=Cc(e,0,!1,null,null,!1,!1,"",af);return e._reactRootContainer=u,e[un]=u.current,Ii(e.nodeType===8?e.parentNode:e),rr(function(){Il(t,u,n,r)}),u}function Nl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=fl(l);a.call(u)}}Il(t,l,e,i)}else l=b1(n,t,e,i,r);return fl(l)}ch=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(Ws(t,n|1),ct(t,Ie()),!(ce&6)&&(jr=Ie()+500,Dn()))}break;case 13:rr(function(){var r=sn(e,1);if(r!==null){var i=tt();jt(r,e,1,i)}}),Ec(e,1)}};Ys=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=tt();jt(t,e,134217728,n)}Ec(e,134217728)}};dh=function(e){if(e.tag===13){var t=zn(e),n=sn(e,t);if(n!==null){var r=tt();jt(n,e,t,r)}Ec(e,t)}};fh=function(){return pe};ph=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Ou=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(_(90));Vp(r),Tu(r,i)}}}break;case"textarea":Yp(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};Jp=xc;eh=rr;var T1={usingClientEntryPoint:!1,Events:[Ki,vr,bl,Xp,Zp,xc]},li={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rh(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Sl=vo.inject(A1),qt=vo}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;kt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(t))throw Error(_(200));return E1(e,t,null,n)};kt.createRoot=function(e,t){if(!bc(e))throw Error(_(299));var n=!1,r="",i=Lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cc(e,1,!1,null,null,n,!1,r,i),e[un]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Pc(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=rh(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return rr(e)};kt.hydrate=function(e,t,n){if(!Ll(t))throw Error(_(200));return Nl(null,e,t,!0,n)};kt.hydrateRoot=function(e,t,n){if(!bc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Om(t,null,e,1,n??null,i,!1,o,l),e[un]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ol(t)};kt.render=function(e,t,n){if(!Ll(t))throw Error(_(200));return Nl(null,e,t,!1,n)};kt.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(_(40));return e._reactRootContainer?(rr(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};kt.unstable_batchedUpdates=xc;kt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Nl(e,t,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Np.exports=kt;var F1=Np.exports,uf=F1;wu.createRoot=uf.createRoot,wu.hydrateRoot=uf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const sf="popstate";function z1(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:u=""}=ur(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ps("",{pathname:l,search:a,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let u=i.location.href,s=u.indexOf("#");a=s===-1?u:u.slice(0,s)}return a+"#"+(typeof o=="string"?o:pl(o))}function r(i,o){Tc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return _1(t,n,r,e)}function Oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R1(){return Math.random().toString(36).substr(2,8)}function cf(e,t){return{usr:e.state,key:e.key,idx:t}}function ps(e,t,n,r){return n===void 0&&(n=null),Ui({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||R1()})}function pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Sn.Pop,u=null,s=d();s==null&&(s=0,l.replaceState(Ui({},l.state,{idx:s}),""));function d(){return(l.state||{idx:null}).idx}function c(){a=Sn.Pop;let C=d(),p=C==null?null:C-s;s=C,u&&u({action:a,location:w.location,delta:p})}function h(C,p){a=Sn.Push;let m=ps(w.location,C,p);n&&n(m,C),s=d()+1;let v=cf(m,s),E=w.createHref(m);try{l.pushState(v,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}o&&u&&u({action:a,location:w.location,delta:1})}function f(C,p){a=Sn.Replace;let m=ps(w.location,C,p);n&&n(m,C),s=d();let v=cf(m,s),E=w.createHref(m);l.replaceState(v,"",E),o&&u&&u({action:a,location:w.location,delta:0})}function k(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:pl(C);return m=m.replace(/ $/,"%20"),Oe(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let w={get action(){return a},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(sf,c),u=C,()=>{i.removeEventListener(sf,c),u=null}},createHref(C){return t(i,C)},createURL:k,encodeLocation(C){let p=k(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:f,go(C){return l.go(C)}};return w}var df;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(df||(df={}));function I1(e,t,n){return n===void 0&&(n="/"),O1(e,t,n,!1)}function O1(e,t,n,r){let i=typeof t=="string"?ur(t):t,o=Ac(i.pathname||"/",n);if(o==null)return null;let l=Mm(e);L1(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let s=Y1(o);a=V1(l[u],s,r)}return a}function Mm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=_n([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Mm(o.children,t,d,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:U1(s,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of Dm(o.path))i(o,l,u)}),t}function Dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Dm(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function L1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:H1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N1=/^:[\w-]+$/,M1=3,D1=2,$1=1,B1=10,j1=-2,ff=e=>e==="*";function U1(e,t){let n=e.split("/"),r=n.length;return n.some(ff)&&(r+=j1),t&&(r+=D1),n.filter(i=>!ff(i)).reduce((i,o)=>i+(N1.test(o)?M1:o===""?$1:B1),r)}function H1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function V1(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],s=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",c=pf({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},d),h=u.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=pf({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),l.push({params:i,pathname:_n([o,c.pathname]),pathnameBase:q1(_n([o,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(o=_n([o,c.pathnameBase]))}return l}function pf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((s,d,c)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let w=a[c]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const k=a[c];return f&&!k?s[h]=void 0:s[h]=(k||"").replace(/%2F/g,"/"),s},{}),pathname:o,pathnameBase:l,pattern:e}}function W1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Y1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ac(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Q1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ur(e):e;return{pathname:n?n.startsWith("/")?n:G1(n,t):t,search:X1(r),hash:Z1(i)}}function G1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ha(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fc(e,t){let n=K1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ur(e):(i=Ui({},e),Oe(!i.pathname||!i.pathname.includes("?"),Ha("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Ha("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Ha("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?t[c]:"/"}let u=Q1(i,a),s=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||d)&&(u.pathname+="/"),u}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),q1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Z1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $m=["post","put","patch","delete"];new Set($m);const ev=["get",...$m];new Set(ev);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hi.apply(this,arguments)}const Rc=D.createContext(null),tv=D.createContext(null),$n=D.createContext(null),Ml=D.createContext(null),fn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Bm=D.createContext(null);function nv(e,t){let{relative:n}=t===void 0?{}:t;Qr()||Oe(!1);let{basename:r,navigator:i}=D.useContext($n),{hash:o,pathname:l,search:a}=Vm(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:_n([r,l])),i.createHref({pathname:u,search:a,hash:o})}function Qr(){return D.useContext(Ml)!=null}function Xi(){return Qr()||Oe(!1),D.useContext(Ml).location}function jm(e){D.useContext($n).static||D.useLayoutEffect(e)}function Um(){let{isDataRoute:e}=D.useContext(fn);return e?mv():rv()}function rv(){Qr()||Oe(!1);let e=D.useContext(Rc),{basename:t,future:n,navigator:r}=D.useContext($n),{matches:i}=D.useContext(fn),{pathname:o}=Xi(),l=JSON.stringify(Fc(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return jm(()=>{a.current=!0}),D.useCallback(function(s,d){if(d===void 0&&(d={}),!a.current)return;if(typeof s=="number"){r.go(s);return}let c=zc(s,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:_n([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,o,e])}function Hm(){let{matches:e}=D.useContext(fn),t=e[e.length-1];return t?t.params:{}}function Vm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=D.useContext($n),{matches:i}=D.useContext(fn),{pathname:o}=Xi(),l=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return D.useMemo(()=>zc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function iv(e,t){return ov(e,t)}function ov(e,t,n,r){Qr()||Oe(!1);let{navigator:i}=D.useContext($n),{matches:o}=D.useContext(fn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let s=Xi(),d;if(t){var c;let C=typeof t=="string"?ur(t):t;u==="/"||(c=C.pathname)!=null&&c.startsWith(u)||Oe(!1),d=C}else d=s;let h=d.pathname||"/",f=h;if(u!=="/"){let C=u.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=I1(e,{pathname:f}),w=cv(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:_n([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:_n([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?D.createElement(Ml.Provider,{value:{location:Hi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Sn.Pop}},w):w}function lv(){let e=hv(),t=J1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:i},n):null,o)}const av=D.createElement(lv,null);class uv extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?D.createElement(fn.Provider,{value:this.props.routeContext},D.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sv(e){let{routeContext:t,match:n,children:r}=e,i=D.useContext(Rc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(fn.Provider,{value:t},r)}function cv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||Oe(!1),l=l.slice(0,Math.min(l.length,d+1))}let u=!1,s=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(s=d),c.route.id){let{loaderData:h,errors:f}=n,k=c.route.loader&&h[c.route.id]===void 0&&(!f||f[c.route.id]===void 0);if(c.route.lazy||k){u=!0,s>=0?l=l.slice(0,s+1):l=[l[0]];break}}}return l.reduceRight((d,c,h)=>{let f,k=!1,w=null,C=null;n&&(f=a&&c.route.id?a[c.route.id]:void 0,w=c.route.errorElement||av,u&&(s<0&&h===0?(gv("route-fallback",!1),k=!0,C=null):s===h&&(k=!0,C=c.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,h+1)),m=()=>{let v;return f?v=w:k?v=C:c.route.Component?v=D.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,D.createElement(sv,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?D.createElement(uv,{location:n.location,revalidation:n.revalidation,component:w,error:f,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Wm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wm||{}),hl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hl||{});function dv(e){let t=D.useContext(Rc);return t||Oe(!1),t}function fv(e){let t=D.useContext(tv);return t||Oe(!1),t}function pv(e){let t=D.useContext(fn);return t||Oe(!1),t}function Ym(e){let t=pv(),n=t.matches[t.matches.length-1];return n.route.id||Oe(!1),n.route.id}function hv(){var e;let t=D.useContext(Bm),n=fv(hl.UseRouteError),r=Ym(hl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mv(){let{router:e}=dv(Wm.UseNavigateStable),t=Ym(hl.UseNavigateStable),n=D.useRef(!1);return jm(()=>{n.current=!0}),D.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hi({fromRouteId:t},o)))},[e,t])}const hf={};function gv(e,t,n){!t&&!hf[e]&&(hf[e]=!0)}function yv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Qm(e){let{to:t,replace:n,state:r,relative:i}=e;Qr()||Oe(!1);let{future:o,static:l}=D.useContext($n),{matches:a}=D.useContext(fn),{pathname:u}=Xi(),s=Um(),d=zc(t,Fc(a,o.v7_relativeSplatPath),u,i==="path"),c=JSON.stringify(d);return D.useEffect(()=>s(JSON.parse(c),{replace:n,state:r,relative:i}),[s,c,i,n,r]),null}function Vt(e){Oe(!1)}function vv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:o,static:l=!1,future:a}=e;Qr()&&Oe(!1);let u=t.replace(/^\/*/,"/"),s=D.useMemo(()=>({basename:u,navigator:o,static:l,future:Hi({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=ur(r));let{pathname:d="/",search:c="",hash:h="",state:f=null,key:k="default"}=r,w=D.useMemo(()=>{let C=Ac(d,u);return C==null?null:{location:{pathname:C,search:c,hash:h,state:f,key:k},navigationType:i}},[u,d,c,h,f,k,i]);return w==null?null:D.createElement($n.Provider,{value:s},D.createElement(Ml.Provider,{children:n,value:w}))}function xv(e){let{children:t,location:n}=e;return iv(hs(t),n)}new Promise(()=>{});function hs(e,t){t===void 0&&(t=[]);let n=[];return D.Children.forEach(e,(r,i)=>{if(!D.isValidElement(r))return;let o=[...t,i];if(r.type===D.Fragment){n.push.apply(n,hs(r.props.children,o));return}r.type!==Vt&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=hs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}function wv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sv(e,t){return e.button===0&&(!t||t==="_self")&&!kv(e)}const Cv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ev="6";try{window.__reactRouterVersion=Ev}catch{}const Pv="startTransition",mf=vy[Pv];function bv(e){let{basename:t,children:n,future:r,window:i}=e,o=D.useRef();o.current==null&&(o.current=z1({window:i,v5Compat:!0}));let l=o.current,[a,u]=D.useState({action:l.action,location:l.location}),{v7_startTransition:s}=r||{},d=D.useCallback(c=>{s&&mf?mf(()=>u(c)):u(c)},[u,s]);return D.useLayoutEffect(()=>l.listen(d),[l,d]),D.useEffect(()=>yv(r),[r]),D.createElement(vv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=D.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:d,viewTransition:c}=t,h=wv(t,Cv),{basename:f}=D.useContext($n),k,w=!1;if(typeof s=="string"&&Av.test(s)&&(k=s,Tv))try{let v=new URL(window.location.href),E=s.startsWith("//")?new URL(v.protocol+s):new URL(s),T=Ac(E.pathname,f);E.origin===v.origin&&T!=null?s=T+E.search+E.hash:w=!0}catch{}let C=nv(s,{relative:i}),p=Fv(s,{replace:l,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:c});function m(v){r&&r(v),v.defaultPrevented||p(v)}return D.createElement("a",ms({},h,{href:k||C,onClick:w||o?r:m,ref:n,target:u}))});var gf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gf||(gf={}));var yf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yf||(yf={}));function Fv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=Um(),s=Xi(),d=Vm(e,{relative:l});return D.useCallback(c=>{if(Sv(c,n)){c.preventDefault();let h=r!==void 0?r:pl(s)===pl(d);u(e,{replace:h,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[s,u,d,r,i,n,e,o,l,a])}var Gm={exports:{}},ve={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Symbol.for("react.transitional.element"),Ic=Symbol.for("react.portal"),Dl=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),jl=Symbol.for("react.consumer"),Ul=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),Ql=Symbol.for("react.lazy"),zv=Symbol.for("react.view_transition"),Rv=Symbol.for("react.client.reference");function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case Dl:case Bl:case $l:case Vl:case Wl:case zv:return e;default:switch(e=e&&e.$$typeof,e){case Ul:case Hl:case Ql:case Yl:return e;case jl:return e;default:return t}}case Ic:return t}}}ve.ContextConsumer=jl;ve.ContextProvider=Ul;ve.Element=_c;ve.ForwardRef=Hl;ve.Fragment=Dl;ve.Lazy=Ql;ve.Memo=Yl;ve.Portal=Ic;ve.Profiler=Bl;ve.StrictMode=$l;ve.Suspense=Vl;ve.SuspenseList=Wl;ve.isContextConsumer=function(e){return Rt(e)===jl};ve.isContextProvider=function(e){return Rt(e)===Ul};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};ve.isForwardRef=function(e){return Rt(e)===Hl};ve.isFragment=function(e){return Rt(e)===Dl};ve.isLazy=function(e){return Rt(e)===Ql};ve.isMemo=function(e){return Rt(e)===Yl};ve.isPortal=function(e){return Rt(e)===Ic};ve.isProfiler=function(e){return Rt(e)===Bl};ve.isStrictMode=function(e){return Rt(e)===$l};ve.isSuspense=function(e){return Rt(e)===Vl};ve.isSuspenseList=function(e){return Rt(e)===Wl};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dl||e===Bl||e===$l||e===Vl||e===Wl||typeof e=="object"&&e!==null&&(e.$$typeof===Ql||e.$$typeof===Yl||e.$$typeof===Ul||e.$$typeof===jl||e.$$typeof===Hl||e.$$typeof===Rv||e.getModuleId!==void 0)};ve.typeOf=Rt;Gm.exports=ve;var Km=Gm.exports;function _v(e){function t(N,g,B,Y,P){for(var ee=0,M=0,fe=0,re=0,ue,X,$e=0,Ke=0,le,Be=le=ue=0,se=0,Le=0,jn=0,Ne=0,Un=B.length,Hn=Un-1,ft,q="",be="",qr="",A="",I;se<Un;){if(X=B.charCodeAt(se),se===Hn&&M+re+fe+ee!==0&&(M!==0&&(X=M===47?10:47),re=fe=ee=0,Un++,Hn++),M+re+fe+ee===0){if(se===Hn&&(0<Le&&(q=q.replace(h,"")),0<q.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:q+=B.charAt(se)}X=59}switch(X){case 123:for(q=q.trim(),ue=q.charCodeAt(0),le=1,Ne=++se;se<Un;){switch(X=B.charCodeAt(se)){case 123:le++;break;case 125:le--;break;case 47:switch(X=B.charCodeAt(se+1)){case 42:case 47:e:{for(Be=se+1;Be<Hn;++Be)switch(B.charCodeAt(Be)){case 47:if(X===42&&B.charCodeAt(Be-1)===42&&se+2!==Be){se=Be+1;break e}break;case 10:if(X===47){se=Be+1;break e}}se=Be}}break;case 91:X++;case 40:X++;case 34:case 39:for(;se++<Hn&&B.charCodeAt(se)!==X;);}if(le===0)break;se++}switch(le=B.substring(Ne,se),ue===0&&(ue=(q=q.replace(c,"").trim()).charCodeAt(0)),ue){case 64:switch(0<Le&&(q=q.replace(h,"")),X=q.charCodeAt(1),X){case 100:case 109:case 115:case 45:Le=g;break;default:Le=xe}if(le=t(g,Le,le,X,P+1),Ne=le.length,0<L&&(Le=n(xe,q,jn),I=a(3,le,Le,g,J,$,Ne,X,P,Y),q=Le.join(""),I!==void 0&&(Ne=(le=I.trim()).length)===0&&(X=0,le="")),0<Ne)switch(X){case 115:q=q.replace(S,l);case 100:case 109:case 45:le=q+"{"+le+"}";break;case 107:q=q.replace(m,"$1 $2"),le=q+"{"+le+"}",le=Q===1||Q===2&&o("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=q+le,Y===112&&(le=(be+=le,""))}else le="";break;default:le=t(g,n(g,q,jn),le,Y,P+1)}qr+=le,le=jn=Le=Be=ue=0,q="",X=B.charCodeAt(++se);break;case 125:case 59:if(q=(0<Le?q.replace(h,""):q).trim(),1<(Ne=q.length))switch(Be===0&&(ue=q.charCodeAt(0),ue===45||96<ue&&123>ue)&&(Ne=(q=q.replace(" ",":")).length),0<L&&(I=a(1,q,g,N,J,$,be.length,Y,P,Y))!==void 0&&(Ne=(q=I.trim()).length)===0&&(q="\0\0"),ue=q.charCodeAt(0),X=q.charCodeAt(1),ue){case 0:break;case 64:if(X===105||X===99){A+=q+B.charAt(se);break}default:q.charCodeAt(Ne-1)!==58&&(be+=i(q,ue,X,q.charCodeAt(2)))}jn=Le=Be=ue=0,q="",X=B.charCodeAt(++se)}}switch(X){case 13:case 10:M===47?M=0:1+ue===0&&Y!==107&&0<q.length&&(Le=1,q+="\0"),0<L*x&&a(0,q,g,N,J,$,be.length,Y,P,Y),$=1,J++;break;case 59:case 125:if(M+re+fe+ee===0){$++;break}default:switch($++,ft=B.charAt(se),X){case 9:case 32:if(re+ee+M===0)switch($e){case 44:case 58:case 9:case 32:ft="";break;default:X!==32&&(ft=" ")}break;case 0:ft="\\0";break;case 12:ft="\\f";break;case 11:ft="\\v";break;case 38:re+M+ee===0&&(Le=jn=1,ft="\f"+ft);break;case 108:if(re+M+ee+oe===0&&0<Be)switch(se-Be){case 2:$e===112&&B.charCodeAt(se-3)===58&&(oe=$e);case 8:Ke===111&&(oe=Ke)}break;case 58:re+M+ee===0&&(Be=se);break;case 44:M+fe+re+ee===0&&(Le=1,ft+="\r");break;case 34:case 39:M===0&&(re=re===X?0:re===0?X:re);break;case 91:re+M+fe===0&&ee++;break;case 93:re+M+fe===0&&ee--;break;case 41:re+M+ee===0&&fe--;break;case 40:if(re+M+ee===0){if(ue===0)switch(2*$e+3*Ke){case 533:break;default:ue=1}fe++}break;case 64:M+fe+re+ee+Be+le===0&&(le=1);break;case 42:case 47:if(!(0<re+ee+fe))switch(M){case 0:switch(2*X+3*B.charCodeAt(se+1)){case 235:M=47;break;case 220:Ne=se,M=42}break;case 42:X===47&&$e===42&&Ne+2!==se&&(B.charCodeAt(Ne+2)===33&&(be+=B.substring(Ne,se+1)),ft="",M=0)}}M===0&&(q+=ft)}Ke=$e,$e=X,se++}if(Ne=be.length,0<Ne){if(Le=g,0<L&&(I=a(2,be,Le,N,J,$,Ne,Y,P,Y),I!==void 0&&(be=I).length===0))return A+be+qr;if(be=Le.join(",")+"{"+be+"}",Q*oe!==0){switch(Q!==2||o(be,2)||(oe=0),oe){case 111:be=be.replace(E,":-moz-$1")+be;break;case 112:be=be.replace(v,"::-webkit-input-$1")+be.replace(v,"::-moz-$1")+be.replace(v,":-ms-input-$1")+be}oe=0}}return A+be+qr}function n(N,g,B){var Y=g.trim().split(C);g=Y;var P=Y.length,ee=N.length;switch(ee){case 0:case 1:var M=0;for(N=ee===0?"":N[0]+" ";M<P;++M)g[M]=r(N,g[M],B).trim();break;default:var fe=M=0;for(g=[];M<P;++M)for(var re=0;re<ee;++re)g[fe++]=r(N[re]+" ",Y[M],B).trim()}return g}function r(N,g,B){var Y=g.charCodeAt(0);switch(33>Y&&(Y=(g=g.trim()).charCodeAt(0)),Y){case 38:return g.replace(p,"$1"+N.trim());case 58:return N.trim()+g.replace(p,"$1"+N.trim());default:if(0<1*B&&0<g.indexOf("\f"))return g.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+g}function i(N,g,B,Y){var P=N+";",ee=2*g+3*B+4*Y;if(ee===944){N=P.indexOf(":",9)+1;var M=P.substring(N,P.length-1).trim();return M=P.substring(0,N).trim()+M+";",Q===1||Q===2&&o(M,1)?"-webkit-"+M+M:M}if(Q===0||Q===2&&!o(P,1))return P;switch(ee){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(j,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return M=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+P+"-ms-flex-pack"+M+P;case 1005:return k.test(P)?P.replace(f,":-webkit-")+P.replace(f,":-moz-")+P:P;case 1e3:switch(M=P.substring(13).trim(),g=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(g)){case 226:M=P.replace(T,"tb");break;case 232:M=P.replace(T,"tb-rl");break;case 220:M=P.replace(T,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+M+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(g=(P=N).length-10,M=(P.charCodeAt(g)===33?P.substring(0,g):P).substring(N.indexOf(":",7)+1).trim(),ee=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:P=P.replace(M,"-webkit-"+M)+";"+P;break;case 207:case 102:P=P.replace(M,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+P.replace(M,"-webkit-"+M)+";"+P.replace(M,"-ms-"+M+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return M=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+M+"-ms-flex-"+M+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(R,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(R,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if(V.test(N)===!0)return(M=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),g,B,Y).replace(":fill-available",":stretch"):P.replace(M,"-webkit-"+M)+P.replace(M,"-moz-"+M.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,B+Y===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+P}return P}function o(N,g){var B=N.indexOf(g===1?":":"{"),Y=N.substring(0,g!==3?B:10);return B=N.substring(B+1,N.length-1),W(g!==2?Y:Y.replace(H,"$1"),B,g)}function l(N,g){var B=i(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return B!==g+";"?B.replace(z," or ($1)").substring(4):"("+g+")"}function a(N,g,B,Y,P,ee,M,fe,re,ue){for(var X=0,$e=g,Ke;X<L;++X)switch(Ke=ae[X].call(d,N,$e,B,Y,P,ee,M,fe,re,ue)){case void 0:case!1:case!0:case null:break;default:$e=Ke}if($e!==g)return $e}function u(N){switch(N){case void 0:case null:L=ae.length=0;break;default:if(typeof N=="function")ae[L++]=N;else if(typeof N=="object")for(var g=0,B=N.length;g<B;++g)u(N[g]);else x=!!N|0}return u}function s(N){return N=N.prefix,N!==void 0&&(W=null,N?typeof N!="function"?Q=1:(Q=2,W=N):Q=0),s}function d(N,g){var B=N;if(33>B.charCodeAt(0)&&(B=B.trim()),ne=B,B=[ne],0<L){var Y=a(-1,g,B,B,J,$,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(g=Y)}var P=t(xe,B,g,0,0);return 0<L&&(Y=a(-2,P,B,B,J,$,P.length,0,0,0),Y!==void 0&&(P=Y)),ne="",oe=0,$=J=1,P}var c=/^\0+/g,h=/[\0\r\f]/g,f=/: */g,k=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,z=/([\s\S]*?);/g,R=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,$=1,J=1,oe=0,Q=1,xe=[],ae=[],L=0,W=null,x=0,ne="";return d.use=u,d.set=s,e!==void 0&&s(e),d}var Iv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ov(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Lv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vf=Ov(function(e){return Lv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),qm={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,Oc=We?Symbol.for("react.element"):60103,Lc=We?Symbol.for("react.portal"):60106,Gl=We?Symbol.for("react.fragment"):60107,Kl=We?Symbol.for("react.strict_mode"):60108,ql=We?Symbol.for("react.profiler"):60114,Xl=We?Symbol.for("react.provider"):60109,Zl=We?Symbol.for("react.context"):60110,Nc=We?Symbol.for("react.async_mode"):60111,Jl=We?Symbol.for("react.concurrent_mode"):60111,ea=We?Symbol.for("react.forward_ref"):60112,ta=We?Symbol.for("react.suspense"):60113,Nv=We?Symbol.for("react.suspense_list"):60120,na=We?Symbol.for("react.memo"):60115,ra=We?Symbol.for("react.lazy"):60116,Mv=We?Symbol.for("react.block"):60121,Dv=We?Symbol.for("react.fundamental"):60117,$v=We?Symbol.for("react.responder"):60118,Bv=We?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Oc:switch(e=e.type,e){case Nc:case Jl:case Gl:case ql:case Kl:case ta:return e;default:switch(e=e&&e.$$typeof,e){case Zl:case ea:case ra:case na:case Xl:return e;default:return t}}case Lc:return t}}}function Xm(e){return Ct(e)===Jl}he.AsyncMode=Nc;he.ConcurrentMode=Jl;he.ContextConsumer=Zl;he.ContextProvider=Xl;he.Element=Oc;he.ForwardRef=ea;he.Fragment=Gl;he.Lazy=ra;he.Memo=na;he.Portal=Lc;he.Profiler=ql;he.StrictMode=Kl;he.Suspense=ta;he.isAsyncMode=function(e){return Xm(e)||Ct(e)===Nc};he.isConcurrentMode=Xm;he.isContextConsumer=function(e){return Ct(e)===Zl};he.isContextProvider=function(e){return Ct(e)===Xl};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oc};he.isForwardRef=function(e){return Ct(e)===ea};he.isFragment=function(e){return Ct(e)===Gl};he.isLazy=function(e){return Ct(e)===ra};he.isMemo=function(e){return Ct(e)===na};he.isPortal=function(e){return Ct(e)===Lc};he.isProfiler=function(e){return Ct(e)===ql};he.isStrictMode=function(e){return Ct(e)===Kl};he.isSuspense=function(e){return Ct(e)===ta};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gl||e===Jl||e===ql||e===Kl||e===ta||e===Nv||typeof e=="object"&&e!==null&&(e.$$typeof===ra||e.$$typeof===na||e.$$typeof===Xl||e.$$typeof===Zl||e.$$typeof===ea||e.$$typeof===Dv||e.$$typeof===$v||e.$$typeof===Bv||e.$$typeof===Mv)};he.typeOf=Ct;qm.exports=he;var jv=qm.exports,Mc=jv,Uv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dc={};Dc[Mc.ForwardRef]=Vv;Dc[Mc.Memo]=Zm;function xf(e){return Mc.isMemo(e)?Zm:Dc[e.$$typeof]||Uv}var Wv=Object.defineProperty,Yv=Object.getOwnPropertyNames,wf=Object.getOwnPropertySymbols,Qv=Object.getOwnPropertyDescriptor,Gv=Object.getPrototypeOf,kf=Object.prototype;function Jm(e,t,n){if(typeof t!="string"){if(kf){var r=Gv(t);r&&r!==kf&&Jm(e,r,n)}var i=Yv(t);wf&&(i=i.concat(wf(t)));for(var o=xf(e),l=xf(t),a=0;a<i.length;++a){var u=i[a];if(!Hv[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var s=Qv(t,u);try{Wv(e,u,s)}catch{}}}}return e}var Kv=Jm;const qv=or(Kv);function Kt(){return(Kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},gs=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Km.typeOf(e)},ml=Object.freeze([]),In=Object.freeze({});function Vi(e){return typeof e=="function"}function Cf(e){return e.displayName||e.name||"Component"}function $c(e){return e&&typeof e.styledComponentId=="string"}var Ur=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Bc=typeof window<"u"&&"HTMLElement"in window,Xv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Zv={};function Zi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Jv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Zi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,d=r.length;s<d;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),$o=new Map,gl=new Map,ki=1,xo=function(e){if($o.has(e))return $o.get(e);for(;gl.has(ki);)ki++;var t=ki++;return $o.set(e,t),gl.set(t,e),t},ex=function(e){return gl.get(e)},tx=function(e,t){t>=ki&&(ki=t+1),$o.set(e,t),gl.set(t,e)},nx="style["+Ur+'][data-styled-version="5.3.11"]',rx=new RegExp("^"+Ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ix=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},ox=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(rx);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(tx(s,u),ix(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},lx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},eg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var d=u[s];if(d&&d.nodeType===1&&d.hasAttribute(Ur))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","5.3.11");var l=lx();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},ax=function(){function e(n){var r=this.element=eg(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var u=o[l];if(u.ownerNode===i)return u}Zi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ux=function(){function e(n){var r=this.element=eg(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),sx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ef=Bc,cx={isServer:!Bc,useCSSOMInjection:!Xv},yl=function(){function e(n,r,i){n===void 0&&(n=In),r===void 0&&(r={}),this.options=Kt({},cx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Bc&&Ef&&(Ef=!1,function(o){for(var l=document.querySelectorAll(nx),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(Ur)!=="active"&&(ox(o,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return xo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new sx(l):o?new ax(l):new ux(l),new Jv(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(xo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(xo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(xo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=ex(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var d=Ur+".g"+l+'[id="'+a+'"]',c="";u!==void 0&&u.forEach(function(h){h.length>0&&(c+=h+",")}),o+=""+s+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),dx=/(a)(d)/gi,Pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function ys(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pf(t%52)+n;return(Pf(t%52)+n).replace(dx,"$1-$2")}var Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tg=function(e){return Pr(5381,e)};function ng(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vi(n)&&!$c(n))return!1}return!0}var fx=tg("5.3.11"),px=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ng(t),this.componentId=n,this.baseHash=Pr(fx,n),this.baseStyle=r,yl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=ir(this.rules,t,n,r).join(""),a=ys(Pr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var u=r(l,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,d=Pr(this.baseHash,r.hash),c="",h=0;h<s;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var k=ir(f,t,n,r),w=Array.isArray(k)?k.join(""):k;d=Pr(d,w+h),c+=w}}if(c){var C=ys(d>>>0);if(!n.hasNameForId(i,C)){var p=r(c,"."+C,void 0,i);n.insertRules(i,C,p)}o.push(C)}}return o.join(" ")},e}(),hx=/^\s*\/\/.*$/gm,mx=[":","[",".","#"];function gx(e){var t,n,r,i,o=e===void 0?In:e,l=o.options,a=l===void 0?In:l,u=o.plugins,s=u===void 0?ml:u,d=new _v(a),c=[],h=function(w){function C(p){if(p)try{w(p+"}")}catch{}}return function(p,m,v,E,T,S,z,R,H,V){switch(p){case 1:if(H===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(R===0)return m+"/*|*/";break;case 3:switch(R){case 102:case 112:return w(v[0]+m),"";default:return m+(V===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(C)}}}(function(w){c.push(w)}),f=function(w,C,p){return C===0&&mx.indexOf(p[n.length])!==-1||p.match(i)?w:"."+t};function k(w,C,p,m){m===void 0&&(m="&");var v=w.replace(hx,""),E=C&&p?p+" "+C+" { "+v+" }":v;return t=m,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(p||!C?"":C,E)}return d.use([].concat(s,[function(w,C,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,f))},h,function(w){if(w===-2){var C=c;return c=[],C}}])),k.hash=s.length?s.reduce(function(w,C){return C.name||Zi(15),Pr(w,C.name)},5381).toString():"",k}var rg=vt.createContext();rg.Consumer;var ig=vt.createContext(),yx=(ig.Consumer,new yl),vs=gx();function og(){return D.useContext(rg)||yx}function lg(){return D.useContext(ig)||vs}var vx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=vs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Zi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=vs),this.name+t.hash},e}(),xx=/([A-Z])/,wx=/([A-Z])/g,kx=/^ms-/,Sx=function(e){return"-"+e.toLowerCase()};function bf(e){return xx.test(e)?e.replace(wx,Sx).replace(kx,"-ms-"):e}var Tf=function(e){return e==null||e===!1||e===""};function ir(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=ir(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Tf(e))return"";if($c(e))return"."+e.styledComponentId;if(Vi(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return ir(u,t,n,r)}var s;return e instanceof vx?n?(e.inject(n,r),e.getName(r)):e:gs(e)?function d(c,h){var f,k,w=[];for(var C in c)c.hasOwnProperty(C)&&!Tf(c[C])&&(Array.isArray(c[C])&&c[C].isCss||Vi(c[C])?w.push(bf(C)+":",c[C],";"):gs(c[C])?w.push.apply(w,d(c[C],C)):w.push(bf(C)+": "+(f=C,(k=c[C])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||f in Iv||f.startsWith("--")?String(k).trim():k+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var Af=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ag(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Vi(e)||gs(e)?Af(ir(Sf(ml,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Af(ir(Sf(e,n)))}var ug=function(e,t,n){return n===void 0&&(n=In),e.theme!==n.theme&&e.theme||t||n.theme},Cx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ex=/(^-|-$)/g;function Va(e){return e.replace(Cx,"-").replace(Ex,"")}var sg=function(e){return ys(tg(e)>>>0)};function wo(e){return typeof e=="string"&&!0}var xs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Px=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bx(e,t,n){var r=e[n];xs(t)&&xs(r)?cg(r,t):e[n]=t}function cg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(xs(l))for(var a in l)Px(a)&&bx(e,l[a],a)}return e}var jc=vt.createContext();jc.Consumer;var Wa={};function dg(e,t,n){var r=$c(e),i=!wo(e),o=t.attrs,l=o===void 0?ml:o,a=t.componentId,u=a===void 0?function(m,v){var E=typeof m!="string"?"sc":Va(m);Wa[E]=(Wa[E]||0)+1;var T=E+"-"+sg("5.3.11"+E+Wa[E]);return v?v+"-"+T:T}(t.displayName,t.parentComponentId):a,s=t.displayName,d=s===void 0?function(m){return wo(m)?"styled."+m:"Styled("+Cf(m)+")"}(e):s,c=t.displayName&&t.componentId?Va(t.displayName)+"-"+t.componentId:t.componentId||u,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,f=t.shouldForwardProp;r&&e.shouldForwardProp&&(f=t.shouldForwardProp?function(m,v,E){return e.shouldForwardProp(m,v,E)&&t.shouldForwardProp(m,v,E)}:e.shouldForwardProp);var k,w=new px(n,c,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,p=function(m,v){return function(E,T,S,z){var R=E.attrs,H=E.componentStyle,V=E.defaultProps,j=E.foldedComponentIds,$=E.shouldForwardProp,J=E.styledComponentId,oe=E.target,Q=function(Y,P,ee){Y===void 0&&(Y=In);var M=Kt({},P,{theme:Y}),fe={};return ee.forEach(function(re){var ue,X,$e,Ke=re;for(ue in Vi(Ke)&&(Ke=Ke(M)),Ke)M[ue]=fe[ue]=ue==="className"?(X=fe[ue],$e=Ke[ue],X&&$e?X+" "+$e:X||$e):Ke[ue]}),[M,fe]}(ug(T,D.useContext(jc),V)||In,T,R),xe=Q[0],ae=Q[1],L=function(Y,P,ee,M){var fe=og(),re=lg(),ue=P?Y.generateAndInjectStyles(In,fe,re):Y.generateAndInjectStyles(ee,fe,re);return ue}(H,z,xe),W=S,x=ae.$as||T.$as||ae.as||T.as||oe,ne=wo(x),N=ae!==T?Kt({},T,{},ae):T,g={};for(var B in N)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?g.as=N[B]:($?$(B,vf,x):!ne||vf(B))&&(g[B]=N[B]));return T.style&&ae.style!==T.style&&(g.style=Kt({},T.style,{},ae.style)),g.className=Array.prototype.concat(j,J,L!==J?L:null,T.className,ae.className).filter(Boolean).join(" "),g.ref=W,D.createElement(x,g)}(k,m,v,C)};return p.displayName=d,(k=vt.forwardRef(p)).attrs=h,k.componentStyle=w,k.displayName=d,k.shouldForwardProp=f,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ml,k.styledComponentId=c,k.target=r?e.target:e,k.withComponent=function(m){var v=t.componentId,E=function(S,z){if(S==null)return{};var R,H,V={},j=Object.keys(S);for(H=0;H<j.length;H++)R=j[H],z.indexOf(R)>=0||(V[R]=S[R]);return V}(t,["componentId"]),T=v&&v+"-"+(wo(m)?m:Va(Cf(m)));return dg(m,Kt({},E,{attrs:h,componentId:T}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?cg({},e.defaultProps,m):m}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),i&&qv(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var ws=function(e){return function t(n,r,i){if(i===void 0&&(i=In),!Km.isValidElementType(r))return Zi(1,String(r));var o=function(){return n(r,i,ag.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Kt({},i,{},l))},o.attrs=function(l){return t(n,r,Kt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(dg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ws[e]=ws(e)});var Tx=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ng(n),yl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(ir(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&yl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Ax(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ag.apply(void 0,[e].concat(n)),o="sc-global-"+sg(JSON.stringify(i)),l=new Tx(i,o);function a(s){var d=og(),c=lg(),h=D.useContext(jc),f=D.useRef(d.allocateGSInstance(o)).current;return d.server&&u(f,s,d,h,c),D.useLayoutEffect(function(){if(!d.server)return u(f,s,d,h,c),function(){return l.removeStyles(f,d)}},[f,s,d,h,c]),null}function u(s,d,c,h,f){if(l.isStatic)l.renderStyles(s,Zv,c,f);else{var k=Kt({},d,{theme:ug(d,h,a.defaultProps)});l.renderStyles(s,k,c,f)}}return vt.memo(a)}const b=ws;var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rx=(e,t)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,children:a,...u},s)=>D.createElement("svg",{ref:s,...Fx,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:`lucide lucide-${zx(e)}`,...u},[...t.map(([d,c])=>D.createElement(d,c)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var ze=Rx;const fg=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),ks=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),vl=ze("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]),Ss=ze("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),_x=ze("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Wi=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Ix=ze("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),Ox=ze("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Lx=ze("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),Nx=ze("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Bo=ze("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),pg=ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Mx=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Dx=ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),$x=ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),xl=ze("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Bx=ze("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),jx=ze("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Cn=ze("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Si=ze("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),_r=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ux=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Hx=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vx="/hero-illustration.svg",Wx=e=>`# ${e}

In this article, we explore practical strategies, frameworks, and checklists you can apply today to improve your digital marketing performance.

## Key Takeaways
- Audience research and ICP definition are prerequisites for effective campaigns
- Content-market fit beats channel hacks over the long term
- Measurement, experimentation, and iteration drive compounding ROI

## Action Plan
1. Define your goals, KPIs, and guardrails
2. Map funnel stages to content and channels
3. Launch minimum-viable campaigns with clear hypotheses
4. Measure, learn, iterate, and scale winners
`;function Yx(e=1e3){return[["SEO Content Strategy for 2025","SEO"],["Building a Full-Funnel Content Calendar","Content"],["High-ROI PPC Campaign Structures","PPC"],["LinkedIn Organic: B2B Playbook","Social"],["Email Automation for Lead Nurture","Email"],["CRO: Landing Page Templates That Convert","CRO"],["Attribution Simplified for Small Teams","Analytics"],["GA4 Dashboards That Matter","Analytics"],["Repurposing Content Across Channels","Content"],["TikTok Ads for Lead Gen","Social"]].map(([n,r],i)=>({id:e+i,title:n,excerpt:`Practical guide: ${n}. Frameworks, checklists, and examples to execute now.`,content:Wx(n),author:"Marketing Team",date:"2025-01-01",category:r,tags:[r,"Digital Marketing"],readTime:`${6+i%4} min`,image:Vx}))}const Hr=[{id:1,title:"Bitcoin's Next Bull Run: Technical Analysis and Market Predictions",excerpt:"Analyzing key technical indicators and market trends that could signal Bitcoin's next major price movement. What do the charts tell us about BTC's future?",content:`# Bitcoin's Next Bull Run: Technical Analysis and Market Predictions

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

While the hype has cooled, the underlying technology and creative potential remain strong foundations for future growth.`,author:"Emma Williams",date:"2024-01-05",category:"NFTs",tags:["NFTs","Digital Art","Collectibles","Market Trends"],readTime:"9 min",image:"/hero-illustration.svg"}].concat(Yx(1e3)),hg=["All","Analysis","Guide","Security","Technology","NFTs","DeFi","Trading","News","SEO","Content","PPC","Social","Email","CRO","Analytics"],dr=Hr[0],Qx=b.div`
  padding-top: 80px; /* Account for fixed navbar */
`,Gx=b.section`
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
    background: url(${"/hero-illustration.svg"}) center/cover no-repeat;
    opacity: 0.1;
    z-index: 1;
  }
`,Kx=b.div`
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
`,qx=b.div`
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
`,Xx=b.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Zx=b(it)`
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
`,Jx=b(it)`
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
`,ew=b.section`
  padding: 5rem 0;
  background: #f8fafc;
`,Ya=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,Ff=b.div`
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
`,tw=b.div`
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
`,zf=b.div`
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
`,nw=b.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Rf=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  width: fit-content;
`,rw=b.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`,iw=b.p`
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,_f=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #64748b;
`,ko=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ow=b(it)`
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
`,lw=b.section`
  padding: 5rem 0;
  background: white;
`,aw=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,uw=b(it)`
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
`,sw=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,cw=b.div`
  padding: 1.5rem;
`,dw=b.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`,fw=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,pw=b.section`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0;
`,hw=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`,So=b.div`
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
`;function mw(){const e=Hr.slice(1,4);return F(Qx,{children:[y(Gx,{children:F(Kx,{children:[F(qx,{children:[F("h1",{children:["Navigate the ",y("span",{className:"text-gradient",children:"Crypto World"})," with Confidence"]}),y("p",{children:"Get expert insights, market analysis, and educational content to make informed decisions in the rapidly evolving cryptocurrency landscape."}),F(Xx,{children:[F(Zx,{to:"/blog",children:["Explore Articles",y(ks,{size:20})]}),y(Jx,{to:"/about",children:"Learn More"})]})]}),y("div",{children:y(zf,{style:{borderRadius:"16px",fontSize:"4rem"},children:"₿"})})]})}),y(ew,{children:F(Ya,{children:[F(Ff,{children:[y("h2",{children:"Featured Article"}),y("p",{children:"Deep dive into our latest comprehensive analysis and insights"})]}),F(tw,{children:[y(zf,{children:y(Cn,{size:80})}),F(nw,{children:[y(Rf,{children:dr.category}),y(rw,{children:dr.title}),F(_f,{children:[F(ko,{children:[y(_r,{size:16}),dr.author]}),F(ko,{children:[y(Wi,{size:16}),dr.readTime]})]}),y(iw,{children:dr.excerpt}),F(ow,{to:`/post/${dr.id}`,children:["Read Full Article",y(ks,{size:16})]})]})]})]})}),y(lw,{children:F(Ya,{children:[F(Ff,{children:[y("h2",{children:"Latest Insights"}),y("p",{children:"Stay updated with the latest trends, analysis, and guides in the crypto space"})]}),y(aw,{children:e.map(t=>F(uw,{to:`/post/${t.id}`,children:[y(sw,{children:t.category==="Guide"?y(Ss,{size:60}):t.category==="Security"?y(xl,{size:60}):y(Cn,{size:60})}),F(cw,{children:[y(Rf,{children:t.category}),y(dw,{children:t.title}),F(fw,{children:[t.excerpt.substring(0,120),"..."]}),F(_f,{children:[F(ko,{children:[y(Wi,{size:14}),t.readTime]}),F(ko,{children:[y(_r,{size:14}),t.author]})]})]})]},t.id))})]})}),y(pw,{children:y(Ya,{children:F(hw,{children:[F(So,{children:[y("div",{className:"icon",children:y(Ss,{size:48})}),y("h3",{children:"50+"}),y("p",{children:"In-depth Articles"})]}),F(So,{children:[y("div",{className:"icon",children:y(Cn,{size:48})}),y("h3",{children:"10K+"}),y("p",{children:"Monthly Readers"})]}),F(So,{children:[y("div",{className:"icon",children:y(xl,{size:48})}),y("h3",{children:"100%"}),y("p",{children:"Trusted Content"})]}),F(So,{children:[y("div",{className:"icon",children:y(_r,{size:48})}),y("h3",{children:"5+"}),y("p",{children:"Expert Authors"})]})]})})})]})}const gw=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,yw=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`,vw=b.div`
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
`,xw=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,ww=b.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,kw=b.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Sw=b.div`
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
`,Cw=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,Ew=b.button`
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
`,Pw=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bw=b(it)`
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
`,Tw=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`,Aw=b.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Fw=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1rem;
`,zw=b.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  line-height: 1.4;
`,Rw=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`,_w=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`,If=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Iw=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`,Ow=b.span`
  background: #f8fafc;
  color: #64748b;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`,Lw=b.div`
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
`,Nw=b.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;function Mw(){const[e,t]=D.useState(""),[n,r]=D.useState("All"),i=Hr.filter(o=>{const l=o.title.toLowerCase().includes(e.toLowerCase())||o.excerpt.toLowerCase().includes(e.toLowerCase())||o.author.toLowerCase().includes(e.toLowerCase())||o.tags.some(u=>u.toLowerCase().includes(e.toLowerCase())),a=n==="All"||o.category===n;return l&&a});return F(gw,{children:[y(yw,{children:F(vw,{children:[y("h1",{children:"Crypto Blog"}),y("p",{children:"Explore our comprehensive collection of cryptocurrency insights, analysis, and educational content"})]})}),F(xw,{children:[y(ww,{children:F(kw,{children:[F(Sw,{children:[y($x,{className:"search-icon",size:20}),y("input",{type:"text",placeholder:"Search articles, authors, or topics...",value:e,onChange:o=>t(o.target.value)})]}),y(Cw,{children:hg.map(o=>y(Ew,{active:n===o,onClick:()=>r(o),children:o},o))})]})}),i.length>0?F(Lp,{children:[F(Nw,{children:["Showing ",i.length," article",i.length!==1?"s":"",e&&` for "${e}"`,n!=="All"&&` in ${n}`]}),y(Pw,{children:i.map(o=>F(bw,{to:`/post/${o.id}`,children:[y(Tw,{children:o.category==="Analysis"?"📈":o.category==="Guide"?"📖":o.category==="Security"?"🛡️":o.category==="Technology"?"⚙️":o.category==="NFTs"?"🎨":"₿"}),F(Aw,{children:[y(Fw,{children:o.category}),y(zw,{children:o.title}),y(Rw,{children:o.excerpt}),F(_w,{children:[F(If,{children:[y(_r,{size:14}),o.author]}),F(If,{children:[y(Wi,{size:14}),o.readTime]})]}),y(Iw,{children:o.tags.slice(0,3).map(l=>y(Ow,{children:l},l))})]})]},o.id))})]}):F(Lw,{children:[y("h3",{children:"No articles found"}),y("p",{children:"Try adjusting your search terms or selecting a different category"})]})]})]})}const Of=["http","https","mailto","tel"];function Dw(e){const t=(e||"").trim(),n=t.charAt(0);if(n==="#"||n==="/")return t;const r=t.indexOf(":");if(r===-1)return t;let i=-1;for(;++i<Of.length;){const o=Of[i];if(r===o.length&&t.slice(0,o.length).toLowerCase()===o)return t}return i=t.indexOf("?"),i!==-1&&r>i||(i=t.indexOf("#"),i!==-1&&r>i)?t:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var $w=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)};const mg=or($w);function Ci(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Lf(e.position):"start"in e||"end"in e?Lf(e):"line"in e||"column"in e?Cs(e):""}function Cs(e){return Nf(e&&e.line)+":"+Nf(e&&e.column)}function Lf(e){return Cs(e&&e.start)+"-"+Cs(e&&e.end)}function Nf(e){return e&&typeof e=="number"?e:1}class _t extends Error{constructor(t,n,r){const i=[null,null];let o={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const l=r.indexOf(":");l===-1?i[1]=r:(i[0]=r.slice(0,l),i[1]=r.slice(l+1))}n&&("type"in n||"position"in n?n.position&&(o=n.position):"start"in n||"end"in n?o=n:("line"in n||"column"in n)&&(o.start=n)),this.name=Ci(n)||"1:1",this.message=typeof t=="object"?t.message:t,this.stack="",typeof t=="object"&&t.stack&&(this.stack=t.stack),this.reason=this.message,this.fatal,this.line=o.start.line,this.column=o.start.column,this.position=o,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}_t.prototype.file="";_t.prototype.name="";_t.prototype.reason="";_t.prototype.message="";_t.prototype.stack="";_t.prototype.fatal=null;_t.prototype.column=null;_t.prototype.line=null;_t.prototype.source=null;_t.prototype.ruleId=null;_t.prototype.position=null;const Yt={basename:Bw,dirname:jw,extname:Uw,join:Hw,sep:"/"};function Bw(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ji(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.charCodeAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.charCodeAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.charCodeAt(i)===t.charCodeAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function jw(e){if(Ji(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.charCodeAt(0)===47?"/":".":t===1&&e.charCodeAt(0)===47?"//":e.slice(0,t)}function Uw(e){Ji(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.charCodeAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Hw(...e){let t=-1,n;for(;++t<e.length;)Ji(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Vw(n)}function Vw(e){Ji(e);const t=e.charCodeAt(0)===47;let n=Ww(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Ww(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.charCodeAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Ji(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Yw={cwd:Qw};function Qw(){return"/"}function Es(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function Gw(e){if(typeof e=="string")e=new URL(e);else if(!Es(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Kw(e)}function Kw(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){const r=t.charCodeAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Qa=["history","path","basename","stem","extname","dirname"];class gg{constructor(t){let n;t?typeof t=="string"||qw(t)?n={value:t}:Es(t)?n={path:t}:n=t:n={},this.data={},this.messages=[],this.history=[],this.cwd=Yw.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<Qa.length;){const o=Qa[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Qa.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(t){Es(t)&&(t=Gw(t)),Ka(t,"path"),this.path!==t&&this.history.push(t)}get dirname(){return typeof this.path=="string"?Yt.dirname(this.path):void 0}set dirname(t){Mf(this.basename,"dirname"),this.path=Yt.join(t||"",this.basename)}get basename(){return typeof this.path=="string"?Yt.basename(this.path):void 0}set basename(t){Ka(t,"basename"),Ga(t,"basename"),this.path=Yt.join(this.dirname||"",t)}get extname(){return typeof this.path=="string"?Yt.extname(this.path):void 0}set extname(t){if(Ga(t,"extname"),Mf(this.dirname,"extname"),t){if(t.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Yt.join(this.dirname,this.stem+(t||""))}get stem(){return typeof this.path=="string"?Yt.basename(this.path,this.extname):void 0}set stem(t){Ka(t,"stem"),Ga(t,"stem"),this.path=Yt.join(this.dirname||"",t+(this.extname||""))}toString(t){return(this.value||"").toString(t||void 0)}message(t,n,r){const i=new _t(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=null,i}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}}function Ga(e,t){if(e&&e.includes(Yt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Yt.sep+"`")}function Ka(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function qw(e){return mg(e)}function Df(e){if(e)throw e}var jo=Object.prototype.hasOwnProperty,yg=Object.prototype.toString,$f=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,jf=function(t){return typeof Array.isArray=="function"?Array.isArray(t):yg.call(t)==="[object Array]"},Uf=function(t){if(!t||yg.call(t)!=="[object Object]")return!1;var n=jo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&jo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||jo.call(t,i)},Hf=function(t,n){$f&&n.name==="__proto__"?$f(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Vf=function(t,n){if(n==="__proto__")if(jo.call(t,n)){if(Bf)return Bf(t,n).value}else return;return t[n]},Xw=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,s=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<s;++u)if(t=arguments[u],t!=null)for(n in t)r=Vf(a,n),i=Vf(t,n),a!==i&&(d&&i&&(Uf(i)||(o=jf(i)))?(o?(o=!1,l=r&&jf(r)?r:[]):l=r&&Uf(r)?r:{},Hf(a,{name:n,newValue:e(d,l,i)})):typeof i<"u"&&Hf(a,{name:n,newValue:i}));return a};const Wf=or(Xw);function Ps(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Zw(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...s){const d=e[++o];let c=-1;if(u){l(u);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,d?Jw(d,a)(...s):l(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Jw(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(s){const d=s;if(a&&n)throw d;return i(d)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const ek=xg().freeze(),vg={}.hasOwnProperty;function xg(){const e=Zw(),t=[];let n={},r,i=-1;return o.data=l,o.Parser=void 0,o.Compiler=void 0,o.freeze=a,o.attachers=t,o.use=u,o.parse=s,o.stringify=d,o.run=c,o.runSync=h,o.process=f,o.processSync=k,o;function o(){const w=xg();let C=-1;for(;++C<t.length;)w.use(...t[C]);return w.data(Wf(!0,{},n)),w}function l(w,C){return typeof w=="string"?arguments.length===2?(Za("data",r),n[w]=C,o):vg.call(n,w)&&n[w]||null:w?(Za("data",r),n=w,o):n}function a(){if(r)return o;for(;++i<t.length;){const[w,...C]=t[i];if(C[0]===!1)continue;C[0]===!0&&(C[0]=void 0);const p=w.call(o,...C);typeof p=="function"&&e.use(p)}return r=!0,i=Number.POSITIVE_INFINITY,o}function u(w,...C){let p;if(Za("use",r),w!=null)if(typeof w=="function")T(w,...C);else if(typeof w=="object")Array.isArray(w)?E(w):v(w);else throw new TypeError("Expected usable value, not `"+w+"`");return p&&(n.settings=Object.assign(n.settings||{},p)),o;function m(S){if(typeof S=="function")T(S);else if(typeof S=="object")if(Array.isArray(S)){const[z,...R]=S;T(z,...R)}else v(S);else throw new TypeError("Expected usable value, not `"+S+"`")}function v(S){E(S.plugins),S.settings&&(p=Object.assign(p||{},S.settings))}function E(S){let z=-1;if(S!=null)if(Array.isArray(S))for(;++z<S.length;){const R=S[z];m(R)}else throw new TypeError("Expected a list of plugins, not `"+S+"`")}function T(S,z){let R=-1,H;for(;++R<t.length;)if(t[R][0]===S){H=t[R];break}H?(Ps(H[1])&&Ps(z)&&(z=Wf(!0,H[1],z)),H[1]=z):t.push([...arguments])}}function s(w){o.freeze();const C=ai(w),p=o.Parser;return qa("parse",p),Yf(p,"parse")?new p(String(C),C).parse():p(String(C),C)}function d(w,C){o.freeze();const p=ai(C),m=o.Compiler;return Xa("stringify",m),Qf(w),Yf(m,"compile")?new m(w,p).compile():m(w,p)}function c(w,C,p){if(Qf(w),o.freeze(),!p&&typeof C=="function"&&(p=C,C=void 0),!p)return new Promise(m);m(null,p);function m(v,E){e.run(w,ai(C),T);function T(S,z,R){z=z||w,S?E(S):v?v(z):p(null,z,R)}}}function h(w,C){let p,m;return o.run(w,C,v),Gf("runSync","run",m),p;function v(E,T){Df(E),p=T,m=!0}}function f(w,C){if(o.freeze(),qa("process",o.Parser),Xa("process",o.Compiler),!C)return new Promise(p);p(null,C);function p(m,v){const E=ai(w);o.run(o.parse(E),E,(S,z,R)=>{if(S||!z||!R)T(S);else{const H=o.stringify(z,R);H==null||(rk(H)?R.value=H:R.result=H),T(S,R)}});function T(S,z){S||!z?v(S):m?m(z):C(null,z)}}}function k(w){let C;o.freeze(),qa("processSync",o.Parser),Xa("processSync",o.Compiler);const p=ai(w);return o.process(p,m),Gf("processSync","process",C),p;function m(v){C=!0,Df(v)}}}function Yf(e,t){return typeof e=="function"&&e.prototype&&(tk(e.prototype)||t in e.prototype)}function tk(e){let t;for(t in e)if(vg.call(e,t))return!0;return!1}function qa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function Xa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function Za(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Qf(e){if(!Ps(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Gf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ai(e){return nk(e)?e:new gg(e)}function nk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function rk(e){return typeof e=="string"||mg(e)}const ik={};function ok(e,t){const n=t||ik,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return wg(e,r,i)}function wg(e,t,n){if(lk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Kf(e.children,t,n)}return Array.isArray(e)?Kf(e,t,n):""}function Kf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=wg(e[i],t,n);return r.join("")}function lk(e){return!!(e&&typeof e=="object")}function Zt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function bt(e,t){return e.length>0?(Zt(e,e.length,0,t),e):t}const qf={}.hasOwnProperty;function ak(e){const t={};let n=-1;for(;++n<e.length;)uk(t,e[n]);return t}function uk(e,t){let n;for(n in t){const i=(qf.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){qf.call(i,l)||(i[l]=[]);const a=o[l];sk(i[l],Array.isArray(a)?a:a?[a]:[])}}}function sk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Zt(e,0,0,r)}const ck=/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Gt=Bn(/[A-Za-z]/),yt=Bn(/[\dA-Za-z]/),dk=Bn(/[#-'*+\--9=?A-Z^-~]/);function bs(e){return e!==null&&(e<32||e===127)}const Ts=Bn(/\d/),fk=Bn(/[\dA-Fa-f]/),pk=Bn(/[!-/:-@[-`{-~]/);function K(e){return e!==null&&e<-2}function dt(e){return e!==null&&(e<0||e===32)}function de(e){return e===-2||e===-1||e===32}const hk=Bn(ck),mk=Bn(/\s/);function Bn(e){return t;function t(n){return n!==null&&e.test(String.fromCharCode(n))}}function Se(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return de(u)?(e.enter(n),a(u)):t(u)}function a(u){return de(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const gk={tokenize:yk};function yk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return K(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const vk={tokenize:xk},Xf={tokenize:wk};function xk(e){const t=this,n=[];let r=0,i,o,l;return a;function a(v){if(r<n.length){const E=n[r];return t.containerState=E[1],e.attempt(E[0].continuation,u,s)(v)}return s(v)}function u(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const E=t.events.length;let T=E,S;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){S=t.events[T][1].end;break}p(r);let z=E;for(;z<t.events.length;)t.events[z][1].end=Object.assign({},S),z++;return Zt(t.events,T+1,0,t.events.slice(E)),t.events.length=z,s(v)}return a(v)}function s(v){if(r===n.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return k(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Xf,d,c)(v)}function d(v){return i&&m(),p(r),h(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,k(v)}function h(v){return t.containerState={},e.attempt(Xf,f,k)(v)}function f(v){return r++,n.push([t.currentConstruct,t.containerState]),h(v)}function k(v){if(v===null){i&&m(),p(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),w(v)}function w(v){if(v===null){C(e.exit("chunkFlow"),!0),p(0),e.consume(v);return}return K(v)?(e.consume(v),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),w)}function C(v,E){const T=t.sliceStream(v);if(E&&T.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(T),t.parser.lazy[v.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const z=t.events.length;let R=z,H,V;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(H){V=t.events[R][1].end;break}H=!0}for(p(r),S=z;S<t.events.length;)t.events[S][1].end=Object.assign({},V),S++;Zt(t.events,R+1,0,t.events.slice(z)),t.events.length=S}}function p(v){let E=n.length;for(;E-- >v;){const T=n[E];t.containerState=T[1],T[0].exit.call(t,e)}n.length=v}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function wk(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Zf(e){if(e===null||dt(e)||mk(e))return 1;if(hk(e))return 2}function Uc(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const As={name:"attention",tokenize:Sk,resolveAll:kk};function kk(e,t){let n=-1,r,i,o,l,a,u,s,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c=Object.assign({},e[r][1].end),h=Object.assign({},e[n][1].start);Jf(c,-u),Jf(h,u),l={type:u>1?"strongSequence":"emphasisSequence",start:c,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:h},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:u>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=bt(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=bt(s,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),s=bt(s,Uc(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=bt(s,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,s=bt(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Zt(e,r-1,n-r+3,s),n=r+s.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Sk(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Zf(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const s=e.exit("attentionSequence"),d=Zf(u),c=!d||d===2&&i||n.includes(u),h=!i||i===2&&d||n.includes(r);return s._open=!!(o===42?c:c&&(i||!h)),s._close=!!(o===42?h:h&&(d||!c)),t(u)}}function Jf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Ck={name:"autolink",tokenize:Ek};function Ek(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return Gt(f)?(e.consume(f),l):s(f)}function l(f){return f===43||f===45||f===46||yt(f)?(r=1,a(f)):s(f)}function a(f){return f===58?(e.consume(f),r=0,u):(f===43||f===45||f===46||yt(f))&&r++<32?(e.consume(f),a):(r=0,s(f))}function u(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||bs(f)?n(f):(e.consume(f),u)}function s(f){return f===64?(e.consume(f),d):dk(f)?(e.consume(f),s):n(f)}function d(f){return yt(f)?c(f):n(f)}function c(f){return f===46?(e.consume(f),r=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):h(f)}function h(f){if((f===45||yt(f))&&r++<63){const k=f===45?h:c;return e.consume(f),k}return n(f)}}const ia={tokenize:Pk,partial:!0};function Pk(e,t,n){return r;function r(o){return de(o)?Se(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||K(o)?t(o):n(o)}}const kg={name:"blockQuote",tokenize:bk,continuation:{tokenize:Tk},exit:Ak};function bk(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return de(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Tk(e,t,n){const r=this;return i;function i(l){return de(l)?Se(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(kg,t,n)(l)}}function Ak(e){e.exit("blockQuote")}const Sg={name:"characterEscape",tokenize:Fk};function Fk(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return pk(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const ep=document.createElement("i");function Hc(e){const t="&"+e+";";ep.innerHTML=t;const n=ep.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}const Cg={name:"characterReference",tokenize:zk};function zk(e,t,n){const r=this;let i=0,o,l;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),u}function u(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),o=31,l=yt,d(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=fk,d):(e.enter("characterReferenceValue"),o=7,l=Ts,d(c))}function d(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return l===yt&&!Hc(r.sliceSerialize(h))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(c)&&i++<o?(e.consume(c),d):n(c)}}const tp={tokenize:_k,partial:!0},np={name:"codeFenced",tokenize:Rk,concrete:!0};function Rk(e,t,n){const r=this,i={tokenize:T,partial:!0};let o=0,l=0,a;return u;function u(S){return s(S)}function s(S){const z=r.events[r.events.length-1];return o=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===a?(l++,e.consume(S),d):l<3?n(S):(e.exit("codeFencedFenceSequence"),de(S)?Se(e,c,"whitespace")(S):c(S))}function c(S){return S===null||K(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(tp,w,E)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(S))}function h(S){return S===null||K(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(S)):de(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,f,"whitespace")(S)):S===96&&S===a?n(S):(e.consume(S),h)}function f(S){return S===null||K(S)?c(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(S))}function k(S){return S===null||K(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(S)):S===96&&S===a?n(S):(e.consume(S),k)}function w(S){return e.attempt(i,E,C)(S)}function C(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),p}function p(S){return o>0&&de(S)?Se(e,m,"linePrefix",o+1)(S):m(S)}function m(S){return S===null||K(S)?e.check(tp,w,E)(S):(e.enter("codeFlowValue"),v(S))}function v(S){return S===null||K(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),v)}function E(S){return e.exit("codeFenced"),t(S)}function T(S,z,R){let H=0;return V;function V(Q){return S.enter("lineEnding"),S.consume(Q),S.exit("lineEnding"),j}function j(Q){return S.enter("codeFencedFence"),de(Q)?Se(S,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):$(Q)}function $(Q){return Q===a?(S.enter("codeFencedFenceSequence"),J(Q)):R(Q)}function J(Q){return Q===a?(H++,S.consume(Q),J):H>=l?(S.exit("codeFencedFenceSequence"),de(Q)?Se(S,oe,"whitespace")(Q):oe(Q)):R(Q)}function oe(Q){return Q===null||K(Q)?(S.exit("codeFencedFence"),z(Q)):R(Q)}}}function _k(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Ja={name:"codeIndented",tokenize:Ok},Ik={tokenize:Lk,partial:!0};function Ok(e,t,n){const r=this;return i;function i(s){return e.enter("codeIndented"),Se(e,o,"linePrefix",4+1)(s)}function o(s){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?l(s):n(s)}function l(s){return s===null?u(s):K(s)?e.attempt(Ik,l,u)(s):(e.enter("codeFlowValue"),a(s))}function a(s){return s===null||K(s)?(e.exit("codeFlowValue"),l(s)):(e.consume(s),a)}function u(s){return e.exit("codeIndented"),t(s)}}function Lk(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Se(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):K(l)?i(l):n(l)}}const Nk={name:"codeText",tokenize:$k,resolve:Mk,previous:Dk};function Mk(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Dk(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function $k(e,t,n){let r=0,i,o;return l;function l(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),u(c))}function u(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),u):c===96?(o=e.enter("codeTextSequence"),i=0,d(c)):K(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||K(c)?(e.exit("codeTextData"),u(c)):(e.consume(c),s)}function d(c){return c===96?(e.consume(c),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",s(c))}}function Eg(e){const t={};let n=-1,r,i,o,l,a,u,s;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Bk(e,n)),n=t[n],s=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),Zt(e,i,n-i+1,a))}}return!s}function Bk(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,u=[],s={};let d,c,h=-1,f=n,k=0,w=0;const C=[w];for(;f;){for(;e[++i][1]!==f;);o.push(i),f._tokenizer||(d=r.sliceStream(f),f.next||d.push(null),c&&l.defineSkip(f.start),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(d),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next}for(f=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(w=h+1,C.push(w),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(l.events=[],f?(f._tokenizer=void 0,f.previous=void 0):C.pop(),h=C.length;h--;){const p=a.slice(C[h],C[h+1]),m=o.pop();u.unshift([m,m+p.length-1]),Zt(e,m,2,p)}for(h=-1;++h<u.length;)s[k+u[h][0]]=k+u[h][1],k+=u[h][1]-u[h][0]-1;return s}const jk={tokenize:Vk,resolve:Hk},Uk={tokenize:Wk,partial:!0};function Hk(e){return Eg(e),e}function Vk(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):K(a)?e.check(Uk,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Wk(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Se(e,o,"linePrefix")}function o(l){if(l===null||K(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Pg(e,t,n,r,i,o,l,a,u){const s=u||Number.POSITIVE_INFINITY;let d=0;return c;function c(p){return p===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(p),e.exit(o),h):p===null||p===32||p===41||bs(p)?n(p):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),w(p))}function h(p){return p===62?(e.enter(o),e.consume(p),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===62?(e.exit("chunkString"),e.exit(a),h(p)):p===null||p===60||K(p)?n(p):(e.consume(p),p===92?k:f)}function k(p){return p===60||p===62||p===92?(e.consume(p),f):f(p)}function w(p){return!d&&(p===null||p===41||dt(p))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(p)):d<s&&p===40?(e.consume(p),d++,w):p===41?(e.consume(p),d--,w):p===null||p===32||p===40||bs(p)?n(p):(e.consume(p),p===92?C:w)}function C(p){return p===40||p===41||p===92?(e.consume(p),w):w(p)}}function bg(e,t,n,r,i,o){const l=this;let a=0,u;return s;function s(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),d}function d(f){return a>999||f===null||f===91||f===93&&!u||f===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):K(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||K(f)||a++>999?(e.exit("chunkString"),d(f)):(e.consume(f),u||(u=!de(f)),f===92?h:c)}function h(f){return f===91||f===92||f===93?(e.consume(f),a++,c):c(f)}}function Tg(e,t,n,r,i,o){let l;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,u):n(h)}function u(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),s(h))}function s(h){return h===l?(e.exit(o),u(l)):h===null?n(h):K(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Se(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===l||h===null||K(h)?(e.exit("chunkString"),s(h)):(e.consume(h),h===92?c:d)}function c(h){return h===l||h===92?(e.consume(h),d):d(h)}}function Ei(e,t){let n;return r;function r(i){return K(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):de(i)?Se(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}function Ir(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Yk={name:"definition",tokenize:Gk},Qk={tokenize:Kk,partial:!0};function Gk(e,t,n){const r=this;let i;return o;function o(f){return e.enter("definition"),l(f)}function l(f){return bg.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),u):n(f)}function u(f){return dt(f)?Ei(e,s)(f):s(f)}function s(f){return Pg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(Qk,c,c)(f)}function c(f){return de(f)?Se(e,h,"whitespace")(f):h(f)}function h(f){return f===null||K(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function Kk(e,t,n){return r;function r(a){return dt(a)?Ei(e,i)(a):n(a)}function i(a){return Tg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return de(a)?Se(e,l,"whitespace")(a):l(a)}function l(a){return a===null||K(a)?t(a):n(a)}}const qk={name:"hardBreakEscape",tokenize:Xk};function Xk(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return K(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Zk={name:"headingAtx",tokenize:e2,resolve:Jk};function Jk(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Zt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function e2(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),l(d)}function l(d){return d===35&&r++<6?(e.consume(d),l):d===null||dt(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||K(d)?(e.exit("atxHeading"),t(d)):de(d)?Se(e,a,"whitespace")(d):(e.enter("atxHeadingText"),s(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),a(d))}function s(d){return d===null||d===35||dt(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),s)}}const t2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],rp=["pre","script","style","textarea"],n2={name:"htmlFlow",tokenize:l2,resolveTo:o2,concrete:!0},r2={tokenize:u2,partial:!0},i2={tokenize:a2,partial:!0};function o2(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function l2(e,t,n){const r=this;let i,o,l,a,u;return s;function s(g){return d(g)}function d(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),c}function c(g){return g===33?(e.consume(g),h):g===47?(e.consume(g),o=!0,w):g===63?(e.consume(g),i=3,r.interrupt?t:x):Gt(g)?(e.consume(g),l=String.fromCharCode(g),C):n(g)}function h(g){return g===45?(e.consume(g),i=2,f):g===91?(e.consume(g),i=5,a=0,k):Gt(g)?(e.consume(g),i=4,r.interrupt?t:x):n(g)}function f(g){return g===45?(e.consume(g),r.interrupt?t:x):n(g)}function k(g){const B="CDATA[";return g===B.charCodeAt(a++)?(e.consume(g),a===B.length?r.interrupt?t:$:k):n(g)}function w(g){return Gt(g)?(e.consume(g),l=String.fromCharCode(g),C):n(g)}function C(g){if(g===null||g===47||g===62||dt(g)){const B=g===47,Y=l.toLowerCase();return!B&&!o&&rp.includes(Y)?(i=1,r.interrupt?t(g):$(g)):t2.includes(l.toLowerCase())?(i=6,B?(e.consume(g),p):r.interrupt?t(g):$(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):o?m(g):v(g))}return g===45||yt(g)?(e.consume(g),l+=String.fromCharCode(g),C):n(g)}function p(g){return g===62?(e.consume(g),r.interrupt?t:$):n(g)}function m(g){return de(g)?(e.consume(g),m):V(g)}function v(g){return g===47?(e.consume(g),V):g===58||g===95||Gt(g)?(e.consume(g),E):de(g)?(e.consume(g),v):V(g)}function E(g){return g===45||g===46||g===58||g===95||yt(g)?(e.consume(g),E):T(g)}function T(g){return g===61?(e.consume(g),S):de(g)?(e.consume(g),T):v(g)}function S(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),u=g,z):de(g)?(e.consume(g),S):R(g)}function z(g){return g===u?(e.consume(g),u=null,H):g===null||K(g)?n(g):(e.consume(g),z)}function R(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||dt(g)?T(g):(e.consume(g),R)}function H(g){return g===47||g===62||de(g)?v(g):n(g)}function V(g){return g===62?(e.consume(g),j):n(g)}function j(g){return g===null||K(g)?$(g):de(g)?(e.consume(g),j):n(g)}function $(g){return g===45&&i===2?(e.consume(g),xe):g===60&&i===1?(e.consume(g),ae):g===62&&i===4?(e.consume(g),ne):g===63&&i===3?(e.consume(g),x):g===93&&i===5?(e.consume(g),W):K(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(r2,N,J)(g)):g===null||K(g)?(e.exit("htmlFlowData"),J(g)):(e.consume(g),$)}function J(g){return e.check(i2,oe,N)(g)}function oe(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),Q}function Q(g){return g===null||K(g)?J(g):(e.enter("htmlFlowData"),$(g))}function xe(g){return g===45?(e.consume(g),x):$(g)}function ae(g){return g===47?(e.consume(g),l="",L):$(g)}function L(g){if(g===62){const B=l.toLowerCase();return rp.includes(B)?(e.consume(g),ne):$(g)}return Gt(g)&&l.length<8?(e.consume(g),l+=String.fromCharCode(g),L):$(g)}function W(g){return g===93?(e.consume(g),x):$(g)}function x(g){return g===62?(e.consume(g),ne):g===45&&i===2?(e.consume(g),x):$(g)}function ne(g){return g===null||K(g)?(e.exit("htmlFlowData"),N(g)):(e.consume(g),ne)}function N(g){return e.exit("htmlFlow"),t(g)}}function a2(e,t,n){const r=this;return i;function i(l){return K(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function u2(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ia,t,n)}}const s2={name:"htmlText",tokenize:c2};function c2(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),s):x===47?(e.consume(x),T):x===63?(e.consume(x),v):Gt(x)?(e.consume(x),R):n(x)}function s(x){return x===45?(e.consume(x),d):x===91?(e.consume(x),o=0,k):Gt(x)?(e.consume(x),m):n(x)}function d(x){return x===45?(e.consume(x),f):n(x)}function c(x){return x===null?n(x):x===45?(e.consume(x),h):K(x)?(l=c,ae(x)):(e.consume(x),c)}function h(x){return x===45?(e.consume(x),f):c(x)}function f(x){return x===62?xe(x):x===45?h(x):c(x)}function k(x){const ne="CDATA[";return x===ne.charCodeAt(o++)?(e.consume(x),o===ne.length?w:k):n(x)}function w(x){return x===null?n(x):x===93?(e.consume(x),C):K(x)?(l=w,ae(x)):(e.consume(x),w)}function C(x){return x===93?(e.consume(x),p):w(x)}function p(x){return x===62?xe(x):x===93?(e.consume(x),p):w(x)}function m(x){return x===null||x===62?xe(x):K(x)?(l=m,ae(x)):(e.consume(x),m)}function v(x){return x===null?n(x):x===63?(e.consume(x),E):K(x)?(l=v,ae(x)):(e.consume(x),v)}function E(x){return x===62?xe(x):v(x)}function T(x){return Gt(x)?(e.consume(x),S):n(x)}function S(x){return x===45||yt(x)?(e.consume(x),S):z(x)}function z(x){return K(x)?(l=z,ae(x)):de(x)?(e.consume(x),z):xe(x)}function R(x){return x===45||yt(x)?(e.consume(x),R):x===47||x===62||dt(x)?H(x):n(x)}function H(x){return x===47?(e.consume(x),xe):x===58||x===95||Gt(x)?(e.consume(x),V):K(x)?(l=H,ae(x)):de(x)?(e.consume(x),H):xe(x)}function V(x){return x===45||x===46||x===58||x===95||yt(x)?(e.consume(x),V):j(x)}function j(x){return x===61?(e.consume(x),$):K(x)?(l=j,ae(x)):de(x)?(e.consume(x),j):H(x)}function $(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,J):K(x)?(l=$,ae(x)):de(x)?(e.consume(x),$):(e.consume(x),oe)}function J(x){return x===i?(e.consume(x),i=void 0,Q):x===null?n(x):K(x)?(l=J,ae(x)):(e.consume(x),J)}function oe(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||dt(x)?H(x):(e.consume(x),oe)}function Q(x){return x===47||x===62||dt(x)?H(x):n(x)}function xe(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function ae(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),L}function L(x){return de(x)?Se(e,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):W(x)}function W(x){return e.enter("htmlTextData"),l(x)}}const Vc={name:"labelEnd",tokenize:g2,resolveTo:m2,resolveAll:h2},d2={tokenize:y2},f2={tokenize:v2},p2={tokenize:x2};function h2(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function m2(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},d={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",u,t],["enter",s,t]],a=bt(a,e.slice(o+1,o+r+3)),a=bt(a,[["enter",d,t]]),a=bt(a,Uc(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=bt(a,[["exit",d,t],e[l-2],e[l-1],["exit",s,t]]),a=bt(a,e.slice(l+1)),a=bt(a,[["exit",u,t]]),Zt(e,o,e.length,a),e}function g2(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?c(h):(l=r.parser.defined.includes(Ir(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),u):n(h)}function u(h){return h===40?e.attempt(d2,d,l?d:c)(h):h===91?e.attempt(f2,d,l?s:c)(h):l?d(h):c(h)}function s(h){return e.attempt(p2,d,c)(h)}function d(h){return t(h)}function c(h){return o._balanced=!0,n(h)}}function y2(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return dt(c)?Ei(e,o)(c):o(c)}function o(c){return c===41?d(c):Pg(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return dt(c)?Ei(e,u)(c):d(c)}function a(c){return n(c)}function u(c){return c===34||c===39||c===40?Tg(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function s(c){return dt(c)?Ei(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function v2(e,t,n){const r=this;return i;function i(a){return bg.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function x2(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const w2={name:"labelStartImage",tokenize:k2,resolveAll:Vc.resolveAll};function k2(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const S2={name:"labelStartLink",tokenize:C2,resolveAll:Vc.resolveAll};function C2(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const eu={name:"lineEnding",tokenize:E2};function E2(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const Uo={name:"thematicBreak",tokenize:P2};function P2(e,t,n){let r=0,i;return o;function o(s){return e.enter("thematicBreak"),l(s)}function l(s){return i=s,a(s)}function a(s){return s===i?(e.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||K(s))?(e.exit("thematicBreak"),t(s)):n(s)}function u(s){return s===i?(e.consume(s),r++,u):(e.exit("thematicBreakSequence"),de(s)?Se(e,a,"whitespace")(s):a(s))}}const ot={name:"list",tokenize:A2,continuation:{tokenize:F2},exit:R2},b2={tokenize:_2,partial:!0},T2={tokenize:z2,partial:!0};function A2(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(f){const k=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Ts(f)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(Uo,n,s)(f):s(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(f)}return n(f)}function u(f){return Ts(f)&&++l<10?(e.consume(f),u):(!r.interrupt||l<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),s(f)):n(f)}function s(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(ia,r.interrupt?n:d,e.attempt(b2,h,c))}function d(f){return r.containerState.initialBlankLine=!0,o++,h(f)}function c(f){return de(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),h):n(f)}function h(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function F2(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ia,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!de(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(T2,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(ot,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function z2(e,t,n){const r=this;return Se(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function R2(e){e.exit(this.containerState.type)}function _2(e,t,n){const r=this;return Se(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!de(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const ip={name:"setextUnderline",tokenize:O2,resolveTo:I2};function I2(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function O2(e,t,n){const r=this;let i;return o;function o(s){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,l(s)):n(s)}function l(s){return e.enter("setextHeadingLineSequence"),a(s)}function a(s){return s===i?(e.consume(s),a):(e.exit("setextHeadingLineSequence"),de(s)?Se(e,u,"lineSuffix")(s):u(s))}function u(s){return s===null||K(s)?(e.exit("setextHeadingLine"),t(s)):n(s)}}const L2={tokenize:N2};function N2(e){const t=this,n=e.attempt(ia,r,e.attempt(this.parser.constructs.flowInitial,i,Se(e,e.attempt(this.parser.constructs.flow,i,e.attempt(jk,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const M2={resolveAll:Fg()},D2=Ag("string"),$2=Ag("text");function Ag(e){return{tokenize:t,resolveAll:Fg(e==="text"?B2:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(d){return s(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return s(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function s(d){if(d===null)return!0;const c=i[d];let h=-1;if(c)for(;++h<c.length;){const f=c[h];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function Fg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function B2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const s=i[o];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(s===-2)u=!0,a++;else if(s!==-1){o++;break}}if(a){const s={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},s.start),r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(n,0,["enter",s,t],["exit",s,t]),n+=2)}n++}return e}function j2(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const u={consume:m,enter:v,exit:E,attempt:z(T),check:z(S),interrupt:z(S,{interrupt:!0})},s={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:h,now:k,defineSkip:w,write:c};let d=t.tokenize.call(s,u);return t.resolveAll&&o.push(t),s;function c(j){return l=bt(l,j),C(),l[l.length-1]!==null?[]:(R(t,0),s.events=Uc(o,s.events,s),s.events)}function h(j,$){return H2(f(j),$)}function f(j){return U2(l,j)}function k(){const{line:j,column:$,offset:J,_index:oe,_bufferIndex:Q}=r;return{line:j,column:$,offset:J,_index:oe,_bufferIndex:Q}}function w(j){i[j.line]=j.column,V()}function C(){let j;for(;r._index<l.length;){const $=l[r._index];if(typeof $=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<$.length;)p($.charCodeAt(r._bufferIndex));else p($)}}function p(j){d=d(j)}function m(j){K(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,V()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=j}function v(j,$){const J=$||{};return J.type=j,J.start=k(),s.events.push(["enter",J,s]),a.push(J),J}function E(j){const $=a.pop();return $.end=k(),s.events.push(["exit",$,s]),$}function T(j,$){R(j,$.from)}function S(j,$){$.restore()}function z(j,$){return J;function J(oe,Q,xe){let ae,L,W,x;return Array.isArray(oe)?N(oe):"tokenize"in oe?N([oe]):ne(oe);function ne(P){return ee;function ee(M){const fe=M!==null&&P[M],re=M!==null&&P.null,ue=[...Array.isArray(fe)?fe:fe?[fe]:[],...Array.isArray(re)?re:re?[re]:[]];return N(ue)(M)}}function N(P){return ae=P,L=0,P.length===0?xe:g(P[L])}function g(P){return ee;function ee(M){return x=H(),W=P,P.partial||(s.currentConstruct=P),P.name&&s.parser.constructs.disable.null.includes(P.name)?Y():P.tokenize.call($?Object.assign(Object.create(s),$):s,u,B,Y)(M)}}function B(P){return j(W,x),Q}function Y(P){return x.restore(),++L<ae.length?g(ae[L]):xe}}}function R(j,$){j.resolveAll&&!o.includes(j)&&o.push(j),j.resolve&&Zt(s.events,$,s.events.length-$,j.resolve(s.events.slice($),s)),j.resolveTo&&(s.events=j.resolveTo(s.events,s))}function H(){const j=k(),$=s.previous,J=s.currentConstruct,oe=s.events.length,Q=Array.from(a);return{restore:xe,from:oe};function xe(){r=j,s.previous=$,s.currentConstruct=J,s.events.length=oe,a=Q,V()}}function V(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function U2(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function H2(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const V2={42:ot,43:ot,45:ot,48:ot,49:ot,50:ot,51:ot,52:ot,53:ot,54:ot,55:ot,56:ot,57:ot,62:kg},W2={91:Yk},Y2={[-2]:Ja,[-1]:Ja,32:Ja},Q2={35:Zk,42:Uo,45:[ip,Uo],60:n2,61:ip,95:Uo,96:np,126:np},G2={38:Cg,92:Sg},K2={[-5]:eu,[-4]:eu,[-3]:eu,33:w2,38:Cg,42:As,60:[Ck,s2],91:S2,92:[qk,Sg],93:Vc,95:As,96:Nk},q2={null:[As,M2]},X2={null:[42,95]},Z2={null:[]},J2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:X2,contentInitial:W2,disable:Z2,document:V2,flow:Q2,flowInitial:Y2,insideSpan:q2,string:G2,text:K2},Symbol.toStringTag,{value:"Module"}));function eS(e){const n=ak([J2,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(gk),document:i(vk),flow:i(L2),string:i(D2),text:i($2)};return r;function i(o){return l;function l(a){return j2(r,o,a)}}}const op=/[\0\t\n\r]/g;function tS(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let s,d,c,h,f;for(o=t+o.toString(l),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(op.lastIndex=c,s=op.exec(o),h=s&&s.index!==void 0?s.index:o.length,f=o.charCodeAt(h),!s){t=o.slice(c);break}if(f===10&&c===h&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<h&&(u.push(o.slice(c,h)),e+=h-c),f){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}function nS(e){for(;!Eg(e););return e}function zg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCharCode(n)}const rS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function iS(e){return e.replace(rS,oS)}function oS(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return zg(n.slice(o?2:1),o?16:10)}return Hc(n)||e}const Rg={}.hasOwnProperty,lS=function(e,t,n){return typeof t!="string"&&(n=t,t=void 0),aS(n)(nS(eS(n).document().write(tS()(e,t,!0))))};function aS(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Ne),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(Be),blockQuote:a(ue),characterEscape:j,characterReference:j,codeFenced:a(X),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:a(X,u),codeText:a($e,u),codeTextData:j,data:j,codeFlowValue:j,definition:a(Ke),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:a(le),hardBreakEscape:a(se),hardBreakTrailing:a(se),htmlFlow:a(Le,u),htmlFlowData:j,htmlText:a(Le,u),htmlTextData:j,image:a(jn),label:u,link:a(Ne),listItem:a(Hn),listItemValue:k,listOrdered:a(Un,f),listUnordered:a(Un),paragraph:a(ft),reference:Y,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:a(Be),strong:a(q),thematicBreak:a(qr)},exit:{atxHeading:d(),atxHeadingSequence:z,autolink:d(),autolinkEmail:re,autolinkProtocol:fe,blockQuote:d(),characterEscapeValue:$,characterReferenceMarkerHexadecimal:ee,characterReferenceMarkerNumeric:ee,characterReferenceValue:M,codeFenced:d(m),codeFencedFence:p,codeFencedFenceInfo:w,codeFencedFenceMeta:C,codeFlowValue:$,codeIndented:d(v),codeText:d(ae),codeTextData:$,data:$,definition:d(),definitionDestinationString:S,definitionLabelString:E,definitionTitleString:T,emphasis:d(),hardBreakEscape:d(oe),hardBreakTrailing:d(oe),htmlFlow:d(Q),htmlFlowData:$,htmlText:d(xe),htmlTextData:$,image:d(W),label:ne,labelText:x,lineEnding:J,link:d(L),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:P,resourceDestinationString:N,resourceTitleString:g,resource:B,setextHeading:d(V),setextHeadingLineSequence:H,setextHeadingText:R,strong:d(),thematicBreak:d()}};_g(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(A){let I={type:"root",children:[]};const G={stack:[I],tokenStack:[],config:t,enter:s,exit:c,buffer:u,resume:h,setData:o,getData:l},ge=[];let ye=-1;for(;++ye<A.length;)if(A[ye][1].type==="listOrdered"||A[ye][1].type==="listUnordered")if(A[ye][0]==="enter")ge.push(ye);else{const Lt=ge.pop();ye=i(A,Lt,ye)}for(ye=-1;++ye<A.length;){const Lt=t[A[ye][0]];Rg.call(Lt,A[ye][1].type)&&Lt[A[ye][1].type].call(Object.assign({sliceSerialize:A[ye][2].sliceSerialize},G),A[ye][1])}if(G.tokenStack.length>0){const Lt=G.tokenStack[G.tokenStack.length-1];(Lt[1]||lp).call(G,void 0,Lt[0])}for(I.position={start:mn(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:mn(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},ye=-1;++ye<t.transforms.length;)I=t.transforms[ye](I)||I;return I}function i(A,I,G){let ge=I-1,ye=-1,Lt=!1,pn,Jt,Xr,Zr;for(;++ge<=G;){const _e=A[ge];if(_e[1].type==="listUnordered"||_e[1].type==="listOrdered"||_e[1].type==="blockQuote"?(_e[0]==="enter"?ye++:ye--,Zr=void 0):_e[1].type==="lineEndingBlank"?_e[0]==="enter"&&(pn&&!Zr&&!ye&&!Xr&&(Xr=ge),Zr=void 0):_e[1].type==="linePrefix"||_e[1].type==="listItemValue"||_e[1].type==="listItemMarker"||_e[1].type==="listItemPrefix"||_e[1].type==="listItemPrefixWhitespace"||(Zr=void 0),!ye&&_e[0]==="enter"&&_e[1].type==="listItemPrefix"||ye===-1&&_e[0]==="exit"&&(_e[1].type==="listUnordered"||_e[1].type==="listOrdered")){if(pn){let ga=ge;for(Jt=void 0;ga--;){const en=A[ga];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;Jt&&(A[Jt][1].type="lineEndingBlank",Lt=!0),en[1].type="lineEnding",Jt=ga}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}Xr&&(!Jt||Xr<Jt)&&(pn._spread=!0),pn.end=Object.assign({},Jt?A[Jt][1].start:_e[1].end),A.splice(Jt||ge,0,["exit",pn,_e[2]]),ge++,G++}_e[1].type==="listItemPrefix"&&(pn={type:"listItem",_spread:!1,start:Object.assign({},_e[1].start),end:void 0},A.splice(ge,0,["enter",pn,_e[2]]),ge++,G++,Xr=void 0,Zr=!0)}}return A[I][1]._spread=Lt,G}function o(A,I){n[A]=I}function l(A){return n[A]}function a(A,I){return G;function G(ge){s.call(this,A(ge),ge),I&&I.call(this,ge)}}function u(){this.stack.push({type:"fragment",children:[]})}function s(A,I,G){return this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([I,G]),A.position={start:mn(I.start)},A}function d(A){return I;function I(G){A&&A.call(this,G),c.call(this,G)}}function c(A,I){const G=this.stack.pop(),ge=this.tokenStack.pop();if(ge)ge[0].type!==A.type&&(I?I.call(this,A,ge[0]):(ge[1]||lp).call(this,A,ge[0]));else throw new Error("Cannot close `"+A.type+"` ("+Ci({start:A.start,end:A.end})+"): it’s not open");return G.position.end=mn(A.end),G}function h(){return ok(this.stack.pop())}function f(){o("expectingFirstListItemValue",!0)}function k(A){if(l("expectingFirstListItemValue")){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(A),10),o("expectingFirstListItemValue")}}function w(){const A=this.resume(),I=this.stack[this.stack.length-1];I.lang=A}function C(){const A=this.resume(),I=this.stack[this.stack.length-1];I.meta=A}function p(){l("flowCodeInside")||(this.buffer(),o("flowCodeInside",!0))}function m(){const A=this.resume(),I=this.stack[this.stack.length-1];I.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),o("flowCodeInside")}function v(){const A=this.resume(),I=this.stack[this.stack.length-1];I.value=A.replace(/(\r?\n|\r)$/g,"")}function E(A){const I=this.resume(),G=this.stack[this.stack.length-1];G.label=I,G.identifier=Ir(this.sliceSerialize(A)).toLowerCase()}function T(){const A=this.resume(),I=this.stack[this.stack.length-1];I.title=A}function S(){const A=this.resume(),I=this.stack[this.stack.length-1];I.url=A}function z(A){const I=this.stack[this.stack.length-1];if(!I.depth){const G=this.sliceSerialize(A).length;I.depth=G}}function R(){o("setextHeadingSlurpLineEnding",!0)}function H(A){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(A).charCodeAt(0)===61?1:2}function V(){o("setextHeadingSlurpLineEnding")}function j(A){const I=this.stack[this.stack.length-1];let G=I.children[I.children.length-1];(!G||G.type!=="text")&&(G=be(),G.position={start:mn(A.start)},I.children.push(G)),this.stack.push(G)}function $(A){const I=this.stack.pop();I.value+=this.sliceSerialize(A),I.position.end=mn(A.end)}function J(A){const I=this.stack[this.stack.length-1];if(l("atHardBreak")){const G=I.children[I.children.length-1];G.position.end=mn(A.end),o("atHardBreak");return}!l("setextHeadingSlurpLineEnding")&&t.canContainEols.includes(I.type)&&(j.call(this,A),$.call(this,A))}function oe(){o("atHardBreak",!0)}function Q(){const A=this.resume(),I=this.stack[this.stack.length-1];I.value=A}function xe(){const A=this.resume(),I=this.stack[this.stack.length-1];I.value=A}function ae(){const A=this.resume(),I=this.stack[this.stack.length-1];I.value=A}function L(){const A=this.stack[this.stack.length-1];if(l("inReference")){const I=l("referenceType")||"shortcut";A.type+="Reference",A.referenceType=I,delete A.url,delete A.title}else delete A.identifier,delete A.label;o("referenceType")}function W(){const A=this.stack[this.stack.length-1];if(l("inReference")){const I=l("referenceType")||"shortcut";A.type+="Reference",A.referenceType=I,delete A.url,delete A.title}else delete A.identifier,delete A.label;o("referenceType")}function x(A){const I=this.sliceSerialize(A),G=this.stack[this.stack.length-2];G.label=iS(I),G.identifier=Ir(I).toLowerCase()}function ne(){const A=this.stack[this.stack.length-1],I=this.resume(),G=this.stack[this.stack.length-1];if(o("inReference",!0),G.type==="link"){const ge=A.children;G.children=ge}else G.alt=I}function N(){const A=this.resume(),I=this.stack[this.stack.length-1];I.url=A}function g(){const A=this.resume(),I=this.stack[this.stack.length-1];I.title=A}function B(){o("inReference")}function Y(){o("referenceType","collapsed")}function P(A){const I=this.resume(),G=this.stack[this.stack.length-1];G.label=I,G.identifier=Ir(this.sliceSerialize(A)).toLowerCase(),o("referenceType","full")}function ee(A){o("characterReferenceType",A.type)}function M(A){const I=this.sliceSerialize(A),G=l("characterReferenceType");let ge;G?(ge=zg(I,G==="characterReferenceMarkerNumeric"?10:16),o("characterReferenceType")):ge=Hc(I);const ye=this.stack.pop();ye.value+=ge,ye.position.end=mn(A.end)}function fe(A){$.call(this,A);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(A)}function re(A){$.call(this,A);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(A)}function ue(){return{type:"blockquote",children:[]}}function X(){return{type:"code",lang:null,meta:null,value:""}}function $e(){return{type:"inlineCode",value:""}}function Ke(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function le(){return{type:"emphasis",children:[]}}function Be(){return{type:"heading",depth:void 0,children:[]}}function se(){return{type:"break"}}function Le(){return{type:"html",value:""}}function jn(){return{type:"image",title:null,url:"",alt:null}}function Ne(){return{type:"link",title:null,url:"",children:[]}}function Un(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function Hn(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function ft(){return{type:"paragraph",children:[]}}function q(){return{type:"strong",children:[]}}function be(){return{type:"text",value:""}}function qr(){return{type:"thematicBreak"}}}function mn(e){return{line:e.line,column:e.column,offset:e.offset}}function _g(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?_g(e,r):uS(e,r)}}function uS(e,t){let n;for(n in t)if(Rg.call(t,n)){if(n==="canContainEols"){const r=t[n];r&&e[n].push(...r)}else if(n==="transforms"){const r=t[n];r&&e[n].push(...r)}else if(n==="enter"||n==="exit"){const r=t[n];r&&Object.assign(e[n],r)}}}function lp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ci({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is still open")}function sS(e){Object.assign(this,{Parser:n=>{const r=this.data("settings");return lS(n,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}function cS(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function dS(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function fS(e,t){const n=t.value?t.value+`
`:"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};r&&(i.className=["language-"+r]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function pS(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hS(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&yt(e.charCodeAt(n+1))&&yt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ig(e,t){const n=String(t.identifier).toUpperCase(),r=Gr(n.toLowerCase()),i=e.footnoteOrder.indexOf(n);let o;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,o=e.footnoteOrder.length):(e.footnoteCounts[n]++,o=i+1);const l=e.footnoteCounts[n],a={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,a);const u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function mS(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:t.children}],position:t.position},Ig(e,{type:"footnoteReference",identifier:i,position:t.position})}function gS(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yS(e,t){if(e.dangerous){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}return null}function Og(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return{type:"text",value:"!["+t.alt+r};const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function vS(e,t){const n=e.definition(t.identifier);if(!n)return Og(e,t);const r={src:Gr(n.url||""),alt:t.alt};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,i),e.applyData(t,i)}function xS(e,t){const n={src:Gr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function wS(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function kS(e,t){const n=e.definition(t.identifier);if(!n)return Og(e,t);const r={href:Gr(n.url||"")};n.title!==null&&n.title!==void 0&&(r.title=n.title);const i={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function SS(e,t){const n={href:Gr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function CS(e,t,n){const r=e.all(t),i=n?ES(n):Lg(t),o={},l=[];if(typeof t.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&l.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?l.push(...d.children):l.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,s),e.applyData(t,s)}function ES(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Lg(n[r])}return t}function Lg(e){const t=e.spread;return t??e.children.length>1}function PS(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function bS(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function TS(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function AS(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Wc=Ng("start"),Yc=Ng("end");function FS(e){return{start:Wc(e),end:Yc(e)}}function Ng(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function zS(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Wc(t.children[1]),u=Yc(t.children[t.children.length-1]);a.line&&u.line&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function RS(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const s=[];for(;++u<a;){const c=t.children[u],h={},f=l?l[u]:void 0;f&&(h.align=f);let k={type:"element",tagName:o,properties:h,children:[]};c&&(k.children=e.all(c),e.patch(c,k),k=e.applyData(t,k)),s.push(k)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,d),e.applyData(t,d)}function _S(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const ap=9,up=32;function IS(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(sp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(sp(t.slice(i),i>0,!1)),o.join("")}function sp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===ap||o===up;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===ap||o===up;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function OS(e,t){const n={type:"text",value:IS(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function LS(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const NS={blockquote:cS,break:dS,code:fS,delete:pS,emphasis:hS,footnoteReference:Ig,footnote:mS,heading:gS,html:yS,imageReference:vS,image:xS,inlineCode:wS,linkReference:kS,link:SS,listItem:CS,list:PS,paragraph:bS,root:TS,strong:AS,table:zS,tableCell:_S,tableRow:RS,text:OS,thematicBreak:LS,toml:Co,yaml:Co,definition:Co,footnoteDefinition:Co};function Co(){return null}const Mg=function(e){if(e==null)return BS;if(typeof e=="string")return $S(e);if(typeof e=="object")return Array.isArray(e)?MS(e):DS(e);if(typeof e=="function")return oa(e);throw new Error("Expected function, string, or object as test")};function MS(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Mg(e[n]);return oa(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].call(this,...i))return!0;return!1}}function DS(e){return oa(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function $S(e){return oa(t);function t(n){return n&&n.type===e}}function oa(e){return t;function t(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&e.call(this,n,...r))}}function BS(){return!0}const jS=!0,cp=!1,US="skip",HS=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null);const i=Mg(t),o=r?-1:1;l(e,void 0,[])();function l(a,u,s){const d=a&&typeof a=="object"?a:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(c,"name",{value:"node ("+(a.type+(h?"<"+h+">":""))+")"})}return c;function c(){let h=[],f,k,w;if((!t||i(a,u,s[s.length-1]||null))&&(h=VS(n(a,s)),h[0]===cp))return h;if(a.children&&h[0]!==US)for(k=(r?a.children.length:-1)+o,w=s.concat(a);k>-1&&k<a.children.length;){if(f=l(a.children[k],k,w)(),f[0]===cp)return f;k=typeof f[1]=="number"?f[1]:k+o}return h}}};function VS(e){return Array.isArray(e)?e:typeof e=="number"?[jS,e]:[e]}const Qc=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null),HS(e,t,i,r);function i(o,l){const a=l[l.length-1];return n(o,a?a.children.indexOf(o):null,a)}};function WS(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const dp={}.hasOwnProperty;function YS(e){const t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return Qc(e,"definition",r=>{const i=fp(r.identifier);i&&!dp.call(t,i)&&(t[i]=r)}),n;function n(r){const i=fp(r);return i&&dp.call(t,i)?t[i]:null}}function fp(e){return String(e||"").toUpperCase()}const wl={}.hasOwnProperty;function QS(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={};return l.dangerous=r,l.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,l.footnoteLabel=n.footnoteLabel||"Footnotes",l.footnoteLabelTagName=n.footnoteLabelTagName||"h2",l.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},l.footnoteBackLabel=n.footnoteBackLabel||"Back to content",l.unknownHandler=n.unknownHandler,l.passThrough=n.passThrough,l.handlers={...NS,...n.handlers},l.definition=YS(e),l.footnoteById=i,l.footnoteOrder=[],l.footnoteCounts={},l.patch=GS,l.applyData=KS,l.one=a,l.all=u,l.wrap=XS,l.augment=o,Qc(e,"footnoteDefinition",s=>{const d=String(s.identifier).toUpperCase();wl.call(i,d)||(i[d]=s)}),l;function o(s,d){if(s&&"data"in s&&s.data){const c=s.data;c.hName&&(d.type!=="element"&&(d={type:"element",tagName:"",properties:{},children:[]}),d.tagName=c.hName),d.type==="element"&&c.hProperties&&(d.properties={...d.properties,...c.hProperties}),"children"in d&&d.children&&c.hChildren&&(d.children=c.hChildren)}if(s){const c="type"in s?s:{position:s};WS(c)||(d.position={start:Wc(c),end:Yc(c)})}return d}function l(s,d,c,h){return Array.isArray(c)&&(h=c,c={}),o(s,{type:"element",tagName:d,properties:c||{},children:h||[]})}function a(s,d){return Dg(l,s,d)}function u(s){return Gc(l,s)}}function GS(e,t){e.position&&(t.position=FS(e))}function KS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;typeof r=="string"&&(n.type==="element"?n.tagName=r:n={type:"element",tagName:r,properties:{},children:[]}),n.type==="element"&&o&&(n.properties={...n.properties,...o}),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Dg(e,t,n){const r=t&&t.type;if(!r)throw new Error("Expected node, got `"+t+"`");return wl.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?"children"in t?{...t,children:Gc(e,t)}:t:e.unknownHandler?e.unknownHandler(e,t,n):qS(e,t)}function Gc(e,t){const n=[];if("children"in t){const r=t.children;let i=-1;for(;++i<r.length;){const o=Dg(e,r[i],t);if(o){if(i&&r[i-1].type==="break"&&(!Array.isArray(o)&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,"")),!Array.isArray(o)&&o.type==="element")){const l=o.children[0];l&&l.type==="text"&&(l.value=l.value.replace(/^\s+/,""))}Array.isArray(o)?n.push(...o):n.push(o)}}}return n}function qS(e,t){const n=t.data||{},r="value"in t&&!(wl.call(n,"hProperties")||wl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:Gc(e,t)};return e.patch(t,r),e.applyData(t,r)}function XS(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ZS(e){const t=[];let n=-1;for(;++n<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;const i=e.all(r),o=String(r.identifier).toUpperCase(),l=Gr(o.toLowerCase());let a=0;const u=[];for(;++a<=e.footnoteCounts[o];){const c={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+l+(a>1?"-"+a:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};a>1&&c.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(a)}]}),u.length>0&&u.push({type:"text",value:" "}),u.push(c)}const s=i[i.length-1];if(s&&s.type==="element"&&s.tagName==="p"){const c=s.children[s.children.length-1];c&&c.type==="text"?c.value+=" ":s.children.push({type:"text",value:" "}),s.children.push(...u)}else i.push(...u);const d={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+l},children:e.wrap(i,!0)};e.patch(r,d),t.push(d)}if(t.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:`
`}]}}function $g(e,t){const n=QS(e,t),r=n.one(e,null),i=ZS(n);return i&&r.children.push({type:"text",value:`
`},i),Array.isArray(r)?{type:"root",children:r}:r}const JS=function(e,t){return e&&"run"in e?tC(e,t):nC(e||t)},eC=JS;function tC(e,t){return(n,r,i)=>{e.run($g(n,t),r,o=>{i(o)})}}function nC(e){return t=>$g(t,e)}var Bg={exports:{}},rC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iC=rC,oC=iC;function jg(){}function Ug(){}Ug.resetWarningCache=jg;var lC=function(){function e(r,i,o,l,a,u){if(u!==oC){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ug,resetWarningCache:jg};return n.PropTypes=n,n};Bg.exports=lC();var aC=Bg.exports;const Z=or(aC);class eo{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}eo.prototype.property={};eo.prototype.normal={};eo.prototype.space=null;function Hg(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new eo(n,r,t)}function Fs(e){return e.toLowerCase()}class It{constructor(t,n){this.property=t,this.attribute=n}}It.prototype.space=null;It.prototype.boolean=!1;It.prototype.booleanish=!1;It.prototype.overloadedBoolean=!1;It.prototype.number=!1;It.prototype.commaSeparated=!1;It.prototype.spaceSeparated=!1;It.prototype.commaOrSpaceSeparated=!1;It.prototype.mustUseProperty=!1;It.prototype.defined=!1;let uC=0;const te=sr(),Me=sr(),Vg=sr(),O=sr(),we=sr(),Or=sr(),ht=sr();function sr(){return 2**++uC}const zs=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Me,commaOrSpaceSeparated:ht,commaSeparated:Or,number:O,overloadedBoolean:Vg,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),tu=Object.keys(zs);class Kc extends It{constructor(t,n,r,i){let o=-1;if(super(t,n),pp(this,"space",i),typeof r=="number")for(;++o<tu.length;){const l=tu[o];pp(this,tu[o],(r&zs[l])===zs[l])}}}Kc.prototype.defined=!0;function pp(e,t,n){n&&(e[t]=n)}const sC={}.hasOwnProperty;function Kr(e){const t={},n={};let r;for(r in e.properties)if(sC.call(e.properties,r)){const i=e.properties[r],o=new Kc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Fs(r)]=r,n[Fs(o.attribute)]=r}return new eo(t,n,e.space)}const Wg=Kr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Yg=Kr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Qg(e,t){return t in e?e[t]:t}function Gg(e,t){return Qg(e,t.toLowerCase())}const Kg=Kr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Gg,properties:{xmlns:null,xmlnsXLink:null}}),qg=Kr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Me,ariaAutoComplete:null,ariaBusy:Me,ariaChecked:Me,ariaColCount:O,ariaColIndex:O,ariaColSpan:O,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:Me,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:Me,ariaFlowTo:we,ariaGrabbed:Me,ariaHasPopup:null,ariaHidden:Me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:O,ariaLive:null,ariaModal:Me,ariaMultiLine:Me,ariaMultiSelectable:Me,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:O,ariaPressed:Me,ariaReadOnly:Me,ariaRelevant:null,ariaRequired:Me,ariaRoleDescription:we,ariaRowCount:O,ariaRowIndex:O,ariaRowSpan:O,ariaSelected:Me,ariaSetSize:O,ariaSort:null,ariaValueMax:O,ariaValueMin:O,ariaValueNow:O,ariaValueText:null,role:null}}),cC=Kr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Gg,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Or,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:we,autoFocus:te,autoPlay:te,blocking:we,capture:null,charSet:null,checked:te,cite:null,className:we,cols:O,colSpan:null,content:null,contentEditable:Me,controls:te,controlsList:we,coords:O|Or,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:Vg,draggable:Me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:we,height:O,hidden:te,high:O,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:we,itemRef:we,itemScope:te,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:O,manifest:null,max:null,maxLength:O,media:null,method:null,min:null,minLength:O,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:O,pattern:null,ping:we,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:we,required:te,reversed:te,rows:O,rowSpan:O,sandbox:we,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shape:null,size:O,sizes:null,slot:null,span:O,spellCheck:Me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:O,step:null,style:null,tabIndex:O,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Me,width:O,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:O,borderColor:null,bottomMargin:O,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:O,leftMargin:O,link:null,longDesc:null,lowSrc:null,marginHeight:O,marginWidth:O,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:O,rules:null,scheme:null,scrolling:Me,standby:null,summary:null,text:null,topMargin:O,valueType:null,version:null,vAlign:null,vLink:null,vSpace:O,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:te,disableRemotePlayback:te,prefix:null,property:null,results:O,security:null,unselectable:null}}),dC=Kr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Qg,properties:{about:ht,accentHeight:O,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:O,amplitude:O,arabicForm:null,ascent:O,attributeName:null,attributeType:null,azimuth:O,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:O,by:null,calcMode:null,capHeight:O,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:O,diffuseConstant:O,direction:null,display:null,dur:null,divisor:O,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:O,enableBackground:null,end:null,event:null,exponent:O,externalResourcesRequired:null,fill:null,fillOpacity:O,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Or,g2:Or,glyphName:Or,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:O,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:O,horizOriginX:O,horizOriginY:O,id:null,ideographic:O,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:O,k:O,k1:O,k2:O,k3:O,k4:O,kernelMatrix:ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:O,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:O,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:O,overlineThickness:O,paintOrder:null,panose1:null,path:null,pathLength:O,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:O,pointsAtY:O,pointsAtZ:O,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ht,rev:ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ht,requiredFeatures:ht,requiredFonts:ht,requiredFormats:ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:O,specularExponent:O,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:O,strikethroughThickness:O,string:null,stroke:null,strokeDashArray:ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:O,strokeOpacity:O,strokeWidth:null,style:null,surfaceScale:O,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ht,tabIndex:O,tableValues:null,target:null,targetX:O,targetY:O,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:O,underlineThickness:O,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:O,values:null,vAlphabetic:O,vMathematical:O,vectorEffect:null,vHanging:O,vIdeographic:O,version:null,vertAdvY:O,vertOriginX:O,vertOriginY:O,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:O,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),fC=/^data[-\w.:]+$/i,hp=/-[a-z]/g,pC=/[A-Z]/g;function hC(e,t){const n=Fs(t);let r=t,i=It;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&fC.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(hp,gC);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!hp.test(o)){let l=o.replace(pC,mC);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Kc}return new i(r,t)}function mC(e){return"-"+e.toLowerCase()}function gC(e){return e.charAt(1).toUpperCase()}const mp={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},yC=Hg([Yg,Wg,Kg,qg,cC],"html"),vC=Hg([Yg,Wg,Kg,qg,dC],"svg");function xC(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{Qc(t,"element",(n,r,i)=>{const o=i;let l;if(e.allowedElements?l=!e.allowedElements.includes(n.tagName):e.disallowedElements&&(l=e.disallowedElements.includes(n.tagName)),!l&&e.allowElement&&typeof r=="number"&&(l=!e.allowElement(n,r,o)),l&&typeof r=="number")return e.unwrapDisallowed&&n.children?o.children.splice(r,1,...n.children):o.children.splice(r,1),r})}}var Xg={exports:{}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),sa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),wC=Symbol.for("react.server_context"),da=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),ma=Symbol.for("react.lazy"),kC=Symbol.for("react.offscreen"),Zg;Zg=Symbol.for("react.module.reference");function Ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qc:switch(e=e.type,e){case la:case ua:case aa:case fa:case pa:return e;default:switch(e=e&&e.$$typeof,e){case wC:case ca:case da:case ma:case ha:case sa:return e;default:return t}}case Xc:return t}}}me.ContextConsumer=ca;me.ContextProvider=sa;me.Element=qc;me.ForwardRef=da;me.Fragment=la;me.Lazy=ma;me.Memo=ha;me.Portal=Xc;me.Profiler=ua;me.StrictMode=aa;me.Suspense=fa;me.SuspenseList=pa;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return Ot(e)===ca};me.isContextProvider=function(e){return Ot(e)===sa};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc};me.isForwardRef=function(e){return Ot(e)===da};me.isFragment=function(e){return Ot(e)===la};me.isLazy=function(e){return Ot(e)===ma};me.isMemo=function(e){return Ot(e)===ha};me.isPortal=function(e){return Ot(e)===Xc};me.isProfiler=function(e){return Ot(e)===ua};me.isStrictMode=function(e){return Ot(e)===aa};me.isSuspense=function(e){return Ot(e)===fa};me.isSuspenseList=function(e){return Ot(e)===pa};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===la||e===ua||e===aa||e===fa||e===pa||e===kC||typeof e=="object"&&e!==null&&(e.$$typeof===ma||e.$$typeof===ha||e.$$typeof===sa||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===Zg||e.getModuleId!==void 0)};me.typeOf=Ot;Xg.exports=me;var SC=Xg.exports;const CC=or(SC);function EC(e){const t=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof t=="string"&&t.replace(/[ \t\n\f\r]/g,"")===""}function PC(e){return e.join(" ").trim()}function bC(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var Zc={exports:{}},gp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,TC=/\n/g,AC=/^\s*/,FC=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,zC=/^:\s*/,RC=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,_C=/^[;\s]*/,IC=/^\s+|\s+$/g,OC=`
`,yp="/",vp="*",Qn="",LC="comment",NC="declaration",MC=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(k){var w=k.match(TC);w&&(n+=w.length);var C=k.lastIndexOf(OC);r=~C?k.length-C:r+k.length}function o(){var k={line:n,column:r};return function(w){return w.position=new l(k),s(),w}}function l(k){this.start=k,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(k){var w=new Error(t.source+":"+n+":"+r+": "+k);if(w.reason=k,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function u(k){var w=k.exec(e);if(w){var C=w[0];return i(C),e=e.slice(C.length),w}}function s(){u(AC)}function d(k){var w;for(k=k||[];w=c();)w!==!1&&k.push(w);return k}function c(){var k=o();if(!(yp!=e.charAt(0)||vp!=e.charAt(1))){for(var w=2;Qn!=e.charAt(w)&&(vp!=e.charAt(w)||yp!=e.charAt(w+1));)++w;if(w+=2,Qn===e.charAt(w-1))return a("End of comment missing");var C=e.slice(2,w-2);return r+=2,i(C),e=e.slice(w),r+=2,k({type:LC,comment:C})}}function h(){var k=o(),w=u(FC);if(w){if(c(),!u(zC))return a("property missing ':'");var C=u(RC),p=k({type:NC,property:xp(w[0].replace(gp,Qn)),value:C?xp(C[0].replace(gp,Qn)):Qn});return u(_C),p}}function f(){var k=[];d(k);for(var w;w=h();)w!==!1&&(k.push(w),d(k));return k}return s(),f()};function xp(e){return e?e.replace(IC,Qn):Qn}var DC=MC;function Jg(e,t){var n=null;if(!e||typeof e!="string")return n;for(var r,i=DC(e),o=typeof t=="function",l,a,u=0,s=i.length;u<s;u++)r=i[u],l=r.property,a=r.value,o?t(l,a,r):a&&(n||(n={}),n[l]=a);return n}Zc.exports=Jg;Zc.exports.default=Jg;var $C=Zc.exports;const BC=or($C),Rs={}.hasOwnProperty,jC=new Set(["table","thead","tbody","tfoot","tr"]);function ey(e,t){const n=[];let r=-1,i;for(;++r<t.children.length;)i=t.children[r],i.type==="element"?n.push(UC(e,i,r,t)):i.type==="text"?(t.type!=="element"||!jC.has(t.tagName)||!EC(i))&&n.push(i.value):i.type==="raw"&&!e.options.skipHtml&&n.push(i.value);return n}function UC(e,t,n,r){const i=e.options,o=i.transformLinkUri===void 0?Dw:i.transformLinkUri,l=e.schema,a=t.tagName,u={};let s=l,d;if(l.space==="html"&&a==="svg"&&(s=vC,e.schema=s),t.properties)for(d in t.properties)Rs.call(t.properties,d)&&VC(u,d,t.properties[d],e);(a==="ol"||a==="ul")&&e.listDepth++;const c=ey(e,t);(a==="ol"||a==="ul")&&e.listDepth--,e.schema=l;const h=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},f=i.components&&Rs.call(i.components,a)?i.components[a]:a,k=typeof f=="string"||f===vt.Fragment;if(!CC.isValidElementType(f))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(u.key=n,a==="a"&&i.linkTarget&&(u.target=typeof i.linkTarget=="function"?i.linkTarget(String(u.href||""),t.children,typeof u.title=="string"?u.title:null):i.linkTarget),a==="a"&&o&&(u.href=o(String(u.href||""),t.children,typeof u.title=="string"?u.title:null)),!k&&a==="code"&&r.type==="element"&&r.tagName!=="pre"&&(u.inline=!0),!k&&(a==="h1"||a==="h2"||a==="h3"||a==="h4"||a==="h5"||a==="h6")&&(u.level=Number.parseInt(a.charAt(1),10)),a==="img"&&i.transformImageUri&&(u.src=i.transformImageUri(String(u.src||""),String(u.alt||""),typeof u.title=="string"?u.title:null)),!k&&a==="li"&&r.type==="element"){const w=HC(t);u.checked=w&&w.properties?!!w.properties.checked:null,u.index=nu(r,t),u.ordered=r.tagName==="ol"}return!k&&(a==="ol"||a==="ul")&&(u.ordered=a==="ol",u.depth=e.listDepth),(a==="td"||a==="th")&&(u.align&&(u.style||(u.style={}),u.style.textAlign=u.align,delete u.align),k||(u.isHeader=a==="th")),!k&&a==="tr"&&r.type==="element"&&(u.isHeader=r.tagName==="thead"),i.sourcePos&&(u["data-sourcepos"]=QC(h)),!k&&i.rawSourcePos&&(u.sourcePosition=t.position),!k&&i.includeElementIndex&&(u.index=nu(r,t),u.siblingCount=nu(r)),k||(u.node=t),c.length>0?vt.createElement(f,u,c):vt.createElement(f,u)}function HC(e){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if(n.type==="element"&&n.tagName==="input")return n}return null}function nu(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type==="element"&&r++;return r}function VC(e,t,n,r){const i=hC(r.schema,t);let o=n;o==null||o!==o||(Array.isArray(o)&&(o=i.commaSeparated?bC(o):PC(o)),i.property==="style"&&typeof o=="string"&&(o=WC(o)),i.space&&i.property?e[Rs.call(mp,i.property)?mp[i.property]:i.property]=o:i.attribute&&(e[i.attribute]=o))}function WC(e){const t={};try{BC(e,n)}catch{}return t;function n(r,i){const o=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;t[o.replace(/-([a-z])/g,YC)]=i}}function YC(e,t){return t.toUpperCase()}function QC(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}const wp={}.hasOwnProperty,GC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Eo={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function ty(e){for(const o in Eo)if(wp.call(Eo,o)&&wp.call(e,o)){const l=Eo[o];console.warn(`[react-markdown] Warning: please ${l.to?`use \`${l.to}\` instead of`:"remove"} \`${o}\` (see <${GC}#${l.id}> for more info)`),delete Eo[o]}const t=ek().use(sS).use(e.remarkPlugins||[]).use(eC,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(xC,e),n=new gg;typeof e.children=="string"?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=t.runSync(t.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let i=vt.createElement(vt.Fragment,{},ey({options:e,schema:yC,listDepth:0},r));return e.className&&(i=vt.createElement("div",{className:e.className},i)),i}ty.propTypes={children:Z.string,className:Z.string,allowElement:Z.func,allowedElements:Z.arrayOf(Z.string),disallowedElements:Z.arrayOf(Z.string),unwrapDisallowed:Z.bool,remarkPlugins:Z.arrayOf(Z.oneOfType([Z.object,Z.func,Z.arrayOf(Z.oneOfType([Z.bool,Z.string,Z.object,Z.func,Z.arrayOf(Z.any)]))])),rehypePlugins:Z.arrayOf(Z.oneOfType([Z.object,Z.func,Z.arrayOf(Z.oneOfType([Z.bool,Z.string,Z.object,Z.func,Z.arrayOf(Z.any)]))])),sourcePos:Z.bool,rawSourcePos:Z.bool,skipHtml:Z.bool,includeElementIndex:Z.bool,transformLinkUri:Z.oneOfType([Z.func,Z.bool]),linkTarget:Z.oneOfType([Z.func,Z.string]),transformImageUri:Z.func,components:Z.object};const KC=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,qC=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`,XC=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,ZC=b(it)`
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
`,JC=b.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-block;
`,eE=b.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,tE=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #e2e8f0;
`,ru=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nE=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    color: #e2e8f0;
    font-size: 0.875rem;
  }
`,rE=b.div`
  display: flex;
  gap: 0.75rem;
`,iu=b.a`
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
`,iE=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,oE=b.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,lE=b.div`
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
`,aE=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`,uE=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sE=b.section`
  background: #f8fafc;
  padding: 3rem 0;
`,cE=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,dE=b.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #1a1a1a;
`,fE=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,pE=b(it)`
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
`,hE=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`,mE=b.div`
  padding: 1.5rem;
`,gE=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`,yE=b.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`,vE=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
`;function xE(){const{id:e}=Hm(),t=Hr.find(o=>o.id===parseInt(e));if(!t)return y(Qm,{to:"/blog",replace:!0});const n=Hr.filter(o=>o.category===t.category&&o.id!==t.id).slice(0,3),r=window.location.href,i=t.title;return F(KC,{children:[y(qC,{children:F(XC,{children:[F(ZC,{to:"/blog",children:[y(fg,{size:20}),"Back to Blog"]}),y(JC,{children:t.category}),y(eE,{children:t.title}),F(tE,{children:[F(ru,{children:[y(_r,{size:16}),t.author]}),F(ru,{children:[y(_x,{size:16}),new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),F(ru,{children:[y(Wi,{size:16}),t.readTime," read"]})]}),F(nE,{children:[y("span",{children:"Share this article:"}),F(rE,{children:[y(iu,{href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(i)}&url=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:y(Si,{size:18})}),y(iu,{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:y(Ox,{size:18})}),y(iu,{href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(r)}`,target:"_blank",rel:"noopener noreferrer",children:y(Bo,{size:18})})]})]})]})}),F(iE,{children:[y(oE,{children:y(lE,{children:y(ty,{children:t.content})})}),y(aE,{children:t.tags.map(o=>F(uE,{children:[y(Bx,{size:14}),o]},o))})]}),n.length>0&&y(sE,{children:F(cE,{children:[y(dE,{children:"Related Articles"}),y(fE,{children:n.map(o=>F(pE,{to:`/post/${o.id}`,children:[y(hE,{children:o.category==="Analysis"?"📈":o.category==="Guide"?"📖":o.category==="Security"?"🛡️":o.category==="Technology"?"⚙️":o.category==="NFTs"?"🎨":"₿"}),F(mE,{children:[y(gE,{children:o.category}),y(yE,{children:o.title}),F(vE,{children:[o.excerpt.substring(0,120),"..."]})]})]},o.id))})]})})]})}const wE=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,kE=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
`,SE=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,CE=b.div`
  margin: 0 auto 2rem;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,EE=b.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,PE=b.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  line-height: 1.6;
`,ou=b.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: #f8fafc;
  }
`,Po=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,lu=b.div`
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
`,bE=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,au=b.div`
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
`,uu=b.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,su=b.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`,cu=b.p`
  color: #64748b;
  line-height: 1.6;
`,TE=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,du=b.div`
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
`,fu=b.div`
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
`,pu=b.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`,hu=b.p`
  color: #0A84FF;
  font-weight: 500;
  margin-bottom: 1rem;
`,mu=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,gu=b.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`,fr=b.a`
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
`,AE=b.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 2rem;
  }
`,FE=b.section`
  background: #1a1a1a;
  color: white;
  padding: 5rem 0;
  text-align: center;
`,zE=b.div`
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
`,RE=b.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,_E=b(it)`
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
`,IE=b.a`
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
`;function OE(){return F(wE,{children:[y(kE,{children:F(SE,{children:[y(CE,{children:y(vl,{size:50})}),y(EE,{children:"About CryptoBlog"}),y(PE,{children:"We're passionate about making cryptocurrency accessible, understandable, and profitable for everyone. Our mission is to educate, inform, and empower the next generation of crypto enthusiasts."})]})}),y(ou,{children:F(Po,{children:[F(lu,{children:[y("h2",{children:"Our Mission"}),y("p",{children:"Democratizing cryptocurrency knowledge through high-quality, accessible content and expert insights."})]}),F(bE,{children:[F(au,{children:[y(uu,{children:y(jx,{size:40})}),y(su,{children:"Educate"}),y(cu,{children:"We provide comprehensive guides and tutorials to help newcomers understand the complexities of cryptocurrency and blockchain technology."})]}),F(au,{children:[y(uu,{children:y(xl,{size:40})}),y(su,{children:"Protect"}),y(cu,{children:"Security is paramount in crypto. We share best practices and safety measures to help you protect your digital assets."})]}),F(au,{children:[y(uu,{children:y(Ux,{size:40})}),y(su,{children:"Community"}),y(cu,{children:"Building a supportive community of crypto enthusiasts who share knowledge, insights, and experiences together."})]})]})]})}),y(ou,{children:y(Po,{children:F(AE,{children:[F(lu,{children:[y("h2",{children:"Our Story"}),y("p",{children:"How we became passionate advocates for cryptocurrency education and adoption."})]}),y("p",{children:"Founded in 2023, CryptoBlog emerged from a simple realization: the cryptocurrency space was full of complex information but lacked accessible, trustworthy educational content for everyday people."}),y("p",{children:"Our team of crypto experts, financial analysts, and blockchain developers came together with a shared vision: to bridge the knowledge gap between crypto complexity and public understanding. We believe that everyone deserves access to clear, accurate, and actionable cryptocurrency information."}),y("p",{children:"Today, we're proud to serve thousands of readers monthly, helping them navigate the exciting world of digital assets with confidence and security."})]})})}),y(ou,{children:F(Po,{children:[F(lu,{children:[y("h2",{children:"Meet Our Team"}),y("p",{children:"Passionate crypto experts dedicated to bringing you the best insights and analysis."})]}),F(TE,{children:[F(du,{children:[y(fu,{children:"AT"}),y(pu,{children:"Alex Thompson"}),y(hu,{children:"Lead Analyst"}),y(mu,{children:"Former Wall Street analyst with 8+ years in traditional finance and 5 years in crypto. Specializes in technical analysis and market predictions."}),F(gu,{children:[y(fr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:y(Si,{size:16})}),y(fr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:y(Bo,{size:16})})]})]}),F(du,{children:[y(fu,{children:"SC"}),y(pu,{children:"Sarah Chen"}),y(hu,{children:"DeFi Specialist"}),y(mu,{children:"Blockchain developer turned educator with deep expertise in DeFi protocols, smart contracts, and yield farming strategies."}),F(gu,{children:[y(fr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:y(Si,{size:16})}),y(fr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:y(Bo,{size:16})})]})]}),F(du,{children:[y(fu,{children:"MR"}),y(pu,{children:"Mike Rodriguez"}),y(hu,{children:"Security Expert"}),y(mu,{children:"Cybersecurity professional focused on crypto security, wallet safety, and protecting digital assets from threats and scams."}),F(gu,{children:[y(fr,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:y(Si,{size:16})}),y(fr,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:y(Bo,{size:16})})]})]})]})]})}),y(FE,{children:y(Po,{children:F(zE,{children:[y("h2",{children:"Join Our Journey"}),y("p",{children:"Ready to dive deeper into the world of cryptocurrency? Explore our latest articles or get in touch with our team."}),F(RE,{children:[F(_E,{to:"/blog",children:["Read Our Blog",y(ks,{size:20})]}),F(IE,{href:"mailto:contact@cryptoblog.com",children:[y(pg,{size:20}),"Contact Us"]})]})]})})})]})}const LE=b.div`
  padding-top: 80px;
  min-height: 100vh;
`,NE=b.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`,ME=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,DE=b(it)`
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
`,$E=b.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`,BE=b.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,jE=b.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 600px;
  margin: 0 auto;
`,UE=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,HE=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,VE=b(it)`
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
`,WE=b.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`,YE=b.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,QE=b.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  line-height: 1.4;
`,GE=b.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`,KE=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`,kp=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qE=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`,XE=b.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`,ZE=b.div`
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
`,JE=b(it)`
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
`,e5=b.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  text-align: center;
`,t5={Analysis:{icon:y(Cn,{size:40}),description:"In-depth market analysis, price predictions, and technical insights to help you understand crypto trends."},Guide:{icon:y(Ss,{size:40}),description:"Step-by-step tutorials and comprehensive guides to help you navigate the crypto ecosystem."},Security:{icon:y(xl,{size:40}),description:"Essential security practices and tips to protect your crypto assets and stay safe in DeFi."},Technology:{icon:y(Ix,{size:40}),description:"Exploring the latest blockchain technologies, protocols, and innovations shaping the future."},NFTs:{icon:y(Dx,{size:40}),description:"Everything about Non-Fungible Tokens, from art and collectibles to utility and market trends."},DeFi:{icon:y(Cn,{size:40}),description:"Decentralized Finance protocols, yield farming, liquidity mining, and DeFi strategies."},Trading:{icon:y(Cn,{size:40}),description:"Trading strategies, market analysis, and insights for both beginners and experienced traders."},News:{icon:y(Cn,{size:40}),description:"Latest cryptocurrency news, regulatory updates, and important developments in the industry."}};function n5(){const{category:e}=Hm();if(!hg.includes(e)&&e!=="All")return y(Qm,{to:"/blog",replace:!0});const t=Hr.filter(r=>r.category===e),n=t5[e]||{icon:y(Cn,{size:40}),description:`Explore articles in the ${e} category.`};return F(LE,{children:[y(NE,{children:F(ME,{children:[F(DE,{to:"/blog",children:[y(fg,{size:20}),"Back to Blog"]}),y($E,{children:n.icon}),y(BE,{children:e}),y(jE,{children:n.description})]})}),y(UE,{children:t.length>0?F(Lp,{children:[F(e5,{children:[t.length," article",t.length!==1?"s":""," in ",e]}),y(HE,{children:t.map(r=>F(VE,{to:`/post/${r.id}`,children:[y(WE,{children:e==="Analysis"?"📈":e==="Guide"?"📖":e==="Security"?"🛡️":e==="Technology"?"⚙️":e==="NFTs"?"🎨":e==="DeFi"?"🏦":e==="Trading"?"💹":e==="News"?"📰":"₿"}),F(YE,{children:[y(QE,{children:r.title}),y(GE,{children:r.excerpt}),F(KE,{children:[F(kp,{children:[y(_r,{size:14}),r.author]}),F(kp,{children:[y(Wi,{size:14}),r.readTime]})]}),y(qE,{children:r.tags.slice(0,3).map(i=>y(XE,{children:i},i))})]})]},r.id))})]}):F(ZE,{children:[F("h3",{children:["No articles in ",e," yet"]}),y("p",{children:"We're working on adding more content to this category. Check back soon or explore other categories."}),y(JE,{to:"/blog",children:"Browse All Articles"})]})})]})}function r5(){return F("div",{style:{padding:"2rem"},children:[y("h2",{children:"Our Services"}),F("ul",{children:[y("li",{children:"SEO Optimization"}),y("li",{children:"Social Media Management"}),y("li",{children:"Content Marketing"}),y("li",{children:"PPC Campaigns"}),y("li",{children:"Email Marketing"})]})]})}const i5=b.div`
  padding-top: 80px;
`,o5=b.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
`,yu=b.div`
  margin-bottom: 1rem;
  display: grid;
  gap: 0.5rem;
`,Sp=b.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`,l5=b.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`,a5=b.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
`;function u5(){const[e,t]=D.useState({name:"",email:"",message:""}),n=i=>{const{name:o,value:l}=i.target;t(a=>({...a,[o]:l}))};return y(i5,{children:F(o5,{children:[y("h2",{style:{marginBottom:"1rem"},children:"Contact Us"}),F("form",{onSubmit:i=>{i.preventDefault();const o=encodeURIComponent(`New inquiry from ${e.name}`),l=encodeURIComponent(`Name: ${e.name}
Email: ${e.email}

${e.message}`);window.location.href=`mailto:contact@example.com?subject=${o}&body=${l}`},children:[F(yu,{children:[y("label",{htmlFor:"name",children:"Name"}),y(Sp,{id:"name",name:"name",value:e.name,onChange:n,required:!0})]}),F(yu,{children:[y("label",{htmlFor:"email",children:"Email"}),y(Sp,{id:"email",type:"email",name:"email",value:e.email,onChange:n,required:!0})]}),F(yu,{children:[y("label",{htmlFor:"message",children:"Message"}),y(l5,{id:"message",name:"message",rows:"5",value:e.message,onChange:n,required:!0})]}),y(a5,{type:"submit",children:"Send"})]})]})})}function s5(){return y("div",{style:{paddingTop:"80px"},children:F("section",{style:{maxWidth:800,margin:"0 auto",padding:"3rem 2rem"},children:[y("h1",{style:{marginBottom:"1rem"},children:"Privacy Policy"}),y("p",{style:{color:"#64748b"},children:"We respect your privacy. We only collect information necessary to provide our services and never sell your data."})]})})}function c5(){return y("div",{style:{paddingTop:"80px"},children:F("section",{style:{maxWidth:800,margin:"0 auto",padding:"3rem 2rem"},children:[y("h1",{style:{marginBottom:"1rem"},children:"Terms of Service"}),y("p",{style:{color:"#64748b"},children:"Use this website responsibly. By using our services, you agree to our terms and conditions."})]})})}const d5=b.nav`
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,f5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,p5=b(it)`
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
`,h5=b.div`
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
`,Vn=b(it)`
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
`,m5=b.button`
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
`,g5=b.button`
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
`;function y5(){const[e,t]=D.useState(!1),n=()=>{t(!e)},r=()=>{t(!1)};return y(d5,{children:F(f5,{children:[F(p5,{to:"/",children:[y(vl,{size:28}),"CryptoBlog"]}),F(h5,{isOpen:e,children:[y(Vn,{to:"/",onClick:r,children:"Home"}),y(Vn,{to:"/blog",onClick:r,children:"Blog"}),y(Vn,{to:"/category/Analysis",onClick:r,children:"Analysis"}),y(Vn,{to:"/category/Guide",onClick:r,children:"Guides"}),y(Vn,{to:"/services",onClick:r,children:"Services"}),y(Vn,{to:"/about",onClick:r,children:"About"}),y(Vn,{to:"/contact",onClick:r,children:"Contact"}),y(g5,{as:it,to:"/contact",onClick:r,children:"Get Quote"})]}),y(m5,{onClick:n,children:e?y(Hx,{size:24}):y(Mx,{size:24})})]})})}const v5=b.footer`
  background: #1a1a1a;
  color: #e2e8f0;
  padding: 3rem 0 1rem;
  margin-top: auto;
`,x5=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,w5=b.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,bo=b.div`
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
`,vu=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,pt=b(it)`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0A84FF;
  }
`,k5=b.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,xu=b.a`
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
`,S5=b.div`
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
`,C5=b.form`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,E5=b.input`
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
`,P5=b.button`
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
`,b5=b.div`
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
`,Cp=b.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0A84FF;
  font-size: 1.25rem;
  font-weight: 700;
`,T5=b.p`
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;function A5(){return y(v5,{children:F(x5,{children:[F(S5,{children:[y("h3",{children:"Stay Updated"}),y("p",{children:"Get the latest crypto insights delivered to your inbox weekly."}),F(C5,{onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing! (This is a demo)")},children:[y(E5,{type:"email",placeholder:"Enter your email",required:!0}),y(P5,{type:"submit",children:"Subscribe"})]})]}),F(w5,{children:[F(bo,{children:[F(Cp,{children:[y(vl,{size:24}),"CryptoBlog"]}),y("p",{children:"Your trusted source for cryptocurrency news, analysis, and insights. We cover everything from Bitcoin and Ethereum to DeFi and NFTs."}),F(k5,{children:[y(xu,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:y(Si,{size:18})}),y(xu,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:y(Lx,{size:18})}),y(xu,{href:"mailto:contact@cryptoblog.com",children:y(pg,{size:18})})]})]}),F(bo,{children:[y("h3",{children:"Content"}),F(vu,{children:[y(pt,{to:"/blog",children:"All Posts"}),y(pt,{to:"/category/Analysis",children:"Analysis"}),y(pt,{to:"/category/Guide",children:"Guides"}),y(pt,{to:"/category/Security",children:"Security"}),y(pt,{to:"/category/DeFi",children:"DeFi"})]})]}),F(bo,{children:[y("h3",{children:"Resources"}),F(vu,{children:[y(pt,{to:"/about",children:"About Us"}),y(pt,{to:"/privacy",children:"Privacy Policy"}),y(pt,{to:"/terms",children:"Terms of Service"}),y(pt,{to:"/contact",children:"Contact"})]})]}),F(bo,{children:[y("h3",{children:"Categories"}),F(vu,{children:[y(pt,{to:"/category/Bitcoin",children:"Bitcoin"}),y(pt,{to:"/category/Ethereum",children:"Ethereum"}),y(pt,{to:"/category/NFTs",children:"NFTs"}),y(pt,{to:"/category/Trading",children:"Trading"})]})]})]}),F(b5,{children:[F(T5,{children:["© 2024 CryptoBlog. Made with ",y(Nx,{size:16,color:"#FF5A5F"})," for the crypto community."]}),F(Cp,{children:[y(vl,{size:20}),"CryptoBlog"]})]})]})})}const F5=Ax`
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
`;function z5(){return F(bv,{children:[y(F5,{}),y(y5,{}),F(xv,{children:[y(Vt,{path:"/",element:y(mw,{})}),y(Vt,{path:"/blog",element:y(Mw,{})}),y(Vt,{path:"/post/:id",element:y(xE,{})}),y(Vt,{path:"/category/:category",element:y(n5,{})}),y(Vt,{path:"/about",element:y(OE,{})}),y(Vt,{path:"/services",element:y(r5,{})}),y(Vt,{path:"/contact",element:y(u5,{})}),y(Vt,{path:"/privacy",element:y(s5,{})}),y(Vt,{path:"/terms",element:y(c5,{})})]}),y(A5,{})]})}const R5=document.getElementById("root"),_5=wu.createRoot(R5);_5.render(y(vt.StrictMode,{children:y(z5,{})}));
