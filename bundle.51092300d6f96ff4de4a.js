(() => {
    var n = {
            132: (n, t, e) => {
                var r = { "./Cailey.jpg": 989, "./Clara.jpg": 334, "./Jack.jpg": 513, "./Ophelia.jpg": 635, "./Philippe.jpg": 105, "./Reina.jpg": 825, "./Riah.jpg": 886, "./Shay.jpg": 680, "./Sunny.jpg": 401, "./Treyton.jpg": 963 };
                function i(n) {
                    var t = o(n);
                    return e(t);
                }
                function o(n) {
                    if (!e.o(r, n)) {
                        var t = new Error("Cannot find module '" + n + "'");
                        throw ((t.code = "MODULE_NOT_FOUND"), t);
                    }
                    return r[n];
                }
                (i.keys = function () {
                    return Object.keys(r);
                }),
                    (i.resolve = o),
                    (n.exports = i),
                    (i.id = 132);
            },
            989: (n, t, e) => {
                "use strict";
                n.exports = e.p + "b84dab78fd68bfb4df6f.jpg";
            },
            334: (n, t, e) => {
                "use strict";
                n.exports = e.p + "d274d32d360124a019f7.jpg";
            },
            513: (n, t, e) => {
                "use strict";
                n.exports = e.p + "8f6c6e7a27ca449363d3.jpg";
            },
            635: (n, t, e) => {
                "use strict";
                n.exports = e.p + "d6314b6de0933fce7612.jpg";
            },
            105: (n, t, e) => {
                "use strict";
                n.exports = e.p + "c7cba32edaabf298243f.jpg";
            },
            825: (n, t, e) => {
                "use strict";
                n.exports = e.p + "d2d7259609437c3622e1.jpg";
            },
            886: (n, t, e) => {
                "use strict";
                n.exports = e.p + "1fc12bbe91221faaa053.jpg";
            },
            680: (n, t, e) => {
                "use strict";
                n.exports = e.p + "854899f6562fa9bfece1.jpg";
            },
            401: (n, t, e) => {
                "use strict";
                n.exports = e.p + "ecefa171570abbd89af9.jpg";
            },
            963: (n, t, e) => {
                "use strict";
                n.exports = e.p + "f066fac3a67a7ef87fc9.jpg";
            },
        },
        t = {};
    function e(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = (t[r] = { exports: {} });
        return n[r](o, o.exports, e), o.exports;
    }
    (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (n) {
            if ("object" == typeof window) return window;
        }
    })()),
        (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
        (() => {
            var n;
            e.g.importScripts && (n = e.g.location + "");
            var t = e.g.document;
            if (!n && t && (t.currentScript && (n = t.currentScript.src), !n)) {
                var r = t.getElementsByTagName("script");
                r.length && (n = r[r.length - 1].src);
            }
            if (!n) throw new Error("Automatic publicPath is not supported in this browser");
            (n = n
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (e.p = n);
        })(),
        (() => {
            "use strict";
            function n(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function t(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
                }
            }
            var r = {},
                i = (function () {
                    function i() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.random();
                        n(this, i), (this.name = t), r[t] ? (this.img = r[t].cloneNode()) : ((this.img = new Image()), (this.img.src = e(132)("./".concat(t, ".jpg"))), (r[t] = this.img));
                    }
                    var o, a;
                    return (
                        (o = i),
                        (a = [
                            {
                                key: "preload",
                                value: function () {
                                    i.symbols.forEach(function (n) {
                                        return new i(n);
                                    });
                                },
                            },
                            {
                                key: "symbols",
                                get: function () {
                                    return ["Cailey", "Clara", "Jack", "Ophelia", "Philippe", "Reina", "Riah", "Shay", "Sunny", "Treyton"];
                                },
                            },
                            {
                                key: "random",
                                value: function (n) {
                                    return null != n && Math.random() < 0.2 ? n : this.symbols[Math.floor(Math.random() * this.symbols.length)];
                                },
                            },
                        ]),
                        null && t(o.prototype, null),
                        a && t(o, a),
                        Object.defineProperty(o, "prototype", { writable: !1 }),
                        i
                    );
                })();
            function o(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
                }
            }
            var a = (function () {
                function n(t, e, r) {
                    var o = this;
                    !(function (n, t) {
                        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, n),
                        (this.reelContainer = t),
                        (this.idx = e),
                        (this.symbolContainer = document.createElement("div")),
                        this.symbolContainer.classList.add("icons"),
                        this.reelContainer.appendChild(this.symbolContainer),
                        (this.animation = this.symbolContainer.animate(
                            [
                                { transform: "none", filter: "blur(0)" },
                                { filter: "blur(2px)", offset: 0.5 },
                                { transform: "translateY(-".concat(((10 * Math.floor(this.factor)) / (3 + 10 * Math.floor(this.factor))) * 100, "%)"), filter: "blur(0)" },
                            ],
                            { duration: 1e3 * this.factor, easing: "ease-in-out" }
                        )),
                        this.animation.cancel(),
                        r.forEach(function (n) {
                            return o.symbolContainer.appendChild(new i(n).img);
                        });
                }
                var t, e;
                return (
                    (t = n),
                    (e = [
                        {
                            key: "factor",
                            get: function () {
                                return 1 + Math.pow(this.idx / 2, 2);
                            },
                        },
                        {
                            key: "renderSymbols",
                            value: function (n) {
                                for (var t = document.createDocumentFragment(), e = 3; e < 3 + 10 * Math.floor(this.factor); e++) {
                                    var r = new i(e >= 10 * Math.floor(this.factor) - 2 ? n[e - 10 * Math.floor(this.factor)] : void 0);
                                    t.appendChild(r.img);
                                }
                                this.symbolContainer.appendChild(t);
                            },
                        },
                        {
                            key: "spin",
                            value: function () {
                                var n = this,
                                    t = new Promise(function (t) {
                                        return (n.animation.onfinish = t);
                                    }),
                                    e = new Promise(function (t) {
                                        return setTimeout(t, 1e3 * n.factor);
                                    });
                                return (
                                    this.animation.play(),
                                    Promise.race([t, e]).then(function () {
                                        "finished" !== n.animation.playState && n.animation.finish();
                                        for (var t = n.symbolContainer.children.length - 3, e = 0; e < t; e++) n.symbolContainer.firstChild.remove();
                                    })
                                );
                            },
                        },
                    ]) && o(t.prototype, e),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    n
                );
            })();
            function s(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
                }
            }
            var l = (function () {
                    function n(t) {
                        var e = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        s(this, n),
                            i.preload(),
                            (this.currentSymbols = [
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                            ]),
                            (this.nextSymbols = [
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                                ["Jack", "Jack", "Jack"],
                            ]),
                            (this.winnings = new Map([
                                ["Cailey", 0],
                                ["Clara", 0],
                                ["Jack", 0],
                                ["Ophelia", 0],
                                ["Philippe", 0],
                                ["Reina", 0],
                                ["Riah", 0],
                                ["Shay", 0],
                                ["Sunny", 0],
                                ["Treyton", 0],
                            ])),
                            (this.container = t),
                            (this.reels = Array.from(this.container.getElementsByClassName("reel")).map(function (n, t) {
                                return new a(n, t, e.currentSymbols[t]);
                            })),
                            (this.spinButton = document.getElementById("spin")),
                            this.spinButton.addEventListener("click", function () {
                                return e.spin();
                            }),
                            r.inverted && this.container.classList.add("inverted"),
                            (this.config = r);
                    }
                    var t, e;
                    return (
                        (t = n),
                        (e = [
                            {
                                key: "spin",
                                value: function () {
                                    var n = this;
                                    (this.currentSymbols = this.nextSymbols), (this.nextSymbols = [[i.random(null), i.random(null), i.random(null)]]);
                                    for (var t = 0; t < 3; t++) this.nextSymbols.push([i.random(this.nextSymbols[t][0]), i.random(this.nextSymbols[t][1]), i.random(this.nextSymbols[t][2])]);
                                    return (
                                        this.nextSymbols.push([i.random(null), i.random(null), i.random(null)]),
                                        this.onSpinStart(this.nextSymbols),
                                        Promise.all(
                                            this.reels.map(function (t) {
                                                return t.renderSymbols(n.nextSymbols[t.idx]), t.spin();
                                            })
                                        ).then(function () {
                                            return n.onSpinEnd(n.nextSymbols);
                                        })
                                    );
                                },
                            },
                            {
                                key: "onSpinStart",
                                value: function (n) {
                                    var t, e;
                                  
    this.spinCount++;
                                    console.log(this.spinCount);
    document.getElementById("counter").textContent = this.spinCount;
                                    (this.spinButton.disabled = !0), null === (t = (e = this.config).onSpinStart) || void 0 === t || t.call(e, n);
                                },
                            },
                            {
                                key: "onSpinEnd",
                                value: function (n) {
                                    for (var t, e, r = 0; r < 3; r++) {
                                        var i;
                                        n[0][r] == n[1][r] && n[1][r] == n[2][r] && n[2][r] == n[3][r] && n[3][r] == n[4][r] && this.winnings.set(n[0][r], (null !== (i = this.winnings.get(n[0][r])) && void 0 !== i ? i : 0) + 1);
                                    }
                                    this.winnings.forEach(function (n, t) {
                                        document.getElementById(t).innerText = n;
                                    }),
                                        (this.spinButton.disabled = !1),
                                        null === (t = (e = this.config).onSpinEnd) || void 0 === t || t.call(e, n);
                                },
                            },
                        ]) && c(t.prototype, e),
                        Object.defineProperty(t, "prototype", { writable: !1 }),
                        n
                    );
                })(),
                u = {
                    inverted: !1,
                    onSpinStart: function (n) {
                        console.log("onSpinStart", n);
                    },
                    onSpinEnd: function (n) {
                        console.log("onSpinEnd", n);
                    },
                };
            new l(document.getElementById("slot"), u);
        })();
})();
