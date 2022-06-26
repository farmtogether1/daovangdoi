"use strict";
(self.webpackChunkmetahero = self.webpackChunkmetahero || []).push([
  [143],
  {
    3924: function (t, e, n) {
      n(2526), n(1817), n(1539), n(2165), n(6992), n(8783), n(3948), n(4747);
      var o,
        r,
        i = n(2711),
        c = n.n(i),
        a = n(482),
        l =
          ((o = function (t, e) {
            return (
              (o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              o(t, e)
            );
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            o(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
        s = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.key = "banner"),
              (e.init = function () {
                e.close && e.close.addEventListener("click", e.hide),
                  e.banner &&
                    !window.localStorage.getItem(e.key) &&
                    e.banner.classList.add("open"),
                  window.addEventListener("resize", e.topPadding),
                  e.topPadding();
              }),
              (e.topPadding = function () {
                document.body.parentElement &&
                  (e.banner && e.banner.classList.contains("open")
                    ? (document.body.parentElement.style.paddingTop =
                        e.banner.clientHeight + "px")
                    : (document.body.parentElement.style.paddingTop = "0"));
              }),
              (e.hide = function () {
                e.banner &&
                  (e.banner.classList.remove("open"),
                  window.localStorage.setItem(e.key, "1"),
                  e.topPadding());
              }),
              (e.banner = document.getElementById("banner")),
              (e.close = document.querySelector("#banner .close")),
              e.init(),
              e
            );
          }
          return l(e, t), e;
        })(a.Z),
        u =
          (n(4916),
          n(4723),
          n(4765),
          (function () {
            var t = function (e, n) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  }),
                t(e, n)
              );
            };
            return function (e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((o.prototype = n.prototype), new o()));
            };
          })()),
        p = (function (t) {
          function e() {
            var e,
              n = t.call(this) || this;
            return (
              (n.contactForm = null),
              (n.captcha = null),
              (n.captchaLabel = null),
              (n.errorText = ""),
              (n.errorDiv = document.createElement("div")),
              (n.checkError = !1),
              (n.init = function () {
                var t;
                n.btn && n.btn.addEventListener("click", n.openPopup),
                  n.addEvent(n.closeIcons, "click", n.closePopup),
                  n.contactForm &&
                    n.contactForm.addEventListener("submit", n.checkCaptcha),
                  window.location.search.match(/send=true/) &&
                    (history.replaceState(
                      {},
                      "",
                      "" + window.location.origin + window.location.pathname
                    ),
                    n.contactFormMsg && n.contactFormMsg.classList.add("open")),
                  n.captchaLabel &&
                    (n.errorDiv.classList.add("captchaError"),
                    null === (t = n.captchaLabel.parentElement) ||
                      void 0 === t ||
                      t.appendChild(n.errorDiv)),
                  window.addEventListener("captchaChange", n.checkCaptcha),
                  n.hideBody();
              }),
              (n.openPopup = function (t) {
                t.preventDefault(),
                  n.formPopup &&
                    (n.formPopup.classList.toggle("open"), n.hideBody());
              }),
              (n.closePopup = function (t) {
                var e;
                t.preventDefault(),
                  null === (e = t.target.closest(".popup")) ||
                    void 0 === e ||
                    e.classList.toggle("open"),
                  n.hideBody();
              }),
              (n.hideBody = function () {
                n.formPopup &&
                  (n.formPopup.classList.contains("open")
                    ? document.body.classList.add("popupOpen")
                    : document.body.classList.remove("popupOpen"));
              }),
              (n.checkCaptcha = function (t) {
                if (((n.checkError = !0), n.contactForm)) {
                  var e = n.contactForm.querySelector("#g-recaptcha-response");
                  e && "" === e.value
                    ? (t.preventDefault(), (n.errorDiv.innerText = n.errorText))
                    : (n.errorDiv.innerText = "");
                }
              }),
              (n.btn = document.getElementById("contactFormBtn")),
              (n.formPopup = document.getElementById("contactForm")),
              (n.contactFormMsg = document.getElementById("contactFormMsg")),
              (n.closeIcons = n.querySelectorAll(".close-form")),
              n.formPopup &&
                ((n.contactForm = n.formPopup.querySelector("form")),
                (n.captcha = n.formPopup.querySelector(".g-recaptcha"))),
              n.captcha &&
                (n.captchaLabel =
                  (null === (e = n.captcha.parentElement) || void 0 === e
                    ? void 0
                    : e.querySelector("label")) || null),
              n.captchaLabel &&
                ((n.captchaLabel.style.display = "none"),
                (n.errorText = n.captchaLabel.innerText)),
              n.init(),
              n
            );
          }
          return u(e, t), e;
        })(a.Z),
        f = n(2152),
        d = n.n(f),
        h = function () {
          new (d())(".copy").on("success", function (t) {
            t.trigger.classList.add("copied"),
              setTimeout(function () {
                return t.trigger.classList.remove("copied");
              }, 3e3);
          });
        },
        y = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        v = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.elements = e.querySelectorAll(".faq-item h3")),
              e.addEvent(e.elements, "click", e.onClick),
              e
            );
          }
          return (
            y(e, t),
            (e.prototype.onClick = function (t) {
              var e;
              null === (e = t.target.parentElement) ||
                void 0 === e ||
                e.classList.toggle("open");
            }),
            e
          );
        })(a.Z),
        m =
          (n(1249),
          n(5306),
          (function () {
            var t = function (e, n) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  }),
                t(e, n)
              );
            };
            return function (e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function o() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((o.prototype = n.prototype), new o()));
            };
          })()),
        g = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.timeout = 1e3),
              (e.activeIndex = 0),
              (e.elementData = function (t) {
                var n = (e.activeIndex + t) % e.blocks.length;
                return {
                  className: "element" + n,
                  translateY: e.elementTranslate(t, n),
                };
              }),
              (e.animate = function () {
                e.blocks.map(function (t, n) {
                  var o = e.elementData(n),
                    r = o.className,
                    i = o.translateY;
                  t.style.setProperty("--translateY", i + "px"),
                    (t.className = t.className.replace(/element\d+/, r));
                }),
                  (e.activeIndex = (e.activeIndex + 1) % e.blocks.length),
                  window.setTimeout(e.animate, e.timeout);
              }),
              (e.elementTranslate = function (t, n) {
                var o,
                  r = e.blocks[t].getBoundingClientRect().height,
                  i =
                    (null === (o = e.wrapper) || void 0 === o
                      ? void 0
                      : o.getBoundingClientRect().height) || 100;
                switch (n) {
                  case 1:
                    return 0;
                  case 2:
                    return (i - r) / 2;
                  case 3:
                    return i - r;
                  case 4:
                    return i + r / 2;
                  default:
                    return 1.5 * -r;
                }
              }),
              (e.wrapper = document.getElementById("hero-animation-blocks")),
              (e.blocks = e.querySelectorAll(
                ".hero-block",
                e.wrapper || document
              )),
              e.wrapper &&
                (e.timeout = parseInt(
                  e.wrapper.dataset.speed || "" + e.timeout
                )),
              e.initBlocks(),
              e
            );
          }
          return (
            m(e, t),
            (e.prototype.initBlocks = function () {
              if (this.wrapper && this.blocks.length > 0) {
                for (var t = this.blocks.length; t < 5; t++)
                  this.wrapper.appendChild(
                    this.blocks[t % this.blocks.length].cloneNode(!0)
                  );
                (this.blocks = this.querySelectorAll(
                  ".hero-block",
                  this.wrapper
                )),
                  this.animate();
              }
            }),
            e
          );
        })(a.Z),
        b =
          (n(9600),
          n(7327),
          n(9720),
          function (t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var o,
              r,
              i = n.call(t),
              c = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
                c.push(o.value);
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
            return c;
          }),
        w = (function () {
          function t(e) {
            var n,
              o,
              r = this;
            (this.getDiffParts = function () {
              var t = Math.round(
                (r.startDate.getTime() - new Date().getTime()) / 1e3
              );
              t <= 0 && (r.finished = !0);
              var e = Math.floor(t / 86400);
              t -= 24 * e * 60 * 60;
              var n = Math.floor(t / 3600);
              t -= 60 * n * 60;
              var o = Math.floor(t / 60);
              return { day: e, hour: n, minute: o, second: t - 60 * o };
            }),
              (this.getText = function () {
                return Object.entries(r.getDiffParts())
                  .map(function (e) {
                    var n = b(e, 2),
                      o = n[0],
                      r = n[1];
                    return r > 1
                      ? t.padd(r) + " " + o + "s"
                      : 1 === r || "second" === o
                      ? t.padd(r) + " " + o
                      : "";
                  })
                  .filter(function (t) {
                    return t.length;
                  })
                  .join(" ");
              }),
              (this.updateText = function () {
                var t;
                r.element &&
                  (r.element.innerText = r.finished
                    ? null === (t = r.element) || void 0 === t
                      ? void 0
                      : t.dataset.textFinished
                    : r.getText());
              }),
              (this.element = document.getElementById(e)),
              (this.startDate = new Date(
                (null ===
                  (o =
                    null === (n = this.element) || void 0 === n
                      ? void 0
                      : n.dataset) || void 0 === o
                  ? void 0
                  : o.date) + " UTC" || 0
              )),
              (this.finished = !1),
              this.init();
          }
          return (
            (t.prototype.init = function () {
              this.element && setInterval(this.updateText, 1e3);
            }),
            (t.padd = function (t) {
              return t > 9 ? "" + t : "0" + t;
            }),
            t
          );
        })(),
        _ = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        k = (function (t) {
          function e() {
            var e,
              n = t.call(this) || this;
            return (
              (n.toggleOpen = function () {
                n.navigation && n.navigation.classList.toggle("open");
              }),
              (n.scrollTo = function (t) {
                t.preventDefault();
                var e = t.target.dataset.href || "",
                  n =
                    "en" !== document.documentElement.lang
                      ? "" + document.documentElement.lang
                      : "";
                if (window.location.pathname === "/" + n) {
                  var o = document.getElementById(e.replace("#", ""));
                  o
                    ? (o.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      }),
                      history.replaceState({}, "", e))
                    : (window.location.hash = e);
                } else window.location.replace("/" + n + e);
              }),
              (n.onLinkClick = function (t) {
                var e = t.target.dataset.href || "";
                "#" !== e &&
                  "" !== e &&
                  n.navigation &&
                  n.navigation.classList.remove("open");
              }),
              (n.appHeight = function () {
                var t;
                null === (t = n.navigation) ||
                  void 0 === t ||
                  t.style.setProperty(
                    "--app-height",
                    window.innerHeight + "px"
                  );
              }),
              (n.fixNavigationHeight = function () {
                window.addEventListener("resize", n.appHeight), n.appHeight();
              }),
              (n.navigation = document.getElementById("main-navigation")),
              (n.toggle =
                null === (e = n.navigation) || void 0 === e
                  ? void 0
                  : e.querySelector(".toggle-menu")),
              (n.links = n.querySelectorAll(".links .link")),
              (n.hashLinks = n.querySelectorAll(".hash-link")),
              n.init(),
              n.fixNavigationHeight(),
              n
            );
          }
          return (
            _(e, t),
            (e.prototype.init = function () {
              this.toggle &&
                this.toggle.addEventListener("click", this.toggleOpen),
                this.links &&
                  this.addEvent(this.hashLinks, "click", this.onLinkClick),
                this.addEvent(this.hashLinks, "click", this.scrollTo);
            }),
            e
          );
        })(a.Z),
        L = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        O = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.videoLoaded = !1),
              (e.loadVideo = function () {
                e.iframe &&
                  !e.videoLoaded &&
                  ((e.videoLoaded = !0),
                  (e.iframe.src = e.iframe.dataset.src || ""),
                  e.iframe.classList.add("loaded"));
              }),
              (e.iframe = document.getElementById("promo-video")),
              e.init(),
              e
            );
          }
          return (
            L(e, t),
            (e.prototype.init = function () {
              window.addEventListener("scroll", this.loadVideo),
                window.setTimeout(this.loadVideo, 5e3);
            }),
            e
          );
        })(a.Z),
        E = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        S = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.pos = { left: 0, x: 0 }),
              (e.active = !1),
              (e.left = 0),
              (e.mouseMove = function (t) {
                if (e.scroll && e.active) {
                  var n = t.clientX - e.pos.x;
                  e.scroll.scrollLeft = e.pos.left - n;
                }
              }),
              (e.mouseDown = function (t) {
                e.scroll &&
                  ((e.active = !0),
                  (e.pos = { left: e.scroll.scrollLeft, x: t.clientX }),
                  (e.scroll.style.cursor = "grabbing"),
                  (e.scroll.style.userSelect = "none"));
              }),
              (e.mouseUp = function () {
                e.scroll &&
                  ((e.active = !1),
                  (e.scroll.style.cursor = "grab"),
                  e.scroll.style.removeProperty("user-select"));
              }),
              (e.onWheel = function (t) {
                if (e.scroll) {
                  var n = Math.abs(t.deltaX) > Math.abs(t.deltaY),
                    o = n ? t.deltaX : t.deltaY,
                    r = e.scroll.scrollWidth - e.scroll.clientWidth;
                  if (
                    (((o < 0 && e.scroll.scrollLeft > 0) ||
                      (o > 0 && e.scroll.scrollLeft < r)) &&
                      t.preventDefault(),
                    (o < 0 && e.left > 0) || (o > 0 && e.left < r))
                  )
                    return (
                      (e.left = Math.max(0, Math.min(r, e.left + o))),
                      Math.abs(o) < 80 || n
                        ? (e.scroll.scrollLeft = e.left)
                        : e.scroll.scrollTo({
                            left: e.left,
                            behavior: "smooth",
                          }),
                      !1
                    );
                }
              }),
              (e.scroll = document.getElementById("roadmap-slider")),
              e.init(),
              e.scrollToInProgressTask(),
              e
            );
          }
          return (
            E(e, t),
            (e.prototype.init = function () {
              this.scroll &&
                (this.scroll.addEventListener("wheel", this.onWheel),
                this.scroll.addEventListener("mousemove", this.mouseMove),
                this.scroll.addEventListener("mousedown", this.mouseDown),
                this.scroll.addEventListener("mouseup", this.mouseUp),
                (this.left = this.scroll.scrollLeft));
            }),
            (e.prototype.scrollToInProgressTask = function () {
              if (this.scroll) {
                var t = this.scroll.querySelector(".roadmap-item .in-progress");
                if (t) {
                  var e = t.getBoundingClientRect(),
                    n = e.width,
                    o = e.left;
                  (this.scroll.scrollLeft = o - (window.innerWidth - n) / 2),
                    (this.left = this.scroll.scrollLeft);
                }
              }
            }),
            e
          );
        })(a.Z),
        P = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        x = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.toggleBanner = function (t) {
                t.preventDefault(),
                  e.bannerContainer &&
                    (e.bannerContainer.classList.contains("open")
                      ? (e.bannerContainer.classList.remove("open"),
                        e.bannerContainer.classList.add("closed"))
                      : e.bannerContainer.classList.contains("closed") &&
                        (e.bannerContainer.classList.remove("closed"),
                        e.bannerContainer.classList.add("open")));
              }),
              (e.toggler = document.getElementById("token-banner-toggle")),
              (e.bannerContainer =
                document.getElementById("token-banner-fixed")),
              e.init(),
              e
            );
          }
          return (
            P(e, t),
            (e.prototype.init = function () {
              var t;
              null === (t = this.toggler) ||
                void 0 === t ||
                t.addEventListener("click", this.toggleBanner);
            }),
            e
          );
        })(a.Z),
        T = (n(8674), n(4431)),
        j = n.n(T),
        C = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        I = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var o,
            r,
            i = n.call(t),
            c = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
              c.push(o.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          return c;
        },
        B = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.elements = { totalSupply: null, burnt: null }),
              (e.divider = "1000000000000000000"),
              (e.gasDivider = "1000000000"),
              (e.key = "tokenStats"),
              (e.data = { totalSupply: "", burnt: "" }),
              (e.fetchData = function () {
                fetch("https://api.metahero.io/token/summary")
                  .then(function (t) {
                    return t.json();
                  })
                  .then(e.precessData);
              }),
              (e.precessData = function (t) {
                (e.data = {
                  totalSupply: e.parseValue(t.totalSupply, e.divider),
                  burnt: e.parseValue(t.totalBurned, e.divider),
                }),
                  e.setLocalData(e.data),
                  e.rerenderItems();
              }),
              (e.getLocalData = function () {
                try {
                  return JSON.parse(localStorage.getItem(e.key) || "undefined");
                } catch (t) {
                  return;
                }
              }),
              (e.setLocalData = function (t) {
                try {
                  localStorage.setItem(e.key, JSON.stringify(t));
                } catch (t) {}
              }),
              (e.rerenderItems = function () {
                Object.entries(e.data).forEach(function (t) {
                  var n = I(t, 2),
                    o = n[0],
                    r = n[1];
                  e.elements[o] && (e.elements[o].innerText = r);
                });
              }),
              (e.parseValue = function (t, e) {
                return new (j())(t).div(new (j())(e)).toFormat(0);
              }),
              (e.elements = {
                totalSupply: document.querySelector(".stats-value.totalSupply"),
                burnt: document.querySelector(".stats-value.burnt"),
              }),
              e.init(),
              e.fetchData(),
              e
            );
          }
          return (
            C(e, t),
            (e.prototype.init = function () {
              var t = this.getLocalData();
              t && (this.data = t), this.rerenderItems();
            }),
            e
          );
        })(a.Z),
        D = n(6808),
        A = n.n(D),
        q = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        M = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.cookieKey = "cookieAccept"),
              (e.closeBanner = function () {
                e.banner &&
                  (e.banner.classList.remove("open"),
                  A().set(e.cookieKey, "1"));
              }),
              (e.banner = document.getElementById("cookies")),
              (e.close = document.getElementById("cookie-close")),
              e.init(),
              e
            );
          }
          return (
            q(e, t),
            (e.prototype.init = function () {
              var t = Boolean(A().get(this.cookieKey));
              this.banner && !t && this.banner.classList.add("open"),
                this.close &&
                  this.close.addEventListener("click", this.closeBanner);
            }),
            e
          );
        })(a.Z),
        F = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function o() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        Z = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.onClick = function (t) {
                t.target.classList.toggle("muted"),
                  (e.player.muted = !e.player.muted);
              }),
              (e.player = document.getElementById("hero-video-player")),
              e.addEvent(
                e.querySelectorAll("#hero-video-mute-btn"),
                "click",
                e.onClick
              ),
              e
            );
          }
          return F(e, t), e;
        })(a.Z),
        N = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var o,
            r,
            i = n.call(t),
            c = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
              c.push(o.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          return c;
        },
        H = function (t, e) {
          for (var n = 0, o = e.length, r = t.length; n < o; n++, r++)
            t[r] = e[n];
          return t;
        };
      (r = document.querySelectorAll("[id^=join-counter]")),
        new s(),
        new g(),
        new Z(),
        new p(),
        new S(),
        new O(),
        H([], N(r)).forEach(function (t) {
          new w(t.id);
        }),
        new v(),
        new k(),
        new h(),
        new x(),
        new B(),
        new M(),
        c().init();
    },
    482: function (t, e, n) {
      n(2526),
        n(1817),
        n(1539),
        n(2165),
        n(6992),
        n(8783),
        n(3948),
        n(7327),
        n(1249);
      var o = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var o,
            r,
            i = n.call(t),
            c = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; )
              c.push(o.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          return c;
        },
        r = function (t, e) {
          for (var n = 0, o = e.length, r = t.length; n < o; n++, r++)
            t[r] = e[n];
          return t;
        },
        i = (function () {
          function t() {}
          return (
            (t.prototype.querySelectorAll = function (t, e) {
              return (
                void 0 === e && (e = document),
                r([], o(e.querySelectorAll(t))).filter(function (t) {
                  return Boolean(t);
                })
              );
            }),
            (t.prototype.addEvent = function (t, e, n) {
              t.map(function (t) {
                return t.addEventListener(e, n);
              });
            }),
            t
          );
        })();
      e.Z = i;
    },
  },
  function (t) {
    t.O(0, [772, 592], function () {
      return (e = 3924), t((t.s = e));
      var e;
    });
    t.O();
  },
]);
