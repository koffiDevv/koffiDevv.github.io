! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        u = {},
        c = u.toString,
        f = u.hasOwnProperty,
        d = f.toString,
        h = d.call(Object),
        p = {};

    function g(e, t) {
        var n = (t = t || i).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    var m = function (e, t) {
            return new m.fn.init(e, t)
        },
        v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        y = /^-ms-/,
        b = /-([a-z])/g,
        _ = function (e, t) {
            return t.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: "3.2.1",
        constructor: m,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = m.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return m.each(this, e)
        },
        map: function (e) {
            return this.pushStack(m.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, m.extend = m.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || m.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (m.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && m.isPlainObject(n) ? n : {}, s[t] = m.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, m.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === m.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = m.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = r(e)) && (n = f.call(t, "constructor") && t.constructor, "function" != typeof n || d.call(n) !== h))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            g(e)
        },
        camelCase: function (e) {
            return e.replace(y, "ms-").replace(b, _)
        },
        each: function (e, t) {
            var n, i = 0;
            if (w(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(v, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function (e, t, n) {
            var i, r, o = 0,
                a = [];
            if (w(e))
                for (i = e.length; o < i; o++) r = t(e[o], o, n), null != r && a.push(r);
            else
                for (o in e) r = t(e[o], o, n), null != r && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m.isFunction(e)) return i = o.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }, r.guid = e.guid = e.guid || m.guid++, r
        },
        now: Date.now,
        support: p
    }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = m.type(e);
        return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, i, r, o, s, a, l, u, c, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            T = 0,
            x = se(),
            C = se(),
            S = se(),
            A = function (e, t) {
                return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            N = [],
            I = N.pop,
            k = N.push,
            O = N.push,
            L = N.slice,
            j = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            q = new RegExp(P + "+", "g"),
            F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            V = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            K = new RegExp(W),
            Q = new RegExp("^" + M + "$"),
            Y = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            $ = /^(?:input|select|textarea|button)$/i,
            z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function () {
                d()
            },
            re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(N = L.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: N.length ? function (e, t) {
                    k.apply(e, L.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, a, u, c, f, p, v, y = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
                if (11 !== E && (f = X.exec(e)))
                    if (o = f[1]) {
                        if (9 === E) {
                            if (!(u = t.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i
                    } else {
                        if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== E) y = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = _), a = (p = s(e)).length; a--;) p[a] = "#" + c + " " + ve(p[a]);
                        v = p.join(","), y = J.test(e) && he(t.parentNode) || t
                    }
                    if (v) try {
                        return O.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {} finally {
                        c === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, i, r)
        }

        function se() {
            var e = [];

            function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            return t
        }

        function ae(e) {
            return e[_] = !0, e
        }

        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function de(e) {
            return ae(function (t) {
                return t = +t, ae(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, d = oe.setDocument = function (e) {
            var t, r, s = e ? e.ownerDocument || e : w;
            return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = G.test(h.getElementsByClassName), n.getById = le(function (e) {
                return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], m = [], (n.qsa = G.test(h.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = G.test(p.compareDocumentPosition), b = t || G.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, A = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : c ? j(c, e) - j(c, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : c ? j(c, e) - j(c, t) : 0;
                if (r === o) return ce(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ce(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            }, h) : h
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== h && d(e), t = t.replace(V, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return oe(t, h, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && d(e), b(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== h && d(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, i = [],
                r = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
            }
            return c = null, e
        }, r = oe.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += r(t);
            return n
        }, (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = x[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && x(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (b = (h = (u = (c = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [E, h, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], h = u[0] === E && u[1], b = h), !1 === b)
                                for (;
                                    (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[_] || (d[_] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [E, b]), d !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;) i = j(e, o[s]), e[i] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(F, "$1"));
                    return i[_] ? ae(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ae(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                        }
                }),
                lang: ae(function (e) {
                    return Q.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === p
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return z.test(e.nodeName)
                },
                input: function (e) {
                    return $.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: de(function () {
                    return [0]
                }),
                last: de(function (e, t) {
                    return [t - 1]
                }),
                eq: de(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: de(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: de(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = (pe = t, function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === pe
        });
        var pe;
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = (ge = t, function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === ge
        });
        var ge;

        function me() {}
        me.prototype = i.filters = i.pseudos, i.setFilters = new me, s = oe.tokenize = function (e, t) {
            var n, r, o, s, a, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = i.preFilter; a;) {
                n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(F, " ")
                }), a = a.slice(n.length));
                for (s in i.filter) !(r = Y[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : C(e, l).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var u, c, f, d = [E, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (f = t[_] || (t[_] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === E && u[1] === a) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function we(e, t, n, i, r, o) {
            return i && !i[_] && (i = we(i)), r && !r[_] && (r = we(r, o)), ae(function (o, s, a, l) {
                var u, c, f, d = [],
                    h = [],
                    p = s.length,
                    g = o || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : _e(g, d, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (u = _e(v, h), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (u = r ? j(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
                    }
                } else v = _e(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v)
            })
        }

        function Ee(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = ye(function (e) {
                    return e === t
                }, a, !0), f = ye(function (e) {
                    return j(t, e) > -1
                }, a, !0), d = [function (e, n, i) {
                    var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) d = [ye(be(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return we(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && ve(e))
                    }
                    d.push(n)
                } return be(d)
        }
        return a = oe.compile = function (e, t) {
            var n, r = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                for (t || (t = s(e)), n = t.length; n--;) a = Ee(t[n]), a[_] ? r.push(a) : o.push(a);
                (a = S(e, function (e, t) {
                    var n = t.length > 0,
                        r = e.length > 0,
                        o = function (o, s, a, l, c) {
                            var f, p, m, v = 0,
                                y = "0",
                                b = o && [],
                                _ = [],
                                w = u,
                                T = o || r && i.find.TAG("*", c),
                                x = E += null == w ? 1 : Math.random() || .1,
                                C = T.length;
                            for (c && (u = s === h || s || c); y !== C && null != (f = T[y]); y++) {
                                if (r && f) {
                                    for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); m = e[p++];)
                                        if (m(f, s || h, a)) {
                                            l.push(f);
                                            break
                                        } c && (E = x)
                                }
                                n && ((f = !m && f) && v--, o && b.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (p = 0; m = t[p++];) m(b, _, s, a);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) b[y] || _[y] || (_[y] = I.call(l));
                                    _ = _e(_)
                                }
                                O.apply(l, _), c && !o && _.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                            }
                            return c && (E = x, u = w), b
                        };
                    return n ? ae(o) : o
                }(o, r))).selector = e
            }
            return a
        }, l = oe.select = function (e, t, n, r) {
            var o, l, u, c, f, d = "function" == typeof e && e,
                h = !r && s(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                    if ((f = i.find[c]) && (r = f(u.matches[0].replace(Z, ee), J.test(l[0].type) && he(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && ve(l))) return O.apply(n, r), n;
                        break
                    }
            }
            return (d || a(e, h))(r, t, !g, n, !t || J.test(e) && he(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(H, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    m.find = E, m.expr = E.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = E.uniqueSort, m.text = E.getText, m.isXMLDoc = E.isXML, m.contains = E.contains, m.escapeSelector = E.escape;
    var T = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && m(e).is(n)) break;
                    i.push(e)
                } return i
        },
        x = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        C = m.expr.match.needsContext;

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function N(e, t, n) {
        return m.isFunction(t) ? m.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? m.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? m.grep(e, function (e) {
            return l.call(t, e) > -1 !== n
        }) : D.test(t) ? m.filter(t, e, n) : (t = m.filter(t, e), m.grep(e, function (e) {
            return l.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    m.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? m.find.matchesSelector(i, e) ? [i] : [] : m.find.matches(e, m.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, m.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(m(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (m.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) m.find(e, r[t], n);
            return i > 1 ? m.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function (e) {
            return !!N(this, "string" == typeof e && C.test(e) ? m(e) : e || [], !1).length
        }
    });
    var I, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (m.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || I, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && m.isPlainObject(t))
                    for (r in t) m.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this)
    }).prototype = m.fn, I = m(i);
    var O = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.fn.extend({
        has: function (e) {
            var t = m(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (m.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && m(e);
            if (!C.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(m(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    m.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return T(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function (e) {
            return j(e, "nextSibling")
        },
        prev: function (e) {
            return j(e, "previousSibling")
        },
        nextAll: function (e) {
            return T(e, "nextSibling")
        },
        prevAll: function (e) {
            return T(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function (e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return x(e.firstChild)
        },
        contents: function (e) {
            return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), m.merge([], e.childNodes))
        }
    }, function (e, t) {
        m.fn[e] = function (n, i) {
            var r = m.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = m.filter(i, r)), this.length > 1 && (L[e] || m.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    m.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return m.each(e.match(H) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : m.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function () {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        m.each(n, function (n, i) {
                            m.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== m.type(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return m.each(arguments, function (e, t) {
                        for (var n;
                            (n = m.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function (e) {
                    return e ? m.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = s = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    };

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && m.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && m.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    m.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2],
                    ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return m.Deferred(function (t) {
                            m.each(n, function (n, i) {
                                var r = m.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    u = function () {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, m.isFunction(u) ? r ? u.call(e, s(o, n, P, r), s(o, n, M, r)) : (o++, u.call(e, s(o, n, P, r), s(o, n, M, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function () {
                                        try {
                                            u()
                                        } catch (e) {
                                            m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? c() : (m.Deferred.getStackHook && (c.stackTrace = m.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return m.Deferred(function (e) {
                            n[0][3].add(s(0, e, m.isFunction(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, m.isFunction(t) ? t : P)), n[2][3].add(s(0, e, m.isFunction(i) ? i : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? m.extend(e, r) : r
                    }
                },
                o = {};
            return m.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = m.Deferred(),
                a = function (e) {
                    return function (n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m.isFunction(r[n] && r[n].then))) return s.then();
            for (; n--;) R(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    m.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, m.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var q = m.Deferred();
    m.fn.ready = function (e) {
        return q.then(e).catch(function (e) {
            m.readyException(e)
        }), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || q.resolveWith(i, [m]))
        }
    }), m.ready.then = q.then;

    function F() {
        i.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), m.ready()
    }
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(m.ready) : (i.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var B = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === m.type(n)) {
                r = !0;
                for (a in n) B(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, m.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(m(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function V() {
        this.expando = m.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[m.camelCase(t)] = n;
            else
                for (i in t) r[m.camelCase(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(m.camelCase) : t = (t = m.camelCase(t)) in i ? [t] : t.match(H) || [], n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || m.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !m.isEmptyObject(t)
        }
    };
    var K = new V,
        Q = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $ = /[A-Z]/g;

    function z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace($, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Y.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        var r;
        return n
    }
    m.extend({
        hasData: function (e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function (e, t) {
            K.remove(e, t)
        }
    }), m.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = m.camelCase(i.slice(5)), z(o, i, r[i])));
                    K.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Q.set(this, e)
            }) : B(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Q.get(o, e))) return n;
                    if (void 0 !== (n = z(o, e))) return n
                } else this.each(function () {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), m.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, m.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = m.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = m._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                m.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: m.Callbacks("once memory").add(function () {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), m.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = m.queue(this, e, t);
                m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                m.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = m.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = K.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        Z = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display")
        },
        ee = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        };

    function te(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return m.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (m.cssNumber[t] ? "" : "px"),
            c = (m.cssNumber[t] || "px" !== u && +l) && X.exec(m.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, m.style(e, t, c + u)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var ne = {};

    function ie(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = ne[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = m.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ne[i] = r, r)
    }

    function re(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Z(i) && (r[o] = ie(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    m.fn.extend({
        show: function () {
            return re(this, !0)
        },
        hide: function () {
            return re(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Z(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    var oe = /^(?:checkbox|radio)$/i,
        se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;

    function ue(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? m.merge([e], n) : n
    }

    function ce(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    var fe = /<|&#?\w+;/;

    function de(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if (o = e[h], o || 0 === o)
                if ("object" === m.type(o)) m.merge(d, o.nodeType ? [o] : o);
                else if (fe.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (se.exec(o) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, s.innerHTML = l[1] + m.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            m.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (i && m.inArray(o, i) > -1) r && r.push(o);
            else if (u = m.contains(o.ownerDocument, o), s = ue(f.appendChild(o), "script"), u && ce(s), n)
            for (c = 0; o = s[c++];) ae.test(o.type || "") && n.push(o);
        return f
    }! function () {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var he = i.documentElement,
        pe = /^key/,
        ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        me = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ye() {
        return !1
    }

    function be() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function _e(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) _e(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ye;
        else if (!r) return e;
        return 1 === o && (s = r, r = function (e) {
            return m().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = m.guid++)), e.each(function () {
            m.event.add(this, t, r, i, n)
        })
    }
    m.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, h, p, g, v = K.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && m.find.matchesSelector(he, r), n.guid || (n.guid = m.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                        return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(H) || [""]).length; u--;) a = me.exec(t[u]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h && (f = m.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = m.event.special[h] || {}, c = m.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && m.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), m.event.global[h] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, h, p, g, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                    if (a = me.exec(t[u]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = m.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || m.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) m.event.remove(e, h + t[u], n, i, !0);
                m.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, s, a = m.event.fix(e),
                l = new Array(arguments.length),
                u = (K.get(this, "events") || {})[a.type] || [],
                c = m.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = m.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, i = ((m.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? m(r, this).index(u) > -1 : m.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(m.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[m.expando] ? e : new m.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== be() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === be() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return S(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, m.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, m.Event = function (e, t) {
        return this instanceof m.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(e, t)
    }, m.Event.prototype = {
        constructor: m.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && pe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, m.event.addProp), m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        m.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || m.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), m.fn.extend({
        on: function (e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ye), this.each(function () {
                m.event.remove(this, e, n, t)
            })
        }
    });
    var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xe = /^true\/(.*)/,
        Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Se(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") ? m(">tbody", e)[0] || e : e
    }

    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function De(e) {
        var t = xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ne(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e), s = K.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) m.event.add(t, r, u[r][n])
            }
            Q.hasData(e) && (a = Q.access(e), l = m.extend({}, a), Q.set(t, l))
        }
    }

    function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function ke(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, u, c, f = 0,
            d = e.length,
            h = d - 1,
            v = t[0],
            y = m.isFunction(v);
        if (y || d > 1 && "string" == typeof v && !p.checkClone && Te.test(v)) return e.each(function (r) {
            var o = e.eq(r);
            y && (t[0] = v.call(this, r, o.html())), ke(o, t, n, i)
        });
        if (d && (r = de(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = m.map(ue(r, "script"), Ae)).length; f < d; f++) u = r, f !== h && (u = m.clone(u, !0, !0), l && m.merge(a, ue(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument, m.map(a, De), f = 0; f < l; f++) u = a[f], ae.test(u.type || "") && !K.access(u, "globalEval") && m.contains(c, u) && (u.src ? m._evalUrl && m._evalUrl(u.src) : g(u.textContent.replace(Ce, ""), c))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var i, r = t ? m.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || m.cleanData(ue(i)), i.parentNode && (n && m.contains(i.ownerDocument, i) && ce(ue(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    m.extend({
        htmlPrefilter: function (e) {
            return e.replace(we, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = m.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                for (s = ue(a), o = ue(e), i = 0, r = o.length; i < r; i++) Ie(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || ue(e), s = s || ue(a), i = 0, r = o.length; i < r; i++) Ne(o[i], s[i]);
                else Ne(e, a);
            return (s = ue(a, "script")).length > 0 && ce(s, !l && ue(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, r = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (U(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? m.event.remove(n, i) : m.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), m.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? m.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return ke(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    Se(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return ke(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return ke(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return ke(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(ue(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return m.clone(this, e, t)
            })
        },
        html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = m.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (m.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return ke(this, arguments, function (t) {
                var n = this.parentNode;
                m.inArray(this, e) < 0 && (m.cleanData(ue(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        m.fn[e] = function (e) {
            for (var n, i = [], r = m(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), m(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Le = /^margin/,
        je = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        He = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", he.appendChild(a);
                var t = e.getComputedStyle(l);
                n = "1%" !== t.top, s = "2px" === t.marginLeft, r = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, he.removeChild(a), l = null
            }
        }
        var n, r, o, s, a = i.createElement("div"),
            l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), m.extend(p, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), s
            }
        }))
    }();

    function Pe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || He(e)) && (s = n.getPropertyValue(t) || n[t], "" !== s || m.contains(e.ownerDocument, e) || (s = m.style(e, t)), !p.pixelMarginRight() && je.test(s) && Le.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Me(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    var Re = /^(none|table(?!-c[ea]).+)/,
        We = /^--/,
        qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Fe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Be = ["Webkit", "Moz", "ms"],
        Ue = i.createElement("div").style;

    function Ve(e) {
        var t = m.cssProps[e];
        return t || (t = m.cssProps[e] = function (e) {
            if (e in Ue) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                if (e = Be[n] + t, e in Ue) return e
        }(e) || e), t
    }

    function Ke(e, t, n) {
        var i = X.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += m.css(e, n + J[o], !0, r)), i ? ("content" === n && (s -= m.css(e, "padding" + J[o], !0, r)), "margin" !== n && (s -= m.css(e, "border" + J[o] + "Width", !0, r))) : (s += m.css(e, "padding" + J[o], !0, r), "padding" !== n && (s += m.css(e, "border" + J[o] + "Width", !0, r)));
        return s
    }

    function Ye(e, t, n) {
        var i, r = He(e),
            o = Pe(e, t, r),
            s = "border-box" === m.css(e, "boxSizing", !1, r);
        return je.test(o) ? o : (i = s && (p.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Qe(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = m.camelCase(t),
                    l = We.test(t),
                    u = e.style;
                return l || (t = Ve(a)), s = m.cssHooks[t] || m.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (o = typeof n) && (r = X.exec(n)) && r[1] && (n = te(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (m.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = m.camelCase(t);
            return We.test(t) || (t = Ve(a)), (s = m.cssHooks[t] || m.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Pe(e, t, i)), "normal" === r && t in Fe && (r = Fe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), m.each(["height", "width"], function (e, t) {
        m.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Re.test(m.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, t, i) : ee(e, qe, function () {
                    return Ye(e, t, i)
                })
            },
            set: function (e, n, i) {
                var r, o = i && He(e),
                    s = i && Qe(e, t, i, "border-box" === m.css(e, "boxSizing", !1, o), o);
                return s && (r = X.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = m.css(e, t)), Ke(0, n, s)
            }
        }
    }), m.cssHooks.marginLeft = Me(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        m.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + J[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Le.test(e) || (m.cssHooks[e + t].set = Ke)
    }), m.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; s < r; s++) o[t[s]] = m.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function $e(e, t, n, i, r) {
        return new $e.prototype.init(e, t, n, i, r)
    }
    m.Tween = $e, ($e.prototype = {
        constructor: $e,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (m.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = $e.propHooks[this.prop];
            return e && e.get ? e.get(this) : $e.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = $e.propHooks[this.prop];
            return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $e.propHooks._default.set(this), this
        }
    }).init.prototype = $e.prototype, ($e.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = $e.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, m.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, m.fx = $e.prototype.init, m.fx.step = {};
    var ze, Ge, Xe = /^(?:toggle|show|hide)$/,
        Je = /queueHooks$/;

    function Ze() {
        Ge && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(Ze) : e.setTimeout(Ze, m.fx.interval), m.fx.tick())
    }

    function et() {
        return e.setTimeout(function () {
            ze = void 0
        }), ze = m.now()
    }

    function tt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = J[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function nt(e, t, n) {
        for (var i, r = (it.tweeners[t] || []).concat(it.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function it(e, t, n) {
        var i, r, o = 0,
            s = it.prefilters.length,
            a = m.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = ze || et(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: m.extend({}, t),
                opts: m.extend(!0, {
                    specialEasing: {},
                    easing: m.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ze || et(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = m.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (i = m.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = m.cssHooks[i], s && "expand" in s) {
                        o = s.expand(o), delete e[i];
                        for (n in o) n in e || (e[n] = o[n], t[n] = r)
                    } else t[i] = r
            }(c, u.opts.specialEasing); o < s; o++)
            if (i = it.prefilters[o].call(u, e, c, u.opts)) return m.isFunction(i.stop) && (m._queueHooks(u.elem, u.opts.queue).stop = m.proxy(i.stop, i)), i;
        return m.map(c, nt, u), m.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), m.fx.timer(m.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    m.Animation = m.extend(it, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return te(n.elem, e, X.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(H);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], it.tweeners[n] = it.tweeners[n] || [], it.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && Z(e),
                    v = K.get(e, "fxshow");
                n.queue || (s = m._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function () {
                    d.always(function () {
                        s.unqueued--, m.queue(e, "fx").length || s.empty.fire()
                    })
                }));
                for (i in t)
                    if (r = t[i], Xe.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i]) continue;
                            g = !0
                        }
                        h[i] = v && v[i] || m.style(e, i)
                    } if ((l = !m.isEmptyObject(t)) || !m.isEmptyObject(h)) {
                    f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = K.get(e, "display")), c = m.css(e, "display"), "none" === c && (u ? c = u : (re([e], !0), u = e.style.display || u, c = m.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === m.css(e, "float") && (l || (d.done(function () {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1;
                    for (i in h) l || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", {
                        display: u
                    }), o && (v.hidden = !g), g && re([e], !0), d.done(function () {
                        g || re([e]), K.remove(e, "fxshow");
                        for (i in h) m.style(e, i, h[i])
                    })), l = nt(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
                }
            }],
            prefilter: function (e, t) {
                t ? it.prefilters.unshift(e) : it.prefilters.push(e)
            }
        }), m.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? m.extend({}, e) : {
                complete: n || !n && t || m.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !m.isFunction(t) && t
            };
            return m.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in m.fx.speeds ? i.duration = m.fx.speeds[i.duration] : i.duration = m.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                m.isFunction(i.old) && i.old.call(this), i.queue && m.dequeue(this, i.queue)
            }, i
        }, m.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Z).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = m.isEmptyObject(e),
                    o = m.speed(t, n, i),
                    s = function () {
                        var t = it(this, m.extend({}, e), o);
                        (r || K.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = m.timers,
                        s = K.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Je.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || m.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = K.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = m.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, m.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function (e, t) {
            var n = m.fn[t];
            m.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tt(t, !0), e, i, r)
            }
        }), m.each({
            slideDown: tt("show"),
            slideUp: tt("hide"),
            slideToggle: tt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            m.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), m.timers = [], m.fx.tick = function () {
            var e, t = 0,
                n = m.timers;
            for (ze = m.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || m.fx.stop(), ze = void 0
        }, m.fx.timer = function (e) {
            m.timers.push(e), m.fx.start()
        }, m.fx.interval = 13, m.fx.start = function () {
            Ge || (Ge = !0, Ze())
        }, m.fx.stop = function () {
            Ge = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function (t, n) {
            return t = m.fx ? m.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
        function () {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var rt, ot = m.expr.attrHandle;
    m.fn.extend({
        attr: function (e, t) {
            return B(this, m.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                m.removeAttr(this, e)
            })
        }
    }), m.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (r = m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? rt : void 0)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = m.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), rt = {
        set: function (e, t, n) {
            return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || m.find.attr;
        ot[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = ot[s], ot[s] = r, r = null != n(e, t, i) ? s : null, ot[s] = o), r
        }
    });
    var st = /^(?:input|select|textarea|button)$/i,
        at = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (e, t) {
            return B(this, m.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[m.propFix[e] || e]
            })
        }
    }), m.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, r = m.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = m.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : st.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (m.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    });

    function lt(e) {
        return (e.match(H) || []).join(" ")
    }

    function ut(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    m.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (m.isFunction(e)) return this.each(function (t) {
                m(this).addClass(e.call(this, t, ut(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; n = this[l++];)
                    if (r = ut(n), i = 1 === n.nodeType && " " + lt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = lt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (m.isFunction(e)) return this.each(function (t) {
                m(this).removeClass(e.call(this, t, ut(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; n = this[l++];)
                    if (r = ut(n), i = 1 === n.nodeType && " " + lt(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = lt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function (n) {
                m(this).toggleClass(e.call(this, n, ut(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = m(this), o = e.match(H) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = ut(this), t && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + lt(ut(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ct = /\r/g;
    m.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = m.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, m(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = m.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = m.valHooks[r.type] || m.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ct, "") : null == n ? "" : n : void 0
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = m.find.attr(e, "value");
                    return null != t ? t : lt(m.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = m(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = m.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = m.inArray(m.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = m.inArray(m(e).val(), t) > -1
            }
        }, p.checkOn || (m.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    m.extend(m.event, {
        trigger: function (t, n, r, o) {
            var s, a, l, u, c, d, h, p = [r || i],
                g = f.call(t, "type") ? t.type : t,
                v = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !ft.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, t = t[m.expando] ? t : new m.Event(g, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : m.makeArray(n, [t]), h = m.event.special[g] || {}, o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!o && !h.noBubble && !m.isWindow(r)) {
                    for (u = h.delegateType || g, ft.test(u + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), l = a;
                    l === (r.ownerDocument || i) && p.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = p[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? u : h.bindType || g, d = (K.get(a, "events") || {})[t.type] && K.get(a, "handle"), d && d.apply(a, n), d = c && a[c], d && d.apply && U(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = g, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), n) || !U(r) || c && m.isFunction(r[g]) && !m.isWindow(r) && (l = r[c], l && (r[c] = null), m.event.triggered = g, r[g](), m.event.triggered = void 0, l && (r[c] = l)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = m.extend(new m.Event, n, {
                type: e,
                isSimulated: !0
            });
            m.event.trigger(i, null, t)
        }
    }), m.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                m.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return m.event.trigger(e, t, n, !0)
        }
    }), m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        m.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), m.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            m.event.simulate(t, e.target, m.event.fix(e))
        };
        m.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = K.access(i, t);
                r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = K.access(i, t) - 1;
                r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    });
    var dt = e.location,
        ht = m.now(),
        pt = /\?/;
    m.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + t), n
    };
    var gt = /\[\]$/,
        mt = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;

    function bt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) m.each(t, function (t, r) {
            n || gt.test(e) ? i(e, r) : bt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== m.type(t)) i(e, t);
        else
            for (r in t) bt(e + "[" + r + "]", t[r], n, i)
    }
    m.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = m.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) bt(n, e[n], t, r);
        return i.join("&")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = m.prop(this, "elements");
                return e ? m.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !m(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !oe.test(e))
            }).map(function (e, t) {
                var n = m(this).val();
                return null == n ? null : Array.isArray(n) ? m.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(mt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(mt, "\r\n")
                }
            }).get()
        }
    });
    var _t = /%20/g,
        wt = /#.*$/,
        Et = /([?&])_=[^&]*/,
        Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xt = /^(?:GET|HEAD)$/,
        Ct = /^\/\//,
        St = {},
        At = {},
        Dt = "*/".concat("*"),
        Nt = i.createElement("a");
    Nt.href = dt.href;

    function It(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(H) || [];
            if (m.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function kt(e, t, n, i) {
        var r = {},
            o = e === At;

        function s(a) {
            var l;
            return r[a] = !0, m.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Ot(e, t) {
        var n, i, r = m.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && m.extend(!0, e, i), e
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ot(Ot(e, m.ajaxSettings), t) : Ot(m.ajaxSettings, e)
        },
        ajaxPrefilter: It(St),
        ajaxTransport: It(At),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, f, d, h, p = m.ajaxSetup({}, n),
                g = p.context || p,
                v = p.context && (g.nodeType || g.jquery) ? m(g) : m.event,
                y = m.Deferred(),
                b = m.Callbacks("once memory"),
                _ = p.statusCode || {},
                w = {},
                E = {},
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Tt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) x.always(e[x.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (y.promise(x), p.url = ((t || p.url || dt.href) + "").replace(Ct, dt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = m.param(p.data, p.traditional)), kt(St, p, n, x), c) return x;
            (f = m.event && p.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !xt.test(p.type), o = p.url.replace(wt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(_t, "+")) : (h = p.url.slice(o.length), p.data && (o += (pt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Et, "$1"), h = (pt.test(o) ? "&" : "?") + "_=" + ht++ + h), p.url = o + h), p.ifModified && (m.lastModified[o] && x.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && x.setRequestHeader("If-None-Match", m.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
            if (T = "abort", b.add(p.complete), x.done(p.success), x.fail(p.error), r = kt(At, p, n, x)) {
                if (x.readyState = 1, f && v.trigger("ajaxSend", [x, p]), c) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(w, C)
                } catch (e) {
                    if (c) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, a) {
                var u, d, h, w, E, T = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function (e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, x, i)), w = function (e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, x, u), u ? (p.ifModified && (E = x.getResponseHeader("Last-Modified"), E && (m.lastModified[o] = E), E = x.getResponseHeader("etag"), E && (m.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, h = w.error, u = !h)) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", u ? y.resolveWith(g, [d, T, x]) : y.rejectWith(g, [x, T, h]), x.statusCode(_), _ = void 0, f && v.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? d : h]), b.fireWith(g, [x, T]), f && (v.trigger("ajaxComplete", [x, p]), --m.active || m.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function (e, t, n) {
            return m.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return m.get(e, void 0, t, "script")
        }
    }), m.each(["get", "post"], function (e, t) {
        m[t] = function (e, n, i, r) {
            return m.isFunction(n) && (r = r || i, i = n, n = void 0), m.ajax(m.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, m.isPlainObject(e) && e))
        }
    }), m._evalUrl = function (e) {
        return m.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, m.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m.isFunction(e) && (e = e.call(this[0])), t = m(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return m.isFunction(e) ? this.each(function (t) {
                m(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = m(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = m.isFunction(e);
            return this.each(function (n) {
                m(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                m(this).replaceWith(this.childNodes)
            }), this
        }
    }), m.expr.pseudos.hidden = function (e) {
        return !m.expr.pseudos.visible(e)
    }, m.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, m.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Lt = {
            0: 200,
            1223: 204
        },
        jt = m.ajaxSettings.xhr();
    p.cors = !!jt && "withCredentials" in jt, p.ajax = jt = !!jt, m.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || jt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), m.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return m.globalEval(e), e
            }
        }
    }), m.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), m.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, o) {
                    t = m("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), i.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Pt = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ht.pop() || m.expando + "_" + ht++;
            return this[e] = !0, e
        }
    }), m.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Pt, "$1" + r) : !1 !== t.jsonp && (t.url += (pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || m.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? m(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && m.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), m.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, o, s;
        return t || (p.createHTMLDocument ? (t = i.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = i.location.href, t.head.appendChild(r)) : t = i), o = A.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = de([e], t, s), s && s.length && m(s).remove(), m.merge([], o.childNodes))
    }, m.fn.load = function (e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = lt(e.slice(a)), e = e.slice(0, a)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && m.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? m("<div>").append(m.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        m.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), m.expr.pseudos.animated = function (e) {
        return m.grep(m.timers, function (t) {
            return e === t.elem
        }).length
    }, m.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, u = m.css(e, "position"),
                c = m(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = m.css(e, "top"), l = m.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, m.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                m.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), n = (t = o.ownerDocument).documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + m.css(e[0], "borderTopWidth", !0),
                    left: i.left + m.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - m.css(n, "marginTop", !0),
                    left: t.left - i.left - m.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === m.css(e, "position");) e = e.offsetParent;
                return e || he
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        m.fn[e] = function (i) {
            return B(this, function (e, i, r) {
                var o;
                return m.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), m.each(["top", "left"], function (e, t) {
        m.cssHooks[t] = Me(p.pixelPosition, function (e, n) {
            if (n) return n = Pe(e, t), je.test(n) ? m(e).position()[t] + "px" : n
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        m.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            m.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return B(this, function (t, n, r) {
                    var o;
                    return m.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), m.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), m.holdReady = function (e) {
        e ? m.readyWait++ : m.ready(!0)
    }, m.isArray = Array.isArray, m.parseJSON = JSON.parse, m.nodeName = S, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var Mt = e.jQuery,
        Rt = e.$;
    return m.noConflict = function (t) {
        return e.$ === m && (e.$ = Rt), t && e.jQuery === m && (e.jQuery = Mt), m
    }, t || (e.jQuery = e.$ = m), m
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var r = t(e),
            o = r.overflow,
            s = r.overflowX,
            a = r.overflowY;
        return /(auto|scroll)/.test(o + a + s) ? e : i(n(e))
    }

    function r(e) {
        var n = e && e.offsetParent,
            i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n : window.document.documentElement
    }

    function o(e) {
        return null === e.parentNode ? e : o(e.parentNode)
    }

    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            a = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(a, 0);
        var u = l.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(a)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
        }(u) ? u : r(u);
        var c = o(e);
        return c.host ? s(c.host, t) : s(e, o(t).host)
    }

    function a(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[t]
        }
        return e[t]
    }

    function l(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }

    function u(e, t, n, i) {
        return H(t["offset" + e], n["client" + e], n["offset" + e], V() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function c() {
        var e = window.document.body,
            t = window.document.documentElement,
            n = V() && window.getComputedStyle(t);
        return {
            height: u("Height", e, t, n),
            width: u("Width", e, t, n)
        }
    }

    function f(e) {
        return $({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function d(e) {
        var n = {};
        if (V()) try {
            n = e.getBoundingClientRect();
            var i = a(e, "top"),
                r = a(e, "left");
            n.top += i, n.left += r, n.bottom += i, n.right += r
        } catch (e) {} else n = e.getBoundingClientRect();
        var o = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            s = "HTML" === e.nodeName ? c() : {},
            u = s.width || e.clientWidth || o.right - o.left,
            d = s.height || e.clientHeight || o.bottom - o.top,
            h = e.offsetWidth - u,
            p = e.offsetHeight - d;
        if (h || p) {
            var g = t(e);
            h -= l(g, "x"), p -= l(g, "y"), o.width -= h, o.height -= p
        }
        return f(o)
    }

    function h(e, n) {
        var r = V(),
            o = "HTML" === n.nodeName,
            s = d(e),
            l = d(n),
            u = i(e),
            c = t(n),
            h = +c.borderTopWidth.split("px")[0],
            p = +c.borderLeftWidth.split("px")[0],
            g = f({
                top: s.top - l.top - h,
                left: s.left - l.left - p,
                width: s.width,
                height: s.height
            });
        if (g.marginTop = 0, g.marginLeft = 0, !r && o) {
            var m = +c.marginTop.split("px")[0],
                v = +c.marginLeft.split("px")[0];
            g.top -= h - m, g.bottom -= h - m, g.left -= p - v, g.right -= p - v, g.marginTop = m, g.marginLeft = v
        }
        return (r ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (g = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = a(t, "top"),
                r = a(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(g, n)), g
    }

    function p(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || p(n(e)))
    }

    function g(e, t, r, o) {
        var l = {
                top: 0,
                left: 0
            },
            u = s(e, t);
        if ("viewport" === o) l = function (e) {
            var t = window.document.documentElement,
                n = h(e, t),
                i = H(t.clientWidth, window.innerWidth || 0),
                r = H(t.clientHeight, window.innerHeight || 0),
                o = a(t),
                s = a(t, "left");
            return f({
                top: o - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            })
        }(u);
        else {
            var d;
            "scrollParent" === o ? "BODY" === (d = i(n(e))).nodeName && (d = window.document.documentElement) : d = "window" === o ? window.document.documentElement : o;
            var g = h(d, u);
            if ("HTML" !== d.nodeName || p(u)) l = g;
            else {
                var m = c(),
                    v = m.height,
                    y = m.width;
                l.top += g.top - g.marginTop, l.bottom = v + g.top, l.left += g.left - g.marginLeft, l.right = y + g.left
            }
        }
        return l.left += r, l.top += r, l.right -= r, l.bottom -= r, l
    }

    function m(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = g(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function (e) {
                return $({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function (e, t) {
                return t.area - e.area
            }),
            u = l.filter(function (e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            c = 0 < u.length ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function v(e, t, n) {
        return h(n, s(t, n))
    }

    function y(e) {
        var t = window.getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function b(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function _(e, t, n) {
        n = n.split("-")[0];
        var i = y(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[b(a)], r
    }

    function w(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function E(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = w(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
        }), n
    }

    function T(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function x(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== window.document.body.style[o]) return o
        }
        return null
    }

    function C(e, t, n, r) {
        var o = "BODY" === e.nodeName,
            s = o ? window : e;
        s.addEventListener(t, n, {
            passive: !0
        }), o || C(i(s.parentNode), t, n, r), r.push(s)
    }

    function S() {
        this.state.eventsEnabled || (this.state = function (e, t, n, r) {
            n.updateBound = r, window.addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = i(e);
            return C(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function A() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, e = this.state, window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
        var e
    }

    function D(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function N(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && D(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function I(e, t, n) {
        var i = w(e, function (e) {
                return e.name === t
            }),
            r = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function k(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = G.indexOf(e),
            i = G.slice(n + 1).concat(G.slice(0, n));
        return t ? i.reverse() : i
    }

    function O(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }),
            a = s.indexOf(w(s, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (u = u.map(function (e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return f(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? H(document.documentElement.clientHeight, window.innerHeight || 0) : H(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, r, t, n)
            })
        })).forEach(function (e, t) {
            e.forEach(function (n, i) {
                D(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var L = Math.min, j = Math.floor, H = Math.max, P = ["native code", "[object MutationObserverConstructor]"], M = "undefined" != typeof window, R = ["Edge", "Trident", "Firefox"], W = 0, q = 0; q < R.length; q += 1)
        if (M && 0 <= navigator.userAgent.indexOf(R[q])) {
            W = 1;
            break
        } var F, B, U = M && (B = window.MutationObserver, P.some(function (e) {
            return -1 < (B || "").toString().indexOf(e)
        })) ? function (e) {
            var t = !1,
                n = 0,
                i = document.createElement("span");
            return new MutationObserver(function () {
                    e(), t = !1
                }).observe(i, {
                    attributes: !0
                }),
                function () {
                    t || (t = !0, i.setAttribute("x-index", n), ++n)
                }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, W))
            }
        },
        V = function () {
            return void 0 == F && (F = -1 !== navigator.appVersion.indexOf("MSIE 10")), F
        },
        K = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Q = function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++) n = t[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        Y = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        $ = Object.assign || function (e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        G = z.slice(3),
        X = "flip",
        J = "clockwise",
        Z = "counterclockwise",
        ee = function () {
            function t(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                K(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = U(this.update.bind(this)), this.options = $({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n.jquery ? n[0] : n, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys($({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                    r.options.modifiers[e] = $({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return $({
                        name: e
                    }, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return Q(t, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = v(this.state, this.popper, this.reference), e.placement = m(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = _(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, T(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[x("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return S.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return A.call(this)
                }
            }]), t
        }();
    return ee.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ee.placements = z, ee.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            u = a ? "width" : "height",
                            c = {
                                start: Y({}, l, o[l]),
                                end: Y({}, l, o[l] + o[u] - s[u])
                            };
                        e.offsets.popper = $({}, s, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = D(+i) ? [+i, 0] : O(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                    var n = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === n && (n = r(n));
                    var i = g(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var o = t.priority,
                        s = e.offsets.popper,
                        a = {
                            primary: function (e) {
                                var n = s[e];
                                return s[e] < i[e] && !t.escapeWithReference && (n = H(s[e], i[e])), Y({}, e, n)
                            },
                            secondary: function (e) {
                                var n = "right" === e ? "left" : "top",
                                    r = s[n];
                                return s[e] > i[e] && !t.escapeWithReference && (r = L(s[n], i[e] - ("right" === e ? s.width : s.height))), Y({}, n, r)
                            }
                        };
                    return o.forEach(function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        s = $({}, s, a[t](e))
                    }), e.offsets.popper = s, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = j,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        u = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, t) {
                    if (!I(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n))) return e
                    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        r = e.offsets,
                        o = r.popper,
                        s = r.reference,
                        a = -1 !== ["left", "right"].indexOf(i),
                        l = a ? "height" : "width",
                        u = a ? "top" : "left",
                        c = a ? "left" : "top",
                        d = a ? "bottom" : "right",
                        h = y(n)[l];
                    s[d] - h < o[u] && (e.offsets.popper[u] -= o[u] - (s[d] - h)), s[u] + h > o[d] && (e.offsets.popper[u] += s[u] + h - o[d]);
                    var p = s[u] + s[l] / 2 - h / 2 - f(e.offsets.popper)[u];
                    return p = H(L(o[l] - h, p), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[u] = Math.round(p), e.offsets.arrow[c] = "", e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                    if (T(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = g(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split("-")[0],
                        r = b(i),
                        o = e.placement.split("-")[1] || "",
                        s = [];
                    switch (t.behavior) {
                        case X:
                            s = [i, r];
                            break;
                        case J:
                            s = k(i);
                            break;
                        case Z:
                            s = k(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = b(i);
                        var u = e.offsets.popper,
                            c = e.offsets.reference,
                            f = j,
                            d = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom),
                            h = f(u.left) < f(n.left),
                            p = f(u.right) > f(n.right),
                            g = f(u.top) < f(n.top),
                            m = f(u.bottom) > f(n.bottom),
                            v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            w = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (d || v || w) && (e.flipped = !0, (d || v) && (i = s[l + 1]), w && (T = o, o = "end" === T ? "start" : "start" === T ? "end" : T), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = $({}, e.offsets.popper, _(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"));
                        var T
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[t] - (a ? r[s ? "width" : "height"] : 0), e.placement = b(t), e.offsets.popper = f(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                    if (!I(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = w(e.instance.modifiers, function (e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                    var n = t.x,
                        i = t.y,
                        o = e.offsets.popper,
                        s = w(e.instance.modifiers, function (e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, u = void 0 === s ? t.gpuAcceleration : s,
                        c = d(r(e.instance.popper)),
                        f = {
                            position: o.position
                        },
                        h = {
                            left: j(o.left),
                            top: j(o.top),
                            bottom: j(o.bottom),
                            right: j(o.right)
                        },
                        p = "bottom" === n ? "top" : "bottom",
                        g = "right" === i ? "left" : "right",
                        m = x("transform");
                    if (l = "bottom" == p ? -c.height + h.bottom : h.top, a = "right" == g ? -c.width + h.right : h.left, u && m) f[m] = "translate3d(" + a + "px, " + l + "px, 0)", f[p] = 0, f[g] = 0, f.willChange = "transform";
                    else {
                        var v = "bottom" == p ? -1 : 1,
                            y = "right" == g ? -1 : 1;
                        f[p] = l * v, f[g] = a * y, f.willChange = p + ", " + g
                    }
                    var b = {
                        "x-placement": e.placement
                    };
                    return e.attributes = $({}, b, e.attributes), e.styles = $({}, f, e.styles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                    return N(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                        !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e])
                    }), e.offsets.arrow && N(e.arrowElement, e.offsets.arrow), e;
                    var t, n
                },
                onLoad: function (e, t, n, i, r) {
                    var o = v(0, t, e),
                        s = m(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), N(t, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, ee
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o() {
        return (o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s, a, l, u, c, f, d, h, p, g, m, v, y, b, _, w, E = function (e) {
            var t = !1;
            var n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function (t) {
                    var n, i = t.getAttribute("data-target");
                    i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return e(document).find(i).length > 0 ? i : null
                    } catch (e) {
                        return null
                    }
                },
                reflow: function (e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function (n) {
                    e(n).trigger(t.end)
                },
                supportsTransitionEnd: function () {
                    return Boolean(t)
                },
                isElement: function (e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function (e, t, i) {
                    for (var r in i)
                        if (Object.prototype.hasOwnProperty.call(i, r)) {
                            var o = i[r],
                                s = t[r],
                                a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                        } var l
                }
            };
            return t = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = function (t) {
                var i = this,
                    r = !1;
                return e(this).one(n.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || n.triggerTransitionEnd(i)
                }, t), this
            }, n.supportsTransitionEnd() && (e.event.special[n.TRANSITION_END] = {
                bindType: t.end,
                delegateType: t.end,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), n
        }(t),
        T = ("alert", l = "." + (a = "bs.alert"), u = (s = t).fn.alert, c = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        }, "alert", "fade", "show", f = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function (e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function () {
                s.removeData(this._element, a), this._element = null
            }, t._getRootElement = function (e) {
                var t = E.getSelectorFromElement(e),
                    n = !1;
                return t && (n = s(t)[0]), n || (n = s(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function (e) {
                var t = s.Event(c.CLOSE);
                return s(e).trigger(t), t
            }, t._removeElement = function (e) {
                var t = this;
                s(e).removeClass("show"), E.supportsTransitionEnd() && s(e).hasClass("fade") ? s(e).one(E.TRANSITION_END, function (n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }, t._destroyElement = function (e) {
                s(e).detach().trigger(c.CLOSED).remove()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = s(this),
                        i = n.data(a);
                    i || (i = new e(this), n.data(a, i)), "close" === t && i[t](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), e
        }(), s(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), s.fn.alert = f._jQueryInterface, s.fn.alert.Constructor = f, s.fn.alert.noConflict = function () {
            return s.fn.alert = u, f._jQueryInterface
        }, f),
        x = ("button", p = "." + (h = "bs.button"), g = ".data-api", m = (d = t).fn.button, v = "active", "btn", "focus", y = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', "input", ".active", ".btn", _ = {
            CLICK_DATA_API: "click" + p + g,
            FOCUS_BLUR_DATA_API: "focus" + p + g + " blur" + p + g
        }, w = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function () {
                var e = !0,
                    t = !0,
                    n = d(this._element).closest(b)[0];
                if (n) {
                    var i = d(this._element).find("input")[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && d(this._element).hasClass(v)) e = !1;
                            else {
                                var r = d(n).find(".active")[0];
                                r && d(r).removeClass(v)
                            } if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !d(this._element).hasClass(v), d(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !d(this._element).hasClass(v)), e && d(this._element).toggleClass(v)
            }, t.dispose = function () {
                d.removeData(this._element, h), this._element = null
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = d(this).data(h);
                    n || (n = new e(this), d(this).data(h, n)), "toggle" === t && n[t]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), e
        }(), d(document).on(_.CLICK_DATA_API, y, function (e) {
            e.preventDefault();
            var t = e.target;
            d(t).hasClass("btn") || (t = d(t).closest(".btn")), w._jQueryInterface.call(d(t), "toggle")
        }).on(_.FOCUS_BLUR_DATA_API, y, function (e) {
            var t = d(e.target).closest(".btn")[0];
            d(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), d.fn.button = w._jQueryInterface, d.fn.button.Constructor = w, d.fn.button.noConflict = function () {
            return d.fn.button = m, w._jQueryInterface
        }, w),
        C = function (e) {
            var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                s = e.fn[t],
                a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                u = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "active",
                f = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                d = function () {
                    function s(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(f.INDICATORS)[0], this._addEventListeners()
                    }
                    var d = s.prototype;
                    return d.next = function () {
                        this._isSliding || this._slide("next")
                    }, d.nextWhenVisible = function () {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, d.prev = function () {
                        this._isSliding || this._slide("prev")
                    }, d.pause = function (t) {
                        t || (this._isPaused = !0), e(this._element).find(f.NEXT_PREV)[0] && E.supportsTransitionEnd() && (E.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, d.cycle = function (e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, d.to = function (t) {
                        var n = this;
                        this._activeElement = e(this._element).find(f.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(u.SLID, function () {
                                return n.to(t)
                            });
                            else {
                                if (i === t) return this.pause(), void this.cycle();
                                var r = t > i ? "next" : "prev";
                                this._slide(r, this._items[t])
                            }
                    }, d.dispose = function () {
                        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, d._getConfig = function (e) {
                        return e = o({}, a, e), E.typeCheckConfig(t, e, l), e
                    }, d._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard && e(this._element).on(u.KEYDOWN, function (e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(u.MOUSEENTER, function (e) {
                            return t.pause(e)
                        }).on(u.MOUSELEAVE, function (e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(u.TOUCHEND, function () {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, d._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, d._getItemIndex = function (t) {
                        return this._items = e.makeArray(e(t).parent().find(f.ITEM)), this._items.indexOf(t)
                    }, d._getItemByDirection = function (e, t) {
                        var n = "next" === e,
                            i = "prev" === e,
                            r = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                        var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, d._triggerSlideEvent = function (t, n) {
                        var i = this._getItemIndex(t),
                            r = this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0]),
                            o = e.Event(u.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return e(this._element).trigger(o), o
                    }, d._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(f.ACTIVE).removeClass(c);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(c)
                        }
                    }, d._slide = function (t, n) {
                        var i, r, o, s = this,
                            a = e(this._element).find(f.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(a),
                            d = n || a && this._getItemByDirection(t, a),
                            h = this._getItemIndex(d),
                            p = Boolean(this._interval);
                        if ("next" === t ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), d && e(d).hasClass(c)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && a && d) {
                            this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(d);
                            var g = e.Event(u.SLID, {
                                relatedTarget: d,
                                direction: o,
                                from: l,
                                to: h
                            });
                            E.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(d).addClass(r), E.reflow(d), e(a).addClass(i), e(d).addClass(i), e(a).one(E.TRANSITION_END, function () {
                                e(d).removeClass(i + " " + r).addClass(c), e(a).removeClass("active " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                                    return e(s._element).trigger(g)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (e(a).removeClass(c), e(d).addClass(c), this._isSliding = !1, e(this._element).trigger(g)), p && this.cycle()
                        }
                    }, s._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n),
                                r = o({}, a, e(this).data());
                            "object" == typeof t && (r = o({}, r, t));
                            var l = "string" == typeof t ? t : r.slide;
                            if (i || (i = new s(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof l) {
                                if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                                i[l]()
                            } else r.interval && (i.pause(), i.cycle())
                        })
                    }, s._dataApiClickHandler = function (t) {
                        var i = E.getSelectorFromElement(this);
                        if (i) {
                            var r = e(i)[0];
                            if (r && e(r).hasClass("carousel")) {
                                var a = o({}, e(r).data(), e(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), s._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                            }
                        }
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), s
                }();
            return e(document).on(u.CLICK_DATA_API, f.DATA_SLIDE, d._dataApiClickHandler), e(window).on(u.LOAD_DATA_API, function () {
                e(f.DATA_RIDE).each(function () {
                    var t = e(this);
                    d._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                return e.fn[t] = s, d._jQueryInterface
            }, d
        }(t),
        S = function (e) {
            var t = "collapse",
                n = "bs.collapse",
                i = "." + n,
                s = e.fn[t],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                u = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "collapse",
                f = "collapsing",
                d = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                h = function () {
                    function i(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(d.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                s = E.getSelectorFromElement(o);
                            null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var s = i.prototype;
                    return s.toggle = function () {
                        e(this._element).hasClass("show") ? this.hide() : this.show()
                    }, s.show = function () {
                        var t, r, o = this;
                        if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(d.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
                            var s = e.Event(u.SHOW);
                            if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));
                                var a = this._getDimension();
                                e(this._element).removeClass(c).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function () {
                                    e(o._element).removeClass(f).addClass(c).addClass("show"), o._element.style[a] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                                };
                                if (E.supportsTransitionEnd()) {
                                    var h = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    e(this._element).one(E.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[h] + "px"
                                } else l()
                            }
                        }
                    }, s.hide = function () {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass("show")) {
                            var n = e.Event(u.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", E.reflow(this._element), e(this._element).addClass(f).removeClass(c).removeClass("show"), this._triggerArray.length > 0)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            s = E.getSelectorFromElement(o);
                                        null !== s && (e(s).hasClass("show") || e(o).addClass("collapsed").attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var a = function () {
                                    t.setTransitioning(!1), e(t._element).removeClass(f).addClass(c).trigger(u.HIDDEN)
                                };
                                this._element.style[i] = "", E.supportsTransitionEnd() ? e(this._element).one(E.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, s.setTransitioning = function (e) {
                        this._isTransitioning = e
                    }, s.dispose = function () {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, s._getConfig = function (e) {
                        return (e = o({}, a, e)).toggle = Boolean(e.toggle), E.typeCheckConfig(t, e, l), e
                    }, s._getDimension = function () {
                        return e(this._element).hasClass("width") ? "width" : "height"
                    }, s._getParent = function () {
                        var t = this,
                            n = null;
                        E.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(r).each(function (e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, s._addAriaAndCollapsedClass = function (t, n) {
                        if (t) {
                            var i = e(t).hasClass("show");
                            n.length > 0 && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function (t) {
                        var n = E.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }, i._jQueryInterface = function (t) {
                        return this.each(function () {
                            var r = e(this),
                                s = r.data(n),
                                l = o({}, a, r.data(), "object" == typeof t && t);
                            if (!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || (s = new i(this, l), r.data(n, s)), "string" == typeof t) {
                                if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                                s[t]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), i
                }();
            return e(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = E.getSelectorFromElement(this);
                e(r).each(function () {
                    var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    h._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
                return e.fn[t] = s, h._jQueryInterface
            }, h
        }(t),
        A = function (e) {
            var t = "dropdown",
                i = "bs.dropdown",
                s = "." + i,
                a = e.fn[t],
                l = new RegExp("38|40|27"),
                u = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click" + s + ".data-api",
                    KEYDOWN_DATA_API: "keydown" + s + ".data-api",
                    KEYUP_DATA_API: "keyup" + s + ".data-api"
                },
                c = "dropdown-menu-right",
                f = '[data-toggle="dropdown"]',
                d = ".dropdown-menu",
                h = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                p = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                g = function () {
                    function a(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var g = a.prototype;
                    return g.toggle = function () {
                        if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                            var t = a._getParentFromElement(this._element),
                                i = e(this._menu).hasClass("show");
                            if (a._clearMenus(), !i) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    o = e.Event(u.SHOW, r);
                                if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        e(t).hasClass("dropup") && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(c)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(t).toggleClass("show").trigger(e.Event(u.SHOWN, r))
                                }
                            }
                        }
                    }, g.dispose = function () {
                        e.removeData(this._element, i), e(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, g.update = function () {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, g._addEventListeners = function () {
                        var t = this;
                        e(this._element).on(u.CLICK, function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, g._getConfig = function (n) {
                        return n = o({}, this.constructor.Default, e(this._element).data(), n), E.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, g._getMenuElement = function () {
                        if (!this._menu) {
                            var t = a._getParentFromElement(this._element);
                            this._menu = e(t).find(d)[0]
                        }
                        return this._menu
                    }, g._getPlacement = function () {
                        var t = e(this._element).parent(),
                            n = "bottom-start";
                        return t.hasClass("dropup") ? (n = "top-start", e(this._menu).hasClass(c) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(c) && (n = "bottom-end"), n
                    }, g._detectNavbar = function () {
                        return e(this._element).closest(".navbar").length > 0
                    }, g._getPopperConfig = function () {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function (t) {
                            return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                        } : t.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data(i);
                            if (n || (n = new a(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, a._clearMenus = function (t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = e.makeArray(e(f)), r = 0; r < n.length; r++) {
                                var o = a._getParentFromElement(n[r]),
                                    s = e(n[r]).data(i),
                                    l = {
                                        relatedTarget: n[r]
                                    };
                                if (s) {
                                    var c = s._menu;
                                    if (e(o).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                                        var d = e.Event(u.HIDE, l);
                                        e(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(c).removeClass("show"), e(o).removeClass("show").trigger(e.Event(u.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function (t) {
                        var n, i = E.getSelectorFromElement(t);
                        return i && (n = e(i)[0]), n || t.parentNode
                    }, a._dataApiKeydownHandler = function (t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(d).length)) : l.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass("disabled"))) {
                            var n = a._getParentFromElement(this),
                                i = e(n).hasClass("show");
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var r = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== r.length) {
                                    var o = r.indexOf(t.target);
                                    38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var s = e(n).find(f)[0];
                                    e(s).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return h
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return p
                        }
                    }]), a
                }();
            return e(document).on(u.KEYDOWN_DATA_API, f, g._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, d, g._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, g._clearMenus).on(u.CLICK_DATA_API, f, function (t) {
                t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
            }).on(u.CLICK_DATA_API, ".dropdown form", function (e) {
                e.stopPropagation()
            }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
                return e.fn[t] = a, g._jQueryInterface
            }, g
        }(t),
        D = function (e) {
            var t = "bs.modal",
                n = "." + t,
                i = e.fn.modal,
                s = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                a = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    FOCUSIN: "focusin" + n,
                    RESIZE: "resize" + n,
                    CLICK_DISMISS: "click.dismiss" + n,
                    KEYDOWN_DISMISS: "keydown.dismiss" + n,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                u = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                c = function () {
                    function i(t, n) {
                        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(u.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var c = i.prototype;
                    return c.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, c.show = function (t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            E.supportsTransitionEnd() && e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                            var i = e.Event(l.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass("modal-open"), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, u.DATA_DISMISS, function (e) {
                                return n.hide(e)
                            }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                                e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return n._showElement(t)
                            }))
                        }
                    }, c.hide = function (t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(l.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = E.supportsTransitionEnd() && e(this._element).hasClass("fade");
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass("show"), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(E.TRANSITION_END, function (e) {
                                    return n._hideModal(e)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, c.dispose = function () {
                        e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, c.handleUpdate = function () {
                        this._adjustDialog()
                    }, c._getConfig = function (e) {
                        return e = o({}, s, e), E.typeCheckConfig("modal", e, a), e
                    }, c._showElement = function (t) {
                        var n = this,
                            i = E.supportsTransitionEnd() && e(this._element).hasClass("fade");
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && E.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                        var r = e.Event(l.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function () {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        i ? e(this._dialog).one(E.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, c._enforceFocus = function () {
                        var t = this;
                        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, c._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
                    }, c._setResizeEvent = function () {
                        var t = this;
                        this._isShown ? e(window).on(l.RESIZE, function (e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(l.RESIZE)
                    }, c._hideModal = function () {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                            e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                        })
                    }, c._removeBackdrop = function () {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, c._showBackdrop = function (t) {
                        var n = this,
                            i = e(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = E.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && E.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(E.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass("show");
                            var o = function () {
                                n._removeBackdrop(), t && t()
                            };
                            E.supportsTransitionEnd() && e(this._element).hasClass("fade") ? e(this._backdrop).one(E.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else t && t()
                    }, c._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, c._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, c._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, c._setScrollbar = function () {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(u.FIXED_CONTENT).each(function (n, i) {
                                var r = e(i)[0].style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(u.STICKY_CONTENT).each(function (n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            }), e(u.NAVBAR_TOGGLER).each(function (n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, c._resetScrollbar = function () {
                        e(u.FIXED_CONTENT).each(function (t, n) {
                            var i = e(n).data("padding-right");
                            void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                        }), e(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function (t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                    }, c._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, i._jQueryInterface = function (n, r) {
                        return this.each(function () {
                            var s = e(this).data(t),
                                a = o({}, i.Default, e(this).data(), "object" == typeof n && n);
                            if (s || (s = new i(this, a), e(this).data(t, s)), "string" == typeof n) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n](r)
                            } else a.show && s.show(r)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return s
                        }
                    }]), i
                }();
            return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (n) {
                var i, r = this,
                    s = E.getSelectorFromElement(this);
                s && (i = e(s)[0]);
                var a = e(i).data(t) ? "toggle" : o({}, e(i).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                var u = e(i).one(l.SHOW, function (t) {
                    t.isDefaultPrevented() || u.one(l.HIDDEN, function () {
                        e(r).is(":visible") && r.focus()
                    })
                });
                c._jQueryInterface.call(e(i), a, this)
            }), e.fn.modal = c._jQueryInterface, e.fn.modal.Constructor = c, e.fn.modal.noConflict = function () {
                return e.fn.modal = i, c._jQueryInterface
            }, c
        }(t),
        N = function (e) {
            var t = "tooltip",
                i = "bs.tooltip",
                s = "." + i,
                a = e.fn[t],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                u = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                d = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    INSERTED: "inserted" + s,
                    CLICK: "click" + s,
                    FOCUSIN: "focusin" + s,
                    FOCUSOUT: "focusout" + s,
                    MOUSEENTER: "mouseenter" + s,
                    MOUSELEAVE: "mouseleave" + s
                },
                h = function () {
                    function a(e, t) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var h = a.prototype;
                    return h.enable = function () {
                        this._isEnabled = !0
                    }, h.disable = function () {
                        this._isEnabled = !1
                    }, h.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, h.toggle = function (t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, h.dispose = function () {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, h.show = function () {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = E.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass("fade");
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                u = this._getAttachment(l);
                            this.addAttachmentClass(u);
                            var c = !1 === this.config.container ? document.body : e(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: u,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function (e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(o).addClass("show"), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var f = function () {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t)
                            };
                            E.supportsTransitionEnd() && e(this.tip).hasClass("fade") ? e(this.tip).one(E.TRANSITION_END, f).emulateTransitionEnd(a._TRANSITION_DURATION) : f()
                        }
                    }, h.hide = function (t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function () {
                                "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, E.supportsTransitionEnd() && e(this.tip).hasClass("fade") ? e(i).one(E.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, h.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, h.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, h.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, h.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, h.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass("fade show")
                    }, h.setElementContent = function (t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, h.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, h._getAttachment = function (e) {
                        return c[e.toUpperCase()]
                    }, h._setListeners = function () {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function (n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e)
                            });
                            else if ("manual" !== n) {
                                var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function (e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function (e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = o({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, h._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, h._enter = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                            "show" === n._hoverState && n.show()
                        }, n.config.delay.show) : n.show())
                    }, h._leave = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                            "out" === n._hoverState && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, h._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, h._getConfig = function (n) {
                        return "number" == typeof (n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), E.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, h._getDelegateConfig = function () {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, h._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(l);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, h._handlePopperPlacementChange = function (e) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, h._fixTransition = function () {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data(i),
                                r = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new a(this, r), e(this).data(i, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return d
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return s
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return u
                        }
                    }]), a
                }();
            return e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
                return e.fn[t] = a, h._jQueryInterface
            }, h
        }(t),
        I = function (e) {
            var t = "popover",
                n = "bs.popover",
                i = "." + n,
                s = e.fn[t],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = o({}, N.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                u = o({}, N.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                f = function (o) {
                    var s, f;

                    function d() {
                        return o.apply(this, arguments) || this
                    }
                    f = o, (s = d).prototype = Object.create(f.prototype), s.prototype.constructor = s, s.__proto__ = f;
                    var h = d.prototype;
                    return h.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, h.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, h.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, h.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".popover-header"), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
                    }, h._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, h._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(a);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, d._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n),
                                r = "object" == typeof t ? t : null;
                            if ((i || !/destroy|hide/.test(t)) && (i || (i = new d(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(d, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return c
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return u
                        }
                    }]), d
                }(N);
            return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
                return e.fn[t] = s, f._jQueryInterface
            }, f
        }(t),
        k = function (e) {
            var t = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                s = e.fn[t],
                a = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                u = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + ".data-api"
                },
                c = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                d = function () {
                    function s(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function (e) {
                            return i._process(e)
                        }), this.refresh(), this._process()
                    }
                    var d = s.prototype;
                    return d.refresh = function () {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = "position" === i ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                            var n, o = E.getSelectorFromElement(t);
                            if (o && (n = e(o)[0]), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function (e) {
                            return e
                        }).sort(function (e, t) {
                            return e[0] - t[0]
                        }).forEach(function (e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, d.dispose = function () {
                        e.removeData(this._element, n), e(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, d._getConfig = function (n) {
                        if ("string" != typeof (n = o({}, a, n)).target) {
                            var i = e(n.target).attr("id");
                            i || (i = E.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return E.typeCheckConfig(t, n, l), n
                    }, d._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, d._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, d._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, d._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, d._activate = function (t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass("dropdown-item") ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(u.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, d._clear = function () {
                        e(this._selector).filter(f.ACTIVE).removeClass(c)
                    }, s._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n);
                            if (i || (i = new s(this, "object" == typeof t && t), e(this).data(n, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), s
                }();
            return e(window).on(u.LOAD_DATA_API, function () {
                for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    d._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                return e.fn[t] = s, d._jQueryInterface
            }, d
        }(t),
        O = function (e) {
            var t = e.fn.tab,
                n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                i = function () {
                    function t(e) {
                        this._element = e
                    }
                    var i = t.prototype;
                    return i.show = function () {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
                            var i, r, o = e(this._element).closest(".nav, .list-group")[0],
                                s = E.getSelectorFromElement(this._element);
                            if (o) {
                                var a = "UL" === o.nodeName ? "> li > .active" : ".active";
                                r = (r = e.makeArray(e(o).find(a)))[r.length - 1]
                            }
                            var l = e.Event(n.HIDE, {
                                    relatedTarget: this._element
                                }),
                                u = e.Event(n.SHOW, {
                                    relatedTarget: r
                                });
                            if (r && e(r).trigger(l), e(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                                s && (i = e(s)[0]), this._activate(this._element, o);
                                var c = function () {
                                    var i = e.Event(n.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        o = e.Event(n.SHOWN, {
                                            relatedTarget: r
                                        });
                                    e(r).trigger(i), e(t._element).trigger(o)
                                };
                                i ? this._activate(i, i.parentNode, c) : c()
                            }
                        }
                    }, i.dispose = function () {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, i._activate = function (t, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? e(n).find("> li > .active") : e(n).children(".active"))[0],
                            s = i && E.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                            a = function () {
                                return r._transitionComplete(t, o, i)
                            };
                        o && s ? e(o).one(E.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, i._transitionComplete = function (t, n, i) {
                        if (n) {
                            e(n).removeClass("show active");
                            var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                            r && e(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), E.reflow(t), e(t).addClass("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                            var o = e(t).closest(".dropdown")[0];
                            o && e(o).find(".dropdown-toggle").addClass("active"), t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this),
                                r = i.data("bs.tab");
                            if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                t.preventDefault(), i._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = i._jQueryInterface, e.fn.tab.Constructor = i, e.fn.tab.noConflict = function () {
                return e.fn.tab = t, i._jQueryInterface
            }, i
        }(t);
    ! function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = E, e.Alert = T, e.Button = x, e.Carousel = C, e.Collapse = S, e.Dropdown = A, e.Modal = D, e.Popover = I, e.Scrollspy = k, e.Tab = O, e.Tooltip = N, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function () {
    function e() {
        if (!D && document.body) {
            D = !0;
            var e = document.body,
                t = document.documentElement,
                n = window.innerHeight,
                r = e.scrollHeight;
            if (N = document.compatMode.indexOf("CSS") >= 0 ? t : e, y = e, x.keyboardSupport && f("keydown", i), top != self) S = !0;
            else if (z && r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                var o = document.createElement("div");
                o.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + N.scrollHeight + "px", document.body.appendChild(o);
                var s;
                _ = function () {
                    s || (s = setTimeout(function () {
                        C || (o.style.height = "0", o.style.height = N.scrollHeight + "px", s = null)
                    }, 500))
                }, setTimeout(_, 10), f("resize", _);
                if ((b = new F(_)).observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), N.offsetHeight <= n) {
                    var a = document.createElement("div");
                    a.style.clear = "both", e.appendChild(a)
                }
            }
            x.fixedBackground || C || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
        }
    }

    function t(e, t, n) {
        if (s = n, o = (o = t) > 0 ? 1 : -1, s = s > 0 ? 1 : -1, A.x === o && A.y === s || (A.x = o, A.y = s, j = [], P = 0), 1 != x.accelerationMax) {
            var i = Date.now() - P;
            if (i < x.accelerationDelta) {
                var r = (1 + 50 / i) / 2;
                r > 1 && (r = Math.min(r, x.accelerationMax), t *= r, n *= r)
            }
            P = Date.now()
        }
        var o, s;
        if (j.push({
                x: t,
                y: n,
                lastX: t < 0 ? .99 : -.99,
                lastY: n < 0 ? .99 : -.99,
                start: Date.now()
            }), !H) {
            var a = e === document.body,
                l = function (i) {
                    for (var r = Date.now(), o = 0, s = 0, u = 0; u < j.length; u++) {
                        var c = j[u],
                            f = r - c.start,
                            d = f >= x.animationTime,
                            h = d ? 1 : f / x.animationTime;
                        x.pulseAlgorithm && (v = h, h = v >= 1 ? 1 : v <= 0 ? 0 : (1 == x.pulseNormalize && (x.pulseNormalize /= m(1)), m(v)));
                        var p = c.x * h - c.lastX >> 0,
                            g = c.y * h - c.lastY >> 0;
                        o += p, s += g, c.lastX += p, c.lastY += g, d && (j.splice(u, 1), u--)
                    }
                    var v;
                    if (a) {
                        window.scrollBy(o, s);
                        var y;
                        document.createEvent ? (y = document.createEvent("HTMLEvents")).initEvent("smoothScrollCustomEvent", !0, !0) : (y = document.createEventObject()).eventType = "smoothScrollCustomEvent", y.eventName = "smoothScrollCustomEvent", document.createEvent ? window.dispatchEvent(y) : window.fireEvent("on" + y.eventType, y)
                    } else o && (e.scrollLeft += o), s && (e.scrollTop += s);
                    t || n || (j = []), j.length ? q(l, e, 1e3 / x.frameRate + 1) : H = !1
                };
            q(l, e, 0), H = !0
        }
    }

    function n(n) {
        D || e();
        var i = n.target;
        if (n.defaultPrevented || n.ctrlKey) return !0;
        if (h(y, "embed") || h(i, "embed") && /\.pdf/i.test(i.src) || h(y, "object") || i.shadowRoot) return !0;
        var r = -n.wheelDeltaX || n.deltaX || 0,
            s = -n.wheelDeltaY || n.deltaY || 0;
        k && (n.wheelDeltaX && p(n.wheelDeltaX, 120) && (r = n.wheelDeltaX / Math.abs(n.wheelDeltaX) * -120), n.wheelDeltaY && p(n.wheelDeltaY, 120) && (s = n.wheelDeltaY / Math.abs(n.wheelDeltaY) * -120)), r || s || (s = -n.wheelDelta || 0), 1 === n.deltaMode && (r *= 40, s *= 40);
        var l = a(i);
        return l ? !(x.touchpadSupport || ! function (e) {
            if (e) return I.length || (I = [e, e, e]), e = Math.abs(e), I.push(e), I.shift(), clearTimeout(E), E = setTimeout(function () {
                try {
                    localStorage.SS_deltaBuffer = I.join(",")
                } catch (e) {}
            }, 1e3), !g(120) && !g(100)
        }(s)) || (Math.abs(r) > 1.2 && (r *= x.stepSize / 120), Math.abs(s) > 1.2 && (s *= x.stepSize / 120), t(l, r, s), n.preventDefault(), void o()) : !S || !K || (Object.defineProperty(n, "target", {
            value: window.frameElement
        }), parent.wheel(n))
    }

    function i(e) {
        var n = e.target,
            i = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== O.spacebar;
        document.body.contains(y) || (y = document.activeElement);
        var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(n.nodeName) || h(n, "input") && !r.test(n.type) || h(y, "video") || function (e) {
                var t = e.target,
                    n = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do {
                        if (n = t.classList && t.classList.contains("html5-video-controls")) break
                    } while (t = t.parentNode);
                return n
            }(e) || n.isContentEditable || i) return !0;
        if ((h(n, "button") || h(n, "input") && r.test(n.type)) && e.keyCode === O.spacebar) return !0;
        if (h(n, "input") && "radio" == n.type && L[e.keyCode]) return !0;
        var s = 0,
            l = 0,
            u = a(y);
        if (!u) return !S || !K || parent.keydown(e);
        var c = u.clientHeight;
        switch (u == document.body && (c = window.innerHeight), e.keyCode) {
            case O.up:
                l = -x.arrowScroll;
                break;
            case O.down:
                l = x.arrowScroll;
                break;
            case O.spacebar:
                l = -(e.shiftKey ? 1 : -1) * c * .9;
                break;
            case O.pageup:
                l = .9 * -c;
                break;
            case O.pagedown:
                l = .9 * c;
                break;
            case O.home:
                l = -u.scrollTop;
                break;
            case O.end:
                var f = u.scrollHeight - u.scrollTop - c;
                l = f > 0 ? f + 10 : 0;
                break;
            case O.left:
                s = -x.arrowScroll;
                break;
            case O.right:
                s = x.arrowScroll;
                break;
            default:
                return !0
        }
        t(u, s, l), e.preventDefault(), o()
    }

    function r(e) {
        y = e.target
    }

    function o() {
        clearTimeout(w), w = setInterval(function () {
            R = {}
        }, 1e3)
    }

    function s(e, t) {
        for (var n = e.length; n--;) R[M(e[n])] = t;
        return t
    }

    function a(e) {
        var t = [],
            n = document.body,
            i = N.scrollHeight;
        do {
            var r = R[M(e)];
            if (r) return s(t, r);
            if (t.push(e), i === e.scrollHeight) {
                var o = u(N) && u(n) || c(N);
                if (S && l(N) || !S && o) return s(t, B())
            } else if (l(e) && c(e)) return s(t, e)
        } while (e = e.parentElement)
    }

    function l(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function u(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }

    function c(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function f(e, t) {
        window.addEventListener(e, t, !1)
    }

    function d(e, t) {
        window.removeEventListener(e, t, !1)
    }

    function h(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function p(e, t) {
        return Math.floor(e / t) == e / t
    }

    function g(e) {
        return p(I[0], e) && p(I[1], e) && p(I[2], e)
    }

    function m(e) {
        var t, n;
        return (e *= x.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)), t * x.pulseNormalize
    }

    function v(e) {
        for (var t in e) T.hasOwnProperty(t) && (x[t] = e[t])
    }
    var y, b, _, w, E, T = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !1,
            fixedBackground: !0,
            excluded: ""
        },
        x = T,
        C = !1,
        S = !1,
        A = {
            x: 0,
            y: 0
        },
        D = !1,
        N = document.documentElement,
        I = [],
        k = /^Mac/.test(navigator.platform),
        O = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        L = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        },
        j = [],
        H = !1,
        P = Date.now(),
        M = function () {
            var e = 0;
            return function (t) {
                return t.uniqueID || (t.uniqueID = e++)
            }
        }(),
        R = {};
    if (window.localStorage && localStorage.SS_deltaBuffer) try {
        I = localStorage.SS_deltaBuffer.split(",")
    } catch (e) {}
    var W, q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60)
        },
        F = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        B = function () {
            var e;
            return function () {
                if (!e) {
                    var t = document.createElement("div");
                    t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                    var n = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 3), e = document.body.scrollTop != n ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
                }
                return e
            }
        }(),
        U = window.navigator.userAgent,
        V = /Edge/.test(U),
        K = /chrome/i.test(U) && !V,
        Q = /safari/i.test(U) && !V,
        Y = /mobile/i.test(U),
        $ = /Windows NT 6.1/i.test(U) && /rv:11/i.test(U),
        z = Q && (/Version\/8/i.test(U) || /Version\/9/i.test(U)),
        G = (K || Q || $) && !Y;
    "onwheel" in document.createElement("div") ? W = "wheel" : "onmousewheel" in document.createElement("div") && (W = "mousewheel"), W && G && (window.isSmoothScroll = !0, f(W, n), f("mousedown", r), f("load", e)), v.destroy = function () {
        b && b.disconnect(), d(W, n), d("mousedown", r), d("keydown", i), d("resize", _), d("load", e)
    }, window.SmoothScrollOptions && v(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
        return v
    }) : "object" == typeof exports ? module.exports = v : window.SmoothScroll = v
}(),
function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function i(e, t, r) {
        if (!(this instanceof i)) return new i(e, t, r);
        var o = e;
        return "string" == typeof e && (o = document.querySelectorAll(e)), o ? (this.elements = (u = o, Array.isArray(u) ? u : "object" == typeof u && "number" == typeof u.length ? l.call(u) : [u]), this.options = n({}, this.options), "function" == typeof t ? r = t : n(this.options, t), r && this.on("always", r), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (o || e));
        var u
    }

    function r(e) {
        this.img = e
    }

    function o(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var s = e.jQuery,
        a = e.console,
        l = Array.prototype.slice;
    (i.prototype = Object.create(t.prototype)).options = {}, i.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, i.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var s = o[i];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return i.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[2];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
    }, i.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t)
    }, i.prototype.addBackground = function (e, t) {
        var n = new o(e, t);
        this.images.push(n)
    }, i.prototype.check = function () {
        function e(e, n, i) {
            setTimeout(function () {
                t.progress(e, n, i)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, i.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + n, e, t)
    }, i.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, (r.prototype = Object.create(t.prototype)).check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (o.prototype = Object.create(r.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, o.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, i.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && (s = t, s.fn.imagesLoaded = function (e, t) {
            return new i(this, e, t).jqDeferred.promise(s(this))
        })
    }, i.makeJQueryPlugin(), i
}),
function () {
    var e, t, n, i, r, o = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        },
        s = [].indexOf || function (e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function () {
        function e() {}
        return e.prototype.extend = function (e, t) {
            var n, i;
            for (n in t) i = t[n], null == e[n] && (e[n] = i);
            return e
        }, e.prototype.isMobile = function (e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e.prototype.createEvent = function (e, t, n, i) {
            var r;
            return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e, r
        }, e.prototype.emitEvent = function (e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }, e.prototype.addEvent = function (e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }, e.prototype.removeEvent = function (e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        }, e.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function (e) {
            var t, n, i, r, o;
            for (t = i = 0, r = (o = this.keys).length; r > i; t = ++i)
                if (n = o[t], n === e) return this.values[t]
        }, e.prototype.set = function (e, t) {
            var n, i, r, o, s;
            for (n = r = 0, o = (s = this.keys).length; o > r; n = ++r)
                if (i = s[n], i === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function () {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function () {}, e
    }()), i = this.getComputedStyle || function (e) {
        return this.getPropertyValue = function (t) {
            var n;
            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function (e, t) {
                return t.toUpperCase()
            }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
        }, this
    }, r = /(\-([a-z]){1})/g, this.WOW = function () {
        function r(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, r.prototype.init = function () {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function () {
            var t, n, i, r;
            if (this.stopped = !1, this.boxes = function () {
                    var e, n, i, r;
                    for (r = [], e = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.all = function () {
                    var e, n, i, r;
                    for (r = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (r = this.boxes, n = 0, i = r.length; i > n; n++) t = r[n], this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e((o = this, function (e) {
                var t, n, i, r, s;
                for (s = [], t = 0, n = e.length; n > t; t++) r = e[t], s.push(function () {
                    var e, t, n, o;
                    for (o = [], e = 0, t = (n = r.addedNodes || []).length; t > e; e++) i = n[e], o.push(this.doSync(i));
                    return o
                }.call(o));
                return s
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
            var o
        }, r.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function () {
            return e.notSupported ? this.doSync(this.element) : void 0
        }, r.prototype.doSync = function (e) {
            var t, n, i, r, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (o = [], n = 0, i = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) t = r[n], s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, r.prototype.show = function (e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
        }, r.prototype.applyStyle = function (e, t) {
            var n, i, r;
            return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate((o = this, function () {
                return o.customStyle(e, t, i, n, r)
            }));
            var o
        }, r.prototype.animate = "requestAnimationFrame" in window ? function (e) {
            return window.requestAnimationFrame(e)
        } : function (e) {
            return e()
        }, r.prototype.resetStyle = function () {
            var e, t, n, i, r;
            for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], r.push(e.style.visibility = "visible");
            return r
        }, r.prototype.resetAnimation = function (e) {
            var t;
            return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0
        }, r.prototype.customStyle = function (e, t, n, i, r) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                animationDuration: n
            }), i && this.vendorSet(e.style, {
                animationDelay: i
            }), r && this.vendorSet(e.style, {
                animationIterationCount: r
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (e, t) {
            var n, i, r, o;
            i = [];
            for (n in t) r = t[n], e["" + n] = r, i.push(function () {
                var t, i, s, a;
                for (a = [], t = 0, i = (s = this.vendors).length; i > t; t++) o = s[t], a.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                return a
            }.call(this));
            return i
        }, r.prototype.vendorCSS = function (e, t) {
            var n, r, o, s, a, l;
            for (s = (a = i(e)).getPropertyCSSValue(t), n = 0, r = (o = this.vendors).length; r > n; n++) l = o[n], s = s || a.getPropertyCSSValue("-" + l + "-" + t);
            return s
        }, r.prototype.animationName = function (e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (n) {
                t = i(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, r.prototype.cacheAnimationName = function (e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, r.prototype.cachedAnimationName = function (e) {
            return this.animationNameCache.get(e)
        }, r.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function () {
            var e;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var t, n, i, r;
                for (r = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, r.prototype.offsetTop = function (e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, r.prototype.isVisible = function (e) {
            var t, n, i, r, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, r = (o = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, t = (i = this.offsetTop(e)) + e.clientHeight, r >= i && t >= o
        }, r.prototype.util = function () {
            return null != this._util ? this._util : this._util = new t
        }, r.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}.call(this);