(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ll(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},_s=[],Cn=()=>{},Uh=()=>!1,ga=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dl=n=>n.startsWith("onUpdate:"),bt=Object.assign,Il=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Nh=Object.prototype.hasOwnProperty,nt=(n,e)=>Nh.call(n,e),Fe=Array.isArray,vs=n=>_a(n)==="[object Map]",Mf=n=>_a(n)==="[object Set]",ke=n=>typeof n=="function",xt=n=>typeof n=="string",Mi=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",yf=n=>(ht(n)||ke(n))&&ke(n.then)&&ke(n.catch),Ef=Object.prototype.toString,_a=n=>Ef.call(n),Fh=n=>_a(n).slice(8,-1),bf=n=>_a(n)==="[object Object]",Ul=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Oh=/-(\w)/g,rn=va(n=>n.replace(Oh,(e,t)=>t?t.toUpperCase():"")),Bh=/\B([A-Z])/g,ji=va(n=>n.replace(Bh,"-$1").toLowerCase()),xa=va(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ua=va(n=>n?`on${xa(n)}`:""),mi=(n,e)=>!Object.is(n,e),Na=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},zh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Hh=n=>{const e=xt(n)?Number(n):NaN;return isNaN(e)?n:e};let Sc;const Sa=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nl(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=xt(i)?Wh(i):Nl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(xt(n)||ht(n))return n}const kh=/;(?![^(]*\))/g,Vh=/:([^]+)/,Gh=/\/\*[^]*?\*\//g;function Wh(n){const e={};return n.replace(Gh,"").split(kh).forEach(t=>{if(t){const i=t.split(Vh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zn(n){let e="";if(xt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Zn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qh=Ll(Xh);function Af(n){return!!n||n===""}const wf=n=>!!(n&&n.__v_isRef===!0),Rf=n=>xt(n)?n:n==null?"":Fe(n)||ht(n)&&(n.toString===Ef||!ke(n.toString))?wf(n)?Rf(n.value):JSON.stringify(n,Cf,2):String(n),Cf=(n,e)=>wf(e)?Cf(n,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Fa(i,r)+" =>"]=s,t),{})}:Mf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fa(t))}:Mi(e)?Fa(e):ht(e)&&!Fe(e)&&!bf(e)?String(e):e,Fa=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Pf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $h(n){return new Pf(n)}function Yh(){return Yt}let ct;const Oa=new WeakSet;class Lf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||If(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mc(this),Uf(this);const e=ct,t=gn;ct=this,gn=!0;try{return this.fn()}finally{Nf(this),ct=e,gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Mc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ro(this)&&this.run()}get dirty(){return Ro(this)}}let Df=0,js,Ks;function If(n,e=!1){if(n.flags|=8,e){n.next=Ks,Ks=n;return}n.next=js,js=n}function Fl(){Df++}function Ol(){if(--Df>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bl(i),jh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ro(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===sr))return;n.globalVersion=sr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ro(n)){n.flags&=-3;return}const t=ct,i=gn;ct=n,gn=!0;try{Uf(n);const s=n.fn(n._value);(e.version===0||mi(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ct=t,gn=i,Nf(n),n.flags&=-3}}function Bl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let gn=!0;const Of=[];function yi(){Of.push(gn),gn=!1}function Ei(){const n=Of.pop();gn=n===void 0?!0:n}function Mc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let sr=0;class Kh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!gn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new Kh(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,Bf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,sr++,this.notify(e)}notify(e){Fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ol()}}}function Bf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Co=new WeakMap,Xi=Symbol(""),Po=Symbol(""),rr=Symbol("");function Pt(n,e,t){if(gn&&ct){let i=Co.get(n);i||Co.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new zl),s.map=i,s.key=t),s.track()}}function Wn(n,e,t,i,s,r){const a=Co.get(n);if(!a){sr++;return}const o=l=>{l&&l.trigger()};if(Fl(),e==="clear")a.forEach(o);else{const l=Fe(n),u=l&&Ul(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===rr||!Mi(d)&&d>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(rr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Xi)),vs(n)&&o(a.get(Po)));break;case"delete":l||(o(a.get(Xi)),vs(n)&&o(a.get(Po)));break;case"set":vs(n)&&o(a.get(Xi));break}}Ol()}function Zi(n){const e=Ze(n);return e===n?e:(Pt(e,"iterate",rr),_n(n)?e:e.map(Nt))}function Hl(n){return Pt(n=Ze(n),"iterate",rr),n}const Zh={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,Nt)},concat(...n){return Zi(this).concat(...n.map(e=>Fe(e)?Zi(e):e))},entries(){return Ba(this,"entries",n=>(n[1]=Nt(n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(Nt),arguments)},find(n,e){return Un(this,"find",n,e,Nt,arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,Nt,arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return Zi(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...n){return Os(this,"push",n)},reduce(n,...e){return yc(this,"reduce",n,e)},reduceRight(n,...e){return yc(this,"reduceRight",n,e)},shift(){return Os(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return Os(this,"splice",n)},toReversed(){return Zi(this).toReversed()},toSorted(n){return Zi(this).toSorted(n)},toSpliced(...n){return Zi(this).toSpliced(...n)},unshift(...n){return Os(this,"unshift",n)},values(){return Ba(this,"values",Nt)}};function Ba(n,e,t){const i=Hl(n),s=i[e]();return i!==n&&!_n(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Jh=Array.prototype;function Un(n,e,t,i,s,r){const a=Hl(n),o=a!==n&&!_n(n),l=a[e];if(l!==Jh[e]){const f=l.apply(n,r);return o?Nt(f):f}let u=t;a!==n&&(o?u=function(f,d){return t.call(this,Nt(f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&s?s(c):c}function yc(n,e,t,i){const s=Hl(n);let r=t;return s!==n&&(_n(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,Nt(o),l,n)}),s[e](r,...i)}function za(n,e,t){const i=Ze(n);Pt(i,"iterate",rr);const s=i[e](...t);return(s===-1||s===!1)&&Gl(t[0])?(t[0]=Ze(t[0]),i[e](...t)):s}function Os(n,e,t=[]){yi(),Fl();const i=Ze(n)[e].apply(n,t);return Ol(),Ei(),i}const Qh=Ll("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function ep(n){Mi(n)||(n=String(n));const e=Ze(this);return Pt(e,"has",n),e.hasOwnProperty(n)}class Hf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?up:Wf:r?Gf:Vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!s){let l;if(a&&(l=Zh[t]))return l;if(t==="hasOwnProperty")return ep}const o=Reflect.get(e,t,Lt(e)?e:i);return(Mi(t)?zf.has(t):Qh(t))||(s||Pt(e,"get",t),r)?o:Lt(o)?a&&Ul(t)?o:o.value:ht(o)?s?qf(o):Ma(o):o}}class kf extends Hf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=qi(r);if(!_n(i)&&!qi(i)&&(r=Ze(r),i=Ze(i)),!Fe(e)&&Lt(r)&&!Lt(i))return l?!1:(r.value=i,!0)}const a=Fe(e)&&Ul(t)?Number(t)<e.length:nt(e,t),o=Reflect.set(e,t,i,Lt(e)?e:s);return e===Ze(s)&&(a?mi(i,r)&&Wn(e,"set",t,i):Wn(e,"add",t,i)),o}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Wn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!zf.has(t))&&Pt(e,"has",t),i}ownKeys(e){return Pt(e,"iterate",Fe(e)?"length":Xi),Reflect.ownKeys(e)}}class tp extends Hf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const np=new kf,ip=new tp,sp=new kf(!0);const Lo=n=>n,Tr=n=>Reflect.getPrototypeOf(n);function rp(n,e,t){return function(...i){const s=this.__v_raw,r=Ze(s),a=vs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=s[n](...i),c=t?Lo:e?Do:Nt;return!e&&Pt(r,"iterate",l?Po:Xi),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function Ar(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ap(n,e){const t={get(s){const r=this.__v_raw,a=Ze(r),o=Ze(s);n||(mi(s,o)&&Pt(a,"get",s),Pt(a,"get",o));const{has:l}=Tr(a),u=e?Lo:n?Do:Nt;if(l.call(a,s))return u(r.get(s));if(l.call(a,o))return u(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Pt(Ze(s),"iterate",Xi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=Ze(r),o=Ze(s);return n||(mi(s,o)&&Pt(a,"has",s),Pt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=Ze(o),u=e?Lo:n?Do:Nt;return!n&&Pt(l,"iterate",Xi),o.forEach((c,f)=>s.call(r,u(c),u(f),a))}};return bt(t,n?{add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear")}:{add(s){!e&&!_n(s)&&!qi(s)&&(s=Ze(s));const r=Ze(this);return Tr(r).has.call(r,s)||(r.add(s),Wn(r,"add",s,s)),this},set(s,r){!e&&!_n(r)&&!qi(r)&&(r=Ze(r));const a=Ze(this),{has:o,get:l}=Tr(a);let u=o.call(a,s);u||(s=Ze(s),u=o.call(a,s));const c=l.call(a,s);return a.set(s,r),u?mi(r,c)&&Wn(a,"set",s,r):Wn(a,"add",s,r),this},delete(s){const r=Ze(this),{has:a,get:o}=Tr(r);let l=a.call(r,s);l||(s=Ze(s),l=a.call(r,s)),o&&o.call(r,s);const u=r.delete(s);return l&&Wn(r,"delete",s,void 0),u},clear(){const s=Ze(this),r=s.size!==0,a=s.clear();return r&&Wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=rp(s,n,e)}),t}function kl(n,e){const t=ap(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const op={get:kl(!1,!1)},lp={get:kl(!1,!0)},cp={get:kl(!0,!1)};const Vf=new WeakMap,Gf=new WeakMap,Wf=new WeakMap,up=new WeakMap;function fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dp(n){return n.__v_skip||!Object.isExtensible(n)?0:fp(Fh(n))}function Ma(n){return qi(n)?n:Vl(n,!1,np,op,Vf)}function Xf(n){return Vl(n,!1,sp,lp,Gf)}function qf(n){return Vl(n,!0,ip,cp,Wf)}function Vl(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=dp(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Zs(n){return qi(n)?Zs(n.__v_raw):!!(n&&n.__v_isReactive)}function qi(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function $f(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Tf(n,"__v_skip",!0),n}const Nt=n=>ht(n)?Ma(n):n,Do=n=>ht(n)?qf(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function Ht(n){return Yf(n,!1)}function hp(n){return Yf(n,!0)}function Yf(n,e){return Lt(n)?n:new pp(n,e)}class pp{constructor(e,t){this.dep=new zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:Nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||qi(e);e=i?e:Ze(e),mi(e,t)&&(this._rawValue=e,this._value=i?e:Nt(e),this.dep.trigger())}}function xs(n){return Lt(n)?n.value:n}const mp={get:(n,e,t)=>e==="__v_raw"?n:xs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Lt(s)&&!Lt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function jf(n){return Zs(n)?n:new Proxy(n,mp)}class gp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return If(this,!0),!0}get value(){const e=this.dep.track();return Ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _p(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new gp(i,s,t)}const wr={},oa=new WeakMap;let Oi;function vp(n,e=!1,t=Oi){if(t){let i=oa.get(t);i||oa.set(t,i=[]),i.push(n)}}function xp(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,u=E=>s?E:_n(E)||s===!1||s===0?di(E,1):di(E);let c,f,d,p,_=!1,S=!1;if(Lt(n)?(f=()=>n.value,_=_n(n)):Zs(n)?(f=()=>u(n),_=!0):Fe(n)?(S=!0,_=n.some(E=>Zs(E)||_n(E)),f=()=>n.map(E=>{if(Lt(E))return E.value;if(Zs(E))return u(E);if(ke(E))return l?l(E,2):E()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){yi();try{d()}finally{Ei()}}const E=Oi;Oi=c;try{return l?l(n,3,[p]):n(p)}finally{Oi=E}}:f=Cn,e&&s){const E=f,I=s===!0?1/0:s;f=()=>di(E(),I)}const m=Yh(),h=()=>{c.stop(),m&&m.active&&Il(m.effects,c)};if(r&&e){const E=e;e=(...I)=>{E(...I),h()}}let A=S?new Array(n.length).fill(wr):wr;const T=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const I=c.run();if(s||_||(S?I.some((D,C)=>mi(D,A[C])):mi(I,A))){d&&d();const D=Oi;Oi=c;try{const C=[I,A===wr?void 0:S&&A[0]===wr?[]:A,p];l?l(e,3,C):e(...C),A=I}finally{Oi=D}}}else c.run()};return o&&o(T),c=new Lf(f),c.scheduler=a?()=>a(T,!1):T,p=E=>vp(E,!1,c),d=c.onStop=()=>{const E=oa.get(c);if(E){if(l)l(E,4);else for(const I of E)I();oa.delete(c)}},e?i?T(!0):A=c.run():a?a(T.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function di(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Lt(n))di(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(Mf(n)||vs(n))n.forEach(i=>{di(i,e,t)});else if(bf(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(n,e,t,i){try{return i?n(...i):n()}catch(s){ya(s,e,t)}}function xn(n,e,t,i){if(ke(n)){const s=mr(n,e,t,i);return s&&yf(s)&&s.catch(r=>{ya(r,e,t)}),s}if(Fe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(xn(n[r],e,t,i));return s}}function ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ut;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(r){yi(),mr(r,null,10,[n,l,u]),Ei();return}}Sp(n,t,s,i,a)}function Sp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ft=[];let En=-1;const Ss=[];let li=null,ds=0;const Kf=Promise.resolve();let la=null;function Zf(n){const e=la||Kf;return n?e.then(this?n.bind(this):n):e}function Mp(n){let e=En+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,s=Ft[i],r=ar(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Wl(n){if(!(n.flags&1)){const e=ar(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=ar(t)?Ft.push(n):Ft.splice(Mp(e),0,n),n.flags|=1,Jf()}}function Jf(){la||(la=Kf.then(ed))}function yp(n){Fe(n)?Ss.push(...n):li&&n.id===-1?li.splice(ds+1,0,n):n.flags&1||(Ss.push(n),n.flags|=1),Jf()}function Ec(n,e,t=En+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qf(n){if(Ss.length){const e=[...new Set(Ss)].sort((t,i)=>ar(t)-ar(i));if(Ss.length=0,li){li.push(...e);return}for(li=e,ds=0;ds<li.length;ds++){const t=li[ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,ds=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ed(n){try{for(En=0;En<Ft.length;En++){const e=Ft[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ft.length;En++){const e=Ft[En];e&&(e.flags&=-2)}En=-1,Ft.length=0,Qf(),la=null,(Ft.length||Ss.length)&&ed()}}let sn=null,td=null;function ca(n){const e=sn;return sn=n,td=n&&n.type.__scopeId||null,e}function hi(n,e=sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Uc(-1);const r=ca(e);let a;try{a=n(...s)}finally{ca(r),i._d&&Uc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function wi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(yi(),xn(l,t,8,[n.el,o,n,e]),Ei())}}const Ep=Symbol("_vte"),nd=n=>n.__isTeleport,ci=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function bp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ta(()=>{n.isMounted=!0}),Xl(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},sd=n=>{const e=n.subTree;return e.component?sd(e.component):e},Tp={name:"BaseTransition",props:id,setup(n,{slots:e}){const t=Mm(),i=bp();return()=>{const s=e.default&&od(e.default(),!0);if(!s||!s.length)return;const r=rd(s),a=Ze(n),{mode:o}=a;if(i.isLeaving)return Ha(r);const l=bc(r);if(!l)return Ha(r);let u=Io(l,a,i,t,f=>u=f);l.type!==kt&&or(l,u);let c=t.subTree&&bc(t.subTree);if(c&&c.type!==kt&&!Hi(l,c)&&sd(t).type!==kt){let f=Io(c,a,i,t);if(or(c,f),o==="out-in"&&l.type!==kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Ha(r);o==="in-out"&&l.type!==kt?f.delayLeave=(d,p,_)=>{const S=ad(i,c);S[String(c.key)]=c,d[ci]=()=>{p(),d[ci]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function rd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==kt){e=t;break}}return e}const Ap=Tp;function ad(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Io(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:m,onAppear:h,onAfterAppear:A,onAppearCancelled:T}=e,E=String(n.key),I=ad(t,n),D=(b,M)=>{b&&xn(b,i,9,M)},C=(b,M)=>{const L=M[1];D(b,M),Fe(b)?b.every(O=>O.length<=1)&&L():b.length<=1&&L()},B={mode:a,persisted:o,beforeEnter(b){let M=l;if(!t.isMounted)if(r)M=m||l;else return;b[ci]&&b[ci](!0);const L=I[E];L&&Hi(n,L)&&L.el[ci]&&L.el[ci](),D(M,[b])},enter(b){let M=u,L=c,O=f;if(!t.isMounted)if(r)M=h||u,L=A||c,O=T||f;else return;let H=!1;const ne=b[Rr]=re=>{H||(H=!0,re?D(O,[b]):D(L,[b]),B.delayedLeave&&B.delayedLeave(),b[Rr]=void 0)};M?C(M,[b,ne]):ne()},leave(b,M){const L=String(n.key);if(b[Rr]&&b[Rr](!0),t.isUnmounting)return M();D(d,[b]);let O=!1;const H=b[ci]=ne=>{O||(O=!0,M(),ne?D(S,[b]):D(_,[b]),b[ci]=void 0,I[L]===n&&delete I[L])};I[L]=n,p?C(p,[b,H]):H()},clone(b){const M=Io(b,e,t,i,s);return s&&s(M),M}};return B}function Ha(n){if(Ea(n))return n=vi(n),n.children=null,n}function bc(n){if(!Ea(n))return nd(n.type)&&n.children?rd(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function or(n,e){n.shapeFlag&6&&n.component?(n.transition=e,or(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function od(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===bn?(a.patchFlag&128&&s++,i=i.concat(od(a.children,e,o))):(e||a.type!==kt)&&i.push(o!=null?vi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function an(n,e){return ke(n)?bt({name:n.name},e,{setup:n}):n}function ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ua(n,e,t,i,s=!1){if(Fe(n)){n.forEach((_,S)=>ua(_,e&&(Fe(e)?e[S]:e),t,i,s));return}if(Js(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ua(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Yl(i.component):i.el,a=s?null:r,{i:o,r:l}=n,u=e&&e.r,c=o.refs===ut?o.refs={}:o.refs,f=o.setupState,d=Ze(f),p=f===ut?()=>!1:_=>nt(d,_);if(u!=null&&u!==l&&(xt(u)?(c[u]=null,p(u)&&(f[u]=null)):Lt(u)&&(u.value=null)),ke(l))mr(l,o,12,[a,c]);else{const _=xt(l),S=Lt(l);if(_||S){const m=()=>{if(n.f){const h=_?p(l)?f[l]:c[l]:l.value;s?Fe(h)&&Il(h,r):Fe(h)?h.includes(r)||h.push(r):_?(c[l]=[r],p(l)&&(f[l]=c[l])):(l.value=[r],n.k&&(c[n.k]=l.value))}else _?(c[l]=a,p(l)&&(f[l]=a)):S&&(l.value=a,n.k&&(c[n.k]=a))};a?(m.id=-1,$t(m,t)):m()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Js=n=>!!n.type.__asyncLoader,Ea=n=>n.type.__isKeepAlive;function wp(n,e){cd(n,"a",e)}function Rp(n,e){cd(n,"da",e)}function cd(n,e,t=At){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ba(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ea(s.parent.vnode)&&Cp(i,e,t,s),s=s.parent}}function Cp(n,e,t,i){const s=ba(e,n,i,!0);ud(()=>{Il(i[e],s)},t)}function ba(n,e,t=At,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{yi();const o=gr(t),l=xn(e,t,n,a);return o(),Ei(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(e,t=At)=>{(!cr||n==="sp")&&ba(n,(...i)=>e(...i),t)},Pp=Qn("bm"),Ta=Qn("m"),Lp=Qn("bu"),Dp=Qn("u"),Xl=Qn("bum"),ud=Qn("um"),Ip=Qn("sp"),Up=Qn("rtg"),Np=Qn("rtc");function Fp(n,e=At){ba("ec",n,e)}const Op="components";function Kt(n,e){return zp(Op,n,!0,e)||n}const Bp=Symbol.for("v-ndc");function zp(n,e,t=!0,i=!1){const s=sn||At;if(s){const r=s.type;{const o=Am(r,!1);if(o&&(o===e||o===rn(e)||o===xa(rn(e))))return r}const a=Tc(s[n]||r[n],e)||Tc(s.appContext[n],e);return!a&&i?r:a}}function Tc(n,e){return n&&(n[e]||n[rn(e)]||n[xa(rn(e))])}const Uo=n=>n?Dd(n)?Yl(n):Uo(n.parent):null,Qs=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uo(n.parent),$root:n=>Uo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dd(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=Zf.bind(n.proxy)),$watch:n=>am.bind(n)}),ka=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),Hp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let u;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ka(i,e))return a[e]=1,i[e];if(s!==ut&&nt(s,e))return a[e]=2,s[e];if((u=n.propsOptions[0])&&nt(u,e))return a[e]=3,r[e];if(t!==ut&&nt(t,e))return a[e]=4,t[e];No&&(a[e]=0)}}const c=Qs[e];let f,d;if(c)return e==="$attrs"&&Pt(n.attrs,"get",""),c(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==ut&&nt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,nt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ka(s,e)?(s[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==ut&&nt(n,a)||ka(e,a)||(o=r[0])&&nt(o,a)||nt(i,a)||nt(Qs,a)||nt(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let No=!0;function kp(n){const e=dd(n),t=n.proxy,i=n.ctx;No=!1,e.beforeCreate&&wc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:S,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:T,unmounted:E,render:I,renderTracked:D,renderTriggered:C,errorCaptured:B,serverPrefetch:b,expose:M,inheritAttrs:L,components:O,directives:H,filters:ne}=e;if(u&&Vp(u,i,null),a)for(const ee in a){const V=a[ee];ke(V)&&(i[ee]=V.bind(t))}if(s){const ee=s.call(t,t);ht(ee)&&(n.data=Ma(ee))}if(No=!0,r)for(const ee in r){const V=r[ee],me=ke(V)?V.bind(t,t):ke(V.get)?V.get.bind(t,t):Cn,Se=!ke(V)&&ke(V.set)?V.set.bind(t):Cn,we=hn({get:me,set:Se});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>we.value,set:Pe=>we.value=Pe})}if(o)for(const ee in o)fd(o[ee],i,t,ee);if(l){const ee=ke(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(V=>{Zr(V,ee[V])})}c&&wc(c,n,"c");function Z(ee,V){Fe(V)?V.forEach(me=>ee(me.bind(t))):V&&ee(V.bind(t))}if(Z(Pp,f),Z(Ta,d),Z(Lp,p),Z(Dp,_),Z(wp,S),Z(Rp,m),Z(Fp,B),Z(Np,D),Z(Up,C),Z(Xl,A),Z(ud,E),Z(Ip,b),Fe(M))if(M.length){const ee=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(ee,V,{get:()=>t[V],set:me=>t[V]=me})})}else n.exposed||(n.exposed={});I&&n.render===Cn&&(n.render=I),L!=null&&(n.inheritAttrs=L),O&&(n.components=O),H&&(n.directives=H),b&&ld(n)}function Vp(n,e,t=Cn){Fe(n)&&(n=Fo(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=jn(s.from||i,s.default,!0):r=jn(s.from||i):r=jn(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function wc(n,e,t){xn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fd(n,e,t,i){let s=i.includes(".")?Ad(t,i):()=>t[i];if(xt(n)){const r=e[n];ke(r)&&er(s,r)}else if(ke(n))er(s,n.bind(t));else if(ht(n))if(Fe(n))n.forEach(r=>fd(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&er(s,r,n)}}function dd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>fa(l,u,a,!0)),fa(l,e,a)),ht(e)&&r.set(e,l),l}function fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fa(n,r,t,!0),s&&s.forEach(a=>fa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Gp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Gp={data:Rc,props:Cc,emits:Cc,methods:qs,computed:qs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:qs,directives:qs,watch:Xp,provide:Rc,inject:Wp};function Rc(n,e){return e?n?function(){return bt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Wp(n,e){return qs(Fo(n),Fo(e))}function Fo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function qs(n,e){return n?bt(Object.create(null),n,e):e}function Cc(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:bt(Object.create(null),Ac(n),Ac(e??{})):e}function Xp(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function hd(){return{app:null,config:{isNativeTag:Uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function $p(n,e){return function(i,s=null){ke(i)||(i=bt({},i)),s!=null&&!ht(s)&&(s=null);const r=hd(),a=new WeakSet,o=[];let l=!1;const u=r.app={_uid:qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rm,get config(){return r.config},set config(c){},use(c,...f){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(u,...f)):ke(c)&&(a.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,d){if(!l){const p=u._ceVNode||ot(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Yl(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(xn(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=Ms;Ms=u;try{return c()}finally{Ms=f}}};return u}}let Ms=null;function Zr(n,e){if(At){let t=At.provides;const i=At.parent&&At.parent.provides;i===t&&(t=At.provides=Object.create(i)),t[n]=e}}function jn(n,e,t=!1){const i=At||sn;if(i||Ms){const s=Ms?Ms._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const pd={},md=()=>Object.create(pd),gd=n=>Object.getPrototypeOf(n)===pd;function Yp(n,e,t,i=!1){const s={},r=md();n.propsDefaults=Object.create(null),_d(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Xf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function jp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=Ze(s),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Aa(n.emitsOptions,d))continue;const p=e[d];if(l)if(nt(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const _=rn(d);s[_]=Oo(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{_d(n,e,s,r)&&(u=!0);let c;for(const f in o)(!e||!nt(e,f)&&((c=ji(f))===f||!nt(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(s[f]=Oo(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!nt(e,f))&&(delete r[f],u=!0)}u&&Wn(n.attrs,"set","")}function _d(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ys(l))continue;const u=e[l];let c;s&&nt(s,c=rn(l))?!r||!r.includes(c)?t[c]=u:(o||(o={}))[c]=u:Aa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(r){const l=Ze(t),u=o||ut;for(let c=0;c<r.length;c++){const f=r[c];t[f]=Oo(s,l,f,u[f],n,!nt(u,f))}}return a}function Oo(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=nt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const c=gr(s);i=u[t]=l.call(null,e),c()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ji(t))&&(i=!0))}return i}const Kp=new WeakMap;function vd(n,e,t=!1){const i=t?Kp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!ke(n)){const c=f=>{l=!0;const[d,p]=vd(f,e,!0);bt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return ht(n)&&i.set(n,_s),_s;if(Fe(r))for(let c=0;c<r.length;c++){const f=rn(r[c]);Pc(f)&&(a[f]=ut)}else if(r)for(const c in r){const f=rn(c);if(Pc(f)){const d=r[c],p=a[f]=Fe(d)||ke(d)?{type:d}:bt({},d),_=p.type;let S=!1,m=!0;if(Fe(_))for(let h=0;h<_.length;++h){const A=_[h],T=ke(A)&&A.name;if(T==="Boolean"){S=!0;break}else T==="String"&&(m=!1)}else S=ke(_)&&_.name==="Boolean";p[0]=S,p[1]=m,(S||nt(p,"default"))&&o.push(f)}}const u=[a,o];return ht(n)&&i.set(n,u),u}function Pc(n){return n[0]!=="$"&&!Ys(n)}const xd=n=>n[0]==="_"||n==="$stable",ql=n=>Fe(n)?n.map(Tn):[Tn(n)],Zp=(n,e,t)=>{if(e._n)return e;const i=hi((...s)=>ql(e(...s)),t);return i._c=!1,i},Sd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(xd(s))continue;const r=n[s];if(ke(r))e[s]=Zp(s,r,i);else if(r!=null){const a=ql(r);e[s]=()=>a}}},Md=(n,e)=>{const t=ql(e);n.slots.default=()=>t},yd=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Jp=(n,e,t)=>{const i=n.slots=md();if(n.vnode.shapeFlag&32){const s=e._;s?(yd(i,e,t),t&&Tf(i,"_",s,!0)):Sd(e,i)}else e&&Md(n,e)},Qp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ut;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:yd(s,e,t):(r=!e.$stable,Sd(e,s)),a=e}else e&&(Md(n,e),a={default:1});if(r)for(const o in s)!xd(o)&&a[o]==null&&delete s[o]},$t=hm;function em(n){return tm(n)}function tm(n,e){const t=Sa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:p=Cn,insertStaticContent:_}=n,S=(w,R,v,te=null,j=null,q=null,J=void 0,ce=null,K=!!R.dynamicChildren)=>{if(w===R)return;w&&!Hi(w,R)&&(te=U(w),Pe(w,j,q,!0),w=null),R.patchFlag===-2&&(K=!1,R.dynamicChildren=null);const{type:x,ref:g,shapeFlag:P}=R;switch(x){case wa:m(w,R,v,te);break;case kt:h(w,R,v,te);break;case Jr:w==null&&A(R,v,te,J);break;case bn:O(w,R,v,te,j,q,J,ce,K);break;default:P&1?I(w,R,v,te,j,q,J,ce,K):P&6?H(w,R,v,te,j,q,J,ce,K):(P&64||P&128)&&x.process(w,R,v,te,j,q,J,ce,K,le)}g!=null&&j&&ua(g,w&&w.ref,q,R||w,!R)},m=(w,R,v,te)=>{if(w==null)i(R.el=o(R.children),v,te);else{const j=R.el=w.el;R.children!==w.children&&u(j,R.children)}},h=(w,R,v,te)=>{w==null?i(R.el=l(R.children||""),v,te):R.el=w.el},A=(w,R,v,te)=>{[w.el,w.anchor]=_(w.children,R,v,te,w.el,w.anchor)},T=({el:w,anchor:R},v,te)=>{let j;for(;w&&w!==R;)j=d(w),i(w,v,te),w=j;i(R,v,te)},E=({el:w,anchor:R})=>{let v;for(;w&&w!==R;)v=d(w),s(w),w=v;s(R)},I=(w,R,v,te,j,q,J,ce,K)=>{R.type==="svg"?J="svg":R.type==="math"&&(J="mathml"),w==null?D(R,v,te,j,q,J,ce,K):b(w,R,j,q,J,ce,K)},D=(w,R,v,te,j,q,J,ce)=>{let K,x;const{props:g,shapeFlag:P,transition:k,dirs:$}=w;if(K=w.el=a(w.type,q,g&&g.is,g),P&8?c(K,w.children):P&16&&B(w.children,K,null,te,j,Va(w,q),J,ce),$&&wi(w,null,te,"created"),C(K,w,w.scopeId,J,te),g){for(const pe in g)pe!=="value"&&!Ys(pe)&&r(K,pe,null,g[pe],q,te);"value"in g&&r(K,"value",null,g.value,q),(x=g.onVnodeBeforeMount)&&yn(x,te,w)}$&&wi(w,null,te,"beforeMount");const W=nm(j,k);W&&k.beforeEnter(K),i(K,R,v),((x=g&&g.onVnodeMounted)||W||$)&&$t(()=>{x&&yn(x,te,w),W&&k.enter(K),$&&wi(w,null,te,"mounted")},j)},C=(w,R,v,te,j)=>{if(v&&p(w,v),te)for(let q=0;q<te.length;q++)p(w,te[q]);if(j){let q=j.subTree;if(R===q||Rd(q.type)&&(q.ssContent===R||q.ssFallback===R)){const J=j.vnode;C(w,J,J.scopeId,J.slotScopeIds,j.parent)}}},B=(w,R,v,te,j,q,J,ce,K=0)=>{for(let x=K;x<w.length;x++){const g=w[x]=ce?ui(w[x]):Tn(w[x]);S(null,g,R,v,te,j,q,J,ce)}},b=(w,R,v,te,j,q,J)=>{const ce=R.el=w.el;let{patchFlag:K,dynamicChildren:x,dirs:g}=R;K|=w.patchFlag&16;const P=w.props||ut,k=R.props||ut;let $;if(v&&Ri(v,!1),($=k.onVnodeBeforeUpdate)&&yn($,v,R,w),g&&wi(R,w,v,"beforeUpdate"),v&&Ri(v,!0),(P.innerHTML&&k.innerHTML==null||P.textContent&&k.textContent==null)&&c(ce,""),x?M(w.dynamicChildren,x,ce,v,te,Va(R,j),q):J||V(w,R,ce,null,v,te,Va(R,j),q,!1),K>0){if(K&16)L(ce,P,k,v,j);else if(K&2&&P.class!==k.class&&r(ce,"class",null,k.class,j),K&4&&r(ce,"style",P.style,k.style,j),K&8){const W=R.dynamicProps;for(let pe=0;pe<W.length;pe++){const ue=W[pe],ge=P[ue],Ue=k[ue];(Ue!==ge||ue==="value")&&r(ce,ue,ge,Ue,j,v)}}K&1&&w.children!==R.children&&c(ce,R.children)}else!J&&x==null&&L(ce,P,k,v,j);(($=k.onVnodeUpdated)||g)&&$t(()=>{$&&yn($,v,R,w),g&&wi(R,w,v,"updated")},te)},M=(w,R,v,te,j,q,J)=>{for(let ce=0;ce<R.length;ce++){const K=w[ce],x=R[ce],g=K.el&&(K.type===bn||!Hi(K,x)||K.shapeFlag&70)?f(K.el):v;S(K,x,g,null,te,j,q,J,!0)}},L=(w,R,v,te,j)=>{if(R!==v){if(R!==ut)for(const q in R)!Ys(q)&&!(q in v)&&r(w,q,R[q],null,j,te);for(const q in v){if(Ys(q))continue;const J=v[q],ce=R[q];J!==ce&&q!=="value"&&r(w,q,ce,J,j,te)}"value"in v&&r(w,"value",R.value,v.value,j)}},O=(w,R,v,te,j,q,J,ce,K)=>{const x=R.el=w?w.el:o(""),g=R.anchor=w?w.anchor:o("");let{patchFlag:P,dynamicChildren:k,slotScopeIds:$}=R;$&&(ce=ce?ce.concat($):$),w==null?(i(x,v,te),i(g,v,te),B(R.children||[],v,g,j,q,J,ce,K)):P>0&&P&64&&k&&w.dynamicChildren?(M(w.dynamicChildren,k,v,j,q,J,ce),(R.key!=null||j&&R===j.subTree)&&Ed(w,R,!0)):V(w,R,v,g,j,q,J,ce,K)},H=(w,R,v,te,j,q,J,ce,K)=>{R.slotScopeIds=ce,w==null?R.shapeFlag&512?j.ctx.activate(R,v,te,J,K):ne(R,v,te,j,q,J,K):re(w,R,K)},ne=(w,R,v,te,j,q,J)=>{const ce=w.component=Sm(w,te,j);if(Ea(w)&&(ce.ctx.renderer=le),ym(ce,!1,J),ce.asyncDep){if(j&&j.registerDep(ce,Z,J),!w.el){const K=ce.subTree=ot(kt);h(null,K,R,v)}}else Z(ce,w,R,v,j,q,J)},re=(w,R,v)=>{const te=R.component=w.component;if(fm(w,R,v))if(te.asyncDep&&!te.asyncResolved){ee(te,R,v);return}else te.next=R,te.update();else R.el=w.el,te.vnode=R},Z=(w,R,v,te,j,q,J)=>{const ce=()=>{if(w.isMounted){let{next:P,bu:k,u:$,parent:W,vnode:pe}=w;{const xe=bd(w);if(xe){P&&(P.el=pe.el,ee(w,P,J)),xe.asyncDep.then(()=>{w.isUnmounted||ce()});return}}let ue=P,ge;Ri(w,!1),P?(P.el=pe.el,ee(w,P,J)):P=pe,k&&Na(k),(ge=P.props&&P.props.onVnodeBeforeUpdate)&&yn(ge,W,P,pe),Ri(w,!0);const Ue=Dc(w),fe=w.subTree;w.subTree=Ue,S(fe,Ue,f(fe.el),U(fe),w,j,q),P.el=Ue.el,ue===null&&dm(w,Ue.el),$&&$t($,j),(ge=P.props&&P.props.onVnodeUpdated)&&$t(()=>yn(ge,W,P,pe),j)}else{let P;const{el:k,props:$}=R,{bm:W,m:pe,parent:ue,root:ge,type:Ue}=w,fe=Js(R);Ri(w,!1),W&&Na(W),!fe&&(P=$&&$.onVnodeBeforeMount)&&yn(P,ue,R),Ri(w,!0);{ge.ce&&ge.ce._injectChildStyle(Ue);const xe=w.subTree=Dc(w);S(null,xe,v,te,w,j,q),R.el=xe.el}if(pe&&$t(pe,j),!fe&&(P=$&&$.onVnodeMounted)){const xe=R;$t(()=>yn(P,ue,xe),j)}(R.shapeFlag&256||ue&&Js(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&$t(w.a,j),w.isMounted=!0,R=v=te=null}};w.scope.on();const K=w.effect=new Lf(ce);w.scope.off();const x=w.update=K.run.bind(K),g=w.job=K.runIfDirty.bind(K);g.i=w,g.id=w.uid,K.scheduler=()=>Wl(g),Ri(w,!0),x()},ee=(w,R,v)=>{R.component=w;const te=w.vnode.props;w.vnode=R,w.next=null,jp(w,R.props,te,v),Qp(w,R.children,v),yi(),Ec(w),Ei()},V=(w,R,v,te,j,q,J,ce,K=!1)=>{const x=w&&w.children,g=w?w.shapeFlag:0,P=R.children,{patchFlag:k,shapeFlag:$}=R;if(k>0){if(k&128){Se(x,P,v,te,j,q,J,ce,K);return}else if(k&256){me(x,P,v,te,j,q,J,ce,K);return}}$&8?(g&16&&Me(x,j,q),P!==x&&c(v,P)):g&16?$&16?Se(x,P,v,te,j,q,J,ce,K):Me(x,j,q,!0):(g&8&&c(v,""),$&16&&B(P,v,te,j,q,J,ce,K))},me=(w,R,v,te,j,q,J,ce,K)=>{w=w||_s,R=R||_s;const x=w.length,g=R.length,P=Math.min(x,g);let k;for(k=0;k<P;k++){const $=R[k]=K?ui(R[k]):Tn(R[k]);S(w[k],$,v,null,j,q,J,ce,K)}x>g?Me(w,j,q,!0,!1,P):B(R,v,te,j,q,J,ce,K,P)},Se=(w,R,v,te,j,q,J,ce,K)=>{let x=0;const g=R.length;let P=w.length-1,k=g-1;for(;x<=P&&x<=k;){const $=w[x],W=R[x]=K?ui(R[x]):Tn(R[x]);if(Hi($,W))S($,W,v,null,j,q,J,ce,K);else break;x++}for(;x<=P&&x<=k;){const $=w[P],W=R[k]=K?ui(R[k]):Tn(R[k]);if(Hi($,W))S($,W,v,null,j,q,J,ce,K);else break;P--,k--}if(x>P){if(x<=k){const $=k+1,W=$<g?R[$].el:te;for(;x<=k;)S(null,R[x]=K?ui(R[x]):Tn(R[x]),v,W,j,q,J,ce,K),x++}}else if(x>k)for(;x<=P;)Pe(w[x],j,q,!0),x++;else{const $=x,W=x,pe=new Map;for(x=W;x<=k;x++){const _e=R[x]=K?ui(R[x]):Tn(R[x]);_e.key!=null&&pe.set(_e.key,x)}let ue,ge=0;const Ue=k-W+1;let fe=!1,xe=0;const Ce=new Array(Ue);for(x=0;x<Ue;x++)Ce[x]=0;for(x=$;x<=P;x++){const _e=w[x];if(ge>=Ue){Pe(_e,j,q,!0);continue}let Oe;if(_e.key!=null)Oe=pe.get(_e.key);else for(ue=W;ue<=k;ue++)if(Ce[ue-W]===0&&Hi(_e,R[ue])){Oe=ue;break}Oe===void 0?Pe(_e,j,q,!0):(Ce[Oe-W]=x+1,Oe>=xe?xe=Oe:fe=!0,S(_e,R[Oe],v,null,j,q,J,ce,K),ge++)}const Ne=fe?im(Ce):_s;for(ue=Ne.length-1,x=Ue-1;x>=0;x--){const _e=W+x,Oe=R[_e],He=_e+1<g?R[_e+1].el:te;Ce[x]===0?S(null,Oe,v,He,j,q,J,ce,K):fe&&(ue<0||x!==Ne[ue]?we(Oe,v,He,2):ue--)}}},we=(w,R,v,te,j=null)=>{const{el:q,type:J,transition:ce,children:K,shapeFlag:x}=w;if(x&6){we(w.component.subTree,R,v,te);return}if(x&128){w.suspense.move(R,v,te);return}if(x&64){J.move(w,R,v,le);return}if(J===bn){i(q,R,v);for(let P=0;P<K.length;P++)we(K[P],R,v,te);i(w.anchor,R,v);return}if(J===Jr){T(w,R,v);return}if(te!==2&&x&1&&ce)if(te===0)ce.beforeEnter(q),i(q,R,v),$t(()=>ce.enter(q),j);else{const{leave:P,delayLeave:k,afterLeave:$}=ce,W=()=>i(q,R,v),pe=()=>{P(q,()=>{W(),$&&$()})};k?k(q,W,pe):pe()}else i(q,R,v)},Pe=(w,R,v,te=!1,j=!1)=>{const{type:q,props:J,ref:ce,children:K,dynamicChildren:x,shapeFlag:g,patchFlag:P,dirs:k,cacheIndex:$}=w;if(P===-2&&(j=!1),ce!=null&&ua(ce,null,v,w,!0),$!=null&&(R.renderCache[$]=void 0),g&256){R.ctx.deactivate(w);return}const W=g&1&&k,pe=!Js(w);let ue;if(pe&&(ue=J&&J.onVnodeBeforeUnmount)&&yn(ue,R,w),g&6)he(w.component,v,te);else{if(g&128){w.suspense.unmount(v,te);return}W&&wi(w,null,R,"beforeUnmount"),g&64?w.type.remove(w,R,v,le,te):x&&!x.hasOnce&&(q!==bn||P>0&&P&64)?Me(x,R,v,!1,!0):(q===bn&&P&384||!j&&g&16)&&Me(K,R,v),te&&qe(w)}(pe&&(ue=J&&J.onVnodeUnmounted)||W)&&$t(()=>{ue&&yn(ue,R,w),W&&wi(w,null,R,"unmounted")},v)},qe=w=>{const{type:R,el:v,anchor:te,transition:j}=w;if(R===bn){ie(v,te);return}if(R===Jr){E(w);return}const q=()=>{s(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:J,delayLeave:ce}=j,K=()=>J(v,q);ce?ce(w.el,q,K):K()}else q()},ie=(w,R)=>{let v;for(;w!==R;)v=d(w),s(w),w=v;s(R)},he=(w,R,v)=>{const{bum:te,scope:j,job:q,subTree:J,um:ce,m:K,a:x}=w;Lc(K),Lc(x),te&&Na(te),j.stop(),q&&(q.flags|=8,Pe(J,w,R,v)),ce&&$t(ce,R),$t(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Me=(w,R,v,te=!1,j=!1,q=0)=>{for(let J=q;J<w.length;J++)Pe(w[J],R,v,te,j)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=d(w.anchor||w.el),v=R&&R[Ep];return v?d(v):R};let se=!1;const oe=(w,R,v)=>{w==null?R._vnode&&Pe(R._vnode,null,null,!0):S(R._vnode||null,w,R,null,null,null,v),R._vnode=w,se||(se=!0,Ec(),Qf(),se=!1)},le={p:S,um:Pe,m:we,r:qe,mt:ne,mc:B,pc:V,pbc:M,n:U,o:n};return{render:oe,hydrate:void 0,createApp:$p(oe)}}function Va({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function nm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ed(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ui(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Ed(a,o)),o.type===wa&&(o.el=a.el)}}function im(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<u?r=o+1:a=o;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function bd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bd(e)}function Lc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const sm=Symbol.for("v-scx"),rm=()=>jn(sm);function er(n,e,t){return Td(n,e,t)}function Td(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:a}=t,o=bt({},t),l=e&&i||!e&&r!=="post";let u;if(cr){if(r==="sync"){const p=rm();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Cn,p.resume=Cn,p.pause=Cn,p}}const c=At;o.call=(p,_,S)=>xn(p,c,_,S);let f=!1;r==="post"?o.scheduler=p=>{$t(p,c&&c.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Wl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=xp(n,e,o);return cr&&(u?u.push(d):l&&d()),d}function am(n,e,t){const i=this.proxy,s=xt(n)?n.includes(".")?Ad(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const a=gr(this),o=Td(s,r.bind(i),t);return a(),o}function Ad(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rn(e)}Modifiers`]||n[`${ji(e)}Modifiers`];function lm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),a=r&&om(i,e.slice(7));a&&(a.trim&&(s=t.map(c=>xt(c)?c.trim():c)),a.number&&(s=t.map(zh)));let o,l=i[o=Ua(e)]||i[o=Ua(rn(e))];!l&&r&&(l=i[o=Ua(ji(e))]),l&&xn(l,n,6,s);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,xn(u,n,6,s)}}function wd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!ke(n)){const l=u=>{const c=wd(u,e,!0);c&&(o=!0,bt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ht(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>a[l]=null):bt(a,r),ht(n)&&i.set(n,a),a)}function Aa(n,e){return!n||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,ji(e))||nt(n,e))}function Dc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:p,ctx:_,inheritAttrs:S}=n,m=ca(n);let h,A;try{if(t.shapeFlag&4){const E=s||i,I=E;h=Tn(u.call(I,E,c,f,p,d,_)),A=o}else{const E=e;h=Tn(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),A=e.props?o:cm(o)}}catch(E){tr.length=0,ya(E,n,1),h=ot(kt)}let T=h;if(A&&S!==!1){const E=Object.keys(A),{shapeFlag:I}=T;E.length&&I&7&&(r&&E.some(Dl)&&(A=um(A,r)),T=vi(T,A,!1,!0))}return t.dirs&&(T=vi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&or(T,t.transition),h=T,ca(m),h}const cm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ga(t))&&((e||(e={}))[t]=n[t]);return e},um=(n,e)=>{const t={};for(const i in n)(!Dl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ic(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(a[d]!==i[d]&&!Aa(u,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ic(i,a,u):!0:!!a;return!1}function Ic(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Aa(t,r))return!0}return!1}function dm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rd=n=>n.__isSuspense;function hm(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):yp(n)}const bn=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Jr=Symbol.for("v-stc"),tr=[];let Zt=null;function dt(n=!1){tr.push(Zt=n?null:[])}function pm(){tr.pop(),Zt=tr[tr.length-1]||null}let lr=1;function Uc(n,e=!1){lr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Cd(n){return n.dynamicChildren=lr>0?Zt||_s:null,pm(),lr>0&&Zt&&Zt.push(n),n}function Et(n,e,t,i,s,r){return Cd(it(n,e,t,i,s,r,!0))}function ms(n,e,t,i,s){return Cd(ot(n,e,t,i,s,!0))}function da(n){return n?n.__v_isVNode===!0:!1}function Hi(n,e){return n.type===e.type&&n.key===e.key}const Pd=({key:n})=>n??null,Qr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Lt(n)||ke(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function it(n,e=null,t=null,i=0,s=null,r=n===bn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pd(e),ref:e&&Qr(e),scopeId:td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return o?($l(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),lr>0&&!a&&Zt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Zt.push(l),l}const ot=mm;function mm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bp)&&(n=kt),da(n)){const o=vi(n,e,!0);return t&&$l(o,t),lr>0&&!r&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag=-2,o}if(wm(n)&&(n=n.__vccOpts),e){e=gm(e);let{class:o,style:l}=e;o&&!xt(o)&&(e.class=Zn(o)),ht(l)&&(Gl(l)&&!Fe(l)&&(l=bt({},l)),e.style=Nl(l))}const a=xt(n)?1:Rd(n)?128:nd(n)?64:ht(n)?4:ke(n)?2:0;return it(n,e,t,i,s,a,r,!0)}function gm(n){return n?Gl(n)||gd(n)?bt({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,u=e?_m(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Pd(u),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Qr(e)):[r,Qr(e)]:Qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&or(c,l.clone(c)),c}function Xn(n=" ",e=0){return ot(wa,null,n,e)}function Ld(n,e){const t=ot(Jr,null,n);return t.staticCount=e,t}function dn(n="",e=!1){return e?(dt(),ms(kt,null,n)):ot(kt,null,n)}function Tn(n){return n==null||typeof n=="boolean"?ot(kt):Fe(n)?ot(bn,null,n.slice()):da(n)?ui(n):ot(wa,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function $l(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$l(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gd(e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[Xn(e)]):t=8);n.children=e,n.shapeFlag|=t}function _m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Zn([e.class,i.class]));else if(s==="style")e.style=Nl([e.style,i.style]);else if(ga(s)){const r=e[s],a=i[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function yn(n,e,t,i=null){xn(n,e,7,[t,i])}const vm=hd();let xm=0;function Sm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vm,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(i,s),emitsOptions:wd(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lm.bind(null,r),n.ce&&n.ce(r),r}let At=null;const Mm=()=>At||sn;let ha,Bo;{const n=Sa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ha=e("__VUE_INSTANCE_SETTERS__",t=>At=t),Bo=e("__VUE_SSR_SETTERS__",t=>cr=t)}const gr=n=>{const e=At;return ha(n),n.scope.on(),()=>{n.scope.off(),ha(e)}},Nc=()=>{At&&At.scope.off(),ha(null)};function Dd(n){return n.vnode.shapeFlag&4}let cr=!1;function ym(n,e=!1,t=!1){e&&Bo(e);const{props:i,children:s}=n.vnode,r=Dd(n);Yp(n,i,r,e),Jp(n,s,t);const a=r?Em(n,e):void 0;return e&&Bo(!1),a}function Em(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hp);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?Tm(n):null,r=gr(n),a=mr(i,n,0,[n.props,s]),o=yf(a);if(Ei(),r(),(o||n.sp)&&!Js(n)&&ld(n),o){if(a.then(Nc,Nc),e)return a.then(l=>{Fc(n,l)}).catch(l=>{ya(l,n,0)});n.asyncDep=a}else Fc(n,a)}else Id(n)}function Fc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=jf(e)),Id(n)}function Id(n,e,t){const i=n.type;n.render||(n.render=i.render||Cn);{const s=gr(n);yi();try{kp(n)}finally{Ei(),s()}}}const bm={get(n,e){return Pt(n,"get",""),n[e]}};function Tm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,bm),slots:n.slots,emit:n.emit,expose:e}}function Yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jf($f(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qs)return Qs[t](n)},has(e,t){return t in e||t in Qs}})):n.proxy}function Am(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function wm(n){return ke(n)&&"__vccOpts"in n}const hn=(n,e)=>_p(n,e,cr);function jl(n,e,t){const i=arguments.length;return i===2?ht(e)&&!Fe(e)?da(e)?ot(n,null,[e]):ot(n,e):ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&da(t)&&(t=[t]),ot(n,e,t))}const Rm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zo;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{zo=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ud=zo?n=>zo.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Pm="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Bc=Gn&&Gn.createElement("template"),Lm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Gn.createElementNS(Cm,n):e==="mathml"?Gn.createElementNS(Pm,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Bc.innerHTML=Ud(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Bc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ei="transition",Bs="animation",ur=Symbol("_vtc"),Nd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dm=bt({},id,Nd),Im=n=>(n.displayName="Transition",n.props=Dm,n),Um=Im((n,{slots:e})=>jl(Ap,Nm(n),e)),Ci=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},zc=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function Nm(n){const e={};for(const O in n)O in Nd||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=Fm(s),S=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:T,onLeave:E,onLeaveCancelled:I,onBeforeAppear:D=h,onAppear:C=A,onAppearCancelled:B=T}=e,b=(O,H,ne,re)=>{O._enterCancelled=re,Pi(O,H?c:o),Pi(O,H?u:a),ne&&ne()},M=(O,H)=>{O._isLeaving=!1,Pi(O,f),Pi(O,p),Pi(O,d),H&&H()},L=O=>(H,ne)=>{const re=O?C:A,Z=()=>b(H,O,ne);Ci(re,[H,Z]),Hc(()=>{Pi(H,O?l:r),Nn(H,O?c:o),zc(re)||kc(H,i,S,Z)})};return bt(e,{onBeforeEnter(O){Ci(h,[O]),Nn(O,r),Nn(O,a)},onBeforeAppear(O){Ci(D,[O]),Nn(O,l),Nn(O,u)},onEnter:L(!1),onAppear:L(!0),onLeave(O,H){O._isLeaving=!0;const ne=()=>M(O,H);Nn(O,f),O._enterCancelled?(Nn(O,d),Wc()):(Wc(),Nn(O,d)),Hc(()=>{O._isLeaving&&(Pi(O,f),Nn(O,p),zc(E)||kc(O,i,m,ne))}),Ci(E,[O,ne])},onEnterCancelled(O){b(O,!1,void 0,!0),Ci(T,[O])},onAppearCancelled(O){b(O,!0,void 0,!0),Ci(B,[O])},onLeaveCancelled(O){M(O),Ci(I,[O])}})}function Fm(n){if(n==null)return null;if(ht(n))return[Ga(n.enter),Ga(n.leave)];{const e=Ga(n);return[e,e]}}function Ga(n){return Hh(n)}function Nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ur]||(n[ur]=new Set)).add(e)}function Pi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ur];t&&(t.delete(e),t.size||(n[ur]=void 0))}function Hc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function kc(n,e,t,i){const s=n._endId=++Om,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Bm(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),r()},d=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function Bm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${ei}Delay`),r=i(`${ei}Duration`),a=Vc(s,r),o=i(`${Bs}Delay`),l=i(`${Bs}Duration`),u=Vc(o,l);let c=null,f=0,d=0;e===ei?a>0&&(c=ei,f=a,d=r.length):e===Bs?u>0&&(c=Bs,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?ei:Bs:null,d=c?c===ei?r.length:l.length:0);const p=c===ei&&/\b(transform|all)(,|$)/.test(i(`${ei}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:p}}function Vc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Gc(t)+Gc(n[i])))}function Gc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Wc(){return document.body.offsetHeight}function zm(n,e,t){const i=n[ur];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xc=Symbol("_vod"),Hm=Symbol("_vsh"),km=Symbol(""),Vm=/(^|;)\s*display\s*:/;function Gm(n,e,t){const i=n.style,s=xt(t);let r=!1;if(t&&!s){if(e)if(xt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ea(i,o,"")}else for(const a in e)t[a]==null&&ea(i,a,"");for(const a in t)a==="display"&&(r=!0),ea(i,a,t[a])}else if(s){if(e!==t){const a=i[km];a&&(t+=";"+a),i.cssText=t,r=Vm.test(t)}}else e&&n.removeAttribute("style");Xc in n&&(n[Xc]=r?i.display:"",n[Hm]&&(i.display="none"))}const qc=/\s*!important$/;function ea(n,e,t){if(Fe(t))t.forEach(i=>ea(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wm(n,e);qc.test(t)?n.setProperty(ji(i),t.replace(qc,""),"important"):n[i]=t}}const $c=["Webkit","Moz","ms"],Wa={};function Wm(n,e){const t=Wa[e];if(t)return t;let i=rn(e);if(i!=="filter"&&i in n)return Wa[e]=i;i=xa(i);for(let s=0;s<$c.length;s++){const r=$c[s]+i;if(r in n)return Wa[e]=r}return e}const Yc="http://www.w3.org/1999/xlink";function jc(n,e,t,i,s,r=qh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yc,e.slice(6,e.length)):n.setAttributeNS(Yc,e,t):t==null||r&&!Af(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Mi(t)?String(t):t)}function Kc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ud(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Af(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Xm(n,e,t,i){n.addEventListener(e,t,i)}function qm(n,e,t,i){n.removeEventListener(e,t,i)}const Zc=Symbol("_vei");function $m(n,e,t,i,s=null){const r=n[Zc]||(n[Zc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Ym(e);if(i){const u=r[e]=Zm(i,s);Xm(n,o,u,l)}else a&&(qm(n,o,a,l),r[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function Ym(n){let e;if(Jc.test(n)){e={};let i;for(;i=n.match(Jc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ji(n.slice(2)),e]}let Xa=0;const jm=Promise.resolve(),Km=()=>Xa||(jm.then(()=>Xa=0),Xa=Date.now());function Zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;xn(Jm(i,t.value),e,5,[i])};return t.value=n,t.attached=Km(),t}function Jm(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?zm(n,i,a):e==="style"?Gm(n,t,i):ga(e)?Dl(e)||$m(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eg(n,e,i,a))?(Kc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jc(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?Kc(n,rn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jc(n,e,i,a))};function eg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qc(e)&&xt(t)?!1:e in n}const tg=bt({patchProp:Qm},Lm);let eu;function ng(){return eu||(eu=em(tg))}const ig=(...n)=>{const e=ng().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=rg(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,sg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function sg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rg(n){return xt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ag=Symbol();var tu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(tu||(tu={}));function og(){const n=$h(!0),e=n.run(()=>Ht({}));let t=[],i=[];const s=$f({install(r){s._a=r,r.provide(ag,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Mn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},lg={};function cg(n,e){const t=Kt("RouterView");return dt(),ms(t)}const ug=Mn(lg,[["render",cg]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function Fd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Fd(n.default)}const tt=Object.assign;function qa(n,e){const t={};for(const i in e){const s=e[i];t[i]=Sn(s)?s.map(n):n(s)}return t}const nr=()=>{},Sn=Array.isArray,Od=/#/g,dg=/&/g,hg=/\//g,pg=/=/g,mg=/\?/g,Bd=/\+/g,gg=/%5B/g,_g=/%5D/g,zd=/%5E/g,vg=/%60/g,Hd=/%7B/g,xg=/%7C/g,kd=/%7D/g,Sg=/%20/g;function Kl(n){return encodeURI(""+n).replace(xg,"|").replace(gg,"[").replace(_g,"]")}function Mg(n){return Kl(n).replace(Hd,"{").replace(kd,"}").replace(zd,"^")}function Ho(n){return Kl(n).replace(Bd,"%2B").replace(Sg,"+").replace(Od,"%23").replace(dg,"%26").replace(vg,"`").replace(Hd,"{").replace(kd,"}").replace(zd,"^")}function yg(n){return Ho(n).replace(pg,"%3D")}function Eg(n){return Kl(n).replace(Od,"%23").replace(mg,"%3F")}function bg(n){return n==null?"":Eg(n).replace(hg,"%2F")}function fr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Tg=/\/$/,Ag=n=>n.replace(Tg,"");function $a(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=n(r)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Pg(i??e,t),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:fr(a)}}function wg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function nu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Rg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ts(e.matched[i],t.matched[s])&&Vd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ts(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Vd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Cg(n[t],e[t]))return!1;return!0}function Cg(n,e){return Sn(n)?iu(n,e):Sn(e)?iu(e,n):n===e}function iu(n,e){return Sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Pg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var dr;(function(n){n.pop="pop",n.push="push"})(dr||(dr={}));var ir;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ir||(ir={}));function Lg(n){if(!n)if(hs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ag(n)}const Dg=/^[^#]+#/;function Ig(n,e){return n.replace(Dg,"#")+e}function Ug(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function Ng(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Ug(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function su(n,e){return(history.state?history.state.position-e:-1)+n}const ko=new Map;function Fg(n,e){ko.set(n,e)}function Og(n){const e=ko.get(n);return ko.delete(n),e}let Bg=()=>location.protocol+"//"+location.host;function Gd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),nu(l,"")}return nu(t,n)+i+s}function zg(n,e,t,i){let s=[],r=[],a=null;const o=({state:d})=>{const p=Gd(n,location),_=t.value,S=e.value;let m=0;if(d){if(t.value=p,e.value=d,a&&a===_){a=null;return}m=S?d.position-S.position:0}else i(p);s.forEach(h=>{h(t.value,_,{delta:m,type:dr.pop,direction:m?m>0?ir.forward:ir.back:ir.unknown})})};function l(){a=t.value}function u(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(p),p}function c(){const{history:d}=window;d.state&&d.replaceState(tt({},d.state,{scroll:Ra()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function ru(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ra():null}}function Hg(n){const{history:e,location:t}=window,i={value:Gd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Bg()+n+l;try{e[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),t[c?"replace":"assign"](d)}}function a(l,u){const c=tt({},e.state,ru(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});r(l,c,!0),i.value=l}function o(l,u){const c=tt({},s.value,e.state,{forward:l,scroll:Ra()});r(c.current,c,!0);const f=tt({},ru(i.value,l,null),{position:c.position+1},u);r(l,f,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function kg(n){n=Lg(n);const e=Hg(n),t=zg(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=tt({location:"",base:n,go:i,createHref:Ig.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Vg(n){return typeof n=="string"||n&&typeof n=="object"}function Wd(n){return typeof n=="string"||typeof n=="symbol"}const Xd=Symbol("");var au;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(au||(au={}));function As(n,e){return tt(new Error,{type:n,[Xd]:!0},e)}function Fn(n,e){return n instanceof Error&&Xd in n&&(e==null||!!(n.type&e))}const ou="[^/]+?",Gg={sensitive:!1,strict:!1,start:!0,end:!0},Wg=/[.+*?^${}()[\]/\\]/g;function Xg(n,e){const t=tt({},Gg,e),i=[];let s=t.start?"^":"";const r=[];for(const u of n){const c=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Wg,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:S,optional:m,regexp:h}=d;r.push({name:_,repeatable:S,optional:m});const A=h||ou;if(A!==ou){p+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+E.message)}}let T=S?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(T=m&&u.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,p+=20,m&&(p+=-8),S&&(p+=-20),A===".*"&&(p+=-50)}c.push(p)}i.push(c)}if(t.strict&&t.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let d=1;d<c.length;d++){const p=c[d]||"",_=r[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const d of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of d)if(p.type===0)c+=p.value;else if(p.type===1){const{value:_,repeatable:S,optional:m}=p,h=_ in u?u[_]:"";if(Sn(h)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=Sn(h)?h.join("/"):h;if(!A)if(m)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=A}}return c||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function qg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qd(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=qg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(lu(i))return 1;if(lu(s))return-1}return s.length-i.length}function lu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const $g={type:0,value:""},Yg=/[a-zA-Z0-9_]/;function jg(n){if(!n)return[[]];if(n==="/")return[[$g]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=0,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,u="",c="";function f(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(u&&f(),a()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:Yg.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),a(),s}function Kg(n,e,t){const i=Xg(jg(n.path),t),s=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zg(n,e){const t=[],i=new Map;e=du({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,d,p){const _=!p,S=uu(f);S.aliasOf=p&&p.record;const m=du(e,f),h=[S];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of E)h.push(uu(tt({},S,{components:p?p.record.components:S.components,path:I,aliasOf:p?p.record:S})))}let A,T;for(const E of h){const{path:I}=E;if(d&&I[0]!=="/"){const D=d.record.path,C=D[D.length-1]==="/"?"":"/";E.path=d.record.path+(I&&C+I)}if(A=Kg(E,d,m),p?p.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),_&&f.name&&!fu(A)&&a(f.name)),$d(A)&&l(A),S.children){const D=S.children;for(let C=0;C<D.length;C++)r(D[C],A,p&&p.children[C])}p=p||A}return T?()=>{a(T)}:nr}function a(f){if(Wd(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=e_(f,t);t.splice(d,0,f),f.record.name&&!fu(f)&&i.set(f.record.name,f)}function u(f,d){let p,_={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw As(1,{location:f});m=p.record.name,_=tt(cu(d.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&cu(f.params,p.keys.map(T=>T.name))),S=p.stringify(_)}else if(f.path!=null)S=f.path,p=t.find(T=>T.re.test(S)),p&&(_=p.parse(S),m=p.record.name);else{if(p=d.name?i.get(d.name):t.find(T=>T.re.test(d.path)),!p)throw As(1,{location:f,currentLocation:d});m=p.record.name,_=tt({},d.params,f.params),S=p.stringify(_)}const h=[];let A=p;for(;A;)h.unshift(A.record),A=A.parent;return{name:m,path:S,params:_,matched:h,meta:Qg(h)}}n.forEach(f=>r(f));function c(){t.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:s}}function cu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function uu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Jg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function fu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qg(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function du(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function e_(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;qd(n,e[r])<0?i=r:t=r+1}const s=t_(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function t_(n){let e=n;for(;e=e.parent;)if($d(e)&&qd(n,e)===0)return e}function $d({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function n_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Bd," "),a=r.indexOf("="),o=fr(a<0?r:r.slice(0,a)),l=a<0?null:fr(r.slice(a+1));if(o in e){let u=e[o];Sn(u)||(u=e[o]=[u]),u.push(l)}else e[o]=l}return e}function hu(n){let e="";for(let t in n){const i=n[t];if(t=yg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Sn(i)?i.map(r=>r&&Ho(r)):[i&&Ho(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function i_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Sn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const s_=Symbol(""),pu=Symbol(""),Zl=Symbol(""),Yd=Symbol(""),Vo=Symbol("");function zs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function fi(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const u=d=>{d===!1?l(As(4,{from:t,to:e})):d instanceof Error?l(d):Vg(d)?l(As(2,{from:e,to:d})):(a&&i.enterCallbacks[s]===a&&typeof d=="function"&&a.push(d),o())},c=r(()=>n.call(i&&i.instances[s],e,t,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(d=>l(d))})}function Ya(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Fd(l)){const c=(l.__vccOpts||l)[e];c&&r.push(fi(c,t,i,a,o,s))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=fg(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&fi(p,t,i,a,o,s)()}))}}return r}function mu(n){const e=jn(Zl),t=jn(Yd),i=hn(()=>{const l=xs(n.to);return e.resolve(l)}),s=hn(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=t.matched;if(!c||!f.length)return-1;const d=f.findIndex(Ts.bind(null,c));if(d>-1)return d;const p=gu(l[u-2]);return u>1&&gu(c)===p&&f[f.length-1].path!==p?f.findIndex(Ts.bind(null,l[u-2])):d}),r=hn(()=>s.value>-1&&c_(t.params,i.value.params)),a=hn(()=>s.value>-1&&s.value===t.matched.length-1&&Vd(t.params,i.value.params));function o(l={}){if(l_(l)){const u=e[xs(n.replace)?"replace":"push"](xs(n.to)).catch(nr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:hn(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function r_(n){return n.length===1?n[0]:n}const a_=an({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mu,setup(n,{slots:e}){const t=Ma(mu(n)),{options:i}=jn(Zl),s=hn(()=>({[_u(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[_u(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&r_(e.default(t));return n.custom?r:jl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),o_=a_;function l_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function c_(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Sn(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function gu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _u=(n,e,t)=>n??e??t,u_=an({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=jn(Vo),s=hn(()=>n.route||i.value),r=jn(pu,0),a=hn(()=>{let u=xs(r);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=hn(()=>s.value.matched[a.value]);Zr(pu,hn(()=>a.value+1)),Zr(s_,o),Zr(Vo,s);const l=Ht();return er(()=>[l.value,o.value,n.name],([u,c,f],[d,p,_])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Ts(c,p)||!d)&&(c.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,c=n.name,f=o.value,d=f&&f.components[c];if(!d)return vu(t.default,{Component:d,route:u});const p=f.props[c],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=jl(d,tt({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return vu(t.default,{Component:m,route:u})||m}}});function vu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const f_=u_;function d_(n){const e=Zg(n.routes,n),t=n.parseQuery||n_,i=n.stringifyQuery||hu,s=n.history,r=zs(),a=zs(),o=zs(),l=hp(ti);let u=ti;hs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=qa.bind(null,U=>""+U),f=qa.bind(null,bg),d=qa.bind(null,fr);function p(U,se){let oe,le;return Wd(U)?(oe=e.getRecordMatcher(U),le=se):le=U,e.addRoute(le,oe)}function _(U){const se=e.getRecordMatcher(U);se&&e.removeRoute(se)}function S(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function h(U,se){if(se=tt({},se||l.value),typeof U=="string"){const v=$a(t,U,se.path),te=e.resolve({path:v.path},se),j=s.createHref(v.fullPath);return tt(v,te,{params:d(te.params),hash:fr(v.hash),redirectedFrom:void 0,href:j})}let oe;if(U.path!=null)oe=tt({},U,{path:$a(t,U.path,se.path).path});else{const v=tt({},U.params);for(const te in v)v[te]==null&&delete v[te];oe=tt({},U,{params:f(v)}),se.params=f(se.params)}const le=e.resolve(oe,se),Ie=U.hash||"";le.params=c(d(le.params));const w=wg(i,tt({},U,{hash:Mg(Ie),path:le.path})),R=s.createHref(w);return tt({fullPath:w,hash:Ie,query:i===hu?i_(U.query):U.query||{}},le,{redirectedFrom:void 0,href:R})}function A(U){return typeof U=="string"?$a(t,U,l.value.path):tt({},U)}function T(U,se){if(u!==U)return As(8,{from:se,to:U})}function E(U){return C(U)}function I(U){return E(tt(A(U),{replace:!0}))}function D(U){const se=U.matched[U.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let le=typeof oe=="function"?oe(U):oe;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=A(le):{path:le},le.params={}),tt({query:U.query,hash:U.hash,params:le.path!=null?{}:U.params},le)}}function C(U,se){const oe=u=h(U),le=l.value,Ie=U.state,w=U.force,R=U.replace===!0,v=D(oe);if(v)return C(tt(A(v),{state:typeof v=="object"?tt({},Ie,v.state):Ie,force:w,replace:R}),se||oe);const te=oe;te.redirectedFrom=se;let j;return!w&&Rg(i,le,oe)&&(j=As(16,{to:te,from:le}),we(le,le,!0,!1)),(j?Promise.resolve(j):M(te,le)).catch(q=>Fn(q)?Fn(q,2)?q:Se(q):V(q,te,le)).then(q=>{if(q){if(Fn(q,2))return C(tt({replace:R},A(q.to),{state:typeof q.to=="object"?tt({},Ie,q.to.state):Ie,force:w}),se||te)}else q=O(te,le,!0,R,Ie);return L(te,le,q),q})}function B(U,se){const oe=T(U,se);return oe?Promise.reject(oe):Promise.resolve()}function b(U){const se=ie.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(U):U()}function M(U,se){let oe;const[le,Ie,w]=h_(U,se);oe=Ya(le.reverse(),"beforeRouteLeave",U,se);for(const v of le)v.leaveGuards.forEach(te=>{oe.push(fi(te,U,se))});const R=B.bind(null,U,se);return oe.push(R),Me(oe).then(()=>{oe=[];for(const v of r.list())oe.push(fi(v,U,se));return oe.push(R),Me(oe)}).then(()=>{oe=Ya(Ie,"beforeRouteUpdate",U,se);for(const v of Ie)v.updateGuards.forEach(te=>{oe.push(fi(te,U,se))});return oe.push(R),Me(oe)}).then(()=>{oe=[];for(const v of w)if(v.beforeEnter)if(Sn(v.beforeEnter))for(const te of v.beforeEnter)oe.push(fi(te,U,se));else oe.push(fi(v.beforeEnter,U,se));return oe.push(R),Me(oe)}).then(()=>(U.matched.forEach(v=>v.enterCallbacks={}),oe=Ya(w,"beforeRouteEnter",U,se,b),oe.push(R),Me(oe))).then(()=>{oe=[];for(const v of a.list())oe.push(fi(v,U,se));return oe.push(R),Me(oe)}).catch(v=>Fn(v,8)?v:Promise.reject(v))}function L(U,se,oe){o.list().forEach(le=>b(()=>le(U,se,oe)))}function O(U,se,oe,le,Ie){const w=T(U,se);if(w)return w;const R=se===ti,v=hs?history.state:{};oe&&(le||R?s.replace(U.fullPath,tt({scroll:R&&v&&v.scroll},Ie)):s.push(U.fullPath,Ie)),l.value=U,we(U,se,oe,R),Se()}let H;function ne(){H||(H=s.listen((U,se,oe)=>{if(!he.listening)return;const le=h(U),Ie=D(le);if(Ie){C(tt(Ie,{replace:!0,force:!0}),le).catch(nr);return}u=le;const w=l.value;hs&&Fg(su(w.fullPath,oe.delta),Ra()),M(le,w).catch(R=>Fn(R,12)?R:Fn(R,2)?(C(tt(A(R.to),{force:!0}),le).then(v=>{Fn(v,20)&&!oe.delta&&oe.type===dr.pop&&s.go(-1,!1)}).catch(nr),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),V(R,le,w))).then(R=>{R=R||O(le,w,!1),R&&(oe.delta&&!Fn(R,8)?s.go(-oe.delta,!1):oe.type===dr.pop&&Fn(R,20)&&s.go(-1,!1)),L(le,w,R)}).catch(nr)}))}let re=zs(),Z=zs(),ee;function V(U,se,oe){Se(U);const le=Z.list();return le.length?le.forEach(Ie=>Ie(U,se,oe)):console.error(U),Promise.reject(U)}function me(){return ee&&l.value!==ti?Promise.resolve():new Promise((U,se)=>{re.add([U,se])})}function Se(U){return ee||(ee=!U,ne(),re.list().forEach(([se,oe])=>U?oe(U):se()),re.reset()),U}function we(U,se,oe,le){const{scrollBehavior:Ie}=n;if(!hs||!Ie)return Promise.resolve();const w=!oe&&Og(su(U.fullPath,0))||(le||!oe)&&history.state&&history.state.scroll||null;return Zf().then(()=>Ie(U,se,w)).then(R=>R&&Ng(R)).catch(R=>V(R,U,se))}const Pe=U=>s.go(U);let qe;const ie=new Set,he={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:h,options:n,push:E,replace:I,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:Z.add,isReady:me,install(U){const se=this;U.component("RouterLink",o_),U.component("RouterView",f_),U.config.globalProperties.$router=se,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>xs(l)}),hs&&!qe&&l.value===ti&&(qe=!0,E(s.location).catch(Ie=>{}));const oe={};for(const Ie in ti)Object.defineProperty(oe,Ie,{get:()=>l.value[Ie],enumerable:!0});U.provide(Zl,se),U.provide(Yd,Xf(oe)),U.provide(Vo,l);const le=U.unmount;ie.add(U),U.unmount=function(){ie.delete(U),ie.size<1&&(u=ti,H&&H(),H=null,l.value=ti,qe=!1,ee=!1),le()}}};function Me(U){return U.reduce((se,oe)=>se.then(()=>b(oe)),Promise.resolve())}return he}function h_(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(u=>Ts(u,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(u=>Ts(u,l))||s.push(l))}return[t,i,s]}function Go(){return Go=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Go.apply(this,arguments)}var p_={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,e){},onStringTyped:function(n,e){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,e){},onTypingResumed:function(n,e){},onReset:function(n){},onStop:function(n,e){},onStart:function(n,e){},onDestroy:function(n){}},m_=new(function(){function n(){}var e=n.prototype;return e.load=function(t,i,s){if(t.el=typeof s=="string"?document.querySelector(s):s,t.options=Go({},p_,i),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),a=r.length;if(a)for(var o=0;o<a;o+=1)t.strings.push(r[o].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var i="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+i+"]")){var s=document.createElement("style");s.setAttribute(i,"true"),s.innerHTML=`
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
      `,document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var i="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+i+"]")){var s=document.createElement("style");s.setAttribute(i,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},n}()),xu=new(function(){function n(){}var e=n.prototype;return e.typeHtmlChars=function(t,i,s){if(s.contentType!=="html")return i;var r=t.substring(i).charAt(0);if(r==="<"||r==="&"){var a;for(a=r==="<"?">":";";t.substring(i+1).charAt(0)!==a&&!(1+ ++i>t.length););i++}return i},e.backSpaceHtmlChars=function(t,i,s){if(s.contentType!=="html")return i;var r=t.substring(i).charAt(0);if(r===">"||r===";"){var a;for(a=r===">"?"<":"&";t.substring(i-1).charAt(0)!==a&&!(--i<0););i--}return i},n}()),g_=function(){function n(t,i){m_.load(this,i,t),this.begin()}var e=n.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,i){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=xu.typeHtmlChars(t,i,s);var o=0,l=t.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,o=parseInt(l),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,i)+t.substring(i+u),s.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(i+a).charAt(0)!=="`"&&(a++,!(i+a>t.length)););var c=t.substring(0,i),f=t.substring(c.length+1,i+a),d=t.substring(i+a+1);t=c+f+d,a--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),i>=t.length?s.doneTyping(t,i):s.keepTyping(t,i,a),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},o)},r):this.setPauseStatus(t,i,!0)},e.keepTyping=function(t,i,s){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,i+=s);this.replaceText(r),this.typewrite(t,i)},e.doneTyping=function(t,i){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,i)},this.backDelay))},e.backspace=function(t,i){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=xu.backSpaceHtmlChars(t,i,s);var a=t.substring(0,i);if(s.replaceText(a),s.smartBackspace){var o=s.strings[s.arrayPos+1];s.stopNum=o&&a===o.substring(0,i)?i:0}i>s.stopNum?(i--,s.backspace(t,i)):i<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],i))},r)}else this.setPauseStatus(t,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,i,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=i},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="173",__=0,Su=1,v_=2,jd=1,x_=2,Vn=3,xi=0,Vt=1,qn=2,gi=0,ys=1,Mu=2,yu=3,Eu=4,S_=5,ki=100,M_=101,y_=102,E_=103,b_=104,T_=200,A_=201,w_=202,R_=203,Wo=204,Xo=205,C_=206,P_=207,L_=208,D_=209,I_=210,U_=211,N_=212,F_=213,O_=214,qo=0,$o=1,Yo=2,ws=3,jo=4,Ko=5,Zo=6,Jo=7,Ql=0,B_=1,z_=2,_i=0,H_=1,k_=2,V_=3,G_=4,W_=5,X_=6,q_=7,Kd=300,Rs=301,Cs=302,Qo=303,el=304,Ca=306,tl=1e3,Gi=1001,nl=1002,vn=1003,$_=1004,Cr=1005,wn=1006,ja=1007,Wi=1008,Jn=1009,Zd=1010,Jd=1011,hr=1012,ec=1013,$i=1014,$n=1015,_r=1016,tc=1017,nc=1018,Ps=1020,Qd=35902,eh=1021,th=1022,mn=1023,nh=1024,ih=1025,Es=1026,Ls=1027,sh=1028,ic=1029,rh=1030,sc=1031,rc=1033,ta=33776,na=33777,ia=33778,sa=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,cl=37496,ul=37808,fl=37809,dl=37810,hl=37811,pl=37812,ml=37813,gl=37814,_l=37815,vl=37816,xl=37817,Sl=37818,Ml=37819,yl=37820,El=37821,ra=36492,bl=36494,Tl=36495,ah=36283,Al=36284,wl=36285,Rl=36286,Y_=3200,j_=3201,oh=0,K_=1,pi="",nn="srgb",Ds="srgb-linear",pa="linear",rt="srgb",Ji=7680,bu=519,Z_=512,J_=513,Q_=514,lh=515,ev=516,tv=517,nv=518,iv=519,Tu=35044,Au="300 es",Yn=2e3,ma=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,Cl=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function sv(n,e){return(n%e+e)%e}function Za(n,e,t){return(1-t)*n+t*e}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,a,o,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u)}set(e,t,i,s,r,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],S=s[0],m=s[3],h=s[6],A=s[1],T=s[4],E=s[7],I=s[2],D=s[5],C=s[8];return r[0]=a*S+o*A+l*I,r[3]=a*m+o*T+l*D,r[6]=a*h+o*E+l*C,r[1]=u*S+c*A+f*I,r[4]=u*m+c*T+f*D,r[7]=u*h+c*E+f*C,r[2]=d*S+p*A+_*I,r[5]=d*m+p*T+_*D,r[8]=d*h+p*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*r*c+i*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*r,p=u*r-a*l,_=t*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(s*u-c*i)*S,e[2]=(o*i-s*a)*S,e[3]=d*S,e[4]=(c*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(i*l-u*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Ge;function ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rv(){const n=pr("canvas");return n.style.display="block",n}const wu={};function ps(n){n in wu||(wu[n]=!0,console.warn(n))}function av(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ov(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ru=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const je=cv();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=pr("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fv=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qa(s[a].image)):r.push(Qa(s[a]))}else r=Qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dv=0;class Ot extends Us{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Gi,s=Gi,r=wn,a=Wi,o=mn,l=Jn,u=Ot.DEFAULT_ANISOTROPY,c=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=vr(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Kd;Ot.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,E=(p+1)/2,I=(h+1)/2,D=(c+d)/4,C=(f+S)/4,B=(_+m)/4;return T>E&&T>I?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=D/i,r=C/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=B/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=B/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(d-c)*(d-c));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-S)/A,this.z=(d-c)/A,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends Us{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends hv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fh extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pv extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==d||u!==p||c!==_){let m=1-o;const h=l*d+u*p+c*_+f*S,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const I=Math.sqrt(T),D=Math.atan2(I,h*A);m=Math.sin(m*D)/I,o=Math.sin(o*D)/I}const E=o*A;if(l=l*m+d*E,u=u*m+p*E,c=c*m+_*E,f=f*m+S*E,m===1-o){const I=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=I,u*=I,c*=I,f*=I}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-o*p,e[t+2]=u*_+c*p+o*d-l*f,e[t+3]=c*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-i*u,this._z=r*c+a*u+i*l-s*o,this._w=a*c-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*i),c=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-r*f,this.z=s+l*f+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new G,Pu=new xr;class Sr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Lr.subVectors(this.max,ks),es.subVectors(e.a,ks),ts.subVectors(e.b,ks),ns.subVectors(e.c,ks),ni.subVectors(ts,es),ii.subVectors(ns,ts),Li.subVectors(es,ns);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Li.z,Li.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Li.z,0,-Li.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Li.y,Li.x,0];return!to(t,es,ts,ns,Lr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,es,ts,ns,Lr))?!1:(Dr.crossVectors(ni,ii),t=[Dr.x,Dr.y,Dr.z],to(t,es,ts,ns,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new G,new G,new G,new G,new G,new G,new G,new G],cn=new G,Pr=new Sr,es=new G,ts=new G,ns=new G,ni=new G,ii=new G,Li=new G,ks=new G,Lr=new G,Dr=new G,Di=new G;function to(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Di.fromArray(n,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),u=t.dot(Di),c=i.dot(Di);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const mv=new Sr,Vs=new G,no=new G;class ac{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(no)),this.expandByPoint(Vs.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new G,io=new G,Ir=new G,si=new G,so=new G,Ur=new G,ro=new G;class gv{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){io.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),si.copy(this.origin).sub(io);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=si.dot(this.direction),l=-si.dot(Ir),u=si.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=r*c,f>=0)if(d>=-_)if(d<=_){const S=1/c;f*=S,d*=S,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(io).addScaledVector(Ir,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,s,r){so.subVectors(t,e),Ur.subVectors(i,e),ro.crossVectors(so,Ur);let a=this.direction.dot(ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(si,Ur));if(l<0)return null;const u=o*this.direction.dot(so.cross(si));if(u<0||l+u>a)return null;const c=-o*si.dot(ro);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,r,a,o,l,u,c,f,d,p,_,S,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u,c,f,d,p,_,S,m)}set(e,t,i,s,r,a,o,l,u,c,f,d,p,_,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-S*u,t[9]=-o*l,t[2]=S-d*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,S=u*f;t[0]=d+S*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,S=u*f;t[0]=d-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=S-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+S,t[1]=l*f,t[5]=S*u+d,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=S-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+S,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,t,i){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ri.crossVectors(i,Xt),ri.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ri.crossVectors(i,Xt)),ri.normalize(),Nr.crossVectors(Xt,ri),s[0]=ri.x,s[4]=Nr.x,s[8]=Xt.x,s[1]=ri.y,s[5]=Nr.y,s[9]=Xt.y,s[2]=ri.z,s[6]=Nr.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],S=i[6],m=i[10],h=i[14],A=i[3],T=i[7],E=i[11],I=i[15],D=s[0],C=s[4],B=s[8],b=s[12],M=s[1],L=s[5],O=s[9],H=s[13],ne=s[2],re=s[6],Z=s[10],ee=s[14],V=s[3],me=s[7],Se=s[11],we=s[15];return r[0]=a*D+o*M+l*ne+u*V,r[4]=a*C+o*L+l*re+u*me,r[8]=a*B+o*O+l*Z+u*Se,r[12]=a*b+o*H+l*ee+u*we,r[1]=c*D+f*M+d*ne+p*V,r[5]=c*C+f*L+d*re+p*me,r[9]=c*B+f*O+d*Z+p*Se,r[13]=c*b+f*H+d*ee+p*we,r[2]=_*D+S*M+m*ne+h*V,r[6]=_*C+S*L+m*re+h*me,r[10]=_*B+S*O+m*Z+h*Se,r[14]=_*b+S*H+m*ee+h*we,r[3]=A*D+T*M+E*ne+I*V,r[7]=A*C+T*L+E*re+I*me,r[11]=A*B+T*O+E*Z+I*Se,r[15]=A*b+T*H+E*ee+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],S=e[7],m=e[11],h=e[15];return _*(+r*l*f-s*u*f-r*o*d+i*u*d+s*o*p-i*l*p)+S*(+t*l*p-t*u*d+r*a*d-s*a*p+s*u*c-r*l*c)+m*(+t*u*f-t*o*p-r*a*f+i*a*p+r*o*c-i*u*c)+h*(-s*o*c-t*l*f+t*o*d+s*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],S=e[13],m=e[14],h=e[15],A=f*m*u-S*d*u+S*l*p-o*m*p-f*l*h+o*d*h,T=_*d*u-c*m*u-_*l*p+a*m*p+c*l*h-a*d*h,E=c*S*u-_*f*u+_*o*p-a*S*p-c*o*h+a*f*h,I=_*f*l-c*S*l-_*o*d+a*S*d+c*o*m-a*f*m,D=t*A+i*T+s*E+r*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=A*C,e[1]=(S*d*r-f*m*r-S*s*p+i*m*p+f*s*h-i*d*h)*C,e[2]=(o*m*r-S*l*r+S*s*u-i*m*u-o*s*h+i*l*h)*C,e[3]=(f*l*r-o*d*r-f*s*u+i*d*u+o*s*p-i*l*p)*C,e[4]=T*C,e[5]=(c*m*r-_*d*r+_*s*p-t*m*p-c*s*h+t*d*h)*C,e[6]=(_*l*r-a*m*r-_*s*u+t*m*u+a*s*h-t*l*h)*C,e[7]=(a*d*r-c*l*r+c*s*u-t*d*u-a*s*p+t*l*p)*C,e[8]=E*C,e[9]=(_*f*r-c*S*r-_*i*p+t*S*p+c*i*h-t*f*h)*C,e[10]=(a*S*r-_*o*r+_*i*u-t*S*u-a*i*h+t*o*h)*C,e[11]=(c*o*r-a*f*r-c*i*u+t*f*u+a*i*p-t*o*p)*C,e[12]=I*C,e[13]=(c*S*s-_*f*s+_*i*d-t*S*d-c*i*m+t*f*m)*C,e[14]=(_*o*s-a*S*s-_*i*l+t*S*l+a*i*m-t*o*m)*C,e[15]=(a*f*s-c*o*s+c*i*l-t*f*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,u=r*a,c=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+i,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,c=a+a,f=o+o,d=r*u,p=r*c,_=r*f,S=a*c,m=a*f,h=o*f,A=l*u,T=l*c,E=l*f,I=i.x,D=i.y,C=i.z;return s[0]=(1-(S+h))*I,s[1]=(p+E)*I,s[2]=(_-T)*I,s[3]=0,s[4]=(p-E)*D,s[5]=(1-(d+h))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(_+T)*C,s[9]=(m-A)*C,s[10]=(1-(d+S))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const u=1/r,c=1/a,f=1/o;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Yn){const l=this.elements,u=2*r/(t-e),c=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(o===Yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ma)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn){const l=this.elements,u=1/(t-e),c=1/(i-s),f=1/(a-r),d=(t+e)*u,p=(i+s)*c;let _,S;if(o===Yn)_=(a+r)*f,S=-2*f;else if(o===ma)_=r*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new G,un=new pt,_v=new G(0,0,0),vv=new G(1,1,1),ri=new G,Nr=new G,Xt=new G,Lu=new pt,Du=new xr;class Dn{constructor(e=0,t=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const Iu=new G,ss=new xr,zn=new pt,Fr=new G,Gs=new G,Sv=new G,Mv=new xr,Uu=new G(1,0,0),Nu=new G(0,1,0),Fu=new G(0,0,1),Ou={type:"added"},yv={type:"removed"},rs={type:"childadded",child:null},ao={type:"childremoved",child:null};class Gt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new Dn,i=new xr,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Gs,Fr,this.up):zn.lookAt(Fr,Gs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(zn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yv),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new G,Hn=new G,oo=new G,kn=new G,as=new G,os=new G,Bu=new G,lo=new G,co=new G,uo=new G,fo=new at,ho=new at,po=new at;class pn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),Hn.subVectors(i,t),oo.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Hn),l=fn.dot(oo),u=Hn.dot(Hn),c=Hn.dot(oo),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return fo.setScalar(0),ho.setScalar(0),po.setScalar(0),fo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,i),po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(po,r.z),a}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),Hn.subVectors(e,t),fn.cross(Hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),fn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;as.subVectors(s,i),os.subVectors(r,i),lo.subVectors(e,i);const l=as.dot(lo),u=os.dot(lo);if(l<=0&&u<=0)return t.copy(i);co.subVectors(e,s);const c=as.dot(co),f=os.dot(co);if(c>=0&&f<=c)return t.copy(s);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(as,a);uo.subVectors(e,r);const p=as.dot(uo),_=os.dot(uo);if(_>=0&&p<=_)return t.copy(r);const S=p*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(os,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Bu.subVectors(r,s),o=(f-c)/(f-c+(p-_)),t.copy(s).addScaledVector(Bu,o);const h=1/(m+S+d);return a=S*h,o=d*h,t.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Or={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=sv(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return je.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Xe(Ct.r*255,0,255))*65536+Math.round(Xe(Ct.g*255,0,255))*256+Math.round(Xe(Ct.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nn){je.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,s=Ct.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Or);const i=Za(ai.h,Or.h,t),s=Za(ai.s,Or.s,t),r=Za(ai.l,Or.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ke;Ke.NAMES=hh;let Ev=0;class Mr extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ys,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ph extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new G,Br=new Je;let bv=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class mh extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gh extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ln extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tv=0;const tn=new pt,go=new Gt,ls=new G,qt=new Sr,Ws=new Sr,yt=new G;class bi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?gh:mh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,Ws.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Ws.max),qt.expandByPoint(yt)):(qt.expandByPoint(Ws.min),qt.expandByPoint(Ws.max))}qt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)yt.fromBufferAttribute(o,u),l&&(ls.fromBufferAttribute(e,u),yt.add(ls)),s=Math.max(s,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new G,l[B]=new G;const u=new G,c=new G,f=new G,d=new Je,p=new Je,_=new Je,S=new G,m=new G;function h(B,b,M){u.fromBufferAttribute(i,B),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,M),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(S.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),o[B].add(S),o[b].add(S),o[M].add(S),l[B].add(m),l[b].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,b=A.length;B<b;++B){const M=A[B],L=M.start,O=M.count;for(let H=L,ne=L+O;H<ne;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new G,E=new G,I=new G,D=new G;function C(B){I.fromBufferAttribute(s,B),D.copy(I);const b=o[B];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(D,b);const L=E.dot(l[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,L)}for(let B=0,b=A.length;B<b;++B){const M=A[B],L=M.start,O=M.count;for(let H=L,ne=L+O;H<ne;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new Pn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,i);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],f=r[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new pt,Ii=new gv,zr=new ac,Hu=new G,Hr=new G,kr=new G,Vr=new G,_o=new G,Gr=new G,ku=new G,Wr=new G;class Rn extends Gt{constructor(e=new bi,t=new ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],f=r[l];c!==0&&(_o.fromBufferAttribute(f,e),a?Gr.addScaledVector(_o,c):Gr.addScaledVector(_o.sub(t),c))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(zr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(zr,Hu)===null||Ii.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=T;E<I;E+=3){const D=o.getX(E),C=o.getX(E+1),B=o.getX(E+2);s=Xr(this,h,e,i,u,c,f,D,C,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const A=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);s=Xr(this,a,e,i,u,c,f,A,T,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=T;E<I;E+=3){const D=E,C=E+1,B=E+2;s=Xr(this,h,e,i,u,c,f,D,C,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const A=m,T=m+1,E=m+2;s=Xr(this,a,e,i,u,c,f,A,T,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Av(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===xi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Wr);return u<t.near||u>t.far?null:{distance:u,point:Wr.clone(),object:n}}function Xr(n,e,t,i,s,r,a,o,l,u){n.getVertexPosition(o,Hr),n.getVertexPosition(l,kr),n.getVertexPosition(u,Vr);const c=Av(n,e,t,i,Hr,kr,Vr,ku);if(c){const f=new G;pn.getBarycoord(ku,Hr,kr,Vr,f),s&&(c.uv=pn.getInterpolatedAttribute(s,o,l,u,f,new Je)),r&&(c.uv1=pn.getInterpolatedAttribute(r,o,l,u,f,new Je)),a&&(c.normal=pn.getInterpolatedAttribute(a,o,l,u,f,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new G,materialIndex:0};pn.getNormal(Hr,kr,Vr,d.normal),c.face=d,c.barycoord=f}return c}class yr extends bi{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ln(u,3)),this.setAttribute("normal",new Ln(c,3)),this.setAttribute("uv",new Ln(f,2));function _(S,m,h,A,T,E,I,D,C,B,b){const M=E/C,L=I/B,O=E/2,H=I/2,ne=D/2,re=C+1,Z=B+1;let ee=0,V=0;const me=new G;for(let Se=0;Se<Z;Se++){const we=Se*L-H;for(let Pe=0;Pe<re;Pe++){const qe=Pe*M-O;me[S]=qe*A,me[m]=we*T,me[h]=ne,u.push(me.x,me.y,me.z),me[S]=0,me[m]=0,me[h]=D>0?1:-1,c.push(me.x,me.y,me.z),f.push(Pe/C),f.push(1-Se/B),ee+=1}}for(let Se=0;Se<B;Se++)for(let we=0;we<C;we++){const Pe=d+we+re*Se,qe=d+we+re*(Se+1),ie=d+(we+1)+re*(Se+1),he=d+(we+1)+re*Se;l.push(Pe,qe,he),l.push(qe,ie,he),V+=6}o.addGroup(p,V,b),p+=V,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const s in i)e[s]=i[s]}return e}function wv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _h(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Rv={clone:Is,merge:Ut};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vh extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new G,Vu=new Je,Gu=new Je;class jt extends vh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class Lv extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(cs,us,e,t);s.layers=this.layers,this.add(s);const r=new jt(cs,us,e,t);r.layers=this.layers,this.add(r);const a=new jt(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new jt(cs,us,e,t);o.layers=this.layers,this.add(o);const l=new jt(cs,us,e,t);l.layers=this.layers,this.add(l);const u=new jt(cs,us,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const u of t)this.remove(u);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xh extends Ot{constructor(e,t,i,s,r,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:gi});r.uniforms.tEquirect.value=t;const a=new Rn(s,r),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=wn),new Lv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class qr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),h=this._getHandJoint(u,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Uv extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xo=new G,Nv=new G,Fv=new Ge;class Bi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=xo.subVectors(i,t).cross(Nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fv.getNormalMatrix(e),s=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ac,$r=new G;class oc{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],c=s[5],f=s[6],d=s[7],p=s[8],_=s[9],S=s[10],m=s[11],h=s[12],A=s[13],T=s[14],E=s[15];if(i[0].setComponents(l-r,d-u,m-p,E-h).normalize(),i[1].setComponents(l+r,d+u,m+p,E+h).normalize(),i[2].setComponents(l+a,d+c,m+_,E+A).normalize(),i[3].setComponents(l-a,d-c,m-_,E-A).normalize(),i[4].setComponents(l-o,d-f,m-S,E-T).normalize(),t===Yn)i[5].setComponents(l+o,d+f,m+S,E+T).normalize();else if(t===ma)i[5].setComponents(o,f,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sh extends Ot{constructor(e,t,i,s,r,a,o,l,u,c=Es){if(c!==Es&&c!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Es&&(i=$i),i===void 0&&c===Ls&&(i=Ps),super(null,s,r,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pa extends bi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),u=o+1,c=l+1,f=e/o,d=t/l,p=[],_=[],S=[],m=[];for(let h=0;h<c;h++){const A=h*d-a;for(let T=0;T<u;T++){const E=T*f-r;_.push(E,-A,0),S.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+u*h,E=A+u*(h+1),I=A+1+u*(h+1),D=A+1+u*h;p.push(T,E,D),p.push(E,I,D)}this.setIndex(p),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(S,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class lc extends bi{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new G,d=new G,p=[],_=[],S=[],m=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let E=0;h===0&&a===0?E=.5/t:h===i&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const D=I/t;f.x=-e*Math.cos(s+D*r)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(s+D*r)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),m.push(D+E,1-T),A.push(u++)}c.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const T=c[h][A+1],E=c[h][A],I=c[h+1][A],D=c[h+1][A+1];(h!==0||a>0)&&p.push(T,E,D),(h!==i-1||l<Math.PI)&&p.push(E,I,D)}this.setIndex(p),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(S,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ov extends Mr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bv extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zv extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hv{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const kv=new Hv;class cc{constructor(e){this.manager=e!==void 0?e:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Vv extends cc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=pr("img");function l(){c(),Wu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){c(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Gv extends cc{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,a=new Vv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Mh extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const So=new pt,Xu=new G,qu=new G;class Wv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $u=new pt,Xs=new G,Mo=new G;class Xv extends Wv{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xs),Mo.copy(i.position),Mo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mo),i.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),$u.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class Yu extends Mh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qv extends vh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $v extends Mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yv extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function ju(n,e,t,i){const s=jv(i);switch(t){case eh:return n*e;case nh:return n*e;case ih:return n*e*2;case sh:return n*e/s.components*s.byteLength;case ic:return n*e/s.components*s.byteLength;case rh:return n*e*2/s.components*s.byteLength;case sc:return n*e*2/s.components*s.byteLength;case th:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case rc:return n*e*4/s.components*s.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(n,16)*Math.max(e,8)/4;case il:case rl:return Math.max(n,8)*Math.max(e,8)/2;case ol:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ra:case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ah:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wl:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(n){switch(n){case Jn:case Zd:return{byteLength:1,components:1};case hr:case Jd:case _r:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case $i:case ec:case $n:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Kv(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];n.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
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
#endif`,Qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
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
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,j0=`struct PhysicalMaterial {
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
}`,K0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
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
}`,iS=`#if DEPTH_PACKING == 3200
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
}`,sS=`#define DISTANCE
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
}`,rS=`#define DISTANCE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,dS=`#define LAMBERT
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
}`,hS=`#define LAMBERT
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
}`,pS=`#define MATCAP
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
}`,mS=`#define MATCAP
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
}`,gS=`#define NORMAL
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
}`,_S=`#define NORMAL
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
}`,vS=`#define PHONG
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
}`,xS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,yS=`#define TOON
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
}`,ES=`#define TOON
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
}`,bS=`uniform float size;
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,wS=`uniform vec3 color;
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
}`,RS=`uniform float rotation;
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
}`,CS=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Zv,alphahash_pars_fragment:Jv,alphamap_fragment:Qv,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:a0,begin_vertex:o0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:u0,bumpmap_pars_fragment:f0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:_0,color_pars_vertex:v0,color_vertex:x0,common:S0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:y0,displacementmap_pars_vertex:E0,displacementmap_vertex:b0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:w0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:G0,envmap_vertex:I0,fog_vertex:U0,fog_pars_vertex:N0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:k0,lights_pars_begin:V0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:$0,lights_physical_fragment:Y0,lights_physical_pars_fragment:j0,lights_fragment_begin:K0,lights_fragment_maps:Z0,lights_fragment_end:J0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ax,metalnessmap_fragment:ox,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:hx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Ex,opaque_fragment:bx,packing:Tx,premultiplied_alpha_fragment:Ax,project_vertex:wx,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:Hx,specularmap_pars_fragment:kx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Gx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:$x,uv_vertex:Yx,worldpos_vertex:jx,background_vert:Kx,background_frag:Zx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:sS,distanceRGBA_frag:rS,equirect_vert:aS,equirect_frag:oS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:fS,meshlambert_vert:dS,meshlambert_frag:hS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:_S,meshphong_vert:vS,meshphong_frag:xS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:yS,meshtoon_frag:ES,points_vert:bS,points_frag:TS,shadow_vert:AS,shadow_frag:wS,sprite_vert:RS,sprite_frag:CS},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},An={basic:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};An.physical={uniforms:Ut([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Yr={r:0,b:0,g:0},Ni=new Dn,PS=new pt;function LS(n,e,t,i,s,r,a){const o=new Ke(0);let l=r===!0?0:1,u,c,f=null,d=0,p=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function S(T){let E=!1;const I=_(T);I===null?h(o,l):I&&I.isColor&&(h(I,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const I=_(E);I&&(I.isCubeTexture||I.mapping===Ca)?(c===void 0&&(c=new Rn(new yr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Is(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ni.copy(E.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=I,c.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(Ni)),c.material.toneMapped=je.getTransfer(I.colorSpace)!==rt,(f!==I||d!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,d=I.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new Rn(new Pa(2,2),new Si({name:"BackgroundMaterial",uniforms:Is(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=je.getTransfer(I.colorSpace)!==rt,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,d=I.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,E){T.getRGB(Yr,_h(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,E,a)}function A(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:S,addToRenderList:m,dispose:A}}function DS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,L,O,H,ne){let re=!1;const Z=f(H,O,L);r!==Z&&(r=Z,u(r.object)),re=p(M,H,O,ne),re&&_(M,H,O,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,E(M,L,O,H),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,L,O){const H=O.wireframe===!0;let ne=i[M.id];ne===void 0&&(ne={},i[M.id]=ne);let re=ne[L.id];re===void 0&&(re={},ne[L.id]=re);let Z=re[H];return Z===void 0&&(Z=d(l()),re[H]=Z),Z}function d(M){const L=[],O=[],H=[];for(let ne=0;ne<t;ne++)L[ne]=0,O[ne]=0,H[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,O,H){const ne=r.attributes,re=L.attributes;let Z=0;const ee=O.getAttributes();for(const V in ee)if(ee[V].location>=0){const Se=ne[V];let we=re[V];if(we===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),Se===void 0||Se.attribute!==we||we&&Se.data!==we.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function _(M,L,O,H){const ne={},re=L.attributes;let Z=0;const ee=O.getAttributes();for(const V in ee)if(ee[V].location>=0){let Se=re[V];Se===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));const we={};we.attribute=Se,Se&&Se.data&&(we.data=Se.data),ne[V]=we,Z++}r.attributes=ne,r.attributesNum=Z,r.index=H}function S(){const M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){h(M,0)}function h(M,L){const O=r.newAttributes,H=r.enabledAttributes,ne=r.attributeDivisors;O[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),ne[M]!==L&&(n.vertexAttribDivisor(M,L),ne[M]=L)}function A(){const M=r.newAttributes,L=r.enabledAttributes;for(let O=0,H=L.length;O<H;O++)L[O]!==M[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function T(M,L,O,H,ne,re,Z){Z===!0?n.vertexAttribIPointer(M,L,O,ne,re):n.vertexAttribPointer(M,L,O,H,ne,re)}function E(M,L,O,H){S();const ne=H.attributes,re=O.getAttributes(),Z=L.defaultAttributeValues;for(const ee in re){const V=re[ee];if(V.location>=0){let me=ne[ee];if(me===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const Se=me.normalized,we=me.itemSize,Pe=e.get(me);if(Pe===void 0)continue;const qe=Pe.buffer,ie=Pe.type,he=Pe.bytesPerElement,Me=ie===n.INT||ie===n.UNSIGNED_INT||me.gpuType===ec;if(me.isInterleavedBufferAttribute){const U=me.data,se=U.stride,oe=me.offset;if(U.isInstancedInterleavedBuffer){for(let le=0;le<V.locationSize;le++)h(V.location+le,U.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let le=0;le<V.locationSize;le++)T(V.location+le,we/V.locationSize,ie,Se,se*he,(oe+we/V.locationSize*le)*he,Me)}else{if(me.isInstancedBufferAttribute){for(let U=0;U<V.locationSize;U++)h(V.location+U,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let U=0;U<V.locationSize;U++)m(V.location+U);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let U=0;U<V.locationSize;U++)T(V.location+U,we/V.locationSize,ie,Se,we*he,we/V.locationSize*U*he,Me)}}else if(Z!==void 0){const Se=Z[ee];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(V.location,Se);break;case 3:n.vertexAttrib3fv(V.location,Se);break;case 4:n.vertexAttrib4fv(V.location,Se);break;default:n.vertexAttrib1fv(V.location,Se)}}}}A()}function I(){B();for(const M in i){const L=i[M];for(const O in L){const H=L[O];for(const ne in H)c(H[ne].object),delete H[ne];delete L[O]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const O in L){const H=L[O];for(const ne in H)c(H[ne].object),delete H[ne];delete L[O]}delete i[M.id]}function C(M){for(const L in i){const O=i[L];if(O[M.id]===void 0)continue;const H=O[M.id];for(const ne in H)c(H[ne].object),delete H[ne];delete O[M.id]}}function B(){b(),a=!0,r!==s&&(r=s,u(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function IS(n,e,t){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let S=0;S<f;S++)_+=c[S]*d[S];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function US(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const B=C===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!B)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:I,maxSamples:D}}function NS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Bi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?c(null):u();else{const A=r?0:i,T=A*4;let E=h.clippingState||null;l.value=E,E=c(_,d,T,p);for(let I=0;I!==T;++I)E[I]=t[I];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const h=p+S*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,E=p;T!==S;++T,E+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function FS(n){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=Rs:o===el&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===el)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Dv(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const gs=4,Ku=[.125,.215,.35,.446,.526,.582],Vi=20,yo=new qv,Zu=new Ke;let Eo=null,bo=0,To=0,Ao=!1;const zi=(1+Math.sqrt(5))/2,fs=1/zi,Ju=[new G(-zi,fs,0),new G(zi,fs,0),new G(-fs,0,zi),new G(fs,0,zi),new G(0,zi,-fs),new G(0,zi,fs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,bo,To),this._renderer.xr.enabled=Ao,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:_r,format:mn,colorSpace:Ds,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OS(r)),this._blurMaterial=BS(r,e,t)}return s}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,i,s){const o=new jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Zu),c.toneMapping=_i,c.autoClear=!1;const p=new ph({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new Rn(new yr,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Zu),S=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const T=this._cubeSize;jr(s,A*T,h>2?T:0,T,T),c.setRenderTarget(s),S&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ju[(s-r-1)%Ju.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Rn(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),S=r/_,m=isFinite(r)?1+Math.floor(c*S):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const h=[];let A=0;for(let C=0;C<Vi;++C){const B=C/S,b=Math.exp(-B*B/2);h.push(b),C===0?A+=b:C<m&&(A+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const E=this._sizeLods[s],I=3*E*(s>T-gs?s-T+gs:0),D=4*(this._cubeSize-E);jr(t,I,D,3*E,2*E),l.setRenderTarget(t),l.render(f,yo)}}function OS(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+Ku.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-gs?l=Ku[a-n+gs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,S=3,m=2,h=1,A=new Float32Array(S*_*p),T=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,B=D>2?0:-1,b=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];A.set(b,S*_*D),T.set(d,m*_*D);const M=[D,D,D,D,D,D];E.set(M,h*_*D)}const I=new bi;I.setAttribute("position",new Pn(A,S)),I.setAttribute("uv",new Pn(T,m)),I.setAttribute("faceIndex",new Pn(E,h)),e.push(I),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ef(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function BS(n,e,t){const i=new Float32Array(Vi),s=new G(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function tf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function zS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Qo||l===el,c=l===Rs||l===Cs;if(u||c){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qu(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&s(p)?(t===null&&(t=new Qu(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function HS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kS(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let T=0,E=A.length;T<E;T+=3){const I=A[T+0],D=A[T+1],C=A[T+2];d.push(I,D,D,C,C,I)}}else if(_!==void 0){const A=_.array;S=_.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const I=T+0,D=T+1,C=T+2;d.push(I,D,D,C,C,I)}}else return;const m=new(ch(d)?gh:mh)(d,1);m.version=S;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function c(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function VS(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function u(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),t.update(p,i,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function f(d,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,S,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*S[A];t.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function GS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function WS(n,e,t){const i=new WeakMap,s=new at;function r(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let I=o.attributes.position.count*E,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*D*4*f),B=new fh(C,I,D,f);B.type=$n,B.needsUpdate=!0;const b=E*4;for(let L=0;L<f;L++){const O=h[L],H=A[L],ne=T[L],re=I*D*4*L;for(let Z=0;Z<O.count;Z++){const ee=Z*b;_===!0&&(s.fromBufferAttribute(O,Z),C[re+ee+0]=s.x,C[re+ee+1]=s.y,C[re+ee+2]=s.z,C[re+ee+3]=0),S===!0&&(s.fromBufferAttribute(H,Z),C[re+ee+4]=s.x,C[re+ee+5]=s.y,C[re+ee+6]=s.z,C[re+ee+7]=0),m===!0&&(s.fromBufferAttribute(ne,Z),C[re+ee+8]=s.x,C[re+ee+9]=s.y,C[re+ee+10]=s.z,C[re+ee+11]=ne.itemSize===4?s.w:1)}}d={count:f,texture:B,size:new Je(I,D)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function XS(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Eh=new Ot,sf=new Sh(1,1),bh=new fh,Th=new pv,Ah=new xh,rf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function La(n,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Mt(t,i)}}function ZS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Mt(t,i)}}function JS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;of.set(i),n.uniformMatrix4fv(this.addr,!1,of),Mt(t,i)}}function QS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function oM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sf.compareFunction=lh,r=sf):r=Eh,t.setTexture2D(e||r,s)}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Th,s)}function cM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ah,s)}function uM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bh,s)}function fM(n){switch(n){case 5126:return qS;case 35664:return $S;case 35665:return YS;case 35666:return jS;case 35674:return KS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}function dM(n,e){n.uniform1fv(this.addr,e)}function hM(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function pM(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function mM(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function gM(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _M(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vM(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xM(n,e){n.uniform1iv(this.addr,e)}function SM(n,e){n.uniform2iv(this.addr,e)}function MM(n,e){n.uniform3iv(this.addr,e)}function yM(n,e){n.uniform4iv(this.addr,e)}function EM(n,e){n.uniform1uiv(this.addr,e)}function bM(n,e){n.uniform2uiv(this.addr,e)}function TM(n,e){n.uniform3uiv(this.addr,e)}function AM(n,e){n.uniform4uiv(this.addr,e)}function wM(n,e,t){const i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Eh,r[a])}function RM(n,e,t){const i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Th,r[a])}function CM(n,e,t){const i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ah,r[a])}function PM(n,e,t){const i=this.cache,s=e.length,r=La(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bh,r[a])}function LM(n){switch(n){case 5126:return dM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return yM;case 5125:return EM;case 36294:return bM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fM(t.type)}}class IM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function uf(n,e){n.seq.push(e),n.map[e.id]=e}function NM(n,e,t){const i=n.name,s=i.length;for(wo.lastIndex=0;;){const r=wo.exec(i),a=wo.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){uf(t,u===void 0?new DM(o,n,e):new IM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new UM(o),uf(t,f)),t=f}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);NM(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ff(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FM=37297;let OM=0;function BM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const df=new Ge;function zM(n){je._getMatrix(df,je.workingColorSpace,n);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+BM(n.getShaderSource(e),a)}else return s}function HM(n,e){const t=zM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kM(n,e){let t;switch(e){case H_:t="Linear";break;case k_:t="Reinhard";break;case V_:t="Cineon";break;case G_:t="ACESFilmic";break;case X_:t="AgX";break;case q_:t="Neutral";break;case W_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new G;function VM(){je.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function WM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $s(n){return n!==""}function pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(n){return n.replace(qM,YM)}const $M=new Map;function YM(n,e){let t=We[e];if(t===void 0){const i=$M.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(jM,KM)}function KM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ZM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function ty(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ny(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZM(t),u=JM(t),c=QM(t),f=ey(t),d=ty(t),p=GM(t),_=WM(r),S=s.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),h.length>0&&(h+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),h=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?We.tonemapping_pars_fragment:"",t.toneMapping!==_i?kM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,HM("linearToOutputTexel",t.outputColorSpace),VM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=Pl(a),a=pf(a,t),a=mf(a,t),o=Pl(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+m+a,E=A+h+o,I=ff(s,s.VERTEX_SHADER,T),D=ff(s,s.FRAGMENT_SHADER,E);s.attachShader(S,I),s.attachShader(S,D),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(L){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(S).trim(),H=s.getShaderInfoLog(I).trim(),ne=s.getShaderInfoLog(D).trim();let re=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,I,D);else{const ee=hf(s,I,"vertex"),V=hf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ee+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||ne==="")&&(Z=!1);Z&&(L.diagnostics={runnable:re,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:ne,prefix:h}})}s.deleteShader(I),s.deleteShader(D),B=new aa(s,S),b=XM(s,S)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(S,FM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=D,this}let iy=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ry(e),t.set(e,i)),i}}class ry{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}}function ay(n,e,t,i,s,r,a){const o=new dh,l=new sy,u=new Set,c=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,O,H){const ne=O.fog,re=H.geometry,Z=b.isMeshStandardMaterial?O.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),V=ee&&ee.mapping===Ca?ee.image.height:null,me=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,we=Se!==void 0?Se.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let qe,ie,he,Me;if(me){const st=An[me];qe=st.vertexShader,ie=st.fragmentShader}else qe=b.vertexShader,ie=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);const U=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),oe=H.isInstancedMesh===!0,le=H.isBatchedMesh===!0,Ie=!!b.map,w=!!b.matcap,R=!!ee,v=!!b.aoMap,te=!!b.lightMap,j=!!b.bumpMap,q=!!b.normalMap,J=!!b.displacementMap,ce=!!b.emissiveMap,K=!!b.metalnessMap,x=!!b.roughnessMap,g=b.anisotropy>0,P=b.clearcoat>0,k=b.dispersion>0,$=b.iridescence>0,W=b.sheen>0,pe=b.transmission>0,ue=g&&!!b.anisotropyMap,ge=P&&!!b.clearcoatMap,Ue=P&&!!b.clearcoatNormalMap,fe=P&&!!b.clearcoatRoughnessMap,xe=$&&!!b.iridescenceMap,Ce=$&&!!b.iridescenceThicknessMap,Ne=W&&!!b.sheenColorMap,_e=W&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,He=!!b.specularColorMap,lt=!!b.specularIntensityMap,N=pe&&!!b.transmissionMap,ye=pe&&!!b.thicknessMap,Q=!!b.gradientMap,ae=!!b.alphaMap,Te=b.alphaTest>0,be=!!b.alphaHash,Ve=!!b.extensions;let mt=_i;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=n.toneMapping);const wt={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:ie,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:le,batchingColor:le&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ds,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:w,envMap:R,envMapMode:R&&ee.mapping,envMapCubeUVHeight:V,aoMap:v,lightMap:te,bumpMap:j,normalMap:q,displacementMap:d&&J,emissiveMap:ce,normalMapObjectSpace:q&&b.normalMapType===K_,normalMapTangentSpace:q&&b.normalMapType===oh,metalnessMap:K,roughnessMap:x,anisotropy:g,anisotropyMap:ue,clearcoat:P,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:fe,dispersion:k,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:W,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Oe,specularColorMap:He,specularIntensityMap:lt,transmission:pe,transmissionMap:N,thicknessMap:ye,gradientMap:Q,opaque:b.transparent===!1&&b.blending===ys&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:Te,alphaHash:be,combine:b.combine,mapUv:Ie&&S(b.map.channel),aoMapUv:v&&S(b.aoMap.channel),lightMapUv:te&&S(b.lightMap.channel),bumpMapUv:j&&S(b.bumpMap.channel),normalMapUv:q&&S(b.normalMap.channel),displacementMapUv:J&&S(b.displacementMap.channel),emissiveMapUv:ce&&S(b.emissiveMap.channel),metalnessMapUv:K&&S(b.metalnessMap.channel),roughnessMapUv:x&&S(b.roughnessMap.channel),anisotropyMapUv:ue&&S(b.anisotropyMap.channel),clearcoatMapUv:ge&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&S(b.sheenRoughnessMap.channel),specularMapUv:Oe&&S(b.specularMap.channel),specularColorMapUv:He&&S(b.specularColorMap.channel),specularIntensityMapUv:lt&&S(b.specularIntensityMap.channel),transmissionMapUv:N&&S(b.transmissionMap.channel),thicknessMapUv:ye&&S(b.thicknessMap.channel),alphaMapUv:ae&&S(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(q||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(Ie||ae),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return wt.vertexUv1s=u.has(1),wt.vertexUv2s=u.has(2),wt.vertexUv3s=u.has(3),u.clear(),wt}function h(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(A(M,b),T(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function A(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const M=_[b.type];let L;if(M){const O=An[M];L=Rv.clone(O.uniforms)}else L=b.uniforms;return L}function I(b,M){let L;for(let O=0,H=c.length;O<H;O++){const ne=c[O];if(ne.cacheKey===M){L=ne,++L.usedTimes;break}}return L===void 0&&(L=new ny(n,M,b,r),c.push(L)),L}function D(b){if(--b.usedTimes===0){const M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:I,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:B}}function oy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ly(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,p,_,S,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=S,h.group=m),e++,h}function o(f,d,p,_,S,m){const h=a(f,d,p,_,S,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,S,m){const h=a(f,d,p,_,S,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||ly),i.length>1&&i.sort(d||vf),s.length>1&&s.sort(d||vf)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function cy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new xf,n.set(i,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function uy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ke};break;case"SpotLight":t={position:new G,direction:new G,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function fy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dy=0;function hy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function py(n){const e=new uy,t=fy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const s=new G,r=new pt,a=new pt;function o(u){let c=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,S=0,m=0,h=0,A=0,T=0,E=0,I=0,D=0,C=0;u.sort(hy);for(let b=0,M=u.length;b<M;b++){const L=u[b],O=L.color,H=L.intensity,ne=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=O.r*H,f+=O.g*H,d+=O.b*H;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],H);C++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=L.shadow.matrix,A++}i.directional[p]=Z,p++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(H),Z.distance=ne,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[S]=Z;const ee=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ee.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[S]=ee.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=re,E++}S++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(O).multiplyScalar(H),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=Z,_++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(H),Z.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==p||B.pointLength!==_||B.spotLength!==S||B.rectAreaLength!==m||B.hemiLength!==h||B.numDirectionalShadows!==A||B.numPointShadows!==T||B.numSpotShadows!==E||B.numSpotMaps!==I||B.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,B.directionalLength=p,B.pointLength=_,B.spotLength=S,B.rectAreaLength=m,B.hemiLength=h,B.numDirectionalShadows=A,B.numPointShadows=T,B.numSpotShadows=E,B.numSpotMaps=I,B.numLightProbes=C,i.version=dy++)}function l(u,c){let f=0,d=0,p=0,_=0,S=0;const m=c.matrixWorldInverse;for(let h=0,A=u.length;h<A;h++){const T=u[h];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Sf(n){const e=new py(n),t=[],i=[];function s(c){u.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function my(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Sf(n),e.set(s,[o])):r>=a.length?(o=new Sf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function vy(n,e,t){let i=new oc;const s=new Je,r=new Je,a=new at,o=new Bv({depthPacking:j_}),l=new zv,u={},c=t.maxTextureSize,f={[xi]:Vt,[Vt]:xi,[qn]:qn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Rn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jd;let h=this.type;this.render=function(D,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(gi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=h!==Vn&&this.type===Vn,ne=h===Vn&&this.type!==Vn;for(let re=0,Z=D.length;re<Z;re++){const ee=D[re],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const me=V.getFrameExtents();if(s.multiply(me),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/me.x),s.x=r.x*me.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/me.y),s.y=r.y*me.y,V.mapSize.y=r.y)),V.map===null||H===!0||ne===!0){const we=this.type!==Vn?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new Yi(s.x,s.y,we),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Se=V.getViewportCount();for(let we=0;we<Se;we++){const Pe=V.getViewport(we);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(a),V.updateMatrices(ee,we),i=V.getFrustum(),E(C,B,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&A(V,B),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,L)};function A(D,C){const B=e.update(S);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,B,d,S,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,B,p,S,null)}function T(D,C,B,b){let M=null;const L=B.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)M=L;else if(M=B.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=M.uuid,H=C.uuid;let ne=u[O];ne===void 0&&(ne={},u[O]=ne);let re=ne[H];re===void 0&&(re=M.clone(),ne[H]=re,C.addEventListener("dispose",I)),M=re}if(M.visible=C.visible,M.wireframe=C.wireframe,b===Vn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=B}return M}function E(D,C,B,b,M){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Vn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,D.matrixWorld);const H=e.update(D),ne=D.material;if(Array.isArray(ne)){const re=H.groups;for(let Z=0,ee=re.length;Z<ee;Z++){const V=re[Z],me=ne[V.materialIndex];if(me&&me.visible){const Se=T(D,me,b,M);D.onBeforeShadow(n,D,C,B,H,Se,V),n.renderBufferDirect(B,null,H,Se,D,V),D.onAfterShadow(n,D,C,B,H,Se,V)}}}else if(ne.visible){const re=T(D,ne,b,M);D.onBeforeShadow(n,D,C,B,H,re,null),n.renderBufferDirect(B,null,H,re,D,null),D.onAfterShadow(n,D,C,B,H,re,null)}}const O=D.children;for(let H=0,ne=O.length;H<ne;H++)E(O[H],C,B,b,M)}function I(D){D.target.removeEventListener("dispose",I);for(const B in u){const b=u[B],M=D.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const xy={[qo]:$o,[Yo]:Zo,[jo]:Jo,[ws]:Ko,[$o]:qo,[Zo]:Yo,[Jo]:jo,[Ko]:ws};function Sy(n,e){function t(){let N=!1;const ye=new at;let Q=null;const ae=new at(0,0,0,0);return{setMask:function(Te){Q!==Te&&!N&&(n.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){N=Te},setClear:function(Te,be,Ve,mt,wt){wt===!0&&(Te*=mt,be*=mt,Ve*=mt),ye.set(Te,be,Ve,mt),ae.equals(ye)===!1&&(n.clearColor(Te,be,Ve,mt),ae.copy(ye))},reset:function(){N=!1,Q=null,ae.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,Q=null,ae=null,Te=null;return{setReversed:function(be){if(ye!==be){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const mt=Te;Te=null,this.setClear(mt)}ye=be},getReversed:function(){return ye},setTest:function(be){be?U(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(be){Q!==be&&!N&&(n.depthMask(be),Q=be)},setFunc:function(be){if(ye&&(be=xy[be]),ae!==be){switch(be){case qo:n.depthFunc(n.NEVER);break;case $o:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case jo:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=be}},setLocked:function(be){N=be},setClear:function(be){Te!==be&&(ye&&(be=1-be),n.clearDepth(be),Te=be)},reset:function(){N=!1,Q=null,ae=null,Te=null,ye=!1}}}function s(){let N=!1,ye=null,Q=null,ae=null,Te=null,be=null,Ve=null,mt=null,wt=null;return{setTest:function(st){N||(st?U(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(st){ye!==st&&!N&&(n.stencilMask(st),ye=st)},setFunc:function(st,on,In){(Q!==st||ae!==on||Te!==In)&&(n.stencilFunc(st,on,In),Q=st,ae=on,Te=In)},setOp:function(st,on,In){(be!==st||Ve!==on||mt!==In)&&(n.stencilOp(st,on,In),be=st,Ve=on,mt=In)},setLocked:function(st){N=st},setClear:function(st){wt!==st&&(n.clearStencil(st),wt=st)},reset:function(){N=!1,ye=null,Q=null,ae=null,Te=null,be=null,Ve=null,mt=null,wt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,p=[],_=null,S=!1,m=null,h=null,A=null,T=null,E=null,I=null,D=null,C=new Ke(0,0,0),B=0,b=!1,M=null,L=null,O=null,H=null,ne=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=ee>=2);let me=null,Se={};const we=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),qe=new at().fromArray(we),ie=new at().fromArray(Pe);function he(N,ye,Q,ae){const Te=new Uint8Array(4),be=n.createTexture();n.bindTexture(N,be),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Q;Ve++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ye+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return be}const Me={};Me[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(n.DEPTH_TEST),a.setFunc(ws),j(!1),q(Su),U(n.CULL_FACE),v(gi);function U(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function se(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function oe(N,ye){return f[N]!==ye?(n.bindFramebuffer(N,ye),f[N]=ye,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function le(N,ye){let Q=p,ae=!1;if(N){Q=d.get(ye),Q===void 0&&(Q=[],d.set(ye,Q));const Te=N.textures;if(Q.length!==Te.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ve=Te.length;be<Ve;be++)Q[be]=n.COLOR_ATTACHMENT0+be;Q.length=Te.length,ae=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Q)}function Ie(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const w={[ki]:n.FUNC_ADD,[M_]:n.FUNC_SUBTRACT,[y_]:n.FUNC_REVERSE_SUBTRACT};w[E_]=n.MIN,w[b_]=n.MAX;const R={[T_]:n.ZERO,[A_]:n.ONE,[w_]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[I_]:n.SRC_ALPHA_SATURATE,[L_]:n.DST_COLOR,[C_]:n.DST_ALPHA,[R_]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[D_]:n.ONE_MINUS_DST_COLOR,[P_]:n.ONE_MINUS_DST_ALPHA,[U_]:n.CONSTANT_COLOR,[N_]:n.ONE_MINUS_CONSTANT_COLOR,[F_]:n.CONSTANT_ALPHA,[O_]:n.ONE_MINUS_CONSTANT_ALPHA};function v(N,ye,Q,ae,Te,be,Ve,mt,wt,st){if(N===gi){S===!0&&(se(n.BLEND),S=!1);return}if(S===!1&&(U(n.BLEND),S=!0),N!==S_){if(N!==m||st!==b){if((h!==ki||E!==ki)&&(n.blendEquation(n.FUNC_ADD),h=ki,E=ki),st)switch(N){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,T=null,I=null,D=null,C.set(0,0,0),B=0,m=N,b=st}return}Te=Te||ye,be=be||Q,Ve=Ve||ae,(ye!==h||Te!==E)&&(n.blendEquationSeparate(w[ye],w[Te]),h=ye,E=Te),(Q!==A||ae!==T||be!==I||Ve!==D)&&(n.blendFuncSeparate(R[Q],R[ae],R[be],R[Ve]),A=Q,T=ae,I=be,D=Ve),(mt.equals(C)===!1||wt!==B)&&(n.blendColor(mt.r,mt.g,mt.b,wt),C.copy(mt),B=wt),m=N,b=!1}function te(N,ye){N.side===qn?se(n.CULL_FACE):U(n.CULL_FACE);let Q=N.side===Vt;ye&&(Q=!Q),j(Q),N.blending===ys&&N.transparent===!1?v(gi):v(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ae=N.stencilWrite;o.setTest(ae),ae&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function q(N){N!==__?(U(n.CULL_FACE),N!==L&&(N===Su?n.cullFace(n.BACK):N===v_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),L=N}function J(N){N!==O&&(Z&&n.lineWidth(N),O=N)}function ce(N,ye,Q){N?(U(n.POLYGON_OFFSET_FILL),(H!==ye||ne!==Q)&&(n.polygonOffset(ye,Q),H=ye,ne=Q)):se(n.POLYGON_OFFSET_FILL)}function K(N){N?U(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+re-1),me!==N&&(n.activeTexture(N),me=N)}function g(N,ye,Q){Q===void 0&&(me===null?Q=n.TEXTURE0+re-1:Q=me);let ae=Se[Q];ae===void 0&&(ae={type:void 0,texture:void 0},Se[Q]=ae),(ae.type!==N||ae.texture!==ye)&&(me!==Q&&(n.activeTexture(Q),me=Q),n.bindTexture(N,ye||Me[N]),ae.type=N,ae.texture=ye)}function P(){const N=Se[me];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function _e(N){ie.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Oe(N,ye){let Q=u.get(ye);Q===void 0&&(Q=new WeakMap,u.set(ye,Q));let ae=Q.get(N);ae===void 0&&(ae=n.getUniformBlockIndex(ye,N.name),Q.set(N,ae))}function He(N,ye){const ae=u.get(ye).get(N);l.get(ye)!==ae&&(n.uniformBlockBinding(ye,ae,N.__bindingPointIndex),l.set(ye,ae))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},me=null,Se={},f={},d=new WeakMap,p=[],_=null,S=!1,m=null,h=null,A=null,T=null,E=null,I=null,D=null,C=new Ke(0,0,0),B=0,b=!1,M=null,L=null,O=null,H=null,ne=null,qe.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:se,bindFramebuffer:oe,drawBuffers:le,useProgram:Ie,setBlending:v,setMaterial:te,setFlipSided:j,setCullFace:q,setLineWidth:J,setPolygonOffset:ce,setScissorTest:K,activeTexture:x,bindTexture:g,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:$,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:Ue,texStorage3D:fe,texSubImage2D:W,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ne,viewport:_e,reset:lt}}function My(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):pr("canvas")}function S(x,g,P){let k=1;const $=K(x);if(($.width>P||$.height>P)&&(k=P/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const W=Math.floor(k*$.width),pe=Math.floor(k*$.height);f===void 0&&(f=_(W,pe));const ue=g?_(W,pe):f;return ue.width=W,ue.height=pe,ue.getContext("2d").drawImage(x,0,0,W,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+pe+")."),ue}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,g,P,k,$=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let W=g;if(g===n.RED&&(P===n.FLOAT&&(W=n.R32F),P===n.HALF_FLOAT&&(W=n.R16F),P===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.R8UI),P===n.UNSIGNED_SHORT&&(W=n.R16UI),P===n.UNSIGNED_INT&&(W=n.R32UI),P===n.BYTE&&(W=n.R8I),P===n.SHORT&&(W=n.R16I),P===n.INT&&(W=n.R32I)),g===n.RG&&(P===n.FLOAT&&(W=n.RG32F),P===n.HALF_FLOAT&&(W=n.RG16F),P===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RG8UI),P===n.UNSIGNED_SHORT&&(W=n.RG16UI),P===n.UNSIGNED_INT&&(W=n.RG32UI),P===n.BYTE&&(W=n.RG8I),P===n.SHORT&&(W=n.RG16I),P===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGB8UI),P===n.UNSIGNED_SHORT&&(W=n.RGB16UI),P===n.UNSIGNED_INT&&(W=n.RGB32UI),P===n.BYTE&&(W=n.RGB8I),P===n.SHORT&&(W=n.RGB16I),P===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),P===n.UNSIGNED_INT&&(W=n.RGBA32UI),P===n.BYTE&&(W=n.RGBA8I),P===n.SHORT&&(W=n.RGBA16I),P===n.INT&&(W=n.RGBA32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){const pe=$?pa:je.getTransfer(k);P===n.FLOAT&&(W=n.RGBA32F),P===n.HALF_FLOAT&&(W=n.RGBA16F),P===n.UNSIGNED_BYTE&&(W=pe===rt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(x,g){let P;return x?g===null||g===$i||g===Ps?P=n.DEPTH24_STENCIL8:g===$n?P=n.DEPTH32F_STENCIL8:g===hr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===$i||g===Ps?P=n.DEPTH_COMPONENT24:g===$n?P=n.DEPTH_COMPONENT32F:g===hr&&(P=n.DEPTH_COMPONENT16),P}function I(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==vn&&x.minFilter!==wn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function D(x){const g=x.target;g.removeEventListener("dispose",D),B(g),g.isVideoTexture&&c.delete(g)}function C(x){const g=x.target;g.removeEventListener("dispose",C),M(g)}function B(x){const g=i.get(x);if(g.__webglInit===void 0)return;const P=x.source,k=d.get(P);if(k){const $=k[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(x),Object.keys(k).length===0&&d.delete(P)}i.remove(x)}function b(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const P=x.source,k=d.get(P);delete k[g.__cacheKey],a.memory.textures--}function M(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let $=0;$<g.__webglFramebuffer[k].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[k][$]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=x.textures;for(let k=0,$=P.length;k<$;k++){const W=i.get(P[k]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(P[k])}i.remove(x)}let L=0;function O(){L=0}function H(){const x=L;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),L+=1,x}function ne(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function re(x,g){const P=i.get(x);if(x.isVideoTexture&&J(x),x.isRenderTargetTexture===!1&&x.version>0&&P.__version!==x.version){const k=x.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(P,x,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function Z(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){ie(P,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function ee(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){ie(P,x,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function V(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){he(P,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const me={[tl]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[nl]:n.MIRRORED_REPEAT},Se={[vn]:n.NEAREST,[$_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},we={[Z_]:n.NEVER,[iv]:n.ALWAYS,[J_]:n.LESS,[lh]:n.LEQUAL,[Q_]:n.EQUAL,[nv]:n.GEQUAL,[ev]:n.GREATER,[tv]:n.NOTEQUAL};function Pe(x,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wn||g.magFilter===ja||g.magFilter===Cr||g.magFilter===Wi||g.minFilter===wn||g.minFilter===ja||g.minFilter===Cr||g.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Se[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===vn||g.minFilter!==Cr&&g.minFilter!==Wi||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qe(x,g){let P=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",D));const k=g.source;let $=d.get(k);$===void 0&&($={},d.set(k,$));const W=ne(g);if(W!==x.__cacheKey){$[W]===void 0&&($[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),$[W].usedTimes++;const pe=$[x.__cacheKey];pe!==void 0&&($[x.__cacheKey].usedTimes--,pe.usedTimes===0&&b(g)),x.__cacheKey=W,x.__webglTexture=$[W].texture}return P}function ie(x,g,P){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const $=qe(x,g),W=g.source;t.bindTexture(k,x.__webglTexture,n.TEXTURE0+P);const pe=i.get(W);if(W.version!==pe.__version||$===!0){t.activeTexture(n.TEXTURE0+P);const ue=je.getPrimaries(je.workingColorSpace),ge=g.colorSpace===pi?null:je.getPrimaries(g.colorSpace),Ue=g.colorSpace===pi||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let fe=S(g.image,!1,s.maxTextureSize);fe=ce(g,fe);const xe=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type);let Ne=T(g.internalFormat,xe,Ce,g.colorSpace,g.isVideoTexture);Pe(k,g);let _e;const Oe=g.mipmaps,He=g.isVideoTexture!==!0,lt=pe.__version===void 0||$===!0,N=W.dataReady,ye=I(g,fe);if(g.isDepthTexture)Ne=E(g.format===Ls,g.type),lt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,xe,Ce,null));else if(g.isDataTexture)if(Oe.length>0){He&&lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Oe[0].width,Oe[0].height);for(let Q=0,ae=Oe.length;Q<ae;Q++)_e=Oe[Q],He?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,Q,Ne,_e.width,_e.height,0,xe,Ce,_e.data);g.generateMipmaps=!1}else He?(lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,fe.width,fe.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Ce,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,fe.width,fe.height,0,xe,Ce,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){He&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,Oe[0].width,Oe[0].height,fe.depth);for(let Q=0,ae=Oe.length;Q<ae;Q++)if(_e=Oe[Q],g.format!==mn)if(xe!==null)if(He){if(N)if(g.layerUpdates.size>0){const Te=ju(_e.width,_e.height,g.format,g.type);for(const be of g.layerUpdates){const Ve=_e.data.subarray(be*Te/_e.data.BYTES_PER_ELEMENT,(be+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,be,_e.width,_e.height,1,xe,Ve)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,fe.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ne,_e.width,_e.height,fe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,fe.depth,xe,Ce,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ne,_e.width,_e.height,fe.depth,0,xe,Ce,_e.data)}else{He&&lt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Oe[0].width,Oe[0].height);for(let Q=0,ae=Oe.length;Q<ae;Q++)_e=Oe[Q],g.format!==mn?xe!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,Q,Ne,_e.width,_e.height,0,xe,Ce,_e.data)}else if(g.isDataArrayTexture)if(He){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,fe.width,fe.height,fe.depth),N)if(g.layerUpdates.size>0){const Q=ju(fe.width,fe.height,g.format,g.type);for(const ae of g.layerUpdates){const Te=fe.data.subarray(ae*Q/fe.data.BYTES_PER_ELEMENT,(ae+1)*Q/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,xe,Ce,Te)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(g.isData3DTexture)He?(lt&&t.texStorage3D(n.TEXTURE_3D,ye,Ne,fe.width,fe.height,fe.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ce,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,xe,Ce,fe.data);else if(g.isFramebufferTexture){if(lt)if(He)t.texStorage2D(n.TEXTURE_2D,ye,Ne,fe.width,fe.height);else{let Q=fe.width,ae=fe.height;for(let Te=0;Te<ye;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ne,Q,ae,0,xe,Ce,null),Q>>=1,ae>>=1}}else if(Oe.length>0){if(He&&lt){const Q=K(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ne,Q.width,Q.height)}for(let Q=0,ae=Oe.length;Q<ae;Q++)_e=Oe[Q],He?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe,Ce,_e):t.texImage2D(n.TEXTURE_2D,Q,Ne,xe,Ce,_e);g.generateMipmaps=!1}else if(He){if(lt){const Q=K(fe);t.texStorage2D(n.TEXTURE_2D,ye,Ne,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,xe,Ce,fe);m(g)&&h(k),pe.__version=W.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function he(x,g,P){if(g.image.length!==6)return;const k=qe(x,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+P);const W=i.get($);if($.version!==W.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const pe=je.getPrimaries(je.workingColorSpace),ue=g.colorSpace===pi?null:je.getPrimaries(g.colorSpace),ge=g.colorSpace===pi||pe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!Ue&&!fe?xe[ae]=S(g.image[ae],!0,s.maxCubemapSize):xe[ae]=fe?g.image[ae].image:g.image[ae],xe[ae]=ce(g,xe[ae]);const Ce=xe[0],Ne=r.convert(g.format,g.colorSpace),_e=r.convert(g.type),Oe=T(g.internalFormat,Ne,_e,g.colorSpace),He=g.isVideoTexture!==!0,lt=W.__version===void 0||k===!0,N=$.dataReady;let ye=I(g,Ce);Pe(n.TEXTURE_CUBE_MAP,g);let Q;if(Ue){He&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Oe,Ce.width,Ce.height);for(let ae=0;ae<6;ae++){Q=xe[ae].mipmaps;for(let Te=0;Te<Q.length;Te++){const be=Q[Te];g.format!==mn?Ne!==null?He?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,be.width,be.height,Ne,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,be.width,be.height,Ne,_e,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Oe,be.width,be.height,0,Ne,_e,be.data)}}}else{if(Q=g.mipmaps,He&&lt){Q.length>0&&ye++;const ae=K(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Oe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ne,_e,xe[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,xe[ae].width,xe[ae].height,0,Ne,_e,xe[ae].data);for(let Te=0;Te<Q.length;Te++){const Ve=Q[Te].image[ae].image;He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,Ve.width,Ve.height,Ne,_e,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Oe,Ve.width,Ve.height,0,Ne,_e,Ve.data)}}else{He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,_e,xe[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,Ne,_e,xe[ae]);for(let Te=0;Te<Q.length;Te++){const be=Q[Te];He?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,Ne,_e,be.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Oe,Ne,_e,be.image[ae])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),W.__version=$.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Me(x,g,P,k,$,W){const pe=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),ge=T(P.internalFormat,pe,ue,P.colorSpace),Ue=i.get(g),fe=i.get(P);if(fe.__renderTarget=g,!Ue.__hasExternalTextures){const xe=Math.max(1,g.width>>W),Ce=Math.max(1,g.height>>W);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,W,ge,xe,Ce,g.depth,0,pe,ue,null):t.texImage2D($,W,ge,xe,Ce,0,pe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,$,fe.__webglTexture,0,j(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,$,fe.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(x,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const k=g.depthTexture,$=k&&k.isDepthTexture?k.type:null,W=E(g.stencilBuffer,$),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=j(g);q(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,W,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,x)}else{const k=g.textures;for(let $=0;$<k.length;$++){const W=k[$],pe=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),ge=T(W.internalFormat,pe,ue,W.colorSpace),Ue=j(g);P&&q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ge,g.width,g.height):q(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ge,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ge,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const $=k.__webglTexture,W=j(g);if(g.depthTexture.format===Es)q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(g.depthTexture.format===Ls)q(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function oe(x){const g=i.get(x),P=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const k=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=k}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");se(g.__webglFramebuffer,x)}else if(P){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),U(g.__webglDepthbuffer[k],x,!1);else{const $=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),U(g.__webglDepthbuffer,x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(x,g,P){const k=i.get(x);g!==void 0&&Me(k.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&oe(x)}function Ie(x){const g=x.texture,P=i.get(x),k=i.get(g);x.addEventListener("dispose",C);const $=x.textures,W=x.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++),W){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let ge=0;ge<g.mipmaps.length;ge++)P.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ue=0,ge=$.length;ue<ge;ue++){const Ue=i.get($[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&q(x)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const ge=$[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Ue=r.convert(ge.format,ge.colorSpace),fe=r.convert(ge.type),xe=T(ge.internalFormat,Ue,fe,ge.colorSpace,x.isXRRenderTarget===!0),Ce=j(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),U(P.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Me(P.__webglFramebuffer[ue][ge],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else Me(P.__webglFramebuffer[ue],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ue=0,ge=$.length;ue<ge;ue++){const Ue=$[ue],fe=i.get(Ue);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Pe(n.TEXTURE_2D,Ue),Me(P.__webglFramebuffer,x,Ue,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ue)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ue=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,k.__webglTexture),Pe(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Me(P.__webglFramebuffer[ge],x,g,n.COLOR_ATTACHMENT0,ue,ge);else Me(P.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ue,0);m(g)&&h(ue),t.unbindTexture()}x.depthBuffer&&oe(x)}function w(x){const g=x.textures;for(let P=0,k=g.length;P<k;P++){const $=g[P];if(m($)){const W=A(x),pe=i.get($).__webglTexture;t.bindTexture(W,pe),h(W),t.unbindTexture()}}}const R=[],v=[];function te(x){if(x.samples>0){if(q(x)===!1){const g=x.textures,P=x.width,k=x.height;let $=n.COLOR_BUFFER_BIT;const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(x),ue=g.length>1;if(ue)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(x.resolveDepthBuffer&&(x.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,$,n.NEAREST),l===!0&&(R.length=0,v.length=0,R.push(n.COLOR_ATTACHMENT0+ge),x.depthBuffer&&x.resolveDepthBuffer===!1&&(R.push(W),v.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,v)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function j(x){return Math.min(s.maxSamples,x.samples)}function q(x){const g=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(x){const g=a.render.frame;c.get(x)!==g&&(c.set(x,g),x.update())}function ce(x,g){const P=x.colorSpace,k=x.format,$=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||P!==Ds&&P!==pi&&(je.getTransfer(P)===rt?(k!==mn||$!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function K(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(u.width=x.naturalWidth||x.width,u.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(u.width=x.displayWidth,u.height=x.displayHeight):(u.width=x.width,u.height=x.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=q}function yy(n,e){function t(i,s=pi){let r;const a=je.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return n.BYTE;if(i===Jd)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===_r)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===th)return n.RGB;if(i===mn)return n.RGBA;if(i===nh)return n.LUMINANCE;if(i===ih)return n.LUMINANCE_ALPHA;if(i===Es)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===rh)return n.RG;if(i===sc)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===sa)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===ll)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ul||i===fl||i===dl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===yl||i===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ul)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===bl||i===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ah||i===Al||i===wl||i===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,by=`
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

}`;class Ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:Ey,fragmentShader:by,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ay extends Us{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const S=new Ty,m=t.getContextAttributes();let h=null,A=null;const T=[],E=[],I=new Je;let D=null;const C=new jt;C.viewport=new at;const B=new jt;B.viewport=new at;const b=[C,B],M=new Yv;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=T[ie];return he===void 0&&(he=new vo,T[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=T[ie];return he===void 0&&(he=new vo,T[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=T[ie];return he===void 0&&(he=new vo,T[ie]=he),he.getHandSpace()};function H(ie){const he=E.indexOf(ie.inputSource);if(he===-1)return;const Me=T[he];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,u||a),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",re);for(let ie=0;ie<T.length;ie++){const he=E[ie];he!==null&&(E[ie]=null,T[ie].disconnect(he))}L=null,O=null,S.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,A=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,U=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Ls:Es,U=m.stencil?Ps:$i);const oe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Yi(d.textureWidth,d.textureHeight,{format:mn,type:Jn,depthTexture:new Sh(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Yi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function re(ie){for(let he=0;he<ie.removed.length;he++){const Me=ie.removed[he],U=E.indexOf(Me);U>=0&&(E[U]=null,T[U].disconnect(Me))}for(let he=0;he<ie.added.length;he++){const Me=ie.added[he];let U=E.indexOf(Me);if(U===-1){for(let oe=0;oe<T.length;oe++)if(oe>=E.length){E.push(Me),U=oe;break}else if(E[oe]===null){E[oe]=Me,U=oe;break}if(U===-1)break}const se=T[U];se&&se.connect(Me)}}const Z=new G,ee=new G;function V(ie,he,Me){Z.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);const U=Z.distanceTo(ee),se=he.projectionMatrix.elements,oe=Me.projectionMatrix.elements,le=se[14]/(se[10]-1),Ie=se[14]/(se[10]+1),w=(se[9]+1)/se[5],R=(se[9]-1)/se[5],v=(se[8]-1)/se[0],te=(oe[8]+1)/oe[0],j=le*v,q=le*te,J=U/(-v+te),ce=J*-v;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(J),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),se[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const K=le+J,x=Ie+J,g=j-ce,P=q+(U-ce),k=w*Ie/x*K,$=R*Ie/x*K;ie.projectionMatrix.makePerspective(g,P,k,$,K,x),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function me(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let he=ie.near,Me=ie.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),M.near=B.near=C.near=he,M.far=B.far=C.far=Me,(L!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,O=M.far),C.layers.mask=ie.layers.mask|2,B.layers.mask=ie.layers.mask|4,M.layers.mask=C.layers.mask|B.layers.mask;const U=ie.parent,se=M.cameras;me(M,U);for(let oe=0;oe<se.length;oe++)me(se[oe],U);se.length===2?V(M,C,B):M.projectionMatrix.copy(C.projectionMatrix),Se(ie,M,U)};function Se(ie,he,Me){Me===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Cl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let we=null;function Pe(ie,he){if(c=he.getViewerPose(u||a),_=he,c!==null){const Me=c.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let U=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,U=!0);for(let le=0;le<Me.length;le++){const Ie=Me[le];let w=null;if(p!==null)w=p.getViewport(Ie);else{const v=f.getViewSubImage(d,Ie);w=v.viewport,le===0&&(e.setRenderTargetTextures(A,v.colorTexture,d.ignoreDepthValues?void 0:v.depthStencilTexture),e.setRenderTarget(A))}let R=b[le];R===void 0&&(R=new jt,R.layers.enable(le),R.viewport=new at,b[le]=R),R.matrix.fromArray(Ie.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ie.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),le===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),U===!0&&M.cameras.push(R)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(Me[0]);le&&le.isValid&&le.texture&&S.init(e,le,s.renderState)}}for(let Me=0;Me<T.length;Me++){const U=E[Me],se=T[Me];U!==null&&se!==void 0&&se.update(U,he,u||a)}we&&we(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const qe=new yh;qe.setAnimationLoop(Pe),this.setAnimationLoop=function(ie){we=ie},this.dispose=function(){}}}const Fi=new Dn,wy=new pt;function Ry(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_h(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),S(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,A,T):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Vt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Vt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,Fi.copy(E),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(wy.makeRotationFromEuler(Fi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cy(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function u(A,T){let E=s[A.id];E===void 0&&(_(A),E=c(A),s[A.id]=E,A.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(A,I);const D=e.render.frame;r[A.id]!==D&&(d(A),r[A.id]=D)}function c(A){const T=f();A.__bindingPointIndex=T;const E=n.createBuffer(),I=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],E=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,C=E.length;D<C;D++){const B=Array.isArray(E[D])?E[D]:[E[D]];for(let b=0,M=B.length;b<M;b++){const L=B[b];if(p(L,D,b,I)===!0){const O=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let re=0;re<H.length;re++){const Z=H[re],ee=S(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+ne,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,ne),ne+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,E,I){const D=A.value,C=T+"_"+E;if(I[C]===void 0)return typeof D=="number"||typeof D=="boolean"?I[C]=D:I[C]=D.clone(),!0;{const B=I[C];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return I[C]=D,!0}else if(B.equals(D)===!1)return B.copy(D),!0}return!1}function _(A){const T=A.uniforms;let E=0;const I=16;for(let C=0,B=T.length;C<B;C++){const b=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,L=b.length;M<L;M++){const O=b[M],H=Array.isArray(O.value)?O.value:[O.value];for(let ne=0,re=H.length;ne<re;ne++){const Z=H[ne],ee=S(Z),V=E%I,me=V%ee.boundary,Se=V+me;E+=me,Se!==0&&I-Se<ee.storage&&(E+=I-Se),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=ee.storage}}}const D=E%I;return D>0&&(E+=I-D),A.__size=E,A.__cache={},this}function S(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:u,dispose:h}}class Py{constructor(e={}){const{canvas:t=rv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),S=new Int32Array(4);let m=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=_i,this.toneMappingExposure=1;const E=this;let I=!1,D=0,C=0,B=null,b=-1,M=null;const L=new at,O=new at;let H=null;const ne=new Ke(0);let re=0,Z=t.width,ee=t.height,V=1,me=null,Se=null;const we=new at(0,0,Z,ee),Pe=new at(0,0,Z,ee);let qe=!1;const ie=new oc;let he=!1,Me=!1;this.transmissionResolutionScale=1;const U=new pt,se=new pt,oe=new G,le=new at,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return B===null?V:1}let v=i;function te(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",be,!1),v===null){const F="webgl2";if(v=te(F,y),v===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let j,q,J,ce,K,x,g,P,k,$,W,pe,ue,ge,Ue,fe,xe,Ce,Ne,_e,Oe,He,lt,N;function ye(){j=new HS(v),j.init(),He=new yy(v,j),q=new US(v,j,e,He),J=new Sy(v,j),q.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ce=new GS(v),K=new oy,x=new My(v,j,J,K,q,He,ce),g=new FS(E),P=new zS(E),k=new Kv(v),lt=new DS(v,k),$=new kS(v,k,ce,lt),W=new XS(v,$,k,ce),Ne=new WS(v,q,x),fe=new NS(K),pe=new ay(E,g,P,j,q,lt,fe),ue=new Ry(E,K),ge=new cy,Ue=new my(j),Ce=new LS(E,g,P,J,W,p,l),xe=new vy(E,W,q),N=new Cy(v,ce,q,J),_e=new IS(v,j,ce),Oe=new VS(v,j,ce),ce.programs=pe.programs,E.capabilities=q,E.extensions=j,E.properties=K,E.renderLists=ge,E.shadowMap=xe,E.state=J,E.info=ce}ye();const Q=new Ay(E,v);this.xr=Q,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const y=j.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=j.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(Z,ee,!1))},this.getSize=function(y){return y.set(Z,ee)},this.setSize=function(y,F,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,ee=F,t.width=Math.floor(y*V),t.height=Math.floor(F*V),X===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Z*V,ee*V).floor()},this.setDrawingBufferSize=function(y,F,X){Z=y,ee=F,V=X,t.width=Math.floor(y*X),t.height=Math.floor(F*X),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,F,X,Y){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,F,X,Y),J.viewport(L.copy(we).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Pe)},this.setScissor=function(y,F,X,Y){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,F,X,Y),J.scissor(O.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){J.setScissorTest(qe=y)},this.setOpaqueSort=function(y){me=y},this.setTransparentSort=function(y){Se=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(y=!0,F=!0,X=!0){let Y=0;if(y){let z=!1;if(B!==null){const de=B.texture.format;z=de===rc||de===sc||de===ic}if(z){const de=B.texture.type,Ee=de===Jn||de===$i||de===hr||de===Ps||de===tc||de===nc,Ae=Ce.getClearColor(),Re=Ce.getClearAlpha(),Be=Ae.r,ze=Ae.g,Le=Ae.b;Ee?(_[0]=Be,_[1]=ze,_[2]=Le,_[3]=Re,v.clearBufferuiv(v.COLOR,0,_)):(S[0]=Be,S[1]=ze,S[2]=Le,S[3]=Re,v.clearBufferiv(v.COLOR,0,S))}else Y|=v.COLOR_BUFFER_BIT}F&&(Y|=v.DEPTH_BUFFER_BIT),X&&(Y|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ce.dispose(),ge.dispose(),Ue.dispose(),K.dispose(),g.dispose(),P.dispose(),W.dispose(),lt.dispose(),N.dispose(),pe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",hc),Q.removeEventListener("sessionend",pc),Ti.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=ce.autoReset,F=xe.enabled,X=xe.autoUpdate,Y=xe.needsUpdate,z=xe.type;ye(),ce.autoReset=y,xe.enabled=F,xe.autoUpdate=X,xe.needsUpdate=Y,xe.type=z}function be(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ve(y){const F=y.target;F.removeEventListener("dispose",Ve),mt(F)}function mt(y){wt(y),K.remove(y)}function wt(y){const F=K.get(y).programs;F!==void 0&&(F.forEach(function(X){pe.releaseProgram(X)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,X,Y,z,de){F===null&&(F=Ie);const Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Rh(y,F,X,Y,z);J.setMaterial(Y,Ee);let Re=X.index,Be=1;if(Y.wireframe===!0){if(Re=$.getWireframeAttribute(X),Re===void 0)return;Be=2}const ze=X.drawRange,Le=X.attributes.position;let $e=ze.start*Be,Qe=(ze.start+ze.count)*Be;de!==null&&($e=Math.max($e,de.start*Be),Qe=Math.min(Qe,(de.start+de.count)*Be)),Re!==null?($e=Math.max($e,0),Qe=Math.min(Qe,Re.count)):Le!=null&&($e=Math.max($e,0),Qe=Math.min(Qe,Le.count));const _t=Qe-$e;if(_t<0||_t===1/0)return;lt.setup(z,Y,Ae,X,Re);let gt,Ye=_e;if(Re!==null&&(gt=k.get(Re),Ye=Oe,Ye.setIndex(gt)),z.isMesh)Y.wireframe===!0?(J.setLineWidth(Y.wireframeLinewidth*R()),Ye.setMode(v.LINES)):Ye.setMode(v.TRIANGLES);else if(z.isLine){let De=Y.linewidth;De===void 0&&(De=1),J.setLineWidth(De*R()),z.isLineSegments?Ye.setMode(v.LINES):z.isLineLoop?Ye.setMode(v.LINE_LOOP):Ye.setMode(v.LINE_STRIP)}else z.isPoints?Ye.setMode(v.POINTS):z.isSprite&&Ye.setMode(v.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ye.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const De=z._multiDrawStarts,Tt=z._multiDrawCounts,et=z._multiDrawCount,ln=Re?k.get(Re).bytesPerElement:1,Ki=K.get(Y).currentProgram.getUniforms();for(let Wt=0;Wt<et;Wt++)Ki.setValue(v,"_gl_DrawID",Wt),Ye.render(De[Wt]/ln,Tt[Wt])}else if(z.isInstancedMesh)Ye.renderInstances($e,_t,z.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,De);Ye.renderInstances($e,_t,Tt)}else Ye.render($e,_t)};function st(y,F,X){y.transparent===!0&&y.side===qn&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,br(y,F,X),y.side=xi,y.needsUpdate=!0,br(y,F,X),y.side=qn):br(y,F,X)}this.compile=function(y,F,X=null){X===null&&(X=y),h=Ue.get(X),h.init(F),T.push(h),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),y!==X&&y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const Y=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ae=de[Ee];st(Ae,X,z),Y.add(Ae)}else st(de,X,z),Y.add(de)}),T.pop(),h=null,Y},this.compileAsync=function(y,F,X=null){const Y=this.compile(y,F,X);return new Promise(z=>{function de(){if(Y.forEach(function(Ee){K.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){z(y);return}setTimeout(de,10)}j.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let on=null;function In(y){on&&on(y)}function hc(){Ti.stop()}function pc(){Ti.start()}const Ti=new yh;Ti.setAnimationLoop(In),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(y){on=y,Q.setAnimationLoop(y),y===null?Ti.stop():Ti.start()},Q.addEventListener("sessionstart",hc),Q.addEventListener("sessionend",pc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,F,B),h=Ue.get(y,T.length),h.init(F),T.push(h),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(se),Me=this.localClippingEnabled,he=fe.init(this.clippingPlanes,Me),m=ge.get(y,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Da(de,F,-1/0,E.sortObjects)}Da(y,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(me,Se),w=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,w&&Ce.addToRenderList(m,y),this.info.render.frame++,he===!0&&fe.beginShadows();const X=h.state.shadowsArray;xe.render(X,y,F),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(h.setupLights(),F.isArrayCamera){const de=F.cameras;if(z.length>0)for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Re=de[Ee];gc(Y,z,y,Re)}w&&Ce.render(y);for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Re=de[Ee];mc(m,y,Re,Re.viewport)}}else z.length>0&&gc(Y,z,y,F),w&&Ce.render(y),mc(m,y,F);B!==null&&C===0&&(x.updateMultisampleRenderTarget(B),x.updateRenderTargetMipmap(B)),y.isScene===!0&&y.onAfterRender(E,y,F),lt.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],he===!0&&fe.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Da(y,F,X,Y){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){Y&&le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const Ee=W.update(y),Ae=y.material;Ae.visible&&m.push(y,Ee,Ae,X,le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const Ee=W.update(y),Ae=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),le.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),le.copy(Ee.boundingSphere.center)),le.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){const Re=Ee.groups;for(let Be=0,ze=Re.length;Be<ze;Be++){const Le=Re[Be],$e=Ae[Le.materialIndex];$e&&$e.visible&&m.push(y,Ee,$e,X,le.z,Le)}}else Ae.visible&&m.push(y,Ee,Ae,X,le.z,null)}}const de=y.children;for(let Ee=0,Ae=de.length;Ee<Ae;Ee++)Da(de[Ee],F,X,Y)}function mc(y,F,X,Y){const z=y.opaque,de=y.transmissive,Ee=y.transparent;h.setupLightsView(X),he===!0&&fe.setGlobalState(E.clippingPlanes,X),Y&&J.viewport(L.copy(Y)),z.length>0&&Er(z,F,X),de.length>0&&Er(de,F,X),Ee.length>0&&Er(Ee,F,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function gc(y,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Yi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?_r:Jn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const de=h.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||L;de.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);const Ae=E.getRenderTarget();E.setRenderTarget(de),E.getClearColor(ne),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),w&&Ce.render(X);const Re=E.toneMapping;E.toneMapping=_i;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),he===!0&&fe.setGlobalState(E.clippingPlanes,Y),Er(y,X,Y),x.updateMultisampleRenderTarget(de),x.updateRenderTargetMipmap(de),j.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,$e=F.length;Le<$e;Le++){const Qe=F[Le],_t=Qe.object,gt=Qe.geometry,Ye=Qe.material,De=Qe.group;if(Ye.side===qn&&_t.layers.test(Y.layers)){const Tt=Ye.side;Ye.side=Vt,Ye.needsUpdate=!0,_c(_t,X,Y,gt,Ye,De),Ye.side=Tt,Ye.needsUpdate=!0,ze=!0}}ze===!0&&(x.updateMultisampleRenderTarget(de),x.updateRenderTargetMipmap(de))}E.setRenderTarget(Ae),E.setClearColor(ne,re),Be!==void 0&&(Y.viewport=Be),E.toneMapping=Re}function Er(y,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let z=0,de=y.length;z<de;z++){const Ee=y[z],Ae=Ee.object,Re=Ee.geometry,Be=Y===null?Ee.material:Y,ze=Ee.group;Ae.layers.test(X.layers)&&_c(Ae,F,X,Re,Be,ze)}}function _c(y,F,X,Y,z,de){y.onBeforeRender(E,F,X,Y,z,de),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(E,F,X,Y,y,de),z.transparent===!0&&z.side===qn&&z.forceSinglePass===!1?(z.side=Vt,z.needsUpdate=!0,E.renderBufferDirect(X,F,Y,z,y,de),z.side=xi,z.needsUpdate=!0,E.renderBufferDirect(X,F,Y,z,y,de),z.side=qn):E.renderBufferDirect(X,F,Y,z,y,de),y.onAfterRender(E,F,X,Y,z,de)}function br(y,F,X){F.isScene!==!0&&(F=Ie);const Y=K.get(y),z=h.state.lights,de=h.state.shadowsArray,Ee=z.state.version,Ae=pe.getParameters(y,z.state,de,F,X),Re=pe.getProgramCacheKey(Ae);let Be=Y.programs;Y.environment=y.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(y.isMeshStandardMaterial?P:g).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",Ve),Be=new Map,Y.programs=Be);let ze=Be.get(Re);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Ee)return xc(y,Ae),ze}else Ae.uniforms=pe.getUniforms(y),y.onBeforeCompile(Ae,E),ze=pe.acquireProgram(Ae,Re),Be.set(Re,ze),Y.uniforms=Ae.uniforms;const Le=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=fe.uniform),xc(y,Ae),Y.needsLights=Ph(y),Y.lightsStateVersion=Ee,Y.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function vc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=aa.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function xc(y,F){const X=K.get(y);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Rh(y,F,X,Y,z){F.isScene!==!0&&(F=Ie),x.resetTextureUnits();const de=F.fog,Ee=Y.isMeshStandardMaterial?F.environment:null,Ae=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ds,Re=(Y.isMeshStandardMaterial?P:g).get(Y.envMap||Ee),Be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color;let _t=_i;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=E.toneMapping);const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=gt!==void 0?gt.length:0,De=K.get(Y),Tt=h.state.lights;if(he===!0&&(Me===!0||y!==M)){const Dt=y===M&&Y.id===b;fe.setState(Y,y,Dt)}let et=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Tt.state.version||De.outputColorSpace!==Ae||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Re||Y.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==fe.numPlanes||De.numIntersection!==fe.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ze||De.morphTargets!==Le||De.morphNormals!==$e||De.morphColors!==Qe||De.toneMapping!==_t||De.morphTargetsCount!==Ye)&&(et=!0):(et=!0,De.__version=Y.version);let ln=De.currentProgram;et===!0&&(ln=br(Y,F,z));let Ki=!1,Wt=!1,Fs=!1;const ft=ln.getUniforms(),Jt=De.uniforms;if(J.useProgram(ln.program)&&(Ki=!0,Wt=!0,Fs=!0),Y.id!==b&&(b=Y.id,Wt=!0),Ki||M!==y){J.buffers.depth.getReversed()?(U.copy(y.projectionMatrix),ov(U),lv(U),ft.setValue(v,"projectionMatrix",U)):ft.setValue(v,"projectionMatrix",y.projectionMatrix),ft.setValue(v,"viewMatrix",y.matrixWorldInverse);const Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(v,oe.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&ft.setValue(v,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ft.setValue(v,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Wt=!0,Fs=!0)}if(z.isSkinnedMesh){ft.setOptional(v,z,"bindMatrix"),ft.setOptional(v,z,"bindMatrixInverse");const Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(v,"boneTexture",Dt.boneTexture,x))}z.isBatchedMesh&&(ft.setOptional(v,z,"batchingTexture"),ft.setValue(v,"batchingTexture",z._matricesTexture,x),ft.setOptional(v,z,"batchingIdTexture"),ft.setValue(v,"batchingIdTexture",z._indirectTexture,x),ft.setOptional(v,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(v,"batchingColorTexture",z._colorsTexture,x));const Qt=X.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Ne.update(z,X,ln),(Wt||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,ft.setValue(v,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jt.envMap.value=Re,Jt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Wt&&(ft.setValue(v,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&Ch(Jt,Fs),de&&Y.fog===!0&&ue.refreshFogUniforms(Jt,de),ue.refreshMaterialUniforms(Jt,Y,V,ee,h.state.transmissionRenderTarget[y.id]),aa.upload(v,vc(De),Jt,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(aa.upload(v,vc(De),Jt,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ft.setValue(v,"center",z.center),ft.setValue(v,"modelViewMatrix",z.modelViewMatrix),ft.setValue(v,"normalMatrix",z.normalMatrix),ft.setValue(v,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Dt=Y.uniformsGroups;for(let Bt=0,Ia=Dt.length;Bt<Ia;Bt++){const Ai=Dt[Bt];N.update(Ai,ln),N.bind(Ai,ln)}}return ln}function Ch(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ph(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,F,X){K.get(y.texture).__webglTexture=F,K.get(y.depthTexture).__webglTexture=X;const Y=K.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const X=K.get(y);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const Lh=v.createFramebuffer();this.setRenderTarget=function(y,F=0,X=0){B=y,D=F,C=X;let Y=!0,z=null,de=!1,Ee=!1;if(y){const Re=K.get(y);if(Re.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(v.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(Re.__hasExternalTextures)x.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Le=y.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&K.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const ze=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?z=ze[F][X]:z=ze[F],de=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?z=K.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[X]:z=ze,L.copy(y.viewport),O.copy(y.scissor),H=y.scissorTest}else L.copy(we).multiplyScalar(V).floor(),O.copy(Pe).multiplyScalar(V).floor(),H=qe;if(X!==0&&(z=Lh),J.bindFramebuffer(v.FRAMEBUFFER,z)&&Y&&J.drawBuffers(y,z),J.viewport(L),J.scissor(O),J.setScissorTest(H),de){const Re=K.get(y.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(Ee){const Re=K.get(y.texture),Be=F;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Re.__webglTexture,X,Be)}else if(y!==null&&X!==0){const Re=K.get(y.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(y,F,X,Y,z,de,Ee){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){J.bindFramebuffer(v.FRAMEBUFFER,Ae);try{const Re=y.texture,Be=Re.format,ze=Re.type;if(!q.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-Y&&X>=0&&X<=y.height-z&&v.readPixels(F,X,Y,z,He.convert(Be),He.convert(ze),de)}finally{const Re=B!==null?K.get(B).__webglFramebuffer:null;J.bindFramebuffer(v.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,F,X,Y,z,de,Ee){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){const Re=y.texture,Be=Re.format,ze=Re.type;if(!q.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-Y&&X>=0&&X<=y.height-z){J.bindFramebuffer(v.FRAMEBUFFER,Ae);const Le=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.bufferData(v.PIXEL_PACK_BUFFER,de.byteLength,v.STREAM_READ),v.readPixels(F,X,Y,z,He.convert(Be),He.convert(ze),0);const $e=B!==null?K.get(B).__webglFramebuffer:null;J.bindFramebuffer(v.FRAMEBUFFER,$e);const Qe=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await av(v,Qe,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Le),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,de),v.deleteBuffer(Le),v.deleteSync(Qe),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,X=0){y.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-X),z=Math.floor(y.image.width*Y),de=Math.floor(y.image.height*Y),Ee=F!==null?F.x:0,Ae=F!==null?F.y:0;x.setTexture2D(y,0),v.copyTexSubImage2D(v.TEXTURE_2D,X,0,0,Ee,Ae,z,de),J.unbindTexture()};const Dh=v.createFramebuffer(),Ih=v.createFramebuffer();this.copyTextureToTexture=function(y,F,X=null,Y=null,z=0,de=null){y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],F=arguments[2],de=arguments[3]||0,X=null),de===null&&(z!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=z,z=0):de=0);let Ee,Ae,Re,Be,ze,Le,$e,Qe,_t;const gt=y.isCompressedTexture?y.mipmaps[de]:y.image;if(X!==null)Ee=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ze=X.min.y,Le=X.isBox3?X.min.z:0;else{const Qt=Math.pow(2,-z);Ee=Math.floor(gt.width*Qt),Ae=Math.floor(gt.height*Qt),y.isDataArrayTexture?Re=gt.depth:y.isData3DTexture?Re=Math.floor(gt.depth*Qt):Re=1,Be=0,ze=0,Le=0}Y!==null?($e=Y.x,Qe=Y.y,_t=Y.z):($e=0,Qe=0,_t=0);const Ye=He.convert(F.format),De=He.convert(F.type);let Tt;F.isData3DTexture?(x.setTexture3D(F,0),Tt=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),Tt=v.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),Tt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const et=v.getParameter(v.UNPACK_ROW_LENGTH),ln=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Ki=v.getParameter(v.UNPACK_SKIP_PIXELS),Wt=v.getParameter(v.UNPACK_SKIP_ROWS),Fs=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,gt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,gt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(v.UNPACK_SKIP_ROWS,ze),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Le);const ft=y.isDataArrayTexture||y.isData3DTexture,Jt=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Qt=K.get(y),Dt=K.get(F),Bt=K.get(Qt.__renderTarget),Ia=K.get(Dt.__renderTarget);J.bindFramebuffer(v.READ_FRAMEBUFFER,Bt.__webglFramebuffer),J.bindFramebuffer(v.DRAW_FRAMEBUFFER,Ia.__webglFramebuffer);for(let Ai=0;Ai<Re;Ai++)ft&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(y).__webglTexture,z,Le+Ai),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(F).__webglTexture,de,_t+Ai)),v.blitFramebuffer(Be,ze,Ee,Ae,$e,Qe,Ee,Ae,v.DEPTH_BUFFER_BIT,v.NEAREST);J.bindFramebuffer(v.READ_FRAMEBUFFER,null),J.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||K.has(y)){const Qt=K.get(y),Dt=K.get(F);J.bindFramebuffer(v.READ_FRAMEBUFFER,Dh),J.bindFramebuffer(v.DRAW_FRAMEBUFFER,Ih);for(let Bt=0;Bt<Re;Bt++)ft?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Qt.__webglTexture,z,Le+Bt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Qt.__webglTexture,z),Jt?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dt.__webglTexture,de,_t+Bt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Dt.__webglTexture,de),z!==0?v.blitFramebuffer(Be,ze,Ee,Ae,$e,Qe,Ee,Ae,v.COLOR_BUFFER_BIT,v.NEAREST):Jt?v.copyTexSubImage3D(Tt,de,$e,Qe,_t+Bt,Be,ze,Ee,Ae):v.copyTexSubImage2D(Tt,de,$e,Qe,Be,ze,Ee,Ae);J.bindFramebuffer(v.READ_FRAMEBUFFER,null),J.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Jt?y.isDataTexture||y.isData3DTexture?v.texSubImage3D(Tt,de,$e,Qe,_t,Ee,Ae,Re,Ye,De,gt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(Tt,de,$e,Qe,_t,Ee,Ae,Re,Ye,gt.data):v.texSubImage3D(Tt,de,$e,Qe,_t,Ee,Ae,Re,Ye,De,gt):y.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,de,$e,Qe,Ee,Ae,Ye,De,gt.data):y.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,de,$e,Qe,gt.width,gt.height,Ye,gt.data):v.texSubImage2D(v.TEXTURE_2D,de,$e,Qe,Ee,Ae,Ye,De,gt);v.pixelStorei(v.UNPACK_ROW_LENGTH,et),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ln),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ki),v.pixelStorei(v.UNPACK_SKIP_ROWS,Wt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Fs),de===0&&F.generateMipmaps&&v.generateMipmap(Tt),J.unbindTexture()},this.copyTextureToTexture3D=function(y,F,X=null,Y=null,z=0){return y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],F=arguments[3],z=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,X,Y,z)},this.initRenderTarget=function(y){K.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),J.unbindTexture()},this.resetState=function(){D=0,C=0,B=null,J.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ly=an({name:"Earth",props:{small:{type:Boolean,default:!1}},setup(n){const e=Ht(null);let t,i,s,r,a;const o=()=>{if(!e.value)return;t=new Uv,t.background=null,i=new jt(75,1,.1,1e3),s=new Py({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});const c=n.small?30:window.innerWidth<768?150:200;s.setSize(c,c),s.setClearColor(0,0),e.value.appendChild(s.domElement);const f=new lc(1,32,32),p=new Gv().load("textures/earthmap1k.jpg",()=>{s&&t&&i&&s.render(t,i)}),_=new Ov({map:p,bumpMap:p,bumpScale:.1,shininess:15});r=new Rn(f,_),t.add(r);const S=new $v(16777215,3);t.add(S);const m=new Yu(16777215,1.2);m.position.set(5,3,5),t.add(m);const h=new Yu(16777215,.8);h.position.set(-5,-3,2),t.add(h),i.position.z=2.5,s.render(t,i)},l=()=>{a=requestAnimationFrame(l),r&&(r.rotation.y+=.005),s&&t&&i&&s.render(t,i)},u=()=>{if(s&&e.value&&!n.small){const c=window.innerWidth<768?150:200;s.setSize(c,c)}};return Ta(()=>{o(),l(),window.addEventListener("resize",u)}),er(()=>n.small,c=>{if(s&&e.value){const f=c?30:window.innerWidth<768?150:200;s.setSize(f,f)}}),Xl(()=>{a&&cancelAnimationFrame(a),window.removeEventListener("resize",u)}),{container:e}}});function Dy(n,e,t,i,s,r){return dt(),Et("div",{ref:"container",class:Zn(["earth-canvas",{small:n.small}])},null,2)}const wh=Mn(Ly,[["render",Dy],["__scopeId","data-v-6d0f536a"]]),Iy=an({name:"River",setup(){const n=Ht(!1);return{isInfoVisible:n,toggleInfo:()=>{n.value=!n.value}}}}),Uy="/textures/CarsonREM-3.png",Ny={class:"river-container"},Fy={class:"river-segments"},Oy={class:"info-button-container"},By={key:0,class:"info-popup"};function zy(n,e,t,i,s,r){return dt(),Et("div",Ny,[it("div",Fy,[e[5]||(e[5]=it("div",{class:"river-segment"},[it("img",{src:Uy,alt:"River",class:"river-image"})],-1)),it("div",Oy,[it("button",{onClick:e[0]||(e[0]=(...a)=>n.toggleInfo&&n.toggleInfo(...a)),class:"info-button","aria-label":"Show information"},e[2]||(e[2]=[it("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[it("circle",{cx:"12",cy:"12",r:"10"}),it("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),it("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)])),ot(Um,{name:"fade"},{default:hi(()=>[n.isInfoVisible?(dt(),Et("div",By,[it("button",{class:"close-button",onClick:e[1]||(e[1]=(...a)=>n.toggleInfo&&n.toggleInfo(...a)),"aria-label":"Close"},"×"),e[3]||(e[3]=it("h2",{class:"popup-title"},"About this Image",-1)),e[4]||(e[4]=it("p",{class:"popup-text"},[Xn(" Relative Elevation Model (REM) of the Carson River, NV. Inspired by "),it("a",{href:"https://dancoecarto.com/",target:"_blank",rel:"noopener noreferrer"}," Dan Coe "),Xn(" 's work. ")],-1))])):dn("",!0)]),_:1})])])])}const Hy=Mn(Iy,[["render",zy],["__scopeId","data-v-e6b5f548"]]),ky=an({name:"AboutMe"}),Vy={class:"about-section fade-in"};function Gy(n,e,t,i,s,r){return dt(),Et("div",Vy,e[0]||(e[0]=[it("div",{class:"about-content"},[it("p",{class:"about-text"}," Hello! "),it("p",{class:"about-text"}," I'm Praveenaa, a geospatial software developer driven by the stories hidden in complex spatial data. I specialize in transforming, analyzing, and visualizing geographic information to create map-driven applications. I'm most passionate about working with climate data, developing tools that broaden our understanding of our changing planet. "),it("p",{class:"about-text"}," If my work aligns with your interests or projects, I'd be happy to connect and explore potential collaborations! ")],-1)]))}const Wy=Mn(ky,[["render",Gy],["__scopeId","data-v-48ac74d1"]]),Xy=an({name:"TitleBar",components:{Earth:wh},props:{show:{type:Boolean,default:!0}},setup(){const n=Ht(!1);return{menuOpen:n,toggleMenu:()=>{n.value=!n.value,n.value?document.body.style.overflow="hidden":document.body.style.overflow=""},closeMenu:()=>{n.value=!1,document.body.style.overflow=""}}}}),qy={class:"name-container"},$y={class:"earth-container"},Yy={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},jy={key:0,x1:"3",y1:"12",x2:"21",y2:"12"},Ky={key:1,x1:"3",y1:"6",x2:"21",y2:"6"},Zy={key:2,x1:"3",y1:"18",x2:"21",y2:"18"},Jy={key:3,x1:"18",y1:"6",x2:"6",y2:"18"},Qy={key:4,x1:"6",y1:"6",x2:"18",y2:"18"},eE={class:"nav-links desktop-nav"},tE={class:"mobile-nav-links"};function nE(n,e,t,i,s,r){const a=Kt("router-link"),o=Kt("Earth");return dt(),Et("div",{class:Zn(["title-bar",{"fade-in":n.show}])},[it("div",qy,[ot(a,{to:"/",class:"name"},{default:hi(()=>e[1]||(e[1]=[Xn("PRAVEENAA KULANDHAIVEL")])),_:1}),it("div",$y,[ot(o,{small:!0})])]),it("button",{class:"mobile-menu-button","aria-label":"Toggle menu",onClick:e[0]||(e[0]=(...l)=>n.toggleMenu&&n.toggleMenu(...l))},[(dt(),Et("svg",Yy,[n.menuOpen?dn("",!0):(dt(),Et("line",jy)),n.menuOpen?dn("",!0):(dt(),Et("line",Ky)),n.menuOpen?dn("",!0):(dt(),Et("line",Zy)),n.menuOpen?(dt(),Et("line",Jy)):dn("",!0),n.menuOpen?(dt(),Et("line",Qy)):dn("",!0)]))]),it("div",eE,[ot(a,{to:"/resume",class:"nav-link"},{default:hi(()=>e[2]||(e[2]=[Xn("RESUME")])),_:1}),ot(a,{to:"/projects",class:"nav-link"},{default:hi(()=>e[3]||(e[3]=[Xn("PROJECTS")])),_:1})]),it("div",{class:Zn(["mobile-nav",{open:n.menuOpen}])},[it("div",tE,[ot(a,{to:"/resume",class:"mobile-nav-link",onClick:n.closeMenu},{default:hi(()=>e[4]||(e[4]=[Xn("RESUME")])),_:1},8,["onClick"]),ot(a,{to:"/projects",class:"mobile-nav-link",onClick:n.closeMenu},{default:hi(()=>e[5]||(e[5]=[Xn("PROJECTS")])),_:1},8,["onClick"])])],2)],2)}const fc=Mn(Xy,[["render",nE],["__scopeId","data-v-7db2caf3"]]),iE=an({name:"ContactInfo",props:{show:{type:Boolean,default:!1}}});function sE(n,e,t,i,s,r){return dt(),Et("div",{class:Zn(["contact-section",{"fade-in":n.show}])},e[0]||(e[0]=[Ld('<div class="contact-container" data-v-cdde3ddc><div class="links-container" data-v-cdde3ddc><a href="https://linkedin.com/in/praveenaa-kulandhaivel" target="_blank" rel="noopener noreferrer" class="contact-link" data-v-cdde3ddc><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cdde3ddc><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-cdde3ddc></path><rect x="2" y="9" width="4" height="12" data-v-cdde3ddc></rect><circle cx="4" cy="4" r="2" data-v-cdde3ddc></circle></svg><span data-v-cdde3ddc>LINKEDIN</span></a><a href="https://github.com/praveenaak" target="_blank" rel="noopener noreferrer" class="contact-link" data-v-cdde3ddc><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cdde3ddc><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-cdde3ddc></path></svg><span data-v-cdde3ddc>GITHUB</span></a><div class="contact-link email-link" data-v-cdde3ddc><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cdde3ddc><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-cdde3ddc></path><polyline points="22,6 12,13 2,6" data-v-cdde3ddc></polyline></svg><span data-v-cdde3ddc>praveenaa2408@gmail.com</span></div></div></div>',1)]),2)}const rE=Mn(iE,[["render",sE],["__scopeId","data-v-cdde3ddc"]]),aE=an({name:"TypingAnimation",components:{Earth:wh,River:Hy,AboutMe:Wy,TitleBar:fc,ContactInfo:rE},setup(){const n=Ht(null),e=Ht(!1),t=Ht(!1),i=Ht(!1),s=Ht(!1),r=Ht(!1),a=Ht(!1),o=Ht(!1),l=Ht(localStorage.getItem("hasSeenAnimation")==="true"),u=()=>{e.value=!0,setTimeout(()=>{t.value=!0,i.value=!0,s.value=!0,r.value=!0,setTimeout(()=>{a.value=!0,setTimeout(()=>{o.value=!0},500)},500)},1e3)};return Ta(()=>{const c=document.createElement("link");c.rel="stylesheet",c.href="https://fonts.googleapis.com/css2?family=VT323&display=swap",document.head.appendChild(c),l.value?u():n.value&&new g_(n.value,{strings:["hello world!","hello ^1000"],typeSpeed:80,backSpeed:50,showCursor:!0,cursorChar:"|",smartBackspace:!0,startDelay:300,backDelay:500,onComplete:f=>{const d=document.querySelector(".typed-cursor");d&&d.remove()},onStringTyped:f=>{f===1&&(u(),localStorage.setItem("hasSeenAnimation","true"))}})}),{typingElement:n,showEarth:e,showAbout:t,showRiver:i,showTitleBar:s,showContact:r,shouldFadeText:a,earthInTitleBar:o,hasSeenAnimation:l}}}),oE={class:"typing-container"},lE={class:"text-earth-container"};function cE(n,e,t,i,s,r){const a=Kt("TitleBar"),o=Kt("Earth"),l=Kt("AboutMe"),u=Kt("River"),c=Kt("ContactInfo");return dt(),Et("div",oE,[ot(a,{show:n.showTitleBar,showEarth:n.earthInTitleBar},null,8,["show","showEarth"]),it("div",lE,[it("div",{class:Zn(["pixel-text",{"fade-out":n.shouldFadeText}])},[it("span",{ref:"typingElement"},Rf(n.hasSeenAnimation?"hello":""),513)],2),n.showEarth?(dt(),Et("div",{key:0,class:Zn(["earth-container",{"fade-scale-in":!n.earthInTitleBar,"move-to-title":n.earthInTitleBar}])},[n.earthInTitleBar?dn("",!0):(dt(),ms(o,{key:0,small:!1}))],2)):dn("",!0)]),n.showAbout?(dt(),ms(l,{key:0})):dn("",!0),n.showRiver?(dt(),ms(u,{key:1})):dn("",!0),n.showContact?(dt(),ms(c,{key:2,show:n.showContact},null,8,["show"])):dn("",!0)])}const uE=Mn(aE,[["render",cE],["__scopeId","data-v-b93b6e04"]]),fE=an({name:"HelloWorld",components:{TypingAnimation:uE}}),dE={class:"hello-world"};function hE(n,e,t,i,s,r){const a=Kt("TypingAnimation");return dt(),Et("div",dE,[ot(a)])}const pE=Mn(fE,[["render",hE],["__scopeId","data-v-6d7ba571"]]),mE=an({name:"HomeView",components:{HelloWorld:pE}});function gE(n,e,t,i,s,r){const a=Kt("HelloWorld");return dt(),Et("main",null,[ot(a)])}const _E=Mn(mE,[["render",gE],["__scopeId","data-v-1b9a534e"]]),vE=an({name:"Projects",components:{TitleBar:fc}}),xE={class:"projects-page"},SE={class:"content"};function ME(n,e,t,i,s,r){const a=Kt("TitleBar"),o=Kt("router-link");return dt(),Et("div",xE,[ot(a,{show:!0}),it("div",SE,[e[1]||(e[1]=it("h1",{class:"wip-text"},"WORK IN PROGRESS",-1)),ot(o,{to:"/",class:"back-link"},{default:hi(()=>e[0]||(e[0]=[Xn("BACK HOME")])),_:1})])])}const yE=Mn(vE,[["render",ME],["__scopeId","data-v-e5d65020"]]),EE=an({name:"Resume",components:{TitleBar:fc}}),bE={class:"resume-page"};function TE(n,e,t,i,s,r){const a=Kt("TitleBar");return dt(),Et("div",bE,[ot(a,{show:!0}),e[0]||(e[0]=Ld('<div class="content" data-v-91b8a1f2><h1 class="page-title" data-v-91b8a1f2>EXPERIENCE</h1><div class="timeline-container" data-v-91b8a1f2><div class="timeline-line" data-v-91b8a1f2></div><div class="timeline-entries" data-v-91b8a1f2><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>August<br data-v-91b8a1f2>2024 -<br data-v-91b8a1f2>Present</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>GIS Software Developer</h3><h4 class="company-name" data-v-91b8a1f2>Wilkes Center for Climate Science &amp; Policy</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Salt Lake City, UT</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Led the full lifecycle development of geospatial web applications, from initial design and data processing to deployment.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Architected and deployed scalable applications for real-time wildfire risk assessment and carbon sequestration monitoring, leveraging React, Vue.js, and Mapbox while ensuring WCAG AAA compliance for accessibility.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Spearheaded the development of a high-performance data processing pipeline handling 1TB+ of historical spatio-temporal vector and raster data, utilizing parallel computing techniques to create optimized vector tiles.</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>Mapbox</span><span class="tech-tag" data-v-91b8a1f2>JavaScript</span><span class="tech-tag" data-v-91b8a1f2>HPC</span><span class="tech-tag" data-v-91b8a1f2>Python</span><span class="tech-tag" data-v-91b8a1f2>Map tile servers</span></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>June 2024<br data-v-91b8a1f2>-<br data-v-91b8a1f2>September<br data-v-91b8a1f2>2024</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>Graduate Fellow</h3><h4 class="company-name" data-v-91b8a1f2>NASA Goddard Space Flight Center</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Greenbelt, MD</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Engineered a scalable, open-source geospatial data processing pipeline using Python, optimizing integration of satellite data (MODIS) with in-situ observations &amp; atmospheric models, successfully filling 40% of missing climate data for Phoenix.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Developed implementation of a geospatial data processing pipeline to process satellite data &amp; integrate it with in-situ observations and atmospheric composition models.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Leveraged scientific programming in high-performance computing platforms to process large-scale raster imagery.</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>Python</span><span class="tech-tag" data-v-91b8a1f2>Scientific programming</span><span class="tech-tag" data-v-91b8a1f2>Machine Learning</span><span class="tech-tag" data-v-91b8a1f2>Geospatial APIs</span></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>May 2023<br data-v-91b8a1f2>-<br data-v-91b8a1f2>May 2024</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>Graduate Services Assistant - Geospatial Research</h3><h4 class="company-name" data-v-91b8a1f2>Arizona State University</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Tempe, AZ</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Automated geospatial data pipeline for assessing tract-level social vulnerability for heat resilience in Arizona.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Formulated synthetic data for water pricing and air quality (PM2.5, PM10 and O3) on census-tract by applying spatial machine learning and developing algorithms to address 64% missing data.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Investigated advanced modeling projects including AC ownership patterns and 911 calls to forecast heat waves.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Developed GIS web-based applications and custom geospatial visualizations &amp; communicating complex SVI data to both technical and non-technical audiences.</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>PostGIS</span><span class="tech-tag" data-v-91b8a1f2>OpenLayers</span><span class="tech-tag" data-v-91b8a1f2>Leaflet</span><span class="tech-tag" data-v-91b8a1f2>Python</span><span class="tech-tag" data-v-91b8a1f2>Spatial ML</span></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>July 2021<br data-v-91b8a1f2>-<br data-v-91b8a1f2>July 2022</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>Software Engineer</h3><h4 class="company-name" data-v-91b8a1f2>Hexagon Geospatial</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Hyderabad, India</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Collaborated with cross-functional global teams to gather requirements for GIS operations using C# and .NET</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Administered network inventories &amp; engineered custom commands for Utility companies geospatial data needs.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Transformed inventory map by integrating longitudinal asset views, improving user visual access to attributes.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Engineered data pipeline to vectorize hand-drawn raster maps using CNN models &amp; accomplished 89% accuracy.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Programmed SQL solutions to manage and optimize geodatabases in an Enterprise Oracle Database environment.</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>C#</span><span class="tech-tag" data-v-91b8a1f2>.NET</span><span class="tech-tag" data-v-91b8a1f2>CNN</span><span class="tech-tag" data-v-91b8a1f2>SQL</span><span class="tech-tag" data-v-91b8a1f2>Oracle Database</span></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>October<br data-v-91b8a1f2>2020 -<br data-v-91b8a1f2>June 2021</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>Software Engineering Intern</h3><h4 class="company-name" data-v-91b8a1f2>Hexagon Geospatial</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Hyderabad, India</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Developed a mobile GIS application using Xamarin, incorporating geometry customization features with the ESRI ArcGIS SDK</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Optimized an object detection model for large-scale manhole image analysis, achieving a detection accuracy of 92%</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Integrated custom commands into Hexagon NetWorks GIS software for utility companies using C# and .NET framework</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Optimized utility feature metadata creation process using SQL procedures, reducing processing time by 10%</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>Xamarin</span><span class="tech-tag" data-v-91b8a1f2>ESRI ArcGIS SDK</span><span class="tech-tag" data-v-91b8a1f2>C#</span><span class="tech-tag" data-v-91b8a1f2>.NET</span><span class="tech-tag" data-v-91b8a1f2>SQL</span><span class="tech-tag" data-v-91b8a1f2>Object Detection</span></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>December<br data-v-91b8a1f2>2020 -<br data-v-91b8a1f2>January<br data-v-91b8a1f2>2021</span></div><div class="timeline-content" data-v-91b8a1f2><div class="job-header" data-v-91b8a1f2><h3 class="job-title" data-v-91b8a1f2>Intern</h3><h4 class="company-name" data-v-91b8a1f2>National University Singapore</h4><div class="job-location" data-v-91b8a1f2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-91b8a1f2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-91b8a1f2></path><circle cx="12" cy="10" r="3" data-v-91b8a1f2></circle></svg><span data-v-91b8a1f2>Singapore</span></div></div><div class="job-description" data-v-91b8a1f2><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Led a 6-member team in medical imaging research on detecting abnormality in musculoskeletal radiographs.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Researched and experimented transfer learning on deep neural networks for precise prediction &amp; localization.</p></div><div class="responsibility" data-v-91b8a1f2><span class="bullet" data-v-91b8a1f2>❯</span><p data-v-91b8a1f2>Created a web-based Flask app to provide an interface, enabling users to interact with the model effectively.</p></div></div><div class="tech-tags" data-v-91b8a1f2><span class="tech-tag" data-v-91b8a1f2>Deep Learning</span><span class="tech-tag" data-v-91b8a1f2>Flask</span><span class="tech-tag" data-v-91b8a1f2>Medical Imaging</span><span class="tech-tag" data-v-91b8a1f2>Python</span></div></div></div></div></div><h2 class="section-title" data-v-91b8a1f2>EDUCATION</h2><div class="timeline-container education-container" data-v-91b8a1f2><div class="timeline-line" data-v-91b8a1f2></div><div class="timeline-entries" data-v-91b8a1f2><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>May<br data-v-91b8a1f2>2024</span></div><div class="timeline-content" data-v-91b8a1f2><div class="education-header" data-v-91b8a1f2><h3 class="degree-title" data-v-91b8a1f2>M.S., Computer Science</h3><h4 class="institution-name" data-v-91b8a1f2>Arizona State University, Tempe</h4><div class="gpa" data-v-91b8a1f2>3.8 GPA</div></div></div></div><div class="timeline-entry" data-v-91b8a1f2><div class="timeline-dot" data-v-91b8a1f2></div><div class="timeline-date" data-v-91b8a1f2><span data-v-91b8a1f2>May<br data-v-91b8a1f2>2021</span></div><div class="timeline-content" data-v-91b8a1f2><div class="education-header" data-v-91b8a1f2><h3 class="degree-title" data-v-91b8a1f2>B. Tech + M. Tech (Dual Degree), Computer Engineering</h3><h4 class="institution-name" data-v-91b8a1f2>Indian Institute of Information Technology, Kancheepuram, India</h4><div class="gpa" data-v-91b8a1f2>8.3 GPA</div></div></div></div></div></div></div>',1))])}const AE=Mn(EE,[["render",TE],["__scopeId","data-v-91b8a1f2"]]),wE=[{path:"/",name:"home",component:_E},{path:"/projects",name:"projects",component:yE},{path:"/resume",name:"resume",component:AE}],RE=d_({history:kg(),routes:wE}),dc=ig(ug);dc.use(og());dc.use(RE);dc.mount("#app");
