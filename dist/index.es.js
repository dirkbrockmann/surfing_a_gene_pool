(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Zi = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 804, height: 804 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function rn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ji(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Cr(t) {
  let n, e, r;
  t.length !== 2 ? (n = rn, e = (s, l) => rn(t(s), l), r = (s, l) => t(s) - l) : (n = t === rn || t === Ji ? t : Qi, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    const h = i(s, l, u, f - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Qi() {
  return 0;
}
function ji(t) {
  return t === null ? NaN : +t;
}
const to = Cr(rn), no = to.right;
Cr(ji).center;
const eo = Math.sqrt(50), ro = Math.sqrt(10), io = Math.sqrt(2);
function cn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= eo ? 10 : o >= ro ? 5 : o >= io ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? cn(t, n, e * 2) : [s, l, u];
}
function oo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? cn(n, t, e) : cn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Wn(t, n, e) {
  return n = +n, t = +t, e = +e, cn(t, n, e)[2];
}
function ao(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Wn(n, t, e) : Wn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function so(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var uo = { value: () => {
} };
function ye() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new on(e);
}
function on(t) {
  this._ = t;
}
function lo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
on.prototype = ye.prototype = {
  constructor: on,
  on: function(t, n) {
    var e = this._, r = lo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = fo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = qe(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = qe(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new on(t);
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
function fo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function qe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = uo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Zn = "http://www.w3.org/1999/xhtml";
const Be = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Be.hasOwnProperty(n) ? { space: Be[n], local: t } : t;
}
function co(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Zn && n.documentElement.namespaceURI === Zn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ho(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ir(t) {
  var n = Mn(t);
  return (n.local ? ho : co)(n);
}
function po() {
}
function _e(t) {
  return t == null ? po : function() {
    return this.querySelector(t);
  };
}
function go(t) {
  typeof t != "function" && (t = _e(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = o[f]) && (u = t.call(l, l.__data__, f, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new k(r, this._parents);
}
function yo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function _o() {
  return [];
}
function Rr(t) {
  return t == null ? _o : function() {
    return this.querySelectorAll(t);
  };
}
function mo(t) {
  return function() {
    return yo(t.apply(this, arguments));
  };
}
function vo(t) {
  typeof t == "function" ? t = mo(t) : t = Rr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new k(r, i);
}
function kr(t) {
  return function() {
    return this.matches(t);
  };
}
function Fr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var wo = Array.prototype.find;
function bo(t) {
  return function() {
    return wo.call(this.children, t);
  };
}
function xo() {
  return this.firstElementChild;
}
function Mo(t) {
  return this.select(t == null ? xo : bo(typeof t == "function" ? t : Fr(t)));
}
var $o = Array.prototype.filter;
function Ao() {
  return Array.from(this.children);
}
function To(t) {
  return function() {
    return $o.call(this.children, t);
  };
}
function So(t) {
  return this.selectAll(t == null ? Ao : To(typeof t == "function" ? t : Fr(t)));
}
function Po(t) {
  typeof t != "function" && (t = kr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new k(r, this._parents);
}
function Lr(t) {
  return new Array(t.length);
}
function Eo() {
  return new k(this._enter || this._groups.map(Lr), this._parents);
}
function hn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
hn.prototype = {
  constructor: hn,
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
function No(t) {
  return function() {
    return t;
  };
}
function zo(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new hn(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Oo(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, h = o.length, c = new Array(f), p;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (c[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new hn(t, o[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function Co(t) {
  return t.__data__;
}
function Io(t, n) {
  if (!arguments.length) return Array.from(this, Co);
  var e = n ? Oo : zo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = No(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], h = i[u], c = h.length, p = Ro(t.call(f, f && f.__data__, u, r)), d = p.length, g = s[u] = new Array(d), b = a[u] = new Array(d), _ = l[u] = new Array(c);
    e(f, h, g, b, _, p, n);
    for (var x = 0, $ = 0, y, v; x < d; ++x)
      if (y = g[x]) {
        for (x >= $ && ($ = x + 1); !(v = b[$]) && ++$ < d; ) ;
        y._next = v || null;
      }
  }
  return a = new k(a, r), a._enter = s, a._exit = l, a;
}
function Ro(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ko() {
  return new k(this._exit || this._groups.map(Lr), this._parents);
}
function Fo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Lo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], f = r[l], h = u.length, c = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || f[d]) && (c[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new k(s, this._parents);
}
function Do() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Ho(t) {
  t || (t = qo);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(n);
  }
  return new k(i, this._parents).order();
}
function qo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Bo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Xo() {
  return Array.from(this);
}
function Go() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Uo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Yo() {
  return !this.node();
}
function Ko(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Vo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Wo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Zo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Jo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Qo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function jo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ta(t, n) {
  var e = Mn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Wo : Vo : typeof n == "function" ? e.local ? jo : Qo : e.local ? Jo : Zo)(e, n));
}
function Dr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function na(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ea(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ra(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ia(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? na : typeof n == "function" ? ra : ea)(t, n, e ?? "")) : Mt(this.node(), t);
}
function Mt(t, n) {
  return t.style.getPropertyValue(n) || Dr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function oa(t) {
  return function() {
    delete this[t];
  };
}
function aa(t, n) {
  return function() {
    this[t] = n;
  };
}
function sa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ua(t, n) {
  return arguments.length > 1 ? this.each((n == null ? oa : typeof n == "function" ? sa : aa)(t, n)) : this.node()[t];
}
function Hr(t) {
  return t.trim().split(/^|\s+/);
}
function me(t) {
  return t.classList || new qr(t);
}
function qr(t) {
  this._node = t, this._names = Hr(t.getAttribute("class") || "");
}
qr.prototype = {
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
function Br(t, n) {
  for (var e = me(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Xr(t, n) {
  for (var e = me(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function la(t) {
  return function() {
    Br(this, t);
  };
}
function fa(t) {
  return function() {
    Xr(this, t);
  };
}
function ca(t, n) {
  return function() {
    (n.apply(this, arguments) ? Br : Xr)(this, t);
  };
}
function ha(t, n) {
  var e = Hr(t + "");
  if (arguments.length < 2) {
    for (var r = me(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ca : n ? la : fa)(e, n));
}
function da() {
  this.textContent = "";
}
function pa(t) {
  return function() {
    this.textContent = t;
  };
}
function ga(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ya(t) {
  return arguments.length ? this.each(t == null ? da : (typeof t == "function" ? ga : pa)(t)) : this.node().textContent;
}
function _a() {
  this.innerHTML = "";
}
function ma(t) {
  return function() {
    this.innerHTML = t;
  };
}
function va(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function wa(t) {
  return arguments.length ? this.each(t == null ? _a : (typeof t == "function" ? va : ma)(t)) : this.node().innerHTML;
}
function ba() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xa() {
  return this.each(ba);
}
function Ma() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $a() {
  return this.each(Ma);
}
function Aa(t) {
  var n = typeof t == "function" ? t : Ir(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ta() {
  return null;
}
function Sa(t, n) {
  var e = typeof t == "function" ? t : Ir(t), r = n == null ? Ta : typeof n == "function" ? n : _e(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Pa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ea() {
  return this.each(Pa);
}
function Na() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function za() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Oa(t) {
  return this.select(t ? za : Na);
}
function Ca(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ia(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ra(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ka(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Fa(t, n, e) {
  return function() {
    var r = this.__on, i, o = Ia(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function La(t, n, e) {
  var r = Ra(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Fa : ka, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Gr(t, n, e) {
  var r = Dr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Da(t, n) {
  return function() {
    return Gr(this, t, n);
  };
}
function Ha(t, n) {
  return function() {
    return Gr(this, t, n.apply(this, arguments));
  };
}
function qa(t, n) {
  return this.each((typeof n == "function" ? Ha : Da)(t, n));
}
function* Ba() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Ur = [null];
function k(t, n) {
  this._groups = t, this._parents = n;
}
function Ut() {
  return new k([[document.documentElement]], Ur);
}
function Xa() {
  return this;
}
k.prototype = Ut.prototype = {
  constructor: k,
  select: go,
  selectAll: vo,
  selectChild: Mo,
  selectChildren: So,
  filter: Po,
  data: Io,
  enter: Eo,
  exit: ko,
  join: Fo,
  merge: Lo,
  selection: Xa,
  order: Do,
  sort: Ho,
  call: Bo,
  nodes: Xo,
  node: Go,
  size: Uo,
  empty: Yo,
  each: Ko,
  attr: ta,
  style: ia,
  property: ua,
  classed: ha,
  text: ya,
  html: wa,
  raise: xa,
  lower: $a,
  append: Aa,
  insert: Sa,
  remove: Ea,
  clone: Oa,
  datum: Ca,
  on: La,
  dispatch: qa,
  [Symbol.iterator]: Ba
};
function S(t) {
  return typeof t == "string" ? new k([[document.querySelector(t)]], [document.documentElement]) : new k([[t]], Ur);
}
function Ga(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Jn(t, n) {
  if (t = Ga(t), n === void 0 && (n = t.currentTarget), n) {
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
const Ua = { passive: !1 }, Ft = { capture: !0, passive: !1 };
function Dn(t) {
  t.stopImmediatePropagation();
}
function bt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ya(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", bt, Ft);
  "onselectstart" in n ? e.on("selectstart.drag", bt, Ft) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ka(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", bt, Ft), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Jt = (t) => () => t;
function Qn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Qn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Va(t) {
  return !t.ctrlKey && !t.button;
}
function Wa() {
  return this.parentNode;
}
function Za(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Ja() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Qa() {
  var t = Va, n = Wa, e = Za, r = Ja, i = {}, o = ye("start", "drag", "end"), a = 0, s, l, u, f, h = 0;
  function c(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, Ua).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, v) {
    if (!(f || !t.call(this, y, v))) {
      var T = $(this, n.call(this, y, v), y, v, "mouse");
      T && (S(y.view).on("mousemove.drag", d, Ft).on("mouseup.drag", g, Ft), Ya(y.view), Dn(y), u = !1, s = y.clientX, l = y.clientY, T("start", y));
    }
  }
  function d(y) {
    if (bt(y), !u) {
      var v = y.clientX - s, T = y.clientY - l;
      u = v * v + T * T > h;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    S(y.view).on("mousemove.drag mouseup.drag", null), Ka(y.view, u), bt(y), i.mouse("end", y);
  }
  function b(y, v) {
    if (t.call(this, y, v)) {
      var T = y.changedTouches, P = n.call(this, y, v), N = T.length, G, J;
      for (G = 0; G < N; ++G)
        (J = $(this, P, y, v, T[G].identifier, T[G])) && (Dn(y), J("start", y, T[G]));
    }
  }
  function _(y) {
    var v = y.changedTouches, T = v.length, P, N;
    for (P = 0; P < T; ++P)
      (N = i[v[P].identifier]) && (bt(y), N("drag", y, v[P]));
  }
  function x(y) {
    var v = y.changedTouches, T = v.length, P, N;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), P = 0; P < T; ++P)
      (N = i[v[P].identifier]) && (Dn(y), N("end", y, v[P]));
  }
  function $(y, v, T, P, N, G) {
    var J = o.copy(), w = Jn(G || T, v), U, z, L;
    if ((L = e.call(y, new Qn("beforestart", {
      sourceEvent: T,
      target: c,
      identifier: N,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), P)) != null)
      return U = L.x - w[0] || 0, z = L.y - w[1] || 0, function Wt(at, ut, vt) {
        var F = w, Ln;
        switch (at) {
          case "start":
            i[N] = Wt, Ln = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            w = Jn(vt || ut, v), Ln = a;
            break;
        }
        J.call(
          at,
          y,
          new Qn(at, {
            sourceEvent: ut,
            subject: L,
            target: c,
            identifier: N,
            active: Ln,
            x: w[0] + U,
            y: w[1] + z,
            dx: w[0] - F[0],
            dy: w[1] - F[1],
            dispatch: J
          }),
          P
        );
      };
  }
  return c.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Jt(!!y), c) : t;
  }, c.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Jt(y), c) : n;
  }, c.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Jt(y), c) : e;
  }, c.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Jt(!!y), c) : r;
  }, c.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? c : y;
  }, c.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, c) : Math.sqrt(h);
  }, c;
}
function ve(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Yr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Yt() {
}
var Lt = 0.7, dn = 1 / Lt, xt = "\\s*([+-]?\\d+)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ja = /^#([0-9a-f]{3,8})$/, ts = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), ns = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), es = new RegExp(`^rgba\\(${xt},${xt},${xt},${Dt}\\)$`), rs = new RegExp(`^rgba\\(${Y},${Y},${Y},${Dt}\\)$`), is = new RegExp(`^hsl\\(${Dt},${Y},${Y}\\)$`), os = new RegExp(`^hsla\\(${Dt},${Y},${Y},${Dt}\\)$`), Xe = {
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
ve(Yt, dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ge,
  // Deprecated! Use color.formatHex.
  formatHex: Ge,
  formatHex8: as,
  formatHsl: ss,
  formatRgb: Ue,
  toString: Ue
});
function Ge() {
  return this.rgb().formatHex();
}
function as() {
  return this.rgb().formatHex8();
}
function ss() {
  return Kr(this).formatHsl();
}
function Ue() {
  return this.rgb().formatRgb();
}
function dt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ja.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ye(n) : e === 3 ? new C(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ts.exec(t)) ? new C(n[1], n[2], n[3], 1) : (n = ns.exec(t)) ? new C(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = es.exec(t)) ? Qt(n[1], n[2], n[3], n[4]) : (n = rs.exec(t)) ? Qt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = is.exec(t)) ? We(n[1], n[2] / 100, n[3] / 100, 1) : (n = os.exec(t)) ? We(n[1], n[2] / 100, n[3] / 100, n[4]) : Xe.hasOwnProperty(t) ? Ye(Xe[t]) : t === "transparent" ? new C(NaN, NaN, NaN, 0) : null;
}
function Ye(t) {
  return new C(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new C(t, n, e, r);
}
function us(t) {
  return t instanceof Yt || (t = dt(t)), t ? (t = t.rgb(), new C(t.r, t.g, t.b, t.opacity)) : new C();
}
function Ht(t, n, e, r) {
  return arguments.length === 1 ? us(t) : new C(t, n, e, r ?? 1);
}
function C(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ve(C, Ht, Yr(Yt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new C(ht(this.r), ht(this.g), ht(this.b), pn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ke,
  // Deprecated! Use color.formatHex.
  formatHex: Ke,
  formatHex8: ls,
  formatRgb: Ve,
  toString: Ve
}));
function Ke() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function ls() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ve() {
  const t = pn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function We(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new q(t, n, e, r);
}
function Kr(t) {
  if (t instanceof q) return new q(t.h, t.s, t.l, t.opacity);
  if (t instanceof Yt || (t = dt(t)), !t) return new q();
  if (t instanceof q) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new q(a, s, l, t.opacity);
}
function fs(t, n, e, r) {
  return arguments.length === 1 ? Kr(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ve(q, fs, Yr(Yt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lt : Math.pow(Lt, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new C(
      Hn(t >= 240 ? t - 240 : t + 120, i, r),
      Hn(t, i, r),
      Hn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new q(Ze(this.h), jt(this.s), jt(this.l), pn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ze(this.h)}, ${jt(this.s) * 100}%, ${jt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ze(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function jt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Hn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const we = (t) => () => t;
function cs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function hs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ds(t) {
  return (t = +t) == 1 ? Vr : function(n, e) {
    return e - n ? hs(n, e, t) : we(isNaN(n) ? e : n);
  };
}
function Vr(t, n) {
  var e = n - t;
  return e ? cs(t, e) : we(isNaN(t) ? n : t);
}
const gn = function t(n) {
  var e = ds(n);
  function r(i, o) {
    var a = e((i = Ht(i)).r, (o = Ht(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Vr(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ps(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function gs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ys(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = be(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function _s(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function D(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ms(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = be(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var jn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qn = new RegExp(jn.source, "g");
function vs(t) {
  return function() {
    return t;
  };
}
function ws(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wr(t, n) {
  var e = jn.lastIndex = qn.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = jn.exec(t)) && (i = qn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: D(r, i) })), e = qn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? ws(l[0].x) : vs(n) : (n = l.length, function(u) {
    for (var f = 0, h; f < n; ++f) s[(h = l[f]).i] = h.x(u);
    return s.join("");
  });
}
function be(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? we(n) : (e === "number" ? D : e === "string" ? (r = dt(n)) ? (n = r, gn) : Wr : n instanceof dt ? gn : n instanceof Date ? _s : gs(n) ? ps : Array.isArray(n) ? ys : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ms : D)(t, n);
}
function bs(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Je = 180 / Math.PI, te = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zr(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Je,
    skewX: Math.atan(l) * Je,
    scaleX: a,
    scaleY: s
  };
}
var tn;
function xs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? te : Zr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ms(t) {
  return t == null || (tn || (tn = document.createElementNS("http://www.w3.org/2000/svg", "g")), tn.setAttribute("transform", t), !(t = tn.transform.baseVal.consolidate())) ? te : (t = t.matrix, Zr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Jr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, h, c, p, d) {
    if (u !== h || f !== c) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: D(u, h) }, { i: g - 2, x: D(f, c) });
    } else (h || c) && p.push("translate(" + h + n + c + e);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: D(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: D(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, d) {
    if (u !== h || f !== c) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: D(u, h) }, { i: g - 2, x: D(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), s(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var d = -1, g = c.length, b; ++d < g; ) h[(b = c[d]).i] = b.x(p);
      return h.join("");
    };
  };
}
var $s = Jr(xs, "px, ", "px)", "deg)"), As = Jr(Ms, ", ", ")", ")"), $t = 0, Ot = 0, Nt = 0, Qr = 1e3, yn, Ct, _n = 0, pt = 0, $n = 0, qt = typeof performance == "object" && performance.now ? performance : Date, jr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function An() {
  return pt || (jr(Ts), pt = qt.now() + $n);
}
function Ts() {
  pt = 0;
}
function Bt() {
  this._call = this._time = this._next = null;
}
Bt.prototype = ti.prototype = {
  constructor: Bt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? An() : +e) + (n == null ? 0 : +n), !this._next && Ct !== this && (Ct ? Ct._next = this : yn = this, Ct = this), this._call = t, this._time = e, ne();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ne());
  }
};
function ti(t, n, e) {
  var r = new Bt();
  return r.restart(t, n, e), r;
}
function Ss() {
  An(), ++$t;
  for (var t = yn, n; t; )
    (n = pt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --$t;
}
function Qe() {
  pt = (_n = qt.now()) + $n, $t = Ot = 0;
  try {
    Ss();
  } finally {
    $t = 0, Es(), pt = 0;
  }
}
function Ps() {
  var t = qt.now(), n = t - _n;
  n > Qr && ($n -= n, _n = t);
}
function Es() {
  for (var t, n = yn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : yn = e);
  Ct = t, ne(r);
}
function ne(t) {
  if (!$t) {
    Ot && (Ot = clearTimeout(Ot));
    var n = t - pt;
    n > 24 ? (t < 1 / 0 && (Ot = setTimeout(Qe, t - qt.now() - $n)), Nt && (Nt = clearInterval(Nt))) : (Nt || (_n = qt.now(), Nt = setInterval(Ps, Qr)), $t = 1, jr(Qe));
  }
}
function je(t, n, e) {
  var r = new Bt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ns(t, n, e) {
  var r = new Bt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? An() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var zs = ye("start", "end", "cancel", "interrupt"), Os = [], ni = 0, tr = 1, ee = 2, an = 3, nr = 4, re = 5, sn = 6;
function Tn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Cs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: zs,
    tween: Os,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ni
  });
}
function xe(t, n) {
  var e = B(t, n);
  if (e.state > ni) throw new Error("too late; already scheduled");
  return e;
}
function Z(t, n) {
  var e = B(t, n);
  if (e.state > an) throw new Error("too late; already running");
  return e;
}
function B(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Cs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ti(o, 0, e.time);
  function o(u) {
    e.state = tr, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (e.state !== tr) return l();
    for (f in r)
      if (p = r[f], p.name === e.name) {
        if (p.state === an) return je(a);
        p.state === nr ? (p.state = sn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < n && (p.state = sn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (je(function() {
      e.state === an && (e.state = nr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = ee, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ee) {
      for (e.state = an, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (p = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = re, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === re && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = sn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Is(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > ee && r.state < re, r.state = sn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Rs(t) {
  return this.each(function() {
    Is(this, t);
  });
}
function ks(t, n) {
  var e, r;
  return function() {
    var i = Z(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Fs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Z(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Ls(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = B(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? ks : Fs)(e, t, n));
}
function Me(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return B(i, r).value[n];
  };
}
function ei(t, n) {
  var e;
  return (typeof n == "number" ? D : n instanceof dt ? gn : (e = dt(n)) ? (n = e, gn) : Wr)(t, n);
}
function Ds(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Hs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Bs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Xs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Gs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Us(t, n) {
  var e = Mn(t), r = e === "transform" ? As : ei;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Gs : Xs)(e, r, Me(this, "attr." + t, n)) : n == null ? (e.local ? Hs : Ds)(e) : (e.local ? Bs : qs)(e, r, n));
}
function Ys(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Ks(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Vs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ks(t, o)), e;
  }
  return i._value = n, i;
}
function Ws(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ys(t, o)), e;
  }
  return i._value = n, i;
}
function Zs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Mn(t);
  return this.tween(e, (r.local ? Vs : Ws)(r, n));
}
function Js(t, n) {
  return function() {
    xe(this, t).delay = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    xe(this, t).delay = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : B(this.node(), n).delay;
}
function tu(t, n) {
  return function() {
    Z(this, t).duration = +n.apply(this, arguments);
  };
}
function nu(t, n) {
  return n = +n, function() {
    Z(this, t).duration = n;
  };
}
function eu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tu : nu)(n, t)) : B(this.node(), n).duration;
}
function ru(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Z(this, t).ease = n;
  };
}
function iu(t) {
  var n = this._id;
  return arguments.length ? this.each(ru(n, t)) : B(this.node(), n).ease;
}
function ou(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Z(this, t).ease = e;
  };
}
function au(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ou(this._id, t));
}
function su(t) {
  typeof t != "function" && (t = kr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new nt(r, this._parents, this._name, this._id);
}
function uu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], f = l.length, h = a[s] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new nt(a, this._parents, this._name, this._id);
}
function lu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function fu(t, n, e) {
  var r, i, o = lu(n) ? xe : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function cu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? B(this.node(), e).on.on(t) : this.each(fu(e, t, n));
}
function hu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function du() {
  return this.on("end.remove", hu(this._id));
}
function pu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = _e(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = s[c]) && (h = t.call(f, f.__data__, c, s)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Tn(u[c], n, e, c, u, B(f, e)));
  return new nt(o, this._parents, n, e);
}
function gu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Rr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, d = B(f, e), g = 0, b = c.length; g < b; ++g)
          (p = c[g]) && Tn(p, n, e, g, c, d);
        o.push(c), a.push(f);
      }
  return new nt(o, a, n, e);
}
var yu = Ut.prototype.constructor;
function _u() {
  return new yu(this._groups, this._parents);
}
function mu(t, n) {
  var e, r, i;
  return function() {
    var o = Mt(this, t), a = (this.style.removeProperty(t), Mt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ri(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Mt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function wu(t, n, e) {
  var r, i, o;
  return function() {
    var a = Mt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Mt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function bu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = Z(this, t), u = l.on, f = l.value[o] == null ? s || (s = ri(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), l.on = r;
  };
}
function xu(t, n, e) {
  var r = (t += "") == "transform" ? $s : ei;
  return n == null ? this.styleTween(t, mu(t, r)).on("end.style." + t, ri(t)) : typeof n == "function" ? this.styleTween(t, wu(t, r, Me(this, "style." + t, n))).each(bu(this._id, t)) : this.styleTween(t, vu(t, r, n), e).on("end.style." + t, null);
}
function Mu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function $u(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Mu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Au(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, $u(t, n, e ?? ""));
}
function Tu(t) {
  return function() {
    this.textContent = t;
  };
}
function Su(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Pu(t) {
  return this.tween("text", typeof t == "function" ? Su(Me(this, "text", t)) : Tu(t == null ? "" : t + ""));
}
function Eu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Nu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Eu(i)), n;
  }
  return r._value = t, r;
}
function zu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Nu(t));
}
function Ou() {
  for (var t = this._name, n = this._id, e = ii(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var f = B(l, n);
        Tn(l, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new nt(r, this._parents, t, e);
}
function Cu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = Z(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var Iu = 0;
function nt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ii() {
  return ++Iu;
}
var Q = Ut.prototype;
nt.prototype = {
  constructor: nt,
  select: pu,
  selectAll: gu,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: su,
  merge: uu,
  selection: _u,
  transition: Ou,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: cu,
  attr: Us,
  attrTween: Zs,
  style: xu,
  styleTween: Au,
  text: Pu,
  textTween: zu,
  remove: du,
  tween: Ls,
  delay: js,
  duration: eu,
  ease: iu,
  easeVarying: au,
  end: Cu,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function Ru(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ku = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ru
};
function Fu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Lu(t) {
  var n, e;
  t instanceof nt ? (n = t._id, t = t._name) : (n = ii(), (e = ku).time = An(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Tn(l, t, n, u, a, e || Fu(l, n));
  return new nt(r, this._parents, t, n);
}
Ut.prototype.interrupt = Rs;
Ut.prototype.transition = Lu;
const ie = Math.PI, oe = 2 * ie, lt = 1e-6, Du = oe - lt;
function oi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Hu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return oi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ai {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? oi : Hu(n);
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
    let a = this._x1, s = this._y1, l = r - n, u = i - e, f = a - n, h = s - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > lt) if (!(Math.abs(h * l - u * f) > lt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, g = l * l + u * u, b = p * p + d * d, _ = Math.sqrt(g), x = Math.sqrt(c), $ = o * Math.tan((ie - Math.acos((g + c - b) / (2 * _ * x))) / 2), y = $ / x, v = $ / _;
      Math.abs(y - 1) > lt && this._append`L${n + y * f},${e + y * h}`, this._append`A${o},${o},0,0,${+(h * p > f * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, f = e + l, h = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > lt || Math.abs(this._y1 - f) > lt) && this._append`L${u},${f}`, r && (c < 0 && (c = c % oe + oe), c > Du ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > lt && this._append`A${r},${r},0,${+(c >= ie)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new ai();
}
X.prototype = ai.prototype;
function qu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function mn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function At(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function Bu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Xu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Gu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vn(t) {
  if (!(n = Gu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new $e({
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
vn.prototype = $e.prototype;
function $e(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
$e.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Uu(t) {
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
var si;
function Yu(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (si = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + mn(t, Math.max(0, n + o - 1))[0];
}
function er(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const rr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: qu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => er(t * 100, n),
  r: er,
  s: Yu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ir(t) {
  return t;
}
var or = Array.prototype.map, ar = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ku(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ir : Bu(or.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ir : Xu(or.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = vn(h);
    var c = h.fill, p = h.align, d = h.sign, g = h.symbol, b = h.zero, _ = h.width, x = h.comma, $ = h.precision, y = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : rr[v] || ($ === void 0 && ($ = 12), y = !0, v = "g"), (b || c === "0" && p === "=") && (b = !0, c = "0", p = "=");
    var T = g === "$" ? e : g === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = g === "$" ? r : /[%p]/.test(v) ? a : "", N = rr[v], G = /[defgprs%]/.test(v);
    $ = $ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function J(w) {
      var U = T, z = P, L, Wt, at;
      if (v === "c")
        z = N(w) + z, w = "";
      else {
        w = +w;
        var ut = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? l : N(Math.abs(w), $), y && (w = Uu(w)), ut && +w == 0 && d !== "+" && (ut = !1), U = (ut ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, z = (v === "s" ? ar[8 + si / 3] : "") + z + (ut && d === "(" ? ")" : ""), G) {
          for (L = -1, Wt = w.length; ++L < Wt; )
            if (at = w.charCodeAt(L), 48 > at || at > 57) {
              z = (at === 46 ? i + w.slice(L + 1) : w.slice(L)) + z, w = w.slice(0, L);
              break;
            }
        }
      }
      x && !b && (w = n(w, 1 / 0));
      var vt = U.length + w.length + z.length, F = vt < _ ? new Array(_ - vt + 1).join(c) : "";
      switch (x && b && (w = n(F + w, F.length ? _ - z.length : 1 / 0), F = ""), p) {
        case "<":
          w = U + w + z + F;
          break;
        case "=":
          w = U + F + w + z;
          break;
        case "^":
          w = F.slice(0, vt = F.length >> 1) + U + w + z + F.slice(vt);
          break;
        default:
          w = F + U + w + z;
          break;
      }
      return o(w);
    }
    return J.toString = function() {
      return h + "";
    }, J;
  }
  function f(h, c) {
    var p = u((h = vn(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(At(c) / 3))) * 3, g = Math.pow(10, -d), b = ar[8 + d / 3];
    return function(_) {
      return p(g * _) + b;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var nn, Sn, ui;
Vu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Vu(t) {
  return nn = Ku(t), Sn = nn.format, ui = nn.formatPrefix, nn;
}
function Wu(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Zu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(n) / 3))) * 3 - At(Math.abs(t)));
}
function Ju(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, At(n) - At(t)) + 1;
}
function Qu(t, n) {
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
function ju(t) {
  return function() {
    return t;
  };
}
function tl(t) {
  return +t;
}
var sr = [0, 1];
function wt(t) {
  return t;
}
function ae(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ju(isNaN(n) ? NaN : 0.5);
}
function nl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function el(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ae(i, r), o = e(a, o)) : (r = ae(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function rl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ae(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = no(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function il(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ol() {
  var t = sr, n = sr, e = be, r, i, o, a = wt, s, l, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== wt && (a = nl(t[0], t[c - 1])), s = c > 2 ? rl : el, l = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? o : (l || (l = s(t.map(r), n, e)))(r(a(c)));
  }
  return h.invert = function(c) {
    return a(i((u || (u = s(n, t.map(r), D)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, tl), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = bs, f();
  }, h.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : wt, f()) : a !== wt;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (o = c, h) : o;
  }, function(c, p) {
    return r = c, i = p, f();
  };
}
function al() {
  return ol()(wt, wt);
}
function sl(t, n, e, r) {
  var i = ao(t, n, e), o;
  switch (r = vn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Zu(i, a)) && (r.precision = o), ui(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ju(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Wu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Sn(r);
}
function ul(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return oo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return sl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = Wn(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function V() {
  var t = al();
  return t.copy = function() {
    return il(t, V());
  }, Qu.apply(t, arguments), ul(t);
}
function It(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
It.prototype = {
  constructor: It,
  scale: function(t) {
    return t === 1 ? this : new It(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new It(this.k, this.x + this.k * t, this.y + this.k * n);
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
It.prototype;
var li = typeof global == "object" && global && global.Object === Object && global, ll = typeof self == "object" && self && self.Object === Object && self, rt = li || ll || Function("return this")(), W = rt.Symbol, fi = Object.prototype, fl = fi.hasOwnProperty, cl = fi.toString, zt = W ? W.toStringTag : void 0;
function hl(t) {
  var n = fl.call(t, zt), e = t[zt];
  try {
    t[zt] = void 0;
    var r = !0;
  } catch {
  }
  var i = cl.call(t);
  return r && (n ? t[zt] = e : delete t[zt]), i;
}
var dl = Object.prototype, pl = dl.toString;
function gl(t) {
  return pl.call(t);
}
var yl = "[object Null]", _l = "[object Undefined]", ur = W ? W.toStringTag : void 0;
function St(t) {
  return t == null ? t === void 0 ? _l : yl : ur && ur in Object(t) ? hl(t) : gl(t);
}
function gt(t) {
  return t != null && typeof t == "object";
}
var ml = "[object Symbol]";
function Pn(t) {
  return typeof t == "symbol" || gt(t) && St(t) == ml;
}
function Pt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var I = Array.isArray, lr = W ? W.prototype : void 0, fr = lr ? lr.toString : void 0;
function ci(t) {
  if (typeof t == "string")
    return t;
  if (I(t))
    return Pt(t, ci) + "";
  if (Pn(t))
    return fr ? fr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var vl = /\s/;
function wl(t) {
  for (var n = t.length; n-- && vl.test(t.charAt(n)); )
    ;
  return n;
}
var bl = /^\s+/;
function xl(t) {
  return t && t.slice(0, wl(t) + 1).replace(bl, "");
}
function et(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var cr = NaN, Ml = /^[-+]0x[0-9a-f]+$/i, $l = /^0b[01]+$/i, Al = /^0o[0-7]+$/i, Tl = parseInt;
function Sl(t) {
  if (typeof t == "number")
    return t;
  if (Pn(t))
    return cr;
  if (et(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = et(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xl(t);
  var e = $l.test(t);
  return e || Al.test(t) ? Tl(t.slice(2), e ? 2 : 8) : Ml.test(t) ? cr : +t;
}
var Pl = 1 / 0, El = 17976931348623157e292;
function Bn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sl(t), t === Pl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * El;
  }
  return t === t ? t : 0;
}
function En(t) {
  return t;
}
var Nl = "[object AsyncFunction]", zl = "[object Function]", Ol = "[object GeneratorFunction]", Cl = "[object Proxy]";
function hi(t) {
  if (!et(t))
    return !1;
  var n = St(t);
  return n == zl || n == Ol || n == Nl || n == Cl;
}
var Xn = rt["__core-js_shared__"], hr = function() {
  var t = /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Il(t) {
  return !!hr && hr in t;
}
var Rl = Function.prototype, kl = Rl.toString;
function _t(t) {
  if (t != null) {
    try {
      return kl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Fl = /[\\^$.*+?()[\]{}|]/g, Ll = /^\[object .+?Constructor\]$/, Dl = Function.prototype, Hl = Object.prototype, ql = Dl.toString, Bl = Hl.hasOwnProperty, Xl = RegExp(
  "^" + ql.call(Bl).replace(Fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gl(t) {
  if (!et(t) || Il(t))
    return !1;
  var n = hi(t) ? Xl : Ll;
  return n.test(_t(t));
}
function Ul(t, n) {
  return t == null ? void 0 : t[n];
}
function mt(t, n) {
  var e = Ul(t, n);
  return Gl(e) ? e : void 0;
}
var se = mt(rt, "WeakMap");
function Yl(t, n, e) {
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
function Kl(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Vl = 800, Wl = 16, Zl = Date.now;
function Jl(t) {
  var n = 0, e = 0;
  return function() {
    var r = Zl(), i = Wl - (r - e);
    if (e = r, i > 0) {
      if (++n >= Vl)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Ql(t) {
  return function() {
    return t;
  };
}
var wn = function() {
  try {
    var t = mt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), jl = wn ? function(t, n) {
  return wn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ql(n),
    writable: !0
  });
} : En, tf = Jl(jl);
function nf(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var ef = 9007199254740991, rf = /^(?:0|[1-9]\d*)$/;
function Nn(t, n) {
  var e = typeof t;
  return n = n ?? ef, !!n && (e == "number" || e != "symbol" && rf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function of(t, n, e) {
  n == "__proto__" && wn ? wn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function zn(t, n) {
  return t === n || t !== t && n !== n;
}
var af = Object.prototype, sf = af.hasOwnProperty;
function uf(t, n, e) {
  var r = t[n];
  (!(sf.call(t, n) && zn(r, e)) || e === void 0 && !(n in t)) && of(t, n, e);
}
var dr = Math.max;
function lf(t, n, e) {
  return n = dr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = dr(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Yl(t, this, s);
  };
}
function ff(t, n) {
  return tf(lf(t, n, En), t + "");
}
var cf = 9007199254740991;
function Ae(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= cf;
}
function Et(t) {
  return t != null && Ae(t.length) && !hi(t);
}
function hf(t, n, e) {
  if (!et(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Et(e) && Nn(n, e.length) : r == "string" && n in e) ? zn(e[n], t) : !1;
}
var df = Object.prototype;
function di(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || df;
  return t === e;
}
function pi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var pf = "[object Arguments]";
function pr(t) {
  return gt(t) && St(t) == pf;
}
var gi = Object.prototype, gf = gi.hasOwnProperty, yf = gi.propertyIsEnumerable, Te = pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? pr : function(t) {
  return gt(t) && gf.call(t, "callee") && !yf.call(t, "callee");
};
function _f() {
  return !1;
}
var yi = typeof exports == "object" && exports && !exports.nodeType && exports, gr = yi && typeof module == "object" && module && !module.nodeType && module, mf = gr && gr.exports === yi, yr = mf ? rt.Buffer : void 0, vf = yr ? yr.isBuffer : void 0, ue = vf || _f, wf = "[object Arguments]", bf = "[object Array]", xf = "[object Boolean]", Mf = "[object Date]", $f = "[object Error]", Af = "[object Function]", Tf = "[object Map]", Sf = "[object Number]", Pf = "[object Object]", Ef = "[object RegExp]", Nf = "[object Set]", zf = "[object String]", Of = "[object WeakMap]", Cf = "[object ArrayBuffer]", If = "[object DataView]", Rf = "[object Float32Array]", kf = "[object Float64Array]", Ff = "[object Int8Array]", Lf = "[object Int16Array]", Df = "[object Int32Array]", Hf = "[object Uint8Array]", qf = "[object Uint8ClampedArray]", Bf = "[object Uint16Array]", Xf = "[object Uint32Array]", M = {};
M[Rf] = M[kf] = M[Ff] = M[Lf] = M[Df] = M[Hf] = M[qf] = M[Bf] = M[Xf] = !0;
M[wf] = M[bf] = M[Cf] = M[xf] = M[If] = M[Mf] = M[$f] = M[Af] = M[Tf] = M[Sf] = M[Pf] = M[Ef] = M[Nf] = M[zf] = M[Of] = !1;
function Gf(t) {
  return gt(t) && Ae(t.length) && !!M[St(t)];
}
function Uf(t) {
  return function(n) {
    return t(n);
  };
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, kt = _i && typeof module == "object" && module && !module.nodeType && module, Yf = kt && kt.exports === _i, Gn = Yf && li.process, _r = function() {
  try {
    var t = kt && kt.require && kt.require("util").types;
    return t || Gn && Gn.binding && Gn.binding("util");
  } catch {
  }
}(), mr = _r && _r.isTypedArray, mi = mr ? Uf(mr) : Gf, Kf = Object.prototype, Vf = Kf.hasOwnProperty;
function vi(t, n) {
  var e = I(t), r = !e && Te(t), i = !e && !r && ue(t), o = !e && !r && !i && mi(t), a = e || r || i || o, s = a ? pi(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Vf.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Nn(u, l))) && s.push(u);
  return s;
}
function wi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Wf = wi(Object.keys, Object), Zf = Object.prototype, Jf = Zf.hasOwnProperty;
function Qf(t) {
  if (!di(t))
    return Wf(t);
  var n = [];
  for (var e in Object(t))
    Jf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Kt(t) {
  return Et(t) ? vi(t) : Qf(t);
}
function jf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var tc = Object.prototype, nc = tc.hasOwnProperty;
function ec(t) {
  if (!et(t))
    return jf(t);
  var n = di(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !nc.call(t, r)) || e.push(r);
  return e;
}
function rc(t) {
  return Et(t) ? vi(t, !0) : ec(t);
}
var ic = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oc = /^\w*$/;
function Se(t, n) {
  if (I(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Pn(t) ? !0 : oc.test(t) || !ic.test(t) || n != null && t in Object(n);
}
var Xt = mt(Object, "create");
function ac() {
  this.__data__ = Xt ? Xt(null) : {}, this.size = 0;
}
function sc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var uc = "__lodash_hash_undefined__", lc = Object.prototype, fc = lc.hasOwnProperty;
function cc(t) {
  var n = this.__data__;
  if (Xt) {
    var e = n[t];
    return e === uc ? void 0 : e;
  }
  return fc.call(n, t) ? n[t] : void 0;
}
var hc = Object.prototype, dc = hc.hasOwnProperty;
function pc(t) {
  var n = this.__data__;
  return Xt ? n[t] !== void 0 : dc.call(n, t);
}
var gc = "__lodash_hash_undefined__";
function yc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Xt && n === void 0 ? gc : n, this;
}
function yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = ac;
yt.prototype.delete = sc;
yt.prototype.get = cc;
yt.prototype.has = pc;
yt.prototype.set = yc;
function _c() {
  this.__data__ = [], this.size = 0;
}
function On(t, n) {
  for (var e = t.length; e--; )
    if (zn(t[e][0], n))
      return e;
  return -1;
}
var mc = Array.prototype, vc = mc.splice;
function wc(t) {
  var n = this.__data__, e = On(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : vc.call(n, e, 1), --this.size, !0;
}
function bc(t) {
  var n = this.__data__, e = On(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function xc(t) {
  return On(this.__data__, t) > -1;
}
function Mc(t, n) {
  var e = this.__data__, r = On(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = _c;
it.prototype.delete = wc;
it.prototype.get = bc;
it.prototype.has = xc;
it.prototype.set = Mc;
var Gt = mt(rt, "Map");
function $c() {
  this.size = 0, this.__data__ = {
    hash: new yt(),
    map: new (Gt || it)(),
    string: new yt()
  };
}
function Ac(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Cn(t, n) {
  var e = t.__data__;
  return Ac(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Tc(t) {
  var n = Cn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Sc(t) {
  return Cn(this, t).get(t);
}
function Pc(t) {
  return Cn(this, t).has(t);
}
function Ec(t, n) {
  var e = Cn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = $c;
ot.prototype.delete = Tc;
ot.prototype.get = Sc;
ot.prototype.has = Pc;
ot.prototype.set = Ec;
var Nc = "Expected a function";
function Pe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Nc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Pe.Cache || ot)(), e;
}
Pe.Cache = ot;
var zc = 500;
function Oc(t) {
  var n = Pe(t, function(r) {
    return e.size === zc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Cc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ic = /\\(\\)?/g, Rc = Oc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Cc, function(e, r, i, o) {
    n.push(i ? o.replace(Ic, "$1") : r || e);
  }), n;
});
function In(t) {
  return t == null ? "" : ci(t);
}
function Rn(t, n) {
  return I(t) ? t : Se(t, n) ? [t] : Rc(In(t));
}
function Vt(t) {
  if (typeof t == "string" || Pn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ee(t, n) {
  n = Rn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Vt(n[e++])];
  return e && e == r ? t : void 0;
}
function kc(t, n, e) {
  var r = t == null ? void 0 : Ee(t, n);
  return r === void 0 ? e : r;
}
function Ne(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var vr = W ? W.isConcatSpreadable : void 0;
function Fc(t) {
  return I(t) || Te(t) || !!(vr && t && t[vr]);
}
function Lc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Fc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Ne(i, s) : i[i.length] = s;
  }
  return i;
}
function Dc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Lc(t) : [];
}
var Hc = wi(Object.getPrototypeOf, Object);
function qc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Bc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, qc(t, n, e);
}
var Xc = "\\ud800-\\udfff", Gc = "\\u0300-\\u036f", Uc = "\\ufe20-\\ufe2f", Yc = "\\u20d0-\\u20ff", Kc = Gc + Uc + Yc, Vc = "\\ufe0e\\ufe0f", Wc = "\\u200d", Zc = RegExp("[" + Wc + Xc + Kc + Vc + "]");
function bi(t) {
  return Zc.test(t);
}
function Jc(t) {
  return t.split("");
}
var xi = "\\ud800-\\udfff", Qc = "\\u0300-\\u036f", jc = "\\ufe20-\\ufe2f", th = "\\u20d0-\\u20ff", nh = Qc + jc + th, eh = "\\ufe0e\\ufe0f", rh = "[" + xi + "]", le = "[" + nh + "]", fe = "\\ud83c[\\udffb-\\udfff]", ih = "(?:" + le + "|" + fe + ")", Mi = "[^" + xi + "]", $i = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ai = "[\\ud800-\\udbff][\\udc00-\\udfff]", oh = "\\u200d", Ti = ih + "?", Si = "[" + eh + "]?", ah = "(?:" + oh + "(?:" + [Mi, $i, Ai].join("|") + ")" + Si + Ti + ")*", sh = Si + Ti + ah, uh = "(?:" + [Mi + le + "?", le, $i, Ai, rh].join("|") + ")", lh = RegExp(fe + "(?=" + fe + ")|" + uh + sh, "g");
function fh(t) {
  return t.match(lh) || [];
}
function ch(t) {
  return bi(t) ? fh(t) : Jc(t);
}
function hh(t) {
  return function(n) {
    n = In(n);
    var e = bi(n) ? ch(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Bc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var dh = hh("toUpperCase");
function ph(t) {
  return dh(In(t).toLowerCase());
}
function gh() {
  this.__data__ = new it(), this.size = 0;
}
function yh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function _h(t) {
  return this.__data__.get(t);
}
function mh(t) {
  return this.__data__.has(t);
}
var vh = 200;
function wh(t, n) {
  var e = this.__data__;
  if (e instanceof it) {
    var r = e.__data__;
    if (!Gt || r.length < vh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ot(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function tt(t) {
  var n = this.__data__ = new it(t);
  this.size = n.size;
}
tt.prototype.clear = gh;
tt.prototype.delete = yh;
tt.prototype.get = _h;
tt.prototype.has = mh;
tt.prototype.set = wh;
function ze(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Pi() {
  return [];
}
var bh = Object.prototype, xh = bh.propertyIsEnumerable, wr = Object.getOwnPropertySymbols, Ei = wr ? function(t) {
  return t == null ? [] : (t = Object(t), ze(wr(t), function(n) {
    return xh.call(t, n);
  }));
} : Pi, Mh = Object.getOwnPropertySymbols, $h = Mh ? function(t) {
  for (var n = []; t; )
    Ne(n, Ei(t)), t = Hc(t);
  return n;
} : Pi;
function Ni(t, n, e) {
  var r = n(t);
  return I(t) ? r : Ne(r, e(t));
}
function br(t) {
  return Ni(t, Kt, Ei);
}
function Ah(t) {
  return Ni(t, rc, $h);
}
var ce = mt(rt, "DataView"), he = mt(rt, "Promise"), de = mt(rt, "Set"), xr = "[object Map]", Th = "[object Object]", Mr = "[object Promise]", $r = "[object Set]", Ar = "[object WeakMap]", Tr = "[object DataView]", Sh = _t(ce), Ph = _t(Gt), Eh = _t(he), Nh = _t(de), zh = _t(se), j = St;
(ce && j(new ce(new ArrayBuffer(1))) != Tr || Gt && j(new Gt()) != xr || he && j(he.resolve()) != Mr || de && j(new de()) != $r || se && j(new se()) != Ar) && (j = function(t) {
  var n = St(t), e = n == Th ? t.constructor : void 0, r = e ? _t(e) : "";
  if (r)
    switch (r) {
      case Sh:
        return Tr;
      case Ph:
        return xr;
      case Eh:
        return Mr;
      case Nh:
        return $r;
      case zh:
        return Ar;
    }
  return n;
});
var Sr = rt.Uint8Array, Oh = "__lodash_hash_undefined__";
function Ch(t) {
  return this.__data__.set(t, Oh), this;
}
function Ih(t) {
  return this.__data__.has(t);
}
function bn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++n < e; )
    this.add(t[n]);
}
bn.prototype.add = bn.prototype.push = Ch;
bn.prototype.has = Ih;
function Rh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function kh(t, n) {
  return t.has(n);
}
var Fh = 1, Lh = 2;
function zi(t, n, e, r, i, o) {
  var a = e & Fh, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), f = o.get(n);
  if (u && f)
    return u == n && f == t;
  var h = -1, c = !0, p = e & Lh ? new bn() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], g = n[h];
    if (r)
      var b = a ? r(g, d, h, n, t, o) : r(d, g, h, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!Rh(n, function(_, x) {
        if (!kh(p, x) && (d === _ || i(d, _, e, r, o)))
          return p.push(x);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Oi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Dh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Hh = 1, qh = 2, Bh = "[object Boolean]", Xh = "[object Date]", Gh = "[object Error]", Uh = "[object Map]", Yh = "[object Number]", Kh = "[object RegExp]", Vh = "[object Set]", Wh = "[object String]", Zh = "[object Symbol]", Jh = "[object ArrayBuffer]", Qh = "[object DataView]", Pr = W ? W.prototype : void 0, Un = Pr ? Pr.valueOf : void 0;
function jh(t, n, e, r, i, o, a) {
  switch (e) {
    case Qh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Jh:
      return !(t.byteLength != n.byteLength || !o(new Sr(t), new Sr(n)));
    case Bh:
    case Xh:
    case Yh:
      return zn(+t, +n);
    case Gh:
      return t.name == n.name && t.message == n.message;
    case Kh:
    case Wh:
      return t == n + "";
    case Uh:
      var s = Oi;
    case Vh:
      var l = r & Hh;
      if (s || (s = Dh), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= qh, a.set(t, n);
      var f = zi(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Zh:
      if (Un)
        return Un.call(t) == Un.call(n);
  }
  return !1;
}
var td = 1, nd = Object.prototype, ed = nd.hasOwnProperty;
function rd(t, n, e, r, i, o) {
  var a = e & td, s = br(t), l = s.length, u = br(n), f = u.length;
  if (l != f && !a)
    return !1;
  for (var h = l; h--; ) {
    var c = s[h];
    if (!(a ? c in n : ed.call(n, c)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++h < l; ) {
    c = s[h];
    var _ = t[c], x = n[c];
    if (r)
      var $ = a ? r(x, _, c, n, t, o) : r(_, x, c, t, n, o);
    if (!($ === void 0 ? _ === x || i(_, x, e, r, o) : $)) {
      g = !1;
      break;
    }
    b || (b = c == "constructor");
  }
  if (g && !b) {
    var y = t.constructor, v = n.constructor;
    y != v && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var id = 1, Er = "[object Arguments]", Nr = "[object Array]", en = "[object Object]", od = Object.prototype, zr = od.hasOwnProperty;
function ad(t, n, e, r, i, o) {
  var a = I(t), s = I(n), l = a ? Nr : j(t), u = s ? Nr : j(n);
  l = l == Er ? en : l, u = u == Er ? en : u;
  var f = l == en, h = u == en, c = l == u;
  if (c && ue(t)) {
    if (!ue(n))
      return !1;
    a = !0, f = !1;
  }
  if (c && !f)
    return o || (o = new tt()), a || mi(t) ? zi(t, n, e, r, i, o) : jh(t, n, l, e, r, i, o);
  if (!(e & id)) {
    var p = f && zr.call(t, "__wrapped__"), d = h && zr.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, b = d ? n.value() : n;
      return o || (o = new tt()), i(g, b, e, r, o);
    }
  }
  return c ? (o || (o = new tt()), rd(t, n, e, r, i, o)) : !1;
}
function Oe(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !gt(t) && !gt(n) ? t !== t && n !== n : ad(t, n, e, r, Oe, i);
}
var sd = 1, ud = 2;
function ld(t, n, e, r) {
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
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var f = new tt(), h;
      if (!(h === void 0 ? Oe(u, l, sd | ud, r, f) : h))
        return !1;
    }
  }
  return !0;
}
function Ci(t) {
  return t === t && !et(t);
}
function fd(t) {
  for (var n = Kt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ci(i)];
  }
  return n;
}
function Ii(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function cd(t) {
  var n = fd(t);
  return n.length == 1 && n[0][2] ? Ii(n[0][0], n[0][1]) : function(e) {
    return e === t || ld(e, t, n);
  };
}
function hd(t, n) {
  return t != null && n in Object(t);
}
function Ri(t, n, e) {
  n = Rn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Vt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ae(i) && Nn(a, i) && (I(t) || Te(t)));
}
function dd(t, n) {
  return t != null && Ri(t, n, hd);
}
var pd = 1, gd = 2;
function yd(t, n) {
  return Se(t) && Ci(n) ? Ii(Vt(t), n) : function(e) {
    var r = kc(e, t);
    return r === void 0 && r === n ? dd(e, t) : Oe(n, r, pd | gd);
  };
}
function ki(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function _d(t) {
  return function(n) {
    return Ee(n, t);
  };
}
function md(t) {
  return Se(t) ? ki(Vt(t)) : _d(t);
}
function Ce(t) {
  return typeof t == "function" ? t : t == null ? En : typeof t == "object" ? I(t) ? yd(t[0], t[1]) : cd(t) : md(t);
}
function vd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var wd = vd();
function bd(t, n) {
  return t && wd(t, n, Kt);
}
function xd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Et(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Ie = xd(bd);
function Md(t) {
  return gt(t) && Et(t);
}
function $d(t) {
  return typeof t == "function" ? t : En;
}
function K(t, n) {
  var e = I(t) ? nf : Ie;
  return e(t, $d(n));
}
function Ad(t, n) {
  return Pt(n, function(e) {
    return [e, t[e]];
  });
}
function Td(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Sd = "[object Map]", Pd = "[object Set]";
function Ed(t) {
  return function(n) {
    var e = j(n);
    return e == Sd ? Oi(n) : e == Pd ? Td(n) : Ad(n, t(n));
  };
}
var Fi = Ed(Kt);
function Nd(t, n) {
  var e = [];
  return Ie(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function ct(t, n) {
  var e = I(t) ? ze : Nd;
  return e(t, Ce(n));
}
function zd(t, n) {
  var e = -1, r = Et(t) ? Array(t.length) : [];
  return Ie(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Tt(t, n) {
  var e = I(t) ? Pt : zd;
  return e(t, Ce(n));
}
var Od = Object.prototype, Cd = Od.hasOwnProperty;
function Id(t, n) {
  return t != null && Cd.call(t, n);
}
function Li(t, n) {
  return t != null && Ri(t, n, Id);
}
function Rd(t, n) {
  return Pt(n, function(e) {
    return t[e];
  });
}
function kd(t) {
  return t == null ? [] : Rd(t, Kt(t));
}
function Fd(t, n, e, r) {
  if (!et(t))
    return t;
  n = Rn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Vt(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var f = s[l];
      u = void 0, u === void 0 && (u = et(f) ? f : Nn(n[i + 1]) ? [] : {});
    }
    uf(s, l, u), s = s[l];
  }
  return t;
}
function Ld(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ee(t, a);
    e(s, a) && Fd(o, Rn(a, t), s);
  }
  return o;
}
function Di(t, n) {
  if (t == null)
    return {};
  var e = Pt(Ah(t), function(r) {
    return [r];
  });
  return n = Ce(n), Ld(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Dd = Math.floor, Hd = Math.random;
function qd(t, n) {
  return t + Dd(Hd() * (n - t + 1));
}
var Bd = Math.ceil, Xd = Math.max;
function Gd(t, n, e, r) {
  for (var i = -1, o = Xd(Bd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Ud(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && hf(n, e, r) && (e = r = void 0), n = Bn(n), e === void 0 ? (e = n, n = 0) : e = Bn(e), r = r === void 0 ? n < e ? 1 : -1 : Bn(r), Gd(n, e, r);
  };
}
var Re = Ud();
function Yd() {
  var t = arguments, n = In(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Hi(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = qd(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function Kd(t) {
  return Hi(Kl(t));
}
function Vd(t) {
  return Hi(kd(t));
}
function Yn(t) {
  var n = I(t) ? Kd : Vd;
  return n(t);
}
var Wd = Math.max;
function Zd(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = ze(t, function(e) {
    if (Md(e))
      return n = Wd(e.length, n), !0;
  }), pi(n, function(e) {
    return Pt(t, ki(e));
  });
}
var xn = ff(Zd);
const Jd = (t, n, e = 12, r = 12) => {
  const i = V().domain([0, e]).range([0, t]), o = V().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Re((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: o(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const f = Dc(Tt(u, function(h) {
        return Tt(
          l,
          function(c) {
            return { x: i(c), y: o(h) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, Qd = "_widget_18g36_1", jd = "_label_18g36_19", tp = "_lit_18g36_24", np = "_button_18g36_29", ep = "_symbol_18g36_29", rp = "_radio_18g36_29", ip = "_radiobutton_18g36_29", op = "_selected_18g36_35", ap = "_toggle_18g36_35", sp = "_slider_18g36_44", up = "_track_18g36_44", lp = "_track_overlay_18g36_48", fp = "_handle_18g36_55", m = {
  widget: Qd,
  label: jd,
  lit: tp,
  button: np,
  symbol: ep,
  radio: rp,
  radiobutton: ip,
  selected: op,
  toggle: ap,
  slider: sp,
  track: up,
  track_overlay: lp,
  handle: fp
}, ke = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Fe = (t, n, e) => {
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
}, cp = (t = 1) => {
  const n = X();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, hp = (t = 1) => {
  const n = X(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, dp = (t = 1) => {
  const n = X();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, pp = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = X();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, gp = (t = 1) => {
  const n = X(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, yp = (t = 1) => {
  const n = X(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, _p = (t = 1) => {
  const n = X(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, mp = (t = 1) => {
  var n = X(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, vp = (t = 1) => {
  const n = X(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, pe = (t) => {
  switch (t) {
    case "play":
      return cp;
    case "forward":
      return hp;
    case "back":
      return dp;
    case "pause":
      return pp;
    case "reload":
      return gp;
    case "capture":
      return yp;
    case "rewind":
      return _p;
    case "stop":
      return mp;
    case "push":
      return vp;
  }
}, Le = () => {
  const t = "button";
  var n = ke(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(d) {
  }, f = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % f.length, u(), S(this.parentNode).select("." + m.symbol).attr("d", pe(f[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % f.length, u(), d.select("#button_" + n).select("." + m.symbol).attr("d", pe(f[h])(r * e));
    }
  };
}, wp = () => {
  const t = "slider", n = Sn(".3f");
  var e = ke(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, f = function(_) {
  }, h = function(_) {
  }, c = [0, 1], p = 0, d = null, g = V().domain(c).range([0, r]).clamp(!0);
  const b = function(_, x, $ = c) {
    const y = _.select("#slider_" + e);
    g.domain($), p = x, y.selectAll("." + m.handle).transition().attr("cx", g(x)), a && y.select("." + m.label).text(d + " = " + n(p)), f(), h();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    range: function(_) {
      return typeof _ > "u" ? c : (c = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: b,
    click: b
  };
}, bp = () => {
  const t = "radio";
  var n = ke(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, f = function(g) {
  }, h = [], c = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    choices: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    click: function(g, b) {
      c = b, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == c), f();
    },
    reset: function(g, b) {
      c = b, g.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (_) => _ == c), f();
    }
  };
}, xp = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", pe(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const l = Fe(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, qi = (t, n) => {
  const e = X();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Mp = (t, n) => {
  const e = Sn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(l).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", qi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", m.track_overlay).on("click", function(d) {
    const g = Jn(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Qa().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var f, h, c, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Zt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Zt([t.girth() / 2, t.knob()]) + 7 : -Zt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", c).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + h + ")"), l;
}, $p = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", qi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Fe(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, Ap = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = so(a), l = V().domain([0, a - 1]).range([0, t.size()]), u = V().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = S(f).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + u(b) + ")" : "translate(" + l(b) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = c.append("circle").attr("r", i / 2), d = c.append("circle").attr("r", o / 2)), p.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), c.on("click", t.click);
  const g = Fe(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", m.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), f;
}, Kn = (t, n) => {
  switch (t.type) {
    case "button":
      return xp(t);
    case "slider":
      return Mp(t);
    case "radio":
      return Ap(t);
    case "toggle":
      return $p(t);
  }
}, Tp = (t, n) => {
  const e = Jd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, A = {
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
}, E = {
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
}, Bi = (t) => Tt(Fi(t), (n) => {
  n[1].id = n[0], n[1].label = Yd(ph(n[0]), /_/g, " ");
}), Xi = (t) => Tt(Fi(t), (n) => n[1]), Gi = (t, n) => K(t, (e, r) => e.widget = n[r]), Sp = (t) => Di(t, (n) => Li(n, "range")), Pp = (t) => Di(t, (n) => Li(n, "choices"));
V().domain([0, 360]).range([0, 2 * Math.PI]);
V().range([0, 360]).domain([0, 2 * Math.PI]);
const Ep = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, De = Sp(E), He = Pp(E);
Bi(De);
Bi(He);
const Ui = Xi(De), Yi = Xi(He), un = Tt(
  Ui,
  (t) => wp().id(t.id).label(t.label).range(t.range).value(t.default).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob).size(A.widgets.slider_size)
), ge = Tt(
  Yi,
  (t) => bp().choices(t.choices).id(t.id).value(t.default).buttonsize(A.widgets.radio_buttonsize).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
Gi(Ui, un);
Gi(Yi, ge);
const O = Le().actions(["play", "pause"]).id("play"), kn = Le().actions(["back"]), Fn = Le().actions(["rewind"]), Np = [O, kn, Fn], zp = (t, n) => {
  const e = n.position(A.widgets.slider_anchor.x, Re(un.length).map((i) => A.widgets.slider_anchor.y + A.widgets.slider_gap * i)), r = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  un.forEach((i, o) => i.position(e[o])), ge[0].position(r).size(A.widgets.radio_size).shape(A.widgets.radio_shape), O.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), Fn.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)).size(A.widgets.button_size), kn.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)).size(A.widgets.button_size), t.selectAll(null).data(un).enter().append(Kn), t.selectAll(null).data(Np).enter().append(Kn), t.selectAll(null).data(ge).enter().append(Kn);
}, Op = (t) => {
  K(De, (n) => n.widget.reset(t, n.default)), K(He, (n) => n.widget.reset(t, n.default));
};
function Ki(t, n) {
  return [t % n, Math.floor(t / n)];
}
const Cp = {
  n4: xn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: xn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Vn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Cp[r].forEach((o) => {
    var a = o[1], s = o[0];
    const l = Ki(t, n), u = l[0], f = l[1], h = u + s, c = f + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && h < n && c < n && h >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (h + n) % n);
  }), i;
}
const Ip = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = Re(i * i).map(function(c) {
    const p = Ki(c, i);
    return {
      m: p[0],
      n: p[1],
      x: o * (p[0] + 0.5) - e / 2,
      y: a * (p[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(c, p) {
    c.neighbors = Vn(p, i, n, r).map((d) => s[d]), c.cell = () => [
      { x: c.x + o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y + a / 2 }
    ], c.random_interior_point = () => ({
      x: c.x + o * (Math.random() - 0.5),
      y: c.y + a * (Math.random() - 0.5)
    });
  });
  const l = function(c) {
    return typeof c < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * c / i - c / 2, p.y = (p.n + 0.5) * c / i - c / 2;
    }), e = c, o = e / i, a = e / i, this.L = e, this) : e;
  }, u = function(c) {
    return typeof c < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Vn(d, i, c, r).map((g) => s[g]);
    }), n = c, s.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, f = function(c) {
    return typeof c < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Vn(d, i, n, c).map((g) => s[g]);
    }), r = c, this) : r;
  }, h = function() {
    return n === "periodic" ? null : ct(s, (c) => c.n == 0 || c.n == 2 * t || c.m == 0 || c.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: f,
    nodes: s,
    scale: l,
    boundary: u,
    boundary_cells: h
  };
};
xn([-1, 1, 0, 0], [0, 0, -1, 1]), xn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var st = [], Vi = [];
const Rp = () => {
  E.timer = {}, E.tick = 0;
  const t = E.N, n = E.number_of_mutants.widget.value(), e = E.local_capacity.widget.value();
  st = Ip(t).boundary("dirichlet").nodes, Vi = ct(st, (i) => i.is_boundary), K(st, (i) => {
    i.u = 0, i.v = 0, i.w = 0;
  });
  const r = ct(st, (i) => Ep(i, { x: 0, y: 0 }) < E.initial_radius.widget.value());
  K(r, (i) => {
    i.u = Math.floor(Math.random() * e / (n + 2)), i.v = Math.floor(Math.random() * e / (n + 2)), i.w = n == 0 ? 0 : Math.floor(Math.random() * e / (n + 2));
  });
}, kp = () => {
  E.tick++;
  let t = Yn(ct(st, (n) => {
    let e = n.u + n.v + n.w;
    return e > 0 && e < E.local_capacity.widget.value();
  }));
  return K(t, (n) => {
    Math.random() < E.reproduction_rate.widget.value() && (Math.random() < n.u / (n.v + n.u + n.w) ? n.u++ : Math.random() < n.v / (n.v + n.w) ? n.v++ : n.w++);
  }), t = Yn(ct(st, (n) => n.u + n.v + n.w > 0)), K(t, (n) => {
    let e = Yn(ct(n.neighbors, (r) => r.u + r.v + r.w < E.local_capacity.widget.value()));
    K(e, (r) => {
      Math.random() < E.diffusion_rate.widget.value() && (Math.random() < n.u / (n.v + n.u + n.w) ? r.u++ : Math.random() < n.v / (n.v + n.w) ? r.v++ : r.w++);
    });
  }), ct(Vi, (n) => n.v + n.w + n.u > 0).length > 0;
}, R = V().domain([-0.5, 0.5]), Fp = V().domain([-0.5, 0.5]);
var H, ln, fn;
function Wi(t) {
  const n = E.number_of_mutants.widget.value(), e = E.local_capacity.widget.value();
  return n == 0 ? Ht(255 * t.u / e, 255 * t.v / e, 0, (t.u + t.v) / e) : Ht(255 * t.u / e, 255 * t.v / e, 255 * t.w / e, (t.u + t.v + t.w) / e);
}
const Lp = (t, n) => {
  ln = n.display_size.width, fn = n.display_size.height, R.range([0, ln]), Fp.range([0, fn]), H = t.node().getContext("2d"), H.clearRect(0, 0, ln, fn), K(st, (e) => {
    const r = e.cell(), i = Wi(e);
    H.fillStyle = i, H.strokeStyle = i, H.lineWidth = 0, H.fillRect(R(r[0].x), R(r[0].y), R(r[2].x) - R(r[0].x), R(r[2].y) - R(r[0].y));
  });
}, Dp = (t, n) => {
  H.clearRect(1, 1, ln - 2, fn - 2), K(st, (e) => {
    const r = e.cell(), i = Wi(e);
    H.fillStyle = i, H.strokeStyle = i, H.lineWidth = 0, H.fillRect(R(r[0].x), R(r[0].y), R(r[2].x) - R(r[0].x), R(r[2].y) - R(r[0].y));
  });
};
function Hp(t, n, e) {
  let r = !1;
  r = kp(), Dp(), r && (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"), O.press(n));
}
function Rt(t, n) {
  Rp(), Lp(t, n);
}
var Or = {};
const qp = (t, n, e) => {
  O.value() == 1 ? Or = Ns(() => Hp(t, n), A.simulation.delay) : Or.stop(), n.select("#slider_local_capacity").transition(1e3).style("opacity", O.value() ? 0 : 1), n.select("#slider_local_capacity").selectAll("*").style("pointer-events", O.value() ? "none" : null), n.select("#slider_initial_radius").transition(1e3).style("opacity", O.value() ? 0 : 1), n.select("#slider_initial_radius").selectAll("*").style("pointer-events", O.value() ? "none" : null), n.select("#radio_number_of_mutants").transition(1e3).style("opacity", O.value() ? 0 : 1).style("pointer-events", O.value() ? "none" : null);
}, Bp = (t, n, e) => {
  Fn.update(() => Op(n)), O.update(() => qp(t, n)), kn.update(() => {
    Rt(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), E.initial_radius.widget.update_end(() => {
    Rt(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), E.number_of_mutants.widget.update(() => {
    Rt(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), E.local_capacity.widget.update_end(() => {
    Rt(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  });
}, Xp = {
  name: "@explorables/surfing_a_gene_pool",
  title: "Surfing a Gene Pool",
  subtitle: "Expansion of clones with idential fitness",
  description: "This explorable illustrates pattern formation in bacterial populations in which different clones with identical fitness expand in space.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Gp(t, n = Zi) {
  const e = Tp(t, n), r = e.display, i = e.controls, o = e.grid;
  return zp(i, o), Bp(r, i, n), Rt(r, n), {
    halt() {
      O.value() === 1 && O.press(i);
    },
    reset() {
      O.value() === 1 && O.press(i), Fn.press(i), kn.press(i);
    },
    config: n,
    meta: Xp
  };
}
export {
  Zi as config,
  Gp as default,
  Gp as load,
  Xp as meta
};
