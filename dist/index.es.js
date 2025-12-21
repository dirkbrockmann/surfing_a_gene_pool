(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_19jk0_1,._controlPanel_19jk0_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_19jk0_1>canvas,._displayPanel_19jk0_1>svg,._controlPanel_19jk0_8>svg,._controlPanel_19jk0_8>canvas{display:block;box-sizing:border-box}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Rs = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 804, height: 804 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function te(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function js(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Aa(t) {
  let n, e, r;
  t.length !== 2 ? (n = te, e = (u, l) => te(t(u), l), r = (u, l) => t(u) - l) : (n = t === te || t === js ? t : Fs, e = t, r = t);
  function i(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) < 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function o(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) <= 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function a(u, l, s = 0, c = u.length) {
    const h = i(u, l, s, c - 1);
    return h > s && r(u[h - 1], l) > -r(u[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Fs() {
  return 0;
}
function Ds(t) {
  return t === null ? NaN : +t;
}
const Ls = Aa(te), qs = Ls.right;
Aa(Ds).center;
const Xs = Math.sqrt(50), Hs = Math.sqrt(10), Bs = Math.sqrt(2);
function fe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Xs ? 10 : o >= Hs ? 5 : o >= Bs ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), l = Math.round(n * s), u / s < t && ++u, l / s > n && --l, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), l = Math.round(n / s), u * s < t && ++u, l * s > n && --l), l < u && 0.5 <= e && e < 2 ? fe(t, n, e * 2) : [u, l, s];
}
function Us(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? fe(n, t, e) : fe(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, l = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) l[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) l[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * a;
  return l;
}
function br(t, n, e) {
  return n = +n, t = +t, e = +e, fe(t, n, e)[2];
}
function Gs(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? br(n, t, e) : br(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Ys = { value: () => {
} };
function $a() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ne(e);
}
function ne(t) {
  this._ = t;
}
function Vs(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ne.prototype = $a.prototype = {
  constructor: ne,
  on: function(t, n) {
    var e = this._, r = Vs(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ks(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Di(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Di(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ne(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Ks(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Di(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ys, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var xr = "http://www.w3.org/1999/xhtml";
const Li = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ce(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Li.hasOwnProperty(n) ? { space: Li[n], local: t } : t;
}
function Ws(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === xr && n.documentElement.namespaceURI === xr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Zs(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Na(t) {
  var n = Ce(t);
  return (n.local ? Zs : Ws)(n);
}
function Js() {
}
function ti(t) {
  return t == null ? Js : function() {
    return this.querySelector(t);
  };
}
function Qs(t) {
  typeof t != "function" && (t = ti(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), l, s, c = 0; c < a; ++c)
      (l = o[c]) && (s = t.call(l, l.__data__, c, o)) && ("__data__" in l && (s.__data__ = l.__data__), u[c] = s);
  return new q(r, this._parents);
}
function tl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function nl() {
  return [];
}
function Ta(t) {
  return t == null ? nl : function() {
    return this.querySelectorAll(t);
  };
}
function el(t) {
  return function() {
    return tl(t.apply(this, arguments));
  };
}
function rl(t) {
  typeof t == "function" ? t = el(t) : t = Ta(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && (r.push(t.call(l, l.__data__, s, a)), i.push(l));
  return new q(r, i);
}
function Sa(t) {
  return function() {
    return this.matches(t);
  };
}
function ka(t) {
  return function(n) {
    return n.matches(t);
  };
}
var il = Array.prototype.find;
function ol(t) {
  return function() {
    return il.call(this.children, t);
  };
}
function al() {
  return this.firstElementChild;
}
function ul(t) {
  return this.select(t == null ? al : ol(typeof t == "function" ? t : ka(t)));
}
var sl = Array.prototype.filter;
function ll() {
  return Array.from(this.children);
}
function cl(t) {
  return function() {
    return sl.call(this.children, t);
  };
}
function fl(t) {
  return this.selectAll(t == null ? ll : cl(typeof t == "function" ? t : ka(t)));
}
function hl(t) {
  typeof t != "function" && (t = Sa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new q(r, this._parents);
}
function Ea(t) {
  return new Array(t.length);
}
function pl() {
  return new q(this._enter || this._groups.map(Ea), this._parents);
}
function he(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
he.prototype = {
  constructor: he,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function dl(t) {
  return function() {
    return t;
  };
}
function gl(t, n, e, r, i, o) {
  for (var a = 0, u, l = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new he(t, o[a]);
  for (; a < l; ++a)
    (u = n[a]) && (i[a] = u);
}
function yl(t, n, e, r, i, o, a) {
  var u, l, s = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (u = 0; u < c; ++u)
    (l = n[u]) && (f[u] = p = a.call(l, l.__data__, u, n) + "", s.has(p) ? i[u] = l : s.set(p, l));
  for (u = 0; u < h; ++u)
    p = a.call(t, o[u], u, o) + "", (l = s.get(p)) ? (r[u] = l, l.__data__ = o[u], s.delete(p)) : e[u] = new he(t, o[u]);
  for (u = 0; u < c; ++u)
    (l = n[u]) && s.get(f[u]) === l && (i[u] = l);
}
function _l(t) {
  return t.__data__;
}
function vl(t, n) {
  if (!arguments.length) return Array.from(this, _l);
  var e = n ? yl : gl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = dl(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), l = new Array(o), s = 0; s < o; ++s) {
    var c = r[s], h = i[s], f = h.length, p = ml(t.call(c, c && c.__data__, s, r)), d = p.length, y = u[s] = new Array(d), w = a[s] = new Array(d), b = l[s] = new Array(f);
    e(c, h, y, w, b, p, n);
    for (var g = 0, M = 0, _, m; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(m = w[M]) && ++M < d; ) ;
        _._next = m || null;
      }
  }
  return a = new q(a, r), a._enter = u, a._exit = l, a;
}
function ml(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wl() {
  return new q(this._exit || this._groups.map(Ea), this._parents);
}
function bl(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function xl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), l = 0; l < a; ++l)
    for (var s = e[l], c = r[l], h = s.length, f = u[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = s[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    u[l] = e[l];
  return new q(u, this._parents);
}
function Ml() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Al(t) {
  t || (t = $l);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, l = i[o] = new Array(u), s, c = 0; c < u; ++c)
      (s = a[c]) && (l[c] = s);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function $l(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Nl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tl() {
  return Array.from(this);
}
function Sl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function kl() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function El() {
  return !this.node();
}
function Pl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Ol(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function zl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Il(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Rl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function jl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Fl(t, n) {
  var e = Ce(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? zl : Ol : typeof n == "function" ? e.local ? jl : Rl : e.local ? Il : Cl)(e, n));
}
function Pa(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Dl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ll(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ql(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Xl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Dl : typeof n == "function" ? ql : Ll)(t, n, e ?? "")) : Vt(this.node(), t);
}
function Vt(t, n) {
  return t.style.getPropertyValue(n) || Pa(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Hl(t) {
  return function() {
    delete this[t];
  };
}
function Bl(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ul(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Gl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Hl : typeof n == "function" ? Ul : Bl)(t, n)) : this.node()[t];
}
function Oa(t) {
  return t.trim().split(/^|\s+/);
}
function ni(t) {
  return t.classList || new za(t);
}
function za(t) {
  this._node = t, this._names = Oa(t.getAttribute("class") || "");
}
za.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ca(t, n) {
  for (var e = ni(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ia(t, n) {
  for (var e = ni(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Yl(t) {
  return function() {
    Ca(this, t);
  };
}
function Vl(t) {
  return function() {
    Ia(this, t);
  };
}
function Kl(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ca : Ia)(this, t);
  };
}
function Wl(t, n) {
  var e = Oa(t + "");
  if (arguments.length < 2) {
    for (var r = ni(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Kl : n ? Yl : Vl)(e, n));
}
function Zl() {
  this.textContent = "";
}
function Jl(t) {
  return function() {
    this.textContent = t;
  };
}
function Ql(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? Zl : (typeof t == "function" ? Ql : Jl)(t)) : this.node().textContent;
}
function nc() {
  this.innerHTML = "";
}
function ec(t) {
  return function() {
    this.innerHTML = t;
  };
}
function rc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ic(t) {
  return arguments.length ? this.each(t == null ? nc : (typeof t == "function" ? rc : ec)(t)) : this.node().innerHTML;
}
function oc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ac() {
  return this.each(oc);
}
function uc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sc() {
  return this.each(uc);
}
function lc(t) {
  var n = typeof t == "function" ? t : Na(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function cc() {
  return null;
}
function fc(t, n) {
  var e = typeof t == "function" ? t : Na(t), r = n == null ? cc : typeof n == "function" ? n : ti(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function pc() {
  return this.each(hc);
}
function dc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function gc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function yc(t) {
  return this.select(t ? gc : dc);
}
function _c(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function mc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function wc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function bc(t, n, e) {
  return function() {
    var r = this.__on, i, o = vc(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function xc(t, n, e) {
  var r = mc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var l = 0, s = u.length, c; l < s; ++l)
        for (i = 0, c = u[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? bc : wc, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function Ra(t, n, e) {
  var r = Pa(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Mc(t, n) {
  return function() {
    return Ra(this, t, n);
  };
}
function Ac(t, n) {
  return function() {
    return Ra(this, t, n.apply(this, arguments));
  };
}
function $c(t, n) {
  return this.each((typeof n == "function" ? Ac : Mc)(t, n));
}
function* Nc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ja = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function In() {
  return new q([[document.documentElement]], ja);
}
function Tc() {
  return this;
}
q.prototype = In.prototype = {
  constructor: q,
  select: Qs,
  selectAll: rl,
  selectChild: ul,
  selectChildren: fl,
  filter: hl,
  data: vl,
  enter: pl,
  exit: wl,
  join: bl,
  merge: xl,
  selection: Tc,
  order: Ml,
  sort: Al,
  call: Nl,
  nodes: Tl,
  node: Sl,
  size: kl,
  empty: El,
  each: Pl,
  attr: Fl,
  style: Xl,
  property: Gl,
  classed: Wl,
  text: tc,
  html: ic,
  raise: ac,
  lower: sc,
  append: lc,
  insert: fc,
  remove: pc,
  clone: yc,
  datum: _c,
  on: xc,
  dispatch: $c,
  [Symbol.iterator]: Nc
};
function Sc(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], ja);
}
function ei(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Fa(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Rn() {
}
var xn = 0.7, pe = 1 / xn, Ut = "\\s*([+-]?\\d+)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kc = /^#([0-9a-f]{3,8})$/, Ec = new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`), Pc = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Oc = new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${Mn}\\)$`), zc = new RegExp(`^rgba\\(${rt},${rt},${rt},${Mn}\\)$`), Cc = new RegExp(`^hsl\\(${Mn},${rt},${rt}\\)$`), Ic = new RegExp(`^hsla\\(${Mn},${rt},${rt},${Mn}\\)$`), qi = {
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
  yellowgreen: 10145074
};
ei(Rn, zt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xi,
  // Deprecated! Use color.formatHex.
  formatHex: Xi,
  formatHex8: Rc,
  formatHsl: jc,
  formatRgb: Hi,
  toString: Hi
});
function Xi() {
  return this.rgb().formatHex();
}
function Rc() {
  return this.rgb().formatHex8();
}
function jc() {
  return Da(this).formatHsl();
}
function Hi() {
  return this.rgb().formatRgb();
}
function zt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = kc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Bi(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Xn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Xn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ec.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = Pc.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Oc.exec(t)) ? Xn(n[1], n[2], n[3], n[4]) : (n = zc.exec(t)) ? Xn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Cc.exec(t)) ? Yi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ic.exec(t)) ? Yi(n[1], n[2] / 100, n[3] / 100, n[4]) : qi.hasOwnProperty(t) ? Bi(qi[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function Bi(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Xn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function Fc(t) {
  return t instanceof Rn || (t = zt(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function An(t, n, e, r) {
  return arguments.length === 1 ? Fc(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ei(j, An, Fa(Rn, {
  brighter(t) {
    return t = t == null ? pe : Math.pow(pe, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Pt(this.r), Pt(this.g), Pt(this.b), de(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ui,
  // Deprecated! Use color.formatHex.
  formatHex: Ui,
  formatHex8: Dc,
  formatRgb: Gi,
  toString: Gi
}));
function Ui() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}`;
}
function Dc() {
  return `#${St(this.r)}${St(this.g)}${St(this.b)}${St((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gi() {
  const t = de(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pt(this.r)}, ${Pt(this.g)}, ${Pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function de(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function St(t) {
  return t = Pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Yi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function Da(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof Rn || (t = zt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, l = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : u = l > 0 && l < 1 ? 0 : a, new Z(a, u, l, t.opacity);
}
function Lc(t, n, e, r) {
  return arguments.length === 1 ? Da(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ei(Z, Lc, Fa(Rn, {
  brighter(t) {
    return t = t == null ? pe : Math.pow(pe, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      or(t >= 240 ? t - 240 : t + 120, i, r),
      or(t, i, r),
      or(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(Vi(this.h), Hn(this.s), Hn(this.l), de(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = de(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Vi(this.h)}, ${Hn(this.s) * 100}%, ${Hn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Vi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Hn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function or(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ri = (t) => () => t;
function qc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Xc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Hc(t) {
  return (t = +t) == 1 ? La : function(n, e) {
    return e - n ? Xc(n, e, t) : ri(isNaN(n) ? e : n);
  };
}
function La(t, n) {
  var e = n - t;
  return e ? qc(t, e) : ri(isNaN(t) ? n : t);
}
const ge = function t(n) {
  var e = Hc(n);
  function r(i, o) {
    var a = e((i = An(i)).r, (o = An(o)).r), u = e(i.g, o.g), l = e(i.b, o.b), s = La(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Bc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Uc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Gc(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ii(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Yc(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Vc(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ii(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Mr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ar = new RegExp(Mr.source, "g");
function Kc(t) {
  return function() {
    return t;
  };
}
function Wc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function qa(t, n) {
  var e = Mr.lastIndex = ar.lastIndex = 0, r, i, o, a = -1, u = [], l = [];
  for (t = t + "", n = n + ""; (r = Mr.exec(t)) && (i = ar.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, l.push({ i: a, x: V(r, i) })), e = ar.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? l[0] ? Wc(l[0].x) : Kc(n) : (n = l.length, function(s) {
    for (var c = 0, h; c < n; ++c) u[(h = l[c]).i] = h.x(s);
    return u.join("");
  });
}
function ii(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ri(n) : (e === "number" ? V : e === "string" ? (r = zt(n)) ? (n = r, ge) : qa : n instanceof zt ? ge : n instanceof Date ? Yc : Uc(n) ? Bc : Array.isArray(n) ? Gc : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Vc : V)(t, n);
}
function Zc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ki = 180 / Math.PI, Ar = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xa(t, n, e, r, i, o) {
  var a, u, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, l /= u), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ki,
    skewX: Math.atan(l) * Ki,
    scaleX: a,
    scaleY: u
  };
}
var Bn;
function Jc(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ar : Xa(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Qc(t) {
  return t == null || (Bn || (Bn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Bn.setAttribute("transform", t), !(t = Bn.transform.baseVal.consolidate())) ? Ar : (t = t.matrix, Xa(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ha(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, c, h, f, p, d) {
    if (s !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: V(s, h) }, { i: y - 2, x: V(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(s, c, h, f) {
    s !== c ? (s - c > 180 ? c += 360 : c - s > 180 && (s += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(s, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function u(s, c, h, f) {
    s !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(s, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(s, c, h, f, p, d) {
    if (s !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: V(s, h) }, { i: y - 2, x: V(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(s, c) {
    var h = [], f = [];
    return s = t(s), c = t(c), o(s.translateX, s.translateY, c.translateX, c.translateY, h, f), a(s.rotate, c.rotate, h, f), u(s.skewX, c.skewX, h, f), l(s.scaleX, s.scaleY, c.scaleX, c.scaleY, h, f), s = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var tf = Ha(Jc, "px, ", "px)", "deg)"), nf = Ha(Qc, ", ", ")", ")"), Kt = 0, pn = 0, ln = 0, Ba = 1e3, ye, dn, _e = 0, Ct = 0, Ie = 0, $n = typeof performance == "object" && performance.now ? performance : Date, Ua = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Re() {
  return Ct || (Ua(ef), Ct = $n.now() + Ie);
}
function ef() {
  Ct = 0;
}
function Nn() {
  this._call = this._time = this._next = null;
}
Nn.prototype = Ga.prototype = {
  constructor: Nn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Re() : +e) + (n == null ? 0 : +n), !this._next && dn !== this && (dn ? dn._next = this : ye = this, dn = this), this._call = t, this._time = e, $r();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $r());
  }
};
function Ga(t, n, e) {
  var r = new Nn();
  return r.restart(t, n, e), r;
}
function rf() {
  Re(), ++Kt;
  for (var t = ye, n; t; )
    (n = Ct - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Kt;
}
function Wi() {
  Ct = (_e = $n.now()) + Ie, Kt = pn = 0;
  try {
    rf();
  } finally {
    Kt = 0, af(), Ct = 0;
  }
}
function of() {
  var t = $n.now(), n = t - _e;
  n > Ba && (Ie -= n, _e = t);
}
function af() {
  for (var t, n = ye, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ye = e);
  dn = t, $r(r);
}
function $r(t) {
  if (!Kt) {
    pn && (pn = clearTimeout(pn));
    var n = t - Ct;
    n > 24 ? (t < 1 / 0 && (pn = setTimeout(Wi, t - $n.now() - Ie)), ln && (ln = clearInterval(ln))) : (ln || (_e = $n.now(), ln = setInterval(of, Ba)), Kt = 1, Ua(Wi));
  }
}
function Zi(t, n, e) {
  var r = new Nn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function uf(t, n, e) {
  var r = new Nn(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, u) {
    a = +a, u = u == null ? Re() : +u, r._restart(function l(s) {
      s += i, r._restart(l, i += a, u), o(s);
    }, a, u);
  }, r.restart(t, n, e), r;
}
var sf = $a("start", "end", "cancel", "interrupt"), lf = [], Ya = 0, Ji = 1, Nr = 2, ee = 3, Qi = 4, Tr = 5, re = 6;
function je(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  cf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: sf,
    tween: lf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ya
  });
}
function oi(t, n) {
  var e = tt(t, n);
  if (e.state > Ya) throw new Error("too late; already scheduled");
  return e;
}
function ut(t, n) {
  var e = tt(t, n);
  if (e.state > ee) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function cf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ga(o, 0, e.time);
  function o(s) {
    e.state = Ji, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var c, h, f, p;
    if (e.state !== Ji) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ee) return Zi(a);
        p.state === Qi ? (p.state = re, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = re, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Zi(function() {
      e.state === ee && (e.state = Qi, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = Nr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Nr) {
      for (e.state = ee, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function u(s) {
    for (var c = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(l), e.state = Tr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Tr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = re, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function ff(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Nr && r.state < Tr, r.state = re, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function hf(t) {
  return this.each(function() {
    ff(this, t);
  });
}
function pf(t, n) {
  var e, r;
  return function() {
    var i = ut(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function df(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = ut(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, l = 0, s = i.length; l < s; ++l)
        if (i[l].name === n) {
          i[l] = u;
          break;
        }
      l === s && i.push(u);
    }
    o.tween = i;
  };
}
function gf(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? pf : df)(e, t, n));
}
function ai(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ut(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function Va(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof zt ? ge : (e = zt(n)) ? (n = e, ge) : qa)(t, n);
}
function yf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function _f(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function vf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function mf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function wf(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function bf(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function xf(t, n) {
  var e = Ce(t), r = e === "transform" ? nf : Va;
  return this.attrTween(t, typeof n == "function" ? (e.local ? bf : wf)(e, r, ai(this, "attr." + t, n)) : n == null ? (e.local ? _f : yf)(e) : (e.local ? mf : vf)(e, r, n));
}
function Mf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Af(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function $f(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Af(t, o)), e;
  }
  return i._value = n, i;
}
function Nf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Mf(t, o)), e;
  }
  return i._value = n, i;
}
function Tf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ce(t);
  return this.tween(e, (r.local ? $f : Nf)(r, n));
}
function Sf(t, n) {
  return function() {
    oi(this, t).delay = +n.apply(this, arguments);
  };
}
function kf(t, n) {
  return n = +n, function() {
    oi(this, t).delay = n;
  };
}
function Ef(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Sf : kf)(n, t)) : tt(this.node(), n).delay;
}
function Pf(t, n) {
  return function() {
    ut(this, t).duration = +n.apply(this, arguments);
  };
}
function Of(t, n) {
  return n = +n, function() {
    ut(this, t).duration = n;
  };
}
function zf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Pf : Of)(n, t)) : tt(this.node(), n).duration;
}
function Cf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ut(this, t).ease = n;
  };
}
function If(t) {
  var n = this._id;
  return arguments.length ? this.each(Cf(n, t)) : tt(this.node(), n).ease;
}
function Rf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ut(this, t).ease = e;
  };
}
function jf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Rf(this._id, t));
}
function Ff(t) {
  typeof t != "function" && (t = Sa(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new dt(r, this._parents, this._name, this._id);
}
function Df(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var l = n[u], s = e[u], c = l.length, h = a[u] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || s[p]) && (h[p] = f);
  for (; u < r; ++u)
    a[u] = n[u];
  return new dt(a, this._parents, this._name, this._id);
}
function Lf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function qf(t, n, e) {
  var r, i, o = Lf(n) ? oi : ut;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function Xf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(qf(e, t, n));
}
function Hf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Bf() {
  return this.on("end.remove", Hf(this._id));
}
function Uf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ti(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, s = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = u[f]) && (h = t.call(c, c.__data__, f, u)) && ("__data__" in c && (h.__data__ = c.__data__), s[f] = h, je(s[f], n, e, f, s, tt(c, e)));
  return new dt(o, this._parents, n, e);
}
function Gf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ta(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var l = r[u], s = l.length, c, h = 0; h < s; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = tt(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && je(p, n, e, y, f, d);
        o.push(f), a.push(c);
      }
  return new dt(o, a, n, e);
}
var Yf = In.prototype.constructor;
function Vf() {
  return new Yf(this._groups, this._parents);
}
function Kf(t, n) {
  var e, r, i;
  return function() {
    var o = Vt(this, t), a = (this.style.removeProperty(t), Vt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ka(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Vt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Zf(t, n, e) {
  var r, i, o;
  return function() {
    var a = Vt(this, t), u = e(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Vt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u));
  };
}
function Jf(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var l = ut(this, t), s = l.on, c = l.value[o] == null ? u || (u = Ka(n)) : void 0;
    (s !== e || i !== c) && (r = (e = s).copy()).on(a, i = c), l.on = r;
  };
}
function Qf(t, n, e) {
  var r = (t += "") == "transform" ? tf : Va;
  return n == null ? this.styleTween(t, Kf(t, r)).on("end.style." + t, Ka(t)) : typeof n == "function" ? this.styleTween(t, Zf(t, r, ai(this, "style." + t, n))).each(Jf(this._id, t)) : this.styleTween(t, Wf(t, r, n), e).on("end.style." + t, null);
}
function th(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function nh(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && th(t, a, e)), r;
  }
  return o._value = n, o;
}
function eh(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, nh(t, n, e ?? ""));
}
function rh(t) {
  return function() {
    this.textContent = t;
  };
}
function ih(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function oh(t) {
  return this.tween("text", typeof t == "function" ? ih(ai(this, "text", t)) : rh(t == null ? "" : t + ""));
}
function ah(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function uh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ah(i)), n;
  }
  return r._value = t, r;
}
function sh(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, uh(t));
}
function lh() {
  for (var t = this._name, n = this._id, e = Wa(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      if (l = a[s]) {
        var c = tt(l, n);
        je(l, t, e, s, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dt(r, this._parents, t, e);
}
function ch() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = ut(this, r), c = s.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(l)), s.on = n;
    }), i === 0 && o();
  });
}
var fh = 0;
function dt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Wa() {
  return ++fh;
}
var lt = In.prototype;
dt.prototype = {
  constructor: dt,
  select: Uf,
  selectAll: Gf,
  selectChild: lt.selectChild,
  selectChildren: lt.selectChildren,
  filter: Ff,
  merge: Df,
  selection: Vf,
  transition: lh,
  call: lt.call,
  nodes: lt.nodes,
  node: lt.node,
  size: lt.size,
  empty: lt.empty,
  each: lt.each,
  on: Xf,
  attr: xf,
  attrTween: Tf,
  style: Qf,
  styleTween: eh,
  text: oh,
  textTween: sh,
  remove: Bf,
  tween: gf,
  delay: Ef,
  duration: zf,
  ease: If,
  easeVarying: jf,
  end: ch,
  [Symbol.iterator]: lt[Symbol.iterator]
};
function hh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ph = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: hh
};
function dh(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function gh(t) {
  var n, e;
  t instanceof dt ? (n = t._id, t = t._name) : (n = Wa(), (e = ph).time = Re(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && je(l, t, n, s, a, e || dh(l, n));
  return new dt(r, this._parents, t, n);
}
In.prototype.interrupt = hf;
In.prototype.transition = gh;
function yh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ve(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Wt(t) {
  return t = ve(Math.abs(t)), t ? t[1] : NaN;
}
function _h(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], l = 0; i > 0 && u > 0 && (l + u + 1 > r && (u = Math.max(1, r - l)), o.push(e.substring(i -= u, i + u)), !((l += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function vh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var mh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function me(t) {
  if (!(n = mh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ui({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
me.prototype = ui.prototype;
function ui(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ui.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wh(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Za;
function bh(t, n) {
  var e = ve(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Za = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ve(t, Math.max(0, n + o - 1))[0];
}
function to(t, n) {
  var e = ve(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const no = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: yh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => to(t * 100, n),
  r: to,
  s: bh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function eo(t) {
  return t;
}
var ro = Array.prototype.map, io = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function xh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? eo : _h(ro.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? eo : vh(ro.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(h) {
    h = me(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (g = !0, m = "g") : no[m] || (M === void 0 && (M = 12), _ = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var T = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = y === "$" ? r : /[%p]/.test(m) ? a : "", P = no[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function U(v) {
      var O = T, A = k, z, Nt, D;
      if (m === "c")
        A = P(v) + A, v = "";
      else {
        v = +v;
        var G = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : P(Math.abs(v), M), _ && (v = wh(v)), G && +v == 0 && d !== "+" && (G = !1), O = (G ? d === "(" ? d : u : d === "-" || d === "(" ? "" : d) + O, A = (m === "s" ? io[8 + Za / 3] : "") + A + (G && d === "(" ? ")" : ""), B) {
          for (z = -1, Nt = v.length; ++z < Nt; )
            if (D = v.charCodeAt(z), 48 > D || D > 57) {
              A = (D === 46 ? i + v.slice(z + 1) : v.slice(z)) + A, v = v.slice(0, z);
              break;
            }
        }
      }
      g && !w && (v = n(v, 1 / 0));
      var Y = O.length + v.length + A.length, E = Y < b ? new Array(b - Y + 1).join(f) : "";
      switch (g && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + A + E;
          break;
        case "=":
          v = O + E + v + A;
          break;
        case "^":
          v = E.slice(0, Y = E.length >> 1) + O + v + A + E.slice(Y);
          break;
        default:
          v = E + O + v + A;
          break;
      }
      return o(v);
    }
    return U.toString = function() {
      return h + "";
    }, U;
  }
  function c(h, f) {
    var p = s((h = me(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Wt(f) / 3))) * 3, y = Math.pow(10, -d), w = io[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var Un, Ja, Qa;
Mh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Mh(t) {
  return Un = xh(t), Ja = Un.format, Qa = Un.formatPrefix, Un;
}
function Ah(t) {
  return Math.max(0, -Wt(Math.abs(t)));
}
function $h(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Wt(n) / 3))) * 3 - Wt(Math.abs(t)));
}
function Nh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Wt(n) - Wt(t)) + 1;
}
function Th(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Sh(t) {
  return function() {
    return t;
  };
}
function kh(t) {
  return +t;
}
var oo = [0, 1];
function Ht(t) {
  return t;
}
function Sr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Sh(isNaN(n) ? NaN : 0.5);
}
function Eh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ph(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Sr(i, r), o = e(a, o)) : (r = Sr(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Oh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Sr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var l = qs(t, u, 1, r) - 1;
    return o[l](i[l](u));
  };
}
function zh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ch() {
  var t = oo, n = oo, e = ii, r, i, o, a = Ht, u, l, s;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Ht && (a = Eh(t[0], t[f - 1])), u = f > 2 ? Oh : Ph, l = s = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = u(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((s || (s = u(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, kh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = Zc, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Ht, c()) : a !== Ht;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Ih() {
  return Ch()(Ht, Ht);
}
function Rh(t, n, e, r) {
  var i = Gs(t, n, e), o;
  switch (r = me(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = $h(i, a)) && (r.precision = o), Qa(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Nh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ah(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ja(r);
}
function jh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Us(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Rh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], l, s, c = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); c-- > 0; ) {
      if (s = br(a, u, e), s === l)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      l = s;
    }
    return t;
  }, t;
}
function jn() {
  var t = Ih();
  return t.copy = function() {
    return zh(t, jn());
  }, Th.apply(t, arguments), jh(t);
}
function gn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
gn.prototype = {
  constructor: gn,
  scale: function(t) {
    return t === 1 ? this : new gn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new gn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
gn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function ie(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Fh(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function tu(t) {
  let n, e, r;
  t.length !== 2 ? (n = ie, e = (u, l) => ie(t(u), l), r = (u, l) => t(u) - l) : (n = t === ie || t === Fh ? t : Dh, e = t, r = t);
  function i(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) < 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function o(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = s + c >>> 1;
        e(u[h], l) <= 0 ? s = h + 1 : c = h;
      } while (s < c);
    }
    return s;
  }
  function a(u, l, s = 0, c = u.length) {
    const h = i(u, l, s, c - 1);
    return h > s && r(u[h - 1], l) > -r(u[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Dh() {
  return 0;
}
function Lh(t) {
  return t === null ? NaN : +t;
}
const qh = tu(ie), Xh = qh.right;
tu(Lh).center;
const Hh = Math.sqrt(50), Bh = Math.sqrt(10), Uh = Math.sqrt(2);
function we(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Hh ? 10 : o >= Bh ? 5 : o >= Uh ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), l = Math.round(n * s), u / s < t && ++u, l / s > n && --l, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), l = Math.round(n / s), u * s < t && ++u, l * s > n && --l), l < u && 0.5 <= e && e < 2 ? we(t, n, e * 2) : [u, l, s];
}
function Gh(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? we(n, t, e) : we(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, l = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) l[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) l[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * a;
  return l;
}
function kr(t, n, e) {
  return n = +n, t = +t, e = +e, we(t, n, e)[2];
}
function Yh(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? kr(n, t, e) : kr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Gn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Vh(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Kh = { value: () => {
} };
function si() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new oe(e);
}
function oe(t) {
  this._ = t;
}
function Wh(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
oe.prototype = si.prototype = {
  constructor: oe,
  on: function(t, n) {
    var e = this._, r = Wh(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Zh(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ao(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ao(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new oe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Zh(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ao(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Kh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Er = "http://www.w3.org/1999/xhtml";
const uo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Er,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), uo.hasOwnProperty(n) ? { space: uo[n], local: t } : t;
}
function Jh(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Er && n.documentElement.namespaceURI === Er ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Qh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function nu(t) {
  var n = Fe(t);
  return (n.local ? Qh : Jh)(n);
}
function tp() {
}
function li(t) {
  return t == null ? tp : function() {
    return this.querySelector(t);
  };
}
function np(t) {
  typeof t != "function" && (t = li(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), l, s, c = 0; c < a; ++c)
      (l = o[c]) && (s = t.call(l, l.__data__, c, o)) && ("__data__" in l && (s.__data__ = l.__data__), u[c] = s);
  return new X(r, this._parents);
}
function ep(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function rp() {
  return [];
}
function eu(t) {
  return t == null ? rp : function() {
    return this.querySelectorAll(t);
  };
}
function ip(t) {
  return function() {
    return ep(t.apply(this, arguments));
  };
}
function op(t) {
  typeof t == "function" ? t = ip(t) : t = eu(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && (r.push(t.call(l, l.__data__, s, a)), i.push(l));
  return new X(r, i);
}
function ru(t) {
  return function() {
    return this.matches(t);
  };
}
function iu(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ap = Array.prototype.find;
function up(t) {
  return function() {
    return ap.call(this.children, t);
  };
}
function sp() {
  return this.firstElementChild;
}
function lp(t) {
  return this.select(t == null ? sp : up(typeof t == "function" ? t : iu(t)));
}
var cp = Array.prototype.filter;
function fp() {
  return Array.from(this.children);
}
function hp(t) {
  return function() {
    return cp.call(this.children, t);
  };
}
function pp(t) {
  return this.selectAll(t == null ? fp : hp(typeof t == "function" ? t : iu(t)));
}
function dp(t) {
  typeof t != "function" && (t = ru(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new X(r, this._parents);
}
function ou(t) {
  return new Array(t.length);
}
function gp() {
  return new X(this._enter || this._groups.map(ou), this._parents);
}
function be(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
be.prototype = {
  constructor: be,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function yp(t) {
  return function() {
    return t;
  };
}
function _p(t, n, e, r, i, o) {
  for (var a = 0, u, l = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new be(t, o[a]);
  for (; a < l; ++a)
    (u = n[a]) && (i[a] = u);
}
function vp(t, n, e, r, i, o, a) {
  var u, l, s = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (u = 0; u < c; ++u)
    (l = n[u]) && (f[u] = p = a.call(l, l.__data__, u, n) + "", s.has(p) ? i[u] = l : s.set(p, l));
  for (u = 0; u < h; ++u)
    p = a.call(t, o[u], u, o) + "", (l = s.get(p)) ? (r[u] = l, l.__data__ = o[u], s.delete(p)) : e[u] = new be(t, o[u]);
  for (u = 0; u < c; ++u)
    (l = n[u]) && s.get(f[u]) === l && (i[u] = l);
}
function mp(t) {
  return t.__data__;
}
function wp(t, n) {
  if (!arguments.length) return Array.from(this, mp);
  var e = n ? vp : _p, r = this._parents, i = this._groups;
  typeof t != "function" && (t = yp(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), l = new Array(o), s = 0; s < o; ++s) {
    var c = r[s], h = i[s], f = h.length, p = bp(t.call(c, c && c.__data__, s, r)), d = p.length, y = u[s] = new Array(d), w = a[s] = new Array(d), b = l[s] = new Array(f);
    e(c, h, y, w, b, p, n);
    for (var g = 0, M = 0, _, m; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(m = w[M]) && ++M < d; ) ;
        _._next = m || null;
      }
  }
  return a = new X(a, r), a._enter = u, a._exit = l, a;
}
function bp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function xp() {
  return new X(this._exit || this._groups.map(ou), this._parents);
}
function Mp(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ap(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), l = 0; l < a; ++l)
    for (var s = e[l], c = r[l], h = s.length, f = u[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = s[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    u[l] = e[l];
  return new X(u, this._parents);
}
function $p() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Np(t) {
  t || (t = Tp);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, l = i[o] = new Array(u), s, c = 0; c < u; ++c)
      (s = a[c]) && (l[c] = s);
    l.sort(n);
  }
  return new X(i, this._parents).order();
}
function Tp(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Sp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function kp() {
  return Array.from(this);
}
function Ep() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Pp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Op() {
  return !this.node();
}
function zp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Cp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ip(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Rp(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function jp(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Fp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Dp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Lp(t, n) {
  var e = Fe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ip : Cp : typeof n == "function" ? e.local ? Dp : Fp : e.local ? jp : Rp)(e, n));
}
function au(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function qp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Xp(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Hp(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Bp(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? qp : typeof n == "function" ? Hp : Xp)(t, n, e ?? "")) : Zt(this.node(), t);
}
function Zt(t, n) {
  return t.style.getPropertyValue(n) || au(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Up(t) {
  return function() {
    delete this[t];
  };
}
function Gp(t, n) {
  return function() {
    this[t] = n;
  };
}
function Yp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Vp(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Up : typeof n == "function" ? Yp : Gp)(t, n)) : this.node()[t];
}
function uu(t) {
  return t.trim().split(/^|\s+/);
}
function ci(t) {
  return t.classList || new su(t);
}
function su(t) {
  this._node = t, this._names = uu(t.getAttribute("class") || "");
}
su.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function lu(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function cu(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Kp(t) {
  return function() {
    lu(this, t);
  };
}
function Wp(t) {
  return function() {
    cu(this, t);
  };
}
function Zp(t, n) {
  return function() {
    (n.apply(this, arguments) ? lu : cu)(this, t);
  };
}
function Jp(t, n) {
  var e = uu(t + "");
  if (arguments.length < 2) {
    for (var r = ci(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Zp : n ? Kp : Wp)(e, n));
}
function Qp() {
  this.textContent = "";
}
function td(t) {
  return function() {
    this.textContent = t;
  };
}
function nd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ed(t) {
  return arguments.length ? this.each(t == null ? Qp : (typeof t == "function" ? nd : td)(t)) : this.node().textContent;
}
function rd() {
  this.innerHTML = "";
}
function id(t) {
  return function() {
    this.innerHTML = t;
  };
}
function od(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ad(t) {
  return arguments.length ? this.each(t == null ? rd : (typeof t == "function" ? od : id)(t)) : this.node().innerHTML;
}
function ud() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sd() {
  return this.each(ud);
}
function ld() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cd() {
  return this.each(ld);
}
function fd(t) {
  var n = typeof t == "function" ? t : nu(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function hd() {
  return null;
}
function pd(t, n) {
  var e = typeof t == "function" ? t : nu(t), r = n == null ? hd : typeof n == "function" ? n : li(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function dd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function gd() {
  return this.each(dd);
}
function yd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _d() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function vd(t) {
  return this.select(t ? _d : yd);
}
function md(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function wd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function bd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function xd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Md(t, n, e) {
  return function() {
    var r = this.__on, i, o = wd(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ad(t, n, e) {
  var r = bd(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var l = 0, s = u.length, c; l < s; ++l)
        for (i = 0, c = u[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? Md : xd, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function fu(t, n, e) {
  var r = au(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function $d(t, n) {
  return function() {
    return fu(this, t, n);
  };
}
function Nd(t, n) {
  return function() {
    return fu(this, t, n.apply(this, arguments));
  };
}
function Td(t, n) {
  return this.each((typeof n == "function" ? Nd : $d)(t, n));
}
function* Sd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var hu = [null];
function X(t, n) {
  this._groups = t, this._parents = n;
}
function Fn() {
  return new X([[document.documentElement]], hu);
}
function kd() {
  return this;
}
X.prototype = Fn.prototype = {
  constructor: X,
  select: np,
  selectAll: op,
  selectChild: lp,
  selectChildren: pp,
  filter: dp,
  data: wp,
  enter: gp,
  exit: xp,
  join: Mp,
  merge: Ap,
  selection: kd,
  order: $p,
  sort: Np,
  call: Sp,
  nodes: kp,
  node: Ep,
  size: Pp,
  empty: Op,
  each: zp,
  attr: Lp,
  style: Bp,
  property: Vp,
  classed: Jp,
  text: ed,
  html: ad,
  raise: sd,
  lower: cd,
  append: fd,
  insert: pd,
  remove: gd,
  clone: vd,
  datum: md,
  on: Ad,
  dispatch: Td,
  [Symbol.iterator]: Sd
};
function I(t) {
  return typeof t == "string" ? new X([[document.querySelector(t)]], [document.documentElement]) : new X([[t]], hu);
}
function Ed(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function so(t, n) {
  if (t = Ed(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Pd = { passive: !1 }, Tn = { capture: !0, passive: !1 };
function ur(t) {
  t.stopImmediatePropagation();
}
function Gt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Od(t) {
  var n = t.document.documentElement, e = I(t).on("dragstart.drag", Gt, Tn);
  "onselectstart" in n ? e.on("selectstart.drag", Gt, Tn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function zd(t, n) {
  var e = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Gt, Tn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Yn = (t) => () => t;
function Pr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: u,
  dx: l,
  dy: s,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: s, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Pr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Cd(t) {
  return !t.ctrlKey && !t.button;
}
function Id() {
  return this.parentNode;
}
function Rd(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function jd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fd() {
  var t = Cd, n = Id, e = Rd, r = jd, i = {}, o = si("start", "drag", "end"), a = 0, u, l, s, c, h = 0;
  function f(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Pd).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, m) {
    if (!(c || !t.call(this, _, m))) {
      var T = M(this, n.call(this, _, m), _, m, "mouse");
      T && (I(_.view).on("mousemove.drag", d, Tn).on("mouseup.drag", y, Tn), Od(_.view), ur(_), s = !1, u = _.clientX, l = _.clientY, T("start", _));
    }
  }
  function d(_) {
    if (Gt(_), !s) {
      var m = _.clientX - u, T = _.clientY - l;
      s = m * m + T * T > h;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    I(_.view).on("mousemove.drag mouseup.drag", null), zd(_.view, s), Gt(_), i.mouse("end", _);
  }
  function w(_, m) {
    if (t.call(this, _, m)) {
      var T = _.changedTouches, k = n.call(this, _, m), P = T.length, B, U;
      for (B = 0; B < P; ++B)
        (U = M(this, k, _, m, T[B].identifier, T[B])) && (ur(_), U("start", _, T[B]));
    }
  }
  function b(_) {
    var m = _.changedTouches, T = m.length, k, P;
    for (k = 0; k < T; ++k)
      (P = i[m[k].identifier]) && (Gt(_), P("drag", _, m[k]));
  }
  function g(_) {
    var m = _.changedTouches, T = m.length, k, P;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), k = 0; k < T; ++k)
      (P = i[m[k].identifier]) && (ur(_), P("end", _, m[k]));
  }
  function M(_, m, T, k, P, B) {
    var U = o.copy(), v = so(B || T, m), O, A, z;
    if ((z = e.call(_, new Pr("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: P,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), k)) != null)
      return O = z.x - v[0] || 0, A = z.y - v[1] || 0, function Nt(D, G, Y) {
        var E = v, ir;
        switch (D) {
          case "start":
            i[P] = Nt, ir = a++;
            break;
          case "end":
            delete i[P], --a;
          // falls through
          case "drag":
            v = so(Y || G, m), ir = a;
            break;
        }
        U.call(
          D,
          _,
          new Pr(D, {
            sourceEvent: G,
            subject: z,
            target: f,
            identifier: P,
            active: ir,
            x: v[0] + O,
            y: v[1] + A,
            dx: v[0] - E[0],
            dy: v[1] - E[1],
            dispatch: U
          }),
          k
        );
      };
  }
  return f.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Yn(!!_), f) : t;
  }, f.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Yn(_), f) : n;
  }, f.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Yn(_), f) : e;
  }, f.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Yn(!!_), f) : r;
  }, f.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? f : _;
  }, f.clickDistance = function(_) {
    return arguments.length ? (h = (_ = +_) * _, f) : Math.sqrt(h);
  }, f;
}
function fi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function pu(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Dn() {
}
var Sn = 0.7, xe = 1 / Sn, Yt = "\\s*([+-]?\\d+)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Dd = /^#([0-9a-f]{3,8})$/, Ld = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), qd = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), Xd = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${kn}\\)$`), Hd = new RegExp(`^rgba\\(${it},${it},${it},${kn}\\)$`), Bd = new RegExp(`^hsl\\(${kn},${it},${it}\\)$`), Ud = new RegExp(`^hsla\\(${kn},${it},${it},${kn}\\)$`), lo = {
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
  yellowgreen: 10145074
};
fi(Dn, It, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: co,
  // Deprecated! Use color.formatHex.
  formatHex: co,
  formatHex8: Gd,
  formatHsl: Yd,
  formatRgb: fo,
  toString: fo
});
function co() {
  return this.rgb().formatHex();
}
function Gd() {
  return this.rgb().formatHex8();
}
function Yd() {
  return du(this).formatHsl();
}
function fo() {
  return this.rgb().formatRgb();
}
function It(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Dd.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ho(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Vn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Vn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ld.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = qd.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Xd.exec(t)) ? Vn(n[1], n[2], n[3], n[4]) : (n = Hd.exec(t)) ? Vn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Bd.exec(t)) ? yo(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ud.exec(t)) ? yo(n[1], n[2] / 100, n[3] / 100, n[4]) : lo.hasOwnProperty(t) ? ho(lo[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function ho(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Vn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function Vd(t) {
  return t instanceof Dn || (t = It(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Or(t, n, e, r) {
  return arguments.length === 1 ? Vd(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
fi(F, Or, pu(Dn, {
  brighter(t) {
    return t = t == null ? xe : Math.pow(xe, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Sn : Math.pow(Sn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(Ot(this.r), Ot(this.g), Ot(this.b), Me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: Kd,
  formatRgb: go,
  toString: go
}));
function po() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function Kd() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function go() {
  const t = Me(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Me(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ot(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kt(t) {
  return t = Ot(t), (t < 16 ? "0" : "") + t.toString(16);
}
function yo(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new J(t, n, e, r);
}
function du(t) {
  if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
  if (t instanceof Dn || (t = It(t)), !t) return new J();
  if (t instanceof J) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, l = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : u = l > 0 && l < 1 ? 0 : a, new J(a, u, l, t.opacity);
}
function Wd(t, n, e, r) {
  return arguments.length === 1 ? du(t) : new J(t, n, e, r ?? 1);
}
function J(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
fi(J, Wd, pu(Dn, {
  brighter(t) {
    return t = t == null ? xe : Math.pow(xe, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Sn : Math.pow(Sn, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      sr(t >= 240 ? t - 240 : t + 120, i, r),
      sr(t, i, r),
      sr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new J(_o(this.h), Kn(this.s), Kn(this.l), Me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${_o(this.h)}, ${Kn(this.s) * 100}%, ${Kn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function _o(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function sr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const hi = (t) => () => t;
function Zd(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Jd(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Qd(t) {
  return (t = +t) == 1 ? gu : function(n, e) {
    return e - n ? Jd(n, e, t) : hi(isNaN(n) ? e : n);
  };
}
function gu(t, n) {
  var e = n - t;
  return e ? Zd(t, e) : hi(isNaN(t) ? n : t);
}
const Ae = function t(n) {
  var e = Qd(n);
  function r(i, o) {
    var a = e((i = Or(i)).r, (o = Or(o)).r), u = e(i.g, o.g), l = e(i.b, o.b), s = gu(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function t0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function n0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function e0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = pi(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function r0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function K(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function i0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = pi(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, lr = new RegExp(zr.source, "g");
function o0(t) {
  return function() {
    return t;
  };
}
function a0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function yu(t, n) {
  var e = zr.lastIndex = lr.lastIndex = 0, r, i, o, a = -1, u = [], l = [];
  for (t = t + "", n = n + ""; (r = zr.exec(t)) && (i = lr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, l.push({ i: a, x: K(r, i) })), e = lr.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? l[0] ? a0(l[0].x) : o0(n) : (n = l.length, function(s) {
    for (var c = 0, h; c < n; ++c) u[(h = l[c]).i] = h.x(s);
    return u.join("");
  });
}
function pi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? hi(n) : (e === "number" ? K : e === "string" ? (r = It(n)) ? (n = r, Ae) : yu : n instanceof It ? Ae : n instanceof Date ? r0 : n0(n) ? t0 : Array.isArray(n) ? e0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? i0 : K)(t, n);
}
function u0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var vo = 180 / Math.PI, _u = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vu(t, n, e, r, i, o) {
  var a, u, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, l /= u), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * vo,
    skewX: Math.atan(l) * vo,
    scaleX: a,
    scaleY: u
  };
}
var Wn;
function s0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? _u : vu(n.a, n.b, n.c, n.d, n.e, n.f);
}
function l0(t) {
  return t == null || (Wn || (Wn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wn.setAttribute("transform", t), !(t = Wn.transform.baseVal.consolidate())) ? _u : (t = t.matrix, vu(t.a, t.b, t.c, t.d, t.e, t.f));
}
function mu(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, c, h, f, p, d) {
    if (s !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: K(s, h) }, { i: y - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(s, c, h, f) {
    s !== c ? (s - c > 180 ? c += 360 : c - s > 180 && (s += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: K(s, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function u(s, c, h, f) {
    s !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: K(s, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(s, c, h, f, p, d) {
    if (s !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: K(s, h) }, { i: y - 2, x: K(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(s, c) {
    var h = [], f = [];
    return s = t(s), c = t(c), o(s.translateX, s.translateY, c.translateX, c.translateY, h, f), a(s.rotate, c.rotate, h, f), u(s.skewX, c.skewX, h, f), l(s.scaleX, s.scaleY, c.scaleX, c.scaleY, h, f), s = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var c0 = mu(s0, "px, ", "px)", "deg)"), f0 = mu(l0, ", ", ")", ")"), Jt = 0, yn = 0, cn = 0, wu = 1e3, $e, _n, Ne = 0, Rt = 0, De = 0, En = typeof performance == "object" && performance.now ? performance : Date, bu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function di() {
  return Rt || (bu(h0), Rt = En.now() + De);
}
function h0() {
  Rt = 0;
}
function Te() {
  this._call = this._time = this._next = null;
}
Te.prototype = xu.prototype = {
  constructor: Te,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? di() : +e) + (n == null ? 0 : +n), !this._next && _n !== this && (_n ? _n._next = this : $e = this, _n = this), this._call = t, this._time = e, Cr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cr());
  }
};
function xu(t, n, e) {
  var r = new Te();
  return r.restart(t, n, e), r;
}
function p0() {
  di(), ++Jt;
  for (var t = $e, n; t; )
    (n = Rt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Jt;
}
function mo() {
  Rt = (Ne = En.now()) + De, Jt = yn = 0;
  try {
    p0();
  } finally {
    Jt = 0, g0(), Rt = 0;
  }
}
function d0() {
  var t = En.now(), n = t - Ne;
  n > wu && (De -= n, Ne = t);
}
function g0() {
  for (var t, n = $e, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : $e = e);
  _n = t, Cr(r);
}
function Cr(t) {
  if (!Jt) {
    yn && (yn = clearTimeout(yn));
    var n = t - Rt;
    n > 24 ? (t < 1 / 0 && (yn = setTimeout(mo, t - En.now() - De)), cn && (cn = clearInterval(cn))) : (cn || (Ne = En.now(), cn = setInterval(d0, wu)), Jt = 1, bu(mo));
  }
}
function wo(t, n, e) {
  var r = new Te();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var y0 = si("start", "end", "cancel", "interrupt"), _0 = [], Mu = 0, bo = 1, Ir = 2, ae = 3, xo = 4, Rr = 5, ue = 6;
function Le(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  v0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: y0,
    tween: _0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Mu
  });
}
function gi(t, n) {
  var e = nt(t, n);
  if (e.state > Mu) throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = nt(t, n);
  if (e.state > ae) throw new Error("too late; already running");
  return e;
}
function nt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function v0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = xu(o, 0, e.time);
  function o(s) {
    e.state = bo, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var c, h, f, p;
    if (e.state !== bo) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ae) return wo(a);
        p.state === xo ? (p.state = ue, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ue, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (wo(function() {
      e.state === ae && (e.state = xo, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = Ir, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ir) {
      for (e.state = ae, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function u(s) {
    for (var c = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(l), e.state = Rr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Rr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ue, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function m0(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Ir && r.state < Rr, r.state = ue, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function w0(t) {
  return this.each(function() {
    m0(this, t);
  });
}
function b0(t, n) {
  var e, r;
  return function() {
    var i = st(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function x0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = st(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, l = 0, s = i.length; l < s; ++l)
        if (i[l].name === n) {
          i[l] = u;
          break;
        }
      l === s && i.push(u);
    }
    o.tween = i;
  };
}
function M0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = nt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? b0 : x0)(e, t, n));
}
function yi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return nt(i, r).value[n];
  };
}
function Au(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof It ? Ae : (e = It(n)) ? (n = e, Ae) : yu)(t, n);
}
function A0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function N0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function T0(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function S0(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function k0(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = u + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u)));
  };
}
function E0(t, n) {
  var e = Fe(t), r = e === "transform" ? f0 : Au;
  return this.attrTween(t, typeof n == "function" ? (e.local ? k0 : S0)(e, r, yi(this, "attr." + t, n)) : n == null ? (e.local ? $0 : A0)(e) : (e.local ? T0 : N0)(e, r, n));
}
function P0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function O0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function z0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && O0(t, o)), e;
  }
  return i._value = n, i;
}
function C0(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && P0(t, o)), e;
  }
  return i._value = n, i;
}
function I0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Fe(t);
  return this.tween(e, (r.local ? z0 : C0)(r, n));
}
function R0(t, n) {
  return function() {
    gi(this, t).delay = +n.apply(this, arguments);
  };
}
function j0(t, n) {
  return n = +n, function() {
    gi(this, t).delay = n;
  };
}
function F0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? R0 : j0)(n, t)) : nt(this.node(), n).delay;
}
function D0(t, n) {
  return function() {
    st(this, t).duration = +n.apply(this, arguments);
  };
}
function L0(t, n) {
  return n = +n, function() {
    st(this, t).duration = n;
  };
}
function q0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? D0 : L0)(n, t)) : nt(this.node(), n).duration;
}
function X0(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function H0(t) {
  var n = this._id;
  return arguments.length ? this.each(X0(n, t)) : nt(this.node(), n).ease;
}
function B0(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    st(this, t).ease = e;
  };
}
function U0(t) {
  if (typeof t != "function") throw new Error();
  return this.each(B0(this._id, t));
}
function G0(t) {
  typeof t != "function" && (t = ru(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], l, s = 0; s < a; ++s)
      (l = o[s]) && t.call(l, l.__data__, s, o) && u.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function Y0(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var l = n[u], s = e[u], c = l.length, h = a[u] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || s[p]) && (h[p] = f);
  for (; u < r; ++u)
    a[u] = n[u];
  return new gt(a, this._parents, this._name, this._id);
}
function V0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function K0(t, n, e) {
  var r, i, o = V0(n) ? gi : st;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function W0(t, n) {
  var e = this._id;
  return arguments.length < 2 ? nt(this.node(), e).on.on(t) : this.each(K0(e, t, n));
}
function Z0(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function J0() {
  return this.on("end.remove", Z0(this._id));
}
function Q0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = li(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, s = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = u[f]) && (h = t.call(c, c.__data__, f, u)) && ("__data__" in c && (h.__data__ = c.__data__), s[f] = h, Le(s[f], n, e, f, s, nt(c, e)));
  return new gt(o, this._parents, n, e);
}
function tg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = eu(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var l = r[u], s = l.length, c, h = 0; h < s; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = nt(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Le(p, n, e, y, f, d);
        o.push(f), a.push(c);
      }
  return new gt(o, a, n, e);
}
var ng = Fn.prototype.constructor;
function eg() {
  return new ng(this._groups, this._parents);
}
function rg(t, n) {
  var e, r, i;
  return function() {
    var o = Zt(this, t), a = (this.style.removeProperty(t), Zt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function $u(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ig(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Zt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function og(t, n, e) {
  var r, i, o;
  return function() {
    var a = Zt(this, t), u = e(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Zt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, u));
  };
}
function ag(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var l = st(this, t), s = l.on, c = l.value[o] == null ? u || (u = $u(n)) : void 0;
    (s !== e || i !== c) && (r = (e = s).copy()).on(a, i = c), l.on = r;
  };
}
function ug(t, n, e) {
  var r = (t += "") == "transform" ? c0 : Au;
  return n == null ? this.styleTween(t, rg(t, r)).on("end.style." + t, $u(t)) : typeof n == "function" ? this.styleTween(t, og(t, r, yi(this, "style." + t, n))).each(ag(this._id, t)) : this.styleTween(t, ig(t, r, n), e).on("end.style." + t, null);
}
function sg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function lg(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && sg(t, a, e)), r;
  }
  return o._value = n, o;
}
function cg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, lg(t, n, e ?? ""));
}
function fg(t) {
  return function() {
    this.textContent = t;
  };
}
function hg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function pg(t) {
  return this.tween("text", typeof t == "function" ? hg(yi(this, "text", t)) : fg(t == null ? "" : t + ""));
}
function dg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function gg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && dg(i)), n;
  }
  return r._value = t, r;
}
function yg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, gg(t));
}
function _g() {
  for (var t = this._name, n = this._id, e = Nu(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      if (l = a[s]) {
        var c = nt(l, n);
        Le(l, t, e, s, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new gt(r, this._parents, t, e);
}
function vg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = st(this, r), c = s.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(l)), s.on = n;
    }), i === 0 && o();
  });
}
var mg = 0;
function gt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Nu() {
  return ++mg;
}
var ct = Fn.prototype;
gt.prototype = {
  constructor: gt,
  select: Q0,
  selectAll: tg,
  selectChild: ct.selectChild,
  selectChildren: ct.selectChildren,
  filter: G0,
  merge: Y0,
  selection: eg,
  transition: _g,
  call: ct.call,
  nodes: ct.nodes,
  node: ct.node,
  size: ct.size,
  empty: ct.empty,
  each: ct.each,
  on: W0,
  attr: E0,
  attrTween: I0,
  style: ug,
  styleTween: cg,
  text: pg,
  textTween: yg,
  remove: J0,
  tween: M0,
  delay: F0,
  duration: q0,
  ease: H0,
  easeVarying: U0,
  end: vg,
  [Symbol.iterator]: ct[Symbol.iterator]
};
function wg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var bg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wg
};
function xg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Mg(t) {
  var n, e;
  t instanceof gt ? (n = t._id, t = t._name) : (n = Nu(), (e = bg).time = di(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, l, s = 0; s < u; ++s)
      (l = a[s]) && Le(l, t, n, s, a, e || xg(l, n));
  return new gt(r, this._parents, t, n);
}
Fn.prototype.interrupt = w0;
Fn.prototype.transition = Mg;
const jr = Math.PI, Fr = 2 * jr, Tt = 1e-6, Ag = Fr - Tt;
function Tu(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function $g(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Tu;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Su {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Tu : $g(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, u = this._y1, l = r - n, s = i - e, c = a - n, h = u - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Tt) if (!(Math.abs(h * l - s * c) > Tt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - u, y = l * l + s * s, w = p * p + d * d, b = Math.sqrt(y), g = Math.sqrt(f), M = o * Math.tan((jr - Math.acos((y + f - w) / (2 * b * g))) / 2), _ = M / g, m = M / b;
      Math.abs(_ - 1) > Tt && this._append`L${n + _ * c},${e + _ * h}`, this._append`A${o},${o},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * s}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let u = r * Math.cos(i), l = r * Math.sin(i), s = n + u, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${s},${c}` : (Math.abs(this._x1 - s) > Tt || Math.abs(this._y1 - c) > Tt) && this._append`L${s},${c}`, r && (f < 0 && (f = f % Fr + Fr), f > Ag ? this._append`A${r},${r},0,1,${h},${n - u},${e - l}A${r},${r},0,1,${h},${this._x1 = s},${this._y1 = c}` : f > Tt && this._append`A${r},${r},0,${+(f >= jr)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function et() {
  return new Su();
}
et.prototype = Su.prototype;
function Ng(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Se(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Qt(t) {
  return t = Se(Math.abs(t)), t ? t[1] : NaN;
}
function Tg(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], l = 0; i > 0 && u > 0 && (l + u + 1 > r && (u = Math.max(1, r - l)), o.push(e.substring(i -= u, i + u)), !((l += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Sg(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var kg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ke(t) {
  if (!(n = kg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new _i({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
ke.prototype = _i.prototype;
function _i(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
_i.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Eg(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ku;
function Pg(t, n) {
  var e = Se(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ku = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Se(t, Math.max(0, n + o - 1))[0];
}
function Mo(t, n) {
  var e = Se(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ao = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ng,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Mo(t * 100, n),
  r: Mo,
  s: Pg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function $o(t) {
  return t;
}
var No = Array.prototype.map, To = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Og(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? $o : Tg(No.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? $o : Sg(No.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(h) {
    h = ke(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (g = !0, m = "g") : Ao[m] || (M === void 0 && (M = 12), _ = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var T = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = y === "$" ? r : /[%p]/.test(m) ? a : "", P = Ao[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function U(v) {
      var O = T, A = k, z, Nt, D;
      if (m === "c")
        A = P(v) + A, v = "";
      else {
        v = +v;
        var G = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : P(Math.abs(v), M), _ && (v = Eg(v)), G && +v == 0 && d !== "+" && (G = !1), O = (G ? d === "(" ? d : u : d === "-" || d === "(" ? "" : d) + O, A = (m === "s" ? To[8 + ku / 3] : "") + A + (G && d === "(" ? ")" : ""), B) {
          for (z = -1, Nt = v.length; ++z < Nt; )
            if (D = v.charCodeAt(z), 48 > D || D > 57) {
              A = (D === 46 ? i + v.slice(z + 1) : v.slice(z)) + A, v = v.slice(0, z);
              break;
            }
        }
      }
      g && !w && (v = n(v, 1 / 0));
      var Y = O.length + v.length + A.length, E = Y < b ? new Array(b - Y + 1).join(f) : "";
      switch (g && w && (v = n(E + v, E.length ? b - A.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + A + E;
          break;
        case "=":
          v = O + E + v + A;
          break;
        case "^":
          v = E.slice(0, Y = E.length >> 1) + O + v + A + E.slice(Y);
          break;
        default:
          v = E + O + v + A;
          break;
      }
      return o(v);
    }
    return U.toString = function() {
      return h + "";
    }, U;
  }
  function c(h, f) {
    var p = s((h = ke(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Qt(f) / 3))) * 3, y = Math.pow(10, -d), w = To[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var Zn, qe, Eu;
zg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function zg(t) {
  return Zn = Og(t), qe = Zn.format, Eu = Zn.formatPrefix, Zn;
}
function Cg(t) {
  return Math.max(0, -Qt(Math.abs(t)));
}
function Ig(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Qt(n) / 3))) * 3 - Qt(Math.abs(t)));
}
function Rg(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Qt(n) - Qt(t)) + 1;
}
function jg(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Fg(t) {
  return function() {
    return t;
  };
}
function Dg(t) {
  return +t;
}
var So = [0, 1];
function Bt(t) {
  return t;
}
function Dr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Fg(isNaN(n) ? NaN : 0.5);
}
function Lg(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function qg(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Dr(i, r), o = e(a, o)) : (r = Dr(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Xg(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Dr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var l = Xh(t, u, 1, r) - 1;
    return o[l](i[l](u));
  };
}
function Hg(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Bg() {
  var t = So, n = So, e = pi, r, i, o, a = Bt, u, l, s;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Bt && (a = Lg(t[0], t[f - 1])), u = f > 2 ? Xg : qg, l = s = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = u(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((s || (s = u(n, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Dg), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = u0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Bt, c()) : a !== Bt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Ug() {
  return Bg()(Bt, Bt);
}
function Gg(t, n, e, r) {
  var i = Yh(t, n, e), o;
  switch (r = ke(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ig(i, a)) && (r.precision = o), Eu(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Rg(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Cg(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return qe(r);
}
function Yg(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Gh(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Gg(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], l, s, c = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); c-- > 0; ) {
      if (s = kr(a, u, e), s === l)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      l = s;
    }
    return t;
  }, t;
}
function tn() {
  var t = Ug();
  return t.copy = function() {
    return Hg(t, tn());
  }, jg.apply(t, arguments), Yg(t);
}
function vn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
vn.prototype = {
  constructor: vn,
  scale: function(t) {
    return t === 1 ? this : new vn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new vn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
vn.prototype;
var Pu = typeof global == "object" && global && global.Object === Object && global, Vg = typeof self == "object" && self && self.Object === Object && self, _t = Pu || Vg || Function("return this")(), at = _t.Symbol, Ou = Object.prototype, Kg = Ou.hasOwnProperty, Wg = Ou.toString, fn = at ? at.toStringTag : void 0;
function Zg(t) {
  var n = Kg.call(t, fn), e = t[fn];
  try {
    t[fn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Wg.call(t);
  return r && (n ? t[fn] = e : delete t[fn]), i;
}
var Jg = Object.prototype, Qg = Jg.toString;
function ty(t) {
  return Qg.call(t);
}
var ny = "[object Null]", ey = "[object Undefined]", ko = at ? at.toStringTag : void 0;
function rn(t) {
  return t == null ? t === void 0 ? ey : ny : ko && ko in Object(t) ? Zg(t) : ty(t);
}
function nn(t) {
  return t != null && typeof t == "object";
}
var ry = "[object Symbol]";
function Xe(t) {
  return typeof t == "symbol" || nn(t) && rn(t) == ry;
}
function zu(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var Q = Array.isArray, Eo = at ? at.prototype : void 0, Po = Eo ? Eo.toString : void 0;
function Cu(t) {
  if (typeof t == "string")
    return t;
  if (Q(t))
    return zu(t, Cu) + "";
  if (Xe(t))
    return Po ? Po.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var iy = /\s/;
function oy(t) {
  for (var n = t.length; n-- && iy.test(t.charAt(n)); )
    ;
  return n;
}
var ay = /^\s+/;
function uy(t) {
  return t && t.slice(0, oy(t) + 1).replace(ay, "");
}
function en(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Oo = NaN, sy = /^[-+]0x[0-9a-f]+$/i, ly = /^0b[01]+$/i, cy = /^0o[0-7]+$/i, fy = parseInt;
function hy(t) {
  if (typeof t == "number")
    return t;
  if (Xe(t))
    return Oo;
  if (en(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = en(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = uy(t);
  var e = ly.test(t);
  return e || cy.test(t) ? fy(t.slice(2), e ? 2 : 8) : sy.test(t) ? Oo : +t;
}
var py = 1 / 0, dy = 17976931348623157e292;
function cr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = hy(t), t === py || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * dy;
  }
  return t === t ? t : 0;
}
function gy(t) {
  return t;
}
var yy = "[object AsyncFunction]", _y = "[object Function]", vy = "[object GeneratorFunction]", my = "[object Proxy]";
function Iu(t) {
  if (!en(t))
    return !1;
  var n = rn(t);
  return n == _y || n == vy || n == yy || n == my;
}
var fr = _t["__core-js_shared__"], zo = function() {
  var t = /[^.]+$/.exec(fr && fr.keys && fr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function wy(t) {
  return !!zo && zo in t;
}
var by = Function.prototype, xy = by.toString;
function Lt(t) {
  if (t != null) {
    try {
      return xy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var My = /[\\^$.*+?()[\]{}|]/g, Ay = /^\[object .+?Constructor\]$/, $y = Function.prototype, Ny = Object.prototype, Ty = $y.toString, Sy = Ny.hasOwnProperty, ky = RegExp(
  "^" + Ty.call(Sy).replace(My, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ey(t) {
  if (!en(t) || wy(t))
    return !1;
  var n = Iu(t) ? ky : Ay;
  return n.test(Lt(t));
}
function Py(t, n) {
  return t == null ? void 0 : t[n];
}
function on(t, n) {
  var e = Py(t, n);
  return Ey(e) ? e : void 0;
}
var Lr = on(_t, "WeakMap"), Oy = 9007199254740991, zy = /^(?:0|[1-9]\d*)$/;
function vi(t, n) {
  var e = typeof t;
  return n = n ?? Oy, !!n && (e == "number" || e != "symbol" && zy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function mi(t, n) {
  return t === n || t !== t && n !== n;
}
var Cy = 9007199254740991;
function wi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Cy;
}
function He(t) {
  return t != null && wi(t.length) && !Iu(t);
}
function Iy(t, n, e) {
  if (!en(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? He(e) && vi(n, e.length) : r == "string" && n in e) ? mi(e[n], t) : !1;
}
var Ry = Object.prototype;
function jy(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Ry;
  return t === e;
}
function Fy(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Dy = "[object Arguments]";
function Co(t) {
  return nn(t) && rn(t) == Dy;
}
var Ru = Object.prototype, Ly = Ru.hasOwnProperty, qy = Ru.propertyIsEnumerable, bi = Co(/* @__PURE__ */ function() {
  return arguments;
}()) ? Co : function(t) {
  return nn(t) && Ly.call(t, "callee") && !qy.call(t, "callee");
};
function Xy() {
  return !1;
}
var ju = typeof exports == "object" && exports && !exports.nodeType && exports, Io = ju && typeof module == "object" && module && !module.nodeType && module, Hy = Io && Io.exports === ju, Ro = Hy ? _t.Buffer : void 0, By = Ro ? Ro.isBuffer : void 0, qr = By || Xy, Uy = "[object Arguments]", Gy = "[object Array]", Yy = "[object Boolean]", Vy = "[object Date]", Ky = "[object Error]", Wy = "[object Function]", Zy = "[object Map]", Jy = "[object Number]", Qy = "[object Object]", t_ = "[object RegExp]", n_ = "[object Set]", e_ = "[object String]", r_ = "[object WeakMap]", i_ = "[object ArrayBuffer]", o_ = "[object DataView]", a_ = "[object Float32Array]", u_ = "[object Float64Array]", s_ = "[object Int8Array]", l_ = "[object Int16Array]", c_ = "[object Int32Array]", f_ = "[object Uint8Array]", h_ = "[object Uint8ClampedArray]", p_ = "[object Uint16Array]", d_ = "[object Uint32Array]", $ = {};
$[a_] = $[u_] = $[s_] = $[l_] = $[c_] = $[f_] = $[h_] = $[p_] = $[d_] = !0;
$[Uy] = $[Gy] = $[i_] = $[Yy] = $[o_] = $[Vy] = $[Ky] = $[Wy] = $[Zy] = $[Jy] = $[Qy] = $[t_] = $[n_] = $[e_] = $[r_] = !1;
function g_(t) {
  return nn(t) && wi(t.length) && !!$[rn(t)];
}
function y_(t) {
  return function(n) {
    return t(n);
  };
}
var Fu = typeof exports == "object" && exports && !exports.nodeType && exports, wn = Fu && typeof module == "object" && module && !module.nodeType && module, __ = wn && wn.exports === Fu, hr = __ && Pu.process, jo = function() {
  try {
    var t = wn && wn.require && wn.require("util").types;
    return t || hr && hr.binding && hr.binding("util");
  } catch {
  }
}(), Fo = jo && jo.isTypedArray, Du = Fo ? y_(Fo) : g_, v_ = Object.prototype, m_ = v_.hasOwnProperty;
function w_(t, n) {
  var e = Q(t), r = !e && bi(t), i = !e && !r && qr(t), o = !e && !r && !i && Du(t), a = e || r || i || o, u = a ? Fy(t.length, String) : [], l = u.length;
  for (var s in t)
    m_.call(t, s) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    vi(s, l))) && u.push(s);
  return u;
}
function b_(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var x_ = b_(Object.keys, Object), M_ = Object.prototype, A_ = M_.hasOwnProperty;
function $_(t) {
  if (!jy(t))
    return x_(t);
  var n = [];
  for (var e in Object(t))
    A_.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function xi(t) {
  return He(t) ? w_(t) : $_(t);
}
var N_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, T_ = /^\w*$/;
function Mi(t, n) {
  if (Q(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Xe(t) ? !0 : T_.test(t) || !N_.test(t) || n != null && t in Object(n);
}
var Pn = on(Object, "create");
function S_() {
  this.__data__ = Pn ? Pn(null) : {}, this.size = 0;
}
function k_(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var E_ = "__lodash_hash_undefined__", P_ = Object.prototype, O_ = P_.hasOwnProperty;
function z_(t) {
  var n = this.__data__;
  if (Pn) {
    var e = n[t];
    return e === E_ ? void 0 : e;
  }
  return O_.call(n, t) ? n[t] : void 0;
}
var C_ = Object.prototype, I_ = C_.hasOwnProperty;
function R_(t) {
  var n = this.__data__;
  return Pn ? n[t] !== void 0 : I_.call(n, t);
}
var j_ = "__lodash_hash_undefined__";
function F_(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Pn && n === void 0 ? j_ : n, this;
}
function jt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
jt.prototype.clear = S_;
jt.prototype.delete = k_;
jt.prototype.get = z_;
jt.prototype.has = R_;
jt.prototype.set = F_;
function D_() {
  this.__data__ = [], this.size = 0;
}
function Be(t, n) {
  for (var e = t.length; e--; )
    if (mi(t[e][0], n))
      return e;
  return -1;
}
var L_ = Array.prototype, q_ = L_.splice;
function X_(t) {
  var n = this.__data__, e = Be(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : q_.call(n, e, 1), --this.size, !0;
}
function H_(t) {
  var n = this.__data__, e = Be(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function B_(t) {
  return Be(this.__data__, t) > -1;
}
function U_(t, n) {
  var e = this.__data__, r = Be(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = D_;
vt.prototype.delete = X_;
vt.prototype.get = H_;
vt.prototype.has = B_;
vt.prototype.set = U_;
var On = on(_t, "Map");
function G_() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (On || vt)(),
    string: new jt()
  };
}
function Y_(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ue(t, n) {
  var e = t.__data__;
  return Y_(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function V_(t) {
  var n = Ue(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function K_(t) {
  return Ue(this, t).get(t);
}
function W_(t) {
  return Ue(this, t).has(t);
}
function Z_(t, n) {
  var e = Ue(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = G_;
mt.prototype.delete = V_;
mt.prototype.get = K_;
mt.prototype.has = W_;
mt.prototype.set = Z_;
var J_ = "Expected a function";
function Ai(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(J_);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ai.Cache || mt)(), e;
}
Ai.Cache = mt;
var Q_ = 500;
function tv(t) {
  var n = Ai(t, function(r) {
    return e.size === Q_ && e.clear(), r;
  }), e = n.cache;
  return n;
}
var nv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ev = /\\(\\)?/g, rv = tv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(nv, function(e, r, i, o) {
    n.push(i ? o.replace(ev, "$1") : r || e);
  }), n;
});
function iv(t) {
  return t == null ? "" : Cu(t);
}
function Lu(t, n) {
  return Q(t) ? t : Mi(t, n) ? [t] : rv(iv(t));
}
function Ge(t) {
  if (typeof t == "string" || Xe(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function qu(t, n) {
  n = Lu(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Ge(n[e++])];
  return e && e == r ? t : void 0;
}
function ov(t, n, e) {
  var r = t == null ? void 0 : qu(t, n);
  return r === void 0 ? e : r;
}
function Xu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Do = at ? at.isConcatSpreadable : void 0;
function av(t) {
  return Q(t) || bi(t) || !!(Do && t && t[Do]);
}
function uv(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = av), i || (i = []); ++o < a; ) {
    var u = t[o];
    e(u) ? Xu(i, u) : i[i.length] = u;
  }
  return i;
}
function sv(t) {
  var n = t == null ? 0 : t.length;
  return n ? uv(t) : [];
}
function lv() {
  this.__data__ = new vt(), this.size = 0;
}
function cv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function fv(t) {
  return this.__data__.get(t);
}
function hv(t) {
  return this.__data__.has(t);
}
var pv = 200;
function dv(t, n) {
  var e = this.__data__;
  if (e instanceof vt) {
    var r = e.__data__;
    if (!On || r.length < pv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new mt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ht(t) {
  var n = this.__data__ = new vt(t);
  this.size = n.size;
}
ht.prototype.clear = lv;
ht.prototype.delete = cv;
ht.prototype.get = fv;
ht.prototype.has = hv;
ht.prototype.set = dv;
function gv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function yv() {
  return [];
}
var _v = Object.prototype, vv = _v.propertyIsEnumerable, Lo = Object.getOwnPropertySymbols, mv = Lo ? function(t) {
  return t == null ? [] : (t = Object(t), gv(Lo(t), function(n) {
    return vv.call(t, n);
  }));
} : yv;
function wv(t, n, e) {
  var r = n(t);
  return Q(t) ? r : Xu(r, e(t));
}
function qo(t) {
  return wv(t, xi, mv);
}
var Xr = on(_t, "DataView"), Hr = on(_t, "Promise"), Br = on(_t, "Set"), Xo = "[object Map]", bv = "[object Object]", Ho = "[object Promise]", Bo = "[object Set]", Uo = "[object WeakMap]", Go = "[object DataView]", xv = Lt(Xr), Mv = Lt(On), Av = Lt(Hr), $v = Lt(Br), Nv = Lt(Lr), Mt = rn;
(Xr && Mt(new Xr(new ArrayBuffer(1))) != Go || On && Mt(new On()) != Xo || Hr && Mt(Hr.resolve()) != Ho || Br && Mt(new Br()) != Bo || Lr && Mt(new Lr()) != Uo) && (Mt = function(t) {
  var n = rn(t), e = n == bv ? t.constructor : void 0, r = e ? Lt(e) : "";
  if (r)
    switch (r) {
      case xv:
        return Go;
      case Mv:
        return Xo;
      case Av:
        return Ho;
      case $v:
        return Bo;
      case Nv:
        return Uo;
    }
  return n;
});
var Yo = _t.Uint8Array, Tv = "__lodash_hash_undefined__";
function Sv(t) {
  return this.__data__.set(t, Tv), this;
}
function kv(t) {
  return this.__data__.has(t);
}
function Ee(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new mt(); ++n < e; )
    this.add(t[n]);
}
Ee.prototype.add = Ee.prototype.push = Sv;
Ee.prototype.has = kv;
function Ev(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Pv(t, n) {
  return t.has(n);
}
var Ov = 1, zv = 2;
function Hu(t, n, e, r, i, o) {
  var a = e & Ov, u = t.length, l = n.length;
  if (u != l && !(a && l > u))
    return !1;
  var s = o.get(t), c = o.get(n);
  if (s && c)
    return s == n && c == t;
  var h = -1, f = !0, p = e & zv ? new Ee() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < u; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = a ? r(y, d, h, n, t, o) : r(d, y, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Ev(n, function(b, g) {
        if (!Pv(p, g) && (d === b || i(d, b, e, r, o)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function Cv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Iv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Rv = 1, jv = 2, Fv = "[object Boolean]", Dv = "[object Date]", Lv = "[object Error]", qv = "[object Map]", Xv = "[object Number]", Hv = "[object RegExp]", Bv = "[object Set]", Uv = "[object String]", Gv = "[object Symbol]", Yv = "[object ArrayBuffer]", Vv = "[object DataView]", Vo = at ? at.prototype : void 0, pr = Vo ? Vo.valueOf : void 0;
function Kv(t, n, e, r, i, o, a) {
  switch (e) {
    case Vv:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Yv:
      return !(t.byteLength != n.byteLength || !o(new Yo(t), new Yo(n)));
    case Fv:
    case Dv:
    case Xv:
      return mi(+t, +n);
    case Lv:
      return t.name == n.name && t.message == n.message;
    case Hv:
    case Uv:
      return t == n + "";
    case qv:
      var u = Cv;
    case Bv:
      var l = r & Rv;
      if (u || (u = Iv), t.size != n.size && !l)
        return !1;
      var s = a.get(t);
      if (s)
        return s == n;
      r |= jv, a.set(t, n);
      var c = Hu(u(t), u(n), r, i, o, a);
      return a.delete(t), c;
    case Gv:
      if (pr)
        return pr.call(t) == pr.call(n);
  }
  return !1;
}
var Wv = 1, Zv = Object.prototype, Jv = Zv.hasOwnProperty;
function Qv(t, n, e, r, i, o) {
  var a = e & Wv, u = qo(t), l = u.length, s = qo(n), c = s.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = u[h];
    if (!(a ? f in n : Jv.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = u[h];
    var b = t[f], g = n[f];
    if (r)
      var M = a ? r(g, b, f, n, t, o) : r(b, g, f, t, n, o);
    if (!(M === void 0 ? b === g || i(b, g, e, r, o) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = n.constructor;
    _ != m && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return o.delete(t), o.delete(n), y;
}
var tm = 1, Ko = "[object Arguments]", Wo = "[object Array]", Jn = "[object Object]", nm = Object.prototype, Zo = nm.hasOwnProperty;
function em(t, n, e, r, i, o) {
  var a = Q(t), u = Q(n), l = a ? Wo : Mt(t), s = u ? Wo : Mt(n);
  l = l == Ko ? Jn : l, s = s == Ko ? Jn : s;
  var c = l == Jn, h = s == Jn, f = l == s;
  if (f && qr(t)) {
    if (!qr(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new ht()), a || Du(t) ? Hu(t, n, e, r, i, o) : Kv(t, n, l, e, r, i, o);
  if (!(e & tm)) {
    var p = c && Zo.call(t, "__wrapped__"), d = h && Zo.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new ht()), i(y, w, e, r, o);
    }
  }
  return f ? (o || (o = new ht()), Qv(t, n, e, r, i, o)) : !1;
}
function $i(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !nn(t) && !nn(n) ? t !== t && n !== n : em(t, n, e, r, $i, i);
}
var rm = 1, im = 2;
function om(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var u = a[0], l = t[u], s = a[1];
    if (a[2]) {
      if (l === void 0 && !(u in t))
        return !1;
    } else {
      var c = new ht(), h;
      if (!(h === void 0 ? $i(s, l, rm | im, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Bu(t) {
  return t === t && !en(t);
}
function am(t) {
  for (var n = xi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Bu(i)];
  }
  return n;
}
function Uu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function um(t) {
  var n = am(t);
  return n.length == 1 && n[0][2] ? Uu(n[0][0], n[0][1]) : function(e) {
    return e === t || om(e, t, n);
  };
}
function sm(t, n) {
  return t != null && n in Object(t);
}
function lm(t, n, e) {
  n = Lu(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Ge(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && wi(i) && vi(a, i) && (Q(t) || bi(t)));
}
function cm(t, n) {
  return t != null && lm(t, n, sm);
}
var fm = 1, hm = 2;
function pm(t, n) {
  return Mi(t) && Bu(n) ? Uu(Ge(t), n) : function(e) {
    var r = ov(e, t);
    return r === void 0 && r === n ? cm(e, t) : $i(n, r, fm | hm);
  };
}
function dm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function gm(t) {
  return function(n) {
    return qu(n, t);
  };
}
function ym(t) {
  return Mi(t) ? dm(Ge(t)) : gm(t);
}
function _m(t) {
  return typeof t == "function" ? t : t == null ? gy : typeof t == "object" ? Q(t) ? pm(t[0], t[1]) : um(t) : ym(t);
}
function vm(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), u = a.length; u--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var mm = vm();
function wm(t, n) {
  return t && mm(t, n, xi);
}
function bm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!He(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var xm = bm(wm);
function Mm(t, n) {
  var e = -1, r = He(t) ? Array(t.length) : [];
  return xm(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Jo(t, n) {
  var e = Q(t) ? zu : Mm;
  return e(t, _m(n));
}
var Am = Math.ceil, $m = Math.max;
function Nm(t, n, e, r) {
  for (var i = -1, o = $m(Am((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Tm(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Iy(n, e, r) && (e = r = void 0), n = cr(n), e === void 0 ? (e = n, n = 0) : e = cr(e), r = r === void 0 ? n < e ? 1 : -1 : cr(r), Nm(n, e, r);
  };
}
var Sm = Tm();
const km = (t, n, e = 12, r = 12) => {
  const i = tn().domain([0, e]).range([0, t]), o = tn().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Sm((e + 1) * (r + 1)).map(function(a) {
        return { m: a % (e + 1), n: Math.floor(a / (e + 1)), x: i(a % (e + 1)), y: o(Math.floor(a / (e + 1))) };
      });
    },
    position: function(a, u) {
      typeof a == "number" && (a = [a]), typeof u == "number" && (u = [u]);
      const l = sv(Jo(u, function(s) {
        return Jo(
          a,
          function(c) {
            return { x: i(c), y: o(s) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Em = "_widget_1279t_47", Pm = "_label_1279t_67", Om = "_lit_1279t_72", zm = "_button_1279t_76", Cm = "_symbol_1279t_76", Im = "_radio_1279t_77", Rm = "_radiobutton_1279t_77", jm = "_selected_1279t_83", Fm = "_toggle_1279t_84", Dm = "_slider_1279t_93", Lm = "_track_1279t_93", qm = "_track_overlay_1279t_98", Xm = "_handle_1279t_106", x = {
  widget: Em,
  label: Pm,
  lit: Om,
  button: zm,
  symbol: Cm,
  radio: Im,
  radiobutton: Rm,
  selected: jm,
  toggle: Fm,
  slider: Dm,
  track: Lm,
  track_overlay: qm,
  handle: Xm
}, Ni = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Ti = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Hm = (t = 1) => {
  const n = et();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Bm = (t = 1) => {
  const n = et(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Um = (t = 1) => {
  const n = et();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Gm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = et();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Ym = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, u = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], s = [t * u * Math.cos(i + Math.PI / 2), t * u * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + s[0], l[1] + s[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Vm = (t = 1) => {
  const n = et(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, u = Math.PI + e;
  return n.arc(0, 0, r, u, a), n.lineTo(t, r * Math.sin(u)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(u)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Km = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, u = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], s = [t * u * Math.cos(r + Math.PI / 2), t * u * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + s[0], l[1] + s[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Wm = (t = 1) => {
  var n = et(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Zm = (t = 1) => {
  const n = et(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Ur = (t) => {
  switch (t) {
    case "play":
      return Hm;
    case "forward":
      return Bm;
    case "back":
      return Um;
    case "pause":
      return Gm;
    case "reload":
      return Ym;
    case "capture":
      return Vm;
    case "rewind":
      return Km;
    case "stop":
      return Wm;
    case "push":
      return Zm;
  }
}, Si = () => {
  const t = "button";
  var n = Ni(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, u = "bottom", l = null, s = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, s(), I(this.parentNode).select("." + x.symbol).attr("d", Ur(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, s(), f.select("#button_" + n).select("." + x.symbol).attr("d", Ur(c[h])(r * e));
    }
  };
}, Jm = () => {
  const t = "slider", n = qe(".3f");
  var e = Ni(), r = 100, i = 8, o = 10, a = !1, u = { x: 0, y: 0 }, l = "top-left", s = 4, c = null, h = function(g) {
  }, f = function(g) {
  }, p = [0, 1], d = 0, y = null, w = tn().domain(p).range([0, r]).clamp(!0);
  const b = function(g, M, _ = p) {
    const m = g.select("#slider_" + e);
    w.domain(_), d = M, m.selectAll("." + x.handle).transition().attr("cx", w(M)), a && m.select("." + x.label).text(y + " = " + n(d)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? y : (y = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? u.x : (u.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? u.y : (u.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    labelpadding: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    reset: b,
    click: b
  };
}, Qm = () => {
  const t = "radio";
  var n = Ni(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", u = { x: 0, y: 0 }, l = "right", s = null, c = function(p) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? u.x : (u.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? u.y : (u.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function(p, d) {
      f = d, I(this.parentNode).selectAll("." + x.symbol).classed(x.selected, (y) => y == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + x.symbol).classed(x.selected, (y) => y == f), c();
    }
  };
}, t1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = I(o).attr("class", x.widget + " " + x.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var u;
  if (t.shape() == "rect" ? u = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : u = a.append("circle").attr("r", t.size() / 2), u.attr("class", x.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), a.append("path").attr("d", Ur(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", x.symbol), r) {
    const l = Ti(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, Gu = (t, n) => {
  const e = et();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, n1 = (t, n) => {
  const e = qe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var u;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  u = I(l).attr("class", x.widget + " " + x.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const s = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const g = b && b.sourceEvent ? b.sourceEvent : b;
    return g ? g.clientX != null ? g.clientX : g.touches && g.touches.length ? g.touches[0].clientX : g.changedTouches && g.changedTouches.length ? g.changedTouches[0].clientX : null : null;
  }, h = (b, g) => {
    const M = c(b);
    if (M == null) return null;
    const _ = g.getBoundingClientRect(), m = M - _.left, T = g.width && g.width.baseVal ? g.width.baseVal.value : _.width, k = _.width ? T / _.width : 1;
    return m * k - s;
  };
  u.append("path").attr("d", Gu(t.size(), t.girth())).attr("class", x.track), u.append("circle").attr("class", x.handle).attr("r", t.knob()).attr("cx", a(t.value())), u.append("rect").attr("width", t.size() + 2 * s).attr("height", 2 * s).attr("transform", "translate(" + -s + "," + -s + ")").attr("class", x.track_overlay).on("click", function(b) {
    const g = h(b, this);
    if (g == null) return;
    const M = Math.max(0, Math.min(t.size(), g));
    t.value(a.invert(M)), t.update(), t.update_end(), u.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && u.select("." + x.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Fd().on("drag", function(b) {
      const g = h(b, this);
      if (g == null) return;
      const M = Math.max(0, Math.min(t.size(), g));
      t.value(a.invert(M)), t.update(), u.selectAll("." + x.handle).attr("cx", a(t.value())), t.show() && u.select("." + x.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var f, p, d, y = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Gn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Gn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Gn([t.girth() / 2, t.knob()]) + 7 + w : -Gn([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", u.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", x.label).style("text-anchor", d).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, e1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), u = I(a).attr("class", x.widget + " " + x.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(x.selected, t.value() == 1);
  if (u.append("path").attr("d", Gu(2 * t.size(), 2 * t.size())).attr("class", x.track), u.append("circle").attr("class", x.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), u.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", x.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ti(4 * t.size(), 2 * t.size(), o);
    u.append("text").text(i).attr("class", x.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, r1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, u = Vh(a), l = tn().domain([0, a - 1]).range([0, t.size()]), s = tn().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = I(c).attr("class", x.widget + " " + x.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + x.radiobutton).data(u).enter().append("g").attr("class", x.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + s(y) + ")" : "translate(" + l(y) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), f.attr("class", x.background).on("mouseover", function() {
    I(this).classed(x.lit, !0), I(this.parentNode).select("." + x.symbol).classed(x.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(x.lit, !1), I(this.parentNode).select("." + x.symbol).classed(x.lit, !1);
  }), p.attr("class", x.symbol), p.filter((y) => y == t.value()).classed(x.selected, !0), h.on("click", t.click);
  const d = Ti(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", x.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, dr = (t, n) => {
  switch (t.type) {
    case "button":
      return t1(t);
    case "slider":
      return n1(t);
    case "radio":
      return r1(t);
    case "toggle":
      return e1(t);
  }
}, i1 = "_displayPanel_19jk0_1", o1 = "_controlPanel_19jk0_8", Qo = {
  displayPanel: i1,
  controlPanel: o1
}, a1 = (t, n) => {
  const e = km(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Sc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", Qo.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), u = r.append("div").attr("id", o).attr("class", "d3-widgets " + Qo.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && u.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && a.style("border", n.display_border), n.debug && u.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: u, grid: e };
};
var Yu = typeof global == "object" && global && global.Object === Object && global, u1 = typeof self == "object" && self && self.Object === Object && self, wt = Yu || u1 || Function("return this")(), $t = wt.Symbol, Vu = Object.prototype, s1 = Vu.hasOwnProperty, l1 = Vu.toString, hn = $t ? $t.toStringTag : void 0;
function c1(t) {
  var n = s1.call(t, hn), e = t[hn];
  try {
    t[hn] = void 0;
    var r = !0;
  } catch {
  }
  var i = l1.call(t);
  return r && (n ? t[hn] = e : delete t[hn]), i;
}
var f1 = Object.prototype, h1 = f1.toString;
function p1(t) {
  return h1.call(t);
}
var d1 = "[object Null]", g1 = "[object Undefined]", ta = $t ? $t.toStringTag : void 0;
function an(t) {
  return t == null ? t === void 0 ? g1 : d1 : ta && ta in Object(t) ? c1(t) : p1(t);
}
function Ft(t) {
  return t != null && typeof t == "object";
}
var y1 = "[object Symbol]";
function Ye(t) {
  return typeof t == "symbol" || Ft(t) && an(t) == y1;
}
function un(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var H = Array.isArray, na = $t ? $t.prototype : void 0, ea = na ? na.toString : void 0;
function Ku(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return un(t, Ku) + "";
  if (Ye(t))
    return ea ? ea.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var _1 = /\s/;
function v1(t) {
  for (var n = t.length; n-- && _1.test(t.charAt(n)); )
    ;
  return n;
}
var m1 = /^\s+/;
function w1(t) {
  return t && t.slice(0, v1(t) + 1).replace(m1, "");
}
function yt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ra = NaN, b1 = /^[-+]0x[0-9a-f]+$/i, x1 = /^0b[01]+$/i, M1 = /^0o[0-7]+$/i, A1 = parseInt;
function $1(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return ra;
  if (yt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = yt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = w1(t);
  var e = x1.test(t);
  return e || M1.test(t) ? A1(t.slice(2), e ? 2 : 8) : b1.test(t) ? ra : +t;
}
var N1 = 1 / 0, T1 = 17976931348623157e292;
function gr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = $1(t), t === N1 || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * T1;
  }
  return t === t ? t : 0;
}
function Ve(t) {
  return t;
}
var S1 = "[object AsyncFunction]", k1 = "[object Function]", E1 = "[object GeneratorFunction]", P1 = "[object Proxy]";
function Wu(t) {
  if (!yt(t))
    return !1;
  var n = an(t);
  return n == k1 || n == E1 || n == S1 || n == P1;
}
var yr = wt["__core-js_shared__"], ia = function() {
  var t = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function O1(t) {
  return !!ia && ia in t;
}
var z1 = Function.prototype, C1 = z1.toString;
function qt(t) {
  if (t != null) {
    try {
      return C1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var I1 = /[\\^$.*+?()[\]{}|]/g, R1 = /^\[object .+?Constructor\]$/, j1 = Function.prototype, F1 = Object.prototype, D1 = j1.toString, L1 = F1.hasOwnProperty, q1 = RegExp(
  "^" + D1.call(L1).replace(I1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function X1(t) {
  if (!yt(t) || O1(t))
    return !1;
  var n = Wu(t) ? q1 : R1;
  return n.test(qt(t));
}
function H1(t, n) {
  return t == null ? void 0 : t[n];
}
function Xt(t, n) {
  var e = H1(t, n);
  return X1(e) ? e : void 0;
}
var Gr = Xt(wt, "WeakMap");
function B1(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function U1(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var G1 = 800, Y1 = 16, V1 = Date.now;
function K1(t) {
  var n = 0, e = 0;
  return function() {
    var r = V1(), i = Y1 - (r - e);
    if (e = r, i > 0) {
      if (++n >= G1)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function W1(t) {
  return function() {
    return t;
  };
}
var Pe = function() {
  try {
    var t = Xt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Z1 = Pe ? function(t, n) {
  return Pe(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: W1(n),
    writable: !0
  });
} : Ve, J1 = K1(Z1);
function Q1(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var tw = 9007199254740991, nw = /^(?:0|[1-9]\d*)$/;
function Ke(t, n) {
  var e = typeof t;
  return n = n ?? tw, !!n && (e == "number" || e != "symbol" && nw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function ew(t, n, e) {
  n == "__proto__" && Pe ? Pe(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function We(t, n) {
  return t === n || t !== t && n !== n;
}
var rw = Object.prototype, iw = rw.hasOwnProperty;
function ow(t, n, e) {
  var r = t[n];
  (!(iw.call(t, n) && We(r, e)) || e === void 0 && !(n in t)) && ew(t, n, e);
}
var oa = Math.max;
function aw(t, n, e) {
  return n = oa(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = oa(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var u = Array(n + 1); ++i < n; )
      u[i] = r[i];
    return u[n] = e(a), B1(t, this, u);
  };
}
function uw(t, n) {
  return J1(aw(t, n, Ve), t + "");
}
var sw = 9007199254740991;
function ki(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= sw;
}
function sn(t) {
  return t != null && ki(t.length) && !Wu(t);
}
function lw(t, n, e) {
  if (!yt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? sn(e) && Ke(n, e.length) : r == "string" && n in e) ? We(e[n], t) : !1;
}
var cw = Object.prototype;
function Zu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || cw;
  return t === e;
}
function Ju(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var fw = "[object Arguments]";
function aa(t) {
  return Ft(t) && an(t) == fw;
}
var Qu = Object.prototype, hw = Qu.hasOwnProperty, pw = Qu.propertyIsEnumerable, ts = aa(/* @__PURE__ */ function() {
  return arguments;
}()) ? aa : function(t) {
  return Ft(t) && hw.call(t, "callee") && !pw.call(t, "callee");
};
function dw() {
  return !1;
}
var ns = typeof exports == "object" && exports && !exports.nodeType && exports, ua = ns && typeof module == "object" && module && !module.nodeType && module, gw = ua && ua.exports === ns, sa = gw ? wt.Buffer : void 0, yw = sa ? sa.isBuffer : void 0, Yr = yw || dw, _w = "[object Arguments]", vw = "[object Array]", mw = "[object Boolean]", ww = "[object Date]", bw = "[object Error]", xw = "[object Function]", Mw = "[object Map]", Aw = "[object Number]", $w = "[object Object]", Nw = "[object RegExp]", Tw = "[object Set]", Sw = "[object String]", kw = "[object WeakMap]", Ew = "[object ArrayBuffer]", Pw = "[object DataView]", Ow = "[object Float32Array]", zw = "[object Float64Array]", Cw = "[object Int8Array]", Iw = "[object Int16Array]", Rw = "[object Int32Array]", jw = "[object Uint8Array]", Fw = "[object Uint8ClampedArray]", Dw = "[object Uint16Array]", Lw = "[object Uint32Array]", N = {};
N[Ow] = N[zw] = N[Cw] = N[Iw] = N[Rw] = N[jw] = N[Fw] = N[Dw] = N[Lw] = !0;
N[_w] = N[vw] = N[Ew] = N[mw] = N[Pw] = N[ww] = N[bw] = N[xw] = N[Mw] = N[Aw] = N[$w] = N[Nw] = N[Tw] = N[Sw] = N[kw] = !1;
function qw(t) {
  return Ft(t) && ki(t.length) && !!N[an(t)];
}
function Xw(t) {
  return function(n) {
    return t(n);
  };
}
var es = typeof exports == "object" && exports && !exports.nodeType && exports, bn = es && typeof module == "object" && module && !module.nodeType && module, Hw = bn && bn.exports === es, _r = Hw && Yu.process, la = function() {
  try {
    var t = bn && bn.require && bn.require("util").types;
    return t || _r && _r.binding && _r.binding("util");
  } catch {
  }
}(), ca = la && la.isTypedArray, rs = ca ? Xw(ca) : qw, Bw = Object.prototype, Uw = Bw.hasOwnProperty;
function is(t, n) {
  var e = H(t), r = !e && ts(t), i = !e && !r && Yr(t), o = !e && !r && !i && rs(t), a = e || r || i || o, u = a ? Ju(t.length, String) : [], l = u.length;
  for (var s in t)
    (n || Uw.call(t, s)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    Ke(s, l))) && u.push(s);
  return u;
}
function os(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Gw = os(Object.keys, Object), Yw = Object.prototype, Vw = Yw.hasOwnProperty;
function Kw(t) {
  if (!Zu(t))
    return Gw(t);
  var n = [];
  for (var e in Object(t))
    Vw.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ln(t) {
  return sn(t) ? is(t) : Kw(t);
}
function Ww(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Zw = Object.prototype, Jw = Zw.hasOwnProperty;
function Qw(t) {
  if (!yt(t))
    return Ww(t);
  var n = Zu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Jw.call(t, r)) || e.push(r);
  return e;
}
function tb(t) {
  return sn(t) ? is(t, !0) : Qw(t);
}
var nb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eb = /^\w*$/;
function Ei(t, n) {
  if (H(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ye(t) ? !0 : eb.test(t) || !nb.test(t) || n != null && t in Object(n);
}
var zn = Xt(Object, "create");
function rb() {
  this.__data__ = zn ? zn(null) : {}, this.size = 0;
}
function ib(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ob = "__lodash_hash_undefined__", ab = Object.prototype, ub = ab.hasOwnProperty;
function sb(t) {
  var n = this.__data__;
  if (zn) {
    var e = n[t];
    return e === ob ? void 0 : e;
  }
  return ub.call(n, t) ? n[t] : void 0;
}
var lb = Object.prototype, cb = lb.hasOwnProperty;
function fb(t) {
  var n = this.__data__;
  return zn ? n[t] !== void 0 : cb.call(n, t);
}
var hb = "__lodash_hash_undefined__";
function pb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = zn && n === void 0 ? hb : n, this;
}
function Dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Dt.prototype.clear = rb;
Dt.prototype.delete = ib;
Dt.prototype.get = sb;
Dt.prototype.has = fb;
Dt.prototype.set = pb;
function db() {
  this.__data__ = [], this.size = 0;
}
function Ze(t, n) {
  for (var e = t.length; e--; )
    if (We(t[e][0], n))
      return e;
  return -1;
}
var gb = Array.prototype, yb = gb.splice;
function _b(t) {
  var n = this.__data__, e = Ze(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : yb.call(n, e, 1), --this.size, !0;
}
function vb(t) {
  var n = this.__data__, e = Ze(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function mb(t) {
  return Ze(this.__data__, t) > -1;
}
function wb(t, n) {
  var e = this.__data__, r = Ze(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = db;
bt.prototype.delete = _b;
bt.prototype.get = vb;
bt.prototype.has = mb;
bt.prototype.set = wb;
var Cn = Xt(wt, "Map");
function bb() {
  this.size = 0, this.__data__ = {
    hash: new Dt(),
    map: new (Cn || bt)(),
    string: new Dt()
  };
}
function xb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Je(t, n) {
  var e = t.__data__;
  return xb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Mb(t) {
  var n = Je(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ab(t) {
  return Je(this, t).get(t);
}
function $b(t) {
  return Je(this, t).has(t);
}
function Nb(t, n) {
  var e = Je(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = bb;
xt.prototype.delete = Mb;
xt.prototype.get = Ab;
xt.prototype.has = $b;
xt.prototype.set = Nb;
var Tb = "Expected a function";
function Pi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Tb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Pi.Cache || xt)(), e;
}
Pi.Cache = xt;
var Sb = 500;
function kb(t) {
  var n = Pi(t, function(r) {
    return e.size === Sb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Eb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pb = /\\(\\)?/g, Ob = kb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Eb, function(e, r, i, o) {
    n.push(i ? o.replace(Pb, "$1") : r || e);
  }), n;
});
function Qe(t) {
  return t == null ? "" : Ku(t);
}
function tr(t, n) {
  return H(t) ? t : Ei(t, n) ? [t] : Ob(Qe(t));
}
function qn(t) {
  if (typeof t == "string" || Ye(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Oi(t, n) {
  n = tr(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[qn(n[e++])];
  return e && e == r ? t : void 0;
}
function zb(t, n, e) {
  var r = t == null ? void 0 : Oi(t, n);
  return r === void 0 ? e : r;
}
function as(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Cb = os(Object.getPrototypeOf, Object);
function Ib(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Rb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Ib(t, n, e);
}
var jb = "\\ud800-\\udfff", Fb = "\\u0300-\\u036f", Db = "\\ufe20-\\ufe2f", Lb = "\\u20d0-\\u20ff", qb = Fb + Db + Lb, Xb = "\\ufe0e\\ufe0f", Hb = "\\u200d", Bb = RegExp("[" + Hb + jb + qb + Xb + "]");
function us(t) {
  return Bb.test(t);
}
function Ub(t) {
  return t.split("");
}
var ss = "\\ud800-\\udfff", Gb = "\\u0300-\\u036f", Yb = "\\ufe20-\\ufe2f", Vb = "\\u20d0-\\u20ff", Kb = Gb + Yb + Vb, Wb = "\\ufe0e\\ufe0f", Zb = "[" + ss + "]", Vr = "[" + Kb + "]", Kr = "\\ud83c[\\udffb-\\udfff]", Jb = "(?:" + Vr + "|" + Kr + ")", ls = "[^" + ss + "]", cs = "(?:\\ud83c[\\udde6-\\uddff]){2}", fs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qb = "\\u200d", hs = Jb + "?", ps = "[" + Wb + "]?", tx = "(?:" + Qb + "(?:" + [ls, cs, fs].join("|") + ")" + ps + hs + ")*", nx = ps + hs + tx, ex = "(?:" + [ls + Vr + "?", Vr, cs, fs, Zb].join("|") + ")", rx = RegExp(Kr + "(?=" + Kr + ")|" + ex + nx, "g");
function ix(t) {
  return t.match(rx) || [];
}
function ox(t) {
  return us(t) ? ix(t) : Ub(t);
}
function ax(t) {
  return function(n) {
    n = Qe(n);
    var e = us(n) ? ox(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Rb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var ux = ax("toUpperCase");
function sx(t) {
  return ux(Qe(t).toLowerCase());
}
function lx() {
  this.__data__ = new bt(), this.size = 0;
}
function cx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function fx(t) {
  return this.__data__.get(t);
}
function hx(t) {
  return this.__data__.has(t);
}
var px = 200;
function dx(t, n) {
  var e = this.__data__;
  if (e instanceof bt) {
    var r = e.__data__;
    if (!Cn || r.length < px - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new xt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function pt(t) {
  var n = this.__data__ = new bt(t);
  this.size = n.size;
}
pt.prototype.clear = lx;
pt.prototype.delete = cx;
pt.prototype.get = fx;
pt.prototype.has = hx;
pt.prototype.set = dx;
function zi(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function ds() {
  return [];
}
var gx = Object.prototype, yx = gx.propertyIsEnumerable, fa = Object.getOwnPropertySymbols, gs = fa ? function(t) {
  return t == null ? [] : (t = Object(t), zi(fa(t), function(n) {
    return yx.call(t, n);
  }));
} : ds, _x = Object.getOwnPropertySymbols, vx = _x ? function(t) {
  for (var n = []; t; )
    as(n, gs(t)), t = Cb(t);
  return n;
} : ds;
function ys(t, n, e) {
  var r = n(t);
  return H(t) ? r : as(r, e(t));
}
function ha(t) {
  return ys(t, Ln, gs);
}
function mx(t) {
  return ys(t, tb, vx);
}
var Wr = Xt(wt, "DataView"), Zr = Xt(wt, "Promise"), Jr = Xt(wt, "Set"), pa = "[object Map]", wx = "[object Object]", da = "[object Promise]", ga = "[object Set]", ya = "[object WeakMap]", _a = "[object DataView]", bx = qt(Wr), xx = qt(Cn), Mx = qt(Zr), Ax = qt(Jr), $x = qt(Gr), ft = an;
(Wr && ft(new Wr(new ArrayBuffer(1))) != _a || Cn && ft(new Cn()) != pa || Zr && ft(Zr.resolve()) != da || Jr && ft(new Jr()) != ga || Gr && ft(new Gr()) != ya) && (ft = function(t) {
  var n = an(t), e = n == wx ? t.constructor : void 0, r = e ? qt(e) : "";
  if (r)
    switch (r) {
      case bx:
        return _a;
      case xx:
        return pa;
      case Mx:
        return da;
      case Ax:
        return ga;
      case $x:
        return ya;
    }
  return n;
});
var va = wt.Uint8Array, Nx = "__lodash_hash_undefined__";
function Tx(t) {
  return this.__data__.set(t, Nx), this;
}
function Sx(t) {
  return this.__data__.has(t);
}
function Oe(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new xt(); ++n < e; )
    this.add(t[n]);
}
Oe.prototype.add = Oe.prototype.push = Tx;
Oe.prototype.has = Sx;
function kx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Ex(t, n) {
  return t.has(n);
}
var Px = 1, Ox = 2;
function _s(t, n, e, r, i, o) {
  var a = e & Px, u = t.length, l = n.length;
  if (u != l && !(a && l > u))
    return !1;
  var s = o.get(t), c = o.get(n);
  if (s && c)
    return s == n && c == t;
  var h = -1, f = !0, p = e & Ox ? new Oe() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < u; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = a ? r(y, d, h, n, t, o) : r(d, y, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!kx(n, function(b, g) {
        if (!Ex(p, g) && (d === b || i(d, b, e, r, o)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function vs(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function zx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Cx = 1, Ix = 2, Rx = "[object Boolean]", jx = "[object Date]", Fx = "[object Error]", Dx = "[object Map]", Lx = "[object Number]", qx = "[object RegExp]", Xx = "[object Set]", Hx = "[object String]", Bx = "[object Symbol]", Ux = "[object ArrayBuffer]", Gx = "[object DataView]", ma = $t ? $t.prototype : void 0, vr = ma ? ma.valueOf : void 0;
function Yx(t, n, e, r, i, o, a) {
  switch (e) {
    case Gx:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Ux:
      return !(t.byteLength != n.byteLength || !o(new va(t), new va(n)));
    case Rx:
    case jx:
    case Lx:
      return We(+t, +n);
    case Fx:
      return t.name == n.name && t.message == n.message;
    case qx:
    case Hx:
      return t == n + "";
    case Dx:
      var u = vs;
    case Xx:
      var l = r & Cx;
      if (u || (u = zx), t.size != n.size && !l)
        return !1;
      var s = a.get(t);
      if (s)
        return s == n;
      r |= Ix, a.set(t, n);
      var c = _s(u(t), u(n), r, i, o, a);
      return a.delete(t), c;
    case Bx:
      if (vr)
        return vr.call(t) == vr.call(n);
  }
  return !1;
}
var Vx = 1, Kx = Object.prototype, Wx = Kx.hasOwnProperty;
function Zx(t, n, e, r, i, o) {
  var a = e & Vx, u = ha(t), l = u.length, s = ha(n), c = s.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = u[h];
    if (!(a ? f in n : Wx.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = u[h];
    var b = t[f], g = n[f];
    if (r)
      var M = a ? r(g, b, f, n, t, o) : r(b, g, f, t, n, o);
    if (!(M === void 0 ? b === g || i(b, g, e, r, o) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = n.constructor;
    _ != m && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return o.delete(t), o.delete(n), y;
}
var Jx = 1, wa = "[object Arguments]", ba = "[object Array]", Qn = "[object Object]", Qx = Object.prototype, xa = Qx.hasOwnProperty;
function t2(t, n, e, r, i, o) {
  var a = H(t), u = H(n), l = a ? ba : ft(t), s = u ? ba : ft(n);
  l = l == wa ? Qn : l, s = s == wa ? Qn : s;
  var c = l == Qn, h = s == Qn, f = l == s;
  if (f && Yr(t)) {
    if (!Yr(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new pt()), a || rs(t) ? _s(t, n, e, r, i, o) : Yx(t, n, l, e, r, i, o);
  if (!(e & Jx)) {
    var p = c && xa.call(t, "__wrapped__"), d = h && xa.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new pt()), i(y, w, e, r, o);
    }
  }
  return f ? (o || (o = new pt()), Zx(t, n, e, r, i, o)) : !1;
}
function Ci(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Ft(t) && !Ft(n) ? t !== t && n !== n : t2(t, n, e, r, Ci, i);
}
var n2 = 1, e2 = 2;
function r2(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var u = a[0], l = t[u], s = a[1];
    if (a[2]) {
      if (l === void 0 && !(u in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Ci(s, l, n2 | e2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function ms(t) {
  return t === t && !yt(t);
}
function i2(t) {
  for (var n = Ln(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ms(i)];
  }
  return n;
}
function ws(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function o2(t) {
  var n = i2(t);
  return n.length == 1 && n[0][2] ? ws(n[0][0], n[0][1]) : function(e) {
    return e === t || r2(e, t, n);
  };
}
function a2(t, n) {
  return t != null && n in Object(t);
}
function bs(t, n, e) {
  n = tr(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = qn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && ki(i) && Ke(a, i) && (H(t) || ts(t)));
}
function u2(t, n) {
  return t != null && bs(t, n, a2);
}
var s2 = 1, l2 = 2;
function c2(t, n) {
  return Ei(t) && ms(n) ? ws(qn(t), n) : function(e) {
    var r = zb(e, t);
    return r === void 0 && r === n ? u2(e, t) : Ci(n, r, s2 | l2);
  };
}
function xs(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function f2(t) {
  return function(n) {
    return Oi(n, t);
  };
}
function h2(t) {
  return Ei(t) ? xs(qn(t)) : f2(t);
}
function Ii(t) {
  return typeof t == "function" ? t : t == null ? Ve : typeof t == "object" ? H(t) ? c2(t[0], t[1]) : o2(t) : h2(t);
}
function p2(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), u = a.length; u--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var d2 = p2();
function g2(t, n) {
  return t && d2(t, n, Ln);
}
function y2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!sn(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ri = y2(g2);
function _2(t) {
  return Ft(t) && sn(t);
}
function v2(t) {
  return typeof t == "function" ? t : Ve;
}
function ot(t, n) {
  var e = H(t) ? Q1 : Ri;
  return e(t, v2(n));
}
function m2(t, n) {
  return un(n, function(e) {
    return [e, t[e]];
  });
}
function w2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var b2 = "[object Map]", x2 = "[object Set]";
function M2(t) {
  return function(n) {
    var e = ft(n);
    return e == b2 ? vs(n) : e == x2 ? w2(n) : m2(n, t(n));
  };
}
var Ms = M2(Ln);
function A2(t, n) {
  var e = [];
  return Ri(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Et(t, n) {
  var e = H(t) ? zi : A2;
  return e(t, Ii(n));
}
function $2(t, n) {
  var e = -1, r = sn(t) ? Array(t.length) : [];
  return Ri(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function nr(t, n) {
  var e = H(t) ? un : $2;
  return e(t, Ii(n));
}
var N2 = Object.prototype, T2 = N2.hasOwnProperty;
function S2(t, n) {
  return t != null && T2.call(t, n);
}
function As(t, n) {
  return t != null && bs(t, n, S2);
}
function k2(t, n) {
  return un(n, function(e) {
    return t[e];
  });
}
function E2(t) {
  return t == null ? [] : k2(t, Ln(t));
}
function P2(t, n, e, r) {
  if (!yt(t))
    return t;
  n = tr(n, t);
  for (var i = -1, o = n.length, a = o - 1, u = t; u != null && ++i < o; ) {
    var l = qn(n[i]), s = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = u[l];
      s = void 0, s === void 0 && (s = yt(c) ? c : Ke(n[i + 1]) ? [] : {});
    }
    ow(u, l, s), u = u[l];
  }
  return t;
}
function O2(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], u = Oi(t, a);
    e(u, a) && P2(o, tr(a, t), u);
  }
  return o;
}
function $s(t, n) {
  if (t == null)
    return {};
  var e = un(mx(t), function(r) {
    return [r];
  });
  return n = Ii(n), O2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var z2 = Math.floor, C2 = Math.random;
function I2(t, n) {
  return t + z2(C2() * (n - t + 1));
}
var R2 = Math.ceil, j2 = Math.max;
function F2(t, n, e, r) {
  for (var i = -1, o = j2(R2((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function D2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && lw(n, e, r) && (e = r = void 0), n = gr(n), e === void 0 ? (e = n, n = 0) : e = gr(e), r = r === void 0 ? n < e ? 1 : -1 : gr(r), F2(n, e, r);
  };
}
var Ns = D2();
function L2() {
  var t = arguments, n = Qe(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Ts(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = I2(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function q2(t) {
  return Ts(U1(t));
}
function X2(t) {
  return Ts(E2(t));
}
function mr(t) {
  var n = H(t) ? q2 : X2;
  return n(t);
}
var H2 = Math.max;
function B2(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = zi(t, function(e) {
    if (_2(e))
      return n = H2(e.length, n), !0;
  }), Ju(n, function(e) {
    return un(t, xs(e));
  });
}
var ze = uw(B2);
const S = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 13,
    slider_knob: 15,
    slider_anchor: { x: 1, y: 7 },
    playbutton_size: 120,
    button_size: 70,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 10, y: 2 },
    resetbutton_anchor: { x: 7, y: 2 },
    radio_anchor: { x: 3, y: 5 },
    radio_size: 180,
    radio_buttonsize: 35,
    radio_orientation: "horizontal",
    radio_label_position: "right",
    radio_shape: "round"
  },
  simulation: {
    delay: 10
  }
}, C = {
  N: 100,
  diffusion_rate: {
    range: [0.05, 0.3],
    default: 0.1
  },
  reproduction_rate: {
    range: [0.05, 1],
    default: 0.3
  },
  local_capacity: {
    range: [5, 50],
    default: 20
  },
  initial_radius: {
    range: [0.01, 0.4],
    default: 0.15
  },
  number_of_mutants: {
    choices: ["2 Mutants", "3 Mutants"],
    default: 0
  }
}, Ss = (t) => nr(Ms(t), (n) => {
  n[1].id = n[0], n[1].label = L2(sx(n[0]), /_/g, " ");
}), ks = (t) => nr(Ms(t), (n) => n[1]), Es = (t, n) => ot(t, (e, r) => e.widget = n[r]), U2 = (t) => $s(t, (n) => As(n, "range")), G2 = (t) => $s(t, (n) => As(n, "choices"));
jn().domain([0, 360]).range([0, 2 * Math.PI]);
jn().range([0, 360]).domain([0, 2 * Math.PI]);
const Y2 = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, ji = U2(C), Fi = G2(C);
Ss(ji);
Ss(Fi);
const Ps = ks(ji), Os = ks(Fi), se = nr(
  Ps,
  (t) => Jm().id(t.id).label(t.label).range(t.range).value(t.default).girth(S.widgets.slider_girth).knob(S.widgets.slider_knob).size(S.widgets.slider_size)
), Qr = nr(
  Os,
  (t) => Qm().choices(t.choices).id(t.id).value(t.default).buttonsize(S.widgets.radio_buttonsize).orientation(S.widgets.radio_orientation).labelposition(S.widgets.radio_label_position)
);
Es(Ps, se);
Es(Os, Qr);
const R = Si().actions(["play", "pause"]).id("play"), er = Si().actions(["back"]), rr = Si().actions(["rewind"]), V2 = [R, er, rr], K2 = (t, n) => {
  const e = n.position(S.widgets.slider_anchor.x, Ns(se.length).map((i) => S.widgets.slider_anchor.y + S.widgets.slider_gap * i)), r = n.position(S.widgets.radio_anchor.x, S.widgets.radio_anchor.y);
  se.forEach((i, o) => i.position(e[o])), Qr[0].position(r).size(S.widgets.radio_size).shape(S.widgets.radio_shape), R.position(n.position(S.widgets.playbutton_anchor.x, S.widgets.playbutton_anchor.y)).size(S.widgets.playbutton_size), rr.position(n.position(S.widgets.backbutton_anchor.x, S.widgets.backbutton_anchor.y)).size(S.widgets.button_size), er.position(n.position(S.widgets.resetbutton_anchor.x, S.widgets.resetbutton_anchor.y)).size(S.widgets.button_size), t.selectAll(null).data(se).enter().append(dr), t.selectAll(null).data(V2).enter().append(dr), t.selectAll(null).data(Qr).enter().append(dr);
}, W2 = (t) => {
  ot(ji, (n) => n.widget.reset(t, n.default)), ot(Fi, (n) => n.widget.reset(t, n.default));
};
function zs(t, n) {
  return [t % n, Math.floor(t / n)];
}
const Z2 = {
  n4: ze([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: ze([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function wr(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Z2[r].forEach((o) => {
    var a = o[1], u = o[0];
    const l = zs(t, n), s = l[0], c = l[1], h = s + u, f = c + a;
    (e == "dirichlet" ? !(a == 0 && u == 0) && h < n && f < n && h >= 0 && f >= 0 : !(a == 0 && u == 0)) && i.push(n * ((f + n) % n) + (h + n) % n);
  }), i;
}
const J2 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const u = Ns(i * i).map(function(f) {
    const p = zs(f, i);
    return {
      m: p[0],
      n: p[1],
      x: o * (p[0] + 0.5) - e / 2,
      y: a * (p[1] + 0.5) - e / 2
    };
  });
  u.forEach(function(f, p) {
    f.neighbors = wr(p, i, n, r).map((d) => u[d]), f.cell = () => [
      { x: f.x + o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y + a / 2 },
      { x: f.x - o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y - a / 2 },
      { x: f.x + o / 2, y: f.y + a / 2 }
    ], f.random_interior_point = () => ({
      x: f.x + o * (Math.random() - 0.5),
      y: f.y + a * (Math.random() - 0.5)
    });
  });
  const l = function(f) {
    return typeof f < "u" ? (u.forEach(function(p) {
      p.x = (p.m + 0.5) * f / i - f / 2, p.y = (p.n + 0.5) * f / i - f / 2;
    }), e = f, o = e / i, a = e / i, this.L = e, this) : e;
  }, s = function(f) {
    return typeof f < "u" ? (u.forEach(function(p, d) {
      p.neighbors = wr(d, i, f, r).map((y) => u[y]);
    }), n = f, u.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, c = function(f) {
    return typeof f < "u" ? (u.forEach(function(p, d) {
      p.neighbors = wr(d, i, n, f).map((y) => u[y]);
    }), r = f, this) : r;
  }, h = function() {
    return n === "periodic" ? null : Et(u, (f) => f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: c,
    nodes: u,
    scale: l,
    boundary: s,
    boundary_cells: h
  };
};
ze([-1, 1, 0, 0], [0, 0, -1, 1]), ze([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var At = [], Cs = [];
const Q2 = () => {
  C.timer = {}, C.tick = 0;
  const t = C.N, n = C.number_of_mutants.widget.value(), e = C.local_capacity.widget.value();
  At = J2(t).boundary("dirichlet").nodes, Cs = Et(At, (i) => i.is_boundary), ot(At, (i) => {
    i.u = 0, i.v = 0, i.w = 0;
  });
  const r = Et(At, (i) => Y2(i, { x: 0, y: 0 }) < C.initial_radius.widget.value());
  ot(r, (i) => {
    i.u = Math.floor(Math.random() * e / (n + 2)), i.v = Math.floor(Math.random() * e / (n + 2)), i.w = n == 0 ? 0 : Math.floor(Math.random() * e / (n + 2));
  });
}, tM = () => {
  C.tick++;
  let t = mr(Et(At, (n) => {
    let e = n.u + n.v + n.w;
    return e > 0 && e < C.local_capacity.widget.value();
  }));
  return ot(t, (n) => {
    Math.random() < C.reproduction_rate.widget.value() && (Math.random() < n.u / (n.v + n.u + n.w) ? n.u++ : Math.random() < n.v / (n.v + n.w) ? n.v++ : n.w++);
  }), t = mr(Et(At, (n) => n.u + n.v + n.w > 0)), ot(t, (n) => {
    let e = mr(Et(n.neighbors, (r) => r.u + r.v + r.w < C.local_capacity.widget.value()));
    ot(e, (r) => {
      Math.random() < C.diffusion_rate.widget.value() && (Math.random() < n.u / (n.v + n.u + n.w) ? r.u++ : Math.random() < n.v / (n.v + n.w) ? r.v++ : r.w++);
    });
  }), Et(Cs, (n) => n.v + n.w + n.u > 0).length > 0;
}, L = jn().domain([-0.5, 0.5]), nM = jn().domain([-0.5, 0.5]);
var W, le, ce;
function Is(t) {
  const n = C.number_of_mutants.widget.value(), e = C.local_capacity.widget.value();
  return n == 0 ? An(255 * t.u / e, 255 * t.v / e, 0, (t.u + t.v) / e) : An(255 * t.u / e, 255 * t.v / e, 255 * t.w / e, (t.u + t.v + t.w) / e);
}
const eM = (t, n) => {
  le = n.display_size.width, ce = n.display_size.height, L.range([0, le]), nM.range([0, ce]), W = t.node().getContext("2d"), W.clearRect(0, 0, le, ce), ot(At, (e) => {
    const r = e.cell(), i = Is(e);
    W.fillStyle = i, W.strokeStyle = i, W.lineWidth = 0, W.fillRect(L(r[0].x), L(r[0].y), L(r[2].x) - L(r[0].x), L(r[2].y) - L(r[0].y));
  });
}, rM = (t, n) => {
  W.clearRect(1, 1, le - 2, ce - 2), ot(At, (e) => {
    const r = e.cell(), i = Is(e);
    W.fillStyle = i, W.strokeStyle = i, W.lineWidth = 0, W.fillRect(L(r[0].x), L(r[0].y), L(r[2].x) - L(r[0].x), L(r[2].y) - L(r[0].y));
  });
};
function iM(t, n, e) {
  let r = !1;
  r = tM(), rM(), r && (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"), R.press(n));
}
function mn(t, n) {
  Q2(), eM(t, n);
}
var Ma = {};
const oM = (t, n, e) => {
  R.value() == 1 ? Ma = uf(() => iM(t, n), S.simulation.delay) : Ma.stop(), n.select("#slider_local_capacity").transition(1e3).style("opacity", R.value() ? 0 : 1), n.select("#slider_local_capacity").selectAll("*").style("pointer-events", R.value() ? "none" : null), n.select("#slider_initial_radius").transition(1e3).style("opacity", R.value() ? 0 : 1), n.select("#slider_initial_radius").selectAll("*").style("pointer-events", R.value() ? "none" : null), n.select("#radio_number_of_mutants").transition(1e3).style("opacity", R.value() ? 0 : 1).style("pointer-events", R.value() ? "none" : null);
}, aM = (t, n, e) => {
  rr.update(() => W2(n)), R.update(() => oM(t, n)), er.update(() => {
    mn(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), C.initial_radius.widget.update_end(() => {
    mn(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), C.number_of_mutants.widget.update(() => {
    mn(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), C.local_capacity.widget.update_end(() => {
    mn(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  });
}, uM = {
  name: "@explorables/surfing_a_gene_pool",
  title: "Surfing a Gene Pool",
  subtitle: "Expansion of clones with idential fitness",
  description: "This explorable illustrates pattern formation in bacterial populations in which different clones with identical fitness expand in space.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function sM(t, n = Rs) {
  const e = a1(t, n), r = e.display, i = e.controls, o = e.grid;
  return K2(i, o), aM(r, i, n), mn(r, n), {
    halt() {
      R.value() === 1 && R.press(i);
    },
    reset() {
      R.value() === 1 && R.press(i), rr.press(i), er.press(i);
    },
    config: n,
    meta: uM
  };
}
export {
  Rs as config,
  sM as default,
  sM as load,
  uM as meta
};
