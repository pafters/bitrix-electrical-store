(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function initializePlanarSvg() {
  const planarSvg = document.querySelector("#highlight-lines");
  if (planarSvg) {
    planarSvg.querySelectorAll("[data-llp-id]");
    console.log("SVG element found and initialized.");
  } else {
    console.warn("SVG element not found. Skipping initialization.");
  }
}
let attempts = 0;
const interval = setInterval(() => {
  attempts++;
  if (document.readyState === "complete" || attempts > 30) {
    clearInterval(interval);
    initializePlanarSvg();
  }
}, 100);
document.addEventListener("DOMContentLoaded", () => {
  const initializeBurgerMenu = () => {
    const burgerButton = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    if (burgerButton && nav) {
      burgerButton.addEventListener("click", () => {
        nav.classList.toggle("nav--open");
        burgerButton.classList.toggle("burger--close");
      });
      const navLinks = nav.querySelectorAll(".nav__link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("nav--open");
          burgerButton.classList.remove("burger--close");
        });
      });
    }
  };
  initializeBurgerMenu();
  document.addEventListener("DOMContentLoaded", initializeBurgerMenu);
});
!(/* @__PURE__ */ function() {
  function t(e, n, r) {
    function i(a2, s) {
      if (!n[a2]) {
        if (!e[a2]) {
          var u = "function" == typeof require && require;
          if (!s && u) return u(a2, true);
          if (o) return o(a2, true);
          var c = new Error("Cannot find module '" + a2 + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        var l = n[a2] = { exports: {} };
        e[a2][0].call(l.exports, function(t2) {
          var n2 = e[a2][1][t2];
          return i(n2 || t2);
        }, l, l.exports, t, e, n, r);
      }
      return n[a2].exports;
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i;
  }
  return t;
}())({
  1: [function(t, e, n) {
    (function(e2) {
      !function e3(n2, r, i) {
        function o(s2, u) {
          if (!r[s2]) {
            if (!n2[s2]) {
              var c = "function" == typeof t && t;
              if (!u && c) return c(s2, true);
              if (a) return a(s2, true);
              var l = new Error("Cannot find module '" + s2 + "'");
              throw l.code = "MODULE_NOT_FOUND", l;
            }
            var f = r[s2] = { exports: {} };
            n2[s2][0].call(f.exports, function(t2) {
              var e4 = n2[s2][1][t2];
              return o(e4 || t2);
            }, f, f.exports, e3, n2, r, i);
          }
          return r[s2].exports;
        }
        for (var a = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
        return o;
      }({
        1: [function(t2, n2, r) {
          (function(e3) {
            function n3(t3, e4, n4) {
              t3[e4] || Object[r2](t3, e4, { writable: true, configurable: true, value: n4 });
            }
            if (t2(327), t2(328), t2(2), e3._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
            e3._babelPolyfill = true;
            var r2 = "defineProperty";
            n3(String.prototype, "padLeft", "".padStart), n3(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t3) {
              [][t3] && n3(Array, t3, Function.call.bind([][t3]));
            });
          }).call(this, "undefined" != typeof e2 ? e2 : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, { 2: 2, 327: 327, 328: 328 }],
        2: [function(t2, e3, n2) {
          t2(130), e3.exports = t2(23).RegExp.escape;
        }, { 130: 130, 23: 23 }],
        3: [function(t2, e3, n2) {
          e3.exports = function(t3) {
            if ("function" != typeof t3) throw TypeError(t3 + " is not a function!");
            return t3;
          };
        }, {}],
        4: [function(t2, e3, n2) {
          var r = t2(18);
          e3.exports = function(t3, e4) {
            if ("number" != typeof t3 && "Number" != r(t3)) throw TypeError(e4);
            return +t3;
          };
        }, { 18: 18 }],
        5: [function(t2, e3, n2) {
          var r = t2(128)("unscopables"), i = Array.prototype;
          void 0 == i[r] && t2(42)(i, r, {}), e3.exports = function(t3) {
            i[r][t3] = true;
          };
        }, { 128: 128, 42: 42 }],
        6: [function(t2, e3, n2) {
          e3.exports = function(t3, e4, n3, r) {
            if (!(t3 instanceof e4) || void 0 !== r && r in t3) throw TypeError(n3 + ": incorrect invocation!");
            return t3;
          };
        }, {}],
        7: [function(t2, e3, n2) {
          var r = t2(51);
          e3.exports = function(t3) {
            if (!r(t3)) throw TypeError(t3 + " is not an object!");
            return t3;
          };
        }, { 51: 51 }],
        8: [function(t2, e3, n2) {
          var r = t2(119), i = t2(114), o = t2(118);
          e3.exports = [].copyWithin || function(t3, e4) {
            var n3 = r(this), a = o(n3.length), s = i(t3, a), u = i(e4, a), c = arguments.length > 2 ? arguments[2] : void 0, l = Math.min((void 0 === c ? a : i(c, a)) - u, a - s), f = 1;
            for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0; ) u in n3 ? n3[s] = n3[u] : delete n3[s], s += f, u += f;
            return n3;
          };
        }, { 114: 114, 118: 118, 119: 119 }],
        9: [function(t2, e3, n2) {
          var r = t2(119), i = t2(114), o = t2(118);
          e3.exports = function(t3) {
            for (var e4 = r(this), n3 = o(e4.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n3), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n3 : i(u, n3); c > s; ) e4[s++] = t3;
            return e4;
          };
        }, { 114: 114, 118: 118, 119: 119 }],
        10: [function(t2, e3, n2) {
          var r = t2(39);
          e3.exports = function(t3, e4) {
            var n3 = [];
            return r(t3, false, n3.push, n3, e4), n3;
          };
        }, { 39: 39 }],
        11: [function(t2, e3, n2) {
          var r = t2(117), i = t2(118), o = t2(114);
          e3.exports = function(t3) {
            return function(e4, n3, a) {
              var s, u = r(e4), c = i(u.length), l = o(a, c);
              if (t3 && n3 != n3) {
                for (; c > l; ) if ((s = u[l++]) != s) return true;
              } else for (; c > l; l++) if ((t3 || l in u) && u[l] === n3) return t3 || l || 0;
              return !t3 && -1;
            };
          };
        }, { 114: 114, 117: 117, 118: 118 }],
        12: [function(t2, e3, n2) {
          var r = t2(25), i = t2(47), o = t2(119), a = t2(118), s = t2(15);
          e3.exports = function(t3, e4) {
            var n3 = 1 == t3, u = 2 == t3, c = 3 == t3, l = 4 == t3, f = 6 == t3, h = 5 == t3 || f, d = e4 || s;
            return function(e5, s2, p) {
              for (var v, y, g = o(e5), m = i(g), b = r(s2, p, 3), _ = a(m.length), w = 0, S = n3 ? d(e5, _) : u ? d(e5, 0) : void 0; _ > w; w++) if ((h || w in m) && (v = m[w], y = b(v, w, g), t3)) {
                if (n3) S[w] = y;
                else if (y) switch (t3) {
                  case 3:
                    return true;
                  case 5:
                    return v;
                  case 6:
                    return w;
                  case 2:
                    S.push(v);
                }
                else if (l) return false;
              }
              return f ? -1 : c || l ? l : S;
            };
          };
        }, { 118: 118, 119: 119, 15: 15, 25: 25, 47: 47 }],
        13: [function(t2, e3, n2) {
          var r = t2(3), i = t2(119), o = t2(47), a = t2(118);
          e3.exports = function(t3, e4, n3, s, u) {
            r(e4);
            var c = i(t3), l = o(c), f = a(c.length), h = u ? f - 1 : 0, d = u ? -1 : 1;
            if (n3 < 2) for (; ; ) {
              if (h in l) {
                s = l[h], h += d;
                break;
              }
              if (h += d, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value");
            }
            for (; u ? h >= 0 : f > h; h += d) h in l && (s = e4(s, l[h], h, c));
            return s;
          };
        }, { 118: 118, 119: 119, 3: 3, 47: 47 }],
        14: [function(t2, e3, n2) {
          var r = t2(51), i = t2(49), o = t2(128)("species");
          e3.exports = function(t3) {
            var e4;
            return i(t3) && (e4 = t3.constructor, "function" != typeof e4 || e4 !== Array && !i(e4.prototype) || (e4 = void 0), r(e4) && null === (e4 = e4[o]) && (e4 = void 0)), void 0 === e4 ? Array : e4;
          };
        }, { 128: 128, 49: 49, 51: 51 }],
        15: [function(t2, e3, n2) {
          var r = t2(14);
          e3.exports = function(t3, e4) {
            return new (r(t3))(e4);
          };
        }, { 14: 14 }],
        16: [function(t2, e3, n2) {
          var r = t2(3), i = t2(51), o = t2(46), a = [].slice, s = {}, u = function(t3, e4, n3) {
            if (!(e4 in s)) {
              for (var r2 = [], i2 = 0; i2 < e4; i2++) r2[i2] = "a[" + i2 + "]";
              s[e4] = Function("F,a", "return new F(" + r2.join(",") + ")");
            }
            return s[e4](t3, n3);
          };
          e3.exports = Function.bind || function(t3) {
            var e4 = r(this), n3 = a.call(arguments, 1), s2 = function() {
              var r2 = n3.concat(a.call(arguments));
              return this instanceof s2 ? u(e4, r2.length, r2) : o(e4, r2, t3);
            };
            return i(e4.prototype) && (s2.prototype = e4.prototype), s2;
          };
        }, { 3: 3, 46: 46, 51: 51 }],
        17: [function(t2, e3, n2) {
          var r = t2(18), i = t2(128)("toStringTag"), o = "Arguments" == r(/* @__PURE__ */ function() {
            return arguments;
          }()), a = function(t3, e4) {
            try {
              return t3[e4];
            } catch (t4) {
            }
          };
          e3.exports = function(t3) {
            var e4, n3, s;
            return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (n3 = a(e4 = Object(t3), i)) ? n3 : o ? r(e4) : "Object" == (s = r(e4)) && "function" == typeof e4.callee ? "Arguments" : s;
          };
        }, { 128: 128, 18: 18 }],
        18: [function(t2, e3, n2) {
          var r = {}.toString;
          e3.exports = function(t3) {
            return r.call(t3).slice(8, -1);
          };
        }, {}],
        19: [function(t2, e3, n2) {
          var r = t2(72).f, i = t2(71), o = t2(93), a = t2(25), s = t2(6), u = t2(39), c = t2(55), l = t2(57), f = t2(100), h = t2(29), d = t2(66).fastKey, p = t2(125), v = h ? "_s" : "size", y = function(t3, e4) {
            var n3, r2 = d(e4);
            if ("F" !== r2) return t3._i[r2];
            for (n3 = t3._f; n3; n3 = n3.n) if (n3.k == e4) return n3;
          };
          e3.exports = { getConstructor: function(t3, e4, n3, c2) {
            var l2 = t3(function(t4, r2) {
              s(t4, l2, e4, "_i"), t4._t = e4, t4._i = i(null), t4._f = void 0, t4._l = void 0, t4[v] = 0, void 0 != r2 && u(r2, n3, t4[c2], t4);
            });
            return o(l2.prototype, { clear: function() {
              for (var t4 = p(this, e4), n4 = t4._i, r2 = t4._f; r2; r2 = r2.n) r2.r = true, r2.p && (r2.p = r2.p.n = void 0), delete n4[r2.i];
              t4._f = t4._l = void 0, t4[v] = 0;
            }, delete: function(t4) {
              var n4 = p(this, e4), r2 = y(n4, t4);
              if (r2) {
                var i2 = r2.n, o2 = r2.p;
                delete n4._i[r2.i], r2.r = true, o2 && (o2.n = i2), i2 && (i2.p = o2), n4._f == r2 && (n4._f = i2), n4._l == r2 && (n4._l = o2), n4[v]--;
              }
              return !!r2;
            }, forEach: function(t4) {
              p(this, e4);
              for (var n4, r2 = a(t4, arguments.length > 1 ? arguments[1] : void 0, 3); n4 = n4 ? n4.n : this._f; ) for (r2(n4.v, n4.k, this); n4 && n4.r; ) n4 = n4.p;
            }, has: function(t4) {
              return !!y(p(this, e4), t4);
            } }), h && r(l2.prototype, "size", { get: function() {
              return p(this, e4)[v];
            } }), l2;
          }, def: function(t3, e4, n3) {
            var r2, i2, o2 = y(t3, e4);
            return o2 ? o2.v = n3 : (t3._l = o2 = { i: i2 = d(e4, true), k: e4, v: n3, p: r2 = t3._l, n: void 0, r: false }, t3._f || (t3._f = o2), r2 && (r2.n = o2), t3[v]++, "F" !== i2 && (t3._i[i2] = o2)), t3;
          }, getEntry: y, setStrong: function(t3, e4, n3) {
            c(t3, e4, function(t4, n4) {
              this._t = p(t4, e4), this._k = n4, this._l = void 0;
            }, function() {
              for (var t4 = this, e5 = t4._k, n4 = t4._l; n4 && n4.r; ) n4 = n4.p;
              return t4._t && (t4._l = n4 = n4 ? n4.n : t4._t._f) ? "keys" == e5 ? l(0, n4.k) : "values" == e5 ? l(0, n4.v) : l(0, [n4.k, n4.v]) : (t4._t = void 0, l(1));
            }, n3 ? "entries" : "values", !n3, true), f(e4);
          } };
        }, { 100: 100, 125: 125, 25: 25, 29: 29, 39: 39, 55: 55, 57: 57, 6: 6, 66: 66, 71: 71, 72: 72, 93: 93 }],
        20: [function(t2, e3, n2) {
          var r = t2(17), i = t2(10);
          e3.exports = function(t3) {
            return function() {
              if (r(this) != t3) throw TypeError(t3 + "#toJSON isn't generic");
              return i(this);
            };
          };
        }, { 10: 10, 17: 17 }],
        21: [function(t2, e3, n2) {
          var r = t2(93), i = t2(66).getWeak, o = t2(7), a = t2(51), s = t2(6), u = t2(39), c = t2(12), l = t2(41), f = t2(125), h = c(5), d = c(6), p = 0, v = function(t3) {
            return t3._l || (t3._l = new y());
          }, y = function() {
            this.a = [];
          }, g = function(t3, e4) {
            return h(t3.a, function(t4) {
              return t4[0] === e4;
            });
          };
          y.prototype = { get: function(t3) {
            var e4 = g(this, t3);
            if (e4) return e4[1];
          }, has: function(t3) {
            return !!g(this, t3);
          }, set: function(t3, e4) {
            var n3 = g(this, t3);
            n3 ? n3[1] = e4 : this.a.push([t3, e4]);
          }, delete: function(t3) {
            var e4 = d(this.a, function(e5) {
              return e5[0] === t3;
            });
            return ~e4 && this.a.splice(e4, 1), !!~e4;
          } }, e3.exports = { getConstructor: function(t3, e4, n3, o2) {
            var c2 = t3(function(t4, r2) {
              s(t4, c2, e4, "_i"), t4._t = e4, t4._i = p++, t4._l = void 0, void 0 != r2 && u(r2, n3, t4[o2], t4);
            });
            return r(c2.prototype, { delete: function(t4) {
              if (!a(t4)) return false;
              var n4 = i(t4);
              return true === n4 ? v(f(this, e4)).delete(t4) : n4 && l(n4, this._i) && delete n4[this._i];
            }, has: function(t4) {
              if (!a(t4)) return false;
              var n4 = i(t4);
              return true === n4 ? v(f(this, e4)).has(t4) : n4 && l(n4, this._i);
            } }), c2;
          }, def: function(t3, e4, n3) {
            var r2 = i(o(e4), true);
            return true === r2 ? v(t3).set(e4, n3) : r2[t3._i] = n3, t3;
          }, ufstore: v };
        }, { 12: 12, 125: 125, 39: 39, 41: 41, 51: 51, 6: 6, 66: 66, 7: 7, 93: 93 }],
        22: [function(t2, e3, n2) {
          var r = t2(40), i = t2(33), o = t2(94), a = t2(93), s = t2(66), u = t2(39), c = t2(6), l = t2(51), f = t2(35), h = t2(56), d = t2(101), p = t2(45);
          e3.exports = function(t3, e4, n3, v, y, g) {
            var m = r[t3], b = m, _ = y ? "set" : "add", w = b && b.prototype, S = {}, E = function(t4) {
              var e5 = w[t4];
              o(w, t4, "delete" == t4 ? function(t5) {
                return !(g && !l(t5)) && e5.call(this, 0 === t5 ? 0 : t5);
              } : "has" == t4 ? function(t5) {
                return !(g && !l(t5)) && e5.call(this, 0 === t5 ? 0 : t5);
              } : "get" == t4 ? function(t5) {
                return g && !l(t5) ? void 0 : e5.call(this, 0 === t5 ? 0 : t5);
              } : "add" == t4 ? function(t5) {
                return e5.call(this, 0 === t5 ? 0 : t5), this;
              } : function(t5, n4) {
                return e5.call(this, 0 === t5 ? 0 : t5, n4), this;
              });
            };
            if ("function" == typeof b && (g || w.forEach && !f(function() {
              new b().entries().next();
            }))) {
              var x = new b(), k = x[_](g ? {} : -0, 1) != x, O = f(function() {
                x.has(1);
              }), A = h(function(t4) {
                new b(t4);
              }), M = !g && f(function() {
                for (var t4 = new b(), e5 = 5; e5--; ) t4[_](e5, e5);
                return !t4.has(-0);
              });
              A || (b = e4(function(e5, n4) {
                c(e5, b, t3);
                var r2 = p(new m(), e5, b);
                return void 0 != n4 && u(n4, y, r2[_], r2), r2;
              }), b.prototype = w, w.constructor = b), (O || M) && (E("delete"), E("has"), y && E("get")), (M || k) && E(_), g && w.clear && delete w.clear;
            } else b = v.getConstructor(e4, t3, y, _), a(b.prototype, n3), s.NEED = true;
            return d(b, t3), S[t3] = b, i(i.G + i.W + i.F * (b != m), S), g || v.setStrong(b, t3, y), b;
          };
        }, { 101: 101, 33: 33, 35: 35, 39: 39, 40: 40, 45: 45, 51: 51, 56: 56, 6: 6, 66: 66, 93: 93, 94: 94 }],
        23: [function(t2, e3, n2) {
          var r = e3.exports = { version: "2.5.0" };
          "number" == typeof __e && (__e = r);
        }, {}],
        24: [function(t2, e3, n2) {
          var r = t2(72), i = t2(92);
          e3.exports = function(t3, e4, n3) {
            e4 in t3 ? r.f(t3, e4, i(0, n3)) : t3[e4] = n3;
          };
        }, { 72: 72, 92: 92 }],
        25: [function(t2, e3, n2) {
          var r = t2(3);
          e3.exports = function(t3, e4, n3) {
            if (r(t3), void 0 === e4) return t3;
            switch (n3) {
              case 1:
                return function(n4) {
                  return t3.call(e4, n4);
                };
              case 2:
                return function(n4, r2) {
                  return t3.call(e4, n4, r2);
                };
              case 3:
                return function(n4, r2, i) {
                  return t3.call(e4, n4, r2, i);
                };
            }
            return function() {
              return t3.apply(e4, arguments);
            };
          };
        }, { 3: 3 }],
        26: [function(t2, e3, n2) {
          var r = t2(35), i = Date.prototype.getTime, o = Date.prototype.toISOString, a = function(t3) {
            return t3 > 9 ? t3 : "0" + t3;
          };
          e3.exports = r(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1));
          }) || !r(function() {
            o.call(/* @__PURE__ */ new Date(NaN));
          }) ? function() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var t3 = this, e4 = t3.getUTCFullYear(), n3 = t3.getUTCMilliseconds(), r2 = e4 < 0 ? "-" : e4 > 9999 ? "+" : "";
            return r2 + ("00000" + Math.abs(e4)).slice(r2 ? -6 : -4) + "-" + a(t3.getUTCMonth() + 1) + "-" + a(t3.getUTCDate()) + "T" + a(t3.getUTCHours()) + ":" + a(t3.getUTCMinutes()) + ":" + a(t3.getUTCSeconds()) + "." + (n3 > 99 ? n3 : "0" + a(n3)) + "Z";
          } : o;
        }, { 35: 35 }],
        27: [function(t2, e3, n2) {
          var r = t2(7), i = t2(120);
          e3.exports = function(t3) {
            if ("string" !== t3 && "number" !== t3 && "default" !== t3) throw TypeError("Incorrect hint");
            return i(r(this), "number" != t3);
          };
        }, { 120: 120, 7: 7 }],
        28: [function(t2, e3, n2) {
          e3.exports = function(t3) {
            if (void 0 == t3) throw TypeError("Can't call method on  " + t3);
            return t3;
          };
        }, {}],
        29: [function(t2, e3, n2) {
          e3.exports = !t2(35)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, { 35: 35 }],
        30: [function(t2, e3, n2) {
          var r = t2(51), i = t2(40).document, o = r(i) && r(i.createElement);
          e3.exports = function(t3) {
            return o ? i.createElement(t3) : {};
          };
        }, { 40: 40, 51: 51 }],
        31: [function(t2, e3, n2) {
          e3.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, {}],
        32: [function(t2, e3, n2) {
          var r = t2(81), i = t2(78), o = t2(82);
          e3.exports = function(t3) {
            var e4 = r(t3), n3 = i.f;
            if (n3) for (var a, s = n3(t3), u = o.f, c = 0; s.length > c; ) u.call(t3, a = s[c++]) && e4.push(a);
            return e4;
          };
        }, { 78: 78, 81: 81, 82: 82 }],
        33: [function(t2, e3, n2) {
          var r = t2(40), i = t2(23), o = t2(42), a = t2(94), s = t2(25), u = function(t3, e4, n3) {
            var c, l, f, h, d = t3 & u.F, p = t3 & u.G, v = t3 & u.S, y = t3 & u.P, g = t3 & u.B, m = p ? r : v ? r[e4] || (r[e4] = {}) : (r[e4] || {}).prototype, b = p ? i : i[e4] || (i[e4] = {}), _ = b.prototype || (b.prototype = {});
            p && (n3 = e4);
            for (c in n3) l = !d && m && void 0 !== m[c], f = (l ? m : n3)[c], h = g && l ? s(f, r) : y && "function" == typeof f ? s(Function.call, f) : f, m && a(m, c, f, t3 & u.U), b[c] != f && o(b, c, h), y && _[c] != f && (_[c] = f);
          };
          r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e3.exports = u;
        }, { 23: 23, 25: 25, 40: 40, 42: 42, 94: 94 }],
        34: [function(t2, e3, n2) {
          var r = t2(128)("match");
          e3.exports = function(t3) {
            var e4 = /./;
            try {
              "/./"[t3](e4);
            } catch (n3) {
              try {
                return e4[r] = false, !"/./"[t3](e4);
              } catch (t4) {
              }
            }
            return true;
          };
        }, { 128: 128 }],
        35: [function(t2, e3, n2) {
          e3.exports = function(t3) {
            try {
              return !!t3();
            } catch (t4) {
              return true;
            }
          };
        }, {}],
        36: [function(t2, e3, n2) {
          var r = t2(42), i = t2(94), o = t2(35), a = t2(28), s = t2(128);
          e3.exports = function(t3, e4, n3) {
            var u = s(t3), c = n3(a, u, ""[t3]), l = c[0], f = c[1];
            o(function() {
              var e5 = {};
              return e5[u] = function() {
                return 7;
              }, 7 != ""[t3](e5);
            }) && (i(String.prototype, t3, l), r(RegExp.prototype, u, 2 == e4 ? function(t4, e5) {
              return f.call(t4, this, e5);
            } : function(t4) {
              return f.call(t4, this);
            }));
          };
        }, { 128: 128, 28: 28, 35: 35, 42: 42, 94: 94 }],
        37: [function(t2, e3, n2) {
          var r = t2(7);
          e3.exports = function() {
            var t3 = r(this), e4 = "";
            return t3.global && (e4 += "g"), t3.ignoreCase && (e4 += "i"), t3.multiline && (e4 += "m"), t3.unicode && (e4 += "u"), t3.sticky && (e4 += "y"), e4;
          };
        }, { 7: 7 }],
        38: [function(t2, e3, n2) {
          function r(t3, e4, n3, c, l, f, h, d) {
            for (var p, v, y = l, g = 0, m = !!h && s(h, d, 3); g < c; ) {
              if (g in n3) {
                if (p = m ? m(n3[g], g, e4) : n3[g], v = false, o(p) && (v = p[u], v = void 0 !== v ? !!v : i(p)), v && f > 0) y = r(t3, e4, p, a(p.length), y, f - 1) - 1;
                else {
                  if (y >= 9007199254740991) throw TypeError();
                  t3[y] = p;
                }
                y++;
              }
              g++;
            }
            return y;
          }
          var i = t2(49), o = t2(51), a = t2(118), s = t2(25), u = t2(128)("isConcatSpreadable");
          e3.exports = r;
        }, { 118: 118, 128: 128, 25: 25, 49: 49, 51: 51 }],
        39: [function(t2, e3, n2) {
          var r = t2(25), i = t2(53), o = t2(48), a = t2(7), s = t2(118), u = t2(129), c = {}, l = {}, n2 = e3.exports = function(t3, e4, n3, f, h) {
            var d, p, v, y, g = h ? function() {
              return t3;
            } : u(t3), m = r(n3, f, e4 ? 2 : 1), b = 0;
            if ("function" != typeof g) throw TypeError(t3 + " is not iterable!");
            if (o(g)) {
              for (d = s(t3.length); d > b; b++) if ((y = e4 ? m(a(p = t3[b])[0], p[1]) : m(t3[b])) === c || y === l) return y;
            } else for (v = g.call(t3); !(p = v.next()).done; ) if ((y = i(v, m, p.value, e4)) === c || y === l) return y;
          };
          n2.BREAK = c, n2.RETURN = l;
        }, { 118: 118, 129: 129, 25: 25, 48: 48, 53: 53, 7: 7 }],
        40: [function(t2, e3, n2) {
          var r = e3.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = r);
        }, {}],
        41: [function(t2, e3, n2) {
          var r = {}.hasOwnProperty;
          e3.exports = function(t3, e4) {
            return r.call(t3, e4);
          };
        }, {}],
        42: [function(t2, e3, n2) {
          var r = t2(72), i = t2(92);
          e3.exports = t2(29) ? function(t3, e4, n3) {
            return r.f(t3, e4, i(1, n3));
          } : function(t3, e4, n3) {
            return t3[e4] = n3, t3;
          };
        }, { 29: 29, 72: 72, 92: 92 }],
        43: [function(t2, e3, n2) {
          var r = t2(40).document;
          e3.exports = r && r.documentElement;
        }, { 40: 40 }],
        44: [function(t2, e3, n2) {
          e3.exports = !t2(29) && !t2(35)(function() {
            return 7 != Object.defineProperty(t2(30)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, { 29: 29, 30: 30, 35: 35 }],
        45: [function(t2, e3, n2) {
          var r = t2(51), i = t2(99).set;
          e3.exports = function(t3, e4, n3) {
            var o, a = e4.constructor;
            return a !== n3 && "function" == typeof a && (o = a.prototype) !== n3.prototype && r(o) && i && i(t3, o), t3;
          };
        }, { 51: 51, 99: 99 }],
        46: [function(t2, e3, n2) {
          e3.exports = function(t3, e4, n3) {
            var r = void 0 === n3;
            switch (e4.length) {
              case 0:
                return r ? t3() : t3.call(n3);
              case 1:
                return r ? t3(e4[0]) : t3.call(n3, e4[0]);
              case 2:
                return r ? t3(e4[0], e4[1]) : t3.call(n3, e4[0], e4[1]);
              case 3:
                return r ? t3(e4[0], e4[1], e4[2]) : t3.call(n3, e4[0], e4[1], e4[2]);
              case 4:
                return r ? t3(e4[0], e4[1], e4[2], e4[3]) : t3.call(n3, e4[0], e4[1], e4[2], e4[3]);
            }
            return t3.apply(n3, e4);
          };
        }, {}],
        47: [function(t2, e3, n2) {
          var r = t2(18);
          e3.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t3) {
            return "String" == r(t3) ? t3.split("") : Object(t3);
          };
        }, { 18: 18 }],
        48: [function(t2, e3, n2) {
          var r = t2(58), i = t2(128)("iterator"), o = Array.prototype;
          e3.exports = function(t3) {
            return void 0 !== t3 && (r.Array === t3 || o[i] === t3);
          };
        }, { 128: 128, 58: 58 }],
        49: [function(t2, e3, n2) {
          var r = t2(18);
          e3.exports = Array.isArray || function(t3) {
            return "Array" == r(t3);
          };
        }, { 18: 18 }],
        50: [function(t2, e3, n2) {
          var r = t2(51), i = Math.floor;
          e3.exports = function(t3) {
            return !r(t3) && isFinite(t3) && i(t3) === t3;
          };
        }, { 51: 51 }],
        51: [function(t2, e3, n2) {
          e3.exports = function(t3) {
            return "object" == typeof t3 ? null !== t3 : "function" == typeof t3;
          };
        }, {}],
        52: [function(t2, e3, n2) {
          var r = t2(51), i = t2(18), o = t2(128)("match");
          e3.exports = function(t3) {
            var e4;
            return r(t3) && (void 0 !== (e4 = t3[o]) ? !!e4 : "RegExp" == i(t3));
          };
        }, { 128: 128, 18: 18, 51: 51 }],
        53: [function(t2, e3, n2) {
          var r = t2(7);
          e3.exports = function(t3, e4, n3, i) {
            try {
              return i ? e4(r(n3)[0], n3[1]) : e4(n3);
            } catch (e5) {
              var o = t3.return;
              throw void 0 !== o && r(o.call(t3)), e5;
            }
          };
        }, { 7: 7 }],
        54: [function(t2, e3, n2) {
          var r = t2(71), i = t2(92), o = t2(101), a = {};
          t2(42)(a, t2(128)("iterator"), function() {
            return this;
          }), e3.exports = function(t3, e4, n3) {
            t3.prototype = r(a, { next: i(1, n3) }), o(t3, e4 + " Iterator");
          };
        }, { 101: 101, 128: 128, 42: 42, 71: 71, 92: 92 }],
        55: [function(t2, e3, n2) {
          var r = t2(60), i = t2(33), o = t2(94), a = t2(42), s = t2(41), u = t2(58), c = t2(54), l = t2(101), f = t2(79), h = t2(128)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
          };
          e3.exports = function(t3, e4, n3, v, y, g, m) {
            c(n3, e4, v);
            var b, _, w, S = function(t4) {
              if (!d && t4 in O) return O[t4];
              switch (t4) {
                case "keys":
                  return function() {
                    return new n3(this, t4);
                  };
                case "values":
                  return function() {
                    return new n3(this, t4);
                  };
              }
              return function() {
                return new n3(this, t4);
              };
            }, E = e4 + " Iterator", x = "values" == y, k = false, O = t3.prototype, A = O[h] || O["@@iterator"] || y && O[y], M = A || S(y), P = y ? x ? S("entries") : M : void 0, C = "Array" == e4 ? O.entries || A : A;
            if (C && (w = f(C.call(new t3()))) !== Object.prototype && w.next && (l(w, E, true), r || s(w, h) || a(w, h, p)), x && A && "values" !== A.name && (k = true, M = function() {
              return A.call(this);
            }), r && !m || !d && !k && O[h] || a(O, h, M), u[e4] = M, u[E] = p, y) if (b = { values: x ? M : S("values"), keys: g ? M : S("keys"), entries: P }, m) for (_ in b) _ in O || o(O, _, b[_]);
            else i(i.P + i.F * (d || k), e4, b);
            return b;
          };
        }, { 101: 101, 128: 128, 33: 33, 41: 41, 42: 42, 54: 54, 58: 58, 60: 60, 79: 79, 94: 94 }],
        56: [function(t2, e3, n2) {
          var r = t2(128)("iterator"), i = false;
          try {
            var o = [7][r]();
            o.return = function() {
              i = true;
            }, Array.from(o, function() {
              throw 2;
            });
          } catch (t3) {
          }
          e3.exports = function(t3, e4) {
            if (!e4 && !i) return false;
            var n3 = false;
            try {
              var o2 = [7], a = o2[r]();
              a.next = function() {
                return { done: n3 = true };
              }, o2[r] = function() {
                return a;
              }, t3(o2);
            } catch (t4) {
            }
            return n3;
          };
        }, { 128: 128 }],
        57: [function(t2, e3, n2) {
          e3.exports = function(t3, e4) {
            return { value: e4, done: !!t3 };
          };
        }, {}],
        58: [function(t2, e3, n2) {
          e3.exports = {};
        }, {}],
        59: [function(t2, e3, n2) {
          var r = t2(81), i = t2(117);
          e3.exports = function(t3, e4) {
            for (var n3, o = i(t3), a = r(o), s = a.length, u = 0; s > u; ) if (o[n3 = a[u++]] === e4) return n3;
          };
        }, { 117: 117, 81: 81 }],
        60: [function(t2, e3, n2) {
          e3.exports = false;
        }, {}],
        61: [function(t2, e3, n2) {
          var r = Math.expm1;
          e3.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function(t3) {
            return 0 == (t3 = +t3) ? t3 : t3 > -1e-6 && t3 < 1e-6 ? t3 + t3 * t3 / 2 : Math.exp(t3) - 1;
          } : r;
        }, {}],
        62: [function(t2, e3, n2) {
          var r = t2(65), i = Math.pow, o = i(2, -52), a = i(2, -23), s = i(2, 127) * (2 - a), u = i(2, -126), c = function(t3) {
            return t3 + 1 / o - 1 / o;
          };
          e3.exports = Math.fround || function(t3) {
            var e4, n3, i2 = Math.abs(t3), l = r(t3);
            return i2 < u ? l * c(i2 / u / a) * u * a : (e4 = (1 + a / o) * i2, n3 = e4 - (e4 - i2), n3 > s || n3 != n3 ? l * (1 / 0) : l * n3);
          };
        }, { 65: 65 }],
        63: [function(t2, e3, n2) {
          e3.exports = Math.log1p || function(t3) {
            return (t3 = +t3) > -1e-8 && t3 < 1e-8 ? t3 - t3 * t3 / 2 : Math.log(1 + t3);
          };
        }, {}],
        64: [function(t2, e3, n2) {
          e3.exports = Math.scale || function(t3, e4, n3, r, i) {
            return 0 === arguments.length || t3 != t3 || e4 != e4 || n3 != n3 || r != r || i != i ? NaN : t3 === 1 / 0 || t3 === -1 / 0 ? t3 : (t3 - e4) * (i - r) / (n3 - e4) + r;
          };
        }, {}],
        65: [function(t2, e3, n2) {
          e3.exports = Math.sign || function(t3) {
            return 0 == (t3 = +t3) || t3 != t3 ? t3 : t3 < 0 ? -1 : 1;
          };
        }, {}],
        66: [function(t2, e3, n2) {
          var r = t2(124)("meta"), i = t2(51), o = t2(41), a = t2(72).f, s = 0, u = Object.isExtensible || function() {
            return true;
          }, c = !t2(35)(function() {
            return u(Object.preventExtensions({}));
          }), l = function(t3) {
            a(t3, r, { value: { i: "O" + ++s, w: {} } });
          }, f = function(t3, e4) {
            if (!i(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
            if (!o(t3, r)) {
              if (!u(t3)) return "F";
              if (!e4) return "E";
              l(t3);
            }
            return t3[r].i;
          }, h = function(t3, e4) {
            if (!o(t3, r)) {
              if (!u(t3)) return true;
              if (!e4) return false;
              l(t3);
            }
            return t3[r].w;
          }, d = function(t3) {
            return c && p.NEED && u(t3) && !o(t3, r) && l(t3), t3;
          }, p = e3.exports = { KEY: r, NEED: false, fastKey: f, getWeak: h, onFreeze: d };
        }, { 124: 124, 35: 35, 41: 41, 51: 51, 72: 72 }],
        67: [function(t2, e3, n2) {
          var r = t2(160), i = t2(33), o = t2(103)("metadata"), a = o.store || (o.store = new (t2(266))()), s = function(t3, e4, n3) {
            var i2 = a.get(t3);
            if (!i2) {
              if (!n3) return;
              a.set(t3, i2 = new r());
            }
            var o2 = i2.get(e4);
            if (!o2) {
              if (!n3) return;
              i2.set(e4, o2 = new r());
            }
            return o2;
          }, u = function(t3, e4, n3) {
            var r2 = s(e4, n3, false);
            return void 0 !== r2 && r2.has(t3);
          }, c = function(t3, e4, n3) {
            var r2 = s(e4, n3, false);
            return void 0 === r2 ? void 0 : r2.get(t3);
          }, l = function(t3, e4, n3, r2) {
            s(n3, r2, true).set(t3, e4);
          }, f = function(t3, e4) {
            var n3 = s(t3, e4, false), r2 = [];
            return n3 && n3.forEach(function(t4, e5) {
              r2.push(e5);
            }), r2;
          }, h = function(t3) {
            return void 0 === t3 || "symbol" == typeof t3 ? t3 : String(t3);
          }, d = function(t3) {
            i(i.S, "Reflect", t3);
          };
          e3.exports = { store: a, map: s, has: u, get: c, set: l, keys: f, key: h, exp: d };
        }, { 103: 103, 160: 160, 266: 266, 33: 33 }],
        68: [function(t2, e3, n2) {
          var r = t2(40), i = t2(113).set, o = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise, u = "process" == t2(18)(a);
          e3.exports = function() {
            var t3, e4, n3, c = function() {
              var r2, i2;
              for (u && (r2 = a.domain) && r2.exit(); t3; ) {
                i2 = t3.fn, t3 = t3.next;
                try {
                  i2();
                } catch (r3) {
                  throw t3 ? n3() : e4 = void 0, r3;
                }
              }
              e4 = void 0, r2 && r2.enter();
            };
            if (u) n3 = function() {
              a.nextTick(c);
            };
            else if (o) {
              var l = true, f = document.createTextNode("");
              new o(c).observe(f, { characterData: true }), n3 = function() {
                f.data = l = !l;
              };
            } else if (s && s.resolve) {
              var h = s.resolve();
              n3 = function() {
                h.then(c);
              };
            } else n3 = function() {
              i.call(r, c);
            };
            return function(r2) {
              var i2 = { fn: r2, next: void 0 };
              e4 && (e4.next = i2), t3 || (t3 = i2, n3()), e4 = i2;
            };
          };
        }, { 113: 113, 18: 18, 40: 40 }],
        69: [function(t2, e3, n2) {
          function r(t3) {
            var e4, n3;
            this.promise = new t3(function(t4, r2) {
              if (void 0 !== e4 || void 0 !== n3) throw TypeError("Bad Promise constructor");
              e4 = t4, n3 = r2;
            }), this.resolve = i(e4), this.reject = i(n3);
          }
          var i = t2(3);
          e3.exports.f = function(t3) {
            return new r(t3);
          };
        }, { 3: 3 }],
        70: [function(t2, e3, n2) {
          var r = t2(81), i = t2(78), o = t2(82), a = t2(119), s = t2(47), u = Object.assign;
          e3.exports = !u || t2(35)(function() {
            var t3 = {}, e4 = {}, n3 = Symbol(), r2 = "abcdefghijklmnopqrst";
            return t3[n3] = 7, r2.split("").forEach(function(t4) {
              e4[t4] = t4;
            }), 7 != u({}, t3)[n3] || Object.keys(u({}, e4)).join("") != r2;
          }) ? function(t3, e4) {
            for (var n3 = a(t3), u2 = arguments.length, c = 1, l = i.f, f = o.f; u2 > c; ) for (var h, d = s(arguments[c++]), p = l ? r(d).concat(l(d)) : r(d), v = p.length, y = 0; v > y; ) f.call(d, h = p[y++]) && (n3[h] = d[h]);
            return n3;
          } : u;
        }, { 119: 119, 35: 35, 47: 47, 78: 78, 81: 81, 82: 82 }],
        71: [function(t2, e3, n2) {
          var r = t2(7), i = t2(73), o = t2(31), a = t2(102)("IE_PROTO"), s = function() {
          }, u = function() {
            var e4, n3 = t2(30)("iframe"), r2 = o.length;
            for (n3.style.display = "none", t2(43).appendChild(n3), n3.src = "javascript:", e4 = n3.contentWindow.document, e4.open(), e4.write("<script>document.F=Object<\/script>"), e4.close(), u = e4.F; r2--; ) delete u.prototype[o[r2]];
            return u();
          };
          e3.exports = Object.create || function(t3, e4) {
            var n3;
            return null !== t3 ? (s.prototype = r(t3), n3 = new s(), s.prototype = null, n3[a] = t3) : n3 = u(), void 0 === e4 ? n3 : i(n3, e4);
          };
        }, { 102: 102, 30: 30, 31: 31, 43: 43, 7: 7, 73: 73 }],
        72: [function(t2, e3, n2) {
          var r = t2(7), i = t2(44), o = t2(120), a = Object.defineProperty;
          n2.f = t2(29) ? Object.defineProperty : function(t3, e4, n3) {
            if (r(t3), e4 = o(e4, true), r(n3), i) try {
              return a(t3, e4, n3);
            } catch (t4) {
            }
            if ("get" in n3 || "set" in n3) throw TypeError("Accessors not supported!");
            return "value" in n3 && (t3[e4] = n3.value), t3;
          };
        }, { 120: 120, 29: 29, 44: 44, 7: 7 }],
        73: [function(t2, e3, n2) {
          var r = t2(72), i = t2(7), o = t2(81);
          e3.exports = t2(29) ? Object.defineProperties : function(t3, e4) {
            i(t3);
            for (var n3, a = o(e4), s = a.length, u = 0; s > u; ) r.f(t3, n3 = a[u++], e4[n3]);
            return t3;
          };
        }, { 29: 29, 7: 7, 72: 72, 81: 81 }],
        74: [function(t2, e3, n2) {
          e3.exports = t2(60) || !t2(35)(function() {
            var e4 = Math.random();
            __defineSetter__.call(null, e4, function() {
            }), delete t2(40)[e4];
          });
        }, { 35: 35, 40: 40, 60: 60 }],
        75: [function(t2, e3, n2) {
          var r = t2(82), i = t2(92), o = t2(117), a = t2(120), s = t2(41), u = t2(44), c = Object.getOwnPropertyDescriptor;
          n2.f = t2(29) ? c : function(t3, e4) {
            if (t3 = o(t3), e4 = a(e4, true), u) try {
              return c(t3, e4);
            } catch (t4) {
            }
            if (s(t3, e4)) return i(!r.f.call(t3, e4), t3[e4]);
          };
        }, { 117: 117, 120: 120, 29: 29, 41: 41, 44: 44, 82: 82, 92: 92 }],
        76: [function(t2, e3, n2) {
          var r = t2(117), i = t2(77).f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(t3) {
            try {
              return i(t3);
            } catch (t4) {
              return a.slice();
            }
          };
          e3.exports.f = function(t3) {
            return a && "[object Window]" == o.call(t3) ? s(t3) : i(r(t3));
          };
        }, { 117: 117, 77: 77 }],
        77: [function(t2, e3, n2) {
          var r = t2(80), i = t2(31).concat("length", "prototype");
          n2.f = Object.getOwnPropertyNames || function(t3) {
            return r(t3, i);
          };
        }, { 31: 31, 80: 80 }],
        78: [function(t2, e3, n2) {
          n2.f = Object.getOwnPropertySymbols;
        }, {}],
        79: [function(t2, e3, n2) {
          var r = t2(41), i = t2(119), o = t2(102)("IE_PROTO"), a = Object.prototype;
          e3.exports = Object.getPrototypeOf || function(t3) {
            return t3 = i(t3), r(t3, o) ? t3[o] : "function" == typeof t3.constructor && t3 instanceof t3.constructor ? t3.constructor.prototype : t3 instanceof Object ? a : null;
          };
        }, { 102: 102, 119: 119, 41: 41 }],
        80: [function(t2, e3, n2) {
          var r = t2(41), i = t2(117), o = t2(11)(false), a = t2(102)("IE_PROTO");
          e3.exports = function(t3, e4) {
            var n3, s = i(t3), u = 0, c = [];
            for (n3 in s) n3 != a && r(s, n3) && c.push(n3);
            for (; e4.length > u; ) r(s, n3 = e4[u++]) && (~o(c, n3) || c.push(n3));
            return c;
          };
        }, { 102: 102, 11: 11, 117: 117, 41: 41 }],
        81: [function(t2, e3, n2) {
          var r = t2(80), i = t2(31);
          e3.exports = Object.keys || function(t3) {
            return r(t3, i);
          };
        }, { 31: 31, 80: 80 }],
        82: [function(t2, e3, n2) {
          n2.f = {}.propertyIsEnumerable;
        }, {}],
        83: [function(t2, e3, n2) {
          var r = t2(33), i = t2(23), o = t2(35);
          e3.exports = function(t3, e4) {
            var n3 = (i.Object || {})[t3] || Object[t3], a = {};
            a[t3] = e4(n3), r(r.S + r.F * o(function() {
              n3(1);
            }), "Object", a);
          };
        }, { 23: 23, 33: 33, 35: 35 }],
        84: [function(t2, e3, n2) {
          var r = t2(81), i = t2(117), o = t2(82).f;
          e3.exports = function(t3) {
            return function(e4) {
              for (var n3, a = i(e4), s = r(a), u = s.length, c = 0, l = []; u > c; ) o.call(a, n3 = s[c++]) && l.push(t3 ? [n3, a[n3]] : a[n3]);
              return l;
            };
          };
        }, { 117: 117, 81: 81, 82: 82 }],
        85: [function(t2, e3, n2) {
          var r = t2(77), i = t2(78), o = t2(7), a = t2(40).Reflect;
          e3.exports = a && a.ownKeys || function(t3) {
            var e4 = r.f(o(t3)), n3 = i.f;
            return n3 ? e4.concat(n3(t3)) : e4;
          };
        }, { 40: 40, 7: 7, 77: 77, 78: 78 }],
        86: [function(t2, e3, n2) {
          var r = t2(40).parseFloat, i = t2(111).trim;
          e3.exports = 1 / r(t2(112) + "-0") != -1 / 0 ? function(t3) {
            var e4 = i(String(t3), 3), n3 = r(e4);
            return 0 === n3 && "-" == e4.charAt(0) ? -0 : n3;
          } : r;
        }, { 111: 111, 112: 112, 40: 40 }],
        87: [function(t2, e3, n2) {
          var r = t2(40).parseInt, i = t2(111).trim, o = t2(112), a = /^[-+]?0[xX]/;
          e3.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t3, e4) {
            var n3 = i(String(t3), 3);
            return r(n3, e4 >>> 0 || (a.test(n3) ? 16 : 10));
          } : r;
        }, { 111: 111, 112: 112, 40: 40 }],
        88: [function(t2, e3, n2) {
          var r = t2(89), i = t2(46), o = t2(3);
          e3.exports = function() {
            for (var t3 = o(this), e4 = arguments.length, n3 = Array(e4), a = 0, s = r._, u = false; e4 > a; ) (n3[a] = arguments[a++]) === s && (u = true);
            return function() {
              var r2, o2 = this, a2 = arguments.length, c = 0, l = 0;
              if (!u && !a2) return i(t3, n3, o2);
              if (r2 = n3.slice(), u) for (; e4 > c; c++) r2[c] === s && (r2[c] = arguments[l++]);
              for (; a2 > l; ) r2.push(arguments[l++]);
              return i(t3, r2, o2);
            };
          };
        }, { 3: 3, 46: 46, 89: 89 }],
        89: [function(t2, e3, n2) {
          e3.exports = t2(40);
        }, { 40: 40 }],
        90: [function(t2, e3, n2) {
          e3.exports = function(t3) {
            try {
              return { e: false, v: t3() };
            } catch (t4) {
              return { e: true, v: t4 };
            }
          };
        }, {}],
        91: [function(t2, e3, n2) {
          var r = t2(69);
          e3.exports = function(t3, e4) {
            var n3 = r.f(t3);
            return (0, n3.resolve)(e4), n3.promise;
          };
        }, { 69: 69 }],
        92: [function(t2, e3, n2) {
          e3.exports = function(t3, e4) {
            return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e4 };
          };
        }, {}],
        93: [function(t2, e3, n2) {
          var r = t2(94);
          e3.exports = function(t3, e4, n3) {
            for (var i in e4) r(t3, i, e4[i], n3);
            return t3;
          };
        }, { 94: 94 }],
        94: [function(t2, e3, n2) {
          var r = t2(40), i = t2(42), o = t2(41), a = t2(124)("src"), s = Function.toString, u = ("" + s).split("toString");
          t2(23).inspectSource = function(t3) {
            return s.call(t3);
          }, (e3.exports = function(t3, e4, n3, s2) {
            var c = "function" == typeof n3;
            c && (o(n3, "name") || i(n3, "name", e4)), t3[e4] !== n3 && (c && (o(n3, a) || i(n3, a, t3[e4] ? "" + t3[e4] : u.join(String(e4)))), t3 === r ? t3[e4] = n3 : s2 ? t3[e4] ? t3[e4] = n3 : i(t3, e4, n3) : (delete t3[e4], i(t3, e4, n3)));
          })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || s.call(this);
          });
        }, { 124: 124, 23: 23, 40: 40, 41: 41, 42: 42 }],
        95: [function(t2, e3, n2) {
          e3.exports = function(t3, e4) {
            var n3 = e4 === Object(e4) ? function(t4) {
              return e4[t4];
            } : e4;
            return function(e5) {
              return String(e5).replace(t3, n3);
            };
          };
        }, {}],
        96: [function(t2, e3, n2) {
          e3.exports = Object.is || function(t3, e4) {
            return t3 === e4 ? 0 !== t3 || 1 / t3 == 1 / e4 : t3 != t3 && e4 != e4;
          };
        }, {}],
        97: [function(t2, e3, n2) {
          var r = t2(33), i = t2(3), o = t2(25), a = t2(39);
          e3.exports = function(t3) {
            r(r.S, t3, { from: function(t4) {
              var e4, n3, r2, s, u = arguments[1];
              return i(this), e4 = void 0 !== u, e4 && i(u), void 0 == t4 ? new this() : (n3 = [], e4 ? (r2 = 0, s = o(u, arguments[2], 2), a(t4, false, function(t5) {
                n3.push(s(t5, r2++));
              })) : a(t4, false, n3.push, n3), new this(n3));
            } });
          };
        }, { 25: 25, 3: 3, 33: 33, 39: 39 }],
        98: [function(t2, e3, n2) {
          var r = t2(33);
          e3.exports = function(t3) {
            r(r.S, t3, { of: function() {
              for (var t4 = arguments.length, e4 = Array(t4); t4--; ) e4[t4] = arguments[t4];
              return new this(e4);
            } });
          };
        }, { 33: 33 }],
        99: [function(t2, e3, n2) {
          var r = t2(51), i = t2(7), o = function(t3, e4) {
            if (i(t3), !r(e4) && null !== e4) throw TypeError(e4 + ": can't set as prototype!");
          };
          e3.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e4, n3, r2) {
            try {
              r2 = t2(25)(Function.call, t2(75).f(Object.prototype, "__proto__").set, 2), r2(e4, []), n3 = !(e4 instanceof Array);
            } catch (t3) {
              n3 = true;
            }
            return function(t3, e5) {
              return o(t3, e5), n3 ? t3.__proto__ = e5 : r2(t3, e5), t3;
            };
          }({}, false) : void 0), check: o };
        }, { 25: 25, 51: 51, 7: 7, 75: 75 }],
        100: [function(t2, e3, n2) {
          var r = t2(40), i = t2(72), o = t2(29), a = t2(128)("species");
          e3.exports = function(t3) {
            var e4 = r[t3];
            o && e4 && !e4[a] && i.f(e4, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, { 128: 128, 29: 29, 40: 40, 72: 72 }],
        101: [function(t2, e3, n2) {
          var r = t2(72).f, i = t2(41), o = t2(128)("toStringTag");
          e3.exports = function(t3, e4, n3) {
            t3 && !i(t3 = n3 ? t3 : t3.prototype, o) && r(t3, o, { configurable: true, value: e4 });
          };
        }, { 128: 128, 41: 41, 72: 72 }],
        102: [function(t2, e3, n2) {
          var r = t2(103)("keys"), i = t2(124);
          e3.exports = function(t3) {
            return r[t3] || (r[t3] = i(t3));
          };
        }, { 103: 103, 124: 124 }],
        103: [function(t2, e3, n2) {
          var r = t2(40), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          e3.exports = function(t3) {
            return i[t3] || (i[t3] = {});
          };
        }, { 40: 40 }],
        104: [function(t2, e3, n2) {
          var r = t2(7), i = t2(3), o = t2(128)("species");
          e3.exports = function(t3, e4) {
            var n3, a = r(t3).constructor;
            return void 0 === a || void 0 == (n3 = r(a)[o]) ? e4 : i(n3);
          };
        }, { 128: 128, 3: 3, 7: 7 }],
        105: [function(t2, e3, n2) {
          var r = t2(35);
          e3.exports = function(t3, e4) {
            return !!t3 && r(function() {
              e4 ? t3.call(null, function() {
              }, 1) : t3.call(null);
            });
          };
        }, { 35: 35 }],
        106: [function(t2, e3, n2) {
          var r = t2(116), i = t2(28);
          e3.exports = function(t3) {
            return function(e4, n3) {
              var o, a, s = String(i(e4)), u = r(n3), c = s.length;
              return u < 0 || u >= c ? t3 ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t3 ? s.charAt(u) : o : t3 ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536);
            };
          };
        }, { 116: 116, 28: 28 }],
        107: [function(t2, e3, n2) {
          var r = t2(52), i = t2(28);
          e3.exports = function(t3, e4, n3) {
            if (r(e4)) throw TypeError("String#" + n3 + " doesn't accept regex!");
            return String(i(t3));
          };
        }, { 28: 28, 52: 52 }],
        108: [function(t2, e3, n2) {
          var r = t2(33), i = t2(35), o = t2(28), a = /"/g, s = function(t3, e4, n3, r2) {
            var i2 = String(o(t3)), s2 = "<" + e4;
            return "" !== n3 && (s2 += " " + n3 + '="' + String(r2).replace(a, "&quot;") + '"'), s2 + ">" + i2 + "</" + e4 + ">";
          };
          e3.exports = function(t3, e4) {
            var n3 = {};
            n3[t3] = e4(s), r(r.P + r.F * i(function() {
              var e5 = ""[t3]('"');
              return e5 !== e5.toLowerCase() || e5.split('"').length > 3;
            }), "String", n3);
          };
        }, { 28: 28, 33: 33, 35: 35 }],
        109: [function(t2, e3, n2) {
          var r = t2(118), i = t2(110), o = t2(28);
          e3.exports = function(t3, e4, n3, a) {
            var s = String(o(t3)), u = s.length, c = void 0 === n3 ? " " : String(n3), l = r(e4);
            if (l <= u || "" == c) return s;
            var f = l - u, h = i.call(c, Math.ceil(f / c.length));
            return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h;
          };
        }, { 110: 110, 118: 118, 28: 28 }],
        110: [function(t2, e3, n2) {
          var r = t2(116), i = t2(28);
          e3.exports = function(t3) {
            var e4 = String(i(this)), n3 = "", o = r(t3);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0; (o >>>= 1) && (e4 += e4)) 1 & o && (n3 += e4);
            return n3;
          };
        }, { 116: 116, 28: 28 }],
        111: [function(t2, e3, n2) {
          var r = t2(33), i = t2(28), o = t2(35), a = t2(112), s = "[" + a + "]", u = "​", c = RegExp("^" + s + s + "*"), l = RegExp(s + s + "*$"), f = function(t3, e4, n3) {
            var i2 = {}, s2 = o(function() {
              return !!a[t3]() || u[t3]() != u;
            }), c2 = i2[t3] = s2 ? e4(h) : a[t3];
            n3 && (i2[n3] = c2), r(r.P + r.F * s2, "String", i2);
          }, h = f.trim = function(t3, e4) {
            return t3 = String(i(t3)), 1 & e4 && (t3 = t3.replace(c, "")), 2 & e4 && (t3 = t3.replace(l, "")), t3;
          };
          e3.exports = f;
        }, { 112: 112, 28: 28, 33: 33, 35: 35 }],
        112: [function(t2, e3, n2) {
          e3.exports = "	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF";
        }, {}],
        113: [function(t2, e3, n2) {
          var r, i, o, a = t2(25), s = t2(46), u = t2(43), c = t2(30), l = t2(40), f = l.process, h = l.setImmediate, d = l.clearImmediate, p = l.MessageChannel, v = l.Dispatch, y = 0, g = {}, m = function() {
            var t3 = +this;
            if (g.hasOwnProperty(t3)) {
              var e4 = g[t3];
              delete g[t3], e4();
            }
          }, b = function(t3) {
            m.call(t3.data);
          };
          h && d || (h = function(t3) {
            for (var e4 = [], n3 = 1; arguments.length > n3; ) e4.push(arguments[n3++]);
            return g[++y] = function() {
              s("function" == typeof t3 ? t3 : Function(t3), e4);
            }, r(y), y;
          }, d = function(t3) {
            delete g[t3];
          }, "process" == t2(18)(f) ? r = function(t3) {
            f.nextTick(a(m, t3, 1));
          } : v && v.now ? r = function(t3) {
            v.now(a(m, t3, 1));
          } : p ? (i = new p(), o = i.port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t3) {
            l.postMessage(t3 + "", "*");
          }, l.addEventListener("message", b, false)) : r = "onreadystatechange" in c("script") ? function(t3) {
            u.appendChild(c("script")).onreadystatechange = function() {
              u.removeChild(this), m.call(t3);
            };
          } : function(t3) {
            setTimeout(a(m, t3, 1), 0);
          }), e3.exports = { set: h, clear: d };
        }, { 18: 18, 25: 25, 30: 30, 40: 40, 43: 43, 46: 46 }],
        114: [function(t2, e3, n2) {
          var r = t2(116), i = Math.max, o = Math.min;
          e3.exports = function(t3, e4) {
            return t3 = r(t3), t3 < 0 ? i(t3 + e4, 0) : o(t3, e4);
          };
        }, { 116: 116 }],
        115: [function(t2, e3, n2) {
          var r = t2(116), i = t2(118);
          e3.exports = function(t3) {
            if (void 0 === t3) return 0;
            var e4 = r(t3), n3 = i(e4);
            if (e4 !== n3) throw RangeError("Wrong length!");
            return n3;
          };
        }, { 116: 116, 118: 118 }],
        116: [function(t2, e3, n2) {
          var r = Math.ceil, i = Math.floor;
          e3.exports = function(t3) {
            return isNaN(t3 = +t3) ? 0 : (t3 > 0 ? i : r)(t3);
          };
        }, {}],
        117: [function(t2, e3, n2) {
          var r = t2(47), i = t2(28);
          e3.exports = function(t3) {
            return r(i(t3));
          };
        }, { 28: 28, 47: 47 }],
        118: [function(t2, e3, n2) {
          var r = t2(116), i = Math.min;
          e3.exports = function(t3) {
            return t3 > 0 ? i(r(t3), 9007199254740991) : 0;
          };
        }, { 116: 116 }],
        119: [function(t2, e3, n2) {
          var r = t2(28);
          e3.exports = function(t3) {
            return Object(r(t3));
          };
        }, { 28: 28 }],
        120: [function(t2, e3, n2) {
          var r = t2(51);
          e3.exports = function(t3, e4) {
            if (!r(t3)) return t3;
            var n3, i;
            if (e4 && "function" == typeof (n3 = t3.toString) && !r(i = n3.call(t3))) return i;
            if ("function" == typeof (n3 = t3.valueOf) && !r(i = n3.call(t3))) return i;
            if (!e4 && "function" == typeof (n3 = t3.toString) && !r(i = n3.call(t3))) return i;
            throw TypeError("Can't convert object to primitive value");
          };
        }, { 51: 51 }],
        121: [function(t2, e3, n2) {
          if (t2(29)) {
            var r = t2(60), i = t2(40), o = t2(35), a = t2(33), s = t2(123), u = t2(122), c = t2(25), l = t2(6), f = t2(92), h = t2(42), d = t2(93), p = t2(116), v = t2(118), y = t2(115), g = t2(114), m = t2(120), b = t2(41), _ = t2(17), w = t2(51), S = t2(119), E = t2(48), x = t2(71), k = t2(79), O = t2(77).f, A = t2(129), M = t2(124), P = t2(128), C = t2(12), j = t2(11), L = t2(104), T = t2(141), I = t2(58), N = t2(56), F = t2(100), R = t2(9), D = t2(8), B = t2(72), q = t2(75), W = B.f, H = q.f, V = i.RangeError, U = i.TypeError, z = i.Uint8Array, G = Array.prototype, Q = u.ArrayBuffer, Y = u.DataView, J = C(0), K = C(2), X = C(3), $ = C(4), Z = C(5), tt = C(6), et = j(true), nt = j(false), rt = T.values, it = T.keys, ot = T.entries, at = G.lastIndexOf, st = G.reduce, ut = G.reduceRight, ct = G.join, lt = G.sort, ft = G.slice, ht = G.toString, dt = G.toLocaleString, pt = P("iterator"), vt = P("toStringTag"), yt = M("typed_constructor"), gt = M("def_constructor"), mt = s.CONSTR, bt = s.TYPED, _t = s.VIEW, wt = C(1, function(t3, e4) {
              return Ot(L(t3, t3[gt]), e4);
            }), St = o(function() {
              return 1 === new z(new Uint16Array([1]).buffer)[0];
            }), Et = !!z && !!z.prototype.set && o(function() {
              new z(1).set({});
            }), xt = function(t3, e4) {
              var n3 = p(t3);
              if (n3 < 0 || n3 % e4) throw V("Wrong offset!");
              return n3;
            }, kt = function(t3) {
              if (w(t3) && bt in t3) return t3;
              throw U(t3 + " is not a typed array!");
            }, Ot = function(t3, e4) {
              if (!(w(t3) && yt in t3)) throw U("It is not a typed array constructor!");
              return new t3(e4);
            }, At = function(t3, e4) {
              return Mt(L(t3, t3[gt]), e4);
            }, Mt = function(t3, e4) {
              for (var n3 = 0, r2 = e4.length, i2 = Ot(t3, r2); r2 > n3; ) i2[n3] = e4[n3++];
              return i2;
            }, Pt = function(t3, e4, n3) {
              W(t3, e4, { get: function() {
                return this._d[n3];
              } });
            }, Ct = function(t3) {
              var e4, n3, r2, i2, o2, a2, s2 = S(t3), u2 = arguments.length, l2 = u2 > 1 ? arguments[1] : void 0, f2 = void 0 !== l2, h2 = A(s2);
              if (void 0 != h2 && !E(h2)) {
                for (a2 = h2.call(s2), r2 = [], e4 = 0; !(o2 = a2.next()).done; e4++) r2.push(o2.value);
                s2 = r2;
              }
              for (f2 && u2 > 2 && (l2 = c(l2, arguments[2], 2)), e4 = 0, n3 = v(s2.length), i2 = Ot(this, n3); n3 > e4; e4++) i2[e4] = f2 ? l2(s2[e4], e4) : s2[e4];
              return i2;
            }, jt = function() {
              for (var t3 = 0, e4 = arguments.length, n3 = Ot(this, e4); e4 > t3; ) n3[t3] = arguments[t3++];
              return n3;
            }, Lt = !!z && o(function() {
              dt.call(new z(1));
            }), Tt = function() {
              return dt.apply(Lt ? ft.call(kt(this)) : kt(this), arguments);
            }, It = { copyWithin: function(t3, e4) {
              return D.call(kt(this), t3, e4, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(t3) {
              return $(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(t3) {
              return R.apply(kt(this), arguments);
            }, filter: function(t3) {
              return At(this, K(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(t3) {
              return Z(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(t3) {
              return tt(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(t3) {
              J(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(t3) {
              return nt(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(t3) {
              return et(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(t3) {
              return ct.apply(kt(this), arguments);
            }, lastIndexOf: function(t3) {
              return at.apply(kt(this), arguments);
            }, map: function(t3) {
              return wt(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(t3) {
              return st.apply(kt(this), arguments);
            }, reduceRight: function(t3) {
              return ut.apply(kt(this), arguments);
            }, reverse: function() {
              for (var t3, e4 = this, n3 = kt(e4).length, r2 = Math.floor(n3 / 2), i2 = 0; i2 < r2; ) t3 = e4[i2], e4[i2++] = e4[--n3], e4[n3] = t3;
              return e4;
            }, some: function(t3) {
              return X(kt(this), t3, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(t3) {
              return lt.call(kt(this), t3);
            }, subarray: function(t3, e4) {
              var n3 = kt(this), r2 = n3.length, i2 = g(t3, r2);
              return new (L(n3, n3[gt]))(n3.buffer, n3.byteOffset + i2 * n3.BYTES_PER_ELEMENT, v((void 0 === e4 ? r2 : g(e4, r2)) - i2));
            } }, Nt = function(t3, e4) {
              return At(this, ft.call(kt(this), t3, e4));
            }, Ft = function(t3) {
              kt(this);
              var e4 = xt(arguments[1], 1), n3 = this.length, r2 = S(t3), i2 = v(r2.length), o2 = 0;
              if (i2 + e4 > n3) throw V("Wrong length!");
              for (; o2 < i2; ) this[e4 + o2] = r2[o2++];
            }, Rt = { entries: function() {
              return ot.call(kt(this));
            }, keys: function() {
              return it.call(kt(this));
            }, values: function() {
              return rt.call(kt(this));
            } }, Dt = function(t3, e4) {
              return w(t3) && t3[bt] && "symbol" != typeof e4 && e4 in t3 && String(+e4) == String(e4);
            }, Bt = function(t3, e4) {
              return Dt(t3, e4 = m(e4, true)) ? f(2, t3[e4]) : H(t3, e4);
            }, qt = function(t3, e4, n3) {
              return !(Dt(t3, e4 = m(e4, true)) && w(n3) && b(n3, "value")) || b(n3, "get") || b(n3, "set") || n3.configurable || b(n3, "writable") && !n3.writable || b(n3, "enumerable") && !n3.enumerable ? W(t3, e4, n3) : (t3[e4] = n3.value, t3);
            };
            mt || (q.f = Bt, B.f = qt), a(a.S + a.F * !mt, "Object", { getOwnPropertyDescriptor: Bt, defineProperty: qt }), o(function() {
              ht.call({});
            }) && (ht = dt = function() {
              return ct.call(this);
            });
            var Wt = d({}, It);
            d(Wt, Rt), h(Wt, pt, Rt.values), d(Wt, { slice: Nt, set: Ft, constructor: function() {
            }, toString: ht, toLocaleString: Tt }), Pt(Wt, "buffer", "b"), Pt(Wt, "byteOffset", "o"), Pt(Wt, "byteLength", "l"), Pt(Wt, "length", "e"), W(Wt, vt, { get: function() {
              return this[bt];
            } }), e3.exports = function(t3, e4, n3, u2) {
              u2 = !!u2;
              var c2 = t3 + (u2 ? "Clamped" : "") + "Array", f2 = "get" + t3, d2 = "set" + t3, p2 = i[c2], g2 = p2 || {}, m2 = p2 && k(p2), b2 = !p2 || !s.ABV, S2 = {}, E2 = p2 && p2.prototype, A2 = function(t4, n4) {
                var r2 = t4._d;
                return r2.v[f2](n4 * e4 + r2.o, St);
              }, M2 = function(t4, n4, r2) {
                var i2 = t4._d;
                u2 && (r2 = (r2 = Math.round(r2)) < 0 ? 0 : r2 > 255 ? 255 : 255 & r2), i2.v[d2](n4 * e4 + i2.o, r2, St);
              }, P2 = function(t4, e5) {
                W(t4, e5, { get: function() {
                  return A2(this, e5);
                }, set: function(t5) {
                  return M2(this, e5, t5);
                }, enumerable: true });
              };
              b2 ? (p2 = n3(function(t4, n4, r2, i2) {
                l(t4, p2, c2, "_d");
                var o2, a2, s2, u3, f3 = 0, d3 = 0;
                if (w(n4)) {
                  if (!(n4 instanceof Q || "ArrayBuffer" == (u3 = _(n4)) || "SharedArrayBuffer" == u3)) return bt in n4 ? Mt(p2, n4) : Ct.call(p2, n4);
                  o2 = n4, d3 = xt(r2, e4);
                  var g3 = n4.byteLength;
                  if (void 0 === i2) {
                    if (g3 % e4) throw V("Wrong length!");
                    if ((a2 = g3 - d3) < 0) throw V("Wrong length!");
                  } else if ((a2 = v(i2) * e4) + d3 > g3) throw V("Wrong length!");
                  s2 = a2 / e4;
                } else s2 = y(n4), a2 = s2 * e4, o2 = new Q(a2);
                for (h(t4, "_d", { b: o2, o: d3, l: a2, e: s2, v: new Y(o2) }); f3 < s2; ) P2(t4, f3++);
              }), E2 = p2.prototype = x(Wt), h(E2, "constructor", p2)) : o(function() {
                p2(1);
              }) && o(function() {
                new p2(-1);
              }) && N(function(t4) {
                new p2(), new p2(null), new p2(1.5), new p2(t4);
              }, true) || (p2 = n3(function(t4, n4, r2, i2) {
                l(t4, p2, c2);
                var o2;
                return w(n4) ? n4 instanceof Q || "ArrayBuffer" == (o2 = _(n4)) || "SharedArrayBuffer" == o2 ? void 0 !== i2 ? new g2(n4, xt(r2, e4), i2) : void 0 !== r2 ? new g2(n4, xt(r2, e4)) : new g2(n4) : bt in n4 ? Mt(p2, n4) : Ct.call(p2, n4) : new g2(y(n4));
              }), J(m2 !== Function.prototype ? O(g2).concat(O(m2)) : O(g2), function(t4) {
                t4 in p2 || h(p2, t4, g2[t4]);
              }), p2.prototype = E2, r || (E2.constructor = p2));
              var C2 = E2[pt], j2 = !!C2 && ("values" == C2.name || void 0 == C2.name), L2 = Rt.values;
              h(p2, yt, true), h(E2, bt, c2), h(E2, _t, true), h(E2, gt, p2), (u2 ? new p2(1)[vt] == c2 : vt in E2) || W(E2, vt, { get: function() {
                return c2;
              } }), S2[c2] = p2, a(a.G + a.W + a.F * (p2 != g2), S2), a(a.S, c2, { BYTES_PER_ELEMENT: e4 }), a(a.S + a.F * o(function() {
                g2.of.call(p2, 1);
              }), c2, { from: Ct, of: jt }), "BYTES_PER_ELEMENT" in E2 || h(E2, "BYTES_PER_ELEMENT", e4), a(a.P, c2, It), F(c2), a(a.P + a.F * Et, c2, { set: Ft }), a(a.P + a.F * !j2, c2, Rt), r || E2.toString == ht || (E2.toString = ht), a(a.P + a.F * o(function() {
                new p2(1).slice();
              }), c2, { slice: Nt }), a(a.P + a.F * (o(function() {
                return [1, 2].toLocaleString() != new p2([1, 2]).toLocaleString();
              }) || !o(function() {
                E2.toLocaleString.call([1, 2]);
              })), c2, { toLocaleString: Tt }), I[c2] = j2 ? C2 : L2, r || j2 || h(E2, pt, L2);
            };
          } else e3.exports = function() {
          };
        }, { 100: 100, 104: 104, 11: 11, 114: 114, 115: 115, 116: 116, 118: 118, 119: 119, 12: 12, 120: 120, 122: 122, 123: 123, 124: 124, 128: 128, 129: 129, 141: 141, 17: 17, 25: 25, 29: 29, 33: 33, 35: 35, 40: 40, 41: 41, 42: 42, 48: 48, 51: 51, 56: 56, 58: 58, 6: 6, 60: 60, 71: 71, 72: 72, 75: 75, 77: 77, 79: 79, 8: 8, 9: 9, 92: 92, 93: 93 }],
        122: [function(t2, e3, n2) {
          function r(t3, e4, n3) {
            var r2, i2, o2, a2 = Array(n3), s2 = 8 * n3 - e4 - 1, u2 = (1 << s2) - 1, c2 = u2 >> 1, l2 = 23 === e4 ? D(2, -24) - D(2, -77) : 0, f2 = 0, h2 = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0;
            for (t3 = R(t3), t3 != t3 || t3 === N ? (i2 = t3 != t3 ? 1 : 0, r2 = u2) : (r2 = B(q(t3) / W), t3 * (o2 = D(2, -r2)) < 1 && (r2--, o2 *= 2), t3 += r2 + c2 >= 1 ? l2 / o2 : l2 * D(2, 1 - c2), t3 * o2 >= 2 && (r2++, o2 /= 2), r2 + c2 >= u2 ? (i2 = 0, r2 = u2) : r2 + c2 >= 1 ? (i2 = (t3 * o2 - 1) * D(2, e4), r2 += c2) : (i2 = t3 * D(2, c2 - 1) * D(2, e4), r2 = 0)); e4 >= 8; a2[f2++] = 255 & i2, i2 /= 256, e4 -= 8) ;
            for (r2 = r2 << e4 | i2, s2 += e4; s2 > 0; a2[f2++] = 255 & r2, r2 /= 256, s2 -= 8) ;
            return a2[--f2] |= 128 * h2, a2;
          }
          function i(t3, e4, n3) {
            var r2, i2 = 8 * n3 - e4 - 1, o2 = (1 << i2) - 1, a2 = o2 >> 1, s2 = i2 - 7, u2 = n3 - 1, c2 = t3[u2--], l2 = 127 & c2;
            for (c2 >>= 7; s2 > 0; l2 = 256 * l2 + t3[u2], u2--, s2 -= 8) ;
            for (r2 = l2 & (1 << -s2) - 1, l2 >>= -s2, s2 += e4; s2 > 0; r2 = 256 * r2 + t3[u2], u2--, s2 -= 8) ;
            if (0 === l2) l2 = 1 - a2;
            else {
              if (l2 === o2) return r2 ? NaN : c2 ? -N : N;
              r2 += D(2, e4), l2 -= a2;
            }
            return (c2 ? -1 : 1) * r2 * D(2, l2 - e4);
          }
          function o(t3) {
            return t3[3] << 24 | t3[2] << 16 | t3[1] << 8 | t3[0];
          }
          function a(t3) {
            return [255 & t3];
          }
          function s(t3) {
            return [255 & t3, t3 >> 8 & 255];
          }
          function u(t3) {
            return [255 & t3, t3 >> 8 & 255, t3 >> 16 & 255, t3 >> 24 & 255];
          }
          function c(t3) {
            return r(t3, 52, 8);
          }
          function l(t3) {
            return r(t3, 23, 4);
          }
          function f(t3, e4, n3) {
            O(t3[P], e4, { get: function() {
              return this[n3];
            } });
          }
          function h(t3, e4, n3, r2) {
            var i2 = +n3, o2 = x(i2);
            if (o2 + e4 > t3[V]) throw I(C);
            var a2 = t3[H]._b, s2 = o2 + t3[U], u2 = a2.slice(s2, s2 + e4);
            return r2 ? u2 : u2.reverse();
          }
          function d(t3, e4, n3, r2, i2, o2) {
            var a2 = +n3, s2 = x(a2);
            if (s2 + e4 > t3[V]) throw I(C);
            for (var u2 = t3[H]._b, c2 = s2 + t3[U], l2 = r2(+i2), f2 = 0; f2 < e4; f2++) u2[c2 + f2] = l2[o2 ? f2 : e4 - f2 - 1];
          }
          var p = t2(40), v = t2(29), y = t2(60), g = t2(123), m = t2(42), b = t2(93), _ = t2(35), w = t2(6), S = t2(116), E = t2(118), x = t2(115), k = t2(77).f, O = t2(72).f, A = t2(9), M = t2(101), P = "prototype", C = "Wrong index!", j = p.ArrayBuffer, L = p.DataView, T = p.Math, I = p.RangeError, N = p.Infinity, F = j, R = T.abs, D = T.pow, B = T.floor, q = T.log, W = T.LN2, H = v ? "_b" : "buffer", V = v ? "_l" : "byteLength", U = v ? "_o" : "byteOffset";
          if (g.ABV) {
            if (!_(function() {
              j(1);
            }) || !_(function() {
              new j(-1);
            }) || _(function() {
              return new j(), new j(1.5), new j(NaN), "ArrayBuffer" != j.name;
            })) {
              j = function(t3) {
                return w(this, j), new F(x(t3));
              };
              for (var z, G = j[P] = F[P], Q = k(F), Y = 0; Q.length > Y; ) (z = Q[Y++]) in j || m(j, z, F[z]);
              y || (G.constructor = j);
            }
            var J = new L(new j(2)), K = L[P].setInt8;
            J.setInt8(0, 2147483648), J.setInt8(1, 2147483649), !J.getInt8(0) && J.getInt8(1) || b(L[P], { setInt8: function(t3, e4) {
              K.call(this, t3, e4 << 24 >> 24);
            }, setUint8: function(t3, e4) {
              K.call(this, t3, e4 << 24 >> 24);
            } }, true);
          } else j = function(t3) {
            w(this, j, "ArrayBuffer");
            var e4 = x(t3);
            this._b = A.call(Array(e4), 0), this[V] = e4;
          }, L = function(t3, e4, n3) {
            w(this, L, "DataView"), w(t3, j, "DataView");
            var r2 = t3[V], i2 = S(e4);
            if (i2 < 0 || i2 > r2) throw I("Wrong offset!");
            if (n3 = void 0 === n3 ? r2 - i2 : E(n3), i2 + n3 > r2) throw I("Wrong length!");
            this[H] = t3, this[U] = i2, this[V] = n3;
          }, v && (f(j, "byteLength", "_l"), f(L, "buffer", "_b"), f(L, "byteLength", "_l"), f(L, "byteOffset", "_o")), b(L[P], { getInt8: function(t3) {
            return h(this, 1, t3)[0] << 24 >> 24;
          }, getUint8: function(t3) {
            return h(this, 1, t3)[0];
          }, getInt16: function(t3) {
            var e4 = h(this, 2, t3, arguments[1]);
            return (e4[1] << 8 | e4[0]) << 16 >> 16;
          }, getUint16: function(t3) {
            var e4 = h(this, 2, t3, arguments[1]);
            return e4[1] << 8 | e4[0];
          }, getInt32: function(t3) {
            return o(h(this, 4, t3, arguments[1]));
          }, getUint32: function(t3) {
            return o(h(this, 4, t3, arguments[1])) >>> 0;
          }, getFloat32: function(t3) {
            return i(h(this, 4, t3, arguments[1]), 23, 4);
          }, getFloat64: function(t3) {
            return i(h(this, 8, t3, arguments[1]), 52, 8);
          }, setInt8: function(t3, e4) {
            d(this, 1, t3, a, e4);
          }, setUint8: function(t3, e4) {
            d(this, 1, t3, a, e4);
          }, setInt16: function(t3, e4) {
            d(this, 2, t3, s, e4, arguments[2]);
          }, setUint16: function(t3, e4) {
            d(this, 2, t3, s, e4, arguments[2]);
          }, setInt32: function(t3, e4) {
            d(this, 4, t3, u, e4, arguments[2]);
          }, setUint32: function(t3, e4) {
            d(this, 4, t3, u, e4, arguments[2]);
          }, setFloat32: function(t3, e4) {
            d(this, 4, t3, l, e4, arguments[2]);
          }, setFloat64: function(t3, e4) {
            d(this, 8, t3, c, e4, arguments[2]);
          } });
          M(j, "ArrayBuffer"), M(L, "DataView"), m(L[P], g.VIEW, true), n2.ArrayBuffer = j, n2.DataView = L;
        }, { 101: 101, 115: 115, 116: 116, 118: 118, 123: 123, 29: 29, 35: 35, 40: 40, 42: 42, 6: 6, 60: 60, 72: 72, 77: 77, 9: 9, 93: 93 }],
        123: [function(t2, e3, n2) {
          for (var r, i = t2(40), o = t2(42), a = t2(124), s = a("typed_array"), u = a("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; ) (r = i[h[f++]]) ? (o(r.prototype, s, true), o(r.prototype, u, true)) : l = false;
          e3.exports = { ABV: c, CONSTR: l, TYPED: s, VIEW: u };
        }, { 124: 124, 40: 40, 42: 42 }],
        124: [function(t2, e3, n2) {
          var r = 0, i = Math.random();
          e3.exports = function(t3) {
            return "Symbol(".concat(void 0 === t3 ? "" : t3, ")_", (++r + i).toString(36));
          };
        }, {}],
        125: [function(t2, e3, n2) {
          var r = t2(51);
          e3.exports = function(t3, e4) {
            if (!r(t3) || t3._t !== e4) throw TypeError("Incompatible receiver, " + e4 + " required!");
            return t3;
          };
        }, { 51: 51 }],
        126: [function(t2, e3, n2) {
          var r = t2(40), i = t2(23), o = t2(60), a = t2(127), s = t2(72).f;
          e3.exports = function(t3) {
            var e4 = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t3.charAt(0) || t3 in e4 || s(e4, t3, { value: a.f(t3) });
          };
        }, { 127: 127, 23: 23, 40: 40, 60: 60, 72: 72 }],
        127: [function(t2, e3, n2) {
          n2.f = t2(128);
        }, { 128: 128 }],
        128: [function(t2, e3, n2) {
          var r = t2(103)("wks"), i = t2(124), o = t2(40).Symbol, a = "function" == typeof o;
          (e3.exports = function(t3) {
            return r[t3] || (r[t3] = a && o[t3] || (a ? o : i)("Symbol." + t3));
          }).store = r;
        }, { 103: 103, 124: 124, 40: 40 }],
        129: [function(t2, e3, n2) {
          var r = t2(17), i = t2(128)("iterator"), o = t2(58);
          e3.exports = t2(23).getIteratorMethod = function(t3) {
            if (void 0 != t3) return t3[i] || t3["@@iterator"] || o[r(t3)];
          };
        }, { 128: 128, 17: 17, 23: 23, 58: 58 }],
        130: [function(t2, e3, n2) {
          var r = t2(33), i = t2(95)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
          r(r.S, "RegExp", { escape: function(t3) {
            return i(t3);
          } });
        }, { 33: 33, 95: 95 }],
        131: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P, "Array", { copyWithin: t2(8) }), t2(5)("copyWithin");
        }, { 33: 33, 5: 5, 8: 8 }],
        132: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(4);
          r(r.P + r.F * !t2(105)([].every, true), "Array", { every: function(t3) {
            return i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 12: 12, 33: 33 }],
        133: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P, "Array", { fill: t2(9) }), t2(5)("fill");
        }, { 33: 33, 5: 5, 9: 9 }],
        134: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(2);
          r(r.P + r.F * !t2(105)([].filter, true), "Array", { filter: function(t3) {
            return i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 12: 12, 33: 33 }],
        135: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(6), o = "findIndex", a = true;
          o in [] && Array(1)[o](function() {
            a = false;
          }), r(r.P + r.F * a, "Array", { findIndex: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } }), t2(5)(o);
        }, { 12: 12, 33: 33, 5: 5 }],
        136: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(5), o = true;
          "find" in [] && Array(1).find(function() {
            o = false;
          }), r(r.P + r.F * o, "Array", { find: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } }), t2(5)("find");
        }, { 12: 12, 33: 33, 5: 5 }],
        137: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(0), o = t2(105)([].forEach, true);
          r(r.P + r.F * !o, "Array", { forEach: function(t3) {
            return i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 12: 12, 33: 33 }],
        138: [function(t2, e3, n2) {
          var r = t2(25), i = t2(33), o = t2(119), a = t2(53), s = t2(48), u = t2(118), c = t2(24), l = t2(129);
          i(i.S + i.F * !t2(56)(function(t3) {
            Array.from(t3);
          }), "Array", { from: function(t3) {
            var e4, n3, i2, f, h = o(t3), d = "function" == typeof this ? this : Array, p = arguments.length, v = p > 1 ? arguments[1] : void 0, y = void 0 !== v, g = 0, m = l(h);
            if (y && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && s(m)) for (e4 = u(h.length), n3 = new d(e4); e4 > g; g++) c(n3, g, y ? v(h[g], g) : h[g]);
            else for (f = m.call(h), n3 = new d(); !(i2 = f.next()).done; g++) c(n3, g, y ? a(f, v, [i2.value, g], true) : i2.value);
            return n3.length = g, n3;
          } });
        }, { 118: 118, 119: 119, 129: 129, 24: 24, 25: 25, 33: 33, 48: 48, 53: 53, 56: 56 }],
        139: [function(t2, e3, n2) {
          var r = t2(33), i = t2(11)(false), o = [].indexOf, a = !!o && 1 / [1].indexOf(1, -0) < 0;
          r(r.P + r.F * (a || !t2(105)(o)), "Array", { indexOf: function(t3) {
            return a ? o.apply(this, arguments) || 0 : i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 11: 11, 33: 33 }],
        140: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Array", { isArray: t2(49) });
        }, { 33: 33, 49: 49 }],
        141: [function(t2, e3, n2) {
          var r = t2(5), i = t2(57), o = t2(58), a = t2(117);
          e3.exports = t2(55)(Array, "Array", function(t3, e4) {
            this._t = a(t3), this._i = 0, this._k = e4;
          }, function() {
            var t3 = this._t, e4 = this._k, n3 = this._i++;
            return !t3 || n3 >= t3.length ? (this._t = void 0, i(1)) : "keys" == e4 ? i(0, n3) : "values" == e4 ? i(0, t3[n3]) : i(0, [n3, t3[n3]]);
          }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
        }, { 117: 117, 5: 5, 55: 55, 57: 57, 58: 58 }],
        142: [function(t2, e3, n2) {
          var r = t2(33), i = t2(117), o = [].join;
          r(r.P + r.F * (t2(47) != Object || !t2(105)(o)), "Array", { join: function(t3) {
            return o.call(i(this), void 0 === t3 ? "," : t3);
          } });
        }, { 105: 105, 117: 117, 33: 33, 47: 47 }],
        143: [function(t2, e3, n2) {
          var r = t2(33), i = t2(117), o = t2(116), a = t2(118), s = [].lastIndexOf, u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
          r(r.P + r.F * (u || !t2(105)(s)), "Array", { lastIndexOf: function(t3) {
            if (u) return s.apply(this, arguments) || 0;
            var e4 = i(this), n3 = a(e4.length), r2 = n3 - 1;
            for (arguments.length > 1 && (r2 = Math.min(r2, o(arguments[1]))), r2 < 0 && (r2 = n3 + r2); r2 >= 0; r2--) if (r2 in e4 && e4[r2] === t3) return r2 || 0;
            return -1;
          } });
        }, { 105: 105, 116: 116, 117: 117, 118: 118, 33: 33 }],
        144: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(1);
          r(r.P + r.F * !t2(105)([].map, true), "Array", { map: function(t3) {
            return i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 12: 12, 33: 33 }],
        145: [function(t2, e3, n2) {
          var r = t2(33), i = t2(24);
          r(r.S + r.F * t2(35)(function() {
            function t3() {
            }
            return !(Array.of.call(t3) instanceof t3);
          }), "Array", { of: function() {
            for (var t3 = 0, e4 = arguments.length, n3 = new ("function" == typeof this ? this : Array)(e4); e4 > t3; ) i(n3, t3, arguments[t3++]);
            return n3.length = e4, n3;
          } });
        }, { 24: 24, 33: 33, 35: 35 }],
        146: [function(t2, e3, n2) {
          var r = t2(33), i = t2(13);
          r(r.P + r.F * !t2(105)([].reduceRight, true), "Array", { reduceRight: function(t3) {
            return i(this, t3, arguments.length, arguments[1], true);
          } });
        }, { 105: 105, 13: 13, 33: 33 }],
        147: [function(t2, e3, n2) {
          var r = t2(33), i = t2(13);
          r(r.P + r.F * !t2(105)([].reduce, true), "Array", { reduce: function(t3) {
            return i(this, t3, arguments.length, arguments[1], false);
          } });
        }, { 105: 105, 13: 13, 33: 33 }],
        148: [function(t2, e3, n2) {
          var r = t2(33), i = t2(43), o = t2(18), a = t2(114), s = t2(118), u = [].slice;
          r(r.P + r.F * t2(35)(function() {
            i && u.call(i);
          }), "Array", { slice: function(t3, e4) {
            var n3 = s(this.length), r2 = o(this);
            if (e4 = void 0 === e4 ? n3 : e4, "Array" == r2) return u.call(this, t3, e4);
            for (var i2 = a(t3, n3), c = a(e4, n3), l = s(c - i2), f = Array(l), h = 0; h < l; h++) f[h] = "String" == r2 ? this.charAt(i2 + h) : this[i2 + h];
            return f;
          } });
        }, { 114: 114, 118: 118, 18: 18, 33: 33, 35: 35, 43: 43 }],
        149: [function(t2, e3, n2) {
          var r = t2(33), i = t2(12)(3);
          r(r.P + r.F * !t2(105)([].some, true), "Array", { some: function(t3) {
            return i(this, t3, arguments[1]);
          } });
        }, { 105: 105, 12: 12, 33: 33 }],
        150: [function(t2, e3, n2) {
          var r = t2(33), i = t2(3), o = t2(119), a = t2(35), s = [].sort, u = [1, 2, 3];
          r(r.P + r.F * (a(function() {
            u.sort(void 0);
          }) || !a(function() {
            u.sort(null);
          }) || !t2(105)(s)), "Array", { sort: function(t3) {
            return void 0 === t3 ? s.call(o(this)) : s.call(o(this), i(t3));
          } });
        }, { 105: 105, 119: 119, 3: 3, 33: 33, 35: 35 }],
        151: [function(t2, e3, n2) {
          t2(100)("Array");
        }, { 100: 100 }],
        152: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Date", { now: function() {
            return (/* @__PURE__ */ new Date()).getTime();
          } });
        }, { 33: 33 }],
        153: [function(t2, e3, n2) {
          var r = t2(33), i = t2(26);
          r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", { toISOString: i });
        }, { 26: 26, 33: 33 }],
        154: [function(t2, e3, n2) {
          var r = t2(33), i = t2(119), o = t2(120);
          r(r.P + r.F * t2(35)(function() {
            return null !== (/* @__PURE__ */ new Date(NaN)).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } });
          }), "Date", { toJSON: function(t3) {
            var e4 = i(this), n3 = o(e4);
            return "number" != typeof n3 || isFinite(n3) ? e4.toISOString() : null;
          } });
        }, { 119: 119, 120: 120, 33: 33, 35: 35 }],
        155: [function(t2, e3, n2) {
          var r = t2(128)("toPrimitive"), i = Date.prototype;
          r in i || t2(42)(i, r, t2(27));
        }, { 128: 128, 27: 27, 42: 42 }],
        156: [function(t2, e3, n2) {
          var r = Date.prototype, i = r.toString, o = r.getTime;
          /* @__PURE__ */ new Date(NaN) + "" != "Invalid Date" && t2(94)(r, "toString", function() {
            var t3 = o.call(this);
            return t3 === t3 ? i.call(this) : "Invalid Date";
          });
        }, { 94: 94 }],
        157: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P, "Function", { bind: t2(16) });
        }, { 16: 16, 33: 33 }],
        158: [function(t2, e3, n2) {
          var r = t2(51), i = t2(79), o = t2(128)("hasInstance"), a = Function.prototype;
          o in a || t2(72).f(a, o, { value: function(t3) {
            if ("function" != typeof this || !r(t3)) return false;
            if (!r(this.prototype)) return t3 instanceof this;
            for (; t3 = i(t3); ) if (this.prototype === t3) return true;
            return false;
          } });
        }, { 128: 128, 51: 51, 72: 72, 79: 79 }],
        159: [function(t2, e3, n2) {
          var r = t2(72).f, i = Function.prototype, o = /^\s*function ([^ (]*)/;
          "name" in i || t2(29) && r(i, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (t3) {
              return "";
            }
          } });
        }, { 29: 29, 72: 72 }],
        160: [function(t2, e3, n2) {
          var r = t2(19), i = t2(125);
          e3.exports = t2(22)("Map", function(t3) {
            return function() {
              return t3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(t3) {
            var e4 = r.getEntry(i(this, "Map"), t3);
            return e4 && e4.v;
          }, set: function(t3, e4) {
            return r.def(i(this, "Map"), 0 === t3 ? 0 : t3, e4);
          } }, r, true);
        }, { 125: 125, 19: 19, 22: 22 }],
        161: [function(t2, e3, n2) {
          var r = t2(33), i = t2(63), o = Math.sqrt, a = Math.acosh;
          r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(t3) {
            return (t3 = +t3) < 1 ? NaN : t3 > 9490626562425156e-8 ? Math.log(t3) + Math.LN2 : i(t3 - 1 + o(t3 - 1) * o(t3 + 1));
          } });
        }, { 33: 33, 63: 63 }],
        162: [function(t2, e3, n2) {
          function r(t3) {
            return isFinite(t3 = +t3) && 0 != t3 ? t3 < 0 ? -r(-t3) : Math.log(t3 + Math.sqrt(t3 * t3 + 1)) : t3;
          }
          var i = t2(33), o = Math.asinh;
          i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", { asinh: r });
        }, { 33: 33 }],
        163: [function(t2, e3, n2) {
          var r = t2(33), i = Math.atanh;
          r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", { atanh: function(t3) {
            return 0 == (t3 = +t3) ? t3 : Math.log((1 + t3) / (1 - t3)) / 2;
          } });
        }, { 33: 33 }],
        164: [function(t2, e3, n2) {
          var r = t2(33), i = t2(65);
          r(r.S, "Math", { cbrt: function(t3) {
            return i(t3 = +t3) * Math.pow(Math.abs(t3), 1 / 3);
          } });
        }, { 33: 33, 65: 65 }],
        165: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { clz32: function(t3) {
            return (t3 >>>= 0) ? 31 - Math.floor(Math.log(t3 + 0.5) * Math.LOG2E) : 32;
          } });
        }, { 33: 33 }],
        166: [function(t2, e3, n2) {
          var r = t2(33), i = Math.exp;
          r(r.S, "Math", { cosh: function(t3) {
            return (i(t3 = +t3) + i(-t3)) / 2;
          } });
        }, { 33: 33 }],
        167: [function(t2, e3, n2) {
          var r = t2(33), i = t2(61);
          r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
        }, { 33: 33, 61: 61 }],
        168: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { fround: t2(62) });
        }, { 33: 33, 62: 62 }],
        169: [function(t2, e3, n2) {
          var r = t2(33), i = Math.abs;
          r(r.S, "Math", { hypot: function(t3, e4) {
            for (var n3, r2, o = 0, a = 0, s = arguments.length, u = 0; a < s; ) n3 = i(arguments[a++]), u < n3 ? (r2 = u / n3, o = o * r2 * r2 + 1, u = n3) : n3 > 0 ? (r2 = n3 / u, o += r2 * r2) : o += n3;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
          } });
        }, { 33: 33 }],
        170: [function(t2, e3, n2) {
          var r = t2(33), i = Math.imul;
          r(r.S + r.F * t2(35)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }), "Math", { imul: function(t3, e4) {
            var n3 = +t3, r2 = +e4, i2 = 65535 & n3, o = 65535 & r2;
            return 0 | i2 * o + ((65535 & n3 >>> 16) * o + i2 * (65535 & r2 >>> 16) << 16 >>> 0);
          } });
        }, { 33: 33, 35: 35 }],
        171: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { log10: function(t3) {
            return Math.log(t3) * Math.LOG10E;
          } });
        }, { 33: 33 }],
        172: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { log1p: t2(63) });
        }, { 33: 33, 63: 63 }],
        173: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { log2: function(t3) {
            return Math.log(t3) / Math.LN2;
          } });
        }, { 33: 33 }],
        174: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { sign: t2(65) });
        }, { 33: 33, 65: 65 }],
        175: [function(t2, e3, n2) {
          var r = t2(33), i = t2(61), o = Math.exp;
          r(r.S + r.F * t2(35)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }), "Math", { sinh: function(t3) {
            return Math.abs(t3 = +t3) < 1 ? (i(t3) - i(-t3)) / 2 : (o(t3 - 1) - o(-t3 - 1)) * (Math.E / 2);
          } });
        }, { 33: 33, 35: 35, 61: 61 }],
        176: [function(t2, e3, n2) {
          var r = t2(33), i = t2(61), o = Math.exp;
          r(r.S, "Math", { tanh: function(t3) {
            var e4 = i(t3 = +t3), n3 = i(-t3);
            return e4 == 1 / 0 ? 1 : n3 == 1 / 0 ? -1 : (e4 - n3) / (o(t3) + o(-t3));
          } });
        }, { 33: 33, 61: 61 }],
        177: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { trunc: function(t3) {
            return (t3 > 0 ? Math.floor : Math.ceil)(t3);
          } });
        }, { 33: 33 }],
        178: [function(t2, e3, n2) {
          var r = t2(40), i = t2(41), o = t2(18), a = t2(45), s = t2(120), u = t2(35), c = t2(77).f, l = t2(75).f, f = t2(72).f, h = t2(111).trim, d = r.Number, p = d, v = d.prototype, y = "Number" == o(t2(71)(v)), g = "trim" in String.prototype, m = function(t3) {
            var e4 = s(t3, false);
            if ("string" == typeof e4 && e4.length > 2) {
              e4 = g ? e4.trim() : h(e4, 3);
              var n3, r2, i2, o2 = e4.charCodeAt(0);
              if (43 === o2 || 45 === o2) {
                if (88 === (n3 = e4.charCodeAt(2)) || 120 === n3) return NaN;
              } else if (48 === o2) {
                switch (e4.charCodeAt(1)) {
                  case 66:
                  case 98:
                    r2 = 2, i2 = 49;
                    break;
                  case 79:
                  case 111:
                    r2 = 8, i2 = 55;
                    break;
                  default:
                    return +e4;
                }
                for (var a2, u2 = e4.slice(2), c2 = 0, l2 = u2.length; c2 < l2; c2++) if ((a2 = u2.charCodeAt(c2)) < 48 || a2 > i2) return NaN;
                return parseInt(u2, r2);
              }
            }
            return +e4;
          };
          if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
            d = function(t3) {
              var e4 = arguments.length < 1 ? 0 : t3, n3 = this;
              return n3 instanceof d && (y ? u(function() {
                v.valueOf.call(n3);
              }) : "Number" != o(n3)) ? a(new p(m(e4)), n3, d) : m(e4);
            };
            for (var b, _ = t2(29) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; _.length > w; w++) i(p, b = _[w]) && !i(d, b) && f(d, b, l(p, b));
            d.prototype = v, v.constructor = d, t2(94)(r, "Number", d);
          }
        }, { 111: 111, 120: 120, 18: 18, 29: 29, 35: 35, 40: 40, 41: 41, 45: 45, 71: 71, 72: 72, 75: 75, 77: 77, 94: 94 }],
        179: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, { 33: 33 }],
        180: [function(t2, e3, n2) {
          var r = t2(33), i = t2(40).isFinite;
          r(r.S, "Number", { isFinite: function(t3) {
            return "number" == typeof t3 && i(t3);
          } });
        }, { 33: 33, 40: 40 }],
        181: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Number", { isInteger: t2(50) });
        }, { 33: 33, 50: 50 }],
        182: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Number", { isNaN: function(t3) {
            return t3 != t3;
          } });
        }, { 33: 33 }],
        183: [function(t2, e3, n2) {
          var r = t2(33), i = t2(50), o = Math.abs;
          r(r.S, "Number", { isSafeInteger: function(t3) {
            return i(t3) && o(t3) <= 9007199254740991;
          } });
        }, { 33: 33, 50: 50 }],
        184: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, { 33: 33 }],
        185: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, { 33: 33 }],
        186: [function(t2, e3, n2) {
          var r = t2(33), i = t2(86);
          r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
        }, { 33: 33, 86: 86 }],
        187: [function(t2, e3, n2) {
          var r = t2(33), i = t2(87);
          r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
        }, { 33: 33, 87: 87 }],
        188: [function(t2, e3, n2) {
          var r = t2(33), i = t2(116), o = t2(4), a = t2(110), s = 1 .toFixed, u = Math.floor, c = [0, 0, 0, 0, 0, 0], l = "Number.toFixed: incorrect invocation!", f = function(t3, e4) {
            for (var n3 = -1, r2 = e4; ++n3 < 6; ) r2 += t3 * c[n3], c[n3] = r2 % 1e7, r2 = u(r2 / 1e7);
          }, h = function(t3) {
            for (var e4 = 6, n3 = 0; --e4 >= 0; ) n3 += c[e4], c[e4] = u(n3 / t3), n3 = n3 % t3 * 1e7;
          }, d = function() {
            for (var t3 = 6, e4 = ""; --t3 >= 0; ) if ("" !== e4 || 0 === t3 || 0 !== c[t3]) {
              var n3 = String(c[t3]);
              e4 = "" === e4 ? n3 : e4 + a.call("0", 7 - n3.length) + n3;
            }
            return e4;
          }, p = function(t3, e4, n3) {
            return 0 === e4 ? n3 : e4 % 2 == 1 ? p(t3, e4 - 1, n3 * t3) : p(t3 * t3, e4 / 2, n3);
          }, v = function(t3) {
            for (var e4 = 0, n3 = t3; n3 >= 4096; ) e4 += 12, n3 /= 4096;
            for (; n3 >= 2; ) e4 += 1, n3 /= 2;
            return e4;
          };
          r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !t2(35)(function() {
            s.call({});
          })), "Number", { toFixed: function(t3) {
            var e4, n3, r2, s2, u2 = o(this, l), c2 = i(t3), y = "", g = "0";
            if (c2 < 0 || c2 > 20) throw RangeError(l);
            if (u2 != u2) return "NaN";
            if (u2 <= -1e21 || u2 >= 1e21) return String(u2);
            if (u2 < 0 && (y = "-", u2 = -u2), u2 > 1e-21) if (e4 = v(u2 * p(2, 69, 1)) - 69, n3 = e4 < 0 ? u2 * p(2, -e4, 1) : u2 / p(2, e4, 1), n3 *= 4503599627370496, (e4 = 52 - e4) > 0) {
              for (f(0, n3), r2 = c2; r2 >= 7; ) f(1e7, 0), r2 -= 7;
              for (f(p(10, r2, 1), 0), r2 = e4 - 1; r2 >= 23; ) h(1 << 23), r2 -= 23;
              h(1 << r2), f(1, 1), h(2), g = d();
            } else f(0, n3), f(1 << -e4, 0), g = d() + a.call("0", c2);
            return c2 > 0 ? (s2 = g.length, g = y + (s2 <= c2 ? "0." + a.call("0", c2 - s2) + g : g.slice(0, s2 - c2) + "." + g.slice(s2 - c2))) : g = y + g, g;
          } });
        }, { 110: 110, 116: 116, 33: 33, 35: 35, 4: 4 }],
        189: [function(t2, e3, n2) {
          var r = t2(33), i = t2(35), o = t2(4), a = 1 .toPrecision;
          r(r.P + r.F * (i(function() {
            return "1" !== a.call(1, void 0);
          }) || !i(function() {
            a.call({});
          })), "Number", { toPrecision: function(t3) {
            var e4 = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t3 ? a.call(e4) : a.call(e4, t3);
          } });
        }, { 33: 33, 35: 35, 4: 4 }],
        190: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S + r.F, "Object", { assign: t2(70) });
        }, { 33: 33, 70: 70 }],
        191: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Object", { create: t2(71) });
        }, { 33: 33, 71: 71 }],
        192: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S + r.F * !t2(29), "Object", { defineProperties: t2(73) });
        }, { 29: 29, 33: 33, 73: 73 }],
        193: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S + r.F * !t2(29), "Object", { defineProperty: t2(72).f });
        }, { 29: 29, 33: 33, 72: 72 }],
        194: [function(t2, e3, n2) {
          var r = t2(51), i = t2(66).onFreeze;
          t2(83)("freeze", function(t3) {
            return function(e4) {
              return t3 && r(e4) ? t3(i(e4)) : e4;
            };
          });
        }, { 51: 51, 66: 66, 83: 83 }],
        195: [function(t2, e3, n2) {
          var r = t2(117), i = t2(75).f;
          t2(83)("getOwnPropertyDescriptor", function() {
            return function(t3, e4) {
              return i(r(t3), e4);
            };
          });
        }, { 117: 117, 75: 75, 83: 83 }],
        196: [function(t2, e3, n2) {
          t2(83)("getOwnPropertyNames", function() {
            return t2(76).f;
          });
        }, { 76: 76, 83: 83 }],
        197: [function(t2, e3, n2) {
          var r = t2(119), i = t2(79);
          t2(83)("getPrototypeOf", function() {
            return function(t3) {
              return i(r(t3));
            };
          });
        }, { 119: 119, 79: 79, 83: 83 }],
        198: [function(t2, e3, n2) {
          var r = t2(51);
          t2(83)("isExtensible", function(t3) {
            return function(e4) {
              return !!r(e4) && (!t3 || t3(e4));
            };
          });
        }, { 51: 51, 83: 83 }],
        199: [function(t2, e3, n2) {
          var r = t2(51);
          t2(83)("isFrozen", function(t3) {
            return function(e4) {
              return !r(e4) || !!t3 && t3(e4);
            };
          });
        }, { 51: 51, 83: 83 }],
        200: [function(t2, e3, n2) {
          var r = t2(51);
          t2(83)("isSealed", function(t3) {
            return function(e4) {
              return !r(e4) || !!t3 && t3(e4);
            };
          });
        }, { 51: 51, 83: 83 }],
        201: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Object", { is: t2(96) });
        }, { 33: 33, 96: 96 }],
        202: [function(t2, e3, n2) {
          var r = t2(119), i = t2(81);
          t2(83)("keys", function() {
            return function(t3) {
              return i(r(t3));
            };
          });
        }, { 119: 119, 81: 81, 83: 83 }],
        203: [function(t2, e3, n2) {
          var r = t2(51), i = t2(66).onFreeze;
          t2(83)("preventExtensions", function(t3) {
            return function(e4) {
              return t3 && r(e4) ? t3(i(e4)) : e4;
            };
          });
        }, { 51: 51, 66: 66, 83: 83 }],
        204: [function(t2, e3, n2) {
          var r = t2(51), i = t2(66).onFreeze;
          t2(83)("seal", function(t3) {
            return function(e4) {
              return t3 && r(e4) ? t3(i(e4)) : e4;
            };
          });
        }, { 51: 51, 66: 66, 83: 83 }],
        205: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Object", { setPrototypeOf: t2(99).set });
        }, { 33: 33, 99: 99 }],
        206: [function(t2, e3, n2) {
          var r = t2(17), i = {};
          i[t2(128)("toStringTag")] = "z", i + "" != "[object z]" && t2(94)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]";
          }, true);
        }, { 128: 128, 17: 17, 94: 94 }],
        207: [function(t2, e3, n2) {
          var r = t2(33), i = t2(86);
          r(r.G + r.F * (parseFloat != i), { parseFloat: i });
        }, { 33: 33, 86: 86 }],
        208: [function(t2, e3, n2) {
          var r = t2(33), i = t2(87);
          r(r.G + r.F * (parseInt != i), { parseInt: i });
        }, { 33: 33, 87: 87 }],
        209: [function(t2, e3, n2) {
          var r, i, o, a, s = t2(60), u = t2(40), c = t2(25), l = t2(17), f = t2(33), h = t2(51), d = t2(3), p = t2(6), v = t2(39), y = t2(104), g = t2(113).set, m = t2(68)(), b = t2(69), _ = t2(90), w = t2(91), S = u.TypeError, E = u.process, x = u.Promise, k = "process" == l(E), O = function() {
          }, A = i = b.f, M = !!function() {
            try {
              var e4 = x.resolve(1), n3 = (e4.constructor = {})[t2(128)("species")] = function(t3) {
                t3(O, O);
              };
              return (k || "function" == typeof PromiseRejectionEvent) && e4.then(O) instanceof n3;
            } catch (t3) {
            }
          }(), P = s ? function(t3, e4) {
            return t3 === e4 || t3 === x && e4 === a;
          } : function(t3, e4) {
            return t3 === e4;
          }, C = function(t3) {
            var e4;
            return !(!h(t3) || "function" != typeof (e4 = t3.then)) && e4;
          }, j = function(t3, e4) {
            if (!t3._n) {
              t3._n = true;
              var n3 = t3._c;
              m(function() {
                for (var r2 = t3._v, i2 = 1 == t3._s, o2 = 0; n3.length > o2; ) !function(e5) {
                  var n4, o3, a2 = i2 ? e5.ok : e5.fail, s2 = e5.resolve, u2 = e5.reject, c2 = e5.domain;
                  try {
                    a2 ? (i2 || (2 == t3._h && I(t3), t3._h = 1), true === a2 ? n4 = r2 : (c2 && c2.enter(), n4 = a2(r2), c2 && c2.exit()), n4 === e5.promise ? u2(S("Promise-chain cycle")) : (o3 = C(n4)) ? o3.call(n4, s2, u2) : s2(n4)) : u2(r2);
                  } catch (t4) {
                    u2(t4);
                  }
                }(n3[o2++]);
                t3._c = [], t3._n = false, e4 && !t3._h && L(t3);
              });
            }
          }, L = function(t3) {
            g.call(u, function() {
              var e4, n3, r2, i2 = t3._v, o2 = T(t3);
              if (o2 && (e4 = _(function() {
                k ? E.emit("unhandledRejection", i2, t3) : (n3 = u.onunhandledrejection) ? n3({ promise: t3, reason: i2 }) : (r2 = u.console) && r2.error && r2.error("Unhandled promise rejection", i2);
              }), t3._h = k || T(t3) ? 2 : 1), t3._a = void 0, o2 && e4.e) throw e4.v;
            });
          }, T = function(t3) {
            if (1 == t3._h) return false;
            for (var e4, n3 = t3._a || t3._c, r2 = 0; n3.length > r2; ) if (e4 = n3[r2++], e4.fail || !T(e4.promise)) return false;
            return true;
          }, I = function(t3) {
            g.call(u, function() {
              var e4;
              k ? E.emit("rejectionHandled", t3) : (e4 = u.onrejectionhandled) && e4({ promise: t3, reason: t3._v });
            });
          }, N = function(t3) {
            var e4 = this;
            e4._d || (e4._d = true, e4 = e4._w || e4, e4._v = t3, e4._s = 2, e4._a || (e4._a = e4._c.slice()), j(e4, true));
          }, F = function(t3) {
            var e4, n3 = this;
            if (!n3._d) {
              n3._d = true, n3 = n3._w || n3;
              try {
                if (n3 === t3) throw S("Promise can't be resolved itself");
                (e4 = C(t3)) ? m(function() {
                  var r2 = { _w: n3, _d: false };
                  try {
                    e4.call(t3, c(F, r2, 1), c(N, r2, 1));
                  } catch (t4) {
                    N.call(r2, t4);
                  }
                }) : (n3._v = t3, n3._s = 1, j(n3, false));
              } catch (t4) {
                N.call({ _w: n3, _d: false }, t4);
              }
            }
          };
          M || (x = function(t3) {
            p(this, x, "Promise", "_h"), d(t3), r.call(this);
            try {
              t3(c(F, this, 1), c(N, this, 1));
            } catch (t4) {
              N.call(this, t4);
            }
          }, r = function(t3) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }, r.prototype = t2(93)(x.prototype, { then: function(t3, e4) {
            var n3 = A(y(this, x));
            return n3.ok = "function" != typeof t3 || t3, n3.fail = "function" == typeof e4 && e4, n3.domain = k ? E.domain : void 0, this._c.push(n3), this._a && this._a.push(n3), this._s && j(this, false), n3.promise;
          }, catch: function(t3) {
            return this.then(void 0, t3);
          } }), o = function() {
            var t3 = new r();
            this.promise = t3, this.resolve = c(F, t3, 1), this.reject = c(N, t3, 1);
          }, b.f = A = function(t3) {
            return P(x, t3) ? new o(t3) : i(t3);
          }), f(f.G + f.W + f.F * !M, { Promise: x }), t2(101)(x, "Promise"), t2(100)("Promise"), a = t2(23).Promise, f(f.S + f.F * !M, "Promise", { reject: function(t3) {
            var e4 = A(this);
            return (0, e4.reject)(t3), e4.promise;
          } }), f(f.S + f.F * (s || !M), "Promise", { resolve: function(t3) {
            return t3 instanceof x && P(t3.constructor, this) ? t3 : w(this, t3);
          } }), f(f.S + f.F * !(M && t2(56)(function(t3) {
            x.all(t3).catch(O);
          })), "Promise", { all: function(t3) {
            var e4 = this, n3 = A(e4), r2 = n3.resolve, i2 = n3.reject, o2 = _(function() {
              var n4 = [], o3 = 0, a2 = 1;
              v(t3, false, function(t4) {
                var s2 = o3++, u2 = false;
                n4.push(void 0), a2++, e4.resolve(t4).then(function(t5) {
                  u2 || (u2 = true, n4[s2] = t5, --a2 || r2(n4));
                }, i2);
              }), --a2 || r2(n4);
            });
            return o2.e && i2(o2.v), n3.promise;
          }, race: function(t3) {
            var e4 = this, n3 = A(e4), r2 = n3.reject, i2 = _(function() {
              v(t3, false, function(t4) {
                e4.resolve(t4).then(n3.resolve, r2);
              });
            });
            return i2.e && r2(i2.v), n3.promise;
          } });
        }, { 100: 100, 101: 101, 104: 104, 113: 113, 128: 128, 17: 17, 23: 23, 25: 25, 3: 3, 33: 33, 39: 39, 40: 40, 51: 51, 56: 56, 6: 6, 60: 60, 68: 68, 69: 69, 90: 90, 91: 91, 93: 93 }],
        210: [function(t2, e3, n2) {
          var r = t2(33), i = t2(3), o = t2(7), a = (t2(40).Reflect || {}).apply, s = Function.apply;
          r(r.S + r.F * !t2(35)(function() {
            a(function() {
            });
          }), "Reflect", { apply: function(t3, e4, n3) {
            var r2 = i(t3), u = o(n3);
            return a ? a(r2, e4, u) : s.call(r2, e4, u);
          } });
        }, { 3: 3, 33: 33, 35: 35, 40: 40, 7: 7 }],
        211: [function(t2, e3, n2) {
          var r = t2(33), i = t2(71), o = t2(3), a = t2(7), s = t2(51), u = t2(35), c = t2(16), l = (t2(40).Reflect || {}).construct, f = u(function() {
            function t3() {
            }
            return !(l(function() {
            }, [], t3) instanceof t3);
          }), h = !u(function() {
            l(function() {
            });
          });
          r(r.S + r.F * (f || h), "Reflect", { construct: function(t3, e4) {
            o(t3), a(e4);
            var n3 = arguments.length < 3 ? t3 : o(arguments[2]);
            if (h && !f) return l(t3, e4, n3);
            if (t3 == n3) {
              switch (e4.length) {
                case 0:
                  return new t3();
                case 1:
                  return new t3(e4[0]);
                case 2:
                  return new t3(e4[0], e4[1]);
                case 3:
                  return new t3(e4[0], e4[1], e4[2]);
                case 4:
                  return new t3(e4[0], e4[1], e4[2], e4[3]);
              }
              var r2 = [null];
              return r2.push.apply(r2, e4), new (c.apply(t3, r2))();
            }
            var u2 = n3.prototype, d = i(s(u2) ? u2 : Object.prototype), p = Function.apply.call(t3, d, e4);
            return s(p) ? p : d;
          } });
        }, { 16: 16, 3: 3, 33: 33, 35: 35, 40: 40, 51: 51, 7: 7, 71: 71 }],
        212: [function(t2, e3, n2) {
          var r = t2(72), i = t2(33), o = t2(7), a = t2(120);
          i(i.S + i.F * t2(35)(function() {
            Reflect.defineProperty(r.f({}, 1, {
              value: 1
            }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(t3, e4, n3) {
            o(t3), e4 = a(e4, true), o(n3);
            try {
              return r.f(t3, e4, n3), true;
            } catch (t4) {
              return false;
            }
          } });
        }, { 120: 120, 33: 33, 35: 35, 7: 7, 72: 72 }],
        213: [function(t2, e3, n2) {
          var r = t2(33), i = t2(75).f, o = t2(7);
          r(r.S, "Reflect", { deleteProperty: function(t3, e4) {
            var n3 = i(o(t3), e4);
            return !(n3 && !n3.configurable) && delete t3[e4];
          } });
        }, { 33: 33, 7: 7, 75: 75 }],
        214: [function(t2, e3, n2) {
          var r = t2(33), i = t2(7), o = function(t3) {
            this._t = i(t3), this._i = 0;
            var e4, n3 = this._k = [];
            for (e4 in t3) n3.push(e4);
          };
          t2(54)(o, "Object", function() {
            var t3, e4 = this, n3 = e4._k;
            do
              if (e4._i >= n3.length) return { value: void 0, done: true };
            while (!((t3 = n3[e4._i++]) in e4._t));
            return { value: t3, done: false };
          }), r(r.S, "Reflect", { enumerate: function(t3) {
            return new o(t3);
          } });
        }, { 33: 33, 54: 54, 7: 7 }],
        215: [function(t2, e3, n2) {
          var r = t2(75), i = t2(33), o = t2(7);
          i(i.S, "Reflect", { getOwnPropertyDescriptor: function(t3, e4) {
            return r.f(o(t3), e4);
          } });
        }, { 33: 33, 7: 7, 75: 75 }],
        216: [function(t2, e3, n2) {
          var r = t2(33), i = t2(79), o = t2(7);
          r(r.S, "Reflect", { getPrototypeOf: function(t3) {
            return i(o(t3));
          } });
        }, { 33: 33, 7: 7, 79: 79 }],
        217: [function(t2, e3, n2) {
          function r(t3, e4) {
            var n3, s2, l = arguments.length < 3 ? t3 : arguments[2];
            return c(t3) === l ? t3[e4] : (n3 = i.f(t3, e4)) ? a(n3, "value") ? n3.value : void 0 !== n3.get ? n3.get.call(l) : void 0 : u(s2 = o(t3)) ? r(s2, e4, l) : void 0;
          }
          var i = t2(75), o = t2(79), a = t2(41), s = t2(33), u = t2(51), c = t2(7);
          s(s.S, "Reflect", { get: r });
        }, { 33: 33, 41: 41, 51: 51, 7: 7, 75: 75, 79: 79 }],
        218: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Reflect", { has: function(t3, e4) {
            return e4 in t3;
          } });
        }, { 33: 33 }],
        219: [function(t2, e3, n2) {
          var r = t2(33), i = t2(7), o = Object.isExtensible;
          r(r.S, "Reflect", { isExtensible: function(t3) {
            return i(t3), !o || o(t3);
          } });
        }, { 33: 33, 7: 7 }],
        220: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Reflect", { ownKeys: t2(85) });
        }, { 33: 33, 85: 85 }],
        221: [function(t2, e3, n2) {
          var r = t2(33), i = t2(7), o = Object.preventExtensions;
          r(r.S, "Reflect", { preventExtensions: function(t3) {
            i(t3);
            try {
              return o && o(t3), true;
            } catch (t4) {
              return false;
            }
          } });
        }, { 33: 33, 7: 7 }],
        222: [function(t2, e3, n2) {
          var r = t2(33), i = t2(99);
          i && r(r.S, "Reflect", { setPrototypeOf: function(t3, e4) {
            i.check(t3, e4);
            try {
              return i.set(t3, e4), true;
            } catch (t4) {
              return false;
            }
          } });
        }, { 33: 33, 99: 99 }],
        223: [function(t2, e3, n2) {
          function r(t3, e4, n3) {
            var u2, h, d = arguments.length < 4 ? t3 : arguments[3], p = o.f(l(t3), e4);
            if (!p) {
              if (f(h = a(t3))) return r(h, e4, n3, d);
              p = c(0);
            }
            return s(p, "value") ? !(false === p.writable || !f(d) || (u2 = o.f(d, e4) || c(0), u2.value = n3, i.f(d, e4, u2), 0)) : void 0 !== p.set && (p.set.call(d, n3), true);
          }
          var i = t2(72), o = t2(75), a = t2(79), s = t2(41), u = t2(33), c = t2(92), l = t2(7), f = t2(51);
          u(u.S, "Reflect", { set: r });
        }, { 33: 33, 41: 41, 51: 51, 7: 7, 72: 72, 75: 75, 79: 79, 92: 92 }],
        224: [function(t2, e3, n2) {
          var r = t2(40), i = t2(45), o = t2(72).f, a = t2(77).f, s = t2(52), u = t2(37), c = r.RegExp, l = c, f = c.prototype, h = /a/g, d = /a/g, p = new c(h) !== h;
          if (t2(29) && (!p || t2(35)(function() {
            return d[t2(128)("match")] = false, c(h) != h || c(d) == d || "/a/i" != c(h, "i");
          }))) {
            c = function(t3, e4) {
              var n3 = this instanceof c, r2 = s(t3), o2 = void 0 === e4;
              return !n3 && r2 && t3.constructor === c && o2 ? t3 : i(p ? new l(r2 && !o2 ? t3.source : t3, e4) : l((r2 = t3 instanceof c) ? t3.source : t3, r2 && o2 ? u.call(t3) : e4), n3 ? this : f, c);
            };
            for (var v = a(l), y = 0; v.length > y; ) !function(t3) {
              t3 in c || o(c, t3, { configurable: true, get: function() {
                return l[t3];
              }, set: function(e4) {
                l[t3] = e4;
              } });
            }(v[y++]);
            f.constructor = c, c.prototype = f, t2(94)(r, "RegExp", c);
          }
          t2(100)("RegExp");
        }, { 100: 100, 128: 128, 29: 29, 35: 35, 37: 37, 40: 40, 45: 45, 52: 52, 72: 72, 77: 77, 94: 94 }],
        225: [function(t2, e3, n2) {
          t2(29) && "g" != /./g.flags && t2(72).f(RegExp.prototype, "flags", { configurable: true, get: t2(37) });
        }, { 29: 29, 37: 37, 72: 72 }],
        226: [function(t2, e3, n2) {
          t2(36)("match", 1, function(t3, e4, n3) {
            return [function(n4) {
              var r = t3(this), i = void 0 == n4 ? void 0 : n4[e4];
              return void 0 !== i ? i.call(n4, r) : new RegExp(n4)[e4](String(r));
            }, n3];
          });
        }, { 36: 36 }],
        227: [function(t2, e3, n2) {
          t2(36)("replace", 2, function(t3, e4, n3) {
            return [function(r, i) {
              var o = t3(this), a = void 0 == r ? void 0 : r[e4];
              return void 0 !== a ? a.call(r, o, i) : n3.call(String(o), r, i);
            }, n3];
          });
        }, { 36: 36 }],
        228: [function(t2, e3, n2) {
          t2(36)("search", 1, function(t3, e4, n3) {
            return [function(n4) {
              var r = t3(this), i = void 0 == n4 ? void 0 : n4[e4];
              return void 0 !== i ? i.call(n4, r) : new RegExp(n4)[e4](String(r));
            }, n3];
          });
        }, { 36: 36 }],
        229: [function(t2, e3, n2) {
          t2(36)("split", 2, function(e4, n3, r) {
            var i = t2(52), o = r, a = [].push, s = "length";
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[s] || 2 != "ab".split(/(?:ab)*/)[s] || 4 != ".".split(/(.?)(.?)/)[s] || ".".split(/()()/)[s] > 1 || "".split(/.?/)[s]) {
              var u = void 0 === /()??/.exec("")[1];
              r = function(t3, e5) {
                var n4 = String(this);
                if (void 0 === t3 && 0 === e5) return [];
                if (!i(t3)) return o.call(n4, t3, e5);
                var r2, c, l, f, h, d = [], p = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), v = 0, y = void 0 === e5 ? 4294967295 : e5 >>> 0, g = new RegExp(t3.source, p + "g");
                for (u || (r2 = new RegExp("^" + g.source + "$(?!\\s)", p)); (c = g.exec(n4)) && !((l = c.index + c[0][s]) > v && (d.push(n4.slice(v, c.index)), !u && c[s] > 1 && c[0].replace(r2, function() {
                  for (h = 1; h < arguments[s] - 2; h++) void 0 === arguments[h] && (c[h] = void 0);
                }), c[s] > 1 && c.index < n4[s] && a.apply(d, c.slice(1)), f = c[0][s], v = l, d[s] >= y)); ) g.lastIndex === c.index && g.lastIndex++;
                return v === n4[s] ? !f && g.test("") || d.push("") : d.push(n4.slice(v)), d[s] > y ? d.slice(0, y) : d;
              };
            } else "0".split(void 0, 0)[s] && (r = function(t3, e5) {
              return void 0 === t3 && 0 === e5 ? [] : o.call(this, t3, e5);
            });
            return [function(t3, i2) {
              var o2 = e4(this), a2 = void 0 == t3 ? void 0 : t3[n3];
              return void 0 !== a2 ? a2.call(t3, o2, i2) : r.call(String(o2), t3, i2);
            }, r];
          });
        }, { 36: 36, 52: 52 }],
        230: [function(t2, e3, n2) {
          t2(225);
          var r = t2(7), i = t2(37), o = t2(29), a = /./.toString, s = function(e4) {
            t2(94)(RegExp.prototype, "toString", e4, true);
          };
          t2(35)(function() {
            return "/a/b" != a.call({ source: "a", flags: "b" });
          }) ? s(function() {
            var t3 = r(this);
            return "/".concat(t3.source, "/", "flags" in t3 ? t3.flags : !o && t3 instanceof RegExp ? i.call(t3) : void 0);
          }) : "toString" != a.name && s(function() {
            return a.call(this);
          });
        }, { 225: 225, 29: 29, 35: 35, 37: 37, 7: 7, 94: 94 }],
        231: [function(t2, e3, n2) {
          var r = t2(19), i = t2(125);
          e3.exports = t2(22)("Set", function(t3) {
            return function() {
              return t3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t3) {
            return r.def(i(this, "Set"), t3 = 0 === t3 ? 0 : t3, t3);
          } }, r);
        }, { 125: 125, 19: 19, 22: 22 }],
        232: [function(t2, e3, n2) {
          t2(108)("anchor", function(t3) {
            return function(e4) {
              return t3(this, "a", "name", e4);
            };
          });
        }, { 108: 108 }],
        233: [function(t2, e3, n2) {
          t2(108)("big", function(t3) {
            return function() {
              return t3(this, "big", "", "");
            };
          });
        }, { 108: 108 }],
        234: [function(t2, e3, n2) {
          t2(108)("blink", function(t3) {
            return function() {
              return t3(this, "blink", "", "");
            };
          });
        }, { 108: 108 }],
        235: [function(t2, e3, n2) {
          t2(108)("bold", function(t3) {
            return function() {
              return t3(this, "b", "", "");
            };
          });
        }, { 108: 108 }],
        236: [function(t2, e3, n2) {
          var r = t2(33), i = t2(106)(false);
          r(r.P, "String", { codePointAt: function(t3) {
            return i(this, t3);
          } });
        }, { 106: 106, 33: 33 }],
        237: [function(t2, e3, n2) {
          var r = t2(33), i = t2(118), o = t2(107), a = "".endsWith;
          r(r.P + r.F * t2(34)("endsWith"), "String", { endsWith: function(t3) {
            var e4 = o(this, t3, "endsWith"), n3 = arguments.length > 1 ? arguments[1] : void 0, r2 = i(e4.length), s = void 0 === n3 ? r2 : Math.min(i(n3), r2), u = String(t3);
            return a ? a.call(e4, u, s) : e4.slice(s - u.length, s) === u;
          } });
        }, { 107: 107, 118: 118, 33: 33, 34: 34 }],
        238: [function(t2, e3, n2) {
          t2(108)("fixed", function(t3) {
            return function() {
              return t3(this, "tt", "", "");
            };
          });
        }, { 108: 108 }],
        239: [function(t2, e3, n2) {
          t2(108)("fontcolor", function(t3) {
            return function(e4) {
              return t3(this, "font", "color", e4);
            };
          });
        }, { 108: 108 }],
        240: [function(t2, e3, n2) {
          t2(108)("fontsize", function(t3) {
            return function(e4) {
              return t3(this, "font", "size", e4);
            };
          });
        }, { 108: 108 }],
        241: [function(t2, e3, n2) {
          var r = t2(33), i = t2(114), o = String.fromCharCode, a = String.fromCodePoint;
          r(r.S + r.F * (!!a && 1 != a.length), "String", { fromCodePoint: function(t3) {
            for (var e4, n3 = [], r2 = arguments.length, a2 = 0; r2 > a2; ) {
              if (e4 = +arguments[a2++], i(e4, 1114111) !== e4) throw RangeError(e4 + " is not a valid code point");
              n3.push(e4 < 65536 ? o(e4) : o(55296 + ((e4 -= 65536) >> 10), e4 % 1024 + 56320));
            }
            return n3.join("");
          } });
        }, { 114: 114, 33: 33 }],
        242: [function(t2, e3, n2) {
          var r = t2(33), i = t2(107);
          r(r.P + r.F * t2(34)("includes"), "String", { includes: function(t3) {
            return !!~i(this, t3, "includes").indexOf(t3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, { 107: 107, 33: 33, 34: 34 }],
        243: [function(t2, e3, n2) {
          t2(108)("italics", function(t3) {
            return function() {
              return t3(this, "i", "", "");
            };
          });
        }, { 108: 108 }],
        244: [function(t2, e3, n2) {
          var r = t2(106)(true);
          t2(55)(String, "String", function(t3) {
            this._t = String(t3), this._i = 0;
          }, function() {
            var t3, e4 = this._t, n3 = this._i;
            return n3 >= e4.length ? { value: void 0, done: true } : (t3 = r(e4, n3), this._i += t3.length, { value: t3, done: false });
          });
        }, { 106: 106, 55: 55 }],
        245: [function(t2, e3, n2) {
          t2(108)("link", function(t3) {
            return function(e4) {
              return t3(this, "a", "href", e4);
            };
          });
        }, { 108: 108 }],
        246: [function(t2, e3, n2) {
          var r = t2(33), i = t2(117), o = t2(118);
          r(r.S, "String", { raw: function(t3) {
            for (var e4 = i(t3.raw), n3 = o(e4.length), r2 = arguments.length, a = [], s = 0; n3 > s; ) a.push(String(e4[s++])), s < r2 && a.push(String(arguments[s]));
            return a.join("");
          } });
        }, { 117: 117, 118: 118, 33: 33 }],
        247: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P, "String", { repeat: t2(110) });
        }, { 110: 110, 33: 33 }],
        248: [function(t2, e3, n2) {
          t2(108)("small", function(t3) {
            return function() {
              return t3(this, "small", "", "");
            };
          });
        }, { 108: 108 }],
        249: [function(t2, e3, n2) {
          var r = t2(33), i = t2(118), o = t2(107), a = "".startsWith;
          r(r.P + r.F * t2(34)("startsWith"), "String", { startsWith: function(t3) {
            var e4 = o(this, t3, "startsWith"), n3 = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e4.length)), r2 = String(t3);
            return a ? a.call(e4, r2, n3) : e4.slice(n3, n3 + r2.length) === r2;
          } });
        }, { 107: 107, 118: 118, 33: 33, 34: 34 }],
        250: [function(t2, e3, n2) {
          t2(108)("strike", function(t3) {
            return function() {
              return t3(this, "strike", "", "");
            };
          });
        }, { 108: 108 }],
        251: [function(t2, e3, n2) {
          t2(108)("sub", function(t3) {
            return function() {
              return t3(this, "sub", "", "");
            };
          });
        }, { 108: 108 }],
        252: [function(t2, e3, n2) {
          t2(108)("sup", function(t3) {
            return function() {
              return t3(this, "sup", "", "");
            };
          });
        }, { 108: 108 }],
        253: [function(t2, e3, n2) {
          t2(111)("trim", function(t3) {
            return function() {
              return t3(this, 3);
            };
          });
        }, { 111: 111 }],
        254: [function(t2, e3, n2) {
          var r = t2(40), i = t2(41), o = t2(29), a = t2(33), s = t2(94), u = t2(66).KEY, c = t2(35), l = t2(103), f = t2(101), h = t2(124), d = t2(128), p = t2(127), v = t2(126), y = t2(59), g = t2(32), m = t2(49), b = t2(7), _ = t2(117), w = t2(120), S = t2(92), E = t2(71), x = t2(76), k = t2(75), O = t2(72), A = t2(81), M = k.f, P = O.f, C = x.f, j = r.Symbol, L = r.JSON, T = L && L.stringify, I = d("_hidden"), N = d("toPrimitive"), F = {}.propertyIsEnumerable, R = l("symbol-registry"), D = l("symbols"), B = l("op-symbols"), q = Object.prototype, W = "function" == typeof j, H = r.QObject, V = !H || !H.prototype || !H.prototype.findChild, U = o && c(function() {
            return 7 != E(P({}, "a", { get: function() {
              return P(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(t3, e4, n3) {
            var r2 = M(q, e4);
            r2 && delete q[e4], P(t3, e4, n3), r2 && t3 !== q && P(q, e4, r2);
          } : P, z = function(t3) {
            var e4 = D[t3] = E(j.prototype);
            return e4._k = t3, e4;
          }, G = W && "symbol" == typeof j.iterator ? function(t3) {
            return "symbol" == typeof t3;
          } : function(t3) {
            return t3 instanceof j;
          }, Q = function(t3, e4, n3) {
            return t3 === q && Q(B, e4, n3), b(t3), e4 = w(e4, true), b(n3), i(D, e4) ? (n3.enumerable ? (i(t3, I) && t3[I][e4] && (t3[I][e4] = false), n3 = E(n3, { enumerable: S(0, false) })) : (i(t3, I) || P(t3, I, S(1, {})), t3[I][e4] = true), U(t3, e4, n3)) : P(t3, e4, n3);
          }, Y = function(t3, e4) {
            b(t3);
            for (var n3, r2 = g(e4 = _(e4)), i2 = 0, o2 = r2.length; o2 > i2; ) Q(t3, n3 = r2[i2++], e4[n3]);
            return t3;
          }, J = function(t3, e4) {
            return void 0 === e4 ? E(t3) : Y(E(t3), e4);
          }, K = function(t3) {
            var e4 = F.call(this, t3 = w(t3, true));
            return !(this === q && i(D, t3) && !i(B, t3)) && (!(e4 || !i(this, t3) || !i(D, t3) || i(this, I) && this[I][t3]) || e4);
          }, X = function(t3, e4) {
            if (t3 = _(t3), e4 = w(e4, true), t3 !== q || !i(D, e4) || i(B, e4)) {
              var n3 = M(t3, e4);
              return !n3 || !i(D, e4) || i(t3, I) && t3[I][e4] || (n3.enumerable = true), n3;
            }
          }, $ = function(t3) {
            for (var e4, n3 = C(_(t3)), r2 = [], o2 = 0; n3.length > o2; ) i(D, e4 = n3[o2++]) || e4 == I || e4 == u || r2.push(e4);
            return r2;
          }, Z = function(t3) {
            for (var e4, n3 = t3 === q, r2 = C(n3 ? B : _(t3)), o2 = [], a2 = 0; r2.length > a2; ) !i(D, e4 = r2[a2++]) || n3 && !i(q, e4) || o2.push(D[e4]);
            return o2;
          };
          W || (j = function() {
            if (this instanceof j) throw TypeError("Symbol is not a constructor!");
            var t3 = h(arguments.length > 0 ? arguments[0] : void 0), e4 = function(n3) {
              this === q && e4.call(B, n3), i(this, I) && i(this[I], t3) && (this[I][t3] = false), U(this, t3, S(1, n3));
            };
            return o && V && U(q, t3, { configurable: true, set: e4 }), z(t3);
          }, s(j.prototype, "toString", function() {
            return this._k;
          }), k.f = X, O.f = Q, t2(77).f = x.f = $, t2(82).f = K, t2(78).f = Z, o && !t2(60) && s(q, "propertyIsEnumerable", K, true), p.f = function(t3) {
            return z(d(t3));
          }), a(a.G + a.W + a.F * !W, { Symbol: j });
          for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et; ) d(tt[et++]);
          for (var nt = A(d.store), rt = 0; nt.length > rt; ) v(nt[rt++]);
          a(a.S + a.F * !W, "Symbol", { for: function(t3) {
            return i(R, t3 += "") ? R[t3] : R[t3] = j(t3);
          }, keyFor: function(t3) {
            if (G(t3)) return y(R, t3);
            throw TypeError(t3 + " is not a symbol!");
          }, useSetter: function() {
            V = true;
          }, useSimple: function() {
            V = false;
          } }), a(a.S + a.F * !W, "Object", { create: J, defineProperty: Q, defineProperties: Y, getOwnPropertyDescriptor: X, getOwnPropertyNames: $, getOwnPropertySymbols: Z }), L && a(a.S + a.F * (!W || c(function() {
            var t3 = j();
            return "[null]" != T([t3]) || "{}" != T({ a: t3 }) || "{}" != T(Object(t3));
          })), "JSON", { stringify: function(t3) {
            if (void 0 !== t3 && !G(t3)) {
              for (var e4, n3, r2 = [t3], i2 = 1; arguments.length > i2; ) r2.push(arguments[i2++]);
              return e4 = r2[1], "function" == typeof e4 && (n3 = e4), !n3 && m(e4) || (e4 = function(t4, e5) {
                if (n3 && (e5 = n3.call(this, t4, e5)), !G(e5)) return e5;
              }), r2[1] = e4, T.apply(L, r2);
            }
          } }), j.prototype[N] || t2(42)(j.prototype, N, j.prototype.valueOf), f(j, "Symbol"), f(Math, "Math", true), f(r.JSON, "JSON", true);
        }, { 101: 101, 103: 103, 117: 117, 120: 120, 124: 124, 126: 126, 127: 127, 128: 128, 29: 29, 32: 32, 33: 33, 35: 35, 40: 40, 41: 41, 42: 42, 49: 49, 59: 59, 60: 60, 66: 66, 7: 7, 71: 71, 72: 72, 75: 75, 76: 76, 77: 77, 78: 78, 81: 81, 82: 82, 92: 92, 94: 94 }],
        255: [function(t2, e3, n2) {
          var r = t2(33), i = t2(123), o = t2(122), a = t2(7), s = t2(114), u = t2(118), c = t2(51), l = t2(40).ArrayBuffer, f = t2(104), h = o.ArrayBuffer, d = o.DataView, p = i.ABV && l.isView, v = h.prototype.slice, y = i.VIEW;
          r(r.G + r.W + r.F * (l !== h), { ArrayBuffer: h }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", { isView: function(t3) {
            return p && p(t3) || c(t3) && y in t3;
          } }), r(r.P + r.U + r.F * t2(35)(function() {
            return !new h(2).slice(1, void 0).byteLength;
          }), "ArrayBuffer", { slice: function(t3, e4) {
            if (void 0 !== v && void 0 === e4) return v.call(a(this), t3);
            for (var n3 = a(this).byteLength, r2 = s(t3, n3), i2 = s(void 0 === e4 ? n3 : e4, n3), o2 = new (f(this, h))(u(i2 - r2)), c2 = new d(this), l2 = new d(o2), p2 = 0; r2 < i2; ) l2.setUint8(p2++, c2.getUint8(r2++));
            return o2;
          } }), t2(100)("ArrayBuffer");
        }, { 100: 100, 104: 104, 114: 114, 118: 118, 122: 122, 123: 123, 33: 33, 35: 35, 40: 40, 51: 51, 7: 7 }],
        256: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.G + r.W + r.F * !t2(123).ABV, { DataView: t2(122).DataView });
        }, { 122: 122, 123: 123, 33: 33 }],
        257: [function(t2, e3, n2) {
          t2(121)("Float32", 4, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        258: [function(t2, e3, n2) {
          t2(121)("Float64", 8, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        259: [function(t2, e3, n2) {
          t2(121)("Int16", 2, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        260: [function(t2, e3, n2) {
          t2(121)("Int32", 4, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        261: [function(t2, e3, n2) {
          t2(121)("Int8", 1, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        262: [function(t2, e3, n2) {
          t2(121)("Uint16", 2, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        263: [function(t2, e3, n2) {
          t2(121)("Uint32", 4, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        264: [function(t2, e3, n2) {
          t2(121)("Uint8", 1, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          });
        }, { 121: 121 }],
        265: [function(t2, e3, n2) {
          t2(121)("Uint8", 1, function(t3) {
            return function(e4, n3, r) {
              return t3(this, e4, n3, r);
            };
          }, true);
        }, { 121: 121 }],
        266: [function(t2, e3, n2) {
          var r, i = t2(12)(0), o = t2(94), a = t2(66), s = t2(70), u = t2(21), c = t2(51), l = t2(35), f = t2(125), h = a.getWeak, d = Object.isExtensible, p = u.ufstore, v = {}, y = function(t3) {
            return function() {
              return t3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, g = { get: function(t3) {
            if (c(t3)) {
              var e4 = h(t3);
              return true === e4 ? p(f(this, "WeakMap")).get(t3) : e4 ? e4[this._i] : void 0;
            }
          }, set: function(t3, e4) {
            return u.def(f(this, "WeakMap"), t3, e4);
          } }, m = e3.exports = t2(22)("WeakMap", y, g, u, true, true);
          l(function() {
            return 7 != new m().set((Object.freeze || Object)(v), 7).get(v);
          }) && (r = u.getConstructor(y, "WeakMap"), s(r.prototype, g), a.NEED = true, i(["delete", "has", "get", "set"], function(t3) {
            var e4 = m.prototype, n3 = e4[t3];
            o(e4, t3, function(e5, i2) {
              if (c(e5) && !d(e5)) {
                this._f || (this._f = new r());
                var o2 = this._f[t3](e5, i2);
                return "set" == t3 ? this : o2;
              }
              return n3.call(this, e5, i2);
            });
          }));
        }, { 12: 12, 125: 125, 21: 21, 22: 22, 35: 35, 51: 51, 66: 66, 70: 70, 94: 94 }],
        267: [function(t2, e3, n2) {
          var r = t2(21), i = t2(125);
          t2(22)("WeakSet", function(t3) {
            return function() {
              return t3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(t3) {
            return r.def(i(this, "WeakSet"), t3, true);
          } }, r, false, true);
        }, { 125: 125, 21: 21, 22: 22 }],
        268: [function(t2, e3, n2) {
          var r = t2(33), i = t2(38), o = t2(119), a = t2(118), s = t2(3), u = t2(15);
          r(r.P, "Array", { flatMap: function(t3) {
            var e4, n3, r2 = o(this);
            return s(t3), e4 = a(r2.length), n3 = u(r2, 0), i(n3, r2, r2, e4, 0, 1, t3, arguments[1]), n3;
          } }), t2(5)("flatMap");
        }, { 118: 118, 119: 119, 15: 15, 3: 3, 33: 33, 38: 38, 5: 5 }],
        269: [function(t2, e3, n2) {
          var r = t2(33), i = t2(38), o = t2(119), a = t2(118), s = t2(116), u = t2(15);
          r(r.P, "Array", { flatten: function() {
            var t3 = arguments[0], e4 = o(this), n3 = a(e4.length), r2 = u(e4, 0);
            return i(r2, e4, e4, n3, 0, void 0 === t3 ? 1 : s(t3)), r2;
          } }), t2(5)("flatten");
        }, { 116: 116, 118: 118, 119: 119, 15: 15, 33: 33, 38: 38, 5: 5 }],
        270: [function(t2, e3, n2) {
          var r = t2(33), i = t2(11)(true);
          r(r.P, "Array", { includes: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } }), t2(5)("includes");
        }, { 11: 11, 33: 33, 5: 5 }],
        271: [function(t2, e3, n2) {
          var r = t2(33), i = t2(68)(), o = t2(40).process, a = "process" == t2(18)(o);
          r(r.G, { asap: function(t3) {
            var e4 = a && o.domain;
            i(e4 ? e4.bind(t3) : t3);
          } });
        }, { 18: 18, 33: 33, 40: 40, 68: 68 }],
        272: [function(t2, e3, n2) {
          var r = t2(33), i = t2(18);
          r(r.S, "Error", { isError: function(t3) {
            return "Error" === i(t3);
          } });
        }, { 18: 18, 33: 33 }],
        273: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.G, { global: t2(40) });
        }, { 33: 33, 40: 40 }],
        274: [function(t2, e3, n2) {
          t2(97)("Map");
        }, { 97: 97 }],
        275: [function(t2, e3, n2) {
          t2(98)("Map");
        }, { 98: 98 }],
        276: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P + r.R, "Map", { toJSON: t2(20)("Map") });
        }, { 20: 20, 33: 33 }],
        277: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { clamp: function(t3, e4, n3) {
            return Math.min(n3, Math.max(e4, t3));
          } });
        }, { 33: 33 }],
        278: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { DEG_PER_RAD: Math.PI / 180 });
        }, { 33: 33 }],
        279: [function(t2, e3, n2) {
          var r = t2(33), i = 180 / Math.PI;
          r(r.S, "Math", { degrees: function(t3) {
            return t3 * i;
          } });
        }, { 33: 33 }],
        280: [function(t2, e3, n2) {
          var r = t2(33), i = t2(64), o = t2(62);
          r(r.S, "Math", { fscale: function(t3, e4, n3, r2, a) {
            return o(i(t3, e4, n3, r2, a));
          } });
        }, { 33: 33, 62: 62, 64: 64 }],
        281: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { iaddh: function(t3, e4, n3, r2) {
            var i = t3 >>> 0, o = e4 >>> 0, a = n3 >>> 0;
            return o + (r2 >>> 0) + ((i & a | (i | a) & ~(i + a >>> 0)) >>> 31) | 0;
          } });
        }, { 33: 33 }],
        282: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { imulh: function(t3, e4) {
            var n3 = +t3, r2 = +e4, i = 65535 & n3, o = 65535 & r2, a = n3 >> 16, s = r2 >> 16, u = (a * o >>> 0) + (i * o >>> 16);
            return a * s + (u >> 16) + ((i * s >>> 0) + (65535 & u) >> 16);
          } });
        }, { 33: 33 }],
        283: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { isubh: function(t3, e4, n3, r2) {
            var i = t3 >>> 0, o = e4 >>> 0, a = n3 >>> 0;
            return o - (r2 >>> 0) - ((~i & a | ~(i ^ a) & i - a >>> 0) >>> 31) | 0;
          } });
        }, { 33: 33 }],
        284: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { RAD_PER_DEG: 180 / Math.PI });
        }, { 33: 33 }],
        285: [function(t2, e3, n2) {
          var r = t2(33), i = Math.PI / 180;
          r(r.S, "Math", { radians: function(t3) {
            return t3 * i;
          } });
        }, { 33: 33 }],
        286: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { scale: t2(64) });
        }, { 33: 33, 64: 64 }],
        287: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { signbit: function(t3) {
            return (t3 = +t3) != t3 ? t3 : 0 == t3 ? 1 / t3 == 1 / 0 : t3 > 0;
          } });
        }, { 33: 33 }],
        288: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "Math", { umulh: function(t3, e4) {
            var n3 = +t3, r2 = +e4, i = 65535 & n3, o = 65535 & r2, a = n3 >>> 16, s = r2 >>> 16, u = (a * o >>> 0) + (i * o >>> 16);
            return a * s + (u >>> 16) + ((i * s >>> 0) + (65535 & u) >>> 16);
          } });
        }, { 33: 33 }],
        289: [function(t2, e3, n2) {
          var r = t2(33), i = t2(119), o = t2(3), a = t2(72);
          t2(29) && r(r.P + t2(74), "Object", { __defineGetter__: function(t3, e4) {
            a.f(i(this), t3, { get: o(e4), enumerable: true, configurable: true });
          } });
        }, { 119: 119, 29: 29, 3: 3, 33: 33, 72: 72, 74: 74 }],
        290: [function(t2, e3, n2) {
          var r = t2(33), i = t2(119), o = t2(3), a = t2(72);
          t2(29) && r(r.P + t2(74), "Object", { __defineSetter__: function(t3, e4) {
            a.f(i(this), t3, { set: o(e4), enumerable: true, configurable: true });
          } });
        }, { 119: 119, 29: 29, 3: 3, 33: 33, 72: 72, 74: 74 }],
        291: [function(t2, e3, n2) {
          var r = t2(33), i = t2(84)(true);
          r(r.S, "Object", { entries: function(t3) {
            return i(t3);
          } });
        }, { 33: 33, 84: 84 }],
        292: [function(t2, e3, n2) {
          var r = t2(33), i = t2(85), o = t2(117), a = t2(75), s = t2(24);
          r(r.S, "Object", { getOwnPropertyDescriptors: function(t3) {
            for (var e4, n3, r2 = o(t3), u = a.f, c = i(r2), l = {}, f = 0; c.length > f; ) void 0 !== (n3 = u(r2, e4 = c[f++])) && s(l, e4, n3);
            return l;
          } });
        }, { 117: 117, 24: 24, 33: 33, 75: 75, 85: 85 }],
        293: [function(t2, e3, n2) {
          var r = t2(33), i = t2(119), o = t2(120), a = t2(79), s = t2(75).f;
          t2(29) && r(r.P + t2(74), "Object", { __lookupGetter__: function(t3) {
            var e4, n3 = i(this), r2 = o(t3, true);
            do
              if (e4 = s(n3, r2)) return e4.get;
            while (n3 = a(n3));
          } });
        }, { 119: 119, 120: 120, 29: 29, 33: 33, 74: 74, 75: 75, 79: 79 }],
        294: [function(t2, e3, n2) {
          var r = t2(33), i = t2(119), o = t2(120), a = t2(79), s = t2(75).f;
          t2(29) && r(r.P + t2(74), "Object", { __lookupSetter__: function(t3) {
            var e4, n3 = i(this), r2 = o(t3, true);
            do
              if (e4 = s(n3, r2)) return e4.set;
            while (n3 = a(n3));
          } });
        }, { 119: 119, 120: 120, 29: 29, 33: 33, 74: 74, 75: 75, 79: 79 }],
        295: [function(t2, e3, n2) {
          var r = t2(33), i = t2(84)(false);
          r(r.S, "Object", { values: function(t3) {
            return i(t3);
          } });
        }, { 33: 33, 84: 84 }],
        296: [function(t2, e3, n2) {
          var r = t2(33), i = t2(40), o = t2(23), a = t2(68)(), s = t2(128)("observable"), u = t2(3), c = t2(7), l = t2(6), f = t2(93), h = t2(42), d = t2(39), p = d.RETURN, v = function(t3) {
            return null == t3 ? void 0 : u(t3);
          }, y = function(t3) {
            var e4 = t3._c;
            e4 && (t3._c = void 0, e4());
          }, g = function(t3) {
            return void 0 === t3._o;
          }, m = function(t3) {
            g(t3) || (t3._o = void 0, y(t3));
          }, b = function(t3, e4) {
            c(t3), this._c = void 0, this._o = t3, t3 = new _(this);
            try {
              var n3 = e4(t3), r2 = n3;
              null != n3 && ("function" == typeof n3.unsubscribe ? n3 = function() {
                r2.unsubscribe();
              } : u(n3), this._c = n3);
            } catch (e5) {
              return void t3.error(e5);
            }
            g(this) && y(this);
          };
          b.prototype = f({}, { unsubscribe: function() {
            m(this);
          } });
          var _ = function(t3) {
            this._s = t3;
          };
          _.prototype = f({}, { next: function(t3) {
            var e4 = this._s;
            if (!g(e4)) {
              var n3 = e4._o;
              try {
                var r2 = v(n3.next);
                if (r2) return r2.call(n3, t3);
              } catch (t4) {
                try {
                  m(e4);
                } finally {
                  throw t4;
                }
              }
            }
          }, error: function(t3) {
            var e4 = this._s;
            if (g(e4)) throw t3;
            var n3 = e4._o;
            e4._o = void 0;
            try {
              var r2 = v(n3.error);
              if (!r2) throw t3;
              t3 = r2.call(n3, t3);
            } catch (t4) {
              try {
                y(e4);
              } finally {
                throw t4;
              }
            }
            return y(e4), t3;
          }, complete: function(t3) {
            var e4 = this._s;
            if (!g(e4)) {
              var n3 = e4._o;
              e4._o = void 0;
              try {
                var r2 = v(n3.complete);
                t3 = r2 ? r2.call(n3, t3) : void 0;
              } catch (t4) {
                try {
                  y(e4);
                } finally {
                  throw t4;
                }
              }
              return y(e4), t3;
            }
          } });
          var w = function(t3) {
            l(this, w, "Observable", "_f")._f = u(t3);
          };
          f(w.prototype, { subscribe: function(t3) {
            return new b(t3, this._f);
          }, forEach: function(t3) {
            var e4 = this;
            return new (o.Promise || i.Promise)(function(n3, r2) {
              u(t3);
              var i2 = e4.subscribe({ next: function(e5) {
                try {
                  return t3(e5);
                } catch (t4) {
                  r2(t4), i2.unsubscribe();
                }
              }, error: r2, complete: n3 });
            });
          } }), f(w, { from: function(t3) {
            var e4 = "function" == typeof this ? this : w, n3 = v(c(t3)[s]);
            if (n3) {
              var r2 = c(n3.call(t3));
              return r2.constructor === e4 ? r2 : new e4(function(t4) {
                return r2.subscribe(t4);
              });
            }
            return new e4(function(e5) {
              var n4 = false;
              return a(function() {
                if (!n4) {
                  try {
                    if (d(t3, false, function(t4) {
                      if (e5.next(t4), n4) return p;
                    }) === p) return;
                  } catch (t4) {
                    if (n4) throw t4;
                    return void e5.error(t4);
                  }
                  e5.complete();
                }
              }), function() {
                n4 = true;
              };
            });
          }, of: function() {
            for (var t3 = 0, e4 = arguments.length, n3 = Array(e4); t3 < e4; ) n3[t3] = arguments[t3++];
            return new ("function" == typeof this ? this : w)(function(t4) {
              var e5 = false;
              return a(function() {
                if (!e5) {
                  for (var r2 = 0; r2 < n3.length; ++r2) if (t4.next(n3[r2]), e5) return;
                  t4.complete();
                }
              }), function() {
                e5 = true;
              };
            });
          } }), h(w.prototype, s, function() {
            return this;
          }), r(r.G, { Observable: w }), t2(100)("Observable");
        }, { 100: 100, 128: 128, 23: 23, 3: 3, 33: 33, 39: 39, 40: 40, 42: 42, 6: 6, 68: 68, 7: 7, 93: 93 }],
        297: [function(t2, e3, n2) {
          var r = t2(33), i = t2(23), o = t2(40), a = t2(104), s = t2(91);
          r(r.P + r.R, "Promise", { finally: function(t3) {
            var e4 = a(this, i.Promise || o.Promise), n3 = "function" == typeof t3;
            return this.then(n3 ? function(n4) {
              return s(e4, t3()).then(function() {
                return n4;
              });
            } : t3, n3 ? function(n4) {
              return s(e4, t3()).then(function() {
                throw n4;
              });
            } : t3);
          } });
        }, { 104: 104, 23: 23, 33: 33, 40: 40, 91: 91 }],
        298: [function(t2, e3, n2) {
          var r = t2(33), i = t2(69), o = t2(90);
          r(r.S, "Promise", { try: function(t3) {
            var e4 = i.f(this), n3 = o(t3);
            return (n3.e ? e4.reject : e4.resolve)(n3.v), e4.promise;
          } });
        }, { 33: 33, 69: 69, 90: 90 }],
        299: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = r.key, a = r.set;
          r.exp({ defineMetadata: function(t3, e4, n3, r2) {
            a(t3, e4, i(n3), o(r2));
          } });
        }, { 67: 67, 7: 7 }],
        300: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = r.key, a = r.map, s = r.store;
          r.exp({ deleteMetadata: function(t3, e4) {
            var n3 = arguments.length < 3 ? void 0 : o(arguments[2]), r2 = a(i(e4), n3, false);
            if (void 0 === r2 || !r2.delete(t3)) return false;
            if (r2.size) return true;
            var u = s.get(e4);
            return u.delete(n3), !!u.size || s.delete(e4);
          } });
        }, { 67: 67, 7: 7 }],
        301: [function(t2, e3, n2) {
          var r = t2(231), i = t2(10), o = t2(67), a = t2(7), s = t2(79), u = o.keys, c = o.key, l = function(t3, e4) {
            var n3 = u(t3, e4), o2 = s(t3);
            if (null === o2) return n3;
            var a2 = l(o2, e4);
            return a2.length ? n3.length ? i(new r(n3.concat(a2))) : a2 : n3;
          };
          o.exp({ getMetadataKeys: function(t3) {
            return l(a(t3), arguments.length < 2 ? void 0 : c(arguments[1]));
          } });
        }, { 10: 10, 231: 231, 67: 67, 7: 7, 79: 79 }],
        302: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = t2(79), a = r.has, s = r.get, u = r.key, c = function(t3, e4, n3) {
            if (a(t3, e4, n3)) return s(t3, e4, n3);
            var r2 = o(e4);
            return null !== r2 ? c(t3, r2, n3) : void 0;
          };
          r.exp({ getMetadata: function(t3, e4) {
            return c(t3, i(e4), arguments.length < 3 ? void 0 : u(arguments[2]));
          } });
        }, { 67: 67, 7: 7, 79: 79 }],
        303: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = r.keys, a = r.key;
          r.exp({ getOwnMetadataKeys: function(t3) {
            return o(i(t3), arguments.length < 2 ? void 0 : a(arguments[1]));
          } });
        }, { 67: 67, 7: 7 }],
        304: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = r.get, a = r.key;
          r.exp({ getOwnMetadata: function(t3, e4) {
            return o(t3, i(e4), arguments.length < 3 ? void 0 : a(arguments[2]));
          } });
        }, { 67: 67, 7: 7 }],
        305: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = t2(79), a = r.has, s = r.key, u = function(t3, e4, n3) {
            if (a(t3, e4, n3)) return true;
            var r2 = o(e4);
            return null !== r2 && u(t3, r2, n3);
          };
          r.exp({ hasMetadata: function(t3, e4) {
            return u(t3, i(e4), arguments.length < 3 ? void 0 : s(arguments[2]));
          } });
        }, { 67: 67, 7: 7, 79: 79 }],
        306: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = r.has, a = r.key;
          r.exp({ hasOwnMetadata: function(t3, e4) {
            return o(t3, i(e4), arguments.length < 3 ? void 0 : a(arguments[2]));
          } });
        }, { 67: 67, 7: 7 }],
        307: [function(t2, e3, n2) {
          var r = t2(67), i = t2(7), o = t2(3), a = r.key, s = r.set;
          r.exp({ metadata: function(t3, e4) {
            return function(n3, r2) {
              s(t3, e4, (void 0 !== r2 ? i : o)(n3), a(r2));
            };
          } });
        }, { 3: 3, 67: 67, 7: 7 }],
        308: [function(t2, e3, n2) {
          t2(97)("Set");
        }, { 97: 97 }],
        309: [function(t2, e3, n2) {
          t2(98)("Set");
        }, { 98: 98 }],
        310: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.P + r.R, "Set", { toJSON: t2(20)("Set") });
        }, { 20: 20, 33: 33 }],
        311: [function(t2, e3, n2) {
          var r = t2(33), i = t2(106)(true);
          r(r.P, "String", { at: function(t3) {
            return i(this, t3);
          } });
        }, { 106: 106, 33: 33 }],
        312: [function(t2, e3, n2) {
          var r = t2(33), i = t2(28), o = t2(118), a = t2(52), s = t2(37), u = RegExp.prototype, c = function(t3, e4) {
            this._r = t3, this._s = e4;
          };
          t2(54)(c, "RegExp String", function() {
            var t3 = this._r.exec(this._s);
            return { value: t3, done: null === t3 };
          }), r(r.P, "String", { matchAll: function(t3) {
            if (i(this), !a(t3)) throw TypeError(t3 + " is not a regexp!");
            var e4 = String(this), n3 = "flags" in u ? String(t3.flags) : s.call(t3), r2 = new RegExp(t3.source, ~n3.indexOf("g") ? n3 : "g" + n3);
            return r2.lastIndex = o(t3.lastIndex), new c(r2, e4);
          } });
        }, { 118: 118, 28: 28, 33: 33, 37: 37, 52: 52, 54: 54 }],
        313: [function(t2, e3, n2) {
          var r = t2(33), i = t2(109);
          r(r.P, "String", { padEnd: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0, false);
          } });
        }, { 109: 109, 33: 33 }],
        314: [function(t2, e3, n2) {
          var r = t2(33), i = t2(109);
          r(r.P, "String", { padStart: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0, true);
          } });
        }, { 109: 109, 33: 33 }],
        315: [function(t2, e3, n2) {
          t2(111)("trimLeft", function(t3) {
            return function() {
              return t3(this, 1);
            };
          }, "trimStart");
        }, { 111: 111 }],
        316: [function(t2, e3, n2) {
          t2(111)("trimRight", function(t3) {
            return function() {
              return t3(this, 2);
            };
          }, "trimEnd");
        }, { 111: 111 }],
        317: [function(t2, e3, n2) {
          t2(126)("asyncIterator");
        }, { 126: 126 }],
        318: [function(t2, e3, n2) {
          t2(126)("observable");
        }, { 126: 126 }],
        319: [function(t2, e3, n2) {
          var r = t2(33);
          r(r.S, "System", { global: t2(40) });
        }, { 33: 33, 40: 40 }],
        320: [function(t2, e3, n2) {
          t2(97)("WeakMap");
        }, { 97: 97 }],
        321: [function(t2, e3, n2) {
          t2(98)("WeakMap");
        }, { 98: 98 }],
        322: [function(t2, e3, n2) {
          t2(97)("WeakSet");
        }, { 97: 97 }],
        323: [function(t2, e3, n2) {
          t2(98)("WeakSet");
        }, { 98: 98 }],
        324: [function(t2, e3, n2) {
          for (var r = t2(141), i = t2(81), o = t2(94), a = t2(40), s = t2(42), u = t2(58), c = t2(128), l = c("iterator"), f = c("toStringTag"), h = u.Array, d = { CSSRuleList: true, CSSStyleDeclaration: false, CSSValueList: false, ClientRectList: false, DOMRectList: false, DOMStringList: false, DOMTokenList: true, DataTransferItemList: false, FileList: false, HTMLAllCollection: false, HTMLCollection: false, HTMLFormElement: false, HTMLSelectElement: false, MediaList: true, MimeTypeArray: false, NamedNodeMap: false, NodeList: true, PaintRequestList: false, Plugin: false, PluginArray: false, SVGLengthList: false, SVGNumberList: false, SVGPathSegList: false, SVGPointList: false, SVGStringList: false, SVGTransformList: false, SourceBufferList: false, StyleSheetList: true, TextTrackCueList: false, TextTrackList: false, TouchList: false }, p = i(d), v = 0; v < p.length; v++) {
            var y, g = p[v], m = d[g], b = a[g], _ = b && b.prototype;
            if (_ && (_[l] || s(_, l, h), _[f] || s(_, f, g), u[g] = h, m)) for (y in r) _[y] || o(_, y, r[y], true);
          }
        }, { 128: 128, 141: 141, 40: 40, 42: 42, 58: 58, 81: 81, 94: 94 }],
        325: [function(t2, e3, n2) {
          var r = t2(33), i = t2(113);
          r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
        }, { 113: 113, 33: 33 }],
        326: [function(t2, e3, n2) {
          var r = t2(40), i = t2(33), o = t2(46), a = t2(88), s = r.navigator, u = !!s && /MSIE .\./.test(s.userAgent), c = function(t3) {
            return u ? function(e4, n3) {
              return t3(o(a, [].slice.call(arguments, 2), "function" == typeof e4 ? e4 : Function(e4)), n3);
            } : t3;
          };
          i(i.G + i.B + i.F * u, { setTimeout: c(r.setTimeout), setInterval: c(r.setInterval) });
        }, { 33: 33, 40: 40, 46: 46, 88: 88 }],
        327: [function(t2, e3, n2) {
          t2(254), t2(191), t2(193), t2(192), t2(195), t2(197), t2(202), t2(196), t2(194), t2(204), t2(203), t2(199), t2(200), t2(198), t2(190), t2(201), t2(205), t2(206), t2(157), t2(159), t2(158), t2(208), t2(207), t2(178), t2(188), t2(189), t2(179), t2(180), t2(181), t2(182), t2(183), t2(184), t2(185), t2(186), t2(187), t2(161), t2(162), t2(163), t2(164), t2(165), t2(166), t2(167), t2(168), t2(169), t2(170), t2(171), t2(172), t2(173), t2(174), t2(175), t2(176), t2(177), t2(241), t2(246), t2(253), t2(244), t2(236), t2(237), t2(242), t2(247), t2(249), t2(232), t2(233), t2(234), t2(235), t2(238), t2(239), t2(240), t2(243), t2(245), t2(248), t2(250), t2(251), t2(252), t2(152), t2(154), t2(153), t2(156), t2(155), t2(140), t2(138), t2(145), t2(142), t2(148), t2(150), t2(137), t2(144), t2(134), t2(149), t2(132), t2(147), t2(146), t2(139), t2(143), t2(131), t2(133), t2(136), t2(135), t2(151), t2(141), t2(224), t2(230), t2(225), t2(226), t2(227), t2(228), t2(229), t2(209), t2(160), t2(231), t2(266), t2(267), t2(255), t2(256), t2(261), t2(264), t2(265), t2(259), t2(262), t2(260), t2(263), t2(257), t2(258), t2(210), t2(211), t2(212), t2(213), t2(214), t2(217), t2(215), t2(216), t2(218), t2(219), t2(220), t2(221), t2(223), t2(222), t2(270), t2(268), t2(269), t2(311), t2(314), t2(313), t2(315), t2(316), t2(312), t2(317), t2(318), t2(292), t2(295), t2(291), t2(289), t2(290), t2(293), t2(294), t2(276), t2(310), t2(275), t2(309), t2(321), t2(323), t2(274), t2(308), t2(320), t2(322), t2(273), t2(319), t2(272), t2(277), t2(278), t2(279), t2(280), t2(281), t2(283), t2(282), t2(284), t2(285), t2(286), t2(288), t2(287), t2(297), t2(298), t2(299), t2(300), t2(302), t2(301), t2(304), t2(303), t2(305), t2(306), t2(307), t2(271), t2(296), t2(326), t2(325), t2(324), e3.exports = t2(23);
        }, { 131: 131, 132: 132, 133: 133, 134: 134, 135: 135, 136: 136, 137: 137, 138: 138, 139: 139, 140: 140, 141: 141, 142: 142, 143: 143, 144: 144, 145: 145, 146: 146, 147: 147, 148: 148, 149: 149, 150: 150, 151: 151, 152: 152, 153: 153, 154: 154, 155: 155, 156: 156, 157: 157, 158: 158, 159: 159, 160: 160, 161: 161, 162: 162, 163: 163, 164: 164, 165: 165, 166: 166, 167: 167, 168: 168, 169: 169, 170: 170, 171: 171, 172: 172, 173: 173, 174: 174, 175: 175, 176: 176, 177: 177, 178: 178, 179: 179, 180: 180, 181: 181, 182: 182, 183: 183, 184: 184, 185: 185, 186: 186, 187: 187, 188: 188, 189: 189, 190: 190, 191: 191, 192: 192, 193: 193, 194: 194, 195: 195, 196: 196, 197: 197, 198: 198, 199: 199, 200: 200, 201: 201, 202: 202, 203: 203, 204: 204, 205: 205, 206: 206, 207: 207, 208: 208, 209: 209, 210: 210, 211: 211, 212: 212, 213: 213, 214: 214, 215: 215, 216: 216, 217: 217, 218: 218, 219: 219, 220: 220, 221: 221, 222: 222, 223: 223, 224: 224, 225: 225, 226: 226, 227: 227, 228: 228, 229: 229, 23: 23, 230: 230, 231: 231, 232: 232, 233: 233, 234: 234, 235: 235, 236: 236, 237: 237, 238: 238, 239: 239, 240: 240, 241: 241, 242: 242, 243: 243, 244: 244, 245: 245, 246: 246, 247: 247, 248: 248, 249: 249, 250: 250, 251: 251, 252: 252, 253: 253, 254: 254, 255: 255, 256: 256, 257: 257, 258: 258, 259: 259, 260: 260, 261: 261, 262: 262, 263: 263, 264: 264, 265: 265, 266: 266, 267: 267, 268: 268, 269: 269, 270: 270, 271: 271, 272: 272, 273: 273, 274: 274, 275: 275, 276: 276, 277: 277, 278: 278, 279: 279, 280: 280, 281: 281, 282: 282, 283: 283, 284: 284, 285: 285, 286: 286, 287: 287, 288: 288, 289: 289, 290: 290, 291: 291, 292: 292, 293: 293, 294: 294, 295: 295, 296: 296, 297: 297, 298: 298, 299: 299, 300: 300, 301: 301, 302: 302, 303: 303, 304: 304, 305: 305, 306: 306, 307: 307, 308: 308, 309: 309, 310: 310, 311: 311, 312: 312, 313: 313, 314: 314, 315: 315, 316: 316, 317: 317, 318: 318, 319: 319, 320: 320, 321: 321, 322: 322, 323: 323, 324: 324, 325: 325, 326: 326 }],
        328: [function(t2, n2, r) {
          (function(t3) {
            !function(t4) {
              function e3(t5, e4, n3, r3) {
                var o2 = e4 && e4.prototype instanceof i ? e4 : i, a2 = Object.create(o2.prototype), s2 = new d(r3 || []);
                return a2._invoke = c(t5, n3, s2), a2;
              }
              function r2(t5, e4, n3) {
                try {
                  return { type: "normal", arg: t5.call(e4, n3) };
                } catch (t6) {
                  return { type: "throw", arg: t6 };
                }
              }
              function i() {
              }
              function o() {
              }
              function a() {
              }
              function s(t5) {
                ["next", "throw", "return"].forEach(function(e4) {
                  t5[e4] = function(t6) {
                    return this._invoke(e4, t6);
                  };
                });
              }
              function u(e4) {
                function n3(t5, i3, o3, a2) {
                  var s2 = r2(e4[t5], e4, i3);
                  if ("throw" !== s2.type) {
                    var u2 = s2.arg, c2 = u2.value;
                    return c2 && "object" == typeof c2 && m.call(c2, "__await") ? Promise.resolve(c2.__await).then(function(t6) {
                      n3("next", t6, o3, a2);
                    }, function(t6) {
                      n3("throw", t6, o3, a2);
                    }) : Promise.resolve(c2).then(function(t6) {
                      u2.value = t6, o3(u2);
                    }, a2);
                  }
                  a2(s2.arg);
                }
                function i2(t5, e5) {
                  function r3() {
                    return new Promise(function(r4, i3) {
                      n3(t5, e5, r4, i3);
                    });
                  }
                  return o2 = o2 ? o2.then(r3, r3) : r3();
                }
                "object" == typeof t4.process && t4.process.domain && (n3 = t4.process.domain.bind(n3));
                var o2;
                this._invoke = i2;
              }
              function c(t5, e4, n3) {
                var i2 = k;
                return function(o2, a2) {
                  if (i2 === A) throw new Error("Generator is already running");
                  if (i2 === M) {
                    if ("throw" === o2) throw a2;
                    return v();
                  }
                  for (n3.method = o2, n3.arg = a2; ; ) {
                    var s2 = n3.delegate;
                    if (s2) {
                      var u2 = l(s2, n3);
                      if (u2) {
                        if (u2 === P) continue;
                        return u2;
                      }
                    }
                    if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
                    else if ("throw" === n3.method) {
                      if (i2 === k) throw i2 = M, n3.arg;
                      n3.dispatchException(n3.arg);
                    } else "return" === n3.method && n3.abrupt("return", n3.arg);
                    i2 = A;
                    var c2 = r2(t5, e4, n3);
                    if ("normal" === c2.type) {
                      if (i2 = n3.done ? M : O, c2.arg === P) continue;
                      return { value: c2.arg, done: n3.done };
                    }
                    "throw" === c2.type && (i2 = M, n3.method = "throw", n3.arg = c2.arg);
                  }
                };
              }
              function l(t5, e4) {
                var n3 = t5.iterator[e4.method];
                if (n3 === y) {
                  if (e4.delegate = null, "throw" === e4.method) {
                    if (t5.iterator.return && (e4.method = "return", e4.arg = y, l(t5, e4), "throw" === e4.method)) return P;
                    e4.method = "throw", e4.arg = new TypeError("The iterator does not provide a 'throw' method");
                  }
                  return P;
                }
                var i2 = r2(n3, t5.iterator, e4.arg);
                if ("throw" === i2.type) return e4.method = "throw", e4.arg = i2.arg, e4.delegate = null, P;
                var o2 = i2.arg;
                return o2 ? o2.done ? (e4[t5.resultName] = o2.value, e4.next = t5.nextLoc, "return" !== e4.method && (e4.method = "next", e4.arg = y), e4.delegate = null, P) : o2 : (e4.method = "throw", e4.arg = new TypeError("iterator result is not an object"), e4.delegate = null, P);
              }
              function f(t5) {
                var e4 = { tryLoc: t5[0] };
                1 in t5 && (e4.catchLoc = t5[1]), 2 in t5 && (e4.finallyLoc = t5[2], e4.afterLoc = t5[3]), this.tryEntries.push(e4);
              }
              function h(t5) {
                var e4 = t5.completion || {};
                e4.type = "normal", delete e4.arg, t5.completion = e4;
              }
              function d(t5) {
                this.tryEntries = [{ tryLoc: "root" }], t5.forEach(f, this), this.reset(true);
              }
              function p(t5) {
                if (t5) {
                  var e4 = t5[_];
                  if (e4) return e4.call(t5);
                  if ("function" == typeof t5.next) return t5;
                  if (!isNaN(t5.length)) {
                    var n3 = -1, r3 = function e5() {
                      for (; ++n3 < t5.length; ) if (m.call(t5, n3)) return e5.value = t5[n3], e5.done = false, e5;
                      return e5.value = y, e5.done = true, e5;
                    };
                    return r3.next = r3;
                  }
                }
                return { next: v };
              }
              function v() {
                return { value: y, done: true };
              }
              var y, g = Object.prototype, m = g.hasOwnProperty, b = "function" == typeof Symbol ? Symbol : {}, _ = b.iterator || "@@iterator", w = b.asyncIterator || "@@asyncIterator", S = b.toStringTag || "@@toStringTag", E = "object" == typeof n2, x = t4.regeneratorRuntime;
              if (x) return void (E && (n2.exports = x));
              x = t4.regeneratorRuntime = E ? n2.exports : {}, x.wrap = e3;
              var k = "suspendedStart", O = "suspendedYield", A = "executing", M = "completed", P = {}, C = {};
              C[_] = function() {
                return this;
              };
              var j = Object.getPrototypeOf, L = j && j(j(p([])));
              L && L !== g && m.call(L, _) && (C = L);
              var T = a.prototype = i.prototype = Object.create(C);
              o.prototype = T.constructor = a, a.constructor = o, a[S] = o.displayName = "GeneratorFunction", x.isGeneratorFunction = function(t5) {
                var e4 = "function" == typeof t5 && t5.constructor;
                return !!e4 && (e4 === o || "GeneratorFunction" === (e4.displayName || e4.name));
              }, x.mark = function(t5) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t5, a) : (t5.__proto__ = a, S in t5 || (t5[S] = "GeneratorFunction")), t5.prototype = Object.create(T), t5;
              }, x.awrap = function(t5) {
                return { __await: t5 };
              }, s(u.prototype), u.prototype[w] = function() {
                return this;
              }, x.AsyncIterator = u, x.async = function(t5, n3, r3, i2) {
                var o2 = new u(e3(t5, n3, r3, i2));
                return x.isGeneratorFunction(n3) ? o2 : o2.next().then(function(t6) {
                  return t6.done ? t6.value : o2.next();
                });
              }, s(T), T[S] = "Generator", T[_] = function() {
                return this;
              }, T.toString = function() {
                return "[object Generator]";
              }, x.keys = function(t5) {
                var e4 = [];
                for (var n3 in t5) e4.push(n3);
                return e4.reverse(), function n4() {
                  for (; e4.length; ) {
                    var r3 = e4.pop();
                    if (r3 in t5) return n4.value = r3, n4.done = false, n4;
                  }
                  return n4.done = true, n4;
                };
              }, x.values = p, d.prototype = { constructor: d, reset: function(t5) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = false, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(h), !t5) for (var e4 in this) "t" === e4.charAt(0) && m.call(this, e4) && !isNaN(+e4.slice(1)) && (this[e4] = y);
              }, stop: function() {
                this.done = true;
                var t5 = this.tryEntries[0], e4 = t5.completion;
                if ("throw" === e4.type) throw e4.arg;
                return this.rval;
              }, dispatchException: function(t5) {
                function e4(e5, r4) {
                  return o2.type = "throw", o2.arg = t5, n3.next = e5, r4 && (n3.method = "next", n3.arg = y), !!r4;
                }
                if (this.done) throw t5;
                for (var n3 = this, r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                  var i2 = this.tryEntries[r3], o2 = i2.completion;
                  if ("root" === i2.tryLoc) return e4("end");
                  if (i2.tryLoc <= this.prev) {
                    var a2 = m.call(i2, "catchLoc"), s2 = m.call(i2, "finallyLoc");
                    if (a2 && s2) {
                      if (this.prev < i2.catchLoc) return e4(i2.catchLoc, true);
                      if (this.prev < i2.finallyLoc) return e4(i2.finallyLoc);
                    } else if (a2) {
                      if (this.prev < i2.catchLoc) return e4(i2.catchLoc, true);
                    } else {
                      if (!s2) throw new Error("try statement without catch or finally");
                      if (this.prev < i2.finallyLoc) return e4(i2.finallyLoc);
                    }
                  }
                }
              }, abrupt: function(t5, e4) {
                for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                  var r3 = this.tryEntries[n3];
                  if (r3.tryLoc <= this.prev && m.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
                    var i2 = r3;
                    break;
                  }
                }
                i2 && ("break" === t5 || "continue" === t5) && i2.tryLoc <= e4 && e4 <= i2.finallyLoc && (i2 = null);
                var o2 = i2 ? i2.completion : {};
                return o2.type = t5, o2.arg = e4, i2 ? (this.method = "next", this.next = i2.finallyLoc, P) : this.complete(o2);
              }, complete: function(t5, e4) {
                if ("throw" === t5.type) throw t5.arg;
                return "break" === t5.type || "continue" === t5.type ? this.next = t5.arg : "return" === t5.type ? (this.rval = this.arg = t5.arg, this.method = "return", this.next = "end") : "normal" === t5.type && e4 && (this.next = e4), P;
              }, finish: function(t5) {
                for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                  var n3 = this.tryEntries[e4];
                  if (n3.finallyLoc === t5) return this.complete(n3.completion, n3.afterLoc), h(n3), P;
                }
              }, catch: function(t5) {
                for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                  var n3 = this.tryEntries[e4];
                  if (n3.tryLoc === t5) {
                    var r3 = n3.completion;
                    if ("throw" === r3.type) {
                      var i2 = r3.arg;
                      h(n3);
                    }
                    return i2;
                  }
                }
                throw new Error("illegal catch attempt");
              }, delegateYield: function(t5, e4, n3) {
                return this.delegate = { iterator: p(t5), resultName: e4, nextLoc: n3 }, "next" === this.method && (this.arg = y), P;
              } };
            }("object" == typeof t3 ? t3 : "object" == typeof window ? window : "object" == typeof self ? self : this);
          }).call(this, "undefined" != typeof e2 ? e2 : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}]
      }, {}, [1]);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  2: [function(t, e, n) {
    !function(t2, e2) {
      function n2(t3) {
        this.time = t3.time, this.target = t3.target, this.rootBounds = t3.rootBounds, this.boundingClientRect = t3.boundingClientRect, this.intersectionRect = t3.intersectionRect || l(), this.isIntersecting = !!t3.intersectionRect;
        var e3 = this.boundingClientRect, n3 = e3.width * e3.height, r2 = this.intersectionRect, i2 = r2.width * r2.height;
        n3 ? this.intersectionRatio = Number((i2 / n3).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0;
      }
      function r(t3, e3) {
        var n3 = e3 || {};
        if ("function" != typeof t3) throw new Error("callback must be a function");
        if (n3.root && 1 != n3.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = o(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t3, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n3.rootMargin), this.thresholds = this._initThresholds(n3.threshold), this.root = n3.root || null, this.rootMargin = this._rootMarginValues.map(function(t4) {
          return t4.value + t4.unit;
        }).join(" ");
      }
      function i() {
        return t2.performance && performance.now && performance.now();
      }
      function o(t3, e3) {
        var n3 = null;
        return function() {
          n3 || (n3 = setTimeout(function() {
            t3(), n3 = null;
          }, e3));
        };
      }
      function a(t3, e3, n3, r2) {
        "function" == typeof t3.addEventListener ? t3.addEventListener(e3, n3, r2) : "function" == typeof t3.attachEvent && t3.attachEvent("on" + e3, n3);
      }
      function s(t3, e3, n3, r2) {
        "function" == typeof t3.removeEventListener ? t3.removeEventListener(e3, n3, r2) : "function" == typeof t3.detatchEvent && t3.detatchEvent("on" + e3, n3);
      }
      function u(t3, e3) {
        var n3 = Math.max(t3.top, e3.top), r2 = Math.min(t3.bottom, e3.bottom), i2 = Math.max(t3.left, e3.left), o2 = Math.min(t3.right, e3.right), a2 = o2 - i2, s2 = r2 - n3;
        return a2 >= 0 && s2 >= 0 && { top: n3, bottom: r2, left: i2, right: o2, width: a2, height: s2 };
      }
      function c(t3) {
        var e3;
        try {
          e3 = t3.getBoundingClientRect();
        } catch (t4) {
        }
        return e3 ? (e3.width && e3.height || (e3 = { top: e3.top, right: e3.right, bottom: e3.bottom, left: e3.left, width: e3.right - e3.left, height: e3.bottom - e3.top }), e3) : l();
      }
      function l() {
        return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
      }
      function f(t3, e3) {
        for (var n3 = e3; n3; ) {
          if (n3 == t3) return true;
          n3 = h(n3);
        }
        return false;
      }
      function h(t3) {
        var e3 = t3.parentNode;
        return e3 && 11 == e3.nodeType && e3.host ? e3.host : e3 && e3.assignedSlot ? e3.assignedSlot.parentNode : e3;
      }
      if ("IntersectionObserver" in t2 && "IntersectionObserverEntry" in t2 && "intersectionRatio" in t2.IntersectionObserverEntry.prototype) return void ("isIntersecting" in t2.IntersectionObserverEntry.prototype || Object.defineProperty(t2.IntersectionObserverEntry.prototype, "isIntersecting", { get: function() {
        return this.intersectionRatio > 0;
      } }));
      r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = true, r.prototype.observe = function(t3) {
        var e3 = this._observationTargets.some(function(e4) {
          return e4.element == t3;
        });
        if (!e3) {
          if (!t3 || 1 != t3.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({ element: t3, entry: null }), this._monitorIntersections(), this._checkForIntersections();
        }
      }, r.prototype.unobserve = function(t3) {
        this._observationTargets = this._observationTargets.filter(function(e3) {
          return e3.element != t3;
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
      }, r.prototype.disconnect = function() {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance();
      }, r.prototype.takeRecords = function() {
        var t3 = this._queuedEntries.slice();
        return this._queuedEntries = [], t3;
      }, r.prototype._initThresholds = function(t3) {
        var e3 = t3 || [0];
        return Array.isArray(e3) || (e3 = [e3]), e3.sort().filter(function(t4, e4, n3) {
          if ("number" != typeof t4 || isNaN(t4) || t4 < 0 || t4 > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
          return t4 !== n3[e4 - 1];
        });
      }, r.prototype._parseRootMargin = function(t3) {
        var e3 = t3 || "0px", n3 = e3.split(/\s+/).map(function(t4) {
          var e4 = /^(-?\d*\.?\d+)(px|%)$/.exec(t4);
          if (!e4) throw new Error("rootMargin must be specified in pixels or percent");
          return { value: parseFloat(e4[1]), unit: e4[2] };
        });
        return n3[1] = n3[1] || n3[0], n3[2] = n3[2] || n3[0], n3[3] = n3[3] || n3[1], n3;
      }, r.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = true, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(t2, "resize", this._checkForIntersections, true), a(e2, "scroll", this._checkForIntersections, true), this.USE_MUTATION_OBSERVER && "MutationObserver" in t2 && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e2, { attributes: true, childList: true, characterData: true, subtree: true }))));
      }, r.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = false, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t2, "resize", this._checkForIntersections, true), s(e2, "scroll", this._checkForIntersections, true), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null));
      }, r.prototype._checkForIntersections = function() {
        var t3 = this._rootIsInDom(), e3 = t3 ? this._getRootRect() : l();
        this._observationTargets.forEach(function(r2) {
          var o2 = r2.element, a2 = c(o2), s2 = this._rootContainsTarget(o2), u2 = r2.entry, l2 = t3 && s2 && this._computeTargetAndRootIntersection(o2, e3), f2 = r2.entry = new n2({ time: i(), target: o2, boundingClientRect: a2, rootBounds: e3, intersectionRect: l2 });
          u2 ? t3 && s2 ? this._hasCrossedThreshold(u2, f2) && this._queuedEntries.push(f2) : u2 && u2.isIntersecting && this._queuedEntries.push(f2) : this._queuedEntries.push(f2);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
      }, r.prototype._computeTargetAndRootIntersection = function(n3, r2) {
        if ("none" != t2.getComputedStyle(n3).display) {
          for (var i2 = c(n3), o2 = i2, a2 = h(n3), s2 = false; !s2; ) {
            var l2 = null, f2 = 1 == a2.nodeType ? t2.getComputedStyle(a2) : {};
            if ("none" == f2.display) return;
            if (a2 == this.root || a2 == e2 ? (s2 = true, l2 = r2) : a2 != e2.body && a2 != e2.documentElement && "visible" != f2.overflow && (l2 = c(a2)), l2 && (o2 = u(l2, o2), !o2)) break;
            a2 = h(a2);
          }
          return o2;
        }
      }, r.prototype._getRootRect = function() {
        var t3;
        if (this.root) t3 = c(this.root);
        else {
          var n3 = e2.documentElement, r2 = e2.body;
          t3 = { top: 0, left: 0, right: n3.clientWidth || r2.clientWidth, width: n3.clientWidth || r2.clientWidth, bottom: n3.clientHeight || r2.clientHeight, height: n3.clientHeight || r2.clientHeight };
        }
        return this._expandRectByRootMargin(t3);
      }, r.prototype._expandRectByRootMargin = function(t3) {
        var e3 = this._rootMarginValues.map(function(e4, n4) {
          return "px" == e4.unit ? e4.value : e4.value * (n4 % 2 ? t3.width : t3.height) / 100;
        }), n3 = { top: t3.top - e3[0], right: t3.right + e3[1], bottom: t3.bottom + e3[2], left: t3.left - e3[3] };
        return n3.width = n3.right - n3.left, n3.height = n3.bottom - n3.top, n3;
      }, r.prototype._hasCrossedThreshold = function(t3, e3) {
        var n3 = t3 && t3.isIntersecting ? t3.intersectionRatio || 0 : -1, r2 = e3.isIntersecting ? e3.intersectionRatio || 0 : -1;
        if (n3 !== r2) for (var i2 = 0; i2 < this.thresholds.length; i2++) {
          var o2 = this.thresholds[i2];
          if (o2 == n3 || o2 == r2 || o2 < n3 != o2 < r2) return true;
        }
      }, r.prototype._rootIsInDom = function() {
        return !this.root || f(e2, this.root);
      }, r.prototype._rootContainsTarget = function(t3) {
        return f(this.root || e2, t3);
      }, r.prototype._registerInstance = function() {
      }, r.prototype._unregisterInstance = function() {
      }, t2.IntersectionObserver = r, t2.IntersectionObserverEntry = n2;
    }(window, document);
  }, {}],
  3: [function(t, e, n) {
    !function(t2, r) {
      "object" == typeof n && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define("lazy-line-painter", [], r) : "object" == typeof n ? n["lazy-line-painter"] = r() : t2["lazy-line-painter"] = r();
    }(window, function() {
      return function(t2) {
        function e2(r) {
          if (n2[r]) return n2[r].exports;
          var i = n2[r] = { i: r, l: false, exports: {} };
          return t2[r].call(i.exports, i, i.exports, e2), i.l = true, i.exports;
        }
        var n2 = {};
        return e2.m = t2, e2.c = n2, e2.d = function(t3, n3, r) {
          e2.o(t3, n3) || Object.defineProperty(t3, n3, { enumerable: true, get: r });
        }, e2.r = function(t3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
        }, e2.t = function(t3, n3) {
          if (1 & n3 && (t3 = e2(t3)), 8 & n3) return t3;
          if (4 & n3 && "object" == typeof t3 && t3 && t3.__esModule) return t3;
          var r = /* @__PURE__ */ Object.create(null);
          if (e2.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t3 }), 2 & n3 && "string" != typeof t3) for (var i in t3) e2.d(r, i, (function(e3) {
            return t3[e3];
          }).bind(null, i));
          return r;
        }, e2.n = function(t3) {
          var n3 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return e2.d(n3, "a", n3), n3;
        }, e2.o = function(t3, e3) {
          return Object.prototype.hasOwnProperty.call(t3, e3);
        }, e2.p = "", e2(e2.s = "./src/index.js");
      }({ "./src/easing.js": function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.default = void 0;
        var r = { easeLinear: function(t3) {
          return t3;
        }, easeInQuad: function(t3) {
          return t3 * t3;
        }, easeOutQuad: function(t3) {
          return t3 * (2 - t3);
        }, easeInOutQuad: function(t3) {
          return t3 *= 2, t3 < 1 ? 0.5 * t3 * t3 : -0.5 * (--t3 * (t3 - 2) - 1);
        }, easeInCubic: function(t3) {
          return t3 * t3 * t3;
        }, easeOutCubic: function(t3) {
          return --t3 * t3 * t3 + 1;
        }, easeInOutCubic: function(t3) {
          return t3 *= 2, t3 < 1 ? 0.5 * t3 * t3 * t3 : 0.5 * ((t3 -= 2) * t3 * t3 + 2);
        }, easeInQuart: function(t3) {
          return t3 * t3 * t3 * t3;
        }, easeOutQuart: function(t3) {
          return 1 - --t3 * t3 * t3 * t3;
        }, easeInOutQuart: function(t3) {
          return t3 *= 2, t3 < 1 ? 0.5 * t3 * t3 * t3 * t3 : -0.5 * ((t3 -= 2) * t3 * t3 * t3 - 2);
        }, easeInQuint: function(t3) {
          return t3 * t3 * t3 * t3 * t3;
        }, easeOutQuint: function(t3) {
          return --t3 * t3 * t3 * t3 * t3 + 1;
        }, easeInOutQuint: function(t3) {
          return t3 *= 2, t3 < 1 ? 0.5 * t3 * t3 * t3 * t3 * t3 : 0.5 * ((t3 -= 2) * t3 * t3 * t3 * t3 + 2);
        }, easeInSine: function(t3) {
          return 1 - Math.cos(t3 * Math.PI / 2);
        }, easeOutSine: function(t3) {
          return Math.sin(t3 * Math.PI / 2);
        }, easeInOutSine: function(t3) {
          return 0.5 * (1 - Math.cos(Math.PI * t3));
        }, easeInExpo: function(t3) {
          return 0 === t3 ? 0 : Math.pow(1024, t3 - 1);
        }, easeOutExpo: function(t3) {
          return 1 === t3 ? t3 : 1 - Math.pow(2, -10 * t3);
        }, easeInOutExpo: function(t3) {
          return 0 === t3 ? 0 : 1 === t3 ? 1 : (t3 *= 2) < 1 ? 0.5 * Math.pow(1024, t3 - 1) : 0.5 * (-Math.pow(2, -10 * (t3 - 1)) + 2);
        }, easeInCirc: function(t3) {
          return 1 - Math.sqrt(1 - t3 * t3);
        }, easeOutCirc: function(t3) {
          return Math.sqrt(1 - --t3 * t3);
        }, easeInOutCirc: function(t3) {
          return t3 *= 2, t3 < 1 ? -0.5 * (Math.sqrt(1 - t3 * t3) - 1) : 0.5 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1);
        }, easeInBounce: function(t3) {
          return 1 - this.easeOutBounce(1 - t3);
        }, easeOutBounce: function(t3) {
          return t3 < 1 / 2.75 ? 7.5625 * t3 * t3 : t3 < 2 / 2.75 ? 7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75 : t3 < 2.5 / 2.75 ? 7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375 : 7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375;
        }, easeInOutBounce: function(t3) {
          return t3 < 0.5 ? 0.5 * this.easeInBounce(2 * t3) : 0.5 * this.easeOutBounce(2 * t3 - 1) + 0.5;
        } }, i = r;
        e2.default = i, t2.exports = e2.default;
      }, "./src/events.js": function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.default = void 0;
        var r = {};
        r.on = function(t3, e3) {
          this._eventEmitterCallbacks = this._eventEmitterCallbacks || {}, this._eventEmitterCallbacks[t3] = this._eventEmitterCallbacks[t3] || [], this._eventEmitterCallbacks[t3].push(e3);
        }, r.addListener = r.on, r.off = function(t3, e3) {
          if (this._eventEmitterCallbacks = this._eventEmitterCallbacks || {}, t3 in this._eventEmitterCallbacks) {
            var n3 = this._eventEmitterCallbacks[t3].indexOf(e3);
            n3 < 0 || this._eventEmitterCallbacks[t3].splice(n3, 1);
          }
        }, r.removeListener = r.off, r.emit = function(t3, e3) {
          if (this._eventEmitterCallbacks = this._eventEmitterCallbacks || {}, t3 in this._eventEmitterCallbacks) {
            var n3 = true, r2 = false, i2 = void 0;
            try {
              for (var o, a = this._eventEmitterCallbacks[t3][Symbol.iterator](); !(n3 = (o = a.next()).done); n3 = true) {
                var s = o.value;
                if ("function" != typeof s) return;
                s(e3);
              }
            } catch (t4) {
              r2 = true, i2 = t4;
            } finally {
              try {
                n3 || null == a.return || a.return();
              } finally {
                if (r2) throw i2;
              }
            }
          }
        }, r.trigger = r.emit;
        var i = r;
        e2.default = i, t2.exports = e2.default;
      }, "./src/index.js": function(t2, e2, n2) {
        function r(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }
        function i(t3, e3) {
          if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
        }
        function o(t3, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r2 = e3[n3];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
          }
        }
        function a(t3, e3, n3) {
          return e3 && o(t3.prototype, e3), t3;
        }
        function s(t3, e3, n3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
        }
        Object.defineProperty(e2, "__esModule", { value: true }), e2.default = void 0;
        var u = r(n2("./src/events.js")), c = r(n2("./src/easing.js")), l = function() {
          function t3(e3, n3) {
            var r2 = this;
            i(this, t3), s(this, "_onVisibilityChange", function() {
              document.hidden ? r2.pause() : r2.resume();
            }), this.el = e3, this.el.classList.add("lazy-line-painter"), this.config = Object.assign({ strokeWidth: null, strokeDash: null, strokeColor: null, strokeOverColor: null, strokeCap: null, strokeJoin: null, strokeOpacity: null, delay: 0, ease: null, drawSequential: false, speedMultiplier: 1, reverse: false, paused: false, progress: 0, repeat: 0, longestDuration: 0, log: true, offset: this.el.getBoundingClientRect() }, n3, {}), Object.assign(this, u.default, {}), this.__raf = null, this.__paths = [], this._generatePaths(), this._parseDataAttrs(), this._updateDuration(), this._setupPaths(), document.addEventListener("visibilitychange", this._onVisibilityChange);
          }
          return a(t3, [{ key: "_generatePaths", value: function() {
            var t4, e3 = Boolean(this.el.dataset.llpComposed);
            t4 = e3 ? this.el.querySelectorAll("[data-llp-id]") : this._uncomposed();
            for (var n3 = 0; n3 < t4.length; n3++) {
              var r2 = { el: t4[n3] };
              this.__paths.push(r2);
            }
          } }, { key: "_uncomposed", value: function() {
            var t4, e3 = this.el.querySelectorAll("path, polygon, circle, ellipse, polyline, line, rect");
            for (t4 = 0; t4 < e3.length; t4++) {
              var n3 = this.el.id.replace(/ /g, "");
              n3 = n3.replace(".", ""), n3 = n3.replace("-", ""), e3[t4].dataset.llpId = n3 + "-" + t4, e3[t4].dataset.llpDuration || (e3[t4].dataset.llpDuration = 1e3), e3[t4].dataset.llpDuration || (e3[t4].dataset.llpDelay = 0);
            }
            return this.config.log && console.log("This lazy line is uncomposed! Visit http://lazylinepainter.info to compose your masterpiece!"), e3;
          } }, { key: "paint", value: function(t4) {
            Object.assign(this.config, t4), this._updateDuration(), this.erase(), this._paint(), this.emit("start");
          } }, { key: "pause", value: function() {
            this.config && (this.config.paused = true), cancelAnimationFrame(this.__raf), this.emit("pause");
          } }, { key: "resume", value: function() {
            var t4 = this;
            this.config && this.config.paused && (requestAnimationFrame(function() {
              t4.adjustStartTime();
            }), this.config.paused = false, this.emit("resume"));
          } }, { key: "erase", value: function() {
            this.config.startTime = null, this.config.elapsedTime = null, cancelAnimationFrame(this.__raf), this.config.onStrokeCompleteDone = false, this.config.paused = false;
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4];
              e3.el.style.strokeDashoffset = e3.length, e3.onStrokeCompleteDone = false, e3.onStrokeStartDone = false;
            }
            this.emit("erase");
          } }, { key: "destroy", value: function() {
            this.config = null, this.el.remove(), this.el = null;
          } }, { key: "set", value: function(t4, e3) {
            switch (t4) {
              case "progress":
                this._setProgress(e3);
                break;
              case "delay":
                this._setDelay(e3);
                break;
              case "reverse":
                this._setReverse(e3);
                break;
              case "ease":
                this._setEase(e3);
                break;
              case "repeat":
                this._setRepeat(e3);
                break;
              default:
                this.config.log && console.log("property " + t4 + " can not be set");
            }
          } }, { key: "_setRepeat", value: function(t4) {
            this.config.repeat = t4;
          } }, { key: "_setEase", value: function(t4) {
            this.config.ease = t4;
          } }, { key: "_setProgress", value: function(t4) {
            this.pause(), this.config.progress = this._getProgress(t4, this.config.ease), this._updatePaths(), this.config.elapsedTime = this.config.progress * this.config.totalDuration;
          } }, { key: "_setDelay", value: function(t4) {
            this.config.delay = t4, this._updateDuration();
          } }, { key: "_setReverse", value: function(t4) {
            this.config.reverse = t4, this._updateDuration();
          } }, { key: "_updateDuration", value: function() {
            var t4 = this._getTotalDuration(), e3 = this._getLongestDuration();
            this.config.totalDuration = this.config.drawSequential ? t4 : e3, this.config.totalDuration += this.config.delay, this._calcPathDurations();
          } }, { key: "_calcPathDurations", value: function() {
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4], n3 = void 0;
              e3.progress = 0, n3 = this.config.reverse ? this.config.drawSequential ? 0 : this.config.totalDuration - (e3.delay + e3.duration) : this.config.drawSequential ? 0 : this.config.delay + e3.delay, e3.startTime = n3, e3.startProgress = e3.startTime / this.config.totalDuration, e3.durationProgress = e3.duration / this.config.totalDuration;
            }
          } }, { key: "get", value: function() {
            return this.config;
          } }, { key: "resize", value: function() {
            this.config.offset = this.el.getBoundingClientRect();
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4];
              e3.el.getBoundingClientRect(), e3.positions = this._getPathPoints(e3.el, e3.length), this._updatePosition(e3);
            }
          } }, { key: "_parseDataAttrs", value: function() {
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4];
              e3.id = e3.el.dataset.llpId, e3.delay = Number(e3.el.dataset.llpDelay) || 0, e3.duration = Number(e3.el.dataset.llpDuration) || 0, e3.reverse = Boolean(e3.el.dataset.llpReverse) || false, e3.ease = Number(e3.el.dataset.llpEase) || null, e3.strokeDash = e3.el.dataset.llpStrokeDash || null, e3.delay *= this.config.speedMultiplier, e3.duration *= this.config.speedMultiplier, this._setStyleAttrs(e3);
            }
          } }, { key: "_setStyleAttrs", value: function(t4) {
            t4.strokeColor = t4.el.dataset.llpStrokeColor || this.config.strokeColor, t4.strokeColor && (t4.el.style.stroke = t4.strokeColor), t4.strokeOpacity = t4.el.dataset.llpStrokeOpacity || this.config.strokeOpacity, t4.strokeOpacity && (t4.el.style.strokeOpacity = t4.strokeOpacity), t4.strokeWidth = t4.el.dataset.llpStrokeWidth || this.config.strokeWidth, t4.strokeWidth && (t4.el.style.strokeWidth = t4.strokeWidth), t4.strokeCap = t4.el.dataset.llpStrokeCap || this.config.strokeCap, t4.strokeCap && (t4.el.style.strokeLinecap = t4.strokeCap), t4.strokeJoin = t4.el.dataset.llpStrokeJoin || this.config.strokeJoin, t4.strokeJoin && (t4.el.style.strokeLinejoin = t4.strokeJoin);
          } }, { key: "_setupPaths", value: function() {
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4];
              e3.index = t4, e3.length = this._getPathLength(e3.el), e3.positions = this._getPathPoints(e3.el, e3.length), e3.el.style.strokeDasharray = this._getStrokeDashArray(e3, e3.length), e3.el.style.strokeDashoffset = e3.length, e3.onStrokeStartDone = false, e3.onStrokeCompleteDone = false;
            }
          } }, { key: "adjustStartTime", value: function() {
            var t4 = this, e3 = performance.now();
            this.config.startTime = e3 - this.config.elapsedTime, requestAnimationFrame(function() {
              t4._paint();
            });
          } }, { key: "_paint", value: function() {
            var t4 = this;
            if (this.config) {
              this.config.startTime || (this.config.startTime = performance.now()), this.emit("update");
              var e3 = performance.now();
              this.config.elapsedTime = e3 - this.config.startTime, this.config.linearProgress = this.config.elapsedTime / this.config.totalDuration, this.config.progress = this._getProgress(this.config.linearProgress, this.config.ease), this._updatePaths(), this.config.linearProgress >= 0 && this.config.linearProgress <= 1 ? this.__raf = requestAnimationFrame(function() {
                t4._paint();
              }) : this.config.repeat > 0 ? (this.config.repeat--, this.paint()) : this.config.repeat === -1 ? this.paint() : this.emit("complete");
            }
          } }, { key: "_updatePaths", value: function() {
            for (var t4 = 0; t4 < this.__paths.length; t4++) {
              var e3 = this.__paths[t4], n3 = this._getElapsedProgress(e3);
              e3.progress = this._getProgress(n3, e3.ease), this._setLine(e3), this._updatePosition(e3), this._updateStrokeCallbacks(e3);
            }
          } }, { key: "_getElapsedProgress", value: function(t4) {
            var e3;
            return this.config.progress >= t4.startProgress && this.config.progress <= t4.startProgress + t4.durationProgress ? e3 = (this.config.progress - t4.startProgress) / t4.durationProgress : this.config.progress >= t4.startProgress + t4.durationProgress ? e3 = 1 : this.config.progress <= t4.startProgress && (e3 = 0), e3;
          } }, { key: "_getProgress", value: function(t4, e3) {
            var n3 = t4;
            return e3 && (n3 = c.default[e3](t4)), n3;
          } }, { key: "_setLine", value: function(t4) {
            var e3 = t4.el, n3 = t4.progress * t4.length;
            t4.reverse ? e3.style.strokeDashoffset = -t4.length + n3 : this.config.reverse ? e3.style.strokeDashoffset = -t4.length + n3 : e3.style.strokeDashoffset = t4.length - n3;
          } }, { key: "_updateStrokeCallbacks", value: function(t4) {
            1 === t4.progress ? t4.onStrokeCompleteDone || (t4.onStrokeCompleteDone = true, this.emit("complete:" + t4.id, t4), this.emit("complete:all", t4)) : t4.progress > 1e-5 && (t4.onStrokeStartDone || (this.emit("start:" + t4.id, t4), this.emit("start:all", t4), t4.onStrokeStartDone = true), this.emit("update:" + t4.id, t4), this.emit("update:all", t4));
          } }, { key: "_updatePosition", value: function(t4) {
            var e3 = Math.round(t4.progress * (t4.length - 1)), n3 = t4.positions[e3];
            n3 && (t4.position = { x: this.config.offset.left + n3.x, y: this.config.offset.top + n3.y });
          } }, { key: "_getTotalDuration", value: function() {
            for (var t4 = 0, e3 = this.__paths, n3 = 0; n3 < e3.length; n3++) {
              var r2 = e3[n3].delay || 0;
              t4 += e3[n3].duration + r2;
            }
            return t4;
          } }, { key: "_getLongestDuration", value: function() {
            for (var t4 = 0, e3 = this.__paths, n3 = 0; n3 < e3.length; n3++) {
              var r2 = e3[n3].delay + e3[n3].duration;
              r2 > t4 && (t4 = r2);
            }
            return t4;
          } }, { key: "_getPathLength", value: function(t4) {
            return this._getTotalLength(t4);
          } }, { key: "_getDistance", value: function(t4, e3) {
            return Math.sqrt(Math.pow(e3.x - t4.x, 2) + Math.pow(e3.y - t4.y, 2));
          } }, { key: "_getCircleLength", value: function(t4) {
            return 2 * Math.PI * t4.getAttribute("r");
          } }, { key: "_getEllipseLength", value: function(t4) {
            var e3 = parseInt(t4.getAttribute("rx"), 1), n3 = parseInt(t4.getAttribute("ry"), 1), r2 = Math.pow(e3 - n3, 2) / Math.pow(e3 + n3, 2), i2 = Math.PI * (e3 + n3) * (1 + 3 * r2 / Math.sqrt(4 - 3 * r2));
            return i2;
          } }, { key: "_getRectLength", value: function(t4) {
            return 2 * t4.getAttribute("width") + 2 * t4.getAttribute("height");
          } }, { key: "_getLineLength", value: function(t4) {
            return this._getDistance({ x: t4.getAttribute("x1"), y: t4.getAttribute("y1") }, { x: t4.getAttribute("x2"), y: t4.getAttribute("y2") });
          } }, { key: "_getPolylineLength", value: function(t4) {
            for (var e3, n3 = t4.points, r2 = 0, i2 = 0; i2 < n3.numberOfItems; i2++) {
              var o2 = n3.getItem(i2);
              i2 > 0 && (r2 += this._getDistance(e3, o2)), e3 = o2;
            }
            return r2;
          } }, { key: "_getPolygonLength", value: function(t4) {
            var e3 = t4.points;
            return this._getPolylineLength(t4) + this._getDistance(e3.getItem(e3.numberOfItems - 1), e3.getItem(0));
          } }, { key: "_getTotalLength", value: function(t4) {
            var e3, n3 = t4.tagName.toLowerCase();
            switch (n3) {
              case "circle":
                e3 = this._getCircleLength(t4);
                break;
              case "rect":
                e3 = this._getRectLength(t4);
                break;
              case "line":
                e3 = this._getLineLength(t4);
                break;
              case "polyline":
                e3 = this._getPolylineLength(t4);
                break;
              case "polygon":
                e3 = this._getPolygonLength(t4);
                break;
              default:
                e3 = t4.getTotalLength();
            }
            return e3;
          } }, { key: "_getPathPoints", value: function(t4, e3) {
            for (var n3 = [], r2 = 0; r2 < e3; r2++) {
              var i2 = t4.getPointAtLength(r2);
              n3.push({ x: i2.x, y: i2.y });
            }
            return n3;
          } }, { key: "_getStrokeDashArray", value: function(t4, e3) {
            return t4.strokeDash ? this._getStrokeDashString(t4.strokeDash, e3) : this.config.strokeDash ? this._getStrokeDashString(this.config.strokeDash, e3) : e3 + " " + e3;
          } }, { key: "_getStrokeDashString", value: function(t4, e3) {
            for (var n3, r2, i2 = "", o2 = t4.split(","), a2 = 0, s2 = o2.length - 1; s2 >= 0; s2--) a2 += Number(o2[s2]);
            n3 = Math.floor(e3 / a2), r2 = e3 - n3 * a2;
            for (var u2 = 0; u2 < n3; u2++) i2 += t4 + ", ";
            var c2 = i2 + r2 + ", " + (e3 + 2);
            return c2.split(",").join("px,") + "px";
          } }]), t3;
        }();
        window.LazyLinePainter = l;
        var f = l;
        e2.default = f, t2.exports = e2.default;
      } });
    });
  }, {}],
  4: [function(t, e, n) {
    !function(t2, r) {
      "object" == typeof n && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? n.sal = r() : t2.sal = r();
    }(this, function() {
      return function(t2) {
        function e2(r) {
          if (n2[r]) return n2[r].exports;
          var i = n2[r] = { i: r, l: false, exports: {} };
          return t2[r].call(i.exports, i, i.exports, e2), i.l = true, i.exports;
        }
        var n2 = {};
        return e2.m = t2, e2.c = n2, e2.d = function(t3, n3, r) {
          e2.o(t3, n3) || Object.defineProperty(t3, n3, { configurable: false, enumerable: true, get: r });
        }, e2.n = function(t3) {
          var n3 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return e2.d(n3, "a", n3), n3;
        }, e2.o = function(t3, e3) {
          return Object.prototype.hasOwnProperty.call(t3, e3);
        }, e2.p = "dist/", e2(e2.s = 0);
      }([function(t2, e2, n2) {
        Object.defineProperty(e2, "__esModule", { value: true });
        var r = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var n3 = arguments[e3];
            for (var r2 in n3) Object.prototype.hasOwnProperty.call(n3, r2) && (t3[r2] = n3[r2]);
          }
          return t3;
        };
        n2(1);
        var i = { rootMargin: "0% 50%", threshold: 0.5, animateClassName: "sal-animate", disabledClassName: "sal-disabled", selector: "[data-sal]", once: true, disabled: false }, o = [], a = null, s = function(t3) {
          return t3.classList.add(i.animateClassName);
        }, u = function(t3) {
          return t3.classList.remove(i.animateClassName);
        }, c = function(t3) {
          return t3.classList.contains(i.animateClassName);
        }, l = function() {
          document.body.classList.remove(i.disabledClassName);
        }, f = function() {
          document.body.classList.add(i.disabledClassName);
        }, h = function() {
          return i.disabled || "function" == typeof i.disabled && i.disabled();
        }, d = function(t3, e3) {
          t3.forEach(function(t4) {
            t4.intersectionRatio >= i.threshold ? (s(t4.target), i.once && e3.unobserve(t4.target)) : i.once || u(t4.target);
          });
        }, p = function() {
          f(), a.disconnect(), a = null;
        }, v = function() {
          l(), a = new IntersectionObserver(d, { rootMargin: i.rootMargin, threshold: i.threshold }), o = [].filter.call(document.querySelectorAll(i.selector), function(t3) {
            return !c(t3, i.animateClassName);
          }), o.forEach(function(t3) {
            return a.observe(t3);
          });
        }, y = function() {
          var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
          if (t3 !== i && (i = r({}, i, t3)), !window.IntersectionObserver) throw f(), Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");
          return h() ? f() : v(), { elements: o, disable: p, enable: v };
        };
        e2.default = y;
      }, function(t2, e2) {
      }]).default;
    });
  }, {}],
  5: [function(t, e, n) {
    (function(t2) {
      !function(t3, r) {
        "function" == typeof define && define.amd ? define([], function() {
          return r(t3);
        }) : "object" == typeof n ? e.exports = r(t3) : t3.SmoothScroll = r(t3);
      }("undefined" != typeof t2 ? t2 : "undefined" != typeof window ? window : this, function(t3) {
        var e2 = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: true, speed: 500, speedAsDuration: false, durationMax: null, durationMin: null, clip: true, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: true, popstate: true, emitEvents: true }, n2 = function() {
          return "querySelector" in document && "addEventListener" in t3 && "requestAnimationFrame" in t3 && "closest" in t3.Element.prototype;
        }, r = function() {
          var t4 = {};
          return Array.prototype.forEach.call(arguments, function(e3) {
            for (var n3 in e3) {
              if (!e3.hasOwnProperty(n3)) return;
              t4[n3] = e3[n3];
            }
          }), t4;
        }, i = function(e3) {
          return !!("matchMedia" in t3 && t3.matchMedia("(prefers-reduced-motion)").matches);
        }, o = function(e3) {
          return parseInt(t3.getComputedStyle(e3).height, 10);
        }, a = function(t4) {
          "#" === t4.charAt(0) && (t4 = t4.substr(1));
          for (var e3, n3 = String(t4), r2 = n3.length, i2 = -1, o2 = "", a2 = n3.charCodeAt(0); ++i2 < r2; ) {
            if (e3 = n3.charCodeAt(i2), 0 === e3) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            o2 += e3 >= 1 && e3 <= 31 || 127 == e3 || 0 === i2 && e3 >= 48 && e3 <= 57 || 1 === i2 && e3 >= 48 && e3 <= 57 && 45 === a2 ? "\\" + e3.toString(16) + " " : e3 >= 128 || 45 === e3 || 95 === e3 || e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 ? n3.charAt(i2) : "\\" + n3.charAt(i2);
          }
          return "#" + o2;
        }, s = function(t4, e3) {
          var n3;
          return "easeInQuad" === t4.easing && (n3 = e3 * e3), "easeOutQuad" === t4.easing && (n3 = e3 * (2 - e3)), "easeInOutQuad" === t4.easing && (n3 = e3 < 0.5 ? 2 * e3 * e3 : -1 + (4 - 2 * e3) * e3), "easeInCubic" === t4.easing && (n3 = e3 * e3 * e3), "easeOutCubic" === t4.easing && (n3 = --e3 * e3 * e3 + 1), "easeInOutCubic" === t4.easing && (n3 = e3 < 0.5 ? 4 * e3 * e3 * e3 : (e3 - 1) * (2 * e3 - 2) * (2 * e3 - 2) + 1), "easeInQuart" === t4.easing && (n3 = e3 * e3 * e3 * e3), "easeOutQuart" === t4.easing && (n3 = 1 - --e3 * e3 * e3 * e3), "easeInOutQuart" === t4.easing && (n3 = e3 < 0.5 ? 8 * e3 * e3 * e3 * e3 : 1 - 8 * --e3 * e3 * e3 * e3), "easeInQuint" === t4.easing && (n3 = e3 * e3 * e3 * e3 * e3), "easeOutQuint" === t4.easing && (n3 = 1 + --e3 * e3 * e3 * e3 * e3), "easeInOutQuint" === t4.easing && (n3 = e3 < 0.5 ? 16 * e3 * e3 * e3 * e3 * e3 : 1 + 16 * --e3 * e3 * e3 * e3 * e3), t4.customEasing && (n3 = t4.customEasing(e3)), n3 || e3;
        }, u = function() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        }, c = function(e3, n3, r2, i2) {
          var o2 = 0;
          if (e3.offsetParent) do
            o2 += e3.offsetTop, e3 = e3.offsetParent;
          while (e3);
          return o2 = Math.max(o2 - n3 - r2, 0), i2 && (o2 = Math.min(o2, u() - t3.innerHeight)), o2;
        }, l = function(t4) {
          return t4 ? o(t4) + t4.offsetTop : 0;
        }, f = function(t4, e3) {
          var n3 = e3.speedAsDuration ? e3.speed : Math.abs(t4 / 1e3 * e3.speed);
          return e3.durationMax && n3 > e3.durationMax ? e3.durationMax : e3.durationMin && n3 < e3.durationMin ? e3.durationMin : parseInt(n3, 10);
        }, h = function(e3) {
          if (history.replaceState && e3.updateURL && !history.state) {
            var n3 = t3.location.hash;
            n3 = n3 ? n3 : "", history.replaceState({ smoothScroll: JSON.stringify(e3), anchor: n3 ? n3 : t3.pageYOffset }, document.title, n3 ? n3 : t3.location.href);
          }
        }, d = function(t4, e3, n3) {
          e3 || history.pushState && n3.updateURL && history.pushState({
            smoothScroll: JSON.stringify(n3),
            anchor: t4.id
          }, document.title, t4 === document.documentElement ? "#top" : "#" + t4.id);
        }, p = function(e3, n3, r2) {
          0 === e3 && document.body.focus(), r2 || (e3.focus(), document.activeElement !== e3 && (e3.setAttribute("tabindex", "-1"), e3.focus(), e3.style.outline = "none"), t3.scrollTo(0, n3));
        }, v = function(e3, n3, r2, i2) {
          if (n3.emitEvents && "function" == typeof t3.CustomEvent) {
            var o2 = new CustomEvent(e3, { bubbles: true, detail: { anchor: r2, toggle: i2 } });
            document.dispatchEvent(o2);
          }
        }, y = function(o2, y2) {
          var g, b, _, S, E = {};
          E.cancelScroll = function(t4) {
            cancelAnimationFrame(S), S = null, t4 || v("scrollCancel", g);
          }, E.animateScroll = function(n3, i2, o3) {
            E.cancelScroll();
            var a2 = r(g || e2, o3 || {}), h2 = "[object Number]" === Object.prototype.toString.call(n3), y3 = h2 || !n3.tagName ? null : n3;
            if (h2 || y3) {
              var m = t3.pageYOffset;
              a2.header && !_ && (_ = document.querySelector(a2.header));
              var b2, w, x2, k2 = l(_), O2 = h2 ? n3 : c(y3, k2, parseInt("function" == typeof a2.offset ? a2.offset(n3, i2) : a2.offset, 10), a2.clip), A = O2 - m, M = u(), P = 0, C = f(A, a2), j = function(e3, r2) {
                var o4 = t3.pageYOffset;
                if (e3 == r2 || o4 == r2 || (m < r2 && t3.innerHeight + o4) >= M) return E.cancelScroll(true), p(n3, r2, h2), v("scrollStop", a2, n3, i2), b2 = null, S = null, true;
              }, L = function(e3) {
                b2 || (b2 = e3), P += e3 - b2, w = 0 === C ? 0 : P / C, w = w > 1 ? 1 : w, x2 = m + A * s(a2, w), t3.scrollTo(0, Math.floor(x2)), j(x2, O2) || (S = t3.requestAnimationFrame(L), b2 = e3);
              };
              0 === t3.pageYOffset && t3.scrollTo(0, 0), d(n3, h2, a2), v("scrollStart", a2, n3, i2), E.cancelScroll(true), t3.requestAnimationFrame(L);
            }
          };
          var x = function(e3) {
            if (!i() && !e3.defaultPrevented && !(0 !== e3.button || e3.metaKey || e3.ctrlKey || e3.shiftKey) && "closest" in e3.target && (b = e3.target.closest(o2), b && "a" === b.tagName.toLowerCase() && !e3.target.closest(g.ignore) && b.hostname === t3.location.hostname && b.pathname === t3.location.pathname && /#/.test(b.href))) {
              var n3, r2 = a(b.hash);
              if ("#" === r2) {
                if (!g.topOnEmptyHash) return;
                n3 = document.documentElement;
              } else n3 = document.querySelector(r2);
              n3 = n3 || "#top" !== r2 ? n3 : document.documentElement, n3 && (e3.preventDefault(), h(g), E.animateScroll(n3, b));
            }
          }, k = function(t4) {
            if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g)) {
              var e3 = history.state.anchor;
              "string" == typeof e3 && e3 && !(e3 = document.querySelector(a(history.state.anchor))) || E.animateScroll(e3, null, { updateURL: false });
            }
          };
          E.destroy = function() {
            g && (document.removeEventListener("click", x, false), t3.removeEventListener("popstate", k, false), E.cancelScroll(), g = null, b = null, _ = null, S = null);
          };
          var O = function() {
            if (!n2()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            E.destroy(), g = r(e2, y2 || {}), _ = g.header ? document.querySelector(g.header) : null, document.addEventListener("click", x, false), g.updateURL && g.popstate && t3.addEventListener("popstate", k, false);
          };
          return O(), E;
        };
        return y;
      });
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  6: [function(t, e, n) {
    (function(t2) {
      window.Element && !Element.prototype.closest && (Element.prototype.closest = function(t3) {
        var e2, n2 = (this.document || this.ownerDocument).querySelectorAll(t3), r = this;
        do
          for (e2 = n2.length; --e2 >= 0 && n2.item(e2) !== r; ) ;
        while (e2 < 0 && (r = r.parentElement));
        return r;
      }), function() {
        function t3(t4, e2) {
          e2 = e2 || { bubbles: false, cancelable: false, detail: void 0 };
          var n2 = document.createEvent("CustomEvent");
          return n2.initCustomEvent(t4, e2.bubbles, e2.cancelable, e2.detail), n2;
        }
        return "function" != typeof window.CustomEvent && (t3.prototype = window.Event.prototype, void (window.CustomEvent = t3));
      }(), function() {
        for (var t3 = 0, e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length && !window.requestAnimationFrame; ++n2) window.requestAnimationFrame = window[e2[n2] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e2[n2] + "CancelAnimationFrame"] || window[e2[n2] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e3, n3) {
          var r = (/* @__PURE__ */ new Date()).getTime(), i = Math.max(0, 16 - (r - t3)), o = window.setTimeout(function() {
            e3(r + i);
          }, i);
          return t3 = r + i, o;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t4) {
          clearTimeout(t4);
        });
      }(), function(t3, r) {
        "function" == typeof define && define.amd ? define([], function() {
          return r(t3);
        }) : "object" == typeof n ? e.exports = r(t3) : t3.SmoothScroll = r(t3);
      }("undefined" != typeof t2 ? t2 : "undefined" != typeof window ? window : this, function(t3) {
        var e2 = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: true, speed: 500, speedAsDuration: false, durationMax: null, durationMin: null, clip: true, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: true, popstate: true, emitEvents: true }, n2 = function() {
          return "querySelector" in document && "addEventListener" in t3 && "requestAnimationFrame" in t3 && "closest" in t3.Element.prototype;
        }, r = function() {
          var t4 = {};
          return Array.prototype.forEach.call(arguments, function(e3) {
            for (var n3 in e3) {
              if (!e3.hasOwnProperty(n3)) return;
              t4[n3] = e3[n3];
            }
          }), t4;
        }, i = function(e3) {
          return !!("matchMedia" in t3 && t3.matchMedia("(prefers-reduced-motion)").matches);
        }, o = function(e3) {
          return parseInt(t3.getComputedStyle(e3).height, 10);
        }, a = function(t4) {
          "#" === t4.charAt(0) && (t4 = t4.substr(1));
          for (var e3, n3 = String(t4), r2 = n3.length, i2 = -1, o2 = "", a2 = n3.charCodeAt(0); ++i2 < r2; ) {
            if (e3 = n3.charCodeAt(i2), 0 === e3) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            o2 += e3 >= 1 && e3 <= 31 || 127 == e3 || 0 === i2 && e3 >= 48 && e3 <= 57 || 1 === i2 && e3 >= 48 && e3 <= 57 && 45 === a2 ? "\\" + e3.toString(16) + " " : e3 >= 128 || 45 === e3 || 95 === e3 || e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 ? n3.charAt(i2) : "\\" + n3.charAt(i2);
          }
          return "#" + o2;
        }, s = function(t4, e3) {
          var n3;
          return "easeInQuad" === t4.easing && (n3 = e3 * e3), "easeOutQuad" === t4.easing && (n3 = e3 * (2 - e3)), "easeInOutQuad" === t4.easing && (n3 = e3 < 0.5 ? 2 * e3 * e3 : -1 + (4 - 2 * e3) * e3), "easeInCubic" === t4.easing && (n3 = e3 * e3 * e3), "easeOutCubic" === t4.easing && (n3 = --e3 * e3 * e3 + 1), "easeInOutCubic" === t4.easing && (n3 = e3 < 0.5 ? 4 * e3 * e3 * e3 : (e3 - 1) * (2 * e3 - 2) * (2 * e3 - 2) + 1), "easeInQuart" === t4.easing && (n3 = e3 * e3 * e3 * e3), "easeOutQuart" === t4.easing && (n3 = 1 - --e3 * e3 * e3 * e3), "easeInOutQuart" === t4.easing && (n3 = e3 < 0.5 ? 8 * e3 * e3 * e3 * e3 : 1 - 8 * --e3 * e3 * e3 * e3), "easeInQuint" === t4.easing && (n3 = e3 * e3 * e3 * e3 * e3), "easeOutQuint" === t4.easing && (n3 = 1 + --e3 * e3 * e3 * e3 * e3), "easeInOutQuint" === t4.easing && (n3 = e3 < 0.5 ? 16 * e3 * e3 * e3 * e3 * e3 : 1 + 16 * --e3 * e3 * e3 * e3 * e3), t4.customEasing && (n3 = t4.customEasing(e3)), n3 || e3;
        }, u = function() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        }, c = function(e3, n3, r2, i2) {
          var o2 = 0;
          if (e3.offsetParent) do
            o2 += e3.offsetTop, e3 = e3.offsetParent;
          while (e3);
          return o2 = Math.max(o2 - n3 - r2, 0), i2 && (o2 = Math.min(o2, u() - t3.innerHeight)), o2;
        }, l = function(t4) {
          return t4 ? o(t4) + t4.offsetTop : 0;
        }, f = function(t4, e3) {
          var n3 = e3.speedAsDuration ? e3.speed : Math.abs(t4 / 1e3 * e3.speed);
          return e3.durationMax && n3 > e3.durationMax ? e3.durationMax : e3.durationMin && n3 < e3.durationMin ? e3.durationMin : parseInt(n3, 10);
        }, h = function(e3) {
          if (history.replaceState && e3.updateURL && !history.state) {
            var n3 = t3.location.hash;
            n3 = n3 ? n3 : "", history.replaceState({ smoothScroll: JSON.stringify(e3), anchor: n3 ? n3 : t3.pageYOffset }, document.title, n3 ? n3 : t3.location.href);
          }
        }, d = function(t4, e3, n3) {
          e3 || history.pushState && n3.updateURL && history.pushState({ smoothScroll: JSON.stringify(n3), anchor: t4.id }, document.title, t4 === document.documentElement ? "#top" : "#" + t4.id);
        }, p = function(e3, n3, r2) {
          0 === e3 && document.body.focus(), r2 || (e3.focus(), document.activeElement !== e3 && (e3.setAttribute("tabindex", "-1"), e3.focus(), e3.style.outline = "none"), t3.scrollTo(0, n3));
        }, v = function(e3, n3, r2, i2) {
          if (n3.emitEvents && "function" == typeof t3.CustomEvent) {
            var o2 = new CustomEvent(e3, { bubbles: true, detail: { anchor: r2, toggle: i2 } });
            document.dispatchEvent(o2);
          }
        }, y = function(o2, y2) {
          var g, b, _, S, E = {};
          E.cancelScroll = function(t4) {
            cancelAnimationFrame(S), S = null, t4 || v("scrollCancel", g);
          }, E.animateScroll = function(n3, i2, o3) {
            E.cancelScroll();
            var a2 = r(g || e2, o3 || {}), h2 = "[object Number]" === Object.prototype.toString.call(n3), y3 = h2 || !n3.tagName ? null : n3;
            if (h2 || y3) {
              var m = t3.pageYOffset;
              a2.header && !_ && (_ = document.querySelector(a2.header));
              var b2, w, x2, k2 = l(_), O2 = h2 ? n3 : c(y3, k2, parseInt("function" == typeof a2.offset ? a2.offset(n3, i2) : a2.offset, 10), a2.clip), A = O2 - m, M = u(), P = 0, C = f(A, a2), j = function(e3, r2) {
                var o4 = t3.pageYOffset;
                if (e3 == r2 || o4 == r2 || (m < r2 && t3.innerHeight + o4) >= M) return E.cancelScroll(true), p(n3, r2, h2), v("scrollStop", a2, n3, i2), b2 = null, S = null, true;
              }, L = function(e3) {
                b2 || (b2 = e3), P += e3 - b2, w = 0 === C ? 0 : P / C, w = w > 1 ? 1 : w, x2 = m + A * s(a2, w), t3.scrollTo(0, Math.floor(x2)), j(x2, O2) || (S = t3.requestAnimationFrame(L), b2 = e3);
              };
              0 === t3.pageYOffset && t3.scrollTo(0, 0), d(n3, h2, a2), v("scrollStart", a2, n3, i2), E.cancelScroll(true), t3.requestAnimationFrame(L);
            }
          };
          var x = function(e3) {
            if (!i() && !e3.defaultPrevented && !(0 !== e3.button || e3.metaKey || e3.ctrlKey || e3.shiftKey) && "closest" in e3.target && (b = e3.target.closest(o2), b && "a" === b.tagName.toLowerCase() && !e3.target.closest(g.ignore) && b.hostname === t3.location.hostname && b.pathname === t3.location.pathname && /#/.test(b.href))) {
              var n3, r2 = a(b.hash);
              if ("#" === r2) {
                if (!g.topOnEmptyHash) return;
                n3 = document.documentElement;
              } else n3 = document.querySelector(r2);
              n3 = n3 || "#top" !== r2 ? n3 : document.documentElement, n3 && (e3.preventDefault(), h(g), E.animateScroll(n3, b));
            }
          }, k = function(t4) {
            if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g)) {
              var e3 = history.state.anchor;
              "string" == typeof e3 && e3 && !(e3 = document.querySelector(a(history.state.anchor))) || E.animateScroll(e3, null, { updateURL: false });
            }
          };
          E.destroy = function() {
            g && (document.removeEventListener("click", x, false), t3.removeEventListener("popstate", k, false), E.cancelScroll(), g = null, b = null, _ = null, S = null);
          };
          var O = function() {
            if (!n2()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            E.destroy(), g = r(e2, y2 || {}), _ = g.header ? document.querySelector(g.header) : null, document.addEventListener("click", x, false), g.updateURL && g.popstate && t3.addEventListener("popstate", k, false);
          };
          return O(), E;
        };
        return y;
      });
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  7: [function(t, e, n) {
    !function(t2, r) {
      "object" == typeof n && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof n ? n.vanillaTextMask = r() : t2.vanillaTextMask = r();
    }(this, function() {
      return function(t2) {
        function e2(r) {
          if (n2[r]) return n2[r].exports;
          var i = n2[r] = { exports: {}, id: r, loaded: false };
          return t2[r].call(i.exports, i, i.exports, e2), i.loaded = true, i.exports;
        }
        var n2 = {};
        return e2.m = t2, e2.c = n2, e2.p = "", e2(0);
      }([function(t2, e2, n2) {
        function r(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }
        function i(t3) {
          var e3 = t3.inputElement, n3 = (0, s.default)(t3), r2 = function(t4) {
            var e4 = t4.target.value;
            return n3.update(e4);
          };
          return e3.addEventListener("input", r2), n3.update(e3.value), { textMaskInputElement: n3, destroy: function() {
            e3.removeEventListener("input", r2);
          } };
        }
        Object.defineProperty(e2, "__esModule", { value: true }), e2.conformToMask = void 0, e2.maskInput = i;
        var o = n2(2);
        Object.defineProperty(e2, "conformToMask", { enumerable: true, get: function() {
          return r(o).default;
        } });
        var a = n2(5), s = r(a);
        e2.default = i;
      }, function(t2, e2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.placeholderChar = "_", e2.strFunction = "function";
      }, function(t2, e2, n2) {
        function r() {
          var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!(0, o.isArray)(e3)) {
            if (("undefined" == typeof e3 ? "undefined" : i(e3)) !== a.strFunction) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
            e3 = e3(t3, n3), e3 = (0, o.processCaretTraps)(e3).maskWithoutCaretTraps;
          }
          var r2 = n3.guide, c = void 0 === r2 || r2, l = n3.previousConformedValue, f = void 0 === l ? u : l, h = n3.placeholderChar, d = void 0 === h ? a.placeholderChar : h, p = n3.placeholder, v = void 0 === p ? (0, o.convertMaskToPlaceholder)(e3, d) : p, y = n3.currentCaretPosition, g = n3.keepCharPositions, m = c === false && void 0 !== f, b = t3.length, _ = f.length, w = v.length, S = e3.length, E = b - _, x = E > 0, k = y + (x ? -E : 0), O = k + Math.abs(E);
          if (g === true && !x) {
            for (var A = u, M = k; M < O; M++) v[M] === d && (A += d);
            t3 = t3.slice(0, k) + A + t3.slice(k, b);
          }
          for (var P = t3.split(u).map(function(t4, e4) {
            return { char: t4, isNew: e4 >= k && e4 < O };
          }), C = b - 1; C >= 0; C--) {
            var j = P[C].char;
            if (j !== d) {
              var L = C >= k && _ === S;
              j === v[L ? C - E : C] && P.splice(C, 1);
            }
          }
          var T = u, I = false;
          t: for (var N = 0; N < w; N++) {
            var F = v[N];
            if (F === d) {
              if (P.length > 0) for (; P.length > 0; ) {
                var R = P.shift(), D = R.char, B = R.isNew;
                if (D === d && m !== true) {
                  T += d;
                  continue t;
                }
                if (e3[N].test(D)) {
                  if (g === true && B !== false && f !== u && c !== false && x) {
                    for (var q = P.length, W = null, H = 0; H < q; H++) {
                      var V = P[H];
                      if (V.char !== d && V.isNew === false) break;
                      if (V.char === d) {
                        W = H;
                        break;
                      }
                    }
                    null !== W ? (T += D, P.splice(W, 1)) : N--;
                  } else T += D;
                  continue t;
                }
                I = true;
              }
              m === false && (T += v.substr(N, w));
              break;
            }
            T += F;
          }
          if (m && x === false) {
            for (var U = null, z = 0; z < T.length; z++) v[z] === d && (U = z);
            T = null !== U ? T.substr(0, U + 1) : u;
          }
          return { conformedValue: T, meta: { someCharsRejected: I } };
        }
        Object.defineProperty(e2, "__esModule", { value: true });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        };
        e2.default = r;
        var o = n2(3), a = n2(1), s = [], u = "";
      }, function(t2, e2, n2) {
        function r() {
          var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.placeholderChar;
          if (!i(t3)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
          if (t3.indexOf(e3) !== -1) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(e3) + "\n\n") + ("The mask that was received is: " + JSON.stringify(t3)));
          return t3.map(function(t4) {
            return t4 instanceof RegExp ? e3 : t4;
          }).join("");
        }
        function i(t3) {
          return Array.isArray && Array.isArray(t3) || t3 instanceof Array;
        }
        function o(t3) {
          return "string" == typeof t3 || t3 instanceof String;
        }
        function a(t3) {
          return "number" == typeof t3 && void 0 === t3.length && !isNaN(t3);
        }
        function s(t3) {
          for (var e3 = [], n3 = void 0; n3 = t3.indexOf(l), n3 !== -1; ) e3.push(n3), t3.splice(n3, 1);
          return { maskWithoutCaretTraps: t3, indexes: e3 };
        }
        Object.defineProperty(e2, "__esModule", { value: true }), e2.convertMaskToPlaceholder = r, e2.isArray = i, e2.isString = o, e2.isNumber = a, e2.processCaretTraps = s;
        var u = n2(1), c = [], l = "[]";
      }, function(t2, e2) {
        function n2(t3) {
          var e3 = t3.previousConformedValue, n3 = void 0 === e3 ? i : e3, o = t3.previousPlaceholder, a = void 0 === o ? i : o, s = t3.currentCaretPosition, u = void 0 === s ? 0 : s, c = t3.conformedValue, l = t3.rawValue, f = t3.placeholderChar, h = t3.placeholder, d = t3.indexesOfPipedChars, p = void 0 === d ? r : d, v = t3.caretTrapIndexes, y = void 0 === v ? r : v;
          if (0 === u || !l.length) return 0;
          var g = l.length, m = n3.length, b = h.length, _ = c.length, w = g - m, S = w > 0, E = 0 === m, x = w > 1 && !S && !E;
          if (x) return u;
          var k = S && (n3 === c || c === h), O = 0, A = void 0, M = void 0;
          if (k) O = u - w;
          else {
            var P = c.toLowerCase(), C = l.toLowerCase(), j = C.substr(0, u).split(i), L = j.filter(function(t4) {
              return P.indexOf(t4) !== -1;
            });
            M = L[L.length - 1];
            var T = a.substr(0, L.length).split(i).filter(function(t4) {
              return t4 !== f;
            }).length, I = h.substr(0, L.length).split(i).filter(function(t4) {
              return t4 !== f;
            }).length, N = I !== T, F = void 0 !== a[L.length - 1] && void 0 !== h[L.length - 2] && a[L.length - 1] !== f && a[L.length - 1] !== h[L.length - 1] && a[L.length - 1] === h[L.length - 2];
            !S && (N || F) && T > 0 && h.indexOf(M) > -1 && void 0 !== l[u] && (A = true, M = l[u]);
            for (var R = p.map(function(t4) {
              return P[t4];
            }), D = R.filter(function(t4) {
              return t4 === M;
            }).length, B = L.filter(function(t4) {
              return t4 === M;
            }).length, q = h.substr(0, h.indexOf(f)).split(i).filter(function(t4, e4) {
              return t4 === M && l[e4] !== t4;
            }).length, W = q + B + D + (A ? 1 : 0), H = 0, V = 0; V < _; V++) {
              var U = P[V];
              if (O = V + 1, U === M && H++, H >= W) break;
            }
          }
          if (S) {
            for (var z = O, G = O; G <= b; G++) if (h[G] === f && (z = G), h[G] === f || y.indexOf(G) !== -1 || G === b) return z;
          } else if (A) {
            for (var Q = O - 1; Q >= 0; Q--) if (c[Q] === M || y.indexOf(Q) !== -1 || 0 === Q) return Q;
          } else for (var Y = O; Y >= 0; Y--) if (h[Y - 1] === f || y.indexOf(Y) !== -1 || 0 === Y) return Y;
        }
        Object.defineProperty(e2, "__esModule", { value: true }), e2.default = n2;
        var r = [], i = "";
      }, function(t2, e2, n2) {
        function r(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }
        function i(t3) {
          var e3 = { previousConformedValue: void 0, previousPlaceholder: void 0 };
          return { state: e3, update: function(n3) {
            var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3, i2 = r2.inputElement, c2 = r2.mask, f2 = r2.guide, y2 = r2.pipe, m2 = r2.placeholderChar, b2 = void 0 === m2 ? p.placeholderChar : m2, _ = r2.keepCharPositions, w = void 0 !== _ && _, S = r2.showMask, E = void 0 !== S && S;
            if ("undefined" == typeof n3 && (n3 = i2.value), n3 !== e3.previousConformedValue) {
              ("undefined" == typeof c2 ? "undefined" : u(c2)) === g && void 0 !== c2.pipe && void 0 !== c2.mask && (y2 = c2.pipe, c2 = c2.mask);
              var x = void 0, k = void 0;
              if (c2 instanceof Array && (x = (0, d.convertMaskToPlaceholder)(c2, b2)), c2 !== false) {
                var O = a(n3), A = i2.selectionEnd, M = e3.previousConformedValue, P = e3.previousPlaceholder, C = void 0;
                if (("undefined" == typeof c2 ? "undefined" : u(c2)) === p.strFunction) {
                  if (k = c2(O, { currentCaretPosition: A, previousConformedValue: M, placeholderChar: b2 }), k === false) return;
                  var j = (0, d.processCaretTraps)(k), L = j.maskWithoutCaretTraps, T = j.indexes;
                  k = L, C = T, x = (0, d.convertMaskToPlaceholder)(k, b2);
                } else k = c2;
                var I = { previousConformedValue: M, guide: f2, placeholderChar: b2, pipe: y2, placeholder: x, currentCaretPosition: A, keepCharPositions: w }, N = (0, h.default)(O, k, I), F = N.conformedValue, R = ("undefined" == typeof y2 ? "undefined" : u(y2)) === p.strFunction, D = {};
                R && (D = y2(F, s({ rawValue: O }, I)), D === false ? D = { value: M, rejected: true } : (0, d.isString)(D) && (D = { value: D }));
                var B = R ? D.value : F, q = (0, l.default)({ previousConformedValue: M, previousPlaceholder: P, conformedValue: B, placeholder: x, rawValue: O, currentCaretPosition: A, placeholderChar: b2, indexesOfPipedChars: D.indexesOfPipedChars, caretTrapIndexes: C }), W = B === x && 0 === q, H = E ? x : v, V = W ? H : B;
                e3.previousConformedValue = V, e3.previousPlaceholder = x, i2.value !== V && (i2.value = V, o(i2, q));
              }
            }
          } };
        }
        function o(t3, e3) {
          document.activeElement === t3 && (m ? b(function() {
            return t3.setSelectionRange(e3, e3, y);
          }, 0) : t3.setSelectionRange(e3, e3, y));
        }
        function a(t3) {
          if ((0, d.isString)(t3)) return t3;
          if ((0, d.isNumber)(t3)) return String(t3);
          if (void 0 === t3 || null === t3) return v;
          throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(t3));
        }
        Object.defineProperty(e2, "__esModule", { value: true });
        var s = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var n3 = arguments[e3];
            for (var r2 in n3) Object.prototype.hasOwnProperty.call(n3, r2) && (t3[r2] = n3[r2]);
          }
          return t3;
        }, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        };
        e2.default = i;
        var c = n2(4), l = r(c), f = n2(2), h = r(f), d = n2(3), p = n2(1), v = "", y = "none", g = "object", m = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
      }]);
    });
  }, {}],
  8: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var o = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), a = t("../tiny-slider/tiny-slider"), s = r(a), u = function() {
      function t2() {
        i(this, t2), this.advantages = document.querySelector(".advantages"), this.advantagesList = this.advantages.querySelector(".advantages__sliders"), this.sliderControls = this.advantages.querySelector(".slider__controls"), this.configSlider = { container: this.advantagesList, controlsContainer: this.sliderControls, items: 1, nav: false, loop: true, rewind: true, speed: 500, autoplayTimeout: 5e3, responsive: { 768: { autoplay: true } } };
      }
      return o(t2, [{ key: "init", value: function() {
        var t3 = (0, s.default)(this.configSlider);
        this.slider = t3;
      } }]), t2;
    }();
    n.default = u, e.exports = n.default;
  }, { "../tiny-slider/tiny-slider": 16 }],
  9: [function(t, e, n) {
    function r(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function i(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var o = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), a = function() {
      function t2() {
        i(this, t2), this.buttonRippleAll = document.querySelectorAll(".button--ripple");
      }
      return o(t2, [{ key: "mapButtonRipple", value: function() {
        var t3 = this;
        [].concat(r(this.buttonRippleAll)).map(function(e2) {
          var n2 = document.createElement("span");
          n2.setAttribute("class", "ripple-box"), e2.appendChild(n2), e2.addEventListener("mousedown", t3.rippleEffect);
        });
      } }, { key: "rippleEffect", value: function(t3) {
        var e2 = this.lastElementChild, n2 = document.createElement("span"), r2 = e2.offsetWidth, i2 = e2.offsetHeight, o2 = e2.getBoundingClientRect().top, a2 = e2.getBoundingClientRect().left, s = t3.clientX, u = t3.clientY, c = s - a2, l = u - o2, f = r2 / 2 < c ? c : r2 - c, h = i2 / 2 < l ? l : i2 - l, d = Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)), p = window.getComputedStyle(this);
        e2.appendChild(n2);
        var v = n2.closest(".button--ripple").getAttribute("data-ripple-color");
        n2.setAttribute("class", "ripple-effect " + v), n2.style.height = 2 * d + "px", n2.style.width = 2 * d + "px", n2.style.top = u - o2 - d + "px", n2.style.left = s - a2 - d + "px", e2.style.borderTopLeftRadius = p.getPropertyValue("border-top-left-radius"), e2.style.borderTopRightRadius = p.getPropertyValue("border-top-right-radius"), e2.style.borderBottomLeftRadius = p.getPropertyValue("border-bottom-left-radius"), e2.style.borderBottomRightRadius = p.getPropertyValue("border-bottom-right-radius"), setTimeout(function() {
          e2.removeChild(n2);
        }, 1e3);
      } }, { key: "init", value: function() {
        this.buttonRippleAll && this.mapButtonRipple();
      } }]), t2;
    }();
    n.default = a, e.exports = n.default;
  }, {}],
  10: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var o = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), a = t("../tiny-slider/tiny-slider"), s = r(a), u = function() {
      function t2() {
        i(this, t2), this.distributorList = document.querySelector(".customers__list"), this.config = { autoWidth: true, container: this.distributorList, controls: false, items: 1, nav: false, loop: false, gutter: 16, mouseDrag: true, swipeAngle: false, cancelable: false, responsive: { 1440: { disable: true } } }, this.slider;
      }
      return o(t2, [{ key: "getNumberSlide", value: function(t3) {
        var e2 = Number(t3.getAttribute("id").match(/\d+/g)[1]);
        this.slider.goTo(e2);
      } }, { key: "init", value: function() {
        var t3 = this;
        this.distributorList && window.innerWidth < 1440 && (this.slider = (0, s.default)(this.config), this.distributorList.addEventListener("click", function(e2) {
          var n2 = e2.target.closest(".customers__item");
          n2 ? t3.getNumberSlide(n2) : e2.preventDefault();
        }));
      } }]), t2;
    }();
    n.default = u, e.exports = n.default;
  }, { "../tiny-slider/tiny-slider": 16 }],
  11: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var o = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), a = t("../tiny-slider/tiny-slider"), s = r(a), u = function() {
      function t2() {
        i(this, t2), this.distributorList = document.querySelector(".distributor__list"), this.config = { autoWidth: true, container: this.distributorList, controls: false, items: 1, nav: false, loop: false, gutter: 16, mouseDrag: true, swipeAngle: false, cancelable: false, responsive: { 1440: { disable: true } } }, this.slider;
      }
      return o(t2, [{ key: "getNumberSlide", value: function(t3) {
        var e2 = Number(t3.getAttribute("id").match(/\d+/g)[1]);
        this.slider.goTo(e2);
      } }, { key: "init", value: function() {
        var t3 = this;
        this.distributorList && window.innerWidth < 1440 && (this.slider = (0, s.default)(this.config), this.distributorList.addEventListener("click", function(e2) {
          var n2 = e2.target.closest(".distributor__item");
          n2 ? t3.getNumberSlide(n2) : e2.preventDefault();
        }));
      } }]), t2;
    }();
    n.default = u, e.exports = n.default;
  }, { "../tiny-slider/tiny-slider": 16 }],
  12: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function o(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var a = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), s = t("../../../node_modules/lazy-line-painter/lib/lazy-line-painter-1.9.6"), u = r(s), c = function() {
      function t2() {
        o(this, t2), this.planarSvg = document.querySelector("#highlight-lines");  this.highlightStrokeAll = this.planarSvg?.querySelectorAll("[data-llp-id]"), this.configAnimation = { repeat: -1 };
      }
      return a(t2, [{ key: "removeStroke", value: function() {
        [].concat(i(this.highlightStrokeAll)).map(function(t3) {
          return t3.removeAttribute("style");
        });
      } }, { key: "init", value: function() {
        if (this.planarSvg) if (navigator.userAgent.indexOf("MSIE") != -1 || 1 == !!document.documentMode || window.navigator.userAgent.indexOf("Edge") > -1) this.removeStroke();
        else {
          var t3 = new u.default(this.planarSvg, this.configAnimation);
          t3.paint();
        }
      } }]), t2;
    }();
    n.default = c, e.exports = n.default;
  }, { "../../../node_modules/lazy-line-painter/lib/lazy-line-painter-1.9.6": 3 }],
  13: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function o(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var a = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), s = t("../../../node_modules/vanilla-text-mask/dist/vanillaTextMask"), u = r(s), c = function() {
      function t2(e2) {
        o(this, t2), this.portal = document.querySelector(".portal"), this.portalClose = this.portal.querySelector(".close-button"), this.inputAll = document.querySelectorAll(".form__input"), this.textareaAll = document.querySelectorAll(".form__textarea"), this.phoneInput = document.getElementById("phone"), this.buttonPartnerAll = document.querySelectorAll(".button--partner"), this.overlay = e2, this.body = document.body, this.form = document.querySelector(".form"), this.formName = document.getElementById("name"), this.formEmail = document.getElementById("email"), this.formPhone = document.getElementById("phone"), this.formText = document.getElementById("text"), this.formSuccess = document.querySelector(".form-success");
      }
      return a(t2, [{ key: "focusFieldHandle", value: function(t3) {
        t3.addEventListener("focus", function() {
          return t3.classList.add("focus");
        });
      } }, { key: "blurFieldHandle", value: function(t3) {
        t3.addEventListener("blur", function() {
          return 0 === t3.value.length && t3.classList.remove("focus");
        });
      } }, { key: "fieldMap", value: function(t3) {
        var e2 = this;
        [].concat(i(t3)).map(function(t4) {
          e2.focusFieldHandle(t4), e2.blurFieldHandle(t4);
        });
      } }, { key: "handlePortalClose", value: function() {
        this.overlay.classList.remove("overlay--visible"), this.portal.classList.remove("portal--visible"), this.form.classList.remove("form--hidden"), this.formSuccess.classList.remove("form-success--visible"), this.form.reset(), this.removeFocus();
      } }, { key: "removeFocus", value: function() {
        [].concat(i(this.form.querySelectorAll(".form__field"))).map(function(t3) {
          t3.firstElementChild.classList.remove("focus");
        });
      } }, { key: "phoneMask", value: function() {
        return (0, u.default)({ inputElement: this.phoneInput, mask: ["+", "7", " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/] });
      } }, { key: "mapButtonPartner", value: function() {
        var t3 = this;
        [].concat(i(this.buttonPartnerAll)).map(function(e2) {
          return t3.buttonPartnerHandle(e2);
        });
      } }, { key: "buttonPartnerHandle", value: function(t3) {
        var e2 = this;
        t3.addEventListener("click", function() {
          e2.overlay.classList.add("overlay--visible"), e2.portal.classList.add("portal--visible");
        });
      } }, { key: "init", value: function() {
        var t3 = this;
        this.inputAll && this.fieldMap(this.inputAll), this.inputAll && this.fieldMap(this.textareaAll), this.portalClose && this.portalClose.addEventListener("click", function() {
          return t3.handlePortalClose();
        }), this.overlay && this.overlay.addEventListener("click", function() {
          return t3.handlePortalClose();
        }), this.phoneInput && this.phoneMask(), this.buttonPartnerAll && this.mapButtonPartner()
      } }]), t2;
    }();
    n.default = c, e.exports = n.default;
  }, { "../../../node_modules/vanilla-text-mask/dist/vanillaTextMask": 7 }],
  14: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function o(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var a = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), s = t("../tiny-slider/tiny-slider"), u = r(s), c = function() {
      function t2() {
        o(this, t2), this.producer = document.querySelector(".producer"), this.producerList = document.querySelector(".producer__list"), this.producerItemAll = document.querySelectorAll(".producer__item"), this.sliderControls = this.producer.querySelector(".slider__controls"), this.configSlider = { container: this.producerList, controlsContainer: this.sliderControls, loop: false, nav: false, items: 2, axis: "vertical", swipeAngle: false, speed: 400 }, this.producerRow;
      }
      return a(t2, [{ key: "removeAllItemToList", value: function() {
        for (; this.producerList.firstChild; ) this.producerList.removeChild(this.producerList.firstChild);
      } }, { key: "mapProducerItem", value: function(t3) {
        var e2 = this;
        this.removeAllItemToList(), this.producerList.setAttribute("class", "producer__list"), [].concat(i(this.producerItemAll)).map(function(n2, r2) {
          e2.checkItems(n2, r2, t3);
        });
      } }, { key: "checkItems", value: function(t3, e2, n2) {
        e2 % n2 === 0 ? (this.producerRow = document.createElement("div"), this.producerRow.setAttribute("class", "producer__row"), this.producerRow.appendChild(t3), this.producerList.appendChild(this.producerRow)) : this.producerRow.appendChild(t3);
      } }, { key: "checkWindowWidth", value: function() {
        window.innerWidth >= 1440 ? this.mapProducerItem(5) : window.innerWidth >= 768 ? this.mapProducerItem(2) : window.innerWidth >= 320 && this.mapProducerItem(1);
      } }, { key: "init", value: function() {
        var t3 = this;
        this.producerItemAll && (this.checkWindowWidth(), window.addEventListener("resize", function() {
          t3.checkWindowWidth();
        })), (0, u.default)(this.configSlider);
      } }]), t2;
    }();
    n.default = c, e.exports = n.default;
  }, { "../tiny-slider/tiny-slider": 16 }],
  15: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function o(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var a = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), s = t("../tiny-slider/tiny-slider"), u = r(s), c = function() {
      function t2() {
        o(this, t2), this.tabItemAll = document.querySelectorAll(".tabs__tab-item"), this.tabContentAll = document.querySelectorAll(".tabs__content-item"), this.tabList = document.querySelector(".tabs__tab-list"), this.contentList = document.querySelector(".tabs__content-list"), this.configSlider = {
          autoWidth: true,
          loop: false,
          mouseDrag: true,
          container: this.tabList,
          controls: false,
          swipeAngle: false,
          speed: 400,
          nav: false,
          autoPlay: false,
          cancelable: false,
          gutter: 16,
          responsive: { 1440: { disable: true, gutter: 0 } }
        }, this.slider;
      }
      return a(t2, [{ key: "getNumberSlide", value: function(t3) {
        var e2 = Number(t3.getAttribute("id").match(/\d+/g)[1]);
        this.slider.goTo(e2);
      } }, { key: "removeActiveTab", value: function() {
        [].concat(i(this.tabItemAll)).map(function(t3) {
          t3.classList.remove("tabs__tab-item--active");
        }), [].concat(i(this.tabContentAll)).map(function(t3) {
          t3.classList.remove("tabs__content-item--active");
        });
      } }, { key: "activeTabContent", value: function(t3) {
        var e2 = t3.dataset.tab;
        this.contentList.querySelector(e2).classList.add("tabs__content-item--active");
      } }, { key: "activeTabHandle", value: function() {
        var t3 = this;
        this.tabList.addEventListener("click", function(e2) {
          var n2 = e2.target.closest(".tabs__tab-item");
          n2 ? (t3.removeActiveTab(), t3.activeTabContent(n2), t3.getNumberSlide(n2), n2.classList.add("tabs__tab-item--active")) : e2.preventDefault();
        });
      } }, { key: "init", value: function() {
        this.tabList && this.activeTabHandle();
        var t3 = (0, u.default)(this.configSlider);
        this.slider = t3;
      } }]), t2;
    }();
    n.default = c, e.exports = n.default;
  }, { "../tiny-slider/tiny-slider": 16 }],
  16: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    var r = t("../../_scripts/tiny-slider/src/tiny-slider");
    n.default = function(t2) {
      return (0, r.tns)(t2);
    }, e.exports = n.default;
  }, { "../../_scripts/tiny-slider/src/tiny-slider": 60 }],
  17: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2) {
      if (Array.isArray(t2)) {
        for (var e2 = 0, n2 = Array(t2.length); e2 < t2.length; e2++) n2[e2] = t2[e2];
        return n2;
      }
      return Array.from(t2);
    }
    function o(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(n, "__esModule", { value: true });
    var a = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }(), s = t("../../../node_modules/smooth-scroll/dist/smooth-scroll"), u = r(s), c = function() {
      function t2() {
        o(this, t2), this.topNav = document.querySelector(".top-nav"), this.burger = this.topNav.querySelector(".burger"), this.nav = document.querySelector(".nav"), this.navList = document.querySelector(".nav__list"), this.navItemAll = document.querySelectorAll(".nav__item"), this.navLinkAll = document.querySelectorAll(".nav__link"), this.navSectionAll = document.querySelectorAll(".nav-section"), this.body = document.body, this.navigationHeight = 80, this.configSmoothScroll = { speed: 800, speedAsDuration: true, offset: function() {
          return window.innerWidth < 1440 ? 25 : 0;
        } };
      }
      return a(t2, [{ key: "removeActiveNav", value: function() {
        [].concat(i(this.navItemAll)).map(function(t3) {
          t3.classList.remove("nav__item--active");
        });
      } }, { key: "navigationFixedHandle", value: function() {
        var t3 = this;
        window.addEventListener("scroll", function() {
          (window.pageYOffset || document.documentElement.scrollTop) >= t3.navigationHeight / 2 ? t3.topNav.classList.add("is-fixed") : t3.topNav.classList.remove("is-fixed");
        });
      } }
    //   , 
      
    //   { key: "toggleBurger", value: function() {
    //     this.burger.classList.toggle("burger--close"), this.nav.classList.toggle("nav--open"), this.body.classList.toggle("scroll-lock");
    //   } }, { key: "burgerHandle", value: function() {
    //     var t3 = this;
    //     this.burger.addEventListener("click", function() {
    //       t3.toggleBurger();
    //     });
    //   } 
    // }
    , { key: "navListHandle", value: function() {
        var t3 = this;
        this.navList.addEventListener("click", function(e2) {
          var n2 = e2.target.closest(".nav__item");
          n2 ? (t3.removeActiveNav(), n2.classList.add("nav__item--active"), window.innerWidth < 1440 && t3.toggleBurger()) : e2.preventDefault();
        });
      } }, { key: "afterRefreshPage", value: function() {
        window.location.hash && (window.history.replaceState ? window.history.replaceState("", "/", window.location.pathname) : window.location.hash = ""), window.addEventListener("beforeunload", function() {
          window.scrollTo(0, 0);
        });
      } }, { key: "windowScrollHandle", value: function(t3, e2) {
        var n2 = this;
        window.addEventListener("scroll", function() {
          var r2 = window.pageYOffset;
          t3.offsetTop <= r2 && (n2.removeActiveNav(), window.innerHeight + window.scrollY >= document.body.offsetHeight ? n2.navLinkAll[4].parentElement.classList.add("nav__item--active") : n2.navLinkAll[e2].parentElement.classList.add("nav__item--active"));
        });
      } }, { key: "mapNavSection", value: function() {
        var t3 = this;
        [].concat(i(this.navSectionAll)).map(function(e2, n2) {
          t3.windowScrollHandle(e2, n2);
        });
      } }, { key: "init", value: function() {
        this.afterRefreshPage(), this.topNav && window.innerWidth >= 1440 && this.navigationFixedHandle(), this.burger &&  this.burgerHandle && this.burgerHandle(), this.navList && (this.navListHandle(), new u.default('a[href*="#"]', this.configSmoothScroll)), this.navSectionAll && this.mapNavSection();
      } }]), t2;
    }();
    n.default = c, e.exports = n.default;
  }, { "../../../node_modules/smooth-scroll/dist/smooth-scroll": 5 }],
  18: [function(t, e, n) {
    function r(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    function i(t2, e2) {
      if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
    }
    var o = /* @__PURE__ */ function() {
      function t2(t3, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, n2, r2) {
        return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
      };
    }();
    t("babel-polyfill/dist/polyfill.min"), t("../../node_modules/intersection-observer/intersection-observer"), t("../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills");
    var a = t("../../node_modules/sal.js/dist/sal"), s = r(a), u = t("../_modules/header/header"), c = r(u), l = t("../_modules/portal/portal"), f = r(l), h = t("../_modules/advantages/advantages"), d = r(h), p = t("../_modules/tabs/tabs"), v = r(p), y = t("../_modules/producer/producer"), g = r(y), m = t("../_modules/button/button"), b = r(m), _ = t("../_modules/top-nav/top-nav"), w = r(_), S = t("../_modules/distributor/distributor"), E = r(S), x = t("../_modules/customers/customers"), k = r(x), O = function() {
      function t2() {
        i(this, t2), this.header = document.querySelector(".header"), this.portal = document.querySelector(".portal"), this.advantages = document.querySelector(".advantages"), this.tabs = document.querySelector(".tabs"), this.producer = document.querySelector(".producer"), this.button = document.querySelector(".button"), this.aboutPlanar = document.querySelector(".about-planar"), this.topNav = document.querySelector(".top-nav"), this.distributor = document.querySelector(".distributor"), this.customers = document.querySelector(".customers"), this.overlay = document.querySelector(".overlay"), this.configSal = { threshold: 0.5, once: true }, this.configSmoothScroll = { mousewheelSensitivity: 8 };
      }
      return o(t2, [{ key: "init", value: function() {
        if (window.innerWidth >= 768) (0, s.default)(this.configSal);
        else {
          var t3 = (0, s.default)();
          t3.disable();
        }
        if (this.header) {
          var e2 = new c.default();
          e2.init();
        }
        if (this.portal) {
          var n2 = new f.default(this.overlay);
          n2.init();
        }
        if (this.advantages) {
          var r2 = new d.default();
          r2.init();
        }
        if (this.tabs) {
          var i2 = new v.default();
          i2.init();
        }
        if (this.producer) {
          var o2 = new g.default();
          o2.init();
        }
        if (this.button) {
          var a2 = new b.default();
          a2.init();
        }
        if (this.topNav) {
          var u2 = new w.default();
          u2.init();
        }
        if (this.distributor) {
          var l2 = new E.default();
          l2.init();
        }
        if (this.customers) {
          var h2 = new k.default();
          h2.init();
        }
      } }]), t2;
    }();
    document.addEventListener("DOMContentLoaded", function() {
      return new O().init();
    });
  }, { "../../node_modules/intersection-observer/intersection-observer": 2, "../../node_modules/sal.js/dist/sal": 4, "../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills": 6, "../_modules/advantages/advantages": 8, "../_modules/button/button": 9, "../_modules/customers/customers": 10, "../_modules/distributor/distributor": 11, "../_modules/header/header": 12, "../_modules/portal/portal": 13, "../_modules/producer/producer": 14, "../_modules/tabs/tabs": 15, "../_modules/top-nav/top-nav": 17, "babel-polyfill/dist/polyfill.min": 1 }],
  19: [function(t, e, n) {
    function r(t2, e2, n2, r2) {
      "insertRule" in t2 ? t2.insertRule(e2 + "{" + n2 + "}", r2) : t2.addRule(e2, n2, r2);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.addCSSRule = r;
    t("./raf.js");
  }, { "./raf.js": 48 }],
  20: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.addClass = void 0;
    var r = t("./hasClass.js"), i = r.classListSupport ? function(t2, e2) {
      (0, r.hasClass)(t2, e2) || t2.classList.add(e2);
    } : function(t2, e2) {
      (0, r.hasClass)(t2, e2) || (t2.className += " " + e2);
    };
    n.addClass = i;
  }, { "./hasClass.js": 40 }],
  21: [function(t, e, n) {
    function r(t2, e2) {
      for (var n2 in e2) t2.addEventListener(n2, e2[n2], false);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.addEvents = r;
  }, {}],
  22: [function(t, e, n) {
    function r(t2) {
      for (var e2 = [], n2 = 0, r2 = t2.length; n2 < r2; n2++) e2.push(t2[n2]);
      return e2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.arrayFromNodeList = r;
  }, {}],
  23: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    var r = window;
    n.caf = r.cancelAnimationFrame || r.mozCancelAnimationFrame || function(t2) {
      clearTimeout(t2);
    };
  }, {}],
  24: [function(t, e, n) {
    function r() {
      var t2 = document, e2 = (0, i.getBody)(), n2 = (0, o.setFakeBody)(e2), r2 = t2.createElement("div"), s = false;
      e2.appendChild(r2);
      try {
        for (var u, c = "(10px * 10)", l = ["calc" + c, "-moz-calc" + c, "-webkit-calc" + c], f = 0; f < 3; f++) if (u = l[f], r2.style.width = u, 100 === r2.offsetWidth) {
          s = u.replace(c, "");
          break;
        }
      } catch (t3) {
      }
      return e2.fake ? (0, a.resetFakeBody)(e2, n2) : r2.remove(), s;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.calc = r;
    var i = t("./getBody.js"), o = t("./setFakeBody.js"), a = t("./resetFakeBody.js");
  }, { "./getBody.js": 33, "./resetFakeBody.js": 53, "./setFakeBody.js": 55 }],
  25: [function(t, e, n) {
    function r(t2) {
      return ["true", "false"].indexOf(t2) >= 0 ? JSON.parse(t2) : t2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.checkStorageValue = r;
  }, {}],
  26: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    n.classListSupport = "classList" in document.createElement("_");
  }, {}],
  27: [function(t, e, n) {
    function r(t2) {
      var e2 = document.createElement("style");
      return t2 && e2.setAttribute("media", t2), document.querySelector("head").appendChild(e2), e2.sheet ? e2.sheet : e2.styleSheet;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.createStyleSheet = r;
  }, {}],
  28: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    n.docElement = document.documentElement;
  }, {}],
  29: [function(t, e, n) {
    function r() {
      return { topics: {}, on: function(t2, e2) {
        this.topics[t2] = this.topics[t2] || [], this.topics[t2].push(e2);
      }, off: function(t2, e2) {
        if (this.topics[t2]) {
          for (var n2 = 0; n2 < this.topics[t2].length; n2++) if (this.topics[t2][n2] === e2) {
            this.topics[t2].splice(n2, 1);
            break;
          }
        }
      }, emit: function(t2, e2) {
        e2.type = t2, this.topics[t2] && this.topics[t2].forEach(function(n2) {
          n2(e2, t2);
        });
      } };
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.Events = r;
  }, {}],
  30: [function(t, e, n) {
    function r() {
      for (var t2, e2, n2, r2 = arguments[0] || {}, i = 1, o = arguments.length; i < o; i++) if (null !== (t2 = arguments[i])) for (e2 in t2) n2 = t2[e2], r2 !== n2 && void 0 !== n2 && (r2[e2] = n2);
      return r2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.extend = r;
  }, {}],
  31: [function(t, e, n) {
    function r(t2, e2, n2) {
      for (var r2 = 0, i = t2.length; r2 < i; r2++) e2.call(n2, t2[r2], r2);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.forEachNodeList = r;
  }, {}],
  32: [function(t, e, n) {
    function r(t2, e2) {
      return t2.getAttribute(e2);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getAttr = r;
  }, {}],
  33: [function(t, e, n) {
    function r() {
      var t2 = document, e2 = t2.body;
      return e2 || (e2 = t2.createElement("body"), e2.fake = true), e2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getBody = r;
  }, {}],
  34: [function(t, e, n) {
    function r(t2) {
      var e2 = "insertRule" in t2 ? t2.cssRules : t2.rules;
      return e2.length;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getCssRulesLength = r;
  }, {}],
  35: [function(t, e, n) {
    function r(t2, e2) {
      var n2 = false;
      return /^Webkit/.test(t2) ? n2 = "webkit" + e2 + "End" : /^O/.test(t2) ? n2 = "o" + e2 + "End" : t2 && (n2 = e2.toLowerCase() + "end"), n2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getEndProperty = r;
  }, {}],
  36: [function(t, e, n) {
    function r() {
      var t2 = window.tnsId;
      return window.tnsId = t2 ? t2 + 1 : 1, "tns" + window.tnsId;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getSlideId = r;
  }, {}],
  37: [function(t, e, n) {
    function r(t2, e2) {
      var n2 = false, r2 = Math.abs(90 - Math.abs(t2));
      return r2 >= 90 - e2 ? n2 = "horizontal" : r2 <= e2 && (n2 = "vertical"), n2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.getTouchDirection = r;
  }, {}],
  38: [function(t, e, n) {
    function r(t2) {
      if (!t2) return false;
      if (!window.getComputedStyle) return false;
      var e2, n2 = document, r2 = (0, i.getBody)(), s = (0, o.setFakeBody)(r2), u = n2.createElement("p"), c = t2.length > 9 ? "-" + t2.slice(0, -9).toLowerCase() + "-" : "";
      return c += "transform", r2.insertBefore(u, null), u.style[t2] = "translate3d(1px,1px,1px)", e2 = window.getComputedStyle(u).getPropertyValue(c), r2.fake ? (0, a.resetFakeBody)(r2, s) : u.remove(), void 0 !== e2 && e2.length > 0 && "none" !== e2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.has3DTransforms = r;
    var i = t("./getBody.js"), o = t("./setFakeBody.js"), a = t("./resetFakeBody.js");
  }, { "./getBody.js": 33, "./resetFakeBody.js": 53, "./setFakeBody.js": 55 }],
  39: [function(t, e, n) {
    function r(t2, e2) {
      return t2.hasAttribute(e2);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.hasAttr = r;
  }, {}],
  40: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.hasClass = n.classListSupport = void 0;
    var r = t("./classListSupport.js"), i = r.classListSupport ? function(t2, e2) {
      return t2.classList.contains(e2);
    } : function(t2, e2) {
      return t2.className.indexOf(e2) >= 0;
    };
    n.classListSupport = r.classListSupport, n.hasClass = i;
  }, { "./classListSupport.js": 26 }],
  41: [function(t, e, n) {
    function r(t2, e2) {
      "none" !== t2.style.display && (t2.style.display = "none");
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.hideElement = r;
  }, {}],
  42: [function(t, e, n) {
    function r(t2) {
      return "undefined" != typeof t2.item;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.isNodeList = r;
  }, {}],
  43: [function(t, e, n) {
    function r(t2) {
      return "none" !== window.getComputedStyle(t2).display;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.isVisible = r;
  }, {}],
  44: [function(t, e, n) {
    function r(t2, e2, n2, r2, i, o, a) {
      function s() {
        o -= u, l += f, t2.style[e2] = n2 + l + c + r2, o > 0 ? setTimeout(s, u) : a();
      }
      var u = Math.min(o, 10), c = i.indexOf("%") >= 0 ? "%" : "px", i = i.replace(c, ""), l = Number(t2.style[e2].replace(n2, "").replace(r2, "").replace(c, "")), f = (i - l) / o * u;
      setTimeout(s, u);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.jsTransform = r;
  }, {}],
  45: [function(t, e, n) {
    function r() {
      var t2, e2 = document, n2 = (0, i.getBody)(), r2 = (0, o.setFakeBody)(n2), s = e2.createElement("div"), u = e2.createElement("style"), c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
      return u.type = "text/css", s.className = "tns-mq-test", n2.appendChild(u), n2.appendChild(s), u.styleSheet ? u.styleSheet.cssText = c : u.appendChild(e2.createTextNode(c)), t2 = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, n2.fake ? (0, a.resetFakeBody)(n2, r2) : s.remove(), "absolute" === t2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.mediaquerySupport = r;
    var i = t("./getBody.js"), o = t("./setFakeBody.js"), a = t("./resetFakeBody.js");
  }, { "./getBody.js": 33, "./resetFakeBody.js": 53, "./setFakeBody.js": 55 }],
  46: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    var r = false;
    try {
      var i = Object.defineProperty({}, "passive", { get: function() {
        r = true;
      } });
      window.addEventListener("test", null, i);
    } catch (t2) {
    }
    n.passiveOption = !!r && { passive: true };
  }, {}],
  47: [function(t, e, n) {
    function r() {
      var t2 = document, e2 = (0, i.getBody)(), n2 = (0, o.setFakeBody)(e2), r2 = t2.createElement("div"), s = t2.createElement("div"), u = "", c = 70, l = 3, f = false;
      r2.className = "tns-t-subp2", s.className = "tns-t-ct";
      for (var h = 0; h < c; h++) u += "<div></div>";
      return s.innerHTML = u, r2.appendChild(s), e2.appendChild(r2), f = Math.abs(r2.getBoundingClientRect().left - s.children[c - l].getBoundingClientRect().left) < 2, e2.fake ? (0, a.resetFakeBody)(e2, n2) : r2.remove(), f;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.percentageLayout = r;
    var i = t("./getBody.js"), o = t("./setFakeBody.js"), a = t("./resetFakeBody.js");
  }, { "./getBody.js": 33, "./resetFakeBody.js": 53, "./setFakeBody.js": 55 }],
  48: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true });
    var r = window;
    n.raf = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(t2) {
      return setTimeout(t2, 16);
    };
  }, {}],
  49: [function(t, e, n) {
    function r(t2, e2) {
      t2 = (0, i.isNodeList)(t2) || t2 instanceof Array ? t2 : [t2], e2 = e2 instanceof Array ? e2 : [e2];
      for (var n2 = e2.length, r2 = t2.length; r2--; ) for (var o = n2; o--; ) t2[r2].removeAttribute(e2[o]);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.removeAttrs = r;
    var i = t("./isNodeList.js");
  }, { "./isNodeList.js": 42 }],
  50: [function(t, e, n) {
    function r(t2, e2) {
      "deleteRule" in t2 ? t2.deleteRule(e2) : t2.removeRule(e2);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.removeCSSRule = r;
    t("./raf.js");
  }, { "./raf.js": 48 }],
  51: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.removeClass = void 0;
    var r = t("./hasClass.js"), i = r.classListSupport ? function(t2, e2) {
      (0, r.hasClass)(t2, e2) && t2.classList.remove(e2);
    } : function(t2, e2) {
      (0, r.hasClass)(t2, e2) && (t2.className = t2.className.replace(e2, ""));
    };
    n.removeClass = i;
  }, { "./hasClass.js": 40 }],
  52: [function(t, e, n) {
    function r(t2, e2) {
      for (var n2 in e2) {
        var r2 = ["touchstart", "touchmove"].indexOf(n2) >= 0 && i.passiveOption;
        t2.removeEventListener(n2, e2[n2], r2);
      }
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.removeEvents = r;
    var i = t("./passiveOption.js");
  }, { "./passiveOption.js": 46 }],
  53: [function(t, e, n) {
    function r(t2, e2) {
      t2.fake && (t2.remove(), i.docElement.style.overflow = e2, i.docElement.offsetHeight);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.resetFakeBody = r;
    var i = t("./docElement.js");
  }, { "./docElement.js": 28 }],
  54: [function(t, e, n) {
    function r(t2, e2) {
      if (t2 = (0, i.isNodeList)(t2) || t2 instanceof Array ? t2 : [t2], "[object Object]" === Object.prototype.toString.call(e2)) for (var n2 = t2.length; n2--; ) for (var r2 in e2) t2[n2].setAttribute(r2, e2[r2]);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.setAttrs = r;
    var i = t("./isNodeList.js");
  }, { "./isNodeList.js": 42 }],
  55: [function(t, e, n) {
    function r(t2) {
      var e2 = "";
      return t2.fake && (e2 = i.docElement.style.overflow, t2.style.background = "", t2.style.overflow = i.docElement.style.overflow = "hidden", i.docElement.appendChild(t2)), e2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.setFakeBody = r;
    var i = t("./docElement.js");
  }, { "./docElement.js": 28 }],
  56: [function(t, e, n) {
    function r(t2, e2, n2, r2) {
      return r2 && t2.setItem(e2, n2), n2;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.setLocalStorage = r;
  }, {}],
  57: [function(t, e, n) {
    function r(t2, e2) {
      "none" === t2.style.display && (t2.style.display = "");
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.showElement = r;
  }, {}],
  58: [function(t, e, n) {
    function r(t2, e2) {
      return Math.atan2(t2, e2) * (180 / Math.PI);
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.toDegree = r;
  }, {}],
  59: [function(t, e, n) {
    function r(t2) {
      if ("string" == typeof t2) {
        var e2 = [t2], n2 = t2.charAt(0).toUpperCase() + t2.substr(1), r2 = ["Webkit", "Moz", "ms", "O"];
        r2.forEach(function(r3) {
          "ms" === r3 && "transform" !== t2 || e2.push(r3 + n2);
        }), t2 = e2;
      }
      for (var i = document.createElement("fakeelement"), o = (t2.length, 0); o < t2.length; o++) {
        var a = t2[o];
        if (void 0 !== i.style[a]) return a;
      }
      return false;
    }
    Object.defineProperty(n, "__esModule", { value: true }), n.whichProperty = r;
  }, {}],
  60: [function(t, e, n) {
    Object.defineProperty(n, "__esModule", { value: true }), n.tns = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
      return typeof t2;
    } : function(t2) {
      return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
    }, i = t("./helpers/raf.js"), o = t("./helpers/caf.js"), a = t("./helpers/extend.js"), s = t("./helpers/checkStorageValue.js"), u = t("./helpers/setLocalStorage.js"), c = t("./helpers/getSlideId.js"), l = t("./helpers/calc.js"), f = t("./helpers/percentageLayout.js"), h = t("./helpers/mediaquerySupport.js"), d = t("./helpers/createStyleSheet.js"), p = t("./helpers/addCSSRule.js"), v = t("./helpers/removeCSSRule.js"), y = t("./helpers/getCssRulesLength.js"), g = t("./helpers/toDegree.js"), m = t("./helpers/getTouchDirection.js"), b = t("./helpers/forEachNodeList.js"), _ = t("./helpers/hasClass.js"), w = t("./helpers/addClass.js"), S = t("./helpers/removeClass.js"), E = t("./helpers/hasAttr.js"), x = t("./helpers/getAttr.js"), k = t("./helpers/setAttrs.js"), O = t("./helpers/removeAttrs.js"), A = t("./helpers/arrayFromNodeList.js"), M = t("./helpers/hideElement.js"), P = t("./helpers/showElement.js"), C = t("./helpers/isVisible.js"), j = t("./helpers/whichProperty.js"), L = t("./helpers/has3DTransforms.js"), T = t("./helpers/getEndProperty.js"), I = t("./helpers/addEvents.js"), N = t("./helpers/removeEvents.js"), F = t("./helpers/events.js"), R = t("./helpers/jsTransform.js");
    Object.keys || (Object.keys = function(t2) {
      var e2 = [];
      for (var n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && e2.push(n2);
      return e2;
    }), "remove" in Element.prototype || (Element.prototype.remove = function() {
      this.parentNode && this.parentNode.removeChild(this);
    });
    n.tns = function t2(e2) {
      function n2(t3) {
        for (var e3 in t3) nn || ("slideBy" === e3 && (t3[e3] = "page"), "edgePadding" === e3 && (t3[e3] = false), "autoHeight" === e3 && (t3[e3] = false)), "outer" === en && "autoHeight" === e3 && (t3[e3] = true), "responsive" === e3 && n2(t3[e3]);
      }
      function D(t3) {
        t3 && (Dn = qn = Wn = Hn = Tn = Vn = Gn = Qn = false);
      }
      function B() {
        for (var t3 = nn ? sr - $n : sr; t3 < 0; ) t3 += bn;
        return t3 % bn + 1;
      }
      function q(t3) {
        return t3 = t3 ? Math.max(0, Math.min(Fn ? bn - 1 : bn - Cn, t3)) : 0, nn ? t3 + $n : t3;
      }
      function W(t3) {
        for (null == t3 && (t3 = sr), nn && (t3 -= $n); t3 < 0; ) t3 += bn;
        return Math.floor(t3 % bn);
      }
      function H() {
        if (kn || On && !Ln) return bn - 1;
        var t3 = On ? "fixedWidth" : "items", n3 = [];
        if ((On || e2[t3] < bn) && n3.push(e2[t3]), tn) for (var r2 in tn) {
          var i2 = tn[r2][t3];
          i2 && (On || i2 < bn) && n3.push(i2);
        }
        return n3.length || n3.push(0), Math.ceil(On ? Ln / Math.min.apply(null, n3) : Math.max.apply(null, n3));
      }
      function V() {
        var t3 = H(), e3 = nn ? Math.ceil((5 * t3 - bn) / 2) : 4 * t3 - bn;
        return e3 = Math.max(t3, e3), Q("edgePadding") ? e3 + 1 : e3;
      }
      function U() {
        return Ce.innerWidth || Pe.documentElement.clientWidth || Pe.body.clientWidth;
      }
      function z(t3) {
        var e3, n3 = Pe.createElement("div");
        return t3.appendChild(n3), e3 = n3.offsetWidth, n3.remove(), e3 || z(t3.parentNode);
      }
      function G() {
        return z(yn) - (2 * An - Mn);
      }
      function Q(t3) {
        if (e2[t3]) return true;
        if (tn) {
          for (var n3 in tn) if (tn[n3][t3]) return true;
        }
        return false;
      }
      function Y(t3, n3) {
        if (null == n3 && (n3 = _n), "items" === t3 && On) return Math.floor(Pn / (On + Mn)) || 1;
        var r2 = e2[t3];
        if (tn) for (var i2 in tn) n3 >= parseInt(i2) && t3 in tn[i2] && (r2 = tn[i2][t3]);
        return "slideBy" === t3 && "page" === r2 && (r2 = Y("items")), nn || "slideBy" !== t3 && "items" !== t3 || (r2 = Math.floor(r2)), r2;
      }
      function J(t3) {
        return Fe ? Fe + "(" + 100 * t3 + "% / " + Zn + ")" : 100 * t3 / Zn + "%";
      }
      function K(t3, e3, n3, r2, i2) {
        var o2 = "";
        if (void 0 !== t3) {
          var a2 = t3;
          e3 && (a2 -= e3), o2 = hn ? "margin: 0 " + a2 + "px 0 " + t3 + "px;" : "margin: " + t3 + "px 0 " + a2 + "px 0;";
        } else if (e3 && !n3) {
          var s2 = "-" + e3 + "px", u2 = hn ? s2 + " 0 0" : "0 " + s2 + " 0";
          o2 = "margin: 0 " + u2 + ";";
        }
        return i2 && We && r2 && (o2 += et(r2)), o2;
      }
      function X(t3, e3, n3) {
        return t3 ? (t3 + e3) * Zn + "px" : Fe ? Fe + "(" + 100 * Zn + "% / " + n3 + ")" : 100 * Zn / n3 + "%";
      }
      function $(t3, e3, n3) {
        var r2;
        if (t3) r2 = t3 + e3 + "px";
        else {
          nn || (n3 = Math.floor(n3));
          var i2 = nn ? Zn : n3;
          r2 = Fe ? Fe + "(100% / " + i2 + ")" : 100 / i2 + "%";
        }
        return r2 = "width:" + r2, "inner" !== en ? r2 + ";" : r2 + " !important;";
      }
      function Z(t3) {
        var e3 = "";
        if (t3 !== false) {
          var n3 = hn ? "padding-" : "margin-", r2 = hn ? "right" : "bottom";
          e3 = n3 + r2 + ": " + t3 + "px;";
        }
        return e3;
      }
      function tt(t3, e3) {
        var n3 = t3.substring(0, t3.length - e3).toLowerCase();
        return n3 && (n3 = "-" + n3 + "-"), n3;
      }
      function et(t3) {
        return tt(We, 18) + "transition-duration:" + t3 / 1e3 + "s;";
      }
      function nt(t3) {
        return tt(Ve, 17) + "animation-duration:" + t3 / 1e3 + "s;";
      }
      function rt() {
        tn && dt(), it();
        for (var t3 = 0; t3 < bn; t3++) {
          var e3 = mn[t3];
          e3.id || (e3.id = mr + "-item" + t3), (0, w.addClass)(e3, "tns-item"), !nn && ln && (0, w.addClass)(e3, ln), (0, k.setAttrs)(e3, { "aria-hidden": "true", tabindex: "-1" });
        }
        if ($n) {
          for (var n3 = Pe.createDocumentFragment(), r2 = Pe.createDocumentFragment(), i2 = $n; i2--; ) {
            var o2 = i2 % bn, a2 = mn[o2].cloneNode(true);
            if ((0, O.removeAttrs)(a2, "id"), r2.insertBefore(a2, r2.firstChild), nn) {
              var s2 = mn[bn - 1 - o2].cloneNode(true);
              (0, O.removeAttrs)(s2, "id"), n3.appendChild(s2);
            }
          }
          vn.insertBefore(n3, vn.firstChild), vn.appendChild(r2), mn = vn.children;
        }
        at(), ot();
      }
      function it() {
        var t3 = "tns-outer", n3 = "tns-inner";
        Q("gutter");
        if (dn.className = t3, pn.className = n3, dn.id = mr + "-ow", pn.id = mr + "-iw", Rn && (pn.className += " tns-ah"), "" === vn.id && (vn.id = mr), gr += Re || kn ? " tns-subpixel" : " tns-no-subpixel", gr += Fe ? " tns-calc" : " tns-no-calc", kn && (gr += " tns-autowidth"), gr += " tns-" + e2.axis, vn.className += gr, nn) {
          var r2 = Pe.createElement("div");
          r2.className = "tns-ovh", dn.appendChild(r2), r2.appendChild(pn);
        } else dn.appendChild(pn);
        yn.insertBefore(dn, vn), pn.appendChild(vn);
      }
      function ot() {
        if (Q("autoHeight") || kn || !hn) {
          var t3 = function() {
            function t4() {
              hn && !kn || (Tt(), kn ? (er = Ut(), wr && (Sr = ht()), lr = ar(), D(br || Sr)) : ke()), nn && Gt(), st(), ut();
            }
            if (kn) {
              var e4 = Fn ? sr : bn - 1;
              !function n3() {
                mn[e4 - 1].getBoundingClientRect().right.toFixed(2) === mn[e4].getBoundingClientRect().left.toFixed(2) ? t4() : setTimeout(function() {
                  n3();
                }, 16);
              }();
            } else t4();
          }, e3 = vn.querySelectorAll("img");
          (0, b.forEachNodeList)(e3, function(t4) {
            var e4 = t4.src;
            e4.indexOf("data:image") < 0 ? ((0, I.addEvents)(t4, Br), t4.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", t4.src = e4, (0, w.addClass)(t4, "loading"), Ot(t4)) : Jn || Et(t4);
          }), (0, i.raf)(function() {
            Pt((0, A.arrayFromNodeList)(e3), function() {
              xn = true;
            });
          }), !kn && hn && (e3 = At(sr, Cn)), Jn ? t3() : (0, i.raf)(function() {
            Pt((0, A.arrayFromNodeList)(e3), t3);
          });
        } else nn && Gt(), st(), ut();
      }
      function at() {
        for (var t3 = sr, n3 = sr + Math.min(bn, Cn); t3 < n3; t3++) {
          var r2 = mn[t3];
          (0, k.setAttrs)(r2, { "aria-hidden": "false" }), (0, O.removeAttrs)(r2, ["tabindex"]), (0, w.addClass)(r2, Rr), nn || (r2.style.left = 100 * (t3 - sr) / Cn + "%", (0, w.addClass)(r2, sn), (0, S.removeClass)(r2, ln));
        }
        if (hn && (Re || kn ? ((0, p.addCSSRule)(Yn, "#" + mr + " > .tns-item", "font-size:" + Ce.getComputedStyle(mn[0]).fontSize + ";", (0, y.getCssRulesLength)(Yn)), (0, p.addCSSRule)(Yn, "#" + mr, "font-size:0;", (0, y.getCssRulesLength)(Yn))) : nn && (0, b.forEachNodeList)(mn, function(t4, e3) {
          t4.style.marginLeft = J(e3);
        })), De) {
          var i2 = K(e2.edgePadding, e2.gutter, e2.fixedWidth, e2.speed, e2.autoHeight);
          (0, p.addCSSRule)(Yn, "#" + mr + "-iw", i2, (0, y.getCssRulesLength)(Yn)), nn && (i2 = hn && !kn ? "width:" + X(e2.fixedWidth, e2.gutter, e2.items) + ";" : "", We && (i2 += et(In)), (0, p.addCSSRule)(Yn, "#" + mr, i2, (0, y.getCssRulesLength)(Yn))), i2 = hn && !kn ? $(e2.fixedWidth, e2.gutter, e2.items) : "", e2.gutter && (i2 += Z(e2.gutter)), nn || (We && (i2 += et(In)), Ve && (i2 += nt(In))), i2 && (0, p.addCSSRule)(Yn, "#" + mr + " > .tns-item", i2, (0, y.getCssRulesLength)(Yn));
        } else {
          pn.style.cssText = K(An, Mn, On, Rn), nn && hn && !kn && (vn.style.width = X(On, Mn, Cn));
          var i2 = hn && !kn ? $(On, Mn, Cn) : "";
          Mn && (i2 += Z(Mn)), i2 && (0, p.addCSSRule)(Yn, "#" + mr + " > .tns-item", i2, (0, y.getCssRulesLength)(Yn));
        }
        if (tn && De) for (var o2 in tn) {
          o2 = parseInt(o2);
          var a2 = tn[o2], i2 = "", s2 = "", u2 = "", c2 = "", l2 = kn ? null : Y("items", o2), f2 = Y("fixedWidth", o2), h2 = Y("speed", o2), d2 = Y("edgePadding", o2), v2 = Y("autoHeight", o2), g2 = Y("gutter", o2);
          ("edgePadding" in a2 || "gutter" in a2) && (s2 = "#" + mr + "-iw{" + K(d2, g2, f2, h2, v2) + "}"), nn && hn && !kn && ("fixedWidth" in a2 || "items" in a2 || On && "gutter" in a2) && (u2 = "width:" + X(f2, g2, l2) + ";"), We && "speed" in a2 && (u2 += et(h2)), u2 && (u2 = "#" + mr + "{" + u2 + "}"), ("fixedWidth" in a2 || On && "gutter" in a2 || !nn && "items" in a2) && (c2 += $(f2, g2, l2)), "gutter" in a2 && (c2 += Z(g2)), !nn && "speed" in a2 && (We && (c2 += et(h2)), Ve && (c2 += nt(h2))), c2 && (c2 = "#" + mr + " > .tns-item{" + c2 + "}"), i2 = s2 + u2 + c2, i2 && Yn.insertRule("@media (min-width: " + o2 / 16 + "em) {" + i2 + "}", Yn.cssRules.length);
        }
      }
      function st() {
        if (Ir) {
          var t3 = Vn ? "stop" : "start";
          hi ? (0, k.setAttrs)(hi, { "data-action": t3 }) : e2.autoplayButtonOutput && (dn.insertAdjacentHTML("top" !== e2.autoplayPosition ? "beforeend" : "afterbegin", '<button data-action="' + t3 + '" type="button">' + pi[0] + t3 + pi[1] + zn[0] + "</button>"), hi = dn.querySelector("[data-action]")), hi && (0, I.addEvents)(hi, { click: ue }), Vn && (ie(), Gn && (0, I.addEvents)(vn, Or), Qn && (0, I.addEvents)(vn, Ar));
        }
        if (Lr) {
          var n3 = nn ? $n : 0;
          if (Kr) (0, k.setAttrs)(Kr, { "aria-label": "Carousel Pagination" }), Jr = Kr.children, (0, b.forEachNodeList)(Jr, function(t4, e3) {
            (0, k.setAttrs)(t4, { "data-nav": e3, tabindex: "-1", "aria-controls": mn[n3 + e3].id, "aria-label": ii + (e3 + 1) });
          });
          else {
            for (var r2 = "", i2 = Tr ? "" : 'style="display:none"', o2 = 0; o2 < bn; o2++) r2 += '<button data-nav="' + o2 + '" tabindex="-1" aria-controls="' + mn[n3 + o2].id + '" ' + i2 + ' type="button" aria-label="' + ii + (o2 + 1) + '"></button>';
            r2 = '<div class="tns-nav" aria-label="Carousel Pagination">' + r2 + "</div>", dn.insertAdjacentHTML("top" !== e2.navPosition ? "beforeend" : "afterbegin", r2), Kr = dn.querySelector(".tns-nav"), Jr = Kr.children;
          }
          if (Ae(), We) {
            var a2 = We.substring(0, We.length - 18).toLowerCase(), s2 = "transition: all " + In / 1e3 + "s";
            a2 && (s2 = "-" + a2 + "-" + s2), (0, p.addCSSRule)(Yn, "[aria-controls^=" + mr + "-item]", s2, (0, y.getCssRulesLength)(Yn));
          }
          (0, k.setAttrs)(Jr[ei], { tabindex: "0", "aria-label": ii + (ei + 1) + oi }), (0, w.addClass)(Jr[ei], ri), (0, I.addEvents)(Kr, kr);
        }
        jr && (Vr || zr && Gr || (dn.insertAdjacentHTML("top" !== e2.controlsPosition ? "beforeend" : "afterbegin", '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + mr + '" type="button">' + Bn[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + mr + '" type="button">' + Bn[1] + "</button></div>"), Vr = dn.querySelector(".tns-controls")), zr && Gr || (zr = Vr.children[0], Gr = Vr.children[1]), e2.controlsContainer && (0, k.setAttrs)(Vr, { "aria-label": "Carousel Navigation", tabindex: "0" }), (e2.controlsContainer || e2.prevButton && e2.nextButton) && (0, k.setAttrs)([zr, Gr], { "aria-controls": mr, tabindex: "-1" }), (e2.controlsContainer || e2.prevButton && e2.nextButton) && ((0, k.setAttrs)(zr, { "data-controls": "prev" }), (0, k.setAttrs)(Gr, { "data-controls": "next" })), Wr = Dt(zr), Hr = Dt(Gr), Wt(), Vr ? (0, I.addEvents)(Vr, xr) : ((0, I.addEvents)(zr, xr), (0, I.addEvents)(Gr, xr))), pt();
      }
      function ut() {
        if (nn && ze) {
          var t3 = {};
          t3[ze] = Xt, (0, I.addEvents)(vn, t3);
        }
        Wn && (0, I.addEvents)(vn, Pr), Hn && (0, I.addEvents)(vn, Cr), Tn && (0, I.addEvents)(Pe, Mr), "inner" === en ? yr.on("outerResized", function() {
          ft(), yr.emit("innerLoaded", Me());
        }) : (tn || On || kn || Rn || !hn) && (0, I.addEvents)(Ce, { resize: lt }), "outer" === en ? yr.on("innerLoaded", Mt) : Rn && !br && Mt(), _t(), br ? mt() : Sr && yt(), yr.on("indexChanged", Ct), "inner" === en && yr.emit("innerLoaded", Me()), "function" == typeof vr && vr(Me()), wn = true;
      }
      function ct() {
        if (Yn.disabled = true, Yn.ownerNode && Yn.ownerNode.remove(), (0, N.removeEvents)(Ce, { resize: lt }), Tn && (0, N.removeEvents)(Pe, Mr), Vr && (0, N.removeEvents)(Vr, xr), Kr && (0, N.removeEvents)(Kr, kr), (0, N.removeEvents)(vn, Or), (0, N.removeEvents)(vn, Ar), hi && (0, N.removeEvents)(hi, { click: ue }), Vn && clearInterval(ai), nn && ze) {
          var t3 = {};
          t3[ze] = Xt, (0, N.removeEvents)(vn, t3);
        }
        Wn && (0, N.removeEvents)(vn, Pr), Hn && (0, N.removeEvents)(vn, Cr);
        var n3 = [gn, Ur, Qr, Yr, Xr, di];
        Ye.forEach(function(t4, i3) {
          var o2 = "container" === t4 ? dn : e2[t4];
          if ("object" === ("undefined" == typeof o2 ? "undefined" : r(o2))) {
            var a2 = !!o2.previousElementSibling && o2.previousElementSibling, s2 = o2.parentNode;
            o2.outerHTML = n3[i3], e2[t4] = a2 ? a2.nextElementSibling : s2.firstElementChild;
          }
        }), Ye = sn = un = cn = ln = hn = dn = pn = vn = yn = gn = mn = bn = fn = _n = kn = On = An = Mn = Pn = Cn = jn = Ln = Tn = In = Nn = Fn = Rn = Yn = Jn = Sn = Xn = $n = Zn = tr = er = nr = rr = ir = or = ar = sr = ur = cr = lr = hr = dr = pr = vr = yr = gr = mr = br = _r = wr = Sr = Er = xr = kr = Or = Ar = Mr = Pr = Cr = jr = Lr = Tr = Ir = Nr = Fr = Rr = Dr = Br = xn = Dn = Bn = Vr = Ur = zr = Gr = Wr = Hr = qn = Kr = Xr = Jr = $r = Zr = ti = ei = ni = ri = ii = oi = Vn = Un = fi = zn = Gn = hi = di = Qn = pi = ai = si = ui = ci = li = bi = _i = vi = yi = gi = wi = mi = Si = Wn = Hn = null;
        for (var i2 in this) "rebuild" !== i2 && (this[i2] = null);
        wn = false;
      }
      function lt(t3) {
        (0, i.raf)(function() {
          ft(ye(t3));
        });
      }
      function ft(t3) {
        if (wn) {
          "outer" === en && yr.emit("outerResized", Me(t3)), _n = U();
          var e3, n3 = fn, r2 = false;
          tn && (dt(), e3 = n3 !== fn, e3 && yr.emit("newBreakpointStart", Me(t3)));
          var i2, o2, a2 = Cn, s2 = br, u2 = Sr, c2 = Tn, l2 = Dn, f2 = qn, h2 = Wn, d2 = Hn, g2 = Vn, m2 = Gn, b2 = Qn, _2 = sr;
          if (e3) {
            var w2 = On, S2 = Rn, E2 = Bn, x2 = zn;
            if (!De) var k2 = Mn, O2 = An;
          }
          if (Tn = Y("arrowKeys"), Dn = Y("controls"), qn = Y("nav"), Wn = Y("touch"), Hn = Y("mouseDrag"), Vn = Y("autoplay"), Gn = Y("autoplayHoverPause"), Qn = Y("autoplayResetOnVisibility"), e3 && (br = Y("disable"), On = Y("fixedWidth"), In = Y("speed"), Rn = Y("autoHeight"), Bn = Y("controlsText"), zn = Y("autoplayText"), Un = Y("autoplayTimeout"), De || (An = Y("edgePadding"), Mn = Y("gutter"))), D(br), Pn = G(), hn && !kn || br || (Tt(), hn || (ke(), r2 = true)), (On || kn) && (er = Ut(), lr = ar()), (e3 || On) && (Cn = Y("items"), jn = Y("slideBy"), o2 = Cn !== a2, o2 && (On || kn || (lr = ar()), Ei())), e3 && br !== s2 && (br ? mt() : bt()), wr && (e3 || On || kn) && (Sr = ht(), Sr !== u2 && (Sr ? (Qt(zt(q(0))), yt()) : (gt(), r2 = true))), D(br || Sr), Vn || (Gn = Qn = false), Tn !== c2 && (Tn ? (0, I.addEvents)(Pe, Mr) : (0, N.removeEvents)(Pe, Mr)), Dn !== l2 && (Dn ? Vr ? (0, P.showElement)(Vr) : (zr && (0, P.showElement)(zr), Gr && (0, P.showElement)(Gr)) : Vr ? (0, M.hideElement)(Vr) : (zr && (0, M.hideElement)(zr), Gr && (0, M.hideElement)(Gr))), qn !== f2 && (qn ? ((0, P.showElement)(Kr), Ae()) : (0, M.hideElement)(Kr)), Wn !== h2 && (Wn ? (0, I.addEvents)(vn, Pr) : (0, N.removeEvents)(vn, Pr)), Hn !== d2 && (Hn ? (0, I.addEvents)(vn, Cr) : (0, N.removeEvents)(vn, Cr)), Vn !== g2 && (Vn ? (hi && (0, P.showElement)(hi), si || ci || ie()) : (hi && (0, M.hideElement)(hi), si && oe())), Gn !== m2 && (Gn ? (0, I.addEvents)(vn, Or) : (0, N.removeEvents)(vn, Or)), Qn !== b2 && (Qn ? (0, I.addEvents)(Pe, Ar) : (0, N.removeEvents)(Pe, Ar)), e3 && (On !== w2 && (r2 = true), Rn !== S2 && (Rn || (pn.style.height = "")), Dn && Bn !== E2 && (zr.innerHTML = Bn[0], Gr.innerHTML = Bn[1]), hi && zn !== x2)) {
            var A2 = Vn ? 1 : 0, C2 = hi.innerHTML, j2 = C2.length - x2[A2].length;
            C2.substring(j2) === x2[A2] && (hi.innerHTML = C2.substring(0, j2) + zn[A2]);
          }
          if (i2 = sr !== _2, i2 && (yr.emit("indexChanged", Me()), r2 = true), o2 && (i2 || Ct(), nn || Nt()), !br && !Sr) {
            if (e3 && !De && (An === O2 && Mn === k2 || (pn.style.cssText = K(An, Mn, On, In, Rn)), hn)) {
              nn && (vn.style.width = X(On, Mn, Cn));
              var L2 = $(On, Mn, Cn) + Z(Mn);
              (0, v.removeCSSRule)(Yn, (0, y.getCssRulesLength)(Yn) - 1), (0, p.addCSSRule)(Yn, "#" + mr + " > .tns-item", L2, (0, y.getCssRulesLength)(Yn));
            }
            Rn && Mt(), r2 && (Gt(), ur = sr);
          }
          e3 && yr.emit("newBreakpointEnd", Me(t3));
        }
      }
      function ht() {
        if (!On && !kn) return bn <= Cn;
        if (On) return (On + Mn) * bn <= Pn + 2 * An;
        var t3 = Fn ? Sn[bn] : Vt();
        return t3 <= Pn + 2 * An;
      }
      function dt() {
        fn = 0;
        for (var t3 in tn) t3 = parseInt(t3), _n >= t3 && (fn = t3);
      }
      function pt() {
        !Vn && hi && (0, M.hideElement)(hi), !qn && Kr && (0, M.hideElement)(Kr), Dn || (Vr ? (0, M.hideElement)(Vr) : (zr && (0, M.hideElement)(zr), Gr && (0, M.hideElement)(Gr)));
      }
      function vt() {
        Vn && hi && (0, P.showElement)(hi), qn && Kr && (0, P.showElement)(Kr), Dn && (Vr ? (0, P.showElement)(Vr) : (zr && (0, P.showElement)(zr), Gr && (0, P.showElement)(Gr)));
      }
      function yt() {
        if (!Er) {
          if (An && (pn.style.margin = "0px"), $n) for (var t3 = "tns-transparent", e3 = $n; e3--; ) nn && (0, w.addClass)(mn[e3], t3), (0, w.addClass)(mn[Zn - e3 - 1], t3);
          pt(), Er = true;
        }
      }
      function gt() {
        if (Er) {
          if (An && De && (pn.style.margin = ""), $n) for (var t3 = "tns-transparent", e3 = $n; e3--; ) nn && (0, S.removeClass)(mn[e3], t3), (0, S.removeClass)(mn[Zn - e3 - 1], t3);
          vt(), Er = false;
        }
      }
      function mt() {
        if (!_r) {
          if (Yn.disabled = true, vn.className = vn.className.replace(gr.substring(1), ""), (0, O.removeAttrs)(vn, ["style"]), Fn) for (var t3 = $n; t3--; ) nn && (0, M.hideElement)(mn[t3]), (0, M.hideElement)(mn[Zn - t3 - 1]);
          if (hn && nn || (0, O.removeAttrs)(pn, ["style"]), !nn) for (var e3 = sr, n3 = sr + bn; e3 < n3; e3++) {
            var r2 = mn[e3];
            (0, O.removeAttrs)(r2, ["style"]), (0, S.removeClass)(r2, sn), (0, S.removeClass)(r2, ln);
          }
          pt(), _r = true;
        }
      }
      function bt() {
        if (_r) {
          if (Yn.disabled = false, vn.className += gr, Gt(), Fn) for (var t3 = $n; t3--; ) nn && (0, P.showElement)(mn[t3]), (0, P.showElement)(mn[Zn - t3 - 1]);
          if (!nn) for (var e3 = sr, n3 = sr + bn; e3 < n3; e3++) {
            var r2 = mn[e3], i2 = e3 < sr + Cn ? sn : ln;
            r2.style.left = 100 * (e3 - sr) / Cn + "%", (0, w.addClass)(r2, i2);
          }
          vt(), _r = false;
        }
      }
      function _t() {
        if (Jn && !br) {
          var t3, e3 = sr;
          if (kn) for (var n3 = sr + 1, t3 = n3, r2 = Sn[sr] + Pn + An - Mn; Sn[n3] < r2; ) n3++, t3 = n3;
          else t3 = sr + Cn;
          for (An && (e3 -= 1, kn || (t3 += 1)), e3 = Math.floor(Math.max(e3, 0)), t3 = Math.ceil(Math.min(t3, Zn)); e3 < t3; e3++) (0, b.forEachNodeList)(mn[e3].querySelectorAll(Kn), function(t4) {
            if (!(0, _.hasClass)(t4, Dr)) {
              var e4 = {};
              e4[ze] = function(t5) {
                t5.stopPropagation();
              }, (0, I.addEvents)(t4, e4), (0, I.addEvents)(t4, Br);
              var n4 = (0, x.getAttr)(t4, "data-srcset");
              n4 && (t4.srcset = n4), t4.src = (0, x.getAttr)(t4, "data-src"), (0, w.addClass)(t4, "loading"), Ot(t4);
            }
          });
        }
      }
      function wt(t3) {
        var e3 = ge(t3);
        Et(e3);
      }
      function St(t3) {
        var e3 = ge(t3);
        xt(e3);
      }
      function Et(t3) {
        (0, w.addClass)(t3, "loaded"), kt(t3);
      }
      function xt(t3) {
        (0, w.addClass)(t3, "failed"), kt(t3);
      }
      function kt(t3) {
        (0, w.addClass)(t3, "tns-complete"), (0, S.removeClass)(t3, "loading"), (0, N.removeEvents)(t3, Br);
      }
      function Ot(t3) {
        t3.complete && (0 !== t3.naturalWidth ? Et(t3) : xt(t3));
      }
      function At(t3, e3) {
        for (var n3 = [], r2 = t3, i2 = Math.min(t3 + e3, Zn); r2 < i2; r2++) (0, b.forEachNodeList)(mn[r2].querySelectorAll("img"), function(t4) {
          n3.push(t4);
        });
        return n3;
      }
      function Mt() {
        var t3 = Rn ? At(sr, Cn) : At($n, bn);
        (0, i.raf)(function() {
          Pt(t3, Lt);
        });
      }
      function Pt(t3, e3) {
        return xn ? e3() : (t3.forEach(function(e4, n3) {
          (0, _.hasClass)(e4, Dr) && t3.splice(n3, 1);
        }), t3.length ? void (0, i.raf)(function() {
          Pt(t3, e3);
        }) : e3());
      }
      function Ct() {
        _t(), It(), Wt(), Ae(), Ft();
      }
      function jt(t3, e3) {
        for (var n3 = [], r2 = t3, i2 = Math.min(t3 + e3, Zn); r2 < i2; r2++) n3.push(mn[r2].offsetHeight);
        return Math.max.apply(null, n3);
      }
      function Lt() {
        var t3 = Rn ? jt(sr, Cn) : jt($n, bn);
        pn.style.height !== t3 && (pn.style.height = t3 + "px");
      }
      function Tt() {
        Sn = [0];
        for (var t3, e3 = hn ? "left" : "top", n3 = mn[0].getBoundingClientRect()[e3], r2 = 1; r2 < Zn; r2++) t3 = mn[r2].getBoundingClientRect()[e3], Sn.push(t3 - n3);
      }
      function It() {
        for (var t3 = sr + Math.min(bn, Cn), e3 = Zn; e3--; ) {
          var n3 = mn[e3];
          e3 >= sr && e3 < t3 ? (0, E.hasAttr)(n3, "tabindex") && ((0, k.setAttrs)(n3, { "aria-hidden": "false" }), (0, O.removeAttrs)(n3, ["tabindex"]), (0, w.addClass)(n3, Rr)) : ((0, E.hasAttr)(n3, "tabindex") || (0, k.setAttrs)(n3, { "aria-hidden": "true", tabindex: "-1" }), (0, _.hasClass)(n3, Rr) && (0, S.removeClass)(n3, Rr));
        }
      }
      function Nt() {
        for (var t3 = sr + Math.min(bn, Cn), e3 = Zn; e3--; ) {
          var n3 = mn[e3];
          e3 >= sr && e3 < t3 ? ((0, w.addClass)(n3, "tns-moving"), n3.style.left = 100 * (e3 - sr) / Cn + "%", (0, w.addClass)(n3, sn), (0, S.removeClass)(n3, ln)) : n3.style.left && (n3.style.left = "", (0, w.addClass)(n3, ln), (0, S.removeClass)(n3, sn)), (0, S.removeClass)(n3, un);
        }
        setTimeout(function() {
          (0, b.forEachNodeList)(mn, function(t4) {
            (0, S.removeClass)(t4, "tns-moving");
          });
        }, 300);
      }
      function Ft() {
        if (qn && (ei = ti >= 0 ? ti : W(), ti = -1, ei !== ni)) {
          var t3 = Jr[ni], e3 = Jr[ei];
          (0, k.setAttrs)(t3, { tabindex: "-1", "aria-label": ii + (ni + 1) }), (0, k.setAttrs)(e3, { tabindex: "0", "aria-label": ii + (ei + 1) + oi }), (0, S.removeClass)(t3, ri), (0, w.addClass)(e3, ri), ni = ei;
        }
      }
      function Rt(t3) {
        return t3.nodeName.toLowerCase();
      }
      function Dt(t3) {
        return "button" === Rt(t3);
      }
      function Bt(t3) {
        return "true" === t3.getAttribute("aria-disabled");
      }
      function qt(t3, e3, n3) {
        t3 ? e3.disabled = n3 : e3.setAttribute("aria-disabled", n3.toString());
      }
      function Wt() {
        if (Dn && !Nn && !Fn) {
          var t3 = Wr ? zr.disabled : Bt(zr), e3 = Hr ? Gr.disabled : Bt(Gr), n3 = sr <= cr, r2 = !Nn && sr >= lr;
          n3 && !t3 && qt(Wr, zr, true), !n3 && t3 && qt(Wr, zr, false), r2 && !e3 && qt(Hr, Gr, true), !r2 && e3 && qt(Hr, Gr, false);
        }
      }
      function Ht(t3, e3) {
        We && (t3.style[We] = e3);
      }
      function Vt() {
        return On ? (On + Mn) * Zn : Sn[Zn - 1] + mn[Zn - 1].getBoundingClientRect().width;
      }
      function Ut() {
        var t3 = Pn - (Vt() - Mn);
        return An && (t3 += An - Mn), t3 > 0 && (t3 = 0), t3;
      }
      function zt(t3) {
        null == t3 && (t3 = sr);
        var e3;
        if (hn && !kn) if (On) e3 = -(On + Mn) * t3;
        else {
          var n3 = Be ? Zn : Cn;
          e3 = 100 * -t3 / n3;
        }
        else e3 = -Sn[t3];
        return tr && (e3 = Math.max(e3, er)), e3 += !hn || kn || On ? "px" : "%";
      }
      function Gt(t3) {
        Ht(vn, "0s"), Qt(t3);
      }
      function Qt(t3) {
        null == t3 && (t3 = zt()), vn.style[rr] = ir + t3 + or;
      }
      function Yt(t3, e3, n3, r2) {
        var i2 = t3 + Cn;
        Fn || (i2 = Math.min(i2, Zn));
        for (var o2 = t3; o2 < i2; o2++) {
          var a2 = mn[o2];
          r2 || (a2.style.left = 100 * (o2 - sr) / Cn + "%"), cn && He && (a2.style[He] = a2.style[Ue] = cn * (o2 - t3) / 1e3 + "s"), (0, S.removeClass)(a2, e3), (0, w.addClass)(a2, n3), r2 && Xn.push(a2);
        }
      }
      function Jt(t3, e3) {
        nr && Ei(), (sr !== ur || e3) && (yr.emit("indexChanged", Me()), yr.emit("transitionStart", Me()), Rn && Mt(), si && t3 && ["click", "keydown"].indexOf(t3.type) >= 0 && oe(), pr = true, xi());
      }
      function Kt(t3) {
        return t3.toLowerCase().replace(/-/g, "");
      }
      function Xt(t3) {
        if (nn || pr) {
          if (yr.emit("transitionEnd", Me(t3)), !nn && Xn.length > 0) for (var e3 = 0; e3 < Xn.length; e3++) {
            var n3 = Xn[e3];
            n3.style.left = "", Ue && He && (n3.style[Ue] = "", n3.style[He] = ""), (0, S.removeClass)(n3, un), (0, w.addClass)(n3, ln);
          }
          if (!t3 || !nn && t3.target.parentNode === vn || t3.target === vn && Kt(t3.propertyName) === Kt(rr)) {
            if (!nr) {
              var r2 = sr;
              Ei(), sr !== r2 && (yr.emit("indexChanged", Me()), Gt());
            }
            "inner" === en && yr.emit("innerLoaded", Me()), pr = false, ur = sr;
          }
        }
      }
      function $t(t3, e3) {
        if (!Sr) if ("prev" === t3) Zt(e3, -1);
        else if ("next" === t3) Zt(e3, 1);
        else {
          if (pr) {
            if (fr) return;
            Xt();
          }
          var n3 = W(), r2 = 0;
          if ("first" === t3 ? r2 = -n3 : "last" === t3 ? r2 = nn ? bn - Cn - n3 : bn - 1 - n3 : ("number" != typeof t3 && (t3 = parseInt(t3)), isNaN(t3) || (e3 || (t3 = Math.max(0, Math.min(bn - 1, t3))), r2 = t3 - n3)), !nn && r2 && Math.abs(r2) < Cn) {
            var i2 = r2 > 0 ? 1 : -1;
            r2 += sr + r2 - bn >= cr ? bn * i2 : 2 * bn * i2 * -1;
          }
          sr += r2, nn && Fn && (sr < cr && (sr += bn), sr > lr && (sr -= bn)), W(sr) !== W(ur) && Jt(e3);
        }
      }
      function Zt(t3, e3) {
        if (pr) {
          if (fr) return;
          Xt();
        }
        var n3;
        if (!e3) {
          t3 = ye(t3);
          for (var r2 = t3.target || t3.srcElement; r2 !== Vr && [zr, Gr].indexOf(r2) < 0; ) r2 = r2.parentNode;
          var i2 = [zr, Gr].indexOf(r2);
          i2 >= 0 && (n3 = true, e3 = 0 === i2 ? -1 : 1);
        }
        if (Nn) {
          if (sr === cr && e3 === -1) return void $t("last", t3);
          if (sr === lr && 1 === e3) return void $t("first", t3);
        }
        e3 && (sr += jn * e3, kn && (sr = Math.floor(sr)), Jt(n3 || t3 && "keydown" === t3.type ? t3 : null));
      }
      function te(t3) {
        if (pr) {
          if (fr) return;
          Xt();
        }
        t3 = ye(t3);
        for (var e3, n3 = t3.target || t3.srcElement; n3 !== Kr && !(0, E.hasAttr)(n3, "data-nav"); ) n3 = n3.parentNode;
        (0, E.hasAttr)(n3, "data-nav") && (e3 = ti = [].indexOf.call(Jr, n3), $t(e3, t3), ei === e3 && (si && oe(), ti = -1));
      }
      function ee() {
        ai = setInterval(function() {
          Zt(null, fi);
        }, Un), si = true;
      }
      function ne() {
        clearInterval(ai), si = false;
      }
      function re(t3, e3) {
        (0, k.setAttrs)(hi, { "data-action": t3 }), hi.innerHTML = pi[0] + t3 + pi[1] + e3;
      }
      function ie() {
        ee(), hi && re("stop", zn[1]);
      }
      function oe() {
        ne(), hi && re("start", zn[0]);
      }
      function ae() {
        Vn && !si && (ie(), ci = false);
      }
      function se() {
        si && (oe(), ci = true);
      }
      function ue() {
        si ? (oe(), ci = true) : (ie(), ci = false);
      }
      function ce() {
        Pe.hidden ? si && (ne(), li = true) : li && (ee(), li = false);
      }
      function le() {
        si && (ne(), ui = true);
      }
      function fe() {
        ui && (ee(), ui = false);
      }
      function he(t3) {
        switch (t3 = ye(t3), t3.keyCode) {
          case je.LEFT:
            Zt(t3, -1);
            break;
          case je.RIGHT:
            Zt(t3, 1);
        }
      }
      function de(t3) {
        t3 = ye(t3);
        var e3 = t3.keyCode;
        switch (e3) {
          case je.LEFT:
          case je.UP:
          case je.PAGEUP:
            zr.disabled || Zt(t3, -1);
            break;
          case je.RIGHT:
          case je.DOWN:
          case je.PAGEDOWN:
            Gr.disabled || Zt(t3, 1);
            break;
          case je.HOME:
            $t("first", t3);
            break;
          case je.END:
            $t("last", t3);
        }
      }
      function pe(t3) {
        t3.focus();
      }
      function ve(t3) {
        function n3(t4) {
          return e2.navContainer ? t4 : $r[t4];
        }
        var r2 = Pe.activeElement;
        if ((0, E.hasAttr)(r2, "data-nav")) {
          t3 = ye(t3);
          var i2 = t3.keyCode, o2 = [].indexOf.call(Jr, r2), a2 = $r.length, s2 = $r.indexOf(o2);
          switch (e2.navContainer && (a2 = bn, s2 = o2), i2) {
            case je.LEFT:
            case je.PAGEUP:
              s2 > 0 && pe(Jr[n3(s2 - 1)]);
              break;
            case je.UP:
            case je.HOME:
              s2 > 0 && pe(Jr[n3(0)]);
              break;
            case je.RIGHT:
            case je.PAGEDOWN:
              s2 < a2 - 1 && pe(Jr[n3(s2 + 1)]);
              break;
            case je.DOWN:
            case je.END:
              s2 < a2 - 1 && pe(Jr[n3(a2 - 1)]);
              break;
            case je.ENTER:
            case je.SPACE:
              ti = o2, $t(o2, t3);
          }
        }
      }
      function ye(t3) {
        return t3 = t3 || Ce.event, me(t3) ? t3.changedTouches[0] : t3;
      }
      function ge(t3) {
        return t3.target || Ce.event.srcElement;
      }
      function me(t3) {
        return t3.type.indexOf("touch") >= 0;
      }
      function be(t3) {
        t3.preventDefault ? t3.preventDefault() : t3.returnValue = false;
      }
      function _e() {
        return (0, m.getTouchDirection)((0, g.toDegree)(_i.y - bi.y, _i.x - bi.x), hr) === e2.axis;
      }
      function we(t3) {
        if (pr) {
          if (fr) return;
          Xt();
        }
        Vn && si && ne(), wi = true, mi && ((0, o.caf)(mi), mi = null);
        var e3 = ye(t3);
        yr.emit(me(t3) ? "touchStart" : "dragStart", Me(t3)), !me(t3) && ["img", "a"].indexOf(Rt(ge(t3))) >= 0 && be(t3), _i.x = bi.x = parseInt(e3.clientX), _i.y = bi.y = parseInt(e3.clientY), nn && (vi = parseFloat(vn.style[rr].replace(ir, "").replace(or, "")), Ht(vn, "0s"));
      }
      function Se(t3) {
        if (wi) {
          var e3 = ye(t3);
          _i.x = parseInt(e3.clientX), _i.y = parseInt(e3.clientY), nn ? mi || (mi = (0, i.raf)(function() {
            Ee(t3);
          })) : ("?" === dr && (dr = _e()), dr && (qr = true)), qr && t3.preventDefault();
        }
      }
      function Ee(t3) {
        if (!dr) return void (wi = false);
        if ((0, o.caf)(mi), wi && (mi = (0, i.raf)(function() {
          Ee(t3);
        })), "?" === dr && (dr = _e()), dr) {
          !qr && me(t3) && (qr = true);
          try {
            t3.type && yr.emit(me(t3) ? "touchMove" : "dragMove", Me(t3));
          } catch (t4) {
          }
          var e3 = vi, n3 = Si(_i, bi);
          if (!hn || On || kn) e3 += n3, e3 += "px";
          else {
            var r2 = Be ? n3 * Cn * 100 / (Pn * Zn) : 100 * n3 / Pn;
            e3 += r2, e3 += "%";
          }
          vn.style[rr] = ir + e3 + or;
        }
      }
      function xe(t3) {
        if (wi) {
          mi && ((0, o.caf)(mi), mi = null), nn && Ht(vn, ""), wi = false;
          var n3 = ye(t3);
          _i.x = parseInt(n3.clientX), _i.y = parseInt(n3.clientY);
          var r2 = Si(_i, bi);
          if (Math.abs(r2)) {
            if (!me(t3)) {
              var a2 = ge(t3);
              (0, I.addEvents)(a2, { click: function t4(e3) {
                be(e3), (0, N.removeEvents)(a2, { click: t4 });
              } });
            }
            nn ? mi = (0, i.raf)(function() {
              if (hn && !kn) {
                var e3 = -r2 * Cn / Pn;
                e3 = r2 > 0 ? Math.floor(e3) : Math.ceil(e3), sr += e3;
              } else {
                var n4 = -(vi + r2);
                if (n4 <= 0) sr = cr;
                else if (n4 >= Sn[Sn.length - 1]) sr = lr;
                else for (var i2 = 0; i2 < Zn && n4 >= Sn[i2]; ) sr = i2, n4 > Sn[i2] && r2 < 0 && (sr += 1), i2++;
              }
              Jt(t3, r2), yr.emit(me(t3) ? "touchEnd" : "dragEnd", Me(t3));
            }) : dr && Zt(t3, r2 > 0 ? -1 : 1);
          }
        }
        "auto" === e2.preventScrollOnTouch && (qr = false), hr && (dr = "?"), Vn && !si && ee();
      }
      function ke() {
        pn.style.height = Sn[sr + Cn] - Sn[sr] + "px";
      }
      function Oe() {
        $r = [];
        for (var t3 = W() % Cn; t3 < bn; ) nn && !Fn && t3 + Cn > bn && (t3 = bn - Cn), $r.push(t3), t3 += Cn;
        (Fn && $r.length * Cn < bn || !Fn && $r[0] > 0) && $r.unshift(0);
      }
      function Ae() {
        qn && !Tr && (Oe(), $r !== Zr && ((0, b.forEachNodeList)(Jr, function(t3, e3) {
          $r.indexOf(e3) < 0 ? (0, M.hideElement)(t3) : (0, P.showElement)(t3);
        }), Zr = $r));
      }
      function Me(t3) {
        return { container: vn, slideItems: mn, navContainer: Kr, navItems: Jr, controlsContainer: Vr, hasControls: jr, prevButton: zr, nextButton: Gr, items: Cn, slideBy: jn, cloneCount: $n, slideCount: bn, slideCountNew: Zn, index: sr, indexCached: ur, displayIndex: B(), navCurrentIndex: ei, navCurrentIndexCached: ni, visibleNavIndexes: $r, visibleNavIndexesCached: Zr, sheet: Yn, isOn: wn, event: t3 || {} };
      }
      e2 = (0, a.extend)({ container: ".slider", mode: "carousel", axis: "horizontal", items: 1, gutter: 0, edgePadding: 0, fixedWidth: false, autoWidth: false, viewportMax: false, slideBy: 1, controls: true, controlsPosition: "top", controlsText: ["prev", "next"], controlsContainer: false, prevButton: false, nextButton: false, nav: true, navPosition: "top", navContainer: false, navAsThumbnails: false, arrowKeys: false, speed: 300, autoplay: false, autoplayPosition: "top", autoplayTimeout: 5e3, autoplayDirection: "forward", autoplayText: ["start", "stop"], autoplayHoverPause: false, autoplayButton: false, autoplayButtonOutput: true, autoplayResetOnVisibility: true, animateIn: "tns-fadeIn", animateOut: "tns-fadeOut", animateNormal: "tns-normal", animateDelay: false, loop: true, rewind: false, autoHeight: false, responsive: false, lazyload: false, lazyloadSelector: ".tns-lazy-img", touch: true, mouseDrag: false, swipeAngle: 15, nested: false, preventActionWhenRunning: false, preventScrollOnTouch: "auto", freezable: true, onInit: false, useLocalStorage: true }, e2 || {});
      var Pe = document, Ce = window, je = { ENTER: 13, SPACE: 32, PAGEUP: 33, PAGEDOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 }, Le = {}, Te = e2.useLocalStorage;
      if (Te) {
        var Ie = navigator.userAgent, Ne = /* @__PURE__ */ new Date();
        try {
          Le = Ce.localStorage, Le ? (Le.setItem(Ne, Ne), Te = Le.getItem(Ne) == Ne, Le.removeItem(Ne)) : Te = false, Te || (Le = {});
        } catch (t3) {
          Te = false;
        }
        Te && (Le.tnsApp && Le.tnsApp !== Ie && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t3) {
          Le.removeItem(t3);
        }), localStorage.tnsApp = Ie);
      }
      for (var Fe = Le.tC ? (0, s.checkStorageValue)(Le.tC) : (0, u.setLocalStorage)(Le, "tC", (0, l.calc)(), Te), Re = Le.tPL ? (0, s.checkStorageValue)(Le.tPL) : (0, u.setLocalStorage)(Le, "tPL", (0, f.percentageLayout)(), Te), De = Le.tMQ ? (0, s.checkStorageValue)(Le.tMQ) : (0, u.setLocalStorage)(Le, "tMQ", (0, h.mediaquerySupport)(), Te), Be = Le.tTf ? (0, s.checkStorageValue)(Le.tTf) : (0, u.setLocalStorage)(Le, "tTf", (0, j.whichProperty)("transform"), Te), qe = Le.t3D ? (0, s.checkStorageValue)(Le.t3D) : (0, u.setLocalStorage)(Le, "t3D", (0, L.has3DTransforms)(Be), Te), We = Le.tTDu ? (0, s.checkStorageValue)(Le.tTDu) : (0, u.setLocalStorage)(Le, "tTDu", (0, j.whichProperty)("transitionDuration"), Te), He = Le.tTDe ? (0, s.checkStorageValue)(Le.tTDe) : (0, u.setLocalStorage)(Le, "tTDe", (0, j.whichProperty)("transitionDelay"), Te), Ve = Le.tADu ? (0, s.checkStorageValue)(Le.tADu) : (0, u.setLocalStorage)(Le, "tADu", (0, j.whichProperty)("animationDuration"), Te), Ue = Le.tADe ? (0, s.checkStorageValue)(Le.tADe) : (0, u.setLocalStorage)(Le, "tADe", (0, j.whichProperty)("animationDelay"), Te), ze = Le.tTE ? (0, s.checkStorageValue)(Le.tTE) : (0, u.setLocalStorage)(Le, "tTE", (0, T.getEndProperty)(We, "Transition"), Te), Ge = Le.tAE ? (0, s.checkStorageValue)(Le.tAE) : (0, u.setLocalStorage)(Le, "tAE", (0, T.getEndProperty)(Ve, "Animation"), Te), Qe = Ce.console && "function" == typeof Ce.console.warn, Ye = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Je = {}, Ke = Ye.length; Ke--; ) {
        var Xe = Ye[Ke];
        if ("string" == typeof e2[Xe]) {
          var $e = e2[Xe], Ze = Pe.querySelector($e);
          if (Je[Xe] = $e, !Ze || !Ze.nodeName) return void (Qe && console.warn("Can't find", e2[Xe]));
          e2[Xe] = Ze;
        }
      }
      if (e2.container.children.length < 1) return void (Qe && console.warn("No slides found in", e2.container));
      var tn = e2.responsive, en = e2.nested, nn = "carousel" === e2.mode;
      if (tn) {
        0 in tn && (e2 = (0, a.extend)(e2, tn[0]), delete tn[0]);
        var rn = {};
        for (var on in tn) {
          var an = tn[on];
          an = "number" == typeof an ? { items: an } : an, rn[on] = an;
        }
        tn = rn, rn = null;
      }
      if (nn && "outer" !== en || n2(e2), !nn) {
        e2.axis = "horizontal", e2.slideBy = "page", e2.edgePadding = false;
        var sn = e2.animateIn, un = e2.animateOut, cn = e2.animateDelay, ln = e2.animateNormal;
      }
      var fn, hn = "horizontal" === e2.axis, dn = Pe.createElement("div"), pn = Pe.createElement("div"), vn = e2.container, yn = vn.parentNode, gn = vn.outerHTML, mn = vn.children, bn = mn.length, _n = U(), wn = false;
      tn && dt();
      var Sn, xn, kn = e2.autoWidth, On = Y("fixedWidth"), An = Y("edgePadding"), Mn = Y("gutter"), Pn = G(), Cn = kn ? 1 : Math.floor(Y("items")), jn = Y("slideBy"), Ln = e2.viewportMax || e2.fixedWidthViewportWidth, Tn = Y("arrowKeys"), In = Y("speed"), Nn = e2.rewind, Fn = !Nn && e2.loop, Rn = Y("autoHeight"), Dn = Y("controls"), Bn = Y("controlsText"), qn = Y("nav"), Wn = Y("touch"), Hn = Y("mouseDrag"), Vn = Y("autoplay"), Un = Y("autoplayTimeout"), zn = Y("autoplayText"), Gn = Y("autoplayHoverPause"), Qn = Y("autoplayResetOnVisibility"), Yn = (0, d.createStyleSheet)(), Jn = e2.lazyload, Kn = e2.lazyloadSelector, Xn = [], $n = Fn ? V() : 0, Zn = nn ? bn + 2 * $n : bn + $n, tr = !(!On && !kn || Fn), er = On ? Ut() : null, nr = !nn || !Fn, rr = hn ? "left" : "top", ir = "", or = "", ar = /* @__PURE__ */ function() {
        return On ? function() {
          return Math.ceil(-er / (On + Mn));
        } : kn ? function() {
          for (var t3 = Zn, e3 = t3 - 1; t3--; ) Sn[t3] > -er && (e3 = t3);
          return e3;
        } : function() {
          return Fn || nn ? Math.max(0, Zn - Math.ceil(Cn)) : Zn - 1;
        };
      }(), sr = q(Y("startIndex")), ur = sr, cr = (B(), 0), lr = kn ? null : ar(), fr = e2.preventActionWhenRunning, hr = e2.swipeAngle, dr = !hr || "?", pr = false, vr = e2.onInit, yr = new F.Events(), gr = " tns-slider tns-" + e2.mode, mr = vn.id || (0, c.getSlideId)(), br = Y("disable"), _r = false, wr = e2.freezable, Sr = !(!wr || kn) && ht(), Er = false, xr = { click: Zt, keydown: de }, kr = { click: te, keydown: ve }, Or = { mouseover: le, mouseout: fe }, Ar = { visibilitychange: ce }, Mr = { keydown: he }, Pr = { touchstart: we, touchmove: Se, touchend: xe, touchcancel: xe }, Cr = { mousedown: we, mousemove: Se, mouseup: xe, mouseleave: xe }, jr = Q("controls"), Lr = Q("nav"), Tr = !!kn || e2.navAsThumbnails, Ir = Q("autoplay"), Nr = Q("touch"), Fr = Q("mouseDrag"), Rr = "tns-slide-active", Dr = "tns-complete", Br = { load: wt, error: St }, qr = "force" === e2.preventScrollOnTouch;
      if (jr) var Wr, Hr, Vr = e2.controlsContainer, Ur = e2.controlsContainer ? e2.controlsContainer.outerHTML : "", zr = e2.prevButton, Gr = e2.nextButton, Qr = e2.prevButton ? e2.prevButton.outerHTML : "", Yr = e2.nextButton ? e2.nextButton.outerHTML : "";
      if (Lr) var Jr, Kr = e2.navContainer, Xr = e2.navContainer ? e2.navContainer.outerHTML : "", $r = [], Zr = $r, ti = -1, ei = W(), ni = ei, ri = "tns-nav-active", ii = "Carousel Page ", oi = " (Current Slide)";
      if (Ir) var ai, si, ui, ci, li, fi = "forward" === e2.autoplayDirection ? 1 : -1, hi = e2.autoplayButton, di = e2.autoplayButton ? e2.autoplayButton.outerHTML : "", pi = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (Nr || Fr) var vi, yi, gi, mi, bi = {}, _i = {}, wi = false, Si = hn ? function(t3, e3) {
        return t3.x - e3.x;
      } : function(t3, e3) {
        return t3.y - e3.y;
      };
      kn || D(br || Sr), Be && (rr = Be, ir = "translate", qe ? (ir += hn ? "3d(" : "3d(0px, ", or = hn ? ", 0px, 0px)" : ", 0px)") : (ir += hn ? "X(" : "Y(", or = ")")), rt();
      var Ei = /* @__PURE__ */ function() {
        return Fn ? nn ? function() {
          var t3 = cr, e3 = lr;
          t3 += jn, e3 -= jn, An ? (t3 += 1, e3 -= 1) : On && Pn % (On + Mn) && (e3 -= 1), $n && (sr > e3 ? sr -= bn : sr < t3 && (sr += bn));
        } : function() {
          if (sr > lr) for (; sr >= cr + bn; ) sr -= bn;
          else if (sr < cr) for (; sr <= lr - bn; ) sr += bn;
        } : function() {
          sr = Math.max(cr, Math.min(lr, sr));
        };
      }(), xi = /* @__PURE__ */ function() {
        return nn ? function() {
          Ht(vn, ""), We || !In ? (Qt(), In && (0, C.isVisible)(vn) || Xt()) : (0, R.jsTransform)(vn, rr, ir, or, zt(), In, Xt), hn || ke();
        } : function() {
          Xn = [];
          var t3 = {};
          t3[ze] = t3[Ge] = Xt, (0, N.removeEvents)(mn[ur], t3), (0, I.addEvents)(mn[sr], t3), Yt(ur, sn, un, true), Yt(sr, ln, sn), ze && Ge && In && (0, C.isVisible)(vn) || Xt();
        };
      }();
      return { version: "2.8.8", getInfo: Me, events: yr, goTo: $t, play: ae, pause: se, isOn: wn, updateSliderHeight: Lt, refresh: ot, destroy: ct, rebuild: function() {
        return t2((0, a.extend)(e2, Je));
      } };
    };
  }, { "./helpers/addCSSRule.js": 19, "./helpers/addClass.js": 20, "./helpers/addEvents.js": 21, "./helpers/arrayFromNodeList.js": 22, "./helpers/caf.js": 23, "./helpers/calc.js": 24, "./helpers/checkStorageValue.js": 25, "./helpers/createStyleSheet.js": 27, "./helpers/events.js": 29, "./helpers/extend.js": 30, "./helpers/forEachNodeList.js": 31, "./helpers/getAttr.js": 32, "./helpers/getCssRulesLength.js": 34, "./helpers/getEndProperty.js": 35, "./helpers/getSlideId.js": 36, "./helpers/getTouchDirection.js": 37, "./helpers/has3DTransforms.js": 38, "./helpers/hasAttr.js": 39, "./helpers/hasClass.js": 40, "./helpers/hideElement.js": 41, "./helpers/isVisible.js": 43, "./helpers/jsTransform.js": 44, "./helpers/mediaquerySupport.js": 45, "./helpers/percentageLayout.js": 47, "./helpers/raf.js": 48, "./helpers/removeAttrs.js": 49, "./helpers/removeCSSRule.js": 50, "./helpers/removeClass.js": 51, "./helpers/removeEvents.js": 52, "./helpers/setAttrs.js": 54, "./helpers/setLocalStorage.js": 56, "./helpers/showElement.js": 57, "./helpers/toDegree.js": 58, "./helpers/whichProperty.js": 59 }]
}, {}, [18]);
function isObject$1(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$1(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
      extend$1(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend$1(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent2() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend$1(win, ssrWindow);
  return win;
}
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const children = [...element.children];
  if (element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOf(el, parent) {
  const isChild = parent.contains(el);
  if (!isChild && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    return children.includes(el);
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
  return (v) => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 1e-3;
    }
    return v;
  };
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (typeof handler !== "function") return self2;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event2) => {
      if (!self2.eventsListeners[event2]) self2.eventsListeners[event2] = [];
      self2.eventsListeners[event2][method](handler);
    });
    return self2;
  },
  once(events2, handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (typeof handler !== "function") return self2;
    function onceHandler() {
      self2.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self2, args);
    }
    onceHandler.__emitterProxy = handler;
    return self2.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (typeof handler !== "function") return self2;
    const method = priority ? "unshift" : "push";
    if (self2.eventsAnyListeners.indexOf(handler) < 0) {
      self2.eventsAnyListeners[method](handler);
    }
    return self2;
  },
  offAny(handler) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (!self2.eventsAnyListeners) return self2;
    const index = self2.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self2.eventsAnyListeners.splice(index, 1);
    }
    return self2;
  },
  off(events2, handler) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (!self2.eventsListeners) return self2;
    events2.split(" ").forEach((event2) => {
      if (typeof handler === "undefined") {
        self2.eventsListeners[event2] = [];
      } else if (self2.eventsListeners[event2]) {
        self2.eventsListeners[event2].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self2.eventsListeners[event2].splice(index, 1);
          }
        });
      }
    });
    return self2;
  },
  emit() {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed) return self2;
    if (!self2.eventsListeners) return self2;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self2;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self2;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event2) => {
      if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
        self2.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event2, ...data]);
        });
      }
      if (self2.eventsListeners && self2.eventsListeners[event2]) {
        self2.eventsListeners[event2].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self2;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slides);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width") : elementOuterSize(slide2, "height");
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event2, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event2.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event2) {
  const swiper = this;
  const document2 = getDocument();
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event2.pointerType === "mouse") return;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  (/* @__PURE__ */ new Date()).getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event2) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend({}, defaults, allModulesParams);
    swiper.params = extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend({}, swiper.params);
    swiper.passedParams = extend({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules2 = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
      modules2.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);
function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document2 = getDocument();
  swiper.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document2.createElement("div");
  function renderSlide(slide2, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide2, index);
      if (typeof slideEl === "string") {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement("swiper-slide");
    } else {
      slideEl = createElement("div", swiper.params.slideClass);
    }
    slideEl.setAttribute("data-swiper-slide-index", index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide2;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update2(force, beforeInit) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = "right";
    else offsetProp = swiper.isHorizontal() ? "left" : "top";
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit("virtualUpdate");
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach((slideEl) => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit("virtualUpdate");
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit("virtualUpdate");
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = (index) => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === "undefined" || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach((index) => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide2(slides) {
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update2(true);
  }
  function prependSlide2(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
        if (cachedElIndex) {
          cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update2(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide2(slidesIndexes) {
    if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        Object.keys(swiper.virtual.cache).forEach((key) => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update2(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides2() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update2(true);
    swiper.slideTo(0, 0);
  }
  on("beforeInit", () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === "undefined") {
      const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute("data-swiper-slide-index", slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update2(false, true);
  });
  on("setTranslate", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update2();
      }, 100);
    } else {
      update2();
    }
  });
  on("init update resize", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide: appendSlide2,
    prependSlide: prependSlide2,
    removeSlide: removeSlide2,
    removeAllSlides: removeAllSlides2,
    update: update2
  });
}
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  const window2 = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event2) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return void 0;
    }
    if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
      return void 0;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return void 0;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window2.innerWidth;
      const windowHeight = window2.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      if (!inView) return void 0;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit("keyPress", kc);
    return void 0;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document2.addEventListener("keydown", handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document2.removeEventListener("keydown", handle);
    swiper.keyboard.enabled = false;
  }
  on("init", () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events2(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events2("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events2("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height");
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        subEl.innerHTML = paginationHTML || "";
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.filter((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();
    else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on("changeDirection", () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize2();
      setTranslate2();
    }
  });
  on("update resize observerUpdate lock unlock changeDirection", () => {
    updateSize2();
  });
  on("setTranslate", () => {
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}
function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute("data-swiper-parallax") || "0";
    let x = el.getAttribute("data-swiper-parallax-x");
    let y = el.getAttribute("data-swiper-parallax-y");
    const scale = el.getAttribute("data-swiper-parallax-scale");
    const opacity = el.getAttribute("data-swiper-parallax-opacity");
    const rotate = el.getAttribute("data-swiper-parallax-rotate");
    if (x || y) {
      x = x || "0";
      y = y || "0";
    } else if (swiper.isHorizontal()) {
      x = p;
      y = "0";
    } else {
      y = p;
      x = "0";
    }
    if (x.indexOf("%") >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf("%") >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== "undefined" && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== "undefined" && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== "undefined" && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate2 = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach((subEl) => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl) => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition2 = function(duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach((parallaxEl) => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on("beforeInit", () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on("init", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTranslate", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTransition", (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition2(duration);
  });
}
function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  };
  const image = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, "scale", {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit("zoomChange", value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function onGestureStart(e) {
    if (e.pointerType === "mouse") {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = void 0;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = "0ms";
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === "mouse" && e.type === "pointerout") return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = void 0;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart2(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event2 = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event2.pageX;
    image.touchesStart.y = event2.pageY;
  }
  function onTouchMove2(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
      image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = "0ms";
    }
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd2() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = void 0;
      gesture.imageEl = void 0;
      gesture.imageWrapEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.touchAction = "none";
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === "undefined" && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === "number" ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = void 0;
      touchY = void 0;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "";
      swiper.wrapperEl.style.touchAction = "";
    }
    zoom.scale = 1;
    currentScale = 1;
    image.touchesStart.x = void 0;
    image.touchesStart.y = void 0;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = void 0;
    gesture.originX = 0;
    gesture.originY = 0;
  }
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      zoomOut();
    } else {
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  on("init", () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    disable();
  });
  on("touchStart", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart2(e);
  });
  on("touchEnd", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd2();
  });
  on("doubleTap", (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on("transitionEnd", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on("slideChange", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
      // or 'container'
    }
  });
  swiper.controller = {
    control: void 0
  };
  function LinearSpline(x, y) {
    const binarySearch = /* @__PURE__ */ function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate2(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper2 = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;
      const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === "slide") {
        getInterpolateFunction(c);
        controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
      }
      if (!controlledTranslate || swiper.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition2(duration, byController) {
    const Swiper2 = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = void 0;
      delete swiper.controller.spline;
    }
  }
  on("beforeInit", () => {
    if (typeof window !== "undefined" && // eslint-disable-line
    (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach((controlElement) => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = (e) => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on("update", () => {
    removeSpline();
  });
  on("resize", () => {
    removeSpline();
  });
  on("observerUpdate", () => {
    removeSpline();
  });
  on("setTranslate", (_s, translate2, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate2, byController);
  });
  on("setTransition", (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate: setTranslate2,
    setTransition: setTransition2
  });
}
function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = "";
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "0");
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "-1");
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("role", role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-roledescription", description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-controls", controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-label", label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("id", id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-live", live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = makeElementsArray(swiper.navigation.prevEl);
      const nextEls = makeElementsArray(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach((bulletEl) => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, "button");
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute("aria-current", "true");
      } else {
        bulletEl.removeAttribute("aria-current");
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== "BUTTON") {
      addElRole(el, "button");
      el.addEventListener("keydown", onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = (e) => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = (e) => {
    visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  };
  const handleFocus = (e) => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(parseInt(slideEl.getAttribute("data-swiper-slide-index")), 0);
      } else {
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);
    initSlides();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.addEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("pointerdown", handlePointerDown, true);
    swiper.el.addEventListener("pointerup", handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.removeEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("focus", handleFocus, true);
      swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
      swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
  }
  on("beforeInit", () => {
    liveRegion = createElement("span", swiper.params.a11y.notificationClass);
    liveRegion.setAttribute("aria-live", "assertive");
    liveRegion.setAttribute("aria-atomic", "true");
  });
  on("afterInit", () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on("fromEdge toEdge afterInit lock unlock", () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on("paginationUpdate", () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on("destroy", () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}
function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: "",
      replaceState: false,
      key: "slides",
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = (text) => {
    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  const getPathValues = (urlOverride) => {
    const window2 = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window2.location;
    }
    const pathArray = location.pathname.slice(1).split("/").filter((part) => part !== "");
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window2 = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window2.location;
    }
    const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide2.getAttribute("data-history"));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ""}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ""}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window2.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window2.history.replaceState({
        value
      }, null, value);
    } else {
      window2.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide2 = swiper.slides[i];
        const slideHistory = slugify(slide2.getAttribute("data-history"));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide2);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window2 = getWindow();
    if (!swiper.params.history) return;
    if (!window2.history || !window2.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window2.addEventListener("popstate", setHistoryPopState);
    }
  };
  const destroy = () => {
    const window2 = getWindow();
    if (!swiper.params.history.replaceState) {
      window2.removeEventListener("popstate", setHistoryPopState);
    }
  };
  on("init", () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}
function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document2 = getDocument();
  const window2 = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-hash") === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit("hashChange");
    const newHash = document2.location.hash.replace("#", "");
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
    if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
      window2.history.replaceState(null, null, `#${activeSlideHash}` || "");
      emit("hashSet");
    } else {
      document2.location.hash = activeSlideHash || "";
      emit("hashSet");
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document2.location.hash.replace("#", "");
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window2.addEventListener("hashchange", onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window2.removeEventListener("hashchange", onHashChange);
    }
  };
  on("init", () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHash();
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update2(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
      const document2 = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update2(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = (e) => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update2(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update2(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update2();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update: update2
  });
}
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart2() {
    if (swiper.params.cssMode) return;
    const translate2 = swiper.getTranslate();
    swiper.setTranslate(translate2);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove2() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd2(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit("_freeModeStaticRelease");
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart: onTouchStart2,
      onTouchMove: onTouchMove2,
      onTouchEnd: onTouchEnd2
    }
  });
}
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = (slides) => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== "auto" && fill === "row") {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach((slide2) => {
        if (slide2.swiperSlideGridSet) {
          slide2.style.height = "";
          slide2.style[swiper.getDirectionLabel("margin-top")] = "";
        }
      });
    }
  };
  const updateSlide = (i, slide2, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === "row" && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide2.style.order = newSlideOrderIndex;
    } else if (fill === "column") {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide2.row = row;
    slide2.column = column;
    slide2.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
    slide2.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on("init", onInit);
  on("update", onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = "";
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = "";
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide2 = swiper.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide2;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate2 = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach((slideEl) => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate2 = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser: browser2
    } = swiper;
    const r = getRotateFix(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
  };
  const setTransition2 = (duration) => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector(".swiper-cube-shadow");
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (!shadowAfter) {
      shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    swiper.params.flipEffect;
    swiper.slides.forEach((slideEl) => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate2 = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = getRotateFix(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate2 = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate2 = params.depth;
    const r = getRotateFix(swiper);
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate2 * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string") return value;
    return `${value}px`;
  };
  const setTranslate2 = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = getRotateFix(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow("creative", slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate2 = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
Swiper.use(modules);
const productSwiperElement = document.getElementById("productSwiper");
if (productSwiperElement) {
  new Swiper("#productSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true
    // Для бесконечного слайдера
  });
}
const buttons = document.querySelectorAll(".card__tabs-buttons .card__tabs-button");
const tabs = document.querySelectorAll(".card__tabs-content");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("card__tabs-button--active"));
    tabs.forEach((tab) => tab.classList.remove("card__tabs-content--active"));
    button.classList.add("card__tabs-button--active");
    document.getElementById(button.dataset.tab).classList.add("card__tabs-content--active");
  });
});
//# sourceMappingURL=main-UBQVr8ks.js.map
