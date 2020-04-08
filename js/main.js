"use strict";

!(function (t) {
  var i = {},
    n = {
      2: 0
    };
  function o(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = {
      i: e,
      l: !1,
      exports: {}
    });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  // console.dir(t[27]);
  // console.log(t.length);
  (o.m = t), (o.c = i), (o.p = "//an.yandex.ru/partner-code-bundles/6187/"), o((o.s = 27));
  // (o.m = t), (o.c = i), (o.p = "//an.yandex.ru/partner-code-bundles/6187/"), o((o.s = 271));
})([
  function (t, e, i) {
    "use strict";
    t.exports = i(351);
  },
  function (t, e, i) {
    "use strict";
    var n = i(55),
      o = i(2),
      r = i(0),
      a = i(49),
      s = i(199),
      l = i(200),
      p = i(108),
      c = r.createComponent(
        [a, l],
        {
          encodeStyles: null,
          onInit: function () {
            (this.b_ = s(this.name)), (this.mod = this.props.mod || this.mod);
            var t = this.getContextComponent();
            this.encodeStyles = Boolean((t && t.encodeStyles) || this.props.encodeStyles);
          },
          unmount: function () {
            this.unbindAll(), this.__base();
          },
          pushStyles: function (t, e, i) {
            p.push(t, e, i);
          },
          render: function () {
            var t = this._render(this.b_, this.props, this.__self);
            return (this.rootComponent = t), t;
          },
          _render: function () {
            return this.getChildren();
          },
          getElement: function () {
            return this.rootComponent.getElement();
          },
          bind: function (t, e, i, n) {
            this._domListeners || (this._domListeners = []);
            var r = o.domEvent.on(t, e, i, this, n);
            return (
              this._domListeners.push({
                eventType: e,
                fn: i,
                descriptor: r
              }),
              r
            );
          },
          unbindAll: function () {
            this._domListeners &&
              (o.each(this._domListeners, function (t) {
                o.domEvent.un(t.descriptor);
              }),
              delete this._domListeners);
          },
          setMod: function (t) {
            this.rootComponent.addClass(this.b_(t));
          },
          delMod: function (t) {
            this.rootComponent.removeClass(this.b_(t));
          },
          addClass: function (t) {
            this.rootComponent.addClass(t);
          },
          removeClass: function (t) {
            this.rootComponent.removeClass(t);
          }
        },
        {
          HTML: n.Html,
          Container: r.components.container,
          Element: r.components.element,
          Link: i(12)
        }
      );
    t.exports = c;
  },
  function (t, e, i) {
    "use strict";
    var n = i(31),
      o = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e["default"] = t), e;
      })(i(4));
    var r = i(34),
      a = r.extend(r, {
        Queue: i(248),
        browser: o,
        Color: n.Color,
        base64: i(70),
        dom: i(32),
        domEvent: i(41),
        animate: i(194),
        warning: i(240),
        HoverChecker: i(349),
        elementSize: i(159)
      });
    t.exports = a;
  },
  function (t, e, i) {
    "use strict";
    var n = i(8),
      o = i(79);
    function r() {}
    function a(t) {
      return r;
    }
    o.log = n.logger.warn;
    var s = {
      log: a(),
      warn: a(),
      error: a(),
      remoteLog: n.logger.info,
      remoteLogString: n.logger.info,
      isolate: function (t) {
        return o("isolate", t || r, this, function (t) {
          t.preventProtect = !0;
        });
      },
      protect: o,
      setProtectedTimeout: o.setTimeout
    };
    t.exports = s;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(297),
      o = i(298),
      r = i(300),
      a = i(122),
      s = i(301),
      l = i(303),
      p = i(304),
      c = i(75),
      d = i(305),
      u = i(306),
      m = i(307),
      f = i(308),
      h = i(175),
      g = i(309),
      _ = i(76),
      y = i(179),
      b = i(178),
      v = i(310),
      x = i(13),
      w = window,
      k = w.document.documentMode;
    (e.isQuirks = "BackCompat" === w.document.compatMode),
      (e.isOpera = u.isOpera(w)),
      (e.isOperaMini = m.isOperaMini(w)),
      (e.ieVersion = o.getInternetExplorerVersion(w)),
      (e.isIE10 = 10 === e.ieVersion),
      (e.isIE11 = 11 === e.ieVersion),
      (e.isIE = e.ieVersion > 0),
      (e.isIEQuirks = e.isIE && (5 === k || (!e.isIE10 && e.isQuirks))),
      (e.isEdge = (e.ieVersion && e.ieVersion > 11) || !1),
      (e.isSafari = h.isSafari(w)),
      (e.safariVersion = v.getSafariVersion(w)),
      (e.isFirefox = l.isFirefox(w)),
      (e.isChrome = s.getIsChrome(w)),
      (e.isYaBrowser = b.getIsYaBrowser(w)),
      (e.isUCBrowser = _.isUCBrowser(w)),
      (e.isIOS = c.getIsIOS(w)),
      (e.iOSVersion = r.getIOSVersion(w)),
      (e.isAndroid = a.getIfIsAndroid(w)),
      (e.androidVersion = n.getAndroidVersion(w)),
      (e.isWindowsPhone = y.isWindowsPhone(w)),
      (e.isMobile = d.isMobile(w)),
      (e.isPhone = f.isPhone(w)),
      (e.isHDPIScreen = p.isHDPIScreen(w)),
      (e.flashVer = [0, 0, 0]);
    var C = i(180);
    (e.testProperty = function (t, e) {
      void 0 === e && (e = C.cssPrefixes);
      var i = new Image();
      t.split(":")[1] || (t += ":none");
      for (var n = 0; n < e.length; n++)
        if (((i.style.cssText = e[n] + t), i.style.length)) return e[n];
      return null;
    }),
      (e.getBrowserName = function () {
        return (
          (e.isIE ? "msie" : e.isFirefox && "firefox") ||
          (e.isSafari && "safari") ||
          (e.isOpera && "opera") ||
          (e.isYaBrowser && "yabrowser") ||
          (e.isChrome && "chrome") ||
          (e.isUCBrowser && "ucbrowser") ||
          "unknown"
        );
      }),
      (e.getDeviceName = function () {
        return (e.isPhone ? "phone" : e.isMobile && "tablet") || "desktop";
      }),
      (e.support = {
        cssFlex: null !== e.testProperty("flex"),
        cssTransformPrefix: e.testProperty("transform"),
        cssTransform: null !== e.testProperty("transform"),
        cssTransition: null !== e.testProperty("transition"),
        cssFilterBlur: null !== e.testProperty("filter:blur(2px)"),
        touch: g.isTouchDevice(w),
        postMessage:
          x.isFunction(w.postMessage) && !(e.isIE || e.isIE11 || e.isEdge || e.isOperaMini),
        longUrls: !(e.isIE || e.isIE11 || e.isOperaMini)
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.map = function (t, e, i) {
        for (var n = new Array(t.length), o = 0; o < t.length; o++) n[o] = e.call(i, t[o], o, t);
        return n;
      });
  },
  function (t, e, i) {
    "use strict";
    var n = i(78),
      o = n.BorderTypes,
      r = n.BlockTypes,
      a = i(322),
      s = Boolean(a.Ya.relHostname),
      l = {
        defaultReloadTimeout: 30,
        MAX_ADS_LIMIT: 9,
        REFRESH_VIEWPORT_VISIBLE_PART: 0.5,
        MIN_AREA_BIG_BLOCK: 242500,
        VISIBLE_PORTION_BIG_BLOCK: 0.3,
        VISIBLE_PORTION_BLOCK_DIRECT: 0,
        VISIBLE_PORTION_BLOCK: 0.5,
        VISIBLE_PORTION_BLOCK_DIRECT_COMMON: 0.5,
        IS_REL_HOSTNAME: s
      },
      p = s ? "//an.webvisor.org" : "//an.yandex.ru";
    (l.urls = {
      anHostname: p,
      anOriginHostname: "//an.yandex.ru",
      direct: "https:" + p + "/page/",
      directSettings: "https:" + p + "/blkset/",
      rtb: "https:" + p + "/meta/",
      favicon: "https://favicon.yandex.net/favicon/",
      jserrlog: "https:" + p + "/jserr/1"
    }),
      (l.BlockTypes = r),
      (l.BorderTypes = o),
      (l.Products = {
        DIRECT: "direct",
        PREMIUM: "premium",
        STRIPE: "stripe",
        RTB: "rtb",
        INTERNAL: "internal"
      }),
      (l.Layouts = {
        WIDE: 0,
        MEDIUM: 1,
        NARROW: 2,
        COMPATIBLE: 3,
        WIDE_WIDTH: 300,
        MEDIUM_WIDTH: 240,
        COMPATIBLE_WIDTH: -1
      }),
      (l.RtbIframe = {}),
      (l.RtbIframe.TAG =
        '<iframe id="${id}" width="${width}" height="${height}" ${sandbox} scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>'),
      (l.RtbIframe.CONTENT =
        '<!DOCTYPE html><html><head><meta charset="utf-8"/>${head}</head><body>${body}<script type="text/javascript" nonce="\\${nonce}">document.close();</script>${afterAll}</body></html>'),
      (l.longWarningLength = 40),
      (t.exports = l);
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(365),
      o = i(366);
    e["default"] = function (t, e, i) {
      return n["default"](o["default"], t, e, i);
    };
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(272);
    e.logger = n.logger;
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.filter = function (t, e, i) {
        for (var n = [], o = 0; o < t.length; o++) {
          var r = t[o];
          e.call(i, r, o, t) && n.push(r);
        }
        return n;
      });
  },
  function (t, e, i) {
    "use strict";
    t.exports = {
      objectCreate: i(186),
      augment: i(107),
      extend: i(15),
      isArray: i(106),
      isObject: i(27),
      isFunction: i(18),
      isString: i(73),
      getNativeMethod: i(187),
      checkNativeCode: i(188),
      each: i(33),
      forOwn: i(338),
      filter: i(124),
      map: i(231),
      keys: i(339),
      indexOf: i(42),
      genRnd: i(247),
      camelize: i(340),
      isInRange: i(144),
      throttle: i(239),
      bind: i(157)
    };
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.forEach = function (t, e, i) {
        for (var n = 0; n < t.length; n++) e.call(i, t[n], n, t);
      });
  },
  function (t, e, i) {
    "use strict";
    var n = i(93),
      o = i(0),
      r = i(200),
      a = i(15),
      s = o.createComponent([o.components.element, r], {
        initProps: function (t) {
          return (
            (t.tag = t.tag || "a"), (this.disabled = t.disabled || "a" !== t.tag), this.__base(t)
          );
        },
        beforeRender: function (t) {
          (this.parentLink = this.findParentLink()),
            (this.tag = this.disabled || this.parentLink ? "yatag" : "a"),
            (this.originProps = this.props),
            (this.props = this.extractAttributes()),
            this.__base(t);
        },
        findParentLink: function () {
          var t = this.getParentComponent(),
            e = null;
          do {
            t instanceof s && (e = t), t && (t = t.getParentComponent());
          } while (null === e && t);
          return null !== e && e.disabled ? null : e;
        },
        extractAttributes: function () {
          var t = this.originProps,
            e = (0, n.classNamesFactory)(t.classNames),
            i = a(
              {
                target: t.target || "_blank",
                class: e(t["class"], e(this.disabled ? "::disabled" : "::active"))
              },
              t
            );
          return (
            delete i.type,
            delete i.disabled,
            delete i.classNames,
            (this.disabled || this.parentLink) && (delete i.target, delete i.href),
            i
          );
        },
        onMount: function () {
          this.disabled ||
            (this.bind("click", this.onClick, this),
            this.bind("mouseenter", this.onMouseEnter, this),
            this.bind("mouseleave", this.onMouseLeave, this));
        },
        onMouseEnter: function () {
          this.setHref(this.getLink());
        },
        onMouseLeave: function () {
          this.setHref(null);
        },
        setHref: function (t) {
          if (this.parentLink) this.parentLink.setHref(t);
          else {
            var e = t || this.getLink();
            this.setAttr("href", e);
          }
        },
        onClick: function (t) {
          this.parentLink || this.props.href || t.preventDefault(),
            (t.targetComponent = this),
            this.fireEvent("click:link", t, this.props.type),
            this.props.href && !t.defaultPrevented && this.fireEvent("open:link", t);
        },
        getLink: function () {
          return this.originProps.href || "";
        }
      });
    t.exports = s;
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.isFunction = function (t) {
        return "[object Function]" === {}.toString.call(t);
      });
  },
  function (t, e, i) {
    "use strict";
    var n =
      Object.assign ||
      function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
          for (var o in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      };
    e.__esModule = !0;
    var o,
      r,
      a = i(26),
      s = {};
    !(function (t) {
      (t["RTB"] = "R"),
        (t["ComponentDirectSync"] = "DNS"),
        (t["ComponentDirectAsync"] = "DNA"),
        (t["OldDirect"] = "DO");
    })((o = e.BlockRenderProducts || (e.BlockRenderProducts = {}))),
      (function (t) {
        (t["AdvManagerInit"] = "010"),
          (t["RtbRender"] = "020"),
          (t["RtbQueueTime"] = "030"),
          (t["RtbLoadDone"] = "040"),
          (t["RtbDataParsed"] = "050"),
          (t["RtbManagerStart"] = "060"),
          (t["RtbManagerBeforeRenderRtb"] = "070"),
          (t["RtbManagerDataPreparedRtb"] = "080"),
          (t["RtbBlockRenderInit"] = "090"),
          (t["RtbBlockRenderStart"] = "100"),
          (t["RtbBlockCreateWrapper"] = "110"),
          (t["RtbBlockRenderAd"] = "120"),
          (t["RtbBlockAfterRender"] = "130"),
          (t["RtbManagerBlockRenderedRtb"] = "140"),
          (t["RtbManagerBeforeRenderDirect"] = "070"),
          (t["DirectManagerStart"] = "080"),
          (t["DirectManagerInitEnd"] = "090"),
          (t["DirectManagerChooseBlockType"] = "100"),
          (t["ComponentBlockInit"] = "110"),
          (t["ComponentBlockBeforeRender"] = "120"),
          (t["ComponentBlockReadyToRender"] = "130"),
          (t["ComponentBlockRenderComplete"] = "140"),
          (t["ComponentBlockMounted"] = "150"),
          (t["ComponentBlockDisplayed"] = "151"),
          (t["ComponentBlockReady"] = "153"),
          (t["DirectManagerBlockRendered"] = "160");
      })((r = e.BlockRenderSteps || (e.BlockRenderSteps = {})));
    var l,
      p,
      c,
      d = (((l = {})[r.AdvManagerInit] = 1), (l[r.RtbRender] = 1), (l[r.RtbQueueTime] = 1), l),
      u = (((p = {})[r.RtbLoadDone] = 1), p),
      m =
        (((c = {})[r.RtbDataParsed] = 1),
        (c[r.RtbManagerStart] = 1),
        (c[r.RtbManagerBeforeRenderRtb] = 1),
        (c[r.RtbManagerDataPreparedRtb] = 1),
        (c[r.RtbBlockRenderInit] = 1),
        (c[r.RtbBlockRenderStart] = 1),
        (c[r.RtbBlockCreateWrapper] = 1),
        (c[r.RtbBlockRenderAd] = 1),
        (c[r.RtbBlockAfterRender] = 1),
        (c[r.RtbManagerBlockRenderedRtb] = 1),
        (c[r.RtbManagerBeforeRenderDirect] = 1),
        (c[r.DirectManagerStart] = 1),
        (c[r.DirectManagerInitEnd] = 1),
        (c[r.DirectManagerChooseBlockType] = 1),
        (c[r.ComponentBlockInit] = 1),
        (c[r.ComponentBlockBeforeRender] = 1),
        (c[r.ComponentBlockReadyToRender] = 1),
        (c[r.ComponentBlockRenderComplete] = 1),
        (c[r.DirectManagerBlockRendered] = 1),
        c);
    (e.logRenderLabel = function (t, e) {
      s[t] ||
        (s[t] = {
          timing: {},
          data: {},
          canLog: !0
        }),
        (s[t].timing[e] = Date.now());
    }),
      (e.stopLoggingTime = function (t) {
        s[t] && (s[t].canLog = !1);
      }),
      (e.setBlockData = function (t, e) {
        s[t] ||
          (s[t] = {
            timing: {},
            data: {
              oldBlock: !1
            },
            canLog: !0
          }),
          (s[t].data = n({}, s[t].data, e));
      }),
      (e.getJsTracerObject = function (t) {
        var e;
        return t in s && "110" in (e = s[t]).timing && e.canLog
          ? {
              tags: (function (t) {
                var e,
                  i = {
                    totalInit: 0,
                    totalData: 0,
                    totalRender: 0,
                    total: 0
                  };
                if (t.data.product === o.ComponentDirectSync) {
                  var n = t.timing["100"];
                  (t.timing["100"] = t.timing["110"]), (t.timing["110"] = n);
                }
                for (
                  var r = a.getObjectKeys(t.timing).sort(function (t, e) {
                      return t - e;
                    }),
                    s = 0;
                  s < r.length;
                  s++
                ) {
                  var l = t.timing[r[s]] || 0;
                  if (e) {
                    var p = l - e;
                    (e = l),
                      (i[r[s]] = p),
                      r[s] in d
                        ? (i.totalInit += p)
                        : r[s] in u
                        ? (i.totalData += p)
                        : r[s] in m && (i.totalRender += p),
                      (i.total += p);
                  } else e = l;
                }
                return i;
              })(s[t]),
              data: s[t].data
            }
          : null;
      });
  },
  function (t, e, i) {
    "use strict";
    t.exports = function (t) {
      for (var e, i = 1, n = arguments.length; i < n; i++)
        if ((e = arguments[i])) for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
      return t;
    };
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.some = function (t, e) {
        for (var i = 0; i < t.length; i++) if (e(t[i], i, t)) return !0;
        return !1;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(9);
    (e.getLinearFunction = function (t, e, i, n) {
      var o = (e - n) / (t - i),
        r = e - o * t;
      return function (t) {
        return o * t + r;
      };
    }),
      (e.getLimitFunction = function (t, e) {
        return function (i) {
          return Math.max(t, Math.min(i, e));
        };
      }),
      (e.getLimitedLinearFunction = function (t, i, n, o) {
        var r = e.getLinearFunction(t, i, n, o),
          a = e.getLimitFunction(i, o);
        return function (t) {
          var e = r(t);
          return a(e);
        };
      }),
      (e.getItemWithMaxWeight = function (t, e) {
        for (var i, n = -1 / 0, o = 0, r = t; o < r.length; o++) {
          var a = r[o],
            s = e(a);
          s >= n && ((n = s), (i = a));
        }
        return i;
      }),
      (e.getBestCoverElement = function (t, i) {
        var o = n.filter(i, function (e) {
            return e.height >= t.height && e.width >= t.width;
          }),
          r = t.width / t.height,
          a = e.getItemWithMaxWeight(o, function (t) {
            var e = t.width * t.height,
              i = t.width / t.height;
            return -e * Math.max(r / i, i / r);
          });
        return (
          a ||
          a ||
          e.getItemWithMaxWeight(i, function (e) {
            return Math.min(e.width, t.width) * Math.min(e.height, t.height);
          })
        );
      });
  },
  function (t, e, i) {
    "use strict";
    t.exports = i(13).isFunction;
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.experimentIds = {
        media240x400: {
          OLD_240x400_CLICK_ENABLED: "OLD_240x400_CLICK_ENABLED",
          OLD_240x400_CLICK_DISABLED: "OLD_240x400_CLICK_DISABLED",
          MEDIA_240x400_BUTTON_ENABLED: "MEDIA_240x400_BUTTON_ENABLED",
          MEDIA_240x400_BUTTON_DISABLED: "MEDIA_240x400_BUTTON_DISABLED",
          MEDIA_240x400_FAST_ANIMATION_ENABLED: "MEDIA_240x400_FAST_ANIMATION_ENABLED",
          MEDIA_240x400_FAST_ANIMATION_DISABLED: "MEDIA_240x400_FAST_ANIMATION_DISABLED",
          MEDIA_240x400_IGNORE_SETTINGS_ENABLED: "MEDIA_240x400_IGNORE_SETTINGS_ENABLED",
          MEDIA_240x400_IGNORE_SETTINGS_DISABLED: "MEDIA_240x400_IGNORE_SETTINGS_DISABLED",
          MEDIA_240x400_SHOW_ENABLED: "MEDIA_240x400_SHOW_ENABLED",
          MEDIA_240x400_SHOW_DISABLED: "MEDIA_240x400_SHOW_DISABLED"
        },
        r320x50: {
          ENABLED: "R_320x50_ENABLED",
          DISABLED: "R_320x50_DISABLED",
          HSL_ENABLED: "R_320x50_HSL_ENABLED",
          HSL_DISABLED: "R_320x50_HSL_DISABLED"
        },
        vertical: {
          VERTICAL_DESKTOP_ENABLED: "VERTICAL_DESKTOP_ENABLED",
          VERTICAL_DESKTOP_DISABLED: "VERTICAL_DESKTOP_DISABLED",
          VERTICAL_MOBILE_ENABLED: "VERTICAL_MOBILE_ENABLED",
          VERTICAL_MOBILE_DISABLED: "VERTICAL_MOBILE_DISABLED"
        },
        rmp: {
          RMP_CONTROL: "RMP_CONTROL",
          RMP_ABILITIES: "RMP_ABILITIES"
        },
        stub: {
          STUB_CONTROL: "STUB_CONTROL",
          STUB_DOMAIN: "STUB_DOMAIN",
          STUB_WITH_SCALE: "STUB_WITH_SCALE",
          STUB_WITHOUT_SCALE: "STUB_WITHOUT_SCALE"
        },
        storeButton: {
          ENABLED: "STORE_BUTTON_ENABLED",
          DISABLED: "STORE_BUTTON_DISABLED"
        },
        ssSkipToken: {
          ENABLED: "SS_SKIP_TOKEN_ENABLED",
          WIDE_LOG: "SS_SKIP_TOKEN_WIDE_LOG",
          CLIENT: "SS_SKIP_TOKEN_CLIENT",
          SERVER_MANUAL: "SS_SKIP_TOKEN_SERVER_MANUAL",
          SERVER_AUTO: "SS_SKIP_TOKEN_SERVER_AUTO"
        },
        scrollSlider: {
          ENABLED: "SCROLL_SLIDER_ENABLED",
          DISABLED: "SCROLL_SLIDER_DISABLED"
        },
        horizontalPhoneButton: {
          ENABLED: "HORIZONTAL_PHONE_ENABLED",
          DISABLED: "HORIZONTAL_PHONE_DISABLED"
        },
        intersectionVisibility: {
          FIX: "INTERSECTION_VISIBILITY_ENABLED"
        },
        hitFeatures: {
          ENABLED: "HIT_FEATURES_ENABLED"
        }
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(9),
      o = i(21),
      r = i(5),
      a = i(11),
      s = i(176),
      l = i(16),
      p = i(80),
      c = i(359);
    (e.hostsMap = {
      yandex: /(?:(tv|news)\.yandex(\.\w+)+)|(?:yandex(\.\w+)+\/pogoda)/i,
      vk: /vk\.com/i,
      ok: /ok\.ru/i,
      avito: /(?:avito\.dev)|(?:avito\.ru)/i,
      rambler: /(?:rambler\.ru)|(?:autorambler\.ru)/i,
      mail: /(?:devmail\.ru)|(?:mail\.ru)/i,
      lenta: /lenta\.ru/i,
      gazeta: /gazeta\.ru/i,
      gismeteo: /gismeteo\.ru/i,
      rbc: /rbc(\.\w+)/i,
      secretmag: /secretmag\.ru/i,
      rg: /rg\.ru/i,
      eda: /eda.ru/i,
      nightparty: /nightparty\.ru/i,
      afisha: /afisha\.ru/i,
      motor: /motor\.ru/i,
      moslenta: /moslenta\.ru/i,
      championat: /championat\.com/i,
      letidor: /letidor\.ru/i,
      quto: /quto\.ru/i,
      wmj: /wmj\.ru/i,
      indicator: /indicator\.ru/i,
      ferra: /ferra\.ru/i,
      rns: /rns\.online/i,
      passion: /passion\.ru/i,
      livejournal: /livejournal\.com/i
    }),
      (e.pageIdList = []),
      (e.blockIdList = []);
    var d,
      u,
      m = Object.keys(e.hostsMap);
    (e.hosts =
      ((d = m),
      (u = {}),
      a.forEach(d, function (t) {
        u[t] = t;
      }),
      u)),
      (e.HOSTS_ALL = "ALL"),
      (e.isHostIgnored = function (t) {
        var i = void 0 === t ? {} : t,
          a = i.host,
          c = void 0 === a ? document.location.hostname : a,
          d = i.list,
          u = void 0 === d ? m : d,
          f = i.exclude,
          h = void 0 === f ? [] : f,
          g = i.usedHostMap,
          _ = void 0 === g ? e.hostsMap : g;
        if (p.isTurboPage(window)) {
          var y = s.parseQueryString(s.parseUrl(document.location.href).search);
          c = y.text.toString() || "";
        }
        var b,
          v,
          x = u === e.HOSTS_ALL ? m : u,
          w =
            ((b = x),
            (v = h),
            n.filter(b, function (t) {
              return -1 === o.indexOf(v, t);
            })),
          k = r.map(w, function (t) {
            return _[t];
          });
        return l.some(k, function (t) {
          return !0 === t.test(c);
        });
      }),
      (e.isPageIgnored = function (t) {
        var i = void 0 === t ? {} : t,
          n = i.pageId,
          o = i.list,
          r = void 0 === o ? e.pageIdList : o,
          a = i.include,
          s = void 0 === a ? [] : a,
          l = i.exclude,
          p = void 0 === l ? [] : l;
        return (c.includes(r, n) || c.includes(s, n)) && !c.includes(p, n);
      }),
      (e.isBlockIgnored = function (t) {
        var i = void 0 === t ? {} : t,
          n = i.blockId,
          o = i.list,
          r = void 0 === o ? e.blockIdList : o,
          a = i.include,
          s = void 0 === a ? [] : a,
          l = i.exclude,
          p = void 0 === l ? [] : l;
        return (c.includes(r, n) || c.includes(s, n)) && !c.includes(p, n);
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.indexOf = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var n = i; n < t.length; n++) if (t[n] === e) return n;
        return -1;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(51),
      o = i(17),
      r = i(81);
    (e.MIN_IMAGE_RATIO = 1),
      (e.MAX_IMAGE_RATIO = 16 / 9),
      (e.coerceImageRatio = o.getLimitFunction(e.MIN_IMAGE_RATIO, e.MAX_IMAGE_RATIO)),
      (e.createSizeCoercer = function (t) {
        return function (e) {
          var i = e.width,
            n = e.height;
          return (
            (i = o.getLimitFunction(t.width.min, t.width.max)(i)),
            (n = o.getLimitFunction(i / t.ratio.max, i / t.ratio.min)(n)),
            {
              width: i,
              height: (n = o.getLimitFunction(t.height.min, t.height.max)(n))
            }
          );
        };
      }),
      (e.calcAspectRatio = function (t) {
        return t.width / t.height;
      }),
      (e.calcRatio = function (t, e) {
        var i = t / e;
        return i < 1 ? 1 / i : i;
      }),
      (e.selectMostFit = function (t, i) {
        var a = o.getLimitFunction(1, 1 / 0);
        t = {
          width: a(t.width),
          height: a(t.height)
        };
        var s = e.calcAspectRatio(t),
          l = r.reduce(
            i,
            function (i, o) {
              var r = o.coerceSize(t),
                a = e.calcAspectRatio(r),
                l = e.calcRatio(a, s),
                p = {
                  item: o,
                  value: [Math.abs(t.width - r.width), l]
                };
              return n.compareArrays(p.value, i.value) < 0 ? p : i;
            },
            {
              item: void 0,
              value: [1 / 0]
            }
          );
        return l && l.item;
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.getBoundingClientRect = function (t) {
        try {
          var e = t.getBoundingClientRect(),
            i = e.left,
            n = e.right,
            o = e.top,
            r = e.bottom;
          return {
            left: i,
            right: n,
            top: o,
            bottom: r,
            width: n - i,
            height: r - o
          };
        } catch (t) {
          return {
            left: 0,
            width: 0,
            top: 0,
            height: 0,
            right: 0,
            bottom: 0
          };
        }
      });
  },
  function (t, e, i) {
    "use strict";
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e["default"] = t), e;
      })(i(4));
    var r = i(323),
      a = i(6),
      s = o.support.longUrls ? 3e3 : 2040;
    function l(t) {
      var e = [];
      for (var i in t)
        t.hasOwnProperty(i) &&
          "" !== t[i] &&
          void 0 !== t[i] &&
          null !== t[i] &&
          e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
      return e.join("&");
    }
    function p(t, e, i) {
      return "string" != typeof t
        ? t
        : (e && 0 !== t.indexOf(e) && (t = e + t), i && t.slice(-i.length) !== i && (t += i), t);
    }
    function c(t, e, i) {
      return "string" != typeof t
        ? t
        : (e && 0 === t.indexOf(e) && (t = t.replace(e, "")),
          i && t.slice(-i.length) === i && (t = t.slice(0, -i.length)),
          t);
    }
    function d(t) {
      (t = t || {}),
        (this._host = t.host || ""),
        (this._path = t.path || ""),
        (this._params = ""),
        t.params && this.appendParams(t.params);
    }
    (d.prototype = {
      clone: function () {
        return new d({
          host: this._host,
          path: this._path,
          params: this._params
        });
      },
      appendGrab: function (t, e) {
        var i = Math.min(2048, s - this._getCurrentLength()),
          n = this;
        r(i, t, function (t) {
          var i = "grab=" + t;
          n.appendParams(i), e();
        });
      },
      appendEmptyGrab: function () {
        this.appendParams("grab=");
      },
      _getCurrentLength: function () {
        return this._getUrl().length + 3;
      },
      appendParams: function (t) {
        return (
          "" !== this._params && (this._params = p(this._params, "", "&")),
          "string" == typeof t
            ? (this._params += c(c(t, "?", ""), "&", ""))
            : "object" === (void 0 === t ? "undefined" : n(t)) && (this._params += l(t)),
          this
        );
      },
      _getUrl: function () {
        var t = this._host;
        if ((this._path && ((t = p(t, "", "/")), (t += c(this._path, "/"))), "" !== this._params)) {
          var e = -1 === t.indexOf("?") ? "?" : "&";
          t += p(this._params, e, "");
        }
        return t;
      },
      getUrl: function () {
        var t = this._getUrl();
        return a.IS_REL_HOSTNAME ? t.replace(a.urls.anOriginHostname, a.urls.anHostname) : t;
      }
    }),
      (d.toQueryParams = l),
      (t.exports = d);
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(381),
      o = i(19),
      r = i(46),
      a = i(383),
      s = "__longExperiment",
      l = i(9),
      p = document.location.host,
      c =
        l.filter(a.ignoreHosts, function (t) {
          return t.test(p);
        }).length > 0,
      d = /:\/\/[^?\/]*(avito|brozen[-\w+]*\.yandex\.ru|netbynet\.wi-fi\.ru)/.test(location.href),
      u = [
        [
          {
            id: o.experimentIds.r320x50.ENABLED,
            percent: 100
          },
          {
            id: o.experimentIds.r320x50.DISABLED,
            percent: 0
          }
        ],
        [
          {
            id: o.experimentIds.r320x50.HSL_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.r320x50.HSL_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.media240x400.OLD_240x400_CLICK_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.media240x400.OLD_240x400_CLICK_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_SHOW_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_SHOW_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_BUTTON_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_BUTTON_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.rmp.RMP_CONTROL,
            percent: 50
          },
          {
            id: o.experimentIds.rmp.RMP_ABILITIES,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.storeButton.ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.storeButton.DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.vertical.VERTICAL_DESKTOP_ENABLED,
            percent: 100
          },
          {
            id: o.experimentIds.vertical.VERTICAL_DESKTOP_DISABLED,
            percent: 0
          }
        ],
        [
          {
            id: o.experimentIds.ssSkipToken.ENABLED,
            percent: d ? 96 : 0
          },
          {
            id: o.experimentIds.ssSkipToken.WIDE_LOG,
            percent: 1
          },
          {
            id: o.experimentIds.ssSkipToken.CLIENT,
            percent: 1
          },
          {
            id: o.experimentIds.ssSkipToken.SERVER_MANUAL,
            percent: 1
          },
          {
            id: o.experimentIds.ssSkipToken.SERVER_AUTO,
            percent: 1
          }
        ],
        [
          {
            id: o.experimentIds.scrollSlider.ENABLED,
            percent: 1
          },
          {
            id: o.experimentIds.scrollSlider.DISABLED,
            percent: 1
          }
        ],
        [
          {
            id: o.experimentIds.horizontalPhoneButton.ENABLED,
            percent: 50
          },
          {
            id: o.experimentIds.horizontalPhoneButton.DISABLED,
            percent: 50
          }
        ],
        [
          {
            id: o.experimentIds.intersectionVisibility.FIX,
            percent: 10
          }
        ],
        [
          {
            id: o.experimentIds.hitFeatures.ENABLED,
            percent: 3
          }
        ]
      ];
    (e.initLongExperiment = function () {
      var t = new n.LongExperiment(u);
      r.setGlobalVariable(s, t);
    }),
      (e.isLongExperiment = function (t) {
        if (c) return !1;
        var e = r.getGlobalVariable(s);
        return !!e && e.isCurrentVersion(t);
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.getObjectKeys = function (t) {
        if ("function" == typeof Object.keys) return Object.keys(t);
        var e = [];
        for (var i in t) t.hasOwnProperty(i) && e.push(i);
        return e;
      });
  },
  function (t, e, i) {
    "use strict";
    t.exports = i(58).isObject;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n,
      o = i(315),
      r = i(317),
      a = i(121);
    e.getNativeJSON = function (t) {
      if ((void 0 === t && (t = window), void 0 !== n)) return n;
      if (t.JSON && a.checkNativeCode(t.JSON.stringify) && a.checkNativeCode(t.JSON.parse))
        return t.JSON;
      var e = o.createHiddenFriendlyIFrame(document.body);
      return (n = e.contentWindow.JSON), r.removeIframe(n), n;
    };
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(252),
      o = i(7),
      r = "RUB";
    function a(t) {
      return (
        '<span class="price_font-' +
        t +
        '">' +
        {
          RUB: "\u0440\u0443\u0431",
          BYN: "Br",
          BYR: "Br",
          KZT: "\u20b8",
          UAH: "\u20b4",
          TRY: "\u20ba",
          USD: "$",
          EUR: "\u20ac"
        }[t] +
        "</span>"
      );
    }
    (e.preparePrices = function (t) {
      var e = t.price,
        i = e.current ? parseInt(e.current, 10) : void 0,
        n = e.old ? parseInt(e.old, 10) : void 0,
        o = n ? Math.round((100 * (n - Number(i))) / n) : void 0,
        a = t.text.currency_iso_code || r;
      return (
        "RUR" === a && (a = r),
        {
          current: i,
          old: n,
          discount: o,
          currencyCode: a
        }
      );
    }),
      (e.preparePriceText = function (t) {
        return void 0 !== t.current
          ? n["default"](Math.round(t.current)) + "&nbsp;" + a(t.currencyCode)
          : "";
      }),
      (e.prepareDiscountText = function (t, e) {
        return Number(t.discount) > 5
          ? o["default"]("SMART_DISCOUNT", e) + " " + t.discount + "%!"
          : "";
      }),
      (e.prepareMarketDiscountText = function (t, e) {
        return Number(t.discount) > 5
          ? o["default"]("SMART_DISCOUNT_MARKET", e) + " " + t.discount + "%!"
          : "";
      }),
      (e.PRICE_TAG_LENGTH = a(r).length - 1);
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(37),
      o = {},
      r = i(529),
      a = n.once(function () {
        return r.keys().forEach(r);
      });
    (e.getAdvRenderer = function (t, e) {
      return a(), o[t](e);
    }),
      (e.registerAdvRenderer = function (t, e) {
        o[t] = e;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(185),
      o = i(238),
      r = i(233),
      a = i(337),
      s = i(73),
      l = i(106),
      p = i(144);
    e.createColor = function (t) {
      return new c(t);
    };
    var c = (function () {
      function t(t) {
        (this.rgba = [0, 0, 0, 1]), this.set(t);
      }
      return (
        (t.prototype.set = function (e) {
          s(e)
            ? (e = (function (t) {
                var e = d(t);
                if (e)
                  return [
                    parseInt(e.substr(1, 2), 16),
                    parseInt(e.substr(3, 2), 16),
                    parseInt(e.substr(5, 2), 16),
                    parseInt(e.substr(7, 2), 16) / 255
                  ];
                return null;
              })(e))
            : e instanceof t && (e = e.rgbaArray());
          var i = e;
          if (
            (function (t) {
              if (!t || !l(t)) return !1;
              if (!p(t.length, 3, 4)) return !1;
              for (var e = 0; e < t.length; e++) if (!m(e, t[e])) return !1;
              return !0;
            })(i)
          )
            for (var n = 0; n < i.length; n++) this.setChannel(n, i[n]);
          return this;
        }),
        (t.prototype.setChannel = function (t, e) {
          m(t, e) &&
            (t === a.RGBA_MODEL.ALPHA
              ? (this.rgba[t] = Number(e.toPrecision(2)))
              : (this.rgba[t] = e >> 0));
        }),
        (t.prototype.setAlpha = function (t) {
          return this.setChannel(a.RGBA_MODEL.ALPHA, t), this;
        }),
        (t.prototype.toString = function () {
          return 1 !== this.rgba[a.RGBA_MODEL.ALPHA] ? this.rgbaString() : this.toHexString();
        }),
        (t.prototype.toHexString = function () {
          return "#" + this.toHexArray().join("");
        }),
        (t.prototype.rgbString = function () {
          return "rgb(" + this.rgbArray().join(",") + ")";
        }),
        (t.prototype.rgbaString = function () {
          return "rgba(" + this.rgba.join(",") + ")";
        }),
        (t.prototype.toHexArray = function () {
          var t = this.rgba;
          return [u(t[a.RGBA_MODEL.RED]), u(t[a.RGBA_MODEL.GREEN]), u(t[a.RGBA_MODEL.BLUE])];
        }),
        (t.prototype.rgbArray = function () {
          var t = this.rgba;
          return [t[a.RGBA_MODEL.RED], t[a.RGBA_MODEL.GREEN], t[a.RGBA_MODEL.BLUE]];
        }),
        (t.prototype.rgbaArray = function () {
          return this.rgba.concat();
        }),
        (t.prototype.luminosity = function () {
          for (var t = this.rgba, e = [], i = 0; i < 3; i++) {
            var n = t[i] / 255;
            e[i] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        }),
        (t.prototype.contrast = function (e) {
          var i = this.luminosity(),
            n = new t(e).luminosity();
          return i > n ? (i + 0.05) / (n + 0.05) : (n + 0.05) / (i + 0.05);
        }),
        (t.prototype.brightness = function () {
          var t = this.rgba;
          return (
            (299 * t[a.RGBA_MODEL.RED] + 587 * t[a.RGBA_MODEL.GREEN] + 114 * t[a.RGBA_MODEL.BLUE]) /
            1e3
          );
        }),
        (t.prototype.isLight = function (t) {
          return this.brightness() > (t || 127);
        }),
        (t.prototype.readable = function (e) {
          return new t(this.isLight(e) ? "#000" : "#fff");
        }),
        (t.prototype.mix = function (e, i) {
          void 0 === i && (i = 0.5), (i = 1 - i);
          var n = new t(e),
            o = this.rgba,
            r = n.rgbaArray(),
            s = o[a.RGBA_MODEL.ALPHA],
            l = r[a.RGBA_MODEL.ALPHA],
            p = 2 * i - 1,
            c = s - l,
            d = ((p * c == -1 ? p : (p + c) / (1 + p * c)) + 1) / 2,
            u = 1 - d;
          return new t([
            d * o[a.RGBA_MODEL.RED] + u * r[a.RGBA_MODEL.RED],
            d * o[a.RGBA_MODEL.GREEN] + u * r[a.RGBA_MODEL.GREEN],
            d * o[a.RGBA_MODEL.BLUE] + u * r[a.RGBA_MODEL.BLUE],
            s * i + l * (1 - i)
          ]);
        }),
        (t.prototype.greyscale = function () {
          var e = this.rgba,
            i =
              0.3 * e[a.RGBA_MODEL.RED] +
              0.59 * e[a.RGBA_MODEL.GREEN] +
              0.11 * e[a.RGBA_MODEL.BLUE];
          return new t([i, i, i, e[a.RGBA_MODEL.ALPHA]]);
        }),
        (t.prototype.lighten = function (t) {
          var e = this.getHSL();
          return (e[2] += 100 * t), this.clone().setHSL(e);
        }),
        (t.prototype.darken = function (t) {
          var e = this.getHSL();
          return (e[2] -= 100 * t), this.clone().setHSL(e);
        }),
        (t.prototype.saturate = function (t) {
          var e = this.getHSL();
          return (e[1] += e[1] * t), this.clone().setHSL(e);
        }),
        (t.prototype.desaturate = function (t) {
          var e = this.getHSL();
          return (e[1] -= e[1] * t), this.clone().setHSL(e);
        }),
        (t.prototype.getHSL = function () {
          var t = this.rgba,
            e = t[0],
            i = t[1],
            n = t[2];
          return r.rgbToHsl(e, i, n);
        }),
        (t.prototype.setHSL = function (t) {
          var e = t[0],
            i = t[1],
            o = t[2];
          return this.set(n.hslToRgb(e, i, o));
        }),
        (t.prototype.getHSV = function () {
          var t = this.rgba,
            e = t[0],
            i = t[1],
            n = t[2];
          return r.rgbToHsv(e, i, n);
        }),
        (t.prototype.setHSV = function (t) {
          var e = t[0],
            i = t[1],
            n = t[2];
          return this.set(o.hsvToRgb(e, i, n));
        }),
        (t.prototype.clone = function () {
          return new t(this.rgba);
        }),
        (t.prototype.average = function () {
          return (
            (this.rgba[a.RGBA_MODEL.RED] +
              this.rgba[a.RGBA_MODEL.GREEN] +
              this.rgba[a.RGBA_MODEL.BLUE]) /
            3
          );
        }),
        t
      );
    })();
    function d(t) {
      return (
        (t = (t + "").toUpperCase().replace(/^#?/, "#")),
        /^#[0-9A-F]{8}$/.test(t)
          ? t
          : /^#[0-9A-F]{6}$/.test(t)
          ? t + "FF"
          : /^#[0-9A-F]{3}$/.test(t)
          ? t.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i, "$1$1$2$2$3$3FF")
          : /^#[0-9A-F]{4}$/.test(t)
          ? t.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i, "$1$1$2$2$3$3$4$4")
          : null
      );
    }
    function u(t) {
      var e = "0123456789ABCDEF";
      return e.charAt((t / 16) << 0) + e.charAt(t % 16);
    }
    function m(t, e) {
      return t === a.RGBA_MODEL.ALPHA ? p(e, 0, 1) : p(e, 0, 255);
    }
    (e.Color = c), (e.normalizeColorHash = d);
  },
  function (t, e, i) {
    "use strict";
    var n,
      o = i(4),
      r = i(189),
      a = i(342),
      s =
        (n = a) && n.__esModule
          ? n
          : {
              default: n
            },
      l = i(343);
    var p = i(34),
      c = i(61),
      d = i(184),
      u = i(193);
    function m() {}
    (m.addScript = d),
      p.extend(m, c),
      (m.querySelector = function (t, e) {
        if ("string" != typeof t) return t;
        var i = t.slice(0, 1),
          n = t.slice(1);
        switch (i) {
          case "#":
            return (0, r.getElementById)(n);
          case ".":
            return m.getElementsByClassName(n, e);
          default:
            return p.map((e || document).getElementsByTagName(t), function (t) {
              return t;
            });
        }
      }),
      (m.getElementsByClassName = function (t, e) {
        if (((e = e || document), p.checkNativeCode(e.getElementsByClassName)))
          return Array.prototype.slice.call((0, s["default"])(t, e));
        var i = e.getElementsByTagName("*");
        return p.filter(i, function (e) {
          return m.hasClass(e, t);
        });
      });
    var f = c.setStyle;
    (m.setImportantCssProperty = c.setStyle = function (t, e, i) {
      p.isObject(e) ? f(t, e, !0) : f(t, e, i, !0);
    }),
      (m.getWindowSize = u),
      (m.remove = function (t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }),
      (m.appendStyle = l.appendStyle),
      (m.isOverlaid = function (t) {
        var e = m.getBoundingClientRect(t);
        if (!e || !document.elementFromPoint || o.isOperaMini || !t.contains) return !1;
        var i = t.clientWidth / 2,
          n = t.clientHeight / 2,
          r = e.left + i,
          a = e.top + n,
          s = document.elementFromPoint(r, a);
        return !!s && t != s && !t.contains(s);
      }),
      (m.hasParent = function (t, e) {
        t.parentNode;
        return (
          (e = e.toUpperCase()),
          Boolean(
            m.findParent(t, function (t) {
              return t.tagName === e;
            })
          )
        );
      }),
      (m.findParent = function (t, e, i) {
        for (var n = i ? t : t.parentNode; n && 1 === n.nodeType; ) {
          if (e(n)) return n;
          n = n.parentNode;
        }
        return null;
      }),
      (m.isInViewport = function (t, e) {
        var i = m.getBoundingClientRect(t);
        if (!i || o.isOperaMini) return t.offsetWidth > 0 && t.offsetHeight > 0;
        var n = i.right - i.left,
          r = i.bottom - i.top,
          a = 0;
        if (n > 0 && r > 0) {
          var s = function (t, e, i) {
              return Math.max(Math.min(e, i) - Math.max(t, 0), 0);
            },
            l = m.getWindowSize();
          a = (s(i.left, i.right, l.width) * s(i.top, i.bottom, l.height)) / (n * r);
        }
        return a >= (e || Number.MIN_VALUE);
      }),
      (m.setIframeHTML = function (t, e) {
        t.contentWindow.document.write(e);
      }),
      (m.getWindowScroll = function () {
        return {
          left:
            void 0 === window.pageXOffset
              ? document.documentElement.scrollLeft
              : window.pageXOffset,
          top:
            void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
        };
      }),
      (m.getOffset = function (t) {
        var e = document.documentElement,
          i = m.getBoundingClientRect(t),
          n = m.getWindowScroll();
        return {
          top: i ? i.top + n.top - (e.clientTop || 0) : 0,
          left: i ? i.left + n.left - (e.clientLeft || 0) : 0
        };
      }),
      (m.getComputedFontSize = function (t) {
        try {
          var e = window.getComputedStyle(t, null).getPropertyValue("font-size");
          return Math.round(parseFloat(e));
        } catch (t) {
          return null;
        }
      }),
      (m.getBoundingClientRect = function (t) {
        try {
          var e = t.getBoundingClientRect();
          return {
            left: e.left,
            right: e.right,
            top: e.top,
            bottom: e.bottom
          };
        } catch (t) {
          return null;
        }
      }),
      (t.exports = m);
  },
  function (t, e, i) {
    "use strict";
    t.exports = i(11).forEach;
  },
  function (t, e, i) {
    "use strict";
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o = i(10),
      r = i(341),
      a = o.extend({}, o);
    (a.inArray = function (t, e, i) {
      (void 0 !== e && null !== e) || (e = "");
      for (var n = 0; n < t.length; n++) if ((i && i(e, t[n])) || e === t[n]) return n;
      return -1;
    }),
      (a.deepCopy = function (t, e) {
        if (e && "object" == (void 0 === e ? "undefined" : n(e)))
          for (var i in e)
            e.hasOwnProperty(i) &&
              ("object" != n(e[i]) || a.isArray(e[i])
                ? (t[i] = e[i])
                : ("object" != n(t[i]) && (t[i] = {}), a.deepCopy(t[i], e[i])));
        return t;
      }),
      (a.format = function (t, e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return t.toString().replace(/(^|.|\r|\n)(\$\{(.*?)\})/g, function (t, n, o, r) {
          return "\\" == n
            ? o
            : /^[0-9]+$/.test(r)
            ? n + [i[+r]].join("")
            : n + [e && e[r]].join("");
        });
      }),
      (a.downscale = function (t, e) {
        var i = Math.min(e.width / t.width, e.height / t.height, 1);
        return {
          width: Math.round((t.width *= i)),
          height: Math.round((t.height *= i))
        };
      }),
      (a.capitalize = function (t) {
        return t.charAt(0).toUpperCase() + t.substring(1, t.length);
      }),
      (a.toQueryParams = function (t) {
        var e = [];
        return (
          a.each(a.keys(t), function (i) {
            void 0 != t[i] && "" !== t[i] && e.push(i + "=" + encodeURIComponent(t[i]));
          }),
          e.join("&")
        );
      }),
      (a.addQueryParams = function (t, e) {
        if (!t)
          throw new Error(
            "util.addQueryParams: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0443\u0441\u0442\u043e\u0439 url"
          );
        var i = -1 !== (t = t.split("#"))[0].indexOf("?") ? "&" : "?";
        return [t[0], i, a.toQueryParams(e), t[1] ? "#" + t[1] : ""].join("");
      }),
      (a.camelizeKeys = function (t) {
        var e = {};
        return (
          a.forOwn(t, function (t, i) {
            e[a.camelize(i)] = t;
          }),
          e
        );
      }),
      (a.addProtocol = function (t) {
        return 0 == t.indexOf("//") && (t = window.location.protocol + t), t;
      }),
      (a.bemFormatter = function (t) {
        var e = /^([_-]\w+)/;
        return function () {
          if (!arguments.length) return t;
          var i = [];
          return (
            a.each(arguments, function (n) {
              var o = n.split(/\s+/);
              i.push(
                a
                  .map(o, function (i) {
                    return i.replace(e, function () {
                      return t + arguments[1];
                    });
                  })
                  .join(" ")
              );
            }),
            i.join(" ")
          );
        };
      }),
      (a.mixin = function (t, e) {
        o.forOwn(e, function (e, i) {
          var n,
            r,
            a = t[i];
          t[i] = o.isFunction(a)
            ? ((n = a),
              (r = e),
              function () {
                var t = this.__base;
                this.__base = n;
                var e = r.apply(this, arguments);
                return (this.__base = t), e;
              })
            : e;
        });
      }),
      (a.unique = r),
      (a.loop = function (t, e, i) {
        var n = [];
        i = i || this;
        for (var o = 0; o < t; o++) {
          var r = e.call(i, o);
          if (!r) break;
          n.push(r);
        }
        return n;
      }),
      (t.exports = a);
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(46);
    function o() {
      return n.getYa().codeVer || 0;
    }
    (e.getCodeVersion = o),
      (e.getRevisionNo = function () {
        return o() % 1024;
      });
  },
  function (t, e, i) {
    "use strict";
    var n,
      o = i(372),
      r =
        (n = o) && n.__esModule
          ? n
          : {
              default: n
            },
      a = i(50),
      s = i(4),
      l = i(202);
    var p = i(10).extend,
      c = i(3),
      d = i(6),
      u = i(131),
      m = i(159),
      f = i(18);
    function h(t) {
      var e = /^(\w{1,2})-(?:\w+-)?(\d+)-(\d+|\w+)$/.exec(t);
      return {
        product: e ? e[1] : null,
        pageId: e ? e[2] : null,
        impId: e ? e[3] : null
      };
    }
    function g(t) {
      var e = h(t.blockId),
        i = p({}, t);
      if (
        ((i.onRender = c.isolate(t.onRender)),
        (i.onHide = c.isolate(t.onHide)),
        (i.pageId = e.pageId),
        (i.blockImpId = e.impId),
        (i.statId = i.blockImpId),
        (i.partnerStatId = t.statId),
        (i.geo = u.getValidGeo(i.geo)),
        (i.disableHighlight = !0 === i.disableHighlight),
        (0, a.isFakeImpId)(e.impId))
      ) {
        var n = t.oldDirectSettings,
          o = document.getElementById(t.renderTo),
          s = m.getElementFullSize(o),
          l = (0, r["default"])(n.type, n.limit, s.width, s.height);
        i.rtbInDirect = {
          defaultSize: l.defaultSize,
          allSizes: l.allSizes,
          directCount: n.limit
        };
      }
      return x(i);
    }
    var _ = ((Ya && Ya.Context) || {}).isAllowedRepeatAds,
      y =
        void 0 === _
          ? function (t, e) {
              return e;
            }
          : _,
      b = /tv\.yandex\.ru/.test(location.hostname),
      v = /avito/.test(location.hostname);
    function x(t) {
      var e = t.allowRepeatAds;
      return (
        (e = e
          ? (0, l.parseAllowRepeatAds)(e)
          : y(t.pageId, !1)
          ? {
              maxSkipSize: 0,
              custom: !0
            }
          : b
          ? {
              maxSkipSize: 9,
              custom: !0
            }
          : v
          ? {
              maxSkipSize: 20,
              custom: !0
            }
          : {
              screen: s.isMobile ? 3 : 2
            }),
        (t.allowRepeatAds = e),
        t
      );
    }
    t.exports = {
      getRenderId: function (t) {
        return (t.blockId || t.renderTo) + "#" + (t.pageNumber || "");
      },
      parseBlockId: h,
      prepareCallback: function (t) {
        return c.isolate(t || function () {});
      },
      prepareDirectConfig: function (t) {
        var e,
          i = h(t.blockId),
          n = g(t);
        return (
          (n.product =
            ((e = i.product),
            {
              D: d.Products.DIRECT,
              P: d.Products.PREMIUM,
              S: d.Products.STRIPE
            }[e])),
          n
        );
      },
      prepareFullscreenConfig: function (t) {
        var e = h(t.blockId),
          i = p({}, t);
        return {
          pageId: e.pageId,
          blockImpId: e.impId,
          onVideoStart: f(i.onVideoStart) ? c.isolate(i.onVideoStart) : void 0,
          onVideoEnd: f(i.onVideoEnd) ? c.isolate(i.onVideoEnd) : void 0,
          geo: u.getValidGeo(i.geo),
          userConfig: i
        };
      },
      prepareInpageConfig: function (t) {
        var e = h(t.blockId),
          i = p({}, t);
        return {
          params: {
            partnerId: e.pageId,
            category: e.impId,
            renderTo: i.renderTo
          },
          inpage: i.inpage || {}
        };
      },
      prepareInternalConfig: function (t) {
        var e = h(t.blockId),
          i = p({}, t);
        return (
          (i.onRender = c.isolate(i.onRender)),
          (i.onHide = c.isolate(i.onHide)),
          (i.pageId = e.pageId),
          (i.internalType = e.impId.toLowerCase()),
          (i.product = d.Products.INTERNAL),
          i
        );
      },
      prepareOldDirectConfig: function (t, e, i) {
        var n = void 0;
        i.ad_format === d.Products.DIRECT &&
          (n =
            i.geo_lat || i.geo_long
              ? {
                  lat: i.geo_lat,
                  long: i.geo_long
                }
              : i.geo);
        var o = {
          pageId: t,
          renderTo: e,
          data: i.data,
          grab: i.grab,
          searchText: i.search_text,
          searchPageNumber: i.search_page_number,
          lang: i.lang,
          onRender: c.isolate(i.on_render),
          onHide: c.isolate(i.on_hide),
          product: i.ad_format,
          adaptiveType: i.adaptive_type,
          geo: u.getValidGeo(n),
          disableHighlight: !0 === i.disable_highlight,
          allowRepeatAds: i.allowRepeatAds,
          cspNonce: i.csp_nonce,
          additionalBanners: i.additional_banners,
          pageNumber: i.page_number,
          extParams: i.ext_params,
          bundle: i.bundle,
          adfoxexp: i.adfoxexp
        };
        i.type === d.Products.STRIPE && (o.product = d.Products.STRIPE);
        var r = parseInt(i.stat_id, 10);
        return (
          isNaN(r) || ((o.statId = (r % Math.pow(2, 24)) + Math.pow(2, 30)), (o.partnerStatId = r)),
          x(o)
        );
      },
      prepareRtbConfig: g
    };
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.once = function (t) {
        var e = function () {
          var i = t.apply(this, arguments);
          return (
            (e = function () {
              return i;
            }),
            i
          );
        };
        return function () {
          return e.apply(this, arguments);
        };
      });
  },
  function (t, e, i) {
    "use strict";
    var n =
      Object.assign ||
      function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
          for (var o in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      };
    e.__esModule = !0;
    var o,
      r = i(326),
      a = i(14),
      s = i(327),
      l = !0;
    (e.sendLabel = function (t) {
      var e = a.getJsTracerObject(t);
      e &&
        (l &&
          ((l = !1),
          (e.tags = n({}, e.tags, {
            cset: o
          })),
          (e.data = n({}, e.data, {
            firstRender: !0
          }))),
        r.sendToSolomon(
          n(
            {
              event: "block_render"
            },
            e
          )
        ));
    }),
      (e.sendResourceInfo = function () {
        var t = s.getJsTracerObject();
        t &&
          r.sendToSolomon(
            n(
              {
                event: "performance"
              },
              t
            )
          );
      }),
      (e.setContextStaticExecutionTime = function (t, e) {
        o = e - t;
      });
  },
  function (t, e, i) {
    "use strict";
    var n,
      o =
        ((n =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          }),
        function (t, e) {
          function i() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
        }),
      r =
        Object.assign ||
        function (t) {
          for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var o in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        };
    e.__esModule = !0;
    var a = i(0),
      s = i(90),
      l = i(92),
      p = i(22),
      c = i(95),
      d = i(263),
      u = i(7),
      m = i(530),
      f = i(533),
      h = i(536);
    e.ResourceNode = h.ResourceNode;
    var g = i(12),
      _ = i(538),
      y = i(56),
      b = i(539),
      v = i(540),
      x = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          o(e, t),
          (e.prototype.isAvailable = function (t) {
            var e = this.context.fontSize,
              i = this.getSize(t).height;
            return !("button-medium" === t && i > 3.4 * e + 2 + 1);
          }),
          e
        );
      })(h.ResourceHeightTreeContext);
    e.AdvResourceTreeContext = x;
    var w = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.onInit = function () {
          t.prototype.onInit.call(this), this.prepareData();
        }),
        (e.prototype.prepareData = function () {
          var t = this.props,
            e = t.adv,
            i = t.getSize,
            n = t.context,
            o = e.isAppAd,
            r = e.url,
            a = e.addInfo || {},
            s = this.getDataSource().getLanguage();
          this.action = {
            url: a.callToActionUrl || r,
            title: o ? a.callToAction || u["default"]("INSTALL", s) : u["default"]("LEARN_MORE", s)
          };
          var l = this.coerceSize(i()),
            p = l.width,
            d = l.height;
          if (
            ((this.minHeight = d),
            (this.width = p),
            n.setParams({
              fontSize: this.calcFontSize({
                width: this.width,
                height: this.minHeight
              })
            }),
            e.warning)
          ) {
            var m = c.hasImportantFlag(e.bannerFlags);
            this.warning = {
              text: e.warning,
              important: m
            };
          }
          this.warningWidth = p;
        }),
        (e.prototype.beforeRender = function (e) {
          t.prototype.beforeRender.call(this, e);
          var i = this.props,
            n = i.adv,
            o = i.context.getTheme(),
            r = n.isAppAd,
            a = n.addInfo || {};
          if (((this.fontSize = o.fontSize), r)) {
            var s = 5.5 * this.fontSize,
              l = n.icon && n.icon.getFitting(s, s),
              p = l && l.src,
              c = Number(a.rating) || 0;
            this.app = {
              rating: c >= 3.5 ? c : 0,
              price: a.price,
              icon: p
                ? {
                    src: p,
                    size: s
                  }
                : void 0
            };
          }
          this.prepareImage();
        }),
        (e.prototype.prepareImage = function () {
          var t = this.getPicture();
          if (t) {
            var e = this.props.context.getTheme().getImageSize({
                width: this.width,
                height: this.minHeight
              }),
              i = p.calcRatio(e.maxWidth / e.maxHeight, p.calcAspectRatio(t));
            (this.getImageSize = function () {
              return {
                width: e.maxWidth * i,
                height: e.maxHeight * i
              };
            }),
              (t = this.getPicture()) &&
                (this.image = r(
                  {
                    src: t.src
                  },
                  e
                ));
          }
        }),
        (e.prototype.getWarningMinHeight = function () {
          var t = this.warning;
          if (!t) return 0;
          var e = t.important ? 0.1 : 0,
            i = this.minHeight * this.width;
          return Math.max(15, (i * e) / this.warningWidth);
        }),
        (e.prototype.pushCss = function () {
          t.prototype.pushCss.call(this);
          for (
            var e = this.props.context.getTheme(), i = 0, n = [b].concat(this.getStyles(), [v]);
            i < n.length;
            i++
          ) {
            var o = n[i];
            this.pushStyles(o, e);
          }
        }),
        (e.prototype.afterRender = function () {
          var e = this;
          t.prototype.afterRender.call(this),
            this.props.context.doOnReady(function () {
              return e.onReady();
            });
        }),
        (e.prototype.onReady = function () {
          var t = h.memoizeResourceTreeContext(new x(this)),
            e = this.createResourceTree(function (e, i, n) {
              return void 0 === n && (n = []), t.createNode(e, i, n);
            });
          this.removeExcessResources(t, e);
        }),
        (e.prototype.removeExcessResources = function (t, e) {
          for (
            var i = this.minHeight,
              n = this.coerceSize(this.props.getSize()).height,
              o = 0,
              r = t.getExcessResources("content", i, n, e);
            o < r.length;
            o++
          ) {
            var a = r[o],
              s = this.getResourceById(a);
            s && s.destroy();
          }
        }),
        (e.prototype._render = function () {
          var t = this.b_,
            e = this.width,
            i = this.minHeight,
            n = this.fontSize,
            o = this.props.adv,
            r = o.adId,
            s = o.url,
            l = {
              width: e + "px",
              "min-height": i + "px",
              "font-size": n + "px"
            },
            p = e * i < this.props.context.getTheme().maxSmallAdvSquare;
          return a.create(
            g,
            {
              resourceId: "root",
              class: t(t(), "_" + this.mod),
              style: l,
              href: s,
              tag: p ? "a" : "yatag",
              "data-id": r
            },
            this.renderContent("content"),
            this.renderFeedback({}),
            this.renderAdtune({})
          );
        }),
        (e.prototype.renderTitle = function (t) {
          void 0 === t && (t = {});
          var e = this.b_,
            i = this.props.adv,
            n = i.title,
            o = i.url;
          return n
            ? a.create(
                "yatag",
                r(
                  {
                    resourceId: "title",
                    class: e("__title")
                  },
                  t
                ),
                a.create(
                  g,
                  {
                    href: o,
                    class: e("__link", "__link_title")
                  },
                  a.create(l.Text, {
                    hyphenates: !0,
                    text: n
                  })
                )
              )
            : null;
        }),
        (e.prototype.renderTitleBig = function () {
          var t = this.b_;
          return this.renderTitle({
            resourceId: "title-big",
            class: t("__title", "__title_big")
          });
        }),
        (e.prototype.renderBody = function () {
          var t = this.b_,
            e = this.props.adv,
            i = e.body,
            n = e.url;
          return i
            ? a.create(
                "yatag",
                {
                  resourceId: "body",
                  class: t("__body")
                },
                a.create(
                  g,
                  {
                    href: n,
                    class: t("__link", "__link_body")
                  },
                  a.create(l.Text, {
                    hyphenates: !0,
                    highlight: !0,
                    text: i
                  })
                )
              )
            : null;
        }),
        (e.prototype.renderSiteLinks = function () {
          var t = this.b_,
            e = this.props.adv.sitelinks || [];
          if (!e.length) return null;
          var i = e.map(function (e) {
            var i = e.url,
              n = e.title;
            return a.create(
              "yatag",
              {
                class: t("__site-links-item")
              },
              a.create(
                g,
                {
                  href: i,
                  class: t("__link", "__link_site-link")
                },
                a.create(l.Text, {
                  text: n
                })
              )
            );
          });
          return a.create(
            "yatag",
            {
              resourceId: "site-links",
              class: t("__site-links")
            },
            i
          );
        }),
        (e.prototype.renderCallouts = function () {
          var t = this.b_,
            e = this.props.adv.callouts || [];
          if (!e.length) return null;
          var i = e.map(function (e) {
            return a.create(
              "yatag",
              {
                class: t("__callouts-item")
              },
              a.create(l.Text, {
                text: e
              })
            );
          });
          return a.create(
            "yatag",
            {
              resourceId: "callouts",
              class: t("__callouts")
            },
            i
          );
        }),
        (e.prototype.renderButtonBigImpl = function (t) {
          if (!this.getDataSource().hitFeatures.callToActionButton) return null;
          var e = this.b_,
            i = this.action,
            n = this.app,
            o = this.props.adv.domain,
            r = null;
          return (
            n && n.rating
              ? (r = a.create(
                  "yatag",
                  {
                    class: e("__button-extra")
                  },
                  a.create(m.Stars, {
                    value: n.rating
                  })
                ))
              : o &&
                (r = a.create(
                  "yatag",
                  {
                    class: e("__button-extra", "__button-extra_domain")
                  },
                  a.create(
                    "yatag",
                    {
                      class: e("__button-content")
                    },
                    a.create(
                      "yatag",
                      {
                        class: e("__button-text")
                      },
                      a.create(
                        g,
                        {
                          href: i.url,
                          class: e("__link", "__link_button-extra")
                        },
                        a.create(l.Text, {
                          text: o
                        })
                      )
                    )
                  )
                )),
            a.create(
              "yatag",
              {
                resourceId: "button-" + t,
                class: e("__button", "__button_" + t)
              },
              a.create(
                g,
                {
                  href: i.url,
                  class: e("__link", "__link_button-action", "__button-action")
                },
                a.create(
                  "yatag",
                  {
                    class: e("__button-content")
                  },
                  a.create(
                    "yatag",
                    {
                      class: e("__button-text")
                    },
                    a.create(l.Text, {
                      text: i.title
                    })
                  ),
                  n && n.price
                    ? a.create(
                        "yatag",
                        {
                          class: e("__button-text")
                        },
                        "\xa0\u2014 " + n.price,
                        " ",
                        a.create(f.Ruble, null)
                      )
                    : null
                )
              ),
              r
            )
          );
        }),
        (e.prototype.renderButtonBig = function () {
          return this.renderButtonBigImpl("big");
        }),
        (e.prototype.renderButtonMedium = function () {
          return this.renderButtonBigImpl("medium");
        }),
        (e.prototype.renderButtonSmall = function () {
          if (!this.getDataSource().hitFeatures.callToActionButton) return null;
          var t = this.b_,
            e = this.action,
            i = this.props.adv.domain;
          return a.create(
            "yatag",
            {
              resourceId: "button-small",
              class: t("__button", "__button_small")
            },
            a.create(
              g,
              {
                href: e.url,
                class: t("__link", "__link_button-action", "__button-action")
              },
              a.create(
                "yatag",
                {
                  class: t("__button-content")
                },
                a.create(
                  "yatag",
                  {
                    class: t("__button-text")
                  },
                  a.create(l.Text, {
                    text: i || e.title
                  })
                )
              ),
              i
                ? a.create(
                    "yatag",
                    {
                      class: t("__button-text")
                    },
                    "\xa0",
                    a.create("yatag", {
                      class: t("__button-chevron")
                    })
                  )
                : null
            )
          );
        }),
        (e.prototype.renderWarning = function () {
          var t = this.b_,
            e = this.warning,
            i = this.props.context,
            n = Math.max(i.getTheme().warningHeight, this.getWarningMinHeight()),
            o = {
              "min-height": n
            };
          return e
            ? a.create(
                "yatag",
                {
                  resourceId: "warning",
                  class: t("__warning", "__warning_" + (e.important ? "important" : "normal")),
                  style: o
                },
                a.create(
                  d.Scroll,
                  {
                    calculateScroll: function (t) {
                      return i.doOnReady(t);
                    }
                  },
                  a.create(
                    "yatag",
                    {
                      class: t("__warning-text")
                    },
                    a.create(l.Text, {
                      text: e.text
                    })
                  )
                )
              )
            : n
            ? a.create("yatag", {
                resourceId: "warning",
                style: o
              })
            : null;
        }),
        (e.prototype.renderLogo = function (t) {
          void 0 === t && (t = "default");
          var e = this.b_,
            i = this.props.logo;
          return i
            ? a.create(
                g,
                {
                  href: i.url,
                  class: e("__link", "__logo", "__logo_" + t)
                },
                a.create(l.Text, {
                  text: i.title
                })
              )
            : null;
        }),
        (e.prototype.renderLogoStub = function () {
          var t = this.b_;
          return this.props.logo
            ? a.create("yatag", {
                resourceId: "logo-stub",
                class: t("__logo-stub")
              })
            : null;
        }),
        (e.prototype.renderAge = function (t) {
          void 0 === t && (t = "default");
          var e = this.b_,
            i = this.props.adv.age;
          return i
            ? a.create(
                "yatag",
                {
                  class: e("__age", "__age_" + t)
                },
                i
              )
            : null;
        }),
        (e.prototype.renderAppIcon = function () {
          var t = this.b_,
            e = this.app;
          if (!e || !e.icon) return null;
          var i = e.icon,
            n = i.src,
            o = i.size,
            r = {
              width: o,
              height: o,
              "background-image": "url(" + n + ")"
            };
          return a.create("yatag", {
            class: t("__app-icon"),
            style: r
          });
        }),
        (e.prototype.registerImageViewport = function (t) {
          var e = this,
            i = this.props.context;
          i.doOnReady(function () {
            return i.doOnReady(function () {
              var i = e.getResourceById(t);
              if (i) {
                var n = i.getElement();
                if (n) {
                  var o = y.getElementInnerSize(n),
                    r = o.width / o.height,
                    a = e.getPicture(),
                    s = a.width,
                    l = a.height,
                    p = a.smartCenter,
                    c = s / l,
                    d = {
                      x: p.x + p.width / 2,
                      y: p.y + p.height / 2
                    },
                    u = _.calcBackgroundPosition(d, r, c);
                  i.setStyle({
                    "background-position": 100 * u.x + "% " + 100 * u.y + "%"
                  });
                }
              }
            });
          });
        }),
        e
      );
    })(s);
    e.AdvAdaptive = w;
  },
  function (t, e, i) {
    "use strict";
    var n =
      Object.assign ||
      function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
          for (var o in (e = arguments[i]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      };
    e.__esModule = !0;
    var o = i(412);
    e.prettify = function (t, e) {
      var i = n(
        {
          gluePrepositions: !0,
          maxGluedLength: 1 / 0,
          softBreakPunct: !1
        },
        e
      );
      if (
        (function (t) {
          return /[\u0404\u0406\u0407\u0454\u0456\u0457\u0490\u0491]/.test(t);
        })(t)
      )
        return t;
      var r = (t = o.htmlToUtf(t)).match(/"/g),
        a = new RegExp(
          '(^|\\s)"([.\\-\\s\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]{3,})"',
          "g"
        ),
        s = t.match(a);
      return (
        r &&
          s &&
          r.length % 2 == 0 &&
          r.length / 2 === s.length &&
          (t = t.replace(a, function (t, e, i) {
            return /^[\-\s]|[\-\s]$|^[\-\s\d]+$/.test(i) ? t : e + "\xab" + i + "\xbb";
          })),
        i.gluePrepositions &&
          (t = t.replace(
            new RegExp(
              '(^|\\(|\\s)([\u0410\u0430]|[\u0411\u0431]\u0435\u0437|[\u0412\u0432](?:|\u044b|\u0430\u0441|\u0430\u043c|\u0441\u0435|\u0441\u0451)|[\u0413\u0433]\u0434\u0435|[\u0414\u0434](?:\u043e|\u043b\u044f)|[\u0417\u0437]\u0430|[\u0418\u0438](?:|\u0437)|[\u041a\u043a](?:|\u043e|\u0430\u043a)|[\u041c\u043c]\u044b|[\u041d\u043d](?:\u0430|\u0430\u043c|\u0430\u0441|\u0435|\u0438|\u043e)|[\u041e\u043e](?:|\u0431|\u0442)|[\u041f\u043f](?:\u043e|\u0440\u043e)|[\u0421\u0441](?:|\u043e)|[\u0422\u0442](?:\u043e|\u0443\u0442|\u044b)|[\u0423\u0443]|[\u0427\u0447]\u0442\u043e|[\u042d\u044d]\u0442\u043e)\\s([\xab"$\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]+)',
              "g"
            ),
            function (t, e, n, o) {
              return (n + o).length + 1 <= i.maxGluedLength ? e + n + "\xa0" + o : t;
            }
          )),
        i.softBreakPunct &&
          (t = t.replace(/([.,!?:;)+]+|[^<]\/|=(?!"))([^ -])(?!$|[.,!?:;)+=\/ ])/g, "$1<wbr />$2")),
        (t = t
          .replace(/([0-9]+) (?=[0-9]{3})/g, "$1\xa0")
          .replace(
            /([0-9\u00A0]+) (\u0440|\u0440\u0443\u0431|\u0442\u044b\u0441|\u043c\u043b\u043d|\u043a\u043c|\u043c|\u0441\u043c|\u043c\u043c)(?=[.,?!:;\s]|$)/g,
            function (t, e, n) {
              return t.length <= i.maxGluedLength ? e + "\xa0" + n : t;
            }
          )
          .replace(/ \-(\d\d?)%/g, " \u2212$1%")
          .replace(/ !/, "\xa0!"))
      );
    };
  },
  function (t, e, i) {
    "use strict";
    var n = i(77);
    t.exports = {
      on: n.on,
      un: n.un
    };
  },
  function (t, e, i) {
    "use strict";
    t.exports = i(21).indexOf;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(13);
    (e.callSafe = function (t) {
      try {
        return t();
      } catch (t) {
        return;
      }
    }),
      (e.protect = function (t, i, o, r) {
        return function () {
          try {
            return i.apply(o || this, arguments);
          } catch (i) {
            if ((n.isFunction(r) && r(i), !0 === i.preventProtect)) throw i;
            e.protect.log(i, t);
          }
        };
      }),
      (e.protect.log = function (t, e) {
        console.log("LOG:" + e + ":" + t);
      }),
      (e.protect.setTimeout = function (t, i, n, o) {
        return window.setTimeout(e.protect("timeout", t, n, o), i);
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.forOwn = function (t, e, i) {
        for (var n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.isString = function (t) {
        return "string" == typeof t;
      });
  },
  function (t, e, i) {
    "use strict";
    function n() {
      return window.Ya || (window.Ya = {});
    }
    function o() {
      var t = n();
      return t.Context || (t.Context = {});
    }
    (e.__esModule = !0),
      (e.setGlobalVariable = function (t, e) {
        o()[t] = e;
      }),
      (e.getGlobalVariable = function (t) {
        return o()[t];
      }),
      (e.getYa = n),
      (e.getYaContext = o);
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.noop = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(177).getNativeMethod(Array, "isArray"),
      o = {};
    e.isArray = Boolean(n)
      ? function (t) {
          return n.call(Array, t);
        }
      : function (t) {
          return "[object Array]" === o.toString.call(o, t);
        };
  },
  function (t, e, i) {
    "use strict";
    var n = i(195),
      o = i(128),
      r = i(196),
      a = i(10),
      s = i(127),
      l = i(356);
    function p(t, e) {
      if (e) {
        var i = a.indexOf(e, t);
        -1 !== i && (e[i] = null);
      }
    }
    var c = a.augment(n, {
      __embeddedResources: null,
      __children: null,
      __contextComponent: null,
      __parentComponent: null,
      __resourceId: null,
      __state: null,
      props: null,
      constructor: function (t, e, i) {
        (this.__state = l.INITIAL),
          (t = t || {}).hasOwnProperty("resourceId") &&
            ((this.__resourceId = t.resourceId), delete t.resourceId),
          (this.__embeddedResources = []),
          (this.__children = a.isArray(e) ? e : []),
          (this.__contextComponent = i),
          i && i.addToEmbeddedResources(this),
          (this.props = this.initProps(t)),
          this.onInit();
      },
      addToEmbeddedResources: function (t) {
        this.__embeddedResources.push(t);
      },
      initProps: function (t) {
        return t;
      },
      destroy: function () {
        this.unmount();
        var t = this.getContextComponent();
        t && t._removeFromEmbeddedResources(this);
        var e = this.__parentComponent;
        e && e._removeFromExternalResources(this),
          a.each(
            this.__children,
            function (t) {
              t instanceof n && t.destroy();
            },
            this
          ),
          this.onDestroy(),
          (this.__state = l.DESTROYED);
      },
      unmount: function () {
        this._clearEmbeddedResources(),
          a.each(
            this.__children,
            function (t) {
              t instanceof n && t.unmount();
            },
            this
          ),
          this.onUnmount(),
          (this.__state = l.UNMOUNTED);
      },
      onInit: s,
      onDestroy: s,
      onUnmount: s,
      onMount: s,
      _clearEmbeddedResources: function () {
        a.each(this.__embeddedResources, function (t) {
          t instanceof n && t.destroy();
        }),
          (this.__embeddedResources = []);
      },
      _removeFromExternalResources: function (t) {
        p(t, this.__children);
      },
      _removeFromEmbeddedResources: function (t) {
        p(t, this.__embeddedResources);
      },
      findEmbeddedResources: function (t) {
        var e = [];
        if (!a.isFunction(t)) {
          var i = t;
          t = function (t) {
            return t.__resourceId === i;
          };
        }
        return (
          a.each(this.__embeddedResources, function (i) {
            i && t(i) && e.push(i);
          }),
          e
        );
      },
      getResourceById: function (t) {
        for (var e = this.__embeddedResources, i = e.length, n = 0; n < i; n++) {
          var o = e[n];
          if (o && o.__resourceId === t) return o;
        }
        return null;
      },
      getParentComponent: function () {
        return this.__parentComponent;
      },
      getContextComponent: function () {
        return this.__contextComponent;
      },
      getChildren: function () {
        return this.__children;
      },
      pushCallback: function (t) {
        r.push(t, this);
      },
      shouldRender: function () {
        return !0;
      },
      render: function () {
        return this.getChildren();
      },
      callRendering: function (t) {
        this.__state === l.MOUNTED
          ? this.unmount()
          : (this.__parentComponent = o.getCurrentComponent());
        var e,
          i = t(this);
        return (
          (this.__lastElement = (e = i.childNodes).length ? e[e.length - 1] : null),
          (this.__state = l.MOUNTED),
          i
        );
      },
      update: function () {
        return o.updateComponentInNode(this.__lastElement, this);
      }
    });
    t.exports = c;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = [];
    function o(t) {
      return 0 === t.indexOf(e.FAKE_IMP_ID);
    }
    (e.FAKE_IMP_ID = "100500"),
      (e.generateImpId = function (t) {
        var i = n.indexOf(t);
        return -1 === i && ((i = n.length), n.push(t)), e.FAKE_IMP_ID + "_" + i;
      }),
      (e.isFakeImpId = o),
      (e.getRealImpId = function (t) {
        return o(t) ? e.FAKE_IMP_ID : t;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(192),
      o = i(81);
    (e.compareArrays = function (t, e) {
      for (var i = t.length, n = e.length, o = Math.min(i, n), r = 0; r < o; r++) {
        if (t[r] < e[r]) return -1;
        if (t[r] > e[r]) return 1;
      }
      return i - n;
    }),
      (e.flushQueue = function (t, e) {
        for (; t.length; ) e(t.shift());
      }),
      (e.getSectionLimit = function (t, e, i) {
        for (var n = 0, o = 1 / 0, r = 0, a = 0, s = t; a < s.length; a++) {
          var l = s[a];
          if (((n += l), (e * (o = Math.min(o, l))) / n < i)) return r;
          r++;
        }
        return r;
      }),
      (e.createExpander = function () {
        var t = document.createElement("div");
        return (
          n.setStyle(t, {
            display: "table",
            "table-layout": "fixed",
            width: "100%",
            height: "0",
            visibility: "hidden"
          }),
          (t.innerHTML =
            '<div style="display:table-row"><div style="display:table-cell"></div></div>'),
          t
        );
      }),
      (e.calcAvg = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          o.reduce(t, function (t, e) {
            return t + e;
          }) / t.length
        );
      });
  },
  function (t, e, i) {
    "use strict";
    var n = i(96),
      o = i(2);
    t.exports = function (t, e, i) {
      return (
        i || (i = t),
        i.addClass(e.join(" ")),
        o.each(e, function (e) {
          !(function (t, e, i) {
            var o = t.getElement();
            (0, n.hasScrollInElement)(o) ||
              (i.removeClass(e), (0, n.hasScrollInElement)(o) && i.addClass(e));
          })(t, e, i);
        }),
        (0, n.hasScrollInElement)(t.getElement())
      );
    };
  },
  function (t, e, i) {
    "use strict";
    var n;
    (n = i(204)), (t.exports = n);
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.removeNodeFromParent = function (t) {
        if (t) {
          var e = t.parentElement;
          e && e.removeChild(t);
        }
      });
  },
  function (t, e, i) {
    "use strict";
    var n,
      o =
        ((n =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          }),
        function (t, e) {
          function i() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
        });
    e.__esModule = !0;
    var r = i(97),
      a = (function (t) {
        function e(e) {
          return t.apply(this, arguments) || this;
        }
        return (
          o(e, t),
          (e.prototype.onInit = function () {
            var t = this.props;
            (this.encodeStyles = this.getContextComponent().encodeStyles),
              this.encodeStyles && (t.text = r.encodeTemplate(t.text));
          }),
          (e.prototype.beforeRender = function (t) {
            var e = this.props.text.toString() || "";
            return t.getCurrentElement().insertAdjacentHTML("beforeend", e), !1;
          }),
          e
        );
      })(i(145));
    e.Html = a;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(387);
    function o(t, e) {
      var i = (function (t, e) {
        return (e in t.style && n.getStyle(t).getPropertyValue(e)) || "0";
      })(t, "padding-" + e);
      return parseFloat(i);
    }
    e.getElementInnerSize = function (t) {
      return {
        width: Math.max(0, t.clientWidth - o(t, "left") - o(t, "right")),
        height: Math.max(0, t.clientHeight - o(t, "top") - o(t, "bottom"))
      };
    };
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = 2;
    function o(t) {
      return r(t / 100);
    }
    function r(t) {
      return Number(t.toFixed(n));
    }
    (e.prepare = function (t) {
      for (var e, i = [], n = 0, a = 0; a < t.length; a++)
        (n = e = r(o(t[a].percent) + n)),
          i.push({
            id: t[a].id,
            extra: t[a].extra,
            threshold: e
          });
      return i;
    }),
      (e.toFraction = o),
      (e.fixPrecision = r),
      (e.findDefault = function (t) {
        for (var e = null, i = 0; i < t.length; i++) (!e || e.percent < t[i].percent) && (e = t[i]);
        return e;
      }),
      (e.isPercent = function (t) {
        return Math.random() < o(t);
      });
  },
  function (t, e, i) {
    "use strict";
    var n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (e.__esModule = !0),
      (e.isObject = function (t) {
        var e = void 0 === t ? "undefined" : n(t);
        return Boolean(t) && ("object" === e || "function" === e);
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
    function o(t) {
      for (var e = "", i = 0; i < t.length; ) {
        var o = t.charCodeAt(i++),
          r = t.charCodeAt(i++),
          a = t.charCodeAt(i++),
          s = o >> 2,
          l = ((3 & o) << 4) | (r >> 4),
          p = ((15 & r) << 2) | (a >> 6),
          c = 63 & a;
        isNaN(r) ? (p = c = 64) : isNaN(a) && (c = 64),
          (e = e + n.charAt(s) + n.charAt(l) + n.charAt(p) + n.charAt(c));
      }
      return e;
    }
    function r(t) {
      var e = [],
        i = 0;
      for (t = t.replace(/[^A-Za-z0-9\-_=]/g, ""); i < t.length; ) {
        var o = n.indexOf(t.charAt(i++)),
          r = n.indexOf(t.charAt(i++)),
          a = n.indexOf(t.charAt(i++)),
          s = n.indexOf(t.charAt(i++)),
          l = (o << 2) | (r >> 4),
          p = ((15 & r) << 4) | (a >> 2),
          c = ((3 & a) << 6) | s;
        e.push(String.fromCharCode(l)),
          64 !== a && e.push(String.fromCharCode(p)),
          64 !== s && e.push(String.fromCharCode(c));
      }
      return e.join("");
    }
    (e.encode = function (t, e) {
      return (
        void 0 === e && (e = 1e6),
        o(
          (function (t, e) {
            t = t.replace(/\r\n/g, "\n");
            for (var i = "", n = 0; n < t.length; n++) {
              var o = t.charCodeAt(n),
                r = void 0;
              if (
                (o < 128
                  ? (r = String.fromCharCode(o))
                  : o > 127 && o < 2048
                  ? ((r = String.fromCharCode((o >> 6) | 192)),
                    (r += String.fromCharCode((63 & o) | 128)))
                  : ((r = String.fromCharCode((o >> 12) | 224)),
                    (r += String.fromCharCode(((o >> 6) & 63) | 128)),
                    (r += String.fromCharCode((63 & o) | 128))),
                i.length + r.length > e)
              )
                break;
              i += r;
            }
            return i;
          })(t, ((3 * e) / 4) | 0)
        )
      );
    }),
      (e.encodeUInt8String = o),
      (e.decode = function (t) {
        return (function (t) {
          for (var e = [], i = 0; i < t.length; ) {
            var n = t.charCodeAt(i);
            if (n < 128) e.push(String.fromCharCode(n)), i++;
            else if (n > 191 && n < 224) {
              var o = t.charCodeAt(i + 1);
              e.push(String.fromCharCode(((31 & n) << 6) | (63 & o))), (i += 2);
            } else {
              var o = t.charCodeAt(i + 1),
                r = t.charCodeAt(i + 2);
              e.push(String.fromCharCode(((15 & n) << 12) | ((63 & o) << 6) | (63 & r))), (i += 3);
            }
          }
          return e.join("");
        })(r(t));
      }),
      (e.decodeUInt8String = r),
      (e.cropEquals = function (t) {
        return t.replace(/=+$/, "");
      }),
      (e.addEquals = function (t) {
        for (; t.length % 4 != 0; ) t += "=";
        return t;
      });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.AD_TITLE_LENGTH = 33),
      (e.AD_BODY_LENGTH = 75),
      (e.PARAMS_DELIMITER = "/;/");
  },
  function (t, e, i) {
    "use strict";
    var n = i(345),
      o = i(192).setStyle,
      r = i(346).innerHtml;
    t.exports = {
      hasClass: n.hasClass,
      addClass: n.addClass,
      clearClasses: n.clearClasses,
      removeClass: n.removeClass,
      toggleClass: n.toggleClass,
      setStyle: o,
      innerHTML: r
    };
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(182);
    e.sendPixel = function (t, e, i) {
      n.loadImage({
        src: t,
        onLoad: e,
        ctx: i
      });
    };
  },
  function (t, e, i) {
    "use strict";
    var n = i(49),
      o = i(10).augment(n, {
        constructor: function () {
          n.apply(this, arguments);
        }
      });
    t.exports = o;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(194),
      o = i(32),
      r = i(98).PREVENTS_BROWSING,
      a = r[0] + "-" + r[1];
    (e.slideUp = function (t, e) {
      o.setImportantCssProperty(t, "overflow", "hidden");
      var i = function (e) {
        var i = Math.round(100 * e) / 100;
        o.setImportantCssProperty(t, "height", i + "px");
      };
      setTimeout(function () {
        n({
          duration: 500,
          start: t.offsetHeight,
          end: 0,
          onFrame: i,
          onEnd: e
        });
      }, 1e3);
    }),
      (e.shouldSlideUp = function (t, e) {
        var i = window.top !== window.self,
          n = t.pageId;
        if (i && !/^(?:106712)|(?:106713)$/.test(n)) return !1;
        return e === a;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(389),
      o = i(241),
      r = i(47),
      a = 4294967295,
      s = "yaSafeFrameAsyncCallbacks",
      l = "host.js",
      p = "host_adb.js",
      c = window;
    c.yaSafeFrameCallbacksStorage = c.yaSafeFrameCallbacksStorage || {};
    var d = n.isEncoded("https://yastatic.net/safeframe/1-1-0/");
    function u() {
      var t = d ? p : l,
        e = "" + ["https://yastatic", ".net/safeframe-bundles/0.40/"].join("") + t;
      return d ? n.encode(e) : e;
    }
    function m(t) {
      t.isLoadingSafeframeStarted ||
        ((t.isLoadingSafeframeStarted = !0), o.loadCustomScript(t, u(), r.noop, !d));
    }
    function f(t) {
      var e = t[s] || [];
      return (t[s] = e), e;
    }
    function h(t, e) {
      delete t.yaSafeFrameCallbacksStorage[e];
    }
    function g(t) {
      return Boolean(t.$sf && t.$sf.ext);
    }
    (e.getSafeframeLoaderURL = u),
      (e.initSafeframe = function (t, e, i, n, o, s) {
        void 0 === n && (n = r.noop),
          void 0 === o && (o = r.noop),
          void 0 === s && (s = r.noop),
          m(t);
        var l = f(t),
          p = i.id instanceof Element ? "" : i.id,
          c = (function (t, e) {
            return e || t.id || "sf-" + (Math.floor(Math.random() * a) + 1);
          })(e, p);
        l.push(function () {
          (t.yaSafeFrameCallbacksStorage = t.yaSafeFrameCallbacksStorage || {}),
            (t.yaSafeFrameCallbacksStorage[c] = {
              onError: n,
              onRender: o,
              onAction: s
            }),
            (function (t) {
              t.yaSafeFrameCallbacksStorage = t.yaSafeFrameCallbacksStorage || {};
              var e = t.yaSafeFrameCallbacksStorage;
              new t.$sf.host.Config({
                auto: !1,
                onFailure: function (t, i, n) {
                  e[t] && e[t].onError(t, n);
                },
                onEndPosRender: function (t, i, n) {
                  e[t] && e[t].onRender(t, n);
                },
                onPosMsg: function (i, n, o) {
                  e[i] && e[i].onAction(n, o), "nuke" === n && h(t, i);
                }
              });
            })(t),
            (function (t, e, i, n) {
              e.id = n;
              var o = i.html,
                r = i.width,
                a = i.height,
                s = i.basePath,
                l = {
                  id: n,
                  html: o,
                  conf: {
                    w: r,
                    h: a,
                    dest: d ? e : n,
                    protected: i["protected"],
                    basePath: s
                  }
                };
              i.supports && (l.conf.supports = i.supports), t.$sf.host.render(l);
            })(t, e, i, c);
        });
      }),
      (e.nukeSafeframe = function (t, e) {
        m(t),
          f(t).push(function () {
            h(t, e), t.$sf.host.nuke(e);
          });
      }),
      (e.isInSafeframe = g),
      (e.updateSafeframeSize = function (t, e) {
        if (g(t)) {
          var i = t.$sf.ext.geom(),
            n = i.self.w + i.exp.r,
            o = i.self.h + i.exp.b,
            r = n > e.width ? e.width - i.self.w : i.exp.r,
            a = o > e.height ? e.height - i.self.h : i.exp.b;
          t.$sf.ext.expand({
            t: 0,
            l: 0,
            r: r,
            b: a
          });
        }
      });
  },
  function (t, e, i) {
    "use strict";
    var n = i(11),
      o = i(67),
      r = i(6),
      a = i(401),
      s = i(78).BorderTypes,
      l = i(15),
      p = {};
    (0, n.forEach)(a, function (t) {
      (t.index = t.id), (t.className = t.className || t.name);
      var e = "240x400" === t.className;
      o.MEDIA_240x400_IS_IGNORE_SETTINGS && e && (t.border = [s.BLOCK]),
        (t.limit = t.limit || r.MAX_ADS_LIMIT),
        (p[t.name] = t);
    }),
      (t.exports = {
        getFormatByName: function (t) {
          var e = p[t];
          return e ? l({}, e) : null;
        }
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(84),
      o = i(9),
      r = window.location.host,
      a =
        !(
          o.filter(
            [
              /youla\.io/i,
              /avito\.ru/i,
              /ok\.ru/i,
              /vk\.com/i,
              /rambler\.ru/i,
              /mail\.ru/i,
              /lenta\.ru/i,
              /gazeta\.ru/i,
              /devmail\.ru/i,
              /eda\.ru/i,
              /nightparty\.ru/i,
              /afisha\.ru/i,
              /mir\.afisha\.ru/i,
              /daily\.afisha\.ru/i,
              /m\.gazeta\.ru/i,
              /gazeta\.ru/i,
              /lenta\.ru/i,
              /motor\.ru/i,
              /m\.lenta\.ru/i,
              /moslenta\.ru/i,
              /secretmag\.ru/i,
              /championat\.com/i,
              /letidor\.ru/i,
              /quto\.ru/i,
              /wmj\.ru/i,
              /indicator\.ru/i,
              /ferra\.ru/i,
              /rns\.online/i,
              /m\.passion\.ru/i,
              /passion\.ru/i,
              /m\.moslenta\.ru/i,
              /autorambler\.ru/i,
              /livejournal\.com/i,
              /rg\.ru/i
            ],
            function (t) {
              return t.test(r);
            }
          ).length > 0
        ) && !0;
    e.MEDIA_240x400_IS_CAN_TO_SHOW = a;
    e.MEDIA_240x400_IS_OLD_ALL_CLICKABLE = !1;
    var s = a;
    e.MEDIA_240x400_IS_NEW_240x400 = s;
    var l = !("240x400" in n.adaptive0418Blocks);
    e.MEDIA_240x400_IS_IGNORE_SETTINGS = l;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(37),
      o = i(276),
      r = i(279),
      a = i(281),
      s = i(282),
      l = i(283);
    e.getSessionId = n.once(function () {
      return l.getSession(
        s.generateSessionId,
        r.getWindowStorage("common"),
        o.getCrossFrameStorage("common"),
        a.configureMetrika
      );
    });
  },
  function (t, e, i) {
    "use strict";
    (e.__esModule = !0),
      (e.generateHexString = function (t) {
        for (var e = "", i = 0; i < t; i++) e += ((16 * Math.random()) | 0).toString(16);
        return e;
      });
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(59);
    Object.keys(n).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return n[t];
          }
        });
    });
  },
  function (t, e, i) {
    "use strict";
    var n = i(72),
      o = (i(46), i(184)),
      r = "yandex_metrika_callbacks",
      a = 1,
      s = window.Ya && window.Ya.Metrika,
      l = !1;
    function p(t) {
      var e = "yaCounter" + t.id;
      return (
        window[e] ||
          (window[e] = (function (t) {
            try {
              return new window.Ya.Metrika({
                id: t.id,
                type: t.isYAN ? a : void 0,
                defer: !0,
                nck: t.disableCookies
              });
            } catch (t) {
              throw new Error("metrika counter creation error: " + t.message);
            }
          })(t)),
        window[e]
      );
    }
    function c() {
      s = !0;
    }
    t.exports = {
      getCounter: function (t, e) {
        s
          ? e(p(t))
          : ((function () {
              if (
                !(
                  l ||
                  (0, n.checkBundleType)(n.bundleTypes.SSP) ||
                  (0, n.checkBundleType)(n.bundleTypes.mobileSdk)
                )
              ) {
                var t = Ya ? Ya.relHostname : "",
                  e = t
                    ? "https://d93ih7uy3azjp.cloudfront.net/metrika/watch.js"
                    : "https://mc.yandex.ru/metrika/watch.js";
                o(e, !1, c), (l = !0);
              }
            })(),
            (i = function () {
              e(p(t));
            }),
            window[r] || (window[r] = []),
            window[r].push(i));
        var i;
      }
    };
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n,
      o = i(46),
      r = i(58),
      a = i(45);
    !(function (t) {
      (t["SSP"] = "ssp"), (t["mobileSdk"] = "msdk");
    })((n = e.bundleTypes || (e.bundleTypes = {})));
    var s,
      l = "bundleType";
    (e.saveBundleType = function (t) {
      var e;
      s ||
        o.getGlobalVariable(l) ||
        (r.isObject(t)
          ? (e = t) && e.common && e.common.sspId && Boolean(Number(e.common.sspId))
            ? (s = n.SSP)
            : e && e.common && 1 === Number(e.common.isMobileSdk) && (s = n.mobileSdk)
          : a.isString(t) &&
            (function (t) {
              switch (t) {
                case "ssp":
                  s = n.SSP;
                  break;
                case "mobsdk":
                  s = n.mobileSdk;
              }
            })(t),
        s && o.setGlobalVariable(l, s));
    }),
      (e.checkBundleType = function (t) {
        return s === t;
      });
  },
  function (t, e, i) {
    "use strict";
    t.exports = i(45).isString;
  },
  function (t, e, i) {
    "use strict";
    e.__esModule = !0;
    var n = i(2),
      o = i(20),
      r = o.isHostIgnored({
        exclude: [
          o.hosts.yandex,
          o.hosts.vk,
          o.hosts.ok,
          o.hosts.avito,
          o.hosts.gismeteo,
          o.hosts.rbc,
          o.hosts.rg
        ]
      }),
      a = [
        93830,
        93511,
        49688,
        92550,
        104220,
        113011,
        129744,
        137740,
        141769,
        143156,
        144204,
        84375,
        87940,
        97693,
        101833,
        126291
      ],
      s = !1;
    (e.disableRtbInOldDirectExperiment = function () {
      s = !0;
    }),
      (e.isRtbInOldDirectExperiment = function (t, e) {
        return !e && !s && !r;
      }),
      (e.isRtbInDirectExperiment = function (t) {
        t.pageId;
        var e = t.product;
        return (
          !t.hasSearchText &&
          (function (t) {
            return "D" === t || "direct" === t;
          })(e)
        );
      }),
      (e.needRtbShadow = function (t) {
        return !(function (t, e) {
          var i;
          return (i = "string" == typeof e ? parseInt(e) : e), -1 !== n.inArray(t, i);
        })(a, t);
      });
  }
]);

document.addEventListener("DOMContentLoaded", function () {
  $(".card").each(function (e) {
    if ($(this).hasClass("card_size_s")) {
      $(this).css({ "border-radius": "22px" });
    } else {
      $(this).css({ "border-radius": "23px" });
    }
  });
  var waterContainer = document.querySelector(".card.card_size_s:last-child");

  waterContainer.innerHTML =
    '<div class="card-heading">' +
    '<div class="card-icon-wrap">' +
    '<img class="card-icon" src="img/kettle.svg">' +
    "</div>" +
    '<h3 class="card-title">Вода вскипела</h3>' +
    " </div>" +
    '<div class="card-specs">' +
    '<p class="card-source">Чайник</p>' +
    '<p class="card-time card-time_block">16:20, Сегодня</p>' +
    "</div>";
});

$(document).ready(function () {
  var carousel = $("#carousel");

  carousel.owlCarousel();
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(
      ".card_size_m:nth-child(8) .card-description"
    );
    setTimeout(function () {
      const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
      const purchaseListContainer = document.createElement("div");
      const purchaseListTitle = document.createElement("p");
      const purchaseList = document.createElement("ol");
      const purchaseListItemOne = document.createElement("li");
      const purchaseListItemTwo = document.createElement("li");

      purchaseListContainer.setAttribute("class", "purchase-list-wrap");
      purchaseListTitle.setAttribute(
        "class",
        "card-description card-description_big description_critical"
      );
      purchaseListTitle.textContent = "Список покупок:";
      purchaseList.setAttribute("class", "purchase-list");
      purchaseListItemOne.setAttribute("class", "purchase-list__item");
      purchaseListItemOne.textContent = "Хлеб";
      purchaseListItemTwo.setAttribute("class", "purchase-list__item");
      purchaseListItemTwo.textContent = "Молоко";

      purchaseListContainer.appendChild(purchaseListTitle);
      purchaseListContainer.appendChild(purchaseList);
      purchaseList.appendChild(purchaseListItemOne);
      purchaseList.appendChild(purchaseListItemTwo);

      confirmPurchaseButton.onclick = () => {
        fridgeInfoContainer.replaceWith(purchaseListContainer);
        buttonsContainer.style.display = "none";
      };
    }, 500);

    document
      .getElementsByClassName("header-menu__switcher")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active");
      });
  },
  !1
);
