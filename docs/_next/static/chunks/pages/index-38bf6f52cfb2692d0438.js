_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "/0+H": function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var n,
        o = (n = r("q1tI")) && n.__esModule ? n : { default: n },
        a = r("lwAK");
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          o = void 0 !== n && n,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return r || (o && i);
      }
    },
    "7W2i": function (e, t, r) {
      var n = r("SksO");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      };
    },
    "8Kt/": function (e, t, r) {
      "use strict";
      r("lSNA");
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r("q1tI")),
        a = (n = r("Xuae")) && n.__esModule ? n : { default: n },
        i = r("lwAK"),
        s = r("FYa8"),
        c = r("/0+H");
      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var r = o.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (o) {
                var a = !0;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  var i = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var s = 0, c = p.length; s < c; s++) {
                      var l = p[s];
                      if (o.props.hasOwnProperty(l))
                        if ("charSet" === l) r.has(l) ? (a = !1) : r.add(l);
                        else {
                          var u = o.props[l],
                            d = n[l] || new Set();
                          d.has(u) ? (a = !1) : (d.add(u), (n[l] = d));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var r = e.key || t;
            return o.default.cloneElement(e, { key: r });
          });
      }
      function g(e) {
        var t = e.children,
          r = (0, o.useContext)(i.AmpStateContext),
          n = (0, o.useContext)(s.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: f,
            headManager: n,
            inAmpMode: (0, c.isInAmpMode)(r),
          },
          t
        );
      }
      g.rewind = function () {};
      var m = g;
      t.default = m;
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    FYa8: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((n = r("q1tI")) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    Ijbi: function (e, t, r) {
      var n = r("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    Nsbk: function (e, t) {
      function r(t) {
        return (
          (e.exports = r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    Qetd: function (e, t, r) {
      "use strict";
      var n = Object.assign.bind(Object);
      (e.exports = n), (e.exports.default = e.exports);
    },
    RIqP: function (e, t, r) {
      var n = r("Ijbi"),
        o = r("EbDI"),
        a = r("ZhPi"),
        i = r("Bnag");
      e.exports = function (e) {
        return n(e) || o(e) || a(e) || i();
      };
    },
    RNiq: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return Pe;
        });
      var n,
        o,
        a = r("q1tI"),
        i = r.n(a),
        s = r("vOnD"),
        c = function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        },
        l = Object(s.c)(
          n ||
            (n = c(
              [
                "\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",
              ],
              [
                "\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",
              ]
            ))
        ),
        u = Object(s.b)(o || (o = c(["", ""], ["", ""])), l),
        d = r("8Kt/"),
        p = r.n(d);
      function f(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var g = r("Qetd"),
        m = r.n(g),
        b = function (e, t) {
          var r = m()({}, e, t);
          for (var n in e) {
            var o;
            e[n] &&
              "object" === typeof t[n] &&
              m()(r, (((o = {})[n] = m()(e[n], t[n])), o));
          }
          return r;
        },
        h = {
          breakpoints: [40, 52, 64].map(function (e) {
            return e + "em";
          }),
        },
        y = function (e) {
          return "@media screen and (min-width: " + e + ")";
        },
        v = function (e, t) {
          return w(t, e, e);
        },
        w = function (e, t, r, n, o) {
          for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++)
            e = e ? e[t[n]] : o;
          return e === o ? r : e;
        },
        S = function e(t) {
          var r = {},
            n = function (e) {
              var n = {},
                o = !1,
                a = e.theme && e.theme.disableStyledSystemCache;
              for (var i in e)
                if (t[i]) {
                  var s = t[i],
                    c = e[i],
                    l = w(e.theme, s.scale, s.defaults);
                  if ("object" !== typeof c) m()(n, s(c, l, e));
                  else {
                    if (
                      ((r.breakpoints =
                        (!a && r.breakpoints) ||
                        w(e.theme, "breakpoints", h.breakpoints)),
                      Array.isArray(c))
                    ) {
                      (r.media =
                        (!a && r.media) || [null].concat(r.breakpoints.map(y))),
                        (n = b(n, k(r.media, s, l, c, e)));
                      continue;
                    }
                    null !== c &&
                      ((n = b(n, R(r.breakpoints, s, l, c, e))), (o = !0));
                  }
                }
              return (
                o &&
                  (n = (function (e) {
                    var t = {};
                    return (
                      Object.keys(e)
                        .sort(function (e, t) {
                          return e.localeCompare(t, void 0, {
                            numeric: !0,
                            sensitivity: "base",
                          });
                        })
                        .forEach(function (r) {
                          t[r] = e[r];
                        }),
                      t
                    );
                  })(n)),
                n
              );
            };
          (n.config = t), (n.propNames = Object.keys(t)), (n.cache = r);
          var o = Object.keys(t).filter(function (e) {
            return "config" !== e;
          });
          return (
            o.length > 1 &&
              o.forEach(function (r) {
                var o;
                n[r] = e((((o = {})[r] = t[r]), o));
              }),
            n
          );
        },
        k = function (e, t, r, n, o) {
          var a = {};
          return (
            n.slice(0, e.length).forEach(function (n, i) {
              var s,
                c = e[i],
                l = t(n, r, o);
              c ? m()(a, (((s = {})[c] = m()({}, a[c], l)), s)) : m()(a, l);
            }),
            a
          );
        },
        R = function (e, t, r, n, o) {
          var a = {};
          for (var i in n) {
            var s = e[i],
              c = t(n[i], r, o);
            if (s) {
              var l,
                u = y(s);
              m()(a, (((l = {})[u] = m()({}, a[u], c)), l));
            } else m()(a, c);
          }
          return a;
        },
        C = function (e) {
          var t = e.properties,
            r = e.property,
            n = e.scale,
            o = e.transform,
            a = void 0 === o ? v : o,
            i = e.defaultScale;
          t = t || [r];
          var s = function (e, r, n) {
            var o = {},
              i = a(e, r, n);
            if (null !== i)
              return (
                t.forEach(function (e) {
                  o[e] = i;
                }),
                o
              );
          };
          return (s.scale = n), (s.defaults = i), s;
        },
        x = function (e) {
          void 0 === e && (e = {});
          var t = {};
          return (
            Object.keys(e).forEach(function (r) {
              var n = e[r];
              t[r] =
                !0 !== n
                  ? "function" !== typeof n
                    ? C(n)
                    : n
                  : C({ property: r, scale: r });
            }),
            S(t)
          );
        },
        O = x({
          width: {
            property: "width",
            scale: "sizes",
            transform: function (e, t) {
              return w(
                t,
                e,
                !(function (e) {
                  return "number" === typeof e && !isNaN(e);
                })(e) || e > 1
                  ? e
                  : 100 * e + "%"
              );
            },
          },
          height: { property: "height", scale: "sizes" },
          minWidth: { property: "minWidth", scale: "sizes" },
          minHeight: { property: "minHeight", scale: "sizes" },
          maxWidth: { property: "maxWidth", scale: "sizes" },
          maxHeight: { property: "maxHeight", scale: "sizes" },
          size: { properties: ["width", "height"], scale: "sizes" },
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          display: !0,
          verticalAlign: !0,
        }),
        j = O,
        L = {
          color: { property: "color", scale: "colors" },
          backgroundColor: { property: "backgroundColor", scale: "colors" },
          opacity: !0,
        };
      L.bg = L.backgroundColor;
      var T = x(L),
        M = T,
        A = x({
          fontFamily: { property: "fontFamily", scale: "fonts" },
          fontSize: {
            property: "fontSize",
            scale: "fontSizes",
            defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
          },
          fontWeight: { property: "fontWeight", scale: "fontWeights" },
          lineHeight: { property: "lineHeight", scale: "lineHeights" },
          letterSpacing: { property: "letterSpacing", scale: "letterSpacings" },
          textAlign: !0,
          fontStyle: !0,
        }),
        W = x({
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: !0,
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
        }),
        B = W,
        P = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        _ = x({
          gridGap: {
            property: "gridGap",
            scale: "space",
            defaultScale: P.space,
          },
          gridColumnGap: {
            property: "gridColumnGap",
            scale: "space",
            defaultScale: P.space,
          },
          gridRowGap: {
            property: "gridRowGap",
            scale: "space",
            defaultScale: P.space,
          },
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridAutoRows: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        }),
        E = _,
        I = {
          border: { property: "border", scale: "borders" },
          borderWidth: { property: "borderWidth", scale: "borderWidths" },
          borderStyle: { property: "borderStyle", scale: "borderStyles" },
          borderColor: { property: "borderColor", scale: "colors" },
          borderRadius: { property: "borderRadius", scale: "radii" },
          borderTop: { property: "borderTop", scale: "borders" },
          borderTopLeftRadius: {
            property: "borderTopLeftRadius",
            scale: "radii",
          },
          borderTopRightRadius: {
            property: "borderTopRightRadius",
            scale: "radii",
          },
          borderRight: { property: "borderRight", scale: "borders" },
          borderBottom: { property: "borderBottom", scale: "borders" },
          borderBottomLeftRadius: {
            property: "borderBottomLeftRadius",
            scale: "radii",
          },
          borderBottomRightRadius: {
            property: "borderBottomRightRadius",
            scale: "radii",
          },
          borderLeft: { property: "borderLeft", scale: "borders" },
          borderX: {
            properties: ["borderLeft", "borderRight"],
            scale: "borders",
          },
          borderY: {
            properties: ["borderTop", "borderBottom"],
            scale: "borders",
          },
          borderTopWidth: { property: "borderTopWidth", scale: "borderWidths" },
          borderTopColor: { property: "borderTopColor", scale: "colors" },
          borderTopStyle: { property: "borderTopStyle", scale: "borderStyles" },
        };
      (I.borderTopLeftRadius = {
        property: "borderTopLeftRadius",
        scale: "radii",
      }),
        (I.borderTopRightRadius = {
          property: "borderTopRightRadius",
          scale: "radii",
        }),
        (I.borderBottomWidth = {
          property: "borderBottomWidth",
          scale: "borderWidths",
        }),
        (I.borderBottomColor = {
          property: "borderBottomColor",
          scale: "colors",
        }),
        (I.borderBottomStyle = {
          property: "borderBottomStyle",
          scale: "borderStyles",
        }),
        (I.borderBottomLeftRadius = {
          property: "borderBottomLeftRadius",
          scale: "radii",
        }),
        (I.borderBottomRightRadius = {
          property: "borderBottomRightRadius",
          scale: "radii",
        }),
        (I.borderLeftWidth = {
          property: "borderLeftWidth",
          scale: "borderWidths",
        }),
        (I.borderLeftColor = { property: "borderLeftColor", scale: "colors" }),
        (I.borderLeftStyle = {
          property: "borderLeftStyle",
          scale: "borderStyles",
        }),
        (I.borderRightWidth = {
          property: "borderRightWidth",
          scale: "borderWidths",
        }),
        (I.borderRightColor = {
          property: "borderRightColor",
          scale: "colors",
        }),
        (I.borderRightStyle = {
          property: "borderRightStyle",
          scale: "borderStyles",
        });
      var z = x(I),
        q = z,
        H = {
          background: !0,
          backgroundImage: !0,
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
        };
      (H.bgImage = H.backgroundImage),
        (H.bgSize = H.backgroundSize),
        (H.bgPosition = H.backgroundPosition),
        (H.bgRepeat = H.backgroundRepeat);
      var G = x(H),
        Y = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        D = x({
          position: !0,
          zIndex: { property: "zIndex", scale: "zIndices" },
          top: { property: "top", scale: "space", defaultScale: Y.space },
          right: { property: "right", scale: "space", defaultScale: Y.space },
          bottom: { property: "bottom", scale: "space", defaultScale: Y.space },
          left: { property: "left", scale: "space", defaultScale: Y.space },
        }),
        N = D,
        X = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        F = function (e) {
          return "number" === typeof e && !isNaN(e);
        },
        J = function (e, t) {
          if (!F(e)) return w(t, e, e);
          var r = e < 0,
            n = Math.abs(e),
            o = w(t, n, n);
          return F(o) ? o * (r ? -1 : 1) : r ? "-" + o : o;
        },
        V = {};
      (V.margin = {
        margin: {
          property: "margin",
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginTop: {
          property: "marginTop",
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginRight: {
          property: "marginRight",
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginBottom: {
          property: "marginBottom",
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginLeft: {
          property: "marginLeft",
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginX: {
          properties: ["marginLeft", "marginRight"],
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
        marginY: {
          properties: ["marginTop", "marginBottom"],
          scale: "space",
          transform: J,
          defaultScale: X.space,
        },
      }),
        (V.margin.m = V.margin.margin),
        (V.margin.mt = V.margin.marginTop),
        (V.margin.mr = V.margin.marginRight),
        (V.margin.mb = V.margin.marginBottom),
        (V.margin.ml = V.margin.marginLeft),
        (V.margin.mx = V.margin.marginX),
        (V.margin.my = V.margin.marginY),
        (V.padding = {
          padding: {
            property: "padding",
            scale: "space",
            defaultScale: X.space,
          },
          paddingTop: {
            property: "paddingTop",
            scale: "space",
            defaultScale: X.space,
          },
          paddingRight: {
            property: "paddingRight",
            scale: "space",
            defaultScale: X.space,
          },
          paddingBottom: {
            property: "paddingBottom",
            scale: "space",
            defaultScale: X.space,
          },
          paddingLeft: {
            property: "paddingLeft",
            scale: "space",
            defaultScale: X.space,
          },
          paddingX: {
            properties: ["paddingLeft", "paddingRight"],
            scale: "space",
            defaultScale: X.space,
          },
          paddingY: {
            properties: ["paddingTop", "paddingBottom"],
            scale: "space",
            defaultScale: X.space,
          },
        }),
        (V.padding.p = V.padding.padding),
        (V.padding.pt = V.padding.paddingTop),
        (V.padding.pr = V.padding.paddingRight),
        (V.padding.pb = V.padding.paddingBottom),
        (V.padding.pl = V.padding.paddingLeft),
        (V.padding.px = V.padding.paddingX),
        (V.padding.py = V.padding.paddingY);
      var K = (function () {
        for (
          var e = {}, t = arguments.length, r = new Array(t), n = 0;
          n < t;
          n++
        )
          r[n] = arguments[n];
        r.forEach(function (t) {
          t && t.config && m()(e, t.config);
        });
        var o = S(e);
        return o;
      })(x(V.margin), x(V.padding));
      x({
        boxShadow: { property: "boxShadow", scale: "shadows" },
        textShadow: { property: "textShadow", scale: "shadows" },
      });
      function Z() {
        return (Z =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var U = function (e, t, r, n, o) {
          for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++)
            e = e ? e[t[n]] : o;
          return e === o ? r : e;
        },
        $ = [40, 52, 64].map(function (e) {
          return e + "em";
        }),
        Q = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        ee = {
          bg: "backgroundColor",
          m: "margin",
          mt: "marginTop",
          mr: "marginRight",
          mb: "marginBottom",
          ml: "marginLeft",
          mx: "marginX",
          my: "marginY",
          p: "padding",
          pt: "paddingTop",
          pr: "paddingRight",
          pb: "paddingBottom",
          pl: "paddingLeft",
          px: "paddingX",
          py: "paddingY",
        },
        te = {
          marginX: ["marginLeft", "marginRight"],
          marginY: ["marginTop", "marginBottom"],
          paddingX: ["paddingLeft", "paddingRight"],
          paddingY: ["paddingTop", "paddingBottom"],
          size: ["width", "height"],
        },
        re = {
          color: "colors",
          backgroundColor: "colors",
          borderColor: "colors",
          margin: "space",
          marginTop: "space",
          marginRight: "space",
          marginBottom: "space",
          marginLeft: "space",
          marginX: "space",
          marginY: "space",
          padding: "space",
          paddingTop: "space",
          paddingRight: "space",
          paddingBottom: "space",
          paddingLeft: "space",
          paddingX: "space",
          paddingY: "space",
          top: "space",
          right: "space",
          bottom: "space",
          left: "space",
          gridGap: "space",
          gridColumnGap: "space",
          gridRowGap: "space",
          gap: "space",
          columnGap: "space",
          rowGap: "space",
          fontFamily: "fonts",
          fontSize: "fontSizes",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          border: "borders",
          borderTop: "borders",
          borderRight: "borders",
          borderBottom: "borders",
          borderLeft: "borders",
          borderWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderRadius: "radii",
          borderTopRightRadius: "radii",
          borderTopLeftRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          borderTopWidth: "borderWidths",
          borderTopColor: "colors",
          borderTopStyle: "borderStyles",
          borderBottomWidth: "borderWidths",
          borderBottomColor: "colors",
          borderBottomStyle: "borderStyles",
          borderLeftWidth: "borderWidths",
          borderLeftColor: "colors",
          borderLeftStyle: "borderStyles",
          borderRightWidth: "borderWidths",
          borderRightColor: "colors",
          borderRightStyle: "borderStyles",
          outlineColor: "colors",
          boxShadow: "shadows",
          textShadow: "shadows",
          zIndex: "zIndices",
          width: "sizes",
          minWidth: "sizes",
          maxWidth: "sizes",
          height: "sizes",
          minHeight: "sizes",
          maxHeight: "sizes",
          flexBasis: "sizes",
          size: "sizes",
          fill: "colors",
          stroke: "colors",
        },
        ne = function (e, t) {
          if ("number" !== typeof t || t >= 0) return U(e, t, t);
          var r = Math.abs(t),
            n = U(e, r, r);
          return "string" === typeof n ? "-" + n : -1 * n;
        },
        oe = [
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "top",
          "bottom",
          "left",
          "right",
        ].reduce(function (e, t) {
          var r;
          return Z({}, e, (((r = {})[t] = ne), r));
        }, {}),
        ae = function e(t) {
          return function (r) {
            void 0 === r && (r = {});
            var n = Z({}, Q, {}, r.theme || r),
              o = {},
              a = (function (e) {
                return function (t) {
                  var r = {},
                    n = U(t, "breakpoints", $),
                    o = [null].concat(
                      n.map(function (e) {
                        return "@media screen and (min-width: " + e + ")";
                      })
                    );
                  for (var a in e) {
                    var i = "function" === typeof e[a] ? e[a](t) : e[a];
                    if (null != i)
                      if (Array.isArray(i))
                        for (var s = 0; s < i.slice(0, o.length).length; s++) {
                          var c = o[s];
                          c
                            ? ((r[c] = r[c] || {}),
                              null != i[s] && (r[c][a] = i[s]))
                            : (r[a] = i[s]);
                        }
                      else r[a] = i;
                  }
                  return r;
                };
              })("function" === typeof t ? t(n) : t)(n);
            for (var i in a) {
              var s = a[i],
                c = "function" === typeof s ? s(n) : s;
              if ("variant" !== i)
                if (c && "object" === typeof c) o[i] = e(c)(n);
                else {
                  var l = U(ee, i, i),
                    u = U(re, l),
                    d = U(n, u, U(n, l, {})),
                    p = U(oe, l, U)(d, c, c);
                  if (te[l])
                    for (var f = te[l], g = 0; g < f.length; g++) o[f[g]] = p;
                  else o[l] = p;
                }
              else o = Z({}, o, {}, e(U(n, c))(n));
            }
            return o;
          };
        },
        ie = function (e) {
          var t,
            r,
            n = e.scale,
            o = e.prop,
            a = void 0 === o ? "variant" : o,
            i = e.variants,
            s = void 0 === i ? {} : i,
            c = e.key;
          ((r = Object.keys(s).length
            ? function (e, t, r) {
                return ae(w(t, e, null))(r.theme);
              }
            : function (e, t) {
                return w(t, e, null);
              }).scale = n || c),
            (r.defaults = s);
          var l = (((t = {})[a] = r), t);
          return S(l);
        };
      ie({ key: "buttons" }),
        ie({ key: "textStyles", prop: "textStyle" }),
        ie({ key: "colorStyles", prop: "colors" }),
        j.width,
        j.height,
        j.minWidth,
        j.minHeight,
        j.maxWidth,
        j.maxHeight,
        j.size,
        j.verticalAlign,
        j.display,
        j.overflow,
        j.overflowX,
        j.overflowY,
        M.opacity,
        A.fontSize,
        A.fontFamily,
        A.fontWeight,
        A.lineHeight,
        A.textAlign,
        A.fontStyle,
        A.letterSpacing,
        B.alignItems,
        B.alignContent,
        B.justifyItems,
        B.justifyContent,
        B.flexWrap,
        B.flexDirection,
        B.flex,
        B.flexGrow,
        B.flexShrink,
        B.flexBasis,
        B.justifySelf,
        B.alignSelf,
        B.order,
        E.gridGap,
        E.gridColumnGap,
        E.gridRowGap,
        E.gridColumn,
        E.gridRow,
        E.gridAutoFlow,
        E.gridAutoColumns,
        E.gridAutoRows,
        E.gridTemplateColumns,
        E.gridTemplateRows,
        E.gridTemplateAreas,
        E.gridArea,
        q.borderWidth,
        q.borderStyle,
        q.borderColor,
        q.borderTop,
        q.borderRight,
        q.borderBottom,
        q.borderLeft,
        q.borderRadius,
        G.backgroundImage,
        G.backgroundSize,
        G.backgroundPosition,
        G.backgroundRepeat,
        N.zIndex,
        N.top,
        N.right,
        N.bottom,
        N.left;
      function se() {
        var e = f([
          "\n  ",
          ";\n  ",
          ";\n  ",
          ";\n  ",
          ";\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      var ce = Object(s.d)("div")(se(), K, O, T, z, D, W, _);
      function le(e) {
        if (Array.isArray(e)) return e;
      }
      function ue(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      function de(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function pe(e, t) {
        if (e) {
          if ("string" === typeof e) return de(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? de(e, t)
              : void 0
          );
        }
      }
      function fe() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function ge(e, t) {
        return (
          le(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                n = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, s = e[Symbol.iterator]();
                  !(n = (i = s.next()).done) &&
                  (r.push(i.value), !t || r.length !== t);
                  n = !0
                );
              } catch (c) {
                (o = !0), (a = c);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw a;
                }
              }
              return r;
            }
          })(e, t) ||
          pe(e, t) ||
          fe()
        );
      }
      function me(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return de(e);
          })(e) ||
          ue(e) ||
          pe(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function be(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function he(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                be(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ve = function (e) {
          return e[
            (function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return Math.floor(Math.random() * (e - t) + t);
            })(e.length)
          ];
        },
        we = function e(t) {
          var r = this,
            n = t.values,
            o = t.history,
            a = void 0 === o ? [] : o,
            i = t.continuing,
            s = void 0 !== i && i;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            be(this, "getRow", function (e) {
              return me(r.values[e]);
            }),
            be(this, "getEmptyCells", function () {
              return r.getRows().reduce(function (e, t, r) {
                return (
                  t.reduce(function (e, t, n) {
                    return null == t && e.push([r, n]), e;
                  }, e),
                  e
                );
              }, []);
            }),
            be(this, "randCellValue", function () {
              return Math.random() < 0.75 ? 1 : 2;
            }),
            be(this, "randomFill", function (e) {
              var t = r.getEmptyCells();
              switch (e) {
                case "left":
                  t = t.filter(function (e) {
                    var t = ge(e, 2);
                    t[0];
                    return 3 === t[1];
                  });
                  break;
                case "up":
                  t = t.filter(function (e) {
                    var t = ge(e, 2),
                      r = t[0];
                    t[1];
                    return 3 === r;
                  });
                  break;
                case "right":
                  t = t.filter(function (e) {
                    var t = ge(e, 2);
                    t[0];
                    return 0 === t[1];
                  });
                  break;
                case "down":
                  t = t.filter(function (e) {
                    var t = ge(e, 2),
                      r = t[0];
                    t[1];
                    return 0 === r;
                  });
              }
              var n = ge(ve(t), 2),
                o = n[0],
                a = n[1];
              r.values[o][a] = r.randCellValue();
            }),
            be(this, "checkLoss", function () {
              (r.loss = !(
                r.canMove("left") ||
                r.canMove("up") ||
                r.canMove("right") ||
                r.canMove("down")
              )),
                (r.win = r.getRows().some(function (e) {
                  return e.some(function (e) {
                    return e && e >= 2048;
                  });
                }));
            }),
            be(this, "getColumn", function (e) {
              return [
                r.values[0][e],
                r.values[1][e],
                r.values[2][e],
                r.values[3][e],
              ];
            }),
            be(this, "emptyValues", function () {
              return [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
              ];
            }),
            be(this, "setRows", function (e) {
              r.values = e;
            }),
            be(this, "setColumns", function (e) {
              (r.values = r.emptyValues()),
                e.forEach(function (e, t) {
                  e.forEach(function (e, n) {
                    r.values[n][t] = e;
                  });
                });
            }),
            be(this, "moveLine", function (e) {
              var t = 0,
                r = !1;
              return e
                .reduce(
                  function (e, n) {
                    return (
                      null != n &&
                        (t > 0 && e[t - 1] === n && !r
                          ? ((e[t - 1] = 2 * n), (r = !0))
                          : ((e[t++] = n), (r = !1))),
                      e
                    );
                  },
                  [null, null, null, null]
                )
                .slice(0, 4);
            }),
            be(this, "getRows", function () {
              return r.values;
            }),
            be(this, "getColumns", function () {
              return [0, 1, 2, 3].map(r.getColumn);
            }),
            be(this, "canMoveLine", function (e) {
              var t = !1,
                r = !1,
                n = null;
              return (
                e.forEach(function (e) {
                  null != e ? ((e === n || r) && (t = !0), (n = e)) : (r = !0);
                }),
                t
              );
            }),
            be(this, "canMove", function (e) {
              switch (e) {
                case "left":
                  return r.getRows().map(r.canMoveLine).some(Boolean);
                case "right":
                  return r
                    .getRows()
                    .map(function (e) {
                      return r.canMoveLine(me(e).reverse());
                    })
                    .some(Boolean);
                case "up":
                  return r.getColumns().map(r.canMoveLine).some(Boolean);
                case "down":
                  return r
                    .getColumns()
                    .map(function (e) {
                      return r.canMoveLine(me(e).reverse());
                    })
                    .some(Boolean);
                default:
                  throw new Error("unknown direction: '".concat(e, "'"));
              }
            }),
            be(this, "move", function (e) {
              var t = r.canMove(e);
              if (!r.loss && t) {
                switch (((r.history = [r.values].concat(me(r.history))), e)) {
                  case "left":
                    r.setRows(r.getRows().map(r.moveLine));
                    break;
                  case "right":
                    r.setRows(
                      r.getRows().map(function (e) {
                        return r.moveLine(me(e).reverse()).reverse();
                      })
                    );
                    break;
                  case "up":
                    r.setColumns(r.getColumns().map(r.moveLine));
                    break;
                  case "down":
                    r.setColumns(
                      r.getColumns().map(function (e) {
                        return r.moveLine(me(e).reverse()).reverse();
                      })
                    );
                    break;
                  default:
                    throw new Error("unknown direction: '".concat(e, "'"));
                }
                r.randomFill(e), r.checkLoss();
              }
            }),
            be(this, "getState", function () {
              return {
                values: r.values,
                loss: r.loss,
                win: r.win,
                continuing: r.continuing,
                history: r.history,
              };
            }),
            be(this, "cancel", function (e) {
              if (e > r.history.length)
                throw new Error(
                  "Cannot cancel "
                    .concat(e, " moves, only ")
                    .concat(r.history.length, " in history")
                );
              if (!(e < 1)) {
                var t,
                  n = r.history.slice(e - 1),
                  o = le((t = n)) || ue(t) || pe(t) || fe(),
                  a = o[0],
                  i = o.slice(1);
                (r.values = a), (r.history = i), r.checkLoss();
              }
            }),
            (this.history = a),
            (this.loss = !1),
            (this.win = !1),
            (this.continuing = s),
            n
              ? ((this.values = n), this.checkLoss())
              : ((this.values = this.emptyValues()), this.randomFill());
        };
      function Se(e, t) {
        switch (t.type) {
          case "left":
          case "up":
          case "right":
          case "down":
            var r = e.values,
              n = e.history,
              o = e.continuing,
              a = new we({ values: r, history: n, continuing: o });
            return a.move(t.type), a.getState();
          case "cancel":
            var i, s;
            if (!(null === (i = e.history) || void 0 === i ? void 0 : i.length))
              return e;
            var c = e.values,
              l = e.history,
              u = e.continuing,
              d = new we({ values: c, history: l, continuing: u });
            return (
              d.cancel(null !== (s = t.quantity) && void 0 !== s ? s : 1),
              d.getState()
            );
          case "reset":
            return Re();
          case "continue":
            return ye(ye({}, e), {}, { continuing: !0 });
        }
      }
      var ke = function (e) {
          return function (t) {
            switch (t.keyCode) {
              case 37:
                e({ type: "left" });
                break;
              case 38:
                e({ type: "up" });
                break;
              case 39:
                e({ type: "right" });
                break;
              case 40:
                e({ type: "down" });
            }
          };
        },
        Re = function (e) {
          return new we({ values: e }).getState();
        };
      function Ce(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function xe() {
        return (xe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Oe = i.a.createElement;
      function je() {
        var e = f([
          "\n  display: grid;\n  grid-template-columns: repeat(4, 50px);\n  grid-template-rows: repeat(4, 50px);\n  justify-items: center;\n  align-items: center;\n",
        ]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      var Le = Object(s.d)(ce)(je()),
        Te = function (e) {
          return Oe(
            ce,
            xe(
              {
                border: "1px solid #000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              },
              e
            )
          );
        },
        Me = function (e) {
          var t = e.gameState,
            r = Ce(e, ["gameState"]);
          return Oe(
            Le,
            r,
            t.map(function (e, t) {
              return e.map(function (e, r) {
                return Oe(Te, { key: "".concat(t, "_").concat(r) }, e || "");
              });
            })
          );
        };
      Me.displayName = "Grid2048";
      var Ae = i.a.createElement,
        We = function () {
          var e = (function () {
              var e,
                t = (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).initialValues,
                r = Object(a.useReducer)(Se, Re(t)),
                n = r[0],
                o = r[1];
              Object(a.useEffect)(
                function () {
                  var e = ke(o);
                  return (
                    window.addEventListener("keydown", e),
                    function () {
                      return window.removeEventListener("keydown", e);
                    }
                  );
                },
                [o]
              );
              var i = Object(a.useCallback)(
                  function () {
                    o({
                      type: "cancel",
                      quantity:
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                    });
                  },
                  [o]
                ),
                s = Object(a.useCallback)(
                  function () {
                    o({ type: "reset" });
                  },
                  [o]
                ),
                c = Object(a.useCallback)(
                  function () {
                    o({ type: "continue" });
                  },
                  [o]
                );
              return {
                gameState: n.values,
                loss: n.loss,
                win: n.win,
                continuing: n.continuing,
                cancelLastAction: i,
                canCancel: !!(null === (e = n.history) || void 0 === e
                  ? void 0
                  : e.length),
                continueGame: c,
                resetGame: s,
              };
            })(),
            t = e.gameState,
            r = e.cancelLastAction,
            n = e.canCancel,
            o = e.loss,
            i = e.win,
            s = e.continuing,
            c = e.continueGame,
            l = e.resetGame;
          return Ae(
            "div",
            null,
            t && Ae(Me, { gameState: t }),
            n &&
              Ae(
                "button",
                {
                  onClick: function () {
                    return r();
                  },
                },
                "Cancel"
              ),
            o
              ? Ae(
                  "div",
                  null,
                  Ae("h1", null, "You lost"),
                  Ae(
                    "button",
                    {
                      onClick: function () {
                        return l();
                      },
                    },
                    "try again!"
                  )
                )
              : Ae(
                  "button",
                  {
                    onClick: function () {
                      return l();
                    },
                  },
                  "restart"
                ),
            i &&
              !s &&
              Ae(
                "div",
                null,
                Ae("h1", null, "You won"),
                Ae(
                  "button",
                  {
                    onClick: function () {
                      return c();
                    },
                  },
                  "continue!"
                )
              )
          );
        };
      We.displayName = "Game2048";
      var Be = i.a.createElement;
      function Pe() {
        return Be(
          "div",
          { className: "container" },
          Be(
            p.a,
            null,
            Be("title", null, "2048"),
            Be("link", { rel: "icon", href: "/favicon.ico" })
          ),
          Be(u, null),
          Be(
            "main",
            null,
            Be(
              ce,
              {
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              Be(We, null)
            )
          )
        );
      }
    },
    SksO: function (e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(t, n)
        );
      }
      e.exports = r;
    },
    W8MJ: function (e, t) {
      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      e.exports = function (e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    },
    WkPL: function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      };
    },
    Xuae: function (e, t, r) {
      "use strict";
      var n = r("RIqP"),
        o = r("lwsE"),
        a = r("W8MJ"),
        i = (r("PJYZ"), r("7W2i")),
        s = r("a1gu"),
        c = r("Nsbk");
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = c(e);
          if (t) {
            var o = c(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return s(this, r);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = r("q1tI"),
        d = (function (e) {
          i(r, e);
          var t = l(r);
          function r(e) {
            var a;
            return (
              o(this, r),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      n(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(u.Component);
      t.default = d;
    },
    ZhPi: function (e, t, r) {
      var n = r("WkPL");
      e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      };
    },
    a1gu: function (e, t, r) {
      var n = r("cDf5"),
        o = r("PJYZ");
      e.exports = function (e, t) {
        return !t || ("object" !== n(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    cDf5: function (e, t) {
      function r(t) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (e.exports = r = function (e) {
                return typeof e;
              })
            : (e.exports = r = function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      };
    },
    lwAK: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((n = r("q1tI")) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    lwsE: function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    vlRD: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 1, 2]],
]);
