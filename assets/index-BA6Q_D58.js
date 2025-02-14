const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CEcksSp0.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},tr=[],Mn=()=>{},Jh=()=>!1,eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ml=n=>n.startsWith("onUpdate:"),Pt=Object.assign,gl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Qh=Object.prototype.hasOwnProperty,nt=(n,e)=>Qh.call(n,e),He=Array.isArray,Nr=n=>to(n)==="[object Map]",ed=n=>to(n)==="[object Set]",ke=n=>typeof n=="function",gt=n=>typeof n=="string",xr=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Ku=n=>(dt(n)||ke(n))&&ke(n.then)&&ke(n.catch),td=Object.prototype.toString,to=n=>td.call(n),nd=n=>to(n).slice(8,-1),id=n=>to(n)==="[object Object]",_l=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},rd=/-(\w)/g,Jt=no(n=>n.replace(rd,(e,t)=>t?t.toUpperCase():"")),sd=/\B([A-Z])/g,Ii=no(n=>n.replace(sd,"-$1").toLowerCase()),io=no(n=>n.charAt(0).toUpperCase()+n.slice(1)),xo=no(n=>n?`on${io(n)}`:""),ti=(n,e)=>!Object.is(n,e),Mo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},od=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nc;const ro=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?ud(i):vl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(n)||dt(n))return n}const ad=/;(?![^(]*\))/g,ld=/:([^]+)/,cd=/\/\*[^]*?\*\//g;function ud(n){const e={};return n.replace(cd,"").split(ad).forEach(t=>{if(t){const i=t.split(ld);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function so(n){let e="";if(gt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=so(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=pl(fd);function Ju(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Qu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dd(n){return new Qu(n)}function pd(){return Wt}let at;const So=new WeakSet;class ef{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,So.has(this)&&(So.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ic(this),rf(this);const e=at,t=un;at=this,un=!0;try{return this.fn()}finally{sf(this),at=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sl(e);this.deps=this.depsTail=void 0,ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?So.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fa(this)&&this.run()}get dirty(){return fa(this)}}let tf=0,Or,Br;function nf(n,e=!1){if(n.flags|=8,e){n.next=Br,Br=n;return}n.next=Or,Or=n}function xl(){tf++}function Ml(){if(--tf>0)return;if(Br){let e=Br;for(Br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Or;){let e=Or;for(Or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Sl(i),md(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function fa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function of(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wr))return;n.globalVersion=Wr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!fa(n)){n.flags&=-3;return}const t=at,i=un;at=n,un=!0;try{rf(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{at=t,un=i,sf(n),n.flags&=-3}}function Sl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Sl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function md(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const af=[];function ai(){af.push(un),un=!1}function li(){const n=af.pop();un=n===void 0?!0:n}function ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let Wr=0;class gd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class El{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!at||!un||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new gd(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,lf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){xl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ml()}}}function lf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ha=new WeakMap,Ri=Symbol(""),da=Symbol(""),Xr=Symbol("");function bt(n,e,t){if(un&&at){let i=ha.get(n);i||ha.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new El),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const o=ha.get(n);if(!o){Wr++;return}const a=l=>{l&&l.trigger()};if(xl(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&_l(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Xr||!xr(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Xr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ri)),Nr(n)&&a(o.get(da)));break;case"delete":l||(a(o.get(Ri)),Nr(n)&&a(o.get(da)));break;case"set":Nr(n)&&a(o.get(Ri));break}}Ml()}function Fi(n){const e=tt(n);return e===n?e:(bt(e,"iterate",Xr),Zt(n)?e:e.map(At))}function oo(n){return bt(n=tt(n),"iterate",Xr),n}const _d={__proto__:null,[Symbol.iterator](){return Eo(this,Symbol.iterator,At)},concat(...n){return Fi(this).concat(...n.map(e=>He(e)?Fi(e):e))},entries(){return Eo(this,"entries",n=>(n[1]=At(n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(At),arguments)},find(n,e){return An(this,"find",n,e,At,arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,At,arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return yo(this,"includes",n)},indexOf(...n){return yo(this,"indexOf",n)},join(n){return Fi(this).join(n)},lastIndexOf(...n){return yo(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return Tr(this,"pop")},push(...n){return Tr(this,"push",n)},reduce(n,...e){return rc(this,"reduce",n,e)},reduceRight(n,...e){return rc(this,"reduceRight",n,e)},shift(){return Tr(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return Tr(this,"splice",n)},toReversed(){return Fi(this).toReversed()},toSorted(n){return Fi(this).toSorted(n)},toSpliced(...n){return Fi(this).toSpliced(...n)},unshift(...n){return Tr(this,"unshift",n)},values(){return Eo(this,"values",At)}};function Eo(n,e,t){const i=oo(n),r=i[e]();return i!==n&&!Zt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const vd=Array.prototype;function An(n,e,t,i,r,s){const o=oo(n),a=o!==n&&!Zt(n),l=o[e];if(l!==vd[e]){const f=l.apply(n,s);return a?At(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,At(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function rc(n,e,t,i){const r=oo(n);let s=t;return r!==n&&(Zt(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,At(a),l,n)}),r[e](s,...i)}function yo(n,e,t){const i=tt(n);bt(i,"iterate",Xr);const r=i[e](...t);return(r===-1||r===!1)&&bl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Tr(n,e,t=[]){ai(),xl();const i=tt(n)[e].apply(n,t);return Ml(),li(),i}const xd=pl("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xr));function Md(n){xr(n)||(n=String(n));const e=tt(this);return bt(e,"has",n),e.hasOwnProperty(n)}class uf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Pd:pf:s?df:hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=_d[t]))return l;if(t==="hasOwnProperty")return Md}const a=Reflect.get(e,t,Ct(e)?e:i);return(xr(t)?cf.has(t):xd(t))||(r||bt(e,"get",t),s)?a:Ct(a)?o&&_l(t)?a:a.value:dt(a)?r?gf(a):ao(a):a}}class ff extends uf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ci(s);if(!Zt(i)&&!Ci(i)&&(s=tt(s),i=tt(i)),!He(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=He(e)&&_l(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Ct(e)?e:r);return e===tt(r)&&(o?ti(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!xr(t)||!cf.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",He(e)?"length":Ri),Reflect.ownKeys(e)}}class Sd extends uf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ed=new ff,yd=new Sd,Td=new ff(!0);const pa=n=>n,us=n=>Reflect.getPrototypeOf(n);function bd(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Nr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?pa:e?ma:At;return!e&&bt(s,"iterate",l?da:Ri),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ad(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(ti(r,a)&&bt(o,"get",r),bt(o,"get",a));const{has:l}=us(o),c=e?pa:n?ma:At;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(tt(r),"iterate",Ri),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(ti(r,a)&&bt(o,"has",r),bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?pa:n?ma:At;return!n&&bt(l,"iterate",Ri),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Pt(t,n?{add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear")}:{add(r){!e&&!Zt(r)&&!Ci(r)&&(r=tt(r));const s=tt(this);return us(s).has.call(s,r)||(s.add(r),Nn(s,"add",r,r)),this},set(r,s){!e&&!Zt(s)&&!Ci(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=us(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ti(s,u)&&Nn(o,"set",r,s):Nn(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=us(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Nn(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&Nn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bd(r,n,e)}),t}function yl(n,e){const t=Ad(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const wd={get:yl(!1,!1)},Rd={get:yl(!1,!0)},Cd={get:yl(!0,!1)};const hf=new WeakMap,df=new WeakMap,pf=new WeakMap,Pd=new WeakMap;function Ld(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dd(n){return n.__v_skip||!Object.isExtensible(n)?0:Ld(nd(n))}function ao(n){return Ci(n)?n:Tl(n,!1,Ed,wd,hf)}function mf(n){return Tl(n,!1,Td,Rd,df)}function gf(n){return Tl(n,!0,yd,Cd,pf)}function Tl(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Dd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function nr(n){return Ci(n)?nr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function Zt(n){return!!(n&&n.__v_isShallow)}function bl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function _f(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Zu(n,"__v_skip",!0),n}const At=n=>dt(n)?ao(n):n,ma=n=>dt(n)?gf(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function bi(n){return vf(n,!1)}function Id(n){return vf(n,!0)}function vf(n,e){return Ct(n)?n:new Ud(n,e)}class Ud{constructor(e,t){this.dep=new El,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:At(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Zt(e)||Ci(e);e=i?e:tt(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:At(e),this.dep.trigger())}}function ir(n){return Ct(n)?n.value:n}const Nd={get:(n,e,t)=>e==="__v_raw"?n:ir(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function xf(n){return nr(n)?n:new Proxy(n,Nd)}class Fd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new El(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return nf(this,!0),!0}get value(){const e=this.dep.track();return of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Od(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new Fd(i,r,t)}const hs={},Xs=new WeakMap;let Mi;function Bd(n,e=!1,t=Mi){if(t){let i=Xs.get(t);i||Xs.set(t,i=[]),i.push(n)}}function zd(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:Zt(E)||r===!1||r===0?Qn(E,1):Qn(E);let u,f,h,p,v=!1,M=!1;if(Ct(n)?(f=()=>n.value,v=Zt(n)):nr(n)?(f=()=>c(n),v=!0):He(n)?(M=!0,v=n.some(E=>nr(E)||Zt(E)),f=()=>n.map(E=>{if(Ct(E))return E.value;if(nr(E))return c(E);if(ke(E))return l?l(E,2):E()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ai();try{h()}finally{li()}}const E=Mi;Mi=u;try{return l?l(n,3,[p]):n(p)}finally{Mi=E}}:f=Mn,e&&r){const E=f,I=r===!0?1/0:r;f=()=>Qn(E(),I)}const m=pd(),d=()=>{u.stop(),m&&m.active&&gl(m.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),d()}}let R=M?new Array(n.length).fill(hs):hs;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||v||(M?I.some((P,L)=>ti(P,R[L])):ti(I,R))){h&&h();const P=Mi;Mi=u;try{const L=[I,R===hs?void 0:M&&R[0]===hs?[]:R,p];l?l(e,3,L):e(...L),R=I}finally{Mi=P}}}else u.run()};return a&&a(T),u=new ef(f),u.scheduler=o?()=>o(T,!1):T,p=E=>Bd(E,!1,u),h=u.onStop=()=>{const E=Xs.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Xs.delete(u)}},e?i?T(!0):R=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Qn(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))Qn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(ed(n)||Nr(n))n.forEach(i=>{Qn(i,e,t)});else if(id(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(n,e,t,i){try{return i?n(...i):n()}catch(r){lo(r,e,t)}}function yn(n,e,t,i){if(ke(n)){const r=es(n,e,t,i);return r&&Ku(r)&&r.catch(s=>{lo(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}}function lo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ai(),es(s,null,10,[n,l,c]),li();return}}Hd(n,t,r,i,o)}function Hd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let pn=-1;const rr=[];let Kn=null,Zi=0;const Mf=Promise.resolve();let qs=null;function Sf(n){const e=qs||Mf;return n?e.then(this?n.bind(this):n):e}function Vd(n){let e=pn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=qr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Al(n){if(!(n.flags&1)){const e=qr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=qr(t)?Ut.push(n):Ut.splice(Vd(e),0,n),n.flags|=1,Ef()}}function Ef(){qs||(qs=Mf.then(Tf))}function Gd(n){He(n)?rr.push(...n):Kn&&n.id===-1?Kn.splice(Zi+1,0,n):n.flags&1||(rr.push(n),n.flags|=1),Ef()}function sc(n,e,t=pn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yf(n){if(rr.length){const e=[...new Set(rr)].sort((t,i)=>qr(t)-qr(i));if(rr.length=0,Kn){Kn.push(...e);return}for(Kn=e,Zi=0;Zi<Kn.length;Zi++){const t=Kn[Zi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Kn=null,Zi=0}}const qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Tf(n){try{for(pn=0;pn<Ut.length;pn++){const e=Ut[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),es(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Ut.length;pn++){const e=Ut[pn];e&&(e.flags&=-2)}pn=-1,Ut.length=0,yf(),qs=null,(Ut.length||rr.length)&&Tf()}}let an=null,bf=null;function Ys(n){const e=an;return an=n,bf=n&&n.type.__scopeId||null,e}function kd(n,e=an,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&mc(-1);const s=Ys(e);let o;try{o=n(...r)}finally{Ys(s),i._d&&mc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ai(),yn(l,t,8,[n.el,a,n,e]),li())}}const Wd=Symbol("_vte"),Xd=n=>n.__isTeleport;function wl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ui(n,e){return ke(n)?Pt({name:n.name},e,{setup:n}):n}function Af(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $s(n,e,t,i,r=!1){if(He(n)){n.forEach((v,M)=>$s(v,e&&(He(e)?e[M]:e),t,i,r));return}if(zr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$s(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Dl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState,h=tt(f),p=f===lt?()=>!1:v=>nt(h,v);if(c!=null&&c!==l&&(gt(c)?(u[c]=null,p(c)&&(f[c]=null)):Ct(c)&&(c.value=null)),ke(l))es(l,a,12,[o,u]);else{const v=gt(l),M=Ct(l);if(v||M){const m=()=>{if(n.f){const d=v?p(l)?f[l]:u[l]:l.value;r?He(d)&&gl(d,s):He(d)?d.includes(s)||d.push(s):v?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,p(l)&&(f[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,kt(m,t)):m()}}}ro().requestIdleCallback;ro().cancelIdleCallback;const zr=n=>!!n.type.__asyncLoader,wf=n=>n.type.__isKeepAlive;function qd(n,e){Rf(n,"a",e)}function Yd(n,e){Rf(n,"da",e)}function Rf(n,e,t=wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(co(e,i,t),t){let r=t.parent;for(;r&&r.parent;)wf(r.parent.vnode)&&$d(i,e,t,r),r=r.parent}}function $d(n,e,t,i){const r=co(e,n,i,!0);Pf(()=>{gl(i[e],r)},t)}function co(n,e,t=wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ai();const a=ts(t),l=yn(e,t,n,o);return a(),li(),l});return i?r.unshift(s):r.push(s),s}}const Gn=n=>(e,t=wt)=>{(!jr||n==="sp")&&co(n,(...i)=>e(...i),t)},jd=Gn("bm"),Rl=Gn("m"),Kd=Gn("bu"),Zd=Gn("u"),Cf=Gn("bum"),Pf=Gn("um"),Jd=Gn("sp"),Qd=Gn("rtg"),ep=Gn("rtc");function tp(n,e=wt){co("ec",n,e)}const np="components";function Yr(n,e){return rp(np,n,!0,e)||n}const ip=Symbol.for("v-ndc");function rp(n,e,t=!0,i=!1){const r=an||wt;if(r){const s=r.type;{const a=Xp(s,!1);if(a&&(a===e||a===Jt(e)||a===io(Jt(e))))return s}const o=oc(r[n]||s[n],e)||oc(r.appContext[n],e);return!o&&i?s:o}}function oc(n,e){return n&&(n[e]||n[Jt(e)]||n[io(Jt(e))])}function sp(n,e,t,i){let r;const s=t,o=He(n);if(o||gt(n)){const a=o&&nr(n);let l=!1;a&&(l=!Zt(n),n=oo(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?At(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ga=n=>n?Zf(n)?Dl(n):ga(n.parent):null,Hr=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ga(n.parent),$root:n=>ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Df(n),$forceUpdate:n=>n.f||(n.f=()=>{Al(n.update)}),$nextTick:n=>n.n||(n.n=Sf.bind(n.proxy)),$watch:n=>Ap.bind(n)}),To=(n,e)=>n!==lt&&!n.__isScriptSetup&&nt(n,e),op={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(To(i,e))return o[e]=1,i[e];if(r!==lt&&nt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==lt&&nt(t,e))return o[e]=4,t[e];_a&&(o[e]=0)}}const u=Hr[e];let f,h;if(u)return e==="$attrs"&&bt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==lt&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return To(r,e)?(r[e]=t,!0):i!==lt&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==lt&&nt(n,o)||To(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(Hr,o)||nt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ac(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _a=!0;function ap(n){const e=Df(n),t=n.proxy,i=n.ctx;_a=!1,e.beforeCreate&&lc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:M,deactivated:m,beforeDestroy:d,beforeUnmount:R,destroyed:T,unmounted:E,render:I,renderTracked:P,renderTriggered:L,errorCaptured:B,serverPrefetch:b,expose:y,inheritAttrs:D,components:ee,directives:q,filters:ne}=e;if(c&&lp(c,i,null),o)for(const re in o){const H=o[re];ke(H)&&(i[re]=H.bind(t))}if(r){const re=r.call(t,t);dt(re)&&(n.data=ao(re))}if(_a=!0,s)for(const re in s){const H=s[re],me=ke(H)?H.bind(t,t):ke(H.get)?H.get.bind(t,t):Mn,Me=!ke(H)&&ke(H.set)?H.set.bind(t):Mn,we=sn({get:me,set:Me});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>we.value,set:Pe=>we.value=Pe})}if(a)for(const re in a)Lf(a[re],i,t,re);if(l){const re=ke(l)?l.call(t):l;Reflect.ownKeys(re).forEach(H=>{Ns(H,re[H])})}u&&lc(u,n,"c");function K(re,H){He(H)?H.forEach(me=>re(me.bind(t))):H&&re(H.bind(t))}if(K(jd,f),K(Rl,h),K(Kd,p),K(Zd,v),K(qd,M),K(Yd,m),K(tp,B),K(ep,P),K(Qd,L),K(Cf,R),K(Pf,E),K(Jd,b),He(y))if(y.length){const re=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(re,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});I&&n.render===Mn&&(n.render=I),D!=null&&(n.inheritAttrs=D),ee&&(n.components=ee),q&&(n.directives=q),b&&Af(n)}function lp(n,e,t=Mn){He(n)&&(n=va(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=zn(r.from||i,r.default,!0):s=zn(r.from||i):s=zn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function lc(n,e,t){yn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lf(n,e,t,i){let r=i.includes(".")?qf(t,i):()=>t[i];if(gt(n)){const s=e[n];ke(s)&&Fs(r,s)}else if(ke(n))Fs(r,n.bind(t));else if(dt(n))if(He(n))n.forEach(s=>Lf(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&Fs(r,s,n)}}function Df(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>js(l,c,o,!0)),js(l,e,o)),dt(e)&&s.set(e,l),l}function js(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&js(n,s,t,!0),r&&r.forEach(o=>js(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cp={data:cc,props:uc,emits:uc,methods:Ir,computed:Ir,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ir,directives:Ir,watch:fp,provide:cc,inject:up};function cc(n,e){return e?n?function(){return Pt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function up(n,e){return Ir(va(n),va(e))}function va(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ir(n,e){return n?Pt(Object.create(null),n,e):e}function uc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Pt(Object.create(null),ac(n),ac(e??{})):e}function fp(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function If(){return{app:null,config:{isNativeTag:Jh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function dp(n,e){return function(i,r=null){ke(i)||(i=Pt({},i)),r!=null&&!dt(r)&&(r=null);const s=If(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Rt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Dl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=sr;sr=c;try{return u()}finally{sr=f}}};return c}}let sr=null;function Ns(n,e){if(wt){let t=wt.provides;const i=wt.parent&&wt.parent.provides;i===t&&(t=wt.provides=Object.create(i)),t[n]=e}}function zn(n,e,t=!1){const i=wt||an;if(i||sr){const r=sr?sr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Uf={},Nf=()=>Object.create(Uf),Ff=n=>Object.getPrototypeOf(n)===Uf;function pp(n,e,t,i=!1){const r={},s=Nf();n.propsDefaults=Object.create(null),Of(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:mf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(uo(n.emitsOptions,h))continue;const p=e[h];if(l)if(nt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Jt(h);r[v]=xa(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Of(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Ii(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=xa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Nn(n.attrs,"set","")}function Of(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fr(l))continue;const c=e[l];let u;r&&nt(r,u=Jt(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=xa(r,l,f,c[f],n,!nt(c,f))}}return o}function xa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ts(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const gp=new WeakMap;function Bf(n,e,t=!1){const i=t?gp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,p]=Bf(f,e,!0);Pt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dt(n)&&i.set(n,tr),tr;if(He(s))for(let u=0;u<s.length;u++){const f=Jt(s[u]);fc(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=Jt(u);if(fc(f)){const h=s[u],p=o[f]=He(h)||ke(h)?{type:h}:Pt({},h),v=p.type;let M=!1,m=!0;if(He(v))for(let d=0;d<v.length;++d){const R=v[d],T=ke(R)&&R.name;if(T==="Boolean"){M=!0;break}else T==="String"&&(m=!1)}else M=ke(v)&&v.name==="Boolean";p[0]=M,p[1]=m,(M||nt(p,"default"))&&a.push(f)}}const c=[o,a];return dt(n)&&i.set(n,c),c}function fc(n){return n[0]!=="$"&&!Fr(n)}const zf=n=>n[0]==="_"||n==="$stable",Cl=n=>He(n)?n.map(gn):[gn(n)],_p=(n,e,t)=>{if(e._n)return e;const i=kd((...r)=>Cl(e(...r)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zf(r))continue;const s=n[r];if(ke(s))e[r]=_p(r,s,i);else if(s!=null){const o=Cl(s);e[r]=()=>o}}},Vf=(n,e)=>{const t=Cl(e);n.slots.default=()=>t},Gf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},vp=(n,e,t)=>{const i=n.slots=Nf();if(n.vnode.shapeFlag&32){const r=e._;r?(Gf(i,e,t),t&&Zu(i,"_",r,!0)):Hf(e,i)}else e&&Vf(n,e)},xp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Gf(r,e,t):(s=!e.$stable,Hf(e,r)),o=e}else e&&(Vf(n,e),o={default:1});if(s)for(const a in r)!zf(a)&&o[a]==null&&delete r[a]},kt=Ip;function Mp(n){return Sp(n)}function Sp(n,e){const t=ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Mn,insertStaticContent:v}=n,M=(A,w,_,Q=null,$=null,W=null,Z=void 0,le=null,j=!!w.dynamicChildren)=>{if(A===w)return;A&&!br(A,w)&&(Q=U(A),Pe(A,$,W,!0),A=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:x,ref:g,shapeFlag:C}=w;switch(x){case fo:m(A,w,_,Q);break;case Pi:d(A,w,_,Q);break;case Ao:A==null&&R(w,_,Q,Z);break;case mn:ee(A,w,_,Q,$,W,Z,le,j);break;default:C&1?I(A,w,_,Q,$,W,Z,le,j):C&6?q(A,w,_,Q,$,W,Z,le,j):(C&64||C&128)&&x.process(A,w,_,Q,$,W,Z,le,j,ae)}g!=null&&$&&$s(g,A&&A.ref,W,w||A,!w)},m=(A,w,_,Q)=>{if(A==null)i(w.el=a(w.children),_,Q);else{const $=w.el=A.el;w.children!==A.children&&c($,w.children)}},d=(A,w,_,Q)=>{A==null?i(w.el=l(w.children||""),_,Q):w.el=A.el},R=(A,w,_,Q)=>{[A.el,A.anchor]=v(A.children,w,_,Q,A.el,A.anchor)},T=({el:A,anchor:w},_,Q)=>{let $;for(;A&&A!==w;)$=h(A),i(A,_,Q),A=$;i(w,_,Q)},E=({el:A,anchor:w})=>{let _;for(;A&&A!==w;)_=h(A),r(A),A=_;r(w)},I=(A,w,_,Q,$,W,Z,le,j)=>{w.type==="svg"?Z="svg":w.type==="math"&&(Z="mathml"),A==null?P(w,_,Q,$,W,Z,le,j):b(A,w,$,W,Z,le,j)},P=(A,w,_,Q,$,W,Z,le)=>{let j,x;const{props:g,shapeFlag:C,transition:z,dirs:X}=A;if(j=A.el=o(A.type,W,g&&g.is,g),C&8?u(j,A.children):C&16&&B(A.children,j,null,Q,$,bo(A,W),Z,le),X&&hi(A,null,Q,"created"),L(j,A,A.scopeId,Z,Q),g){for(const pe in g)pe!=="value"&&!Fr(pe)&&s(j,pe,null,g[pe],W,Q);"value"in g&&s(j,"value",null,g.value,W),(x=g.onVnodeBeforeMount)&&dn(x,Q,A)}X&&hi(A,null,Q,"beforeMount");const G=Ep($,z);G&&z.beforeEnter(j),i(j,w,_),((x=g&&g.onVnodeMounted)||G||X)&&kt(()=>{x&&dn(x,Q,A),G&&z.enter(j),X&&hi(A,null,Q,"mounted")},$)},L=(A,w,_,Q,$)=>{if(_&&p(A,_),Q)for(let W=0;W<Q.length;W++)p(A,Q[W]);if($){let W=$.subTree;if(w===W||$f(W.type)&&(W.ssContent===w||W.ssFallback===w)){const Z=$.vnode;L(A,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},B=(A,w,_,Q,$,W,Z,le,j=0)=>{for(let x=j;x<A.length;x++){const g=A[x]=le?Zn(A[x]):gn(A[x]);M(null,g,w,_,Q,$,W,Z,le)}},b=(A,w,_,Q,$,W,Z)=>{const le=w.el=A.el;let{patchFlag:j,dynamicChildren:x,dirs:g}=w;j|=A.patchFlag&16;const C=A.props||lt,z=w.props||lt;let X;if(_&&di(_,!1),(X=z.onVnodeBeforeUpdate)&&dn(X,_,w,A),g&&hi(w,A,_,"beforeUpdate"),_&&di(_,!0),(C.innerHTML&&z.innerHTML==null||C.textContent&&z.textContent==null)&&u(le,""),x?y(A.dynamicChildren,x,le,_,Q,bo(w,$),W):Z||H(A,w,le,null,_,Q,bo(w,$),W,!1),j>0){if(j&16)D(le,C,z,_,$);else if(j&2&&C.class!==z.class&&s(le,"class",null,z.class,$),j&4&&s(le,"style",C.style,z.style,$),j&8){const G=w.dynamicProps;for(let pe=0;pe<G.length;pe++){const ce=G[pe],ge=C[ce],Ue=z[ce];(Ue!==ge||ce==="value")&&s(le,ce,ge,Ue,$,_)}}j&1&&A.children!==w.children&&u(le,w.children)}else!Z&&x==null&&D(le,C,z,_,$);((X=z.onVnodeUpdated)||g)&&kt(()=>{X&&dn(X,_,w,A),g&&hi(w,A,_,"updated")},Q)},y=(A,w,_,Q,$,W,Z)=>{for(let le=0;le<w.length;le++){const j=A[le],x=w[le],g=j.el&&(j.type===mn||!br(j,x)||j.shapeFlag&70)?f(j.el):_;M(j,x,g,null,Q,$,W,Z,!0)}},D=(A,w,_,Q,$)=>{if(w!==_){if(w!==lt)for(const W in w)!Fr(W)&&!(W in _)&&s(A,W,w[W],null,$,Q);for(const W in _){if(Fr(W))continue;const Z=_[W],le=w[W];Z!==le&&W!=="value"&&s(A,W,le,Z,$,Q)}"value"in _&&s(A,"value",w.value,_.value,$)}},ee=(A,w,_,Q,$,W,Z,le,j)=>{const x=w.el=A?A.el:a(""),g=w.anchor=A?A.anchor:a("");let{patchFlag:C,dynamicChildren:z,slotScopeIds:X}=w;X&&(le=le?le.concat(X):X),A==null?(i(x,_,Q),i(g,_,Q),B(w.children||[],_,g,$,W,Z,le,j)):C>0&&C&64&&z&&A.dynamicChildren?(y(A.dynamicChildren,z,_,$,W,Z,le),(w.key!=null||$&&w===$.subTree)&&kf(A,w,!0)):H(A,w,_,g,$,W,Z,le,j)},q=(A,w,_,Q,$,W,Z,le,j)=>{w.slotScopeIds=le,A==null?w.shapeFlag&512?$.ctx.activate(w,_,Q,Z,j):ne(w,_,Q,$,W,Z,j):ue(A,w,j)},ne=(A,w,_,Q,$,W,Z)=>{const le=A.component=Hp(A,Q,$);if(wf(A)&&(le.ctx.renderer=ae),Vp(le,!1,Z),le.asyncDep){if($&&$.registerDep(le,K,Z),!A.el){const j=le.subTree=Rt(Pi);d(null,j,w,_)}}else K(le,A,w,_,$,W,Z)},ue=(A,w,_)=>{const Q=w.component=A.component;if(Lp(A,w,_))if(Q.asyncDep&&!Q.asyncResolved){re(Q,w,_);return}else Q.next=w,Q.update();else w.el=A.el,Q.vnode=w},K=(A,w,_,Q,$,W,Z)=>{const le=()=>{if(A.isMounted){let{next:C,bu:z,u:X,parent:G,vnode:pe}=A;{const xe=Wf(A);if(xe){C&&(C.el=pe.el,re(A,C,Z)),xe.asyncDep.then(()=>{A.isUnmounted||le()});return}}let ce=C,ge;di(A,!1),C?(C.el=pe.el,re(A,C,Z)):C=pe,z&&Mo(z),(ge=C.props&&C.props.onVnodeBeforeUpdate)&&dn(ge,G,C,pe),di(A,!0);const Ue=dc(A),fe=A.subTree;A.subTree=Ue,M(fe,Ue,f(fe.el),U(fe),A,$,W),C.el=Ue.el,ce===null&&Dp(A,Ue.el),X&&kt(X,$),(ge=C.props&&C.props.onVnodeUpdated)&&kt(()=>dn(ge,G,C,pe),$)}else{let C;const{el:z,props:X}=w,{bm:G,m:pe,parent:ce,root:ge,type:Ue}=A,fe=zr(w);di(A,!1),G&&Mo(G),!fe&&(C=X&&X.onVnodeBeforeMount)&&dn(C,ce,w),di(A,!0);{ge.ce&&ge.ce._injectChildStyle(Ue);const xe=A.subTree=dc(A);M(null,xe,_,Q,A,$,W),w.el=xe.el}if(pe&&kt(pe,$),!fe&&(C=X&&X.onVnodeMounted)){const xe=w;kt(()=>dn(C,ce,xe),$)}(w.shapeFlag&256||ce&&zr(ce.vnode)&&ce.vnode.shapeFlag&256)&&A.a&&kt(A.a,$),A.isMounted=!0,w=_=Q=null}};A.scope.on();const j=A.effect=new ef(le);A.scope.off();const x=A.update=j.run.bind(j),g=A.job=j.runIfDirty.bind(j);g.i=A,g.id=A.uid,j.scheduler=()=>Al(g),di(A,!0),x()},re=(A,w,_)=>{w.component=A;const Q=A.vnode.props;A.vnode=w,A.next=null,mp(A,w.props,Q,_),xp(A,w.children,_),ai(),sc(A),li()},H=(A,w,_,Q,$,W,Z,le,j=!1)=>{const x=A&&A.children,g=A?A.shapeFlag:0,C=w.children,{patchFlag:z,shapeFlag:X}=w;if(z>0){if(z&128){Me(x,C,_,Q,$,W,Z,le,j);return}else if(z&256){me(x,C,_,Q,$,W,Z,le,j);return}}X&8?(g&16&&Se(x,$,W),C!==x&&u(_,C)):g&16?X&16?Me(x,C,_,Q,$,W,Z,le,j):Se(x,$,W,!0):(g&8&&u(_,""),X&16&&B(C,_,Q,$,W,Z,le,j))},me=(A,w,_,Q,$,W,Z,le,j)=>{A=A||tr,w=w||tr;const x=A.length,g=w.length,C=Math.min(x,g);let z;for(z=0;z<C;z++){const X=w[z]=j?Zn(w[z]):gn(w[z]);M(A[z],X,_,null,$,W,Z,le,j)}x>g?Se(A,$,W,!0,!1,C):B(w,_,Q,$,W,Z,le,j,C)},Me=(A,w,_,Q,$,W,Z,le,j)=>{let x=0;const g=w.length;let C=A.length-1,z=g-1;for(;x<=C&&x<=z;){const X=A[x],G=w[x]=j?Zn(w[x]):gn(w[x]);if(br(X,G))M(X,G,_,null,$,W,Z,le,j);else break;x++}for(;x<=C&&x<=z;){const X=A[C],G=w[z]=j?Zn(w[z]):gn(w[z]);if(br(X,G))M(X,G,_,null,$,W,Z,le,j);else break;C--,z--}if(x>C){if(x<=z){const X=z+1,G=X<g?w[X].el:Q;for(;x<=z;)M(null,w[x]=j?Zn(w[x]):gn(w[x]),_,G,$,W,Z,le,j),x++}}else if(x>z)for(;x<=C;)Pe(A[x],$,W,!0),x++;else{const X=x,G=x,pe=new Map;for(x=G;x<=z;x++){const _e=w[x]=j?Zn(w[x]):gn(w[x]);_e.key!=null&&pe.set(_e.key,x)}let ce,ge=0;const Ue=z-G+1;let fe=!1,xe=0;const Ce=new Array(Ue);for(x=0;x<Ue;x++)Ce[x]=0;for(x=X;x<=C;x++){const _e=A[x];if(ge>=Ue){Pe(_e,$,W,!0);continue}let Fe;if(_e.key!=null)Fe=pe.get(_e.key);else for(ce=G;ce<=z;ce++)if(Ce[ce-G]===0&&br(_e,w[ce])){Fe=ce;break}Fe===void 0?Pe(_e,$,W,!0):(Ce[Fe-G]=x+1,Fe>=xe?xe=Fe:fe=!0,M(_e,w[Fe],_,null,$,W,Z,le,j),ge++)}const Ne=fe?yp(Ce):tr;for(ce=Ne.length-1,x=Ue-1;x>=0;x--){const _e=G+x,Fe=w[_e],ze=_e+1<g?w[_e+1].el:Q;Ce[x]===0?M(null,Fe,_,ze,$,W,Z,le,j):fe&&(ce<0||x!==Ne[ce]?we(Fe,_,ze,2):ce--)}}},we=(A,w,_,Q,$=null)=>{const{el:W,type:Z,transition:le,children:j,shapeFlag:x}=A;if(x&6){we(A.component.subTree,w,_,Q);return}if(x&128){A.suspense.move(w,_,Q);return}if(x&64){Z.move(A,w,_,ae);return}if(Z===mn){i(W,w,_);for(let C=0;C<j.length;C++)we(j[C],w,_,Q);i(A.anchor,w,_);return}if(Z===Ao){T(A,w,_);return}if(Q!==2&&x&1&&le)if(Q===0)le.beforeEnter(W),i(W,w,_),kt(()=>le.enter(W),$);else{const{leave:C,delayLeave:z,afterLeave:X}=le,G=()=>i(W,w,_),pe=()=>{C(W,()=>{G(),X&&X()})};z?z(W,G,pe):pe()}else i(W,w,_)},Pe=(A,w,_,Q=!1,$=!1)=>{const{type:W,props:Z,ref:le,children:j,dynamicChildren:x,shapeFlag:g,patchFlag:C,dirs:z,cacheIndex:X}=A;if(C===-2&&($=!1),le!=null&&$s(le,null,_,A,!0),X!=null&&(w.renderCache[X]=void 0),g&256){w.ctx.deactivate(A);return}const G=g&1&&z,pe=!zr(A);let ce;if(pe&&(ce=Z&&Z.onVnodeBeforeUnmount)&&dn(ce,w,A),g&6)de(A.component,_,Q);else{if(g&128){A.suspense.unmount(_,Q);return}G&&hi(A,null,w,"beforeUnmount"),g&64?A.type.remove(A,w,_,ae,Q):x&&!x.hasOnce&&(W!==mn||C>0&&C&64)?Se(x,w,_,!1,!0):(W===mn&&C&384||!$&&g&16)&&Se(j,w,_),Q&&qe(A)}(pe&&(ce=Z&&Z.onVnodeUnmounted)||G)&&kt(()=>{ce&&dn(ce,w,A),G&&hi(A,null,w,"unmounted")},_)},qe=A=>{const{type:w,el:_,anchor:Q,transition:$}=A;if(w===mn){te(_,Q);return}if(w===Ao){E(A);return}const W=()=>{r(_),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:le}=$,j=()=>Z(_,W);le?le(A.el,W,j):j()}else W()},te=(A,w)=>{let _;for(;A!==w;)_=h(A),r(A),A=_;r(w)},de=(A,w,_)=>{const{bum:Q,scope:$,job:W,subTree:Z,um:le,m:j,a:x}=A;hc(j),hc(x),Q&&Mo(Q),$.stop(),W&&(W.flags|=8,Pe(Z,A,w,_)),le&&kt(le,w),kt(()=>{A.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Se=(A,w,_,Q=!1,$=!1,W=0)=>{for(let Z=W;Z<A.length;Z++)Pe(A[Z],w,_,Q,$)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const w=h(A.anchor||A.el),_=w&&w[Wd];return _?h(_):w};let ie=!1;const oe=(A,w,_)=>{A==null?w._vnode&&Pe(w._vnode,null,null,!0):M(w._vnode||null,A,w,null,null,null,_),w._vnode=A,ie||(ie=!0,sc(),yf(),ie=!1)},ae={p:M,um:Pe,m:we,r:qe,mt:ne,mc:B,pc:H,pbc:y,n:U,o:n};return{render:oe,hydrate:void 0,createApp:dp(oe)}}function bo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ep(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kf(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&kf(o,a)),a.type===fo&&(a.el=o.el)}}function yp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function hc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Tp=Symbol.for("v-scx"),bp=()=>zn(Tp);function Fs(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Pt({},t),l=e&&i||!e&&s!=="post";let c;if(jr){if(s==="sync"){const p=bp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=wt;a.call=(p,v,M)=>yn(p,u,v,M);let f=!1;s==="post"?a.scheduler=p=>{kt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():Al(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=zd(n,e,a);return jr&&(c?c.push(h):l&&h()),h}function Ap(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=ts(this),a=Xf(r,s.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const wp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jt(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function Rp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&wp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>gt(u)?u.trim():u)),o.number&&(r=t.map(od)));let a,l=i[a=xo(e)]||i[a=xo(Jt(e))];!l&&s&&(l=i[a=xo(Ii(e))]),l&&yn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yn(c,n,6,r)}}function Yf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=Yf(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(dt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):Pt(o,s),dt(n)&&i.set(n,o),o)}function uo(n,e){return!n||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Ii(e))||nt(n,e))}function dc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:M}=n,m=Ys(n);let d,R;try{if(t.shapeFlag&4){const E=r||i,I=E;d=gn(c.call(I,E,u,f,p,h,v)),R=a}else{const E=e;d=gn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),R=e.props?a:Cp(a)}}catch(E){Vr.length=0,lo(E,n,1),d=Rt(Pi)}let T=d;if(R&&M!==!1){const E=Object.keys(R),{shapeFlag:I}=T;E.length&&I&7&&(s&&E.some(ml)&&(R=Pp(R,s)),T=cr(T,R,!1,!0))}return t.dirs&&(T=cr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&wl(T,t.transition),d=T,Ys(m),d}const Cp=n=>{let e;for(const t in n)(t==="class"||t==="style"||eo(t))&&((e||(e={}))[t]=n[t]);return e},Pp=(n,e)=>{const t={};for(const i in n)(!ml(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Lp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!uo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pc(i,o,c):!0:!!o;return!1}function pc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!uo(t,s))return!0}return!1}function Dp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $f=n=>n.__isSuspense;function Ip(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Gd(n)}const mn=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),Vr=[];let qt=null;function ln(n=!1){Vr.push(qt=n?null:[])}function Up(){Vr.pop(),qt=Vr[Vr.length-1]||null}let $r=1;function mc(n,e=!1){$r+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function jf(n){return n.dynamicChildren=$r>0?qt||tr:null,Up(),$r>0&&qt&&qt.push(n),n}function ni(n,e,t,i,r,s){return jf(Mt(n,e,t,i,r,s,!0))}function Pl(n,e,t,i,r){return jf(Rt(n,e,t,i,r,!0))}function Ks(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,Os=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Ct(n)||ke(n)?{i:an,r:n,k:e,f:!!t}:n:null);function Mt(n,e=null,t=null,i=0,r=null,s=n===mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&Os(e),scopeId:bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(Ll(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),$r>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const Rt=Np;function Np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ip)&&(n=Pi),Ks(n)){const a=cr(n,e,!0);return t&&Ll(a,t),$r>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(n)]=a:qt.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=so(a)),dt(l)&&(bl(l)&&!He(l)&&(l=Pt({},l)),e.style=vl(l))}const o=gt(n)?1:$f(n)?128:Xd(n)?64:dt(n)?4:ke(n)?2:0;return Mt(n,e,t,i,r,o,s,!0)}function Fp(n){return n?bl(n)||Ff(n)?Pt({},n):n:null}function cr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Op(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kf(c),ref:e&&e.ref?t&&s?He(s)?s.concat(Os(e)):[s,Os(e)]:Os(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wl(u,l.clone(u)),u}function Ma(n=" ",e=0){return Rt(fo,null,n,e)}function wo(n="",e=!1){return e?(ln(),Pl(Pi,null,n)):Rt(Pi,null,n)}function gn(n){return n==null||typeof n=="boolean"?Rt(Pi):He(n)?Rt(mn,null,n.slice()):Ks(n)?Zn(n):Rt(fo,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function Ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ll(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ff(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:an},t=32):(e=String(e),i&64?(t=16,e=[Ma(e)]):t=8);n.children=e,n.shapeFlag|=t}function Op(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=so([e.class,i.class]));else if(r==="style")e.style=vl([e.style,i.style]);else if(eo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){yn(n,e,7,[t,i])}const Bp=If();let zp=0;function Hp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bp,s={uid:zp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bf(i,r),emitsOptions:Yf(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Rp.bind(null,s),n.ce&&n.ce(s),s}let wt=null,Zs,Sa;{const n=ro(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Zs=e("__VUE_INSTANCE_SETTERS__",t=>wt=t),Sa=e("__VUE_SSR_SETTERS__",t=>jr=t)}const ts=n=>{const e=wt;return Zs(n),n.scope.on(),()=>{n.scope.off(),Zs(e)}},gc=()=>{wt&&wt.scope.off(),Zs(null)};function Zf(n){return n.vnode.shapeFlag&4}let jr=!1;function Vp(n,e=!1,t=!1){e&&Sa(e);const{props:i,children:r}=n.vnode,s=Zf(n);pp(n,i,s,e),vp(n,r,t);const o=s?Gp(n,e):void 0;return e&&Sa(!1),o}function Gp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,op);const{setup:i}=t;if(i){ai();const r=n.setupContext=i.length>1?Wp(n):null,s=ts(n),o=es(i,n,0,[n.props,r]),a=Ku(o);if(li(),s(),(a||n.sp)&&!zr(n)&&Af(n),a){if(o.then(gc,gc),e)return o.then(l=>{_c(n,l)}).catch(l=>{lo(l,n,0)});n.asyncDep=o}else _c(n,o)}else Jf(n)}function _c(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=xf(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||Mn);{const r=ts(n);ai();try{ap(n)}finally{li(),r()}}}const kp={get(n,e){return bt(n,"get",""),n[e]}};function Wp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,kp),slots:n.slots,emit:n.emit,expose:e}}function Dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(_f(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hr)return Hr[t](n)},has(e,t){return t in e||t in Hr}})):n.proxy}function Xp(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function qp(n){return ke(n)&&"__vccOpts"in n}const sn=(n,e)=>Od(n,e,jr);function Qf(n,e,t){const i=arguments.length;return i===2?dt(e)&&!He(e)?Ks(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ks(t)&&(t=[t]),Rt(n,e,t))}const Yp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ea;const vc=typeof window<"u"&&window.trustedTypes;if(vc)try{Ea=vc.createPolicy("vue",{createHTML:n=>n})}catch{}const eh=Ea?n=>Ea.createHTML(n):n=>n,$p="http://www.w3.org/2000/svg",jp="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,xc=Un&&Un.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS($p,n):e==="mathml"?Un.createElementNS(jp,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xc.innerHTML=eh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zp=Symbol("_vtc");function Jp(n,e,t){const i=n[Zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Mc=Symbol("_vod"),Qp=Symbol("_vsh"),em=Symbol(""),tm=/(^|;)\s*display\s*:/;function nm(n,e,t){const i=n.style,r=gt(t);let s=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Bs(i,a,"")}else for(const o in e)t[o]==null&&Bs(i,o,"");for(const o in t)o==="display"&&(s=!0),Bs(i,o,t[o])}else if(r){if(e!==t){const o=i[em];o&&(t+=";"+o),i.cssText=t,s=tm.test(t)}}else e&&n.removeAttribute("style");Mc in n&&(n[Mc]=s?i.display:"",n[Qp]&&(i.display="none"))}const Sc=/\s*!important$/;function Bs(n,e,t){if(He(t))t.forEach(i=>Bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=im(n,e);Sc.test(t)?n.setProperty(Ii(i),t.replace(Sc,""),"important"):n[i]=t}}const Ec=["Webkit","Moz","ms"],Ro={};function im(n,e){const t=Ro[e];if(t)return t;let i=Jt(e);if(i!=="filter"&&i in n)return Ro[e]=i;i=io(i);for(let r=0;r<Ec.length;r++){const s=Ec[r]+i;if(s in n)return Ro[e]=s}return e}const yc="http://www.w3.org/1999/xlink";function Tc(n,e,t,i,r,s=hd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(yc,e.slice(6,e.length)):n.setAttributeNS(yc,e,t):t==null||s&&!Ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":xr(t)?String(t):t)}function bc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?eh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ju(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function rm(n,e,t,i){n.addEventListener(e,t,i)}function sm(n,e,t,i){n.removeEventListener(e,t,i)}const Ac=Symbol("_vei");function om(n,e,t,i,r=null){const s=n[Ac]||(n[Ac]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=am(e);if(i){const c=s[e]=um(i,r);rm(n,a,c,l)}else o&&(sm(n,a,o,l),s[e]=void 0)}}const wc=/(?:Once|Passive|Capture)$/;function am(n){let e;if(wc.test(n)){e={};let i;for(;i=n.match(wc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let Co=0;const lm=Promise.resolve(),cm=()=>Co||(lm.then(()=>Co=0),Co=Date.now());function um(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;yn(fm(i,t.value),e,5,[i])};return t.value=n,t.attached=cm(),t}function fm(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Rc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jp(n,i,o):e==="style"?nm(n,t,i):eo(e)?ml(e)||om(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(n,e,i,o))?(bc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gt(i))?bc(n,Jt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Tc(n,e,i,o))};function dm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rc(e)&&gt(t)?!1:e in n}const pm=["ctrl","shift","alt","meta"],mm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pm.some(t=>n[`${t}Key`]&&!e.includes(t))},gm=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=mm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},_m=Pt({patchProp:hm},Kp);let Cc;function vm(){return Cc||(Cc=Mp(_m))}const xm=(...n)=>{const e=vm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Sm(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Mm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sm(n){return gt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Em=Symbol();var Pc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Pc||(Pc={}));function ym(){const n=dd(!0),e=n.run(()=>bi({}));let t=[],i=[];const r=_f({install(s){r._a=s,s.provide(Em,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Mr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Tm={};function bm(n,e){const t=Yr("RouterView");return ln(),Pl(t)}const Am=Mr(Tm,[["render",bm]]),wm="modulepreload",Rm=function(n){return"/"+n},Lc={},Cm=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Rm(l),l in Lc)return;Lc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":wm,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof document<"u";function th(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Pm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&th(n.default)}const et=Object.assign;function Po(n,e){const t={};for(const i in e){const r=e[i];t[i]=hn(r)?r.map(n):n(r)}return t}const Gr=()=>{},hn=Array.isArray,nh=/#/g,Lm=/&/g,Dm=/\//g,Im=/=/g,Um=/\?/g,ih=/\+/g,Nm=/%5B/g,Fm=/%5D/g,rh=/%5E/g,Om=/%60/g,sh=/%7B/g,Bm=/%7C/g,oh=/%7D/g,zm=/%20/g;function Il(n){return encodeURI(""+n).replace(Bm,"|").replace(Nm,"[").replace(Fm,"]")}function Hm(n){return Il(n).replace(sh,"{").replace(oh,"}").replace(rh,"^")}function ya(n){return Il(n).replace(ih,"%2B").replace(zm,"+").replace(nh,"%23").replace(Lm,"%26").replace(Om,"`").replace(sh,"{").replace(oh,"}").replace(rh,"^")}function Vm(n){return ya(n).replace(Im,"%3D")}function Gm(n){return Il(n).replace(nh,"%23").replace(Um,"%3F")}function km(n){return n==null?"":Gm(n).replace(Dm,"%2F")}function Kr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Wm=/\/$/,Xm=n=>n.replace(Wm,"");function Lo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=jm(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Kr(o)}}function qm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Dc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ym(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ur(e.matched[i],t.matched[r])&&ah(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ah(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!$m(n[t],e[t]))return!1;return!0}function $m(n,e){return hn(n)?Ic(n,e):hn(e)?Ic(e,n):n===e}function Ic(n,e){return hn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function jm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zr;(function(n){n.pop="pop",n.push="push"})(Zr||(Zr={}));var kr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(kr||(kr={}));function Km(n){if(!n)if(Ji){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Xm(n)}const Zm=/^[^#]+#/;function Jm(n,e){return n.replace(Zm,"#")+e}function Qm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ho=()=>({left:window.scrollX,top:window.scrollY});function eg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Qm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uc(n,e){return(history.state?history.state.position-e:-1)+n}const Ta=new Map;function tg(n,e){Ta.set(n,e)}function ng(n){const e=Ta.get(n);return Ta.delete(n),e}let ig=()=>location.protocol+"//"+location.host;function lh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Dc(l,"")}return Dc(t,n)+i+r}function rg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=lh(n,location),v=t.value,M=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===v){o=null;return}m=M?h.position-M.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:Zr.pop,direction:m?m>0?kr.forward:kr.back:kr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:ho()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Nc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ho():null}}function sg(n){const{history:e,location:t}=window,i={value:lh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ig()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,Nc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:ho()});s(u.current,u,!0);const f=et({},Nc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function og(n){n=Km(n);const e=sg(n),t=rg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:n,go:i,createHref:Jm.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ag(n){return typeof n=="string"||n&&typeof n=="object"}function ch(n){return typeof n=="string"||typeof n=="symbol"}const uh=Symbol("");var Fc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fc||(Fc={}));function fr(n,e){return et(new Error,{type:n,[uh]:!0},e)}function wn(n,e){return n instanceof Error&&uh in n&&(e==null||!!(n.type&e))}const Oc="[^/]+?",lg={sensitive:!1,strict:!1,start:!0,end:!0},cg=/[.+*?^${}()[\]/\\]/g;function ug(n,e){const t=et({},lg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(cg,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:M,optional:m,regexp:d}=h;s.push({name:v,repeatable:M,optional:m});const R=d||Oc;if(R!==Oc){p+=10;try{new RegExp(`(${R})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${R}): `+E.message)}}let T=M?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,p+=20,m&&(p+=-8),M&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:M,optional:m}=p,d=v in c?c[v]:"";if(hn(d)&&!M)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const R=hn(d)?d.join("/"):d;if(!R)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function fg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=fg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Bc(i))return 1;if(Bc(r))return-1}return r.length-i.length}function Bc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const hg={type:0,value:""},dg=/[a-zA-Z0-9_]/;function pg(n){if(!n)return[[]];if(n==="/")return[[hg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:dg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function mg(n,e,t){const i=ug(pg(n.path),t),r=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gg(n,e){const t=[],i=new Map;e=Gc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const v=!p,M=Hc(f);M.aliasOf=p&&p.record;const m=Gc(e,f),d=[M];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of E)d.push(Hc(et({},M,{components:p?p.record.components:M.components,path:I,aliasOf:p?p.record:M})))}let R,T;for(const E of d){const{path:I}=E;if(h&&I[0]!=="/"){const P=h.record.path,L=P[P.length-1]==="/"?"":"/";E.path=h.record.path+(I&&L+I)}if(R=mg(E,h,m),p?p.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),v&&f.name&&!Vc(R)&&o(f.name)),hh(R)&&l(R),M.children){const P=M.children;for(let L=0;L<P.length;L++)s(P[L],R,p&&p.children[L])}p=p||R}return T?()=>{o(T)}:Gr}function o(f){if(ch(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=xg(f,t);t.splice(h,0,f),f.record.name&&!Vc(f)&&i.set(f.record.name,f)}function c(f,h){let p,v={},M,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw fr(1,{location:f});m=p.record.name,v=et(zc(h.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&zc(f.params,p.keys.map(T=>T.name))),M=p.stringify(v)}else if(f.path!=null)M=f.path,p=t.find(T=>T.re.test(M)),p&&(v=p.parse(M),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!p)throw fr(1,{location:f,currentLocation:h});m=p.record.name,v=et({},h.params,f.params),M=p.stringify(v)}const d=[];let R=p;for(;R;)d.unshift(R.record),R=R.parent;return{name:m,path:M,params:v,matched:d,meta:vg(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function zc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Hc(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:_g(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _g(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Vc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function vg(n){return n.reduce((e,t)=>et(e,t.meta),{})}function Gc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function xg(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;fh(n,e[s])<0?i=s:t=s+1}const r=Mg(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Mg(n){let e=n;for(;e=e.parent;)if(hh(e)&&fh(n,e)===0)return e}function hh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Sg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ih," "),o=s.indexOf("="),a=Kr(o<0?s:s.slice(0,o)),l=o<0?null:Kr(s.slice(o+1));if(a in e){let c=e[a];hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function kc(n){let e="";for(let t in n){const i=n[t];if(t=Vm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(hn(i)?i.map(s=>s&&ya(s)):[i&&ya(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Eg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=hn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const yg=Symbol(""),Wc=Symbol(""),Ul=Symbol(""),dh=Symbol(""),ba=Symbol("");function Ar(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Jn(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(fr(4,{from:t,to:e})):h instanceof Error?l(h):ag(h)?l(fr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Do(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(th(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Jn(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Pm(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Jn(p,t,i,o,a,r)()}))}}return s}function Xc(n){const e=zn(Ul),t=zn(dh),i=sn(()=>{const l=ir(n.to);return e.resolve(l)}),r=sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ur.bind(null,u));if(h>-1)return h;const p=qc(l[c-2]);return c>1&&qc(u)===p&&f[f.length-1].path!==p?f.findIndex(ur.bind(null,l[c-2])):h}),s=sn(()=>r.value>-1&&Rg(t.params,i.value.params)),o=sn(()=>r.value>-1&&r.value===t.matched.length-1&&ah(t.params,i.value.params));function a(l={}){if(wg(l)){const c=e[ir(n.replace)?"replace":"push"](ir(n.to)).catch(Gr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Tg(n){return n.length===1?n[0]:n}const bg=Ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xc,setup(n,{slots:e}){const t=ao(Xc(n)),{options:i}=zn(Ul),r=sn(()=>({[Yc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Yc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Tg(e.default(t));return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Ag=bg;function wg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Rg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!hn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Yc=(n,e,t)=>n??e??t,Cg=Ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=zn(ba),r=sn(()=>n.route||i.value),s=zn(Wc,0),o=sn(()=>{let c=ir(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=sn(()=>r.value.matched[o.value]);Ns(Wc,sn(()=>o.value+1)),Ns(yg,a),Ns(ba,r);const l=bi();return Fs(()=>[l.value,a.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ur(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return $c(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Qf(h,et({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return $c(t.default,{Component:m,route:c})||m}}});function $c(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Pg=Cg;function Lg(n){const e=gg(n.routes,n),t=n.parseQuery||Sg,i=n.stringifyQuery||kc,r=n.history,s=Ar(),o=Ar(),a=Ar(),l=Id(kn);let c=kn;Ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Po.bind(null,U=>""+U),f=Po.bind(null,km),h=Po.bind(null,Kr);function p(U,ie){let oe,ae;return ch(U)?(oe=e.getRecordMatcher(U),ae=ie):ae=U,e.addRoute(ae,oe)}function v(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function M(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function d(U,ie){if(ie=et({},ie||l.value),typeof U=="string"){const _=Lo(t,U,ie.path),Q=e.resolve({path:_.path},ie),$=r.createHref(_.fullPath);return et(_,Q,{params:h(Q.params),hash:Kr(_.hash),redirectedFrom:void 0,href:$})}let oe;if(U.path!=null)oe=et({},U,{path:Lo(t,U.path,ie.path).path});else{const _=et({},U.params);for(const Q in _)_[Q]==null&&delete _[Q];oe=et({},U,{params:f(_)}),ie.params=f(ie.params)}const ae=e.resolve(oe,ie),Ie=U.hash||"";ae.params=u(h(ae.params));const A=qm(i,et({},U,{hash:Hm(Ie),path:ae.path})),w=r.createHref(A);return et({fullPath:A,hash:Ie,query:i===kc?Eg(U.query):U.query||{}},ae,{redirectedFrom:void 0,href:w})}function R(U){return typeof U=="string"?Lo(t,U,l.value.path):et({},U)}function T(U,ie){if(c!==U)return fr(8,{from:ie,to:U})}function E(U){return L(U)}function I(U){return E(et(R(U),{replace:!0}))}function P(U){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:oe}=ie;let ae=typeof oe=="function"?oe(U):oe;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=R(ae):{path:ae},ae.params={}),et({query:U.query,hash:U.hash,params:ae.path!=null?{}:U.params},ae)}}function L(U,ie){const oe=c=d(U),ae=l.value,Ie=U.state,A=U.force,w=U.replace===!0,_=P(oe);if(_)return L(et(R(_),{state:typeof _=="object"?et({},Ie,_.state):Ie,force:A,replace:w}),ie||oe);const Q=oe;Q.redirectedFrom=ie;let $;return!A&&Ym(i,ae,oe)&&($=fr(16,{to:Q,from:ae}),we(ae,ae,!0,!1)),($?Promise.resolve($):y(Q,ae)).catch(W=>wn(W)?wn(W,2)?W:Me(W):H(W,Q,ae)).then(W=>{if(W){if(wn(W,2))return L(et({replace:w},R(W.to),{state:typeof W.to=="object"?et({},Ie,W.to.state):Ie,force:A}),ie||Q)}else W=ee(Q,ae,!0,w,Ie);return D(Q,ae,W),W})}function B(U,ie){const oe=T(U,ie);return oe?Promise.reject(oe):Promise.resolve()}function b(U){const ie=te.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function y(U,ie){let oe;const[ae,Ie,A]=Dg(U,ie);oe=Do(ae.reverse(),"beforeRouteLeave",U,ie);for(const _ of ae)_.leaveGuards.forEach(Q=>{oe.push(Jn(Q,U,ie))});const w=B.bind(null,U,ie);return oe.push(w),Se(oe).then(()=>{oe=[];for(const _ of s.list())oe.push(Jn(_,U,ie));return oe.push(w),Se(oe)}).then(()=>{oe=Do(Ie,"beforeRouteUpdate",U,ie);for(const _ of Ie)_.updateGuards.forEach(Q=>{oe.push(Jn(Q,U,ie))});return oe.push(w),Se(oe)}).then(()=>{oe=[];for(const _ of A)if(_.beforeEnter)if(hn(_.beforeEnter))for(const Q of _.beforeEnter)oe.push(Jn(Q,U,ie));else oe.push(Jn(_.beforeEnter,U,ie));return oe.push(w),Se(oe)}).then(()=>(U.matched.forEach(_=>_.enterCallbacks={}),oe=Do(A,"beforeRouteEnter",U,ie,b),oe.push(w),Se(oe))).then(()=>{oe=[];for(const _ of o.list())oe.push(Jn(_,U,ie));return oe.push(w),Se(oe)}).catch(_=>wn(_,8)?_:Promise.reject(_))}function D(U,ie,oe){a.list().forEach(ae=>b(()=>ae(U,ie,oe)))}function ee(U,ie,oe,ae,Ie){const A=T(U,ie);if(A)return A;const w=ie===kn,_=Ji?history.state:{};oe&&(ae||w?r.replace(U.fullPath,et({scroll:w&&_&&_.scroll},Ie)):r.push(U.fullPath,Ie)),l.value=U,we(U,ie,oe,w),Me()}let q;function ne(){q||(q=r.listen((U,ie,oe)=>{if(!de.listening)return;const ae=d(U),Ie=P(ae);if(Ie){L(et(Ie,{replace:!0,force:!0}),ae).catch(Gr);return}c=ae;const A=l.value;Ji&&tg(Uc(A.fullPath,oe.delta),ho()),y(ae,A).catch(w=>wn(w,12)?w:wn(w,2)?(L(et(R(w.to),{force:!0}),ae).then(_=>{wn(_,20)&&!oe.delta&&oe.type===Zr.pop&&r.go(-1,!1)}).catch(Gr),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),H(w,ae,A))).then(w=>{w=w||ee(ae,A,!1),w&&(oe.delta&&!wn(w,8)?r.go(-oe.delta,!1):oe.type===Zr.pop&&wn(w,20)&&r.go(-1,!1)),D(ae,A,w)}).catch(Gr)}))}let ue=Ar(),K=Ar(),re;function H(U,ie,oe){Me(U);const ae=K.list();return ae.length?ae.forEach(Ie=>Ie(U,ie,oe)):console.error(U),Promise.reject(U)}function me(){return re&&l.value!==kn?Promise.resolve():new Promise((U,ie)=>{ue.add([U,ie])})}function Me(U){return re||(re=!U,ne(),ue.list().forEach(([ie,oe])=>U?oe(U):ie()),ue.reset()),U}function we(U,ie,oe,ae){const{scrollBehavior:Ie}=n;if(!Ji||!Ie)return Promise.resolve();const A=!oe&&ng(Uc(U.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Sf().then(()=>Ie(U,ie,A)).then(w=>w&&eg(w)).catch(w=>H(w,U,ie))}const Pe=U=>r.go(U);let qe;const te=new Set,de={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:M,resolve:d,options:n,push:E,replace:I,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:me,install(U){const ie=this;U.component("RouterLink",Ag),U.component("RouterView",Pg),U.config.globalProperties.$router=ie,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ir(l)}),Ji&&!qe&&l.value===kn&&(qe=!0,E(r.location).catch(Ie=>{}));const oe={};for(const Ie in kn)Object.defineProperty(oe,Ie,{get:()=>l.value[Ie],enumerable:!0});U.provide(Ul,ie),U.provide(dh,mf(oe)),U.provide(ba,l);const ae=U.unmount;te.add(U),U.unmount=function(){te.delete(U),te.size<1&&(c=kn,q&&q(),q=null,l.value=kn,qe=!1,re=!1),ae()}}};function Se(U){return U.reduce((ie,oe)=>ie.then(()=>b(oe)),Promise.resolve())}return de}function Dg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ur(c,l))||r.push(l))}return[t,i,r]}function Aa(){return Aa=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Aa.apply(this,arguments)}var Ig={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,e){},onStringTyped:function(n,e){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,e){},onTypingResumed:function(n,e){},onReset:function(n){},onStop:function(n,e){},onStart:function(n,e){},onDestroy:function(n){}},Ug=new(function(){function n(){}var e=n.prototype;return e.load=function(t,i,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=Aa({},Ig,i),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(s[a].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var i="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(t){var i="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+i+"]")){var r=document.createElement("style");r.setAttribute(i,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},n}()),jc=new(function(){function n(){}var e=n.prototype;return e.typeHtmlChars=function(t,i,r){if(r.contentType!=="html")return i;var s=t.substring(i).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";t.substring(i+1).charAt(0)!==o&&!(1+ ++i>t.length););i++}return i},e.backSpaceHtmlChars=function(t,i,r){if(r.contentType!=="html")return i;var s=t.substring(i).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";t.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},n}()),Ng=function(){function n(t,i){Ug.load(this,i,t),this.begin()}var e=n.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,i){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=jc.typeHtmlChars(t,i,r);var a=0,l=t.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,i)+t.substring(i+c),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>t.length)););var u=t.substring(0,i),f=t.substring(u.length+1,i+o),h=t.substring(i+o+1);t=u+f+h,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i>=t.length?r.doneTyping(t,i):r.keepTyping(t,i,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(t,i,!0)},e.keepTyping=function(t,i,r){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,i+=r);this.replaceText(s),this.typewrite(t,i)},e.doneTyping=function(t,i){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,i)},this.backDelay))},e.backspace=function(t,i){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=jc.backSpaceHtmlChars(t,i,r);var o=t.substring(0,i);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.arrayPos+1];r.stopNum=a&&o===a.substring(0,i)?i:0}i>r.stopNum?(i--,r.backspace(t,i)):i<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],i))},s)}else this.setPauseStatus(t,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,i,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=i},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="173",Fg=0,Kc=1,Og=2,ph=1,Bg=2,In=3,si=0,Bt=1,Fn=2,ii=0,or=1,Zc=2,Jc=3,Qc=4,zg=5,yi=100,Hg=101,Vg=102,Gg=103,kg=104,Wg=200,Xg=201,qg=202,Yg=203,wa=204,Ra=205,$g=206,jg=207,Kg=208,Zg=209,Jg=210,Qg=211,e_=212,t_=213,n_=214,Ca=0,Pa=1,La=2,hr=3,Da=4,Ia=5,Ua=6,Na=7,Fl=0,i_=1,r_=2,ri=0,s_=1,o_=2,a_=3,l_=4,c_=5,u_=6,f_=7,mh=300,dr=301,pr=302,Fa=303,Oa=304,po=306,Ba=1e3,Ai=1001,za=1002,fn=1003,h_=1004,ds=1005,vn=1006,Io=1007,wi=1008,Vn=1009,gh=1010,_h=1011,Jr=1012,Ol=1013,Li=1014,On=1015,ns=1016,Bl=1017,zl=1018,mr=1020,vh=35902,xh=1021,Mh=1022,cn=1023,Sh=1024,Eh=1025,ar=1026,gr=1027,yh=1028,Hl=1029,Th=1030,Vl=1031,Gl=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,Ha=35840,Va=35841,Ga=35842,ka=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,$a=37809,ja=37810,Ka=37811,Za=37812,Ja=37813,Qa=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,sl=37820,ol=37821,ks=36492,al=36494,ll=36495,bh=36283,cl=36284,ul=36285,fl=36286,d_=3200,p_=3201,Ah=0,m_=1,ei="",Kt="srgb",_r="srgb-linear",Js="linear",rt="srgb",Oi=7680,eu=519,g_=512,__=513,v_=514,wh=515,x_=516,M_=517,S_=518,E_=519,tu=35044,nu="300 es",Bn=2e3,Qs=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uo=Math.PI/180,hl=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function y_(n,e){return(n%e+e)%e}function No(n,e,t){return(1-t)*n+t*e}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],M=r[0],m=r[3],d=r[6],R=r[1],T=r[4],E=r[7],I=r[2],P=r[5],L=r[8];return s[0]=o*M+a*R+l*I,s[3]=o*m+a*T+l*P,s[6]=o*d+a*E+l*L,s[1]=c*M+u*R+f*I,s[4]=c*m+u*T+f*P,s[7]=c*d+u*E+f*L,s[2]=h*M+p*R+v*I,s[5]=h*m+p*T+v*P,s[8]=h*d+p*E+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fo.makeScale(e,t)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Ge;function Rh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T_(){const n=Qr("canvas");return n.style.display="block",n}const iu={};function Qi(n){n in iu||(iu[n]=!0,console.warn(n))}function b_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function A_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function w_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ru=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R_(){const n={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Js:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_r]:{primaries:e,whitePoint:i,transfer:Js,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const je=R_();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class C_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Qr("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P_=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oo(r[o].image)):s.push(Oo(r[o]))}else s=Oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L_=0;class Nt extends Sr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Ai,r=Ai,s=vn,o=wi,a=cn,l=Vn,c=Nt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=is(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=mh;Nt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(p+1)/2,I=(d+1)/2,P=(u+h)/4,L=(f+M)/4,B=(v+m)/4;return T>E&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=L/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=L/s,r=B/s),this.set(i,r,s,t),this}let R=Math.sqrt((m-v)*(m-v)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(f-M)/R,this.z=(h-u)/R,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D_ extends Sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends D_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ph extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=M;return}if(f!==M||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*M,R=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,d*R);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const E=a*R;if(l=l*m+h*E,c=c*m+p*E,u=u*m+v*E,f=f*m+M*E,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new V,ou=new rs;class ss{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ms.subVectors(this.max,Rr),zi.subVectors(e.a,Rr),Hi.subVectors(e.b,Rr),Vi.subVectors(e.c,Rr),Wn.subVectors(Hi,zi),Xn.subVectors(Vi,Hi),pi.subVectors(zi,Vi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-pi.z,pi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,pi.z,0,-pi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-pi.y,pi.x,0];return!zo(t,zi,Hi,Vi,ms)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,zi,Hi,Vi,ms))?!1:(gs.crossVectors(Wn,Xn),t=[gs.x,gs.y,gs.z],zo(t,zi,Hi,Vi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new V,new V,new V,new V,new V,new V,new V,new V],tn=new V,ps=new ss,zi=new V,Hi=new V,Vi=new V,Wn=new V,Xn=new V,pi=new V,Rr=new V,ms=new V,gs=new V,mi=new V;function zo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const U_=new ss,Cr=new V,Ho=new V;class kl{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):U_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Ho)),this.expandByPoint(Cr.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new V,Vo=new V,_s=new V,qn=new V,Go=new V,vs=new V,ko=new V;class N_{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vo.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Vo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_s),a=qn.dot(this.direction),l=-qn.dot(_s),c=qn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const M=1/u;f*=M,h*=M,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vo).addScaledVector(_s,h),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){Go.subVectors(t,e),vs.subVectors(i,e),ko.crossVectors(Go,vs);let o=this.direction.dot(ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(vs.crossVectors(qn,vs));if(l<0)return null;const c=a*this.direction.dot(Go.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(ko);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,M,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,M,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,M,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,M=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-a*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,M=c*f;t[0]=h+M*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=M+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,M=c*f;t[0]=h-M*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=M-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,M=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=M-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,O_)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Yn.crossVectors(i,Vt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Yn.crossVectors(i,Vt)),Yn.normalize(),xs.crossVectors(Vt,Yn),r[0]=Yn.x,r[4]=xs.x,r[8]=Vt.x,r[1]=Yn.y,r[5]=xs.y,r[9]=Vt.y,r[2]=Yn.z,r[6]=xs.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],M=i[6],m=i[10],d=i[14],R=i[3],T=i[7],E=i[11],I=i[15],P=r[0],L=r[4],B=r[8],b=r[12],y=r[1],D=r[5],ee=r[9],q=r[13],ne=r[2],ue=r[6],K=r[10],re=r[14],H=r[3],me=r[7],Me=r[11],we=r[15];return s[0]=o*P+a*y+l*ne+c*H,s[4]=o*L+a*D+l*ue+c*me,s[8]=o*B+a*ee+l*K+c*Me,s[12]=o*b+a*q+l*re+c*we,s[1]=u*P+f*y+h*ne+p*H,s[5]=u*L+f*D+h*ue+p*me,s[9]=u*B+f*ee+h*K+p*Me,s[13]=u*b+f*q+h*re+p*we,s[2]=v*P+M*y+m*ne+d*H,s[6]=v*L+M*D+m*ue+d*me,s[10]=v*B+M*ee+m*K+d*Me,s[14]=v*b+M*q+m*re+d*we,s[3]=R*P+T*y+E*ne+I*H,s[7]=R*L+T*D+E*ue+I*me,s[11]=R*B+T*ee+E*K+I*Me,s[15]=R*b+T*q+E*re+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],M=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+M*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],M=e[13],m=e[14],d=e[15],R=f*m*c-M*h*c+M*l*p-a*m*p-f*l*d+a*h*d,T=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,E=u*M*c-v*f*c+v*a*p-o*M*p-u*a*d+o*f*d,I=v*f*l-u*M*l-v*a*h+o*M*h+u*a*m-o*f*m,P=t*R+i*T+r*E+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=R*L,e[1]=(M*h*s-f*m*s-M*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*d+i*l*d)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=T*L,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*L,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*L,e[8]=E*L,e[9]=(v*f*s-u*M*s-v*i*p+t*M*p+u*i*d-t*f*d)*L,e[10]=(o*M*s-v*a*s+v*i*c-t*M*c-o*i*d+t*a*d)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=I*L,e[13]=(u*M*r-v*f*r+v*i*h-t*M*h-u*i*m+t*f*m)*L,e[14]=(v*a*r-o*M*r-v*i*l+t*M*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,M=o*u,m=o*f,d=a*f,R=l*c,T=l*u,E=l*f,I=i.x,P=i.y,L=i.z;return r[0]=(1-(M+d))*I,r[1]=(p+E)*I,r[2]=(v-T)*I,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+d))*P,r[6]=(m+R)*P,r[7]=0,r[8]=(v+T)*L,r[9]=(m-R)*L,r[10]=(1-(h+M))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/o,f=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Bn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Qs)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Bn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let v,M;if(a===Bn)v=(o+s)*f,M=-2*f;else if(a===Qs)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new V,nn=new ut,F_=new V(0,0,0),O_=new V(1,1,1),Yn=new V,xs=new V,Vt=new V,au=new ut,lu=new rs;class Tn{constructor(e=0,t=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B_=0;const cu=new V,ki=new rs,Pn=new ut,Ms=new V,Pr=new V,z_=new V,H_=new rs,uu=new V(1,0,0),fu=new V(0,1,0),hu=new V(0,0,1),du={type:"added"},V_={type:"removed"},Wi={type:"childadded",child:null},Wo={type:"childremoved",child:null};class zt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new V,t=new Tn,i=new rs,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Pr,Ms,this.up):Pn.lookAt(Ms,Pr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Pn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new V,Ln=new V,Xo=new V,Dn=new V,Xi=new V,qi=new V,pu=new V,qo=new V,Yo=new V,$o=new V,jo=new st,Ko=new st,Zo=new st;class on{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Ln.subVectors(i,t),Xo.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Ln),l=rn.dot(Xo),c=Ln.dot(Ln),u=Ln.dot(Xo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return jo.setScalar(0),Ko.setScalar(0),Zo.setScalar(0),jo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,i),Zo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(jo,s.x),o.addScaledVector(Ko,s.y),o.addScaledVector(Zo,s.z),o}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Ln.subVectors(e,t),rn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),qi.subVectors(s,i),qo.subVectors(e,i);const l=Xi.dot(qo),c=qi.dot(qo);if(l<=0&&c<=0)return t.copy(i);Yo.subVectors(e,r);const u=Xi.dot(Yo),f=qi.dot(Yo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xi,o);$o.subVectors(e,s);const p=Xi.dot($o),v=qi.dot($o);if(v>=0&&p<=v)return t.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(qi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return pu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(pu,a);const d=1/(m+M+h);return o=M*d,a=h*d,t.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=y_(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jo(o,s,e+1/3),this.g=Jo(o,s,e),this.b=Jo(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return je.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Xe(Tt.r*255,0,255))*65536+Math.round(Xe(Tt.g*255,0,255))*256+Math.round(Xe(Tt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Kt){je.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ss);const i=No($n.h,Ss.h,t),r=No($n.s,Ss.s,t),s=No($n.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ke;Ke.NAMES=Dh;let G_=0;class os extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=is(),this.name="",this.type="Material",this.blending=or,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ra&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ih extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new V,Es=new Ze;let k_=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class Uh extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nh extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let W_=0;const jt=new ut,Qo=new zt,Yi=new V,Gt=new ss,Lr=new ss,xt=new V;class ci extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Nh:Uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Gt.min,Lr.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,Lr.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(Lr.min),Gt.expandByPoint(Lr.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),xt.add(Yi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new V,l[B]=new V;const c=new V,u=new V,f=new V,h=new Ze,p=new Ze,v=new Ze,M=new V,m=new V;function d(B,b,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[B].add(M),a[b].add(M),a[y].add(M),l[B].add(m),l[b].add(m),l[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,b=R.length;B<b;++B){const y=R[B],D=y.start,ee=y.count;for(let q=D,ne=D+ee;q<ne;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new V,E=new V,I=new V,P=new V;function L(B){I.fromBufferAttribute(r,B),P.copy(I);const b=a[B];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(P,b);const D=E.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,D)}for(let B=0,b=R.length;B<b;++B){const y=R[B],D=y.start,ee=y.count;for(let q=D,ne=D+ee;q<ne;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new ut,gi=new N_,ys=new kl,gu=new V,Ts=new V,bs=new V,As=new V,ea=new V,ws=new V,_u=new V,Rs=new V;class xn extends zt{constructor(e=new ci,t=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ea.fromBufferAttribute(f,e),o?ws.addScaledVector(ea,u):ws.addScaledVector(ea.sub(t),u))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(ys.containsPoint(gi.origin)===!1&&(gi.intersectSphere(ys,gu)===null||gi.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(s).invert(),gi.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const m=h[v],d=o[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,I=T;E<I;E+=3){const P=a.getX(E),L=a.getX(E+1),B=a.getX(E+2);r=Cs(this,d,e,i,c,u,f,P,L,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=v,d=M;m<d;m+=3){const R=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=Cs(this,o,e,i,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const m=h[v],d=o[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,I=T;E<I;E+=3){const P=E,L=E+1,B=E+2;r=Cs(this,d,e,i,c,u,f,P,L,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,d=M;m<d;m+=3){const R=m,T=m+1,E=m+2;r=Cs(this,o,e,i,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function X_(n,e,t,i,r,s,o,a){let l;if(e.side===Bt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ts),n.getVertexPosition(l,bs),n.getVertexPosition(c,As);const u=X_(n,e,t,i,Ts,bs,As,_u);if(u){const f=new V;on.getBarycoord(_u,Ts,bs,As,f),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,f,new Ze)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,f,new Ze)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};on.getNormal(Ts,bs,As,h.normal),u.face=h,u.barycoord=f}return u}class as extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function v(M,m,d,R,T,E,I,P,L,B,b){const y=E/L,D=I/B,ee=E/2,q=I/2,ne=P/2,ue=L+1,K=B+1;let re=0,H=0;const me=new V;for(let Me=0;Me<K;Me++){const we=Me*D-q;for(let Pe=0;Pe<ue;Pe++){const qe=Pe*y-ee;me[M]=qe*R,me[m]=we*T,me[d]=ne,c.push(me.x,me.y,me.z),me[M]=0,me[m]=0,me[d]=P>0?1:-1,u.push(me.x,me.y,me.z),f.push(Pe/L),f.push(1-Me/B),re+=1}}for(let Me=0;Me<B;Me++)for(let we=0;we<L;we++){const Pe=h+we+ue*Me,qe=h+we+ue*(Me+1),te=h+(we+1)+ue*(Me+1),de=h+(we+1)+ue*Me;l.push(Pe,qe,de),l.push(qe,te,de),H+=6}a.addGroup(p,H,b),p+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=vr(n[t]);for(const r in i)e[r]=i[r]}return e}function q_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Y_={clone:vr,merge:It};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Oh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new V,vu=new Ze,xu=new Ze;class Xt extends Oh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,vu,xu),t.subVectors(xu,vu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,ji=1;class K_ extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt($i,ji,e,t);r.layers=this.layers,this.add(r);const s=new Xt($i,ji,e,t);s.layers=this.layers,this.add(s);const o=new Xt($i,ji,e,t);o.layers=this.layers,this.add(o);const a=new Xt($i,ji,e,t);a.layers=this.layers,this.add(a);const l=new Xt($i,ji,e,t);l.layers=this.layers,this.add(l);const c=new Xt($i,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Bh extends Nt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Z_ extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ii});s.uniforms.tEquirect.value=t;const o=new xn(r,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=vn),new K_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ps extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Q_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const na=new V,ev=new V,tv=new Ge;class Si{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=na.subVectors(i,t).cross(ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tv.getNormalMatrix(e),r=this.coplanarPoint(na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new kl,Ls=new V;class Wl{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],M=r[10],m=r[11],d=r[12],R=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+v,E+R).normalize(),i[3].setComponents(l-o,h-u,m-v,E-R).normalize(),i[4].setComponents(l-a,h-f,m-M,E-T).normalize(),t===Bn)i[5].setComponents(l+a,h+f,m+M,E+T).normalize();else if(t===Qs)i[5].setComponents(a,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends Nt{constructor(e,t,i,r,s,o,a,l,c,u=ar){if(u!==ar&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Li),i===void 0&&u===gr&&(i=mr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mo extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],M=[],m=[];for(let d=0;d<u;d++){const R=d*h-o;for(let T=0;T<c;T++){const E=T*f-s;v.push(E,-R,0),M.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const T=R+c*d,E=R+c*(d+1),I=R+1+c*(d+1),P=R+1+c*d;p.push(T,E,P),p.push(E,I,P)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(M,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends ci{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,p=[],v=[],M=[],m=[];for(let d=0;d<=i;d++){const R=[],T=d/i;let E=0;d===0&&o===0?E=.5/t:d===i&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const P=I/t;f.x=-e*Math.cos(r+P*s)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+T*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(P+E,1-T),R.push(c++)}u.push(R)}for(let d=0;d<i;d++)for(let R=0;R<t;R++){const T=u[d][R+1],E=u[d][R],I=u[d+1][R],P=u[d+1][R+1];(d!==0||o>0)&&p.push(T,E,P),(d!==i-1||l<Math.PI)&&p.push(E,I,P)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(M,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nv extends os{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iv extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rv extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sv{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const ov=new sv;class ql{constructor(e){this.manager=e!==void 0?e:ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ql.DEFAULT_MATERIAL_NAME="__DEFAULT";class av extends ql{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qr("img");function l(){u(),Mu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lv extends ql{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,o=new av(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Hh extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ia=new ut,Su=new V,Eu=new V;class cv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yu=new ut,Dr=new V,ra=new V;class uv extends cv{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Dr),ra.copy(i.position),ra.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ra),i.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),yu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Tu extends Hh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fv extends Oh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hv extends Hh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dv extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function bu(n,e,t,i){const r=pv(i);switch(t){case xh:return n*e;case Sh:return n*e;case Eh:return n*e*2;case yh:return n*e/r.components*r.byteLength;case Hl:return n*e/r.components*r.byteLength;case Th:return n*e*2/r.components*r.byteLength;case Vl:return n*e*2/r.components*r.byteLength;case Mh:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case Gl:return n*e*4/r.components*r.byteLength;case zs:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:case ka:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case Ga:return Math.max(n,8)*Math.max(e,8)/2;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ks:case al:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bh:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ul:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(n){switch(n){case Vn:case gh:return{byteLength:1,components:1};case Jr:case _h:case ns:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case Li:case Ol:case On:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const M=f[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:gv,alphahash_pars_fragment:_v,alphamap_fragment:vv,alphamap_pars_fragment:xv,alphatest_fragment:Mv,alphatest_pars_fragment:Sv,aomap_fragment:Ev,aomap_pars_fragment:yv,batching_pars_vertex:Tv,batching_vertex:bv,begin_vertex:Av,beginnormal_vertex:wv,bsdfs:Rv,iridescence_fragment:Cv,bumpmap_pars_fragment:Pv,clipping_planes_fragment:Lv,clipping_planes_pars_fragment:Dv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Uv,color_fragment:Nv,color_pars_fragment:Fv,color_pars_vertex:Ov,color_vertex:Bv,common:zv,cube_uv_reflection_fragment:Hv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Gv,displacementmap_vertex:kv,emissivemap_fragment:Wv,emissivemap_pars_fragment:Xv,colorspace_fragment:qv,colorspace_pars_fragment:Yv,envmap_fragment:$v,envmap_common_pars_fragment:jv,envmap_pars_fragment:Kv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:l0,envmap_vertex:Jv,fog_vertex:Qv,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:r0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:h0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:_0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:y0,map_particle_fragment:T0,map_particle_pars_fragment:b0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:w0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:L0,morphtarget_vertex:D0,normal_fragment_begin:I0,normal_fragment_maps:U0,normal_pars_fragment:N0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:G0,opaque_fragment:k0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:$0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:J0,shadowmap_vertex:Q0,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:sx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:ux,uv_pars_fragment:fx,uv_pars_vertex:hx,uv_vertex:dx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:vx,cube_vert:xx,cube_frag:Mx,depth_vert:Sx,depth_frag:Ex,distanceRGBA_vert:yx,distanceRGBA_frag:Tx,equirect_vert:bx,equirect_frag:Ax,linedashed_vert:wx,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:Hx,meshtoon_vert:Vx,meshtoon_frag:Gx,points_vert:kx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:$x},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},_n={basic:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};_n.physical={uniforms:It([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ds={r:0,b:0,g:0},vi=new Tn,jx=new ut;function Kx(n,e,t,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function M(T){let E=!1;const I=v(T);I===null?d(a,l):I&&I.isColor&&(d(I,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const I=v(E);I&&(I.isCubeTexture||I.mapping===po)?(u===void 0&&(u=new xn(new as(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:vr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(E.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(vi)),u.material.toneMapped=je.getTransfer(I.colorSpace)!==rt,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new xn(new mo(2,2),new oi({name:"BackgroundMaterial",uniforms:vr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=je.getTransfer(I.colorSpace)!==rt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,E){T.getRGB(Ds,Fh(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,E,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:M,addToRenderList:m,dispose:R}}function Zx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,D,ee,q,ne){let ue=!1;const K=f(q,ee,D);s!==K&&(s=K,c(s.object)),ue=p(y,q,ee,ne),ue&&v(y,q,ee,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,E(y,D,ee,q),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,D,ee){const q=ee.wireframe===!0;let ne=i[y.id];ne===void 0&&(ne={},i[y.id]=ne);let ue=ne[D.id];ue===void 0&&(ue={},ne[D.id]=ue);let K=ue[q];return K===void 0&&(K=h(l()),ue[q]=K),K}function h(y){const D=[],ee=[],q=[];for(let ne=0;ne<t;ne++)D[ne]=0,ee[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:ee,attributeDivisors:q,object:y,attributes:{},index:null}}function p(y,D,ee,q){const ne=s.attributes,ue=D.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){const Me=ne[H];let we=ue[H];if(we===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;K++}return s.attributesNum!==K||s.index!==q}function v(y,D,ee,q){const ne={},ue=D.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){let Me=ue[H];Me===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),ne[H]=we,K++}s.attributes=ne,s.attributesNum=K,s.index=q}function M(){const y=s.newAttributes;for(let D=0,ee=y.length;D<ee;D++)y[D]=0}function m(y){d(y,0)}function d(y,D){const ee=s.newAttributes,q=s.enabledAttributes,ne=s.attributeDivisors;ee[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),ne[y]!==D&&(n.vertexAttribDivisor(y,D),ne[y]=D)}function R(){const y=s.newAttributes,D=s.enabledAttributes;for(let ee=0,q=D.length;ee<q;ee++)D[ee]!==y[ee]&&(n.disableVertexAttribArray(ee),D[ee]=0)}function T(y,D,ee,q,ne,ue,K){K===!0?n.vertexAttribIPointer(y,D,ee,ne,ue):n.vertexAttribPointer(y,D,ee,q,ne,ue)}function E(y,D,ee,q){M();const ne=q.attributes,ue=ee.getAttributes(),K=D.defaultAttributeValues;for(const re in ue){const H=ue[re];if(H.location>=0){let me=ne[re];if(me===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const Me=me.normalized,we=me.itemSize,Pe=e.get(me);if(Pe===void 0)continue;const qe=Pe.buffer,te=Pe.type,de=Pe.bytesPerElement,Se=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===Ol;if(me.isInterleavedBufferAttribute){const U=me.data,ie=U.stride,oe=me.offset;if(U.isInstancedInterleavedBuffer){for(let ae=0;ae<H.locationSize;ae++)d(H.location+ae,U.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ae=0;ae<H.locationSize;ae++)T(H.location+ae,we/H.locationSize,te,Me,ie*de,(oe+we/H.locationSize*ae)*de,Se)}else{if(me.isInstancedBufferAttribute){for(let U=0;U<H.locationSize;U++)d(H.location+U,me.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let U=0;U<H.locationSize;U++)T(H.location+U,we/H.locationSize,te,Me,we*de,we/H.locationSize*U*de,Se)}}else if(K!==void 0){const Me=K[re];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(H.location,Me);break;case 3:n.vertexAttrib3fv(H.location,Me);break;case 4:n.vertexAttrib4fv(H.location,Me);break;default:n.vertexAttrib1fv(H.location,Me)}}}}R()}function I(){B();for(const y in i){const D=i[y];for(const ee in D){const q=D[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete D[ee]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const ee in D){const q=D[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete D[ee]}delete i[y.id]}function L(y){for(const D in i){const ee=i[D];if(ee[y.id]===void 0)continue;const q=ee[y.id];for(const ne in q)u(q[ne].object),delete q[ne];delete ee[y.id]}}function B(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:m,disableUnusedAttributes:R}}function Jx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M]*h[M];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==cn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const B=L===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==On&&!B)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:I,maxSamples:P}}function eM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,T=R*4;let E=d.clippingState||null;l.value=E,E=u(v,h,T,p);for(let I=0;I!==T;++I)E[I]=t[I];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const d=p+M*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,E=p;T!==M;++T,E+=4)o.copy(f[T]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function tM(n){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=dr:a===Oa&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Z_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const er=4,Au=[.125,.215,.35,.446,.526,.582],Ti=20,sa=new fv,wu=new Ke;let oa=null,aa=0,la=0,ca=!1;const Ei=(1+Math.sqrt(5))/2,Ki=1/Ei,Ru=[new V(-Ei,Ki,0),new V(Ei,Ki,0),new V(-Ki,0,Ei),new V(Ki,0,Ei),new V(0,Ei,-Ki),new V(0,Ei,Ki),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ns,format:cn,colorSpace:_r,depthBuffer:!1},r=Pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(s)),this._blurMaterial=iM(s,e,t)}return r}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,r){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(wu),u.toneMapping=ri,u.autoClear=!1;const p=new Ih({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),v=new xn(new as,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(wu),M=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const T=this._cubeSize;Is(r,R*T,d>2?T:0,T,T),u.setRenderTarget(r),M&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ru[(r-s-1)%Ru.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),M=s/v,m=isFinite(s)?1+Math.floor(u*M):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const d=[];let R=0;for(let L=0;L<Ti;++L){const B=L/M,b=Math.exp(-B*B/2);d.push(b),L===0?R+=b:L<m&&(R+=2*b)}for(let L=0;L<d.length;L++)d[L]=d[L]/R;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=v,h.mipInt.value=T-i;const E=this._sizeLods[r],I=3*E*(r>T-er?r-T+er:0),P=4*(this._cubeSize-E);Is(t,I,P,3*E,2*E),l.setRenderTarget(t),l.render(f,sa)}}function nM(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-er?l=Au[o-n+er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,M=3,m=2,d=1,R=new Float32Array(M*v*p),T=new Float32Array(m*v*p),E=new Float32Array(d*v*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,B=P>2?0:-1,b=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];R.set(b,M*v*P),T.set(h,m*v*P);const y=[P,P,P,P,P,P];E.set(y,d*v*P)}const I=new ci;I.setAttribute("position",new Sn(R,M)),I.setAttribute("uv",new Sn(T,m)),I.setAttribute("faceIndex",new Sn(E,d)),e.push(I),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pu(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iM(n,e,t){const i=new Float32Array(Ti),r=new V(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Du(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,u=l===dr||l===pr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Cu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Cu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oM(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let M=0;if(p!==null){const R=p.array;M=p.version;for(let T=0,E=R.length;T<E;T+=3){const I=R[T+0],P=R[T+1],L=R[T+2];h.push(I,P,P,L,L,I)}}else if(v!==void 0){const R=v.array;M=v.version;for(let T=0,E=R.length/3-1;T<E;T+=3){const I=T+0,P=T+1,L=T+2;h.push(I,P,P,L,L,I)}}else return;const m=new(Rh(h)?Nh:Uh)(h,1);m.version=M;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function f(h,p,v,M){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,v);let d=0;for(let R=0;R<v;R++)d+=p[R]*M[R];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cM(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let E=a.attributes.position.count*T,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const P=new Float32Array(E*I*4*f),L=new Ph(P,E,I,f);L.type=On,L.needsUpdate=!0;const B=T*4;for(let y=0;y<f;y++){const D=m[y],ee=d[y],q=R[y],ne=E*I*4*y;for(let ue=0;ue<D.count;ue++){const K=ue*B;p===!0&&(r.fromBufferAttribute(D,ue),P[ne+K+0]=r.x,P[ne+K+1]=r.y,P[ne+K+2]=r.z,P[ne+K+3]=0),v===!0&&(r.fromBufferAttribute(ee,ue),P[ne+K+4]=r.x,P[ne+K+5]=r.y,P[ne+K+6]=r.z,P[ne+K+7]=0),M===!0&&(r.fromBufferAttribute(q,ue),P[ne+K+8]=r.x,P[ne+K+9]=r.y,P[ne+K+10]=r.z,P[ne+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new Ze(E,I)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function uM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Gh=new Nt,Iu=new zh(1,1),kh=new Ph,Wh=new I_,Xh=new Bh,Uu=[],Nu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),vt(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),vt(t,i)}}function _M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),vt(t,i)}}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=wh,s=Iu):s=Gh,t.setTexture2D(e||s,r)}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wh,r)}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xh,r)}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function PM(n){switch(n){case 5126:return fM;case 35664:return hM;case 35665:return dM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return MM;case 35669:case 35673:return SM;case 5125:return EM;case 36294:return yM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}function LM(n,e){n.uniform1fv(this.addr,e)}function DM(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function IM(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function zM(n,e){n.uniform2iv(this.addr,e)}function HM(n,e){n.uniform3iv(this.addr,e)}function VM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function kM(n,e){n.uniform2uiv(this.addr,e)}function WM(n,e){n.uniform3uiv(this.addr,e)}function XM(n,e){n.uniform4uiv(this.addr,e)}function qM(n,e,t){const i=this.cache,r=e.length,s=go(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gh,s[o])}function YM(n,e,t){const i=this.cache,r=e.length,s=go(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wh,s[o])}function $M(n,e,t){const i=this.cache,r=e.length,s=go(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xh,s[o])}function jM(n,e,t){const i=this.cache,r=e.length,s=go(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function KM(n){switch(n){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return kM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return jM}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}}class JM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function zu(n,e){n.seq.push(e),n.map[e.id]=e}function eS(n,e,t){const i=n.name,r=i.length;for(ua.lastIndex=0;;){const s=ua.exec(i),o=ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zu(t,c===void 0?new ZM(a,n,e):new JM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new QM(a),zu(t,f)),t=f}}}class Ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tS=37297;let nS=0;function iS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vu=new Ge;function rS(n){je._getMatrix(Vu,je.workingColorSpace,n);const e=`mat3( ${Vu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Js:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iS(n.getShaderSource(e),o)}else return r}function sS(n,e){const t=rS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oS(n,e){let t;switch(e){case s_:t="Linear";break;case o_:t="Reinhard";break;case a_:t="Cineon";break;case l_:t="ACESFilmic";break;case u_:t="AgX";break;case f_:t="Neutral";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new V;function aS(){je.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function cS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(fS,dS)}const hS=new Map;function dS(n,e){let t=We[e];if(t===void 0){const i=hS.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}const pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(pS,mS)}function mS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function _S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function xS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function MS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gS(t),c=_S(t),u=vS(t),f=xS(t),h=MS(t),p=lS(t),v=cS(s),M=r.createProgram();let m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?We.tonemapping_pars_fragment:"",t.toneMapping!==ri?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,sS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=dl(o),o=ku(o,t),o=Wu(o,t),a=dl(a),a=ku(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=R+m+o,E=R+d+a,I=Hu(r,r.VERTEX_SHADER,T),P=Hu(r,r.FRAGMENT_SHADER,E);r.attachShader(M,I),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function L(D){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(M).trim(),q=r.getShaderInfoLog(I).trim(),ne=r.getShaderInfoLog(P).trim();let ue=!0,K=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,I,P);else{const re=Gu(r,I,"vertex"),H=Gu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ee+`
`+re+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||ne==="")&&(K=!1);K&&(D.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:q,prefix:m},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(I),r.deleteShader(P),B=new Ws(r,M),b=uS(r,M)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,tS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=P,this}let ES=0;class yS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TS(e),t.set(e,i)),i}}class TS{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}}function bS(n,e,t,i,r,s,o){const a=new Lh,l=new yS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,D,ee,q){const ne=ee.fog,ue=q.geometry,K=b.isMeshStandardMaterial?ee.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),H=re&&re.mapping===po?re.image.height:null,me=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Me=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,we=Me!==void 0?Me.length:0;let Pe=0;ue.morphAttributes.position!==void 0&&(Pe=1),ue.morphAttributes.normal!==void 0&&(Pe=2),ue.morphAttributes.color!==void 0&&(Pe=3);let qe,te,de,Se;if(me){const it=_n[me];qe=it.vertexShader,te=it.fragmentShader}else qe=b.vertexShader,te=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const U=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),oe=q.isInstancedMesh===!0,ae=q.isBatchedMesh===!0,Ie=!!b.map,A=!!b.matcap,w=!!re,_=!!b.aoMap,Q=!!b.lightMap,$=!!b.bumpMap,W=!!b.normalMap,Z=!!b.displacementMap,le=!!b.emissiveMap,j=!!b.metalnessMap,x=!!b.roughnessMap,g=b.anisotropy>0,C=b.clearcoat>0,z=b.dispersion>0,X=b.iridescence>0,G=b.sheen>0,pe=b.transmission>0,ce=g&&!!b.anisotropyMap,ge=C&&!!b.clearcoatMap,Ue=C&&!!b.clearcoatNormalMap,fe=C&&!!b.clearcoatRoughnessMap,xe=X&&!!b.iridescenceMap,Ce=X&&!!b.iridescenceThicknessMap,Ne=G&&!!b.sheenColorMap,_e=G&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,ze=!!b.specularColorMap,ot=!!b.specularIntensityMap,N=pe&&!!b.transmissionMap,Ee=pe&&!!b.thicknessMap,J=!!b.gradientMap,se=!!b.alphaMap,be=b.alphaTest>0,Te=!!b.alphaHash,Ve=!!b.extensions;let ft=ri;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Et={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:te,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ae,batchingColor:ae&&q._colorsTexture!==null,instancing:oe,instancingColor:oe&&q.instanceColor!==null,instancingMorph:oe&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:A,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:H,aoMap:_,lightMap:Q,bumpMap:$,normalMap:W,displacementMap:h&&Z,emissiveMap:le,normalMapObjectSpace:W&&b.normalMapType===m_,normalMapTangentSpace:W&&b.normalMapType===Ah,metalnessMap:j,roughnessMap:x,anisotropy:g,anisotropyMap:ce,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:fe,dispersion:z,iridescence:X,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:G,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Fe,specularColorMap:ze,specularIntensityMap:ot,transmission:pe,transmissionMap:N,thicknessMap:Ee,gradientMap:J,opaque:b.transparent===!1&&b.blending===or&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Te,combine:b.combine,mapUv:Ie&&M(b.map.channel),aoMapUv:_&&M(b.aoMap.channel),lightMapUv:Q&&M(b.lightMap.channel),bumpMapUv:$&&M(b.bumpMap.channel),normalMapUv:W&&M(b.normalMap.channel),displacementMapUv:Z&&M(b.displacementMap.channel),emissiveMapUv:le&&M(b.emissiveMap.channel),metalnessMapUv:j&&M(b.metalnessMap.channel),roughnessMapUv:x&&M(b.roughnessMap.channel),anisotropyMapUv:ce&&M(b.anisotropyMap.channel),clearcoatMapUv:ge&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&M(b.sheenRoughnessMap.channel),specularMapUv:Fe&&M(b.specularMap.channel),specularColorMapUv:ze&&M(b.specularColorMap.channel),specularIntensityMapUv:ot&&M(b.specularIntensityMap.channel),transmissionMapUv:N&&M(b.transmissionMap.channel),thicknessMapUv:Ee&&M(b.thicknessMap.channel),alphaMapUv:se&&M(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(W||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(Ie||se),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)y.push(D),y.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(R(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function R(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const y=v[b.type];let D;if(y){const ee=_n[y];D=Y_.clone(ee.uniforms)}else D=b.uniforms;return D}function I(b,y){let D;for(let ee=0,q=u.length;ee<q;ee++){const ne=u[ee];if(ne.cacheKey===y){D=ne,++D.usedTimes;break}}return D===void 0&&(D=new SS(n,y,b,s),u.push(D)),D}function P(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:B}}function AS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $u(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,M,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:M,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=M,d.group=m),e++,d}function a(f,h,p,v,M,m){const d=o(f,h,p,v,M,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,M,m){const d=o(f,h,p,v,M,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||wS),i.length>1&&i.sort(h||Yu),r.length>1&&r.sort(h||Yu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function RS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $u,n.set(i,[o])):r>=s.length?(o=new $u,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ke};break;case"SpotLight":t={position:new V,direction:new V,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function PS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){const e=new CS,t=PS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new ut,o=new ut;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,M=0,m=0,d=0,R=0,T=0,E=0,I=0,P=0,L=0;c.sort(DS);for(let b=0,y=c.length;b<y;b++){const D=c[b],ee=D.color,q=D.intensity,ne=D.distance,ue=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=ee.r*q,f+=ee.g*q,h+=ee.b*q;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],q);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const re=D.shadow,H=t.get(D);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ue,i.directionalShadowMatrix[p]=D.shadow.matrix,R++}i.directional[p]=K,p++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(ee).multiplyScalar(q),K.distance=ne,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[M]=K;const re=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,re.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[M]=re.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=ue,E++}M++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(ee).multiplyScalar(q),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const re=D.shadow,H=t.get(D);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=ue,i.pointShadowMatrix[v]=D.shadow.matrix,T++}i.point[v]=K,v++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(q),K.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[d]=K,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==p||B.pointLength!==v||B.spotLength!==M||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==R||B.numPointShadows!==T||B.numSpotShadows!==E||B.numSpotMaps!==I||B.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,B.directionalLength=p,B.pointLength=v,B.spotLength=M,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=R,B.numPointShadows=T,B.numSpotShadows=E,B.numSpotMaps=I,B.numLightProbes=L,i.version=LS++)}function l(c,u){let f=0,h=0,p=0,v=0,M=0;const m=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const T=c[d];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function ju(n){const e=new IS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function US(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ju(n),e.set(r,[a])):s>=o.length?(a=new ju(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OS(n,e,t){let i=new Wl;const r=new Ze,s=new Ze,o=new st,a=new iv({depthPacking:p_}),l=new rv,c={},u=t.maxTextureSize,f={[si]:Bt,[Bt]:si,[Fn]:Fn},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:NS,fragmentShader:FS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ci;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ph;let d=this.type;this.render=function(P,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(ii),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=d!==In&&this.type===In,ne=d===In&&this.type!==In;for(let ue=0,K=P.length;ue<K;ue++){const re=P[ue],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const me=H.getFrameExtents();if(r.multiply(me),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,H.mapSize.y=s.y)),H.map===null||q===!0||ne===!0){const we=this.type!==In?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Di(r.x,r.y,we),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Me=H.getViewportCount();for(let we=0;we<Me;we++){const Pe=H.getViewport(we);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),ee.viewport(o),H.updateMatrices(re,we),i=H.getFrustum(),E(L,B,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===In&&R(H,B),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,D)};function R(P,L){const B=e.update(M);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Di(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,B,h,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,B,p,M,null)}function T(P,L,B,b){let y=null;const D=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)y=D;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ee=y.uuid,q=L.uuid;let ne=c[ee];ne===void 0&&(ne={},c[ee]=ne);let ue=ne[q];ue===void 0&&(ue=y.clone(),ne[q]=ue,L.addEventListener("dispose",I)),y=ue}if(y.visible=L.visible,y.wireframe=L.wireframe,b===In?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ee=n.properties.get(y);ee.light=B}return y}function E(P,L,B,b,y){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===In)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const q=e.update(P),ne=P.material;if(Array.isArray(ne)){const ue=q.groups;for(let K=0,re=ue.length;K<re;K++){const H=ue[K],me=ne[H.materialIndex];if(me&&me.visible){const Me=T(P,me,b,y);P.onBeforeShadow(n,P,L,B,q,Me,H),n.renderBufferDirect(B,null,q,Me,P,H),P.onAfterShadow(n,P,L,B,q,Me,H)}}}else if(ne.visible){const ue=T(P,ne,b,y);P.onBeforeShadow(n,P,L,B,q,ue,null),n.renderBufferDirect(B,null,q,ue,P,null),P.onAfterShadow(n,P,L,B,q,ue,null)}}const ee=P.children;for(let q=0,ne=ee.length;q<ne;q++)E(ee[q],L,B,b,y)}function I(P){P.target.removeEventListener("dispose",I);for(const B in c){const b=c[B],y=P.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const BS={[Ca]:Pa,[La]:Ua,[Da]:Na,[hr]:Ia,[Pa]:Ca,[Ua]:La,[Na]:Da,[Ia]:hr};function zS(n,e){function t(){let N=!1;const Ee=new st;let J=null;const se=new st(0,0,0,0);return{setMask:function(be){J!==be&&!N&&(n.colorMask(be,be,be,be),J=be)},setLocked:function(be){N=be},setClear:function(be,Te,Ve,ft,Et){Et===!0&&(be*=ft,Te*=ft,Ve*=ft),Ee.set(be,Te,Ve,ft),se.equals(Ee)===!1&&(n.clearColor(be,Te,Ve,ft),se.copy(Ee))},reset:function(){N=!1,J=null,se.set(-1,0,0,0)}}}function i(){let N=!1,Ee=!1,J=null,se=null,be=null;return{setReversed:function(Te){if(Ee!==Te){const Ve=e.get("EXT_clip_control");Ee?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const ft=be;be=null,this.setClear(ft)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?U(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Te){J!==Te&&!N&&(n.depthMask(Te),J=Te)},setFunc:function(Te){if(Ee&&(Te=BS[Te]),se!==Te){switch(Te){case Ca:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Ua:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Te}},setLocked:function(Te){N=Te},setClear:function(Te){be!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),be=Te)},reset:function(){N=!1,J=null,se=null,be=null,Ee=!1}}}function r(){let N=!1,Ee=null,J=null,se=null,be=null,Te=null,Ve=null,ft=null,Et=null;return{setTest:function(it){N||(it?U(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(it){Ee!==it&&!N&&(n.stencilMask(it),Ee=it)},setFunc:function(it,Qt,bn){(J!==it||se!==Qt||be!==bn)&&(n.stencilFunc(it,Qt,bn),J=it,se=Qt,be=bn)},setOp:function(it,Qt,bn){(Te!==it||Ve!==Qt||ft!==bn)&&(n.stencilOp(it,Qt,bn),Te=it,Ve=Qt,ft=bn)},setLocked:function(it){N=it},setClear:function(it){Et!==it&&(n.clearStencil(it),Et=it)},reset:function(){N=!1,Ee=null,J=null,se=null,be=null,Te=null,Ve=null,ft=null,Et=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,M=!1,m=null,d=null,R=null,T=null,E=null,I=null,P=null,L=new Ke(0,0,0),B=0,b=!1,y=null,D=null,ee=null,q=null,ne=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=re>=2);let me=null,Me={};const we=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),qe=new st().fromArray(we),te=new st().fromArray(Pe);function de(N,Ee,J,se){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(N,Te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<J;Ve++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ee+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const Se={};Se[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(hr),$(!1),W(Kc),U(n.CULL_FACE),_(ii);function U(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ie(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function oe(N,Ee){return f[N]!==Ee?(n.bindFramebuffer(N,Ee),f[N]=Ee,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ae(N,Ee){let J=p,se=!1;if(N){J=h.get(Ee),J===void 0&&(J=[],h.set(Ee,J));const be=N.textures;if(J.length!==be.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ve=be.length;Te<Ve;Te++)J[Te]=n.COLOR_ATTACHMENT0+Te;J.length=be.length,se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,se=!0);se&&n.drawBuffers(J)}function Ie(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const A={[yi]:n.FUNC_ADD,[Hg]:n.FUNC_SUBTRACT,[Vg]:n.FUNC_REVERSE_SUBTRACT};A[Gg]=n.MIN,A[kg]=n.MAX;const w={[Wg]:n.ZERO,[Xg]:n.ONE,[qg]:n.SRC_COLOR,[wa]:n.SRC_ALPHA,[Jg]:n.SRC_ALPHA_SATURATE,[Kg]:n.DST_COLOR,[$g]:n.DST_ALPHA,[Yg]:n.ONE_MINUS_SRC_COLOR,[Ra]:n.ONE_MINUS_SRC_ALPHA,[Zg]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[Qg]:n.CONSTANT_COLOR,[e_]:n.ONE_MINUS_CONSTANT_COLOR,[t_]:n.CONSTANT_ALPHA,[n_]:n.ONE_MINUS_CONSTANT_ALPHA};function _(N,Ee,J,se,be,Te,Ve,ft,Et,it){if(N===ii){M===!0&&(ie(n.BLEND),M=!1);return}if(M===!1&&(U(n.BLEND),M=!0),N!==zg){if(N!==m||it!==b){if((d!==yi||E!==yi)&&(n.blendEquation(n.FUNC_ADD),d=yi,E=yi),it)switch(N){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,T=null,I=null,P=null,L.set(0,0,0),B=0,m=N,b=it}return}be=be||Ee,Te=Te||J,Ve=Ve||se,(Ee!==d||be!==E)&&(n.blendEquationSeparate(A[Ee],A[be]),d=Ee,E=be),(J!==R||se!==T||Te!==I||Ve!==P)&&(n.blendFuncSeparate(w[J],w[se],w[Te],w[Ve]),R=J,T=se,I=Te,P=Ve),(ft.equals(L)===!1||Et!==B)&&(n.blendColor(ft.r,ft.g,ft.b,Et),L.copy(ft),B=Et),m=N,b=!1}function Q(N,Ee){N.side===Fn?ie(n.CULL_FACE):U(n.CULL_FACE);let J=N.side===Bt;Ee&&(J=!J),$(J),N.blending===or&&N.transparent===!1?_(ii):_(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const se=N.stencilWrite;a.setTest(se),se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function W(N){N!==Fg?(U(n.CULL_FACE),N!==D&&(N===Kc?n.cullFace(n.BACK):N===Og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),D=N}function Z(N){N!==ee&&(K&&n.lineWidth(N),ee=N)}function le(N,Ee,J){N?(U(n.POLYGON_OFFSET_FILL),(q!==Ee||ne!==J)&&(n.polygonOffset(Ee,J),q=Ee,ne=J)):ie(n.POLYGON_OFFSET_FILL)}function j(N){N?U(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+ue-1),me!==N&&(n.activeTexture(N),me=N)}function g(N,Ee,J){J===void 0&&(me===null?J=n.TEXTURE0+ue-1:J=me);let se=Me[J];se===void 0&&(se={type:void 0,texture:void 0},Me[J]=se),(se.type!==N||se.texture!==Ee)&&(me!==J&&(n.activeTexture(J),me=J),n.bindTexture(N,Ee||Se[N]),se.type=N,se.texture=Ee)}function C(){const N=Me[me];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function _e(N){te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function Fe(N,Ee){let J=c.get(Ee);J===void 0&&(J=new WeakMap,c.set(Ee,J));let se=J.get(N);se===void 0&&(se=n.getUniformBlockIndex(Ee,N.name),J.set(N,se))}function ze(N,Ee){const se=c.get(Ee).get(N);l.get(Ee)!==se&&(n.uniformBlockBinding(Ee,se,N.__bindingPointIndex),l.set(Ee,se))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Me={},f={},h=new WeakMap,p=[],v=null,M=!1,m=null,d=null,R=null,T=null,E=null,I=null,P=null,L=new Ke(0,0,0),B=0,b=!1,y=null,D=null,ee=null,q=null,ne=null,qe.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:ie,bindFramebuffer:oe,drawBuffers:ae,useProgram:Ie,setBlending:_,setMaterial:Q,setFlipSided:$,setCullFace:W,setLineWidth:Z,setPolygonOffset:le,setScissorTest:j,activeTexture:x,bindTexture:g,unbindTexture:C,compressedTexImage2D:z,compressedTexImage3D:X,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Fe,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:fe,texSubImage2D:G,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Ne,viewport:_e,reset:ot}}function HS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return p?new OffscreenCanvas(x,g):Qr("canvas")}function M(x,g,C){let z=1;const X=j(x);if((X.width>C||X.height>C)&&(z=C/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(z*X.width),pe=Math.floor(z*X.height);f===void 0&&(f=v(G,pe));const ce=g?v(G,pe):f;return ce.width=G,ce.height=pe,ce.getContext("2d").drawImage(x,0,0,G,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+G+"x"+pe+")."),ce}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,g,C,z,X=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=g;if(g===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),g===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),g===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),g===n.RGBA){const pe=X?Js:je.getTransfer(z);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=pe===rt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(x,g){let C;return x?g===null||g===Li||g===mr?C=n.DEPTH24_STENCIL8:g===On?C=n.DEPTH32F_STENCIL8:g===Jr&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Li||g===mr?C=n.DEPTH_COMPONENT24:g===On?C=n.DEPTH_COMPONENT32F:g===Jr&&(C=n.DEPTH_COMPONENT16),C}function I(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==fn&&x.minFilter!==vn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function P(x){const g=x.target;g.removeEventListener("dispose",P),B(g),g.isVideoTexture&&u.delete(g)}function L(x){const g=x.target;g.removeEventListener("dispose",L),y(g)}function B(x){const g=i.get(x);if(g.__webglInit===void 0)return;const C=x.source,z=h.get(C);if(z){const X=z[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(x),Object.keys(z).length===0&&h.delete(C)}i.remove(x)}function b(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const C=x.source,z=h.get(C);delete z[g.__cacheKey],o.memory.textures--}function y(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let X=0;X<g.__webglFramebuffer[z].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[z][X]);else n.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)n.deleteFramebuffer(g.__webglFramebuffer[z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=x.textures;for(let z=0,X=C.length;z<X;z++){const G=i.get(C[z]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(C[z])}i.remove(x)}let D=0;function ee(){D=0}function q(){const x=D;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),D+=1,x}function ne(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function ue(x,g){const C=i.get(x);if(x.isVideoTexture&&Z(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(C,x,g);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+g)}function K(x,g){const C=i.get(x);if(x.version>0&&C.__version!==x.version){te(C,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+g)}function re(x,g){const C=i.get(x);if(x.version>0&&C.__version!==x.version){te(C,x,g);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+g)}function H(x,g){const C=i.get(x);if(x.version>0&&C.__version!==x.version){de(C,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+g)}const me={[Ba]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},Me={[fn]:n.NEAREST,[h_]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Io]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},we={[g_]:n.NEVER,[E_]:n.ALWAYS,[__]:n.LESS,[wh]:n.LEQUAL,[v_]:n.EQUAL,[S_]:n.GEQUAL,[x_]:n.GREATER,[M_]:n.NOTEQUAL};function Pe(x,g){if(g.type===On&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vn||g.magFilter===Io||g.magFilter===ds||g.magFilter===wi||g.minFilter===vn||g.minFilter===Io||g.minFilter===ds||g.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===fn||g.minFilter!==ds&&g.minFilter!==wi||g.type===On&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qe(x,g){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",P));const z=g.source;let X=h.get(z);X===void 0&&(X={},h.set(z,X));const G=ne(g);if(G!==x.__cacheKey){X[G]===void 0&&(X[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),X[G].usedTimes++;const pe=X[x.__cacheKey];pe!==void 0&&(X[x.__cacheKey].usedTimes--,pe.usedTimes===0&&b(g)),x.__cacheKey=G,x.__webglTexture=X[G].texture}return C}function te(x,g,C){let z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=n.TEXTURE_3D);const X=qe(x,g),G=g.source;t.bindTexture(z,x.__webglTexture,n.TEXTURE0+C);const pe=i.get(G);if(G.version!==pe.__version||X===!0){t.activeTexture(n.TEXTURE0+C);const ce=je.getPrimaries(je.workingColorSpace),ge=g.colorSpace===ei?null:je.getPrimaries(g.colorSpace),Ue=g.colorSpace===ei||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let fe=M(g.image,!1,r.maxTextureSize);fe=le(g,fe);const xe=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let Ne=T(g.internalFormat,xe,Ce,g.colorSpace,g.isVideoTexture);Pe(z,g);let _e;const Fe=g.mipmaps,ze=g.isVideoTexture!==!0,ot=pe.__version===void 0||X===!0,N=G.dataReady,Ee=I(g,fe);if(g.isDepthTexture)Ne=E(g.format===gr,g.type),ot&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ne,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,xe,Ce,null));else if(g.isDataTexture)if(Fe.length>0){ze&&ot&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let J=0,se=Fe.length;J<se;J++)_e=Fe[J],ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,xe,Ce,_e.data);g.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,fe.width,fe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Ce,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,xe,Ce,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,Fe[0].width,Fe[0].height,fe.depth);for(let J=0,se=Fe.length;J<se;J++)if(_e=Fe[J],g.format!==cn)if(xe!==null)if(ze){if(N)if(g.layerUpdates.size>0){const be=bu(_e.width,_e.height,g.format,g.type);for(const Te of g.layerUpdates){const Ve=_e.data.subarray(Te*be/_e.data.BYTES_PER_ELEMENT,(Te+1)*be/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Te,_e.width,_e.height,1,xe,Ve)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,fe.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ne,_e.width,_e.height,fe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,fe.depth,xe,Ce,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ne,_e.width,_e.height,fe.depth,0,xe,Ce,_e.data)}else{ze&&ot&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let J=0,se=Fe.length;J<se;J++)_e=Fe[J],g.format!==cn?xe!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ne,_e.width,_e.height,0,xe,Ce,_e.data)}else if(g.isDataArrayTexture)if(ze){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,fe.width,fe.height,fe.depth),N)if(g.layerUpdates.size>0){const J=bu(fe.width,fe.height,g.format,g.type);for(const se of g.layerUpdates){const be=fe.data.subarray(se*J/fe.data.BYTES_PER_ELEMENT,(se+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,fe.width,fe.height,1,xe,Ce,be)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(g.isData3DTexture)ze?(ot&&t.texStorage3D(n.TEXTURE_3D,Ee,Ne,fe.width,fe.height,fe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(g.isFramebufferTexture){if(ot)if(ze)t.texStorage2D(n.TEXTURE_2D,Ee,Ne,fe.width,fe.height);else{let J=fe.width,se=fe.height;for(let be=0;be<Ee;be++)t.texImage2D(n.TEXTURE_2D,be,Ne,J,se,0,xe,Ce,null),J>>=1,se>>=1}}else if(Fe.length>0){if(ze&&ot){const J=j(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,J.width,J.height)}for(let J=0,se=Fe.length;J<se;J++)_e=Fe[J],ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe,Ce,_e):t.texImage2D(n.TEXTURE_2D,J,Ne,xe,Ce,_e);g.generateMipmaps=!1}else if(ze){if(ot){const J=j(fe);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,xe,Ce,fe);m(g)&&d(z),pe.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function de(x,g,C){if(g.image.length!==6)return;const z=qe(x,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const G=i.get(X);if(X.version!==G.__version||z===!0){t.activeTexture(n.TEXTURE0+C);const pe=je.getPrimaries(je.workingColorSpace),ce=g.colorSpace===ei?null:je.getPrimaries(g.colorSpace),ge=g.colorSpace===ei||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!Ue&&!fe?xe[se]=M(g.image[se],!0,r.maxCubemapSize):xe[se]=fe?g.image[se].image:g.image[se],xe[se]=le(g,xe[se]);const Ce=xe[0],Ne=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Fe=T(g.internalFormat,Ne,_e,g.colorSpace),ze=g.isVideoTexture!==!0,ot=G.__version===void 0||z===!0,N=X.dataReady;let Ee=I(g,Ce);Pe(n.TEXTURE_CUBE_MAP,g);let J;if(Ue){ze&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,Ce.width,Ce.height);for(let se=0;se<6;se++){J=xe[se].mipmaps;for(let be=0;be<J.length;be++){const Te=J[be];g.format!==cn?Ne!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Te.width,Te.height,Ne,_e,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Fe,Te.width,Te.height,0,Ne,_e,Te.data)}}}else{if(J=g.mipmaps,ze&&ot){J.length>0&&Ee++;const se=j(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(fe){ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Ne,_e,xe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,xe[se].width,xe[se].height,0,Ne,_e,xe[se].data);for(let be=0;be<J.length;be++){const Ve=J[be].image[se].image;ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ve.width,Ve.height,Ne,_e,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Fe,Ve.width,Ve.height,0,Ne,_e,Ve.data)}}else{ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,_e,xe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Ne,_e,xe[se]);for(let be=0;be<J.length;be++){const Te=J[be];ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ne,_e,Te.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Fe,Ne,_e,Te.image[se])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),G.__version=X.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Se(x,g,C,z,X,G){const pe=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),ge=T(C.internalFormat,pe,ce,C.colorSpace),Ue=i.get(g),fe=i.get(C);if(fe.__renderTarget=g,!Ue.__hasExternalTextures){const xe=Math.max(1,g.width>>G),Ce=Math.max(1,g.height>>G);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,G,ge,xe,Ce,g.depth,0,pe,ce,null):t.texImage2D(X,G,ge,xe,Ce,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,X,fe.__webglTexture,0,$(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,X,fe.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(x,g,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const z=g.depthTexture,X=z&&z.isDepthTexture?z.type:null,G=E(g.stencilBuffer,X),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=$(g);W(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,G,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,x)}else{const z=g.textures;for(let X=0;X<z.length;X++){const G=z[X],pe=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ge=T(G.internalFormat,pe,ce,G.colorSpace),Ue=$(g);C&&W(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ge,g.width,g.height):W(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ge,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ge,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const X=z.__webglTexture,G=$(g);if(g.depthTexture.format===ar)W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(g.depthTexture.format===gr)W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function oe(x){const g=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=z}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");ie(g.__webglFramebuffer,x)}else if(C){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=n.createRenderbuffer(),U(g.__webglDepthbuffer[z],x,!1);else{const X=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),U(g.__webglDepthbuffer,x,!1);else{const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,X)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(x,g,C){const z=i.get(x);g!==void 0&&Se(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&oe(x)}function Ie(x){const g=x.texture,C=i.get(x),z=i.get(g);x.addEventListener("dispose",L);const X=x.textures,G=x.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=g.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let ge=0;ge<g.mipmaps.length;ge++)C.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ce=0,ge=X.length;ce<ge;ce++){const Ue=i.get(X[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&W(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<X.length;ce++){const ge=X[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Ue=s.convert(ge.format,ge.colorSpace),fe=s.convert(ge.type),xe=T(ge.internalFormat,Ue,fe,ge.colorSpace,x.isXRRenderTarget===!0),Ce=$(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),U(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Se(C.__webglFramebuffer[ce][ge],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Se(C.__webglFramebuffer[ce],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,ge=X.length;ce<ge;ce++){const Ue=X[ce],fe=i.get(Ue);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Pe(n.TEXTURE_2D,Ue),Se(C.__webglFramebuffer,x,Ue,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ue)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,z.__webglTexture),Pe(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Se(C.__webglFramebuffer[ge],x,g,n.COLOR_ATTACHMENT0,ce,ge);else Se(C.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ce,0);m(g)&&d(ce),t.unbindTexture()}x.depthBuffer&&oe(x)}function A(x){const g=x.textures;for(let C=0,z=g.length;C<z;C++){const X=g[C];if(m(X)){const G=R(x),pe=i.get(X).__webglTexture;t.bindTexture(G,pe),d(G),t.unbindTexture()}}}const w=[],_=[];function Q(x){if(x.samples>0){if(W(x)===!1){const g=x.textures,C=x.width,z=x.height;let X=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(x),ce=g.length>1;if(ce)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,C,z,0,0,C,z,X,n.NEAREST),l===!0&&(w.length=0,_.length=0,w.push(n.COLOR_ATTACHMENT0+ge),x.depthBuffer&&x.resolveDepthBuffer===!1&&(w.push(G),_.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function $(x){return Math.min(r.maxSamples,x.samples)}function W(x){const g=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Z(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function le(x,g){const C=x.colorSpace,z=x.format,X=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==_r&&C!==ei&&(je.getTransfer(C)===rt?(z!==cn||X!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function j(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=W}function VS(n,e){function t(i,r=ei){let s;const o=je.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return n.BYTE;if(i===_h)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Ol)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===cn)return n.RGBA;if(i===Sh)return n.LUMINANCE;if(i===Eh)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===Th)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Gl)return n.RGBA_INTEGER;if(i===zs||i===Hs||i===Vs||i===Gs)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Va||i===Ga||i===ka)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wa||i===Xa)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===$a||i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Za)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ks||i===al||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ks)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bh||i===cl||i===ul||i===fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:GS,fragmentShader:kS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends Sr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const M=new WS,m=t.getContextAttributes();let d=null,R=null;const T=[],E=[],I=new Ze;let P=null;const L=new Xt;L.viewport=new st;const B=new Xt;B.viewport=new st;const b=[L,B],y=new dv;let D=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=T[te];return de===void 0&&(de=new ta,T[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=T[te];return de===void 0&&(de=new ta,T[te]=de),de.getGripSpace()},this.getHand=function(te){let de=T[te];return de===void 0&&(de=new ta,T[te]=de),de.getHandSpace()};function q(te){const de=E.indexOf(te.inputSource);if(de===-1)return;const Se=T[de];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",ue);for(let te=0;te<T.length;te++){const de=E[te];de!==null&&(E[te]=null,T[te].disconnect(de))}D=null,ee=null,M.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,R=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",ue),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,U=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?gr:ar,U=m.stencil?mr:Li);const oe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new Di(h.textureWidth,h.textureHeight,{format:cn,type:Vn,depthTexture:new zh(h.textureWidth,h.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Di(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(te){for(let de=0;de<te.removed.length;de++){const Se=te.removed[de],U=E.indexOf(Se);U>=0&&(E[U]=null,T[U].disconnect(Se))}for(let de=0;de<te.added.length;de++){const Se=te.added[de];let U=E.indexOf(Se);if(U===-1){for(let oe=0;oe<T.length;oe++)if(oe>=E.length){E.push(Se),U=oe;break}else if(E[oe]===null){E[oe]=Se,U=oe;break}if(U===-1)break}const ie=T[U];ie&&ie.connect(Se)}}const K=new V,re=new V;function H(te,de,Se){K.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(Se.matrixWorld);const U=K.distanceTo(re),ie=de.projectionMatrix.elements,oe=Se.projectionMatrix.elements,ae=ie[14]/(ie[10]-1),Ie=ie[14]/(ie[10]+1),A=(ie[9]+1)/ie[5],w=(ie[9]-1)/ie[5],_=(ie[8]-1)/ie[0],Q=(oe[8]+1)/oe[0],$=ae*_,W=ae*Q,Z=U/(-_+Q),le=Z*-_;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(Z),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ie[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const j=ae+Z,x=Ie+Z,g=$-le,C=W+(U-le),z=A*Ie/x*j,X=w*Ie/x*j;te.projectionMatrix.makePerspective(g,C,z,X,j,x),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,Se=te.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),y.near=B.near=L.near=de,y.far=B.far=L.far=Se,(D!==y.near||ee!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,ee=y.far),L.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,y.layers.mask=L.layers.mask|B.layers.mask;const U=te.parent,ie=y.cameras;me(y,U);for(let oe=0;oe<ie.length;oe++)me(ie[oe],U);ie.length===2?H(y,L,B):y.projectionMatrix.copy(L.projectionMatrix),Me(te,y,U)};function Me(te,de,Se){Se===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=hl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let we=null;function Pe(te,de){if(u=de.getViewerPose(c||o),v=de,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let U=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,U=!0);for(let ae=0;ae<Se.length;ae++){const Ie=Se[ae];let A=null;if(p!==null)A=p.getViewport(Ie);else{const _=f.getViewSubImage(h,Ie);A=_.viewport,ae===0&&(e.setRenderTargetTextures(R,_.colorTexture,h.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(R))}let w=b[ae];w===void 0&&(w=new Xt,w.layers.enable(ae),w.viewport=new st,b[ae]=w),w.matrix.fromArray(Ie.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ie.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(A.x,A.y,A.width,A.height),ae===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),U===!0&&y.cameras.push(w)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Se[0]);ae&&ae.isValid&&ae.texture&&M.init(e,ae,r.renderState)}}for(let Se=0;Se<T.length;Se++){const U=E[Se],ie=T[Se];U!==null&&ie!==void 0&&ie.update(U,de,c||o)}we&&we(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const qe=new Vh;qe.setAnimationLoop(Pe),this.setAnimationLoop=function(te){we=te},this.dispose=function(){}}}const xi=new Tn,qS=new ut;function YS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,R,T,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),M(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=e.get(d),T=R.envMap,E=R.envMapRotation;T&&(m.envMap.value=T,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(xi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $S(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const E=T.program;i.uniformBlockBinding(R,E)}function c(R,T){let E=r[R.id];E===void 0&&(v(R),E=u(R),r[R.id]=E,R.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(R,I);const P=e.render.frame;s[R.id]!==P&&(h(R),s[R.id]=P)}function u(R){const T=f();R.__bindingPointIndex=T;const E=n.createBuffer(),I=R.__size,P=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const T=r[R.id],E=R.uniforms,I=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,L=E.length;P<L;P++){const B=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,y=B.length;b<y;b++){const D=B[b];if(p(D,P,b,I)===!0){const ee=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let ne=0;for(let ue=0;ue<q.length;ue++){const K=q[ue],re=M(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,ee+ne,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,T,E,I){const P=R.value,L=T+"_"+E;if(I[L]===void 0)return typeof P=="number"||typeof P=="boolean"?I[L]=P:I[L]=P.clone(),!0;{const B=I[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return I[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function v(R){const T=R.uniforms;let E=0;const I=16;for(let L=0,B=T.length;L<B;L++){const b=Array.isArray(T[L])?T[L]:[T[L]];for(let y=0,D=b.length;y<D;y++){const ee=b[y],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,ue=q.length;ne<ue;ne++){const K=q[ne],re=M(K),H=E%I,me=H%re.boundary,Me=H+me;E+=me,Me!==0&&I-Me<re.storage&&(E+=I-Me),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=E,E+=re.storage}}}const P=E%I;return P>0&&(E+=I-P),R.__size=E,R.__cache={},this}function M(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class jS{constructor(e={}){const{canvas:t=T_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,d=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=ri,this.toneMappingExposure=1;const E=this;let I=!1,P=0,L=0,B=null,b=-1,y=null;const D=new st,ee=new st;let q=null;const ne=new Ke(0);let ue=0,K=t.width,re=t.height,H=1,me=null,Me=null;const we=new st(0,0,K,re),Pe=new st(0,0,K,re);let qe=!1;const te=new Wl;let de=!1,Se=!1;this.transmissionResolutionScale=1;const U=new ut,ie=new ut,oe=new V,ae=new st,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function w(){return B===null?H:1}let _=i;function Q(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),_===null){const F="webgl2";if(_=Q(F,S),_===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,W,Z,le,j,x,g,C,z,X,G,pe,ce,ge,Ue,fe,xe,Ce,Ne,_e,Fe,ze,ot,N;function Ee(){$=new sM(_),$.init(),ze=new VS(_,$),W=new Qx(_,$,e,ze),Z=new zS(_,$),W.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),le=new lM(_),j=new AS,x=new HS(_,$,Z,j,W,ze,le),g=new tM(E),C=new rM(E),z=new mv(_),ot=new Zx(_,z),X=new oM(_,z,le,ot),G=new uM(_,X,z,le),Ne=new cM(_,W,x),fe=new eM(j),pe=new bS(E,g,C,$,W,ot,fe),ce=new YS(E,j),ge=new RS,Ue=new US($),Ce=new Kx(E,g,C,Z,G,p,l),xe=new OS(E,G,W),N=new $S(_,le,W,Z),_e=new Jx(_,$,le),Fe=new aM(_,$,le),le.programs=pe.programs,E.capabilities=W,E.extensions=$,E.properties=j,E.renderLists=ge,E.shadowMap=xe,E.state=Z,E.info=le}Ee();const J=new XS(E,_);this.xr=J,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(K,re,!1))},this.getSize=function(S){return S.set(K,re)},this.setSize=function(S,F,k=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,re=F,t.width=Math.floor(S*H),t.height=Math.floor(F*H),k===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(K*H,re*H).floor()},this.setDrawingBufferSize=function(S,F,k){K=S,re=F,H=k,t.width=Math.floor(S*k),t.height=Math.floor(F*k),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(we)},this.setViewport=function(S,F,k,Y){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,F,k,Y),Z.viewport(D.copy(we).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Pe)},this.setScissor=function(S,F,k,Y){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,F,k,Y),Z.scissor(ee.copy(Pe).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(S){Z.setScissorTest(qe=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,F=!0,k=!0){let Y=0;if(S){let O=!1;if(B!==null){const he=B.texture.format;O=he===Gl||he===Vl||he===Hl}if(O){const he=B.texture.type,ye=he===Vn||he===Li||he===Jr||he===mr||he===Bl||he===zl,Ae=Ce.getClearColor(),Re=Ce.getClearAlpha(),Oe=Ae.r,Be=Ae.g,Le=Ae.b;ye?(v[0]=Oe,v[1]=Be,v[2]=Le,v[3]=Re,_.clearBufferuiv(_.COLOR,0,v)):(M[0]=Oe,M[1]=Be,M[2]=Le,M[3]=Re,_.clearBufferiv(_.COLOR,0,M))}else Y|=_.COLOR_BUFFER_BIT}F&&(Y|=_.DEPTH_BUFFER_BIT),k&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ce.dispose(),ge.dispose(),Ue.dispose(),j.dispose(),g.dispose(),C.dispose(),G.dispose(),ot.dispose(),N.dispose(),pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",jl),J.removeEventListener("sessionend",Kl),ui.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=le.autoReset,F=xe.enabled,k=xe.autoUpdate,Y=xe.needsUpdate,O=xe.type;Ee(),le.autoReset=S,xe.enabled=F,xe.autoUpdate=k,xe.needsUpdate=Y,xe.type=O}function Te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const F=S.target;F.removeEventListener("dispose",Ve),ft(F)}function ft(S){Et(S),j.remove(S)}function Et(S){const F=j.get(S).programs;F!==void 0&&(F.forEach(function(k){pe.releaseProgram(k)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,k,Y,O,he){F===null&&(F=Ie);const ye=O.isMesh&&O.matrixWorld.determinant()<0,Ae=qh(S,F,k,Y,O);Z.setMaterial(Y,ye);let Re=k.index,Oe=1;if(Y.wireframe===!0){if(Re=X.getWireframeAttribute(k),Re===void 0)return;Oe=2}const Be=k.drawRange,Le=k.attributes.position;let Ye=Be.start*Oe,Je=(Be.start+Be.count)*Oe;he!==null&&(Ye=Math.max(Ye,he.start*Oe),Je=Math.min(Je,(he.start+he.count)*Oe)),Re!==null?(Ye=Math.max(Ye,0),Je=Math.min(Je,Re.count)):Le!=null&&(Ye=Math.max(Ye,0),Je=Math.min(Je,Le.count));const pt=Je-Ye;if(pt<0||pt===1/0)return;ot.setup(O,Y,Ae,k,Re);let ht,$e=_e;if(Re!==null&&(ht=z.get(Re),$e=Fe,$e.setIndex(ht)),O.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*w()),$e.setMode(_.LINES)):$e.setMode(_.TRIANGLES);else if(O.isLine){let De=Y.linewidth;De===void 0&&(De=1),Z.setLineWidth(De*w()),O.isLineSegments?$e.setMode(_.LINES):O.isLineLoop?$e.setMode(_.LINE_LOOP):$e.setMode(_.LINE_STRIP)}else O.isPoints?$e.setMode(_.POINTS):O.isSprite&&$e.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)$e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($.get("WEBGL_multi_draw"))$e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,St=O._multiDrawCounts,Qe=O._multiDrawCount,en=Re?z.get(Re).bytesPerElement:1,Ni=j.get(Y).currentProgram.getUniforms();for(let Ht=0;Ht<Qe;Ht++)Ni.setValue(_,"_gl_DrawID",Ht),$e.render(De[Ht]/en,St[Ht])}else if(O.isInstancedMesh)$e.renderInstances(Ye,pt,O.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,St=Math.min(k.instanceCount,De);$e.renderInstances(Ye,pt,St)}else $e.render(Ye,pt)};function it(S,F,k){S.transparent===!0&&S.side===Fn&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,cs(S,F,k),S.side=si,S.needsUpdate=!0,cs(S,F,k),S.side=Fn):cs(S,F,k)}this.compile=function(S,F,k=null){k===null&&(k=S),d=Ue.get(k),d.init(F),T.push(d),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const Y=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const Ae=he[ye];it(Ae,k,O),Y.add(Ae)}else it(he,k,O),Y.add(he)}),T.pop(),d=null,Y},this.compileAsync=function(S,F,k=null){const Y=this.compile(S,F,k);return new Promise(O=>{function he(){if(Y.forEach(function(ye){j.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){O(S);return}setTimeout(he,10)}$.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qt=null;function bn(S){Qt&&Qt(S)}function jl(){ui.stop()}function Kl(){ui.start()}const ui=new Vh;ui.setAnimationLoop(bn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){Qt=S,J.setAnimationLoop(S),S===null?ui.stop():ui.start()},J.addEventListener("sessionstart",jl),J.addEventListener("sessionend",Kl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,F,B),d=Ue.get(S,T.length),d.init(F),T.push(d),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(ie),Se=this.localClippingEnabled,de=fe.init(this.clippingPlanes,Se),m=ge.get(S,R.length),m.init(),R.push(m),J.enabled===!0&&J.isPresenting===!0){const he=E.xr.getDepthSensingMesh();he!==null&&_o(he,F,-1/0,E.sortObjects)}_o(S,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(me,Me),A=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,A&&Ce.addToRenderList(m,S),this.info.render.frame++,de===!0&&fe.beginShadows();const k=d.state.shadowsArray;xe.render(k,S,F),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){const he=F.cameras;if(O.length>0)for(let ye=0,Ae=he.length;ye<Ae;ye++){const Re=he[ye];Jl(Y,O,S,Re)}A&&Ce.render(S);for(let ye=0,Ae=he.length;ye<Ae;ye++){const Re=he[ye];Zl(m,S,Re,Re.viewport)}}else O.length>0&&Jl(Y,O,S,F),A&&Ce.render(S),Zl(m,S,F);B!==null&&L===0&&(x.updateMultisampleRenderTarget(B),x.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(E,S,F),ot.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(d=T[T.length-1],de===!0&&fe.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function _o(S,F,k,Y){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){Y&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const ye=G.update(S),Ae=S.material;Ae.visible&&m.push(S,ye,Ae,k,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){const ye=G.update(S),Ae=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ae.copy(ye.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(ie)),Array.isArray(Ae)){const Re=ye.groups;for(let Oe=0,Be=Re.length;Oe<Be;Oe++){const Le=Re[Oe],Ye=Ae[Le.materialIndex];Ye&&Ye.visible&&m.push(S,ye,Ye,k,ae.z,Le)}}else Ae.visible&&m.push(S,ye,Ae,k,ae.z,null)}}const he=S.children;for(let ye=0,Ae=he.length;ye<Ae;ye++)_o(he[ye],F,k,Y)}function Zl(S,F,k,Y){const O=S.opaque,he=S.transmissive,ye=S.transparent;d.setupLightsView(k),de===!0&&fe.setGlobalState(E.clippingPlanes,k),Y&&Z.viewport(D.copy(Y)),O.length>0&&ls(O,F,k),he.length>0&&ls(he,F,k),ye.length>0&&ls(ye,F,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Jl(S,F,k,Y){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Di(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?ns:Vn,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const he=d.state.transmissionRenderTarget[Y.id],ye=Y.viewport||D;he.setSize(ye.z*E.transmissionResolutionScale,ye.w*E.transmissionResolutionScale);const Ae=E.getRenderTarget();E.setRenderTarget(he),E.getClearColor(ne),ue=E.getClearAlpha(),ue<1&&E.setClearColor(16777215,.5),E.clear(),A&&Ce.render(k);const Re=E.toneMapping;E.toneMapping=ri;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),de===!0&&fe.setGlobalState(E.clippingPlanes,Y),ls(S,k,Y),x.updateMultisampleRenderTarget(he),x.updateRenderTargetMipmap(he),$.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,Ye=F.length;Le<Ye;Le++){const Je=F[Le],pt=Je.object,ht=Je.geometry,$e=Je.material,De=Je.group;if($e.side===Fn&&pt.layers.test(Y.layers)){const St=$e.side;$e.side=Bt,$e.needsUpdate=!0,Ql(pt,k,Y,ht,$e,De),$e.side=St,$e.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(he),x.updateRenderTargetMipmap(he))}E.setRenderTarget(Ae),E.setClearColor(ne,ue),Oe!==void 0&&(Y.viewport=Oe),E.toneMapping=Re}function ls(S,F,k){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,he=S.length;O<he;O++){const ye=S[O],Ae=ye.object,Re=ye.geometry,Oe=Y===null?ye.material:Y,Be=ye.group;Ae.layers.test(k.layers)&&Ql(Ae,F,k,Re,Oe,Be)}}function Ql(S,F,k,Y,O,he){S.onBeforeRender(E,F,k,Y,O,he),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(E,F,k,Y,S,he),O.transparent===!0&&O.side===Fn&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,E.renderBufferDirect(k,F,Y,O,S,he),O.side=si,O.needsUpdate=!0,E.renderBufferDirect(k,F,Y,O,S,he),O.side=Fn):E.renderBufferDirect(k,F,Y,O,S,he),S.onAfterRender(E,F,k,Y,O,he)}function cs(S,F,k){F.isScene!==!0&&(F=Ie);const Y=j.get(S),O=d.state.lights,he=d.state.shadowsArray,ye=O.state.version,Ae=pe.getParameters(S,O.state,he,F,k),Re=pe.getProgramCacheKey(Ae);let Oe=Y.programs;Y.environment=S.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(S.isMeshStandardMaterial?C:g).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Ve),Oe=new Map,Y.programs=Oe);let Be=Oe.get(Re);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===ye)return tc(S,Ae),Be}else Ae.uniforms=pe.getUniforms(S),S.onBeforeCompile(Ae,E),Be=pe.acquireProgram(Ae,Re),Oe.set(Re,Be),Y.uniforms=Ae.uniforms;const Le=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=fe.uniform),tc(S,Ae),Y.needsLights=$h(S),Y.lightsStateVersion=ye,Y.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function ec(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ws.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function tc(S,F){const k=j.get(S);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function qh(S,F,k,Y,O){F.isScene!==!0&&(F=Ie),x.resetTextureUnits();const he=F.fog,ye=Y.isMeshStandardMaterial?F.environment:null,Ae=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:_r,Re=(Y.isMeshStandardMaterial?C:g).get(Y.envMap||ye),Oe=Y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let pt=ri;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(pt=E.toneMapping);const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$e=ht!==void 0?ht.length:0,De=j.get(Y),St=d.state.lights;if(de===!0&&(Se===!0||S!==y)){const Lt=S===y&&Y.id===b;fe.setState(Y,S,Lt)}let Qe=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==St.state.version||De.outputColorSpace!==Ae||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Re||Y.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==fe.numPlanes||De.numIntersection!==fe.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==Ye||De.morphColors!==Je||De.toneMapping!==pt||De.morphTargetsCount!==$e)&&(Qe=!0):(Qe=!0,De.__version=Y.version);let en=De.currentProgram;Qe===!0&&(en=cs(Y,F,O));let Ni=!1,Ht=!1,yr=!1;const ct=en.getUniforms(),Yt=De.uniforms;if(Z.useProgram(en.program)&&(Ni=!0,Ht=!0,yr=!0),Y.id!==b&&(b=Y.id,Ht=!0),Ni||y!==S){Z.buffers.depth.getReversed()?(U.copy(S.projectionMatrix),A_(U),w_(U),ct.setValue(_,"projectionMatrix",U)):ct.setValue(_,"projectionMatrix",S.projectionMatrix),ct.setValue(_,"viewMatrix",S.matrixWorldInverse);const Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(_,oe.setFromMatrixPosition(S.matrixWorld)),W.logarithmicDepthBuffer&&ct.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ct.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ht=!0,yr=!0)}if(O.isSkinnedMesh){ct.setOptional(_,O,"bindMatrix"),ct.setOptional(_,O,"bindMatrixInverse");const Lt=O.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ct.setValue(_,"boneTexture",Lt.boneTexture,x))}O.isBatchedMesh&&(ct.setOptional(_,O,"batchingTexture"),ct.setValue(_,"batchingTexture",O._matricesTexture,x),ct.setOptional(_,O,"batchingIdTexture"),ct.setValue(_,"batchingIdTexture",O._indirectTexture,x),ct.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&ct.setValue(_,"batchingColorTexture",O._colorsTexture,x));const $t=k.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Ne.update(O,k,en),(Ht||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,ct.setValue(_,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Yt.envMap.value=Re,Yt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),Ht&&(ct.setValue(_,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&Yh(Yt,yr),he&&Y.fog===!0&&ce.refreshFogUniforms(Yt,he),ce.refreshMaterialUniforms(Yt,Y,H,re,d.state.transmissionRenderTarget[S.id]),Ws.upload(_,ec(De),Yt,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ws.upload(_,ec(De),Yt,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ct.setValue(_,"center",O.center),ct.setValue(_,"modelViewMatrix",O.modelViewMatrix),ct.setValue(_,"normalMatrix",O.normalMatrix),ct.setValue(_,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Lt=Y.uniformsGroups;for(let Ft=0,vo=Lt.length;Ft<vo;Ft++){const fi=Lt[Ft];N.update(fi,en),N.bind(fi,en)}}return en}function Yh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function $h(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,F,k){j.get(S.texture).__webglTexture=F,j.get(S.depthTexture).__webglTexture=k;const Y=j.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=k===void 0,Y.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const k=j.get(S);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const jh=_.createFramebuffer();this.setRenderTarget=function(S,F=0,k=0){B=S,P=F,L=k;let Y=!0,O=null,he=!1,ye=!1;if(S){const Re=j.get(S);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(Re.__hasExternalTextures)x.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Le=S.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&j.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const Be=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][k]:O=Be[F],he=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?O=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[k]:O=Be,D.copy(S.viewport),ee.copy(S.scissor),q=S.scissorTest}else D.copy(we).multiplyScalar(H).floor(),ee.copy(Pe).multiplyScalar(H).floor(),q=qe;if(k!==0&&(O=jh),Z.bindFramebuffer(_.FRAMEBUFFER,O)&&Y&&Z.drawBuffers(S,O),Z.viewport(D),Z.scissor(ee),Z.setScissorTest(q),he){const Re=j.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,k)}else if(ye){const Re=j.get(S.texture),Oe=F;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Re.__webglTexture,k,Oe)}else if(S!==null&&k!==0){const Re=j.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Re.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(S,F,k,Y,O,he,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Z.bindFramebuffer(_.FRAMEBUFFER,Ae);try{const Re=S.texture,Oe=Re.format,Be=Re.type;if(!W.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-Y&&k>=0&&k<=S.height-O&&_.readPixels(F,k,Y,O,ze.convert(Oe),ze.convert(Be),he)}finally{const Re=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,F,k,Y,O,he,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const Re=S.texture,Oe=Re.format,Be=Re.type;if(!W.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-Y&&k>=0&&k<=S.height-O){Z.bindFramebuffer(_.FRAMEBUFFER,Ae);const Le=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.bufferData(_.PIXEL_PACK_BUFFER,he.byteLength,_.STREAM_READ),_.readPixels(F,k,Y,O,ze.convert(Oe),ze.convert(Be),0);const Ye=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,Ye);const Je=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await b_(_,Je,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,he),_.deleteBuffer(Le),_.deleteSync(Je),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,k=0){S.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-k),O=Math.floor(S.image.width*Y),he=Math.floor(S.image.height*Y),ye=F!==null?F.x:0,Ae=F!==null?F.y:0;x.setTexture2D(S,0),_.copyTexSubImage2D(_.TEXTURE_2D,k,0,0,ye,Ae,O,he),Z.unbindTexture()};const Kh=_.createFramebuffer(),Zh=_.createFramebuffer();this.copyTextureToTexture=function(S,F,k=null,Y=null,O=0,he=null){S.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],F=arguments[2],he=arguments[3]||0,k=null),he===null&&(O!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let ye,Ae,Re,Oe,Be,Le,Ye,Je,pt;const ht=S.isCompressedTexture?S.mipmaps[he]:S.image;if(k!==null)ye=k.max.x-k.min.x,Ae=k.max.y-k.min.y,Re=k.isBox3?k.max.z-k.min.z:1,Oe=k.min.x,Be=k.min.y,Le=k.isBox3?k.min.z:0;else{const $t=Math.pow(2,-O);ye=Math.floor(ht.width*$t),Ae=Math.floor(ht.height*$t),S.isDataArrayTexture?Re=ht.depth:S.isData3DTexture?Re=Math.floor(ht.depth*$t):Re=1,Oe=0,Be=0,Le=0}Y!==null?(Ye=Y.x,Je=Y.y,pt=Y.z):(Ye=0,Je=0,pt=0);const $e=ze.convert(F.format),De=ze.convert(F.type);let St;F.isData3DTexture?(x.setTexture3D(F,0),St=_.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),St=_.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),St=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=_.getParameter(_.UNPACK_ROW_LENGTH),en=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Ni=_.getParameter(_.UNPACK_SKIP_PIXELS),Ht=_.getParameter(_.UNPACK_SKIP_ROWS),yr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,ht.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ht.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Oe),_.pixelStorei(_.UNPACK_SKIP_ROWS,Be),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Le);const ct=S.isDataArrayTexture||S.isData3DTexture,Yt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const $t=j.get(S),Lt=j.get(F),Ft=j.get($t.__renderTarget),vo=j.get(Lt.__renderTarget);Z.bindFramebuffer(_.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let fi=0;fi<Re;fi++)ct&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(S).__webglTexture,O,Le+fi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(F).__webglTexture,he,pt+fi)),_.blitFramebuffer(Oe,Be,ye,Ae,Ye,Je,ye,Ae,_.DEPTH_BUFFER_BIT,_.NEAREST);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||j.has(S)){const $t=j.get(S),Lt=j.get(F);Z.bindFramebuffer(_.READ_FRAMEBUFFER,Kh),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,Zh);for(let Ft=0;Ft<Re;Ft++)ct?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,$t.__webglTexture,O,Le+Ft):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,$t.__webglTexture,O),Yt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Lt.__webglTexture,he,pt+Ft):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Lt.__webglTexture,he),O!==0?_.blitFramebuffer(Oe,Be,ye,Ae,Ye,Je,ye,Ae,_.COLOR_BUFFER_BIT,_.NEAREST):Yt?_.copyTexSubImage3D(St,he,Ye,Je,pt+Ft,Oe,Be,ye,Ae):_.copyTexSubImage2D(St,he,Ye,Je,Oe,Be,ye,Ae);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Yt?S.isDataTexture||S.isData3DTexture?_.texSubImage3D(St,he,Ye,Je,pt,ye,Ae,Re,$e,De,ht.data):F.isCompressedArrayTexture?_.compressedTexSubImage3D(St,he,Ye,Je,pt,ye,Ae,Re,$e,ht.data):_.texSubImage3D(St,he,Ye,Je,pt,ye,Ae,Re,$e,De,ht):S.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,he,Ye,Je,ye,Ae,$e,De,ht.data):S.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,he,Ye,Je,ht.width,ht.height,$e,ht.data):_.texSubImage2D(_.TEXTURE_2D,he,Ye,Je,ye,Ae,$e,De,ht);_.pixelStorei(_.UNPACK_ROW_LENGTH,Qe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,en),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ni),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ht),_.pixelStorei(_.UNPACK_SKIP_IMAGES,yr),he===0&&F.generateMipmaps&&_.generateMipmap(St),Z.unbindTexture()},this.copyTextureToTexture3D=function(S,F,k=null,Y=null,O=0){return S.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,k,Y,O)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){P=0,L=0,B=null,Z.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const KS=Ui({name:"Earth",setup(){const n=bi(null);let e,t,i,r,s;const o=()=>{if(!n.value)return;e=new Q_,e.background=null,t=new Xt(75,1,.1,1e3),i=new jS({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),i.setSize(200,200),i.setClearColor(0,0),n.value.appendChild(i.domElement);const l=new Xl(1,32,32),u=new lv().load("textures/earthmap1k.jpg",()=>{i&&e&&t&&i.render(e,t)}),f=new nv({map:u,bumpMap:u,bumpScale:.1,shininess:15});r=new xn(l,f),e.add(r);const h=new hv(16777215,3);e.add(h);const p=new Tu(16777215,1.2);p.position.set(5,3,5),e.add(p);const v=new Tu(16777215,.8);v.position.set(-5,-3,2),e.add(v),t.position.z=2.5,i.render(e,t)},a=()=>{s=requestAnimationFrame(a),r&&(r.rotation.y+=.005),i&&e&&t&&i.render(e,t)};return Rl(()=>{o(),a()}),Cf(()=>{s&&cancelAnimationFrame(s)}),{container:n}}}),ZS={ref:"container",class:"earth-canvas"};function JS(n,e,t,i,r,s){return ln(),ni("div",ZS,null,512)}const QS=Mr(KS,[["render",JS],["__scopeId","data-v-9d98cde0"]]),eE=Ui({name:"River",emits:["toggleInfo"]}),tE="/textures/CarsonREM-3.png",nE={class:"river-container"},iE={class:"river-segments"};function rE(n,e,t,i,r,s){return ln(),ni("div",nE,[Mt("div",iE,[(ln(),ni(mn,null,sp(10,o=>Mt("div",{key:o,class:so(["river-segment",`segment-${o}`])},e[1]||(e[1]=[Mt("img",{src:tE,alt:"River",class:"river-image"},null,-1)]),2)),64)),Mt("button",{onClick:e[0]||(e[0]=o=>n.$emit("toggleInfo")),class:"info-button","aria-label":"Show information"},e[2]||(e[2]=[Mt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Mt("circle",{cx:"12",cy:"12",r:"10"}),Mt("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),Mt("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)]))])])}const sE=Mr(eE,[["render",rE],["__scopeId","data-v-65e3892f"]]),oE=Ui({name:"TypingAnimation",components:{Earth:QS,River:sE},setup(){const n=bi(null),e=bi(!1),t=bi(!1),i=bi(!1);return Rl(()=>{const r=document.createElement("link");r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=VT323&display=swap",document.head.appendChild(r),n.value&&new Ng(n.value,{strings:["hello world!","hello ^1000"],typeSpeed:80,backSpeed:50,showCursor:!0,cursorChar:"|",smartBackspace:!0,startDelay:300,backDelay:500,onStringTyped:s=>{var o;s===1&&(e.value=!0,(o=document.querySelector(".typed-cursor"))==null||o.remove(),setTimeout(()=>{t.value=!0},10))}})}),{typingElement:n,showEarth:e,showRiver:t,isInfoOpen:i}}}),aE={class:"typing-container"},lE={class:"text-earth-container"},cE={class:"pixel-text"},uE={ref:"typingElement"},fE={key:0,class:"earth-container fade-scale-in"};function hE(n,e,t,i,r,s){const o=Yr("Earth"),a=Yr("River");return ln(),ni("div",aE,[Mt("div",lE,[Mt("div",cE,[Mt("span",uE,null,512)]),n.showEarth?(ln(),ni("div",fE,[Rt(o)])):wo("",!0)]),n.showRiver?(ln(),Pl(a,{key:0,onToggleInfo:e[0]||(e[0]=l=>n.isInfoOpen=!0)})):wo("",!0),n.isInfoOpen?(ln(),ni("div",{key:1,class:"modal-overlay",onClick:e[3]||(e[3]=l=>n.isInfoOpen=!1)},[Mt("div",{class:"modal-content",onClick:e[2]||(e[2]=gm(()=>{},["stop"]))},[Mt("button",{class:"close-button",onClick:e[1]||(e[1]=l=>n.isInfoOpen=!1),"aria-label":"Close"},"×"),e[4]||(e[4]=Mt("h2",{class:"modal-title"},"About this image",-1)),e[5]||(e[5]=Mt("p",{class:"modal-text"},[Ma(" Relative Elevation Model of the Carson River. Inspired by "),Mt("a",{href:"https://dancoecarto.com/",target:"_blank",rel:"noopener noreferrer"}," Dan Coe "),Ma(" ’s work. ")],-1))])])):wo("",!0)])}const dE=Mr(oE,[["render",hE],["__scopeId","data-v-b94f49ba"]]),pE=Ui({name:"HelloWorld",components:{TypingAnimation:dE}}),mE={class:"hello-world"};function gE(n,e,t,i,r,s){const o=Yr("TypingAnimation");return ln(),ni("div",mE,[Rt(o)])}const _E=Mr(pE,[["render",gE],["__scopeId","data-v-22972419"]]),vE=Ui({name:"HomeView",components:{HelloWorld:_E}});function xE(n,e,t,i,r,s){const o=Yr("HelloWorld");return ln(),ni("main",null,[Rt(o)])}const ME=Mr(vE,[["render",xE],["__scopeId","data-v-ad5de120"]]),SE=Lg({history:og("/"),routes:[{path:"/",name:"home",component:ME},{path:"/about",name:"about",component:()=>Cm(()=>import("./AboutView-CEcksSp0.js"),__vite__mapDeps([0,1]))}]}),$l=xm(Am);$l.use(ym());$l.use(SE);$l.mount("#app");export{Mr as _,Mt as a,ni as c,ln as o};
