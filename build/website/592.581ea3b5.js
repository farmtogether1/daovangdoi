/*! For license information please see 592.581ea3b5.js.LICENSE.txt */
(self.webpackChunkmetahero = self.webpackChunkmetahero || []).push([
  [592],
  {
    2711: function (e, t, n) {
      e.exports = (function () {
        "use strict";
        var e =
            "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
              ? self
              : {},
          t = "Expected a function",
          r = NaN,
          o = "[object Symbol]",
          i = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          s = parseInt,
          l = "object" == typeof e && e && e.Object === Object && e,
          f = "object" == typeof self && self && self.Object === Object && self,
          d = l || f || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          m = Math.min,
          v = function () {
            return d.Date.now();
          };
        function g(e, n, r) {
          var o,
            i,
            a,
            c,
            u,
            s,
            l = 0,
            f = !1,
            d = !1,
            p = !0;
          if ("function" != typeof e) throw new TypeError(t);
          function g(t) {
            var n = o,
              r = i;
            return (o = i = void 0), (l = t), (c = e.apply(r, n));
          }
          function w(e) {
            var t = e - s;
            return void 0 === s || t >= n || t < 0 || (d && e - l >= a);
          }
          function k() {
            var e = v();
            if (w(e)) return E(e);
            u = setTimeout(
              k,
              (function (e) {
                var t = n - (e - s);
                return d ? m(t, a - (e - l)) : t;
              })(e)
            );
          }
          function E(e) {
            return (u = void 0), p && o ? g(e) : ((o = i = void 0), c);
          }
          function x() {
            var e = v(),
              t = w(e);
            if (((o = arguments), (i = this), (s = e), t)) {
              if (void 0 === u)
                return (function (e) {
                  return (l = e), (u = setTimeout(k, n)), f ? g(e) : c;
                })(s);
              if (d) return (u = setTimeout(k, n)), g(s);
            }
            return void 0 === u && (u = setTimeout(k, n)), c;
          }
          return (
            (n = y(n) || 0),
            b(r) &&
              ((f = !!r.leading),
              (a = (d = "maxWait" in r) ? h(y(r.maxWait) || 0, n) : a),
              (p = "trailing" in r ? !!r.trailing : p)),
            (x.cancel = function () {
              void 0 !== u && clearTimeout(u),
                (l = 0),
                (o = s = i = u = void 0);
            }),
            (x.flush = function () {
              return void 0 === u ? c : E(v());
            }),
            x
          );
        }
        function b(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function y(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  p.call(e) == o)
              );
            })(e)
          )
            return r;
          if (b(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = b(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var n = c.test(e);
          return n || u.test(e) ? s(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
        }
        var w = function (e, n, r) {
            var o = !0,
              i = !0;
            if ("function" != typeof e) throw new TypeError(t);
            return (
              b(r) &&
                ((o = "leading" in r ? !!r.leading : o),
                (i = "trailing" in r ? !!r.trailing : i)),
              g(e, n, { leading: o, maxWait: n, trailing: i })
            );
          },
          k = "Expected a function",
          E = NaN,
          x = "[object Symbol]",
          O = /^\s+|\s+$/g,
          N = /^[-+]0x[0-9a-f]+$/i,
          A = /^0b[01]+$/i,
          S = /^0o[0-7]+$/i,
          C = parseInt,
          T = "object" == typeof e && e && e.Object === Object && e,
          j = "object" == typeof self && self && self.Object === Object && self,
          L = T || j || Function("return this")(),
          _ = Object.prototype.toString,
          M = Math.max,
          R = Math.min,
          D = function () {
            return L.Date.now();
          };
        function P(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function I(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  _.call(e) == x)
              );
            })(e)
          )
            return E;
          if (P(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = P(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(O, "");
          var n = A.test(e);
          return n || S.test(e) ? C(e.slice(2), n ? 2 : 8) : N.test(e) ? E : +e;
        }
        var q = function (e, t, n) {
            var r,
              o,
              i,
              a,
              c,
              u,
              s = 0,
              l = !1,
              f = !1,
              d = !0;
            if ("function" != typeof e) throw new TypeError(k);
            function p(t) {
              var n = r,
                i = o;
              return (r = o = void 0), (s = t), (a = e.apply(i, n));
            }
            function h(e) {
              var n = e - u;
              return void 0 === u || n >= t || n < 0 || (f && e - s >= i);
            }
            function m() {
              var e = D();
              if (h(e)) return v(e);
              c = setTimeout(
                m,
                (function (e) {
                  var n = t - (e - u);
                  return f ? R(n, i - (e - s)) : n;
                })(e)
              );
            }
            function v(e) {
              return (c = void 0), d && r ? p(e) : ((r = o = void 0), a);
            }
            function g() {
              var e = D(),
                n = h(e);
              if (((r = arguments), (o = this), (u = e), n)) {
                if (void 0 === c)
                  return (function (e) {
                    return (s = e), (c = setTimeout(m, t)), l ? p(e) : a;
                  })(u);
                if (f) return (c = setTimeout(m, t)), p(u);
              }
              return void 0 === c && (c = setTimeout(m, t)), a;
            }
            return (
              (t = I(t) || 0),
              P(n) &&
                ((l = !!n.leading),
                (i = (f = "maxWait" in n) ? M(I(n.maxWait) || 0, t) : i),
                (d = "trailing" in n ? !!n.trailing : d)),
              (g.cancel = function () {
                void 0 !== c && clearTimeout(c),
                  (s = 0),
                  (r = u = o = c = void 0);
              }),
              (g.flush = function () {
                return void 0 === c ? a : v(D());
              }),
              g
            );
          },
          z = function () {};
        function B(e) {
          e &&
            e.forEach(function (e) {
              var t = Array.prototype.slice.call(e.addedNodes),
                n = Array.prototype.slice.call(e.removedNodes);
              if (
                (function e(t) {
                  var n = void 0,
                    r = void 0;
                  for (n = 0; n < t.length; n += 1) {
                    if ((r = t[n]).dataset && r.dataset.aos) return !0;
                    if (r.children && e(r.children)) return !0;
                  }
                  return !1;
                })(t.concat(n))
              )
                return z();
            });
        }
        function U() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        var F = {
            isSupported: function () {
              return !!U();
            },
            ready: function (e, t) {
              var n = window.document,
                r = new (U())(B);
              (z = t),
                r.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          },
          H = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          $ = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          G =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          W =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          Y =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          V =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          J =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function X() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        var Z = new ((function () {
            function e() {
              H(this, e);
            }
            return (
              $(e, [
                {
                  key: "phone",
                  value: function () {
                    var e = X();
                    return !(!W.test(e) && !Y.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = X();
                    return !(!V.test(e) && !J.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
                {
                  key: "ie11",
                  value: function () {
                    return (
                      "-ms-scroll-limit" in document.documentElement.style &&
                      "-ms-ime-align" in document.documentElement.style
                    );
                  },
                },
              ]),
              e
            );
          })())(),
          K = function (e, t) {
            var n = void 0;
            return (
              Z.ie11()
                ? (n = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    !0,
                    !0,
                    { detail: t }
                  )
                : (n = new CustomEvent(e, { detail: t })),
              document.dispatchEvent(n)
            );
          },
          Q = function (e) {
            return e.forEach(function (e, t) {
              return (function (e, t) {
                var n = e.options,
                  r = e.position,
                  o = e.node,
                  i =
                    (e.data,
                    function () {
                      e.animated &&
                        ((function (e, t) {
                          t &&
                            t.forEach(function (t) {
                              return e.classList.remove(t);
                            });
                        })(o, n.animatedClassNames),
                        K("aos:out", o),
                        e.options.id && K("aos:in:" + e.options.id, o),
                        (e.animated = !1));
                    });
                n.mirror && t >= r.out && !n.once
                  ? i()
                  : t >= r.in
                  ? e.animated ||
                    ((function (e, t) {
                      t &&
                        t.forEach(function (t) {
                          return e.classList.add(t);
                        });
                    })(o, n.animatedClassNames),
                    K("aos:in", o),
                    e.options.id && K("aos:in:" + e.options.id, o),
                    (e.animated = !0))
                  : e.animated && !n.once && i();
              })(e, window.pageYOffset);
            });
          },
          ee = function (e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          },
          te = function (e, t, n) {
            var r = e.getAttribute("data-aos-" + t);
            if (void 0 !== r) {
              if ("true" === r) return !0;
              if ("false" === r) return !1;
            }
            return r || n;
          },
          ne = function (e, t) {
            return (
              e.forEach(function (e, n) {
                var r = te(e.node, "mirror", t.mirror),
                  o = te(e.node, "once", t.once),
                  i = te(e.node, "id"),
                  a = t.useClassNames && e.node.getAttribute("data-aos"),
                  c = [t.animatedClassName]
                    .concat(a ? a.split(" ") : [])
                    .filter(function (e) {
                      return "string" == typeof e;
                    });
                t.initClassName && e.node.classList.add(t.initClassName),
                  (e.position = {
                    in: (function (e, t, n) {
                      var r = window.innerHeight,
                        o = te(e, "anchor"),
                        i = te(e, "anchor-placement"),
                        a = Number(te(e, "offset", i ? 0 : t)),
                        c = i || n,
                        u = e;
                      o &&
                        document.querySelectorAll(o) &&
                        (u = document.querySelectorAll(o)[0]);
                      var s = ee(u).top - r;
                      switch (c) {
                        case "top-bottom":
                          break;
                        case "center-bottom":
                          s += u.offsetHeight / 2;
                          break;
                        case "bottom-bottom":
                          s += u.offsetHeight;
                          break;
                        case "top-center":
                          s += r / 2;
                          break;
                        case "center-center":
                          s += r / 2 + u.offsetHeight / 2;
                          break;
                        case "bottom-center":
                          s += r / 2 + u.offsetHeight;
                          break;
                        case "top-top":
                          s += r;
                          break;
                        case "bottom-top":
                          s += r + u.offsetHeight;
                          break;
                        case "center-top":
                          s += r + u.offsetHeight / 2;
                      }
                      return s + a;
                    })(e.node, t.offset, t.anchorPlacement),
                    out:
                      r &&
                      (function (e, t) {
                        window.innerHeight;
                        var n = te(e, "anchor"),
                          r = te(e, "offset", t),
                          o = e;
                        return (
                          n &&
                            document.querySelectorAll(n) &&
                            (o = document.querySelectorAll(n)[0]),
                          ee(o).top + o.offsetHeight - r
                        );
                      })(e.node, t.offset),
                  }),
                  (e.options = {
                    once: o,
                    mirror: r,
                    animatedClassNames: c,
                    id: i,
                  });
              }),
              e
            );
          },
          re = function () {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function (e) {
              return { node: e };
            });
          },
          oe = [],
          ie = !1,
          ae = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
          },
          ce = function () {
            return document.all && !window.atob;
          },
          ue = function () {
            arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (ie = !0),
              ie &&
                ((oe = ne(oe, ae)),
                Q(oe),
                window.addEventListener(
                  "scroll",
                  w(function () {
                    Q(oe, ae.once);
                  }, ae.throttleDelay)
                ));
          },
          se = function () {
            if (((oe = re()), fe(ae.disable) || ce())) return le();
            ue();
          },
          le = function () {
            oe.forEach(function (e, t) {
              e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay"),
                ae.initClassName && e.node.classList.remove(ae.initClassName),
                ae.animatedClassName &&
                  e.node.classList.remove(ae.animatedClassName);
            });
          },
          fe = function (e) {
            return (
              !0 === e ||
              ("mobile" === e && Z.mobile()) ||
              ("phone" === e && Z.phone()) ||
              ("tablet" === e && Z.tablet()) ||
              ("function" == typeof e && !0 === e())
            );
          };
        return {
          init: function (e) {
            return (
              (ae = G(ae, e)),
              (oe = re()),
              ae.disableMutationObserver ||
                F.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (ae.disableMutationObserver = !0)),
              ae.disableMutationObserver || F.ready("[data-aos]", se),
              fe(ae.disable) || ce()
                ? le()
                : (document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", ae.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", ae.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", ae.delay),
                  -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent)
                    ? document.addEventListener(ae.startEvent, function () {
                        ue(!0);
                      })
                    : window.addEventListener("load", function () {
                        ue(!0);
                      }),
                  "DOMContentLoaded" === ae.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1 &&
                    ue(!0),
                  window.addEventListener(
                    "resize",
                    q(ue, ae.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    q(ue, ae.debounceDelay, !0)
                  ),
                  oe)
            );
          },
          refresh: ue,
          refreshHard: se,
        };
      })();
    },
    4431: function (e, t, n) {
      var r;
      !(function (o) {
        "use strict";
        var i,
          a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          c = Math.ceil,
          u = Math.floor,
          s = "[BigNumber Error] ",
          l = s + "Number primitive has more than 15 significant digits: ",
          f = 1e14,
          d = 14,
          p = 9007199254740991,
          h = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          m = 1e7,
          v = 1e9;
        function g(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function b(e) {
          for (var t, n, r = 1, o = e.length, i = e[0] + ""; r < o; ) {
            for (t = e[r++] + "", n = d - t.length; n--; t = "0" + t);
            i += t;
          }
          for (o = i.length; 48 === i.charCodeAt(--o); );
          return i.slice(0, o + 1 || 1);
        }
        function y(e, t) {
          var n,
            r,
            o = e.c,
            i = t.c,
            a = e.s,
            c = t.s,
            u = e.e,
            s = t.e;
          if (!a || !c) return null;
          if (((n = o && !o[0]), (r = i && !i[0]), n || r))
            return n ? (r ? 0 : -c) : a;
          if (a != c) return a;
          if (((n = a < 0), (r = u == s), !o || !i))
            return r ? 0 : !o ^ n ? 1 : -1;
          if (!r) return (u > s) ^ n ? 1 : -1;
          for (c = (u = o.length) < (s = i.length) ? u : s, a = 0; a < c; a++)
            if (o[a] != i[a]) return (o[a] > i[a]) ^ n ? 1 : -1;
          return u == s ? 0 : (u > s) ^ n ? 1 : -1;
        }
        function w(e, t, n, r) {
          if (e < t || e > n || e !== u(e))
            throw Error(
              s +
                (r || "Argument") +
                ("number" == typeof e
                  ? e < t || e > n
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e)
            );
        }
        function k(e) {
          var t = e.c.length - 1;
          return g(e.e / d) == t && e.c[t] % 2 != 0;
        }
        function E(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function x(e, t, n) {
          var r, o;
          if (t < 0) {
            for (o = n + "."; ++t; o += n);
            e = o + e;
          } else if (++t > (r = e.length)) {
            for (o = n, t -= r; --t; o += n);
            e += o;
          } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        (i = (function e(t) {
          var n,
            r,
            o,
            i,
            O,
            N,
            A,
            S,
            C,
            T,
            j = (H.prototype = {
              constructor: H,
              toString: null,
              valueOf: null,
            }),
            L = new H(1),
            _ = 20,
            M = 4,
            R = -7,
            D = 21,
            P = -1e7,
            I = 1e7,
            q = !1,
            z = 1,
            B = 0,
            U = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: "",
            },
            F = "0123456789abcdefghijklmnopqrstuvwxyz";
          function H(e, t) {
            var n,
              i,
              c,
              s,
              f,
              h,
              m,
              v,
              g = this;
            if (!(g instanceof H)) return new H(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (g.s = e.s),
                  void (!e.c || e.e > I
                    ? (g.c = g.e = null)
                    : e.e < P
                    ? (g.c = [(g.e = 0)])
                    : ((g.e = e.e), (g.c = e.c.slice())))
                );
              if ((h = "number" == typeof e) && 0 * e == 0) {
                if (((g.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (s = 0, f = e; f >= 10; f /= 10, s++);
                  return void (s > I
                    ? (g.c = g.e = null)
                    : ((g.e = s), (g.c = [e])));
                }
                v = String(e);
              } else {
                if (!a.test((v = String(e)))) return o(g, v, h);
                g.s = 45 == v.charCodeAt(0) ? ((v = v.slice(1)), -1) : 1;
              }
              (s = v.indexOf(".")) > -1 && (v = v.replace(".", "")),
                (f = v.search(/e/i)) > 0
                  ? (s < 0 && (s = f),
                    (s += +v.slice(f + 1)),
                    (v = v.substring(0, f)))
                  : s < 0 && (s = v.length);
            } else {
              if ((w(t, 2, F.length, "Base"), 10 == t))
                return Y((g = new H(e)), _ + g.e + 1, M);
              if (((v = String(e)), (h = "number" == typeof e))) {
                if (0 * e != 0) return o(g, v, h, t);
                if (
                  ((g.s = 1 / e < 0 ? ((v = v.slice(1)), -1) : 1),
                  H.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(l + e);
              } else g.s = 45 === v.charCodeAt(0) ? ((v = v.slice(1)), -1) : 1;
              for (n = F.slice(0, t), s = f = 0, m = v.length; f < m; f++)
                if (n.indexOf((i = v.charAt(f))) < 0) {
                  if ("." == i) {
                    if (f > s) {
                      s = m;
                      continue;
                    }
                  } else if (
                    !c &&
                    ((v == v.toUpperCase() && (v = v.toLowerCase())) ||
                      (v == v.toLowerCase() && (v = v.toUpperCase())))
                  ) {
                    (c = !0), (f = -1), (s = 0);
                    continue;
                  }
                  return o(g, String(e), h, t);
                }
              (h = !1),
                (s = (v = r(v, t, 10, g.s)).indexOf(".")) > -1
                  ? (v = v.replace(".", ""))
                  : (s = v.length);
            }
            for (f = 0; 48 === v.charCodeAt(f); f++);
            for (m = v.length; 48 === v.charCodeAt(--m); );
            if ((v = v.slice(f, ++m))) {
              if (((m -= f), h && H.DEBUG && m > 15 && (e > p || e !== u(e))))
                throw Error(l + g.s * e);
              if ((s = s - f - 1) > I) g.c = g.e = null;
              else if (s < P) g.c = [(g.e = 0)];
              else {
                if (
                  ((g.e = s),
                  (g.c = []),
                  (f = (s + 1) % d),
                  s < 0 && (f += d),
                  f < m)
                ) {
                  for (f && g.c.push(+v.slice(0, f)), m -= d; f < m; )
                    g.c.push(+v.slice(f, (f += d)));
                  f = d - (v = v.slice(f)).length;
                } else f -= m;
                for (; f--; v += "0");
                g.c.push(+v);
              }
            } else g.c = [(g.e = 0)];
          }
          function $(e, t, n, r) {
            var o, i, a, c, u;
            if ((null == n ? (n = M) : w(n, 0, 8), !e.c)) return e.toString();
            if (((o = e.c[0]), (a = e.e), null == t))
              (u = b(e.c)),
                (u =
                  1 == r || (2 == r && (a <= R || a >= D))
                    ? E(u, a)
                    : x(u, a, "0"));
            else if (
              ((i = (e = Y(new H(e), t, n)).e),
              (c = (u = b(e.c)).length),
              1 == r || (2 == r && (t <= i || i <= R)))
            ) {
              for (; c < t; u += "0", c++);
              u = E(u, i);
            } else if (((t -= a), (u = x(u, i, "0")), i + 1 > c)) {
              if (--t > 0) for (u += "."; t--; u += "0");
            } else if ((t += i - c) > 0)
              for (i + 1 == c && (u += "."); t--; u += "0");
            return e.s < 0 && o ? "-" + u : u;
          }
          function G(e, t) {
            for (var n, r = 1, o = new H(e[0]); r < e.length; r++) {
              if (!(n = new H(e[r])).s) {
                o = n;
                break;
              }
              t.call(o, n) && (o = n);
            }
            return o;
          }
          function W(e, t, n) {
            for (var r = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, r++);
            return (
              (n = r + n * d - 1) > I
                ? (e.c = e.e = null)
                : n < P
                ? (e.c = [(e.e = 0)])
                : ((e.e = n), (e.c = t)),
              e
            );
          }
          function Y(e, t, n, r) {
            var o,
              i,
              a,
              s,
              l,
              p,
              m,
              v = e.c,
              g = h;
            if (v) {
              e: {
                for (o = 1, s = v[0]; s >= 10; s /= 10, o++);
                if ((i = t - o) < 0)
                  (i += d),
                    (a = t),
                    (m = ((l = v[(p = 0)]) / g[o - a - 1]) % 10 | 0);
                else if ((p = c((i + 1) / d)) >= v.length) {
                  if (!r) break e;
                  for (; v.length <= p; v.push(0));
                  (l = m = 0), (o = 1), (a = (i %= d) - d + 1);
                } else {
                  for (l = s = v[p], o = 1; s >= 10; s /= 10, o++);
                  m =
                    (a = (i %= d) - d + o) < 0
                      ? 0
                      : (l / g[o - a - 1]) % 10 | 0;
                }
                if (
                  ((r =
                    r ||
                    t < 0 ||
                    null != v[p + 1] ||
                    (a < 0 ? l : l % g[o - a - 1])),
                  (r =
                    n < 4
                      ? (m || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                      : m > 5 ||
                        (5 == m &&
                          (4 == n ||
                            r ||
                            (6 == n &&
                              (i > 0 ? (a > 0 ? l / g[o - a] : 0) : v[p - 1]) %
                                10 &
                                1) ||
                            n == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !v[0])
                )
                  return (
                    (v.length = 0),
                    r
                      ? ((t -= e.e + 1),
                        (v[0] = g[(d - (t % d)) % d]),
                        (e.e = -t || 0))
                      : (v[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == i
                    ? ((v.length = p), (s = 1), p--)
                    : ((v.length = p + 1),
                      (s = g[d - i]),
                      (v[p] = a > 0 ? u((l / g[o - a]) % g[a]) * s : 0)),
                  r)
                )
                  for (;;) {
                    if (0 == p) {
                      for (i = 1, a = v[0]; a >= 10; a /= 10, i++);
                      for (a = v[0] += s, s = 1; a >= 10; a /= 10, s++);
                      i != s && (e.e++, v[0] == f && (v[0] = 1));
                      break;
                    }
                    if (((v[p] += s), v[p] != f)) break;
                    (v[p--] = 0), (s = 1);
                  }
                for (i = v.length; 0 === v[--i]; v.pop());
              }
              e.e > I ? (e.c = e.e = null) : e.e < P && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function V(e) {
            var t,
              n = e.e;
            return null === n
              ? e.toString()
              : ((t = b(e.c)),
                (t = n <= R || n >= D ? E(t, n) : x(t, n, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (H.clone = e),
            (H.ROUND_UP = 0),
            (H.ROUND_DOWN = 1),
            (H.ROUND_CEIL = 2),
            (H.ROUND_FLOOR = 3),
            (H.ROUND_HALF_UP = 4),
            (H.ROUND_HALF_DOWN = 5),
            (H.ROUND_HALF_EVEN = 6),
            (H.ROUND_HALF_CEIL = 7),
            (H.ROUND_HALF_FLOOR = 8),
            (H.EUCLID = 9),
            (H.config = H.set =
              function (e) {
                var t, n;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(s + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      (w((n = e[t]), 0, v, t), (_ = n)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      (w((n = e[t]), 0, 8, t), (M = n)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((n = e[t]) && n.pop
                        ? (w(n[0], -v, 0, t),
                          w(n[1], 0, v, t),
                          (R = n[0]),
                          (D = n[1]))
                        : (w(n, -v, v, t), (R = -(D = n < 0 ? -n : n)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if ((n = e[t]) && n.pop)
                      w(n[0], -v, -1, t),
                        w(n[1], 1, v, t),
                        (P = n[0]),
                        (I = n[1]);
                    else {
                      if ((w(n, -v, v, t), !n))
                        throw Error(s + t + " cannot be zero: " + n);
                      P = -(I = n < 0 ? -n : n);
                    }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if ((n = e[t]) !== !!n)
                      throw Error(s + t + " not true or false: " + n);
                    if (n) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((q = !n), Error(s + "crypto unavailable"));
                      q = n;
                    } else q = n;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      (w((n = e[t]), 0, 9, t), (z = n)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      (w((n = e[t]), 0, v, t), (B = n)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if ("object" != typeof (n = e[t]))
                      throw Error(s + t + " not an object: " + n);
                    U = n;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      "string" != typeof (n = e[t]) ||
                      /^.?$|[+\-.\s]|(.).*\1/.test(n)
                    )
                      throw Error(s + t + " invalid: " + n);
                    F = n;
                  }
                }
                return {
                  DECIMAL_PLACES: _,
                  ROUNDING_MODE: M,
                  EXPONENTIAL_AT: [R, D],
                  RANGE: [P, I],
                  CRYPTO: q,
                  MODULO_MODE: z,
                  POW_PRECISION: B,
                  FORMAT: U,
                  ALPHABET: F,
                };
              }),
            (H.isBigNumber = function (e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!H.DEBUG) return !0;
              var t,
                n,
                r = e.c,
                o = e.e,
                i = e.s;
              e: if ("[object Array]" == {}.toString.call(r)) {
                if ((1 === i || -1 === i) && o >= -v && o <= v && o === u(o)) {
                  if (0 === r[0]) {
                    if (0 === o && 1 === r.length) return !0;
                    break e;
                  }
                  if (
                    ((t = (o + 1) % d) < 1 && (t += d),
                    String(r[0]).length == t)
                  ) {
                    for (t = 0; t < r.length; t++)
                      if ((n = r[t]) < 0 || n >= f || n !== u(n)) break e;
                    if (0 !== n) return !0;
                  }
                }
              } else if (
                null === r &&
                null === o &&
                (null === i || 1 === i || -1 === i)
              )
                return !0;
              throw Error(s + "Invalid BigNumber: " + e);
            }),
            (H.maximum = H.max =
              function () {
                return G(arguments, j.lt);
              }),
            (H.minimum = H.min =
              function () {
                return G(arguments, j.gt);
              }),
            (H.random =
              ((i = 9007199254740992),
              (O =
                (Math.random() * i) & 2097151
                  ? function () {
                      return u(Math.random() * i);
                    }
                  : function () {
                      return (
                        8388608 * ((1073741824 * Math.random()) | 0) +
                        ((8388608 * Math.random()) | 0)
                      );
                    }),
              function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = 0,
                  l = [],
                  f = new H(L);
                if ((null == e ? (e = _) : w(e, 0, v), (o = c(e / d)), q))
                  if (crypto.getRandomValues) {
                    for (
                      t = crypto.getRandomValues(new Uint32Array((o *= 2)));
                      a < o;

                    )
                      (i = 131072 * t[a] + (t[a + 1] >>> 11)) >= 9e15
                        ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                          (t[a] = n[0]),
                          (t[a + 1] = n[1]))
                        : (l.push(i % 1e14), (a += 2));
                    a = o / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((q = !1), Error(s + "crypto unavailable"));
                    for (t = crypto.randomBytes((o *= 7)); a < o; )
                      (i =
                        281474976710656 * (31 & t[a]) +
                        1099511627776 * t[a + 1] +
                        4294967296 * t[a + 2] +
                        16777216 * t[a + 3] +
                        (t[a + 4] << 16) +
                        (t[a + 5] << 8) +
                        t[a + 6]) >= 9e15
                        ? crypto.randomBytes(7).copy(t, a)
                        : (l.push(i % 1e14), (a += 7));
                    a = o / 7;
                  }
                if (!q) for (; a < o; ) (i = O()) < 9e15 && (l[a++] = i % 1e14);
                for (
                  o = l[--a],
                    e %= d,
                    o && e && ((i = h[d - e]), (l[a] = u(o / i) * i));
                  0 === l[a];
                  l.pop(), a--
                );
                if (a < 0) l = [(r = 0)];
                else {
                  for (r = -1; 0 === l[0]; l.splice(0, 1), r -= d);
                  for (a = 1, i = l[0]; i >= 10; i /= 10, a++);
                  a < d && (r -= d - a);
                }
                return (f.e = r), (f.c = l), f;
              })),
            (H.sum = function () {
              for (var e = 1, t = arguments, n = new H(t[0]); e < t.length; )
                n = n.plus(t[e++]);
              return n;
            }),
            (r = (function () {
              var e = "0123456789";
              function t(e, t, n, r) {
                for (var o, i, a = [0], c = 0, u = e.length; c < u; ) {
                  for (i = a.length; i--; a[i] *= t);
                  for (
                    a[0] += r.indexOf(e.charAt(c++)), o = 0;
                    o < a.length;
                    o++
                  )
                    a[o] > n - 1 &&
                      (null == a[o + 1] && (a[o + 1] = 0),
                      (a[o + 1] += (a[o] / n) | 0),
                      (a[o] %= n));
                }
                return a.reverse();
              }
              return function (r, o, i, a, c) {
                var u,
                  s,
                  l,
                  f,
                  d,
                  p,
                  h,
                  m,
                  v = r.indexOf("."),
                  g = _,
                  y = M;
                for (
                  v >= 0 &&
                    ((f = B),
                    (B = 0),
                    (r = r.replace(".", "")),
                    (p = (m = new H(o)).pow(r.length - v)),
                    (B = f),
                    (m.c = t(x(b(p.c), p.e, "0"), 10, i, e)),
                    (m.e = m.c.length)),
                    l = f =
                      (h = t(r, o, i, c ? ((u = F), e) : ((u = e), F))).length;
                  0 == h[--f];
                  h.pop()
                );
                if (!h[0]) return u.charAt(0);
                if (
                  (v < 0
                    ? --l
                    : ((p.c = h),
                      (p.e = l),
                      (p.s = a),
                      (h = (p = n(p, m, g, y, i)).c),
                      (d = p.r),
                      (l = p.e)),
                  (v = h[(s = l + g + 1)]),
                  (f = i / 2),
                  (d = d || s < 0 || null != h[s + 1]),
                  (d =
                    y < 4
                      ? (null != v || d) && (0 == y || y == (p.s < 0 ? 3 : 2))
                      : v > f ||
                        (v == f &&
                          (4 == y ||
                            d ||
                            (6 == y && 1 & h[s - 1]) ||
                            y == (p.s < 0 ? 8 : 7)))),
                  s < 1 || !h[0])
                )
                  r = d ? x(u.charAt(1), -g, u.charAt(0)) : u.charAt(0);
                else {
                  if (((h.length = s), d))
                    for (--i; ++h[--s] > i; )
                      (h[s] = 0), s || (++l, (h = [1].concat(h)));
                  for (f = h.length; !h[--f]; );
                  for (v = 0, r = ""; v <= f; r += u.charAt(h[v++]));
                  r = x(r, l, u.charAt(0));
                }
                return r;
              };
            })()),
            (n = (function () {
              function e(e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  c = 0,
                  u = e.length,
                  s = t % m,
                  l = (t / m) | 0;
                for (e = e.slice(); u--; )
                  (c =
                    (((o =
                      s * (i = e[u] % m) +
                      ((r = l * i + (a = (e[u] / m) | 0) * s) % m) * m +
                      c) /
                      n) |
                      0) +
                    ((r / m) | 0) +
                    l * a),
                    (e[u] = o % n);
                return c && (e = [c].concat(e)), e;
              }
              function t(e, t, n, r) {
                var o, i;
                if (n != r) i = n > r ? 1 : -1;
                else
                  for (o = i = 0; o < n; o++)
                    if (e[o] != t[o]) {
                      i = e[o] > t[o] ? 1 : -1;
                      break;
                    }
                return i;
              }
              function n(e, t, n, r) {
                for (var o = 0; n--; )
                  (e[n] -= o),
                    (o = e[n] < t[n] ? 1 : 0),
                    (e[n] = o * r + e[n] - t[n]);
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (r, o, i, a, c) {
                var s,
                  l,
                  p,
                  h,
                  m,
                  v,
                  b,
                  y,
                  w,
                  k,
                  E,
                  x,
                  O,
                  N,
                  A,
                  S,
                  C,
                  T = r.s == o.s ? 1 : -1,
                  j = r.c,
                  L = o.c;
                if (!(j && j[0] && L && L[0]))
                  return new H(
                    r.s && o.s && (j ? !L || j[0] != L[0] : L)
                      ? (j && 0 == j[0]) || !L
                        ? 0 * T
                        : T / 0
                      : NaN
                  );
                for (
                  w = (y = new H(T)).c = [],
                    T = i + (l = r.e - o.e) + 1,
                    c ||
                      ((c = f),
                      (l = g(r.e / d) - g(o.e / d)),
                      (T = (T / d) | 0)),
                    p = 0;
                  L[p] == (j[p] || 0);
                  p++
                );
                if ((L[p] > (j[p] || 0) && l--, T < 0)) w.push(1), (h = !0);
                else {
                  for (
                    N = j.length,
                      S = L.length,
                      p = 0,
                      T += 2,
                      (m = u(c / (L[0] + 1))) > 1 &&
                        ((L = e(L, m, c)),
                        (j = e(j, m, c)),
                        (S = L.length),
                        (N = j.length)),
                      O = S,
                      E = (k = j.slice(0, S)).length;
                    E < S;
                    k[E++] = 0
                  );
                  (C = L.slice()),
                    (C = [0].concat(C)),
                    (A = L[0]),
                    L[1] >= c / 2 && A++;
                  do {
                    if (((m = 0), (s = t(L, k, S, E)) < 0)) {
                      if (
                        ((x = k[0]),
                        S != E && (x = x * c + (k[1] || 0)),
                        (m = u(x / A)) > 1)
                      )
                        for (
                          m >= c && (m = c - 1),
                            b = (v = e(L, m, c)).length,
                            E = k.length;
                          1 == t(v, k, b, E);

                        )
                          m--,
                            n(v, S < b ? C : L, b, c),
                            (b = v.length),
                            (s = 1);
                      else 0 == m && (s = m = 1), (b = (v = L.slice()).length);
                      if (
                        (b < E && (v = [0].concat(v)),
                        n(k, v, E, c),
                        (E = k.length),
                        -1 == s)
                      )
                        for (; t(L, k, S, E) < 1; )
                          m++, n(k, S < E ? C : L, E, c), (E = k.length);
                    } else 0 === s && (m++, (k = [0]));
                    (w[p++] = m),
                      k[0] ? (k[E++] = j[O] || 0) : ((k = [j[O]]), (E = 1));
                  } while ((O++ < N || null != k[0]) && T--);
                  (h = null != k[0]), w[0] || w.splice(0, 1);
                }
                if (c == f) {
                  for (p = 1, T = w[0]; T >= 10; T /= 10, p++);
                  Y(y, i + (y.e = p + l * d - 1) + 1, a, h);
                } else (y.e = l), (y.r = +h);
                return y;
              };
            })()),
            (N = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
            (A = /^([^.]+)\.$/),
            (S = /^\.([^.]+)$/),
            (C = /^-?(Infinity|NaN)$/),
            (T = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
            (o = function (e, t, n, r) {
              var o,
                i = n ? t : t.replace(T, "");
              if (C.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
              else {
                if (
                  !n &&
                  ((i = i.replace(N, function (e, t, n) {
                    return (
                      (o =
                        "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8),
                      r && r != o ? e : t
                    );
                  })),
                  r && ((o = r), (i = i.replace(A, "$1").replace(S, "0.$1"))),
                  t != i)
                )
                  return new H(i, o);
                if (H.DEBUG)
                  throw Error(
                    s + "Not a" + (r ? " base " + r : "") + " number: " + t
                  );
                e.s = null;
              }
              e.c = e.e = null;
            }),
            (j.absoluteValue = j.abs =
              function () {
                var e = new H(this);
                return e.s < 0 && (e.s = 1), e;
              }),
            (j.comparedTo = function (e, t) {
              return y(this, new H(e, t));
            }),
            (j.decimalPlaces = j.dp =
              function (e, t) {
                var n,
                  r,
                  o,
                  i = this;
                if (null != e)
                  return (
                    w(e, 0, v),
                    null == t ? (t = M) : w(t, 0, 8),
                    Y(new H(i), e + i.e + 1, t)
                  );
                if (!(n = i.c)) return null;
                if (
                  ((r = ((o = n.length - 1) - g(this.e / d)) * d), (o = n[o]))
                )
                  for (; o % 10 == 0; o /= 10, r--);
                return r < 0 && (r = 0), r;
              }),
            (j.dividedBy = j.div =
              function (e, t) {
                return n(this, new H(e, t), _, M);
              }),
            (j.dividedToIntegerBy = j.idiv =
              function (e, t) {
                return n(this, new H(e, t), 0, 1);
              }),
            (j.exponentiatedBy = j.pow =
              function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  l,
                  f,
                  p,
                  h = this;
                if ((e = new H(e)).c && !e.isInteger())
                  throw Error(s + "Exponent not an integer: " + V(e));
                if (
                  (null != t && (t = new H(t)),
                  (a = e.e > 14),
                  !h.c ||
                    !h.c[0] ||
                    (1 == h.c[0] && !h.e && 1 == h.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (p = new H(Math.pow(+V(h), a ? 2 - k(e) : +V(e)))),
                    t ? p.mod(t) : p
                  );
                if (((l = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new H(NaN);
                  (r = !l && h.isInteger() && t.isInteger()) && (h = h.mod(t));
                } else {
                  if (
                    e.e > 9 &&
                    (h.e > 0 ||
                      h.e < -1 ||
                      (0 == h.e
                        ? h.c[0] > 1 || (a && h.c[1] >= 24e7)
                        : h.c[0] < 8e13 || (a && h.c[0] <= 9999975e7)))
                  )
                    return (
                      (i = h.s < 0 && k(e) ? -0 : 0),
                      h.e > -1 && (i = 1 / i),
                      new H(l ? 1 / i : i)
                    );
                  B && (i = c(B / d + 2));
                }
                for (
                  a
                    ? ((n = new H(0.5)), l && (e.s = 1), (f = k(e)))
                    : (f = (o = Math.abs(+V(e))) % 2),
                    p = new H(L);
                  ;

                ) {
                  if (f) {
                    if (!(p = p.times(h)).c) break;
                    i
                      ? p.c.length > i && (p.c.length = i)
                      : r && (p = p.mod(t));
                  }
                  if (o) {
                    if (0 === (o = u(o / 2))) break;
                    f = o % 2;
                  } else if ((Y((e = e.times(n)), e.e + 1, 1), e.e > 14))
                    f = k(e);
                  else {
                    if (0 === (o = +V(e))) break;
                    f = o % 2;
                  }
                  (h = h.times(h)),
                    i
                      ? h.c && h.c.length > i && (h.c.length = i)
                      : r && (h = h.mod(t));
                }
                return r
                  ? p
                  : (l && (p = L.div(p)),
                    t ? p.mod(t) : i ? Y(p, B, M, undefined) : p);
              }),
            (j.integerValue = function (e) {
              var t = new H(this);
              return null == e ? (e = M) : w(e, 0, 8), Y(t, t.e + 1, e);
            }),
            (j.isEqualTo = j.eq =
              function (e, t) {
                return 0 === y(this, new H(e, t));
              }),
            (j.isFinite = function () {
              return !!this.c;
            }),
            (j.isGreaterThan = j.gt =
              function (e, t) {
                return y(this, new H(e, t)) > 0;
              }),
            (j.isGreaterThanOrEqualTo = j.gte =
              function (e, t) {
                return 1 === (t = y(this, new H(e, t))) || 0 === t;
              }),
            (j.isInteger = function () {
              return !!this.c && g(this.e / d) > this.c.length - 2;
            }),
            (j.isLessThan = j.lt =
              function (e, t) {
                return y(this, new H(e, t)) < 0;
              }),
            (j.isLessThanOrEqualTo = j.lte =
              function (e, t) {
                return -1 === (t = y(this, new H(e, t))) || 0 === t;
              }),
            (j.isNaN = function () {
              return !this.s;
            }),
            (j.isNegative = function () {
              return this.s < 0;
            }),
            (j.isPositive = function () {
              return this.s > 0;
            }),
            (j.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (j.minus = function (e, t) {
              var n,
                r,
                o,
                i,
                a = this,
                c = a.s;
              if (((t = (e = new H(e, t)).s), !c || !t)) return new H(NaN);
              if (c != t) return (e.s = -t), a.plus(e);
              var u = a.e / d,
                s = e.e / d,
                l = a.c,
                p = e.c;
              if (!u || !s) {
                if (!l || !p) return l ? ((e.s = -t), e) : new H(p ? a : NaN);
                if (!l[0] || !p[0])
                  return p[0]
                    ? ((e.s = -t), e)
                    : new H(l[0] ? a : 3 == M ? -0 : 0);
              }
              if (((u = g(u)), (s = g(s)), (l = l.slice()), (c = u - s))) {
                for (
                  (i = c < 0) ? ((c = -c), (o = l)) : ((s = u), (o = p)),
                    o.reverse(),
                    t = c;
                  t--;
                  o.push(0)
                );
                o.reverse();
              } else
                for (
                  r = (i = (c = l.length) < (t = p.length)) ? c : t, c = t = 0;
                  t < r;
                  t++
                )
                  if (l[t] != p[t]) {
                    i = l[t] < p[t];
                    break;
                  }
              if (
                (i && ((o = l), (l = p), (p = o), (e.s = -e.s)),
                (t = (r = p.length) - (n = l.length)) > 0)
              )
                for (; t--; l[n++] = 0);
              for (t = f - 1; r > c; ) {
                if (l[--r] < p[r]) {
                  for (n = r; n && !l[--n]; l[n] = t);
                  --l[n], (l[r] += f);
                }
                l[r] -= p[r];
              }
              for (; 0 == l[0]; l.splice(0, 1), --s);
              return l[0]
                ? W(e, l, s)
                : ((e.s = 3 == M ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (j.modulo = j.mod =
              function (e, t) {
                var r,
                  o,
                  i = this;
                return (
                  (e = new H(e, t)),
                  !i.c || !e.s || (e.c && !e.c[0])
                    ? new H(NaN)
                    : !e.c || (i.c && !i.c[0])
                    ? new H(i)
                    : (9 == z
                        ? ((o = e.s),
                          (e.s = 1),
                          (r = n(i, e, 0, 3)),
                          (e.s = o),
                          (r.s *= o))
                        : (r = n(i, e, 0, z)),
                      (e = i.minus(r.times(e))).c[0] || 1 != z || (e.s = i.s),
                      e)
                );
              }),
            (j.multipliedBy = j.times =
              function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  c,
                  u,
                  s,
                  l,
                  p,
                  h,
                  v,
                  b,
                  y,
                  w,
                  k = this,
                  E = k.c,
                  x = (e = new H(e, t)).c;
                if (!(E && x && E[0] && x[0]))
                  return (
                    !k.s || !e.s || (E && !E[0] && !x) || (x && !x[0] && !E)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= k.s),
                        E && x ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  r = g(k.e / d) + g(e.e / d),
                    e.s *= k.s,
                    (u = E.length) < (p = x.length) &&
                      ((b = E), (E = x), (x = b), (o = u), (u = p), (p = o)),
                    o = u + p,
                    b = [];
                  o--;
                  b.push(0)
                );
                for (y = f, w = m, o = p; --o >= 0; ) {
                  for (
                    n = 0, h = x[o] % w, v = (x[o] / w) | 0, i = o + (a = u);
                    i > o;

                  )
                    (n =
                      (((s =
                        h * (s = E[--a] % w) +
                        ((c = v * s + (l = (E[a] / w) | 0) * h) % w) * w +
                        b[i] +
                        n) /
                        y) |
                        0) +
                      ((c / w) | 0) +
                      v * l),
                      (b[i--] = s % y);
                  b[i] = n;
                }
                return n ? ++r : b.splice(0, 1), W(e, b, r);
              }),
            (j.negated = function () {
              var e = new H(this);
              return (e.s = -e.s || null), e;
            }),
            (j.plus = function (e, t) {
              var n,
                r = this,
                o = r.s;
              if (((t = (e = new H(e, t)).s), !o || !t)) return new H(NaN);
              if (o != t) return (e.s = -t), r.minus(e);
              var i = r.e / d,
                a = e.e / d,
                c = r.c,
                u = e.c;
              if (!i || !a) {
                if (!c || !u) return new H(o / 0);
                if (!c[0] || !u[0]) return u[0] ? e : new H(c[0] ? r : 0 * o);
              }
              if (((i = g(i)), (a = g(a)), (c = c.slice()), (o = i - a))) {
                for (
                  o > 0 ? ((a = i), (n = u)) : ((o = -o), (n = c)), n.reverse();
                  o--;
                  n.push(0)
                );
                n.reverse();
              }
              for (
                (o = c.length) - (t = u.length) < 0 &&
                  ((n = u), (u = c), (c = n), (t = o)),
                  o = 0;
                t;

              )
                (o = ((c[--t] = c[t] + u[t] + o) / f) | 0),
                  (c[t] = f === c[t] ? 0 : c[t] % f);
              return o && ((c = [o].concat(c)), ++a), W(e, c, a);
            }),
            (j.precision = j.sd =
              function (e, t) {
                var n,
                  r,
                  o,
                  i = this;
                if (null != e && e !== !!e)
                  return (
                    w(e, 1, v),
                    null == t ? (t = M) : w(t, 0, 8),
                    Y(new H(i), e, t)
                  );
                if (!(n = i.c)) return null;
                if (((r = (o = n.length - 1) * d + 1), (o = n[o]))) {
                  for (; o % 10 == 0; o /= 10, r--);
                  for (o = n[0]; o >= 10; o /= 10, r++);
                }
                return e && i.e + 1 > r && (r = i.e + 1), r;
              }),
            (j.shiftedBy = function (e) {
              return w(e, -9007199254740991, p), this.times("1e" + e);
            }),
            (j.squareRoot = j.sqrt =
              function () {
                var e,
                  t,
                  r,
                  o,
                  i,
                  a = this,
                  c = a.c,
                  u = a.s,
                  s = a.e,
                  l = _ + 4,
                  f = new H("0.5");
                if (1 !== u || !c || !c[0])
                  return new H(
                    !u || (u < 0 && (!c || c[0])) ? NaN : c ? a : 1 / 0
                  );
                if (
                  (0 == (u = Math.sqrt(+V(a))) || u == 1 / 0
                    ? (((t = b(c)).length + s) % 2 == 0 && (t += "0"),
                      (u = Math.sqrt(+t)),
                      (s = g((s + 1) / 2) - (s < 0 || s % 2)),
                      (r = new H(
                        (t =
                          u == 1 / 0
                            ? "5e" + s
                            : (t = u.toExponential()).slice(
                                0,
                                t.indexOf("e") + 1
                              ) + s)
                      )))
                    : (r = new H(u + "")),
                  r.c[0])
                )
                  for ((u = (s = r.e) + l) < 3 && (u = 0); ; )
                    if (
                      ((i = r),
                      (r = f.times(i.plus(n(a, i, l, 1)))),
                      b(i.c).slice(0, u) === (t = b(r.c)).slice(0, u))
                    ) {
                      if (
                        (r.e < s && --u,
                        "9999" != (t = t.slice(u - 3, u + 1)) &&
                          (o || "4999" != t))
                      ) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                          (Y(r, r.e + _ + 2, 1), (e = !r.times(r).eq(a)));
                        break;
                      }
                      if (!o && (Y(i, i.e + _ + 2, 0), i.times(i).eq(a))) {
                        r = i;
                        break;
                      }
                      (l += 4), (u += 4), (o = 1);
                    }
                return Y(r, r.e + _ + 1, M, e);
              }),
            (j.toExponential = function (e, t) {
              return null != e && (w(e, 0, v), e++), $(this, e, t, 1);
            }),
            (j.toFixed = function (e, t) {
              return (
                null != e && (w(e, 0, v), (e = e + this.e + 1)), $(this, e, t)
              );
            }),
            (j.toFormat = function (e, t, n) {
              var r,
                o = this;
              if (null == n)
                null != e && t && "object" == typeof t
                  ? ((n = t), (t = null))
                  : e && "object" == typeof e
                  ? ((n = e), (e = t = null))
                  : (n = U);
              else if ("object" != typeof n)
                throw Error(s + "Argument not an object: " + n);
              if (((r = o.toFixed(e, t)), o.c)) {
                var i,
                  a = r.split("."),
                  c = +n.groupSize,
                  u = +n.secondaryGroupSize,
                  l = n.groupSeparator || "",
                  f = a[0],
                  d = a[1],
                  p = o.s < 0,
                  h = p ? f.slice(1) : f,
                  m = h.length;
                if (
                  (u && ((i = c), (c = u), (u = i), (m -= i)), c > 0 && m > 0)
                ) {
                  for (i = m % c || c, f = h.substr(0, i); i < m; i += c)
                    f += l + h.substr(i, c);
                  u > 0 && (f += l + h.slice(i)), p && (f = "-" + f);
                }
                r = d
                  ? f +
                    (n.decimalSeparator || "") +
                    ((u = +n.fractionGroupSize)
                      ? d.replace(
                          new RegExp("\\d{" + u + "}\\B", "g"),
                          "$&" + (n.fractionGroupSeparator || "")
                        )
                      : d)
                  : f;
              }
              return (n.prefix || "") + r + (n.suffix || "");
            }),
            (j.toFraction = function (e) {
              var t,
                r,
                o,
                i,
                a,
                c,
                u,
                l,
                f,
                p,
                m,
                v,
                g = this,
                y = g.c;
              if (
                null != e &&
                ((!(u = new H(e)).isInteger() && (u.c || 1 !== u.s)) || u.lt(L))
              )
                throw Error(
                  s +
                    "Argument " +
                    (u.isInteger() ? "out of range: " : "not an integer: ") +
                    V(u)
                );
              if (!y) return new H(g);
              for (
                t = new H(L),
                  f = r = new H(L),
                  o = l = new H(L),
                  v = b(y),
                  a = t.e = v.length - g.e - 1,
                  t.c[0] = h[(c = a % d) < 0 ? d + c : c],
                  e = !e || u.comparedTo(t) > 0 ? (a > 0 ? t : f) : u,
                  c = I,
                  I = 1 / 0,
                  u = new H(v),
                  l.c[0] = 0;
                (p = n(u, t, 0, 1)),
                  1 != (i = r.plus(p.times(o))).comparedTo(e);

              )
                (r = o),
                  (o = i),
                  (f = l.plus(p.times((i = f)))),
                  (l = i),
                  (t = u.minus(p.times((i = t)))),
                  (u = i);
              return (
                (i = n(e.minus(r), o, 0, 1)),
                (l = l.plus(i.times(f))),
                (r = r.plus(i.times(o))),
                (l.s = f.s = g.s),
                (m =
                  n(f, o, (a *= 2), M)
                    .minus(g)
                    .abs()
                    .comparedTo(n(l, r, a, M).minus(g).abs()) < 1
                    ? [f, o]
                    : [l, r]),
                (I = c),
                m
              );
            }),
            (j.toNumber = function () {
              return +V(this);
            }),
            (j.toPrecision = function (e, t) {
              return null != e && w(e, 1, v), $(this, e, t, 2);
            }),
            (j.toString = function (e) {
              var t,
                n = this,
                o = n.s,
                i = n.e;
              return (
                null === i
                  ? o
                    ? ((t = "Infinity"), o < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : (null == e
                      ? (t =
                          i <= R || i >= D ? E(b(n.c), i) : x(b(n.c), i, "0"))
                      : 10 === e
                      ? (t = x(b((n = Y(new H(n), _ + i + 1, M)).c), n.e, "0"))
                      : (w(e, 2, F.length, "Base"),
                        (t = r(x(b(n.c), i, "0"), 10, e, o, !0))),
                    o < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (j.valueOf = j.toJSON =
              function () {
                return V(this);
              }),
            (j._isBigNumber = !0),
            null != t && H.set(t),
            H
          );
        })()),
          (i.default = i.BigNumber = i),
          void 0 ===
            (r = function () {
              return i;
            }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    2152: function (e) {
      var t;
      (t = function () {
        return (function () {
          var e = {
              134: function (e, t, n) {
                "use strict";
                n.d(t, {
                  default: function () {
                    return k;
                  },
                });
                var r = n(279),
                  o = n.n(r),
                  i = n(370),
                  a = n.n(i),
                  c = n(817),
                  u = n.n(c);
                function s(e) {
                  return (
                    (s =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    s(e)
                  );
                }
                function l(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                var f = (function () {
                    function e(t) {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        this.resolveOptions(t),
                        this.initSelection();
                    }
                    var t, n, r;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "resolveOptions",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            (this.action = e.action),
                              (this.container = e.container),
                              (this.emitter = e.emitter),
                              (this.target = e.target),
                              (this.text = e.text),
                              (this.trigger = e.trigger),
                              (this.selectedText = "");
                          },
                        },
                        {
                          key: "initSelection",
                          value: function () {
                            this.text
                              ? this.selectFake()
                              : this.target && this.selectTarget();
                          },
                        },
                        {
                          key: "createFakeElement",
                          value: function () {
                            var e =
                              "rtl" ===
                              document.documentElement.getAttribute("dir");
                            (this.fakeElem =
                              document.createElement("textarea")),
                              (this.fakeElem.style.fontSize = "12pt"),
                              (this.fakeElem.style.border = "0"),
                              (this.fakeElem.style.padding = "0"),
                              (this.fakeElem.style.margin = "0"),
                              (this.fakeElem.style.position = "absolute"),
                              (this.fakeElem.style[e ? "right" : "left"] =
                                "-9999px");
                            var t =
                              window.pageYOffset ||
                              document.documentElement.scrollTop;
                            return (
                              (this.fakeElem.style.top = "".concat(t, "px")),
                              this.fakeElem.setAttribute("readonly", ""),
                              (this.fakeElem.value = this.text),
                              this.fakeElem
                            );
                          },
                        },
                        {
                          key: "selectFake",
                          value: function () {
                            var e = this,
                              t = this.createFakeElement();
                            (this.fakeHandlerCallback = function () {
                              return e.removeFake();
                            }),
                              (this.fakeHandler =
                                this.container.addEventListener(
                                  "click",
                                  this.fakeHandlerCallback
                                ) || !0),
                              this.container.appendChild(t),
                              (this.selectedText = u()(t)),
                              this.copyText(),
                              this.removeFake();
                          },
                        },
                        {
                          key: "removeFake",
                          value: function () {
                            this.fakeHandler &&
                              (this.container.removeEventListener(
                                "click",
                                this.fakeHandlerCallback
                              ),
                              (this.fakeHandler = null),
                              (this.fakeHandlerCallback = null)),
                              this.fakeElem &&
                                (this.container.removeChild(this.fakeElem),
                                (this.fakeElem = null));
                          },
                        },
                        {
                          key: "selectTarget",
                          value: function () {
                            (this.selectedText = u()(this.target)),
                              this.copyText();
                          },
                        },
                        {
                          key: "copyText",
                          value: function () {
                            var e;
                            try {
                              e = document.execCommand(this.action);
                            } catch (t) {
                              e = !1;
                            }
                            this.handleResult(e);
                          },
                        },
                        {
                          key: "handleResult",
                          value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                              action: this.action,
                              text: this.selectedText,
                              trigger: this.trigger,
                              clearSelection: this.clearSelection.bind(this),
                            });
                          },
                        },
                        {
                          key: "clearSelection",
                          value: function () {
                            this.trigger && this.trigger.focus(),
                              document.activeElement.blur(),
                              window.getSelection().removeAllRanges();
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.removeFake();
                          },
                        },
                        {
                          key: "action",
                          set: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "copy";
                            if (
                              ((this._action = e),
                              "copy" !== this._action && "cut" !== this._action)
                            )
                              throw new Error(
                                'Invalid "action" value, use either "copy" or "cut"'
                              );
                          },
                          get: function () {
                            return this._action;
                          },
                        },
                        {
                          key: "target",
                          set: function (e) {
                            if (void 0 !== e) {
                              if (!e || "object" !== s(e) || 1 !== e.nodeType)
                                throw new Error(
                                  'Invalid "target" value, use a valid Element'
                                );
                              if (
                                "copy" === this.action &&
                                e.hasAttribute("disabled")
                              )
                                throw new Error(
                                  'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                );
                              if (
                                "cut" === this.action &&
                                (e.hasAttribute("readonly") ||
                                  e.hasAttribute("disabled"))
                              )
                                throw new Error(
                                  'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                );
                              this._target = e;
                            }
                          },
                          get: function () {
                            return this._target;
                          },
                        },
                      ]),
                      n && l(t.prototype, n),
                      r && l(t, r),
                      e
                    );
                  })(),
                  d = f;
                function p(e) {
                  return (
                    (p =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    p(e)
                  );
                }
                function h(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                function m(e, t) {
                  return (
                    (m =
                      Object.setPrototypeOf ||
                      function (e, t) {
                        return (e.__proto__ = t), e;
                      }),
                    m(e, t)
                  );
                }
                function v(e) {
                  var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
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
                    var n,
                      r = b(e);
                    if (t) {
                      var o = b(this).constructor;
                      n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return g(this, n);
                  };
                }
                function g(e, t) {
                  return !t || ("object" !== p(t) && "function" != typeof t)
                    ? (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return e;
                      })(e)
                    : t;
                }
                function b(e) {
                  return (
                    (b = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                    b(e)
                  );
                }
                function y(e, t) {
                  var n = "data-clipboard-".concat(e);
                  if (t.hasAttribute(n)) return t.getAttribute(n);
                }
                var w = (function (e) {
                    !(function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t && m(e, t);
                    })(i, e);
                    var t,
                      n,
                      r,
                      o = v(i);
                    function i(e, t) {
                      var n;
                      return (
                        (function (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, i),
                        (n = o.call(this)).resolveOptions(t),
                        n.listenClick(e),
                        n
                      );
                    }
                    return (
                      (t = i),
                      (n = [
                        {
                          key: "resolveOptions",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            (this.action =
                              "function" == typeof e.action
                                ? e.action
                                : this.defaultAction),
                              (this.target =
                                "function" == typeof e.target
                                  ? e.target
                                  : this.defaultTarget),
                              (this.text =
                                "function" == typeof e.text
                                  ? e.text
                                  : this.defaultText),
                              (this.container =
                                "object" === p(e.container)
                                  ? e.container
                                  : document.body);
                          },
                        },
                        {
                          key: "listenClick",
                          value: function (e) {
                            var t = this;
                            this.listener = a()(e, "click", function (e) {
                              return t.onClick(e);
                            });
                          },
                        },
                        {
                          key: "onClick",
                          value: function (e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction &&
                              (this.clipboardAction = null),
                              (this.clipboardAction = new d({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this,
                              }));
                          },
                        },
                        {
                          key: "defaultAction",
                          value: function (e) {
                            return y("action", e);
                          },
                        },
                        {
                          key: "defaultTarget",
                          value: function (e) {
                            var t = y("target", e);
                            if (t) return document.querySelector(t);
                          },
                        },
                        {
                          key: "defaultText",
                          value: function (e) {
                            return y("text", e);
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.listener.destroy(),
                              this.clipboardAction &&
                                (this.clipboardAction.destroy(),
                                (this.clipboardAction = null));
                          },
                        },
                      ]),
                      (r = [
                        {
                          key: "isSupported",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : ["copy", "cut"],
                              t = "string" == typeof e ? [e] : e,
                              n = !!document.queryCommandSupported;
                            return (
                              t.forEach(function (e) {
                                n = n && !!document.queryCommandSupported(e);
                              }),
                              n
                            );
                          },
                        },
                      ]),
                      n && h(t.prototype, n),
                      r && h(t, r),
                      i
                    );
                  })(o()),
                  k = w;
              },
              828: function (e) {
                if (
                  "undefined" != typeof Element &&
                  !Element.prototype.matches
                ) {
                  var t = Element.prototype;
                  t.matches =
                    t.matchesSelector ||
                    t.mozMatchesSelector ||
                    t.msMatchesSelector ||
                    t.oMatchesSelector ||
                    t.webkitMatchesSelector;
                }
                e.exports = function (e, t) {
                  for (; e && 9 !== e.nodeType; ) {
                    if ("function" == typeof e.matches && e.matches(t))
                      return e;
                    e = e.parentNode;
                  }
                };
              },
              438: function (e, t, n) {
                var r = n(828);
                function o(e, t, n, r, o) {
                  var a = i.apply(this, arguments);
                  return (
                    e.addEventListener(n, a, o),
                    {
                      destroy: function () {
                        e.removeEventListener(n, a, o);
                      },
                    }
                  );
                }
                function i(e, t, n, o) {
                  return function (n) {
                    (n.delegateTarget = r(n.target, t)),
                      n.delegateTarget && o.call(e, n);
                  };
                }
                e.exports = function (e, t, n, r, i) {
                  return "function" == typeof e.addEventListener
                    ? o.apply(null, arguments)
                    : "function" == typeof n
                    ? o.bind(null, document).apply(null, arguments)
                    : ("string" == typeof e &&
                        (e = document.querySelectorAll(e)),
                      Array.prototype.map.call(e, function (e) {
                        return o(e, t, n, r, i);
                      }));
                };
              },
              879: function (e, t) {
                (t.node = function (e) {
                  return (
                    void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                  );
                }),
                  (t.nodeList = function (e) {
                    var n = Object.prototype.toString.call(e);
                    return (
                      void 0 !== e &&
                      ("[object NodeList]" === n ||
                        "[object HTMLCollection]" === n) &&
                      "length" in e &&
                      (0 === e.length || t.node(e[0]))
                    );
                  }),
                  (t.string = function (e) {
                    return "string" == typeof e || e instanceof String;
                  }),
                  (t.fn = function (e) {
                    return (
                      "[object Function]" === Object.prototype.toString.call(e)
                    );
                  });
              },
              370: function (e, t, n) {
                var r = n(879),
                  o = n(438);
                e.exports = function (e, t, n) {
                  if (!e && !t && !n)
                    throw new Error("Missing required arguments");
                  if (!r.string(t))
                    throw new TypeError("Second argument must be a String");
                  if (!r.fn(n))
                    throw new TypeError("Third argument must be a Function");
                  if (r.node(e))
                    return (function (e, t, n) {
                      return (
                        e.addEventListener(t, n),
                        {
                          destroy: function () {
                            e.removeEventListener(t, n);
                          },
                        }
                      );
                    })(e, t, n);
                  if (r.nodeList(e))
                    return (function (e, t, n) {
                      return (
                        Array.prototype.forEach.call(e, function (e) {
                          e.addEventListener(t, n);
                        }),
                        {
                          destroy: function () {
                            Array.prototype.forEach.call(e, function (e) {
                              e.removeEventListener(t, n);
                            });
                          },
                        }
                      );
                    })(e, t, n);
                  if (r.string(e))
                    return (function (e, t, n) {
                      return o(document.body, e, t, n);
                    })(e, t, n);
                  throw new TypeError(
                    "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                  );
                };
              },
              817: function (e) {
                e.exports = function (e) {
                  var t;
                  if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                  else if (
                    "INPUT" === e.nodeName ||
                    "TEXTAREA" === e.nodeName
                  ) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""),
                      e.select(),
                      e.setSelectionRange(0, e.value.length),
                      n || e.removeAttribute("readonly"),
                      (t = e.value);
                  } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                      o = document.createRange();
                    o.selectNodeContents(e),
                      r.removeAllRanges(),
                      r.addRange(o),
                      (t = r.toString());
                  }
                  return t;
                };
              },
              279: function (e) {
                function t() {}
                (t.prototype = {
                  on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
                  },
                  once: function (e, t, n) {
                    var r = this;
                    function o() {
                      r.off(e, o), t.apply(n, arguments);
                    }
                    return (o._ = t), this.on(e, o, n);
                  },
                  emit: function (e) {
                    for (
                      var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        r = 0,
                        o = n.length;
                      r < o;
                      r++
                    )
                      n[r].fn.apply(n[r].ctx, t);
                    return this;
                  },
                  off: function (e, t) {
                    var n = this.e || (this.e = {}),
                      r = n[e],
                      o = [];
                    if (r && t)
                      for (var i = 0, a = r.length; i < a; i++)
                        r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                    return o.length ? (n[e] = o) : delete n[e], this;
                  },
                }),
                  (e.exports = t),
                  (e.exports.TinyEmitter = t);
              },
            },
            t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { exports: {} });
            return e[r](o, o.exports, n), o.exports;
          }
          return (
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, { a: t }), t;
            }),
            (n.d = function (e, t) {
              for (var r in t)
                n.o(t, r) &&
                  !n.o(e, r) &&
                  Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            n(134)
          );
        })().default;
      }),
        (e.exports = t());
    },
    8533: function (e, t, n) {
      "use strict";
      var r = n(2092).forEach,
        o = n(9341)("forEach");
      e.exports = o
        ? [].forEach
        : function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    9341: function (e, t, n) {
      "use strict";
      var r = n(7293);
      e.exports = function (e, t) {
        var n = [][e];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              t ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    4699: function (e, t, n) {
      var r = n(9781),
        o = n(1956),
        i = n(5656),
        a = n(5296).f,
        c = function (e) {
          return function (t) {
            for (
              var n, c = i(t), u = o(c), s = u.length, l = 0, f = [];
              s > l;

            )
              (n = u[l++]),
                (r && !a.call(c, n)) || f.push(e ? [n, c[n]] : c[n]);
            return f;
          };
        };
      e.exports = { entries: c(!0), values: c(!1) };
    },
    9600: function (e, t, n) {
      "use strict";
      var r = n(2109),
        o = n(8361),
        i = n(5656),
        a = n(9341),
        c = [].join,
        u = o != Object,
        s = a("join", ",");
      r(
        { target: "Array", proto: !0, forced: u || !s },
        {
          join: function (e) {
            return c.call(i(this), void 0 === e ? "," : e);
          },
        }
      );
    },
    9720: function (e, t, n) {
      var r = n(2109),
        o = n(4699).entries;
      r(
        { target: "Object", stat: !0 },
        {
          entries: function (e) {
            return o(e);
          },
        }
      );
    },
    4747: function (e, t, n) {
      var r = n(7854),
        o = n(8324),
        i = n(8533),
        a = n(8880);
      for (var c in o) {
        var u = r[c],
          s = u && u.prototype;
        if (s && s.forEach !== i)
          try {
            a(s, "forEach", i);
          } catch (e) {
            s.forEach = i;
          }
      }
    },
    6808: function (e, t, n) {
      var r, o;
      !(function (i) {
        if (
          (void 0 ===
            (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) ||
            (e.exports = o),
          !0,
          (e.exports = i()),
          !!0)
        ) {
          var a = window.Cookies,
            c = (window.Cookies = i());
          c.noConflict = function () {
            return (window.Cookies = a), c;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function n(r) {
          function o() {}
          function i(t, n, i) {
            if ("undefined" != typeof document) {
              "number" ==
                typeof (i = e({ path: "/" }, o.defaults, i)).expires &&
                (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                (i.expires = i.expires ? i.expires.toUTCString() : "");
              try {
                var a = JSON.stringify(n);
                /^[\{\[]/.test(a) && (n = a);
              } catch (e) {}
              (n = r.write
                ? r.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var c = "";
              for (var u in i)
                i[u] &&
                  ((c += "; " + u),
                  !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
              return (document.cookie = t + "=" + n + c);
            }
          }
          function a(e, n) {
            if ("undefined" != typeof document) {
              for (
                var o = {},
                  i = document.cookie ? document.cookie.split("; ") : [],
                  a = 0;
                a < i.length;
                a++
              ) {
                var c = i[a].split("="),
                  u = c.slice(1).join("=");
                n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                try {
                  var s = t(c[0]);
                  if (((u = (r.read || r)(u, s) || t(u)), n))
                    try {
                      u = JSON.parse(u);
                    } catch (e) {}
                  if (((o[s] = u), e === s)) break;
                } catch (e) {}
              }
              return e ? o[e] : o;
            }
          }
          return (
            (o.set = i),
            (o.get = function (e) {
              return a(e, !1);
            }),
            (o.getJSON = function (e) {
              return a(e, !0);
            }),
            (o.remove = function (t, n) {
              i(t, "", e(n, { expires: -1 }));
            }),
            (o.defaults = {}),
            (o.withConverter = n),
            o
          );
        })(function () {});
      });
    },
  },
]);
