(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ul(n) {
  const e = Object.create(null);
  for (const t of n.split(",")) e[t] = 1;
  return (t) => t in e;
}
const ct = {},
  _r = [],
  Rn = () => {},
  Ud = () => !1,
  vo = (n) =>
    n.charCodeAt(0) === 111 &&
    n.charCodeAt(1) === 110 &&
    (n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97),
  Nl = (n) => n.startsWith("onUpdate:"),
  Tt = Object.assign,
  Fl = (n, e) => {
    const t = n.indexOf(e);
    t > -1 && n.splice(t, 1);
  },
  Nd = Object.prototype.hasOwnProperty,
  it = (n, e) => Nd.call(n, e),
  Fe = Array.isArray,
  vr = (n) => xo(n) === "[object Map]",
  yf = (n) => xo(n) === "[object Set]",
  ke = (n) => typeof n == "function",
  _t = (n) => typeof n == "string",
  Si = (n) => typeof n == "symbol",
  ht = (n) => n !== null && typeof n == "object",
  Tf = (n) => (ht(n) || ke(n)) && ke(n.then) && ke(n.catch),
  bf = Object.prototype.toString,
  xo = (n) => bf.call(n),
  Fd = (n) => xo(n).slice(8, -1),
  Af = (n) => xo(n) === "[object Object]",
  Ol = (n) =>
    _t(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n,
  Kr = Ul(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  So = (n) => {
    const e = Object.create(null);
    return (t) => e[t] || (e[t] = n(t));
  },
  Od = /-(\w)/g,
  ln = So((n) => n.replace(Od, (e, t) => (t ? t.toUpperCase() : ""))),
  Bd = /\B([A-Z])/g,
  ji = So((n) => n.replace(Bd, "-$1").toLowerCase()),
  Mo = So((n) => n.charAt(0).toUpperCase() + n.slice(1)),
  Oo = So((n) => (n ? `on${Mo(n)}` : "")),
  di = (n, e) => !Object.is(n, e),
  Bo = (n, ...e) => {
    for (let t = 0; t < n.length; t++) n[t](...e);
  },
  wf = (n, e, t, i = !1) => {
    Object.defineProperty(n, e, {
      configurable: !0,
      enumerable: !1,
      writable: i,
      value: t,
    });
  },
  zd = (n) => {
    const e = parseFloat(n);
    return isNaN(e) ? n : e;
  },
  Hd = (n) => {
    const e = _t(n) ? Number(n) : NaN;
    return isNaN(e) ? n : e;
  };
let Ec;
const Eo = () =>
  Ec ||
  (Ec =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Bl(n) {
  if (Fe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const i = n[t],
        r = _t(i) ? Wd(i) : Bl(i);
      if (r) for (const s in r) e[s] = r[s];
    }
    return e;
  } else if (_t(n) || ht(n)) return n;
}
const kd = /;(?![^(]*\))/g,
  Vd = /:([^]+)/,
  Gd = /\/\*[^]*?\*\//g;
function Wd(n) {
  const e = {};
  return (
    n
      .replace(Gd, "")
      .split(kd)
      .forEach((t) => {
        if (t) {
          const i = t.split(Vd);
          i.length > 1 && (e[i[0].trim()] = i[1].trim());
        }
      }),
    e
  );
}
function Ln(n) {
  let e = "";
  if (_t(n)) e = n;
  else if (Fe(n))
    for (let t = 0; t < n.length; t++) {
      const i = Ln(n[t]);
      i && (e += i + " ");
    }
  else if (ht(n)) for (const t in n) n[t] && (e += t + " ");
  return e.trim();
}
const Xd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  qd = Ul(Xd);
function Rf(n) {
  return !!n || n === "";
}
const Cf = (n) => !!(n && n.__v_isRef === !0),
  oi = (n) =>
    _t(n)
      ? n
      : n == null
        ? ""
        : Fe(n) || (ht(n) && (n.toString === bf || !ke(n.toString)))
          ? Cf(n)
            ? oi(n.value)
            : JSON.stringify(n, Pf, 2)
          : String(n),
  Pf = (n, e) =>
    Cf(e)
      ? Pf(n, e.value)
      : vr(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (t, [i, r], s) => ((t[zo(i, s) + " =>"] = r), t),
              {},
            ),
          }
        : yf(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((t) => zo(t)) }
          : Si(e)
            ? zo(e)
            : ht(e) && !Fe(e) && !Af(e)
              ? String(e)
              : e,
  zo = (n, e = "") => {
    var t;
    return Si(n) ? `Symbol(${(t = n.description) != null ? t : e})` : n;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Yt;
class Lf {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Yt),
      !e && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = Yt;
      try {
        return (Yt = this), e();
      } finally {
        Yt = t;
      }
    }
  }
  on() {
    Yt = this;
  }
  off() {
    Yt = this.parent;
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let t, i;
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, i = this.cleanups.length; t < i; t++)
        this.cleanups[t]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function $d(n) {
  return new Lf(n);
}
function Yd() {
  return Yt;
}
let lt;
const Ho = new WeakSet();
class Df {
  constructor(e) {
    (this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Yt && Yt.active && Yt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ho.has(this) && (Ho.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Uf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), yc(this), Nf(this);
    const e = lt,
      t = vn;
    (lt = this), (vn = !0);
    try {
      return this.fn();
    } finally {
      Ff(this), (lt = e), (vn = t), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) kl(e);
      (this.deps = this.depsTail = void 0),
        yc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Ho.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    La(this) && this.run();
  }
  get dirty() {
    return La(this);
  }
}
let If = 0,
  Zr,
  Jr;
function Uf(n, e = !1) {
  if (((n.flags |= 8), e)) {
    (n.next = Jr), (Jr = n);
    return;
  }
  (n.next = Zr), (Zr = n);
}
function zl() {
  If++;
}
function Hl() {
  if (--If > 0) return;
  if (Jr) {
    let e = Jr;
    for (Jr = void 0; e; ) {
      const t = e.next;
      (e.next = void 0), (e.flags &= -9), (e = t);
    }
  }
  let n;
  for (; Zr; ) {
    let e = Zr;
    for (Zr = void 0; e; ) {
      const t = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (i) {
          n || (n = i);
        }
      e = t;
    }
  }
  if (n) throw n;
}
function Nf(n) {
  for (let e = n.deps; e; e = e.nextDep)
    (e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e);
}
function Ff(n) {
  let e,
    t = n.depsTail,
    i = t;
  for (; i; ) {
    const r = i.prevDep;
    i.version === -1 ? (i === t && (t = r), kl(i), jd(i)) : (e = i),
      (i.dep.activeLink = i.prevActiveLink),
      (i.prevActiveLink = void 0),
      (i = r);
  }
  (n.deps = e), (n.depsTail = t);
}
function La(n) {
  for (let e = n.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (Of(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!n._dirty;
}
function Of(n) {
  if (
    (n.flags & 4 && !(n.flags & 16)) ||
    ((n.flags &= -17), n.globalVersion === ss)
  )
    return;
  n.globalVersion = ss;
  const e = n.dep;
  if (((n.flags |= 2), e.version > 0 && !n.isSSR && n.deps && !La(n))) {
    n.flags &= -3;
    return;
  }
  const t = lt,
    i = vn;
  (lt = n), (vn = !0);
  try {
    Nf(n);
    const r = n.fn(n._value);
    (e.version === 0 || di(r, n._value)) && ((n._value = r), e.version++);
  } catch (r) {
    throw (e.version++, r);
  } finally {
    (lt = t), (vn = i), Ff(n), (n.flags &= -3);
  }
}
function kl(n, e = !1) {
  const { dep: t, prevSub: i, nextSub: r } = n;
  if (
    (i && ((i.nextSub = r), (n.prevSub = void 0)),
    r && ((r.prevSub = i), (n.nextSub = void 0)),
    t.subs === n && ((t.subs = i), !i && t.computed))
  ) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep) kl(s, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function jd(n) {
  const { prevDep: e, nextDep: t } = n;
  e && ((e.nextDep = t), (n.prevDep = void 0)),
    t && ((t.prevDep = e), (n.nextDep = void 0));
}
let vn = !0;
const Bf = [];
function Mi() {
  Bf.push(vn), (vn = !1);
}
function Ei() {
  const n = Bf.pop();
  vn = n === void 0 ? !0 : n;
}
function yc(n) {
  const { cleanup: e } = n;
  if (((n.cleanup = void 0), e)) {
    const t = lt;
    lt = void 0;
    try {
      e();
    } finally {
      lt = t;
    }
  }
}
let ss = 0;
class Kd {
  constructor(e, t) {
    (this.sub = e),
      (this.dep = t),
      (this.version = t.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Vl {
  constructor(e) {
    (this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(e) {
    if (!lt || !vn || lt === this.computed) return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== lt)
      (t = this.activeLink = new Kd(lt, this)),
        lt.deps
          ? ((t.prevDep = lt.depsTail),
            (lt.depsTail.nextDep = t),
            (lt.depsTail = t))
          : (lt.deps = lt.depsTail = t),
        zf(t);
    else if (t.version === -1 && ((t.version = this.version), t.nextDep)) {
      const i = t.nextDep;
      (i.prevDep = t.prevDep),
        t.prevDep && (t.prevDep.nextDep = i),
        (t.prevDep = lt.depsTail),
        (t.nextDep = void 0),
        (lt.depsTail.nextDep = t),
        (lt.depsTail = t),
        lt.deps === t && (lt.deps = i);
    }
    return t;
  }
  trigger(e) {
    this.version++, ss++, this.notify(e);
  }
  notify(e) {
    zl();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Hl();
    }
  }
}
function zf(n) {
  if ((n.dep.sc++, n.sub.flags & 4)) {
    const e = n.dep.computed;
    if (e && !n.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep) zf(i);
    }
    const t = n.dep.subs;
    t !== n && ((n.prevSub = t), t && (t.nextSub = n)), (n.dep.subs = n);
  }
}
const Da = new WeakMap(),
  Xi = Symbol(""),
  Ia = Symbol(""),
  os = Symbol("");
function Pt(n, e, t) {
  if (vn && lt) {
    let i = Da.get(n);
    i || Da.set(n, (i = new Map()));
    let r = i.get(t);
    r || (i.set(t, (r = new Vl())), (r.map = i), (r.key = t)), r.track();
  }
}
function Wn(n, e, t, i, r, s) {
  const o = Da.get(n);
  if (!o) {
    ss++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((zl(), e === "clear")) o.forEach(a);
  else {
    const l = Fe(n),
      c = l && Ol(t);
    if (l && t === "length") {
      const u = Number(i);
      o.forEach((f, h) => {
        (h === "length" || h === os || (!Si(h) && h >= u)) && a(f);
      });
    } else
      switch (
        ((t !== void 0 || o.has(void 0)) && a(o.get(t)), c && a(o.get(os)), e)
      ) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(Xi)), vr(n) && a(o.get(Ia)));
          break;
        case "delete":
          l || (a(o.get(Xi)), vr(n) && a(o.get(Ia)));
          break;
        case "set":
          vr(n) && a(o.get(Xi));
          break;
      }
  }
  Hl();
}
function Zi(n) {
  const e = Je(n);
  return e === n ? e : (Pt(e, "iterate", os), an(n) ? e : e.map(Lt));
}
function yo(n) {
  return Pt((n = Je(n)), "iterate", os), n;
}
const Zd = {
  __proto__: null,
  [Symbol.iterator]() {
    return ko(this, Symbol.iterator, Lt);
  },
  concat(...n) {
    return Zi(this).concat(...n.map((e) => (Fe(e) ? Zi(e) : e)));
  },
  entries() {
    return ko(this, "entries", (n) => ((n[1] = Lt(n[1])), n));
  },
  every(n, e) {
    return Un(this, "every", n, e, void 0, arguments);
  },
  filter(n, e) {
    return Un(this, "filter", n, e, (t) => t.map(Lt), arguments);
  },
  find(n, e) {
    return Un(this, "find", n, e, Lt, arguments);
  },
  findIndex(n, e) {
    return Un(this, "findIndex", n, e, void 0, arguments);
  },
  findLast(n, e) {
    return Un(this, "findLast", n, e, Lt, arguments);
  },
  findLastIndex(n, e) {
    return Un(this, "findLastIndex", n, e, void 0, arguments);
  },
  forEach(n, e) {
    return Un(this, "forEach", n, e, void 0, arguments);
  },
  includes(...n) {
    return Vo(this, "includes", n);
  },
  indexOf(...n) {
    return Vo(this, "indexOf", n);
  },
  join(n) {
    return Zi(this).join(n);
  },
  lastIndexOf(...n) {
    return Vo(this, "lastIndexOf", n);
  },
  map(n, e) {
    return Un(this, "map", n, e, void 0, arguments);
  },
  pop() {
    return zr(this, "pop");
  },
  push(...n) {
    return zr(this, "push", n);
  },
  reduce(n, ...e) {
    return Tc(this, "reduce", n, e);
  },
  reduceRight(n, ...e) {
    return Tc(this, "reduceRight", n, e);
  },
  shift() {
    return zr(this, "shift");
  },
  some(n, e) {
    return Un(this, "some", n, e, void 0, arguments);
  },
  splice(...n) {
    return zr(this, "splice", n);
  },
  toReversed() {
    return Zi(this).toReversed();
  },
  toSorted(n) {
    return Zi(this).toSorted(n);
  },
  toSpliced(...n) {
    return Zi(this).toSpliced(...n);
  },
  unshift(...n) {
    return zr(this, "unshift", n);
  },
  values() {
    return ko(this, "values", Lt);
  },
};
function ko(n, e, t) {
  const i = yo(n),
    r = i[e]();
  return (
    i !== n &&
      !an(n) &&
      ((r._next = r.next),
      (r.next = () => {
        const s = r._next();
        return s.value && (s.value = t(s.value)), s;
      })),
    r
  );
}
const Jd = Array.prototype;
function Un(n, e, t, i, r, s) {
  const o = yo(n),
    a = o !== n && !an(n),
    l = o[e];
  if (l !== Jd[e]) {
    const f = l.apply(n, s);
    return a ? Lt(f) : f;
  }
  let c = t;
  o !== n &&
    (a
      ? (c = function (f, h) {
          return t.call(this, Lt(f), h, n);
        })
      : t.length > 2 &&
        (c = function (f, h) {
          return t.call(this, f, h, n);
        }));
  const u = l.call(o, c, i);
  return a && r ? r(u) : u;
}
function Tc(n, e, t, i) {
  const r = yo(n);
  let s = t;
  return (
    r !== n &&
      (an(n)
        ? t.length > 3 &&
          (s = function (o, a, l) {
            return t.call(this, o, a, l, n);
          })
        : (s = function (o, a, l) {
            return t.call(this, o, Lt(a), l, n);
          })),
    r[e](s, ...i)
  );
}
function Vo(n, e, t) {
  const i = Je(n);
  Pt(i, "iterate", os);
  const r = i[e](...t);
  return (r === -1 || r === !1) && Xl(t[0])
    ? ((t[0] = Je(t[0])), i[e](...t))
    : r;
}
function zr(n, e, t = []) {
  Mi(), zl();
  const i = Je(n)[e].apply(n, t);
  return Hl(), Ei(), i;
}
const Qd = Ul("__proto__,__v_isRef,__isVue"),
  Hf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((n) => n !== "arguments" && n !== "caller")
      .map((n) => Symbol[n])
      .filter(Si),
  );
function ep(n) {
  Si(n) || (n = String(n));
  const e = Je(this);
  return Pt(e, "has", n), e.hasOwnProperty(n);
}
class kf {
  constructor(e = !1, t = !1) {
    (this._isReadonly = e), (this._isShallow = t);
  }
  get(e, t, i) {
    if (t === "__v_skip") return e.__v_skip;
    const r = this._isReadonly,
      s = this._isShallow;
    if (t === "__v_isReactive") return !r;
    if (t === "__v_isReadonly") return r;
    if (t === "__v_isShallow") return s;
    if (t === "__v_raw")
      return i === (r ? (s ? up : Xf) : s ? Wf : Gf).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(i)
        ? e
        : void 0;
    const o = Fe(e);
    if (!r) {
      let l;
      if (o && (l = Zd[t])) return l;
      if (t === "hasOwnProperty") return ep;
    }
    const a = Reflect.get(e, t, Dt(e) ? e : i);
    return (Si(t) ? Hf.has(t) : Qd(t)) || (r || Pt(e, "get", t), s)
      ? a
      : Dt(a)
        ? o && Ol(t)
          ? a
          : a.value
        : ht(a)
          ? r
            ? $f(a)
            : To(a)
          : a;
  }
}
class Vf extends kf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, i, r) {
    let s = e[t];
    if (!this._isShallow) {
      const l = qi(s);
      if (
        (!an(i) && !qi(i) && ((s = Je(s)), (i = Je(i))),
        !Fe(e) && Dt(s) && !Dt(i))
      )
        return l ? !1 : ((s.value = i), !0);
    }
    const o = Fe(e) && Ol(t) ? Number(t) < e.length : it(e, t),
      a = Reflect.set(e, t, i, Dt(e) ? e : r);
    return (
      e === Je(r) && (o ? di(i, s) && Wn(e, "set", t, i) : Wn(e, "add", t, i)),
      a
    );
  }
  deleteProperty(e, t) {
    const i = it(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && i && Wn(e, "delete", t, void 0), r;
  }
  has(e, t) {
    const i = Reflect.has(e, t);
    return (!Si(t) || !Hf.has(t)) && Pt(e, "has", t), i;
  }
  ownKeys(e) {
    return Pt(e, "iterate", Fe(e) ? "length" : Xi), Reflect.ownKeys(e);
  }
}
class tp extends kf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const np = new Vf(),
  ip = new tp(),
  rp = new Vf(!0);
const Ua = (n) => n,
  As = (n) => Reflect.getPrototypeOf(n);
function sp(n, e, t) {
  return function (...i) {
    const r = this.__v_raw,
      s = Je(r),
      o = vr(s),
      a = n === "entries" || (n === Symbol.iterator && o),
      l = n === "keys" && o,
      c = r[n](...i),
      u = t ? Ua : e ? Na : Lt;
    return (
      !e && Pt(s, "iterate", l ? Ia : Xi),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ws(n) {
  return function (...e) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function op(n, e) {
  const t = {
    get(r) {
      const s = this.__v_raw,
        o = Je(s),
        a = Je(r);
      n || (di(r, a) && Pt(o, "get", r), Pt(o, "get", a));
      const { has: l } = As(o),
        c = e ? Ua : n ? Na : Lt;
      if (l.call(o, r)) return c(s.get(r));
      if (l.call(o, a)) return c(s.get(a));
      s !== o && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !n && Pt(Je(r), "iterate", Xi), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw,
        o = Je(s),
        a = Je(r);
      return (
        n || (di(r, a) && Pt(o, "has", r), Pt(o, "has", a)),
        r === a ? s.has(r) : s.has(r) || s.has(a)
      );
    },
    forEach(r, s) {
      const o = this,
        a = o.__v_raw,
        l = Je(a),
        c = e ? Ua : n ? Na : Lt;
      return (
        !n && Pt(l, "iterate", Xi),
        a.forEach((u, f) => r.call(s, c(u), c(f), o))
      );
    },
  };
  return (
    Tt(
      t,
      n
        ? {
            add: ws("add"),
            set: ws("set"),
            delete: ws("delete"),
            clear: ws("clear"),
          }
        : {
            add(r) {
              !e && !an(r) && !qi(r) && (r = Je(r));
              const s = Je(this);
              return (
                As(s).has.call(s, r) || (s.add(r), Wn(s, "add", r, r)), this
              );
            },
            set(r, s) {
              !e && !an(s) && !qi(s) && (s = Je(s));
              const o = Je(this),
                { has: a, get: l } = As(o);
              let c = a.call(o, r);
              c || ((r = Je(r)), (c = a.call(o, r)));
              const u = l.call(o, r);
              return (
                o.set(r, s),
                c ? di(s, u) && Wn(o, "set", r, s) : Wn(o, "add", r, s),
                this
              );
            },
            delete(r) {
              const s = Je(this),
                { has: o, get: a } = As(s);
              let l = o.call(s, r);
              l || ((r = Je(r)), (l = o.call(s, r))), a && a.call(s, r);
              const c = s.delete(r);
              return l && Wn(s, "delete", r, void 0), c;
            },
            clear() {
              const r = Je(this),
                s = r.size !== 0,
                o = r.clear();
              return s && Wn(r, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      t[r] = sp(r, n, e);
    }),
    t
  );
}
function Gl(n, e) {
  const t = op(n, e);
  return (i, r, s) =>
    r === "__v_isReactive"
      ? !n
      : r === "__v_isReadonly"
        ? n
        : r === "__v_raw"
          ? i
          : Reflect.get(it(t, r) && r in i ? t : i, r, s);
}
const ap = { get: Gl(!1, !1) },
  lp = { get: Gl(!1, !0) },
  cp = { get: Gl(!0, !1) };
const Gf = new WeakMap(),
  Wf = new WeakMap(),
  Xf = new WeakMap(),
  up = new WeakMap();
function fp(n) {
  switch (n) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hp(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : fp(Fd(n));
}
function To(n) {
  return qi(n) ? n : Wl(n, !1, np, ap, Gf);
}
function qf(n) {
  return Wl(n, !1, rp, lp, Wf);
}
function $f(n) {
  return Wl(n, !0, ip, cp, Xf);
}
function Wl(n, e, t, i, r) {
  if (!ht(n) || (n.__v_raw && !(e && n.__v_isReactive))) return n;
  const s = r.get(n);
  if (s) return s;
  const o = hp(n);
  if (o === 0) return n;
  const a = new Proxy(n, o === 2 ? i : t);
  return r.set(n, a), a;
}
function xr(n) {
  return qi(n) ? xr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function qi(n) {
  return !!(n && n.__v_isReadonly);
}
function an(n) {
  return !!(n && n.__v_isShallow);
}
function Xl(n) {
  return n ? !!n.__v_raw : !1;
}
function Je(n) {
  const e = n && n.__v_raw;
  return e ? Je(e) : n;
}
function Yf(n) {
  return (
    !it(n, "__v_skip") && Object.isExtensible(n) && wf(n, "__v_skip", !0), n
  );
}
const Lt = (n) => (ht(n) ? To(n) : n),
  Na = (n) => (ht(n) ? $f(n) : n);
function Dt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function jt(n) {
  return jf(n, !1);
}
function dp(n) {
  return jf(n, !0);
}
function jf(n, e) {
  return Dt(n) ? n : new pp(n, e);
}
class pp {
  constructor(e, t) {
    (this.dep = new Vl()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : Je(e)),
      (this._value = t ? e : Lt(e)),
      (this.__v_isShallow = t);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue,
      i = this.__v_isShallow || an(e) || qi(e);
    (e = i ? e : Je(e)),
      di(e, t) &&
        ((this._rawValue = e),
        (this._value = i ? e : Lt(e)),
        this.dep.trigger());
  }
}
function Sr(n) {
  return Dt(n) ? n.value : n;
}
const mp = {
  get: (n, e, t) => (e === "__v_raw" ? n : Sr(Reflect.get(n, e, t))),
  set: (n, e, t, i) => {
    const r = n[e];
    return Dt(r) && !Dt(t) ? ((r.value = t), !0) : Reflect.set(n, e, t, i);
  },
};
function Kf(n) {
  return xr(n) ? n : new Proxy(n, mp);
}
class gp {
  constructor(e, t, i) {
    (this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new Vl(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ss - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = i);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && lt !== this))
      return Uf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Of(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function _p(n, e, t = !1) {
  let i, r;
  return ke(n) ? (i = n) : ((i = n.get), (r = n.set)), new gp(i, r, t);
}
const Rs = {},
  lo = new WeakMap();
let Fi;
function vp(n, e = !1, t = Fi) {
  if (t) {
    let i = lo.get(t);
    i || lo.set(t, (i = [])), i.push(n);
  }
}
function xp(n, e, t = ct) {
  const {
      immediate: i,
      deep: r,
      once: s,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = t,
    c = (y) => (r ? y : an(y) || r === !1 || r === 0 ? fi(y, 1) : fi(y));
  let u,
    f,
    h,
    p,
    _ = !1,
    S = !1;
  if (
    (Dt(n)
      ? ((f = () => n.value), (_ = an(n)))
      : xr(n)
        ? ((f = () => c(n)), (_ = !0))
        : Fe(n)
          ? ((S = !0),
            (_ = n.some((y) => xr(y) || an(y))),
            (f = () =>
              n.map((y) => {
                if (Dt(y)) return y.value;
                if (xr(y)) return c(y);
                if (ke(y)) return l ? l(y, 2) : y();
              })))
          : ke(n)
            ? e
              ? (f = l ? () => l(n, 2) : n)
              : (f = () => {
                  if (h) {
                    Mi();
                    try {
                      h();
                    } finally {
                      Ei();
                    }
                  }
                  const y = Fi;
                  Fi = u;
                  try {
                    return l ? l(n, 3, [p]) : n(p);
                  } finally {
                    Fi = y;
                  }
                })
            : (f = Rn),
    e && r)
  ) {
    const y = f,
      I = r === !0 ? 1 / 0 : r;
    f = () => fi(y(), I);
  }
  const m = Yd(),
    d = () => {
      u.stop(), m && m.active && Fl(m.effects, u);
    };
  if (s && e) {
    const y = e;
    e = (...I) => {
      y(...I), d();
    };
  }
  let A = S ? new Array(n.length).fill(Rs) : Rs;
  const b = (y) => {
    if (!(!(u.flags & 1) || (!u.dirty && !y)))
      if (e) {
        const I = u.run();
        if (r || _ || (S ? I.some((D, C) => di(D, A[C])) : di(I, A))) {
          h && h();
          const D = Fi;
          Fi = u;
          try {
            const C = [I, A === Rs ? void 0 : S && A[0] === Rs ? [] : A, p];
            l ? l(e, 3, C) : e(...C), (A = I);
          } finally {
            Fi = D;
          }
        }
      } else u.run();
  };
  return (
    a && a(b),
    (u = new Df(f)),
    (u.scheduler = o ? () => o(b, !1) : b),
    (p = (y) => vp(y, !1, u)),
    (h = u.onStop =
      () => {
        const y = lo.get(u);
        if (y) {
          if (l) l(y, 4);
          else for (const I of y) I();
          lo.delete(u);
        }
      }),
    e ? (i ? b(!0) : (A = u.run())) : o ? o(b.bind(null, !0), !0) : u.run(),
    (d.pause = u.pause.bind(u)),
    (d.resume = u.resume.bind(u)),
    (d.stop = d),
    d
  );
}
function fi(n, e = 1 / 0, t) {
  if (e <= 0 || !ht(n) || n.__v_skip || ((t = t || new Set()), t.has(n)))
    return n;
  if ((t.add(n), e--, Dt(n))) fi(n.value, e, t);
  else if (Fe(n)) for (let i = 0; i < n.length; i++) fi(n[i], e, t);
  else if (yf(n) || vr(n))
    n.forEach((i) => {
      fi(i, e, t);
    });
  else if (Af(n)) {
    for (const i in n) fi(n[i], e, t);
    for (const i of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, i) && fi(n[i], e, t);
  }
  return n;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gs(n, e, t, i) {
  try {
    return i ? n(...i) : n();
  } catch (r) {
    bo(r, e, t);
  }
}
function Sn(n, e, t, i) {
  if (ke(n)) {
    const r = gs(n, e, t, i);
    return (
      r &&
        Tf(r) &&
        r.catch((s) => {
          bo(s, e, t);
        }),
      r
    );
  }
  if (Fe(n)) {
    const r = [];
    for (let s = 0; s < n.length; s++) r.push(Sn(n[s], e, t, i));
    return r;
  }
}
function bo(n, e, t, i = !0) {
  const r = e ? e.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: o } =
      (e && e.appContext.config) || ct;
  if (e) {
    let a = e.parent;
    const l = e.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](n, l, c) === !1) return;
      }
      a = a.parent;
    }
    if (s) {
      Mi(), gs(s, null, 10, [n, l, c]), Ei();
      return;
    }
  }
  Sp(n, t, r, i, o);
}
function Sp(n, e, t, i = !0, r = !1) {
  if (r) throw n;
  console.error(n);
}
const Ft = [];
let yn = -1;
const Mr = [];
let ai = null,
  hr = 0;
const Zf = Promise.resolve();
let co = null;
function Jf(n) {
  const e = co || Zf;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function Mp(n) {
  let e = yn + 1,
    t = Ft.length;
  for (; e < t; ) {
    const i = (e + t) >>> 1,
      r = Ft[i],
      s = as(r);
    s < n || (s === n && r.flags & 2) ? (e = i + 1) : (t = i);
  }
  return e;
}
function ql(n) {
  if (!(n.flags & 1)) {
    const e = as(n),
      t = Ft[Ft.length - 1];
    !t || (!(n.flags & 2) && e >= as(t)) ? Ft.push(n) : Ft.splice(Mp(e), 0, n),
      (n.flags |= 1),
      Qf();
  }
}
function Qf() {
  co || (co = Zf.then(th));
}
function Ep(n) {
  Fe(n)
    ? Mr.push(...n)
    : ai && n.id === -1
      ? ai.splice(hr + 1, 0, n)
      : n.flags & 1 || (Mr.push(n), (n.flags |= 1)),
    Qf();
}
function bc(n, e, t = yn + 1) {
  for (; t < Ft.length; t++) {
    const i = Ft[t];
    if (i && i.flags & 2) {
      if (n && i.id !== n.uid) continue;
      Ft.splice(t, 1),
        t--,
        i.flags & 4 && (i.flags &= -2),
        i(),
        i.flags & 4 || (i.flags &= -2);
    }
  }
}
function eh(n) {
  if (Mr.length) {
    const e = [...new Set(Mr)].sort((t, i) => as(t) - as(i));
    if (((Mr.length = 0), ai)) {
      ai.push(...e);
      return;
    }
    for (ai = e, hr = 0; hr < ai.length; hr++) {
      const t = ai[hr];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), (t.flags &= -2);
    }
    (ai = null), (hr = 0);
  }
}
const as = (n) => (n.id == null ? (n.flags & 2 ? -1 : 1 / 0) : n.id);
function th(n) {
  try {
    for (yn = 0; yn < Ft.length; yn++) {
      const e = Ft[yn];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        gs(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; yn < Ft.length; yn++) {
      const e = Ft[yn];
      e && (e.flags &= -2);
    }
    (yn = -1),
      (Ft.length = 0),
      eh(),
      (co = null),
      (Ft.length || Mr.length) && th();
  }
}
let on = null,
  nh = null;
function uo(n) {
  const e = on;
  return (on = n), (nh = (n && n.type.__scopeId) || null), e;
}
function Er(n, e = on, t) {
  if (!e || n._n) return n;
  const i = (...r) => {
    i._d && Fc(-1);
    const s = uo(e);
    let o;
    try {
      o = n(...r);
    } finally {
      uo(s), i._d && Fc(1);
    }
    return o;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function Ai(n, e, t, i) {
  const r = n.dirs,
    s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (Mi(), Sn(l, t, 8, [n.el, a, n, e]), Ei());
  }
}
const yp = Symbol("_vte"),
  ih = (n) => n.__isTeleport,
  li = Symbol("_leaveCb"),
  Cs = Symbol("_enterCb");
function Tp() {
  const n = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ro(() => {
      n.isMounted = !0;
    }),
    $l(() => {
      n.isUnmounting = !0;
    }),
    n
  );
}
const nn = [Function, Array],
  rh = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: nn,
    onEnter: nn,
    onAfterEnter: nn,
    onEnterCancelled: nn,
    onBeforeLeave: nn,
    onLeave: nn,
    onAfterLeave: nn,
    onLeaveCancelled: nn,
    onBeforeAppear: nn,
    onAppear: nn,
    onAfterAppear: nn,
    onAppearCancelled: nn,
  },
  sh = (n) => {
    const e = n.subTree;
    return e.component ? sh(e.component) : e;
  },
  bp = {
    name: "BaseTransition",
    props: rh,
    setup(n, { slots: e }) {
      const t = Em(),
        i = Tp();
      return () => {
        const r = e.default && lh(e.default(), !0);
        if (!r || !r.length) return;
        const s = oh(r),
          o = Je(n),
          { mode: a } = o;
        if (i.isLeaving) return Go(s);
        const l = Ac(s);
        if (!l) return Go(s);
        let c = Fa(l, o, i, t, (f) => (c = f));
        l.type !== kt && ls(l, c);
        let u = t.subTree && Ac(t.subTree);
        if (u && u.type !== kt && !zi(l, u) && sh(t).type !== kt) {
          let f = Fa(u, o, i, t);
          if ((ls(u, f), a === "out-in" && l.type !== kt))
            return (
              (i.isLeaving = !0),
              (f.afterLeave = () => {
                (i.isLeaving = !1),
                  t.job.flags & 8 || t.update(),
                  delete f.afterLeave,
                  (u = void 0);
              }),
              Go(s)
            );
          a === "in-out" && l.type !== kt
            ? (f.delayLeave = (h, p, _) => {
                const S = ah(i, u);
                (S[String(u.key)] = u),
                  (h[li] = () => {
                    p(), (h[li] = void 0), delete c.delayedLeave, (u = void 0);
                  }),
                  (c.delayedLeave = () => {
                    _(), delete c.delayedLeave, (u = void 0);
                  });
              })
            : (u = void 0);
        } else u && (u = void 0);
        return s;
      };
    },
  };
function oh(n) {
  let e = n[0];
  if (n.length > 1) {
    for (const t of n)
      if (t.type !== kt) {
        e = t;
        break;
      }
  }
  return e;
}
const Ap = bp;
function ah(n, e) {
  const { leavingVNodes: t } = n;
  let i = t.get(e.type);
  return i || ((i = Object.create(null)), t.set(e.type, i)), i;
}
function Fa(n, e, t, i, r) {
  const {
      appear: s,
      mode: o,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: _,
      onLeaveCancelled: S,
      onBeforeAppear: m,
      onAppear: d,
      onAfterAppear: A,
      onAppearCancelled: b,
    } = e,
    y = String(n.key),
    I = ah(t, n),
    D = (T, M) => {
      T && Sn(T, i, 9, M);
    },
    C = (T, M) => {
      const L = M[1];
      D(T, M),
        Fe(T) ? T.every((O) => O.length <= 1) && L() : T.length <= 1 && L();
    },
    B = {
      mode: o,
      persisted: a,
      beforeEnter(T) {
        let M = l;
        if (!t.isMounted)
          if (s) M = m || l;
          else return;
        T[li] && T[li](!0);
        const L = I[y];
        L && zi(n, L) && L.el[li] && L.el[li](), D(M, [T]);
      },
      enter(T) {
        let M = c,
          L = u,
          O = f;
        if (!t.isMounted)
          if (s) (M = d || c), (L = A || u), (O = b || f);
          else return;
        let H = !1;
        const ne = (T[Cs] = (se) => {
          H ||
            ((H = !0),
            se ? D(O, [T]) : D(L, [T]),
            B.delayedLeave && B.delayedLeave(),
            (T[Cs] = void 0));
        });
        M ? C(M, [T, ne]) : ne();
      },
      leave(T, M) {
        const L = String(n.key);
        if ((T[Cs] && T[Cs](!0), t.isUnmounting)) return M();
        D(h, [T]);
        let O = !1;
        const H = (T[li] = (ne) => {
          O ||
            ((O = !0),
            M(),
            ne ? D(S, [T]) : D(_, [T]),
            (T[li] = void 0),
            I[L] === n && delete I[L]);
        });
        (I[L] = n), p ? C(p, [T, H]) : H();
      },
      clone(T) {
        const M = Fa(T, e, t, i, r);
        return r && r(M), M;
      },
    };
  return B;
}
function Go(n) {
  if (Ao(n)) return (n = _i(n)), (n.children = null), n;
}
function Ac(n) {
  if (!Ao(n)) return ih(n.type) && n.children ? oh(n.children) : n;
  const { shapeFlag: e, children: t } = n;
  if (t) {
    if (e & 16) return t[0];
    if (e & 32 && ke(t.default)) return t.default();
  }
}
function ls(n, e) {
  n.shapeFlag & 6 && n.component
    ? ((n.transition = e), ls(n.component.subTree, e))
    : n.shapeFlag & 128
      ? ((n.ssContent.transition = e.clone(n.ssContent)),
        (n.ssFallback.transition = e.clone(n.ssFallback)))
      : (n.transition = e);
}
function lh(n, e = !1, t) {
  let i = [],
    r = 0;
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : s);
    o.type === Kt
      ? (o.patchFlag & 128 && r++, (i = i.concat(lh(o.children, e, a))))
      : (e || o.type !== kt) && i.push(a != null ? _i(o, { key: a }) : o);
  }
  if (r > 1) for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */ function Qt(n, e) {
  return ke(n) ? Tt({ name: n.name }, e, { setup: n }) : n;
}
function ch(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function fo(n, e, t, i, r = !1) {
  if (Fe(n)) {
    n.forEach((_, S) => fo(_, e && (Fe(e) ? e[S] : e), t, i, r));
    return;
  }
  if (Qr(i) && !r) {
    i.shapeFlag & 512 &&
      i.type.__asyncResolved &&
      i.component.subTree.component &&
      fo(n, e, t, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? Kl(i.component) : i.el,
    o = r ? null : s,
    { i: a, r: l } = n,
    c = e && e.r,
    u = a.refs === ct ? (a.refs = {}) : a.refs,
    f = a.setupState,
    h = Je(f),
    p = f === ct ? () => !1 : (_) => it(h, _);
  if (
    (c != null &&
      c !== l &&
      (_t(c)
        ? ((u[c] = null), p(c) && (f[c] = null))
        : Dt(c) && (c.value = null)),
    ke(l))
  )
    gs(l, a, 12, [o, u]);
  else {
    const _ = _t(l),
      S = Dt(l);
    if (_ || S) {
      const m = () => {
        if (n.f) {
          const d = _ ? (p(l) ? f[l] : u[l]) : l.value;
          r
            ? Fe(d) && Fl(d, s)
            : Fe(d)
              ? d.includes(s) || d.push(s)
              : _
                ? ((u[l] = [s]), p(l) && (f[l] = u[l]))
                : ((l.value = [s]), n.k && (u[n.k] = l.value));
        } else
          _
            ? ((u[l] = o), p(l) && (f[l] = o))
            : S && ((l.value = o), n.k && (u[n.k] = o));
      };
      o ? ((m.id = -1), $t(m, t)) : m();
    }
  }
}
Eo().requestIdleCallback;
Eo().cancelIdleCallback;
const Qr = (n) => !!n.type.__asyncLoader,
  Ao = (n) => n.type.__isKeepAlive;
function wp(n, e) {
  uh(n, "a", e);
}
function Rp(n, e) {
  uh(n, "da", e);
}
function uh(n, e, t = At) {
  const i =
    n.__wdc ||
    (n.__wdc = () => {
      let r = t;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return n();
    });
  if ((wo(e, i, t), t)) {
    let r = t.parent;
    for (; r && r.parent; )
      Ao(r.parent.vnode) && Cp(i, e, t, r), (r = r.parent);
  }
}
function Cp(n, e, t, i) {
  const r = wo(e, n, i, !0);
  fh(() => {
    Fl(i[e], r);
  }, t);
}
function wo(n, e, t = At, i = !1) {
  if (t) {
    const r = t[n] || (t[n] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          Mi();
          const a = _s(t),
            l = Sn(e, t, n, o);
          return a(), Ei(), l;
        });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Zn =
    (n) =>
    (e, t = At) => {
      (!us || n === "sp") && wo(n, (...i) => e(...i), t);
    },
  Pp = Zn("bm"),
  Ro = Zn("m"),
  Lp = Zn("bu"),
  Dp = Zn("u"),
  $l = Zn("bum"),
  fh = Zn("um"),
  Ip = Zn("sp"),
  Up = Zn("rtg"),
  Np = Zn("rtc");
function Fp(n, e = At) {
  wo("ec", n, e);
}
const Op = "components";
function Ht(n, e) {
  return zp(Op, n, !0, e) || n;
}
const Bp = Symbol.for("v-ndc");
function zp(n, e, t = !0, i = !1) {
  const r = on || At;
  if (r) {
    const s = r.type;
    {
      const a = wm(s, !1);
      if (a && (a === e || a === ln(e) || a === Mo(ln(e)))) return s;
    }
    const o = wc(r[n] || s[n], e) || wc(r.appContext[n], e);
    return !o && i ? s : o;
  }
}
function wc(n, e) {
  return n && (n[e] || n[ln(e)] || n[Mo(ln(e))]);
}
function Wo(n, e, t, i) {
  let r;
  const s = t,
    o = Fe(n);
  if (o || _t(n)) {
    const a = o && xr(n);
    let l = !1;
    a && ((l = !an(n)), (n = yo(n))), (r = new Array(n.length));
    for (let c = 0, u = n.length; c < u; c++)
      r[c] = e(l ? Lt(n[c]) : n[c], c, void 0, s);
  } else if (typeof n == "number") {
    r = new Array(n);
    for (let a = 0; a < n; a++) r[a] = e(a + 1, a, void 0, s);
  } else if (ht(n))
    if (n[Symbol.iterator]) r = Array.from(n, (a, l) => e(a, l, void 0, s));
    else {
      const a = Object.keys(n);
      r = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        r[l] = e(n[u], u, l, s);
      }
    }
  else r = [];
  return r;
}
const Oa = (n) => (n ? (Dh(n) ? Kl(n) : Oa(n.parent)) : null),
  es = Tt(Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => Oa(n.parent),
    $root: (n) => Oa(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => dh(n),
    $forceUpdate: (n) =>
      n.f ||
      (n.f = () => {
        ql(n.update);
      }),
    $nextTick: (n) => n.n || (n.n = Jf.bind(n.proxy)),
    $watch: (n) => om.bind(n),
  }),
  Xo = (n, e) => n !== ct && !n.__isScriptSetup && it(n, e),
  Hp = {
    get({ _: n }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: t,
        setupState: i,
        data: r,
        props: s,
        accessCache: o,
        type: a,
        appContext: l,
      } = n;
      let c;
      if (e[0] !== "$") {
        const p = o[e];
        if (p !== void 0)
          switch (p) {
            case 1:
              return i[e];
            case 2:
              return r[e];
            case 4:
              return t[e];
            case 3:
              return s[e];
          }
        else {
          if (Xo(i, e)) return (o[e] = 1), i[e];
          if (r !== ct && it(r, e)) return (o[e] = 2), r[e];
          if ((c = n.propsOptions[0]) && it(c, e)) return (o[e] = 3), s[e];
          if (t !== ct && it(t, e)) return (o[e] = 4), t[e];
          Ba && (o[e] = 0);
        }
      }
      const u = es[e];
      let f, h;
      if (u) return e === "$attrs" && Pt(n.attrs, "get", ""), u(n);
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (t !== ct && it(t, e)) return (o[e] = 4), t[e];
      if (((h = l.config.globalProperties), it(h, e))) return h[e];
    },
    set({ _: n }, e, t) {
      const { data: i, setupState: r, ctx: s } = n;
      return Xo(r, e)
        ? ((r[e] = t), !0)
        : i !== ct && it(i, e)
          ? ((i[e] = t), !0)
          : it(n.props, e) || (e[0] === "$" && e.slice(1) in n)
            ? !1
            : ((s[e] = t), !0);
    },
    has(
      {
        _: {
          data: n,
          setupState: e,
          accessCache: t,
          ctx: i,
          appContext: r,
          propsOptions: s,
        },
      },
      o,
    ) {
      let a;
      return (
        !!t[o] ||
        (n !== ct && it(n, o)) ||
        Xo(e, o) ||
        ((a = s[0]) && it(a, o)) ||
        it(i, o) ||
        it(es, o) ||
        it(r.config.globalProperties, o)
      );
    },
    defineProperty(n, e, t) {
      return (
        t.get != null
          ? (n._.accessCache[e] = 0)
          : it(t, "value") && this.set(n, e, t.value, null),
        Reflect.defineProperty(n, e, t)
      );
    },
  };
function Rc(n) {
  return Fe(n) ? n.reduce((e, t) => ((e[t] = null), e), {}) : n;
}
let Ba = !0;
function kp(n) {
  const e = dh(n),
    t = n.proxy,
    i = n.ctx;
  (Ba = !1), e.beforeCreate && Cc(e.beforeCreate, n, "bc");
  const {
    data: r,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: m,
    beforeDestroy: d,
    beforeUnmount: A,
    destroyed: b,
    unmounted: y,
    render: I,
    renderTracked: D,
    renderTriggered: C,
    errorCaptured: B,
    serverPrefetch: T,
    expose: M,
    inheritAttrs: L,
    components: O,
    directives: H,
    filters: ne,
  } = e;
  if ((c && Vp(c, i, null), o))
    for (const ee in o) {
      const V = o[ee];
      ke(V) && (i[ee] = V.bind(t));
    }
  if (r) {
    const ee = r.call(t, t);
    ht(ee) && (n.data = To(ee));
  }
  if (((Ba = !0), s))
    for (const ee in s) {
      const V = s[ee],
        me = ke(V) ? V.bind(t, t) : ke(V.get) ? V.get.bind(t, t) : Rn,
        Se = !ke(V) && ke(V.set) ? V.set.bind(t) : Rn,
        we = mn({ get: me, set: Se });
      Object.defineProperty(i, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Pe) => (we.value = Pe),
      });
    }
  if (a) for (const ee in a) hh(a[ee], i, t, ee);
  if (l) {
    const ee = ke(l) ? l.call(t) : l;
    Reflect.ownKeys(ee).forEach((V) => {
      Js(V, ee[V]);
    });
  }
  u && Cc(u, n, "c");
  function Z(ee, V) {
    Fe(V) ? V.forEach((me) => ee(me.bind(t))) : V && ee(V.bind(t));
  }
  if (
    (Z(Pp, f),
    Z(Ro, h),
    Z(Lp, p),
    Z(Dp, _),
    Z(wp, S),
    Z(Rp, m),
    Z(Fp, B),
    Z(Np, D),
    Z(Up, C),
    Z($l, A),
    Z(fh, y),
    Z(Ip, T),
    Fe(M))
  )
    if (M.length) {
      const ee = n.exposed || (n.exposed = {});
      M.forEach((V) => {
        Object.defineProperty(ee, V, {
          get: () => t[V],
          set: (me) => (t[V] = me),
        });
      });
    } else n.exposed || (n.exposed = {});
  I && n.render === Rn && (n.render = I),
    L != null && (n.inheritAttrs = L),
    O && (n.components = O),
    H && (n.directives = H),
    T && ch(n);
}
function Vp(n, e, t = Rn) {
  Fe(n) && (n = za(n));
  for (const i in n) {
    const r = n[i];
    let s;
    ht(r)
      ? "default" in r
        ? (s = Yn(r.from || i, r.default, !0))
        : (s = Yn(r.from || i))
      : (s = Yn(r)),
      Dt(s)
        ? Object.defineProperty(e, i, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (o) => (s.value = o),
          })
        : (e[i] = s);
  }
}
function Cc(n, e, t) {
  Sn(Fe(n) ? n.map((i) => i.bind(e.proxy)) : n.bind(e.proxy), e, t);
}
function hh(n, e, t, i) {
  let r = i.includes(".") ? wh(t, i) : () => t[i];
  if (_t(n)) {
    const s = e[n];
    ke(s) && ts(r, s);
  } else if (ke(n)) ts(r, n.bind(t));
  else if (ht(n))
    if (Fe(n)) n.forEach((s) => hh(s, e, t, i));
    else {
      const s = ke(n.handler) ? n.handler.bind(t) : e[n.handler];
      ke(s) && ts(r, s, n);
    }
}
function dh(n) {
  const e = n.type,
    { mixins: t, extends: i } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: o },
    } = n.appContext,
    a = s.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !r.length && !t && !i
        ? (l = e)
        : ((l = {}),
          r.length && r.forEach((c) => ho(l, c, o, !0)),
          ho(l, e, o)),
    ht(e) && s.set(e, l),
    l
  );
}
function ho(n, e, t, i = !1) {
  const { mixins: r, extends: s } = e;
  s && ho(n, s, t, !0), r && r.forEach((o) => ho(n, o, t, !0));
  for (const o in e)
    if (!(i && o === "expose")) {
      const a = Gp[o] || (t && t[o]);
      n[o] = a ? a(n[o], e[o]) : e[o];
    }
  return n;
}
const Gp = {
  data: Pc,
  props: Lc,
  emits: Lc,
  methods: Yr,
  computed: Yr,
  beforeCreate: Ut,
  created: Ut,
  beforeMount: Ut,
  mounted: Ut,
  beforeUpdate: Ut,
  updated: Ut,
  beforeDestroy: Ut,
  beforeUnmount: Ut,
  destroyed: Ut,
  unmounted: Ut,
  activated: Ut,
  deactivated: Ut,
  errorCaptured: Ut,
  serverPrefetch: Ut,
  components: Yr,
  directives: Yr,
  watch: Xp,
  provide: Pc,
  inject: Wp,
};
function Pc(n, e) {
  return e
    ? n
      ? function () {
          return Tt(
            ke(n) ? n.call(this, this) : n,
            ke(e) ? e.call(this, this) : e,
          );
        }
      : e
    : n;
}
function Wp(n, e) {
  return Yr(za(n), za(e));
}
function za(n) {
  if (Fe(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Ut(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function Yr(n, e) {
  return n ? Tt(Object.create(null), n, e) : e;
}
function Lc(n, e) {
  return n
    ? Fe(n) && Fe(e)
      ? [...new Set([...n, ...e])]
      : Tt(Object.create(null), Rc(n), Rc(e ?? {}))
    : e;
}
function Xp(n, e) {
  if (!n) return e;
  if (!e) return n;
  const t = Tt(Object.create(null), n);
  for (const i in e) t[i] = Ut(n[i], e[i]);
  return t;
}
function ph() {
  return {
    app: null,
    config: {
      isNativeTag: Ud,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let qp = 0;
function $p(n, e) {
  return function (i, r = null) {
    ke(i) || (i = Tt({}, i)), r != null && !ht(r) && (r = null);
    const s = ph(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const c = (s.app = {
      _uid: qp++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Cm,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && ke(u.install)
              ? (o.add(u), u.install(c, ...f))
              : ke(u) && (o.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((s.components[u] = f), c) : s.components[u];
      },
      directive(u, f) {
        return f ? ((s.directives[u] = f), c) : s.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const p = c._ceVNode || ft(i, r);
          return (
            (p.appContext = s),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            n(p, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Kl(p.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (Sn(a, c._instance, 16),
          n(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (s.provides[u] = f), c;
      },
      runWithContext(u) {
        const f = yr;
        yr = c;
        try {
          return u();
        } finally {
          yr = f;
        }
      },
    });
    return c;
  };
}
let yr = null;
function Js(n, e) {
  if (At) {
    let t = At.provides;
    const i = At.parent && At.parent.provides;
    i === t && (t = At.provides = Object.create(i)), (t[n] = e);
  }
}
function Yn(n, e, t = !1) {
  const i = At || on;
  if (i || yr) {
    const r = yr
      ? yr._context.provides
      : i
        ? i.parent == null
          ? i.vnode.appContext && i.vnode.appContext.provides
          : i.parent.provides
        : void 0;
    if (r && n in r) return r[n];
    if (arguments.length > 1) return t && ke(e) ? e.call(i && i.proxy) : e;
  }
}
const mh = {},
  gh = () => Object.create(mh),
  _h = (n) => Object.getPrototypeOf(n) === mh;
function Yp(n, e, t, i = !1) {
  const r = {},
    s = gh();
  (n.propsDefaults = Object.create(null)), vh(n, e, r, s);
  for (const o in n.propsOptions[0]) o in r || (r[o] = void 0);
  t ? (n.props = i ? r : qf(r)) : n.type.props ? (n.props = r) : (n.props = s),
    (n.attrs = s);
}
function jp(n, e, t, i) {
  const {
      props: r,
      attrs: s,
      vnode: { patchFlag: o },
    } = n,
    a = Je(r),
    [l] = n.propsOptions;
  let c = !1;
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = n.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (Co(n.emitsOptions, h)) continue;
        const p = e[h];
        if (l)
          if (it(s, h)) p !== s[h] && ((s[h] = p), (c = !0));
          else {
            const _ = ln(h);
            r[_] = Ha(l, a, _, p, n, !1);
          }
        else p !== s[h] && ((s[h] = p), (c = !0));
      }
    }
  } else {
    vh(n, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || (!it(e, f) && ((u = ji(f)) === f || !it(e, u)))) &&
        (l
          ? t &&
            (t[f] !== void 0 || t[u] !== void 0) &&
            (r[f] = Ha(l, a, f, void 0, n, !0))
          : delete r[f]);
    if (s !== a)
      for (const f in s) (!e || !it(e, f)) && (delete s[f], (c = !0));
  }
  c && Wn(n.attrs, "set", "");
}
function vh(n, e, t, i) {
  const [r, s] = n.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (Kr(l)) continue;
      const c = e[l];
      let u;
      r && it(r, (u = ln(l)))
        ? !s || !s.includes(u)
          ? (t[u] = c)
          : ((a || (a = {}))[u] = c)
        : Co(n.emitsOptions, l) ||
          ((!(l in i) || c !== i[l]) && ((i[l] = c), (o = !0)));
    }
  if (s) {
    const l = Je(t),
      c = a || ct;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      t[f] = Ha(r, l, f, c[f], n, !it(c, f));
    }
  }
  return o;
}
function Ha(n, e, t, i, r, s) {
  const o = n[t];
  if (o != null) {
    const a = it(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ke(l)) {
        const { propsDefaults: c } = r;
        if (t in c) i = c[t];
        else {
          const u = _s(r);
          (i = c[t] = l.call(null, e)), u();
        }
      } else i = l;
      r.ce && r.ce._setProp(t, i);
    }
    o[0] &&
      (s && !a ? (i = !1) : o[1] && (i === "" || i === ji(t)) && (i = !0));
  }
  return i;
}
const Kp = new WeakMap();
function xh(n, e, t = !1) {
  const i = t ? Kp : e.propsCache,
    r = i.get(n);
  if (r) return r;
  const s = n.props,
    o = {},
    a = [];
  let l = !1;
  if (!ke(n)) {
    const u = (f) => {
      l = !0;
      const [h, p] = xh(f, e, !0);
      Tt(o, h), p && a.push(...p);
    };
    !t && e.mixins.length && e.mixins.forEach(u),
      n.extends && u(n.extends),
      n.mixins && n.mixins.forEach(u);
  }
  if (!s && !l) return ht(n) && i.set(n, _r), _r;
  if (Fe(s))
    for (let u = 0; u < s.length; u++) {
      const f = ln(s[u]);
      Dc(f) && (o[f] = ct);
    }
  else if (s)
    for (const u in s) {
      const f = ln(u);
      if (Dc(f)) {
        const h = s[u],
          p = (o[f] = Fe(h) || ke(h) ? { type: h } : Tt({}, h)),
          _ = p.type;
        let S = !1,
          m = !0;
        if (Fe(_))
          for (let d = 0; d < _.length; ++d) {
            const A = _[d],
              b = ke(A) && A.name;
            if (b === "Boolean") {
              S = !0;
              break;
            } else b === "String" && (m = !1);
          }
        else S = ke(_) && _.name === "Boolean";
        (p[0] = S), (p[1] = m), (S || it(p, "default")) && a.push(f);
      }
    }
  const c = [o, a];
  return ht(n) && i.set(n, c), c;
}
function Dc(n) {
  return n[0] !== "$" && !Kr(n);
}
const Sh = (n) => n[0] === "_" || n === "$stable",
  Yl = (n) => (Fe(n) ? n.map(Tn) : [Tn(n)]),
  Zp = (n, e, t) => {
    if (e._n) return e;
    const i = Er((...r) => Yl(e(...r)), t);
    return (i._c = !1), i;
  },
  Mh = (n, e, t) => {
    const i = n._ctx;
    for (const r in n) {
      if (Sh(r)) continue;
      const s = n[r];
      if (ke(s)) e[r] = Zp(r, s, i);
      else if (s != null) {
        const o = Yl(s);
        e[r] = () => o;
      }
    }
  },
  Eh = (n, e) => {
    const t = Yl(e);
    n.slots.default = () => t;
  },
  yh = (n, e, t) => {
    for (const i in e) (t || i !== "_") && (n[i] = e[i]);
  },
  Jp = (n, e, t) => {
    const i = (n.slots = gh());
    if (n.vnode.shapeFlag & 32) {
      const r = e._;
      r ? (yh(i, e, t), t && wf(i, "_", r, !0)) : Mh(e, i);
    } else e && Eh(n, e);
  },
  Qp = (n, e, t) => {
    const { vnode: i, slots: r } = n;
    let s = !0,
      o = ct;
    if (i.shapeFlag & 32) {
      const a = e._;
      a
        ? t && a === 1
          ? (s = !1)
          : yh(r, e, t)
        : ((s = !e.$stable), Mh(e, r)),
        (o = e);
    } else e && (Eh(n, e), (o = { default: 1 }));
    if (s) for (const a in r) !Sh(a) && o[a] == null && delete r[a];
  },
  $t = dm;
function em(n) {
  return tm(n);
}
function tm(n, e) {
  const t = Eo();
  t.__VUE__ = !0;
  const {
      insert: i,
      remove: r,
      patchProp: s,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: p = Rn,
      insertStaticContent: _,
    } = n,
    S = (
      w,
      R,
      v,
      te = null,
      j = null,
      q = null,
      J = void 0,
      ce = null,
      K = !!R.dynamicChildren,
    ) => {
      if (w === R) return;
      w && !zi(w, R) && ((te = U(w)), Pe(w, j, q, !0), (w = null)),
        R.patchFlag === -2 && ((K = !1), (R.dynamicChildren = null));
      const { type: x, ref: g, shapeFlag: P } = R;
      switch (x) {
        case Po:
          m(w, R, v, te);
          break;
        case kt:
          d(w, R, v, te);
          break;
        case Qs:
          w == null && A(R, v, te, J);
          break;
        case Kt:
          O(w, R, v, te, j, q, J, ce, K);
          break;
        default:
          P & 1
            ? I(w, R, v, te, j, q, J, ce, K)
            : P & 6
              ? H(w, R, v, te, j, q, J, ce, K)
              : (P & 64 || P & 128) &&
                x.process(w, R, v, te, j, q, J, ce, K, le);
      }
      g != null && j && fo(g, w && w.ref, q, R || w, !R);
    },
    m = (w, R, v, te) => {
      if (w == null) i((R.el = a(R.children)), v, te);
      else {
        const j = (R.el = w.el);
        R.children !== w.children && c(j, R.children);
      }
    },
    d = (w, R, v, te) => {
      w == null ? i((R.el = l(R.children || "")), v, te) : (R.el = w.el);
    },
    A = (w, R, v, te) => {
      [w.el, w.anchor] = _(w.children, R, v, te, w.el, w.anchor);
    },
    b = ({ el: w, anchor: R }, v, te) => {
      let j;
      for (; w && w !== R; ) (j = h(w)), i(w, v, te), (w = j);
      i(R, v, te);
    },
    y = ({ el: w, anchor: R }) => {
      let v;
      for (; w && w !== R; ) (v = h(w)), r(w), (w = v);
      r(R);
    },
    I = (w, R, v, te, j, q, J, ce, K) => {
      R.type === "svg" ? (J = "svg") : R.type === "math" && (J = "mathml"),
        w == null ? D(R, v, te, j, q, J, ce, K) : T(w, R, j, q, J, ce, K);
    },
    D = (w, R, v, te, j, q, J, ce) => {
      let K, x;
      const { props: g, shapeFlag: P, transition: k, dirs: $ } = w;
      if (
        ((K = w.el = o(w.type, q, g && g.is, g)),
        P & 8
          ? u(K, w.children)
          : P & 16 && B(w.children, K, null, te, j, qo(w, q), J, ce),
        $ && Ai(w, null, te, "created"),
        C(K, w, w.scopeId, J, te),
        g)
      ) {
        for (const pe in g)
          pe !== "value" && !Kr(pe) && s(K, pe, null, g[pe], q, te);
        "value" in g && s(K, "value", null, g.value, q),
          (x = g.onVnodeBeforeMount) && En(x, te, w);
      }
      $ && Ai(w, null, te, "beforeMount");
      const W = nm(j, k);
      W && k.beforeEnter(K),
        i(K, R, v),
        ((x = g && g.onVnodeMounted) || W || $) &&
          $t(() => {
            x && En(x, te, w), W && k.enter(K), $ && Ai(w, null, te, "mounted");
          }, j);
    },
    C = (w, R, v, te, j) => {
      if ((v && p(w, v), te)) for (let q = 0; q < te.length; q++) p(w, te[q]);
      if (j) {
        let q = j.subTree;
        if (
          R === q ||
          (Ch(q.type) && (q.ssContent === R || q.ssFallback === R))
        ) {
          const J = j.vnode;
          C(w, J, J.scopeId, J.slotScopeIds, j.parent);
        }
      }
    },
    B = (w, R, v, te, j, q, J, ce, K = 0) => {
      for (let x = K; x < w.length; x++) {
        const g = (w[x] = ce ? ci(w[x]) : Tn(w[x]));
        S(null, g, R, v, te, j, q, J, ce);
      }
    },
    T = (w, R, v, te, j, q, J) => {
      const ce = (R.el = w.el);
      let { patchFlag: K, dynamicChildren: x, dirs: g } = R;
      K |= w.patchFlag & 16;
      const P = w.props || ct,
        k = R.props || ct;
      let $;
      if (
        (v && wi(v, !1),
        ($ = k.onVnodeBeforeUpdate) && En($, v, R, w),
        g && Ai(R, w, v, "beforeUpdate"),
        v && wi(v, !0),
        ((P.innerHTML && k.innerHTML == null) ||
          (P.textContent && k.textContent == null)) &&
          u(ce, ""),
        x
          ? M(w.dynamicChildren, x, ce, v, te, qo(R, j), q)
          : J || V(w, R, ce, null, v, te, qo(R, j), q, !1),
        K > 0)
      ) {
        if (K & 16) L(ce, P, k, v, j);
        else if (
          (K & 2 && P.class !== k.class && s(ce, "class", null, k.class, j),
          K & 4 && s(ce, "style", P.style, k.style, j),
          K & 8)
        ) {
          const W = R.dynamicProps;
          for (let pe = 0; pe < W.length; pe++) {
            const ue = W[pe],
              ge = P[ue],
              Ue = k[ue];
            (Ue !== ge || ue === "value") && s(ce, ue, ge, Ue, j, v);
          }
        }
        K & 1 && w.children !== R.children && u(ce, R.children);
      } else !J && x == null && L(ce, P, k, v, j);
      (($ = k.onVnodeUpdated) || g) &&
        $t(() => {
          $ && En($, v, R, w), g && Ai(R, w, v, "updated");
        }, te);
    },
    M = (w, R, v, te, j, q, J) => {
      for (let ce = 0; ce < R.length; ce++) {
        const K = w[ce],
          x = R[ce],
          g =
            K.el && (K.type === Kt || !zi(K, x) || K.shapeFlag & 70)
              ? f(K.el)
              : v;
        S(K, x, g, null, te, j, q, J, !0);
      }
    },
    L = (w, R, v, te, j) => {
      if (R !== v) {
        if (R !== ct)
          for (const q in R) !Kr(q) && !(q in v) && s(w, q, R[q], null, j, te);
        for (const q in v) {
          if (Kr(q)) continue;
          const J = v[q],
            ce = R[q];
          J !== ce && q !== "value" && s(w, q, ce, J, j, te);
        }
        "value" in v && s(w, "value", R.value, v.value, j);
      }
    },
    O = (w, R, v, te, j, q, J, ce, K) => {
      const x = (R.el = w ? w.el : a("")),
        g = (R.anchor = w ? w.anchor : a(""));
      let { patchFlag: P, dynamicChildren: k, slotScopeIds: $ } = R;
      $ && (ce = ce ? ce.concat($) : $),
        w == null
          ? (i(x, v, te),
            i(g, v, te),
            B(R.children || [], v, g, j, q, J, ce, K))
          : P > 0 && P & 64 && k && w.dynamicChildren
            ? (M(w.dynamicChildren, k, v, j, q, J, ce),
              (R.key != null || (j && R === j.subTree)) && Th(w, R, !0))
            : V(w, R, v, g, j, q, J, ce, K);
    },
    H = (w, R, v, te, j, q, J, ce, K) => {
      (R.slotScopeIds = ce),
        w == null
          ? R.shapeFlag & 512
            ? j.ctx.activate(R, v, te, J, K)
            : ne(R, v, te, j, q, J, K)
          : se(w, R, K);
    },
    ne = (w, R, v, te, j, q, J) => {
      const ce = (w.component = Mm(w, te, j));
      if ((Ao(w) && (ce.ctx.renderer = le), ym(ce, !1, J), ce.asyncDep)) {
        if ((j && j.registerDep(ce, Z, J), !w.el)) {
          const K = (ce.subTree = ft(kt));
          d(null, K, R, v);
        }
      } else Z(ce, w, R, v, j, q, J);
    },
    se = (w, R, v) => {
      const te = (R.component = w.component);
      if (fm(w, R, v))
        if (te.asyncDep && !te.asyncResolved) {
          ee(te, R, v);
          return;
        } else (te.next = R), te.update();
      else (R.el = w.el), (te.vnode = R);
    },
    Z = (w, R, v, te, j, q, J) => {
      const ce = () => {
        if (w.isMounted) {
          let { next: P, bu: k, u: $, parent: W, vnode: pe } = w;
          {
            const xe = bh(w);
            if (xe) {
              P && ((P.el = pe.el), ee(w, P, J)),
                xe.asyncDep.then(() => {
                  w.isUnmounted || ce();
                });
              return;
            }
          }
          let ue = P,
            ge;
          wi(w, !1),
            P ? ((P.el = pe.el), ee(w, P, J)) : (P = pe),
            k && Bo(k),
            (ge = P.props && P.props.onVnodeBeforeUpdate) && En(ge, W, P, pe),
            wi(w, !0);
          const Ue = Uc(w),
            fe = w.subTree;
          (w.subTree = Ue),
            S(fe, Ue, f(fe.el), U(fe), w, j, q),
            (P.el = Ue.el),
            ue === null && hm(w, Ue.el),
            $ && $t($, j),
            (ge = P.props && P.props.onVnodeUpdated) &&
              $t(() => En(ge, W, P, pe), j);
        } else {
          let P;
          const { el: k, props: $ } = R,
            { bm: W, m: pe, parent: ue, root: ge, type: Ue } = w,
            fe = Qr(R);
          wi(w, !1),
            W && Bo(W),
            !fe && (P = $ && $.onVnodeBeforeMount) && En(P, ue, R),
            wi(w, !0);
          {
            ge.ce && ge.ce._injectChildStyle(Ue);
            const xe = (w.subTree = Uc(w));
            S(null, xe, v, te, w, j, q), (R.el = xe.el);
          }
          if ((pe && $t(pe, j), !fe && (P = $ && $.onVnodeMounted))) {
            const xe = R;
            $t(() => En(P, ue, xe), j);
          }
          (R.shapeFlag & 256 ||
            (ue && Qr(ue.vnode) && ue.vnode.shapeFlag & 256)) &&
            w.a &&
            $t(w.a, j),
            (w.isMounted = !0),
            (R = v = te = null);
        }
      };
      w.scope.on();
      const K = (w.effect = new Df(ce));
      w.scope.off();
      const x = (w.update = K.run.bind(K)),
        g = (w.job = K.runIfDirty.bind(K));
      (g.i = w), (g.id = w.uid), (K.scheduler = () => ql(g)), wi(w, !0), x();
    },
    ee = (w, R, v) => {
      R.component = w;
      const te = w.vnode.props;
      (w.vnode = R),
        (w.next = null),
        jp(w, R.props, te, v),
        Qp(w, R.children, v),
        Mi(),
        bc(w),
        Ei();
    },
    V = (w, R, v, te, j, q, J, ce, K = !1) => {
      const x = w && w.children,
        g = w ? w.shapeFlag : 0,
        P = R.children,
        { patchFlag: k, shapeFlag: $ } = R;
      if (k > 0) {
        if (k & 128) {
          Se(x, P, v, te, j, q, J, ce, K);
          return;
        } else if (k & 256) {
          me(x, P, v, te, j, q, J, ce, K);
          return;
        }
      }
      $ & 8
        ? (g & 16 && Me(x, j, q), P !== x && u(v, P))
        : g & 16
          ? $ & 16
            ? Se(x, P, v, te, j, q, J, ce, K)
            : Me(x, j, q, !0)
          : (g & 8 && u(v, ""), $ & 16 && B(P, v, te, j, q, J, ce, K));
    },
    me = (w, R, v, te, j, q, J, ce, K) => {
      (w = w || _r), (R = R || _r);
      const x = w.length,
        g = R.length,
        P = Math.min(x, g);
      let k;
      for (k = 0; k < P; k++) {
        const $ = (R[k] = K ? ci(R[k]) : Tn(R[k]));
        S(w[k], $, v, null, j, q, J, ce, K);
      }
      x > g ? Me(w, j, q, !0, !1, P) : B(R, v, te, j, q, J, ce, K, P);
    },
    Se = (w, R, v, te, j, q, J, ce, K) => {
      let x = 0;
      const g = R.length;
      let P = w.length - 1,
        k = g - 1;
      for (; x <= P && x <= k; ) {
        const $ = w[x],
          W = (R[x] = K ? ci(R[x]) : Tn(R[x]));
        if (zi($, W)) S($, W, v, null, j, q, J, ce, K);
        else break;
        x++;
      }
      for (; x <= P && x <= k; ) {
        const $ = w[P],
          W = (R[k] = K ? ci(R[k]) : Tn(R[k]));
        if (zi($, W)) S($, W, v, null, j, q, J, ce, K);
        else break;
        P--, k--;
      }
      if (x > P) {
        if (x <= k) {
          const $ = k + 1,
            W = $ < g ? R[$].el : te;
          for (; x <= k; )
            S(null, (R[x] = K ? ci(R[x]) : Tn(R[x])), v, W, j, q, J, ce, K),
              x++;
        }
      } else if (x > k) for (; x <= P; ) Pe(w[x], j, q, !0), x++;
      else {
        const $ = x,
          W = x,
          pe = new Map();
        for (x = W; x <= k; x++) {
          const _e = (R[x] = K ? ci(R[x]) : Tn(R[x]));
          _e.key != null && pe.set(_e.key, x);
        }
        let ue,
          ge = 0;
        const Ue = k - W + 1;
        let fe = !1,
          xe = 0;
        const Ce = new Array(Ue);
        for (x = 0; x < Ue; x++) Ce[x] = 0;
        for (x = $; x <= P; x++) {
          const _e = w[x];
          if (ge >= Ue) {
            Pe(_e, j, q, !0);
            continue;
          }
          let Oe;
          if (_e.key != null) Oe = pe.get(_e.key);
          else
            for (ue = W; ue <= k; ue++)
              if (Ce[ue - W] === 0 && zi(_e, R[ue])) {
                Oe = ue;
                break;
              }
          Oe === void 0
            ? Pe(_e, j, q, !0)
            : ((Ce[Oe - W] = x + 1),
              Oe >= xe ? (xe = Oe) : (fe = !0),
              S(_e, R[Oe], v, null, j, q, J, ce, K),
              ge++);
        }
        const Ne = fe ? im(Ce) : _r;
        for (ue = Ne.length - 1, x = Ue - 1; x >= 0; x--) {
          const _e = W + x,
            Oe = R[_e],
            He = _e + 1 < g ? R[_e + 1].el : te;
          Ce[x] === 0
            ? S(null, Oe, v, He, j, q, J, ce, K)
            : fe && (ue < 0 || x !== Ne[ue] ? we(Oe, v, He, 2) : ue--);
        }
      }
    },
    we = (w, R, v, te, j = null) => {
      const { el: q, type: J, transition: ce, children: K, shapeFlag: x } = w;
      if (x & 6) {
        we(w.component.subTree, R, v, te);
        return;
      }
      if (x & 128) {
        w.suspense.move(R, v, te);
        return;
      }
      if (x & 64) {
        J.move(w, R, v, le);
        return;
      }
      if (J === Kt) {
        i(q, R, v);
        for (let P = 0; P < K.length; P++) we(K[P], R, v, te);
        i(w.anchor, R, v);
        return;
      }
      if (J === Qs) {
        b(w, R, v);
        return;
      }
      if (te !== 2 && x & 1 && ce)
        if (te === 0) ce.beforeEnter(q), i(q, R, v), $t(() => ce.enter(q), j);
        else {
          const { leave: P, delayLeave: k, afterLeave: $ } = ce,
            W = () => i(q, R, v),
            pe = () => {
              P(q, () => {
                W(), $ && $();
              });
            };
          k ? k(q, W, pe) : pe();
        }
      else i(q, R, v);
    },
    Pe = (w, R, v, te = !1, j = !1) => {
      const {
        type: q,
        props: J,
        ref: ce,
        children: K,
        dynamicChildren: x,
        shapeFlag: g,
        patchFlag: P,
        dirs: k,
        cacheIndex: $,
      } = w;
      if (
        (P === -2 && (j = !1),
        ce != null && fo(ce, null, v, w, !0),
        $ != null && (R.renderCache[$] = void 0),
        g & 256)
      ) {
        R.ctx.deactivate(w);
        return;
      }
      const W = g & 1 && k,
        pe = !Qr(w);
      let ue;
      if ((pe && (ue = J && J.onVnodeBeforeUnmount) && En(ue, R, w), g & 6))
        de(w.component, v, te);
      else {
        if (g & 128) {
          w.suspense.unmount(v, te);
          return;
        }
        W && Ai(w, null, R, "beforeUnmount"),
          g & 64
            ? w.type.remove(w, R, v, le, te)
            : x && !x.hasOnce && (q !== Kt || (P > 0 && P & 64))
              ? Me(x, R, v, !1, !0)
              : ((q === Kt && P & 384) || (!j && g & 16)) && Me(K, R, v),
          te && $e(w);
      }
      ((pe && (ue = J && J.onVnodeUnmounted)) || W) &&
        $t(() => {
          ue && En(ue, R, w), W && Ai(w, null, R, "unmounted");
        }, v);
    },
    $e = (w) => {
      const { type: R, el: v, anchor: te, transition: j } = w;
      if (R === Kt) {
        ie(v, te);
        return;
      }
      if (R === Qs) {
        y(w);
        return;
      }
      const q = () => {
        r(v), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (w.shapeFlag & 1 && j && !j.persisted) {
        const { leave: J, delayLeave: ce } = j,
          K = () => J(v, q);
        ce ? ce(w.el, q, K) : K();
      } else q();
    },
    ie = (w, R) => {
      let v;
      for (; w !== R; ) (v = h(w)), r(w), (w = v);
      r(R);
    },
    de = (w, R, v) => {
      const { bum: te, scope: j, job: q, subTree: J, um: ce, m: K, a: x } = w;
      Ic(K),
        Ic(x),
        te && Bo(te),
        j.stop(),
        q && ((q.flags |= 8), Pe(J, w, R, v)),
        ce && $t(ce, R),
        $t(() => {
          w.isUnmounted = !0;
        }, R),
        R &&
          R.pendingBranch &&
          !R.isUnmounted &&
          w.asyncDep &&
          !w.asyncResolved &&
          w.suspenseId === R.pendingId &&
          (R.deps--, R.deps === 0 && R.resolve());
    },
    Me = (w, R, v, te = !1, j = !1, q = 0) => {
      for (let J = q; J < w.length; J++) Pe(w[J], R, v, te, j);
    },
    U = (w) => {
      if (w.shapeFlag & 6) return U(w.component.subTree);
      if (w.shapeFlag & 128) return w.suspense.next();
      const R = h(w.anchor || w.el),
        v = R && R[yp];
      return v ? h(v) : R;
    };
  let re = !1;
  const ae = (w, R, v) => {
      w == null
        ? R._vnode && Pe(R._vnode, null, null, !0)
        : S(R._vnode || null, w, R, null, null, null, v),
        (R._vnode = w),
        re || ((re = !0), bc(), eh(), (re = !1));
    },
    le = {
      p: S,
      um: Pe,
      m: we,
      r: $e,
      mt: ne,
      mc: B,
      pc: V,
      pbc: M,
      n: U,
      o: n,
    };
  return { render: ae, hydrate: void 0, createApp: $p(ae) };
}
function qo({ type: n, props: e }, t) {
  return (t === "svg" && n === "foreignObject") ||
    (t === "mathml" &&
      n === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : t;
}
function wi({ effect: n, job: e }, t) {
  t ? ((n.flags |= 32), (e.flags |= 4)) : ((n.flags &= -33), (e.flags &= -5));
}
function nm(n, e) {
  return (!n || (n && !n.pendingBranch)) && e && !e.persisted;
}
function Th(n, e, t = !1) {
  const i = n.children,
    r = e.children;
  if (Fe(i) && Fe(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[s] = ci(r[s])), (a.el = o.el)),
        !t && a.patchFlag !== -2 && Th(o, a)),
        a.type === Po && (a.el = o.el);
    }
}
function im(n) {
  const e = n.slice(),
    t = [0];
  let i, r, s, o, a;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const c = n[i];
    if (c !== 0) {
      if (((r = t[t.length - 1]), n[r] < c)) {
        (e[i] = r), t.push(i);
        continue;
      }
      for (s = 0, o = t.length - 1; s < o; )
        (a = (s + o) >> 1), n[t[a]] < c ? (s = a + 1) : (o = a);
      c < n[t[s]] && (s > 0 && (e[i] = t[s - 1]), (t[s] = i));
    }
  }
  for (s = t.length, o = t[s - 1]; s-- > 0; ) (t[s] = o), (o = e[o]);
  return t;
}
function bh(n) {
  const e = n.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : bh(e);
}
function Ic(n) {
  if (n) for (let e = 0; e < n.length; e++) n[e].flags |= 8;
}
const rm = Symbol.for("v-scx"),
  sm = () => Yn(rm);
function ts(n, e, t) {
  return Ah(n, e, t);
}
function Ah(n, e, t = ct) {
  const { immediate: i, deep: r, flush: s, once: o } = t,
    a = Tt({}, t),
    l = (e && i) || (!e && s !== "post");
  let c;
  if (us) {
    if (s === "sync") {
      const p = sm();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {};
      return (p.stop = Rn), (p.resume = Rn), (p.pause = Rn), p;
    }
  }
  const u = At;
  a.call = (p, _, S) => Sn(p, u, _, S);
  let f = !1;
  s === "post"
    ? (a.scheduler = (p) => {
        $t(p, u && u.suspense);
      })
    : s !== "sync" &&
      ((f = !0),
      (a.scheduler = (p, _) => {
        _ ? p() : ql(p);
      })),
    (a.augmentJob = (p) => {
      e && (p.flags |= 4),
        f && ((p.flags |= 2), u && ((p.id = u.uid), (p.i = u)));
    });
  const h = xp(n, e, a);
  return us && (c ? c.push(h) : l && h()), h;
}
function om(n, e, t) {
  const i = this.proxy,
    r = _t(n) ? (n.includes(".") ? wh(i, n) : () => i[n]) : n.bind(i, i);
  let s;
  ke(e) ? (s = e) : ((s = e.handler), (t = e));
  const o = _s(this),
    a = Ah(r, s.bind(i), t);
  return o(), a;
}
function wh(n, e) {
  const t = e.split(".");
  return () => {
    let i = n;
    for (let r = 0; r < t.length && i; r++) i = i[t[r]];
    return i;
  };
}
const am = (n, e) =>
  e === "modelValue" || e === "model-value"
    ? n.modelModifiers
    : n[`${e}Modifiers`] || n[`${ln(e)}Modifiers`] || n[`${ji(e)}Modifiers`];
function lm(n, e, ...t) {
  if (n.isUnmounted) return;
  const i = n.vnode.props || ct;
  let r = t;
  const s = e.startsWith("update:"),
    o = s && am(i, e.slice(7));
  o &&
    (o.trim && (r = t.map((u) => (_t(u) ? u.trim() : u))),
    o.number && (r = t.map(zd)));
  let a,
    l = i[(a = Oo(e))] || i[(a = Oo(ln(e)))];
  !l && s && (l = i[(a = Oo(ji(e)))]), l && Sn(l, n, 6, r);
  const c = i[a + "Once"];
  if (c) {
    if (!n.emitted) n.emitted = {};
    else if (n.emitted[a]) return;
    (n.emitted[a] = !0), Sn(c, n, 6, r);
  }
}
function Rh(n, e, t = !1) {
  const i = e.emitsCache,
    r = i.get(n);
  if (r !== void 0) return r;
  const s = n.emits;
  let o = {},
    a = !1;
  if (!ke(n)) {
    const l = (c) => {
      const u = Rh(c, e, !0);
      u && ((a = !0), Tt(o, u));
    };
    !t && e.mixins.length && e.mixins.forEach(l),
      n.extends && l(n.extends),
      n.mixins && n.mixins.forEach(l);
  }
  return !s && !a
    ? (ht(n) && i.set(n, null), null)
    : (Fe(s) ? s.forEach((l) => (o[l] = null)) : Tt(o, s),
      ht(n) && i.set(n, o),
      o);
}
function Co(n, e) {
  return !n || !vo(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      it(n, e[0].toLowerCase() + e.slice(1)) || it(n, ji(e)) || it(n, e));
}
function Uc(n) {
  const {
      type: e,
      vnode: t,
      proxy: i,
      withProxy: r,
      propsOptions: [s],
      slots: o,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: f,
      data: h,
      setupState: p,
      ctx: _,
      inheritAttrs: S,
    } = n,
    m = uo(n);
  let d, A;
  try {
    if (t.shapeFlag & 4) {
      const y = r || i,
        I = y;
      (d = Tn(c.call(I, y, u, f, p, h, _))), (A = a);
    } else {
      const y = e;
      (d = Tn(
        y.length > 1 ? y(f, { attrs: a, slots: o, emit: l }) : y(f, null),
      )),
        (A = e.props ? a : cm(a));
    }
  } catch (y) {
    (ns.length = 0), bo(y, n, 1), (d = ft(kt));
  }
  let b = d;
  if (A && S !== !1) {
    const y = Object.keys(A),
      { shapeFlag: I } = b;
    y.length &&
      I & 7 &&
      (s && y.some(Nl) && (A = um(A, s)), (b = _i(b, A, !1, !0)));
  }
  return (
    t.dirs &&
      ((b = _i(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(t.dirs) : t.dirs)),
    t.transition && ls(b, t.transition),
    (d = b),
    uo(m),
    d
  );
}
const cm = (n) => {
    let e;
    for (const t in n)
      (t === "class" || t === "style" || vo(t)) && ((e || (e = {}))[t] = n[t]);
    return e;
  },
  um = (n, e) => {
    const t = {};
    for (const i in n) (!Nl(i) || !(i.slice(9) in e)) && (t[i] = n[i]);
    return t;
  };
function fm(n, e, t) {
  const { props: i, children: r, component: s } = n,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return i ? Nc(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !Co(c, h)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : i === o
        ? !1
        : i
          ? o
            ? Nc(i, o, c)
            : !0
          : !!o;
  return !1;
}
function Nc(n, e, t) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(n).length) return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== n[s] && !Co(t, s)) return !0;
  }
  return !1;
}
function hm({ vnode: n, parent: e }, t) {
  for (; e; ) {
    const i = e.subTree;
    if ((i.suspense && i.suspense.activeBranch === n && (i.el = n.el), i === n))
      ((n = e.vnode).el = t), (e = e.parent);
    else break;
  }
}
const Ch = (n) => n.__isSuspense;
function dm(n, e) {
  e && e.pendingBranch
    ? Fe(n)
      ? e.effects.push(...n)
      : e.effects.push(n)
    : Ep(n);
}
const Kt = Symbol.for("v-fgt"),
  Po = Symbol.for("v-txt"),
  kt = Symbol.for("v-cmt"),
  Qs = Symbol.for("v-stc"),
  ns = [];
let Jt = null;
function ut(n = !1) {
  ns.push((Jt = n ? null : []));
}
function pm() {
  ns.pop(), (Jt = ns[ns.length - 1] || null);
}
let cs = 1;
function Fc(n, e = !1) {
  (cs += n), n < 0 && Jt && e && (Jt.hasOnce = !0);
}
function Ph(n) {
  return (
    (n.dynamicChildren = cs > 0 ? Jt || _r : null),
    pm(),
    cs > 0 && Jt && Jt.push(n),
    n
  );
}
function St(n, e, t, i, r, s) {
  return Ph(Xe(n, e, t, i, r, s, !0));
}
function mr(n, e, t, i, r) {
  return Ph(ft(n, e, t, i, r, !0));
}
function po(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function zi(n, e) {
  return n.type === e.type && n.key === e.key;
}
const Lh = ({ key: n }) => n ?? null,
  eo = ({ ref: n, ref_key: e, ref_for: t }) => (
    typeof n == "number" && (n = "" + n),
    n != null
      ? _t(n) || Dt(n) || ke(n)
        ? { i: on, r: n, k: e, f: !!t }
        : n
      : null
  );
function Xe(
  n,
  e = null,
  t = null,
  i = 0,
  r = null,
  s = n === Kt ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && Lh(e),
    ref: e && eo(e),
    scopeId: nh,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: on,
  };
  return (
    a
      ? (jl(l, t), s & 128 && n.normalize(l))
      : t && (l.shapeFlag |= _t(t) ? 8 : 16),
    cs > 0 &&
      !o &&
      Jt &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      Jt.push(l),
    l
  );
}
const ft = mm;
function mm(n, e = null, t = null, i = 0, r = null, s = !1) {
  if (((!n || n === Bp) && (n = kt), po(n))) {
    const a = _i(n, e, !0);
    return (
      t && jl(a, t),
      cs > 0 &&
        !s &&
        Jt &&
        (a.shapeFlag & 6 ? (Jt[Jt.indexOf(n)] = a) : Jt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((Rm(n) && (n = n.__vccOpts), e)) {
    e = gm(e);
    let { class: a, style: l } = e;
    a && !_t(a) && (e.class = Ln(a)),
      ht(l) && (Xl(l) && !Fe(l) && (l = Tt({}, l)), (e.style = Bl(l)));
  }
  const o = _t(n) ? 1 : Ch(n) ? 128 : ih(n) ? 64 : ht(n) ? 4 : ke(n) ? 2 : 0;
  return Xe(n, e, t, i, r, o, s, !0);
}
function gm(n) {
  return n ? (Xl(n) || _h(n) ? Tt({}, n) : n) : null;
}
function _i(n, e, t = !1, i = !1) {
  const { props: r, ref: s, patchFlag: o, children: a, transition: l } = n,
    c = e ? vm(r || {}, e) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: n.type,
      props: c,
      key: c && Lh(c),
      ref:
        e && e.ref
          ? t && s
            ? Fe(s)
              ? s.concat(eo(e))
              : [s, eo(e)]
            : eo(e)
          : s,
      scopeId: n.scopeId,
      slotScopeIds: n.slotScopeIds,
      children: a,
      target: n.target,
      targetStart: n.targetStart,
      targetAnchor: n.targetAnchor,
      staticCount: n.staticCount,
      shapeFlag: n.shapeFlag,
      patchFlag: e && n.type !== Kt ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: n.dynamicProps,
      dynamicChildren: n.dynamicChildren,
      appContext: n.appContext,
      dirs: n.dirs,
      transition: l,
      component: n.component,
      suspense: n.suspense,
      ssContent: n.ssContent && _i(n.ssContent),
      ssFallback: n.ssFallback && _i(n.ssFallback),
      el: n.el,
      anchor: n.anchor,
      ctx: n.ctx,
      ce: n.ce,
    };
  return l && i && ls(u, l.clone(u)), u;
}
function pi(n = " ", e = 0) {
  return ft(Po, null, n, e);
}
function _m(n, e) {
  const t = ft(Qs, null, n);
  return (t.staticCount = e), t;
}
function Hi(n = "", e = !1) {
  return e ? (ut(), mr(kt, null, n)) : ft(kt, null, n);
}
function Tn(n) {
  return n == null || typeof n == "boolean"
    ? ft(kt)
    : Fe(n)
      ? ft(Kt, null, n.slice())
      : po(n)
        ? ci(n)
        : ft(Po, null, String(n));
}
function ci(n) {
  return (n.el === null && n.patchFlag !== -1) || n.memo ? n : _i(n);
}
function jl(n, e) {
  let t = 0;
  const { shapeFlag: i } = n;
  if (e == null) e = null;
  else if (Fe(e)) t = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), jl(n, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = e._;
      !r && !_h(e)
        ? (e._ctx = on)
        : r === 3 &&
          on &&
          (on.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (n.patchFlag |= 1024)));
    }
  else
    ke(e)
      ? ((e = { default: e, _ctx: on }), (t = 32))
      : ((e = String(e)), i & 64 ? ((t = 16), (e = [pi(e)])) : (t = 8));
  (n.children = e), (n.shapeFlag |= t);
}
function vm(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    for (const r in i)
      if (r === "class")
        e.class !== i.class && (e.class = Ln([e.class, i.class]));
      else if (r === "style") e.style = Bl([e.style, i.style]);
      else if (vo(r)) {
        const s = e[r],
          o = i[r];
        o &&
          s !== o &&
          !(Fe(s) && s.includes(o)) &&
          (e[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (e[r] = i[r]);
  }
  return e;
}
function En(n, e, t, i = null) {
  Sn(n, e, 7, [t, i]);
}
const xm = ph();
let Sm = 0;
function Mm(n, e, t) {
  const i = n.type,
    r = (e ? e.appContext : n.appContext) || xm,
    s = {
      uid: Sm++,
      vnode: n,
      type: i,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Lf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(r.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: xh(i, r),
      emitsOptions: Rh(i, r),
      emit: null,
      emitted: null,
      propsDefaults: ct,
      inheritAttrs: i.inheritAttrs,
      ctx: ct,
      data: ct,
      props: ct,
      attrs: ct,
      slots: ct,
      refs: ct,
      setupState: ct,
      setupContext: null,
      suspense: t,
      suspenseId: t ? t.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = e ? e.root : s),
    (s.emit = lm.bind(null, s)),
    n.ce && n.ce(s),
    s
  );
}
let At = null;
const Em = () => At || on;
let mo, ka;
{
  const n = Eo(),
    e = (t, i) => {
      let r;
      return (
        (r = n[t]) || (r = n[t] = []),
        r.push(i),
        (s) => {
          r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
        }
      );
    };
  (mo = e("__VUE_INSTANCE_SETTERS__", (t) => (At = t))),
    (ka = e("__VUE_SSR_SETTERS__", (t) => (us = t)));
}
const _s = (n) => {
    const e = At;
    return (
      mo(n),
      n.scope.on(),
      () => {
        n.scope.off(), mo(e);
      }
    );
  },
  Oc = () => {
    At && At.scope.off(), mo(null);
  };
function Dh(n) {
  return n.vnode.shapeFlag & 4;
}
let us = !1;
function ym(n, e = !1, t = !1) {
  e && ka(e);
  const { props: i, children: r } = n.vnode,
    s = Dh(n);
  Yp(n, i, s, e), Jp(n, r, t);
  const o = s ? Tm(n, e) : void 0;
  return e && ka(!1), o;
}
function Tm(n, e) {
  const t = n.type;
  (n.accessCache = Object.create(null)), (n.proxy = new Proxy(n.ctx, Hp));
  const { setup: i } = t;
  if (i) {
    Mi();
    const r = (n.setupContext = i.length > 1 ? Am(n) : null),
      s = _s(n),
      o = gs(i, n, 0, [n.props, r]),
      a = Tf(o);
    if ((Ei(), s(), (a || n.sp) && !Qr(n) && ch(n), a)) {
      if ((o.then(Oc, Oc), e))
        return o
          .then((l) => {
            Bc(n, l);
          })
          .catch((l) => {
            bo(l, n, 0);
          });
      n.asyncDep = o;
    } else Bc(n, o);
  } else Ih(n);
}
function Bc(n, e, t) {
  ke(e)
    ? n.type.__ssrInlineRender
      ? (n.ssrRender = e)
      : (n.render = e)
    : ht(e) && (n.setupState = Kf(e)),
    Ih(n);
}
function Ih(n, e, t) {
  const i = n.type;
  n.render || (n.render = i.render || Rn);
  {
    const r = _s(n);
    Mi();
    try {
      kp(n);
    } finally {
      Ei(), r();
    }
  }
}
const bm = {
  get(n, e) {
    return Pt(n, "get", ""), n[e];
  },
};
function Am(n) {
  const e = (t) => {
    n.exposed = t || {};
  };
  return {
    attrs: new Proxy(n.attrs, bm),
    slots: n.slots,
    emit: n.emit,
    expose: e,
  };
}
function Kl(n) {
  return n.exposed
    ? n.exposeProxy ||
        (n.exposeProxy = new Proxy(Kf(Yf(n.exposed)), {
          get(e, t) {
            if (t in e) return e[t];
            if (t in es) return es[t](n);
          },
          has(e, t) {
            return t in e || t in es;
          },
        }))
    : n.proxy;
}
function wm(n, e = !0) {
  return ke(n) ? n.displayName || n.name : n.name || (e && n.__name);
}
function Rm(n) {
  return ke(n) && "__vccOpts" in n;
}
const mn = (n, e) => _p(n, e, us);
function Zl(n, e, t) {
  const i = arguments.length;
  return i === 2
    ? ht(e) && !Fe(e)
      ? po(e)
        ? ft(n, null, [e])
        : ft(n, e)
      : ft(n, null, e)
    : (i > 3
        ? (t = Array.prototype.slice.call(arguments, 2))
        : i === 3 && po(t) && (t = [t]),
      ft(n, e, t));
}
const Cm = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Va;
const zc = typeof window < "u" && window.trustedTypes;
if (zc)
  try {
    Va = zc.createPolicy("vue", { createHTML: (n) => n });
  } catch {}
const Uh = Va ? (n) => Va.createHTML(n) : (n) => n,
  Pm = "http://www.w3.org/2000/svg",
  Lm = "http://www.w3.org/1998/Math/MathML",
  Gn = typeof document < "u" ? document : null,
  Hc = Gn && Gn.createElement("template"),
  Dm = {
    insert: (n, e, t) => {
      e.insertBefore(n, t || null);
    },
    remove: (n) => {
      const e = n.parentNode;
      e && e.removeChild(n);
    },
    createElement: (n, e, t, i) => {
      const r =
        e === "svg"
          ? Gn.createElementNS(Pm, n)
          : e === "mathml"
            ? Gn.createElementNS(Lm, n)
            : t
              ? Gn.createElement(n, { is: t })
              : Gn.createElement(n);
      return (
        n === "select" &&
          i &&
          i.multiple != null &&
          r.setAttribute("multiple", i.multiple),
        r
      );
    },
    createText: (n) => Gn.createTextNode(n),
    createComment: (n) => Gn.createComment(n),
    setText: (n, e) => {
      n.nodeValue = e;
    },
    setElementText: (n, e) => {
      n.textContent = e;
    },
    parentNode: (n) => n.parentNode,
    nextSibling: (n) => n.nextSibling,
    querySelector: (n) => Gn.querySelector(n),
    setScopeId(n, e) {
      n.setAttribute(e, "");
    },
    insertStaticContent(n, e, t, i, r, s) {
      const o = t ? t.previousSibling : e.lastChild;
      if (r && (r === s || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), t),
            !(r === s || !(r = r.nextSibling));

        );
      else {
        Hc.innerHTML = Uh(
          i === "svg"
            ? `<svg>${n}</svg>`
            : i === "mathml"
              ? `<math>${n}</math>`
              : n,
        );
        const a = Hc.content;
        if (i === "svg" || i === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        e.insertBefore(a, t);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        t ? t.previousSibling : e.lastChild,
      ];
    },
  },
  Jn = "transition",
  Hr = "animation",
  fs = Symbol("_vtc"),
  Nh = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Im = Tt({}, rh, Nh),
  Um = (n) => ((n.displayName = "Transition"), (n.props = Im), n),
  Nm = Um((n, { slots: e }) => Zl(Ap, Fm(n), e)),
  Ri = (n, e = []) => {
    Fe(n) ? n.forEach((t) => t(...e)) : n && n(...e);
  },
  kc = (n) => (n ? (Fe(n) ? n.some((e) => e.length > 1) : n.length > 1) : !1);
function Fm(n) {
  const e = {};
  for (const O in n) O in Nh || (e[O] = n[O]);
  if (n.css === !1) return e;
  const {
      name: t = "v",
      type: i,
      duration: r,
      enterFromClass: s = `${t}-enter-from`,
      enterActiveClass: o = `${t}-enter-active`,
      enterToClass: a = `${t}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: c = o,
      appearToClass: u = a,
      leaveFromClass: f = `${t}-leave-from`,
      leaveActiveClass: h = `${t}-leave-active`,
      leaveToClass: p = `${t}-leave-to`,
    } = n,
    _ = Om(r),
    S = _ && _[0],
    m = _ && _[1],
    {
      onBeforeEnter: d,
      onEnter: A,
      onEnterCancelled: b,
      onLeave: y,
      onLeaveCancelled: I,
      onBeforeAppear: D = d,
      onAppear: C = A,
      onAppearCancelled: B = b,
    } = e,
    T = (O, H, ne, se) => {
      (O._enterCancelled = se), Ci(O, H ? u : a), Ci(O, H ? c : o), ne && ne();
    },
    M = (O, H) => {
      (O._isLeaving = !1), Ci(O, f), Ci(O, p), Ci(O, h), H && H();
    },
    L = (O) => (H, ne) => {
      const se = O ? C : A,
        Z = () => T(H, O, ne);
      Ri(se, [H, Z]),
        Vc(() => {
          Ci(H, O ? l : s), Nn(H, O ? u : a), kc(se) || Gc(H, i, S, Z);
        });
    };
  return Tt(e, {
    onBeforeEnter(O) {
      Ri(d, [O]), Nn(O, s), Nn(O, o);
    },
    onBeforeAppear(O) {
      Ri(D, [O]), Nn(O, l), Nn(O, c);
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(O, H) {
      O._isLeaving = !0;
      const ne = () => M(O, H);
      Nn(O, f),
        O._enterCancelled ? (Nn(O, h), qc()) : (qc(), Nn(O, h)),
        Vc(() => {
          O._isLeaving && (Ci(O, f), Nn(O, p), kc(y) || Gc(O, i, m, ne));
        }),
        Ri(y, [O, ne]);
    },
    onEnterCancelled(O) {
      T(O, !1, void 0, !0), Ri(b, [O]);
    },
    onAppearCancelled(O) {
      T(O, !0, void 0, !0), Ri(B, [O]);
    },
    onLeaveCancelled(O) {
      M(O), Ri(I, [O]);
    },
  });
}
function Om(n) {
  if (n == null) return null;
  if (ht(n)) return [$o(n.enter), $o(n.leave)];
  {
    const e = $o(n);
    return [e, e];
  }
}
function $o(n) {
  return Hd(n);
}
function Nn(n, e) {
  e.split(/\s+/).forEach((t) => t && n.classList.add(t)),
    (n[fs] || (n[fs] = new Set())).add(e);
}
function Ci(n, e) {
  e.split(/\s+/).forEach((i) => i && n.classList.remove(i));
  const t = n[fs];
  t && (t.delete(e), t.size || (n[fs] = void 0));
}
function Vc(n) {
  requestAnimationFrame(() => {
    requestAnimationFrame(n);
  });
}
let Bm = 0;
function Gc(n, e, t, i) {
  const r = (n._endId = ++Bm),
    s = () => {
      r === n._endId && i();
    };
  if (t != null) return setTimeout(s, t);
  const { type: o, timeout: a, propCount: l } = zm(n, e);
  if (!o) return i();
  const c = o + "end";
  let u = 0;
  const f = () => {
      n.removeEventListener(c, h), s();
    },
    h = (p) => {
      p.target === n && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    n.addEventListener(c, h);
}
function zm(n, e) {
  const t = window.getComputedStyle(n),
    i = (_) => (t[_] || "").split(", "),
    r = i(`${Jn}Delay`),
    s = i(`${Jn}Duration`),
    o = Wc(r, s),
    a = i(`${Hr}Delay`),
    l = i(`${Hr}Duration`),
    c = Wc(a, l);
  let u = null,
    f = 0,
    h = 0;
  e === Jn
    ? o > 0 && ((u = Jn), (f = o), (h = s.length))
    : e === Hr
      ? c > 0 && ((u = Hr), (f = c), (h = l.length))
      : ((f = Math.max(o, c)),
        (u = f > 0 ? (o > c ? Jn : Hr) : null),
        (h = u ? (u === Jn ? s.length : l.length) : 0));
  const p =
    u === Jn && /\b(transform|all)(,|$)/.test(i(`${Jn}Property`).toString());
  return { type: u, timeout: f, propCount: h, hasTransform: p };
}
function Wc(n, e) {
  for (; n.length < e.length; ) n = n.concat(n);
  return Math.max(...e.map((t, i) => Xc(t) + Xc(n[i])));
}
function Xc(n) {
  return n === "auto" ? 0 : Number(n.slice(0, -1).replace(",", ".")) * 1e3;
}
function qc() {
  return document.body.offsetHeight;
}
function Hm(n, e, t) {
  const i = n[fs];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")),
    e == null
      ? n.removeAttribute("class")
      : t
        ? n.setAttribute("class", e)
        : (n.className = e);
}
const $c = Symbol("_vod"),
  km = Symbol("_vsh"),
  Vm = Symbol(""),
  Gm = /(^|;)\s*display\s*:/;
function Wm(n, e, t) {
  const i = n.style,
    r = _t(t);
  let s = !1;
  if (t && !r) {
    if (e)
      if (_t(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          t[a] == null && to(i, a, "");
        }
      else for (const o in e) t[o] == null && to(i, o, "");
    for (const o in t) o === "display" && (s = !0), to(i, o, t[o]);
  } else if (r) {
    if (e !== t) {
      const o = i[Vm];
      o && (t += ";" + o), (i.cssText = t), (s = Gm.test(t));
    }
  } else e && n.removeAttribute("style");
  $c in n && ((n[$c] = s ? i.display : ""), n[km] && (i.display = "none"));
}
const Yc = /\s*!important$/;
function to(n, e, t) {
  if (Fe(t)) t.forEach((i) => to(n, e, i));
  else if ((t == null && (t = ""), e.startsWith("--"))) n.setProperty(e, t);
  else {
    const i = Xm(n, e);
    Yc.test(t)
      ? n.setProperty(ji(i), t.replace(Yc, ""), "important")
      : (n[i] = t);
  }
}
const jc = ["Webkit", "Moz", "ms"],
  Yo = {};
function Xm(n, e) {
  const t = Yo[e];
  if (t) return t;
  let i = ln(e);
  if (i !== "filter" && i in n) return (Yo[e] = i);
  i = Mo(i);
  for (let r = 0; r < jc.length; r++) {
    const s = jc[r] + i;
    if (s in n) return (Yo[e] = s);
  }
  return e;
}
const Kc = "http://www.w3.org/1999/xlink";
function Zc(n, e, t, i, r, s = qd(e)) {
  i && e.startsWith("xlink:")
    ? t == null
      ? n.removeAttributeNS(Kc, e.slice(6, e.length))
      : n.setAttributeNS(Kc, e, t)
    : t == null || (s && !Rf(t))
      ? n.removeAttribute(e)
      : n.setAttribute(e, s ? "" : Si(t) ? String(t) : t);
}
function Jc(n, e, t, i, r) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (n[e] = e === "innerHTML" ? Uh(t) : t);
    return;
  }
  const s = n.tagName;
  if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const a = s === "OPTION" ? n.getAttribute("value") || "" : n.value,
      l = t == null ? (n.type === "checkbox" ? "on" : "") : String(t);
    (a !== l || !("_value" in n)) && (n.value = l),
      t == null && n.removeAttribute(e),
      (n._value = t);
    return;
  }
  let o = !1;
  if (t === "" || t == null) {
    const a = typeof n[e];
    a === "boolean"
      ? (t = Rf(t))
      : t == null && a === "string"
        ? ((t = ""), (o = !0))
        : a === "number" && ((t = 0), (o = !0));
  }
  try {
    n[e] = t;
  } catch {}
  o && n.removeAttribute(r || e);
}
function qm(n, e, t, i) {
  n.addEventListener(e, t, i);
}
function $m(n, e, t, i) {
  n.removeEventListener(e, t, i);
}
const Qc = Symbol("_vei");
function Ym(n, e, t, i, r = null) {
  const s = n[Qc] || (n[Qc] = {}),
    o = s[e];
  if (i && o) o.value = i;
  else {
    const [a, l] = jm(e);
    if (i) {
      const c = (s[e] = Jm(i, r));
      qm(n, a, c, l);
    } else o && ($m(n, a, o, l), (s[e] = void 0));
  }
}
const eu = /(?:Once|Passive|Capture)$/;
function jm(n) {
  let e;
  if (eu.test(n)) {
    e = {};
    let i;
    for (; (i = n.match(eu)); )
      (n = n.slice(0, n.length - i[0].length)), (e[i[0].toLowerCase()] = !0);
  }
  return [n[2] === ":" ? n.slice(3) : ji(n.slice(2)), e];
}
let jo = 0;
const Km = Promise.resolve(),
  Zm = () => jo || (Km.then(() => (jo = 0)), (jo = Date.now()));
function Jm(n, e) {
  const t = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= t.attached) return;
    Sn(Qm(i, t.value), e, 5, [i]);
  };
  return (t.value = n), (t.attached = Zm()), t;
}
function Qm(n, e) {
  if (Fe(e)) {
    const t = n.stopImmediatePropagation;
    return (
      (n.stopImmediatePropagation = () => {
        t.call(n), (n._stopped = !0);
      }),
      e.map((i) => (r) => !r._stopped && i && i(r))
    );
  } else return e;
}
const tu = (n) =>
    n.charCodeAt(0) === 111 &&
    n.charCodeAt(1) === 110 &&
    n.charCodeAt(2) > 96 &&
    n.charCodeAt(2) < 123,
  eg = (n, e, t, i, r, s) => {
    const o = r === "svg";
    e === "class"
      ? Hm(n, i, o)
      : e === "style"
        ? Wm(n, t, i)
        : vo(e)
          ? Nl(e) || Ym(n, e, t, i, s)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : tg(n, e, i, o)
              )
            ? (Jc(n, e, i),
              !n.tagName.includes("-") &&
                (e === "value" || e === "checked" || e === "selected") &&
                Zc(n, e, i, o, s, e !== "value"))
            : n._isVueCE && (/[A-Z]/.test(e) || !_t(i))
              ? Jc(n, ln(e), i, s, e)
              : (e === "true-value"
                  ? (n._trueValue = i)
                  : e === "false-value" && (n._falseValue = i),
                Zc(n, e, i, o));
  };
function tg(n, e, t, i) {
  if (i)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in n && tu(e) && ke(t))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && n.tagName === "INPUT") ||
    (e === "type" && n.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const r = n.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return tu(e) && _t(t) ? !1 : e in n;
}
const ng = Tt({ patchProp: eg }, Dm);
let nu;
function ig() {
  return nu || (nu = em(ng));
}
const rg = (...n) => {
  const e = ig().createApp(...n),
    { mount: t } = e;
  return (
    (e.mount = (i) => {
      const r = og(i);
      if (!r) return;
      const s = e._component;
      !ke(s) && !s.render && !s.template && (s.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = t(r, !1, sg(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function sg(n) {
  if (n instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function og(n) {
  return _t(n) ? document.querySelector(n) : n;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const ag = Symbol();
var iu;
(function (n) {
  (n.direct = "direct"),
    (n.patchObject = "patch object"),
    (n.patchFunction = "patch function");
})(iu || (iu = {}));
function lg() {
  const n = $d(!0),
    e = n.run(() => jt({}));
  let t = [],
    i = [];
  const r = Yf({
    install(s) {
      (r._a = s),
        s.provide(ag, r),
        (s.config.globalProperties.$pinia = r),
        i.forEach((o) => t.push(o)),
        (i = []);
    },
    use(s) {
      return this._a ? t.push(s) : i.push(s), this;
    },
    _p: t,
    _a: null,
    _e: n,
    _s: new Map(),
    state: e,
  });
  return r;
}
const cn = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [i, r] of e) t[i] = r;
    return t;
  },
  cg = {};
function ug(n, e) {
  const t = Ht("RouterView");
  return ut(), mr(t);
}
const fg = cn(cg, [["render", ug]]);
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const dr = typeof document < "u";
function Fh(n) {
  return (
    typeof n == "object" ||
    "displayName" in n ||
    "props" in n ||
    "__vccOpts" in n
  );
}
function hg(n) {
  return (
    n.__esModule ||
    n[Symbol.toStringTag] === "Module" ||
    (n.default && Fh(n.default))
  );
}
const nt = Object.assign;
function Ko(n, e) {
  const t = {};
  for (const i in e) {
    const r = e[i];
    t[i] = Mn(r) ? r.map(n) : n(r);
  }
  return t;
}
const is = () => {},
  Mn = Array.isArray,
  Oh = /#/g,
  dg = /&/g,
  pg = /\//g,
  mg = /=/g,
  gg = /\?/g,
  Bh = /\+/g,
  _g = /%5B/g,
  vg = /%5D/g,
  zh = /%5E/g,
  xg = /%60/g,
  Hh = /%7B/g,
  Sg = /%7C/g,
  kh = /%7D/g,
  Mg = /%20/g;
function Jl(n) {
  return encodeURI("" + n)
    .replace(Sg, "|")
    .replace(_g, "[")
    .replace(vg, "]");
}
function Eg(n) {
  return Jl(n).replace(Hh, "{").replace(kh, "}").replace(zh, "^");
}
function Ga(n) {
  return Jl(n)
    .replace(Bh, "%2B")
    .replace(Mg, "+")
    .replace(Oh, "%23")
    .replace(dg, "%26")
    .replace(xg, "`")
    .replace(Hh, "{")
    .replace(kh, "}")
    .replace(zh, "^");
}
function yg(n) {
  return Ga(n).replace(mg, "%3D");
}
function Tg(n) {
  return Jl(n).replace(Oh, "%23").replace(gg, "%3F");
}
function bg(n) {
  return n == null ? "" : Tg(n).replace(pg, "%2F");
}
function hs(n) {
  try {
    return decodeURIComponent("" + n);
  } catch {}
  return "" + n;
}
const Ag = /\/$/,
  wg = (n) => n.replace(Ag, "");
function Zo(n, e, t = "/") {
  let i,
    r = {},
    s = "",
    o = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((i = e.slice(0, l)),
      (s = e.slice(l + 1, a > -1 ? a : e.length)),
      (r = n(s))),
    a > -1 && ((i = i || e.slice(0, a)), (o = e.slice(a, e.length))),
    (i = Lg(i ?? e, t)),
    { fullPath: i + (s && "?") + s + o, path: i, query: r, hash: hs(o) }
  );
}
function Rg(n, e) {
  const t = e.query ? n(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "");
}
function ru(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase())
    ? n
    : n.slice(e.length) || "/";
}
function Cg(n, e, t) {
  const i = e.matched.length - 1,
    r = t.matched.length - 1;
  return (
    i > -1 &&
    i === r &&
    wr(e.matched[i], t.matched[r]) &&
    Vh(e.params, t.params) &&
    n(e.query) === n(t.query) &&
    e.hash === t.hash
  );
}
function wr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Vh(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length) return !1;
  for (const t in n) if (!Pg(n[t], e[t])) return !1;
  return !0;
}
function Pg(n, e) {
  return Mn(n) ? su(n, e) : Mn(e) ? su(e, n) : n === e;
}
function su(n, e) {
  return Mn(e)
    ? n.length === e.length && n.every((t, i) => t === e[i])
    : n.length === 1 && n[0] === e;
}
function Lg(n, e) {
  if (n.startsWith("/")) return n;
  if (!n) return e;
  const t = e.split("/"),
    i = n.split("/"),
    r = i[i.length - 1];
  (r === ".." || r === ".") && i.push("");
  let s = t.length - 1,
    o,
    a;
  for (o = 0; o < i.length; o++)
    if (((a = i[o]), a !== "."))
      if (a === "..") s > 1 && s--;
      else break;
  return t.slice(0, s).join("/") + "/" + i.slice(o).join("/");
}
const Qn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var ds;
(function (n) {
  (n.pop = "pop"), (n.push = "push");
})(ds || (ds = {}));
var rs;
(function (n) {
  (n.back = "back"), (n.forward = "forward"), (n.unknown = "");
})(rs || (rs = {}));
function Dg(n) {
  if (!n)
    if (dr) {
      const e = document.querySelector("base");
      (n = (e && e.getAttribute("href")) || "/"),
        (n = n.replace(/^\w+:\/\/[^\/]+/, ""));
    } else n = "/";
  return n[0] !== "/" && n[0] !== "#" && (n = "/" + n), wg(n);
}
const Ig = /^[^#]+#/;
function Ug(n, e) {
  return n.replace(Ig, "#") + e;
}
function Ng(n, e) {
  const t = document.documentElement.getBoundingClientRect(),
    i = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - t.left - (e.left || 0),
    top: i.top - t.top - (e.top || 0),
  };
}
const Lo = () => ({ left: window.scrollX, top: window.scrollY });
function Fg(n) {
  let e;
  if ("el" in n) {
    const t = n.el,
      i = typeof t == "string" && t.startsWith("#"),
      r =
        typeof t == "string"
          ? i
            ? document.getElementById(t.slice(1))
            : document.querySelector(t)
          : t;
    if (!r) return;
    e = Ng(r, n);
  } else e = n;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY,
      );
}
function ou(n, e) {
  return (history.state ? history.state.position - e : -1) + n;
}
const Wa = new Map();
function Og(n, e) {
  Wa.set(n, e);
}
function Bg(n) {
  const e = Wa.get(n);
  return Wa.delete(n), e;
}
let zg = () => location.protocol + "//" + location.host;
function Gh(n, e) {
  const { pathname: t, search: i, hash: r } = e,
    s = n.indexOf("#");
  if (s > -1) {
    let a = r.includes(n.slice(s)) ? n.slice(s).length : 1,
      l = r.slice(a);
    return l[0] !== "/" && (l = "/" + l), ru(l, "");
  }
  return ru(t, n) + i + r;
}
function Hg(n, e, t, i) {
  let r = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const p = Gh(n, location),
      _ = t.value,
      S = e.value;
    let m = 0;
    if (h) {
      if (((t.value = p), (e.value = h), o && o === _)) {
        o = null;
        return;
      }
      m = S ? h.position - S.position : 0;
    } else i(p);
    r.forEach((d) => {
      d(t.value, _, {
        delta: m,
        type: ds.pop,
        direction: m ? (m > 0 ? rs.forward : rs.back) : rs.unknown,
      });
    });
  };
  function l() {
    o = t.value;
  }
  function c(h) {
    r.push(h);
    const p = () => {
      const _ = r.indexOf(h);
      _ > -1 && r.splice(_, 1);
    };
    return s.push(p), p;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(nt({}, h.state, { scroll: Lo() }), "");
  }
  function f() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function au(n, e, t, i = !1, r = !1) {
  return {
    back: n,
    current: e,
    forward: t,
    replaced: i,
    position: window.history.length,
    scroll: r ? Lo() : null,
  };
}
function kg(n) {
  const { history: e, location: t } = window,
    i = { value: Gh(n, t) },
    r = { value: e.state };
  r.value ||
    s(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function s(l, c, u) {
    const f = n.indexOf("#"),
      h =
        f > -1
          ? (t.host && document.querySelector("base") ? n : n.slice(f)) + l
          : zg() + n + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", h), (r.value = c);
    } catch (p) {
      console.error(p), t[u ? "replace" : "assign"](h);
    }
  }
  function o(l, c) {
    const u = nt({}, e.state, au(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position,
    });
    s(l, u, !0), (i.value = l);
  }
  function a(l, c) {
    const u = nt({}, r.value, e.state, { forward: l, scroll: Lo() });
    s(u.current, u, !0);
    const f = nt({}, au(i.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (i.value = l);
  }
  return { location: i, state: r, push: a, replace: o };
}
function Vg(n) {
  n = Dg(n);
  const e = kg(n),
    t = Hg(n, e.state, e.location, e.replace);
  function i(s, o = !0) {
    o || t.pauseListeners(), history.go(s);
  }
  const r = nt(
    { location: "", base: n, go: i, createHref: Ug.bind(null, n) },
    e,
    t,
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    r
  );
}
function Gg(n) {
  return typeof n == "string" || (n && typeof n == "object");
}
function Wh(n) {
  return typeof n == "string" || typeof n == "symbol";
}
const Xh = Symbol("");
var lu;
(function (n) {
  (n[(n.aborted = 4)] = "aborted"),
    (n[(n.cancelled = 8)] = "cancelled"),
    (n[(n.duplicated = 16)] = "duplicated");
})(lu || (lu = {}));
function Rr(n, e) {
  return nt(new Error(), { type: n, [Xh]: !0 }, e);
}
function Fn(n, e) {
  return n instanceof Error && Xh in n && (e == null || !!(n.type & e));
}
const cu = "[^/]+?",
  Wg = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Xg = /[.+*?^${}()[\]/\\]/g;
function qg(n, e) {
  const t = nt({}, Wg, e),
    i = [];
  let r = t.start ? "^" : "";
  const s = [];
  for (const c of n) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let p = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += "/"), (r += h.value.replace(Xg, "\\$&")), (p += 40);
      else if (h.type === 1) {
        const { value: _, repeatable: S, optional: m, regexp: d } = h;
        s.push({ name: _, repeatable: S, optional: m });
        const A = d || cu;
        if (A !== cu) {
          p += 10;
          try {
            new RegExp(`(${A})`);
          } catch (y) {
            throw new Error(
              `Invalid custom RegExp for param "${_}" (${A}): ` + y.message,
            );
          }
        }
        let b = S ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        f || (b = m && c.length < 2 ? `(?:/${b})` : "/" + b),
          m && (b += "?"),
          (r += b),
          (p += 20),
          m && (p += -8),
          S && (p += -20),
          A === ".*" && (p += -50);
      }
      u.push(p);
    }
    i.push(u);
  }
  if (t.strict && t.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += 0.7000000000000001;
  }
  t.strict || (r += "/?"),
    t.end ? (r += "$") : t.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, t.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const p = u[h] || "",
        _ = s[h - 1];
      f[_.name] = p && _.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const h of n) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const p of h)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: _, repeatable: S, optional: m } = p,
            d = _ in c ? c[_] : "";
          if (Mn(d) && !S)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const A = Mn(d) ? d.join("/") : d;
          if (!A)
            if (m)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${_}"`);
          u += A;
        }
    }
    return u || "/";
  }
  return { re: o, score: i, keys: s, parse: a, stringify: l };
}
function $g(n, e) {
  let t = 0;
  for (; t < n.length && t < e.length; ) {
    const i = e[t] - n[t];
    if (i) return i;
    t++;
  }
  return n.length < e.length
    ? n.length === 1 && n[0] === 80
      ? -1
      : 1
    : n.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0;
}
function qh(n, e) {
  let t = 0;
  const i = n.score,
    r = e.score;
  for (; t < i.length && t < r.length; ) {
    const s = $g(i[t], r[t]);
    if (s) return s;
    t++;
  }
  if (Math.abs(r.length - i.length) === 1) {
    if (uu(i)) return 1;
    if (uu(r)) return -1;
  }
  return r.length - i.length;
}
function uu(n) {
  const e = n[n.length - 1];
  return n.length > 0 && e[e.length - 1] < 0;
}
const Yg = { type: 0, value: "" },
  jg = /[a-zA-Z0-9_]/;
function Kg(n) {
  if (!n) return [[]];
  if (n === "/") return [[Yg]];
  if (!n.startsWith("/")) throw new Error(`Invalid path "${n}"`);
  function e(p) {
    throw new Error(`ERR (${t})/"${c}": ${p}`);
  }
  let t = 0,
    i = t;
  const r = [];
  let s;
  function o() {
    s && r.push(s), (s = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (t === 0
        ? s.push({ type: 0, value: c })
        : t === 1 || t === 2 || t === 3
          ? (s.length > 1 &&
              (l === "*" || l === "+") &&
              e(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            s.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: l === "*" || l === "+",
              optional: l === "*" || l === "?",
            }))
          : e("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += l;
  }
  for (; a < n.length; ) {
    if (((l = n[a++]), l === "\\" && t !== 2)) {
      (i = t), (t = 4);
      continue;
    }
    switch (t) {
      case 0:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), (t = 1)) : h();
        break;
      case 4:
        h(), (t = i);
        break;
      case 1:
        l === "("
          ? (t = 2)
          : jg.test(l)
            ? h()
            : (f(), (t = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (t = 3)
          : (u += l);
        break;
      case 3:
        f(), (t = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${c}"`), f(), o(), r;
}
function Zg(n, e, t) {
  const i = qg(Kg(n.path), t),
    r = nt(i, { record: n, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function Jg(n, e) {
  const t = [],
    i = new Map();
  e = pu({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(f) {
    return i.get(f);
  }
  function s(f, h, p) {
    const _ = !p,
      S = hu(f);
    S.aliasOf = p && p.record;
    const m = pu(e, f),
      d = [S];
    if ("alias" in f) {
      const y = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const I of y)
        d.push(
          hu(
            nt({}, S, {
              components: p ? p.record.components : S.components,
              path: I,
              aliasOf: p ? p.record : S,
            }),
          ),
        );
    }
    let A, b;
    for (const y of d) {
      const { path: I } = y;
      if (h && I[0] !== "/") {
        const D = h.record.path,
          C = D[D.length - 1] === "/" ? "" : "/";
        y.path = h.record.path + (I && C + I);
      }
      if (
        ((A = Zg(y, h, m)),
        p
          ? p.alias.push(A)
          : ((b = b || A),
            b !== A && b.alias.push(A),
            _ && f.name && !du(A) && o(f.name)),
        $h(A) && l(A),
        S.children)
      ) {
        const D = S.children;
        for (let C = 0; C < D.length; C++) s(D[C], A, p && p.children[C]);
      }
      p = p || A;
    }
    return b
      ? () => {
          o(b);
        }
      : is;
  }
  function o(f) {
    if (Wh(f)) {
      const h = i.get(f);
      h &&
        (i.delete(f),
        t.splice(t.indexOf(h), 1),
        h.children.forEach(o),
        h.alias.forEach(o));
    } else {
      const h = t.indexOf(f);
      h > -1 &&
        (t.splice(h, 1),
        f.record.name && i.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o));
    }
  }
  function a() {
    return t;
  }
  function l(f) {
    const h = t_(f, t);
    t.splice(h, 0, f), f.record.name && !du(f) && i.set(f.record.name, f);
  }
  function c(f, h) {
    let p,
      _ = {},
      S,
      m;
    if ("name" in f && f.name) {
      if (((p = i.get(f.name)), !p)) throw Rr(1, { location: f });
      (m = p.record.name),
        (_ = nt(
          fu(
            h.params,
            p.keys
              .filter((b) => !b.optional)
              .concat(p.parent ? p.parent.keys.filter((b) => b.optional) : [])
              .map((b) => b.name),
          ),
          f.params &&
            fu(
              f.params,
              p.keys.map((b) => b.name),
            ),
        )),
        (S = p.stringify(_));
    } else if (f.path != null)
      (S = f.path),
        (p = t.find((b) => b.re.test(S))),
        p && ((_ = p.parse(S)), (m = p.record.name));
    else {
      if (((p = h.name ? i.get(h.name) : t.find((b) => b.re.test(h.path))), !p))
        throw Rr(1, { location: f, currentLocation: h });
      (m = p.record.name),
        (_ = nt({}, h.params, f.params)),
        (S = p.stringify(_));
    }
    const d = [];
    let A = p;
    for (; A; ) d.unshift(A.record), (A = A.parent);
    return { name: m, path: S, params: _, matched: d, meta: e_(d) };
  }
  n.forEach((f) => s(f));
  function u() {
    (t.length = 0), i.clear();
  }
  return {
    addRoute: s,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: r,
  };
}
function fu(n, e) {
  const t = {};
  for (const i of e) i in n && (t[i] = n[i]);
  return t;
}
function hu(n) {
  const e = {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: n.aliasOf,
    beforeEnter: n.beforeEnter,
    props: Qg(n),
    children: n.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in n
        ? n.components || null
        : n.component && { default: n.component },
  };
  return Object.defineProperty(e, "mods", { value: {} }), e;
}
function Qg(n) {
  const e = {},
    t = n.props || !1;
  if ("component" in n) e.default = t;
  else for (const i in n.components) e[i] = typeof t == "object" ? t[i] : t;
  return e;
}
function du(n) {
  for (; n; ) {
    if (n.record.aliasOf) return !0;
    n = n.parent;
  }
  return !1;
}
function e_(n) {
  return n.reduce((e, t) => nt(e, t.meta), {});
}
function pu(n, e) {
  const t = {};
  for (const i in n) t[i] = i in e ? e[i] : n[i];
  return t;
}
function t_(n, e) {
  let t = 0,
    i = e.length;
  for (; t !== i; ) {
    const s = (t + i) >> 1;
    qh(n, e[s]) < 0 ? (i = s) : (t = s + 1);
  }
  const r = n_(n);
  return r && (i = e.lastIndexOf(r, i - 1)), i;
}
function n_(n) {
  let e = n;
  for (; (e = e.parent); ) if ($h(e) && qh(n, e) === 0) return e;
}
function $h({ record: n }) {
  return !!(
    n.name ||
    (n.components && Object.keys(n.components).length) ||
    n.redirect
  );
}
function i_(n) {
  const e = {};
  if (n === "" || n === "?") return e;
  const i = (n[0] === "?" ? n.slice(1) : n).split("&");
  for (let r = 0; r < i.length; ++r) {
    const s = i[r].replace(Bh, " "),
      o = s.indexOf("="),
      a = hs(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : hs(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      Mn(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function mu(n) {
  let e = "";
  for (let t in n) {
    const i = n[t];
    if (((t = yg(t)), i == null)) {
      i !== void 0 && (e += (e.length ? "&" : "") + t);
      continue;
    }
    (Mn(i) ? i.map((s) => s && Ga(s)) : [i && Ga(i)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? "&" : "") + t), s != null && (e += "=" + s));
    });
  }
  return e;
}
function r_(n) {
  const e = {};
  for (const t in n) {
    const i = n[t];
    i !== void 0 &&
      (e[t] = Mn(i)
        ? i.map((r) => (r == null ? null : "" + r))
        : i == null
          ? i
          : "" + i);
  }
  return e;
}
const s_ = Symbol(""),
  gu = Symbol(""),
  Ql = Symbol(""),
  Yh = Symbol(""),
  Xa = Symbol("");
function kr() {
  let n = [];
  function e(i) {
    return (
      n.push(i),
      () => {
        const r = n.indexOf(i);
        r > -1 && n.splice(r, 1);
      }
    );
  }
  function t() {
    n = [];
  }
  return { add: e, list: () => n.slice(), reset: t };
}
function ui(n, e, t, i, r, s = (o) => o()) {
  const o = i && (i.enterCallbacks[r] = i.enterCallbacks[r] || []);
  return () =>
    new Promise((a, l) => {
      const c = (h) => {
          h === !1
            ? l(Rr(4, { from: t, to: e }))
            : h instanceof Error
              ? l(h)
              : Gg(h)
                ? l(Rr(2, { from: e, to: h }))
                : (o &&
                    i.enterCallbacks[r] === o &&
                    typeof h == "function" &&
                    o.push(h),
                  a());
        },
        u = s(() => n.call(i && i.instances[r], e, t, c));
      let f = Promise.resolve(u);
      n.length < 3 && (f = f.then(c)), f.catch((h) => l(h));
    });
}
function Jo(n, e, t, i, r = (s) => s()) {
  const s = [];
  for (const o of n)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(e !== "beforeRouteEnter" && !o.instances[a]))
        if (Fh(l)) {
          const u = (l.__vccOpts || l)[e];
          u && s.push(ui(u, t, i, o, a, r));
        } else {
          let c = l();
          s.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`,
                );
              const f = hg(u) ? u.default : u;
              (o.mods[a] = u), (o.components[a] = f);
              const p = (f.__vccOpts || f)[e];
              return p && ui(p, t, i, o, a, r)();
            }),
          );
        }
    }
  return s;
}
function _u(n) {
  const e = Yn(Ql),
    t = Yn(Yh),
    i = mn(() => {
      const l = Sr(n.to);
      return e.resolve(l);
    }),
    r = mn(() => {
      const { matched: l } = i.value,
        { length: c } = l,
        u = l[c - 1],
        f = t.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(wr.bind(null, u));
      if (h > -1) return h;
      const p = vu(l[c - 2]);
      return c > 1 && vu(u) === p && f[f.length - 1].path !== p
        ? f.findIndex(wr.bind(null, l[c - 2]))
        : h;
    }),
    s = mn(() => r.value > -1 && u_(t.params, i.value.params)),
    o = mn(
      () =>
        r.value > -1 &&
        r.value === t.matched.length - 1 &&
        Vh(t.params, i.value.params),
    );
  function a(l = {}) {
    if (c_(l)) {
      const c = e[Sr(n.replace) ? "replace" : "push"](Sr(n.to)).catch(is);
      return (
        n.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: i,
    href: mn(() => i.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
function o_(n) {
  return n.length === 1 ? n[0] : n;
}
const a_ = Qt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: _u,
    setup(n, { slots: e }) {
      const t = To(_u(n)),
        { options: i } = Yn(Ql),
        r = mn(() => ({
          [xu(n.activeClass, i.linkActiveClass, "router-link-active")]:
            t.isActive,
          [xu(
            n.exactActiveClass,
            i.linkExactActiveClass,
            "router-link-exact-active",
          )]: t.isExactActive,
        }));
      return () => {
        const s = e.default && o_(e.default(t));
        return n.custom
          ? s
          : Zl(
              "a",
              {
                "aria-current": t.isExactActive ? n.ariaCurrentValue : null,
                href: t.href,
                onClick: t.navigate,
                class: r.value,
              },
              s,
            );
      };
    },
  }),
  l_ = a_;
function c_(n) {
  if (
    !(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) &&
    !n.defaultPrevented &&
    !(n.button !== void 0 && n.button !== 0)
  ) {
    if (n.currentTarget && n.currentTarget.getAttribute) {
      const e = n.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return n.preventDefault && n.preventDefault(), !0;
  }
}
function u_(n, e) {
  for (const t in e) {
    const i = e[t],
      r = n[t];
    if (typeof i == "string") {
      if (i !== r) return !1;
    } else if (!Mn(r) || r.length !== i.length || i.some((s, o) => s !== r[o]))
      return !1;
  }
  return !0;
}
function vu(n) {
  return n ? (n.aliasOf ? n.aliasOf.path : n.path) : "";
}
const xu = (n, e, t) => n ?? e ?? t,
  f_ = Qt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(n, { attrs: e, slots: t }) {
      const i = Yn(Xa),
        r = mn(() => n.route || i.value),
        s = Yn(gu, 0),
        o = mn(() => {
          let c = Sr(s);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = mn(() => r.value.matched[o.value]);
      Js(
        gu,
        mn(() => o.value + 1),
      ),
        Js(s_, a),
        Js(Xa, r);
      const l = jt();
      return (
        ts(
          () => [l.value, a.value, n.name],
          ([c, u, f], [h, p, _]) => {
            u &&
              ((u.instances[f] = c),
              p &&
                p !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !wr(u, p) || !h) &&
                (u.enterCallbacks[f] || []).forEach((S) => S(c));
          },
          { flush: "post" },
        ),
        () => {
          const c = r.value,
            u = n.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return Su(t.default, { Component: h, route: c });
          const p = f.props[u],
            _ = p
              ? p === !0
                ? c.params
                : typeof p == "function"
                  ? p(c)
                  : p
              : null,
            m = Zl(
              h,
              nt({}, _, e, {
                onVnodeUnmounted: (d) => {
                  d.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              }),
            );
          return Su(t.default, { Component: m, route: c }) || m;
        }
      );
    },
  });
function Su(n, e) {
  if (!n) return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const h_ = f_;
function d_(n) {
  const e = Jg(n.routes, n),
    t = n.parseQuery || i_,
    i = n.stringifyQuery || mu,
    r = n.history,
    s = kr(),
    o = kr(),
    a = kr(),
    l = dp(Qn);
  let c = Qn;
  dr &&
    n.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Ko.bind(null, (U) => "" + U),
    f = Ko.bind(null, bg),
    h = Ko.bind(null, hs);
  function p(U, re) {
    let ae, le;
    return (
      Wh(U) ? ((ae = e.getRecordMatcher(U)), (le = re)) : (le = U),
      e.addRoute(le, ae)
    );
  }
  function _(U) {
    const re = e.getRecordMatcher(U);
    re && e.removeRoute(re);
  }
  function S() {
    return e.getRoutes().map((U) => U.record);
  }
  function m(U) {
    return !!e.getRecordMatcher(U);
  }
  function d(U, re) {
    if (((re = nt({}, re || l.value)), typeof U == "string")) {
      const v = Zo(t, U, re.path),
        te = e.resolve({ path: v.path }, re),
        j = r.createHref(v.fullPath);
      return nt(v, te, {
        params: h(te.params),
        hash: hs(v.hash),
        redirectedFrom: void 0,
        href: j,
      });
    }
    let ae;
    if (U.path != null) ae = nt({}, U, { path: Zo(t, U.path, re.path).path });
    else {
      const v = nt({}, U.params);
      for (const te in v) v[te] == null && delete v[te];
      (ae = nt({}, U, { params: f(v) })), (re.params = f(re.params));
    }
    const le = e.resolve(ae, re),
      Ie = U.hash || "";
    le.params = u(h(le.params));
    const w = Rg(i, nt({}, U, { hash: Eg(Ie), path: le.path })),
      R = r.createHref(w);
    return nt(
      { fullPath: w, hash: Ie, query: i === mu ? r_(U.query) : U.query || {} },
      le,
      { redirectedFrom: void 0, href: R },
    );
  }
  function A(U) {
    return typeof U == "string" ? Zo(t, U, l.value.path) : nt({}, U);
  }
  function b(U, re) {
    if (c !== U) return Rr(8, { from: re, to: U });
  }
  function y(U) {
    return C(U);
  }
  function I(U) {
    return y(nt(A(U), { replace: !0 }));
  }
  function D(U) {
    const re = U.matched[U.matched.length - 1];
    if (re && re.redirect) {
      const { redirect: ae } = re;
      let le = typeof ae == "function" ? ae(U) : ae;
      return (
        typeof le == "string" &&
          ((le =
            le.includes("?") || le.includes("#") ? (le = A(le)) : { path: le }),
          (le.params = {})),
        nt(
          {
            query: U.query,
            hash: U.hash,
            params: le.path != null ? {} : U.params,
          },
          le,
        )
      );
    }
  }
  function C(U, re) {
    const ae = (c = d(U)),
      le = l.value,
      Ie = U.state,
      w = U.force,
      R = U.replace === !0,
      v = D(ae);
    if (v)
      return C(
        nt(A(v), {
          state: typeof v == "object" ? nt({}, Ie, v.state) : Ie,
          force: w,
          replace: R,
        }),
        re || ae,
      );
    const te = ae;
    te.redirectedFrom = re;
    let j;
    return (
      !w &&
        Cg(i, le, ae) &&
        ((j = Rr(16, { to: te, from: le })), we(le, le, !0, !1)),
      (j ? Promise.resolve(j) : M(te, le))
        .catch((q) => (Fn(q) ? (Fn(q, 2) ? q : Se(q)) : V(q, te, le)))
        .then((q) => {
          if (q) {
            if (Fn(q, 2))
              return C(
                nt({ replace: R }, A(q.to), {
                  state: typeof q.to == "object" ? nt({}, Ie, q.to.state) : Ie,
                  force: w,
                }),
                re || te,
              );
          } else q = O(te, le, !0, R, Ie);
          return L(te, le, q), q;
        })
    );
  }
  function B(U, re) {
    const ae = b(U, re);
    return ae ? Promise.reject(ae) : Promise.resolve();
  }
  function T(U) {
    const re = ie.values().next().value;
    return re && typeof re.runWithContext == "function"
      ? re.runWithContext(U)
      : U();
  }
  function M(U, re) {
    let ae;
    const [le, Ie, w] = p_(U, re);
    ae = Jo(le.reverse(), "beforeRouteLeave", U, re);
    for (const v of le)
      v.leaveGuards.forEach((te) => {
        ae.push(ui(te, U, re));
      });
    const R = B.bind(null, U, re);
    return (
      ae.push(R),
      Me(ae)
        .then(() => {
          ae = [];
          for (const v of s.list()) ae.push(ui(v, U, re));
          return ae.push(R), Me(ae);
        })
        .then(() => {
          ae = Jo(Ie, "beforeRouteUpdate", U, re);
          for (const v of Ie)
            v.updateGuards.forEach((te) => {
              ae.push(ui(te, U, re));
            });
          return ae.push(R), Me(ae);
        })
        .then(() => {
          ae = [];
          for (const v of w)
            if (v.beforeEnter)
              if (Mn(v.beforeEnter))
                for (const te of v.beforeEnter) ae.push(ui(te, U, re));
              else ae.push(ui(v.beforeEnter, U, re));
          return ae.push(R), Me(ae);
        })
        .then(
          () => (
            U.matched.forEach((v) => (v.enterCallbacks = {})),
            (ae = Jo(w, "beforeRouteEnter", U, re, T)),
            ae.push(R),
            Me(ae)
          ),
        )
        .then(() => {
          ae = [];
          for (const v of o.list()) ae.push(ui(v, U, re));
          return ae.push(R), Me(ae);
        })
        .catch((v) => (Fn(v, 8) ? v : Promise.reject(v)))
    );
  }
  function L(U, re, ae) {
    a.list().forEach((le) => T(() => le(U, re, ae)));
  }
  function O(U, re, ae, le, Ie) {
    const w = b(U, re);
    if (w) return w;
    const R = re === Qn,
      v = dr ? history.state : {};
    ae &&
      (le || R
        ? r.replace(U.fullPath, nt({ scroll: R && v && v.scroll }, Ie))
        : r.push(U.fullPath, Ie)),
      (l.value = U),
      we(U, re, ae, R),
      Se();
  }
  let H;
  function ne() {
    H ||
      (H = r.listen((U, re, ae) => {
        if (!de.listening) return;
        const le = d(U),
          Ie = D(le);
        if (Ie) {
          C(nt(Ie, { replace: !0, force: !0 }), le).catch(is);
          return;
        }
        c = le;
        const w = l.value;
        dr && Og(ou(w.fullPath, ae.delta), Lo()),
          M(le, w)
            .catch((R) =>
              Fn(R, 12)
                ? R
                : Fn(R, 2)
                  ? (C(nt(A(R.to), { force: !0 }), le)
                      .then((v) => {
                        Fn(v, 20) &&
                          !ae.delta &&
                          ae.type === ds.pop &&
                          r.go(-1, !1);
                      })
                      .catch(is),
                    Promise.reject())
                  : (ae.delta && r.go(-ae.delta, !1), V(R, le, w)),
            )
            .then((R) => {
              (R = R || O(le, w, !1)),
                R &&
                  (ae.delta && !Fn(R, 8)
                    ? r.go(-ae.delta, !1)
                    : ae.type === ds.pop && Fn(R, 20) && r.go(-1, !1)),
                L(le, w, R);
            })
            .catch(is);
      }));
  }
  let se = kr(),
    Z = kr(),
    ee;
  function V(U, re, ae) {
    Se(U);
    const le = Z.list();
    return (
      le.length ? le.forEach((Ie) => Ie(U, re, ae)) : console.error(U),
      Promise.reject(U)
    );
  }
  function me() {
    return ee && l.value !== Qn
      ? Promise.resolve()
      : new Promise((U, re) => {
          se.add([U, re]);
        });
  }
  function Se(U) {
    return (
      ee ||
        ((ee = !U),
        ne(),
        se.list().forEach(([re, ae]) => (U ? ae(U) : re())),
        se.reset()),
      U
    );
  }
  function we(U, re, ae, le) {
    const { scrollBehavior: Ie } = n;
    if (!dr || !Ie) return Promise.resolve();
    const w =
      (!ae && Bg(ou(U.fullPath, 0))) ||
      ((le || !ae) && history.state && history.state.scroll) ||
      null;
    return Jf()
      .then(() => Ie(U, re, w))
      .then((R) => R && Fg(R))
      .catch((R) => V(R, U, re));
  }
  const Pe = (U) => r.go(U);
  let $e;
  const ie = new Set(),
    de = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: _,
      clearRoutes: e.clearRoutes,
      hasRoute: m,
      getRoutes: S,
      resolve: d,
      options: n,
      push: y,
      replace: I,
      go: Pe,
      back: () => Pe(-1),
      forward: () => Pe(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Z.add,
      isReady: me,
      install(U) {
        const re = this;
        U.component("RouterLink", l_),
          U.component("RouterView", h_),
          (U.config.globalProperties.$router = re),
          Object.defineProperty(U.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Sr(l),
          }),
          dr &&
            !$e &&
            l.value === Qn &&
            (($e = !0), y(r.location).catch((Ie) => {}));
        const ae = {};
        for (const Ie in Qn)
          Object.defineProperty(ae, Ie, {
            get: () => l.value[Ie],
            enumerable: !0,
          });
        U.provide(Ql, re), U.provide(Yh, qf(ae)), U.provide(Xa, l);
        const le = U.unmount;
        ie.add(U),
          (U.unmount = function () {
            ie.delete(U),
              ie.size < 1 &&
                ((c = Qn),
                H && H(),
                (H = null),
                (l.value = Qn),
                ($e = !1),
                (ee = !1)),
              le();
          });
      },
    };
  function Me(U) {
    return U.reduce((re, ae) => re.then(() => T(ae)), Promise.resolve());
  }
  return de;
}
function p_(n, e) {
  const t = [],
    i = [],
    r = [],
    s = Math.max(e.matched.length, n.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (n.matched.find((c) => wr(c, a)) ? i.push(a) : t.push(a));
    const l = n.matched[o];
    l && (e.matched.find((c) => wr(c, l)) || r.push(l));
  }
  return [t, i, r];
}
function qa() {
  return (
    (qa = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
          }
          return n;
        }),
    qa.apply(this, arguments)
  );
}
var m_ = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function (n) {},
    onComplete: function (n) {},
    preStringTyped: function (n, e) {},
    onStringTyped: function (n, e) {},
    onLastStringBackspaced: function (n) {},
    onTypingPaused: function (n, e) {},
    onTypingResumed: function (n, e) {},
    onReset: function (n) {},
    onStop: function (n, e) {},
    onStart: function (n, e) {},
    onDestroy: function (n) {},
  },
  g_ = new ((function () {
    function n() {}
    var e = n.prototype;
    return (
      (e.load = function (t, i, r) {
        if (
          ((t.el = typeof r == "string" ? document.querySelector(r) : r),
          (t.options = qa({}, m_, i)),
          (t.isInput = t.el.tagName.toLowerCase() === "input"),
          (t.attr = t.options.attr),
          (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
          (t.showCursor = !t.isInput && t.options.showCursor),
          (t.cursorChar = t.options.cursorChar),
          (t.cursorBlinking = !0),
          (t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent),
          (t.contentType = t.options.contentType),
          (t.typeSpeed = t.options.typeSpeed),
          (t.startDelay = t.options.startDelay),
          (t.backSpeed = t.options.backSpeed),
          (t.smartBackspace = t.options.smartBackspace),
          (t.backDelay = t.options.backDelay),
          (t.fadeOut = t.options.fadeOut),
          (t.fadeOutClass = t.options.fadeOutClass),
          (t.fadeOutDelay = t.options.fadeOutDelay),
          (t.isPaused = !1),
          (t.strings = t.options.strings.map(function (c) {
            return c.trim();
          })),
          (t.stringsElement =
            typeof t.options.stringsElement == "string"
              ? document.querySelector(t.options.stringsElement)
              : t.options.stringsElement),
          t.stringsElement)
        ) {
          (t.strings = []),
            (t.stringsElement.style.cssText =
              "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
          var s = Array.prototype.slice.apply(t.stringsElement.children),
            o = s.length;
          if (o)
            for (var a = 0; a < o; a += 1)
              t.strings.push(s[a].innerHTML.trim());
        }
        for (var l in ((t.strPos = 0),
        (t.currentElContent = this.getCurrentElContent(t)),
        t.currentElContent &&
          t.currentElContent.length > 0 &&
          ((t.strPos = t.currentElContent.length - 1),
          t.strings.unshift(t.currentElContent)),
        (t.sequence = []),
        t.strings))
          t.sequence[l] = l;
        (t.arrayPos = 0),
          (t.stopNum = 0),
          (t.loop = t.options.loop),
          (t.loopCount = t.options.loopCount),
          (t.curLoop = 0),
          (t.shuffle = t.options.shuffle),
          (t.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0,
          }),
          (t.typingComplete = !1),
          (t.autoInsertCss = t.options.autoInsertCss),
          t.autoInsertCss &&
            (this.appendCursorAnimationCss(t),
            this.appendFadeOutAnimationCss(t));
      }),
      (e.getCurrentElContent = function (t) {
        return t.attr
          ? t.el.getAttribute(t.attr)
          : t.isInput
            ? t.el.value
            : t.contentType === "html"
              ? t.el.innerHTML
              : t.el.textContent;
      }),
      (e.appendCursorAnimationCss = function (t) {
        var i = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + i + "]")) {
          var r = document.createElement("style");
          r.setAttribute(i, "true"),
            (r.innerHTML = `
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
      `),
            document.body.appendChild(r);
        }
      }),
      (e.appendFadeOutAnimationCss = function (t) {
        var i = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + i + "]")) {
          var r = document.createElement("style");
          r.setAttribute(i, "true"),
            (r.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            document.body.appendChild(r);
        }
      }),
      n
    );
  })())(),
  Mu = new ((function () {
    function n() {}
    var e = n.prototype;
    return (
      (e.typeHtmlChars = function (t, i, r) {
        if (r.contentType !== "html") return i;
        var s = t.substring(i).charAt(0);
        if (s === "<" || s === "&") {
          var o;
          for (
            o = s === "<" ? ">" : ";";
            t.substring(i + 1).charAt(0) !== o && !(1 + ++i > t.length);

          );
          i++;
        }
        return i;
      }),
      (e.backSpaceHtmlChars = function (t, i, r) {
        if (r.contentType !== "html") return i;
        var s = t.substring(i).charAt(0);
        if (s === ">" || s === ";") {
          var o;
          for (
            o = s === ">" ? "<" : "&";
            t.substring(i - 1).charAt(0) !== o && !(--i < 0);

          );
          i--;
        }
        return i;
      }),
      n
    );
  })())(),
  __ = (function () {
    function n(t, i) {
      g_.load(this, i, t), this.begin();
    }
    var e = n.prototype;
    return (
      (e.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (e.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (e.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (e.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (e.reset = function (t) {
        t === void 0 && (t = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          t && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (e.begin = function () {
        var t = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            t.strPos === 0
              ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
              : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay));
      }),
      (e.typewrite = function (t, i) {
        var r = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var s = this.humanizer(this.typeSpeed),
          o = 1;
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              i = Mu.typeHtmlChars(t, i, r);
              var a = 0,
                l = t.substring(i);
              if (l.charAt(0) === "^" && /^\^\d+/.test(l)) {
                var c = 1;
                (c += (l = /\d+/.exec(l)[0]).length),
                  (a = parseInt(l)),
                  (r.temporaryPause = !0),
                  r.options.onTypingPaused(r.arrayPos, r),
                  (t = t.substring(0, i) + t.substring(i + c)),
                  r.toggleBlinking(!0);
              }
              if (l.charAt(0) === "`") {
                for (
                  ;
                  t.substring(i + o).charAt(0) !== "`" &&
                  (o++, !(i + o > t.length));

                );
                var u = t.substring(0, i),
                  f = t.substring(u.length + 1, i + o),
                  h = t.substring(i + o + 1);
                (t = u + f + h), o--;
              }
              r.timeout = setTimeout(function () {
                r.toggleBlinking(!1),
                  i >= t.length ? r.doneTyping(t, i) : r.keepTyping(t, i, o),
                  r.temporaryPause &&
                    ((r.temporaryPause = !1),
                    r.options.onTypingResumed(r.arrayPos, r));
              }, a);
            }, s))
          : this.setPauseStatus(t, i, !0);
      }),
      (e.keepTyping = function (t, i, r) {
        i === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var s = t.substring(0, (i += r));
        this.replaceText(s), this.typewrite(t, i);
      }),
      (e.doneTyping = function (t, i) {
        var r = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              r.backspace(t, i);
            }, this.backDelay));
      }),
      (e.backspace = function (t, i) {
        var r = this;
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var s = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            i = Mu.backSpaceHtmlChars(t, i, r);
            var o = t.substring(0, i);
            if ((r.replaceText(o), r.smartBackspace)) {
              var a = r.strings[r.arrayPos + 1];
              r.stopNum = a && o === a.substring(0, i) ? i : 0;
            }
            i > r.stopNum
              ? (i--, r.backspace(t, i))
              : i <= r.stopNum &&
                (r.arrayPos++,
                r.arrayPos === r.strings.length
                  ? ((r.arrayPos = 0),
                    r.options.onLastStringBackspaced(),
                    r.shuffleStringsIfNeeded(),
                    r.begin())
                  : r.typewrite(r.strings[r.sequence[r.arrayPos]], i));
          }, s);
        } else this.setPauseStatus(t, i, !1);
      }),
      (e.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (e.setPauseStatus = function (t, i, r) {
        (this.pause.typewrite = r),
          (this.pause.curString = t),
          (this.pause.curStrPos = i);
      }),
      (e.toggleBlinking = function (t) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== t &&
              ((this.cursorBlinking = t),
              t
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (e.humanizer = function (t) {
        return Math.round((Math.random() * t) / 2) + t;
      }),
      (e.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (e.initFadeOut = function () {
        var t = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            t.arrayPos++,
              t.replaceText(""),
              t.strings.length > t.arrayPos
                ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (e.replaceText = function (t) {
        this.attr
          ? this.el.setAttribute(this.attr, t)
          : this.isInput
            ? (this.el.value = t)
            : this.contentType === "html"
              ? (this.el.innerHTML = t)
              : (this.el.textContent = t);
      }),
      (e.bindFocusEvents = function () {
        var t = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (i) {
            t.stop();
          }),
          this.el.addEventListener("blur", function (i) {
            (t.el.value && t.el.value.length !== 0) || t.start();
          }));
      }),
      (e.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling,
              )));
      }),
      n
    );
  })();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const ec = "173",
  v_ = 0,
  Eu = 1,
  x_ = 2,
  jh = 1,
  S_ = 2,
  Vn = 3,
  vi = 0,
  Vt = 1,
  Xn = 2,
  mi = 0,
  Tr = 1,
  yu = 2,
  Tu = 3,
  bu = 4,
  M_ = 5,
  ki = 100,
  E_ = 101,
  y_ = 102,
  T_ = 103,
  b_ = 104,
  A_ = 200,
  w_ = 201,
  R_ = 202,
  C_ = 203,
  $a = 204,
  Ya = 205,
  P_ = 206,
  L_ = 207,
  D_ = 208,
  I_ = 209,
  U_ = 210,
  N_ = 211,
  F_ = 212,
  O_ = 213,
  B_ = 214,
  ja = 0,
  Ka = 1,
  Za = 2,
  Cr = 3,
  Ja = 4,
  Qa = 5,
  el = 6,
  tl = 7,
  tc = 0,
  z_ = 1,
  H_ = 2,
  gi = 0,
  k_ = 1,
  V_ = 2,
  G_ = 3,
  W_ = 4,
  X_ = 5,
  q_ = 6,
  $_ = 7,
  Kh = 300,
  Pr = 301,
  Lr = 302,
  nl = 303,
  il = 304,
  Do = 306,
  rl = 1e3,
  Gi = 1001,
  sl = 1002,
  xn = 1003,
  Y_ = 1004,
  Ps = 1005,
  An = 1006,
  Qo = 1007,
  Wi = 1008,
  Kn = 1009,
  Zh = 1010,
  Jh = 1011,
  ps = 1012,
  nc = 1013,
  $i = 1014,
  qn = 1015,
  vs = 1016,
  ic = 1017,
  rc = 1018,
  Dr = 1020,
  Qh = 35902,
  ed = 1021,
  td = 1022,
  _n = 1023,
  nd = 1024,
  id = 1025,
  br = 1026,
  Ir = 1027,
  rd = 1028,
  sc = 1029,
  sd = 1030,
  oc = 1031,
  ac = 1033,
  no = 33776,
  io = 33777,
  ro = 33778,
  so = 33779,
  ol = 35840,
  al = 35841,
  ll = 35842,
  cl = 35843,
  ul = 36196,
  fl = 37492,
  hl = 37496,
  dl = 37808,
  pl = 37809,
  ml = 37810,
  gl = 37811,
  _l = 37812,
  vl = 37813,
  xl = 37814,
  Sl = 37815,
  Ml = 37816,
  El = 37817,
  yl = 37818,
  Tl = 37819,
  bl = 37820,
  Al = 37821,
  oo = 36492,
  wl = 36494,
  Rl = 36495,
  od = 36283,
  Cl = 36284,
  Pl = 36285,
  Ll = 36286,
  j_ = 3200,
  K_ = 3201,
  ad = 0,
  Z_ = 1,
  hi = "",
  sn = "srgb",
  Ur = "srgb-linear",
  go = "linear",
  st = "srgb",
  Ji = 7680,
  Au = 519,
  J_ = 512,
  Q_ = 513,
  ev = 514,
  ld = 515,
  tv = 516,
  nv = 517,
  iv = 518,
  rv = 519,
  wu = 35044,
  Ru = "300 es",
  $n = 2e3,
  _o = 2001;
class Fr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const r = i[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Rt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  ea = Math.PI / 180,
  Dl = 180 / Math.PI;
function xs() {
  const n = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    Rt[n & 255] +
    Rt[(n >> 8) & 255] +
    Rt[(n >> 16) & 255] +
    Rt[(n >> 24) & 255] +
    "-" +
    Rt[e & 255] +
    Rt[(e >> 8) & 255] +
    "-" +
    Rt[((e >> 16) & 15) | 64] +
    Rt[(e >> 24) & 255] +
    "-" +
    Rt[(t & 63) | 128] +
    Rt[(t >> 8) & 255] +
    "-" +
    Rt[(t >> 16) & 255] +
    Rt[(t >> 24) & 255] +
    Rt[i & 255] +
    Rt[(i >> 8) & 255] +
    Rt[(i >> 16) & 255] +
    Rt[(i >> 24) & 255]
  ).toLowerCase();
}
function qe(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function sv(n, e) {
  return ((n % e) + e) % e;
}
function ta(n, e, t) {
  return (1 - t) * n + t * e;
}
function Vr(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function zt(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Qe {
  constructor(e = 0, t = 0) {
    (Qe.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * i + r[6]),
      (this.y = r[1] * t + r[4] * i + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = qe(this.x, e.x, t.x)), (this.y = qe(this.y, e.y, t.y)), this
    );
  }
  clampScalar(e, t) {
    return (this.x = qe(this.x, e, t)), (this.y = qe(this.y, e, t)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * i - o * r + e.x), (this.y = s * r + o * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ge {
  constructor(e, t, i, r, s, o, a, l, c) {
    (Ge.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, r, s, o, a, l, c);
  }
  set(e, t, i, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = i),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[3],
      l = i[6],
      c = i[1],
      u = i[4],
      f = i[7],
      h = i[2],
      p = i[5],
      _ = i[8],
      S = r[0],
      m = r[3],
      d = r[6],
      A = r[1],
      b = r[4],
      y = r[7],
      I = r[2],
      D = r[5],
      C = r[8];
    return (
      (s[0] = o * S + a * A + l * I),
      (s[3] = o * m + a * b + l * D),
      (s[6] = o * d + a * y + l * C),
      (s[1] = c * S + u * A + f * I),
      (s[4] = c * m + u * b + f * D),
      (s[7] = c * d + u * y + f * C),
      (s[2] = h * S + p * A + _ * I),
      (s[5] = h * m + p * b + _ * D),
      (s[8] = h * d + p * y + _ * C),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - i * s * u + i * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = u * o - a * c,
      h = a * l - u * s,
      p = c * s - o * l,
      _ = t * f + i * h + r * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / _;
    return (
      (e[0] = f * S),
      (e[1] = (r * c - u * i) * S),
      (e[2] = (a * i - r * o) * S),
      (e[3] = h * S),
      (e[4] = (u * t - r * l) * S),
      (e[5] = (r * s - a * t) * S),
      (e[6] = p * S),
      (e[7] = (i * l - c * t) * S),
      (e[8] = (o * t - i * s) * S),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(na.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(na.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(na.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const na = new Ge();
function cd(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return !0;
  return !1;
}
function ms(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function ov() {
  const n = ms("canvas");
  return (n.style.display = "block"), n;
}
const Cu = {};
function pr(n) {
  n in Cu || ((Cu[n] = !0), console.warn(n));
}
function av(n, e, t) {
  return new Promise(function (i, r) {
    function s() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          r();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          i();
      }
    }
    setTimeout(s, t);
  });
}
function lv(n) {
  const e = n.elements;
  (e[2] = 0.5 * e[2] + 0.5 * e[3]),
    (e[6] = 0.5 * e[6] + 0.5 * e[7]),
    (e[10] = 0.5 * e[10] + 0.5 * e[11]),
    (e[14] = 0.5 * e[14] + 0.5 * e[15]);
}
function cv(n) {
  const e = n.elements;
  e[11] === -1
    ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
    : ((e[10] = -e[10]), (e[14] = -e[14] + 1));
}
const Pu = new Ge().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Lu = new Ge().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function uv() {
  const n = {
      enabled: !0,
      workingColorSpace: Ur,
      spaces: {},
      convert: function (r, s, o) {
        return (
          this.enabled === !1 ||
            s === o ||
            !s ||
            !o ||
            (this.spaces[s].transfer === st &&
              ((r.r = jn(r.r)), (r.g = jn(r.g)), (r.b = jn(r.b))),
            this.spaces[s].primaries !== this.spaces[o].primaries &&
              (r.applyMatrix3(this.spaces[s].toXYZ),
              r.applyMatrix3(this.spaces[o].fromXYZ)),
            this.spaces[o].transfer === st &&
              ((r.r = Ar(r.r)), (r.g = Ar(r.g)), (r.b = Ar(r.b)))),
          r
        );
      },
      fromWorkingColorSpace: function (r, s) {
        return this.convert(r, this.workingColorSpace, s);
      },
      toWorkingColorSpace: function (r, s) {
        return this.convert(r, s, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === hi ? go : this.spaces[r].transfer;
      },
      getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
        return r.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, s, o) {
        return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    i = [0.3127, 0.329];
  return (
    n.define({
      [Ur]: {
        primaries: e,
        whitePoint: i,
        transfer: go,
        toXYZ: Pu,
        fromXYZ: Lu,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: sn },
        outputColorSpaceConfig: { drawingBufferColorSpace: sn },
      },
      [sn]: {
        primaries: e,
        whitePoint: i,
        transfer: st,
        toXYZ: Pu,
        fromXYZ: Lu,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: sn },
      },
    }),
    n
  );
}
const Ke = uv();
function jn(n) {
  return n < 0.04045
    ? n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Ar(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let Qi;
class fv {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Qi === void 0 && (Qi = ms("canvas")),
        (Qi.width = e.width),
        (Qi.height = e.height);
      const i = Qi.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = Qi);
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = ms("canvas");
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = jn(s[o] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[i] = Math.floor(jn(t[i] / 255) * 255))
          : (t[i] = jn(t[i]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let hv = 0;
class ud {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: hv++ }),
      (this.uuid = xs()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(ia(r[o].image)) : s.push(ia(r[o]));
      } else s = ia(r);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function ia(n) {
  return (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && n instanceof ImageBitmap)
    ? fv.getDataURL(n)
    : n.data
      ? {
          data: Array.from(n.data),
          width: n.width,
          height: n.height,
          type: n.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let dv = 0;
class Ot extends Fr {
  constructor(
    e = Ot.DEFAULT_IMAGE,
    t = Ot.DEFAULT_MAPPING,
    i = Gi,
    r = Gi,
    s = An,
    o = Wi,
    a = _n,
    l = Kn,
    c = Ot.DEFAULT_ANISOTROPY,
    u = hi,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: dv++ }),
      (this.uuid = xs()),
      (this.name = ""),
      (this.source = new ud(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Qe(0, 0)),
      (this.repeat = new Qe(1, 1)),
      (this.center = new Qe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ge()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Kh) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case rl:
          e.x = e.x - Math.floor(e.x);
          break;
        case Gi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case sl:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case rl:
          e.y = e.y - Math.floor(e.y);
          break;
        case Gi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case sl:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Ot.DEFAULT_IMAGE = null;
Ot.DEFAULT_MAPPING = Kh;
Ot.DEFAULT_ANISOTROPY = 1;
class ot {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    (ot.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, r) {
    return (this.x = e), (this.y = t), (this.z = i), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * s),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      f = l[8],
      h = l[1],
      p = l[5],
      _ = l[9],
      S = l[2],
      m = l[6],
      d = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(f - S) < 0.01 &&
      Math.abs(_ - m) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(f + S) < 0.1 &&
        Math.abs(_ + m) < 0.1 &&
        Math.abs(c + p + d - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2,
        y = (p + 1) / 2,
        I = (d + 1) / 2,
        D = (u + h) / 4,
        C = (f + S) / 4,
        B = (_ + m) / 4;
      return (
        b > y && b > I
          ? b < 0.01
            ? ((i = 0), (r = 0.707106781), (s = 0.707106781))
            : ((i = Math.sqrt(b)), (r = D / i), (s = C / i))
          : y > I
            ? y < 0.01
              ? ((i = 0.707106781), (r = 0), (s = 0.707106781))
              : ((r = Math.sqrt(y)), (i = D / r), (s = B / r))
            : I < 0.01
              ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
              : ((s = Math.sqrt(I)), (i = C / s), (r = B / s)),
        this.set(i, r, s, t),
        this
      );
    }
    let A = Math.sqrt(
      (m - _) * (m - _) + (f - S) * (f - S) + (h - u) * (h - u),
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (m - _) / A),
      (this.y = (f - S) / A),
      (this.z = (h - u) / A),
      (this.w = Math.acos((c + p + d - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = qe(this.x, e.x, t.x)),
      (this.y = qe(this.y, e.y, t.y)),
      (this.z = qe(this.z, e.z, t.z)),
      (this.w = qe(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = qe(this.x, e, t)),
      (this.y = qe(this.y, e, t)),
      (this.z = qe(this.z, e, t)),
      (this.w = qe(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class pv extends Fr {
  constructor(e = 1, t = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ot(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ot(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    i = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: An,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      i,
    );
    const s = new Ot(
      r,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace,
    );
    (s.flipY = !1),
      (s.generateMipmaps = i.generateMipmaps),
      (s.internalFormat = i.internalFormat),
      (this.textures = []);
    const o = i.count;
    for (let a = 0; a < o; a++)
      (this.textures[a] = s.clone()),
        (this.textures[a].isRenderTargetTexture = !0),
        (this.textures[a].renderTarget = this);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.resolveDepthBuffer = i.resolveDepthBuffer),
      (this.resolveStencilBuffer = i.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      (this.width = e), (this.height = t), (this.depth = i);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let i = 0, r = e.textures.length; i < r; i++)
      (this.textures[i] = e.textures[i].clone()),
        (this.textures[i].isRenderTargetTexture = !0),
        (this.textures[i].renderTarget = this);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new ud(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Yi extends pv {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), (this.isWebGLRenderTarget = !0);
  }
}
class fd extends Ot {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = xn),
      (this.minFilter = xn),
      (this.wrapR = Gi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class mv extends Ot {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: r }),
      (this.magFilter = xn),
      (this.minFilter = xn),
      (this.wrapR = Gi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ss {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = r);
  }
  static slerpFlat(e, t, i, r, s, o, a) {
    let l = i[r + 0],
      c = i[r + 1],
      u = i[r + 2],
      f = i[r + 3];
    const h = s[o + 0],
      p = s[o + 1],
      _ = s[o + 2],
      S = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
      return;
    }
    if (a === 1) {
      (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = _), (e[t + 3] = S);
      return;
    }
    if (f !== S || l !== h || c !== p || u !== _) {
      let m = 1 - a;
      const d = l * h + c * p + u * _ + f * S,
        A = d >= 0 ? 1 : -1,
        b = 1 - d * d;
      if (b > Number.EPSILON) {
        const I = Math.sqrt(b),
          D = Math.atan2(I, d * A);
        (m = Math.sin(m * D) / I), (a = Math.sin(a * D) / I);
      }
      const y = a * A;
      if (
        ((l = l * m + h * y),
        (c = c * m + p * y),
        (u = u * m + _ * y),
        (f = f * m + S * y),
        m === 1 - a)
      ) {
        const I = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        (l *= I), (c *= I), (u *= I), (f *= I);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, o) {
    const a = i[r],
      l = i[r + 1],
      c = i[r + 2],
      u = i[r + 3],
      f = s[o],
      h = s[o + 1],
      p = s[o + 2],
      _ = s[o + 3];
    return (
      (e[t] = a * _ + u * f + l * p - c * h),
      (e[t + 1] = l * _ + u * h + c * f - a * p),
      (e[t + 2] = c * _ + u * p + a * h - l * f),
      (e[t + 3] = u * _ - a * f - l * h - c * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, i, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(i / 2),
      u = a(r / 2),
      f = a(s / 2),
      h = l(i / 2),
      p = l(r / 2),
      _ = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = h * u * f + c * p * _),
          (this._y = c * p * f - h * u * _),
          (this._z = c * u * _ + h * p * f),
          (this._w = c * u * f - h * p * _);
        break;
      case "YXZ":
        (this._x = h * u * f + c * p * _),
          (this._y = c * p * f - h * u * _),
          (this._z = c * u * _ - h * p * f),
          (this._w = c * u * f + h * p * _);
        break;
      case "ZXY":
        (this._x = h * u * f - c * p * _),
          (this._y = c * p * f + h * u * _),
          (this._z = c * u * _ + h * p * f),
          (this._w = c * u * f - h * p * _);
        break;
      case "ZYX":
        (this._x = h * u * f - c * p * _),
          (this._y = c * p * f + h * u * _),
          (this._z = c * u * _ - h * p * f),
          (this._w = c * u * f + h * p * _);
        break;
      case "YZX":
        (this._x = h * u * f + c * p * _),
          (this._y = c * p * f + h * u * _),
          (this._z = c * u * _ - h * p * f),
          (this._w = c * u * f - h * p * _);
        break;
      case "XZY":
        (this._x = h * u * f - c * p * _),
          (this._y = c * p * f - h * u * _),
          (this._z = c * u * _ + h * p * f),
          (this._w = c * u * f + h * p * _);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            o,
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2,
      r = Math.sin(i);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      f = t[10],
      h = i + a + f;
    if (h > 0) {
      const p = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / p),
        (this._x = (u - l) * p),
        (this._y = (s - c) * p),
        (this._z = (o - r) * p);
    } else if (i > a && i > f) {
      const p = 2 * Math.sqrt(1 + i - a - f);
      (this._w = (u - l) / p),
        (this._x = 0.25 * p),
        (this._y = (r + o) / p),
        (this._z = (s + c) / p);
    } else if (a > f) {
      const p = 2 * Math.sqrt(1 + a - i - f);
      (this._w = (s - c) / p),
        (this._x = (r + o) / p),
        (this._y = 0.25 * p),
        (this._z = (l + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + f - i - a);
      (this._w = (o - r) / p),
        (this._x = (s + c) / p),
        (this._y = (l + u) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(qe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, t / i);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = i * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - i * c),
      (this._z = s * u + o * c + i * l - r * a),
      (this._w = o * u - i * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + i * e._x + r * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = i), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * o + t * this._w),
        (this._x = p * i + t * this._x),
        (this._y = p * r + t * this._y),
        (this._z = p * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      f = Math.sin((1 - t) * u) / c,
      h = Math.sin(t * u) / c;
    return (
      (this._w = o * f + this._w * h),
      (this._x = i * f + this._x * h),
      (this._y = r * f + this._y * h),
      (this._z = s * f + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      i = Math.random(),
      r = Math.sqrt(1 - i),
      s = Math.sqrt(i);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class G {
  constructor(e = 0, t = 0, i = 0) {
    (G.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Du.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Du.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * i + s[6] * r),
      (this.y = s[1] * t + s[4] * i + s[7] * r),
      (this.z = s[2] * t + s[5] * i + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = 2 * (o * r - a * i),
      u = 2 * (a * t - s * r),
      f = 2 * (s * i - o * t);
    return (
      (this.x = t + l * c + o * f - a * u),
      (this.y = i + l * u + a * c - s * f),
      (this.z = r + l * f + s * u - o * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * i + s[8] * r),
      (this.y = s[1] * t + s[5] * i + s[9] * r),
      (this.z = s[2] * t + s[6] * i + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = qe(this.x, e.x, t.x)),
      (this.y = qe(this.y, e.y, t.y)),
      (this.z = qe(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = qe(this.x, e, t)),
      (this.y = qe(this.y, e, t)),
      (this.z = qe(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(qe(i, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - i * l),
      (this.z = i * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return ra.copy(this).projectOnVector(e), this.sub(ra);
  }
  reflect(e) {
    return this.sub(ra.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(qe(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y,
      r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = i), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      i = Math.sqrt(1 - t * t);
    return (
      (this.x = i * Math.cos(e)), (this.y = t), (this.z = i * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ra = new G(),
  Du = new Ss();
class Ms {
  constructor(
    e = new G(1 / 0, 1 / 0, 1 / 0),
    t = new G(-1 / 0, -1 / 0, -1 / 0),
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(hn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(hn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = hn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0
            ? e.getVertexPosition(o, hn)
            : hn.fromBufferAttribute(s, o),
            hn.applyMatrix4(e.matrixWorld),
            this.expandByPoint(hn);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Ls.copy(e.boundingBox))
          : (i.boundingBox === null && i.computeBoundingBox(),
            Ls.copy(i.boundingBox)),
          Ls.applyMatrix4(e.matrixWorld),
          this.union(Ls);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, hn),
      hn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Gr),
      Ds.subVectors(this.max, Gr),
      er.subVectors(e.a, Gr),
      tr.subVectors(e.b, Gr),
      nr.subVectors(e.c, Gr),
      ei.subVectors(tr, er),
      ti.subVectors(nr, tr),
      Pi.subVectors(er, nr);
    let t = [
      0,
      -ei.z,
      ei.y,
      0,
      -ti.z,
      ti.y,
      0,
      -Pi.z,
      Pi.y,
      ei.z,
      0,
      -ei.x,
      ti.z,
      0,
      -ti.x,
      Pi.z,
      0,
      -Pi.x,
      -ei.y,
      ei.x,
      0,
      -ti.y,
      ti.x,
      0,
      -Pi.y,
      Pi.x,
      0,
    ];
    return !sa(t, er, tr, nr, Ds) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !sa(t, er, tr, nr, Ds))
      ? !1
      : (Is.crossVectors(ei, ti),
        (t = [Is.x, Is.y, Is.z]),
        sa(t, er, tr, nr, Ds));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, hn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(hn).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (On[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        On[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        On[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        On[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        On[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        On[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        On[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        On[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(On),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const On = [
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
  ],
  hn = new G(),
  Ls = new Ms(),
  er = new G(),
  tr = new G(),
  nr = new G(),
  ei = new G(),
  ti = new G(),
  Pi = new G(),
  Gr = new G(),
  Ds = new G(),
  Is = new G(),
  Li = new G();
function sa(n, e, t, i, r) {
  for (let s = 0, o = n.length - 3; s <= o; s += 3) {
    Li.fromArray(n, s);
    const a =
        r.x * Math.abs(Li.x) + r.y * Math.abs(Li.y) + r.z * Math.abs(Li.z),
      l = e.dot(Li),
      c = t.dot(Li),
      u = i.dot(Li);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const gv = new Ms(),
  Wr = new G(),
  oa = new G();
class lc {
  constructor(e = new G(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : gv.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Wr.subVectors(e, this.center);
    const t = Wr.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        r = (i - this.radius) * 0.5;
      this.center.addScaledVector(Wr, r / i), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (oa.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Wr.copy(e.center).add(oa)),
              this.expandByPoint(Wr.copy(e.center).sub(oa))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Bn = new G(),
  aa = new G(),
  Us = new G(),
  ni = new G(),
  la = new G(),
  Ns = new G(),
  ca = new G();
class _v {
  constructor(e = new G(), t = new G(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Bn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Bn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Bn.copy(this.origin).addScaledVector(this.direction, t),
        Bn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    aa.copy(e).add(t).multiplyScalar(0.5),
      Us.copy(t).sub(e).normalize(),
      ni.copy(this.origin).sub(aa);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Us),
      a = ni.dot(this.direction),
      l = -ni.dot(Us),
      c = ni.lengthSq(),
      u = Math.abs(1 - o * o);
    let f, h, p, _;
    if (u > 0)
      if (((f = o * l - a), (h = o * a - l), (_ = s * u), f >= 0))
        if (h >= -_)
          if (h <= _) {
            const S = 1 / u;
            (f *= S),
              (h *= S),
              (p = f * (f + o * h + 2 * a) + h * (o * f + h + 2 * l) + c);
          } else
            (h = s),
              (f = Math.max(0, -(o * h + a))),
              (p = -f * f + h * (h + 2 * l) + c);
        else
          (h = -s),
            (f = Math.max(0, -(o * h + a))),
            (p = -f * f + h * (h + 2 * l) + c);
      else
        h <= -_
          ? ((f = Math.max(0, -(-o * s + a))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (p = -f * f + h * (h + 2 * l) + c))
          : h <= _
            ? ((f = 0),
              (h = Math.min(Math.max(-s, -l), s)),
              (p = h * (h + 2 * l) + c))
            : ((f = Math.max(0, -(o * s + a))),
              (h = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
              (p = -f * f + h * (h + 2 * l) + c));
    else
      (h = o > 0 ? -s : s),
        (f = Math.max(0, -(o * h + a))),
        (p = -f * f + h * (h + 2 * l) + c);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(aa).addScaledVector(Us, h),
      p
    );
  }
  intersectSphere(e, t) {
    Bn.subVectors(e.center, this.origin);
    const i = Bn.dot(this.direction),
      r = Bn.dot(Bn) - i * i,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = i - o,
      l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((i = (e.min.x - h.x) * c), (r = (e.max.x - h.x) * c))
        : ((i = (e.max.x - h.x) * c), (r = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (o = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (o = (e.min.y - h.y) * u)),
      i > o ||
      s > r ||
      ((s > i || isNaN(i)) && (i = s),
      (o < r || isNaN(r)) && (r = o),
      f >= 0
        ? ((a = (e.min.z - h.z) * f), (l = (e.max.z - h.z) * f))
        : ((a = (e.max.z - h.z) * f), (l = (e.min.z - h.z) * f)),
      i > l || a > r) ||
      ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(i >= 0 ? i : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Bn) !== null;
  }
  intersectTriangle(e, t, i, r, s) {
    la.subVectors(t, e), Ns.subVectors(i, e), ca.crossVectors(la, Ns);
    let o = this.direction.dot(ca),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    ni.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ns.crossVectors(ni, Ns));
    if (l < 0) return null;
    const c = a * this.direction.dot(la.cross(ni));
    if (c < 0 || l + c > o) return null;
    const u = -a * ni.dot(ca);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class pt {
  constructor(e, t, i, r, s, o, a, l, c, u, f, h, p, _, S, m) {
    (pt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, r, s, o, a, l, c, u, f, h, p, _, S, m);
  }
  set(e, t, i, r, s, o, a, l, c, u, f, h, p, _, S, m) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[4] = t),
      (d[8] = i),
      (d[12] = r),
      (d[1] = s),
      (d[5] = o),
      (d[9] = a),
      (d[13] = l),
      (d[2] = c),
      (d[6] = u),
      (d[10] = f),
      (d[14] = h),
      (d[3] = p),
      (d[7] = _),
      (d[11] = S),
      (d[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new pt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      i = e.elements;
    return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      i = e.elements,
      r = 1 / ir.setFromMatrixColumn(e, 0).length(),
      s = 1 / ir.setFromMatrixColumn(e, 1).length(),
      o = 1 / ir.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * r),
      (t[1] = i[1] * r),
      (t[2] = i[2] * r),
      (t[3] = 0),
      (t[4] = i[4] * s),
      (t[5] = i[5] * s),
      (t[6] = i[6] * s),
      (t[7] = 0),
      (t[8] = i[8] * o),
      (t[9] = i[9] * o),
      (t[10] = i[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      i = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(i),
      a = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const h = o * u,
        p = o * f,
        _ = a * u,
        S = a * f;
      (t[0] = l * u),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = p + _ * c),
        (t[5] = h - S * c),
        (t[9] = -a * l),
        (t[2] = S - h * c),
        (t[6] = _ + p * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const h = l * u,
        p = l * f,
        _ = c * u,
        S = c * f;
      (t[0] = h + S * a),
        (t[4] = _ * a - p),
        (t[8] = o * c),
        (t[1] = o * f),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = p * a - _),
        (t[6] = S + h * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const h = l * u,
        p = l * f,
        _ = c * u,
        S = c * f;
      (t[0] = h - S * a),
        (t[4] = -o * f),
        (t[8] = _ + p * a),
        (t[1] = p + _ * a),
        (t[5] = o * u),
        (t[9] = S - h * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const h = o * u,
        p = o * f,
        _ = a * u,
        S = a * f;
      (t[0] = l * u),
        (t[4] = _ * c - p),
        (t[8] = h * c + S),
        (t[1] = l * f),
        (t[5] = S * c + h),
        (t[9] = p * c - _),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const h = o * l,
        p = o * c,
        _ = a * l,
        S = a * c;
      (t[0] = l * u),
        (t[4] = S - h * f),
        (t[8] = _ * f + p),
        (t[1] = f),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = p * f + _),
        (t[10] = h - S * f);
    } else if (e.order === "XZY") {
      const h = o * l,
        p = o * c,
        _ = a * l,
        S = a * c;
      (t[0] = l * u),
        (t[4] = -f),
        (t[8] = c * u),
        (t[1] = h * f + S),
        (t[5] = o * u),
        (t[9] = p * f - _),
        (t[2] = _ * f - p),
        (t[6] = a * u),
        (t[10] = S * f + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(vv, e, xv);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return (
      Xt.subVectors(e, t),
      Xt.lengthSq() === 0 && (Xt.z = 1),
      Xt.normalize(),
      ii.crossVectors(i, Xt),
      ii.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (Xt.x += 1e-4) : (Xt.z += 1e-4),
        Xt.normalize(),
        ii.crossVectors(i, Xt)),
      ii.normalize(),
      Fs.crossVectors(Xt, ii),
      (r[0] = ii.x),
      (r[4] = Fs.x),
      (r[8] = Xt.x),
      (r[1] = ii.y),
      (r[5] = Fs.y),
      (r[9] = Xt.y),
      (r[2] = ii.z),
      (r[6] = Fs.z),
      (r[10] = Xt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      r = t.elements,
      s = this.elements,
      o = i[0],
      a = i[4],
      l = i[8],
      c = i[12],
      u = i[1],
      f = i[5],
      h = i[9],
      p = i[13],
      _ = i[2],
      S = i[6],
      m = i[10],
      d = i[14],
      A = i[3],
      b = i[7],
      y = i[11],
      I = i[15],
      D = r[0],
      C = r[4],
      B = r[8],
      T = r[12],
      M = r[1],
      L = r[5],
      O = r[9],
      H = r[13],
      ne = r[2],
      se = r[6],
      Z = r[10],
      ee = r[14],
      V = r[3],
      me = r[7],
      Se = r[11],
      we = r[15];
    return (
      (s[0] = o * D + a * M + l * ne + c * V),
      (s[4] = o * C + a * L + l * se + c * me),
      (s[8] = o * B + a * O + l * Z + c * Se),
      (s[12] = o * T + a * H + l * ee + c * we),
      (s[1] = u * D + f * M + h * ne + p * V),
      (s[5] = u * C + f * L + h * se + p * me),
      (s[9] = u * B + f * O + h * Z + p * Se),
      (s[13] = u * T + f * H + h * ee + p * we),
      (s[2] = _ * D + S * M + m * ne + d * V),
      (s[6] = _ * C + S * L + m * se + d * me),
      (s[10] = _ * B + S * O + m * Z + d * Se),
      (s[14] = _ * T + S * H + m * ee + d * we),
      (s[3] = A * D + b * M + y * ne + I * V),
      (s[7] = A * C + b * L + y * se + I * me),
      (s[11] = A * B + b * O + y * Z + I * Se),
      (s[15] = A * T + b * H + y * ee + I * we),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      f = e[6],
      h = e[10],
      p = e[14],
      _ = e[3],
      S = e[7],
      m = e[11],
      d = e[15];
    return (
      _ *
        (+s * l * f -
          r * c * f -
          s * a * h +
          i * c * h +
          r * a * p -
          i * l * p) +
      S *
        (+t * l * p -
          t * c * h +
          s * o * h -
          r * o * p +
          r * c * u -
          s * l * u) +
      m *
        (+t * c * f -
          t * a * p -
          s * o * f +
          i * o * p +
          s * a * u -
          i * c * u) +
      d *
        (-r * a * u - t * l * f + t * a * h + r * o * f - i * o * h + i * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, i) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      f = e[9],
      h = e[10],
      p = e[11],
      _ = e[12],
      S = e[13],
      m = e[14],
      d = e[15],
      A = f * m * c - S * h * c + S * l * p - a * m * p - f * l * d + a * h * d,
      b = _ * h * c - u * m * c - _ * l * p + o * m * p + u * l * d - o * h * d,
      y = u * S * c - _ * f * c + _ * a * p - o * S * p - u * a * d + o * f * d,
      I = _ * f * l - u * S * l - _ * a * h + o * S * h + u * a * m - o * f * m,
      D = t * A + i * b + r * y + s * I;
    if (D === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / D;
    return (
      (e[0] = A * C),
      (e[1] =
        (S * h * s -
          f * m * s -
          S * r * p +
          i * m * p +
          f * r * d -
          i * h * d) *
        C),
      (e[2] =
        (a * m * s -
          S * l * s +
          S * r * c -
          i * m * c -
          a * r * d +
          i * l * d) *
        C),
      (e[3] =
        (f * l * s -
          a * h * s -
          f * r * c +
          i * h * c +
          a * r * p -
          i * l * p) *
        C),
      (e[4] = b * C),
      (e[5] =
        (u * m * s -
          _ * h * s +
          _ * r * p -
          t * m * p -
          u * r * d +
          t * h * d) *
        C),
      (e[6] =
        (_ * l * s -
          o * m * s -
          _ * r * c +
          t * m * c +
          o * r * d -
          t * l * d) *
        C),
      (e[7] =
        (o * h * s -
          u * l * s +
          u * r * c -
          t * h * c -
          o * r * p +
          t * l * p) *
        C),
      (e[8] = y * C),
      (e[9] =
        (_ * f * s -
          u * S * s -
          _ * i * p +
          t * S * p +
          u * i * d -
          t * f * d) *
        C),
      (e[10] =
        (o * S * s -
          _ * a * s +
          _ * i * c -
          t * S * c -
          o * i * d +
          t * a * d) *
        C),
      (e[11] =
        (u * a * s -
          o * f * s -
          u * i * c +
          t * f * c +
          o * i * p -
          t * a * p) *
        C),
      (e[12] = I * C),
      (e[13] =
        (u * S * r -
          _ * f * r +
          _ * i * h -
          t * S * h -
          u * i * m +
          t * f * m) *
        C),
      (e[14] =
        (_ * a * r -
          o * S * r -
          _ * i * l +
          t * S * l +
          o * i * m -
          t * a * m) *
        C),
      (e[15] =
        (o * f * r -
          u * a * r +
          u * i * l -
          t * f * l -
          o * i * h +
          t * a * h) *
        C),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      i = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= i),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= i),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= i),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= i),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  makeTranslation(e, t, i) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t),
      r = Math.sin(t),
      s = 1 - i,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + i,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + i,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + i,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, r, s, o) {
    return this.set(1, i, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      f = a + a,
      h = s * c,
      p = s * u,
      _ = s * f,
      S = o * u,
      m = o * f,
      d = a * f,
      A = l * c,
      b = l * u,
      y = l * f,
      I = i.x,
      D = i.y,
      C = i.z;
    return (
      (r[0] = (1 - (S + d)) * I),
      (r[1] = (p + y) * I),
      (r[2] = (_ - b) * I),
      (r[3] = 0),
      (r[4] = (p - y) * D),
      (r[5] = (1 - (h + d)) * D),
      (r[6] = (m + A) * D),
      (r[7] = 0),
      (r[8] = (_ + b) * C),
      (r[9] = (m - A) * C),
      (r[10] = (1 - (h + S)) * C),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    const r = this.elements;
    let s = ir.set(r[0], r[1], r[2]).length();
    const o = ir.set(r[4], r[5], r[6]).length(),
      a = ir.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      dn.copy(this);
    const c = 1 / s,
      u = 1 / o,
      f = 1 / a;
    return (
      (dn.elements[0] *= c),
      (dn.elements[1] *= c),
      (dn.elements[2] *= c),
      (dn.elements[4] *= u),
      (dn.elements[5] *= u),
      (dn.elements[6] *= u),
      (dn.elements[8] *= f),
      (dn.elements[9] *= f),
      (dn.elements[10] *= f),
      t.setFromRotationMatrix(dn),
      (i.x = s),
      (i.y = o),
      (i.z = a),
      this
    );
  }
  makePerspective(e, t, i, r, s, o, a = $n) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (i - r),
      f = (t + e) / (t - e),
      h = (i + r) / (i - r);
    let p, _;
    if (a === $n) (p = -(o + s) / (o - s)), (_ = (-2 * o * s) / (o - s));
    else if (a === _o) (p = -o / (o - s)), (_ = (-o * s) / (o - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a,
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = h),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = p),
      (l[14] = _),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, r, s, o, a = $n) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (i - r),
      f = 1 / (o - s),
      h = (t + e) * c,
      p = (i + r) * u;
    let _, S;
    if (a === $n) (_ = (o + s) * f), (S = -2 * f);
    else if (a === _o) (_ = s * f), (S = -1 * f);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a,
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -h),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -p),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = S),
      (l[14] = -_),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const ir = new G(),
  dn = new pt(),
  vv = new G(0, 0, 0),
  xv = new G(1, 1, 1),
  ii = new G(),
  Fs = new G(),
  Xt = new G(),
  Iu = new pt(),
  Uu = new Ss();
class Dn {
  constructor(e = 0, t = 0, i = 0, r = Dn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, i, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      f = r[2],
      h = r[6],
      p = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(qe(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-qe(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(qe(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, p)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-qe(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(qe(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-qe(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return (this._order = t), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      Iu.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Iu, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Uu.setFromEuler(this), this.setFromQuaternion(Uu, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Dn.DEFAULT_ORDER = "XYZ";
class hd {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Sv = 0;
const Nu = new G(),
  rr = new Ss(),
  zn = new pt(),
  Os = new G(),
  Xr = new G(),
  Mv = new G(),
  Ev = new Ss(),
  Fu = new G(1, 0, 0),
  Ou = new G(0, 1, 0),
  Bu = new G(0, 0, 1),
  zu = { type: "added" },
  yv = { type: "removed" },
  sr = { type: "childadded", child: null },
  ua = { type: "childremoved", child: null };
class Gt extends Fr {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Sv++ }),
      (this.uuid = xs()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Gt.DEFAULT_UP.clone());
    const e = new G(),
      t = new Dn(),
      i = new Ss(),
      r = new G(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s),
      i._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new pt() },
        normalMatrix: { value: new Ge() },
      }),
      (this.matrix = new pt()),
      (this.matrixWorld = new pt()),
      (this.matrixAutoUpdate = Gt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new hd()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return rr.setFromAxisAngle(e, t), this.quaternion.multiply(rr), this;
  }
  rotateOnWorldAxis(e, t) {
    return rr.setFromAxisAngle(e, t), this.quaternion.premultiply(rr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fu, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ou, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Bu, e);
  }
  translateOnAxis(e, t) {
    return (
      Nu.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Nu.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Fu, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ou, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Bu, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(zn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, i) {
    e.isVector3 ? Os.copy(e) : Os.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Xr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? zn.lookAt(Xr, Os, this.up)
        : zn.lookAt(Os, Xr, this.up),
      this.quaternion.setFromRotationMatrix(zn),
      r &&
        (zn.extractRotation(r.matrixWorld),
        rr.setFromRotationMatrix(zn),
        this.quaternion.premultiply(rr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(zu),
            (sr.child = e),
            this.dispatchEvent(sr),
            (sr.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(yv),
        (ua.child = e),
        this.dispatchEvent(ua),
        (ua.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      zn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), zn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(zn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(zu),
      (sr.child = e),
      this.dispatchEvent(sr),
      (sr.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++)
      r[s].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xr, e, Mv), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xr, Ev, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (e === !0 && i !== null && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((a) => ({
          boxInitialized: a.boxInitialized,
          boxMin: a.box.min.toArray(),
          boxMax: a.box.max.toArray(),
          sphereInitialized: a.sphereInitialized,
          sphereRadius: a.sphere.radius,
          sphereCenter: a.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        f = o(e.shapes),
        h = o(e.skeletons),
        p = o(e.animations),
        _ = o(e.nodes);
      a.length > 0 && (i.geometries = a),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        u.length > 0 && (i.images = u),
        f.length > 0 && (i.shapes = f),
        h.length > 0 && (i.skeletons = h),
        p.length > 0 && (i.animations = p),
        _.length > 0 && (i.nodes = _);
    }
    return (i.object = r), i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
Gt.DEFAULT_UP = new G(0, 1, 0);
Gt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const pn = new G(),
  Hn = new G(),
  fa = new G(),
  kn = new G(),
  or = new G(),
  ar = new G(),
  Hu = new G(),
  ha = new G(),
  da = new G(),
  pa = new G(),
  ma = new ot(),
  ga = new ot(),
  _a = new ot();
class gn {
  constructor(e = new G(), t = new G(), i = new G()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), pn.subVectors(e, t), r.cross(pn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, r, s) {
    pn.subVectors(r, t), Hn.subVectors(i, t), fa.subVectors(e, t);
    const o = pn.dot(pn),
      a = pn.dot(Hn),
      l = pn.dot(fa),
      c = Hn.dot(Hn),
      u = Hn.dot(fa),
      f = o * c - a * a;
    if (f === 0) return s.set(0, 0, 0), null;
    const h = 1 / f,
      p = (c * l - a * u) * h,
      _ = (o * u - a * l) * h;
    return s.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, i, r) {
    return this.getBarycoord(e, t, i, r, kn) === null
      ? !1
      : kn.x >= 0 && kn.y >= 0 && kn.x + kn.y <= 1;
  }
  static getInterpolation(e, t, i, r, s, o, a, l) {
    return this.getBarycoord(e, t, i, r, kn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, kn.x),
        l.addScaledVector(o, kn.y),
        l.addScaledVector(a, kn.z),
        l);
  }
  static getInterpolatedAttribute(e, t, i, r, s, o) {
    return (
      ma.setScalar(0),
      ga.setScalar(0),
      _a.setScalar(0),
      ma.fromBufferAttribute(e, t),
      ga.fromBufferAttribute(e, i),
      _a.fromBufferAttribute(e, r),
      o.setScalar(0),
      o.addScaledVector(ma, s.x),
      o.addScaledVector(ga, s.y),
      o.addScaledVector(_a, s.z),
      o
    );
  }
  static isFrontFacing(e, t, i, r) {
    return pn.subVectors(i, t), Hn.subVectors(e, t), pn.cross(Hn).dot(r) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, r) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, i, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      pn.subVectors(this.c, this.b),
      Hn.subVectors(this.a, this.b),
      pn.cross(Hn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return gn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return gn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, r, s) {
    return gn.getInterpolation(e, this.a, this.b, this.c, t, i, r, s);
  }
  containsPoint(e) {
    return gn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return gn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    or.subVectors(r, i), ar.subVectors(s, i), ha.subVectors(e, i);
    const l = or.dot(ha),
      c = ar.dot(ha);
    if (l <= 0 && c <= 0) return t.copy(i);
    da.subVectors(e, r);
    const u = or.dot(da),
      f = ar.dot(da);
    if (u >= 0 && f <= u) return t.copy(r);
    const h = l * f - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(i).addScaledVector(or, o);
    pa.subVectors(e, s);
    const p = or.dot(pa),
      _ = ar.dot(pa);
    if (_ >= 0 && p <= _) return t.copy(s);
    const S = p * c - l * _;
    if (S <= 0 && c >= 0 && _ <= 0)
      return (a = c / (c - _)), t.copy(i).addScaledVector(ar, a);
    const m = u * _ - p * f;
    if (m <= 0 && f - u >= 0 && p - _ >= 0)
      return (
        Hu.subVectors(s, r),
        (a = (f - u) / (f - u + (p - _))),
        t.copy(r).addScaledVector(Hu, a)
      );
    const d = 1 / (m + S + h);
    return (
      (o = S * d),
      (a = h * d),
      t.copy(i).addScaledVector(or, o).addScaledVector(ar, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const dd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ri = { h: 0, s: 0, l: 0 },
  Bs = { h: 0, s: 0, l: 0 };
function va(n, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? n + (e - n) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? n + (e - n) * 6 * (2 / 3 - t)
          : n
  );
}
class Ze {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, i)
    );
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
          ? this.setHex(r)
          : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = sn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Ke.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, r = Ke.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      Ke.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, i, r = Ke.workingColorSpace) {
    if (((e = sv(e, 1)), (t = qe(t, 0, 1)), (i = qe(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        o = 2 * i - s;
      (this.r = va(o, s, e + 1 / 3)),
        (this.g = va(o, s, e)),
        (this.b = va(o, s, e - 1 / 3));
    }
    return Ke.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = sn) {
    function i(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              i(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t,
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = sn) {
    const i = dd[e.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = jn(e.r)), (this.g = jn(e.g)), (this.b = jn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Ar(e.r)), (this.g = Ar(e.g)), (this.b = Ar(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = sn) {
    return (
      Ke.fromWorkingColorSpace(Ct.copy(this), e),
      Math.round(qe(Ct.r * 255, 0, 255)) * 65536 +
        Math.round(qe(Ct.g * 255, 0, 255)) * 256 +
        Math.round(qe(Ct.b * 255, 0, 255))
    );
  }
  getHexString(e = sn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ke.workingColorSpace) {
    Ke.fromWorkingColorSpace(Ct.copy(this), t);
    const i = Ct.r,
      r = Ct.g,
      s = Ct.b,
      o = Math.max(i, r, s),
      a = Math.min(i, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const f = o - a;
      switch (((c = u <= 0.5 ? f / (o + a) : f / (2 - o - a)), o)) {
        case i:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / f + 2;
          break;
        case s:
          l = (i - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Ke.workingColorSpace) {
    return (
      Ke.fromWorkingColorSpace(Ct.copy(this), t),
      (e.r = Ct.r),
      (e.g = Ct.g),
      (e.b = Ct.b),
      e
    );
  }
  getStyle(e = sn) {
    Ke.fromWorkingColorSpace(Ct.copy(this), e);
    const t = Ct.r,
      i = Ct.g,
      r = Ct.b;
    return e !== sn
      ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(ri), this.setHSL(ri.h + e, ri.s + t, ri.l + i);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(ri), e.getHSL(Bs);
    const i = ta(ri.h, Bs.h, t),
      r = ta(ri.s, Bs.s, t),
      s = ta(ri.l, Bs.l, t);
    return this.setHSL(i, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      i = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * i + s[6] * r),
      (this.g = s[1] * t + s[4] * i + s[7] * r),
      (this.b = s[2] * t + s[5] * i + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ct = new Ze();
Ze.NAMES = dd;
let Tv = 0;
class Es extends Fr {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Tv++ }),
      (this.uuid = xs()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Tr),
      (this.side = vi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = $a),
      (this.blendDst = Ya),
      (this.blendEquation = ki),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ze(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Cr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Au),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Ji),
      (this.stencilZFail = Ji),
      (this.stencilZPass = Ji),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor
          ? r.set(i)
          : r && r.isVector3 && i && i.isVector3
            ? r.copy(i)
            : (this[t] = i);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (i.dispersion = this.dispersion),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (i.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Tr && (i.blending = this.blending),
      this.side !== vi && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== $a && (i.blendSrc = this.blendSrc),
      this.blendDst !== Ya && (i.blendDst = this.blendDst),
      this.blendEquation !== ki && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== Cr && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Au && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Ji && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== Ji && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Ji && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class pd extends Es {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ze(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Dn()),
      (this.combine = tc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const xt = new G(),
  zs = new Qe();
let bv = 0;
class Cn {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: bv++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = i),
      (this.usage = wu),
      (this.updateRanges = []),
      (this.gpuType = qn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.itemSize), (i *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        zs.fromBufferAttribute(this, t),
          zs.applyMatrix3(e),
          this.setXY(t, zs.x, zs.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        xt.fromBufferAttribute(this, t),
          xt.applyMatrix3(e),
          this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      xt.fromBufferAttribute(this, t),
        xt.applyMatrix4(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      xt.fromBufferAttribute(this, t),
        xt.applyNormalMatrix(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      xt.fromBufferAttribute(this, t),
        xt.transformDirection(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Vr(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return (
      this.normalized && (i = zt(i, this.array)),
      (this.array[e * this.itemSize + t] = i),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Vr(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = zt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Vr(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = zt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Vr(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = zt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Vr(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = zt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = zt(t, this.array)), (i = zt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = zt(t, this.array)),
        (i = zt(i, this.array)),
        (r = zt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, i, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = zt(t, this.array)),
        (i = zt(i, this.array)),
        (r = zt(r, this.array)),
        (s = zt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== wu && (e.usage = this.usage),
      e
    );
  }
}
class md extends Cn {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class gd extends Cn {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Pn extends Cn {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let Av = 0;
const rn = new pt(),
  xa = new Gt(),
  lr = new G(),
  qt = new Ms(),
  qr = new Ms(),
  yt = new G();
class yi extends Fr {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Av++ }),
      (this.uuid = xs()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (cd(e) ? gd : md)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Ge().getNormalMatrix(e);
      i.applyNormalMatrix(s), (i.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return rn.makeRotationFromQuaternion(e), this.applyMatrix4(rn), this;
  }
  rotateX(e) {
    return rn.makeRotationX(e), this.applyMatrix4(rn), this;
  }
  rotateY(e) {
    return rn.makeRotationY(e), this.applyMatrix4(rn), this;
  }
  rotateZ(e) {
    return rn.makeRotationZ(e), this.applyMatrix4(rn), this;
  }
  translate(e, t, i) {
    return rn.makeTranslation(e, t, i), this.applyMatrix4(rn), this;
  }
  scale(e, t, i) {
    return rn.makeScale(e, t, i), this.applyMatrix4(rn), this;
  }
  lookAt(e) {
    return xa.lookAt(e), xa.updateMatrix(), this.applyMatrix4(xa.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(lr).negate(),
      this.translate(lr.x, lr.y, lr.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        i.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new Pn(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let r = 0; r < i; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ms());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new G(-1 / 0, -1 / 0, -1 / 0),
          new G(1 / 0, 1 / 0, 1 / 0),
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          qt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (yt.addVectors(this.boundingBox.min, qt.min),
                this.boundingBox.expandByPoint(yt),
                yt.addVectors(this.boundingBox.max, qt.max),
                this.boundingBox.expandByPoint(yt))
              : (this.boundingBox.expandByPoint(qt.min),
                this.boundingBox.expandByPoint(qt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new lc());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new G(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((qt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          qr.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (yt.addVectors(qt.min, qr.min),
                qt.expandByPoint(yt),
                yt.addVectors(qt.max, qr.max),
                qt.expandByPoint(yt))
              : (qt.expandByPoint(qr.min), qt.expandByPoint(qr.max));
        }
      qt.getCenter(i);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        yt.fromBufferAttribute(e, s),
          (r = Math.max(r, i.distanceToSquared(yt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            yt.fromBufferAttribute(a, c),
              l && (lr.fromBufferAttribute(e, c), yt.add(lr)),
              (r = Math.max(r, i.distanceToSquared(yt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const i = t.position,
      r = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Cn(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"),
      a = [],
      l = [];
    for (let B = 0; B < i.count; B++) (a[B] = new G()), (l[B] = new G());
    const c = new G(),
      u = new G(),
      f = new G(),
      h = new Qe(),
      p = new Qe(),
      _ = new Qe(),
      S = new G(),
      m = new G();
    function d(B, T, M) {
      c.fromBufferAttribute(i, B),
        u.fromBufferAttribute(i, T),
        f.fromBufferAttribute(i, M),
        h.fromBufferAttribute(s, B),
        p.fromBufferAttribute(s, T),
        _.fromBufferAttribute(s, M),
        u.sub(c),
        f.sub(c),
        p.sub(h),
        _.sub(h);
      const L = 1 / (p.x * _.y - _.x * p.y);
      isFinite(L) &&
        (S.copy(u)
          .multiplyScalar(_.y)
          .addScaledVector(f, -p.y)
          .multiplyScalar(L),
        m
          .copy(f)
          .multiplyScalar(p.x)
          .addScaledVector(u, -_.x)
          .multiplyScalar(L),
        a[B].add(S),
        a[T].add(S),
        a[M].add(S),
        l[B].add(m),
        l[T].add(m),
        l[M].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let B = 0, T = A.length; B < T; ++B) {
      const M = A[B],
        L = M.start,
        O = M.count;
      for (let H = L, ne = L + O; H < ne; H += 3)
        d(e.getX(H + 0), e.getX(H + 1), e.getX(H + 2));
    }
    const b = new G(),
      y = new G(),
      I = new G(),
      D = new G();
    function C(B) {
      I.fromBufferAttribute(r, B), D.copy(I);
      const T = a[B];
      b.copy(T),
        b.sub(I.multiplyScalar(I.dot(T))).normalize(),
        y.crossVectors(D, T);
      const L = y.dot(l[B]) < 0 ? -1 : 1;
      o.setXYZW(B, b.x, b.y, b.z, L);
    }
    for (let B = 0, T = A.length; B < T; ++B) {
      const M = A[B],
        L = M.start,
        O = M.count;
      for (let H = L, ne = L + O; H < ne; H += 3)
        C(e.getX(H + 0)), C(e.getX(H + 1)), C(e.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        (i = new Cn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", i);
      else for (let h = 0, p = i.count; h < p; h++) i.setXYZ(h, 0, 0, 0);
      const r = new G(),
        s = new G(),
        o = new G(),
        a = new G(),
        l = new G(),
        c = new G(),
        u = new G(),
        f = new G();
      if (e)
        for (let h = 0, p = e.count; h < p; h += 3) {
          const _ = e.getX(h + 0),
            S = e.getX(h + 1),
            m = e.getX(h + 2);
          r.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, S),
            o.fromBufferAttribute(t, m),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            a.fromBufferAttribute(i, _),
            l.fromBufferAttribute(i, S),
            c.fromBufferAttribute(i, m),
            a.add(u),
            l.add(u),
            c.add(u),
            i.setXYZ(_, a.x, a.y, a.z),
            i.setXYZ(S, l.x, l.y, l.z),
            i.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let h = 0, p = t.count; h < p; h += 3)
          r.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            o.fromBufferAttribute(t, h + 2),
            u.subVectors(o, s),
            f.subVectors(r, s),
            u.cross(f),
            i.setXYZ(h + 0, u.x, u.y, u.z),
            i.setXYZ(h + 1, u.x, u.y, u.z),
            i.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      yt.fromBufferAttribute(e, t),
        yt.normalize(),
        e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        f = a.normalized,
        h = new c.constructor(l.length * u);
      let p = 0,
        _ = 0;
      for (let S = 0, m = l.length; S < m; S++) {
        a.isInterleavedBufferAttribute
          ? (p = l[S] * a.data.stride + a.offset)
          : (p = l[S] * u);
        for (let d = 0; d < u; d++) h[_++] = c[p++];
      }
      return new Cn(h, u, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new yi(),
      i = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, i);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const h = c[u],
          p = e(h, i);
        l.push(p);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let f = 0, h = c.length; f < h; f++) {
        const p = c[f];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        f = s[c];
      for (let h = 0, p = f.length; h < p; h++) u.push(f[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ku = new pt(),
  Di = new _v(),
  Hs = new lc(),
  Vu = new G(),
  ks = new G(),
  Vs = new G(),
  Gs = new G(),
  Sa = new G(),
  Ws = new G(),
  Gu = new G(),
  Xs = new G();
class wn extends Gt {
  constructor(e = new yi(), t = new pd()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry,
      r = i.attributes.position,
      s = i.morphAttributes.position,
      o = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ws.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          f = s[l];
        u !== 0 &&
          (Sa.fromBufferAttribute(f, e),
          o ? Ws.addScaledVector(Sa, u) : Ws.addScaledVector(Sa.sub(t), u));
      }
      t.add(Ws);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      Hs.copy(i.boundingSphere),
      Hs.applyMatrix4(s),
      Di.copy(e.ray).recast(e.near),
      !(
        Hs.containsPoint(Di.origin) === !1 &&
        (Di.intersectSphere(Hs, Vu) === null ||
          Di.origin.distanceToSquared(Vu) > (e.far - e.near) ** 2)
      ) &&
        (ku.copy(s).invert(),
        Di.copy(e.ray).applyMatrix4(ku),
        !(i.boundingBox !== null && Di.intersectsBox(i.boundingBox) === !1) &&
          this._computeIntersections(e, t, Di)));
  }
  _computeIntersections(e, t, i) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      f = s.attributes.normal,
      h = s.groups,
      p = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, S = h.length; _ < S; _++) {
          const m = h[_],
            d = o[m.materialIndex],
            A = Math.max(m.start, p.start),
            b = Math.min(
              a.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let y = A, I = b; y < I; y += 3) {
            const D = a.getX(y),
              C = a.getX(y + 1),
              B = a.getX(y + 2);
            (r = qs(this, d, e, i, c, u, f, D, C, B)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, p.start),
          S = Math.min(a.count, p.start + p.count);
        for (let m = _, d = S; m < d; m += 3) {
          const A = a.getX(m),
            b = a.getX(m + 1),
            y = a.getX(m + 2);
          (r = qs(this, o, e, i, c, u, f, A, b, y)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, S = h.length; _ < S; _++) {
          const m = h[_],
            d = o[m.materialIndex],
            A = Math.max(m.start, p.start),
            b = Math.min(
              l.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let y = A, I = b; y < I; y += 3) {
            const D = y,
              C = y + 1,
              B = y + 2;
            (r = qs(this, d, e, i, c, u, f, D, C, B)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, p.start),
          S = Math.min(l.count, p.start + p.count);
        for (let m = _, d = S; m < d; m += 3) {
          const A = m,
            b = m + 1,
            y = m + 2;
          (r = qs(this, o, e, i, c, u, f, A, b, y)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
        }
      }
  }
}
function wv(n, e, t, i, r, s, o, a) {
  let l;
  if (
    (e.side === Vt
      ? (l = i.intersectTriangle(o, s, r, !0, a))
      : (l = i.intersectTriangle(r, s, o, e.side === vi, a)),
    l === null)
  )
    return null;
  Xs.copy(a), Xs.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Xs);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Xs.clone(), object: n };
}
function qs(n, e, t, i, r, s, o, a, l, c) {
  n.getVertexPosition(a, ks),
    n.getVertexPosition(l, Vs),
    n.getVertexPosition(c, Gs);
  const u = wv(n, e, t, i, ks, Vs, Gs, Gu);
  if (u) {
    const f = new G();
    gn.getBarycoord(Gu, ks, Vs, Gs, f),
      r && (u.uv = gn.getInterpolatedAttribute(r, a, l, c, f, new Qe())),
      s && (u.uv1 = gn.getInterpolatedAttribute(s, a, l, c, f, new Qe())),
      o &&
        ((u.normal = gn.getInterpolatedAttribute(o, a, l, c, f, new G())),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a, b: l, c, normal: new G(), materialIndex: 0 };
    gn.getNormal(ks, Vs, Gs, h.normal), (u.face = h), (u.barycoord = f);
  }
  return u;
}
class ys extends yi {
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      f = [];
    let h = 0,
      p = 0;
    _("z", "y", "x", -1, -1, i, t, e, o, s, 0),
      _("z", "y", "x", 1, -1, i, t, -e, o, s, 1),
      _("x", "z", "y", 1, 1, e, i, t, r, o, 2),
      _("x", "z", "y", 1, -1, e, i, -t, r, o, 3),
      _("x", "y", "z", 1, -1, e, t, i, r, s, 4),
      _("x", "y", "z", -1, -1, e, t, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Pn(c, 3)),
      this.setAttribute("normal", new Pn(u, 3)),
      this.setAttribute("uv", new Pn(f, 2));
    function _(S, m, d, A, b, y, I, D, C, B, T) {
      const M = y / C,
        L = I / B,
        O = y / 2,
        H = I / 2,
        ne = D / 2,
        se = C + 1,
        Z = B + 1;
      let ee = 0,
        V = 0;
      const me = new G();
      for (let Se = 0; Se < Z; Se++) {
        const we = Se * L - H;
        for (let Pe = 0; Pe < se; Pe++) {
          const $e = Pe * M - O;
          (me[S] = $e * A),
            (me[m] = we * b),
            (me[d] = ne),
            c.push(me.x, me.y, me.z),
            (me[S] = 0),
            (me[m] = 0),
            (me[d] = D > 0 ? 1 : -1),
            u.push(me.x, me.y, me.z),
            f.push(Pe / C),
            f.push(1 - Se / B),
            (ee += 1);
        }
      }
      for (let Se = 0; Se < B; Se++)
        for (let we = 0; we < C; we++) {
          const Pe = h + we + se * Se,
            $e = h + we + se * (Se + 1),
            ie = h + (we + 1) + se * (Se + 1),
            de = h + (we + 1) + se * Se;
          l.push(Pe, $e, de), l.push($e, ie, de), (V += 6);
        }
      a.addGroup(p, V, T), (p += V), (h += ee);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ys(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Nr(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][i] = null))
          : (e[t][i] = r.clone())
        : Array.isArray(r)
          ? (e[t][i] = r.slice())
          : (e[t][i] = r);
    }
  }
  return e;
}
function Nt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Nr(n[t]);
    for (const r in i) e[r] = i[r];
  }
  return e;
}
function Rv(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function _d(n) {
  const e = n.getRenderTarget();
  return e === null
    ? n.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : Ke.workingColorSpace;
}
const Cv = { clone: Nr, merge: Nt };
var Pv = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Lv = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class xi extends Es {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Pv),
      (this.fragmentShader = Lv),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Nr(e.uniforms)),
      (this.uniformsGroups = Rv(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
          ? (t.uniforms[r] = { type: "c", value: o.getHex() })
          : o && o.isVector2
            ? (t.uniforms[r] = { type: "v2", value: o.toArray() })
            : o && o.isVector3
              ? (t.uniforms[r] = { type: "v3", value: o.toArray() })
              : o && o.isVector4
                ? (t.uniforms[r] = { type: "v4", value: o.toArray() })
                : o && o.isMatrix3
                  ? (t.uniforms[r] = { type: "m3", value: o.toArray() })
                  : o && o.isMatrix4
                    ? (t.uniforms[r] = { type: "m4", value: o.toArray() })
                    : (t.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class vd extends Gt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new pt()),
      (this.projectionMatrix = new pt()),
      (this.projectionMatrixInverse = new pt()),
      (this.coordinateSystem = $n);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const si = new G(),
  Wu = new Qe(),
  Xu = new Qe();
class Zt extends vd {
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Dl * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ea * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Dl * 2 * Math.atan(Math.tan(ea * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    si.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(si.x, si.y).multiplyScalar(-e / si.z),
      si.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(si.x, si.y).multiplyScalar(-e / si.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Wu, Xu), t.subVectors(Xu, Wu);
  }
  setViewOffset(e, t, i, r, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ea * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      r = this.aspect * i,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * i) / c),
        (r *= o.width / l),
        (i *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - i,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const cr = -90,
  ur = 1;
class Dv extends Gt {
  constructor(e, t, i) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new Zt(cr, ur, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new Zt(cr, ur, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new Zt(cr, ur, e, t);
    (o.layers = this.layers), this.add(o);
    const a = new Zt(cr, ur, e, t);
    (a.layers = this.layers), this.add(a);
    const l = new Zt(cr, ur, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Zt(cr, ur, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [i, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === $n)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === _o)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children,
      f = e.getRenderTarget(),
      h = e.getActiveCubeFace(),
      p = e.getActiveMipmapLevel(),
      _ = e.xr.enabled;
    e.xr.enabled = !1;
    const S = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, r),
      e.render(t, s),
      e.setRenderTarget(i, 1, r),
      e.render(t, o),
      e.setRenderTarget(i, 2, r),
      e.render(t, a),
      e.setRenderTarget(i, 3, r),
      e.render(t, l),
      e.setRenderTarget(i, 4, r),
      e.render(t, c),
      (i.texture.generateMipmaps = S),
      e.setRenderTarget(i, 5, r),
      e.render(t, u),
      e.setRenderTarget(f, h, p),
      (e.xr.enabled = _),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class xd extends Ot {
  constructor(e, t, i, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Pr),
      super(e, t, i, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Iv extends Yi {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (this.texture = new xd(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : An);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new ys(5, 5, 5),
      s = new xi({
        name: "CubemapFromEquirect",
        uniforms: Nr(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: Vt,
        blending: mi,
      });
    s.uniforms.tEquirect.value = t;
    const o = new wn(r, s),
      a = t.minFilter;
    return (
      t.minFilter === Wi && (t.minFilter = An),
      new Dv(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, i, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
class $s extends Gt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Uv = { type: "move" };
class Ma {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new $s()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new $s()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new G()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new G())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new $s()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new G()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new G())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const S of e.hand.values()) {
          const m = t.getJointPose(S, i),
            d = this._getHandJoint(c, S);
          m !== null &&
            (d.matrix.fromArray(m.transform.matrix),
            d.matrix.decompose(d.position, d.rotation, d.scale),
            (d.matrixWorldNeedsUpdate = !0),
            (d.jointRadius = m.radius)),
            (d.visible = m !== null);
        }
        const u = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          h = u.position.distanceTo(f.position),
          p = 0.02,
          _ = 0.005;
        c.inputState.pinching && h > p + _
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= p - _ &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, i)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, i)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Uv)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new $s();
      (i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (e.joints[t.jointName] = i),
        e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Nv extends Gt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Dn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Dn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const Ea = new G(),
  Fv = new G(),
  Ov = new Ge();
class Oi {
  constructor(e = new G(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const r = Ea.subVectors(i, t).cross(Fv.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(Ea),
      r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || Ov.getNormalMatrix(e),
      r = this.coplanarPoint(Ea).applyMatrix4(e),
      s = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ii = new lc(),
  Ys = new G();
class cc {
  constructor(
    e = new Oi(),
    t = new Oi(),
    i = new Oi(),
    r = new Oi(),
    s = new Oi(),
    o = new Oi(),
  ) {
    this.planes = [e, t, i, r, s, o];
  }
  set(e, t, i, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(i),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = $n) {
    const i = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      f = r[6],
      h = r[7],
      p = r[8],
      _ = r[9],
      S = r[10],
      m = r[11],
      d = r[12],
      A = r[13],
      b = r[14],
      y = r[15];
    if (
      (i[0].setComponents(l - s, h - c, m - p, y - d).normalize(),
      i[1].setComponents(l + s, h + c, m + p, y + d).normalize(),
      i[2].setComponents(l + o, h + u, m + _, y + A).normalize(),
      i[3].setComponents(l - o, h - u, m - _, y - A).normalize(),
      i[4].setComponents(l - a, h - f, m - S, y - b).normalize(),
      t === $n)
    )
      i[5].setComponents(l + a, h + f, m + S, y + b).normalize();
    else if (t === _o) i[5].setComponents(a, f, S, b).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ii);
  }
  intersectsSprite(e) {
    return (
      Ii.center.set(0, 0, 0),
      (Ii.radius = 0.7071067811865476),
      Ii.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ii)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (
        ((Ys.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Ys.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Ys.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Ys) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Sd extends Ot {
  constructor(e, t, i, r, s, o, a, l, c, u = br) {
    if (u !== br && u !== Ir)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    i === void 0 && u === br && (i = $i),
      i === void 0 && u === Ir && (i = Dr),
      super(null, r, s, o, a, l, u, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : xn),
      (this.minFilter = l !== void 0 ? l : xn),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Io extends yi {
  constructor(e = 1, t = 1, i = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(i),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      f = e / a,
      h = t / l,
      p = [],
      _ = [],
      S = [],
      m = [];
    for (let d = 0; d < u; d++) {
      const A = d * h - o;
      for (let b = 0; b < c; b++) {
        const y = b * f - s;
        _.push(y, -A, 0), S.push(0, 0, 1), m.push(b / a), m.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let A = 0; A < a; A++) {
        const b = A + c * d,
          y = A + c * (d + 1),
          I = A + 1 + c * (d + 1),
          D = A + 1 + c * d;
        p.push(b, y, D), p.push(y, I, D);
      }
    this.setIndex(p),
      this.setAttribute("position", new Pn(_, 3)),
      this.setAttribute("normal", new Pn(S, 3)),
      this.setAttribute("uv", new Pn(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Io(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class uc extends yi {
  constructor(
    e = 1,
    t = 32,
    i = 16,
    r = 0,
    s = Math.PI * 2,
    o = 0,
    a = Math.PI,
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: r,
        phiLength: s,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (i = Math.max(2, Math.floor(i)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [],
      f = new G(),
      h = new G(),
      p = [],
      _ = [],
      S = [],
      m = [];
    for (let d = 0; d <= i; d++) {
      const A = [],
        b = d / i;
      let y = 0;
      d === 0 && o === 0
        ? (y = 0.5 / t)
        : d === i && l === Math.PI && (y = -0.5 / t);
      for (let I = 0; I <= t; I++) {
        const D = I / t;
        (f.x = -e * Math.cos(r + D * s) * Math.sin(o + b * a)),
          (f.y = e * Math.cos(o + b * a)),
          (f.z = e * Math.sin(r + D * s) * Math.sin(o + b * a)),
          _.push(f.x, f.y, f.z),
          h.copy(f).normalize(),
          S.push(h.x, h.y, h.z),
          m.push(D + y, 1 - b),
          A.push(c++);
      }
      u.push(A);
    }
    for (let d = 0; d < i; d++)
      for (let A = 0; A < t; A++) {
        const b = u[d][A + 1],
          y = u[d][A],
          I = u[d + 1][A],
          D = u[d + 1][A + 1];
        (d !== 0 || o > 0) && p.push(b, y, D),
          (d !== i - 1 || l < Math.PI) && p.push(y, I, D);
      }
    this.setIndex(p),
      this.setAttribute("position", new Pn(_, 3)),
      this.setAttribute("normal", new Pn(S, 3)),
      this.setAttribute("uv", new Pn(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new uc(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Bv extends Es {
  constructor(e) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Ze(16777215)),
      (this.specular = new Ze(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ze(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = ad),
      (this.normalScale = new Qe(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Dn()),
      (this.combine = tc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class zv extends Es {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = j_),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Hv extends Es {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const qu = {
  enabled: !1,
  files: {},
  add: function (n, e) {
    this.enabled !== !1 && (this.files[n] = e);
  },
  get: function (n) {
    if (this.enabled !== !1) return this.files[n];
  },
  remove: function (n) {
    delete this.files[n];
  },
  clear: function () {
    this.files = {};
  },
};
class kv {
  constructor(e, t, i) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = i),
      (this.itemStart = function (u) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          r.onProgress !== void 0 && r.onProgress(u, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, f) {
        return c.push(u, f), this;
      }),
      (this.removeHandler = function (u) {
        const f = c.indexOf(u);
        return f !== -1 && c.splice(f, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let f = 0, h = c.length; f < h; f += 2) {
          const p = c[f],
            _ = c[f + 1];
          if ((p.global && (p.lastIndex = 0), p.test(u))) return _;
        }
        return null;
      });
  }
}
const Vv = new kv();
class fc {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Vv),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const i = this;
    return new Promise(function (r, s) {
      i.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
fc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Gv extends fc {
  constructor(e) {
    super(e);
  }
  load(e, t, i, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = qu.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = ms("img");
    function l() {
      u(), qu.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(f) {
      u(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class Wv extends fc {
  constructor(e) {
    super(e);
  }
  load(e, t, i, r) {
    const s = new Ot(),
      o = new Gv(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        i,
        r,
      ),
      s
    );
  }
}
class Md extends Gt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ze(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
const ya = new pt(),
  $u = new G(),
  Yu = new G();
class Xv {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Qe(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new pt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new cc()),
      (this._frameExtents = new Qe(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new ot(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      i = this.matrix;
    $u.setFromMatrixPosition(e.matrixWorld),
      t.position.copy($u),
      Yu.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Yu),
      t.updateMatrixWorld(),
      ya.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ya),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(ya);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const ju = new pt(),
  $r = new G(),
  Ta = new G();
class qv extends Xv {
  constructor() {
    super(new Zt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Qe(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new ot(2, 1, 1, 1),
        new ot(0, 1, 1, 1),
        new ot(3, 1, 1, 1),
        new ot(1, 1, 1, 1),
        new ot(3, 0, 1, 1),
        new ot(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new G(1, 0, 0),
        new G(-1, 0, 0),
        new G(0, 0, 1),
        new G(0, 0, -1),
        new G(0, 1, 0),
        new G(0, -1, 0),
      ]),
      (this._cubeUps = [
        new G(0, 1, 0),
        new G(0, 1, 0),
        new G(0, 1, 0),
        new G(0, 1, 0),
        new G(0, 0, 1),
        new G(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const i = this.camera,
      r = this.matrix,
      s = e.distance || i.far;
    s !== i.far && ((i.far = s), i.updateProjectionMatrix()),
      $r.setFromMatrixPosition(e.matrixWorld),
      i.position.copy($r),
      Ta.copy(i.position),
      Ta.add(this._cubeDirections[t]),
      i.up.copy(this._cubeUps[t]),
      i.lookAt(Ta),
      i.updateMatrixWorld(),
      r.makeTranslation(-$r.x, -$r.y, -$r.z),
      ju.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ju);
  }
}
class Ku extends Md {
  constructor(e, t, i = 0, r = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = i),
      (this.decay = r),
      (this.shadow = new qv());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class $v extends vd {
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = i - e,
      o = i + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class Yv extends Md {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class jv extends Zt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e), (this.index = 0);
  }
}
function Zu(n, e, t, i) {
  const r = Kv(i);
  switch (t) {
    case ed:
      return n * e;
    case nd:
      return n * e;
    case id:
      return n * e * 2;
    case rd:
      return ((n * e) / r.components) * r.byteLength;
    case sc:
      return ((n * e) / r.components) * r.byteLength;
    case sd:
      return ((n * e * 2) / r.components) * r.byteLength;
    case oc:
      return ((n * e * 2) / r.components) * r.byteLength;
    case td:
      return ((n * e * 3) / r.components) * r.byteLength;
    case _n:
      return ((n * e * 4) / r.components) * r.byteLength;
    case ac:
      return ((n * e * 4) / r.components) * r.byteLength;
    case no:
    case io:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ro:
    case so:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case al:
    case cl:
      return (Math.max(n, 16) * Math.max(e, 8)) / 4;
    case ol:
    case ll:
      return (Math.max(n, 8) * Math.max(e, 8)) / 2;
    case ul:
    case fl:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case hl:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case dl:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case pl:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case ml:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case gl:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case _l:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case vl:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case xl:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Sl:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ml:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case El:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case yl:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Tl:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case bl:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Al:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case oo:
    case wl:
    case Rl:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case od:
    case Cl:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Pl:
    case Ll:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Kv(n) {
  switch (n) {
    case Kn:
    case Zh:
      return { byteLength: 1, components: 1 };
    case ps:
    case Jh:
    case vs:
      return { byteLength: 2, components: 1 };
    case ic:
    case rc:
      return { byteLength: 2, components: 4 };
    case $i:
    case nc:
    case qn:
      return { byteLength: 4, components: 1 };
    case Qh:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ec } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ec));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function Ed() {
  let n = null,
    e = !1,
    t = null,
    i = null;
  function r(s, o) {
    t(s, o), (i = n.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((i = n.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      n.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      n = s;
    },
  };
}
function Zv(n) {
  const e = new WeakMap();
  function t(a, l) {
    const c = a.array,
      u = a.usage,
      f = c.byteLength,
      h = n.createBuffer();
    n.bindBuffer(l, h), n.bufferData(l, c, u), a.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = n.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? (p = n.HALF_FLOAT) : (p = n.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) p = n.SHORT;
    else if (c instanceof Uint32Array) p = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = n.INT;
    else if (c instanceof Int8Array) p = n.BYTE;
    else if (c instanceof Uint8Array) p = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = n.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c,
      );
    return {
      buffer: h,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: f,
    };
  }
  function i(a, l, c) {
    const u = l.array,
      f = l.updateRanges;
    if ((n.bindBuffer(c, a), f.length === 0)) n.bufferSubData(c, 0, u);
    else {
      f.sort((p, _) => p.start - _.start);
      let h = 0;
      for (let p = 1; p < f.length; p++) {
        const _ = f[h],
          S = f[p];
        S.start <= _.start + _.count + 1
          ? (_.count = Math.max(_.count, S.start + S.count - _.start))
          : (++h, (f[h] = S));
      }
      f.length = h + 1;
      for (let p = 0, _ = f.length; p < _; p++) {
        const S = f[p];
        n.bufferSubData(c, S.start * u.BYTES_PER_ELEMENT, u, S.start, S.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (n.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (
      (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute)
    ) {
      const u = e.get(a);
      (!u || u.version < a.version) &&
        e.set(a, {
          buffer: a.buffer,
          type: a.type,
          bytesPerElement: a.elementSize,
          version: a.version,
        });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      i(c.buffer, a, l), (c.version = a.version);
    }
  }
  return { get: r, remove: s, update: o };
}
var Jv = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Qv = `#ifdef USE_ALPHAHASH
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
#endif`,
  e0 = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  t0 = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  n0 = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  i0 = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  r0 = `#ifdef USE_AOMAP
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
#endif`,
  s0 = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  o0 = `#ifdef USE_BATCHING
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
#endif`,
  a0 = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  l0 = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  c0 = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  u0 = `float G_BlinnPhong_Implicit( ) {
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
} // validated`,
  f0 = `#ifdef USE_IRIDESCENCE
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
#endif`,
  h0 = `#ifdef USE_BUMPMAP
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
#endif`,
  d0 = `#if NUM_CLIPPING_PLANES > 0
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
#endif`,
  p0 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  m0 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  g0 = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  _0 = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  v0 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  x0 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  S0 = `#if defined( USE_COLOR_ALPHA )
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
#endif`,
  M0 = `#define PI 3.141592653589793
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
} // validated`,
  E0 = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,
  y0 = `vec3 transformedNormal = objectNormal;
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
#endif`,
  T0 = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  b0 = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  A0 = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  w0 = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  R0 = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  C0 = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  P0 = `#ifdef USE_ENVMAP
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
#endif`,
  L0 = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  D0 = `#ifdef USE_ENVMAP
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
#endif`,
  I0 = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  U0 = `#ifdef USE_ENVMAP
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
#endif`,
  N0 = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  F0 = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  O0 = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  B0 = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  z0 = `#ifdef USE_GRADIENTMAP
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
}`,
  H0 = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  k0 = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  V0 = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  G0 = `uniform bool receiveShadow;
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
#endif`,
  W0 = `#ifdef USE_ENVMAP
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
#endif`,
  X0 = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  q0 = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  $0 = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Y0 = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  j0 = `PhysicalMaterial material;
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
#endif`,
  K0 = `struct PhysicalMaterial {
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
}`,
  Z0 = `
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
#endif`,
  J0 = `#if defined( RE_IndirectDiffuse )
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
#endif`,
  Q0 = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  ex = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  tx = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  nx = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  ix = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  rx = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  sx = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  ox = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,
  ax = `#if defined( USE_POINTS_UV )
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
#endif`,
  lx = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  cx = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  ux = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  fx = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  hx = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  dx = `#ifdef USE_MORPHTARGETS
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
#endif`,
  px = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  mx = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,
  gx = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,
  _x = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  vx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  xx = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Sx = `#ifdef USE_NORMALMAP
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
#endif`,
  Mx = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Ex = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  yx = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Tx = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  bx = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Ax = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,
  wx = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Rx = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Cx = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Px = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Lx = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Dx = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Ix = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
  Ux = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
  Nx = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,
  Fx = `float getShadowMask() {
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
}`,
  Ox = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Bx = `#ifdef USE_SKINNING
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
#endif`,
  zx = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Hx = `#ifdef USE_SKINNING
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
#endif`,
  kx = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Vx = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Gx = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Wx = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Xx = `#ifdef USE_TRANSMISSION
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
#endif`,
  qx = `#ifdef USE_TRANSMISSION
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
#endif`,
  $x = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Yx = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  jx = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Kx = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Zx = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Jx = `uniform sampler2D t2D;
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
}`,
  Qx = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  eS = `#ifdef ENVMAP_TYPE_CUBE
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
}`,
  tS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  nS = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  iS = `#include <common>
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
}`,
  rS = `#if DEPTH_PACKING == 3200
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
}`,
  sS = `#define DISTANCE
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
}`,
  oS = `#define DISTANCE
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
}`,
  aS = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  lS = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cS = `uniform float scale;
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
}`,
  uS = `uniform vec3 diffuse;
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
}`,
  fS = `#include <common>
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
}`,
  hS = `uniform vec3 diffuse;
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
}`,
  dS = `#define LAMBERT
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
}`,
  pS = `#define LAMBERT
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
}`,
  mS = `#define MATCAP
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
}`,
  gS = `#define MATCAP
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
}`,
  _S = `#define NORMAL
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
}`,
  vS = `#define NORMAL
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
}`,
  xS = `#define PHONG
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
}`,
  SS = `#define PHONG
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
}`,
  MS = `#define STANDARD
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
}`,
  ES = `#define STANDARD
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
}`,
  yS = `#define TOON
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
}`,
  TS = `#define TOON
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
}`,
  bS = `uniform float size;
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
}`,
  AS = `uniform vec3 diffuse;
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
}`,
  wS = `#include <common>
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
}`,
  RS = `uniform vec3 color;
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
}`,
  CS = `uniform float rotation;
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
}`,
  PS = `uniform vec3 diffuse;
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
}`,
  We = {
    alphahash_fragment: Jv,
    alphahash_pars_fragment: Qv,
    alphamap_fragment: e0,
    alphamap_pars_fragment: t0,
    alphatest_fragment: n0,
    alphatest_pars_fragment: i0,
    aomap_fragment: r0,
    aomap_pars_fragment: s0,
    batching_pars_vertex: o0,
    batching_vertex: a0,
    begin_vertex: l0,
    beginnormal_vertex: c0,
    bsdfs: u0,
    iridescence_fragment: f0,
    bumpmap_pars_fragment: h0,
    clipping_planes_fragment: d0,
    clipping_planes_pars_fragment: p0,
    clipping_planes_pars_vertex: m0,
    clipping_planes_vertex: g0,
    color_fragment: _0,
    color_pars_fragment: v0,
    color_pars_vertex: x0,
    color_vertex: S0,
    common: M0,
    cube_uv_reflection_fragment: E0,
    defaultnormal_vertex: y0,
    displacementmap_pars_vertex: T0,
    displacementmap_vertex: b0,
    emissivemap_fragment: A0,
    emissivemap_pars_fragment: w0,
    colorspace_fragment: R0,
    colorspace_pars_fragment: C0,
    envmap_fragment: P0,
    envmap_common_pars_fragment: L0,
    envmap_pars_fragment: D0,
    envmap_pars_vertex: I0,
    envmap_physical_pars_fragment: W0,
    envmap_vertex: U0,
    fog_vertex: N0,
    fog_pars_vertex: F0,
    fog_fragment: O0,
    fog_pars_fragment: B0,
    gradientmap_pars_fragment: z0,
    lightmap_pars_fragment: H0,
    lights_lambert_fragment: k0,
    lights_lambert_pars_fragment: V0,
    lights_pars_begin: G0,
    lights_toon_fragment: X0,
    lights_toon_pars_fragment: q0,
    lights_phong_fragment: $0,
    lights_phong_pars_fragment: Y0,
    lights_physical_fragment: j0,
    lights_physical_pars_fragment: K0,
    lights_fragment_begin: Z0,
    lights_fragment_maps: J0,
    lights_fragment_end: Q0,
    logdepthbuf_fragment: ex,
    logdepthbuf_pars_fragment: tx,
    logdepthbuf_pars_vertex: nx,
    logdepthbuf_vertex: ix,
    map_fragment: rx,
    map_pars_fragment: sx,
    map_particle_fragment: ox,
    map_particle_pars_fragment: ax,
    metalnessmap_fragment: lx,
    metalnessmap_pars_fragment: cx,
    morphinstance_vertex: ux,
    morphcolor_vertex: fx,
    morphnormal_vertex: hx,
    morphtarget_pars_vertex: dx,
    morphtarget_vertex: px,
    normal_fragment_begin: mx,
    normal_fragment_maps: gx,
    normal_pars_fragment: _x,
    normal_pars_vertex: vx,
    normal_vertex: xx,
    normalmap_pars_fragment: Sx,
    clearcoat_normal_fragment_begin: Mx,
    clearcoat_normal_fragment_maps: Ex,
    clearcoat_pars_fragment: yx,
    iridescence_pars_fragment: Tx,
    opaque_fragment: bx,
    packing: Ax,
    premultiplied_alpha_fragment: wx,
    project_vertex: Rx,
    dithering_fragment: Cx,
    dithering_pars_fragment: Px,
    roughnessmap_fragment: Lx,
    roughnessmap_pars_fragment: Dx,
    shadowmap_pars_fragment: Ix,
    shadowmap_pars_vertex: Ux,
    shadowmap_vertex: Nx,
    shadowmask_pars_fragment: Fx,
    skinbase_vertex: Ox,
    skinning_pars_vertex: Bx,
    skinning_vertex: zx,
    skinnormal_vertex: Hx,
    specularmap_fragment: kx,
    specularmap_pars_fragment: Vx,
    tonemapping_fragment: Gx,
    tonemapping_pars_fragment: Wx,
    transmission_fragment: Xx,
    transmission_pars_fragment: qx,
    uv_pars_fragment: $x,
    uv_pars_vertex: Yx,
    uv_vertex: jx,
    worldpos_vertex: Kx,
    background_vert: Zx,
    background_frag: Jx,
    backgroundCube_vert: Qx,
    backgroundCube_frag: eS,
    cube_vert: tS,
    cube_frag: nS,
    depth_vert: iS,
    depth_frag: rS,
    distanceRGBA_vert: sS,
    distanceRGBA_frag: oS,
    equirect_vert: aS,
    equirect_frag: lS,
    linedashed_vert: cS,
    linedashed_frag: uS,
    meshbasic_vert: fS,
    meshbasic_frag: hS,
    meshlambert_vert: dS,
    meshlambert_frag: pS,
    meshmatcap_vert: mS,
    meshmatcap_frag: gS,
    meshnormal_vert: _S,
    meshnormal_frag: vS,
    meshphong_vert: xS,
    meshphong_frag: SS,
    meshphysical_vert: MS,
    meshphysical_frag: ES,
    meshtoon_vert: yS,
    meshtoon_frag: TS,
    points_vert: bS,
    points_frag: AS,
    shadow_vert: wS,
    shadow_frag: RS,
    sprite_vert: CS,
    sprite_frag: PS,
  },
  ve = {
    common: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ge() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ge() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ge() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ge() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ge() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ge() },
      normalScale: { value: new Qe(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ge() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ge() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ge() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ge() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ze(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ge() },
    },
    sprite: {
      diffuse: { value: new Ze(16777215) },
      opacity: { value: 1 },
      center: { value: new Qe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
  },
  bn = {
    basic: {
      uniforms: Nt([
        ve.common,
        ve.specularmap,
        ve.envmap,
        ve.aomap,
        ve.lightmap,
        ve.fog,
      ]),
      vertexShader: We.meshbasic_vert,
      fragmentShader: We.meshbasic_frag,
    },
    lambert: {
      uniforms: Nt([
        ve.common,
        ve.specularmap,
        ve.envmap,
        ve.aomap,
        ve.lightmap,
        ve.emissivemap,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        ve.fog,
        ve.lights,
        { emissive: { value: new Ze(0) } },
      ]),
      vertexShader: We.meshlambert_vert,
      fragmentShader: We.meshlambert_frag,
    },
    phong: {
      uniforms: Nt([
        ve.common,
        ve.specularmap,
        ve.envmap,
        ve.aomap,
        ve.lightmap,
        ve.emissivemap,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        ve.fog,
        ve.lights,
        {
          emissive: { value: new Ze(0) },
          specular: { value: new Ze(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: We.meshphong_vert,
      fragmentShader: We.meshphong_frag,
    },
    standard: {
      uniforms: Nt([
        ve.common,
        ve.envmap,
        ve.aomap,
        ve.lightmap,
        ve.emissivemap,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        ve.roughnessmap,
        ve.metalnessmap,
        ve.fog,
        ve.lights,
        {
          emissive: { value: new Ze(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: We.meshphysical_vert,
      fragmentShader: We.meshphysical_frag,
    },
    toon: {
      uniforms: Nt([
        ve.common,
        ve.aomap,
        ve.lightmap,
        ve.emissivemap,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        ve.gradientmap,
        ve.fog,
        ve.lights,
        { emissive: { value: new Ze(0) } },
      ]),
      vertexShader: We.meshtoon_vert,
      fragmentShader: We.meshtoon_frag,
    },
    matcap: {
      uniforms: Nt([
        ve.common,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        ve.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: We.meshmatcap_vert,
      fragmentShader: We.meshmatcap_frag,
    },
    points: {
      uniforms: Nt([ve.points, ve.fog]),
      vertexShader: We.points_vert,
      fragmentShader: We.points_frag,
    },
    dashed: {
      uniforms: Nt([
        ve.common,
        ve.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: We.linedashed_vert,
      fragmentShader: We.linedashed_frag,
    },
    depth: {
      uniforms: Nt([ve.common, ve.displacementmap]),
      vertexShader: We.depth_vert,
      fragmentShader: We.depth_frag,
    },
    normal: {
      uniforms: Nt([
        ve.common,
        ve.bumpmap,
        ve.normalmap,
        ve.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: We.meshnormal_vert,
      fragmentShader: We.meshnormal_frag,
    },
    sprite: {
      uniforms: Nt([ve.sprite, ve.fog]),
      vertexShader: We.sprite_vert,
      fragmentShader: We.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ge() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: We.background_vert,
      fragmentShader: We.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ge() },
      },
      vertexShader: We.backgroundCube_vert,
      fragmentShader: We.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: We.cube_vert,
      fragmentShader: We.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: We.equirect_vert,
      fragmentShader: We.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Nt([
        ve.common,
        ve.displacementmap,
        {
          referencePosition: { value: new G() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: We.distanceRGBA_vert,
      fragmentShader: We.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Nt([
        ve.lights,
        ve.fog,
        { color: { value: new Ze(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: We.shadow_vert,
      fragmentShader: We.shadow_frag,
    },
  };
bn.physical = {
  uniforms: Nt([
    bn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ge() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ge() },
      clearcoatNormalScale: { value: new Qe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ge() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ge() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ge() },
      sheen: { value: 0 },
      sheenColor: { value: new Ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ge() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ge() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ge() },
      transmissionSamplerSize: { value: new Qe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ge() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ze(0) },
      specularColor: { value: new Ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ge() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ge() },
      anisotropyVector: { value: new Qe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ge() },
    },
  ]),
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag,
};
const js = { r: 0, b: 0, g: 0 },
  Ui = new Dn(),
  LS = new pt();
function DS(n, e, t, i, r, s, o) {
  const a = new Ze(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    f = null,
    h = 0,
    p = null;
  function _(b) {
    let y = b.isScene === !0 ? b.background : null;
    return (
      y && y.isTexture && (y = (b.backgroundBlurriness > 0 ? t : e).get(y)), y
    );
  }
  function S(b) {
    let y = !1;
    const I = _(b);
    I === null ? d(a, l) : I && I.isColor && (d(I, 1), (y = !0));
    const D = n.xr.getEnvironmentBlendMode();
    D === "additive"
      ? i.buffers.color.setClear(0, 0, 0, 1, o)
      : D === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o),
      (n.autoClear || y) &&
        (i.buffers.depth.setTest(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.color.setMask(!0),
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function m(b, y) {
    const I = _(y);
    I && (I.isCubeTexture || I.mapping === Do)
      ? (u === void 0 &&
          ((u = new wn(
            new ys(1, 1, 1),
            new xi({
              name: "BackgroundCubeMaterial",
              uniforms: Nr(bn.backgroundCube.uniforms),
              vertexShader: bn.backgroundCube.vertexShader,
              fragmentShader: bn.backgroundCube.fragmentShader,
              side: Vt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (D, C, B) {
            this.matrixWorld.copyPosition(B.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(u)),
        Ui.copy(y.backgroundRotation),
        (Ui.x *= -1),
        (Ui.y *= -1),
        (Ui.z *= -1),
        I.isCubeTexture &&
          I.isRenderTargetTexture === !1 &&
          ((Ui.y *= -1), (Ui.z *= -1)),
        (u.material.uniforms.envMap.value = I),
        (u.material.uniforms.flipEnvMap.value =
          I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          y.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          LS.makeRotationFromEuler(Ui),
        ),
        (u.material.toneMapped = Ke.getTransfer(I.colorSpace) !== st),
        (f !== I || h !== I.version || p !== n.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (f = I),
          (h = I.version),
          (p = n.toneMapping)),
        u.layers.enableAll(),
        b.unshift(u, u.geometry, u.material, 0, 0, null))
      : I &&
        I.isTexture &&
        (c === void 0 &&
          ((c = new wn(
            new Io(2, 2),
            new xi({
              name: "BackgroundMaterial",
              uniforms: Nr(bn.background.uniforms),
              vertexShader: bn.background.vertexShader,
              fragmentShader: bn.background.fragmentShader,
              side: vi,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = I),
        (c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity),
        (c.material.toneMapped = Ke.getTransfer(I.colorSpace) !== st),
        I.matrixAutoUpdate === !0 && I.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(I.matrix),
        (f !== I || h !== I.version || p !== n.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (f = I),
          (h = I.version),
          (p = n.toneMapping)),
        c.layers.enableAll(),
        b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(b, y) {
    b.getRGB(js, _d(n)), i.buffers.color.setClear(js.r, js.g, js.b, y, o);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), (u = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0));
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (b, y = 1) {
      a.set(b), (l = y), d(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (b) {
      (l = b), d(a, l);
    },
    render: S,
    addToRenderList: m,
    dispose: A,
  };
}
function IS(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    i = {},
    r = h(null);
  let s = r,
    o = !1;
  function a(M, L, O, H, ne) {
    let se = !1;
    const Z = f(H, O, L);
    s !== Z && ((s = Z), c(s.object)),
      (se = p(M, H, O, ne)),
      se && _(M, H, O, ne),
      ne !== null && e.update(ne, n.ELEMENT_ARRAY_BUFFER),
      (se || o) &&
        ((o = !1),
        y(M, L, O, H),
        ne !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(ne).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(M) {
    return n.bindVertexArray(M);
  }
  function u(M) {
    return n.deleteVertexArray(M);
  }
  function f(M, L, O) {
    const H = O.wireframe === !0;
    let ne = i[M.id];
    ne === void 0 && ((ne = {}), (i[M.id] = ne));
    let se = ne[L.id];
    se === void 0 && ((se = {}), (ne[L.id] = se));
    let Z = se[H];
    return Z === void 0 && ((Z = h(l())), (se[H] = Z)), Z;
  }
  function h(M) {
    const L = [],
      O = [],
      H = [];
    for (let ne = 0; ne < t; ne++) (L[ne] = 0), (O[ne] = 0), (H[ne] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: O,
      attributeDivisors: H,
      object: M,
      attributes: {},
      index: null,
    };
  }
  function p(M, L, O, H) {
    const ne = s.attributes,
      se = L.attributes;
    let Z = 0;
    const ee = O.getAttributes();
    for (const V in ee)
      if (ee[V].location >= 0) {
        const Se = ne[V];
        let we = se[V];
        if (
          (we === void 0 &&
            (V === "instanceMatrix" &&
              M.instanceMatrix &&
              (we = M.instanceMatrix),
            V === "instanceColor" && M.instanceColor && (we = M.instanceColor)),
          Se === void 0 || Se.attribute !== we || (we && Se.data !== we.data))
        )
          return !0;
        Z++;
      }
    return s.attributesNum !== Z || s.index !== H;
  }
  function _(M, L, O, H) {
    const ne = {},
      se = L.attributes;
    let Z = 0;
    const ee = O.getAttributes();
    for (const V in ee)
      if (ee[V].location >= 0) {
        let Se = se[V];
        Se === void 0 &&
          (V === "instanceMatrix" &&
            M.instanceMatrix &&
            (Se = M.instanceMatrix),
          V === "instanceColor" && M.instanceColor && (Se = M.instanceColor));
        const we = {};
        (we.attribute = Se),
          Se && Se.data && (we.data = Se.data),
          (ne[V] = we),
          Z++;
      }
    (s.attributes = ne), (s.attributesNum = Z), (s.index = H);
  }
  function S() {
    const M = s.newAttributes;
    for (let L = 0, O = M.length; L < O; L++) M[L] = 0;
  }
  function m(M) {
    d(M, 0);
  }
  function d(M, L) {
    const O = s.newAttributes,
      H = s.enabledAttributes,
      ne = s.attributeDivisors;
    (O[M] = 1),
      H[M] === 0 && (n.enableVertexAttribArray(M), (H[M] = 1)),
      ne[M] !== L && (n.vertexAttribDivisor(M, L), (ne[M] = L));
  }
  function A() {
    const M = s.newAttributes,
      L = s.enabledAttributes;
    for (let O = 0, H = L.length; O < H; O++)
      L[O] !== M[O] && (n.disableVertexAttribArray(O), (L[O] = 0));
  }
  function b(M, L, O, H, ne, se, Z) {
    Z === !0
      ? n.vertexAttribIPointer(M, L, O, ne, se)
      : n.vertexAttribPointer(M, L, O, H, ne, se);
  }
  function y(M, L, O, H) {
    S();
    const ne = H.attributes,
      se = O.getAttributes(),
      Z = L.defaultAttributeValues;
    for (const ee in se) {
      const V = se[ee];
      if (V.location >= 0) {
        let me = ne[ee];
        if (
          (me === void 0 &&
            (ee === "instanceMatrix" &&
              M.instanceMatrix &&
              (me = M.instanceMatrix),
            ee === "instanceColor" &&
              M.instanceColor &&
              (me = M.instanceColor)),
          me !== void 0)
        ) {
          const Se = me.normalized,
            we = me.itemSize,
            Pe = e.get(me);
          if (Pe === void 0) continue;
          const $e = Pe.buffer,
            ie = Pe.type,
            de = Pe.bytesPerElement,
            Me = ie === n.INT || ie === n.UNSIGNED_INT || me.gpuType === nc;
          if (me.isInterleavedBufferAttribute) {
            const U = me.data,
              re = U.stride,
              ae = me.offset;
            if (U.isInstancedInterleavedBuffer) {
              for (let le = 0; le < V.locationSize; le++)
                d(V.location + le, U.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = U.meshPerAttribute * U.count);
            } else
              for (let le = 0; le < V.locationSize; le++) m(V.location + le);
            n.bindBuffer(n.ARRAY_BUFFER, $e);
            for (let le = 0; le < V.locationSize; le++)
              b(
                V.location + le,
                we / V.locationSize,
                ie,
                Se,
                re * de,
                (ae + (we / V.locationSize) * le) * de,
                Me,
              );
          } else {
            if (me.isInstancedBufferAttribute) {
              for (let U = 0; U < V.locationSize; U++)
                d(V.location + U, me.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = me.meshPerAttribute * me.count);
            } else for (let U = 0; U < V.locationSize; U++) m(V.location + U);
            n.bindBuffer(n.ARRAY_BUFFER, $e);
            for (let U = 0; U < V.locationSize; U++)
              b(
                V.location + U,
                we / V.locationSize,
                ie,
                Se,
                we * de,
                (we / V.locationSize) * U * de,
                Me,
              );
          }
        } else if (Z !== void 0) {
          const Se = Z[ee];
          if (Se !== void 0)
            switch (Se.length) {
              case 2:
                n.vertexAttrib2fv(V.location, Se);
                break;
              case 3:
                n.vertexAttrib3fv(V.location, Se);
                break;
              case 4:
                n.vertexAttrib4fv(V.location, Se);
                break;
              default:
                n.vertexAttrib1fv(V.location, Se);
            }
        }
      }
    }
    A();
  }
  function I() {
    B();
    for (const M in i) {
      const L = i[M];
      for (const O in L) {
        const H = L[O];
        for (const ne in H) u(H[ne].object), delete H[ne];
        delete L[O];
      }
      delete i[M];
    }
  }
  function D(M) {
    if (i[M.id] === void 0) return;
    const L = i[M.id];
    for (const O in L) {
      const H = L[O];
      for (const ne in H) u(H[ne].object), delete H[ne];
      delete L[O];
    }
    delete i[M.id];
  }
  function C(M) {
    for (const L in i) {
      const O = i[L];
      if (O[M.id] === void 0) continue;
      const H = O[M.id];
      for (const ne in H) u(H[ne].object), delete H[ne];
      delete O[M.id];
    }
  }
  function B() {
    T(), (o = !0), s !== r && ((s = r), c(s.object));
  }
  function T() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: a,
    reset: B,
    resetDefaultState: T,
    dispose: I,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: C,
    initAttributes: S,
    enableAttribute: m,
    disableUnusedAttributes: A,
  };
}
function US(n, e, t) {
  let i;
  function r(c) {
    i = c;
  }
  function s(c, u) {
    n.drawArrays(i, c, u), t.update(u, i, 1);
  }
  function o(c, u, f) {
    f !== 0 && (n.drawArraysInstanced(i, c, u, f), t.update(u, i, f));
  }
  function a(c, u, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, u, 0, f);
    let p = 0;
    for (let _ = 0; _ < f; _++) p += u[_];
    t.update(p, i, 1);
  }
  function l(c, u, f, h) {
    if (f === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let _ = 0; _ < c.length; _++) o(c[_], u[_], h[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(i, c, 0, u, 0, h, 0, f);
      let _ = 0;
      for (let S = 0; S < f; S++) _ += u[S] * h[S];
      t.update(_, i, 1);
    }
  }
  (this.setMode = r),
    (this.render = s),
    (this.renderInstances = o),
    (this.renderMultiDraw = a),
    (this.renderMultiDrawInstances = l);
}
function NS(n, e, t, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      r = n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function o(C) {
    return !(
      C !== _n &&
      i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function a(C) {
    const B =
      C === vs &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      C !== Kn &&
      i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) &&
      C !== qn &&
      !B
    );
  }
  function l(C) {
    if (C === "highp") {
      if (
        n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision >
          0 &&
        n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      C = "mediump";
    }
    return C === "mediump" &&
      n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision >
        0 &&
      n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c &&
    (console.warn(
      "THREE.WebGLRenderer:",
      c,
      "not supported, using",
      u,
      "instead.",
    ),
    (c = u));
  const f = t.logarithmicDepthBuffer === !0,
    h = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"),
    p = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
    _ = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    S = n.getParameter(n.MAX_TEXTURE_SIZE),
    m = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
    d = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    A = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
    b = n.getParameter(n.MAX_VARYING_VECTORS),
    y = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
    I = _ > 0,
    D = n.getParameter(n.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: h,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: S,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: A,
    maxVaryings: b,
    maxFragmentUniforms: y,
    vertexTextures: I,
    maxSamples: D,
  };
}
function FS(n) {
  const e = this;
  let t = null,
    i = 0,
    r = !1,
    s = !1;
  const o = new Oi(),
    a = new Ge(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h) {
      const p = f.length !== 0 || h || i !== 0 || r;
      return (r = h), (i = f.length), p;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, h) {
      t = u(f, h, 0);
    }),
    (this.setState = function (f, h, p) {
      const _ = f.clippingPlanes,
        S = f.clipIntersection,
        m = f.clipShadows,
        d = n.get(f);
      if (!r || _ === null || _.length === 0 || (s && !m)) s ? u(null) : c();
      else {
        const A = s ? 0 : i,
          b = A * 4;
        let y = d.clippingState || null;
        (l.value = y), (y = u(_, h, b, p));
        for (let I = 0; I !== b; ++I) y[I] = t[I];
        (d.clippingState = y),
          (this.numIntersection = S ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function u(f, h, p, _) {
    const S = f !== null ? f.length : 0;
    let m = null;
    if (S !== 0) {
      if (((m = l.value), _ !== !0 || m === null)) {
        const d = p + S * 4,
          A = h.matrixWorldInverse;
        a.getNormalMatrix(A),
          (m === null || m.length < d) && (m = new Float32Array(d));
        for (let b = 0, y = p; b !== S; ++b, y += 4)
          o.copy(f[b]).applyMatrix4(A, a),
            o.normal.toArray(m, y),
            (m[y + 3] = o.constant);
      }
      (l.value = m), (l.needsUpdate = !0);
    }
    return (e.numPlanes = S), (e.numIntersection = 0), m;
  }
}
function OS(n) {
  let e = new WeakMap();
  function t(o, a) {
    return a === nl ? (o.mapping = Pr) : a === il && (o.mapping = Lr), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === nl || a === il)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Iv(l.height);
            return (
              c.fromEquirectangularTexture(n, o),
              e.set(o, c),
              o.addEventListener("dispose", r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: i, dispose: s };
}
const gr = 4,
  Ju = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Vi = 20,
  ba = new $v(),
  Qu = new Ze();
let Aa = null,
  wa = 0,
  Ra = 0,
  Ca = !1;
const Bi = (1 + Math.sqrt(5)) / 2,
  fr = 1 / Bi,
  ef = [
    new G(-Bi, fr, 0),
    new G(Bi, fr, 0),
    new G(-fr, 0, Bi),
    new G(fr, 0, Bi),
    new G(0, Bi, -fr),
    new G(0, Bi, fr),
    new G(-1, 1, -1),
    new G(1, 1, -1),
    new G(-1, 1, 1),
    new G(1, 1, 1),
  ];
class tf {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, r = 100) {
    (Aa = this._renderer.getRenderTarget()),
      (wa = this._renderer.getActiveCubeFace()),
      (Ra = this._renderer.getActiveMipmapLevel()),
      (Ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, i, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = sf()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = rf()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Aa, wa, Ra),
      (this._renderer.xr.enabled = Ca),
      (e.scissorTest = !1),
      Ks(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Pr || e.mapping === Lr
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (Aa = this._renderer.getRenderTarget()),
      (wa = this._renderer.getActiveCubeFace()),
      (Ra = this._renderer.getActiveMipmapLevel()),
      (Ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: An,
        minFilter: An,
        generateMipmaps: !1,
        type: vs,
        format: _n,
        colorSpace: Ur,
        depthBuffer: !1,
      },
      r = nf(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = nf(e, t, i));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = BS(s)),
        (this._blurMaterial = zS(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new wn(this._lodPlanes[0], e);
    this._renderer.compile(t, ba);
  }
  _sceneToCubeUV(e, t, i, r) {
    const a = new Zt(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      f = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(Qu), (u.toneMapping = gi), (u.autoClear = !1);
    const p = new pd({
        name: "PMREM.Background",
        side: Vt,
        depthWrite: !1,
        depthTest: !1,
      }),
      _ = new wn(new ys(), p);
    let S = !1;
    const m = e.background;
    m
      ? m.isColor && (p.color.copy(m), (e.background = null), (S = !0))
      : (p.color.copy(Qu), (S = !0));
    for (let d = 0; d < 6; d++) {
      const A = d % 3;
      A === 0
        ? (a.up.set(0, l[d], 0), a.lookAt(c[d], 0, 0))
        : A === 1
          ? (a.up.set(0, 0, l[d]), a.lookAt(0, c[d], 0))
          : (a.up.set(0, l[d], 0), a.lookAt(0, 0, c[d]));
      const b = this._cubeSize;
      Ks(r, A * b, d > 2 ? b : 0, b, b),
        u.setRenderTarget(r),
        S && u.render(_, a),
        u.render(e, a);
    }
    _.geometry.dispose(),
      _.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = f),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      r = e.mapping === Pr || e.mapping === Lr;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = sf()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = rf());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new wn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Ks(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, ba);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1],
        ),
        a = ef[(r - s - 1) % ef.length];
      this._blur(e, s - 1, s, o, a);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, i, r, "latitudinal", s),
      this._halfBlur(o, e, i, i, r, "longitudinal", s);
  }
  _halfBlur(e, t, i, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const u = 3,
      f = new wn(this._lodPlanes[r], c),
      h = c.uniforms,
      p = this._sizeLods[i] - 1,
      _ = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * Vi - 1),
      S = s / _,
      m = isFinite(s) ? 1 + Math.floor(u * S) : Vi;
    m > Vi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`,
      );
    const d = [];
    let A = 0;
    for (let C = 0; C < Vi; ++C) {
      const B = C / S,
        T = Math.exp((-B * B) / 2);
      d.push(T), C === 0 ? (A += T) : C < m && (A += 2 * T);
    }
    for (let C = 0; C < d.length; C++) d[C] = d[C] / A;
    (h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = d),
      (h.latitudinal.value = o === "latitudinal"),
      a && (h.poleAxis.value = a);
    const { _lodMax: b } = this;
    (h.dTheta.value = _), (h.mipInt.value = b - i);
    const y = this._sizeLods[r],
      I = 3 * y * (r > b - gr ? r - b + gr : 0),
      D = 4 * (this._cubeSize - y);
    Ks(t, I, D, 3 * y, 2 * y), l.setRenderTarget(t), l.render(f, ba);
  }
}
function BS(n) {
  const e = [],
    t = [],
    i = [];
  let r = n;
  const s = n - gr + 1 + Ju.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > n - gr ? (l = Ju[o - n + gr - 1]) : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2),
      u = -c,
      f = 1 + c,
      h = [u, u, f, u, f, f, u, u, f, f, u, f],
      p = 6,
      _ = 6,
      S = 3,
      m = 2,
      d = 1,
      A = new Float32Array(S * _ * p),
      b = new Float32Array(m * _ * p),
      y = new Float32Array(d * _ * p);
    for (let D = 0; D < p; D++) {
      const C = ((D % 3) * 2) / 3 - 1,
        B = D > 2 ? 0 : -1,
        T = [
          C,
          B,
          0,
          C + 2 / 3,
          B,
          0,
          C + 2 / 3,
          B + 1,
          0,
          C,
          B,
          0,
          C + 2 / 3,
          B + 1,
          0,
          C,
          B + 1,
          0,
        ];
      A.set(T, S * _ * D), b.set(h, m * _ * D);
      const M = [D, D, D, D, D, D];
      y.set(M, d * _ * D);
    }
    const I = new yi();
    I.setAttribute("position", new Cn(A, S)),
      I.setAttribute("uv", new Cn(b, m)),
      I.setAttribute("faceIndex", new Cn(y, d)),
      e.push(I),
      r > gr && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function nf(n, e, t) {
  const i = new Yi(n, e, t);
  return (
    (i.texture.mapping = Do),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Ks(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function zS(n, e, t) {
  const i = new Float32Array(Vi),
    r = new G(0, 1, 0);
  return new xi({
    name: "SphericalGaussianBlur",
    defines: {
      n: Vi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: hc(),
    fragmentShader: `

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
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function rf() {
  return new xi({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: hc(),
    fragmentShader: `

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
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function sf() {
  return new xi({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: hc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function hc() {
  return `

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
	`;
}
function HS(n) {
  let e = new WeakMap(),
    t = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === nl || l === il,
        u = l === Pr || l === Lr;
      if (c || u) {
        let f = e.get(a);
        const h = f !== void 0 ? f.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== h)
          return (
            t === null && (t = new tf(n)),
            (f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f)),
            (f.texture.pmremVersion = a.pmremVersion),
            e.set(a, f),
            f.texture
          );
        if (f !== void 0) return f.texture;
        {
          const p = a.image;
          return (c && p && p.height > 0) || (u && p && r(p))
            ? (t === null && (t = new tf(n)),
              (f = c ? t.fromEquirectangular(a) : t.fromCubemap(a)),
              (f.texture.pmremVersion = a.pmremVersion),
              e.set(a, f),
              a.addEventListener("dispose", s),
              f.texture)
            : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: i, dispose: o };
}
function kS(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r =
          n.getExtension("WEBGL_depth_texture") ||
          n.getExtension("MOZ_WEBGL_depth_texture") ||
          n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          n.getExtension("EXT_texture_filter_anisotropic") ||
          n.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          n.getExtension("WEBGL_compressed_texture_s3tc") ||
          n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          n.getExtension("WEBGL_compressed_texture_pvrtc") ||
          n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return (e[i] = r), r;
  }
  return {
    has: function (i) {
      return t(i) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (i) {
      const r = t(i);
      return (
        r === null &&
          pr("THREE.WebGLRenderer: " + i + " extension not supported."),
        r
      );
    },
  };
}
function VS(n, e, t, i) {
  const r = {},
    s = new WeakMap();
  function o(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const _ in h.attributes) e.remove(h.attributes[_]);
    h.removeEventListener("dispose", o), delete r[h.id];
    const p = s.get(h);
    p && (e.remove(p), s.delete(h)),
      i.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(f, h) {
    return (
      r[h.id] === !0 ||
        (h.addEventListener("dispose", o),
        (r[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function l(f) {
    const h = f.attributes;
    for (const p in h) e.update(h[p], n.ARRAY_BUFFER);
  }
  function c(f) {
    const h = [],
      p = f.index,
      _ = f.attributes.position;
    let S = 0;
    if (p !== null) {
      const A = p.array;
      S = p.version;
      for (let b = 0, y = A.length; b < y; b += 3) {
        const I = A[b + 0],
          D = A[b + 1],
          C = A[b + 2];
        h.push(I, D, D, C, C, I);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      S = _.version;
      for (let b = 0, y = A.length / 3 - 1; b < y; b += 3) {
        const I = b + 0,
          D = b + 1,
          C = b + 2;
        h.push(I, D, D, C, C, I);
      }
    } else return;
    const m = new (cd(h) ? gd : md)(h, 1);
    m.version = S;
    const d = s.get(f);
    d && e.remove(d), s.set(f, m);
  }
  function u(f) {
    const h = s.get(f);
    if (h) {
      const p = f.index;
      p !== null && h.version < p.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function GS(n, e, t) {
  let i;
  function r(h) {
    i = h;
  }
  let s, o;
  function a(h) {
    (s = h.type), (o = h.bytesPerElement);
  }
  function l(h, p) {
    n.drawElements(i, p, s, h * o), t.update(p, i, 1);
  }
  function c(h, p, _) {
    _ !== 0 && (n.drawElementsInstanced(i, p, s, h * o, _), t.update(p, i, _));
  }
  function u(h, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, p, 0, s, h, 0, _);
    let m = 0;
    for (let d = 0; d < _; d++) m += p[d];
    t.update(m, i, 1);
  }
  function f(h, p, _, S) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let d = 0; d < h.length; d++) c(h[d] / o, p[d], S[d]);
    else {
      m.multiDrawElementsInstancedWEBGL(i, p, 0, s, h, 0, S, 0, _);
      let d = 0;
      for (let A = 0; A < _; A++) d += p[A] * S[A];
      t.update(d, i, 1);
    }
  }
  (this.setMode = r),
    (this.setIndex = a),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = f);
}
function WS(n) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
    switch ((t.calls++, o)) {
      case n.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case n.LINES:
        t.lines += a * (s / 2);
        break;
      case n.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case n.LINE_LOOP:
        t.lines += a * s;
        break;
      case n.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i,
  };
}
function XS(n, e, t) {
  const i = new WeakMap(),
    r = new ot();
  function s(o, a, l) {
    const c = o.morphTargetInfluences,
      u =
        a.morphAttributes.position ||
        a.morphAttributes.normal ||
        a.morphAttributes.color,
      f = u !== void 0 ? u.length : 0;
    let h = i.get(a);
    if (h === void 0 || h.count !== f) {
      let M = function () {
        B.dispose(), i.delete(a), a.removeEventListener("dispose", M);
      };
      var p = M;
      h !== void 0 && h.texture.dispose();
      const _ = a.morphAttributes.position !== void 0,
        S = a.morphAttributes.normal !== void 0,
        m = a.morphAttributes.color !== void 0,
        d = a.morphAttributes.position || [],
        A = a.morphAttributes.normal || [],
        b = a.morphAttributes.color || [];
      let y = 0;
      _ === !0 && (y = 1), S === !0 && (y = 2), m === !0 && (y = 3);
      let I = a.attributes.position.count * y,
        D = 1;
      I > e.maxTextureSize &&
        ((D = Math.ceil(I / e.maxTextureSize)), (I = e.maxTextureSize));
      const C = new Float32Array(I * D * 4 * f),
        B = new fd(C, I, D, f);
      (B.type = qn), (B.needsUpdate = !0);
      const T = y * 4;
      for (let L = 0; L < f; L++) {
        const O = d[L],
          H = A[L],
          ne = b[L],
          se = I * D * 4 * L;
        for (let Z = 0; Z < O.count; Z++) {
          const ee = Z * T;
          _ === !0 &&
            (r.fromBufferAttribute(O, Z),
            (C[se + ee + 0] = r.x),
            (C[se + ee + 1] = r.y),
            (C[se + ee + 2] = r.z),
            (C[se + ee + 3] = 0)),
            S === !0 &&
              (r.fromBufferAttribute(H, Z),
              (C[se + ee + 4] = r.x),
              (C[se + ee + 5] = r.y),
              (C[se + ee + 6] = r.z),
              (C[se + ee + 7] = 0)),
            m === !0 &&
              (r.fromBufferAttribute(ne, Z),
              (C[se + ee + 8] = r.x),
              (C[se + ee + 9] = r.y),
              (C[se + ee + 10] = r.z),
              (C[se + ee + 11] = ne.itemSize === 4 ? r.w : 1));
        }
      }
      (h = { count: f, texture: B, size: new Qe(I, D) }),
        i.set(a, h),
        a.addEventListener("dispose", M);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(n, "morphTexture", o.morphTexture, t);
    else {
      let _ = 0;
      for (let m = 0; m < c.length; m++) _ += c[m];
      const S = a.morphTargetsRelative ? 1 : 1 - _;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", S),
        l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", h.texture, t),
      l.getUniforms().setValue(n, "morphTargetsTextureSize", h.size);
  }
  return { update: s };
}
function qS(n, e, t, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      u = l.geometry,
      f = e.get(l, u);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, n.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const h = l.skeleton;
      r.get(h) !== c && (h.update(), r.set(h, c));
    }
    return f;
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const yd = new Ot(),
  of = new Sd(1, 1),
  Td = new fd(),
  bd = new mv(),
  Ad = new xd(),
  af = [],
  lf = [],
  cf = new Float32Array(16),
  uf = new Float32Array(9),
  ff = new Float32Array(4);
function Or(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = e * t;
  let s = af[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (af[r] = s)), e !== 0)) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), n[o].toArray(s, a);
  }
  return s;
}
function Mt(n, e) {
  if (n.length !== e.length) return !1;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return !1;
  return !0;
}
function Et(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Uo(n, e) {
  let t = lf[e];
  t === void 0 && ((t = new Int32Array(e)), (lf[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function $S(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), (t[0] = e));
}
function YS(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    n.uniform2fv(this.addr, e), Et(t, e);
  }
}
function jS(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (n.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Mt(t, e)) return;
    n.uniform3fv(this.addr, e), Et(t, e);
  }
}
function KS(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    n.uniform4fv(this.addr, e), Et(t, e);
  }
}
function ZS(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(t, e)) return;
    n.uniformMatrix2fv(this.addr, !1, e), Et(t, e);
  } else {
    if (Mt(t, i)) return;
    ff.set(i), n.uniformMatrix2fv(this.addr, !1, ff), Et(t, i);
  }
}
function JS(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(t, e)) return;
    n.uniformMatrix3fv(this.addr, !1, e), Et(t, e);
  } else {
    if (Mt(t, i)) return;
    uf.set(i), n.uniformMatrix3fv(this.addr, !1, uf), Et(t, i);
  }
}
function QS(n, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(t, e)) return;
    n.uniformMatrix4fv(this.addr, !1, e), Et(t, e);
  } else {
    if (Mt(t, i)) return;
    cf.set(i), n.uniformMatrix4fv(this.addr, !1, cf), Et(t, i);
  }
}
function eM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), (t[0] = e));
}
function tM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    n.uniform2iv(this.addr, e), Et(t, e);
  }
}
function nM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Mt(t, e)) return;
    n.uniform3iv(this.addr, e), Et(t, e);
  }
}
function iM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    n.uniform4iv(this.addr, e), Et(t, e);
  }
}
function rM(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), (t[0] = e));
}
function sM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (n.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Mt(t, e)) return;
    n.uniform2uiv(this.addr, e), Et(t, e);
  }
}
function oM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (n.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Mt(t, e)) return;
    n.uniform3uiv(this.addr, e), Et(t, e);
  }
}
function aM(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Mt(t, e)) return;
    n.uniform4uiv(this.addr, e), Et(t, e);
  }
}
function lM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r));
  let s;
  this.type === n.SAMPLER_2D_SHADOW
    ? ((of.compareFunction = ld), (s = of))
    : (s = yd),
    t.setTexture2D(e || s, r);
}
function cM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture3D(e || bd, r);
}
function uM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTextureCube(e || Ad, r);
}
function fM(n, e, t) {
  const i = this.cache,
    r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    t.setTexture2DArray(e || Td, r);
}
function hM(n) {
  switch (n) {
    case 5126:
      return $S;
    case 35664:
      return YS;
    case 35665:
      return jS;
    case 35666:
      return KS;
    case 35674:
      return ZS;
    case 35675:
      return JS;
    case 35676:
      return QS;
    case 5124:
    case 35670:
      return eM;
    case 35667:
    case 35671:
      return tM;
    case 35668:
    case 35672:
      return nM;
    case 35669:
    case 35673:
      return iM;
    case 5125:
      return rM;
    case 36294:
      return sM;
    case 36295:
      return oM;
    case 36296:
      return aM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lM;
    case 35679:
    case 36299:
    case 36307:
      return cM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return uM;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return fM;
  }
}
function dM(n, e) {
  n.uniform1fv(this.addr, e);
}
function pM(n, e) {
  const t = Or(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function mM(n, e) {
  const t = Or(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function gM(n, e) {
  const t = Or(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function _M(n, e) {
  const t = Or(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function vM(n, e) {
  const t = Or(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function xM(n, e) {
  const t = Or(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function SM(n, e) {
  n.uniform1iv(this.addr, e);
}
function MM(n, e) {
  n.uniform2iv(this.addr, e);
}
function EM(n, e) {
  n.uniform3iv(this.addr, e);
}
function yM(n, e) {
  n.uniform4iv(this.addr, e);
}
function TM(n, e) {
  n.uniform1uiv(this.addr, e);
}
function bM(n, e) {
  n.uniform2uiv(this.addr, e);
}
function AM(n, e) {
  n.uniform3uiv(this.addr, e);
}
function wM(n, e) {
  n.uniform4uiv(this.addr, e);
}
function RM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Uo(t, r);
  Mt(i, s) || (n.uniform1iv(this.addr, s), Et(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || yd, s[o]);
}
function CM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Uo(t, r);
  Mt(i, s) || (n.uniform1iv(this.addr, s), Et(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || bd, s[o]);
}
function PM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Uo(t, r);
  Mt(i, s) || (n.uniform1iv(this.addr, s), Et(i, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Ad, s[o]);
}
function LM(n, e, t) {
  const i = this.cache,
    r = e.length,
    s = Uo(t, r);
  Mt(i, s) || (n.uniform1iv(this.addr, s), Et(i, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Td, s[o]);
}
function DM(n) {
  switch (n) {
    case 5126:
      return dM;
    case 35664:
      return pM;
    case 35665:
      return mM;
    case 35666:
      return gM;
    case 35674:
      return _M;
    case 35675:
      return vM;
    case 35676:
      return xM;
    case 5124:
    case 35670:
      return SM;
    case 35667:
    case 35671:
      return MM;
    case 35668:
    case 35672:
      return EM;
    case 35669:
    case 35673:
      return yM;
    case 5125:
      return TM;
    case 36294:
      return bM;
    case 36295:
      return AM;
    case 36296:
      return wM;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return RM;
    case 35679:
    case 36299:
    case 36307:
      return CM;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return PM;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return LM;
  }
}
class IM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = hM(t.type));
  }
}
class UM {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = DM(t.type));
  }
}
class NM {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], i);
    }
  }
}
const Pa = /(\w+)(\])?(\[|\.)?/g;
function hf(n, e) {
  n.seq.push(e), (n.map[e.id] = e);
}
function FM(n, e, t) {
  const i = n.name,
    r = i.length;
  for (Pa.lastIndex = 0; ; ) {
    const s = Pa.exec(i),
      o = Pa.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      hf(t, c === void 0 ? new IM(a, n, e) : new UM(a, n, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && ((f = new NM(a)), hf(t, f)), (t = f);
    }
  }
}
class ao {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      FM(s, o, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = i[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function df(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const OM = 37297;
let BM = 0;
function zM(n, e) {
  const t = n.split(`
`),
    i = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    i.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return i.join(`
`);
}
const pf = new Ge();
function HM(n) {
  Ke._getMatrix(pf, Ke.workingColorSpace, n);
  const e = `mat3( ${pf.elements.map((t) => t.toFixed(4))} )`;
  switch (Ke.getTransfer(n)) {
    case go:
      return [e, "LinearTransferOETF"];
    case st:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", n),
        [e, "LinearTransferOETF"]
      );
  }
}
function mf(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS),
    r = n.getShaderInfoLog(e).trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      zM(n.getShaderSource(e), o)
    );
  } else return r;
}
function kM(n, e) {
  const t = HM(e);
  return [
    `vec4 ${n}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function VM(n, e) {
  let t;
  switch (e) {
    case k_:
      t = "Linear";
      break;
    case V_:
      t = "Reinhard";
      break;
    case G_:
      t = "Cineon";
      break;
    case W_:
      t = "ACESFilmic";
      break;
    case q_:
      t = "AgX";
      break;
    case $_:
      t = "Neutral";
      break;
    case X_:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const Zs = new G();
function GM() {
  Ke.getLuminanceCoefficients(Zs);
  const n = Zs.x.toFixed(4),
    e = Zs.y.toFixed(4),
    t = Zs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function WM(n) {
  return [
    n.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(jr).join(`
`);
}
function XM(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function qM(n, e) {
  const t = {},
    i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === n.FLOAT_MAT2 && (a = 2),
      s.type === n.FLOAT_MAT3 && (a = 3),
      s.type === n.FLOAT_MAT4 && (a = 4),
      (t[o] = {
        type: s.type,
        location: n.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function jr(n) {
  return n !== "";
}
function gf(n, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _f(n, e) {
  return n
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const $M = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Il(n) {
  return n.replace($M, jM);
}
const YM = new Map();
function jM(n, e) {
  let t = We[e];
  if (t === void 0) {
    const i = YM.get(e);
    if (i !== void 0)
      (t = We[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          i,
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Il(t);
}
const KM =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function vf(n) {
  return n.replace(KM, ZM);
}
function ZM(n, e, t, i) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function xf(n) {
  let e = `precision ${n.precision} float;
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
	`;
  return (
    n.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : n.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : n.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function JM(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    n.shadowMapType === jh
      ? (e = "SHADOWMAP_TYPE_PCF")
      : n.shadowMapType === S_
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : n.shadowMapType === Vn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function QM(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case Pr:
      case Lr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Do:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function eE(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case Lr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function tE(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case tc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case z_:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case H_:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function nE(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: i,
    maxMip: t,
  };
}
function iE(n, e, t, i) {
  const r = n.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = JM(t),
    c = QM(t),
    u = eE(t),
    f = tE(t),
    h = nE(t),
    p = WM(t),
    _ = XM(s),
    S = r.createProgram();
  let m,
    d,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(jr).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (d = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(jr).join(`
`)),
      d.length > 0 &&
        (d += `
`))
    : ((m = [
        xf(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(jr).join(`
`)),
      (d = [
        xf(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + f : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== gi ? "#define TONE_MAPPING" : "",
        t.toneMapping !== gi ? We.tonemapping_pars_fragment : "",
        t.toneMapping !== gi ? VM("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        We.colorspace_pars_fragment,
        kM("linearToOutputTexel", t.outputColorSpace),
        GM(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(jr).join(`
`))),
    (o = Il(o)),
    (o = gf(o, t)),
    (o = _f(o, t)),
    (a = Il(a)),
    (a = gf(a, t)),
    (a = _f(a, t)),
    (o = vf(o)),
    (a = vf(a)),
    t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (m =
        [
          p,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (d =
        [
          "#define varying in",
          t.glslVersion === Ru
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ru ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        d));
  const b = A + m + o,
    y = A + d + a,
    I = df(r, r.VERTEX_SHADER, b),
    D = df(r, r.FRAGMENT_SHADER, y);
  r.attachShader(S, I),
    r.attachShader(S, D),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(S, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"),
    r.linkProgram(S);
  function C(L) {
    if (n.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(S).trim(),
        H = r.getShaderInfoLog(I).trim(),
        ne = r.getShaderInfoLog(D).trim();
      let se = !0,
        Z = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (((se = !1), typeof n.debug.onShaderError == "function"))
          n.debug.onShaderError(r, S, I, D);
        else {
          const ee = mf(r, I, "vertex"),
            V = mf(r, D, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(S, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              L.name +
              `
Material Type: ` +
              L.type +
              `

Program Info Log: ` +
              O +
              `
` +
              ee +
              `
` +
              V,
          );
        }
      else
        O !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", O)
          : (H === "" || ne === "") && (Z = !1);
      Z &&
        (L.diagnostics = {
          runnable: se,
          programLog: O,
          vertexShader: { log: H, prefix: m },
          fragmentShader: { log: ne, prefix: d },
        });
    }
    r.deleteShader(I), r.deleteShader(D), (B = new ao(r, S)), (T = qM(r, S));
  }
  let B;
  this.getUniforms = function () {
    return B === void 0 && C(this), B;
  };
  let T;
  this.getAttributes = function () {
    return T === void 0 && C(this), T;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return M === !1 && (M = r.getProgramParameter(S, OM)), M;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(S),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = BM++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = S),
    (this.vertexShader = I),
    (this.fragmentShader = D),
    this
  );
}
let rE = 0;
class sE {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(i),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && ((i = new Set()), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && ((i = new oE(e)), t.set(e, i)), i;
  }
}
class oE {
  constructor(e) {
    (this.id = rE++), (this.code = e), (this.usedTimes = 0);
  }
}
function aE(n, e, t, i, r, s, o) {
  const a = new hd(),
    l = new sE(),
    c = new Set(),
    u = [],
    f = r.logarithmicDepthBuffer,
    h = r.vertexTextures;
  let p = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function S(T) {
    return c.add(T), T === 0 ? "uv" : `uv${T}`;
  }
  function m(T, M, L, O, H) {
    const ne = O.fog,
      se = H.geometry,
      Z = T.isMeshStandardMaterial ? O.environment : null,
      ee = (T.isMeshStandardMaterial ? t : e).get(T.envMap || Z),
      V = ee && ee.mapping === Do ? ee.image.height : null,
      me = _[T.type];
    T.precision !== null &&
      ((p = r.getMaxPrecision(T.precision)),
      p !== T.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          T.precision,
          "not supported, using",
          p,
          "instead.",
        ));
    const Se =
        se.morphAttributes.position ||
        se.morphAttributes.normal ||
        se.morphAttributes.color,
      we = Se !== void 0 ? Se.length : 0;
    let Pe = 0;
    se.morphAttributes.position !== void 0 && (Pe = 1),
      se.morphAttributes.normal !== void 0 && (Pe = 2),
      se.morphAttributes.color !== void 0 && (Pe = 3);
    let $e, ie, de, Me;
    if (me) {
      const rt = bn[me];
      ($e = rt.vertexShader), (ie = rt.fragmentShader);
    } else
      ($e = T.vertexShader),
        (ie = T.fragmentShader),
        l.update(T),
        (de = l.getVertexShaderID(T)),
        (Me = l.getFragmentShaderID(T));
    const U = n.getRenderTarget(),
      re = n.state.buffers.depth.getReversed(),
      ae = H.isInstancedMesh === !0,
      le = H.isBatchedMesh === !0,
      Ie = !!T.map,
      w = !!T.matcap,
      R = !!ee,
      v = !!T.aoMap,
      te = !!T.lightMap,
      j = !!T.bumpMap,
      q = !!T.normalMap,
      J = !!T.displacementMap,
      ce = !!T.emissiveMap,
      K = !!T.metalnessMap,
      x = !!T.roughnessMap,
      g = T.anisotropy > 0,
      P = T.clearcoat > 0,
      k = T.dispersion > 0,
      $ = T.iridescence > 0,
      W = T.sheen > 0,
      pe = T.transmission > 0,
      ue = g && !!T.anisotropyMap,
      ge = P && !!T.clearcoatMap,
      Ue = P && !!T.clearcoatNormalMap,
      fe = P && !!T.clearcoatRoughnessMap,
      xe = $ && !!T.iridescenceMap,
      Ce = $ && !!T.iridescenceThicknessMap,
      Ne = W && !!T.sheenColorMap,
      _e = W && !!T.sheenRoughnessMap,
      Oe = !!T.specularMap,
      He = !!T.specularColorMap,
      at = !!T.specularIntensityMap,
      N = pe && !!T.transmissionMap,
      Ee = pe && !!T.thicknessMap,
      Q = !!T.gradientMap,
      oe = !!T.alphaMap,
      be = T.alphaTest > 0,
      Te = !!T.alphaHash,
      Ve = !!T.extensions;
    let mt = gi;
    T.toneMapped &&
      (U === null || U.isXRRenderTarget === !0) &&
      (mt = n.toneMapping);
    const wt = {
      shaderID: me,
      shaderType: T.type,
      shaderName: T.name,
      vertexShader: $e,
      fragmentShader: ie,
      defines: T.defines,
      customVertexShaderID: de,
      customFragmentShaderID: Me,
      isRawShaderMaterial: T.isRawShaderMaterial === !0,
      glslVersion: T.glslVersion,
      precision: p,
      batching: le,
      batchingColor: le && H._colorsTexture !== null,
      instancing: ae,
      instancingColor: ae && H.instanceColor !== null,
      instancingMorph: ae && H.morphTexture !== null,
      supportsVertexTextures: h,
      outputColorSpace:
        U === null
          ? n.outputColorSpace
          : U.isXRRenderTarget === !0
            ? U.texture.colorSpace
            : Ur,
      alphaToCoverage: !!T.alphaToCoverage,
      map: Ie,
      matcap: w,
      envMap: R,
      envMapMode: R && ee.mapping,
      envMapCubeUVHeight: V,
      aoMap: v,
      lightMap: te,
      bumpMap: j,
      normalMap: q,
      displacementMap: h && J,
      emissiveMap: ce,
      normalMapObjectSpace: q && T.normalMapType === Z_,
      normalMapTangentSpace: q && T.normalMapType === ad,
      metalnessMap: K,
      roughnessMap: x,
      anisotropy: g,
      anisotropyMap: ue,
      clearcoat: P,
      clearcoatMap: ge,
      clearcoatNormalMap: Ue,
      clearcoatRoughnessMap: fe,
      dispersion: k,
      iridescence: $,
      iridescenceMap: xe,
      iridescenceThicknessMap: Ce,
      sheen: W,
      sheenColorMap: Ne,
      sheenRoughnessMap: _e,
      specularMap: Oe,
      specularColorMap: He,
      specularIntensityMap: at,
      transmission: pe,
      transmissionMap: N,
      thicknessMap: Ee,
      gradientMap: Q,
      opaque:
        T.transparent === !1 && T.blending === Tr && T.alphaToCoverage === !1,
      alphaMap: oe,
      alphaTest: be,
      alphaHash: Te,
      combine: T.combine,
      mapUv: Ie && S(T.map.channel),
      aoMapUv: v && S(T.aoMap.channel),
      lightMapUv: te && S(T.lightMap.channel),
      bumpMapUv: j && S(T.bumpMap.channel),
      normalMapUv: q && S(T.normalMap.channel),
      displacementMapUv: J && S(T.displacementMap.channel),
      emissiveMapUv: ce && S(T.emissiveMap.channel),
      metalnessMapUv: K && S(T.metalnessMap.channel),
      roughnessMapUv: x && S(T.roughnessMap.channel),
      anisotropyMapUv: ue && S(T.anisotropyMap.channel),
      clearcoatMapUv: ge && S(T.clearcoatMap.channel),
      clearcoatNormalMapUv: Ue && S(T.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: fe && S(T.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && S(T.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ce && S(T.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ne && S(T.sheenColorMap.channel),
      sheenRoughnessMapUv: _e && S(T.sheenRoughnessMap.channel),
      specularMapUv: Oe && S(T.specularMap.channel),
      specularColorMapUv: He && S(T.specularColorMap.channel),
      specularIntensityMapUv: at && S(T.specularIntensityMap.channel),
      transmissionMapUv: N && S(T.transmissionMap.channel),
      thicknessMapUv: Ee && S(T.thicknessMap.channel),
      alphaMapUv: oe && S(T.alphaMap.channel),
      vertexTangents: !!se.attributes.tangent && (q || g),
      vertexColors: T.vertexColors,
      vertexAlphas:
        T.vertexColors === !0 &&
        !!se.attributes.color &&
        se.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!se.attributes.uv && (Ie || oe),
      fog: !!ne,
      useFog: T.fog === !0,
      fogExp2: !!ne && ne.isFogExp2,
      flatShading: T.flatShading === !0,
      sizeAttenuation: T.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: re,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: se.morphAttributes.position !== void 0,
      morphNormals: se.morphAttributes.normal !== void 0,
      morphColors: se.morphAttributes.color !== void 0,
      morphTargetsCount: we,
      morphTextureStride: Pe,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: T.dithering,
      shadowMapEnabled: n.shadowMap.enabled && L.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: mt,
      decodeVideoTexture:
        Ie &&
        T.map.isVideoTexture === !0 &&
        Ke.getTransfer(T.map.colorSpace) === st,
      decodeVideoTextureEmissive:
        ce &&
        T.emissiveMap.isVideoTexture === !0 &&
        Ke.getTransfer(T.emissiveMap.colorSpace) === st,
      premultipliedAlpha: T.premultipliedAlpha,
      doubleSided: T.side === Xn,
      flipSided: T.side === Vt,
      useDepthPacking: T.depthPacking >= 0,
      depthPacking: T.depthPacking || 0,
      index0AttributeName: T.index0AttributeName,
      extensionClipCullDistance:
        Ve &&
        T.extensions.clipCullDistance === !0 &&
        i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Ve && T.extensions.multiDraw === !0) || le) &&
        i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: T.customProgramCacheKey(),
    };
    return (
      (wt.vertexUv1s = c.has(1)),
      (wt.vertexUv2s = c.has(2)),
      (wt.vertexUv3s = c.has(3)),
      c.clear(),
      wt
    );
  }
  function d(T) {
    const M = [];
    if (
      (T.shaderID
        ? M.push(T.shaderID)
        : (M.push(T.customVertexShaderID), M.push(T.customFragmentShaderID)),
      T.defines !== void 0)
    )
      for (const L in T.defines) M.push(L), M.push(T.defines[L]);
    return (
      T.isRawShaderMaterial === !1 &&
        (A(M, T), b(M, T), M.push(n.outputColorSpace)),
      M.push(T.customProgramCacheKey),
      M.join()
    );
  }
  function A(T, M) {
    T.push(M.precision),
      T.push(M.outputColorSpace),
      T.push(M.envMapMode),
      T.push(M.envMapCubeUVHeight),
      T.push(M.mapUv),
      T.push(M.alphaMapUv),
      T.push(M.lightMapUv),
      T.push(M.aoMapUv),
      T.push(M.bumpMapUv),
      T.push(M.normalMapUv),
      T.push(M.displacementMapUv),
      T.push(M.emissiveMapUv),
      T.push(M.metalnessMapUv),
      T.push(M.roughnessMapUv),
      T.push(M.anisotropyMapUv),
      T.push(M.clearcoatMapUv),
      T.push(M.clearcoatNormalMapUv),
      T.push(M.clearcoatRoughnessMapUv),
      T.push(M.iridescenceMapUv),
      T.push(M.iridescenceThicknessMapUv),
      T.push(M.sheenColorMapUv),
      T.push(M.sheenRoughnessMapUv),
      T.push(M.specularMapUv),
      T.push(M.specularColorMapUv),
      T.push(M.specularIntensityMapUv),
      T.push(M.transmissionMapUv),
      T.push(M.thicknessMapUv),
      T.push(M.combine),
      T.push(M.fogExp2),
      T.push(M.sizeAttenuation),
      T.push(M.morphTargetsCount),
      T.push(M.morphAttributeCount),
      T.push(M.numDirLights),
      T.push(M.numPointLights),
      T.push(M.numSpotLights),
      T.push(M.numSpotLightMaps),
      T.push(M.numHemiLights),
      T.push(M.numRectAreaLights),
      T.push(M.numDirLightShadows),
      T.push(M.numPointLightShadows),
      T.push(M.numSpotLightShadows),
      T.push(M.numSpotLightShadowsWithMaps),
      T.push(M.numLightProbes),
      T.push(M.shadowMapType),
      T.push(M.toneMapping),
      T.push(M.numClippingPlanes),
      T.push(M.numClipIntersection),
      T.push(M.depthPacking);
  }
  function b(T, M) {
    a.disableAll(),
      M.supportsVertexTextures && a.enable(0),
      M.instancing && a.enable(1),
      M.instancingColor && a.enable(2),
      M.instancingMorph && a.enable(3),
      M.matcap && a.enable(4),
      M.envMap && a.enable(5),
      M.normalMapObjectSpace && a.enable(6),
      M.normalMapTangentSpace && a.enable(7),
      M.clearcoat && a.enable(8),
      M.iridescence && a.enable(9),
      M.alphaTest && a.enable(10),
      M.vertexColors && a.enable(11),
      M.vertexAlphas && a.enable(12),
      M.vertexUv1s && a.enable(13),
      M.vertexUv2s && a.enable(14),
      M.vertexUv3s && a.enable(15),
      M.vertexTangents && a.enable(16),
      M.anisotropy && a.enable(17),
      M.alphaHash && a.enable(18),
      M.batching && a.enable(19),
      M.dispersion && a.enable(20),
      M.batchingColor && a.enable(21),
      T.push(a.mask),
      a.disableAll(),
      M.fog && a.enable(0),
      M.useFog && a.enable(1),
      M.flatShading && a.enable(2),
      M.logarithmicDepthBuffer && a.enable(3),
      M.reverseDepthBuffer && a.enable(4),
      M.skinning && a.enable(5),
      M.morphTargets && a.enable(6),
      M.morphNormals && a.enable(7),
      M.morphColors && a.enable(8),
      M.premultipliedAlpha && a.enable(9),
      M.shadowMapEnabled && a.enable(10),
      M.doubleSided && a.enable(11),
      M.flipSided && a.enable(12),
      M.useDepthPacking && a.enable(13),
      M.dithering && a.enable(14),
      M.transmission && a.enable(15),
      M.sheen && a.enable(16),
      M.opaque && a.enable(17),
      M.pointsUvs && a.enable(18),
      M.decodeVideoTexture && a.enable(19),
      M.decodeVideoTextureEmissive && a.enable(20),
      M.alphaToCoverage && a.enable(21),
      T.push(a.mask);
  }
  function y(T) {
    const M = _[T.type];
    let L;
    if (M) {
      const O = bn[M];
      L = Cv.clone(O.uniforms);
    } else L = T.uniforms;
    return L;
  }
  function I(T, M) {
    let L;
    for (let O = 0, H = u.length; O < H; O++) {
      const ne = u[O];
      if (ne.cacheKey === M) {
        (L = ne), ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && ((L = new iE(n, M, T, s)), u.push(L)), L;
  }
  function D(T) {
    if (--T.usedTimes === 0) {
      const M = u.indexOf(T);
      (u[M] = u[u.length - 1]), u.pop(), T.destroy();
    }
  }
  function C(T) {
    l.remove(T);
  }
  function B() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: y,
    acquireProgram: I,
    releaseProgram: D,
    releaseShaderCache: C,
    programs: u,
    dispose: B,
  };
}
function lE() {
  let n = new WeakMap();
  function e(o) {
    return n.has(o);
  }
  function t(o) {
    let a = n.get(o);
    return a === void 0 && ((a = {}), n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function r(o, a, l) {
    n.get(o)[a] = l;
  }
  function s() {
    n = new WeakMap();
  }
  return { has: e, get: t, remove: i, update: r, dispose: s };
}
function cE(n, e) {
  return n.groupOrder !== e.groupOrder
    ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder
      ? n.renderOrder - e.renderOrder
      : n.material.id !== e.material.id
        ? n.material.id - e.material.id
        : n.z !== e.z
          ? n.z - e.z
          : n.id - e.id;
}
function Sf(n, e) {
  return n.groupOrder !== e.groupOrder
    ? n.groupOrder - e.groupOrder
    : n.renderOrder !== e.renderOrder
      ? n.renderOrder - e.renderOrder
      : n.z !== e.z
        ? e.z - n.z
        : n.id - e.id;
}
function Mf() {
  const n = [];
  let e = 0;
  const t = [],
    i = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (i.length = 0), (r.length = 0);
  }
  function o(f, h, p, _, S, m) {
    let d = n[e];
    return (
      d === void 0
        ? ((d = {
            id: f.id,
            object: f,
            geometry: h,
            material: p,
            groupOrder: _,
            renderOrder: f.renderOrder,
            z: S,
            group: m,
          }),
          (n[e] = d))
        : ((d.id = f.id),
          (d.object = f),
          (d.geometry = h),
          (d.material = p),
          (d.groupOrder = _),
          (d.renderOrder = f.renderOrder),
          (d.z = S),
          (d.group = m)),
      e++,
      d
    );
  }
  function a(f, h, p, _, S, m) {
    const d = o(f, h, p, _, S, m);
    p.transmission > 0
      ? i.push(d)
      : p.transparent === !0
        ? r.push(d)
        : t.push(d);
  }
  function l(f, h, p, _, S, m) {
    const d = o(f, h, p, _, S, m);
    p.transmission > 0
      ? i.unshift(d)
      : p.transparent === !0
        ? r.unshift(d)
        : t.unshift(d);
  }
  function c(f, h) {
    t.length > 1 && t.sort(f || cE),
      i.length > 1 && i.sort(h || Sf),
      r.length > 1 && r.sort(h || Sf);
  }
  function u() {
    for (let f = e, h = n.length; f < h; f++) {
      const p = n[f];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function uE() {
  let n = new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let o;
    return (
      s === void 0
        ? ((o = new Mf()), n.set(i, [o]))
        : r >= s.length
          ? ((o = new Mf()), s.push(o))
          : (o = s[r]),
      o
    );
  }
  function t() {
    n = new WeakMap();
  }
  return { get: e, dispose: t };
}
function fE() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new G(), color: new Ze() };
          break;
        case "SpotLight":
          t = {
            position: new G(),
            direction: new G(),
            color: new Ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new G(), color: new Ze(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new G(), skyColor: new Ze(), groundColor: new Ze() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ze(),
            position: new G(),
            halfWidth: new G(),
            halfHeight: new G(),
          };
          break;
      }
      return (n[e.id] = t), t;
    },
  };
}
function hE() {
  const n = {};
  return {
    get: function (e) {
      if (n[e.id] !== void 0) return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Qe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (n[e.id] = t), t;
    },
  };
}
let dE = 0;
function pE(n, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function mE(n) {
  const e = new fE(),
    t = hE(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) i.probe.push(new G());
  const r = new G(),
    s = new pt(),
    o = new pt();
  function a(c) {
    let u = 0,
      f = 0,
      h = 0;
    for (let T = 0; T < 9; T++) i.probe[T].set(0, 0, 0);
    let p = 0,
      _ = 0,
      S = 0,
      m = 0,
      d = 0,
      A = 0,
      b = 0,
      y = 0,
      I = 0,
      D = 0,
      C = 0;
    c.sort(pE);
    for (let T = 0, M = c.length; T < M; T++) {
      const L = c[T],
        O = L.color,
        H = L.intensity,
        ne = L.distance,
        se = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight) (u += O.r * H), (f += O.g * H), (h += O.b * H);
      else if (L.isLightProbe) {
        for (let Z = 0; Z < 9; Z++)
          i.probe[Z].addScaledVector(L.sh.coefficients[Z], H);
        C++;
      } else if (L.isDirectionalLight) {
        const Z = e.get(L);
        if ((Z.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow)) {
          const ee = L.shadow,
            V = t.get(L);
          (V.shadowIntensity = ee.intensity),
            (V.shadowBias = ee.bias),
            (V.shadowNormalBias = ee.normalBias),
            (V.shadowRadius = ee.radius),
            (V.shadowMapSize = ee.mapSize),
            (i.directionalShadow[p] = V),
            (i.directionalShadowMap[p] = se),
            (i.directionalShadowMatrix[p] = L.shadow.matrix),
            A++;
        }
        (i.directional[p] = Z), p++;
      } else if (L.isSpotLight) {
        const Z = e.get(L);
        Z.position.setFromMatrixPosition(L.matrixWorld),
          Z.color.copy(O).multiplyScalar(H),
          (Z.distance = ne),
          (Z.coneCos = Math.cos(L.angle)),
          (Z.penumbraCos = Math.cos(L.angle * (1 - L.penumbra))),
          (Z.decay = L.decay),
          (i.spot[S] = Z);
        const ee = L.shadow;
        if (
          (L.map &&
            ((i.spotLightMap[I] = L.map),
            I++,
            ee.updateMatrices(L),
            L.castShadow && D++),
          (i.spotLightMatrix[S] = ee.matrix),
          L.castShadow)
        ) {
          const V = t.get(L);
          (V.shadowIntensity = ee.intensity),
            (V.shadowBias = ee.bias),
            (V.shadowNormalBias = ee.normalBias),
            (V.shadowRadius = ee.radius),
            (V.shadowMapSize = ee.mapSize),
            (i.spotShadow[S] = V),
            (i.spotShadowMap[S] = se),
            y++;
        }
        S++;
      } else if (L.isRectAreaLight) {
        const Z = e.get(L);
        Z.color.copy(O).multiplyScalar(H),
          Z.halfWidth.set(L.width * 0.5, 0, 0),
          Z.halfHeight.set(0, L.height * 0.5, 0),
          (i.rectArea[m] = Z),
          m++;
      } else if (L.isPointLight) {
        const Z = e.get(L);
        if (
          (Z.color.copy(L.color).multiplyScalar(L.intensity),
          (Z.distance = L.distance),
          (Z.decay = L.decay),
          L.castShadow)
        ) {
          const ee = L.shadow,
            V = t.get(L);
          (V.shadowIntensity = ee.intensity),
            (V.shadowBias = ee.bias),
            (V.shadowNormalBias = ee.normalBias),
            (V.shadowRadius = ee.radius),
            (V.shadowMapSize = ee.mapSize),
            (V.shadowCameraNear = ee.camera.near),
            (V.shadowCameraFar = ee.camera.far),
            (i.pointShadow[_] = V),
            (i.pointShadowMap[_] = se),
            (i.pointShadowMatrix[_] = L.shadow.matrix),
            b++;
        }
        (i.point[_] = Z), _++;
      } else if (L.isHemisphereLight) {
        const Z = e.get(L);
        Z.skyColor.copy(L.color).multiplyScalar(H),
          Z.groundColor.copy(L.groundColor).multiplyScalar(H),
          (i.hemi[d] = Z),
          d++;
      }
    }
    m > 0 &&
      (n.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ve.LTC_FLOAT_1), (i.rectAreaLTC2 = ve.LTC_FLOAT_2))
        : ((i.rectAreaLTC1 = ve.LTC_HALF_1), (i.rectAreaLTC2 = ve.LTC_HALF_2))),
      (i.ambient[0] = u),
      (i.ambient[1] = f),
      (i.ambient[2] = h);
    const B = i.hash;
    (B.directionalLength !== p ||
      B.pointLength !== _ ||
      B.spotLength !== S ||
      B.rectAreaLength !== m ||
      B.hemiLength !== d ||
      B.numDirectionalShadows !== A ||
      B.numPointShadows !== b ||
      B.numSpotShadows !== y ||
      B.numSpotMaps !== I ||
      B.numLightProbes !== C) &&
      ((i.directional.length = p),
      (i.spot.length = S),
      (i.rectArea.length = m),
      (i.point.length = _),
      (i.hemi.length = d),
      (i.directionalShadow.length = A),
      (i.directionalShadowMap.length = A),
      (i.pointShadow.length = b),
      (i.pointShadowMap.length = b),
      (i.spotShadow.length = y),
      (i.spotShadowMap.length = y),
      (i.directionalShadowMatrix.length = A),
      (i.pointShadowMatrix.length = b),
      (i.spotLightMatrix.length = y + I - D),
      (i.spotLightMap.length = I),
      (i.numSpotLightShadowsWithMaps = D),
      (i.numLightProbes = C),
      (B.directionalLength = p),
      (B.pointLength = _),
      (B.spotLength = S),
      (B.rectAreaLength = m),
      (B.hemiLength = d),
      (B.numDirectionalShadows = A),
      (B.numPointShadows = b),
      (B.numSpotShadows = y),
      (B.numSpotMaps = I),
      (B.numLightProbes = C),
      (i.version = dE++));
  }
  function l(c, u) {
    let f = 0,
      h = 0,
      p = 0,
      _ = 0,
      S = 0;
    const m = u.matrixWorldInverse;
    for (let d = 0, A = c.length; d < A; d++) {
      const b = c[d];
      if (b.isDirectionalLight) {
        const y = i.directional[f];
        y.direction.setFromMatrixPosition(b.matrixWorld),
          r.setFromMatrixPosition(b.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(m),
          f++;
      } else if (b.isSpotLight) {
        const y = i.spot[p];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(m),
          y.direction.setFromMatrixPosition(b.matrixWorld),
          r.setFromMatrixPosition(b.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(m),
          p++;
      } else if (b.isRectAreaLight) {
        const y = i.rectArea[_];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(m),
          o.identity(),
          s.copy(b.matrixWorld),
          s.premultiply(m),
          o.extractRotation(s),
          y.halfWidth.set(b.width * 0.5, 0, 0),
          y.halfHeight.set(0, b.height * 0.5, 0),
          y.halfWidth.applyMatrix4(o),
          y.halfHeight.applyMatrix4(o),
          _++;
      } else if (b.isPointLight) {
        const y = i.point[h];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(m),
          h++;
      } else if (b.isHemisphereLight) {
        const y = i.hemi[S];
        y.direction.setFromMatrixPosition(b.matrixWorld),
          y.direction.transformDirection(m),
          S++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function Ef(n) {
  const e = new mE(n),
    t = [],
    i = [];
  function r(u) {
    (c.camera = u), (t.length = 0), (i.length = 0);
  }
  function s(u) {
    t.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function a() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: s,
    pushShadow: o,
  };
}
function gE(n) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    return (
      o === void 0
        ? ((a = new Ef(n)), e.set(r, [a]))
        : s >= o.length
          ? ((a = new Ef(n)), o.push(a))
          : (a = o[s]),
      a
    );
  }
  function i() {
    e = new WeakMap();
  }
  return { get: t, dispose: i };
}
const _E = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  vE = `uniform sampler2D shadow_pass;
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
}`;
function xE(n, e, t) {
  let i = new cc();
  const r = new Qe(),
    s = new Qe(),
    o = new ot(),
    a = new zv({ depthPacking: K_ }),
    l = new Hv(),
    c = {},
    u = t.maxTextureSize,
    f = { [vi]: Vt, [Vt]: vi, [Xn]: Xn },
    h = new xi({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Qe() },
        radius: { value: 4 },
      },
      vertexShader: _E,
      fragmentShader: vE,
    }),
    p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new yi();
  _.setAttribute(
    "position",
    new Cn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const S = new wn(_, h),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = jh);
  let d = this.type;
  this.render = function (D, C, B) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      D.length === 0
    )
      return;
    const T = n.getRenderTarget(),
      M = n.getActiveCubeFace(),
      L = n.getActiveMipmapLevel(),
      O = n.state;
    O.setBlending(mi),
      O.buffers.color.setClear(1, 1, 1, 1),
      O.buffers.depth.setTest(!0),
      O.setScissorTest(!1);
    const H = d !== Vn && this.type === Vn,
      ne = d === Vn && this.type !== Vn;
    for (let se = 0, Z = D.length; se < Z; se++) {
      const ee = D[se],
        V = ee.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize);
      const me = V.getFrameExtents();
      if (
        (r.multiply(me),
        s.copy(V.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / me.x)),
            (r.x = s.x * me.x),
            (V.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / me.y)),
            (r.y = s.y * me.y),
            (V.mapSize.y = s.y))),
        V.map === null || H === !0 || ne === !0)
      ) {
        const we = this.type !== Vn ? { minFilter: xn, magFilter: xn } : {};
        V.map !== null && V.map.dispose(),
          (V.map = new Yi(r.x, r.y, we)),
          (V.map.texture.name = ee.name + ".shadowMap"),
          V.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(V.map), n.clear();
      const Se = V.getViewportCount();
      for (let we = 0; we < Se; we++) {
        const Pe = V.getViewport(we);
        o.set(s.x * Pe.x, s.y * Pe.y, s.x * Pe.z, s.y * Pe.w),
          O.viewport(o),
          V.updateMatrices(ee, we),
          (i = V.getFrustum()),
          y(C, B, V.camera, ee, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === Vn && A(V, B),
        (V.needsUpdate = !1);
    }
    (d = this.type), (m.needsUpdate = !1), n.setRenderTarget(T, M, L);
  };
  function A(D, C) {
    const B = e.update(S);
    h.defines.VSM_SAMPLES !== D.blurSamples &&
      ((h.defines.VSM_SAMPLES = D.blurSamples),
      (p.defines.VSM_SAMPLES = D.blurSamples),
      (h.needsUpdate = !0),
      (p.needsUpdate = !0)),
      D.mapPass === null && (D.mapPass = new Yi(r.x, r.y)),
      (h.uniforms.shadow_pass.value = D.map.texture),
      (h.uniforms.resolution.value = D.mapSize),
      (h.uniforms.radius.value = D.radius),
      n.setRenderTarget(D.mapPass),
      n.clear(),
      n.renderBufferDirect(C, null, B, h, S, null),
      (p.uniforms.shadow_pass.value = D.mapPass.texture),
      (p.uniforms.resolution.value = D.mapSize),
      (p.uniforms.radius.value = D.radius),
      n.setRenderTarget(D.map),
      n.clear(),
      n.renderBufferDirect(C, null, B, p, S, null);
  }
  function b(D, C, B, T) {
    let M = null;
    const L =
      B.isPointLight === !0 ? D.customDistanceMaterial : D.customDepthMaterial;
    if (L !== void 0) M = L;
    else if (
      ((M = B.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        C.clipShadows === !0 &&
        Array.isArray(C.clippingPlanes) &&
        C.clippingPlanes.length !== 0) ||
        (C.displacementMap && C.displacementScale !== 0) ||
        (C.alphaMap && C.alphaTest > 0) ||
        (C.map && C.alphaTest > 0))
    ) {
      const O = M.uuid,
        H = C.uuid;
      let ne = c[O];
      ne === void 0 && ((ne = {}), (c[O] = ne));
      let se = ne[H];
      se === void 0 &&
        ((se = M.clone()), (ne[H] = se), C.addEventListener("dispose", I)),
        (M = se);
    }
    if (
      ((M.visible = C.visible),
      (M.wireframe = C.wireframe),
      T === Vn
        ? (M.side = C.shadowSide !== null ? C.shadowSide : C.side)
        : (M.side = C.shadowSide !== null ? C.shadowSide : f[C.side]),
      (M.alphaMap = C.alphaMap),
      (M.alphaTest = C.alphaTest),
      (M.map = C.map),
      (M.clipShadows = C.clipShadows),
      (M.clippingPlanes = C.clippingPlanes),
      (M.clipIntersection = C.clipIntersection),
      (M.displacementMap = C.displacementMap),
      (M.displacementScale = C.displacementScale),
      (M.displacementBias = C.displacementBias),
      (M.wireframeLinewidth = C.wireframeLinewidth),
      (M.linewidth = C.linewidth),
      B.isPointLight === !0 && M.isMeshDistanceMaterial === !0)
    ) {
      const O = n.properties.get(M);
      O.light = B;
    }
    return M;
  }
  function y(D, C, B, T, M) {
    if (D.visible === !1) return;
    if (
      D.layers.test(C.layers) &&
      (D.isMesh || D.isLine || D.isPoints) &&
      (D.castShadow || (D.receiveShadow && M === Vn)) &&
      (!D.frustumCulled || i.intersectsObject(D))
    ) {
      D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, D.matrixWorld);
      const H = e.update(D),
        ne = D.material;
      if (Array.isArray(ne)) {
        const se = H.groups;
        for (let Z = 0, ee = se.length; Z < ee; Z++) {
          const V = se[Z],
            me = ne[V.materialIndex];
          if (me && me.visible) {
            const Se = b(D, me, T, M);
            D.onBeforeShadow(n, D, C, B, H, Se, V),
              n.renderBufferDirect(B, null, H, Se, D, V),
              D.onAfterShadow(n, D, C, B, H, Se, V);
          }
        }
      } else if (ne.visible) {
        const se = b(D, ne, T, M);
        D.onBeforeShadow(n, D, C, B, H, se, null),
          n.renderBufferDirect(B, null, H, se, D, null),
          D.onAfterShadow(n, D, C, B, H, se, null);
      }
    }
    const O = D.children;
    for (let H = 0, ne = O.length; H < ne; H++) y(O[H], C, B, T, M);
  }
  function I(D) {
    D.target.removeEventListener("dispose", I);
    for (const B in c) {
      const T = c[B],
        M = D.target.uuid;
      M in T && (T[M].dispose(), delete T[M]);
    }
  }
}
const SE = {
  [ja]: Ka,
  [Za]: el,
  [Ja]: tl,
  [Cr]: Qa,
  [Ka]: ja,
  [el]: Za,
  [tl]: Ja,
  [Qa]: Cr,
};
function ME(n, e) {
  function t() {
    let N = !1;
    const Ee = new ot();
    let Q = null;
    const oe = new ot(0, 0, 0, 0);
    return {
      setMask: function (be) {
        Q !== be && !N && (n.colorMask(be, be, be, be), (Q = be));
      },
      setLocked: function (be) {
        N = be;
      },
      setClear: function (be, Te, Ve, mt, wt) {
        wt === !0 && ((be *= mt), (Te *= mt), (Ve *= mt)),
          Ee.set(be, Te, Ve, mt),
          oe.equals(Ee) === !1 && (n.clearColor(be, Te, Ve, mt), oe.copy(Ee));
      },
      reset: function () {
        (N = !1), (Q = null), oe.set(-1, 0, 0, 0);
      },
    };
  }
  function i() {
    let N = !1,
      Ee = !1,
      Q = null,
      oe = null,
      be = null;
    return {
      setReversed: function (Te) {
        if (Ee !== Te) {
          const Ve = e.get("EXT_clip_control");
          Ee
            ? Ve.clipControlEXT(Ve.LOWER_LEFT_EXT, Ve.ZERO_TO_ONE_EXT)
            : Ve.clipControlEXT(Ve.LOWER_LEFT_EXT, Ve.NEGATIVE_ONE_TO_ONE_EXT);
          const mt = be;
          (be = null), this.setClear(mt);
        }
        Ee = Te;
      },
      getReversed: function () {
        return Ee;
      },
      setTest: function (Te) {
        Te ? U(n.DEPTH_TEST) : re(n.DEPTH_TEST);
      },
      setMask: function (Te) {
        Q !== Te && !N && (n.depthMask(Te), (Q = Te));
      },
      setFunc: function (Te) {
        if ((Ee && (Te = SE[Te]), oe !== Te)) {
          switch (Te) {
            case ja:
              n.depthFunc(n.NEVER);
              break;
            case Ka:
              n.depthFunc(n.ALWAYS);
              break;
            case Za:
              n.depthFunc(n.LESS);
              break;
            case Cr:
              n.depthFunc(n.LEQUAL);
              break;
            case Ja:
              n.depthFunc(n.EQUAL);
              break;
            case Qa:
              n.depthFunc(n.GEQUAL);
              break;
            case el:
              n.depthFunc(n.GREATER);
              break;
            case tl:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          oe = Te;
        }
      },
      setLocked: function (Te) {
        N = Te;
      },
      setClear: function (Te) {
        be !== Te && (Ee && (Te = 1 - Te), n.clearDepth(Te), (be = Te));
      },
      reset: function () {
        (N = !1), (Q = null), (oe = null), (be = null), (Ee = !1);
      },
    };
  }
  function r() {
    let N = !1,
      Ee = null,
      Q = null,
      oe = null,
      be = null,
      Te = null,
      Ve = null,
      mt = null,
      wt = null;
    return {
      setTest: function (rt) {
        N || (rt ? U(n.STENCIL_TEST) : re(n.STENCIL_TEST));
      },
      setMask: function (rt) {
        Ee !== rt && !N && (n.stencilMask(rt), (Ee = rt));
      },
      setFunc: function (rt, un, In) {
        (Q !== rt || oe !== un || be !== In) &&
          (n.stencilFunc(rt, un, In), (Q = rt), (oe = un), (be = In));
      },
      setOp: function (rt, un, In) {
        (Te !== rt || Ve !== un || mt !== In) &&
          (n.stencilOp(rt, un, In), (Te = rt), (Ve = un), (mt = In));
      },
      setLocked: function (rt) {
        N = rt;
      },
      setClear: function (rt) {
        wt !== rt && (n.clearStencil(rt), (wt = rt));
      },
      reset: function () {
        (N = !1),
          (Ee = null),
          (Q = null),
          (oe = null),
          (be = null),
          (Te = null),
          (Ve = null),
          (mt = null),
          (wt = null);
      },
    };
  }
  const s = new t(),
    o = new i(),
    a = new r(),
    l = new WeakMap(),
    c = new WeakMap();
  let u = {},
    f = {},
    h = new WeakMap(),
    p = [],
    _ = null,
    S = !1,
    m = null,
    d = null,
    A = null,
    b = null,
    y = null,
    I = null,
    D = null,
    C = new Ze(0, 0, 0),
    B = 0,
    T = !1,
    M = null,
    L = null,
    O = null,
    H = null,
    ne = null;
  const se = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Z = !1,
    ee = 0;
  const V = n.getParameter(n.VERSION);
  V.indexOf("WebGL") !== -1
    ? ((ee = parseFloat(/^WebGL (\d)/.exec(V)[1])), (Z = ee >= 1))
    : V.indexOf("OpenGL ES") !== -1 &&
      ((ee = parseFloat(/^OpenGL ES (\d)/.exec(V)[1])), (Z = ee >= 2));
  let me = null,
    Se = {};
  const we = n.getParameter(n.SCISSOR_BOX),
    Pe = n.getParameter(n.VIEWPORT),
    $e = new ot().fromArray(we),
    ie = new ot().fromArray(Pe);
  function de(N, Ee, Q, oe) {
    const be = new Uint8Array(4),
      Te = n.createTexture();
    n.bindTexture(N, Te),
      n.texParameteri(N, n.TEXTURE_MIN_FILTER, n.NEAREST),
      n.texParameteri(N, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Ve = 0; Ve < Q; Ve++)
      N === n.TEXTURE_3D || N === n.TEXTURE_2D_ARRAY
        ? n.texImage3D(Ee, 0, n.RGBA, 1, 1, oe, 0, n.RGBA, n.UNSIGNED_BYTE, be)
        : n.texImage2D(
            Ee + Ve,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            be,
          );
    return Te;
  }
  const Me = {};
  (Me[n.TEXTURE_2D] = de(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
    (Me[n.TEXTURE_CUBE_MAP] = de(
      n.TEXTURE_CUBE_MAP,
      n.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (Me[n.TEXTURE_2D_ARRAY] = de(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1)),
    (Me[n.TEXTURE_3D] = de(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    o.setClear(1),
    a.setClear(0),
    U(n.DEPTH_TEST),
    o.setFunc(Cr),
    j(!1),
    q(Eu),
    U(n.CULL_FACE),
    v(mi);
  function U(N) {
    u[N] !== !0 && (n.enable(N), (u[N] = !0));
  }
  function re(N) {
    u[N] !== !1 && (n.disable(N), (u[N] = !1));
  }
  function ae(N, Ee) {
    return f[N] !== Ee
      ? (n.bindFramebuffer(N, Ee),
        (f[N] = Ee),
        N === n.DRAW_FRAMEBUFFER && (f[n.FRAMEBUFFER] = Ee),
        N === n.FRAMEBUFFER && (f[n.DRAW_FRAMEBUFFER] = Ee),
        !0)
      : !1;
  }
  function le(N, Ee) {
    let Q = p,
      oe = !1;
    if (N) {
      (Q = h.get(Ee)), Q === void 0 && ((Q = []), h.set(Ee, Q));
      const be = N.textures;
      if (Q.length !== be.length || Q[0] !== n.COLOR_ATTACHMENT0) {
        for (let Te = 0, Ve = be.length; Te < Ve; Te++)
          Q[Te] = n.COLOR_ATTACHMENT0 + Te;
        (Q.length = be.length), (oe = !0);
      }
    } else Q[0] !== n.BACK && ((Q[0] = n.BACK), (oe = !0));
    oe && n.drawBuffers(Q);
  }
  function Ie(N) {
    return _ !== N ? (n.useProgram(N), (_ = N), !0) : !1;
  }
  const w = {
    [ki]: n.FUNC_ADD,
    [E_]: n.FUNC_SUBTRACT,
    [y_]: n.FUNC_REVERSE_SUBTRACT,
  };
  (w[T_] = n.MIN), (w[b_] = n.MAX);
  const R = {
    [A_]: n.ZERO,
    [w_]: n.ONE,
    [R_]: n.SRC_COLOR,
    [$a]: n.SRC_ALPHA,
    [U_]: n.SRC_ALPHA_SATURATE,
    [D_]: n.DST_COLOR,
    [P_]: n.DST_ALPHA,
    [C_]: n.ONE_MINUS_SRC_COLOR,
    [Ya]: n.ONE_MINUS_SRC_ALPHA,
    [I_]: n.ONE_MINUS_DST_COLOR,
    [L_]: n.ONE_MINUS_DST_ALPHA,
    [N_]: n.CONSTANT_COLOR,
    [F_]: n.ONE_MINUS_CONSTANT_COLOR,
    [O_]: n.CONSTANT_ALPHA,
    [B_]: n.ONE_MINUS_CONSTANT_ALPHA,
  };
  function v(N, Ee, Q, oe, be, Te, Ve, mt, wt, rt) {
    if (N === mi) {
      S === !0 && (re(n.BLEND), (S = !1));
      return;
    }
    if ((S === !1 && (U(n.BLEND), (S = !0)), N !== M_)) {
      if (N !== m || rt !== T) {
        if (
          ((d !== ki || y !== ki) &&
            (n.blendEquation(n.FUNC_ADD), (d = ki), (y = ki)),
          rt)
        )
          switch (N) {
            case Tr:
              n.blendFuncSeparate(
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case yu:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case Tu:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case bu:
              n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        else
          switch (N) {
            case Tr:
              n.blendFuncSeparate(
                n.SRC_ALPHA,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case yu:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case Tu:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case bu:
              n.blendFunc(n.ZERO, n.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        (A = null),
          (b = null),
          (I = null),
          (D = null),
          C.set(0, 0, 0),
          (B = 0),
          (m = N),
          (T = rt);
      }
      return;
    }
    (be = be || Ee),
      (Te = Te || Q),
      (Ve = Ve || oe),
      (Ee !== d || be !== y) &&
        (n.blendEquationSeparate(w[Ee], w[be]), (d = Ee), (y = be)),
      (Q !== A || oe !== b || Te !== I || Ve !== D) &&
        (n.blendFuncSeparate(R[Q], R[oe], R[Te], R[Ve]),
        (A = Q),
        (b = oe),
        (I = Te),
        (D = Ve)),
      (mt.equals(C) === !1 || wt !== B) &&
        (n.blendColor(mt.r, mt.g, mt.b, wt), C.copy(mt), (B = wt)),
      (m = N),
      (T = !1);
  }
  function te(N, Ee) {
    N.side === Xn ? re(n.CULL_FACE) : U(n.CULL_FACE);
    let Q = N.side === Vt;
    Ee && (Q = !Q),
      j(Q),
      N.blending === Tr && N.transparent === !1
        ? v(mi)
        : v(
            N.blending,
            N.blendEquation,
            N.blendSrc,
            N.blendDst,
            N.blendEquationAlpha,
            N.blendSrcAlpha,
            N.blendDstAlpha,
            N.blendColor,
            N.blendAlpha,
            N.premultipliedAlpha,
          ),
      o.setFunc(N.depthFunc),
      o.setTest(N.depthTest),
      o.setMask(N.depthWrite),
      s.setMask(N.colorWrite);
    const oe = N.stencilWrite;
    a.setTest(oe),
      oe &&
        (a.setMask(N.stencilWriteMask),
        a.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask),
        a.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)),
      ce(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits),
      N.alphaToCoverage === !0
        ? U(n.SAMPLE_ALPHA_TO_COVERAGE)
        : re(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function j(N) {
    M !== N && (N ? n.frontFace(n.CW) : n.frontFace(n.CCW), (M = N));
  }
  function q(N) {
    N !== v_
      ? (U(n.CULL_FACE),
        N !== L &&
          (N === Eu
            ? n.cullFace(n.BACK)
            : N === x_
              ? n.cullFace(n.FRONT)
              : n.cullFace(n.FRONT_AND_BACK)))
      : re(n.CULL_FACE),
      (L = N);
  }
  function J(N) {
    N !== O && (Z && n.lineWidth(N), (O = N));
  }
  function ce(N, Ee, Q) {
    N
      ? (U(n.POLYGON_OFFSET_FILL),
        (H !== Ee || ne !== Q) && (n.polygonOffset(Ee, Q), (H = Ee), (ne = Q)))
      : re(n.POLYGON_OFFSET_FILL);
  }
  function K(N) {
    N ? U(n.SCISSOR_TEST) : re(n.SCISSOR_TEST);
  }
  function x(N) {
    N === void 0 && (N = n.TEXTURE0 + se - 1),
      me !== N && (n.activeTexture(N), (me = N));
  }
  function g(N, Ee, Q) {
    Q === void 0 && (me === null ? (Q = n.TEXTURE0 + se - 1) : (Q = me));
    let oe = Se[Q];
    oe === void 0 && ((oe = { type: void 0, texture: void 0 }), (Se[Q] = oe)),
      (oe.type !== N || oe.texture !== Ee) &&
        (me !== Q && (n.activeTexture(Q), (me = Q)),
        n.bindTexture(N, Ee || Me[N]),
        (oe.type = N),
        (oe.texture = Ee));
  }
  function P() {
    const N = Se[me];
    N !== void 0 &&
      N.type !== void 0 &&
      (n.bindTexture(N.type, null), (N.type = void 0), (N.texture = void 0));
  }
  function k() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function $() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function W() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function pe() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function ue() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function ge() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Ue() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function fe() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function xe() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Ce() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Ne(N) {
    $e.equals(N) === !1 && (n.scissor(N.x, N.y, N.z, N.w), $e.copy(N));
  }
  function _e(N) {
    ie.equals(N) === !1 && (n.viewport(N.x, N.y, N.z, N.w), ie.copy(N));
  }
  function Oe(N, Ee) {
    let Q = c.get(Ee);
    Q === void 0 && ((Q = new WeakMap()), c.set(Ee, Q));
    let oe = Q.get(N);
    oe === void 0 && ((oe = n.getUniformBlockIndex(Ee, N.name)), Q.set(N, oe));
  }
  function He(N, Ee) {
    const oe = c.get(Ee).get(N);
    l.get(Ee) !== oe &&
      (n.uniformBlockBinding(Ee, oe, N.__bindingPointIndex), l.set(Ee, oe));
  }
  function at() {
    n.disable(n.BLEND),
      n.disable(n.CULL_FACE),
      n.disable(n.DEPTH_TEST),
      n.disable(n.POLYGON_OFFSET_FILL),
      n.disable(n.SCISSOR_TEST),
      n.disable(n.STENCIL_TEST),
      n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
      n.blendEquation(n.FUNC_ADD),
      n.blendFunc(n.ONE, n.ZERO),
      n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
      n.blendColor(0, 0, 0, 0),
      n.colorMask(!0, !0, !0, !0),
      n.clearColor(0, 0, 0, 0),
      n.depthMask(!0),
      n.depthFunc(n.LESS),
      o.setReversed(!1),
      n.clearDepth(1),
      n.stencilMask(4294967295),
      n.stencilFunc(n.ALWAYS, 0, 4294967295),
      n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
      n.clearStencil(0),
      n.cullFace(n.BACK),
      n.frontFace(n.CCW),
      n.polygonOffset(0, 0),
      n.activeTexture(n.TEXTURE0),
      n.bindFramebuffer(n.FRAMEBUFFER, null),
      n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
      n.bindFramebuffer(n.READ_FRAMEBUFFER, null),
      n.useProgram(null),
      n.lineWidth(1),
      n.scissor(0, 0, n.canvas.width, n.canvas.height),
      n.viewport(0, 0, n.canvas.width, n.canvas.height),
      (u = {}),
      (me = null),
      (Se = {}),
      (f = {}),
      (h = new WeakMap()),
      (p = []),
      (_ = null),
      (S = !1),
      (m = null),
      (d = null),
      (A = null),
      (b = null),
      (y = null),
      (I = null),
      (D = null),
      (C = new Ze(0, 0, 0)),
      (B = 0),
      (T = !1),
      (M = null),
      (L = null),
      (O = null),
      (H = null),
      (ne = null),
      $e.set(0, 0, n.canvas.width, n.canvas.height),
      ie.set(0, 0, n.canvas.width, n.canvas.height),
      s.reset(),
      o.reset(),
      a.reset();
  }
  return {
    buffers: { color: s, depth: o, stencil: a },
    enable: U,
    disable: re,
    bindFramebuffer: ae,
    drawBuffers: le,
    useProgram: Ie,
    setBlending: v,
    setMaterial: te,
    setFlipSided: j,
    setCullFace: q,
    setLineWidth: J,
    setPolygonOffset: ce,
    setScissorTest: K,
    activeTexture: x,
    bindTexture: g,
    unbindTexture: P,
    compressedTexImage2D: k,
    compressedTexImage3D: $,
    texImage2D: xe,
    texImage3D: Ce,
    updateUBOMapping: Oe,
    uniformBlockBinding: He,
    texStorage2D: Ue,
    texStorage3D: fe,
    texSubImage2D: W,
    texSubImage3D: pe,
    compressedTexSubImage2D: ue,
    compressedTexSubImage3D: ge,
    scissor: Ne,
    viewport: _e,
    reset: at,
  };
}
function EE(n, e, t, i, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Qe(),
    u = new WeakMap();
  let f;
  const h = new WeakMap();
  let p = !1;
  try {
    p =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function _(x, g) {
    return p ? new OffscreenCanvas(x, g) : ms("canvas");
  }
  function S(x, g, P) {
    let k = 1;
    const $ = K(x);
    if (
      (($.width > P || $.height > P) && (k = P / Math.max($.width, $.height)),
      k < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && x instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && x instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && x instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && x instanceof VideoFrame)
      ) {
        const W = Math.floor(k * $.width),
          pe = Math.floor(k * $.height);
        f === void 0 && (f = _(W, pe));
        const ue = g ? _(W, pe) : f;
        return (
          (ue.width = W),
          (ue.height = pe),
          ue.getContext("2d").drawImage(x, 0, 0, W, pe),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              $.width +
              "x" +
              $.height +
              ") to (" +
              W +
              "x" +
              pe +
              ").",
          ),
          ue
        );
      } else
        return (
          "data" in x &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                $.width +
                "x" +
                $.height +
                ").",
            ),
          x
        );
    return x;
  }
  function m(x) {
    return x.generateMipmaps;
  }
  function d(x) {
    n.generateMipmap(x);
  }
  function A(x) {
    return x.isWebGLCubeRenderTarget
      ? n.TEXTURE_CUBE_MAP
      : x.isWebGL3DRenderTarget
        ? n.TEXTURE_3D
        : x.isWebGLArrayRenderTarget || x.isCompressedArrayTexture
          ? n.TEXTURE_2D_ARRAY
          : n.TEXTURE_2D;
  }
  function b(x, g, P, k, $ = !1) {
    if (x !== null) {
      if (n[x] !== void 0) return n[x];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          x +
          "'",
      );
    }
    let W = g;
    if (
      (g === n.RED &&
        (P === n.FLOAT && (W = n.R32F),
        P === n.HALF_FLOAT && (W = n.R16F),
        P === n.UNSIGNED_BYTE && (W = n.R8)),
      g === n.RED_INTEGER &&
        (P === n.UNSIGNED_BYTE && (W = n.R8UI),
        P === n.UNSIGNED_SHORT && (W = n.R16UI),
        P === n.UNSIGNED_INT && (W = n.R32UI),
        P === n.BYTE && (W = n.R8I),
        P === n.SHORT && (W = n.R16I),
        P === n.INT && (W = n.R32I)),
      g === n.RG &&
        (P === n.FLOAT && (W = n.RG32F),
        P === n.HALF_FLOAT && (W = n.RG16F),
        P === n.UNSIGNED_BYTE && (W = n.RG8)),
      g === n.RG_INTEGER &&
        (P === n.UNSIGNED_BYTE && (W = n.RG8UI),
        P === n.UNSIGNED_SHORT && (W = n.RG16UI),
        P === n.UNSIGNED_INT && (W = n.RG32UI),
        P === n.BYTE && (W = n.RG8I),
        P === n.SHORT && (W = n.RG16I),
        P === n.INT && (W = n.RG32I)),
      g === n.RGB_INTEGER &&
        (P === n.UNSIGNED_BYTE && (W = n.RGB8UI),
        P === n.UNSIGNED_SHORT && (W = n.RGB16UI),
        P === n.UNSIGNED_INT && (W = n.RGB32UI),
        P === n.BYTE && (W = n.RGB8I),
        P === n.SHORT && (W = n.RGB16I),
        P === n.INT && (W = n.RGB32I)),
      g === n.RGBA_INTEGER &&
        (P === n.UNSIGNED_BYTE && (W = n.RGBA8UI),
        P === n.UNSIGNED_SHORT && (W = n.RGBA16UI),
        P === n.UNSIGNED_INT && (W = n.RGBA32UI),
        P === n.BYTE && (W = n.RGBA8I),
        P === n.SHORT && (W = n.RGBA16I),
        P === n.INT && (W = n.RGBA32I)),
      g === n.RGB && P === n.UNSIGNED_INT_5_9_9_9_REV && (W = n.RGB9_E5),
      g === n.RGBA)
    ) {
      const pe = $ ? go : Ke.getTransfer(k);
      P === n.FLOAT && (W = n.RGBA32F),
        P === n.HALF_FLOAT && (W = n.RGBA16F),
        P === n.UNSIGNED_BYTE && (W = pe === st ? n.SRGB8_ALPHA8 : n.RGBA8),
        P === n.UNSIGNED_SHORT_4_4_4_4 && (W = n.RGBA4),
        P === n.UNSIGNED_SHORT_5_5_5_1 && (W = n.RGB5_A1);
    }
    return (
      (W === n.R16F ||
        W === n.R32F ||
        W === n.RG16F ||
        W === n.RG32F ||
        W === n.RGBA16F ||
        W === n.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      W
    );
  }
  function y(x, g) {
    let P;
    return (
      x
        ? g === null || g === $i || g === Dr
          ? (P = n.DEPTH24_STENCIL8)
          : g === qn
            ? (P = n.DEPTH32F_STENCIL8)
            : g === ps &&
              ((P = n.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : g === null || g === $i || g === Dr
          ? (P = n.DEPTH_COMPONENT24)
          : g === qn
            ? (P = n.DEPTH_COMPONENT32F)
            : g === ps && (P = n.DEPTH_COMPONENT16),
      P
    );
  }
  function I(x, g) {
    return m(x) === !0 ||
      (x.isFramebufferTexture && x.minFilter !== xn && x.minFilter !== An)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : x.mipmaps !== void 0 && x.mipmaps.length > 0
        ? x.mipmaps.length
        : x.isCompressedTexture && Array.isArray(x.image)
          ? g.mipmaps.length
          : 1;
  }
  function D(x) {
    const g = x.target;
    g.removeEventListener("dispose", D), B(g), g.isVideoTexture && u.delete(g);
  }
  function C(x) {
    const g = x.target;
    g.removeEventListener("dispose", C), M(g);
  }
  function B(x) {
    const g = i.get(x);
    if (g.__webglInit === void 0) return;
    const P = x.source,
      k = h.get(P);
    if (k) {
      const $ = k[g.__cacheKey];
      $.usedTimes--,
        $.usedTimes === 0 && T(x),
        Object.keys(k).length === 0 && h.delete(P);
    }
    i.remove(x);
  }
  function T(x) {
    const g = i.get(x);
    n.deleteTexture(g.__webglTexture);
    const P = x.source,
      k = h.get(P);
    delete k[g.__cacheKey], o.memory.textures--;
  }
  function M(x) {
    const g = i.get(x);
    if (
      (x.depthTexture && (x.depthTexture.dispose(), i.remove(x.depthTexture)),
      x.isWebGLCubeRenderTarget)
    )
      for (let k = 0; k < 6; k++) {
        if (Array.isArray(g.__webglFramebuffer[k]))
          for (let $ = 0; $ < g.__webglFramebuffer[k].length; $++)
            n.deleteFramebuffer(g.__webglFramebuffer[k][$]);
        else n.deleteFramebuffer(g.__webglFramebuffer[k]);
        g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer[k]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let k = 0; k < g.__webglFramebuffer.length; k++)
          n.deleteFramebuffer(g.__webglFramebuffer[k]);
      else n.deleteFramebuffer(g.__webglFramebuffer);
      if (
        (g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer),
        g.__webglMultisampledFramebuffer &&
          n.deleteFramebuffer(g.__webglMultisampledFramebuffer),
        g.__webglColorRenderbuffer)
      )
        for (let k = 0; k < g.__webglColorRenderbuffer.length; k++)
          g.__webglColorRenderbuffer[k] &&
            n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);
      g.__webglDepthRenderbuffer &&
        n.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const P = x.textures;
    for (let k = 0, $ = P.length; k < $; k++) {
      const W = i.get(P[k]);
      W.__webglTexture &&
        (n.deleteTexture(W.__webglTexture), o.memory.textures--),
        i.remove(P[k]);
    }
    i.remove(x);
  }
  let L = 0;
  function O() {
    L = 0;
  }
  function H() {
    const x = L;
    return (
      x >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            x +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (L += 1),
      x
    );
  }
  function ne(x) {
    const g = [];
    return (
      g.push(x.wrapS),
      g.push(x.wrapT),
      g.push(x.wrapR || 0),
      g.push(x.magFilter),
      g.push(x.minFilter),
      g.push(x.anisotropy),
      g.push(x.internalFormat),
      g.push(x.format),
      g.push(x.type),
      g.push(x.generateMipmaps),
      g.push(x.premultiplyAlpha),
      g.push(x.flipY),
      g.push(x.unpackAlignment),
      g.push(x.colorSpace),
      g.join()
    );
  }
  function se(x, g) {
    const P = i.get(x);
    if (
      (x.isVideoTexture && J(x),
      x.isRenderTargetTexture === !1 &&
        x.version > 0 &&
        P.__version !== x.version)
    ) {
      const k = x.image;
      if (k === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (k.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        ie(P, x, g);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, P.__webglTexture, n.TEXTURE0 + g);
  }
  function Z(x, g) {
    const P = i.get(x);
    if (x.version > 0 && P.__version !== x.version) {
      ie(P, x, g);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, P.__webglTexture, n.TEXTURE0 + g);
  }
  function ee(x, g) {
    const P = i.get(x);
    if (x.version > 0 && P.__version !== x.version) {
      ie(P, x, g);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, P.__webglTexture, n.TEXTURE0 + g);
  }
  function V(x, g) {
    const P = i.get(x);
    if (x.version > 0 && P.__version !== x.version) {
      de(P, x, g);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, P.__webglTexture, n.TEXTURE0 + g);
  }
  const me = { [rl]: n.REPEAT, [Gi]: n.CLAMP_TO_EDGE, [sl]: n.MIRRORED_REPEAT },
    Se = {
      [xn]: n.NEAREST,
      [Y_]: n.NEAREST_MIPMAP_NEAREST,
      [Ps]: n.NEAREST_MIPMAP_LINEAR,
      [An]: n.LINEAR,
      [Qo]: n.LINEAR_MIPMAP_NEAREST,
      [Wi]: n.LINEAR_MIPMAP_LINEAR,
    },
    we = {
      [J_]: n.NEVER,
      [rv]: n.ALWAYS,
      [Q_]: n.LESS,
      [ld]: n.LEQUAL,
      [ev]: n.EQUAL,
      [iv]: n.GEQUAL,
      [tv]: n.GREATER,
      [nv]: n.NOTEQUAL,
    };
  function Pe(x, g) {
    if (
      (g.type === qn &&
        e.has("OES_texture_float_linear") === !1 &&
        (g.magFilter === An ||
          g.magFilter === Qo ||
          g.magFilter === Ps ||
          g.magFilter === Wi ||
          g.minFilter === An ||
          g.minFilter === Qo ||
          g.minFilter === Ps ||
          g.minFilter === Wi) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      n.texParameteri(x, n.TEXTURE_WRAP_S, me[g.wrapS]),
      n.texParameteri(x, n.TEXTURE_WRAP_T, me[g.wrapT]),
      (x === n.TEXTURE_3D || x === n.TEXTURE_2D_ARRAY) &&
        n.texParameteri(x, n.TEXTURE_WRAP_R, me[g.wrapR]),
      n.texParameteri(x, n.TEXTURE_MAG_FILTER, Se[g.magFilter]),
      n.texParameteri(x, n.TEXTURE_MIN_FILTER, Se[g.minFilter]),
      g.compareFunction &&
        (n.texParameteri(x, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
        n.texParameteri(x, n.TEXTURE_COMPARE_FUNC, we[g.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        g.magFilter === xn ||
        (g.minFilter !== Ps && g.minFilter !== Wi) ||
        (g.type === qn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (g.anisotropy > 1 || i.get(g).__currentAnisotropy) {
        const P = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(
          x,
          P.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, r.getMaxAnisotropy()),
        ),
          (i.get(g).__currentAnisotropy = g.anisotropy);
      }
    }
  }
  function $e(x, g) {
    let P = !1;
    x.__webglInit === void 0 &&
      ((x.__webglInit = !0), g.addEventListener("dispose", D));
    const k = g.source;
    let $ = h.get(k);
    $ === void 0 && (($ = {}), h.set(k, $));
    const W = ne(g);
    if (W !== x.__cacheKey) {
      $[W] === void 0 &&
        (($[W] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (P = !0)),
        $[W].usedTimes++;
      const pe = $[x.__cacheKey];
      pe !== void 0 &&
        ($[x.__cacheKey].usedTimes--, pe.usedTimes === 0 && T(g)),
        (x.__cacheKey = W),
        (x.__webglTexture = $[W].texture);
    }
    return P;
  }
  function ie(x, g, P) {
    let k = n.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) &&
      (k = n.TEXTURE_2D_ARRAY),
      g.isData3DTexture && (k = n.TEXTURE_3D);
    const $ = $e(x, g),
      W = g.source;
    t.bindTexture(k, x.__webglTexture, n.TEXTURE0 + P);
    const pe = i.get(W);
    if (W.version !== pe.__version || $ === !0) {
      t.activeTexture(n.TEXTURE0 + P);
      const ue = Ke.getPrimaries(Ke.workingColorSpace),
        ge = g.colorSpace === hi ? null : Ke.getPrimaries(g.colorSpace),
        Ue =
          g.colorSpace === hi || ue === ge ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ue);
      let fe = S(g.image, !1, r.maxTextureSize);
      fe = ce(g, fe);
      const xe = s.convert(g.format, g.colorSpace),
        Ce = s.convert(g.type);
      let Ne = b(g.internalFormat, xe, Ce, g.colorSpace, g.isVideoTexture);
      Pe(k, g);
      let _e;
      const Oe = g.mipmaps,
        He = g.isVideoTexture !== !0,
        at = pe.__version === void 0 || $ === !0,
        N = W.dataReady,
        Ee = I(g, fe);
      if (g.isDepthTexture)
        (Ne = y(g.format === Ir, g.type)),
          at &&
            (He
              ? t.texStorage2D(n.TEXTURE_2D, 1, Ne, fe.width, fe.height)
              : t.texImage2D(
                  n.TEXTURE_2D,
                  0,
                  Ne,
                  fe.width,
                  fe.height,
                  0,
                  xe,
                  Ce,
                  null,
                ));
      else if (g.isDataTexture)
        if (Oe.length > 0) {
          He &&
            at &&
            t.texStorage2D(n.TEXTURE_2D, Ee, Ne, Oe[0].width, Oe[0].height);
          for (let Q = 0, oe = Oe.length; Q < oe; Q++)
            (_e = Oe[Q]),
              He
                ? N &&
                  t.texSubImage2D(
                    n.TEXTURE_2D,
                    Q,
                    0,
                    0,
                    _e.width,
                    _e.height,
                    xe,
                    Ce,
                    _e.data,
                  )
                : t.texImage2D(
                    n.TEXTURE_2D,
                    Q,
                    Ne,
                    _e.width,
                    _e.height,
                    0,
                    xe,
                    Ce,
                    _e.data,
                  );
          g.generateMipmaps = !1;
        } else
          He
            ? (at && t.texStorage2D(n.TEXTURE_2D, Ee, Ne, fe.width, fe.height),
              N &&
                t.texSubImage2D(
                  n.TEXTURE_2D,
                  0,
                  0,
                  0,
                  fe.width,
                  fe.height,
                  xe,
                  Ce,
                  fe.data,
                ))
            : t.texImage2D(
                n.TEXTURE_2D,
                0,
                Ne,
                fe.width,
                fe.height,
                0,
                xe,
                Ce,
                fe.data,
              );
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          He &&
            at &&
            t.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              Ee,
              Ne,
              Oe[0].width,
              Oe[0].height,
              fe.depth,
            );
          for (let Q = 0, oe = Oe.length; Q < oe; Q++)
            if (((_e = Oe[Q]), g.format !== _n))
              if (xe !== null)
                if (He) {
                  if (N)
                    if (g.layerUpdates.size > 0) {
                      const be = Zu(_e.width, _e.height, g.format, g.type);
                      for (const Te of g.layerUpdates) {
                        const Ve = _e.data.subarray(
                          (Te * be) / _e.data.BYTES_PER_ELEMENT,
                          ((Te + 1) * be) / _e.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          n.TEXTURE_2D_ARRAY,
                          Q,
                          0,
                          0,
                          Te,
                          _e.width,
                          _e.height,
                          1,
                          xe,
                          Ve,
                        );
                      }
                      g.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        n.TEXTURE_2D_ARRAY,
                        Q,
                        0,
                        0,
                        0,
                        _e.width,
                        _e.height,
                        fe.depth,
                        xe,
                        _e.data,
                      );
                } else
                  t.compressedTexImage3D(
                    n.TEXTURE_2D_ARRAY,
                    Q,
                    Ne,
                    _e.width,
                    _e.height,
                    fe.depth,
                    0,
                    _e.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              He
                ? N &&
                  t.texSubImage3D(
                    n.TEXTURE_2D_ARRAY,
                    Q,
                    0,
                    0,
                    0,
                    _e.width,
                    _e.height,
                    fe.depth,
                    xe,
                    Ce,
                    _e.data,
                  )
                : t.texImage3D(
                    n.TEXTURE_2D_ARRAY,
                    Q,
                    Ne,
                    _e.width,
                    _e.height,
                    fe.depth,
                    0,
                    xe,
                    Ce,
                    _e.data,
                  );
        } else {
          He &&
            at &&
            t.texStorage2D(n.TEXTURE_2D, Ee, Ne, Oe[0].width, Oe[0].height);
          for (let Q = 0, oe = Oe.length; Q < oe; Q++)
            (_e = Oe[Q]),
              g.format !== _n
                ? xe !== null
                  ? He
                    ? N &&
                      t.compressedTexSubImage2D(
                        n.TEXTURE_2D,
                        Q,
                        0,
                        0,
                        _e.width,
                        _e.height,
                        xe,
                        _e.data,
                      )
                    : t.compressedTexImage2D(
                        n.TEXTURE_2D,
                        Q,
                        Ne,
                        _e.width,
                        _e.height,
                        0,
                        _e.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : He
                  ? N &&
                    t.texSubImage2D(
                      n.TEXTURE_2D,
                      Q,
                      0,
                      0,
                      _e.width,
                      _e.height,
                      xe,
                      Ce,
                      _e.data,
                    )
                  : t.texImage2D(
                      n.TEXTURE_2D,
                      Q,
                      Ne,
                      _e.width,
                      _e.height,
                      0,
                      xe,
                      Ce,
                      _e.data,
                    );
        }
      else if (g.isDataArrayTexture)
        if (He) {
          if (
            (at &&
              t.texStorage3D(
                n.TEXTURE_2D_ARRAY,
                Ee,
                Ne,
                fe.width,
                fe.height,
                fe.depth,
              ),
            N)
          )
            if (g.layerUpdates.size > 0) {
              const Q = Zu(fe.width, fe.height, g.format, g.type);
              for (const oe of g.layerUpdates) {
                const be = fe.data.subarray(
                  (oe * Q) / fe.data.BYTES_PER_ELEMENT,
                  ((oe + 1) * Q) / fe.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  n.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  oe,
                  fe.width,
                  fe.height,
                  1,
                  xe,
                  Ce,
                  be,
                );
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(
                n.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                fe.width,
                fe.height,
                fe.depth,
                xe,
                Ce,
                fe.data,
              );
        } else
          t.texImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            Ne,
            fe.width,
            fe.height,
            fe.depth,
            0,
            xe,
            Ce,
            fe.data,
          );
      else if (g.isData3DTexture)
        He
          ? (at &&
              t.texStorage3D(
                n.TEXTURE_3D,
                Ee,
                Ne,
                fe.width,
                fe.height,
                fe.depth,
              ),
            N &&
              t.texSubImage3D(
                n.TEXTURE_3D,
                0,
                0,
                0,
                0,
                fe.width,
                fe.height,
                fe.depth,
                xe,
                Ce,
                fe.data,
              ))
          : t.texImage3D(
              n.TEXTURE_3D,
              0,
              Ne,
              fe.width,
              fe.height,
              fe.depth,
              0,
              xe,
              Ce,
              fe.data,
            );
      else if (g.isFramebufferTexture) {
        if (at)
          if (He) t.texStorage2D(n.TEXTURE_2D, Ee, Ne, fe.width, fe.height);
          else {
            let Q = fe.width,
              oe = fe.height;
            for (let be = 0; be < Ee; be++)
              t.texImage2D(n.TEXTURE_2D, be, Ne, Q, oe, 0, xe, Ce, null),
                (Q >>= 1),
                (oe >>= 1);
          }
      } else if (Oe.length > 0) {
        if (He && at) {
          const Q = K(Oe[0]);
          t.texStorage2D(n.TEXTURE_2D, Ee, Ne, Q.width, Q.height);
        }
        for (let Q = 0, oe = Oe.length; Q < oe; Q++)
          (_e = Oe[Q]),
            He
              ? N && t.texSubImage2D(n.TEXTURE_2D, Q, 0, 0, xe, Ce, _e)
              : t.texImage2D(n.TEXTURE_2D, Q, Ne, xe, Ce, _e);
        g.generateMipmaps = !1;
      } else if (He) {
        if (at) {
          const Q = K(fe);
          t.texStorage2D(n.TEXTURE_2D, Ee, Ne, Q.width, Q.height);
        }
        N && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, xe, Ce, fe);
      } else t.texImage2D(n.TEXTURE_2D, 0, Ne, xe, Ce, fe);
      m(g) && d(k), (pe.__version = W.version), g.onUpdate && g.onUpdate(g);
    }
    x.__version = g.version;
  }
  function de(x, g, P) {
    if (g.image.length !== 6) return;
    const k = $e(x, g),
      $ = g.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, x.__webglTexture, n.TEXTURE0 + P);
    const W = i.get($);
    if ($.version !== W.__version || k === !0) {
      t.activeTexture(n.TEXTURE0 + P);
      const pe = Ke.getPrimaries(Ke.workingColorSpace),
        ue = g.colorSpace === hi ? null : Ke.getPrimaries(g.colorSpace),
        ge =
          g.colorSpace === hi || pe === ue ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge);
      const Ue = g.isCompressedTexture || g.image[0].isCompressedTexture,
        fe = g.image[0] && g.image[0].isDataTexture,
        xe = [];
      for (let oe = 0; oe < 6; oe++)
        !Ue && !fe
          ? (xe[oe] = S(g.image[oe], !0, r.maxCubemapSize))
          : (xe[oe] = fe ? g.image[oe].image : g.image[oe]),
          (xe[oe] = ce(g, xe[oe]));
      const Ce = xe[0],
        Ne = s.convert(g.format, g.colorSpace),
        _e = s.convert(g.type),
        Oe = b(g.internalFormat, Ne, _e, g.colorSpace),
        He = g.isVideoTexture !== !0,
        at = W.__version === void 0 || k === !0,
        N = $.dataReady;
      let Ee = I(g, Ce);
      Pe(n.TEXTURE_CUBE_MAP, g);
      let Q;
      if (Ue) {
        He &&
          at &&
          t.texStorage2D(n.TEXTURE_CUBE_MAP, Ee, Oe, Ce.width, Ce.height);
        for (let oe = 0; oe < 6; oe++) {
          Q = xe[oe].mipmaps;
          for (let be = 0; be < Q.length; be++) {
            const Te = Q[be];
            g.format !== _n
              ? Ne !== null
                ? He
                  ? N &&
                    t.compressedTexSubImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                      be,
                      0,
                      0,
                      Te.width,
                      Te.height,
                      Ne,
                      Te.data,
                    )
                  : t.compressedTexImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                      be,
                      Oe,
                      Te.width,
                      Te.height,
                      0,
                      Te.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : He
                ? N &&
                  t.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be,
                    0,
                    0,
                    Te.width,
                    Te.height,
                    Ne,
                    _e,
                    Te.data,
                  )
                : t.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be,
                    Oe,
                    Te.width,
                    Te.height,
                    0,
                    Ne,
                    _e,
                    Te.data,
                  );
          }
        }
      } else {
        if (((Q = g.mipmaps), He && at)) {
          Q.length > 0 && Ee++;
          const oe = K(xe[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, Ee, Oe, oe.width, oe.height);
        }
        for (let oe = 0; oe < 6; oe++)
          if (fe) {
            He
              ? N &&
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  0,
                  0,
                  0,
                  xe[oe].width,
                  xe[oe].height,
                  Ne,
                  _e,
                  xe[oe].data,
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  0,
                  Oe,
                  xe[oe].width,
                  xe[oe].height,
                  0,
                  Ne,
                  _e,
                  xe[oe].data,
                );
            for (let be = 0; be < Q.length; be++) {
              const Ve = Q[be].image[oe].image;
              He
                ? N &&
                  t.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be + 1,
                    0,
                    0,
                    Ve.width,
                    Ve.height,
                    Ne,
                    _e,
                    Ve.data,
                  )
                : t.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be + 1,
                    Oe,
                    Ve.width,
                    Ve.height,
                    0,
                    Ne,
                    _e,
                    Ve.data,
                  );
            }
          } else {
            He
              ? N &&
                t.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  0,
                  0,
                  0,
                  Ne,
                  _e,
                  xe[oe],
                )
              : t.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                  0,
                  Oe,
                  Ne,
                  _e,
                  xe[oe],
                );
            for (let be = 0; be < Q.length; be++) {
              const Te = Q[be];
              He
                ? N &&
                  t.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be + 1,
                    0,
                    0,
                    Ne,
                    _e,
                    Te.image[oe],
                  )
                : t.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
                    be + 1,
                    Oe,
                    Ne,
                    _e,
                    Te.image[oe],
                  );
            }
          }
      }
      m(g) && d(n.TEXTURE_CUBE_MAP),
        (W.__version = $.version),
        g.onUpdate && g.onUpdate(g);
    }
    x.__version = g.version;
  }
  function Me(x, g, P, k, $, W) {
    const pe = s.convert(P.format, P.colorSpace),
      ue = s.convert(P.type),
      ge = b(P.internalFormat, pe, ue, P.colorSpace),
      Ue = i.get(g),
      fe = i.get(P);
    if (((fe.__renderTarget = g), !Ue.__hasExternalTextures)) {
      const xe = Math.max(1, g.width >> W),
        Ce = Math.max(1, g.height >> W);
      $ === n.TEXTURE_3D || $ === n.TEXTURE_2D_ARRAY
        ? t.texImage3D($, W, ge, xe, Ce, g.depth, 0, pe, ue, null)
        : t.texImage2D($, W, ge, xe, Ce, 0, pe, ue, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, x),
      q(g)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            k,
            $,
            fe.__webglTexture,
            0,
            j(g),
          )
        : ($ === n.TEXTURE_2D ||
            ($ >= n.TEXTURE_CUBE_MAP_POSITIVE_X &&
              $ <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          n.framebufferTexture2D(n.FRAMEBUFFER, k, $, fe.__webglTexture, W),
      t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function U(x, g, P) {
    if ((n.bindRenderbuffer(n.RENDERBUFFER, x), g.depthBuffer)) {
      const k = g.depthTexture,
        $ = k && k.isDepthTexture ? k.type : null,
        W = y(g.stencilBuffer, $),
        pe = g.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
        ue = j(g);
      q(g)
        ? a.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            ue,
            W,
            g.width,
            g.height,
          )
        : P
          ? n.renderbufferStorageMultisample(
              n.RENDERBUFFER,
              ue,
              W,
              g.width,
              g.height,
            )
          : n.renderbufferStorage(n.RENDERBUFFER, W, g.width, g.height),
        n.framebufferRenderbuffer(n.FRAMEBUFFER, pe, n.RENDERBUFFER, x);
    } else {
      const k = g.textures;
      for (let $ = 0; $ < k.length; $++) {
        const W = k[$],
          pe = s.convert(W.format, W.colorSpace),
          ue = s.convert(W.type),
          ge = b(W.internalFormat, pe, ue, W.colorSpace),
          Ue = j(g);
        P && q(g) === !1
          ? n.renderbufferStorageMultisample(
              n.RENDERBUFFER,
              Ue,
              ge,
              g.width,
              g.height,
            )
          : q(g)
            ? a.renderbufferStorageMultisampleEXT(
                n.RENDERBUFFER,
                Ue,
                ge,
                g.width,
                g.height,
              )
            : n.renderbufferStorage(n.RENDERBUFFER, ge, g.width, g.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function re(x, g) {
    if (g && g.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(n.FRAMEBUFFER, x),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const k = i.get(g.depthTexture);
    (k.__renderTarget = g),
      (!k.__webglTexture ||
        g.depthTexture.image.width !== g.width ||
        g.depthTexture.image.height !== g.height) &&
        ((g.depthTexture.image.width = g.width),
        (g.depthTexture.image.height = g.height),
        (g.depthTexture.needsUpdate = !0)),
      se(g.depthTexture, 0);
    const $ = k.__webglTexture,
      W = j(g);
    if (g.depthTexture.format === br)
      q(g)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            n.DEPTH_ATTACHMENT,
            n.TEXTURE_2D,
            $,
            0,
            W,
          )
        : n.framebufferTexture2D(
            n.FRAMEBUFFER,
            n.DEPTH_ATTACHMENT,
            n.TEXTURE_2D,
            $,
            0,
          );
    else if (g.depthTexture.format === Ir)
      q(g)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            n.DEPTH_STENCIL_ATTACHMENT,
            n.TEXTURE_2D,
            $,
            0,
            W,
          )
        : n.framebufferTexture2D(
            n.FRAMEBUFFER,
            n.DEPTH_STENCIL_ATTACHMENT,
            n.TEXTURE_2D,
            $,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function ae(x) {
    const g = i.get(x),
      P = x.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== x.depthTexture) {
      const k = x.depthTexture;
      if ((g.__depthDisposeCallback && g.__depthDisposeCallback(), k)) {
        const $ = () => {
          delete g.__boundDepthTexture,
            delete g.__depthDisposeCallback,
            k.removeEventListener("dispose", $);
        };
        k.addEventListener("dispose", $), (g.__depthDisposeCallback = $);
      }
      g.__boundDepthTexture = k;
    }
    if (x.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (P)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      re(g.__webglFramebuffer, x);
    } else if (P) {
      g.__webglDepthbuffer = [];
      for (let k = 0; k < 6; k++)
        if (
          (t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[k]),
          g.__webglDepthbuffer[k] === void 0)
        )
          (g.__webglDepthbuffer[k] = n.createRenderbuffer()),
            U(g.__webglDepthbuffer[k], x, !1);
        else {
          const $ = x.stencilBuffer
              ? n.DEPTH_STENCIL_ATTACHMENT
              : n.DEPTH_ATTACHMENT,
            W = g.__webglDepthbuffer[k];
          n.bindRenderbuffer(n.RENDERBUFFER, W),
            n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, W);
        }
    } else if (
      (t.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer),
      g.__webglDepthbuffer === void 0)
    )
      (g.__webglDepthbuffer = n.createRenderbuffer()),
        U(g.__webglDepthbuffer, x, !1);
    else {
      const k = x.stencilBuffer
          ? n.DEPTH_STENCIL_ATTACHMENT
          : n.DEPTH_ATTACHMENT,
        $ = g.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, $),
        n.framebufferRenderbuffer(n.FRAMEBUFFER, k, n.RENDERBUFFER, $);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function le(x, g, P) {
    const k = i.get(x);
    g !== void 0 &&
      Me(
        k.__webglFramebuffer,
        x,
        x.texture,
        n.COLOR_ATTACHMENT0,
        n.TEXTURE_2D,
        0,
      ),
      P !== void 0 && ae(x);
  }
  function Ie(x) {
    const g = x.texture,
      P = i.get(x),
      k = i.get(g);
    x.addEventListener("dispose", C);
    const $ = x.textures,
      W = x.isWebGLCubeRenderTarget === !0,
      pe = $.length > 1;
    if (
      (pe ||
        (k.__webglTexture === void 0 && (k.__webglTexture = n.createTexture()),
        (k.__version = g.version),
        o.memory.textures++),
      W)
    ) {
      P.__webglFramebuffer = [];
      for (let ue = 0; ue < 6; ue++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          P.__webglFramebuffer[ue] = [];
          for (let ge = 0; ge < g.mipmaps.length; ge++)
            P.__webglFramebuffer[ue][ge] = n.createFramebuffer();
        } else P.__webglFramebuffer[ue] = n.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        P.__webglFramebuffer = [];
        for (let ue = 0; ue < g.mipmaps.length; ue++)
          P.__webglFramebuffer[ue] = n.createFramebuffer();
      } else P.__webglFramebuffer = n.createFramebuffer();
      if (pe)
        for (let ue = 0, ge = $.length; ue < ge; ue++) {
          const Ue = i.get($[ue]);
          Ue.__webglTexture === void 0 &&
            ((Ue.__webglTexture = n.createTexture()), o.memory.textures++);
        }
      if (x.samples > 0 && q(x) === !1) {
        (P.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (P.__webglColorRenderbuffer = []),
          t.bindFramebuffer(n.FRAMEBUFFER, P.__webglMultisampledFramebuffer);
        for (let ue = 0; ue < $.length; ue++) {
          const ge = $[ue];
          (P.__webglColorRenderbuffer[ue] = n.createRenderbuffer()),
            n.bindRenderbuffer(n.RENDERBUFFER, P.__webglColorRenderbuffer[ue]);
          const Ue = s.convert(ge.format, ge.colorSpace),
            fe = s.convert(ge.type),
            xe = b(
              ge.internalFormat,
              Ue,
              fe,
              ge.colorSpace,
              x.isXRRenderTarget === !0,
            ),
            Ce = j(x);
          n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Ce,
            xe,
            x.width,
            x.height,
          ),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + ue,
              n.RENDERBUFFER,
              P.__webglColorRenderbuffer[ue],
            );
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null),
          x.depthBuffer &&
            ((P.__webglDepthRenderbuffer = n.createRenderbuffer()),
            U(P.__webglDepthRenderbuffer, x, !0)),
          t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (W) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, k.__webglTexture),
        Pe(n.TEXTURE_CUBE_MAP, g);
      for (let ue = 0; ue < 6; ue++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let ge = 0; ge < g.mipmaps.length; ge++)
            Me(
              P.__webglFramebuffer[ue][ge],
              x,
              g,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
              ge,
            );
        else
          Me(
            P.__webglFramebuffer[ue],
            x,
            g,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_CUBE_MAP_POSITIVE_X + ue,
            0,
          );
      m(g) && d(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (pe) {
      for (let ue = 0, ge = $.length; ue < ge; ue++) {
        const Ue = $[ue],
          fe = i.get(Ue);
        t.bindTexture(n.TEXTURE_2D, fe.__webglTexture),
          Pe(n.TEXTURE_2D, Ue),
          Me(
            P.__webglFramebuffer,
            x,
            Ue,
            n.COLOR_ATTACHMENT0 + ue,
            n.TEXTURE_2D,
            0,
          ),
          m(Ue) && d(n.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ue = n.TEXTURE_2D;
      if (
        ((x.isWebGL3DRenderTarget || x.isWebGLArrayRenderTarget) &&
          (ue = x.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
        t.bindTexture(ue, k.__webglTexture),
        Pe(ue, g),
        g.mipmaps && g.mipmaps.length > 0)
      )
        for (let ge = 0; ge < g.mipmaps.length; ge++)
          Me(P.__webglFramebuffer[ge], x, g, n.COLOR_ATTACHMENT0, ue, ge);
      else Me(P.__webglFramebuffer, x, g, n.COLOR_ATTACHMENT0, ue, 0);
      m(g) && d(ue), t.unbindTexture();
    }
    x.depthBuffer && ae(x);
  }
  function w(x) {
    const g = x.textures;
    for (let P = 0, k = g.length; P < k; P++) {
      const $ = g[P];
      if (m($)) {
        const W = A(x),
          pe = i.get($).__webglTexture;
        t.bindTexture(W, pe), d(W), t.unbindTexture();
      }
    }
  }
  const R = [],
    v = [];
  function te(x) {
    if (x.samples > 0) {
      if (q(x) === !1) {
        const g = x.textures,
          P = x.width,
          k = x.height;
        let $ = n.COLOR_BUFFER_BIT;
        const W = x.stencilBuffer
            ? n.DEPTH_STENCIL_ATTACHMENT
            : n.DEPTH_ATTACHMENT,
          pe = i.get(x),
          ue = g.length > 1;
        if (ue)
          for (let ge = 0; ge < g.length; ge++)
            t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglMultisampledFramebuffer),
              n.framebufferRenderbuffer(
                n.FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ge,
                n.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglFramebuffer),
              n.framebufferTexture2D(
                n.DRAW_FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ge,
                n.TEXTURE_2D,
                null,
                0,
              );
        t.bindFramebuffer(
          n.READ_FRAMEBUFFER,
          pe.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(n.DRAW_FRAMEBUFFER, pe.__webglFramebuffer);
        for (let ge = 0; ge < g.length; ge++) {
          if (
            (x.resolveDepthBuffer &&
              (x.depthBuffer && ($ |= n.DEPTH_BUFFER_BIT),
              x.stencilBuffer &&
                x.resolveStencilBuffer &&
                ($ |= n.STENCIL_BUFFER_BIT)),
            ue)
          ) {
            n.framebufferRenderbuffer(
              n.READ_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.RENDERBUFFER,
              pe.__webglColorRenderbuffer[ge],
            );
            const Ue = i.get(g[ge]).__webglTexture;
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_2D,
              Ue,
              0,
            );
          }
          n.blitFramebuffer(0, 0, P, k, 0, 0, P, k, $, n.NEAREST),
            l === !0 &&
              ((R.length = 0),
              (v.length = 0),
              R.push(n.COLOR_ATTACHMENT0 + ge),
              x.depthBuffer &&
                x.resolveDepthBuffer === !1 &&
                (R.push(W),
                v.push(W),
                n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, v)),
              n.invalidateFramebuffer(n.READ_FRAMEBUFFER, R));
        }
        if (
          (t.bindFramebuffer(n.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
          ue)
        )
          for (let ge = 0; ge < g.length; ge++) {
            t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglMultisampledFramebuffer),
              n.framebufferRenderbuffer(
                n.FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ge,
                n.RENDERBUFFER,
                pe.__webglColorRenderbuffer[ge],
              );
            const Ue = i.get(g[ge]).__webglTexture;
            t.bindFramebuffer(n.FRAMEBUFFER, pe.__webglFramebuffer),
              n.framebufferTexture2D(
                n.DRAW_FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ge,
                n.TEXTURE_2D,
                Ue,
                0,
              );
          }
        t.bindFramebuffer(
          n.DRAW_FRAMEBUFFER,
          pe.__webglMultisampledFramebuffer,
        );
      } else if (x.depthBuffer && x.resolveDepthBuffer === !1 && l) {
        const g = x.stencilBuffer
          ? n.DEPTH_STENCIL_ATTACHMENT
          : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function j(x) {
    return Math.min(r.maxSamples, x.samples);
  }
  function q(x) {
    const g = i.get(x);
    return (
      x.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function J(x) {
    const g = o.render.frame;
    u.get(x) !== g && (u.set(x, g), x.update());
  }
  function ce(x, g) {
    const P = x.colorSpace,
      k = x.format,
      $ = x.type;
    return (
      x.isCompressedTexture === !0 ||
        x.isVideoTexture === !0 ||
        (P !== Ur &&
          P !== hi &&
          (Ke.getTransfer(P) === st
            ? (k !== _n || $ !== Kn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                P,
              ))),
      g
    );
  }
  function K(x) {
    return (
      typeof HTMLImageElement < "u" && x instanceof HTMLImageElement
        ? ((c.width = x.naturalWidth || x.width),
          (c.height = x.naturalHeight || x.height))
        : typeof VideoFrame < "u" && x instanceof VideoFrame
          ? ((c.width = x.displayWidth), (c.height = x.displayHeight))
          : ((c.width = x.width), (c.height = x.height)),
      c
    );
  }
  (this.allocateTextureUnit = H),
    (this.resetTextureUnits = O),
    (this.setTexture2D = se),
    (this.setTexture2DArray = Z),
    (this.setTexture3D = ee),
    (this.setTextureCube = V),
    (this.rebindTextures = le),
    (this.setupRenderTarget = Ie),
    (this.updateRenderTargetMipmap = w),
    (this.updateMultisampleRenderTarget = te),
    (this.setupDepthRenderbuffer = ae),
    (this.setupFrameBufferTexture = Me),
    (this.useMultisampledRTT = q);
}
function yE(n, e) {
  function t(i, r = hi) {
    let s;
    const o = Ke.getTransfer(r);
    if (i === Kn) return n.UNSIGNED_BYTE;
    if (i === ic) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === rc) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Qh) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === Zh) return n.BYTE;
    if (i === Jh) return n.SHORT;
    if (i === ps) return n.UNSIGNED_SHORT;
    if (i === nc) return n.INT;
    if (i === $i) return n.UNSIGNED_INT;
    if (i === qn) return n.FLOAT;
    if (i === vs) return n.HALF_FLOAT;
    if (i === ed) return n.ALPHA;
    if (i === td) return n.RGB;
    if (i === _n) return n.RGBA;
    if (i === nd) return n.LUMINANCE;
    if (i === id) return n.LUMINANCE_ALPHA;
    if (i === br) return n.DEPTH_COMPONENT;
    if (i === Ir) return n.DEPTH_STENCIL;
    if (i === rd) return n.RED;
    if (i === sc) return n.RED_INTEGER;
    if (i === sd) return n.RG;
    if (i === oc) return n.RG_INTEGER;
    if (i === ac) return n.RGBA_INTEGER;
    if (i === no || i === io || i === ro || i === so)
      if (o === st)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (i === no) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === io) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === ro) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === so) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (i === no) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === io) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === ro) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === so) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (i === ol || i === al || i === ll || i === cl)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (i === ol) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === al) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === ll) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === cl) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === ul || i === fl || i === hl)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (i === ul || i === fl)
          return o === st ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === hl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      i === dl ||
      i === pl ||
      i === ml ||
      i === gl ||
      i === _l ||
      i === vl ||
      i === xl ||
      i === Sl ||
      i === Ml ||
      i === El ||
      i === yl ||
      i === Tl ||
      i === bl ||
      i === Al
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (i === dl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === pl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === ml)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === gl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === _l)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === vl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === xl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === Sl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === Ml)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === El)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === yl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === Tl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === bl)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === Al)
          return o === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === oo || i === wl || i === Rl)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (i === oo)
          return o === st
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === wl) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === Rl) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === od || i === Cl || i === Pl || i === Ll)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (i === oo) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === Cl) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === Pl) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === Ll) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === Dr ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const TE = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  bE = `
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

}`;
class AE {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, i) {
    if (this.texture === null) {
      const r = new Ot(),
        s = e.properties.get(r);
      (s.__webglTexture = t.texture),
        (t.depthNear !== i.depthNear || t.depthFar !== i.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        i = new xi({
          vertexShader: TE,
          fragmentShader: bE,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new wn(new Io(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class wE extends Fr {
  constructor(e, t) {
    super();
    const i = this;
    let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      f = null,
      h = null,
      p = null,
      _ = null;
    const S = new AE(),
      m = t.getContextAttributes();
    let d = null,
      A = null;
    const b = [],
      y = [],
      I = new Qe();
    let D = null;
    const C = new Zt();
    C.viewport = new ot();
    const B = new Zt();
    B.viewport = new ot();
    const T = [C, B],
      M = new jv();
    let L = null,
      O = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (ie) {
        let de = b[ie];
        return (
          de === void 0 && ((de = new Ma()), (b[ie] = de)),
          de.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (ie) {
        let de = b[ie];
        return (
          de === void 0 && ((de = new Ma()), (b[ie] = de)), de.getGripSpace()
        );
      }),
      (this.getHand = function (ie) {
        let de = b[ie];
        return (
          de === void 0 && ((de = new Ma()), (b[ie] = de)), de.getHandSpace()
        );
      });
    function H(ie) {
      const de = y.indexOf(ie.inputSource);
      if (de === -1) return;
      const Me = b[de];
      Me !== void 0 &&
        (Me.update(ie.inputSource, ie.frame, c || o),
        Me.dispatchEvent({ type: ie.type, data: ie.inputSource }));
    }
    function ne() {
      r.removeEventListener("select", H),
        r.removeEventListener("selectstart", H),
        r.removeEventListener("selectend", H),
        r.removeEventListener("squeeze", H),
        r.removeEventListener("squeezestart", H),
        r.removeEventListener("squeezeend", H),
        r.removeEventListener("end", ne),
        r.removeEventListener("inputsourceschange", se);
      for (let ie = 0; ie < b.length; ie++) {
        const de = y[ie];
        de !== null && ((y[ie] = null), b[ie].disconnect(de));
      }
      (L = null),
        (O = null),
        S.reset(),
        e.setRenderTarget(d),
        (p = null),
        (h = null),
        (f = null),
        (r = null),
        (A = null),
        $e.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(D),
        e.setSize(I.width, I.height, !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (ie) {
      (s = ie),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          );
    }),
      (this.setReferenceSpaceType = function (ie) {
        (a = ie),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (ie) {
        c = ie;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : p;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return _;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (ie) {
        if (((r = ie), r !== null)) {
          if (
            ((d = e.getRenderTarget()),
            r.addEventListener("select", H),
            r.addEventListener("selectstart", H),
            r.addEventListener("selectend", H),
            r.addEventListener("squeeze", H),
            r.addEventListener("squeezestart", H),
            r.addEventListener("squeezeend", H),
            r.addEventListener("end", ne),
            r.addEventListener("inputsourceschange", se),
            m.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (D = e.getPixelRatio()),
            e.getSize(I),
            typeof XRWebGLBinding < "u" &&
              "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let Me = null,
              U = null,
              re = null;
            m.depth &&
              ((re = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (Me = m.stencil ? Ir : br),
              (U = m.stencil ? Dr : $i));
            const ae = {
              colorFormat: t.RGBA8,
              depthFormat: re,
              scaleFactor: s,
            };
            (f = new XRWebGLBinding(r, t)),
              (h = f.createProjectionLayer(ae)),
              r.updateRenderState({ layers: [h] }),
              e.setPixelRatio(1),
              e.setSize(h.textureWidth, h.textureHeight, !1),
              (A = new Yi(h.textureWidth, h.textureHeight, {
                format: _n,
                type: Kn,
                depthTexture: new Sd(
                  h.textureWidth,
                  h.textureHeight,
                  U,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Me,
                ),
                stencilBuffer: m.stencil,
                colorSpace: e.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: h.ignoreDepthValues === !1,
              }));
          } else {
            const Me = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: s,
            };
            (p = new XRWebGLLayer(r, t, Me)),
              r.updateRenderState({ baseLayer: p }),
              e.setPixelRatio(1),
              e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
              (A = new Yi(p.framebufferWidth, p.framebufferHeight, {
                format: _n,
                type: Kn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          }
          (A.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            $e.setContext(r),
            $e.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return S.getDepthTexture();
      });
    function se(ie) {
      for (let de = 0; de < ie.removed.length; de++) {
        const Me = ie.removed[de],
          U = y.indexOf(Me);
        U >= 0 && ((y[U] = null), b[U].disconnect(Me));
      }
      for (let de = 0; de < ie.added.length; de++) {
        const Me = ie.added[de];
        let U = y.indexOf(Me);
        if (U === -1) {
          for (let ae = 0; ae < b.length; ae++)
            if (ae >= y.length) {
              y.push(Me), (U = ae);
              break;
            } else if (y[ae] === null) {
              (y[ae] = Me), (U = ae);
              break;
            }
          if (U === -1) break;
        }
        const re = b[U];
        re && re.connect(Me);
      }
    }
    const Z = new G(),
      ee = new G();
    function V(ie, de, Me) {
      Z.setFromMatrixPosition(de.matrixWorld),
        ee.setFromMatrixPosition(Me.matrixWorld);
      const U = Z.distanceTo(ee),
        re = de.projectionMatrix.elements,
        ae = Me.projectionMatrix.elements,
        le = re[14] / (re[10] - 1),
        Ie = re[14] / (re[10] + 1),
        w = (re[9] + 1) / re[5],
        R = (re[9] - 1) / re[5],
        v = (re[8] - 1) / re[0],
        te = (ae[8] + 1) / ae[0],
        j = le * v,
        q = le * te,
        J = U / (-v + te),
        ce = J * -v;
      if (
        (de.matrixWorld.decompose(ie.position, ie.quaternion, ie.scale),
        ie.translateX(ce),
        ie.translateZ(J),
        ie.matrixWorld.compose(ie.position, ie.quaternion, ie.scale),
        ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),
        re[10] === -1)
      )
        ie.projectionMatrix.copy(de.projectionMatrix),
          ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);
      else {
        const K = le + J,
          x = Ie + J,
          g = j - ce,
          P = q + (U - ce),
          k = ((w * Ie) / x) * K,
          $ = ((R * Ie) / x) * K;
        ie.projectionMatrix.makePerspective(g, P, k, $, K, x),
          ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert();
      }
    }
    function me(ie, de) {
      de === null
        ? ie.matrixWorld.copy(ie.matrix)
        : ie.matrixWorld.multiplyMatrices(de.matrixWorld, ie.matrix),
        ie.matrixWorldInverse.copy(ie.matrixWorld).invert();
    }
    this.updateCamera = function (ie) {
      if (r === null) return;
      let de = ie.near,
        Me = ie.far;
      S.texture !== null &&
        (S.depthNear > 0 && (de = S.depthNear),
        S.depthFar > 0 && (Me = S.depthFar)),
        (M.near = B.near = C.near = de),
        (M.far = B.far = C.far = Me),
        (L !== M.near || O !== M.far) &&
          (r.updateRenderState({ depthNear: M.near, depthFar: M.far }),
          (L = M.near),
          (O = M.far)),
        (C.layers.mask = ie.layers.mask | 2),
        (B.layers.mask = ie.layers.mask | 4),
        (M.layers.mask = C.layers.mask | B.layers.mask);
      const U = ie.parent,
        re = M.cameras;
      me(M, U);
      for (let ae = 0; ae < re.length; ae++) me(re[ae], U);
      re.length === 2
        ? V(M, C, B)
        : M.projectionMatrix.copy(C.projectionMatrix),
        Se(ie, M, U);
    };
    function Se(ie, de, Me) {
      Me === null
        ? ie.matrix.copy(de.matrixWorld)
        : (ie.matrix.copy(Me.matrixWorld),
          ie.matrix.invert(),
          ie.matrix.multiply(de.matrixWorld)),
        ie.matrix.decompose(ie.position, ie.quaternion, ie.scale),
        ie.updateMatrixWorld(!0),
        ie.projectionMatrix.copy(de.projectionMatrix),
        ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),
        ie.isPerspectiveCamera &&
          ((ie.fov = Dl * 2 * Math.atan(1 / ie.projectionMatrix.elements[5])),
          (ie.zoom = 1));
    }
    (this.getCamera = function () {
      return M;
    }),
      (this.getFoveation = function () {
        if (!(h === null && p === null)) return l;
      }),
      (this.setFoveation = function (ie) {
        (l = ie),
          h !== null && (h.fixedFoveation = ie),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = ie);
      }),
      (this.hasDepthSensing = function () {
        return S.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return S.getMesh(M);
      });
    let we = null;
    function Pe(ie, de) {
      if (((u = de.getViewerPose(c || o)), (_ = de), u !== null)) {
        const Me = u.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(A, p.framebuffer),
          e.setRenderTarget(A));
        let U = !1;
        Me.length !== M.cameras.length && ((M.cameras.length = 0), (U = !0));
        for (let le = 0; le < Me.length; le++) {
          const Ie = Me[le];
          let w = null;
          if (p !== null) w = p.getViewport(Ie);
          else {
            const v = f.getViewSubImage(h, Ie);
            (w = v.viewport),
              le === 0 &&
                (e.setRenderTargetTextures(
                  A,
                  v.colorTexture,
                  h.ignoreDepthValues ? void 0 : v.depthStencilTexture,
                ),
                e.setRenderTarget(A));
          }
          let R = T[le];
          R === void 0 &&
            ((R = new Zt()),
            R.layers.enable(le),
            (R.viewport = new ot()),
            (T[le] = R)),
            R.matrix.fromArray(Ie.transform.matrix),
            R.matrix.decompose(R.position, R.quaternion, R.scale),
            R.projectionMatrix.fromArray(Ie.projectionMatrix),
            R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),
            R.viewport.set(w.x, w.y, w.width, w.height),
            le === 0 &&
              (M.matrix.copy(R.matrix),
              M.matrix.decompose(M.position, M.quaternion, M.scale)),
            U === !0 && M.cameras.push(R);
        }
        const re = r.enabledFeatures;
        if (
          re &&
          re.includes("depth-sensing") &&
          r.depthUsage == "gpu-optimized" &&
          f
        ) {
          const le = f.getDepthInformation(Me[0]);
          le && le.isValid && le.texture && S.init(e, le, r.renderState);
        }
      }
      for (let Me = 0; Me < b.length; Me++) {
        const U = y[Me],
          re = b[Me];
        U !== null && re !== void 0 && re.update(U, de, c || o);
      }
      we && we(ie, de),
        de.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: de }),
        (_ = null);
    }
    const $e = new Ed();
    $e.setAnimationLoop(Pe),
      (this.setAnimationLoop = function (ie) {
        we = ie;
      }),
      (this.dispose = function () {});
  }
}
const Ni = new Dn(),
  RE = new pt();
function CE(n, e) {
  function t(m, d) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix);
  }
  function i(m, d) {
    d.color.getRGB(m.fogColor.value, _d(n)),
      d.isFog
        ? ((m.fogNear.value = d.near), (m.fogFar.value = d.far))
        : d.isFogExp2 && (m.fogDensity.value = d.density);
  }
  function r(m, d, A, b, y) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial
      ? s(m, d)
      : d.isMeshToonMaterial
        ? (s(m, d), f(m, d))
        : d.isMeshPhongMaterial
          ? (s(m, d), u(m, d))
          : d.isMeshStandardMaterial
            ? (s(m, d), h(m, d), d.isMeshPhysicalMaterial && p(m, d, y))
            : d.isMeshMatcapMaterial
              ? (s(m, d), _(m, d))
              : d.isMeshDepthMaterial
                ? s(m, d)
                : d.isMeshDistanceMaterial
                  ? (s(m, d), S(m, d))
                  : d.isMeshNormalMaterial
                    ? s(m, d)
                    : d.isLineBasicMaterial
                      ? (o(m, d), d.isLineDashedMaterial && a(m, d))
                      : d.isPointsMaterial
                        ? l(m, d, A, b)
                        : d.isSpriteMaterial
                          ? c(m, d)
                          : d.isShadowMaterial
                            ? (m.color.value.copy(d.color),
                              (m.opacity.value = d.opacity))
                            : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(m, d) {
    (m.opacity.value = d.opacity),
      d.color && m.diffuse.value.copy(d.color),
      d.emissive &&
        m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.bumpMap &&
        ((m.bumpMap.value = d.bumpMap),
        t(d.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = d.bumpScale),
        d.side === Vt && (m.bumpScale.value *= -1)),
      d.normalMap &&
        ((m.normalMap.value = d.normalMap),
        t(d.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(d.normalScale),
        d.side === Vt && m.normalScale.value.negate()),
      d.displacementMap &&
        ((m.displacementMap.value = d.displacementMap),
        t(d.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = d.displacementScale),
        (m.displacementBias.value = d.displacementBias)),
      d.emissiveMap &&
        ((m.emissiveMap.value = d.emissiveMap),
        t(d.emissiveMap, m.emissiveMapTransform)),
      d.specularMap &&
        ((m.specularMap.value = d.specularMap),
        t(d.specularMap, m.specularMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    const A = e.get(d),
      b = A.envMap,
      y = A.envMapRotation;
    b &&
      ((m.envMap.value = b),
      Ni.copy(y),
      (Ni.x *= -1),
      (Ni.y *= -1),
      (Ni.z *= -1),
      b.isCubeTexture &&
        b.isRenderTargetTexture === !1 &&
        ((Ni.y *= -1), (Ni.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Ni)),
      (m.flipEnvMap.value =
        b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = d.reflectivity),
      (m.ior.value = d.ior),
      (m.refractionRatio.value = d.refractionRatio)),
      d.lightMap &&
        ((m.lightMap.value = d.lightMap),
        (m.lightMapIntensity.value = d.lightMapIntensity),
        t(d.lightMap, m.lightMapTransform)),
      d.aoMap &&
        ((m.aoMap.value = d.aoMap),
        (m.aoMapIntensity.value = d.aoMapIntensity),
        t(d.aoMap, m.aoMapTransform));
  }
  function o(m, d) {
    m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform));
  }
  function a(m, d) {
    (m.dashSize.value = d.dashSize),
      (m.totalSize.value = d.dashSize + d.gapSize),
      (m.scale.value = d.scale);
  }
  function l(m, d, A, b) {
    m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.size.value = d.size * A),
      (m.scale.value = b * 0.5),
      d.map && ((m.map.value = d.map), t(d.map, m.uvTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function c(m, d) {
    m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.rotation.value = d.rotation),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function u(m, d) {
    m.specular.value.copy(d.specular),
      (m.shininess.value = Math.max(d.shininess, 1e-4));
  }
  function f(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function h(m, d) {
    (m.metalness.value = d.metalness),
      d.metalnessMap &&
        ((m.metalnessMap.value = d.metalnessMap),
        t(d.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = d.roughness),
      d.roughnessMap &&
        ((m.roughnessMap.value = d.roughnessMap),
        t(d.roughnessMap, m.roughnessMapTransform)),
      d.envMap && (m.envMapIntensity.value = d.envMapIntensity);
  }
  function p(m, d, A) {
    (m.ior.value = d.ior),
      d.sheen > 0 &&
        (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (m.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap &&
          ((m.sheenColorMap.value = d.sheenColorMap),
          t(d.sheenColorMap, m.sheenColorMapTransform)),
        d.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = d.sheenRoughnessMap),
          t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      d.clearcoat > 0 &&
        ((m.clearcoat.value = d.clearcoat),
        (m.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap &&
          ((m.clearcoatMap.value = d.clearcoatMap),
          t(d.clearcoatMap, m.clearcoatMapTransform)),
        d.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
          t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = d.clearcoatNormalMap),
          t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          d.side === Vt && m.clearcoatNormalScale.value.negate())),
      d.dispersion > 0 && (m.dispersion.value = d.dispersion),
      d.iridescence > 0 &&
        ((m.iridescence.value = d.iridescence),
        (m.iridescenceIOR.value = d.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
        d.iridescenceMap &&
          ((m.iridescenceMap.value = d.iridescenceMap),
          t(d.iridescenceMap, m.iridescenceMapTransform)),
        d.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = d.iridescenceThicknessMap),
          t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      d.transmission > 0 &&
        ((m.transmission.value = d.transmission),
        (m.transmissionSamplerMap.value = A.texture),
        m.transmissionSamplerSize.value.set(A.width, A.height),
        d.transmissionMap &&
          ((m.transmissionMap.value = d.transmissionMap),
          t(d.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = d.thickness),
        d.thicknessMap &&
          ((m.thicknessMap.value = d.thicknessMap),
          t(d.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = d.attenuationDistance),
        m.attenuationColor.value.copy(d.attenuationColor)),
      d.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          d.anisotropy * Math.cos(d.anisotropyRotation),
          d.anisotropy * Math.sin(d.anisotropyRotation),
        ),
        d.anisotropyMap &&
          ((m.anisotropyMap.value = d.anisotropyMap),
          t(d.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = d.specularIntensity),
      m.specularColor.value.copy(d.specularColor),
      d.specularColorMap &&
        ((m.specularColorMap.value = d.specularColorMap),
        t(d.specularColorMap, m.specularColorMapTransform)),
      d.specularIntensityMap &&
        ((m.specularIntensityMap.value = d.specularIntensityMap),
        t(d.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function S(m, d) {
    const A = e.get(d).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (m.nearDistance.value = A.shadow.camera.near),
      (m.farDistance.value = A.shadow.camera.far);
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: r };
}
function PE(n, e, t, i) {
  let r = {},
    s = {},
    o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, b) {
    const y = b.program;
    i.uniformBlockBinding(A, y);
  }
  function c(A, b) {
    let y = r[A.id];
    y === void 0 &&
      (_(A), (y = u(A)), (r[A.id] = y), A.addEventListener("dispose", m));
    const I = b.program;
    i.updateUBOMapping(A, I);
    const D = e.render.frame;
    s[A.id] !== D && (h(A), (s[A.id] = D));
  }
  function u(A) {
    const b = f();
    A.__bindingPointIndex = b;
    const y = n.createBuffer(),
      I = A.__size,
      D = A.usage;
    return (
      n.bindBuffer(n.UNIFORM_BUFFER, y),
      n.bufferData(n.UNIFORM_BUFFER, I, D),
      n.bindBuffer(n.UNIFORM_BUFFER, null),
      n.bindBufferBase(n.UNIFORM_BUFFER, b, y),
      y
    );
  }
  function f() {
    for (let A = 0; A < a; A++) if (o.indexOf(A) === -1) return o.push(A), A;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function h(A) {
    const b = r[A.id],
      y = A.uniforms,
      I = A.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, b);
    for (let D = 0, C = y.length; D < C; D++) {
      const B = Array.isArray(y[D]) ? y[D] : [y[D]];
      for (let T = 0, M = B.length; T < M; T++) {
        const L = B[T];
        if (p(L, D, T, I) === !0) {
          const O = L.__offset,
            H = Array.isArray(L.value) ? L.value : [L.value];
          let ne = 0;
          for (let se = 0; se < H.length; se++) {
            const Z = H[se],
              ee = S(Z);
            typeof Z == "number" || typeof Z == "boolean"
              ? ((L.__data[0] = Z),
                n.bufferSubData(n.UNIFORM_BUFFER, O + ne, L.__data))
              : Z.isMatrix3
                ? ((L.__data[0] = Z.elements[0]),
                  (L.__data[1] = Z.elements[1]),
                  (L.__data[2] = Z.elements[2]),
                  (L.__data[3] = 0),
                  (L.__data[4] = Z.elements[3]),
                  (L.__data[5] = Z.elements[4]),
                  (L.__data[6] = Z.elements[5]),
                  (L.__data[7] = 0),
                  (L.__data[8] = Z.elements[6]),
                  (L.__data[9] = Z.elements[7]),
                  (L.__data[10] = Z.elements[8]),
                  (L.__data[11] = 0))
                : (Z.toArray(L.__data, ne),
                  (ne += ee.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          n.bufferSubData(n.UNIFORM_BUFFER, O, L.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function p(A, b, y, I) {
    const D = A.value,
      C = b + "_" + y;
    if (I[C] === void 0)
      return (
        typeof D == "number" || typeof D == "boolean"
          ? (I[C] = D)
          : (I[C] = D.clone()),
        !0
      );
    {
      const B = I[C];
      if (typeof D == "number" || typeof D == "boolean") {
        if (B !== D) return (I[C] = D), !0;
      } else if (B.equals(D) === !1) return B.copy(D), !0;
    }
    return !1;
  }
  function _(A) {
    const b = A.uniforms;
    let y = 0;
    const I = 16;
    for (let C = 0, B = b.length; C < B; C++) {
      const T = Array.isArray(b[C]) ? b[C] : [b[C]];
      for (let M = 0, L = T.length; M < L; M++) {
        const O = T[M],
          H = Array.isArray(O.value) ? O.value : [O.value];
        for (let ne = 0, se = H.length; ne < se; ne++) {
          const Z = H[ne],
            ee = S(Z),
            V = y % I,
            me = V % ee.boundary,
            Se = V + me;
          (y += me),
            Se !== 0 && I - Se < ee.storage && (y += I - Se),
            (O.__data = new Float32Array(
              ee.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (O.__offset = y),
            (y += ee.storage);
        }
      }
    }
    const D = y % I;
    return D > 0 && (y += I - D), (A.__size = y), (A.__cache = {}), this;
  }
  function S(A) {
    const b = { boundary: 0, storage: 0 };
    return (
      typeof A == "number" || typeof A == "boolean"
        ? ((b.boundary = 4), (b.storage = 4))
        : A.isVector2
          ? ((b.boundary = 8), (b.storage = 8))
          : A.isVector3 || A.isColor
            ? ((b.boundary = 16), (b.storage = 12))
            : A.isVector4
              ? ((b.boundary = 16), (b.storage = 16))
              : A.isMatrix3
                ? ((b.boundary = 48), (b.storage = 48))
                : A.isMatrix4
                  ? ((b.boundary = 64), (b.storage = 64))
                  : A.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        A,
                      ),
      b
    );
  }
  function m(A) {
    const b = A.target;
    b.removeEventListener("dispose", m);
    const y = o.indexOf(b.__bindingPointIndex);
    o.splice(y, 1), n.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function d() {
    for (const A in r) n.deleteBuffer(r[A]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: d };
}
class LE {
  constructor(e = {}) {
    const {
      canvas: t = ov(),
      context: i = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reverseDepthBuffer: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (i !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        i instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      p = i.getContextAttributes().alpha;
    } else p = o;
    const _ = new Uint32Array(4),
      S = new Int32Array(4);
    let m = null,
      d = null;
    const A = [],
      b = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = sn),
      (this.toneMapping = gi),
      (this.toneMappingExposure = 1);
    const y = this;
    let I = !1,
      D = 0,
      C = 0,
      B = null,
      T = -1,
      M = null;
    const L = new ot(),
      O = new ot();
    let H = null;
    const ne = new Ze(0);
    let se = 0,
      Z = t.width,
      ee = t.height,
      V = 1,
      me = null,
      Se = null;
    const we = new ot(0, 0, Z, ee),
      Pe = new ot(0, 0, Z, ee);
    let $e = !1;
    const ie = new cc();
    let de = !1,
      Me = !1;
    this.transmissionResolutionScale = 1;
    const U = new pt(),
      re = new pt(),
      ae = new G(),
      le = new ot(),
      Ie = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let w = !1;
    function R() {
      return B === null ? V : 1;
    }
    let v = i;
    function te(E, F) {
      return t.getContext(E, F);
    }
    try {
      const E = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${ec}`),
        t.addEventListener("webglcontextlost", oe, !1),
        t.addEventListener("webglcontextrestored", be, !1),
        t.addEventListener("webglcontextcreationerror", Te, !1),
        v === null)
      ) {
        const F = "webgl2";
        if (((v = te(F, E)), v === null))
          throw te(F)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw (console.error("THREE.WebGLRenderer: " + E.message), E);
    }
    let j,
      q,
      J,
      ce,
      K,
      x,
      g,
      P,
      k,
      $,
      W,
      pe,
      ue,
      ge,
      Ue,
      fe,
      xe,
      Ce,
      Ne,
      _e,
      Oe,
      He,
      at,
      N;
    function Ee() {
      (j = new kS(v)),
        j.init(),
        (He = new yE(v, j)),
        (q = new NS(v, j, e, He)),
        (J = new ME(v, j)),
        q.reverseDepthBuffer && h && J.buffers.depth.setReversed(!0),
        (ce = new WS(v)),
        (K = new lE()),
        (x = new EE(v, j, J, K, q, He, ce)),
        (g = new OS(y)),
        (P = new HS(y)),
        (k = new Zv(v)),
        (at = new IS(v, k)),
        ($ = new VS(v, k, ce, at)),
        (W = new qS(v, $, k, ce)),
        (Ne = new XS(v, q, x)),
        (fe = new FS(K)),
        (pe = new aE(y, g, P, j, q, at, fe)),
        (ue = new CE(y, K)),
        (ge = new uE()),
        (Ue = new gE(j)),
        (Ce = new DS(y, g, P, J, W, p, l)),
        (xe = new xE(y, W, q)),
        (N = new PE(v, ce, q, J)),
        (_e = new US(v, j, ce)),
        (Oe = new GS(v, j, ce)),
        (ce.programs = pe.programs),
        (y.capabilities = q),
        (y.extensions = j),
        (y.properties = K),
        (y.renderLists = ge),
        (y.shadowMap = xe),
        (y.state = J),
        (y.info = ce);
    }
    Ee();
    const Q = new wE(y, v);
    (this.xr = Q),
      (this.getContext = function () {
        return v;
      }),
      (this.getContextAttributes = function () {
        return v.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const E = j.get("WEBGL_lose_context");
        E && E.loseContext();
      }),
      (this.forceContextRestore = function () {
        const E = j.get("WEBGL_lose_context");
        E && E.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return V;
      }),
      (this.setPixelRatio = function (E) {
        E !== void 0 && ((V = E), this.setSize(Z, ee, !1));
      }),
      (this.getSize = function (E) {
        return E.set(Z, ee);
      }),
      (this.setSize = function (E, F, X = !0) {
        if (Q.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        (Z = E),
          (ee = F),
          (t.width = Math.floor(E * V)),
          (t.height = Math.floor(F * V)),
          X === !0 && ((t.style.width = E + "px"), (t.style.height = F + "px")),
          this.setViewport(0, 0, E, F);
      }),
      (this.getDrawingBufferSize = function (E) {
        return E.set(Z * V, ee * V).floor();
      }),
      (this.setDrawingBufferSize = function (E, F, X) {
        (Z = E),
          (ee = F),
          (V = X),
          (t.width = Math.floor(E * X)),
          (t.height = Math.floor(F * X)),
          this.setViewport(0, 0, E, F);
      }),
      (this.getCurrentViewport = function (E) {
        return E.copy(L);
      }),
      (this.getViewport = function (E) {
        return E.copy(we);
      }),
      (this.setViewport = function (E, F, X, Y) {
        E.isVector4 ? we.set(E.x, E.y, E.z, E.w) : we.set(E, F, X, Y),
          J.viewport(L.copy(we).multiplyScalar(V).round());
      }),
      (this.getScissor = function (E) {
        return E.copy(Pe);
      }),
      (this.setScissor = function (E, F, X, Y) {
        E.isVector4 ? Pe.set(E.x, E.y, E.z, E.w) : Pe.set(E, F, X, Y),
          J.scissor(O.copy(Pe).multiplyScalar(V).round());
      }),
      (this.getScissorTest = function () {
        return $e;
      }),
      (this.setScissorTest = function (E) {
        J.setScissorTest(($e = E));
      }),
      (this.setOpaqueSort = function (E) {
        me = E;
      }),
      (this.setTransparentSort = function (E) {
        Se = E;
      }),
      (this.getClearColor = function (E) {
        return E.copy(Ce.getClearColor());
      }),
      (this.setClearColor = function () {
        Ce.setClearColor.apply(Ce, arguments);
      }),
      (this.getClearAlpha = function () {
        return Ce.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Ce.setClearAlpha.apply(Ce, arguments);
      }),
      (this.clear = function (E = !0, F = !0, X = !0) {
        let Y = 0;
        if (E) {
          let z = !1;
          if (B !== null) {
            const he = B.texture.format;
            z = he === ac || he === oc || he === sc;
          }
          if (z) {
            const he = B.texture.type,
              ye =
                he === Kn ||
                he === $i ||
                he === ps ||
                he === Dr ||
                he === ic ||
                he === rc,
              Ae = Ce.getClearColor(),
              Re = Ce.getClearAlpha(),
              Be = Ae.r,
              ze = Ae.g,
              Le = Ae.b;
            ye
              ? ((_[0] = Be),
                (_[1] = ze),
                (_[2] = Le),
                (_[3] = Re),
                v.clearBufferuiv(v.COLOR, 0, _))
              : ((S[0] = Be),
                (S[1] = ze),
                (S[2] = Le),
                (S[3] = Re),
                v.clearBufferiv(v.COLOR, 0, S));
          } else Y |= v.COLOR_BUFFER_BIT;
        }
        F && (Y |= v.DEPTH_BUFFER_BIT),
          X &&
            ((Y |= v.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          v.clear(Y);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", oe, !1),
          t.removeEventListener("webglcontextrestored", be, !1),
          t.removeEventListener("webglcontextcreationerror", Te, !1),
          Ce.dispose(),
          ge.dispose(),
          Ue.dispose(),
          K.dispose(),
          g.dispose(),
          P.dispose(),
          W.dispose(),
          at.dispose(),
          N.dispose(),
          pe.dispose(),
          Q.dispose(),
          Q.removeEventListener("sessionstart", mc),
          Q.removeEventListener("sessionend", gc),
          Ti.stop();
      });
    function oe(E) {
      E.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (I = !0);
    }
    function be() {
      console.log("THREE.WebGLRenderer: Context Restored."), (I = !1);
      const E = ce.autoReset,
        F = xe.enabled,
        X = xe.autoUpdate,
        Y = xe.needsUpdate,
        z = xe.type;
      Ee(),
        (ce.autoReset = E),
        (xe.enabled = F),
        (xe.autoUpdate = X),
        (xe.needsUpdate = Y),
        (xe.type = z);
    }
    function Te(E) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        E.statusMessage,
      );
    }
    function Ve(E) {
      const F = E.target;
      F.removeEventListener("dispose", Ve), mt(F);
    }
    function mt(E) {
      wt(E), K.remove(E);
    }
    function wt(E) {
      const F = K.get(E).programs;
      F !== void 0 &&
        (F.forEach(function (X) {
          pe.releaseProgram(X);
        }),
        E.isShaderMaterial && pe.releaseShaderCache(E));
    }
    this.renderBufferDirect = function (E, F, X, Y, z, he) {
      F === null && (F = Ie);
      const ye = z.isMesh && z.matrixWorld.determinant() < 0,
        Ae = Rd(E, F, X, Y, z);
      J.setMaterial(Y, ye);
      let Re = X.index,
        Be = 1;
      if (Y.wireframe === !0) {
        if (((Re = $.getWireframeAttribute(X)), Re === void 0)) return;
        Be = 2;
      }
      const ze = X.drawRange,
        Le = X.attributes.position;
      let Ye = ze.start * Be,
        et = (ze.start + ze.count) * Be;
      he !== null &&
        ((Ye = Math.max(Ye, he.start * Be)),
        (et = Math.min(et, (he.start + he.count) * Be))),
        Re !== null
          ? ((Ye = Math.max(Ye, 0)), (et = Math.min(et, Re.count)))
          : Le != null &&
            ((Ye = Math.max(Ye, 0)), (et = Math.min(et, Le.count)));
      const vt = et - Ye;
      if (vt < 0 || vt === 1 / 0) return;
      at.setup(z, Y, Ae, X, Re);
      let gt,
        je = _e;
      if (
        (Re !== null && ((gt = k.get(Re)), (je = Oe), je.setIndex(gt)),
        z.isMesh)
      )
        Y.wireframe === !0
          ? (J.setLineWidth(Y.wireframeLinewidth * R()), je.setMode(v.LINES))
          : je.setMode(v.TRIANGLES);
      else if (z.isLine) {
        let De = Y.linewidth;
        De === void 0 && (De = 1),
          J.setLineWidth(De * R()),
          z.isLineSegments
            ? je.setMode(v.LINES)
            : z.isLineLoop
              ? je.setMode(v.LINE_LOOP)
              : je.setMode(v.LINE_STRIP);
      } else
        z.isPoints
          ? je.setMode(v.POINTS)
          : z.isSprite && je.setMode(v.TRIANGLES);
      if (z.isBatchedMesh)
        if (z._multiDrawInstances !== null)
          je.renderMultiDrawInstances(
            z._multiDrawStarts,
            z._multiDrawCounts,
            z._multiDrawCount,
            z._multiDrawInstances,
          );
        else if (j.get("WEBGL_multi_draw"))
          je.renderMultiDraw(
            z._multiDrawStarts,
            z._multiDrawCounts,
            z._multiDrawCount,
          );
        else {
          const De = z._multiDrawStarts,
            bt = z._multiDrawCounts,
            tt = z._multiDrawCount,
            fn = Re ? k.get(Re).bytesPerElement : 1,
            Ki = K.get(Y).currentProgram.getUniforms();
          for (let Wt = 0; Wt < tt; Wt++)
            Ki.setValue(v, "_gl_DrawID", Wt), je.render(De[Wt] / fn, bt[Wt]);
        }
      else if (z.isInstancedMesh) je.renderInstances(Ye, vt, z.count);
      else if (X.isInstancedBufferGeometry) {
        const De = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0,
          bt = Math.min(X.instanceCount, De);
        je.renderInstances(Ye, vt, bt);
      } else je.render(Ye, vt);
    };
    function rt(E, F, X) {
      E.transparent === !0 && E.side === Xn && E.forceSinglePass === !1
        ? ((E.side = Vt),
          (E.needsUpdate = !0),
          bs(E, F, X),
          (E.side = vi),
          (E.needsUpdate = !0),
          bs(E, F, X),
          (E.side = Xn))
        : bs(E, F, X);
    }
    (this.compile = function (E, F, X = null) {
      X === null && (X = E),
        (d = Ue.get(X)),
        d.init(F),
        b.push(d),
        X.traverseVisible(function (z) {
          z.isLight &&
            z.layers.test(F.layers) &&
            (d.pushLight(z), z.castShadow && d.pushShadow(z));
        }),
        E !== X &&
          E.traverseVisible(function (z) {
            z.isLight &&
              z.layers.test(F.layers) &&
              (d.pushLight(z), z.castShadow && d.pushShadow(z));
          }),
        d.setupLights();
      const Y = new Set();
      return (
        E.traverse(function (z) {
          if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
          const he = z.material;
          if (he)
            if (Array.isArray(he))
              for (let ye = 0; ye < he.length; ye++) {
                const Ae = he[ye];
                rt(Ae, X, z), Y.add(Ae);
              }
            else rt(he, X, z), Y.add(he);
        }),
        b.pop(),
        (d = null),
        Y
      );
    }),
      (this.compileAsync = function (E, F, X = null) {
        const Y = this.compile(E, F, X);
        return new Promise((z) => {
          function he() {
            if (
              (Y.forEach(function (ye) {
                K.get(ye).currentProgram.isReady() && Y.delete(ye);
              }),
              Y.size === 0)
            ) {
              z(E);
              return;
            }
            setTimeout(he, 10);
          }
          j.get("KHR_parallel_shader_compile") !== null
            ? he()
            : setTimeout(he, 10);
        });
      });
    let un = null;
    function In(E) {
      un && un(E);
    }
    function mc() {
      Ti.stop();
    }
    function gc() {
      Ti.start();
    }
    const Ti = new Ed();
    Ti.setAnimationLoop(In),
      typeof self < "u" && Ti.setContext(self),
      (this.setAnimationLoop = function (E) {
        (un = E), Q.setAnimationLoop(E), E === null ? Ti.stop() : Ti.start();
      }),
      Q.addEventListener("sessionstart", mc),
      Q.addEventListener("sessionend", gc),
      (this.render = function (E, F) {
        if (F !== void 0 && F.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (I === !0) return;
        if (
          (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
          F.parent === null &&
            F.matrixWorldAutoUpdate === !0 &&
            F.updateMatrixWorld(),
          Q.enabled === !0 &&
            Q.isPresenting === !0 &&
            (Q.cameraAutoUpdate === !0 && Q.updateCamera(F),
            (F = Q.getCamera())),
          E.isScene === !0 && E.onBeforeRender(y, E, F, B),
          (d = Ue.get(E, b.length)),
          d.init(F),
          b.push(d),
          re.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse),
          ie.setFromProjectionMatrix(re),
          (Me = this.localClippingEnabled),
          (de = fe.init(this.clippingPlanes, Me)),
          (m = ge.get(E, A.length)),
          m.init(),
          A.push(m),
          Q.enabled === !0 && Q.isPresenting === !0)
        ) {
          const he = y.xr.getDepthSensingMesh();
          he !== null && No(he, F, -1 / 0, y.sortObjects);
        }
        No(E, F, 0, y.sortObjects),
          m.finish(),
          y.sortObjects === !0 && m.sort(me, Se),
          (w =
            Q.enabled === !1 ||
            Q.isPresenting === !1 ||
            Q.hasDepthSensing() === !1),
          w && Ce.addToRenderList(m, E),
          this.info.render.frame++,
          de === !0 && fe.beginShadows();
        const X = d.state.shadowsArray;
        xe.render(X, E, F),
          de === !0 && fe.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const Y = m.opaque,
          z = m.transmissive;
        if ((d.setupLights(), F.isArrayCamera)) {
          const he = F.cameras;
          if (z.length > 0)
            for (let ye = 0, Ae = he.length; ye < Ae; ye++) {
              const Re = he[ye];
              vc(Y, z, E, Re);
            }
          w && Ce.render(E);
          for (let ye = 0, Ae = he.length; ye < Ae; ye++) {
            const Re = he[ye];
            _c(m, E, Re, Re.viewport);
          }
        } else z.length > 0 && vc(Y, z, E, F), w && Ce.render(E), _c(m, E, F);
        B !== null &&
          C === 0 &&
          (x.updateMultisampleRenderTarget(B), x.updateRenderTargetMipmap(B)),
          E.isScene === !0 && E.onAfterRender(y, E, F),
          at.resetDefaultState(),
          (T = -1),
          (M = null),
          b.pop(),
          b.length > 0
            ? ((d = b[b.length - 1]),
              de === !0 && fe.setGlobalState(y.clippingPlanes, d.state.camera))
            : (d = null),
          A.pop(),
          A.length > 0 ? (m = A[A.length - 1]) : (m = null);
      });
    function No(E, F, X, Y) {
      if (E.visible === !1) return;
      if (E.layers.test(F.layers)) {
        if (E.isGroup) X = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === !0 && E.update(F);
        else if (E.isLight) d.pushLight(E), E.castShadow && d.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || ie.intersectsSprite(E)) {
            Y && le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);
            const ye = W.update(E),
              Ae = E.material;
            Ae.visible && m.push(E, ye, Ae, X, le.z, null);
          }
        } else if (
          (E.isMesh || E.isLine || E.isPoints) &&
          (!E.frustumCulled || ie.intersectsObject(E))
        ) {
          const ye = W.update(E),
            Ae = E.material;
          if (
            (Y &&
              (E.boundingSphere !== void 0
                ? (E.boundingSphere === null && E.computeBoundingSphere(),
                  le.copy(E.boundingSphere.center))
                : (ye.boundingSphere === null && ye.computeBoundingSphere(),
                  le.copy(ye.boundingSphere.center)),
              le.applyMatrix4(E.matrixWorld).applyMatrix4(re)),
            Array.isArray(Ae))
          ) {
            const Re = ye.groups;
            for (let Be = 0, ze = Re.length; Be < ze; Be++) {
              const Le = Re[Be],
                Ye = Ae[Le.materialIndex];
              Ye && Ye.visible && m.push(E, ye, Ye, X, le.z, Le);
            }
          } else Ae.visible && m.push(E, ye, Ae, X, le.z, null);
        }
      }
      const he = E.children;
      for (let ye = 0, Ae = he.length; ye < Ae; ye++) No(he[ye], F, X, Y);
    }
    function _c(E, F, X, Y) {
      const z = E.opaque,
        he = E.transmissive,
        ye = E.transparent;
      d.setupLightsView(X),
        de === !0 && fe.setGlobalState(y.clippingPlanes, X),
        Y && J.viewport(L.copy(Y)),
        z.length > 0 && Ts(z, F, X),
        he.length > 0 && Ts(he, F, X),
        ye.length > 0 && Ts(ye, F, X),
        J.buffers.depth.setTest(!0),
        J.buffers.depth.setMask(!0),
        J.buffers.color.setMask(!0),
        J.setPolygonOffset(!1);
    }
    function vc(E, F, X, Y) {
      if ((X.isScene === !0 ? X.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[Y.id] === void 0 &&
        (d.state.transmissionRenderTarget[Y.id] = new Yi(1, 1, {
          generateMipmaps: !0,
          type:
            j.has("EXT_color_buffer_half_float") ||
            j.has("EXT_color_buffer_float")
              ? vs
              : Kn,
          minFilter: Wi,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Ke.workingColorSpace,
        }));
      const he = d.state.transmissionRenderTarget[Y.id],
        ye = Y.viewport || L;
      he.setSize(
        ye.z * y.transmissionResolutionScale,
        ye.w * y.transmissionResolutionScale,
      );
      const Ae = y.getRenderTarget();
      y.setRenderTarget(he),
        y.getClearColor(ne),
        (se = y.getClearAlpha()),
        se < 1 && y.setClearColor(16777215, 0.5),
        y.clear(),
        w && Ce.render(X);
      const Re = y.toneMapping;
      y.toneMapping = gi;
      const Be = Y.viewport;
      if (
        (Y.viewport !== void 0 && (Y.viewport = void 0),
        d.setupLightsView(Y),
        de === !0 && fe.setGlobalState(y.clippingPlanes, Y),
        Ts(E, X, Y),
        x.updateMultisampleRenderTarget(he),
        x.updateRenderTargetMipmap(he),
        j.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let ze = !1;
        for (let Le = 0, Ye = F.length; Le < Ye; Le++) {
          const et = F[Le],
            vt = et.object,
            gt = et.geometry,
            je = et.material,
            De = et.group;
          if (je.side === Xn && vt.layers.test(Y.layers)) {
            const bt = je.side;
            (je.side = Vt),
              (je.needsUpdate = !0),
              xc(vt, X, Y, gt, je, De),
              (je.side = bt),
              (je.needsUpdate = !0),
              (ze = !0);
          }
        }
        ze === !0 &&
          (x.updateMultisampleRenderTarget(he), x.updateRenderTargetMipmap(he));
      }
      y.setRenderTarget(Ae),
        y.setClearColor(ne, se),
        Be !== void 0 && (Y.viewport = Be),
        (y.toneMapping = Re);
    }
    function Ts(E, F, X) {
      const Y = F.isScene === !0 ? F.overrideMaterial : null;
      for (let z = 0, he = E.length; z < he; z++) {
        const ye = E[z],
          Ae = ye.object,
          Re = ye.geometry,
          Be = Y === null ? ye.material : Y,
          ze = ye.group;
        Ae.layers.test(X.layers) && xc(Ae, F, X, Re, Be, ze);
      }
    }
    function xc(E, F, X, Y, z, he) {
      E.onBeforeRender(y, F, X, Y, z, he),
        E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, E.matrixWorld),
        E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
        z.onBeforeRender(y, F, X, Y, E, he),
        z.transparent === !0 && z.side === Xn && z.forceSinglePass === !1
          ? ((z.side = Vt),
            (z.needsUpdate = !0),
            y.renderBufferDirect(X, F, Y, z, E, he),
            (z.side = vi),
            (z.needsUpdate = !0),
            y.renderBufferDirect(X, F, Y, z, E, he),
            (z.side = Xn))
          : y.renderBufferDirect(X, F, Y, z, E, he),
        E.onAfterRender(y, F, X, Y, z, he);
    }
    function bs(E, F, X) {
      F.isScene !== !0 && (F = Ie);
      const Y = K.get(E),
        z = d.state.lights,
        he = d.state.shadowsArray,
        ye = z.state.version,
        Ae = pe.getParameters(E, z.state, he, F, X),
        Re = pe.getProgramCacheKey(Ae);
      let Be = Y.programs;
      (Y.environment = E.isMeshStandardMaterial ? F.environment : null),
        (Y.fog = F.fog),
        (Y.envMap = (E.isMeshStandardMaterial ? P : g).get(
          E.envMap || Y.environment,
        )),
        (Y.envMapRotation =
          Y.environment !== null && E.envMap === null
            ? F.environmentRotation
            : E.envMapRotation),
        Be === void 0 &&
          (E.addEventListener("dispose", Ve),
          (Be = new Map()),
          (Y.programs = Be));
      let ze = Be.get(Re);
      if (ze !== void 0) {
        if (Y.currentProgram === ze && Y.lightsStateVersion === ye)
          return Mc(E, Ae), ze;
      } else
        (Ae.uniforms = pe.getUniforms(E)),
          E.onBeforeCompile(Ae, y),
          (ze = pe.acquireProgram(Ae, Re)),
          Be.set(Re, ze),
          (Y.uniforms = Ae.uniforms);
      const Le = Y.uniforms;
      return (
        ((!E.isShaderMaterial && !E.isRawShaderMaterial) ||
          E.clipping === !0) &&
          (Le.clippingPlanes = fe.uniform),
        Mc(E, Ae),
        (Y.needsLights = Pd(E)),
        (Y.lightsStateVersion = ye),
        Y.needsLights &&
          ((Le.ambientLightColor.value = z.state.ambient),
          (Le.lightProbe.value = z.state.probe),
          (Le.directionalLights.value = z.state.directional),
          (Le.directionalLightShadows.value = z.state.directionalShadow),
          (Le.spotLights.value = z.state.spot),
          (Le.spotLightShadows.value = z.state.spotShadow),
          (Le.rectAreaLights.value = z.state.rectArea),
          (Le.ltc_1.value = z.state.rectAreaLTC1),
          (Le.ltc_2.value = z.state.rectAreaLTC2),
          (Le.pointLights.value = z.state.point),
          (Le.pointLightShadows.value = z.state.pointShadow),
          (Le.hemisphereLights.value = z.state.hemi),
          (Le.directionalShadowMap.value = z.state.directionalShadowMap),
          (Le.directionalShadowMatrix.value = z.state.directionalShadowMatrix),
          (Le.spotShadowMap.value = z.state.spotShadowMap),
          (Le.spotLightMatrix.value = z.state.spotLightMatrix),
          (Le.spotLightMap.value = z.state.spotLightMap),
          (Le.pointShadowMap.value = z.state.pointShadowMap),
          (Le.pointShadowMatrix.value = z.state.pointShadowMatrix)),
        (Y.currentProgram = ze),
        (Y.uniformsList = null),
        ze
      );
    }
    function Sc(E) {
      if (E.uniformsList === null) {
        const F = E.currentProgram.getUniforms();
        E.uniformsList = ao.seqWithValue(F.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Mc(E, F) {
      const X = K.get(E);
      (X.outputColorSpace = F.outputColorSpace),
        (X.batching = F.batching),
        (X.batchingColor = F.batchingColor),
        (X.instancing = F.instancing),
        (X.instancingColor = F.instancingColor),
        (X.instancingMorph = F.instancingMorph),
        (X.skinning = F.skinning),
        (X.morphTargets = F.morphTargets),
        (X.morphNormals = F.morphNormals),
        (X.morphColors = F.morphColors),
        (X.morphTargetsCount = F.morphTargetsCount),
        (X.numClippingPlanes = F.numClippingPlanes),
        (X.numIntersection = F.numClipIntersection),
        (X.vertexAlphas = F.vertexAlphas),
        (X.vertexTangents = F.vertexTangents),
        (X.toneMapping = F.toneMapping);
    }
    function Rd(E, F, X, Y, z) {
      F.isScene !== !0 && (F = Ie), x.resetTextureUnits();
      const he = F.fog,
        ye = Y.isMeshStandardMaterial ? F.environment : null,
        Ae =
          B === null
            ? y.outputColorSpace
            : B.isXRRenderTarget === !0
              ? B.texture.colorSpace
              : Ur,
        Re = (Y.isMeshStandardMaterial ? P : g).get(Y.envMap || ye),
        Be =
          Y.vertexColors === !0 &&
          !!X.attributes.color &&
          X.attributes.color.itemSize === 4,
        ze = !!X.attributes.tangent && (!!Y.normalMap || Y.anisotropy > 0),
        Le = !!X.morphAttributes.position,
        Ye = !!X.morphAttributes.normal,
        et = !!X.morphAttributes.color;
      let vt = gi;
      Y.toneMapped &&
        (B === null || B.isXRRenderTarget === !0) &&
        (vt = y.toneMapping);
      const gt =
          X.morphAttributes.position ||
          X.morphAttributes.normal ||
          X.morphAttributes.color,
        je = gt !== void 0 ? gt.length : 0,
        De = K.get(Y),
        bt = d.state.lights;
      if (de === !0 && (Me === !0 || E !== M)) {
        const It = E === M && Y.id === T;
        fe.setState(Y, E, It);
      }
      let tt = !1;
      Y.version === De.__version
        ? ((De.needsLights && De.lightsStateVersion !== bt.state.version) ||
            De.outputColorSpace !== Ae ||
            (z.isBatchedMesh && De.batching === !1) ||
            (!z.isBatchedMesh && De.batching === !0) ||
            (z.isBatchedMesh &&
              De.batchingColor === !0 &&
              z.colorTexture === null) ||
            (z.isBatchedMesh &&
              De.batchingColor === !1 &&
              z.colorTexture !== null) ||
            (z.isInstancedMesh && De.instancing === !1) ||
            (!z.isInstancedMesh && De.instancing === !0) ||
            (z.isSkinnedMesh && De.skinning === !1) ||
            (!z.isSkinnedMesh && De.skinning === !0) ||
            (z.isInstancedMesh &&
              De.instancingColor === !0 &&
              z.instanceColor === null) ||
            (z.isInstancedMesh &&
              De.instancingColor === !1 &&
              z.instanceColor !== null) ||
            (z.isInstancedMesh &&
              De.instancingMorph === !0 &&
              z.morphTexture === null) ||
            (z.isInstancedMesh &&
              De.instancingMorph === !1 &&
              z.morphTexture !== null) ||
            De.envMap !== Re ||
            (Y.fog === !0 && De.fog !== he) ||
            (De.numClippingPlanes !== void 0 &&
              (De.numClippingPlanes !== fe.numPlanes ||
                De.numIntersection !== fe.numIntersection)) ||
            De.vertexAlphas !== Be ||
            De.vertexTangents !== ze ||
            De.morphTargets !== Le ||
            De.morphNormals !== Ye ||
            De.morphColors !== et ||
            De.toneMapping !== vt ||
            De.morphTargetsCount !== je) &&
          (tt = !0)
        : ((tt = !0), (De.__version = Y.version));
      let fn = De.currentProgram;
      tt === !0 && (fn = bs(Y, F, z));
      let Ki = !1,
        Wt = !1,
        Br = !1;
      const dt = fn.getUniforms(),
        en = De.uniforms;
      if (
        (J.useProgram(fn.program) && ((Ki = !0), (Wt = !0), (Br = !0)),
        Y.id !== T && ((T = Y.id), (Wt = !0)),
        Ki || M !== E)
      ) {
        J.buffers.depth.getReversed()
          ? (U.copy(E.projectionMatrix),
            lv(U),
            cv(U),
            dt.setValue(v, "projectionMatrix", U))
          : dt.setValue(v, "projectionMatrix", E.projectionMatrix),
          dt.setValue(v, "viewMatrix", E.matrixWorldInverse);
        const Bt = dt.map.cameraPosition;
        Bt !== void 0 &&
          Bt.setValue(v, ae.setFromMatrixPosition(E.matrixWorld)),
          q.logarithmicDepthBuffer &&
            dt.setValue(
              v,
              "logDepthBufFC",
              2 / (Math.log(E.far + 1) / Math.LN2),
            ),
          (Y.isMeshPhongMaterial ||
            Y.isMeshToonMaterial ||
            Y.isMeshLambertMaterial ||
            Y.isMeshBasicMaterial ||
            Y.isMeshStandardMaterial ||
            Y.isShaderMaterial) &&
            dt.setValue(v, "isOrthographic", E.isOrthographicCamera === !0),
          M !== E && ((M = E), (Wt = !0), (Br = !0));
      }
      if (z.isSkinnedMesh) {
        dt.setOptional(v, z, "bindMatrix"),
          dt.setOptional(v, z, "bindMatrixInverse");
        const It = z.skeleton;
        It &&
          (It.boneTexture === null && It.computeBoneTexture(),
          dt.setValue(v, "boneTexture", It.boneTexture, x));
      }
      z.isBatchedMesh &&
        (dt.setOptional(v, z, "batchingTexture"),
        dt.setValue(v, "batchingTexture", z._matricesTexture, x),
        dt.setOptional(v, z, "batchingIdTexture"),
        dt.setValue(v, "batchingIdTexture", z._indirectTexture, x),
        dt.setOptional(v, z, "batchingColorTexture"),
        z._colorsTexture !== null &&
          dt.setValue(v, "batchingColorTexture", z._colorsTexture, x));
      const tn = X.morphAttributes;
      if (
        ((tn.position !== void 0 ||
          tn.normal !== void 0 ||
          tn.color !== void 0) &&
          Ne.update(z, X, fn),
        (Wt || De.receiveShadow !== z.receiveShadow) &&
          ((De.receiveShadow = z.receiveShadow),
          dt.setValue(v, "receiveShadow", z.receiveShadow)),
        Y.isMeshGouraudMaterial &&
          Y.envMap !== null &&
          ((en.envMap.value = Re),
          (en.flipEnvMap.value =
            Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1)),
        Y.isMeshStandardMaterial &&
          Y.envMap === null &&
          F.environment !== null &&
          (en.envMapIntensity.value = F.environmentIntensity),
        Wt &&
          (dt.setValue(v, "toneMappingExposure", y.toneMappingExposure),
          De.needsLights && Cd(en, Br),
          he && Y.fog === !0 && ue.refreshFogUniforms(en, he),
          ue.refreshMaterialUniforms(
            en,
            Y,
            V,
            ee,
            d.state.transmissionRenderTarget[E.id],
          ),
          ao.upload(v, Sc(De), en, x)),
        Y.isShaderMaterial &&
          Y.uniformsNeedUpdate === !0 &&
          (ao.upload(v, Sc(De), en, x), (Y.uniformsNeedUpdate = !1)),
        Y.isSpriteMaterial && dt.setValue(v, "center", z.center),
        dt.setValue(v, "modelViewMatrix", z.modelViewMatrix),
        dt.setValue(v, "normalMatrix", z.normalMatrix),
        dt.setValue(v, "modelMatrix", z.matrixWorld),
        Y.isShaderMaterial || Y.isRawShaderMaterial)
      ) {
        const It = Y.uniformsGroups;
        for (let Bt = 0, Fo = It.length; Bt < Fo; Bt++) {
          const bi = It[Bt];
          N.update(bi, fn), N.bind(bi, fn);
        }
      }
      return fn;
    }
    function Cd(E, F) {
      (E.ambientLightColor.needsUpdate = F),
        (E.lightProbe.needsUpdate = F),
        (E.directionalLights.needsUpdate = F),
        (E.directionalLightShadows.needsUpdate = F),
        (E.pointLights.needsUpdate = F),
        (E.pointLightShadows.needsUpdate = F),
        (E.spotLights.needsUpdate = F),
        (E.spotLightShadows.needsUpdate = F),
        (E.rectAreaLights.needsUpdate = F),
        (E.hemisphereLights.needsUpdate = F);
    }
    function Pd(E) {
      return (
        E.isMeshLambertMaterial ||
        E.isMeshToonMaterial ||
        E.isMeshPhongMaterial ||
        E.isMeshStandardMaterial ||
        E.isShadowMaterial ||
        (E.isShaderMaterial && E.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return D;
    }),
      (this.getActiveMipmapLevel = function () {
        return C;
      }),
      (this.getRenderTarget = function () {
        return B;
      }),
      (this.setRenderTargetTextures = function (E, F, X) {
        (K.get(E.texture).__webglTexture = F),
          (K.get(E.depthTexture).__webglTexture = X);
        const Y = K.get(E);
        (Y.__hasExternalTextures = !0),
          (Y.__autoAllocateDepthBuffer = X === void 0),
          Y.__autoAllocateDepthBuffer ||
            (j.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
              ),
              (Y.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (E, F) {
        const X = K.get(E);
        (X.__webglFramebuffer = F), (X.__useDefaultFramebuffer = F === void 0);
      });
    const Ld = v.createFramebuffer();
    (this.setRenderTarget = function (E, F = 0, X = 0) {
      (B = E), (D = F), (C = X);
      let Y = !0,
        z = null,
        he = !1,
        ye = !1;
      if (E) {
        const Re = K.get(E);
        if (Re.__useDefaultFramebuffer !== void 0)
          J.bindFramebuffer(v.FRAMEBUFFER, null), (Y = !1);
        else if (Re.__webglFramebuffer === void 0) x.setupRenderTarget(E);
        else if (Re.__hasExternalTextures)
          x.rebindTextures(
            E,
            K.get(E.texture).__webglTexture,
            K.get(E.depthTexture).__webglTexture,
          );
        else if (E.depthBuffer) {
          const Le = E.depthTexture;
          if (Re.__boundDepthTexture !== Le) {
            if (
              Le !== null &&
              K.has(Le) &&
              (E.width !== Le.image.width || E.height !== Le.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            x.setupDepthRenderbuffer(E);
          }
        }
        const Be = E.texture;
        (Be.isData3DTexture ||
          Be.isDataArrayTexture ||
          Be.isCompressedArrayTexture) &&
          (ye = !0);
        const ze = K.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget
          ? (Array.isArray(ze[F]) ? (z = ze[F][X]) : (z = ze[F]), (he = !0))
          : E.samples > 0 && x.useMultisampledRTT(E) === !1
            ? (z = K.get(E).__webglMultisampledFramebuffer)
            : Array.isArray(ze)
              ? (z = ze[X])
              : (z = ze),
          L.copy(E.viewport),
          O.copy(E.scissor),
          (H = E.scissorTest);
      } else
        L.copy(we).multiplyScalar(V).floor(),
          O.copy(Pe).multiplyScalar(V).floor(),
          (H = $e);
      if (
        (X !== 0 && (z = Ld),
        J.bindFramebuffer(v.FRAMEBUFFER, z) && Y && J.drawBuffers(E, z),
        J.viewport(L),
        J.scissor(O),
        J.setScissorTest(H),
        he)
      ) {
        const Re = K.get(E.texture);
        v.framebufferTexture2D(
          v.FRAMEBUFFER,
          v.COLOR_ATTACHMENT0,
          v.TEXTURE_CUBE_MAP_POSITIVE_X + F,
          Re.__webglTexture,
          X,
        );
      } else if (ye) {
        const Re = K.get(E.texture),
          Be = F;
        v.framebufferTextureLayer(
          v.FRAMEBUFFER,
          v.COLOR_ATTACHMENT0,
          Re.__webglTexture,
          X,
          Be,
        );
      } else if (E !== null && X !== 0) {
        const Re = K.get(E.texture);
        v.framebufferTexture2D(
          v.FRAMEBUFFER,
          v.COLOR_ATTACHMENT0,
          v.TEXTURE_2D,
          Re.__webglTexture,
          X,
        );
      }
      T = -1;
    }),
      (this.readRenderTargetPixels = function (E, F, X, Y, z, he, ye) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let Ae = K.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && ye !== void 0 && (Ae = Ae[ye]), Ae)) {
          J.bindFramebuffer(v.FRAMEBUFFER, Ae);
          try {
            const Re = E.texture,
              Be = Re.format,
              ze = Re.type;
            if (!q.textureFormatReadable(Be)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!q.textureTypeReadable(ze)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            F >= 0 &&
              F <= E.width - Y &&
              X >= 0 &&
              X <= E.height - z &&
              v.readPixels(F, X, Y, z, He.convert(Be), He.convert(ze), he);
          } finally {
            const Re = B !== null ? K.get(B).__webglFramebuffer : null;
            J.bindFramebuffer(v.FRAMEBUFFER, Re);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        E,
        F,
        X,
        Y,
        z,
        he,
        ye,
      ) {
        if (!(E && E.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let Ae = K.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && ye !== void 0 && (Ae = Ae[ye]), Ae)) {
          const Re = E.texture,
            Be = Re.format,
            ze = Re.type;
          if (!q.textureFormatReadable(Be))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
            );
          if (!q.textureTypeReadable(ze))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
            );
          if (F >= 0 && F <= E.width - Y && X >= 0 && X <= E.height - z) {
            J.bindFramebuffer(v.FRAMEBUFFER, Ae);
            const Le = v.createBuffer();
            v.bindBuffer(v.PIXEL_PACK_BUFFER, Le),
              v.bufferData(v.PIXEL_PACK_BUFFER, he.byteLength, v.STREAM_READ),
              v.readPixels(F, X, Y, z, He.convert(Be), He.convert(ze), 0);
            const Ye = B !== null ? K.get(B).__webglFramebuffer : null;
            J.bindFramebuffer(v.FRAMEBUFFER, Ye);
            const et = v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              v.flush(),
              await av(v, et, 4),
              v.bindBuffer(v.PIXEL_PACK_BUFFER, Le),
              v.getBufferSubData(v.PIXEL_PACK_BUFFER, 0, he),
              v.deleteBuffer(Le),
              v.deleteSync(et),
              he
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
        }
      }),
      (this.copyFramebufferToTexture = function (E, F = null, X = 0) {
        E.isTexture !== !0 &&
          (pr(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed.",
          ),
          (F = arguments[0] || null),
          (E = arguments[1]));
        const Y = Math.pow(2, -X),
          z = Math.floor(E.image.width * Y),
          he = Math.floor(E.image.height * Y),
          ye = F !== null ? F.x : 0,
          Ae = F !== null ? F.y : 0;
        x.setTexture2D(E, 0),
          v.copyTexSubImage2D(v.TEXTURE_2D, X, 0, 0, ye, Ae, z, he),
          J.unbindTexture();
      });
    const Dd = v.createFramebuffer(),
      Id = v.createFramebuffer();
    (this.copyTextureToTexture = function (
      E,
      F,
      X = null,
      Y = null,
      z = 0,
      he = null,
    ) {
      E.isTexture !== !0 &&
        (pr(
          "WebGLRenderer: copyTextureToTexture function signature has changed.",
        ),
        (Y = arguments[0] || null),
        (E = arguments[1]),
        (F = arguments[2]),
        (he = arguments[3] || 0),
        (X = null)),
        he === null &&
          (z !== 0
            ? (pr(
                "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
              ),
              (he = z),
              (z = 0))
            : (he = 0));
      let ye, Ae, Re, Be, ze, Le, Ye, et, vt;
      const gt = E.isCompressedTexture ? E.mipmaps[he] : E.image;
      if (X !== null)
        (ye = X.max.x - X.min.x),
          (Ae = X.max.y - X.min.y),
          (Re = X.isBox3 ? X.max.z - X.min.z : 1),
          (Be = X.min.x),
          (ze = X.min.y),
          (Le = X.isBox3 ? X.min.z : 0);
      else {
        const tn = Math.pow(2, -z);
        (ye = Math.floor(gt.width * tn)),
          (Ae = Math.floor(gt.height * tn)),
          E.isDataArrayTexture
            ? (Re = gt.depth)
            : E.isData3DTexture
              ? (Re = Math.floor(gt.depth * tn))
              : (Re = 1),
          (Be = 0),
          (ze = 0),
          (Le = 0);
      }
      Y !== null
        ? ((Ye = Y.x), (et = Y.y), (vt = Y.z))
        : ((Ye = 0), (et = 0), (vt = 0));
      const je = He.convert(F.format),
        De = He.convert(F.type);
      let bt;
      F.isData3DTexture
        ? (x.setTexture3D(F, 0), (bt = v.TEXTURE_3D))
        : F.isDataArrayTexture || F.isCompressedArrayTexture
          ? (x.setTexture2DArray(F, 0), (bt = v.TEXTURE_2D_ARRAY))
          : (x.setTexture2D(F, 0), (bt = v.TEXTURE_2D)),
        v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL, F.flipY),
        v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha),
        v.pixelStorei(v.UNPACK_ALIGNMENT, F.unpackAlignment);
      const tt = v.getParameter(v.UNPACK_ROW_LENGTH),
        fn = v.getParameter(v.UNPACK_IMAGE_HEIGHT),
        Ki = v.getParameter(v.UNPACK_SKIP_PIXELS),
        Wt = v.getParameter(v.UNPACK_SKIP_ROWS),
        Br = v.getParameter(v.UNPACK_SKIP_IMAGES);
      v.pixelStorei(v.UNPACK_ROW_LENGTH, gt.width),
        v.pixelStorei(v.UNPACK_IMAGE_HEIGHT, gt.height),
        v.pixelStorei(v.UNPACK_SKIP_PIXELS, Be),
        v.pixelStorei(v.UNPACK_SKIP_ROWS, ze),
        v.pixelStorei(v.UNPACK_SKIP_IMAGES, Le);
      const dt = E.isDataArrayTexture || E.isData3DTexture,
        en = F.isDataArrayTexture || F.isData3DTexture;
      if (E.isDepthTexture) {
        const tn = K.get(E),
          It = K.get(F),
          Bt = K.get(tn.__renderTarget),
          Fo = K.get(It.__renderTarget);
        J.bindFramebuffer(v.READ_FRAMEBUFFER, Bt.__webglFramebuffer),
          J.bindFramebuffer(v.DRAW_FRAMEBUFFER, Fo.__webglFramebuffer);
        for (let bi = 0; bi < Re; bi++)
          dt &&
            (v.framebufferTextureLayer(
              v.READ_FRAMEBUFFER,
              v.COLOR_ATTACHMENT0,
              K.get(E).__webglTexture,
              z,
              Le + bi,
            ),
            v.framebufferTextureLayer(
              v.DRAW_FRAMEBUFFER,
              v.COLOR_ATTACHMENT0,
              K.get(F).__webglTexture,
              he,
              vt + bi,
            )),
            v.blitFramebuffer(
              Be,
              ze,
              ye,
              Ae,
              Ye,
              et,
              ye,
              Ae,
              v.DEPTH_BUFFER_BIT,
              v.NEAREST,
            );
        J.bindFramebuffer(v.READ_FRAMEBUFFER, null),
          J.bindFramebuffer(v.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || E.isRenderTargetTexture || K.has(E)) {
        const tn = K.get(E),
          It = K.get(F);
        J.bindFramebuffer(v.READ_FRAMEBUFFER, Dd),
          J.bindFramebuffer(v.DRAW_FRAMEBUFFER, Id);
        for (let Bt = 0; Bt < Re; Bt++)
          dt
            ? v.framebufferTextureLayer(
                v.READ_FRAMEBUFFER,
                v.COLOR_ATTACHMENT0,
                tn.__webglTexture,
                z,
                Le + Bt,
              )
            : v.framebufferTexture2D(
                v.READ_FRAMEBUFFER,
                v.COLOR_ATTACHMENT0,
                v.TEXTURE_2D,
                tn.__webglTexture,
                z,
              ),
            en
              ? v.framebufferTextureLayer(
                  v.DRAW_FRAMEBUFFER,
                  v.COLOR_ATTACHMENT0,
                  It.__webglTexture,
                  he,
                  vt + Bt,
                )
              : v.framebufferTexture2D(
                  v.DRAW_FRAMEBUFFER,
                  v.COLOR_ATTACHMENT0,
                  v.TEXTURE_2D,
                  It.__webglTexture,
                  he,
                ),
            z !== 0
              ? v.blitFramebuffer(
                  Be,
                  ze,
                  ye,
                  Ae,
                  Ye,
                  et,
                  ye,
                  Ae,
                  v.COLOR_BUFFER_BIT,
                  v.NEAREST,
                )
              : en
                ? v.copyTexSubImage3D(bt, he, Ye, et, vt + Bt, Be, ze, ye, Ae)
                : v.copyTexSubImage2D(bt, he, Ye, et, Be, ze, ye, Ae);
        J.bindFramebuffer(v.READ_FRAMEBUFFER, null),
          J.bindFramebuffer(v.DRAW_FRAMEBUFFER, null);
      } else
        en
          ? E.isDataTexture || E.isData3DTexture
            ? v.texSubImage3D(bt, he, Ye, et, vt, ye, Ae, Re, je, De, gt.data)
            : F.isCompressedArrayTexture
              ? v.compressedTexSubImage3D(
                  bt,
                  he,
                  Ye,
                  et,
                  vt,
                  ye,
                  Ae,
                  Re,
                  je,
                  gt.data,
                )
              : v.texSubImage3D(bt, he, Ye, et, vt, ye, Ae, Re, je, De, gt)
          : E.isDataTexture
            ? v.texSubImage2D(v.TEXTURE_2D, he, Ye, et, ye, Ae, je, De, gt.data)
            : E.isCompressedTexture
              ? v.compressedTexSubImage2D(
                  v.TEXTURE_2D,
                  he,
                  Ye,
                  et,
                  gt.width,
                  gt.height,
                  je,
                  gt.data,
                )
              : v.texSubImage2D(v.TEXTURE_2D, he, Ye, et, ye, Ae, je, De, gt);
      v.pixelStorei(v.UNPACK_ROW_LENGTH, tt),
        v.pixelStorei(v.UNPACK_IMAGE_HEIGHT, fn),
        v.pixelStorei(v.UNPACK_SKIP_PIXELS, Ki),
        v.pixelStorei(v.UNPACK_SKIP_ROWS, Wt),
        v.pixelStorei(v.UNPACK_SKIP_IMAGES, Br),
        he === 0 && F.generateMipmaps && v.generateMipmap(bt),
        J.unbindTexture();
    }),
      (this.copyTextureToTexture3D = function (
        E,
        F,
        X = null,
        Y = null,
        z = 0,
      ) {
        return (
          E.isTexture !== !0 &&
            (pr(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed.",
            ),
            (X = arguments[0] || null),
            (Y = arguments[1] || null),
            (E = arguments[2]),
            (F = arguments[3]),
            (z = arguments[4] || 0)),
          pr(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.',
          ),
          this.copyTextureToTexture(E, F, X, Y, z)
        );
      }),
      (this.initRenderTarget = function (E) {
        K.get(E).__webglFramebuffer === void 0 && x.setupRenderTarget(E);
      }),
      (this.initTexture = function (E) {
        E.isCubeTexture
          ? x.setTextureCube(E, 0)
          : E.isData3DTexture
            ? x.setTexture3D(E, 0)
            : E.isDataArrayTexture || E.isCompressedArrayTexture
              ? x.setTexture2DArray(E, 0)
              : x.setTexture2D(E, 0),
          J.unbindTexture();
      }),
      (this.resetState = function () {
        (D = 0), (C = 0), (B = null), J.reset(), at.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  get coordinateSystem() {
    return $n;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorspace = Ke._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = Ke._getUnpackColorSpace());
  }
}
const DE = Qt({
  name: "Earth",
  props: { small: { type: Boolean, default: !1 } },
  setup(n) {
    const e = jt(null);
    let t, i, r, s, o;
    const a = () => {
        if (!e.value) return;
        (t = new Nv()),
          (t.background = null),
          (i = new Zt(75, 1, 0.1, 1e3)),
          (r = new LE({ antialias: !0, alpha: !0, preserveDrawingBuffer: !0 }));
        const c = n.small ? 30 : 200;
        r.setSize(c, c),
          r.setClearColor(0, 0),
          e.value.appendChild(r.domElement);
        const u = new uc(1, 32, 32),
          h = new Wv().load("textures/earthmap1k.jpg", () => {
            r && t && i && r.render(t, i);
          }),
          p = new Bv({ map: h, bumpMap: h, bumpScale: 0.1, shininess: 15 });
        (s = new wn(u, p)), t.add(s);
        const _ = new Yv(16777215, 3);
        t.add(_);
        const S = new Ku(16777215, 1.2);
        S.position.set(5, 3, 5), t.add(S);
        const m = new Ku(16777215, 0.8);
        m.position.set(-5, -3, 2),
          t.add(m),
          (i.position.z = 2.5),
          r.render(t, i);
      },
      l = () => {
        (o = requestAnimationFrame(l)),
          s && (s.rotation.y += 0.005),
          r && t && i && r.render(t, i);
      };
    return (
      Ro(() => {
        a(), l();
      }),
      ts(
        () => n.small,
        (c) => {
          if (r && e.value) {
            const u = c ? 30 : 200;
            r.setSize(u, u);
          }
        },
      ),
      $l(() => {
        o && cancelAnimationFrame(o);
      }),
      { container: e }
    );
  },
});
function IE(n, e, t, i, r, s) {
  return (
    ut(),
    St(
      "div",
      { ref: "container", class: Ln(["earth-canvas", { small: n.small }]) },
      null,
      2,
    )
  );
}
const wd = cn(DE, [
    ["render", IE],
    ["__scopeId", "data-v-52333158"],
  ]),
  UE = Qt({
    name: "River",
    setup() {
      const n = jt(!1);
      return {
        isInfoVisible: n,
        toggleInfo: () => {
          n.value = !n.value;
        },
      };
    },
  }),
  NE = "/textures/CarsonREM-3.png",
  FE = { class: "river-container" },
  OE = { class: "river-segments" },
  BE = { class: "info-button-container" },
  zE = { key: 0, class: "info-popup" };
function HE(n, e, t, i, r, s) {
  return (
    ut(),
    St("div", FE, [
      Xe("div", OE, [
        e[5] ||
          (e[5] = Xe(
            "div",
            { class: "river-segment" },
            [Xe("img", { src: NE, alt: "River", class: "river-image" })],
            -1,
          )),
        Xe("div", BE, [
          Xe(
            "button",
            {
              onClick:
                e[0] || (e[0] = (...o) => n.toggleInfo && n.toggleInfo(...o)),
              class: "info-button",
              "aria-label": "Show information",
            },
            e[2] ||
              (e[2] = [
                Xe(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                  [
                    Xe("circle", { cx: "12", cy: "12", r: "10" }),
                    Xe("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                    Xe("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                  ],
                  -1,
                ),
              ]),
          ),
          ft(
            Nm,
            { name: "fade" },
            {
              default: Er(() => [
                n.isInfoVisible
                  ? (ut(),
                    St("div", zE, [
                      Xe(
                        "button",
                        {
                          class: "close-button",
                          onClick:
                            e[1] ||
                            (e[1] = (...o) =>
                              n.toggleInfo && n.toggleInfo(...o)),
                          "aria-label": "Close",
                        },
                        "×",
                      ),
                      e[3] ||
                        (e[3] = Xe(
                          "h2",
                          { class: "popup-title" },
                          "About this Image",
                          -1,
                        )),
                      e[4] ||
                        (e[4] = Xe(
                          "p",
                          { class: "popup-text" },
                          [
                            pi(
                              " Relative Elevation Model (REM) of the Carson River, NV. Inspired by ",
                            ),
                            Xe(
                              "a",
                              {
                                href: "https://dancoecarto.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              " Dan Coe ",
                            ),
                            pi(" 's work. "),
                          ],
                          -1,
                        )),
                    ]))
                  : Hi("", !0),
              ]),
              _: 1,
            },
          ),
        ]),
      ]),
    ])
  );
}
const kE = cn(UE, [
    ["render", HE],
    ["__scopeId", "data-v-b6584c2a"],
  ]),
  VE = Qt({ name: "AboutMe" }),
  GE = { class: "about-section fade-in" };
function WE(n, e, t, i, r, s) {
  return (
    ut(),
    St(
      "div",
      GE,
      e[0] ||
        (e[0] = [
          Xe(
            "div",
            { class: "about-content" },
            [
              Xe("h2", { class: "about-title" }, "ABOUT ME"),
              Xe(
                "p",
                { class: "about-text" },
                " Hello! I’m Praveenaa, a geospatial software developer with 3+ years of experience transforming, analyzing, and visualizing complex spatial datasets to build dynamic, map-driven applications. I’m most passionate about working with climate data, developing tools that broaden our understanding of our changing planet. ",
              ),
              Xe(
                "p",
                { class: "about-text" },
                " If you find my work interesting, feel free to reach out—I’d be happy to connect. ",
              ),
            ],
            -1,
          ),
        ]),
    )
  );
}
const XE = cn(VE, [
    ["render", WE],
    ["__scopeId", "data-v-11ea1331"],
  ]),
  qE = Qt({
    name: "TitleBar",
    components: { Earth: wd },
    props: { show: { type: Boolean, default: !0 } },
  }),
  $E = { class: "name-container" },
  YE = { class: "earth-container" },
  jE = { class: "nav-links" };
function KE(n, e, t, i, r, s) {
  const o = Ht("router-link"),
    a = Ht("Earth");
  return (
    ut(),
    St(
      "div",
      { class: Ln(["title-bar", { "fade-in": n.show }]) },
      [
        Xe("div", $E, [
          ft(
            o,
            { to: "/", class: "name" },
            {
              default: Er(
                () => e[0] || (e[0] = [pi("PRAVEENAA KULANDHAIVEL")]),
              ),
              _: 1,
            },
          ),
          Xe("div", YE, [ft(a, { small: !0 })]),
        ]),
        Xe("div", jE, [
          ft(
            o,
            { to: "/resume", class: "nav-link" },
            { default: Er(() => e[1] || (e[1] = [pi("RESUME")])), _: 1 },
          ),
          ft(
            o,
            { to: "/projects", class: "nav-link" },
            { default: Er(() => e[2] || (e[2] = [pi("PROJECTS")])), _: 1 },
          ),
        ]),
      ],
      2,
    )
  );
}
const dc = cn(qE, [
    ["render", KE],
    ["__scopeId", "data-v-c518524b"],
  ]),
  ZE = Qt({
    name: "ContactInfo",
    props: { show: { type: Boolean, default: !1 } },
  });
function JE(n, e, t, i, r, s) {
  return (
    ut(),
    St(
      "div",
      { class: Ln(["contact-section", { "fade-in": n.show }]) },
      e[0] ||
        (e[0] = [
          _m(
            '<div class="contact-container" data-v-0d64405f><div class="links-container" data-v-0d64405f><a href="https://linkedin.com/in/praveenaa-kulandhaivel" target="_blank" rel="noopener noreferrer" class="contact-link" data-v-0d64405f><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0d64405f><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-0d64405f></path><rect x="2" y="9" width="4" height="12" data-v-0d64405f></rect><circle cx="4" cy="4" r="2" data-v-0d64405f></circle></svg><span data-v-0d64405f>LINKEDIN</span></a><a href="https://github.com/praveenaak" target="_blank" rel="noopener noreferrer" class="contact-link" data-v-0d64405f><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0d64405f><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-0d64405f></path></svg><span data-v-0d64405f>GITHUB</span></a><div class="contact-link" data-v-0d64405f><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0d64405f><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-0d64405f></path><polyline points="22,6 12,13 2,6" data-v-0d64405f></polyline></svg><span data-v-0d64405f>praveenaa2408@gmail.com</span></div></div></div>',
            1,
          ),
        ]),
      2,
    )
  );
}
const QE = cn(ZE, [
    ["render", JE],
    ["__scopeId", "data-v-0d64405f"],
  ]),
  ey = Qt({
    name: "TypingAnimation",
    components: {
      Earth: wd,
      River: kE,
      AboutMe: XE,
      TitleBar: dc,
      ContactInfo: QE,
    },
    setup() {
      const n = jt(null),
        e = jt(!1),
        t = jt(!1),
        i = jt(!1),
        r = jt(!1),
        s = jt(!1),
        o = jt(!1),
        a = jt(!1),
        l = jt(localStorage.getItem("hasSeenAnimation") === "true"),
        c = () => {
          (e.value = !0),
            setTimeout(() => {
              (t.value = !0),
                (i.value = !0),
                (r.value = !0),
                (s.value = !0),
                setTimeout(() => {
                  (o.value = !0),
                    setTimeout(() => {
                      a.value = !0;
                    }, 500);
                }, 500);
            }, 1e3);
        };
      return (
        Ro(() => {
          const u = document.createElement("link");
          (u.rel = "stylesheet"),
            (u.href =
              "https://fonts.googleapis.com/css2?family=VT323&display=swap"),
            document.head.appendChild(u),
            l.value
              ? c()
              : n.value &&
                new __(n.value, {
                  strings: ["hello world!", "hello ^1000"],
                  typeSpeed: 80,
                  backSpeed: 50,
                  showCursor: !0,
                  cursorChar: "|",
                  smartBackspace: !0,
                  startDelay: 300,
                  backDelay: 500,
                  onComplete: (f) => {
                    const h = document.querySelector(".typed-cursor");
                    h && h.remove();
                  },
                  onStringTyped: (f) => {
                    f === 1 &&
                      (c(), localStorage.setItem("hasSeenAnimation", "true"));
                  },
                });
        }),
        {
          typingElement: n,
          showEarth: e,
          showAbout: t,
          showRiver: i,
          showTitleBar: r,
          showContact: s,
          shouldFadeText: o,
          earthInTitleBar: a,
          hasSeenAnimation: l,
        }
      );
    },
  }),
  ty = { class: "typing-container" },
  ny = { class: "text-earth-container" };
function iy(n, e, t, i, r, s) {
  const o = Ht("TitleBar"),
    a = Ht("Earth"),
    l = Ht("AboutMe"),
    c = Ht("River"),
    u = Ht("ContactInfo");
  return (
    ut(),
    St("div", ty, [
      ft(o, { show: n.showTitleBar, showEarth: n.earthInTitleBar }, null, 8, [
        "show",
        "showEarth",
      ]),
      Xe("div", ny, [
        Xe(
          "div",
          { class: Ln(["pixel-text", { "fade-out": n.shouldFadeText }]) },
          [
            Xe(
              "span",
              { ref: "typingElement" },
              oi(n.hasSeenAnimation ? "hello" : ""),
              513,
            ),
          ],
          2,
        ),
        n.showEarth
          ? (ut(),
            St(
              "div",
              {
                key: 0,
                class: Ln([
                  "earth-container",
                  {
                    "fade-scale-in": !n.earthInTitleBar,
                    "move-to-title": n.earthInTitleBar,
                  },
                ]),
              },
              [
                n.earthInTitleBar
                  ? Hi("", !0)
                  : (ut(), mr(a, { key: 0, small: !1 })),
              ],
              2,
            ))
          : Hi("", !0),
      ]),
      n.showAbout ? (ut(), mr(l, { key: 0 })) : Hi("", !0),
      n.showRiver ? (ut(), mr(c, { key: 1 })) : Hi("", !0),
      n.showContact
        ? (ut(), mr(u, { key: 2, show: n.showContact }, null, 8, ["show"]))
        : Hi("", !0),
    ])
  );
}
const ry = cn(ey, [
    ["render", iy],
    ["__scopeId", "data-v-d89f89f8"],
  ]),
  sy = Qt({ name: "HelloWorld", components: { TypingAnimation: ry } }),
  oy = { class: "hello-world" };
function ay(n, e, t, i, r, s) {
  const o = Ht("TypingAnimation");
  return ut(), St("div", oy, [ft(o)]);
}
const ly = cn(sy, [
    ["render", ay],
    ["__scopeId", "data-v-22972419"],
  ]),
  cy = Qt({ name: "HomeView", components: { HelloWorld: ly } });
function uy(n, e, t, i, r, s) {
  const o = Ht("HelloWorld");
  return ut(), St("main", null, [ft(o)]);
}
const fy = cn(cy, [
    ["render", uy],
    ["__scopeId", "data-v-ad5de120"],
  ]),
  hy = Qt({ name: "Projects", components: { TitleBar: dc } }),
  dy = { class: "projects-page" },
  py = { class: "content" };
function my(n, e, t, i, r, s) {
  const o = Ht("TitleBar"),
    a = Ht("router-link");
  return (
    ut(),
    St("div", dy, [
      ft(o, { show: !0 }),
      Xe("div", py, [
        e[1] ||
          (e[1] = Xe("h1", { class: "wip-text" }, "WORK IN PROGRESS", -1)),
        ft(
          a,
          { to: "/", class: "back-link" },
          { default: Er(() => e[0] || (e[0] = [pi("BACK HOME")])), _: 1 },
        ),
      ]),
    ])
  );
}
const gy = cn(hy, [
    ["render", my],
    ["__scopeId", "data-v-fe5cfbe9"],
  ]),
  _y = Qt({
    name: "Timeline",
    data() {
      return {
        experiences: [
          {
            date: "August 2024 - Present",
            title: "GIS Software Developer",
            company: "Wilkes Center for Climate Science & Policy",
            location: "Salt Lake City, UT",
            responsibilities: [
              "Led the full lifecycle development of geospatial web applications, from initial design and data processing to deployment.",
              "Architected and deployed scalable applications for real-time wildfire risk assessment and carbon sequestration monitoring, leveraging React, Vue.js, and Mapbox while ensuring WCAG AAA compliance for accessibility.",
              "Spearheaded the development of a high-performance data processing pipeline handling 1TB+ of historical spatio-temporal vector and raster data, utilizing parallel computing techniques to create optimized vector tiles.",
            ],
            technologies: [
              "Mapbox",
              "JavaScript",
              "HPC",
              "Python",
              "Map tile servers",
            ],
          },
          {
            date: "June 2024 - September 2024",
            title: "Graduate Fellow",
            company: "NASA Goddard Space Flight Center",
            location: "Greenbelt, MD",
            responsibilities: [
              "Engineered a scalable, open-source geospatial data processing pipeline using Python, optimizing integration of satellite data (MODIS) with in-situ observations & atmospheric models, successfully filling 40% of missing climate data for Phoenix.",
              "Developed implementation of a geospatial data processing pipeline to process satellite data & integrate it with in-situ observations and atmospheric composition models.",
              "Leveraged scientific programming in high-performance computing platforms to process large-scale raster imagery.",
            ],
            technologies: [
              "Python",
              "Scientigic programming",
              "Machine Learning",
              "Geospatial APIs",
            ],
          },
          {
            date: "May 2023 - May 2024",
            title: "Graduate Services Assistant - Geospatial Research",
            company: "Arizona State University",
            location: "Tempe, AZ",
            responsibilities: [
              "Automated geospatial data pipeline for assessing tract-level social vulnerability for heat resilience in Arizona.",
              "Formulated synthetic data for water pricing and air quality (PM2.5, PM10 and O3) on census-tract by applying spatial machine learning and developing algorithms to address 64% missing data.",
              "Investigated advanced modeling projects including AC ownership patterns and 911 calls to forecast heat waves.",
              "Developed GIS web-based applications and custom geospatial visualizations & communicating complex SVI data to both technical and non-technical audiences.",
            ],
            technologies: [
              "PostGIS",
              "OpenLayers",
              "Leaflet",
              "Python",
              "Spatial ML",
            ],
          },
          {
            date: "July 2021 - July 2022",
            title: "Software Engineer",
            company: "Hexagon Geospatial",
            location: "Hyderabad, India",
            responsibilities: [
              "Collaborated with cross-functional global teams to gather requirements for GIS operations using C# and .NET",
              "Administered network inventories & engineered custom commands for Utility companies geospatial data needs.",
              "Transformed inventory map by integrating longitudinal asset views, improving user visual access to attributes.",
              "Engineered data pipeline to vectorize hand-drawn raster maps using CNN models & accomplished 89% accuracy.",
              "Programmed SQL solutions to manage and optimize geodatabases in an Enterprise Oracle Database environment.",
            ],
            technologies: ["C#", ".NET", "CNN", "SQL", "Oracle Database"],
          },
          {
            date: "October 2020 - June 2021",
            title: "Software Engineering Intern",
            company: "Hexagon Geospatial",
            location: "Hyderabad, India",
            responsibilities: [
              "Developed a mobile GIS application using Xamarin, incorporating geometry customization features with the ESRI ArcGIS SDK",
              "Optimized an object detection model for large-scale manhole image analysis, achieving a detection accuracy of 92%",
              "Integrated custom commands into Hexagon NetWorks GIS software for utility companies using C# and .NET framework",
              "Optimized utility feature metadata creation process using SQL procedures, reducing processing time by 10%",
            ],
            technologies: [
              "Xamarin",
              "ESRI ArcGIS SDK",
              "C#",
              ".NET",
              "SQL",
              "Object Detection",
            ],
          },
          {
            date: "December 2020 - January 2021",
            title: "Intern",
            company: "National University Singapore",
            location: "Singapore",
            responsibilities: [
              "Led a 6-member team in medical imaging research on detecting abnormality in musculoskeletal radiographs.",
              "Researched and experimented transfer learning on deep neural networks for precise prediction & localization.",
              "Created a web-based Flask app to provide an interface, enabling users to interact with the model effectively.",
            ],
          },
        ],
      };
    },
  }),
  vy = { class: "timeline-container" },
  xy = { class: "timeline" },
  Sy = { class: "timeline-date" },
  My = { class: "timeline-title" },
  Ey = { class: "timeline-company" },
  yy = { class: "timeline-location" },
  Ty = { class: "timeline-responsibilities" },
  by = { key: 0, class: "timeline-tech" };
function Ay(n, e, t, i, r, s) {
  return (
    ut(),
    St("div", vy, [
      Xe("div", xy, [
        (ut(!0),
        St(
          Kt,
          null,
          Wo(
            n.experiences,
            (o, a) => (
              ut(),
              St(
                "div",
                {
                  key: a,
                  class: Ln([
                    "timeline-item",
                    { left: a % 2 === 0, right: a % 2 === 1 },
                  ]),
                },
                [
                  Xe(
                    "div",
                    { class: Ln(["timeline-content", { "fade-in": !0 }]) },
                    [
                      Xe("div", Sy, oi(o.date), 1),
                      Xe("h3", My, oi(o.title), 1),
                      Xe("h4", Ey, oi(o.company), 1),
                      Xe("div", yy, [
                        e[0] ||
                          (e[0] = Xe(
                            "svg",
                            {
                              class: "location-icon",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                            [
                              Xe("path", {
                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                              }),
                              Xe("circle", { cx: "12", cy: "10", r: "3" }),
                            ],
                            -1,
                          )),
                        pi(" " + oi(o.location), 1),
                      ]),
                      Xe("ul", Ty, [
                        (ut(!0),
                        St(
                          Kt,
                          null,
                          Wo(
                            o.responsibilities,
                            (l, c) => (ut(), St("li", { key: c }, oi(l), 1)),
                          ),
                          128,
                        )),
                      ]),
                      o.technologies
                        ? (ut(),
                          St("div", by, [
                            (ut(!0),
                            St(
                              Kt,
                              null,
                              Wo(
                                o.technologies,
                                (l, c) => (
                                  ut(),
                                  St(
                                    "span",
                                    { key: c, class: "tech-tag" },
                                    oi(l),
                                    1,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]))
                        : Hi("", !0),
                    ],
                  ),
                ],
                2,
              )
            ),
          ),
          128,
        )),
      ]),
    ])
  );
}
const wy = cn(_y, [
    ["render", Ay],
    ["__scopeId", "data-v-af1ff19c"],
  ]),
  Ry = Qt({ name: "Resume", components: { TitleBar: dc, Timeline: wy } }),
  Cy = { class: "resume-page" },
  Py = { class: "content" };
function Ly(n, e, t, i, r, s) {
  const o = Ht("TitleBar"),
    a = Ht("Timeline");
  return (
    ut(),
    St("div", Cy, [
      ft(o, { show: !0 }),
      Xe("div", Py, [
        e[0] || (e[0] = Xe("h1", { class: "page-title" }, "EXPERIENCE", -1)),
        ft(a),
      ]),
    ])
  );
}
const Dy = cn(Ry, [
    ["render", Ly],
    ["__scopeId", "data-v-edd7b295"],
  ]),
  Iy = [
    { path: "/", name: "home", component: fy },
    { path: "/projects", name: "projects", component: gy },
    { path: "/resume", name: "resume", component: Dy },
  ],
  Uy = d_({ history: Vg(), routes: Iy }),
  pc = rg(fg);
pc.use(lg());
pc.use(Uy);
pc.mount("#app");
