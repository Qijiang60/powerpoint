(function() {
	var E = function() {
			var p = 0;
			return function(R) {
				E[p++] = {};
				R()
			}
		}(),
		f = function(p) {
			p()
		},
		N = f;
	var P = arguments.callee;
	var n = {
		"image-not-found": {
			x: 0,
			y: 494,
			w: 365,
			h: 145
		},
		"loading-c": {
			x: 0,
			y: 746,
			w: 100,
			h: 100
		},
		"loading-new-page": {
			x: 370,
			y: 542,
			w: 40,
			h: 40
		},
		"loading-o": {
			x: 414,
			y: 542,
			w: 16,
			h: 16
		},
		music: {
			x: 370,
			y: 586,
			w: 39,
			h: 39
		},
		"page-error": {
			x: 0,
			y: 0,
			w: 430,
			h: 490
		},
		"powered-by": {
			x: 0,
			y: 698,
			w: 210,
			h: 44
		},
		"refresh-arrow": {
			x: 370,
			y: 494,
			w: 44,
			h: 44
		},
		"tips-click-first": {
			x: 104,
			y: 746,
			w: 82,
			h: 82
		},
		"tips-push-first": {
			x: 264,
			y: 644,
			w: 127,
			h: 230
		},
		"tips-push": {
			x: 396,
			y: 644,
			w: 34,
			h: 34
		},
		"tips-scratch": {
			x: 0,
			y: 644,
			w: 260,
			h: 50
		},
		"arrow/mi01": {
			x: 0,
			y: 0,
			w: 40,
			h: 64
		},
		"arrow/mi04": {
			x: 0,
			y: 68,
			w: 28,
			h: 44
		},
		"author/create-active": {
			x: 0,
			y: 0,
			w: 308,
			h: 74
		},
		"author/create": {
			x: 0,
			y: 78,
			w: 308,
			h: 74
		},
		"author/follow": {
			x: 0,
			y: 156,
			w: 172,
			h: 50
		},
		"author/following": {
			x: 0,
			y: 210,
			w: 172,
			h: 50
		},
		"contact/frame": {
			x: 0,
			y: 0,
			w: 470,
			h: 90
		},
		"contact/title": {
			x: 0,
			y: 94,
			w: 470,
			h: 107
		},
		"following/back": {
			x: 62,
			y: 156,
			w: 24,
			h: 38
		},
		"following/download-active": {
			x: 0,
			y: 0,
			w: 228,
			h: 74
		},
		"following/download": {
			x: 0,
			y: 78,
			w: 228,
			h: 74
		},
		"following/ok": {
			x: 0,
			y: 156,
			w: 58,
			h: 58
		},
		"map/back": {
			x: 0,
			y: 82,
			w: 18,
			h: 31
		},
		"map/location": {
			x: 0,
			y: 0,
			w: 74,
			h: 78
		},
		"razzies/banner-center": {
			x: 0,
			y: 152,
			w: 20,
			h: 72
		},
		"razzies/banner-left": {
			x: 0,
			y: 0,
			w: 40,
			h: 72
		},
		"razzies/banner-right": {
			x: 0,
			y: 76,
			w: 40,
			h: 72
		},
		"signup/close": {
			x: 0,
			y: 0,
			w: 39,
			h: 39
		},
		"signup/star": {
			x: 0,
			y: 44,
			w: 9,
			h: 9
		},
		"video/close": {
			x: 0,
			y: 136,
			w: 50,
			h: 50
		},
		"video/play": {
			x: 0,
			y: 0,
			w: 132,
			h: 132
		}
	};
	var a = '*{padding:0;margin:0;outline:0;border:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;-webkit-touch-callout:none;-webkit-user-select:none}input,textarea{-webkit-user-select:text}.hidden{visibility:hidden}.lock{pointer-events:none !important}.lock *{pointer-events:none !important}.scroll{overflow-y:scroll}.win32 .scroll{overflow-y:auto}.ios .scroll{-webkit-overflow-scrolling:touch}.ios .scroll>*{-webkit-transform:translateZ(0)}.animation-prepare *{-webkit-animation-play-state:paused !important;animation-play-state:paused !important}.msg-box{position:absolute;left:60px;right:60px;text-align:center;z-index:100000;visibility:hidden}.msg-box .msg{display:inline-block;opacity:0;font-size:12px;color:white;line-height:18px;padding:9px 15px;border-radius:5px;background-color:rgba(0,0,0,0.8);text-align:left}.msg-box.show{visibility:visible}.msg-box.show .msg{opacity:1}.msg-box.remove .msg{opacity:0;-webkit-transition:.15s}.tips{transition:.4s}.hide-tips .tips{-webkit-animation:none !important;transition:none;opacity:0}.hide-tips-fade .tips{-webkit-animation:none !important;opacity:0}.powered-by{-webkit-transition:.3s;-webkit-transform:translate3d(0,100%,0)}.last-page .powered-by{-webkit-transform:none}.last-page .tips.switch{-webkit-animation:none !important;opacity:0}.layout img{pointer-events:none}.win32 .layout img{pointer-events:auto}.map-slide-page{background:white}.map-slide-page .title-bar{position:absolute;left:10px;top:10px;width:143px;height:38px;background-color:rgba(0,0,0,0.8);box-shadow:0 0 1px 0 rgba(0,0,0,0.6);z-index:1000}.map-slide-page .title-bar .back{position:absolute;width:49px;left:0;top:0;bottom:0}.map-slide-page .title-bar .line{position:absolute;left:49px;width:1px;top:0;bottom:0;background-color:#000;box-shadow:1px 0 rgba(113,113,113,.75)}.map-slide-page .title-bar .caption{position:absolute;left:50px;right:0;top:0;bottom:0;text-align:center;line-height:38px;font-size:16px;color:#e7e7e7;letter-spacing:2px}.map-slide-page .title-bar .caption:after{content:"地图"}.map-info-window .name{font-size:16px;font-weight:bold;line-height:22px;padding-bottom:6px;margin-bottom:0;width:220px}.map-info-window div{font-size:12px;line-height:16px;vertical-align:top}.map-info-window span{margin-left:5px;display:inline-block;width:184px;vertical-align:top}.BMap_Marker img{width:100%}.sign-up-form-slide-page{background:rgba(255,255,255,0.96)}.sign-up-form-slide-page .page-content{padding:0 25px}.sign-up-form-slide-page .page-content:before{display:block;content:"请您填写报名表单，谢谢您的参与！";color:#99a2a7;font-size:12px;line-height:12px;margin-top:27px}.sign-up-form-slide-page .back{position:absolute;height:18px;width:18px;right:7px;top:7px}.sign-up-form-slide-page .back:before{position:absolute;content:"";display:block;left:-23px;right:-7px;top:-7px;bottom:-23px}.sign-up-form-slide-page .back:after{width:18px;height:18px}.sign-up-form-slide-page label{position:relative;margin:13px 0;display:block}.sign-up-form-slide-page label:first-child{margin-top:21px}.sign-up-form-slide-page label:last-child{margin-top:21px}.sign-up-form-slide-page .caption{font-size:15px;line-height:15px;color:#4f5356}.sign-up-form-slide-page input{height:39px;margin-top:6px;font-size:15px;line-height:37px;width:100%;border:1px solid #4f5356;padding:0 9px;box-sizing:border-box;background:transparent}.sign-up-form-slide-page input.error{border:1px solid #fc7a89}.sign-up-form-slide-page .required{position:relative;display:inline-block;width:5px;height:5px;vertical-align:top}.sign-up-form-slide-page .required:after{background-position:-20px -20px;width:100%;height:100%}.sign-up-form-slide-page .button{width:115px;height:38px;line-height:38px;font-size:15px;margin:0 auto;background:#fa6143;color:white;text-align:center;border-radius:3px}';
	E(function() {
		function p(X, W, V) {
			var Z, U, Y;
			if (V) {
				Y = V;
				Z = X;
				U = W
			} else {
				Y = W;
				Z = 0;
				U = X
			}
			for (; Z !== U; ++Z) {
				Y(Z)
			}
		}

		function T(U) {
			return new Function("return " + U)().apply(null, Array.prototype.slice.call(arguments, 1))
		}

		function S(U, V) {
			return U(V)
		}

                //将null作为this执行函数，返回函数
		function R(U) {
			U.apply(null, Array.prototype.slice.call(arguments, 1));
			return U
		}
		E["0"].loop = p;
		E["0"].call = T;
		E["0"].callWith = S;
		E["0"].recursion = R
	});
	E(function() {
		var V = E["0"],
			Z = V.loop;

		function Y(ah, ag) {
			return ab(function(ai) {
				ag === undefined ? Z(ah, ai) : Z(ah, ag, ai)
			})
		}

		function U(al, aj, ak) {
			var ai;
			for (var ah = ak || 0, ag = al.length; ah < ag; ++ah) {
				if ((ai = aj(al[ah], ah)) !== undefined) {
					return ai
				}
			}
		}

		function ad(ah, ag) {
			if (ag === undefined) {
				return ah[ah.length - 1]
			} else {
				ah[ah.length - 1] = ag
			}
		}

		function X(ah, ag) {
			var ai = [];
			U(ah, function(aj) {
				!ag(aj) && ai.push(aj)
			});
			return ai
		}

		function S(ah, ag) {
			var ai = [];
			U(ah, function(ak, aj) {
				ag(ak) && ai.push(ak)
			});
			return ai
		}

		function T(ah, ag) {
			var ai = [],
				aj = 0;
			U(ah, function(al, ak) {
				ag(al) && ai.push(ak)
			});
			U(ai, function(ak) {
				ah.splice(ak - aj++, 1)
			})
		}

		function p(ag, ah) {
			var ai = [];
			U(ag, function(ak, aj) {
				ai.push(ah(ak, aj))
			});
			return ai
		}

		function W(ai, ah) {
			for (var aj = 0, ag = ai.length; aj !== ag; ++aj) {
				if (ah(ai[aj])) {
					return true
				}
			}
			return false
		}

		function aa(ah) {
			var ag = ah.length - 1,
				ai = ag === -1 ? [] : new Array(ag);
			U(ah, function(ak, aj) {
				ai[ag - aj] = ak
			});
			return ai
		}

		function R(ag) {
			var ah = [];
			Z(ag[0].length, function(ai) {
				U(ag, function(aj) {
					ah.push(aj[ai])
				})
			});
			return ah
		}

		function ac(ah, aj) {
			if (ah.length === 1) {
				return ah[0]
			}
			var ak = aj(ah[0], ah[1]);
			for (var ai = 2, ag = ah.length; ai < ag; ++ai) {
				ak = aj(ak, ah[ai])
			}
			return ak
		}

		function af(ah, ag) {
			return U(ah, function(ai) {
				if (ag(ai)) {
					return ai
				}
			})
		}

		function ab(ah) {
			var ag = [];
			ah(function(ai) {
				ag.push(ai)
			});
			return ag
		}

		function ae() {
			var ag = [];
			U(arguments, function(ah) {
				U(ah, function(ai) {
					ag.push(ai)
				})
			});
			return ag
		}
		E["1"].range = Y;
		E["1"].foreach = U;
		E["1"].top = ad;
		E["1"].remove = X;
		E["1"].removeOut = T;
		E["1"].map = p;
		E["1"].reverse = aa;
		E["1"].zip = R;
		E["1"].contains = W;
		E["1"].reduce = ac;
		E["1"].findFirst = af;
		E["1"].filter = S;
		E["1"].collect = ab;
		E["1"].concat = ae
	});
	E(function() {
		var X = E["1"],
			T = E["0"];

		function S(ah, ai) {
			var ag;
			for (var af in ah) {
				if ((ag = ai(af, ah[af]) !== undefined)) {
					return ag
				}
			}
		}

		function Z(af) {
			var ag = {};
			af(function(ah, ai) {
				ag[ah] = ai
			});
			return ag
		}

		function aa(ag, af) {
			return ag === undefined ? af : ag
		}

		function ab(ag, af) {
			X.foreach(af, function(ah) {
				S(ah, function(ai, aj) {
					aj !== undefined && (ag[ai] = aj)
				})
			});
			return ag
		}

		function ad(af) {
			return ab(af, Array.prototype.slice.call(arguments, 1))
		}

		function Y() {
			var af = {};
			return ab(af, arguments)
		}

		function U(ag, ah) {
			var af = {};
			X.foreach(ah, function(ai, aj) {
				af[ai] = aa(ag[ai], aj)
			});
			return af
		}

		function W(af) {
			var ag = {};
			X.foreach(af, function(ah) {
				ag[ah] = true
			});
			return {
				contains: function(ah) {
					return ag[ah] === true
				}
			}
		}

		function ae(ag) {
			var af = [];
			S(ag, function(ah) {
				af.push(ah)
			});
			return af
		}

		function p(ai, af) {
			var ag = W(af),
				ah = {};
			S(ai, function(aj, ak) {
				!ag.contains(aj) && (ah[aj] = ak)
			});
			return ah
		}
		var V = (function() {
			var af = {};
			X.foreach(["Array", "Boolean", "Date", "Function", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"], function(ag) {
				af[ag] = function(ah) {
					return Object.prototype.toString.call(ah) == "[object " + ag + "]"
				}
			});
			return af
		})();

		function R(ah, ag, af) {
			T.callWith(function(ai) {
				V.String(ag) ? ai(ag, af) : S(ag, ai)
			}, function(ai, aj) {
				Object.defineProperty(ah, ai, {
					enumerable: true,
					get: aj
				})
			});
			return ah
		}

		function ac(ah, ag, af) {
			T.callWith(function(ai) {
				V.String(ag) ? ai(ag, af) : S(ag, ai)
			}, function(aj, ai) {
				ai = ai || {};
				var al = ai.value,
					ak = ai.set;
				al !== undefined && ak(al);
				Object.defineProperty(ah, aj, {
					enumerable: true,
					get: function() {
						return al
					},
					set: function(am) {
						al = ak ? aa(ak(am), am) : am
					}
				})
			})
		}
		E["2"].foreach = S;
		E["2"].collect = Z;
		E["2"].defaultValue = aa;
		E["2"].insert = ad;
		E["2"].extend = Y;
		E["2"].extract = U;
		E["2"].exclude = p;
		E["2"].collection = W;
		E["2"].keys = ae;
		E["2"].is = V;
		E["2"].defineGetter = R;
		E["2"].defineAutoProperty = ac
	});
	E(function() {
		var U = E["2"],
			X = E["1"],
			Z = U.extend,
			p = U.exclude;

		function S(ad) {
			var ac = document.createElement("a");
			ac.href = ad;
			return ac.href
		}

		function aa(ae) {
			var ad = "",
				ac = 0;
			U.foreach(ae || {}, function(af, ag) {
				if (ag !== undefined) {
					ac++ && (ad += "&");
					ad += encodeURIComponent(af);
					ad += "=";
					ad += encodeURIComponent(ag)
				}
			});
			return ad
		}

		function V(af, ae, ad, ac) {
			X.foreach(af.split(ae), function(ag) {
				var ah = ag.split(ad);
				ac(ah[0], ah[1])
			})
		}
		var W = /(?:((?:[^:/]*):)\/\/)?([^:/?#]*)(?::([0-9]*))?(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

		function Y(ac) {
			if (W.test(ac)) {
				this.protocol = RegExp.$1;
				this.hostname = RegExp.$2;
				this.port = RegExp.$3;
				this.pathname = RegExp.$4;
				this.search = RegExp.$5;
				this.hash = RegExp.$6
			}
		}
		Y.prototype.inspect = Y.prototype.valueOf = Y.prototype.toString = Y.prototype.toJSON = function() {
			return this.href
		};
		Object.defineProperties(Y.prototype, {
			href: {
				get: function() {
					return this.origin + this.pathname + this.search + this.hash
				}
			},
			host: {
				get: function() {
					return this.hostname + (this.port ? ":" + this.port : "")
				}
			},
			origin: {
				get: function() {
					return this.protocol ? this.protocol + "//" + this.host : this.host
				}
			},
			arg: {
				get: function() {
					var ac = {};
					V(this.search.substring(1), "&", "=", function(ad, ae) {
						ad !== "" && (ac[ad] = decodeURIComponent(ae))
					});
					return ac
				}
			}
		});

		function T(ac) {
			return new Y(ac)
		}

		function R(ad, ac) {
			ad = T(ad);
			var ae = aa(Z(ad.arg, ac));
			return ad.origin + ad.pathname + (ae ? "?" : "") + ae + ad.hash
		}

		function ab(ac, ad) {
			ac = T(ac);
			var ae = aa(p(ac.arg, ad));
			return ac.origin + ac.pathname + (ae ? "?" : "") + ae + ac.hash
		}
		E["3"] = T;
		T.toAbsolute = S;
		T.encodeObject = aa;
		T.concatArg = R;
		T.removeArg = ab
	});
	E(function() {
		var p = E["2"];
		E["4"] = function(R, T) {
			var S = new XMLHttpRequest();
			S.onload = function() {
				T && T(null, S)
			};
			S.onerror = function(U) {
				T && T(U, S)
			};
			S.open(R.method || "get", R.url, true);
			R.headers && p.foreach(R.headers, function(U, V) {
				S.setRequestHeader(U, V)
			});
			S.send(R.data || null);
			return S
		}
	});
	E(function() {
		var T = E["2"],
			V = T.is;

		function p() {
			var aa = null,
				Z = null;
			return {
				head: function() {
					return aa
				},
				tail: function() {
					return Z
				},
				insert: function(ad, ab) {
					var ac = ab ? ab.previous : Z;
					ad.next = ab;
					ad.previous = ac;
					ac ? ac.next = ad : aa = ad;
					ab ? ab.previous = ad : Z = ad;
					ad.inserted = true;
					return ad
				},
				remove: function(ab) {
					if (ab.inserted === true) {
						ab.previous ? ab.previous.next = ab.next : aa = ab.next;
						ab.next ? ab.next.previous = ab.previous : Z = ab.previous;
						ab.inserted = false
					}
				}
			}
		}

		function W(Z) {
			return {
				previous: null,
				next: null,
				value: Z
			}
		}

		function R(aa, Z) {
			var ab;
			for (var ac = aa.head(); ac !== null; ac = ac.next) {
				if ((ab = Z(ac.value, ac)) !== undefined) {
					return ab
				}
			}
		}

		function S(aa, af, ae, ad) {
			var ac, ab, ag, ah, Z;
			if (V.Function(af)) {
				ac = null;
				ab = af;
				ag = ae
			} else {
				ac = af;
				ab = ae;
				ag = ad
			}
			for (ah = aa; ah !== ac; ah = ag ? ah.previous : ah.next) {
				if ((Z = ab(ah.value, ah)) !== undefined) {
					return Z
				}
			}
		}

		function X(aa, Z) {
			return aa.insert(W(Z), null)
		}

		function Y(aa) {
			var Z = aa.tail();
			aa.remove(Z);
			return Z.value
		}

		function U(aa, Z) {
			for (; Z && Z !== aa; Z = Z.next) {}
			return Z === null
		}
		E["5"] = p;
		p.Node = W;
		p.foreach = R;
		p.iterate = S;
		p.push = X;
		p.pop = Y;
		p.isBefore = U
	});
	E(function() {
		var ac = E["1"],
			Z = E["2"],
			W = E["0"],
			T = E["5"];

		function ab() {}

		function af() {
			var ag = T();
			return {
				trig: function() {
					for (var ah = ag.head(); ah !== null; ah = ah.next) {
						ah.value && ah.value.apply(null, arguments)
					}
				},
				regist: function(ah) {
					var ai = ag.insert(T.Node(ah), null);
					return {
						func: ah,
						remove: function() {
							ag.remove(ai)
						}
					}
				}
			}
		}

		function Y(ah, aj) {
			aj && ah.push(aj);
			var ag = ah.length;
			W.recursion(function ai(al, ak) {
				var am = ah[al];
				if (am) {
					am.apply(null, al === ag - 1 ? ak : [function() {
						ai(al + 1, Array.prototype.slice.call(arguments, 0))
					}].concat(ak))
				}
			}, 0, [])
		}

		function ae(ai, ah) {
			var ag = ai.length;
			ag === 0 ? ah && ah() : ac.foreach(ai, function(aj) {
				aj(function() {
					--ag === 0 && ah && ah()
				})
			})
		}

		function p(ah) {
			var ag = af();
			ah(function() {
				ag.trig();
				ag = null
			});
			return {
				onComplete: function(ai) {
					if (ag) {
						return ag.regist(ai)
					} else {
						ai && ai();
						return {
							remove: function() {}
						}
					}
				}
			}
		}

		function R(ah) {
			var ag;
			return {
				load: function(ai) {
					if (!ag) {
						ag = p(ah)
					}
					return ag.onComplete(ai)
				}
			}
		}

		function X(ag) {
			return function(ai, ah) {
				return function(ak, aj) {
					if (ak) {
						ag && ag(ah ? ah(ak) : ak)
					} else {
						ai && ai(aj)
					}
				}
			}
		}

		function ad(ah) {
			var ag, ai;
			if (Z.is.Function(ah)) {
				ai = function() {
					Array.prototype.unshift.call(arguments, null);
					ah.apply(null, arguments)
				};
				ag = ah
			} else {
				ah = ah || {};
				ai = ah.onSuccess || ab;
				ag = ah.onError || ab
			}
			return Z.insert(ah, {
				success: ai,
				error: ag
			})
		}

		function V() {
			var ag = null,
				ah = false;
			return {
				prepare: function(ai) {
					ag = ai;
					ah && ag()
				},
				start: function() {
					ag && ag();
					ah = true
				}
			}
		}

		function S(ag, ai) {
			var ah = ai(function() {
				ag();
				ac.foreach(ah, function(aj) {
					aj.remove()
				})
			})
		}

		function aa(ag, ai) {
			var ah = window.setTimeout(ag, ai);
			return {
				remove: function() {
					window.clearTimeout(ah)
				}
			}
		}

		function U(ag, aj, ah) {
			W.recursion(function ai() {
				if (ag()) {
					aj()
				} else {
					aa(ai, ah || 100)
				}
			})
		}
		E["6"].Event = af;
		E["6"].concurrency = ae;
		E["6"].sequence = Y;
		E["6"].Waiter = p;
		E["6"].Loader = R;
		E["6"].GoOn = X;
		E["6"].Callback = ad;
		E["6"].Schedule = V;
		E["6"].once = S;
		E["6"].setTimeout = aa;
		E["6"].polling = U
	});
	E(function() {
		var U = E["1"];

		function R(W, Y) {
			var X, V;
			for (X = 0, V = W.length; X !== V; ++X) {
				Y(W.charAt(X))
			}
		}

		function p(V, W) {
			return V + "(" + W.join(",") + ")"
		}

		function S(W) {
			var V = "";
			U.foreach(W, function(X) {
				V += V === "" ? X : X.replace(/(.)/, function() {
					return RegExp.$1.toUpperCase()
				})
			});
			return V
		}

		function T(aa, Y) {
			var W = 0,
				X, V = null,
				Z = "";
			X = aa.charAt(W++);
			while (X) {
				if (V === null) {
					if (X === "%") {
						V = ""
					} else {
						Z += X
					}
				} else {
					if (X === "%") {
						if (V === "") {
							Z += "%"
						} else {
							Z += Y[V] || ""
						}
						V = null
					} else {
						V += X
					}
				}
				X = aa.charAt(W++)
			}
			return Z
		}
		E["7"].foreach = R;
		E["7"].format = T;
		E["7"].tuple = p;
		E["7"].camelcaseJoin = S
	});
	E(function() {
		var ah = E["2"],
			U = ah.is,
			p = E["7"],
			Z = p.tuple,
			V = E["1"],
			T = E["5"];
		var af = function() {
				if (window.CSS && CSS.supports) {
					return function(ak, aj) {
						return CSS.supports(ak, aj)
					}
				} else {
					var ai = document.createElement("div");
					return function(ak, aj) {
						ai.removeAttribute("style");
						ai.style.setProperty(ak, aj, "");
						return ai.hasAttribute("style")
					}
				}
			}();

		function S(aj, ai) {
			return V.findFirst(["", "-webkit-", "-ms-", "-moz-", "-o-"], function(ak) {
				return af(ak + aj, ai)
			})
		}
		var ad = function() {
				var ai = "";
				return function(ak, aj) {
					return (ai ? af(ai + ak, aj) ? ai : "" : (ai = S(ak, aj))) + ak
				}
			}();

		function W(ak, aj, ai) {
			function al(an, am) {
				if (U.Number(am)) {
					am = aa(am)
				}
				ak.style.setProperty(ad(an, am), am, "")
			}
			U.String(aj) ? al(aj, ai) : ah.foreach(aj, al);
			return {
				element: ak,
				remove: function() {
					ag(ak, aj)
				}
			}
		}

		function ae(aj) {
			var ai = "";
			ah.foreach(aj, function(al, ak) {
				ai += ad(al, ak) + ":" + ak + ";"
			});
			return ai
		}

		function ag(aj, ai) {
			function ak(al) {
				V.foreach(["", "-webkit-", "-ms-", "-moz-", "-o-"], function(am) {
					aj.style.removeProperty(am + al)
				})
			}
			U.String(ai) ? ak(ai) : U.Object(ai) ? ah.foreach(ai, ak) : ah.foreach(ai, ak);
			return aj
		}
		var R = function() {
				var ai = T(),
					aj = T();
				return function(ak, al) {
					var ao = al ? aj : ai;
					if (ao.el === undefined) {
						ao.el = document.head.insertBefore(document.createElement("style"), al ? document.head.firstChild : null)
					}
					var an = ao.tail(),
						am = T.push(ao, an === null ? 0 : an.value + 1);
					ao.el.sheet.insertRule(ak, am.value);
					return {
						remove: function() {
							var aq = am.value;
							for (var ap = am.next; ap !== null; ap = ap.next) {
								ap.value = aq++
							}
							ao.remove(am);
							ao.el.sheet.deleteRule(aq)
						}
					}
				}
			}();

		function ac(ak, aj, ai) {
			function al(an, aq, ao) {
				var ap = U.String(aq) ? aq : ae(aq);
				R(an + " {" + ap + "}", ao)
			}
			if (U.String(ak)) {
				return al(ak, aj, ai)
			} else {
				var am = [];
				ah.foreach(ak, function(an, ao) {
					am.push(al(an, ao, aj))
				});
				return {
					remove: function() {
						V.foreach(am, function(an) {
							an.remove()
						})
					}
				}
			}
		}

		function aa(ai) {
			return Math.round(ai * 100000) / 100000
		}

		function Y(ai) {
			return ai === 0 ? 0 : (aa(ai) << 0) + "px"
		}

		function X(ai) {
			return ai === 0 ? 0 : aa(ai) + "deg"
		}

		function ab(ai) {
			return function(aj) {
				return Z(ai, [X(aj)])
			}
		}
		W.ruleString = ae;
		W.test = af;
		W.testPrefix = S;
		W.testStyleName = ad;
		W.remove = ag;
		W.insertRule = R;
		W.insertRules = ac;
		W.px = Y;
		W.deg = X;
		W.full = function(ai) {
			return ah.extend({
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, ai || {})
		};
		W.size = function(ak, aj, ai) {
			W(ak, {
				width: Y(aj),
				height: Y(ai)
			})
		};
		W.transform = function() {
			var ai = [];
			V.foreach(arguments, function(aj, ak) {
				ak !== 0 && ai.push(aj)
			});
			W(arguments[0], "transform", ai.join(" "))
		};
		W.matrix = function(ai) {
			return Z("matrix", V.map(ai, aa))
		};
		W.matrix3d = function(ai) {
			return Z("matrix3d", V.map(ai, aa))
		};
		W.translate = function(ai, ak, aj) {
			return Z("translate3d", V.map([ai, ak, aj], function(al) {
				return W.px(al)
			}))
		};
		W.rotateX = ab("rotateX");
		W.rotateY = ab("rotateY");
		W.rotateZ = ab("rotateZ");
		W.scale = function() {
			return "scale(" + Array.prototype.join.call(arguments, ",") + ")"
		};
		W.s = function(ai) {
			return aa(ai) + "s"
		};
		W.url = function(ai) {
			return Z("url", [ai])
		};
		W.bezier = function(ai) {
			return Z("cubic-bezier", ai)
		};
		E["8"] = W
	});
	E(function() {
		var R = E["2"],
			V = R.is,
			Y = E["1"],
			W = E["8"];

		function S(af, ae, ac) {
			var ai, ag = {},
				ah = ac;
			if (V.String(af)) {
				if (af.charAt(0) === "<") {
					ai = document.createElement("div");
					ai.innerHTML = af;
					ai = ai.firstElementChild
				} else {
					var ad = /([.#][^.#]*)/g,
						aj;
					ai = document.createElement(af.split(/[#.]/)[0]);
					while (aj = ad.exec(af)) {
						aj = aj[0];
						aj.charAt(0) === "#" ? ai.id = aj.substring(1) : ai.classList.add(aj.substring(1))
					}
				}
			} else {
				ai = af
			}
			if (V.String(ae)) {
				ai.innerHTML = ae
			} else {
				if (V.Object(ae)) {
					ag = ae
				} else {
					if (V.Array(ae)) {
						ag.children = ae
					} else {
						ah = ae
					}
				}
			}
			ag && R.foreach(ag, function(ak, al) {
				if (al !== undefined) {
					switch (ak) {
					case "classList":
						if (V.String(al)) {
							ai.classList.add(al)
						} else {
							if (V.Array(al)) {
								Y.foreach(al, function(am) {
									ai.classList.add(am)
								})
							}
						}
						break;
					case "css":
						W(ai, al);
						break;
					case "children":
						if (V.Array(al)) {
							Y.foreach(al, function(am) {
								ai.appendChild(am)
							})
						} else {
							ai.appendChild(al)
						}
						break;
					default:
						if (ak.substring(0, 5) === "data-") {
							ai.setAttribute(ak, al)
						} else {
							ai[ak] = al
						}
						break
					}
				}
			});
			ah && ah.appendChild(ai);
			return ai
		}

		function Z(ag, af, ad, ae) {
			var ac;
			if (ag.addEventListener) {
				ag.addEventListener(af, ad, ae || false);
				ac = function() {
					ag.removeEventListener(af, ad, ae || false)
				}
			} else {
				ag.attachEvent("on" + af, ad);
				ac = function() {
					ag.detachEvent("on" + af, ad)
				}
			}
			return {
				func: ad,
				remove: ac
			}
		}

		function T(ac) {
			ac && ac.parentNode && ac.parentNode.removeChild(ac)
		}

		function p(ac) {
			return {
				add: function(ad) {
					ac.classList.add(ad);
					return p(ac)
				},
				remove: function(ad) {
					ac.classList.remove(ad);
					return p(ac)
				}
			}
		}

		function aa(ad, ae, ac) {
			var af;
			while (ad !== null && ad !== document && ad !== ac) {
				if (af = ae(ad)) {
					return af
				}
				ad = ad.parentNode
			}
		}

		function X(ad, ac) {
			document.addEventListener(ad, function(ae) {
				aa(ae.target, function(af) {
					ac(af, ae.target)
				}, document.documentElement)
			}, false)
		}

		function U(ac, ad) {
			return aa(ac, function(ae) {
				if (ad(ae)) {
					return ae
				}
			})
		}

		function ab(af, ad) {
			if (document.documentElement.contains(af)) {
				ad && ad()
			} else {
				if (G.ie && window.MutationObserver) {
					var ac = new MutationObserver(function(ag) {
						Y.foreach(ag, function(ah) {
							return Y.foreach(ah.addedNodes || [], function(ai) {
								if (ai === af) {
									ac.disconnect();
									ad && ad(af);
									return true
								}
							})
						})
					});
					ac.observe(document.documentElement, {
						childList: true,
						subtree: true
					})
				} else {
					var ae = Z(af, "DOMNodeInsertedIntoDocument", function() {
						ad && ad(af);
						ae.remove()
					})
				}
			}
		}
		E["9"] = S;
		S.bind = Z;
		S.remove = T;
		S.classList = p;
		S.bubble = aa;
		S.onBubble = X;
		S.findAncestor = U;
		S.onInsert = ab
	});
	E(function() {
		var S = navigator.userAgent,
			R = navigator.appVersion,
			p = navigator.platform;
		E["10"] = {
			win32: p === "Win32",
			ie: !! window.ActiveXObject || "ActiveXObject" in window,
			ieVersion: Math.floor((/MSIE ([^;]+)/.exec(S) || [0, "0"])[1]),
			ios: (/iphone|ipad/gi).test(R),
			iphone: (/iphone/gi).test(R),
			ipad: (/ipad/gi).test(R),
			iosVersion: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(S) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || false,
			safari: /Version\//gi.test(R) && /Safari/gi.test(R),
			uiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(S),
			android: (/android/gi).test(R),
			androidVersion: parseFloat("" + (/android ([0-9\.]*)/i.exec(S) || [0, ""])[1]),
			chrome: /Chrome/gi.test(S),
			chromeVersion: parseInt((/Chrome\/([0-9]*)/gi.exec(S) || [0, 0])[1], 10),
			webkit: /AppleWebKit/.test(R),
			uc: R.indexOf("UCBrowser") !== -1,
			Browser: / Browser/gi.test(R),
			MiuiBrowser: /MiuiBrowser/gi.test(R),
			MicroMessenger: S.toLowerCase().match(/MicroMessenger/i) == "micromessenger",
			canTouch: "ontouchstart" in document,
			msPointer: window.navigator.msPointerEnabled
		}
	});
	E(function() {
		var W = E["1"],
			ai = E["2"],
			af = E["10"],
			S = E["9"],
			ak = S.bind,
			aa = ah("pageX"),
			Z = ah("pageY"),
			ag = T(["touchmove", "MSPointerMove", "mousemove"]),
			p = T(["touchstart", "MSPointerDown", "mousedown"]),
			ae = T(["touchend", "MSPointerUp", "mouseup"]),
			V, U, Y, X;

		function T(al) {
			return al[af.canTouch ? 0 : af.msPointer ? 1 : 2]
		}

		function ah(al) {
			return function(am) {
				return "touches" in am && am.touches[0] !== undefined ? am.touches[0][al] : am[al]
			}
		}
		ak(document, p, function(al) {
			Y = aa(al);
			X = Z(al)
		}, true);
		ak(document, ag, function(am) {
			var al = aa(am),
				an = Z(am);
			V = ai.defaultValue(Y, al);
			U = ai.defaultValue(X, an);
			Y = al;
			X = an
		}, true);

		function aj(al, am) {
			return ai.insert(am, {
				preventDefault: function() {
					al.preventDefault()
				},
				stopPropagation: function() {
					al.stopPropagation()
				},
				origin: al
			})
		}

		function ac(an, al, am) {
			return ak(an, ag, function(ao) {
				al(aj(ao, {
					x: Y,
					y: X,
					dX: Y - V,
					dY: X - U
				}))
			}, am)
		}

		function ab(al) {
			return function(ao, am, an) {
				return ak(ao, al, function(ap) {
					am(aj(ap, {
						x: ai.defaultValue(Y, aa(ap)),
						y: ai.defaultValue(X, Z(ap))
					}))
				}, an)
			}
		}
		var ad = ab(ae);

		function R(al) {
			var an = ac(document, function(ao) {
				al.onMove && al.onMove(ao)
			}),
				am = ad(document, function(ao) {
					an.remove();
					am.remove();
					al.onUp && al.onUp(ao)
				});
			return {
				remove: function() {
					an.remove();
					am.remove()
				}
			}
		}
		E["11"].onPointerMove = ac;
		E["11"].onPointerDown = ab(p);
		E["11"].onPointerUp = ad;
		E["11"].onMoveUp = R
	});
	E(function() {
		var ai = E["2"],
			Z = E["8"],
			S = E["9"],
			p = E["7"],
			U = E["1"],
			T = E["0"],
			ah = {},
			V = 0,
			ad = null;

		function R() {
			if (ad === null) {
				ad = Z.testPrefix("animation", "a 1s")
			}
		}

		function aa(aj) {
			return function(al, ak) {
				R();
				return S.bind(al, ad ? p.camelcaseJoin([ad.replace(/-/g, "")].concat(aj)) : aj.join(""), function(am) {
					am && am.stopPropagation();
					ak && ak()
				})
			}
		}
		var ac = aa(["animation", "end"]),
			af = aa(["transition", "end"]);

		function ag(aj) {
			return function(an, al, ao, am) {
				ao = ao * 1000;
				var ak = aj(an, function() {
					ak.remove();
					var ap = new Date() - am();
					T.callWith(function(aq) {
						if (G.ios && ap < ao) {
							setTimeout(function() {
								aq()
							}, ao * 1.05 - ap)
						} else {
							aq()
						}
					}, al)
				});
				return ak
			}
		}
		var X = ag(ac),
			Y = ag(af);

		function ab(ak) {
			var al = "";
			R();
			ai.foreach(ak, function(ao, an) {
				al += (parseFloat(ao) << 0) + "% {" + Z.ruleString(an) + "}"
			});
			var aj = ah[al],
				am;
			if (!aj) {
				aj = ah[al] = {
					count: 0,
					id: am = "keyframe" + V++,
					handle: Z.insertRules("@" + ad + "keyframes " + am, al)
				}
			}++aj.count;
			return {
				id: aj.id,
				remove: function() {
					if (--aj.count === 0) {
						aj.handle.remove();
						delete ah[al]
					}
				}
			}
		}

		function ae(aq, ak) {
			ak = ak || {};
			var ap = null,
				an = null,
				am = "both",
				aj, ao = null,
				al = [];
			U.foreach(aq, function(ar) {
				if (ai.is.Object(ar)) {
					ao = ab(ar);
					al.push(ao.id)
				} else {
					if (ai.is.Number(ar)) {
						if (ap === null) {
							ap = ar
						} else {
							an = ar
						}
						al.push(Z.s(ar))
					} else {
						switch (ar) {
						case "forwards":
						case "backwards":
						case "both":
							am = ar;
							break;
						default:
							al.push(ar);
							break
						}
					}
				}
				if (ar === "infinite") {
					ak.infinite = true
				}
			});
			al.push(am);
			ap = ap || 1;
			an = an || 0;
			aj = ap + an;
			ai.insert(ak, {
				end: aj,
				handle: ao
			});
			return al.join(" ")
		}

		function W(an, aq, aj) {
			var am = null,
				ao = [],
				al = false;
			aj = aj || {};
			T.callWith(function(ar) {
				ai.is.Array(an[0]) ? U.foreach(an, ar) : ar(an)
			}, function(au) {
				var at = au[0],
					ar = {
						el: at
					};
				Z(at, "animation", ae(au.slice(1), ar));
				Z(at, "animation-play-state", "paused");
				if (!am || ar.end > am.end) {
					am = ar
				}
				if (ar.infinite) {
					al = true
				}
				ao.push(ar)
			});
			var ap;
			setTimeout(function() {
				ap = new Date();
				U.foreach(ao, function(ar) {
					Z(ar.el, "animation-play-state", "running")
				})
			}, G.ios ? 30 : 0);
			if (aq) {
				var ak = X(am.el, function() {
					U.foreach(ao, function(ar) {
						if (aj.removeKeyframes) {
							ar.handle && ar.handle.remove()
						}
						Z.remove(ar.el, "animation")
					});
					aq && aq()
				}, am.end, function() {
					return ap
				});
				return {
					fastForward: ak.func
				}
			}
		}
		E["12"].onAnimationEnd = ac;
		E["12"].onTransitionEnd = af;
		E["12"].onAnimationEndAdvanced = X;
		E["12"].onTransitionEndAdvanced = Y;
		E["12"].Keyframes = ab;
		E["12"].animation = ae;
		E["12"].runAnimation = W
	});
	E(function() {
		function p(R) {
			var S = document.createElement("canvas"),
				T = S.getContext("2d");
			S.width = R.naturalWidth || R.width;
			S.height = R.naturalHeight || R.height;
			T.drawImage(R, 0, 0);
			return S.toDataURL()
		}
		E["13"].toDataURL = p
	});
	E(function() {
		var p = E["1"];
		E["14"] = function() {
			var R = window.localResource || {};
			if (R.version !== window.firstpageVersion) {
				p.foreach(R.list || [], function(S) {
					localStorage.removeItem(S)
				});
				R.version = window.firstpageVersion;
				R.list = [];
				localStorage.setItem("resource", JSON.stringify(R))
			}
			return function(T, S) {
				if (!window.localResource) {
					return null
				} else {
					if (S === undefined) {
						return localStorage.getItem(T)
					} else {
						if (!p.contains(R.list, function(U) {
							return U === T
						})) {
							R.list.push(T);
							localStorage.setItem(T, S());
							localStorage.setItem("resource", JSON.stringify(R))
						}
					}
				}
			}
		}()
	});
	E(function() {
		var X = E["1"],
			T = {
				eye: function() {
					return [1, 0, 0, 1, 0, 0]
				},
				translate: function(Y, Z) {
					return [1, 0, 0, 1, Y, Z]
				},
				scale: function(Z, Y) {
					return [Z, 0, 0, Y, 0, 0]
				},
				rotate: function(Y) {
					var Z = Math.sin(Y),
						aa = Math.cos(Y);
					return [aa, Z, -Z, aa, 0, 0]
				}
			};

		function p(Y, Z) {
			return Y[0] === Z[0] && Y[1] === Z[1] && Y[2] === Z[2] && Y[3] === Z[3] && Y[4] === Z[4] && Y[5] === Z[5]
		}

		function R(Y) {
			var Z = Y[0] * Y[3] - Y[1] * Y[2];
			return [Y[3] / Z, -Y[1] / Z, -Y[2] / Z, Y[0] / Z, (Y[2] * Y[5] - Y[3] * Y[4]) / Z, (Y[1] * Y[4] - Y[0] * Y[5]) / Z]
		}

		function U(Y, Z) {
			return [Y[0] * Z[0] + Y[2] * Z[1] + Y[4] * Z[2], Y[1] * Z[0] + Y[3] * Z[1] + Y[5] * Z[2], Z[2]]
		}

		function V(Y, Z) {
			return [Y[0] * Z[0] + Y[2] * Z[1], Y[1] * Z[0] + Y[3] * Z[1], Y[0] * Z[2] + Y[2] * Z[3], Y[1] * Z[2] + Y[3] * Z[3], Y[0] * Z[4] + Y[2] * Z[5] + Y[4], Y[1] * Z[4] + Y[3] * Z[5] + Y[5]]
		}

		function W() {
			return X.reduce(arguments, V)
		}

		function S(Z, Y, aa) {
			return W(T.translate(Y, aa), Z, T.translate(-Y, -aa))
		}
		E["15"].matrix = T;
		E["15"].isTransformEqual = p;
		E["15"].inverse = R;
		E["15"].transform = U;
		E["15"].combine = W;
		E["15"].origin = S
	});
	E(function() {
		var R = E["2"],
			W = R.defaultValue,
			T = E["8"],
			aa = E["15"],
			ad = aa.matrix;

		function ae(ai, ag, af, ah) {
			return af / ah < ai / ag ? ah / ag : af / ai
		}

		function Y(ai, ag, af, ah) {
			return af / ah < ai / ag ? af / ai : ah / ag
		}

		function p(ao) {
			var ap = ao.s,
				ak = ao.d,
				af = ap.width,
				ai = ap.height,
				aj = ak.width,
				ah = ak.height,
				ag = ao.scale(af, ai, aj, ah),
				an = (aj - af * ag) * (ao.x || 0.5),
				al = (ah - ai * ag) * (ao.y || 0.5),
				am = aa.combine(ad.scale(ag, ag), ad.translate(an, al));
			return R.insert(function(aq, ar) {
				return aa.transform(am, [aq, ar, 1])
			}, {
				scale: ag
			})
		}

		function ac(af, ag) {
			return function(al, aj, ai, ah, ak) {
				ai = ai || {};
				return (ai[af] || (af === "width" ? i : F)) * W(ah, aj) - al[af] * aj + (ak ? 0 : (ai[ag] || 0))
			}
		}
		var V = ac("width", "x"),
			U = ac("height", "y");

		function Z(ag, af) {
			return function(aj, ah, ai) {
				return V(aj, ag, ah, af, ai)
			}
		}

		function X(ag, af) {
			return function(aj, ah, ai) {
				return U(aj, ag, ah, af, ai)
			}
		}

		function ab(ah, ag, ai) {
			var af = ah(ai.x || 0, ai.y || 0);
			ag.x = ai.alignX == null ? af[0] : I.relativeX(ag, ai.alignX) + (ai.x || 0);
			ag.y = ai.alignY == null ? af[1] : I.relativeY(ag, ai.alignY) + (ai.y || 0);
			return ag
		}

		function S(ah, ag, ak, aj) {
			var al = ah.scale,
				ai = (ak.width || ag.halfWidth) * al,
				af = ag.halfHeight == null ? ak.height : ai / ag.halfWidth * ag.halfHeight << 0;
			return ab(ah, l(g.Custom(ag, ai, af), aj), ak)
		}
		E["16"] = {
			relativeX: V,
			relativeY: U,
			LayoutTransform: p,
			cover: ae,
			contain: Y,
			leftIn: Z(0, 0),
			leftTo: Z(1, 0),
			rightIn: Z(1, 1),
			rightTo: Z(0, 1),
			center: Z(0.5, 0.5),
			topIn: X(0, 0),
			topTo: X(1, 0),
			bottomIn: X(1, 1),
			bottomTo: X(0, 1),
			middle: X(0.5, 0.5),
			right: function(af) {
				return af.x + af.width
			},
			bottom: function(af) {
				return af.y + af.height
			},
			cssCenter: function(ag, af) {
				return {
					position: "absolute",
					left: "50%",
					top: "50%",
					width: T.px(ag),
					height: T.px(af),
					"margin-left": T.px(-ag / 2),
					"margin-top": T.px(-af / 2)
				}
			},
			setPosition: ab,
			layImage: S
		}
	});
	E(function() {
		var ab = E["8"],
			W = E["6"],
			ac = E["3"],
			T = E["13"],
			Y = E["9"],
			ae = E["14"],
			U = E["16"],
			R = W.Loader(function(p) {
				var af = Z.imageNotFound = S("image-not-found"),
					ag = Y.bind(af, "load", function() {
						ag.remove();
						p()
					})
			});

		function aa(af) {
			var ag = af.fullWidth = af.naturalWidth || af.width,
				p = af.fullHeight = af.naturalHeight || af.height;
			af.ps = {
				width: af.halfWidth = Math.round(ag / 2),
				height: af.halfHeight = Math.round(p / 2)
			}
		}

		function getImageSrc(p) {
			return window.contentPath + "image/" + p
		}

		function ad(ah, ai, p) {
			var ag = false;
			if (/^#/.test(ai) || /^rgba/gi.test(ai)) {
				ah.color = ai;
				setTimeout(function() {
					p.onLoad && p.onLoad()
				}, 0);
				return ah
			}
			ai = ai.replace(/!([^!]*)$/, "");

			function af() {
				ah.fail = true;
				R.load(function() {
					p.onError && p.onError()
				})
			}
			if (/\.([^.]*)$/.test(ac(ai).pathname.replace(/!([^!]*)$/, "")) && !(RegExp.$1 in {
				jpeg: true,
				jpg: true,
				svg: true,
				png: true,
				gif: true
			})) {
				setTimeout(af, 0);
				return ah
			}
			p.crossOrigin && (ah.crossOrigin = "*");
			ah.src = ai;
			ah.onerror = function() {
				if (!ag) {
					ah.src = "";
					ah.src = ac.concatArg(ai, {
						t: (new Date()).getTime()
					});
					ag = true
				} else {
					af()
				}
			};
			ah.onload = function() {
				aa(ah);
				ah.onerror = null;
				ah.onload = null;
				p.onLoad && p.onLoad()
			};
			return ah
		}

		function Z(af, p) {
			return ad(new Image(), af, p)
		}
		var S = window.Icon ||
		function() {    //这个函数的功能是将原始图片image加载完后，将所需部分（按imageInfo缩放位移）绘制到canvas，然后再通过toDataUrl生产img的src，返回所需的img
                        //缓存图片
			var imageCache = {};

			function af(al, ai) {
				var ak = al.split("/"),
					an = ["icon"].concat(ak.slice(0, ak.length - 1)).join("-"),
					img = imageCache[an] = imageCache[an] || new Image();
				if (img.loadDone) {
					ai(img)
				} else {
					var am = Y.bind(img, "load", function() {
						am.remove();
						ai(img)
					});
					if (!img.src) {
						var ag = getImageSrc(an + ".png"),
							aj = ae(ag);
						img.src = aj || ag;
						!aj && (img.crossOrigin = "*");
						ad(img, aj || ag, {
							onLoad: function() {
								img.loadDone = true;
								ae(ag, function() {
									return T.toDataURL(img)
								})
							}
						})
					}
				}
			}
			return function(am) {
				var imgInfo = n[am], //获取图片位置大小信息
					canvas = document.createElement("canvas"),
					context = canvas.getContext("2d"),
					img = new Image(),
					halfW = Math.round(imgInfo.w / 2),
					halfH = Math.round(imgInfo.h / 2);
				canvas.width = imgInfo.w;
				canvas.height = imgInfo.h;
				ab(img, "visibility", "hidden");
                                //获取img的src并在img加载完成后执行第二个参数中的函数，第二个参数中的函数的参数是加载完的图片
				af(am, function(image) {
					context.drawImage(image, imgInfo.x, imgInfo.y, imgInfo.w, imgInfo.h, 0, 0, imgInfo.w, imgInfo.h);
					img.onload = function() {
						aa(img);
						img.onload = null;
						ab(img, "visibility", "visible")
					};
					img.src = canvas.toDataURL("image/png")
				});
				return Y(img, {
					css: {
						width: ab.px(halfW),
						height: ab.px(halfH)
					},
					ps: {
						width: halfW,
						height: halfH
					}
				})
			}
		}();
		S.center = function(ag) {
			var p = S(ag),
				af = p.ps;
			ab(p, U.cssCenter(af.width, af.height));
			return p
		};

		function V(ag, p, ah) {
			var af = document.createElement("canvas"),
				ai = af.context = af.getContext("2d");
			ah = af.dpr = ah || (window.devicePixelRatio || 1) / (ai.webkitBackingStorePixelRatio || ai.mozBackingStorePixelRatio || ai.msBackingStorePixelRatio || ai.oBackingStorePixelRatio || ai.backingStorePixelRatio || 1);
			af.width = ag * ah;
			af.height = p * ah;
			ab(af, {
				display: "block",
				width: ab.px(af.logicalWidth = ag),
				height: ab.px(af.logicalHeight = p)
			});
			ai.scale(ah, ah);
			return af
		}
		E["17"] = Z;
		Z.load = ad;
		Z.Canvas = V;
		Z.Icon = S;
		Z.staticSrc = getImageSrc
	});
	E(function() {
		var X = E["9"],
			ab = E["8"],
			R = E["11"],
			T = E["12"],
			V = E["2"],
			Y = E["17"],
			p = {
				100: {
					transform: "rotateZ(360deg)"
				}
			};

		function ac(ag) {
			return X("div", {
				css: {
					position: "absolute",
					left: "50%",
					top: "50%",
					width: "50px",
					height: "50px",
					"margin-left": "-25px",
					"margin-top": "-25px",
					"z-index": "1000"
				},
				children: [X(Y.Icon("loading-o"), {
					css: {
						position: "absolute",
						left: 0,
						top: 0
					}
				}), X(Y.Icon("loading-c"), {
					css: {
						position: "absolute",
						left: 0,
						top: 0,
						animation: T.animation([p, 1.1, "linear", "infinite"])
					}
				})]
			}, ag || t)
		}

		function af(ai) {
			var ah = X("div", {
				classList: "tips",
				css: {
					position: "absolute",
					top: 0,
					right: 0,
					width: "40px",
					height: "40px",
					"z-index": 1000
				},
				children: [X("div", {
					css: {
						position: "absolute",
						left: "-20px",
						top: 0,
						right: 0,
						bottom: "-20px"
					}
				})]
			}, ai),
				ag = X(Y.Icon.center("music"), {
					css: {
						"border-radius": "20px",
						border: "2px solid rgba(130, 170, 118, 0.6)"
					}
				}, ah);
			V.defineAutoProperty(ah, "play", {
				value: false,
				set: function(aj) {
					if (aj) {
						T.runAnimation([ag, p, 2.3, "linear", "infinite"])
					} else {
						ab.remove(ag, "animation")
					}
				}
			});
			return ah
		}

		function S(ag) {
			return X(Y.Icon("loading-new-page"), {
				css: {
					display: "inline-block",
					"vertical-align": "top",
					animation: T.animation([p, 1.3, "linear", "infinite"])
				}
			}, ag)
		}

		function ae() {
			return X("div", {
				classList: "tips",
				css: {
					position: "absolute",
					left: "0",
					right: "0",
					bottom: "8px",
					height: "20px",
					"z-index": "10",
					"line-height": "20px",
					"text-align": "center",
					"pointer-events": "none"
				},
				children: [S(), X("div", {
					css: {
						display: "inline-block",
						"vertical-align": "top",
						"margin-left": "12px",
						color: "#888888",
						"font-size": "14px"
					},
					innerHTML: "加载新页中"
				})]
			}, t)
		}

		function U(ag) {
			return K ? X("div", {
				classList: ["tips", "switch"],
				css: {
					position: "absolute",
					left: "50%",
					bottom: "100px",
					"z-index": "100",
					"pointer-events": "none"
				},
				children: [X("div", {
					innerHTML: "点击页面",
					css: {
						position: "absolute",
						top: "-30px",
						"font-size": "12px",
						color: "white",
						width: "100px",
						"text-align": "center",
						"margin-left": "-50px"
					}
				}), X("div", {
					css: {
						height: "32px",
						width: "32px",
						"border-radius": "32px",
						background: "#4c4236",
						position: "absolute",
						top: "0",
						left: "50%",
						"margin-left": "-16px",
						animation: T.animation([{
							0: {
								transform: "scale(.9)",
								opacity: 1
							},
							100: {
								transform: "scale(1.3)",
								opacity: 0
							}
						},
						1.7, "infinite"])
					}
				}), X("div", {
					css: {
						height: "18px",
						width: "18px",
						"border-radius": "18px",
						background: "#d75b41",
						position: "absolute",
						top: "7px",
						left: "50%",
						"margin-left": "-9px",
						"z-index": 3,
						animation: T.animation([{
							50: {
								transform: "scale(0.7)"
							}
						},
						1.7, "infinite"])
					}
				}), X(Y.Icon("tips-click-first"), {
					css: {
						position: "absolute",
						left: "50%",
						top: "16px",
						"z-index": "4"
					}
				})]
			}, ag) : X(Y.Icon("tips-push-first"), {
				classList: ["tips", "switch"],
				css: {
					position: "absolute",
					"margin-left": "-32px",
					left: "50%",
					bottom: 0,
					"z-index": 10,
					"pointer-events": "none",
					animation: T.animation([{
						0: {
							opacity: 0,
							transform: "translate3d(0, 60px, 0)"
						},
						80: {
							opacity: 0.5
						}
					},
					2.5, "infinite"])
				}
			}, ag)
		}

		function ad(ag) {
			return K ? X("div") : X(Y.Icon("tips-push"), {
				classList: ["tips", "switch"],
				css: {
					position: "absolute",
					bottom: "45px",
					left: "50%",
					"margin-left": "-8px",
					"z-index": 10,
					"pointer-events": "none",
					animation: T.animation([{
						0: {
							transform: "translate3d(0, 42px, 0)",
							opacity: 0
						},
						60: {
							transform: "translate3d(0, 12px, 0)",
							opacity: 1
						},
						100: {
							opacity: 0
						}
					},
					1.5, "infinite"])
				}
			}, ag)
		}

		function aa() {
			var ag = X(Y.Icon("powered-by"), {
				css: {
					position: "absolute",
					bottom: 0,
					left: 0
				}
			}),
				ah = ag.ps;
			return X("div.powered-by", {
				css: {
					position: "absolute",
					width: ab.px(ah.width),
					height: "44px",
					left: "50%",
					"margin-left": ab.px(-ah.width / 2),
					bottom: 0,
					"z-index": 10000
				},
				children: [ag]
			}, t)
		}

		function W(ag) {
			return X(Y.Icon("tips-scratch"), {
				css: {
					position: "absolute",
					"margin-left": "-65px",
					left: "50%",
					bottom: "50px",
					"z-index": 10,
					"pointer-events": "none",
					animation: T.animation([{
						0: {
							opacity: 0
						}
					},
					1.4])
				}
			}, ag || document.body)
		}

		function Z() {
			t.classList.add("hide-tips");
			return {
				remove: function() {
					t.classList.remove("hide-tips")
				}
			}
		}
		E["18"].Loading = ac;
		E["18"].LoadingChrysanthemum = S;
		E["18"].Music = af;
		E["18"].LoadingNewPage = ae;
		E["18"].CutFirst = U;
		E["18"].Cut = ad;
		E["18"].PoweredBy = aa;
		E["18"].Scratch = W;
		E["18"].hide = Z
	});
	E(function() {
		var Y = E["8"],
			T = E["12"],
			S = E["6"],
			V = E["2"],
			aa = E["1"],
			R = E["0"],
			W = E["9"];

		function X() {
			sessionStorage.setItem(location.href, JSON.stringify({
				pageIndex: t.curPageIndex,
				workData: t.workData
			}))
		}

		function ac(ad, ae) {
			if (window.firstpage && firstpage.open) {
				firstpage.open(URL.toAbsolute(ad))
			} else {
				!ae && X();
				location.href = ad
			}
		}
		var Z = function() {
				var ad = [],
					ae = false;
				R.callWith(function(af) {
					document.readyState === "complete" ? af() : S.once(af, function(ag) {
						return W.bind(window, "load", ag)
					})
				}, function() {
					setTimeout(function() {
						W.bind(window, "popstate", function() {
							if (ad.length !== 0) {
								var af = aa.top(ad);
								ad.pop();
								af.onPop(af.actionEnd);
								if (ad.length > 1) {
									window.history.pushState(null, "", location.href)
								} else {
									ae = false
								}
							}
						})
					}, 0)
				});
				return {
					pushAction: function(ag) {
						var af = S.Event();
						ad.push({
							onPop: ag,
							actionEnd: af.trig
						});
						if (!ae) {
							ae = true;
							window.history.pushState(null, "", location.href)
						}
						return af.regist
					},
					back: function() {
						window.history.back()
					}
				}
			}();

		function ab(ae, ad) {
			var af = sessionStorage.getItem(ae);
			sessionStorage.removeItem(ae);
			return af === null ? ad : af
		}

		function U() {
			var ad = W("div", {
				css: Y.full({
					overflow: "hidden",
					"z-index": 1000
				})
			}),
				af = S.Event(),
				ae = S.Event();
			C(ad, function() {
				v = true
			});
			return V.insert(ad, {
				onSlideIn: af.regist,
				onSlideOut: ae.regist,
				slideIn: function(ag) {
					ad.isIn = true;
					if (!ag) {
						var ah = M();
						Y(ad, "visibility", "hidden");
						setTimeout(function() {
							Y(ad, "visibility", "visible");
							T.runAnimation([ad,
							{
								0: {
									transform: "translate3d(100%, 0, 0)"
								}
							},
							0.4], function() {
								af.trig();
								ah.remove()
							})
						}, 0)
					}
					Z.pushAction(function() {
						var ai = M();
						ae.trig();
						T.runAnimation([ad,
						{
							100: {
								transform: "translate3d(100%, 0, 0)"
							}
						},
						0.4], function() {
							ai.remove();
							W.remove(ad)
						});
						ad.isIn = false
					});
					t.appendChild(ad)
				}
			})
		}

		function p(ae, af, ad) {
			return p[ae] = function(ag, ai, ah) {
				ag = ag || {};

				function aj() {
					var ak = U();
					ad(ak, ag.data);
					ak.slideIn(ai)
				}
				if (ah) {
					aj()
				} else {
					if (!af) {
						B("当前环境不支持该操作")
					} else {
						if (!ag.force && (ag.noLog || af.isLogIn())) {
							ag.onLogin ? ag.onLogin(aj) : aj()
						} else {
							if (!af.canNotLogin) {
								X();
								sessionStorage.setItem("login-data", JSON.stringify({
									name: ae,
									data: ag.data
								}));
								af.logIn({
									returnUrl: location.href,
									onLogIn: aj
								})
							} else {
								af.canNotLogin()
							}
						}
					}
				}
			}
		}
		E["19"].jump = ac;
		E["19"].back = Z.back;
		E["19"].registLoginPage = p;
		E["19"].getSessionData = ab;
		E["19"].SlidePage = U
	});
	var C = function() {},
		H = function() {},
		D = function() {},
		q = function() {},
		x = function() {},
		m = function() {},
		j = function() {},
		Q = function() {},
		M = function() {},
		B = function() {},
		v = false,
		e = false;
	E(function() {
		var V = E["9"],
			T = E["2"],
			p = E["11"],
			U = p.onMoveUp,
			S = E["6"],
			Z = E["1"],
			Y = E["8"],
			X = 10,
			ab = false,
			ac = 500,
			aa = 0,
			R = [];
		p.onPointerDown(document, function(ad) {
			if (aa === 0) {
				aa = 1
			} else {
				if (aa === 1) {
					aa = 2;
					ad.preventDefault()
				} else {
					ad.preventDefault()
				}
			}
		}, true);
		p.onPointerUp(document, function() {
			Z.foreach(R, function(ad) {
				ad.remove()
			});
			aa = 0;
			R = []
		}, true);
		C = function(ae, ad) {
			ae.style && Y(ae, "pointer-events", "auto");
			return p.onPointerDown(ae, function(af) {
				var ag = V.bind(af.origin.target, "DOMNodeRemovedFromDocument", function() {
					ag.remove();
					aa = 0
				});
				R.push(ag);
				if (aa !== 2) {
					ad(af)
				}
			})
		};
		H = p.onPointerMove;
		D = p.onPointerUp;

		function W() {
			var ae = 0,
				ad = 0,
				af = {
					track: function(ah) {
						ae += ah.dX;
						ad += ah.dY;
						var ag = Math.abs(ae) > X,
							ai = Math.abs(ad) > X;
						af.dX = ae;
						af.dY = ad;
						af.xOut = ag;
						af.yOut = ai;
						af.out = ag || ai
					}
				};
			return af
		}
		q = function(ag, af) {
			var ae = W(),
				ad = U({
					onMove: function(ai) {
						ae.track(ai);
						if (ae.out) {
							ad.remove();
							ag && ag({
								xOut: ae.xOut,
								yOut: ae.yOut,
								dX: ae.dX,
								dY: ae.dY
							})
						}
					},
					onUp: function() {
						ah && clearTimeout(ah)
					}
				}),
				ah = af ? null : setTimeout(function() {
					aa = 0;
					ad.remove()
				}, ac);
			return {
				remove: function() {
					ad.remove();
					ah && clearTimeout(ah)
				}
			}
		};
		x = function(ae, ad) {
			return C(ae, function() {
				q(ad)
			})
		};
		D(document, function() {
			ab = false;
			v = false;
			e = false
		});
		Q = function(ag) {
			var af = W(),
				ai = D(document, function(aj) {
					if (!ab) {
						ag && ag(aj);
						ab = true
					}
				}),
				ah = setTimeout(function() {
					ai.remove();
					ae.remove()
				}, ac),
				ae = U({
					onMove: function(aj) {
						af.track(aj);
						if (af.out) {
							ad()
						}
					},
					onUp: ad
				});

			function ad() {
				ae.remove();
				clearTimeout(ah);
				ai.remove()
			}
			return {
				remove: ad
			}
		};
		j = function(ae, ad) {
			return C(ae, function() {
				Q(ad)
			})
		};
		m = function(ag) {
			var af = W(),
				ah = setTimeout(function() {
					ae.remove();
					ag && ag()
				}, ac),
				ae = U({
					onMove: function(ai) {
						af.track(ai);
						if (af.out) {
							ad()
						}
					},
					onUp: ad
				});

			function ad() {
				ae.remove();
				clearTimeout(ah)
			}
			return {
				remove: ad
			}
		};
		M = function(ad) {
			ad = ad || document.documentElement;
			ad.classList.add("lock");
			return {
				remove: function() {
					ad.classList.remove("lock")
				}
			}
		};
		B = function() {
			var ad, ae;
			return function(ag, af) {
				if (!ad) {
					ad = V("div.msg-box", {
						css: {
							bottom: Y.px(G.chuyeList ? 80 : 40)
						}
					}, document.body);
					ae = V("div.msg", ad)
				}
				ae.innerHTML = ag;
				V.classList(ad).remove("remove").add("show");
				S.once(function() {
					V.classList(ad).add("remove").remove("show")
				}, function(ah) {
					return [C(document, ah), S.setTimeout(ah, af || 2000)]
				})
			}
		}()
	});
	var I, G, w = {};
	E(function() {
		var U = E["19"],
			R = E["2"],
			p = E["3"],
			S;
		I = E["16"];
		E["20"];
		R.insert(G = E["10"], {
			iphone4: G.iphone && screen.height === 480,
			iphone5: G.iphone && screen.height === 568,
			iphone6: G.iphone && screen.height > 568,
			mi4: /Mi 4LTE/gi.test(navigator.userAgent)
		});
		if (G.chuye = window.inChuyeList || /chuye/gi.test(navigator.userAgent)) {
			G.chuyeVersion = /chuye\/([\d.]*)/gi.test(navigator.userAgent) ? parseFloat(RegExp.$1) : 1;
			G.chuyeList = !! (window.inChuyeList || (/chuyeFlow/gi.test(navigator.userAgent)) || p(location.href).arg.list)
		}
		if (G.iphone) {
			S = "iphone"
		} else {
			if (G.ipad) {
				S = "ipad"
			} else {
				if (G.ios) {
					S = "ios-other"
				} else {
					if (G.android) {
						S = "android"
					} else {
						S = "other"
					}
				}
			}
		}

		function T() {
			if (G.chuye) {
				B("您正在使用初页")
			} else {
				w.track(["Download", "Click", S]);
				if (G.android) {
					location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cloud7.firstpage"
				} else {
					if (G.ios) {
						location.href = G.MicroMessenger ? "http://a.app.qq.com/o/simple.jsp?pkgname=com.cloud7.firstpage" : "https://itunes.apple.com/cn/app/chu-ye/id910560238?mt=8"
					} else {
						U.jump("http://www.cloud7.com.cn/chuye")
					}
				}
			}
		}
		E["21"].downloadFirstPage = T
	});
	E(function() {
		var p = E["2"],
			U = E["1"],
			T = E["9"],
			R = {};
		E["21"];

		function S() {
			function V(Y, X) {
				var W = {
					title: R.title,
					link: R.url,
					imgUrl: R.picture,
					success: function() {
						var Z = new XMLHttpRequest();
						Z.open("post", virtualPath + "/Work/Share", true);
						Z.send(null);
						w.track(["Share", Y])
					}
				};
				return X ? W : p.extend(W, {
					desc: R.desc
				})
			}
			if (window.wx && R.title !== undefined) {
				wx.onMenuShareTimeline(V("TimeLine", true));
				wx.onMenuShareAppMessage(V("AppMessage"));
				wx.onMenuShareQQ(V("QQ"));
				wx.onMenuShareWeibo(V("Weibo"))
			}
		}
		if (G.MicroMessenger && window.wxConfig) {
			T("script", {
				src: "http://res.wx.qq.com/open/js/jweixin-1.0.0.js",
				onload: function() {
					wx.ready(function() {
						S();
						wx.getNetworkType({
							success: function(V) {
								G.networkType = V.networkType
							}
						})
					});
					wx.config(p.extend(window.wxConfig, {
						debug: false,
						jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "getNetworkType"]
					}));
					this.onload = null
				}
			}, document.head)
		}
		E["22"] = function(V) {
			R = V;
			V.title && (document.title = V.title);
			S()
		}
	});
	E(function() {
		var ab = E["4"],
			aa = E["3"],
			S = E["2"],
			X = E["1"],
			R = E["6"],
			U = E["9"],
			Y = E["18"],
			p = E["0"],
			W = E["8"],
			ac = E["22"],
			V = E["17"],
			T = [];

		function Z(ad) {
			ad = aa(ad);
			var ae = X.top(ad.pathname.split("/"));
			return function(ah, ag) {
				function af() {
					var ai = X.findFirst(T, function(aj) {
						return aj.id === ae
					});
					return ai ? ai.data : null
				}
				ag.workId = ae;
				p.callWith(function(aj) {
					var ai = window.workData || af();
					ai ? aj(ai) : ab({
						url: ad
					}, function(ak, an) {
						var al;
						try {
							al = JSON.parse(an.responseText)
						} catch (am) {
							aj({
								code: 1500
							})
						}
						al && aj(al)
					})
				}, function(ak) {
					if (ak.code !== 200) {
						var am, ao;
						switch (ak.code) {
						case 1401:
							am = 1401;
							ao = "您没有权限查看该作品";
							break;
						case 1500:
							am = 1500;
							ao = "哎呀,页面出错了,一会再来吧";
							break;
						default:
							am = 500;
							ao = "抱歉,您访问的页面已失踪";
							break
						}
						ag.innerHTML = "";
						ag.loadError = true;
						ag.onLoadError && ag.onLoadError();
						ag.workTitle = ao;
						W(ag, "background", "white");
						var aj = V(V.staticSrc(am + ".png"), {
							onLoad: function() {
								U(aj, {
									css: I.cssCenter(aj.halfWidth, aj.halfHeight)
								}, ag)
							}
						});
						return
					}
					if (ad && !af()) {
						T.push({
							id: ae,
							data: ak
						});
						T.length > 100 && T.unshift()
					}
					window.parent.onWorkLoad && window.parent.onWorkLoad(ak);
					if (ak = ak.data) {
						var al = {
							id: ae,
							picture: document.thumbnail = ak.thumbnail,
							title: ag.workTitle = ak.title,
							url: location.origin + location.pathname,
							desc: document.description = ak.description || ""
						},
							ai = X.map(ak.pages, function(ap) {
								return ap.layout
							}),
							an = false;
						if (G.chuye) {
							G.chuyeVersion < 2 && R.polling(function() {
								return !!document.onFirstPageDataLoad
							}, function() {
								document.onFirstPageDataLoad()
							})
						} else {
							ac(al)
						}
						if (ak.copyright) {
							ai.push({
								label: "author",
								image: [ak.headimgurl],
								data: {
									author: ak.author,
									uid: ak.uid
								}
							})
						} else {
							an = true;
							Y.PoweredBy()
						}
						ah({
							workInfo: al,
							theme: ak.theme,
							mode: ak.mode,
							color: ak.backgroud ? ak.backgroud.color === "FFFFFF" ? "#FFFFFF" : ak.backgroud.color : "#FFFFFF",
							pageSwitch: ak.pageSwitch ? ak.pageSwitch.animateId || "classic" : "classic",
							music: ak.music ? ak.music.src : null,
							pages: ai,
							noLoop: an
						})
					}
				})
			}
		}
		E["23"] = Z
	});
	E(function() {
		var Y = E["4"],
			W = E["3"],
			T = E["2"],
			U = E["1"],
			p = W(location.href),
			ab = null,
			aa = w.SignupSystem = {},
			S;
		E["21"];
		var R = function() {
				var ac = JSON.parse(localStorage.getItem("cookie") || "{}");
				T.foreach(ac, function(ae, af) {
					if (af.expires < new Date()) {
						delete ac[ae]
					}
				});

				function ad() {
					localStorage.setItem("cookie", JSON.stringify(ac))
				}
				ad();
				return {
					getItem: function(ae) {
						return ac[ae] ? ac[ae].value : null
					},
					setItem: function(ae, ag, af) {
						ac[ae] = {
							value: ag,
							expires: (new Date()).getTime() + af * 1000
						};
						ad()
					},
					expires: function(ae, af) {
						if (ac[ae]) {
							ac[ae].expires = (new Date()).getTime() + af * 1000;
							ad()
						}
					},
					remove: function(ae) {
						delete ac[ae];
						ad()
					}
				}
			}();

		function X(ac) {
			return Y({
				method: "post",
				url: W.concatArg("http://c.cloud7.com.cn" + ac.url, S ? {
					_token: S
				} : {}),
				data: T.is.String(ac.data) ? ac.data : W.encodeObject(ac.data),
				headers: T.extend({
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded"
				}, ac.headers || {})
			}, function(ad, af) {
				var ae = JSON.parse(af.responseText);
				if (ae.code === 302) {
					ac.on302 && ac.on302(ae.data)
				} else {
					ac.success(ae.data)
				}
			})
		}
		if (!G.MicroMessenger) {
			aa.canNotLogin = function() {
				B("请在微信中使用")
			};
			aa.isLogIn = function() {
				return false
			}
		} else {
			if (S = p.arg._token) {
				R.setItem("token", S, 7 * 24 * 60 * 60);
				w.getUserInfo = function(ac) {
					if (ab) {
						ac(ab)
					} else {
						X({
							url: "/api/Wechat/CurrentUser",
							success: function(ad) {
								ac(ab = ad)
							}
						})
					}
				};
				aa.isLogIn = function() {
					return true
				}
			} else {
				S = R.getItem("token");
				w.getUserInfo = function(ac) {
					ac(ab)
				};
				aa.isLogIn = function() {
					return ab !== null
				};
				if (S) {
					var Z = null,
						V = null;
					X({
						url: "/api/Wechat/CurrentUser",
						on302: function(ac) {
							Z && Z(ac);
							w.logIn = function() {
								X({
									url: "/api/Wechat/CurrentUser",
									on302: jump
								})
							}
						},
						success: function(ac) {
							ab = ac;
							V && V()
						}
					});
					aa.logIn = function(ac) {
						if (ab) {
							ac.onLogIn()
						} else {
							Z = jump;
							V = ac.onLogIn
						}
					}
				} else {
					aa.logIn = function() {
						location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9d492ee399e6a24c&redirect_uri=" + encodeURIComponent("http://c.cloud7.com.cn/Auth?returnUrl=" + encodeURIComponent(location.href)) + "&response_type=code&scope=snsapi_base&state=#wechat_redirect"
					}
				}
			}
		}
		w.track = function(ac) {
			window.cas && cas.trackEvent(ac)
		};
		w.sendForm = function(ad, ac) {
			Y({
				url: virtualPath + "/Integra/SaveData",
				method: "post",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				data: W.encodeObject({
					formid: ac.id,
					data: JSON.stringify(ac.data)
				})
			}, ad)
		}
	});
	E(function() {
		function p(X) {
			return X >= 0 ? 1 : -1
		}

		function W(aa, Z, Y, ac, ab, X) {
			aa -= Y;
			Z -= ac;
			return aa >= 0 && aa < ab && Z >= 0 && Z < X
		}

		function R(Y, Z, X) {
			if (Z <= X) {
				return Y < Z ? Z : Y > X ? X : Y
			} else {
				return R(Y, X, Z)
			}
		}

		function U(Y, Z, X) {
			if (Z <= X) {
				return Y >= Z && Y < X
			} else {
				return U(Y, X, Z)
			}
		}

		function V(X, Y) {
			return Math.sqrt(X * X + Y * Y)
		}

		function T(X, Y) {
			return X / V(X, Y)
		}

		function S(Z, ab, Y, aa, ac) {
			var X = 0.0001,
				ad = ac ||
			function(af) {
				function ah(ap, ao, an) {
					var al = 1 - ap,
						aq = al * al,
						ak = ap * ap,
						aj = ak * ap,
						am = ap * aq,
						ai = ak * al;
					return 3 * ao * am + 3 * an * ai + aj
				}

				function ag(ai, ak, aj) {
					return (9 * ak - 9 * aj + 3) * ai * ai + (6 * aj - 12 * ak) * ai + 3 * ak
				}
				var ae = 0.5;
				while (Math.abs(af - ah(ae, Z, Y)) > X) {
					ae = ae - (ah(ae, Z, Y) - af) / ag(ae, Z, Y)
				}
				return ah(ae, ab, aa)
			};
			ad.arg = [Z, ab, Y, aa];
			return ad
		}
		E["25"].sign = p;
		E["25"].inRect = W;
		E["25"].range = R;
		E["25"].inRange = U;
		E["25"].distance = V;
		E["25"].sin2 = T;
		E["25"].Bezier = S
	});
	E(function() {
		var ab = E["25"],
			T = ab.Bezier,
			Y = E["1"],
			W = E["2"],
			S = E["5"],
			Z = null,
			X = S(),
			V = {
				linear: T(1, 1, 1, 1, function(ac) {
					return ac
				}),
				ease: T(0.25, 0.1, 0.25, 1),
				easeIn: T(0.42, 0, 1, 1),
				easeOut: T(0, 0, 0.58, 1),
				easeInOut: T(0.42, 0, 0.58, 1)
			};

		function p(ae, ad, ac) {
			return ae + (ad - ae) * ac
		}

		function U(ac) {
			var ad = null;

			function ae() {
				if (ad === null) {
					ad = X.insert(S.Node(ac), null);
					if (Z === null) {
						Z = setTimeout(function af() {
							var ag;
							if (X.tail() !== null) {
								Z = setTimeout(af, 1000 / 60);
								for (ag = X.head(); ag !== null; ag = ag.next) {
									ag.value()
								}
							} else {
								Z = null
							}
						}, 1000 / 60)
					}
				}
			}
			ae();
			return {
				start: ae,
				remove: function() {
					ad && X.remove(ad);
					ad = null
				}
			}
		}

		function aa(ac) {
			var ag = (ac.duration || 1) * 1000,
				ae = ac.timing || V.ease,
				ad = -(ac.delay || 0) * 1000,
				af = new Date();
			return {
				ratio: function() {
					var ah = new Date();
					ad += ah - af;
					af = ah;
					return ad < 0 ? null : ae(ad >= ag ? 1 : ad / ag)
				},
				isEnd: function() {
					return ad >= ag
				},
				progress: function(ah) {
					ad = ah * ag;
					af = new Date()
				}
			}
		}

		function R(ac) {
			var ae = aa(ac),
				af = ac.onAnimate;

			function ag() {
				ad.remove();
				ac.onAnimate(1);
				ac.onEnd && ac.onEnd()
			}
			af(0);
			var ad = U(function() {
				af(ae.ratio());
				if (ae.isEnd()) {
					ag()
				}
			});
			return {
				remove: ad.remove,
				progress: ae.progress,
				fastForward: ag
			}
		}
		E["26"].Bezier = T;
		E["26"].Timing = V;
		E["26"].fromTo = p;
		E["26"].requestFrame = U;
		E["26"].Progress = aa;
		E["26"].requestFrames = R
	});
	E(function() {
		var U = E["0"],
			V = E["1"],
			p = E["2"],
			T = [24, 14, 108, 51, 101, 49, 48, 85, 81, 41, 70, 99, 106, 88, 50, 102, 43, 64, 47, 7, 26, 90, 31, 39, 19, 2, 89, 0, 3, 1, 36, 67, 13, 73, 97, 23, 65, 86, 95, 37, 80, 11, 59, 107, 29, 96, 60, 6, 66, 9, 42, 93, 46, 5, 45, 78, 103, 54, 77, 40, 68, 74, 35, 53, 18, 94, 16, 21, 28, 72, 61, 87, 17, 38, 56, 58, 82, 79, 83, 57, 27, 63, 92, 8, 30, 10, 33, 55, 44, 98, 22, 71, 52, 75, 25, 32, 62, 15, 84, 34, 20, 104, 12, 100, 109, 76, 4, 69, 105, 91],
			S = T.length;

		function R(W) {
			var X = W === undefined ?
			function() {
				return Math.random()
			} : function() {
				var Y = W % S;
				return function() {
					var Z = T[(++Y % S)] / S;
					return Z
				}
			}();
			return p.insert(X, {
				select: function(Y) {
					return Y[X() * Y.length << 0]
				},
				arrange: function(aa) {
					var Z = [],
						Y = aa.length;
					aa = aa.map(function(ab) {
						return ab
					});
					U.loop(Y, function(ac) {
						ac = Y - ac - 1;
						var ab = X() * ac << 0;
						Z.push(aa[ab]);
						aa[ab] = aa[ac]
					});
					return Z
				}
			})
		}
		E["27"] = p.insert(R(), {
			Random: R
		})
	});
	E(function() {
		var V = E["1"],
			R = {
				eye: function() {
					return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
				},
				translate: function(W, Y, X) {
					return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, W, Y, X, 1]
				},
				scale: function(W, Y, X) {
					return [W, 0, 0, 0, 0, Y, 0, 0, 0, 0, X, 0, 0, 0, 0, 1]
				},
				rotateX: function(W) {
					var X = Math.sin(W),
						Y = Math.cos(W);
					return [1, 0, 0, 0, 0, Y, X, 0, 0, -X, Y, 0, 0, 0, 0, 1]
				},
				rotateY: function(W) {
					var X = Math.sin(W),
						Y = Math.cos(W);
					return [Y, 0, -X, 0, 0, 1, 0, 0, X, 0, Y, 0, 0, 0, 0, 1]
				},
				rotateZ: function(W) {
					var X = Math.sin(W),
						Y = Math.cos(W);
					return [Y, X, 0, 0, -X, Y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
				},
				rotate: function(Y, X) {
					var W = Y[0],
						ad = Y[1],
						ac = Y[2],
						aa = Math.sqrt(W * W + ad * ad + ac * ac),
						Z = Math.sin(X),
						ab = Math.cos(X);
					W /= aa;
					ad /= aa;
					ac /= aa;
					return [1 + (1 - ab) * (W * W - 1), ac * Z + W * ad * (1 - ab), -ad * Z + W * ac * (1 - ab), 0, -ac * Z + W * ad * (1 - ab), 1 + (1 - ab) * (ad * ad - 1), W * Z + ad * ac * (1 - ab), 0, ad * Z + W * ac * (1 - ab), -W * Z + ad * ac * (1 - ab), 1 + (1 - ab) * (ac * ac - 1), 0, 0, 0, 0, 1]
				},
				perspective: function(W) {
					return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / W, 0, 0, 0, 1]
				}
			};

		function T(Y, X) {
			for (var ab = 0, W = []; ab < 4; ++ab) {
				for (var aa = 0; aa < 4; ++aa) {
					W[ab * 4 + aa] = 0;
					for (var Z = 0; Z < 4; ++Z) {
						W[ab * 4 + aa] += X[ab * 4 + Z] * Y[Z * 4 + aa]
					}
				}
			}
			return W
		}

		function U() {
			return V.reduce(arguments, T)
		}

		function p(X, W, Z, Y) {
			return U(R.translate(W, Z, Y), X, R.translate(-W, -Z, -Y))
		}

		function S(W, X) {
			return V.map(V.range(4), function(Y) {
				return W[Y] * X[0] + W[Y + 4] * X[1] + W[Y + 8] * X[2] + W[Y + 12] * X[3]
			})
		}
		E["28"].matrix = R;
		E["28"].combine = U;
		E["28"].origin = p;
		E["28"].transform = S
	});
	var o, l = function() {},
		g = function() {},
		u = {},
		J = {},
		k = {};
	E(function() {
		var an = E["2"],
			p = an.insert,
			W = E["0"],
			ae = E["8"],
			V = E["6"],
			ab = E["15"],
			R = ab.matrix,
			aj = E["28"],
			af = aj.matrix,
			Z = E["1"],
			U = E["9"],
			am = E["13"],
			ai = E["11"],
			X = E["17"],
			ao = E["14"];

		function T(ap) {
			return {
				opacity: ap.opacity,
				x: ap.x,
				y: ap.y,
				rotate: ap.rotate,
				scale: ap.scale
			}
		}

		function ag(ap) {
			return aj.combine(af.scale(ap.scale, ap.scale, 1), af.rotateZ(ap.rotate / 180 * Math.PI))
		}

		function al(ap) {
			return aj.origin(ag(ap), ap.width / 2, ap.height / 2, 0)
		}

		function ah(ap) {
			return ab.origin(ab.combine(R.translate(ap.x, ap.y), R.scale(ap.scale, ap.scale), R.rotate(ap.rotate / 180 * Math.PI)), ap.width / 2, ap.height / 2)
		}

		function ak(aq) {
			var ap = R.eye();
			while (aq.parent) {
				ap = ab.combine(ah(aq), ap);
				aq = aq.parent
			}
			return ap
		}

		function S(aq) {
			var ap = ag(aq);
			aq.opacity = aq.opacity + 0;
			if (aq.left === undefined) {
				ae(aq.element, {
					left: ae.px(aq.x),
					top: ae.px(aq.y)
				})
			} else {
				ap = aj.combine(af.translate(aq.x - aq.left, aq.y - aq.top, 0), ap)
			}
			ae.transform(aq.element, ae.matrix3d(ap));
			ae.remove(aq.element, "transform-origin")
		}

		function ad(aq) {
			if (aq.element) {
				return aq.element()
			} else {
				var ap = X.Canvas(aq.width, aq.height);
				aq.draw(ap.context);
				return G.android ? U("div", [ap]) : ap
			}
		}
		g = function(ap) {
			return function(aq) {
				return an.insert(ap.apply(null, arguments), {
					dataSource: aq ? aq.dataSource : null
				})
			}
		};
		l = function(ar, au) {
			var aq = ad(ar),
				av = G.ios ? U("div", {
					css: {
						position: "absolute",
						left: 0,
						top: 0,
						transform: "translateZ(10000px)"
					},
					children: [aq]
				}) : aq,
				aw = aq.wrapper = {
					fixed: true
				},
				ap = {};
			ae(aq, {
				position: "absolute",
				display: "block",
				left: 0,
				top: 0,
				width: ae.px(aw.width = ar.width),
				height: ae.px(aw.height = ar.height),
				"z-index": 0
			});

			function at(ay, ax, aA, az) {
				ap[ay] = ax;
				Object.defineProperty(aw, ay, {
					get: function() {
						return ap[ay]
					},
					set: function(aB) {
						ap[ay] = az ? az(aB) : aB;
						aA && aA(aB)
					}
				})
			}
			at("opacity", 1, function(ax) {
				ae(aq, "opacity", ax)
			});
			at("zi", 0, function(ax) {
				ae(av, "z-index", ax)
			});
			at("visible", true, function(ax) {
				ae(aq, "visibility", ax ? "visible" : "hidden")
			});
			an.defineAutoProperty(aw, "dataSource", {
				value: ar.dataSource,
				set: function(ax) {
					aq.classList.add("layout-component-from-data");
					aq.dataSource = ax
				}
			});
			an.foreach({
				x: 0,
				y: 0
			}, function(ay, ax) {
				at(ay, ax, function() {
					S(aw)
				}, function(az) {
					return aw.fixed ? az << 0 : az
				})
			});
			Object.defineProperty(aw, "origin", {
				get: function() {
					return [aw.x, aw.y]
				},
				set: function(ax) {
					aw.x = ax[0];
					aw.y = ax[1]
				}
			});
			an.foreach({
				rotate: 0,
				scale: 1
			}, function(ay, ax) {
				at(ay, ax, function() {
					S(aw)
				})
			});
			an.insert(aw, {
				element: aq,
				appendTo: function(ax) {
					if (!ax.children) {
						ax.children = []
					}
					ax.children.push(aw);
					ax.element.appendChild(av);
					aw.parent = ax;
					return aw
				},
				draw: function(ax) {
					ax.transform.apply(ax, ah(aw));
					ar.draw(ax)
				}
			});
			if (au) {
				aw.appendTo(au)
			}
			return aw
		};

		function aa(aq, ar) {
			W.recursion(function ap(at) {
				at.children && Z.foreach(at.children, ap);
				aq !== at && ar(at)
			}, aq)
		}

		function ac(aq) {
			var at = U("div.layout", {
				css: ae.full({
					"z-index": 0,
					"backface-visibility": "hidden",
					overflow: "hidden"
				})
			}),
				av = {
					body: aq
				},
				ap = V.Event(),
				ar = V.Event(),
				au = V.Event();
			an.defineAutoProperty(av, "background", {
				value: "black",
				set: function(aw) {
					ae(at, "background", aw)
				}
			});
			return p(at, {
				draw: function(ax) {
					ax.fillStyle = av.background;
					ax.fillRect(0, 0, i, F);
					W.recursion(function aw(ay) {
						ax.save();
						if (ay.visible && at.contains(ay.element)) {
							ay.draw && ay.draw(ax);
							ay.children && Z.foreach(ay.children.sort(function(az, aA) {
								return az.zi - aA.zi
							}), aw)
						}
						ax.restore()
					}, av)
				},
				recycle: function() {
					au.trig();
					at.prepare = function() {
						return at
					}
				},
				prepare: function() {
					var aw = o.enter(av);
					return p(at, {
						recycle: function() {
							au.trig();
							at.play = function() {
								return at
							}
						},
						fastForward: function() {},
						play: function() {
							aa(at.wrapper, function(ay) {
								ay.left = ay.x;
								ay.top = ay.y
							});
							var ax = aw.run(ar.trig);
							ap.trig();
							return p(at, {
								recycle: au.trig,
								fastForward: ax.fastForward
							})
						}
					})
				},
				wrapper: p(av, {
					visible: true,
					element: at,
					onShow: ap.regist,
					onEnterEnd: ar.regist,
					onRemove: au.regist
				}),
				toCanvas: function() {
					var aw = X.Canvas(i, F);
					at.draw(aw.context);
					return aw
				}
			})
		}

		function Y(ar, at, aq) {
			ar = ar || {};
			var av = ar.format || u[ar.label] || u.SingleImage,
				ap = [],
				au = {};
			W.callWith(function(aw) {
				av.load ? av.load(ar, aw) : aw(ar)
			}, function(aw) {
				var ax = [];
				av = aw.format || u[aw.label] || u.SingleImage;
				Z.foreach(aw.image || [], function(az, ay) {
					ax.push(function(aA) {
						az = az.url ? az.url : az;
						var aB = X(az, {
							crossOrigin: av.crossOrigin,
							onError: function() {
								ap[ay] = aB;
								aA()
							},
							onLoad: function() {
								ap[ay] = aB;
								aA()
							}
						})
					})
				});
				an.foreach(av.resource, function(ay, az) {
					ax.push(function(aA) {
						var aD, aB, aE;

						function aC() {
							au[ay] = aB;
							aA()
						}
						if (/\./.test(az)) {
							az = X.staticSrc(az);
							aD = ao(az);
							aB = X(aD || az, {
								crossOrigin: aD ? av.crossOrigin : null,
								onError: aC,
								onLoad: function() {
									aC();
									ao(az, function() {
										return am.toDataURL(aB)
									})
								}
							})
						} else {
							aB = X.Icon(az);
							aE = U.bind(aB, "load", function() {
								aC();
								aE.remove()
							})
						}
					})
				});
				Z.foreach(aw.componentImages || [], function(ay) {
					ax.push(function(az) {
						X.load(ay, ay.targetSrc, {
							crossOrigin: av.crossOrigin,
							onError: az,
							onLoad: az
						})
					})
				});
				V.concurrency(ax, function() {
					at && at(function(az, aC) {
						var aG = ac(aC);
						if (av.ignorePureColor) {
							ap = Z.remove(ap, function(aH) {
								return !!aH.color
							})
						}

						function aE(aI, aH) {
							return function(aJ) {
								return aJ === undefined ? aI : aI ? aI[aJ] : aH
							}
						}
						try {
							av.create(aG.wrapper, an.extend(aw, {
								data: function() {
									return aw.data
								},
								image: function aA(aI) {
									if (aI === undefined) {
										return Z.map(ap, function(aJ, aK) {
											return aA(aK)
										})
									}
									var aH = ap[aI] || U("img", {
										fail: true
									});
									aH.dataSource = {
										from: "image",
										index: aI
									};
									return aH
								},
								text: function(aH) {
									var aI = aw.text[aH] || "";
									return {
										dataSource: {
											from: "text",
											index: aH
										},
										toString: function() {
											return aI
										}
									}
								},
								component: aE(aw.components, {}),
								imageinfo: aE(aw.imageinfo, {}),
								location: aE(aw.location, {}),
								video: aE(aw.video, ""),
								actionlinks: aE(aw.actionlinks, ""),
								position: aE(aw.position, "")
							}), au, az)
						} catch (aF) {
							aG = ac();
							var aB = aG.wrapper,
								ay = aq.ps,
								aD = l(g.Image(aq, ay.width, ay.height), aB);
							aB.background = "white";
							aD.x = I.center(aD);
							aD.y = I.middle(aD)
						}
						return aG
					})
				})
			})
		}
		E["29"].loopComponent = aa;
		E["29"].contentToElement = ad;
		E["29"].getMatrix = ag;
		E["29"].getPageMatrix = ak;
		E["29"].getScaleRotateMatrixOrigin = al;
		E["29"].setStyle = S;
		E["29"].getStyle = T;
		E["29"].loadPage = Y;
		E["29"].setAnimationEngine = function(ap) {
			o = ap
		}
	});
	E(function() {
		var S = E["9"],
			R = E["8"],
			p = R.px;
		g.Rect = function(V, T, U) {
			return {
				width: V,
				height: T,
				element: function() {
					return S("div", {
						css: {
							background: U || "transparent"
						}
					})
				},
				draw: function(W) {
					if (U) {
						W.fillStyle = U;
						W.fillRect(0, 0, V, T)
					}
				}
			}
		};
		g.Circle = function(U, T) {
			return {
				width: U * 2,
				height: U * 2,
				element: function() {
					return S("div", {
						css: {
							"border-radius": p(U),
							background: T || "transparent"
						}
					})
				},
				draw: function(V) {
					if (T) {
						V.save();
						V.beginPath();
						V.arc(U, U, U, 0, 2 * Math.PI);
						V.closePath();
						V.fillStyle = T;
						V.fill();
						V.restore()
					}
				}
			}
		}
	});
	var z = function() {},
		h = function() {},
		L = function() {},
		b = function() {};
	E(function() {
		var T = E["2"],
			X = E["1"],
			S = E["26"],
			V = E["8"],
			Z = E["29"],
			W = E["7"];
		E["30"];
		h = function(ac, ad, ab) {
			return T.extend(ac, {
				duration: ad,
				delay: ab
			})
		};
		z = function(ac, ab) {
			return h(ac, undefined, ab)
		};
		L = function(ab) {
			var ac = 0;
			X.foreach(ab, function(ae) {
				var ad = T.extend(ae[1]);
				ad.duration = ae[2] || ad.duration || 1;
				ad.delay = T.defaultValue(ae[3], (ac + (ad.delay || 0)));
				ae[0].enter = ad;
				ac = ad.delay + ad.duration
			})
		};
		b = function(ab) {
			T.foreach(ab, function(ac, ad) {
				X.foreach(ad, function(ae) {
					ae.applyEnter = {
						type: ac
					}
				})
			})
		};

		function R(ac) {
			var ab = ac.progress;
			ab = T.is.Function(ab) ? ab(l(g.Rect(0, 0))) : ab;
			return !ab["0"] || ac.emphasize
		}

		function Y(ae, ac) {
			function ah(ak, aj) {
				return T.is.String(ak) ? parseInt(ak.replace("%", "")) / 100 * aj : ak
			}
			var ad = ac.rotate || 0,
				ai = T.defaultValue(ac.scale, 1),
				ag = ae.width,
				ab = ae.height,
				af = T.extend({
					opacity: 1,
					x: 0,
					y: 0,
					z: 0,
					rotateX: 0,
					rotateY: 0,
					rotateZ: ad,
					scaleX: ai,
					scaleY: ai,
					skewX: 0,
					skewY: 0,
					originX: "50%",
					originY: "50%",
					originZ: 0,
					perspective: 0
				}, ac);
			delete af.rotate;
			delete af.scale;
			return T.extend(af, {
				component: ae,
				x: ah(af.x, ag),
				y: ah(af.y, ab),
				origin: ac
			})
		}

		function p(ab, af) {
			var ad = [],
				ai = undefined,
				aj = undefined,
				ah = ab.component,
				ae = ab.origin;

			function ag(ak) {
				return ak !== undefined
			}

			function ac(al, an, am, ak) {
				ak && ad.push(W.tuple(al, [am(an)]))
			}
			ac("perspective", ab.perspective, V.px, ag(ae.perspective));
			if (ab.matrix === undefined) {
				if (ag(ae.x) || ag(ae.y) || ag(ae.z)) {
					ad.push(V.translate(ab.x, ab.y, ab.z))
				}
				if (ag(ae.scaleX) || ag(ae.scaleY) || ag(ae.scale)) {
					ad.push(V.scale(ab.scaleX, ab.scaleY))
				}
				ac("rotateX", ab.rotateX, V.deg, ag(ae.rotateX));
				ac("rotateY", ab.rotateY, V.deg, ag(ae.rotateY));
				ac("rotateZ", ab.rotateZ, V.deg, ag(ae.rotateZ) || ag(ae.rotate));
				ac("skewX", ab.skewX, V.deg, ag(ae.skewX));
				ac("skewY", ab.skewY, V.deg, ag(ae.skewY));
				af !== true && ad.push(V.matrix3d(Z.getMatrix(ah)))
			} else {
				ai = "0 0";
				aj = "";
				ad.push(V.matrix3d(ab.matrix))
			}
			return T.extend({
				opacity: ab.opacity * ah.opacity,
				transform: ad.join(" ")
			}, {
				"perspective-origin": aj,
				"transform-origin": ai
			})
		}

		function aa(ac, ab) {
			if (T.is.Function(ab)) {
				ab = ab(ac)
			}
			return T.insert(X.collect(function(ad) {
				T.foreach(ab, function(ae, af) {
					X.foreach(ae.split(" "), function(ag) {
						ad({
							ratio: parseInt(ag) / 100,
							value: af
						})
					})
				})
			}).sort(function(ae, ad) {
				return ae.ratio - ad.ratio
			}), {
				component: ac
			})
		}

		function U(ac, ad) {
			var ae = {},
				ab = ac.component;
			X.foreach(ac, function(ag) {
				var af = ag.value;
				ae[ag.ratio * 100] = T.extend(p(Y(ab, af), ad), {
					timing: af.timing ? V.bezier(af.timing.arg) : undefined
				})
			});
			return ae
		}
		T.foreach(S, function(ac, ab) {
			E["31"][ac] = ab
		});
		E["31"].isEmphasize = R;
		E["31"].frameStyle = Y;
		E["31"].cssFrameStyle = p;
		E["31"].frameProgress = aa;
		E["31"].cssFrameProgress = U
	});
	E(function() {
		var p = E["2"],
			T = E["26"],
			U = E["28"],
			R = U.matrix,
			S = E["29"];
		J.FlyInto = function(W) {
			var V = 0,
				X = 0;
			switch (W) {
			case 3:
				V = -1;
				break;
			case 1:
				V = 1;
				break;
			case 0:
				X = -1;
				break;
			case 2:
				X = 1;
				break
			}
			return {
				direction: W,
				progress: {
					"0": p.defineGetter({}, {
						x: function() {
							return V * Math.max(i, i) * 2
						},
						y: function() {
							return X * Math.max(i, i) * 2
						}
					})
				}
			}
		};
		J.rubberBand = {
			scale: true,
			progress: {
				"30": {
					scaleX: 1.25,
					scaleY: 0.75
				},
				"40": {
					scaleX: 0.75,
					scaleY: 1.25
				},
				"50": {
					scaleX: 1.15,
					scaleY: 0.85
				},
				"65": {
					scaleX: 0.95,
					scaleY: 1.05
				},
				"75": {
					scaleX: 1.05,
					scaleY: 0.95
				}
			}
		};
		J.tada = {
			scale: true,
			timing: T.Timing.linear,
			progress: {
				"10 20": {
					scale: 0.9,
					rotate: -3
				},
				"30 50 70 90": {
					scale: 1.1,
					rotate: 3
				},
				"40 60 80": {
					scale: 1.1,
					rotate: -3
				}
			}
		};
		J.wobble = {
			duration: 0.8,
			progress: {
				"15": {
					x: "-25%",
					rotate: -5
				},
				"30": {
					x: "20%",
					rotate: 3
				},
				"45": {
					x: "-15%",
					rotate: -3
				},
				"60": {
					x: "10%",
					rotate: 2
				},
				"75": {
					x: "-5%",
					rotate: -1
				}
			}
		};
		J.shake = {
			timing: T.Timing.linear,
			duration: 1,
			progress: {
				"10 30 50 70 90": {
					x: -10
				},
				"20 40 60 80": {
					x: 10
				}
			}
		};
		J.fallDownAndShake = {
			duration: 0.7,
			timing: T.Timing.easeOut,
			progress: {
				"0": p.defineGetter({
					rotate: -15
				}, {
					y: function() {
						return -F * 1.2
					}
				}),
				"40": {
					rotate: -15
				},
				"45": {
					rotate: 13
				},
				"52": {
					rotate: -8
				},
				"62": {
					rotate: 5
				},
				"74": {
					rotate: -3
				},
				"87": {
					rotate: 1
				}
			}
		};
		J.bounceIn = {
			duration: 0.75,
			timing: T.Bezier(0.215, 0.61, 0.355, 1),
			scale: true,
			progress: {
				"0": {
					opacity: 0,
					scale: 0.3
				},
				"20": {
					scale: 1.1
				},
				"40": {
					scale: 0.9
				},
				"60": {
					scale: 1.03
				},
				"80": {
					scale: 0.97
				}
			}
		};
		J.BounceFlying = function(W) {
			var V = 0,
				X = 0;
			switch (W) {
			case 3:
				V = 1;
				break;
			case 1:
				V = -1;
				break;
			case 0:
				X = 1;
				break;
			case 2:
				X = -1;
				break
			}
			return {
				timing: T.Bezier(0.215, 0.61, 0.355, 1),
				duration: 0.75,
				progress: {
					"0": {
						x: -3000 * V,
						y: -3000 * X
					},
					"60": {
						x: 25 * V,
						y: 25 * X
					},
					"75": {
						x: -10 * V,
						y: -10 * X
					},
					"90": {
						x: 5 * V,
						y: 5 * X
					}
				}
			}
		};
		J.swing = {
			emphasize: true,
			progress: function(X) {
				var V = S.getScaleRotateMatrixOrigin(X);

				function W(Y) {
					return {
						matrix: U.combine(V, U.origin(R.rotateZ(Y / 180 * Math.PI), X.width / 2, 0, 0))
					}
				}
				return {
					"0 100": W(0),
					20: W(15),
					40: W(-10),
					60: W(5),
					80: W(-5)
				}
			}
		};
		J.flash = {
			timing: T.Timing.linear,
			progress: {
				"0 66": {
					opacity: 0
				},
				"33": {
					opacity: 1
				}
			}
		};
		J.circleRound = {
			scale: true,
			duration: 0.6,
			progress: {
				0: {
					scale: 0.001,
					opacity: 0,
					rotate: 180 * 2.5
				},
				100: {
					scale: 1,
					rotate: 0
				}
			}
		};
		J.roundFromFarAndNear = {
			scale: true,
			timing: T.Timing.linear,
			durationCorrect: -0.2,
			progress: {
				"0": {
					scale: 0.3,
					opacity: 0,
					rotate: 180 * 0.45
				}
			}
		};
		J.fadeIn = {
			progress: {
				"0": {
					opacity: 0
				}
			}
		};
		J.Emerge = function(W) {
			var V = 0,
				X = 0;
			switch (W) {
			case 3:
				V = -20;
				break;
			case 1:
				V = 20;
				break;
			case 0:
				X = -20;
				break;
			default:
				X = 20;
				break
			}
			return {
				direction: W,
				progress: {
					"0": {
						x: V,
						y: X,
						opacity: 0
					}
				}
			}
		};
		J.shrink = {
			duration: 0.6,
			timing: T.Bezier(0.52, 0.21, 0.8, 0.51),
			progress: {
				"0": {
					scale: 5,
					opacity: 0
				}
			}
		};
		J.scale = {
			scale: true,
			progress: {
				"0": {
					scale: 0.001
				}
			}
		};
		J.overturn = {
			progress: {
				"0": {
					perspective: 400,
					opacity: -0.3,
					rotateY: 180
				},
				100: {
					perspective: 400
				}
			}
		};
		J.coin = {
			performance: "high",
			progress: {
				"0": {
					rotateY: -720,
					perspective: 400,
					opacity: 0
				},
				"85": {
					rotateY: 30,
					perspective: 400
				},
				100: {
					rotateY: 0,
					perspective: 400
				}
			}
		};
		J.flip = {
			emphasize: true,
			performance: "high",
			progress: {
				"0": {
					perspective: 400,
					rotateY: -360,
					timing: T.Timing.easeOut
				},
				"40": {
					perspective: 400,
					z: 150,
					rotateY: -190,
					timing: T.Timing.easeOut
				},
				"50": {
					perspective: 400,
					z: 150,
					rotateY: -170,
					timing: T.Timing.easeIn
				},
				"80": {
					perspective: 400,
					scale: 0.95,
					timing: T.Timing.easeIn
				},
				"100": {
					perspective: 400
				}
			}
		};
		J.FlipIn = function(X) {
			var W = 0,
				V = 0;
			if (X === "x") {
				W = 1
			} else {
				V = 1
			}
			return {
				duration: 0.8,
				performance: "high",
				progress: {
					"0": {
						opacity: 0,
						perspective: 400,
						rotateX: 90 * W,
						rotateY: 90 * V,
						timing: T.Timing.easeIn
					},
					"40": {
						perspective: 400,
						rotateX: -20 * W,
						rotateY: -20 * V,
						timing: T.Timing.easeIn
					},
					"60": {
						perspective: 400,
						rotateX: 10 * W,
						rotateY: 10 * V,
						timing: T.Timing.easeIn
					},
					"80": {
						perspective: 400,
						rotateX: -5 * W,
						rotateY: -5 * V,
						timing: T.Timing.easeIn
					},
					"100": {
						perspective: 400
					}
				}
			}
		};
		J.LightSpeedIn = function(W) {
			var V = 0,
				X = 0;
			switch (W) {
			case 3:
				V = -1;
				break;
			case 1:
				V = 1;
				break;
			case 0:
				X = -1;
				break;
			default:
				X = 1;
				break
			}
			return {
				direction: W,
				progress: {
					"0": {
						opacity: 0,
						x: V * 100 + "%",
						y: X * 100 + "%",
						skewX: V * -30,
						skewY: X * -30
					},
					"40": {
						skewX: V * 20,
						skewY: X * 20
					},
					"60": {
						skewX: V * -5,
						skewY: X * -5
					}
				}
			}
		};
		J.RotateIn = function(Y) {
			var W = 0,
				V = 0,
				X;
			switch (Y) {
			case 3:
				X = -45;
				break;
			case 2:
				W = 1;
				X = 45;
				break;
			case 0:
				V = 1;
				X = 45;
				break;
			case 1:
				W = 1;
				V = 1;
				X = -45;
				break
			}
			return {
				durationCorrect: -0.2,
				progress: function(ab) {
					var Z = S.getScaleRotateMatrixOrigin(ab);

					function aa(ac) {
						return {
							timing: T.Timing.easeIn,
							matrix: U.combine(Z, U.origin(R.rotateZ(ac / 180 * Math.PI), ab.width * W, ab.height * V, 0))
						}
					}
					return {
						0: p.extend(aa(X), {
							opacity: 0
						}),
						100: aa(0)
					}
				}
			}
		};
		J.ZoomIn = function(W) {
			var V = 0,
				X = 0;
			switch (W) {
			case 3:
				V = -1;
				break;
			case 1:
				V = 1;
				break;
			case 0:
				X = -1;
				break;
			case 2:
				X = 1;
				break
			}
			return {
				scale: true,
				direction: W,
				progress: {
					"0": {
						opacity: 0,
						scale: 0.1,
						x: V * 300,
						y: X * 300,
						timing: T.Bezier(0.55, 0.055, 0.675, 0.19)
					},
					"60": {
						scale: 0.475,
						x: V * -1 * 10,
						y: X * -1 * 10,
						timing: T.Bezier(0.175, 0.885, 0.32, 1)
					}
				}
			}
		}
	});
	E(function() {
		var p = E["2"],
			R = E["26"];
		J.wave = {
			duration: 2,
			timing: R.Timing.easeInOut,
			progress: {
				"0": {
					x: "-200%",
					y: "-60%"
				},
				"10": {
					x: "-150%",
					y: "50%"
				},
				"20": {
					x: "-100%",
					y: "-50%"
				},
				"30": {
					x: "-50%",
					y: "30%"
				},
				"40": {
					x: "-30%",
					y: "-20%"
				},
				"50": {
					x: "-20%",
					y: "10%"
				},
				"60": {
					x: "-10%",
					y: "-10%"
				},
				"70": {
					x: "-8%",
					y: "5%"
				},
				"80": {
					x: "-6%",
					y: "-3%"
				},
				"90": {
					x: "-3%",
					y: "1%"
				}
			}
		};
		J.creep = {
			duration: 2,
			timing: R.Timing.easeInOut,
			progress: {
				0: {
					y: "-100%",
					opacity: 0
				},
				25: {
					y: "-75%",
					rotateX: 180,
					opacity: 0.5
				},
				50: {
					y: "-50%",
					rotateX: 360
				},
				75: {
					y: "-25%",
					rotateX: 540
				},
				100: {
					y: 0,
					rotateX: 720,
					opacity: 1
				}
			}
		};
		J.boomerang = {
			duration: 1,
			timing: R.Timing.easeIn,
			progress: {
				0: {
					x: "-200%",
					y: "-100%",
					rotateZ: 0,
					scale: 0.2,
					opacity: 0
				},
				16: {
					x: "-150%",
					y: "-75%",
					rotateZ: 180,
					scale: 0.4
				},
				32: {
					x: "-100%",
					y: "-50%",
					rotateZ: 360,
					scale: 0.6
				},
				48: {
					x: "-50%",
					y: "-25%",
					rotateZ: 540,
					scale: 0.8
				},
				64: {
					x: 0,
					y: 0,
					rotateZ: 720,
					scale: 1
				},
				80: {
					x: "20%",
					y: "10%",
					rotateZ: 900,
					scale: 1.4
				},
				100: {
					x: 0,
					y: 0,
					rotateZ: 1080,
					scale: 1
				}
			}
		}
	});
	E(function() {
		var ay = E["2"],
			ae = E["15"],
			ao = E["29"],
			ap = E["31"],
			R = E["27"],
			ac = E["1"];
		E["32"];
		E["33"];

		function ax(aB, aA) {
			return ac.map(ac.range(4), function(aD) {
				var aC = aB(aD);
				aA && (aC.flyDirection = aD);
				return aC
			})
		}

		function an(aB) {
			var aA = [];
			ac.foreach(aB, function(aC) {
				aA = aA.concat(aC)
			});
			ac.foreach(aA, function(aC) {
				if (ap.isEmphasize(aC)) {
					aA.isEmphasize = true
				}
				if (aC.scale) {
					aA.isScale = true
				}
			});
			return aA
		}
		var T = k,
			Z = J,
			W = an([ax(Z.BounceFlying, true), Z.bounceIn]),
			X = an([Z.flip]),
			S = an([Z.swing]),
			V = an([Z.FlipIn("x"), Z.FlipIn("y")]),
			af = an([Z.shake, Z.wobble]),
			aa = an([Z.fallDownAndShake]),
			at = an([Z.tada]),
			p = an([Z.rubberBand]),
			ak = an([ax(Z.RotateIn)]),
			aq = an([ax(Z.ZoomIn, true)]),
			ah = an([ax(Z.LightSpeedIn, true)]),
			ag = an([Z.wave]),
			au = an([Z.creep]),
			az = an([Z.boomerang]),
			ar = an([Z.circleRound]),
			aj = an([Z.coin]),
			al = an([ax(Z.Emerge), Z.fadeIn]),
			av = an([Z.overturn]),
			ai = an([Z.shrink]),
			aw = an([Z.scale]),
			U = an(ax(Z.FlyInto, true)),
			ab = an([Z.FlyInto(1), Z.FlyInto(3)]),
			ad = an([Z.roundFromFarAndNear]);

		function Y(aB) {
			var aA = window.themeNumber || aB.theme,
				aD = R.Random(parseInt(aB.workInfo.id)),
				aC = aD.select({
					1: [T.classic, T.flipOver, T.push],
					2: [T.fade, T.classic, T.door, T.overturn, T["switch"]],
					3: [T.classic, T.push, T.overturn],
					4: [T.classic, T.uncover, T.push, T["switch"], T.fade],
					5: [T.classic, T.fade, T.push],
					6: [T.classic, T.fade, T.push],
					7: [T.classic, T.fade, T.push],
					8: [T.classic, T.uncover, T.fade]
				}[aA]);
			return {
				switchAnimation: aC,
				themeNumber: aA
			}
		}

		function am(aE, aI) {
			var aP = aE.wrapper,
				aU = aP.applyEnter || {},
				aT = {
					text: [],
					image: [],
					multiImage: []
				},
				aN = R.Random(aE.hash);
			aE.switchAnimate = window.switchAnimate || aI.switchAnimation;
			ao.loopComponent(aP, function(aW) {
				var aY = aW.applyEnter || {},
					aX = aY.type;
				if (aX) {
					aT[aX] = aT[aX] || [];
					aT[aX].push(aW)
				}
			});
			var aB = aT.image.length,
				aJ = aT.text.length === 0,
				aV = aB === 0,
				aG = aB === 1,
				aS = aV || aG,
				aO = [],
				aM = [],
				aC = [],
				aL = [];
			({
				1: function() {
					aL = [0.8, 0.1, 0.8, 0.1, 0.8, 0.1];
					if (aS) {
						aO = [af, at, p];
						aC = [W, V, S, aa]
					} else {
						aO = [af, at, p];
						aC = [W, V, aa]
					}
				},
				2: function() {
					var aW = aN() > 0.5;
					aL = [0.6, 0.1, 0.6, 0.1, 0.6, 0.1];
					if (aS) {
						aO = [af, at];
						aC = [ah, ag, au, az, aj, X]
					} else {
						aO = [af, at].concat(aW ? [U] : []);
						aM = [au].concat(aW ? [] : [ab]);
						aC = [az, ag, ah, aj]
					}
				},
				3: function() {
					aL = [1.2, 0.3, 1.2, 0.1, 1.2, 0.3];
					aC = aS ? [W, V, S, ak, al, U, av, ad] : [W, ak, U, al]
				},
				4: function() {
					aL = [1.4, 0.3, 1.4, 0.1, 1.4, 0.3];
					aC = aS ? [V, ak, al, aw, ad, U, av] : [V, ak, al, aw, U]
				},
				5: function() {
					var aW;
					aL = [0.8, 0.3, 0.8, 0.1, 0.8, 0.1];
					if (aS) {
						aM = aO = [ar, aj, av, ai, aw, ad, aq]
					}
					aW = R.select([aM, aO]);
					aW.push(U, al);
					if (aE.index === 0) {
						aV ? aM = [ai] : aO = [ai]
					} else {
						aM = aO = [ar, av, aw, aj, aq, ad]
					}
					aC = [ai, ai, ai]
				},
				6: function() {
					aL = [1.6, 0.7, 1.4, 0.1, 1.6, 0.3];
					aC = aS ? [V, ak, al, av, aw, U, av] : [ak, al, av, aw, U, ad]
				},
				7: function() {
					aM = [av];
					aL = [1.6, 0.5, 1.4, 0.3, 1.6, 0.1];
					if (aS) {
						aC = [V, ak, al, aw, U, ad]
					} else {
						aC = [ak, al, aw, U]
					}
				},
				8: function() {
					aL = [1.6, 0.3, 1.6, 0.1, 1.6, 0.3];
					if (aS) {
						aC = [V, ak, al, U, ad, av]
					} else {
						aM = [av];
						aC = [ak, al, U]
					}
				}
			}[aI.themeNumber])();
			aO = aO.concat(aC);
			aM = aM.concat(aC);
			if (ac.findFirst(aT.image, function(aW) {
				return aW.element.classList.contains("mask")
			})) {
				aO = ac.remove(aO, function(aW) {
					return aW.isScale
				})
			}
			var aD = aN.select(aJ ? ac.filter(aO, function(aW) {
				return !aW.isEmphasize
			}) : aO),
				aQ = aN.select(aJ || !aD.isEmphasize ? ac.filter(aM, function(aW) {
					return !aW.isEmphasize
				}) : aM),
				aF = 0;
			ac.foreach([
				[aT.image, aD],
				[aT.text, aQ]
			], function(aW) {
				ac.foreach(aW[0], function(aX) {
					var aY = ae.transform(ao.getPageMatrix(aX), [aX.width / 2, aX.height / 2, 1]);
					aX.enter = aN.select(ac.remove(aW[1], function(aZ) {
						return aZ.flyDirection === (aY[1] > F / 2 ? 0 : 2)
					}))
				})
			});

			function aR(aY, aZ, aW) {
				var aX = null;
				ac.foreach(aY, function(a0, a1) {
					aX = a0.enter = ay.extend(a0.enter, {
						duration: aZ + (a0.enter.durationCorrect || 0),
						delay: aW * aZ * a1 + aF
					})
				});
				aF = aX ? aX.duration + aX.delay : aF
			}
			if (aN() > 0.5) {
				if (aU.first === "text") {
					aR(aT.text, aL[2], aL[3]);
					aR(aT.image, aL[0], aL[1])
				} else {
					aR(aT.image, aL[0], aL[1]);
					aR(aT.text, aL[2], aL[3])
				}
			} else {
				var aK = aN.arrange(aT.text.concat(aT.image)),
					aA = [],
					aH = [];
				ac.foreach(aK, function(aW, aX) {
					if (aW.applyEnter.type === "text") {
						aH.push(aX);
						aA.push(aW)
					}
				});
				ac.foreach(aA.sort(function(aW, aX) {
					return aW.zi - aX.zi
				}), function(aW, aX) {
					aK[aH[aX]] = aW
				});
				aR(aK, aL[4], aL[5])
			}
			ac.foreach(aT.multiImage, function(aW) {
				aF = l.applyMultiImageAreaAnimation(ay.extend(aW.applyEnter, {
					enterDelay: aF
				}))
			})
		}
		E["34"].setTheme = Y;
		E["34"].setPageAnimate = am
	});
	E(function() {
		var X = E["1"],
			V = E["5"],
			S = E["8"],
			R = E["2"],
			T = E["29"],
			U = E["31"],
			p = E["12"];

		function W(Y) {
			return Y ? S.bezier(Y.arg) : "ease"
		}
		E["35"] = {
			transition: function(Y, aa) {
				var Z = Y.element,
					ab = p.runAnimation([Z, U.cssFrameProgress(U.frameProgress(Y, {
						100: aa.end
					}), true), aa.duration, aa.delay, W(aa.timing), "both"], function() {
						R.foreach(aa.end, function(ad, ac) {
							Y[ad] = ac
						});
						aa.onEnd && aa.onEnd()
					});
				return {
					remove: function() {},
					fastForward: ab.fastForward
				}
			},
			enter: function(Z) {
				var Y = null,
					aa = V(),
					ab;
				T.loopComponent(Z, function(ae) {
					var ah = ae.enter;
					if (ah) {
						var ad = ah.delay || (ah.delay = 0),
							ag = ah.duration || (ah.duration = 1),
							ac = ad + ag,
							af = V.push(aa, ae);
						S(ae.element, "animation", [p.Keyframes(U.cssFrameProgress(U.frameProgress(ae, ah.progress))).id, S.s(ag), S.s(ad), W(ah.timing), "both"].join(" "));
						if (!Y || Y.end < ac) {
							Y = ae;
							Y.end = ac
						}
						p.onAnimationEndAdvanced(ae.element, function() {
							aa.remove(af);
							S.remove(ae.element, "animation");
							ah.onEnd && ah.onEnd()
						}, ac, function() {
							return ab
						})
					}
				});
				Z.element.classList.add("animation-prepare");
				return {
					run: function(ac) {
						Z.element.classList.remove("animation-prepare");
						ab = new Date();
						if (Y) {
							p.onAnimationEndAdvanced(Y.element, function() {
								ac && ac()
							}, Y.end, function() {
								return ab
							})
						}
						return {
							fastForward: function() {
								V.foreach(aa, function(ad) {
									var ae = ad.enter;
									S.remove(ad.element, "animation");
									ae.onEnd && ae.onEnd()
								});
								ac && ac()
							}
						}
					}
				}
			}
		}
	});
	E(function() {
		var X = E["1"],
			S = E["10"];

		function p(Y) {
			return Y.naturalWidth || Y.width || Y.clientWidth
		}

		function T(Y) {
			return Y.naturalHeight || Y.height || Y.clientHeight
		}

		function W(ab, Z, ac) {
			var aa = p(ab),
				Y = T(ab);
			return Z / ac < aa / Y ? ac / Y : Z / aa
		}

		function V(ab, Z, ac) {
			var aa = p(ab),
				Y = T(ab);
			return Z / ac < aa / Y ? Z / aa : ac / Y
		}

		function U(aa, Y) {
			var Z = Y.width,
				ad = Y.height,
				af = Y.align,
				ab = Y.size(aa, Y.width, Y.height);
			ab = Y.noStretch ? Math.min(ab, 1) : ab;

			function ac(ah, ag, aj) {
				var ai = (ah - ag * ab) * aj;
				return ai > 0 ? [0, ag, ai, ag * ab] : [-ai / ab, ah / ab, 0, ah]
			}
			var ae = [aa].concat(X.zip([ac(Z, p(aa), af[0]), ac(ad, T(aa), af[1])]));
			ae.ratio = ab;
			return ae
		}

		function R(aj, ac) {
			var ab = ac[0],
				al = ac.ratio,
				ak = ab.naturalWidth,
				ae = ab.naturalHeight,
				Z = ac[1],
				Y = ac[2],
				aa = ac[3],
				ai = ac[4],
				ag = ac[5],
				af = ac[6],
				ah = ac[7],
				ad = ac[8];
			if (S.ios) {
				aj.save();
				aj.translate(ag, af);
				aj.beginPath();
				aj.rect(0, 0, ah, ad);
				aj.clip();
				aj.drawImage(ab, -Z / aa * ah, -Y / ai * ad, ak * al, ae * al);
				aj.restore()
			} else {
				aj.drawImage.apply(aj, ac)
			}
		}
		E["36"].width = p;
		E["36"].height = T;
		E["36"].drawImageLayout = R;
		E["36"].layImageByFrame = U;
		E["36"].Size = {
			contain: V,
			cover: W
		}
	});
	E(function() {
		var S = E["9"],
			V = E["8"],
			X = V.px,
			U = E["29"],
			T = E["17"],
			R = E["36"],
			W = E["15"],
			Y = W.matrix;

		function Z(ad, af, ac, ab, ae) {
			var ag = ab / ae < af / ac ? ae / ac : ab / af,
				aa = (ab - af * ag) * 0.5,
				ah = (ae - ac * ag) * 0.5;
			if (G.android) {
				if (ab / ae < af / ac) {
					V(ad, {
						height: V.px(ae),
						"margin-left": aa + "px"
					})
				} else {
					V(ad, {
						width: V.px(ab),
						"margin-top": ah + "px"
					})
				}
			} else {
				V(ad, "transform-origin", "0 0");
				V.transform(ad, V.matrix(W.combine(Y.translate(aa, ah), Y.scale(ag, ag))))
			}
			return ad
		}
		g.Image = g(function(ac, ad, ab) {
			var ae, aa;
			if (ab === undefined) {
				ae = ac.halfWidth;
				aa = ac.halfHeight
			} else {
				ae = ad;
				aa = ab
			}
			if (ad !== undefined && ab === undefined) {
				ae = ae * ad << 0;
				aa = aa * ad << 0
			}
			if (ac.fail) {
				V(ac, "visibility", "hidden")
			}
			return {
				width: ae,
				height: aa,
				element: function() {
					return ac.cloneNode(true)
				},
				draw: function(af) {
					!ac.fail && af.drawImage(ac, 0, 0, ae, aa)
				}
			}
		});
		g.Canvas = function(aa) {
			return {
				width: aa.logicalWidth,
				height: aa.logicalHeight,
				element: function() {
					return aa
				},
				draw: function(ab) {
					ab.drawImage(aa, 0, 0, aa.width, aa.height, 0, 0, aa.logicalWidth, aa.logicalHeight)
				}
			}
		};

		function p(ac, aa) {
			var ab = T.imageNotFound,
				ad = R.layImageByFrame(ab, {
					width: ac,
					height: aa,
					size: function() {
						return Math.min(0.5, ac / ab.ps.width * 0.3, aa / ab.ps.height * 0.3)
					},
					align: [0.5, 0.5]
				});
			return {
				width: ac,
				height: aa,
				draw: function(ae) {
					ae.fillStyle = "#EFEFEF";
					ae.fillRect(0, 0, ac, aa);
					R.drawImageLayout(ae, ad)
				}
			}
		}
		g.ImageCover = g(function(ab, ac, aa) {
			ac = ac || i;
			aa = aa || F;
			if (ab.fail) {
				return p(ac, aa)
			}
			var ad = R.layImageByFrame(ab, {
				width: ac,
				height: aa,
				size: R.Size.cover,
				align: [0.5, 0.5]
			});
			return {
				width: ac,
				height: aa,
				element: function() {
					return S("div", {
						css: {
							overflow: "hidden"
						},
						children: Z(ab.cloneNode(false), ab.fullWidth, ab.fullHeight, ac, aa)
					})
				},
				draw: function(ae) {
					R.drawImageLayout(ae, ad)
				}
			}
		});
		g.Custom = g(function(ab, ac, aa) {
			if (!ab || ab.color) {
				return g.Rect(ac, aa, ab ? ab.color : null)
			} else {
				return g.Image(ab, ac, aa)
			}
		});
		g.Border = function(af, ad) {
			var ac = ad.width || 0,
				ag = ad.color || "transparent",
				ab = ad.radius || 0,
				ae = af.width,
				aa = af.height;
			return {
				dataSource: af.dataSource,
				width: ae + ac,
				height: aa + ac,
				element: function() {
					var ah = S(U.contentToElement(af), {
						css: {
							overflow: "hidden",
							"box-sizing": "border-box",
							border: ["solid", X(ac), ag].join(" "),
							"border-radius": X(ab)
						}
					}),
						ai = ah;
					if (G.android && ah.querySelector("img")) {
						ai = S("div", [ah]);
						V.size(ah, ae + ac, aa + ac)
					}
					return ai
				},
				draw: function(ah) {
					ah.save();
					if (ab) {
						ah.beginPath();
						ah.moveTo(ab, 0);
						ah.lineTo(ae - ab, 0);
						ah.arcTo(ae, 0, ae, ab, ab);
						ah.lineTo(ae, aa - ab);
						ah.arcTo(ae, aa, ae - ab, aa, ab);
						ah.lineTo(ab, aa);
						ah.arcTo(0, aa, 0, aa - ab, ab);
						ah.lineTo(0, ab);
						ah.arcTo(0, 0, ab, 0, ab);
						ah.clip()
					}
					ah.save();
					ah.translate(ac, ac);
					af.draw(ah);
					ah.restore();
					if (ac) {
						ah.fillStyle = ag;
						ah.fillRect(0, 0, ae, ac);
						ah.fillRect(0, 0, ac, aa);
						ah.fillRect(ae, 0, ac, aa + ac);
						ah.fillRect(0, aa, ae + ac, ac)
					}
					ah.restore()
				}
			}
		};
		g.Mask = function(ad, ab) {
			var ac = ad.width,
				aa = ad.height;
			return {
				dataSource: ad.dataSource,
				width: ac,
				height: aa,
				element: function() {
					var ae = S(U.contentToElement(ad), {
						css: {
							overflow: "hidden",
							"box-sizing": "border-box",
							"mask-image": V.url(ab.src),
							"mask-size": "100% 100%"
						}
					}),
						af = ae;
					if (G.android) {
						af = S("div.mask", [ae]);
						V.size(ae, ac, aa)
					}
					return af
				},
				draw: function(ag) {
					var af = T.Canvas(ac, aa),
						ah = af.context;
					ah.fillRect(0, 0, ac, aa);
					ah.globalCompositeOperation = "destination-out";
					ah.drawImage(ab, 0, 0, ac, aa);
					var ai = T.Canvas(ac, aa),
						ae = ai.context;
					ad.draw(ae);
					ae.globalCompositeOperation = "destination-out";
					ae.drawImage(af, 0, 0, ac, aa);
					ag.save();
					ag.drawImage(ai, 0, 0, ac, aa);
					ag.restore()
				}
			}
		}
	});
	E(function() {
		var S = E["25"],
			R = E["8"],
			p = E["12"],
			V = E["1"],
			U = E["26"],
			T = E["9"];
		l.applyMultiImageAreaAnimation = function(W) {
			var X = {
				duration: 0,
				delay: 0
			};
			V.foreach(W.images, function(Z, Y) {
				X = Z.enter = {
					duration: 0.6,
					delay: W.enterDelay + Y * 0.3,
					progress: {
						"0": {
							rotate: -30,
							scale: !G.ios && !G.iphone6 ? 1 : 3,
							x: -W.width * 2.4,
							y: W.height * 2.4
						}
					}
				}
			});
			return X.duration + X.delay
		};
		l.MultiImageArea = function(al) {
			var af = al.layout,
				aj = al.parent,
				ah = al.images,
				ag = ah.length,
				Z = al.delay || 0,
				X = al.sign * Math.min(25 / ag, 4),
				Y = al.arrow,
				W = aj.width,
				ak = aj.height,
				ab = S.range(3 / ag, 0.08, 0.6),
				ad = S.range(1.5 / ag, 0.04, 0.3);
			V.foreach(ah, function(an, am) {
				an.x = I.center(an, aj, true);
				an.y = I.middle(an, aj, true);
				an.zi = 10000 + am;
				an.rotate = (am + 1 - ag) * X;
				an.appendTo(aj)
			});
			if (al.animation !== false) {
				l.applyMultiImageAreaAnimation({
					images: ah,
					width: W,
					height: ak,
					enterDelay: Z
				})
			}
			af.onEnterEnd(function() {
				var am = ag - 1,
					ap = null,
					ao = null;

				function an(au) {
					var at = M(),
						ar = am--,
						av = ah[(ar % ag + ag) % ag];
					if (ap) {
						V.foreach(ap, function(aw) {
							aw.remove()
						});
						ap = null
					}
					ao = o.transition(av, {
						end: {
							x: (au ? i : -av.width),
							opacity: 0
						},
						duration: 0.3,
						onEnd: function() {
							ao = null;
							av.x = I.center(av, aj, true);
							av.opacity = 1;
							av.zi -= ag;
							av.rotate = (1 - ag) * X;
							ap = V.map(ah, function(ax, ay) {
								var aw = ah[((ar + ay) % ag + ag) % ag];
								return o.transition(aw, {
									end: {
										rotate: (ay + 1 - ag) * X
									},
									timing: U.Timing.easeOut,
									delay: ad * ay / 2,
									duration: ab / 2
								})
							});
							at.remove()
						}
					})
				}
				x(aj.element, function(ar) {
					ar.xOut && an(ar.dX > 0)
				});
				if (Y) {
					R(aa, "opacity", 1);
					R(ae, "opacity", 1)
				}
				if (al.auto) {
					var aq = setTimeout(function() {
						an(Math.random() > 0.5);
						aq = setTimeout(arguments.callee, 3000)
					}, 1500);
					af.onRemove(function() {
						aq && clearTimeout(aq)
					})
				}
				af.onRemove(function() {
					ao && ao.fastForward();
					if (ap) {
						V.foreach(ap, function(ar) {
							ar.fastForward()
						});
						ap = null
					}
				})
			});
			if (Y) {
				var aa = Y,
					ae = Y.cloneNode(true),
					ac = Y.offset || 15;
				T.bind(aa, "load", function() {
					ae.src = aa.src
				});
				ae.ps = aa.ps;

				function ai(am) {
					function an(ao) {
						return {
							transform: [R.scale(am, 1), R.translate(ao, 0, 0)].join(" ")
						}
					}
					return p.animation([{
						0: an(0),
						20: an(0),
						35: an(12),
						50: an(-20),
						65: an(0),
						80: an(-12),
						100: an(0)
					},
					1.5, "infinite"])
				}
				V.foreach([aa, ae], function(am) {
					R(am, {
						visibility: "visible",
						"z-index": 10000,
						opacity: 0,
						transition: "0.8s",
						width: R.px(am.ps.width),
						height: R.px(am.ps.height)
					})
				});
				af.onShow(function() {
					R(aa, {
						position: "absolute",
						left: R.px(I.leftIn(aa.ps) + ac),
						top: R.px(I.middle(aa.ps, aj)),
						animation: ai(1)
					});
					R(ae, {
						position: "absolute",
						left: R.px(I.rightIn(ae.ps) - ac),
						top: R.px(I.middle(ae.ps, aj)),
						animation: ai(-1)
					});
					t.appendChild(aa);
					t.appendChild(ae)
				});
				af.onRemove(function() {
					T.remove(aa);
					T.remove(ae)
				})
			}
		}
	});
	E(function() {
		var S = E["5"];
		var W = /^[（【“‘]$/;
		var ac = /^[）】”’，。；：？！、]$/;
		var U = /^[0-9a-zA-Z`~!@#\$%\^&\*\(\)\-_=\+\[\{\]\}\\\|:;"'<,>\.\?\/]$/;
		var V = /^[ 	　]$/;
		var Y = /^[\n\r]$/;

		function X(ad) {
			return ad.character || ""
		}

		function Z(ae, ad) {
			return ae && ad && (W.test(ae) && !V.test(ad) || !V.test(ae) && ac.test(ad) || U.test(ae) && U.test(ad) || V.test(ae) && V.test(ad))
		}

		function ab(ae, ad) {
			return function(ah, ak, af, ag) {
				var ai = ag;
				var am = ah;
				var ao = 0;
				var aj = "";
				var al = ah;
				var an = [];
				S.iterate(ah, ak, function(ap, aq) {
					ao += ap.width;
					aj += X(ap);
					if (ae(X(ap), aq.next === ak ? "" : X(aq.next.value))) {
						if (Y.test(aj)) {
							an.push(am);
							am = aq.next;
							ai = ag
						} else {
							if (al !== am && ai + ao > af && !(ad && V.test(X(al.value)))) {
								an.push(am);
								am = al;
								ai = ao
							} else {
								ai += ao
							}
						}
						aj = "";
						ao = 0;
						al = aq.next
					}
				});
				an.push(am);
				return an
			}
		}
		var p = ab(function(ae, ad) {
			return true
		}, false);
		var R = ab(function(ae, ad) {
			return !Z(ae, ad)
		}, true);

		function aa(ah, ae, af, ag) {
			var ad = ag;
			S.iterate(ah, ae, function(ai) {
				ai.offsetX = ad;
				ad += ai.width
			})
		}

		function T(ai, am, af, aj) {
			var ae = ai;
			S.iterate(ai, am, function(ao, ap) {
				if (!ao.character || !V.test(ao.character)) {
					ae = ap
				}
			});
			var an = 0;
			var al = 0;
			S.iterate(ai, ae.next, function(ao, ap) {
				al += ao.width;
				if (ap.next !== ae.next && !Z(ao.character, ap.next.value.character)) {
					an++
				}
			});
			var ad = an > 0 ? (af - aj - al) / an : 0;
			var ak = aj;
			var ag = 0;
			var ah = 0;
			S.iterate(ai, am, function(ao, ap) {
				ao.offsetX = ak + ag;
				ak += ao.width;
				if (ap.next !== am && !Z(ao.character, ap.next.value.character)) {
					ah++;
					ag = (ad * Math.min(ah, an) + 0.5) << 0
				}
			})
		}
		E["39"].buildAllBreakLines = p;
		E["39"].buildWordBreakLines = R;
		E["39"].alignLeftLine = aa;
		E["39"].alignSideLine = T
	});
	E(function() {
		function p(S, T) {
			var R = null;
			S(function(U) {
				R && T(R, U);
				R = U
			});
			T(R, null)
		}
		E["40"].foreach = p
	});
	E(function() {
		var T = E["39"],
			X = E["40"],
			U = E["7"],
			Z = E["5"],
			W = E["1"];
		var p = function() {
				var aa;
				return function() {
					return aa ? aa : aa = document.createElement("canvas").getContext("2d")
				}
			}();

		function V(aa) {
			aa = aa || {};
			return [aa.fontStyle || "normal", aa.fontVariant || "normal", aa.fontWeight || "normal", (aa.fontSize || 12) + "px", aa.fontFamily || "sans-serif"].join(" ")
		}

		function R(ac, aa) {
			var ab = p();
			ab.font = V(aa);
			return ab.measureText(ac)
		}

		function Y(ag, ac, ab) {
			var ae = p(),
				af = 0,
				aa = 0,
				ad = Z(),
				ah = ab.align;
			ae.font = V(ab);
			U.foreach(ag.replace(/\r/g, ""), function(ai) {
				Z.push(ad, {
					character: ai,
					width: ai === "\n" ? 0 : ae.measureText(ai).width
				});
				if (ai === "\n") {
					++af
				}
			});
			X.foreach(function(ai) {
				W.foreach(ab.lineBreak(ad.head(), null, ac, 0), ai)
			}, function(aj, ai) {
				aj && (aj.value.lineStart = true);
				ah(aj, ai, ac, 0);
				++aa
			});
			ad.style = ab;
			ad.width = ac;
			ad.height = aa * ab.lineHeight + af * (ab.margin || (ab.margin = 0));
			return ad
		}

		function S(af, ad) {
			var ac = ad.style,
				ab = ac.lineHeight,
				ae = ac.margin,
				ag = -ab,
				aa = ab / 2 << 0;
			af.font = V(ac);
			af.fillStyle = ac.color;
			af.textBaseline = "middle";
			Z.foreach(ad, function(ah) {
				if (ah.lineStart) {
					ag += ab
				}
				if (ah.character === "\n") {
					ag += ae
				}
				af.fillText(ah.character, ah.offsetX, ag + aa)
			})
		}
		E["41"].LineBreak = {
			breakAll: T.buildAllBreakLines,
			normal: T.buildWordBreakLines
		};
		E["41"].Align = {
			left: T.alignLeftLine,
			side: function(ac, aa, ab) {
				(aa && aa.previous.value.character !== "\n" ? T.alignSideLine : T.alignLeftLine)(ac, aa, ab, 0)
			}
		};
		E["41"].Font = V;
		E["41"].measureText = R;
		E["41"].layText = Y;
		E["41"].drawTextLayout = S
	});
	E(function() {
		var S = E["2"],
			Y = S.insert,
			R = E["41"],
			W = E["8"],
			T = E["9"],
			U = E["17"],
			X = R.Font;

		function p(aa) {
			var Z = document.createElement("canvas");
			aa(Z.getContext("2d"))
		}

		function V(ad, aa, ac) {
			var ab = ac.fontSize;

			function Z(af, ae) {
				af.font = X(ac);
				af.textBaseline = "middle";
				af.fillStyle = ac.color;
				af.fillText(ad, 0, ae / 2 << 0)
			}
			return {
				width: aa,
				height: ab,
				element: function() {
					var ae = U.Canvas(aa + 4, ab + 4),
						af = ae.context;
					af.translate(2, 0);
					Z(af, ab + 4);
					return T("div", [T(ae, {
						css: {
							"margin-left": "-2px",
							"margin-top": "-2px"
						}
					})])
				},
				draw: function(ae) {
					Z(ae, ab)
				}
			}
		}
		g.Label = g(function(aa, Z) {
			aa = aa.toString();
			return V(aa, R.measureText(aa, Z).width, Z)
		});
		g.LineText = g(function(ac, ab) {
			ac = ac.toString();
			var Z = ab.width,
				aa = "";
			p(function(af) {
				function ad(ag) {
					return af.measureText(ag).width
				}
				af.font = X(ab);
				if (ab.overflow && ad(ac) > Z) {
					for (var ae = 0; ae !== ac.length; ++ae) {
						if (ad(ac.substring(0, ae + 1) + "…") > Z) {
							break
						}
					}
					aa = ac.substring(0, ae) + "…"
				} else {
					aa = ac
				}
			});
			return V(aa, Z, ab)
		});
		g.BlockText = g(function(ab, aa) {
			ab = ab.toString();
			var Z = R.layText(ab, aa.width, Y(aa, {
				lineBreak: aa.breakWord ? R.LineBreak.breakAll : R.LineBreak.normal,
				align: aa.breakWord ? R.Align.left : R.Align.side
			}));
			return {
				width: aa.width,
				height: Z.height,
				draw: function(ac) {
					R.drawTextLayout(ac, Z)
				}
			}
		})
	});
	var i, F, y = 640,
		s = 1136,
		d, c, r, O, A, K = false,
		t;
	E(function() {
		E["21"];
		var Z = E["1"],
			p = E["7"],
			ai = E["2"],
			U = E["9"],
			af = E["26"],
			R = E["27"],
			Y = E["3"],
			ac = E["8"],
			T = E["25"],
			ae = E["29"],
			V = E["6"],
			S = E["18"],
			W = E["0"],
			ab = Y(location.href).arg,
			aa = V.Event(),
			ad = E["19"],
			ag = E["34"],
			X = E["17"],
			ak = E["14"],
			aj = E["35"];
		E["37"];
		E["38"];
		E["30"];
		E["42"];

		function ah() {
			var al = V.Event();
			U.bind(window, "resize", W.recursion(function() {
				var am, an;
				I.transformCover = I.LayoutTransform({
					s: am = {
						width: d = y / 2,
						height: c = s / 2
					},
					d: an = {
						width: i = document.documentElement.clientWidth,
						height: F = document.documentElement.clientHeight
					},
					scale: I.cover
				});
				I.transformY = I.LayoutTransform({
					s: am,
					d: an,
					scale: function(ar, ap, ao, aq) {
						return aq / ap
					}
				});
				I.transform504 = I.LayoutTransform({
					s: {
						width: 320,
						height: 504
					},
					d: an,
					scale: I.cover
				});
				r = i / d;
				O = F / c;
				A = I.transformCover.scale;
				al.trig();
				ac(document.body, {
					"font-size": ac.px(12 * O)
				})
			}));
			return al.regist
		}
		G.ios && document.documentElement.classList.add("ios");
		G.win32 && document.documentElement.classList.add("win32");
		window.playAudio = function() {
			t && t.playAudio && t.playAudio()
		};
		window.stopAudio = function() {
			t && t.stopAudio && t.stopAudio()
		};
		window.runFirstPage = function() {
			var am = ah(),
				al = w.runArg || {};
			a && U("style", a, document.head);
			if (window.firstpageVersion) {
				ak("script", function() {
					return P.toString()
				})
			}
			ae.setAnimationEngine(aj);
			C(document, function(ao) {
				var an = true;
				U.bubble(ao.origin.target, function(ap) {
					if (ap.classList.contains("need-default")) {
						an = false
					}
				});
				an && ao.preventDefault()
			});
			window.runFirstPage = W.recursion(function(ay) {
				ay = ay || {};
				var av = U("div", {
					css: ac.full({
						overflow: "hidden",
						background: "#000000",
						"z-index": 0
					})
				}),
					at = V.Schedule(),
					ao = V.Schedule(),
					ar = X.Icon("page-error"),
					ax = true,
					au, ap = [],
					aq = S.Loading(av),
					an = ay.pageIndex || 0,
					aw;
				if (!ay.standAlone) {
					t && t.recycle();
					U.remove(t);
					document.body.appendChild(t = av);
					al.preload !== false && ao.start();
					al.start !== false && at.start()
				}
				if (ay.workData) {
					au = ay.workData
				} else {
					ap.push(function(az) {
						(ay.loadWork || w.loadWork)(function(aA) {
							au = aA;
							az()
						}, av)
					})
				}
				av.workData = au;
				ap.push(function(az) {
					var aA = U.bind(ar, "load", function() {
						aA.remove();
						az()
					})
				});
				av.onLoad = V.Waiter(function(az) {
					V.concurrency(ap, function() {
						var aK = parseInt(au.theme) ? ag.setTheme(au) : null,
							aJ = au.mode,
							aF = au.pageSwitch,
							aB = k,
							aS = [aB.classic, aB.push, aB.fade, aB.cube, aB.door, aB["switch"], aB.uncover, aB.louvre],
							aM = {},
							aL = G.chuyeList || aJ === "push" || !aB[aF] ? "classic" : aF,
							aR = au.music,
							aC = au.noLoop,
							aE = au.pages,
							aO = aE.length,
							aD, aT, aQ, aA, aP = null,
							aH = null,
							aI = an === aO - 1;
						K = !G.chuyeList && aJ === "click";
						av.color = au.color || "#FFFFFF";
						av.workInfo = au.workInfo;

						function aN(aV) {
							return (aV + aO) % aO
						}

						function aU() {
							var aV = aw.index;

							function aW(aY, aX) {
								aY !== 0 && V.concurrency(Z.map([-aX, aX], function(aZ) {
									return function(a0) {
										aG(aV + aZ, a0)
									}
								}), function() {
									aW(aY - 1, aX + 1)
								})
							}
							aW(2, 1)
						}

						function aG(aW, aZ) {
							var aY = aE[aW],
								aV = aM[aW] || (aM[aW] = {
									data: {}
								}),
								aX = aV.waiter;
							if (!aY) {
								aZ()
							} else {
								if (!aX) {
									aX = aV.waiter = V.Waiter(function(a0) {
										ae.loadPage(aY, function(a1) {
											aV.create = function(a2) {
												var a3 = a1(aV.data, av),
													a4 = JSON.stringify(aY);
												a3.index = aW;
												a3.hash = function() {
													var a5 = 0;
													p.foreach(a4, function(a6) {
														a5 += a6.charCodeAt(0)
													});
													return a5
												}();
												a3.switchAnimate = (aF === "random" ? R.select(aS) : k[aL]);
												aK && ag.setPageAnimate(a3, aK);
												a3.prepare();
												a2 && a2.appendChild(a3);
												return a3
											};
											a0()
										}, ar)
									})
								}
								aX.onComplete(aZ)
							}
						}
						if (aD = JSON.parse(ad.getSessionData("login-data") || "null")) {
							ad.registLoginPage[aD.name](aD, true)
						}
						am(function() {
							aH && aH.fastForward();
							aw.recycle();
							U.remove(aw);
							av.appendChild(aw = aM[aw.index].create());
							aw.play()
						});
						av.onPageLoad = V.Waiter(function(aV) {
							aG(an, function() {
								var aW = S.CutFirst(av);
								aw = aM[an].create(av);
								at.prepare(function() {
									aw.play()
								});
								ao.prepare(aU);
								U.remove(aq);
								if (ab.music !== "false" && !/ChuyeNoMusic/gi.test(navigator.userAgent) && !window.noMusic && aR) {
									aQ = S.Music(av);
									aT = U("<audio loop></audio>", av);
									aT.onerror = function() {
										aT.onerror = null;
										aT.src = Y.concatArg(aR, {
											t: new Date().getTime()
										});
										aQ.classList.contains("play") && aT.play()
									};
									if (!G.ios) {
										U.bind(aT, "loadeddata", function() {
											af.requestFrames({
												duration: 3,
												onAnimate: function(aY) {
													aT.volume = aY
												}
											})
										})
									}
									av.stopAudio = function() {
										if (aQ.play === true) {
											av.audioPlayIntention = ax = false;
											aQ.play = false;
											aT.pause()
										}
									};
									av.playAudio = function() {
										if (!aT.src) {
											aT.src = aR
										}
										if (aQ.play !== true) {
											av.audioPlayIntention = ax = true;
											aQ.play = true;
											aT.play()
										}
									};
									j(aQ, function() {
										aQ.play ? av.stopAudio() : av.playAudio()
									});
									if (G.MicroMessenger) {
										G.ios ? window.WeixinJSBridge && WeixinJSBridge.invoke("getNetworkType", {}, function() {
											av.playAudio()
										}) : av.playAudio()
									}
								}

								function aX(aY) {
									aP = null;
									U.remove(aA);
									W.recursion(function aZ() {
										var a0 = aM[aN(an + aY)];
										if (a0 && a0.create) {
											var a2 = aw;
											a2.fastForward();
											a2.recycle();
											U.classList(av).remove("last-page").remove("show-copyright");
											aw = a0.create();
											an = aw.index;
											aU();
											var a1 = M();
											aH = (aY > 0 ? aw.specialSwitchAnimate || a2.specialSwitchAnimate || aw.switchAnimate : aB.back)(a2, aw, function() {
												aH = null;
												U.remove(a2);
												av.appendChild(aw);
												aw.play();
												if (an === aO - 1) {
													aI = true;
													av.classList.add("last-page")
												}
												a1.remove()
											})
										} else {
											aA = S.LoadingNewPage();
											aP = aZ;
											aG(aN(an + aY), function() {
												U.remove(aA);
												if (aP === aZ) {
													aZ()
												}
											})
										}
									})
								}
								W.callWith(function(aY) {
									K ? j(av, function() {
										aY(1)
									}) : x(av, function(aZ) {
										if (aZ.yOut) {
											var a0 = aZ.dY < 0;
											if (!(!a0 && an === 0 && !aI)) {
												aY(a0 ? 1 : -1)
											}
										}
									})
								}, function(aY) {
									if (v || e) {
										return
									}
									if (aC && an === aO - 1 && aY === 1) {
										return
									}
									if (aW) {
										U.remove(aW);
										aW = null;
										S.Cut(av);
										if (ax) {
											av.playAudio && av.playAudio()
										}
									}
									aX(aY)
								});
								Object.defineProperty(av, "curPageIndex", {
									get: function() {
										return an
									},
									set: function(aY) {
										if (!document.documentElement.classList.contains("lock")) {
											aY = aN(aY);
											if (aY !== an) {
												aX(aY - an)
											}
										}
									}
								});
								aV()
							})
						}).onComplete;
						az()
					})
				}).onComplete;
				return ai.insert(av, {
					recycle: function() {
						aw && aw.recycle()
					},
					play: at.start,
					preloadPage: ao.start
				})
			}, JSON.parse(ad.getSessionData(location.href, "{}")));
			aa.trig()
		};
		Object.defineProperty(window, "curPageIndex", {
			set: function(al) {
				t && (t.curPageIndex = al)
			},
			get: function() {
				return t ? t.curPageIndex : undefined
			}
		});
		E["43"].resize = ah;
		E["43"].onRun = V.Waiter(function(al) {
			aa.regist(al)
		}).onComplete
	});
	E(function() {
		var Y = E["3"],
			Z = E["1"],
			T = E["6"],
			S = E["9"],
			R = E["18"],
			U = E["0"],
			aa = E["8"],
			af = E["12"],
			ac = E["11"],
			ai = E["2"],
			ad = E["23"],
			X = E["43"],
			W = E["17"],
			ae = Y(location.href),
			V = ae.arg,
			p = new Date();

		function ah(aj) {
			return aj === undefined || ai.is.Array(aj) ? aj : JSON.parse(aj)
		}

		function ab(aj) {
			af.runAnimation(aj, function() {
				S.remove(aj[0])
			})
		}
		if (G.chuyeList) {
			var ag = M();
			w.runArg = {
				preload: false
			};
			T.polling(function() {
				return !!window.firstpage
			}, function() {
				var au = firstpage.workList || JSON.parse(firstpage.getWorkList()),
					ak = window.workId || Z.top(ae.pathname.split("/")),
					am = aq(ak),
					ax = {},
					ay = {},
					aw = null,
					ar = null,
					aj = S("div", {
						css: aa.full({
							"z-index": 100000
						})
					}, document.body),
					at = S("div", {
						css: aa.full({
							left: 0,
							right: 0,
							top: aa.px(90),
							bottom: aa.px(90)
						})
					}, aj);
				firstpage.updateWorkList = null;

				function av(az) {
					return firstpage[az] == null ? false : ai.is.Boolean(firstpage[az]) ? firstpage[az] : firstpage[az]()
				}

				function ap(az) {
					return runFirstPage({
						standAlone: true,
						loadWork: ad(workDetailUrl.replace(ak + "", az)),
						pageIndex: ay[az]
					})
				}

				function al() {
					Z.foreach([-1, 1], function(aA) {
						var az = au[am + aA];
						ax[aA] = az ? ap(az) : null
					})
				}

				function ao(az, aA) {
					aw = az.onLoad(function() {
						var aC = az.workTitle;
						var aB = az.workInfo;
						document.title = aC;
						if (aA !== undefined && !az.loadError) {
							history.replaceState(null, aB.title || "", ae.toString().replace(ak + "", az.workId));
							window.cas && cas.trackPageview && cas.trackPageview()
						}
						aw = null
					})
				}

				function an(az) {
					t.recycle();
					S.remove(t);
					ay[t.workId] = t.curPageIndex;
					t = az;
					t.play();
					al();
					ao(t, am)
				}

				function aq(az) {
					return Z.foreach(au, function(aB, aA) {
						if (parseInt(aB) === parseInt(az)) {
							return aA
						}
					})
				}
				if (G.ios && !firstpage.switchFirst) {
					Z.foreach(["open", "enterFullScreen", "leaveFullScreen", "switchWorkStart", "switchWorkEnd", "switchFirst", "switchLast"], function(az) {
						firstpage[az] = function() {
							document.location = "chuyeapp:" + az + ":" + Array.prototype.slice.call(arguments, 0).join("$")
						}
					})
				}
				j(at, firstpage.enterFullScreenA = function() {
					if (!t.loadError) {
						if (t.audioNeedResume) {
							t.audioNeedResume = false;
							t.playAudio()
						}
						document.documentElement.classList.remove("hide-tips-fade");
						firstpage.enterFullScreen();
						aj.classList.add("hidden");
						t.preloadPage()
					}
				});
				j(document.documentElement, firstpage.leaveFullScreenA = function() {
					if (!v) {
						document.documentElement.classList.add("hide-tips-fade");
						t.audioNeedResume = t.audioPlayIntention;
						t.stopAudio && t.stopAudio();
						firstpage.leaveFullScreen();
						aj.classList.remove("hidden")
					}
				});
				firstpage.jump = function(az) {
					if (parseInt(t.workId) !== parseInt(au[az])) {
						an(document.body.appendChild(ap(au[am = az])))
					}
				};
				firstpage.updateWorkListA = function(az) {
					au = ah(az);
					if ((am = aq(t.workId)) === undefined) {
						firstpage.jump(0)
					}
				};
				X.onRun(function() {
					if (V.full || av("full")) {
						setTimeout(function() {
							firstpage.enterFullScreenA();
							ag.remove()
						}, Math.max(0, 1500 - (new Date() - p)))
					} else {
						ag.remove();
						document.documentElement.classList.add("hide-tips-fade")
					}
					t.onLoad(function() {
						t.onPageLoad(al)
					});
					t.onLoadError = al;
					ao(t);
					x(aj, function(az) {
						az.yOut && U.callWith(function(aA) {
							aA(az.dY > 0 ? -1 : 1)
						}, function(aB) {
							var aA = ax[aB];

							function aF(aM, aL) {
								var aK = M();
								firstpage.switchWorkStart();
								aM(t, aA, function() {
									am = aL;
									an(aA);
									firstpage.switchWorkEnd(aL);
									aK.remove()
								}, document.body, 0.4)
							}
							if (!aA) {
								if (V["no-refresh"] || av("noRefresh")) {
									B(aB === 1 ? "没有下一个作品了" : "没有上一个作品了")
								} else {
									if (firstpage.updateWorkList === null) {
										if (aB === 1) {
											var aG = S("div", {
												css: {
													position: "absolute",
													left: "50%",
													bottom: aa.px(80),
													"z-index": 100,
													opacity: 0,
													transition: "0.2s"
												}
											}, document.body);
											S(R.LoadingChrysanthemum(aG), {
												css: {
													"z-index": 0
												}
											});
											setTimeout(function() {
												aa(aG, "opacity", 1)
											}, 0);
											ar = function() {
												var aK = au[am + 1];
												if (aK) {
													aA = ap(aK);
													aF(k.push, am + 1)
												} else {
													B("没有下一个作品了")
												}
											};
											firstpage.updateWorkList = function(aK) {
												aK = ah(aK);
												ab([aG,
												{
													100: {
														opacity: 0
													}
												},
												0.3]);
												if (JSON.stringify(aK) === JSON.stringify(au)) {
													B("没有下一个作品了");
													ar = null
												} else {
													au = aK;
													am = aq(t.workId);
													ar && ar()
												}
												firstpage.updateWorkList = null
											};
											firstpage.switchLast()
										} else {
											var aE = S(W.Icon("refresh-arrow"), {
												css: {
													position: "absolute",
													left: 0,
													top: 0,
													"z-index": 1,
													transition: "0.3s"
												}
											}),
												aD = aE.ps.width,
												aH = S("div", {
													css: {
														position: "absolute",
														left: "50%",
														"margin-left": aa.px(-aD / 2),
														width: aa.px(aD),
														height: aa.px(aD),
														top: aa.px(-aD),
														"z-index": 100
													},
													children: [aE]
												}, document.body),
												aJ = S(R.Loading(aH), {
													css: {
														"z-index": 0,
														transition: "0.3s",
														transform: "scale(0.6)",
														opacity: 0
													}
												}),
												aC = 0,
												aI = false;
											ac.onMoveUp({
												onMove: function(aK) {
													aa.transform(aH, aa.translate(0, Math.atan((aC += aK.dY) / 100) * 60));
													aI = aC > 100;
													aa.transform(aE, aa.rotateZ(aI ? 180 : 0))
												},
												onUp: function() {
													function aK() {
														ab([aH,
														{
															100: {
																transform: "translate3d(0,0,0)"
															}
														},
														0.3])
													}
													if (aI) {
														aa(aE, "opacity", 0);
														aa(aJ, "opacity", 1);
														firstpage.updateWorkList = function(aM) {
															aM = ah(aM);
															if (aM === undefined || parseInt((au = aM)[am]) === parseInt(t.workId)) {
																var aL = S("div.msg-box", {
																	css: {
																		top: aa.px(Math.atan((aC += az.dY) / 100) * 60 + 3),
																		visibility: "visible"
																	}
																}, document.body),
																	aN = S("div.msg", {
																		css: {
																			opacity: 1,
																			"border-radius": "25px",
																			"line-height": "25px",
																			padding: "0 12px"
																		},
																		innerHTML: "没有新的作品了"
																	}, aL);
																T.once(function() {
																	ab([aL,
																	{
																		100: {
																			opacity: 0
																		}
																	},
																	0.3])
																}, function(aO) {
																	return [T.setTimeout(aO, 2000), C(document, aO)]
																});
																al()
															} else {
																aA = ap(aM[0]);
																aF(k.fade, 0)
															}
															firstpage.updateWorkList = null;
															aK()
														};
														firstpage.switchFirst()
													} else {
														aK()
													}
												}
											})
										}
									} else {
										B("加载中,请稍候")
									}
								}
							} else {
								if (aw) {
									aw.remove();
									aw = null
								}
								ar = null;
								aF(aB === 1 ? k.push : k.back, am + aB)
							}
						})
					})
				})
			})
		}
	});
	N(function() {
		var p = E["3"],
			R = E["23"];
		E["24"];
		E["44"];
		w.track = function(S) {
			window.cas && cas.trackEvent(S)
		};
		w.loadWork = R(window.workDetailUrl ? p.concatArg(workDetailUrl, {
			isPreview: (G.chuye && !G.chuyeList) ? true : undefined
		}) : "")
	});
	N(function() {
		var R = E["8"],
			p = E["12"];
		k.fade = function(U, T, W, S, V) {
			V = V || 0.8;
			S = S || t;
			S.appendChild(T);
			return p.runAnimation([
				[U,
				{
					100: {
						opacity: 0
					}
				},
				V, 0, "linear"],
				[T,
				{
					0: {
						opacity: 0
					}
				},
				V, 0, "linear"]
			], W)
		};
		k.classic = function(T, S, U) {
			t.appendChild(S);
			return p.runAnimation([
				[T,
				{
					100: {
						transform: "translate3d(0, -30%, 0) scale(0.5)"
					}
				},
				0.8, 0],
				[S,
				{
					0: {
						transform: "translate3d(0, 100%, 0)"
					}
				},
				0.8, 0]
			], U)
		};
		k.push = function(U, T, W, S, V) {
			V = V || 0.8;
			S = S || t;
			S.appendChild(T);
			return p.runAnimation([
				[U,
				{
					100: {
						transform: "translate3d(0, -100%, 0)"
					}
				},
				V, "ease-in-out", 0],
				[T,
				{
					0: {
						transform: "translate3d(0, 100%, 0)"
					}
				},
				V, "ease-in-out", 0]
			], W)
		};
		k.back = function(U, T, W, S, V) {
			V = V || 0.5;
			S = S || t;
			S.appendChild(T);
			return p.runAnimation([
				[U,
				{
					100: {
						transform: "translate3d(0, 100%, 0)"
					}
				},
				V, "ease-in-out", 0],
				[T,
				{
					0: {
						transform: "translate3d(0, -100%, 0)"
					}
				},
				V, "ease-in-out", 0]
			], W)
		};
		k.uncover = function(T, S, U) {
			R(T, "z-index", 100);
			t.appendChild(S);
			return p.runAnimation([
				[T,
				{
					100: {
						transform: "translate3d(0, -100%, 0)"
					}
				},
				0.8, 0]
			], U)
		};
		k.cube = function(T, S, V) {
			t.appendChild(S);
			var U = R(t, {
				perspective: 1000,
				background: "#FFFFFF"
			});
			return p.runAnimation([
				[T,
				{
					0: {
						"transform-origin": "50% 100%",
						"z-index": 2
					},
					100: {
						"transform-origin": "50% 100%",
						transform: "translate3d(0, -100%, 0) rotateX(90deg)",
						"z-index": 0
					}
				},
				1, 0, "linear"],
				[S,
				{
					0: {
						"transform-origin": "50% 0%",
						transform: "translate3d(0, 100%, 0) rotateX(-90deg)",
						"z-index": 0
					},
					100: {
						"transform-origin": "50% 0%",
						"z-index": 1
					}
				},
				1, 0, "linear"]
			], function() {
				U.remove();
				V && V()
			})
		};
		k.overturn = function(T, S, V) {
			t.appendChild(S);
			var U = R(t, {
				perspective: 1000,
				background: "#FFFFFF"
			});
			return p.runAnimation([
				[T,
				{
					0: {
						"transform-origin": "0 50%",
						"z-index": 2
					},
					50: {
						"transform-origin": "0 50%",
						transform: "translate3d(50%, 0, 100px) rotateY(90deg)",
						"z-index": 1
					},
					100: {
						"transform-origin": "0 50%",
						transform: "translate3d(100%, 0, 0) rotateY(180deg)",
						"z-index": 0
					}
				},
				1, 0, "linear"],
				[S,
				{
					0: {
						"transform-origin": "100% 50%",
						transform: "translate3d(-100%, 0, 0) rotateY(180deg)",
						"z-index": 0
					},
					50: {
						"transform-origin": "100% 50%",
						transform: "translate3d(-50%, 0, 100px) rotateY(270deg)",
						"z-index": 0.5
					},
					100: {
						"transform-origin": "100% 50%",
						transform: "translate3d(0, 0, 0) rotateY(360deg)",
						"z-index": 1
					}
				},
				1, 0, "linear"]
			], function() {
				U.remove();
				V && V()
			})
		};
		k["switch"] = function(T, S, V) {
			t.appendChild(S);
			var U = R(t, {
				perspective: 1000,
				background: "#FFFFFF"
			});
			return p.runAnimation([
				[T,
				{
					0: {
						"transform-origin": "100% 50%",
						"z-index": 2
					},
					50: {
						"transform-origin": "100% 50%",
						transform: "translate3d(50%, 0, 0) rotateY(-30deg)",
						"z-index": 1
					},
					100: {
						"transform-origin": "100% 50%",
						transform: "translate3d(0, 0, -130px)",
						"z-index": 0
					}
				},
				1, 0, "linear"],
				[S,
				{
					0: {
						"transform-origin": "0 50%",
						transform: "translate3d(0, 0, -130px)",
						"z-index": 0
					},
					50: {
						"transform-origin": "0 50%",
						transform: "translate3d(-50%, 0, 0) rotateY(30deg)",
						"z-index": 0.5
					},
					100: {
						"transform-origin": "0 50%",
						"z-index": 1
					}
				},
				1, 0, "linear"]
			], function() {
				U.remove();
				V && V()
			})
		}
	});
	N(function() {
		var U = E["0"],
			V = E["9"],
			p = E["12"],
			T = E["8"],
			X = E["1"],
			W = E["17"],
			S = T.px;

		function R(ab, ac, aa, Y, ag, ah, ae) {
			ae = ae || t;
			var Z = W.Canvas(Y, ag),
				af = Z.context,
				ad = Z.dpr;
			af.drawImage(ab, ac * ad, aa * ad, Y * ad, ag * ad, 0, 0, Y, ag);
			T(Z, {
				"backface-visibility": "hidden",
				position: "absolute",
				left: ae === t ? S(ac) : 0,
				top: ae === t ? S(aa) : 0,
				"z-index": ah || 0
			});
			ae.appendChild(Z);
			return Z
		}
		k.tease = function(ac, ab, ad) {
			var aa = ac.toCanvas(),
				Y = F / 8 << 0,
				Z = [];
			V.remove(ac);
			t.appendChild(ab);
			U.loop(8, function(af) {
				var ah = af === 7 ? F - Y * 7 : Y,
					ag = af === 7 ? F - ah : ah * af,
					ae = 7 - af;
				Z.push([R(aa, 0, ag, i, ah, 1), ae % 2 === 0 ? {
					100: {
						transform: "translate3d(-100%, 0, 0)"
					}
				} : {
					100: {
						transform: "translate3d(100%, 0, 0)"
					}
				},
				0.3, ae * 0.1, "linear"])
			});
			return p.runAnimation(Z, function() {
				X.foreach(Z, function(ae) {
					V.remove(ae[0])
				});
				ad && ad()
			})
		};
		k.chessboard = function(ac, Y, ae) {
			var af = ac.toCanvas(),
				ab = Y.toCanvas(),
				aa = T(t, {
					perspective: 1000,
					background: "#FFFFFF"
				}),
				ai = G.ios ? 4 : 2,
				ah = G.ios ? 5 : 3,
				ag, ad = [],
				Z = 0;
			V.remove(ac);
			if (i > F) {
				ag = ai;
				ai = ah;
				ah = ag
			}
			U.loop(ai, function(ak) {
				var aj = (ak + 1) / ai * i << 0,
					al = 0;
				U.loop(ah, function(ap) {
					var an = (ap + 1) / ah * F << 0,
						aq = aj - Z,
						am = an - al,
						ao = 0.8 / ai * ak + Math.random() * 0.4;
					U.loop(2, function(ar) {
						ad.push([R(ar === 0 ? af : ab, Z, al, aq, am, 2 - ar), ar === 0 ? {
							0: {
								"z-index": 2
							},
							100: {
								transform: "rotateY(180deg)",
								"z-index": 0
							}
						} : {
							0: {
								transform: "rotateY(180deg)",
								"z-index": 0
							},
							100: {
								transform: "rotateY(360deg)",
								"z-index": 1
							}
						},
						0.8, ao, "linear"])
					});
					al = an
				});
				Z = aj
			});
			return p.runAnimation(ad, function() {
				aa.remove();
				X.foreach(ad, function(aj) {
					V.remove(aj[0])
				});
				ae && ae()
			})
		};
		k.door = function(ab, aa, ad) {
			var Z = ab.toCanvas(),
				ac = T(t, {
					perspective: 1000,
					background: "#FFFFFF"
				}),
				Y = [];
			V.remove(ab);
			t.appendChild(aa);
			X.foreach([0, 0.5], function(ae) {
				Y.push(R(Z, ae * i, 0, i / 2, F, 1))
			});
			return p.runAnimation([
				[Y[0],
				{
					100: {
						transform: "translate3d(-100%, 0, 0)",
						opacity: 0.4
					}
				},
				0.8, 0],
				[Y[1],
				{
					100: {
						transform: "translate3d(100%, 0, 0)",
						opacity: 0.4
					}
				},
				0.8, 0],
				[aa,
				{
					0: {
						transform: "translate3d(0, 0, -1400px)"
					}
				},
				0.8, 0]
			], function() {
				ac.remove();
				X.foreach(Y, function(ae) {
					V.remove(ae)
				});
				ad && ad()
			})
		};
		k.flipOver = function(ae, Z, ag) {
			var ah = ae.toCanvas(),
				ac = Z.toCanvas(),
				aa = T(t, {
					perspective: 1000,
					background: "#FFFFFF"
				}),
				ab = R(ah, 0, 0, i, F / 2, 1),
				af = R(ah, 0, F / 2, i, F / 2, 1),
				ad = R(ac, 0, 0, i, F / 2, 2),
				Y = R(ac, 0, F / 2, i, F / 2, 0);
			V.remove(ae);
			return p.runAnimation([
				[af,
				{
					0: {
						"transform-origin": "50% 0",
						"z-index": 3
					},
					100: {
						"transform-origin": "50% 0",
						transform: "rotateX(180deg)",
						"z-index": 1
					}
				},
				0.8, 0],
				[ad,
				{
					0: {
						"transform-origin": "50% 100%",
						transform: "rotateX(-180deg)",
						"z-index": 1
					},
					100: {
						"transform-origin": "50% 100%",
						transform: "rotateX(0deg)",
						"z-index": 2
					}
				},
				0.8, 0]
			], function() {
				aa.remove();
				X.foreach([ab, af, ad, Y], function(ai) {
					V.remove(ai)
				});
				ag && ag()
			})
		}
	});
	E(function() {
		var R = E["1"],
			p = {};
		R.foreach(document.cookie.split(";"), function(S) {
			var T = S.split("=");
			p[T[0].trim(" ")] = T[1]
		});
		E["45"].get = function(S) {
			return p[S]
		}
	});
	N(function() {
		var T = E["17"],
			ah = E["21"],
			ac = E["11"],
			S = E["6"],
			aa = E["19"],
			ag = E["2"],
			ab = E["4"],
			af = E["45"],
			V = af.get("_token"),
			p = E["18"],
			U = E["3"],
			R = E["9"],
			Y = E["8"],
			Z = false,
			X = {};
		if (!G.MicroMessenger) {
			X.canNotLogin = function() {
				B("请在微信中使用")
			};
			X.isLogIn = function() {
				return false
			}
		} else {
			X.isLogIn = function() {
				return !!V
			};
			X.logIn = function() {
				location.href = "http://passport.cloud7.com.cn/wechat/oauth"
			}
		}

		function ad(aj, al, ak, ai) {
			C(aj, function() {
				al();
				Q(ai);
				S.once(function() {
					ak()
				}, function(am) {
					return [ac.onMoveUp({
						onUp: am
					}), q(am, true), m(am)]
				})
			})
		}

		function ae(aj, ai) {
			var ak = ab({
				url: "http://social.cloud7.com.cn/api/follow/add",
				data: JSON.stringify({
					userId: aj
				}),
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: "_token " + V
				}
			}, function(al) {
				if (!al) {
					var am = JSON.parse(ak.responseText);
					ai && ai(am.code === 200 ? null : true)
				} else {
					ai && ai(true)
				}
			})
		}
		var W = aa.registLoginPage("follow-author", X, function(aq, al) {
			var ak = 26 / 2 / 12 + "em";
			Z = true;
			Y(aq, "background", "white");

			function ap(at) {
				return at / 1136 * 100 + "%"
			}

			function aj(at) {
				return {
					left: "50%",
					transform: "translate3d(-50%,0,0)",
					top: ap(at)
				}
			}

			function ar(aw, ax, at) {
				var au = aq.appendChild(T.Icon(aw)),
					av = au.ps;
				Y(au, {
					position: "absolute",
					width: "auto",
					height: ap(av.height * 2)
				});
				if (at !== undefined) {
					Y(au, {
						left: Y.px(at),
						top: Y.px(ax)
					})
				} else {
					Y(au, aj(ax))
				}
				return au
			}
			ar("following/back", 15, 15);
			var am = R("div", {
				css: {
					position: "absolute",
					width: "50px",
					height: "50px",
					"z-index": 1
				}
			}, aq);
			j(am, aa.back);
			ar("following/ok", 368);

			function an(at) {
				return {
					position: "absolute",
					top: ap(at),
					left: 0,
					right: 0,
					"text-align": "center",
					"line-height": ak,
					"font-size": ak
				}
			}
			R("div", {
				css: an(368 + 48 + 58),
				children: [R("span", {
					innerHTML: "您已关注了",
					css: {
						"margin-right": ap(20),
						color: "#989898"
					}
				}), R("span", {
					innerHTML: al.author,
					css: {
						color: "#393939"
					}
				})]
			}, aq);
			R("div", {
				css: an(368 + 48 + 58 + 28 + 14),
				children: [R("span", {
					innerHTML: "下载初页APP观看更多作品",
					css: {
						color: "#989898"
					}
				})]
			}, aq);
			var ai = ar("following/download", 728),
				ao = ar("following/download-active", 728);
			ao.classList.add("hidden");
			ad(ai, function() {
				ao.classList.remove("hidden");
				ai.classList.add("hidden")
			}, function() {
				ai.classList.remove("hidden");
				ao.classList.add("hidden")
			}, ah.downloadFirstPage);
			ae(al.uid)
		});
		u.author = {
			load: function(aj, ai) {
				if (!Z && X.isLogIn()) {
					var ak = ab({
						url: U.concatArg("http://social.cloud7.com.cn/api/follow/state", {
							userId: aj.data.uid
						}),
						headers: {
							Accept: "application/json",
							"Content-Type": "application/x-www-form-urlencoded",
							Authorization: "_token " + V
						}
					}, function(al) {
						if (!al) {
							var am = JSON.parse(ak.responseText);
							if (am.code === 200) {
								Z = am.data === 1
							}
						}
						ai(aj)
					})
				} else {
					ai(aj)
				}
			},
			resource: {
				create: "author/create",
				createActive: "author/create-active",
				follow: "author/follow",
				following: "author/following"
			},
			create: function(ap, aj, ak) {
				var am = aj.data(),
					av = Math.max(14 * O << 0, 12);

				function ao(ax, aw) {
					return I.layImage(I.transformY, ax, aw, ap)
				}

				function au(ay, az, ax) {
					var aw = l(g.Label(ay, {
						lineHeight: av,
						fontSize: av,
						color: ax || "#393939"
					}), ap);
					aw.x = I.center(aw);
					aw.y = az * O
				}
				ap.background = "white";
				au("作", 194 / 2, "#989898");
				au("者", 234 / 2, "#989898");
				au(am.author, 561 / 2);
				var aq = 144 / 2 * O << 0,
					at = l(g.Border(g.ImageCover(aj.image(0), aq, aq), {
						radius: aq / 2
					}), ap);
				at.y = 381 / 2 * O;
				at.x = I.center(at);
				if (G.MicroMessenger) {
					var al = ao(ak.following, {
						y: 631 / 2,
						alignX: 0.5
					});
					if (!Z) {
						al.visible = false;
						var ai = ao(ak.follow, {
							y: 631 / 2,
							alignX: 0.5
						});
						j(ai.element, function() {
							W({
								force: true,
								data: am
							})
						})
					}
				}
				var an = ao(ak.create, {
					y: 925 / 2,
					alignX: 0.5
				}),
					ar = ao(ak.createActive, {
						y: 925 / 2,
						alignX: 0.5
					});
				ar.visible = false;
				ad(an.element, function() {
					an.visible = false;
					ar.visible = true
				}, function() {
					an.visible = true;
					ar.visible = false
				}, ah.downloadFirstPage)
			}
		}
	});
	N(function() {
		var R = E["1"],
			p = E["19"];
		u.contact = {
			resource: {
				title: "contact/title",
				frame: "contact/frame"
			},
			create: function(Y, S, T) {
				var W = O / 1008 * 1136;
				l(g.ImageCover(S.image(0)), Y);
				l(g.Rect(i, F, "rgba(255,255,255,0.5)"), Y);
				var ad = l(g.Image(T.title, W), Y);
				ad.x = I.center(ad);
				ad.y = 166 * W / 2;
				var ae = T.frame,
					ac = ae.halfWidth * W << 0,
					U = ae.halfHeight * W << 0,
					aa = [];
				R.foreach([{
					caption: "联系电话",
					click: function(af) {
						location.href = "tel:" + af
					}
				}, {
					caption: "联系邮箱",
					click: function(af) {
						location.href = "mailto:" + af
					}
				}, {
					caption: "官方网站",
					click: function(af) {
						p.jump(af)
					}
				}, {
					caption: "微信号"
				}, {
					caption: "微博",
					click: function(af) {
						p.jump("http://weibo.com/n/" + af)
					}
				}], function(ag, ai) {
					var ah = 14 * W,
						ak = 8 * W,
						al = S.text(ai),
						am = Math.max(W, 1);
					if (al.toString() === "") {
						return
					}
					var af = l(g.Rect(ac, U), Y);
					af.x = I.center(af);
					l(g.Image(ae, W), af);
					var an = l(g.Label(ag.caption + "：", {
						fontSize: 14 * am << 0,
						color: "#FFFFFF"
					}), af);
					an.x = ah;
					an.y = I.middle(an, af, true);
					var aj = l(g.BlockText(al, {
						lineHeight: 16 * am << 0,
						fontSize: 12 * am << 0,
						color: "#FFFFFF",
						margin: 0,
						width: ac - 2 * ah - ak - an.width,
						breakWord: true
					}), af);
					aj.x = I.rightTo(aj, an) + ak;
					aj.y = I.middle(aj, af, true);
					j(af.element, function() {
						ag.click && ag.click(al.toString())
					});
					aa.push(af)
				});
				var X = 143 * W,
					Z = 315 * W,
					ab = aa.length,
					V = (Z - U * ab) / (ab + 1) << 0;
				R.foreach(aa, function(ag, af) {
					ag.y = X + V * (af + 1) + U * af
				})
			}
		}
	});
	E(function() {
		var S = E["25"],
			V = E["1"],
			p = E["29"],
			R = E["15"];

		function U(Y, X, W) {
			return Y >= Math.min(X, W) && Y <= Math.max(X, W)
		}

		function T(Y) {
			var ad = Y.width,
				X = Y.height,
				ac = p.getPageMatrix(Y),
				ab = R.transform(ac, [ad / 2, X / 2, 1]),
				ae = ab[0],
				Z = ab[1],
				W = Math.sqrt(ad * ad + X * X) / 2,
				aa = [];
			if (!U(ae, 0, i) || !U(Z, 0, F)) {
				return 1
			}
			V.foreach([
				[0, 0],
				[ad, 0],
				[ad, X],
				[0, X]
			], function(ah) {
				ah = R.transform(ac, ah.concat(1));
				var af = ah[0],
					ag = ah[1];
				V.foreach([
					[0, 0, 1, 0],
					[0, 0, 0, 1],
					[1, 1, 0, 1],
					[1, 1, 1, 0]
				], function(an) {
					var ak = an[0] * i,
						am = an[1] * F,
						aj = an[2] * i,
						al = an[3] * F,
						ap = (ag - Z) * (aj - ak) - (ae - af) * (am - al),
						ai = ((af - ae) * (aj - ak) * (am - Z) + (ag - Z) * (aj - ak) * ae - (al - am) * (af - ae) * ak) / ap,
						ao = -((ag - Z) * (al - am) * (ak - ae) + (af - ae) * (al - am) * Z - (aj - ak) * (ag - Z) * am) / ap;
					if (ap !== 0 && U(ai, af, ae) && U(ai, ak, aj) && U(ao, ag, Z) && U(ao, am, al)) {
						aa.push(S.distance(ai - ae, ao - Z) / W);
						return true
					}
				})
			});
			return aa.length === 0 ? 1 : Math.min.apply(this, aa)
		}
		E["46"] = T
	});
	N(function() {
		var W = E["1"],
			S = E["2"],
			R = E["46"],
			V = E["17"],
			U = {
				"fly-into-left": J.FlyInto(3),
				"fly-into-top": J.FlyInto(0),
				"fly-into-right": J.FlyInto(1),
				"fly-into-bottom": J.FlyInto(2),
				"emerge-left": J.Emerge(3),
				"emerge-top": J.Emerge(0),
				"emerge-right": J.Emerge(1),
				"emerge-bottom": J.Emerge(2),
				scale: J.scale,
				"fade-in": J.fadeIn,
				"circle-round": J.circleRound,
				"round-from-far-and-near": J.roundFromFarAndNear,
				"curve-up": J.roundFromFarAndNear,
				"fall-down-and-shake": J.fallDownAndShake,
				shrink: J.shrink,
				flash: J.flash,
				shake: J.shake,
				wobble: J.wobble,
				tada: J.tada,
				"bounce-in": J.bounceIn,
				"bounce-in-down": J.BounceFlying(2),
				"bounce-in-up": J.BounceFlying(0),
				"bounce-in-left": J.BounceFlying(3),
				"bounce-in-right": J.BounceFlying(1),
				swing: J.swing,
				"rubber-band": J.rubberBand
			};

		function T(Y, X) {
			if (Y != null) {
				return X(Y)
			}
		}

		function p(Y, X) {
			return Y == null ? X : Y
		}
		u.components = {
			create: function(ad, aa) {
				var ae = aa.component(),
					Y = aa.custom,
					Z = Y.label === "custom",
					ab = Z ? I.transform504 : Y.type === "cover" ? I.transformCover : I.transformY,
					ac = ab.scale,
					af = 0;

				function X(ah, al, ak) {
					var ai = ((al.width || ah.halfWidth) - (al.borderWidth || 0)) * ac << 0,
						ag = ah.halfHeight == null ? al.height * ac : ai / ah.halfWidth * ah.halfHeight << 0,
						aj = g.Custom(ah, ai, ag);
					return ak && ak.mask ? g.Mask(aj, ak.mask) : aj
				}
				ad.applyEnter = {
					first: Y.animationFirst
				};
				W.foreach(ae, function(ag, ah) {
					function ai(al, an, am) {
						var aj = an.info;
						if (aj == null) {
							if (al.color) {
								am.background = al.color
							} else {
								if (Z || Y.type === "cover") {
									l(g.ImageCover(al, i, F), am)
								} else {
									var ak = l(g.Image(al, F / al.halfHeight), am);
									ak.x = I.center(ak)
								}
							}
						} else {
							if (an.type === "screen") {
								l(g.Image(al, i, F), ad).zi = ah;
								return
							}
							if (an.frame != null) {
								return T(an.frame, function(at) {
									var ap = at.info,
										aq = l(X(at, ap)),
										ao = l(X(al, aj, an)),
										ar = l(g.Rect(aq.width, aq.height), am);
									ar.origin = ab(ap.x, ap.y);
									ao.origin = [(aj.x - ap.x) * ac, (aj.y - ap.y) * ac];
									aq.appendTo(ar);
									ao.appendTo(ar);
									return [ar, S.extend(ap, {
										type: "image"
									})]
								})
							}
							if (aj.maskRadius || aj.borderWidth || aj.borderColor) {
								return [l(g.Border(X(al, aj), {
									radius: aj.maskRadius * ac << 0,
									width: aj.borderWidth * ac << 0,
									color: aj.borderColor
								}), am), aj]
							}
							return [l(X(al, aj, an), am), aj]
						}
					}
					T(ag.multiImage ? T(ag.multiImage, function(aj) {
						var al = ag.info,
							am = l(X({
								color: "transparent"
							}, al), ad),
							ak = W.map(aj, function(an) {
								return ai(an, ag)[0]
							});
						l.MultiImageArea({
							layout: ad,
							parent: am,
							images: ak,
							delay: 3,
							sign: -1,
							animation: false,
							arrow: ag.arrow
						});
						return [am, al, {
							type: "multiImage",
							images: ak,
							width: am.width,
							height: am.height
						}]
					}) : T(ai(ag, ag, ad), function(aj) {
						return aj
					}), function(aj) {
						var ak = aj[0],
							am = aj[1];
						I.setPosition(ab, ak, am);
						ak.rotate = (am.rotate || 0) * 180 / Math.PI;
						ak.opacity = p(am.opacity, 1);
						ak.zi = am && am.type === "text" ? 100 + ah : ah;
						if (am.type === "text") {
							ak.scale *= Math.max(R(ak), 0.5)
						}
						if (Z) {
							var an = S.extend(U[am.animation] || J.Emerge(), {
								duration: am["animation-duration"]
							}),
								al = am["animation-delay"];
							an.delay = al === undefined || al === null ? af : al;
							af = an.delay + (an.duration || 1);
							ak.enter = an
						} else {
							ak.applyEnter = aj[2] || (am.type == null ? undefined : {
								type: am.type,
								enterTiming: am.enterTiming
							})
						}
					})
				})
			}
		};
		u.screen = {
			create: function(Y, aa) {
				var X = aa.component(),
					Z = aa.custom;
				Y.applyEnter = {
					first: Z.animationFirst
				};
				W.foreach(X, function(af, ae) {
					var ac = af.info;
					if (ac == null) {
						if (af.color) {
							Y.background = af.color
						} else {
							l(g.ImageCover(af, i, F), Y)
						}
					} else {
						var ai = ac.x * r << 0,
							ah = ac.y * O << 0,
							ab = Math.round(ac.width * r),
							aj = Math.round((ac.type === "text" ? ac.width / af.halfWidth * af.halfHeight : ac.height) * O),
							ag;
						if (ac.type === "screen") {
							ag = l(g.Image(af, i, F), Y)
						} else {
							if (af.mask != null) {
								ag = l(g.Mask(g.ImageCover(af, ab, aj), af.mask), Y)
							} else {
								if (ac.type === "text") {
									var ad = Math.min(ab / af.halfWidth, aj / af.halfHeight);
									ai += ab - af.halfWidth * ad;
									ah += aj - af.halfHeight * ad;
									ag = l(g.Image(af, ad), Y)
								} else {
									ag = l(g.ImageCover(af, ab, aj), Y)
								}
							}
							ag.applyEnter = (ac.type == null ? undefined : {
								type: ac.type,
								enterTiming: ac.enterTiming
							})
						}
						ag.origin = [ai, ah];
						ag.rotate = (ac.rotate || 0) * 180 / Math.PI;
						ag.opacity = p(ac.opacity, 1);
						ag.zi = ac && ac.type === "text" ? 100 + ae : ae
					}
				})
			}
		};
		u.custom = {
			create: function(X, Y) {}
		};
		u["custom-2"] = {
			create: function(X, Y) {}
		};
		u.MutipleImage01 = {
			create: function(Y, Z) {
				var X = F * 0.82 << 0,
					aa = l(g.Rect(X / 410 * 244 << 0, X), Y);
				aa.x = I.center(aa);
				aa.y = I.middle(aa);
				l.MultiImageArea({
					layout: Y,
					parent: aa,
					images: W.map(Z.component(0).multiImage, function(ab) {
						return l(g.Border(g.ImageCover(ab, aa.width, aa.height), {
							width: 3,
							color: "#FFFFFF"
						}))
					}),
					sign: -1,
					arrow: V.Icon("arrow/mi01")
				})
			}
		};
		u.MutipleImage04 = {
			resource: {
				background: "mi04-background.jpg"
			},
			create: function(Z, ac, ab) {
				l(g.Image(ab.background, i, F), Z);
				var aa = l(g.Image(ac.component(0), O), Z),
					Y = l(g.Image(ac.component(1), O), Z),
					X = l(g.Image(ac.component(2), O), Z),
					ae = l(g.Rect(356 / 2 * O, 518 / 2 * O), Z);
				Y.y = I.bottomTo(Y, aa) + 11 * O;
				X.y = I.bottomTo(X, Y) + 19 * O;
				ae.y = I.bottomTo(ae, X) + 39 * O;
				var ad = (F - I.bottom(ae)) / 2 << 0;
				W.foreach([aa, Y, X, ae], function(af) {
					af.y += ad;
					af.x = I.center(af)
				});
				aa.enter = J.Emerge();
				Y.enter = z(J.Emerge(), 1);
				X.enter = z(J.Emerge(), 2);
				l.MultiImageArea({
					layout: Z,
					parent: ae,
					images: W.map((ac.component(3)).multiImage, function(af) {
						return l(g.Border(g.ImageCover(af, ae.width, ae.height), {
							width: 1,
							color: "#FFFFFF"
						}))
					}),
					delay: 3,
					sign: -1,
					arrow: V.Icon("arrow/mi04")
				})
			}
		};
		W.foreach(["screen", "custom", "custom-2", "MutipleImage01", "MutipleImage04"], function(X) {
			u[X].load = function(Z, ad) {
				var Y = "components",
					aa = [],
					ab = [];
				switch (X) {
				case "MutipleImage01":
				case "MutipleImage04":
				case "screen":
					Y = X;
					break
				}

				function ac(ag) {
					var af = ag.url,
						ae;
					if (af) {
						ae = new Image();
						ae.targetSrc = af;
						ab.push(ae)
					} else {
						ae = {}
					}
					ae.info = ag.imageinfo;
					return ae
				}
				W.foreach(Z.image, function(ag) {
					if (ag.url == null && !ag.images) {
						return
					}
					ag = JSON.parse(JSON.stringify(ag));
					var af = ac(ag),
						ae, ai, ah;
					aa.push(af);
					if (ae = ag.mask) {
						af.mask = ac(ae)
					}
					if (ai = ag.frame) {
						af.frame = ac(ai)
					}
					if (ah = ag.images) {
						af.multiImage = W.map(ah, function(aj) {
							return ac({
								url: aj
							})
						});
						af.arrow = ac({
							url: ag.arrow || "http://cloud7dev.b0.upaiyun.com/a7802fd8f506dffd01df67d06308ecf9mi01-arrow.png"
						})
					}
				});
				ad({
					label: Y,
					custom: S.extend(Z.custom || {}, {
						label: Z.label
					}),
					componentImages: ab,
					components: aa
				})
			}
		})
	});
	N(function() {
		var V = E["1"],
			p = E["2"],
			S = 1136 / 1008;

		function U(W, Z, X, Y) {
			return {
				x: W / 2 << 0,
				y: Z / 2 << 0,
				width: X / 2 << 0,
				height: Y / 2 << 0
			}
		}

		function T(W, aa, Y, Z, X) {
			var ac = [];
			V.foreach(W, function(ah, ae) {
				var ag = aa[ae],
					af = g.ImageCover(ah, Math.ceil(ag.width * r) + 1, Math.ceil(ag.height * O) + 1),
					ad = X ? X(af, ae) : l(af);
				ad.appendTo(Z);
				ad.x = ag.x * r;
				ad.y = ag.y * O;
				ac.push(ad)
			});
			if (Y) {
				var ab = l(g.Image(Y, i, F), Z);
				ab.zi = 1
			}
			return ac
		}

		function R(W) {
			return {
				resource: {
					frame: W.frame
				},
				create: function(X, Z, Y) {
					L(V.map(T(Z.image(), W.img, Y.frame, X), function(aa, ab) {
						return [aa, W.img[ab].enter]
					}))
				}
			}
		}
		u.MutipleImage02 = R({
			frame: "mi02-frame.png",
			img: [{
				x: 25,
				y: 16 * S,
				width: 280,
				height: 157 * S,
				enter: J.FlyInto(3)
			}, {
				x: 25,
				y: 173 * S,
				width: 280,
				height: 157 * S,
				enter: J.FlyInto(1)
			}, {
				x: 25,
				y: 330 * S,
				width: 280,
				height: 157 * S,
				enter: J.FlyInto(3)
			}]
		});
		u.MutipleImage03 = R({
			frame: "mi03-frame.png",
			height: 1008,
			img: [{
				x: 15,
				y: 15 * S,
				width: 290,
				height: 231 * S,
				enter: J.FlyInto(0)
			}, {
				x: 15,
				y: 250 * S,
				width: 143,
				height: 239 * S,
				enter: J.FlyInto(3)
			}, {
				x: 162,
				y: 250 * S,
				width: 143,
				height: 239 * S,
				enter: J.FlyInto(1)
			}]
		})
	});
	N(function() {
		var X = E["7"],
			S = E["0"],
			Y = E["1"],
			V = E["2"];

		function W(ab, aa, Z) {
			return I.layImage(I.transform504, ab, aa, Z)
		}

		function U() {
			return X.tuple("rgba", Array.prototype.slice.call(arguments, 0))
		}
		u.SingleImage = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0), i, F), Z)
			}
		};

		function T(Z) {
			return {
				ignorePureColor: true,
				create: function(ab, ac) {
					var aa = F / 504;
					l(g.ImageCover(ac.image(0)), ab);
					var ae = l(g.Rect(i, F, Z.background), ab);
					ae.zi = 1;
					var ad = l(g.BlockText(ac.text(0), {
						margin: Z.margin * aa << 0,
						lineHeight: Math.max(Z.lineHeight * aa << 0, 16),
						fontSize: Math.max(Z.fontSize * aa << 0, 12),
						color: Z.color,
						width: Math.min(280 * Math.max(aa, 1) << 0, i - 40)
					}), ab);
					ad.x = I.center(ad);
					ad.y = I.middle(ad);
					ad.zi = 2;
					ad.enter = J.Emerge();
					ad.applyEnter = "text"
				}
			}
		}
		u.ImageText04 = T({
			margin: 5,
			lineHeight: 25,
			fontSize: 15,
			color: "#FFFFFF",
			background: U(0, 0, 0, 0.8)
		});
		u.ImageText07 = T({
			margin: 5,
			lineHeight: 25,
			fontSize: 14,
			color: "#333333",
			background: U(255, 255, 255, 0.85)
		});

		function R(Z) {
			return {
				ignorePureColor: true,
				create: function(ag, ab) {
					var ae = ag.body.color,
						ad = O / 1008 * 1136,
						am = [27, 16, 10],
						aa = [22, 57, 88],
						ai = 115 * ad << 0,
						ak, ah, al, ac = [];
					switch (Z) {
					case "top":
						ak = 0;
						ah = ai;
						al = F;
						break;
					case "middle":
						ak = F * 0.6 << 0;
						ah = 0;
						al = F;
						break;
					case "bottom":
						ah = 0;
						ak = al = F - ai;
						break
					}
					var af = l(g.ImageCover(ab.image(0), i, al - ah), ag);
					af.y = ah;
					var aj = l(g.Rect(i, ai, ae), ag);
					aj.y = ak;
					S.loop(3, function(ao) {
						if (ab.text(ao).toString()) {
							var an = am[ao] * ad << 0,
								ap = l(g.Label(ab.text(ao), {
									fontSize: an,
									color: ae === "#FFFFFF" ? "#000000" : "#FFFFFF"
								}), aj);
							ap.x = I.center(ap);
							ap.y = aa[ao] * ad << 0;
							ap.zi = 2;
							ac.push(ap)
						}
					});
					L(Y.map(ac, function(an) {
						return [an, J.Emerge()]
					}))
				}
			}
		}
		u.ImageText01 = R("top");
		u.ImageText02 = R("bottom");
		u.ImageText03 = R("middle");
		u.ImageText05 = {
			ignorePureColor: true,
			create: function(aa, ab) {
				l(g.ImageCover(ab.image(0)), aa);
				var ac = l(g.BlockText(ab.text(0), {
					width: 157 * A << 0,
					lineHeight: 30,
					fontSize: 22,
					color: "#FFFFFF",
					breakWord: true
				}), aa);
				var Z = l(g.Rect(ac.width + 17 * A * 2 << 0, Math.max(ac.height + 20 * A, 60 * A) << 0, U(0, 0, 0, 0.85)), aa);
				Z.x = I.rightIn(Z);
				Z.y = I.middle(Z);
				ac.x = I.center(ac, Z, true);
				ac.y = I.middle(ac, Z, true);
				ac.appendTo(Z)
			}
		};
		u.ImageText06 = {
			ignorePureColor: true,
			create: function(aa, ab) {
				l(g.ImageCover(ab.image(0)), aa);
				var Z = l(g.Rect(250 * A, 350 * A, U(0, 0, 0, 0.85)), aa);
				Z.x = I.center(Z);
				Z.y = I.middle(Z);
				Y.foreach([35, 132, 229], function(ae, ac) {
					var ad = l(g.BlockText(ab.text(ac), {
						width: Z.width - 2 * 17 * A,
						lineHeight: 25 * A << 0,
						fontSize: 14 * A << 0,
						color: "#FFFFFF",
						breakWord: true
					}), Z);
					ad.y = ae * A << 0;
					ad.x = I.center(ad, Z, true);
					ad.enter = z(J.FlyInto(1), 0.3 * ac)
				})
			}
		};
		u.ImageText08 = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					alignX: 0.5,
					y: 354
				}, Z);
				ab.enter = J.Emerge()
			}
		};
		u.ImageText09 = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					alignX: 0.5,
					y: 289
				}, Z);
				ab.enter = J.Emerge()
			}
		};
		u.ImageText10 = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					x: 25,
					y: 155
				}, Z);
				ab.enter = J.Emerge()
			}
		};
		u.ImageText11 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					alignX: 0.5,
					y: 189
				}, aa);
				var Z = W(ac.image(1), {
					alignX: 0.5
				}, aa);
				Z.y = I.bottomTo(Z, ab) + 15 * A;
				L([
					[ab, J.Emerge()],
					[Z, J.Emerge()]
				])
			}
		};
		u.ImageText12 = {
			resource: {
				mask: "im12-mask.png",
				mayun: "im12-mayun.jpg"
			},
			create: function(ac, ae, ad) {
				var aa = l(g.ImageCover(ad.mayun, i / 2, 818 / 2 * O), ac),
					ab = l(g.ImageCover(ae.image(0), aa.width, aa.height), ac);
				ab.x = i / 2;
				var Z = l(g.ImageCover(ad.mask, i, 200 * O), ac);
				Z.y = I.bottomIn(Z);
				var af = l(g.Image(ae.image(1), O));
				af.x = I.center(af, Z, true);
				af.y = 75 * O;
				af.enter = J.Emerge()
			}
		};
		u.ImageText13 = {
			ignorePureColor: true,
			create: function(aa, ab) {
				l(g.ImageCover(ab.image(0)), aa);
				var Z = l(g.Rect(i, 248 / 2 * O << 0, "#FFFFFF"), aa);
				Z.y = I.bottomIn(Z);
				var ac = l(g.Image(ab.image(1), O), Z);
				ac.x = I.center(ac);
				ac.y = (766 - (1008 - 248)) / 2 * O << 0;
				ac.enter = J.fadeIn
			}
		};
		u.ImageText14 = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					alignX: 1,
					x: -14,
					y: 78
				}, Z);
				ab.enter = J.Emerge()
			}
		};
		u.ImageText15 = {
			ignorePureColor: true,
			create: function(ab, af) {
				var ae = 40 * A << 0,
					ag = 23 * A << 0,
					ad = 15 * A << 0;
				l(g.ImageCover(af.image(0)), ab);
				var ac = W(af.image(1), {}),
					aa = W(af.image(2), {});
				ac.y = ae;
				aa.y = I.bottomTo(aa, ac) + ad;
				var Z = l(g.Rect(Math.max(ac.width, aa.width, 246 * A) + ag * 2, aa.y + aa.height + ae, U(255, 255, 255, 0.9)), ab);
				Z.x = I.center(Z);
				Z.y = I.middle(Z);
				ac.appendTo(Z);
				ac.x = ag;
				aa.appendTo(Z);
				aa.x = I.rightIn(aa, Z, true) - ag;
				L([
					[ac, J.Emerge()],
					[aa, J.Emerge()]
				])
			}
		};
		u.ImageText16 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					x: 324 / 2,
					y: 114 / 2
				}, aa);
				var Z = W(ac.image(2), {}, aa);
				Z.x = ab.x + 3 * A;
				Z.y = I.bottomTo(Z, ab) + 5 * A;
				L([
					[ab, J.fadeIn],
					[Z, J.fadeIn]
				])
			}
		};
		u.ImageText17 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					x: 68 / 2,
					y: 696 / 2
				}, aa);
				var Z = W(ac.image(2), {}, aa);
				Z.x = ab.x + 4 * A;
				Z.y = I.bottomTo(Z, ab) + 5 * A;
				L([
					[ab, J.fadeIn],
					[Z, J.fadeIn]
				])
			}
		};

		function p(Z) {
			return {
				create: function(ac, ae) {
					l(g.ImageCover(ae.image(0)), ac);
					var ad = W(ae.image(1), {
						alignX: 0.5,
						y: Z / 2
					}, ac);
					var ab = W(ae.image(2), {
						alignX: 0.5
					}, ac);
					ab.y = I.bottomTo(ab, ad) + 57 / 2 * A;
					var aa = W(ae.image(3), {
						alignX: 0.5
					}, ac);
					aa.y = I.bottomTo(aa, ab) + 12 * A;
					L([
						[ad, J.Emerge()],
						[ab, J.Emerge()],
						[aa, J.Emerge()]
					])
				}
			}
		}
		u.ImageText18 = p(231);
		u.ImageText19 = p(612);
		u.ImageText20 = {
			create: function(ab, ad) {
				l(g.ImageCover(ad.image(0)), ab);
				var Z = 27 * A << 0;
				var ac = l(g.Label(ad.text(0), {
					fontSize: Z,
					fontWeight: "bold",
					color: "white"
				}), ab);
				ac.x = I.center(ac);
				ac.y = I.transformCover(0, 191 / 2)[1];
				var aa = l(g.BlockText(ad.text(1), {
					width: i - 150,
					fontSize: 10 * A << 0,
					lineHeight: 20 * A << 0,
					color: "#d2d2d2"
				}), ab);
				aa.x = I.center(aa);
				aa.y = I.bottomTo(aa, ac) + 26 * A;
				L([
					[ac, J.Emerge()],
					[aa, J.Emerge()]
				])
			}
		};
		u.ImageText21 = u.ImageText22 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					x: 516 / 2,
					y: 195 / 2
				}, aa);
				ab.enter = J.Emerge(1);
				var Z = W(ac.image(2), {}, aa);
				Z.x = I.rightIn(Z, ab);
				Z.y = I.bottomTo(Z, ab) + 5 * A;
				Z.enter = J.Emerge(3)
			}
		};
		u.ImageText23 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					x: 60 / 2,
					y: 140 / 2
				}, aa);
				ab.enter = J.Emerge(0);
				var Z = W(ac.image(2), {}, aa);
				Z.x = ab.x + 2 * A;
				Z.y = I.bottomTo(Z, ab) + 5 * A;
				Z.enter = J.Emerge(2)
			}
		};
		u.ImageText24 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					x: 82 / 2,
					y: 720 / 2
				}, aa);
				ab.enter = J.Emerge(0);
				var Z = W(ac.image(2), {}, aa);
				Z.x = ab.x + 2 * A;
				Z.y = I.bottomTo(Z, ab) + 5 * A;
				Z.enter = J.Emerge(2)
			}
		};
		u.ImageText25 = {
			ignorePureColor: true,
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					alignX: 0.5
				}, Z);
				ab.y = I.bottomIn(ab) - 40 * A;
				ab.enter = J.Emerge(0)
			}
		};
		u.ImageText26 = {
			create: function(aa, ac) {
				l(g.ImageCover(ac.image(0)), aa);
				var ab = W(ac.image(1), {
					alignX: 0,
					y: 588 / 2
				}, aa);
				var Z = l(g.Image(ac.image(2)), aa);
				Z.x = 144 / 2;
				Z.y = I.bottomTo(Z, ab);
				L([
					[ab, J.Emerge(1)],
					[Z, J.Emerge(1)]
				])
			}
		};
		u.ImageText27 = {
			create: function(Z, aa) {
				l(g.ImageCover(aa.image(0)), Z);
				var ab = W(aa.image(1), {
					alignX: 0.5,
					y: 503 / 2
				}, Z);
				ab.enter = J.Emerge()
			}
		}
	});
	E(function() {
		var S = E["6"],
			W = E["1"],
			V = E["11"],
			U = E["17"],
			T = E["9"];
		var R = function() {
				return S.Loader(function(X) {
					window.bmapInit = function() {
						X();
						delete window.bmapInit
					};
					T("script", {
						src: "http://api.map.baidu.com/api?type=quick&ak=D5a271a3083d77f21c63ff307e9f60b9&v=1.0&callback=bmapInit"
					}, document.head)
				}).load
			}();

		function p(X) {
			R(function() {
				var Y = T("div", {
					css: {
						height: "100%",
						width: "100%"
					}
				}, X.parent),
					Z = [];
				T.onInsert(Y, function() {
					var aa = new BMap.Map(Y);
					W.foreach(X.data, function(af) {
						var ac = new BMap.Point(parseFloat(af.lng), parseFloat(af.lat)),
							ad = new BMap.Marker(ac),
							ab = new BMap.Icon(U.staticSrc("map-mark.png"), new BMap.Size(30, 30));
						ad.setIcon(ab);
						aa.addOverlay(ad);
						Z.push(ac);
						if (X.make) {
							var ae = new BMap.InfoWindow(X.make(af));
							ad.addEventListener("click", function() {
								ad.openInfoWindow(ae)
							})
						}
					});
					if (Z.length !== 0) {
						aa.centerAndZoom(Z[0], 16);
						aa.setViewport(Z)
					} else {
						aa.centerAndZoom("北京市")
					}
				});
				X.onLoad && X.onLoad()
			})
		}
		E["47"].MarkerMap = p
	});
	N(function() {
		var V = E["9"],
			U = E["8"],
			S = E["18"],
			R = E["47"],
			p = E["12"],
			X = E["17"],
			W = E["19"],
			T = '<div class="map-info-window"><div class="name"></div><div class="info"><div>地址:<span class="address"></span></div></div></div>';
		u.map = {
			resource: {
				location: "map/location"
			},
			create: function(ac, af, ae) {
				var aa = O / 1008 * 1136;
				l(g.ImageCover(af.image(0)), ac);
				var Z = l(g.Image(ae.location, aa), ac);
				Z.x = I.center(Z);
				Z.y = 574 * aa / 2 << 0;
				var Y = l(g.Label(af.location(0).address, {
					lineHeight: 14 * aa << 0,
					fontSize: 12 * aa << 0,
					color: "#FFFFFF"
				}), ac);
				Y.x = I.center(Y);
				Y.y = 680 * aa / 2 << 0;
				ac.onShow(function() {
					p.runAnimation([Z.element,
					{
						"50": {
							opacity: 0.4
						}
					},
					3, "linear", "infinite"])
				});
				var ab = l(g.Rect(120, 100), ac);
				ab.x = I.center(ab);
				ab.y = (574 - 20) * aa / 2 << 0;
				var ad;
				j(ab.element, function() {
					if (!ad) {
						ad = W.SlidePage();
						ad.classList.add("map-slide-page");
						var ag = ad.appendChild(V("div.title-bar", {
							children: [V("div.back", [V(X.Icon.center("map/back"))]), V("div.line"), V("div.caption")]
						})),
							ah = S.Loading(ad);
						j(ag, W.back);
						R.MarkerMap({
							data: af.location(),
							parent: ad,
							make: function(aj) {
								var ai = V(T);
								ai.querySelector(".name").innerHTML = aj.name;
								ai.querySelector(".address").innerHTML = aj.address;
								return ai
							},
							onLoad: function() {
								V.remove(ah)
							}
						})
					}
					ad.slideIn()
				})
			}
		}
	});
	N(function() {
		var U = E["1"];
		var T = E["9"];
		var R = E["27"];
		var p = E["0"];
		var S = E["26"];
		u.MutipleImage07 = {
			create: function(al, ah, V, W) {
				var aa = {
					1: [{
						x: 0.4,
						y: 0.4,
						r: 0.2
					}],
					2: [{
						x: 0.1,
						y: 0.2,
						r: 0.2
					}, {
						x: 0.6,
						y: 0.4,
						r: 0.2
					}],
					3: [{
						x: 0.1,
						y: 0.1,
						r: 0.2
					}, {
						x: 0.5,
						y: 0.3,
						r: 0.2
					}, {
						x: 0.2,
						y: 0.6,
						r: 0.15
					}],
					4: [{
						x: 0.1,
						y: 0.1,
						r: 0.15
					}, {
						x: 0.6,
						y: 0.2,
						r: 0.2
					}, {
						x: 0.5,
						y: 0.5,
						r: 0.2
					}, {
						x: 0.2,
						y: 0.7,
						r: 0.2
					}],
					5: [{
						x: 0.1,
						y: 0.1,
						r: 0.15
					}, {
						x: 0.6,
						y: 0.2,
						r: 0.2
					}, {
						x: 0.5,
						y: 0.5,
						r: 0.2
					}, {
						x: 0.2,
						y: 0.7,
						r: 0.2
					}, {
						x: 0.7,
						y: 0.4,
						r: 0.1
					}],
					6: [{
						x: 0.1,
						y: 0.1,
						r: 0.15
					}, {
						x: 0.6,
						y: 0.2,
						r: 0.2
					}, {
						x: 0.5,
						y: 0.5,
						r: 0.2
					}, {
						x: 0.2,
						y: 0.7,
						r: 0.2
					}, {
						x: 0.7,
						y: 0.4,
						r: 0.1
					}, {
						x: 0.7,
						y: 0.7,
						r: 0.1
					}],
					7: [{
						x: 0.1,
						y: 0.1,
						r: 0.15
					}, {
						x: 0.6,
						y: 0.2,
						r: 0.2
					}, {
						x: 0.5,
						y: 0.5,
						r: 0.2
					}, {
						x: 0.2,
						y: 0.7,
						r: 0.2
					}, {
						x: 0.7,
						y: 0.4,
						r: 0.1
					}, {
						x: 0.7,
						y: 0.7,
						r: 0.1
					}, {
						x: 0.5,
						y: 0.8,
						r: 0.1
					}]
				};
				al.background = "#e1dad4";
				var ad = [];
				var ac = i;
				var aj = F;
				if (ah.image().length == 0) {
					return
				}
				var am = false;
				var ag = ah.image().slice(0, 7);
				if (!W.shapes) {
					W.shapes = aa[ag.length];
					while (!am) {
						var Z = 0;
						p.loop(W.shapes.length, function(an) {
							if (W.shapes[an].x * ac + 2 * W.shapes[an].r * ac > ac || W.shapes[an].y * aj + 2 * W.shapes[an].r * ac > aj) {
								W.shapes[an].r *= 0.9;
								Z += 1
							} else {
								p.loop(W.shapes.length, function(ao) {
									if (ao != an) {
										if (Math.pow(W.shapes[ao].x * ac + W.shapes[ao].r * ac - W.shapes[an].x * ac - W.shapes[an].r * ac, 2) + Math.pow(W.shapes[ao].y * aj + W.shapes[ao].r * ac - W.shapes[an].y * aj - W.shapes[an].r * ac, 2) < Math.pow(W.shapes[an].r * ac + W.shapes[ao].r * ac, 2)) {
											W.shapes[an].r *= 0.9;
											Z += 1
										}
									}
								})
							}
						});
						am = Z == 0
					}
				}
				var ai = W.shapes;
				U.foreach(ag, function(an, ao) {
					var ap = l(g.Border(g.ImageCover(an, 2 * ai[ao].r * ac, 2 * ai[ao].r * ac), {
						width: 2,
						color: "white",
						radius: ai[ao].r * ac + 2
					}), al);
					ap.fixed = false;
					ad.push(ap);
					ap.wr = ai[ao].r * ac;
					ap.wxv = (Math.random() - 0.5) * 0.2;
					ap.wyv = (Math.random() - 0.5) * 0.002;
					ap.x = ai[ao].x * ac;
					ap.y = ai[ao].y * aj
				});
				var ak = 0.0001;
				var ae = ak;
				var af = 0;
				var ab = T.bind(window, "deviceorientation", function(an) {
					if (an.gamma < -45 || an.gamma > 45) {
						ak = 0.002
					} else {
						ak = 0.0001
					}
					ae = ak * Math.cos(Math.PI / 180 * an.gamma);
					af = ak * Math.sin(Math.PI / 180 * an.gamma);
					if (an.beta < 0) {
						ak = 0.002;
						ae = -ak * Math.cos(Math.PI / 180 * an.beta);
						af = ak * Math.sin(Math.PI / 180 * an.beta)
					}
				});
				var Y = function() {
						U.foreach(ad, function(an, ao) {
							U.foreach(ad, function(aq, ap) {
								if (ap != ao) {
									var at = Math.pow(aq.x + aq.wr - an.x - an.wr, 2) + Math.pow(aq.y + aq.wr - an.y - an.wr, 2);
									var au = Math.sqrt(at);
									if (au <= aq.wr + an.wr) {
										an.wxv = -an.wxv * 0.8;
										an.wyv = -an.wyv * 0.8;
										var ar = aq.wr + an.wr;
										an.x = ar * (an.x - aq.x) / au + aq.x;
										an.y = ar * (an.y - aq.y) / au + aq.y
									}
									if (an.x < 0 || an.x + 2 * an.wr > ac) {
										an.x = an.x < 0 ? 0 : ac - 2 * an.wr;
										an.wxv = -an.wxv * 0.8
									}
									if (an.y < 0 || an.y + 2 * an.wr > aj) {
										an.y = an.y < 0 ? 0 : aj - 2 * an.wr;
										an.wyv = -an.wyv * 0.8
									}
									an.wyv += ae;
									an.wxv += af;
									an.x += an.wxv;
									an.y += an.wyv
								}
							})
						})
					};
				var X;
				al.onRemove(function() {
					X && X.remove();
					ab.remove()
				});
				al.onEnterEnd(function() {
					X = S.requestFrame(Y)
				});
				U.foreach(R.arrange(ad), function(an, ao) {
					an.enter = {
						duration: 0.3,
						delay: ao * 0.1,
						progress: {
							"0": {
								scale: 0
							},
							"100": {
								scale: 1
							}
						}
					}
				})
			}
		}
	});
	E(function() {
		var S = E["11"],
			T = E["1"],
			R = E["2"];

		function p(U) {
			U = U || {};

			function X() {
				var aa = [],
					ac, ab;
				return {
					track: function(ag, ae) {
						var af = ae === 0 ? ac : ae > 0;
						if (ag > 200 || af !== ac) {
							aa = []
						}
						aa.push({
							duration: ag,
							length: ae
						});
						var ai = 0,
							ah = 0;
						T.foreach(aa, function(aj) {
							ai += aj.duration;
							ah += aj.length
						});
						var ad;
						while (ai > 200) {
							ad = aa.shift();
							ai -= ad.duration;
							ah -= ad.length
						}
						ab = ai === 0 ? 0 : ah / ai;
						ac = af
					},
					speed: function() {
						return ab
					}
				}
			}
			var Y = X(),
				W = X(),
				V = new Date();

			function Z(ad, ab) {
				var aa = new Date(),
					ac = aa - V;
				V = aa;
				Y.track(ac, ab.dX || 0);
				W.track(ac, ab.dY || 0);
				ad && ad(R.insert(ab, {
					speedX: Y.speed(),
					speedY: W.speed()
				}))
			}
			return S.onMoveUp({
				onMove: function(aa) {
					Z(U.onMove, aa)
				},
				onUp: function(aa) {
					Z(U.onUp, aa)
				}
			})
		}
		E["48"] = p
	});
	N(function() {
		var U = E["1"];
		var R = E["48"];
		var T = E["26"];
		var S = E["25"];
		var p = E["18"];
		E["21"];
		u.Panorama01 = {
			create: function(Z, W) {
				l(g.ImageCover(W.image(0), i, F), Z);
				var ae = F * 150 / 1136 << 0,
					ad = F * 600 / 1136 << 0;
				var Y = l(g.Border(g.ImageCover(W.image(1), ad - 4, ae - 4), {
					width: 2,
					color: "white"
				}), Z);
				Y.x = (i - ad) / 2 - 2;
				Y.y = F * 454 / 1136 - 2;
				var ac = F * 76 / 1136 << 0,
					aa = ac / W.image(2).halfHeight * W.image(2).halfWidth << 0,
					X = (i - F * 320 / 1136) / 2 << 0;
				var ag = l(g.Image(W.image(2), aa, ac), Z);
				ag.x = i - aa - X;
				ag.rotate = 12;
				ag.y = (F * 750 / 1136 - ac * 0.2079 / 2) << 0;
				var af = F * W.image(1).halfWidth / W.image(1).halfHeight << 0;
				var ah = l(g.Image(W.image(1), af, F), Z);
				ah.visible = false;
				ah.x = (i - af) / 2 << 0;
				var V;
				j(Y.element, function() {
					V = p.hide();
					ah.x = (i - af) / 2 << 0;
					ah.visible = true
				});
				j(ah.element, function() {
					V && V.remove();
					ah.visible = false
				});
				ah.fixed = false;
				var ab;
				af > i && C(ah.element, function() {
					v = true;
					ab && ab.remove();
					R({
						onMove: function(ai) {
							ah.x = S.range(ah.x + ai.dX, 0, i - af)
						},
						onUp: function(ai) {
							if (ah.visible == true) {
								var aj = ai.speedX * 20;
								ab = T.requestFrame(function() {
									aj *= 0.95;
									ah.x += aj;
									if (Math.abs(aj) < 0.3 || !S.inRange(ah.x, i - af, 0)) {
										ab.remove()
									}
									ah.x = S.range(ah.x + aj, i - af, 0)
								})
							}
						}
					})
				})
			}
		}
	});
	N(function() {
		var R = E["0"],
			p = E["8"],
			S = E["9"],
			U = E["17"];

		function T(V, Y, W, X, Z) {
			return X * (V + Y / 2) / W - Z / 2
		}
		u.qrcode = {
			crossOrigin: true,
			resource: {
				fingerprint: "qrcode-fingerprint.png",
				frame: "qrcode-frame.png"
			},
			create: function(aa, Y, Z, V) {
				l(g.ImageCover(Y.image(0)), aa);
				var W = l(g.Rect(554 / 2, 606 / 2), aa);
				W.x = I.center(W);
				W.y = T(192 / 2, W.height, 568, F, W.height);
				l(g.Image(Z.frame, W.width, W.height), W);
				var ac = l(g.Image(Y.image(1)), W);
				ac.x = I.center(ac, W, true);
				ac.y = T(32.5, 104 / 2, W.height, W.height, ac.height);
				var X = U.Canvas(486 / 2, 277 / 2),
					ad = X.context;
				ad.drawImage(Y.image(2), 0, 0, 275 / 2, 275 / 2);
				ad.drawImage(Z.fingerprint, 166, 1, 155 / 2, 275 / 2);
				var ab = l(g.Canvas(X), W);
				ab.x = 19;
				ab.y = 127;
				aa.onShow(function() {
					var ae = V.img;
					R.callWith(function(af) {
						if (ae) {
							af()
						} else {
							ae = S("img", {
								classList: G.android ? "need-default" : [],
								css: {
									position: "absolute",
									"z-index": 1000,
									left: p.px(ab.x),
									top: p.px(ab.y),
									width: p.px(ab.width)
								}
							});
							ae.onload = function() {
								V.img = ae;
								ae.onload = null;
								af()
							};
							ae.src = X.toDataURL();
							p.transform(ae, "translateZ(100000px)");
							p(ae, "pointer-events", "auto")
						}
					}, function() {
						p(ab.element, "visibility", "hidden");
						W.element.appendChild(ae)
					})
				})
			}
		}
	});
	N(function() {
		var T = E["1"],
			p = E["2"],
			S = E["17"];

		function R(U) {
			return {
				resource: {
					background: U ? "razzies-single.png" : "razzies-double.png",
					bannerLeft: "razzies/banner-left",
					bannerCenter: "razzies/banner-center",
					bannerRight: "razzies/banner-right",
					cup: "razzies-cup.png"
				},
				create: function(am, ah, W) {
					var ae = O / 1008 * 1136;

					function X(ap, ao, aq) {
						ap.y = aq * ae;
						ap.x = (ao - 160) * ae + i / 2;
						return ap
					}
					var aj = 104 * ae;
					if (U) {
						X(l(g.ImageCover(ah.image(0), aj, aj), am), 108, 41)
					} else {
						X(l(g.ImageCover(ah.image(0), aj, aj), am), 56, 41);
						X(l(g.ImageCover(ah.image(1), aj, aj), am), 161, 41)
					}
					var ak = l(g.Image(W.background, ae), am);
					ak.x = I.center(ak);
					var ag = l(g.Label(ah.text(0), {
						fontSize: 15 * ae << 0,
						color: "#fdf1c8"
					})),
						aa = l(g.Image(W.bannerLeft, ae)),
						an = l(g.Rect(ag.width + 50 * ae << 0, aa.height), am),
						V = l(g.Image(W.bannerRight, ae)),
						ad = l(g.Image(W.bannerCenter, an.width - aa.width * 2 + 8, aa.height));
					T.foreach([aa, V, ad, ag], function(ao) {
						ao.appendTo(an)
					});
					V.x = I.rightIn(V, an, true);
					ad.x = I.center(ad, an, true);
					ag.x = I.center(ag, an, true);
					ag.y = (30 * ae - ag.height) / 2 << 0;
					an.x = I.center(an);
					an.y = 153 * ae;
					var ai = l(g.BlockText(ah.text(1), {
						width: 250 * ae,
						lineHeight: 20 * ae << 0,
						fontSize: 12 * Math.max(ae, 1) << 0,
						color: "#fdf1c9"
					}), am);
					ai.x = I.center(ai);
					ai.y = 200 * ae;
					var Z = l(g.Image(W.cup, ae)),
						ac = X(l(g.Rect(Z.width, Z.height), am), 132 / 2, 566 / 2),
						Y = l(g.Rect(85 * ae, 37 * ae), ac);
					Z.appendTo(ac);
					Y.zi = 1;
					Y.x = I.center(Y, ac, true) - 1;
					Y.y = 129 * ae;
					var ab = ah.text(2).toString().split("\n"),
						al = {
							fontSize: 15 * ae,
							color: "#40234a"
						};

					function af(ap, aq) {
						var ao = l(g.Label(ab[ap], al), Y);
						ao.x = I.center(ao, Y, true);
						ao.y = aq === undefined ? I.middle(ao, Y, true) : aq
					}
					if (ab.length === 1) {
						af(0)
					} else {
						af(0, 0);
						af(1, 20 * ae)
					}
					L([
						[an, J.fallDownAndShake],
						[ai, J.Emerge()],
						[ac, p.extend(J.shrink, {
							delay: 0.3
						})]
					])
				}
			}
		}
		u["razzies-single"] = R(true);
		u["razzies-double"] = R(false)
	});
	N(function() {
		var X = E["1"],
			U = E["9"],
			W = E["8"],
			R = E["12"],
			S = E["26"],
			p = E["11"],
			Y = E["18"],
			T = E["36"],
			V = E["17"];
		u["scratch-card"] = {
			crossOrigin: true,
			create: function(ad, af, aa) {
				var ag = {
					width: i,
					height: F,
					size: T.Size.cover,
					align: [0.5, 0.5]
				},
					Z = V.Canvas(i, F);
				T.drawImageLayout(Z.context, T.layImageByFrame(af.image(0), ag));
				l(g.Canvas(Z), ad);
				if (!aa.complete) {
					var ac = T.layImageByFrame(af.image(1), ag),
						ab = V.Canvas(i, F),
						ae = ab.context;
					T.drawImageLayout(ae, ac);
					l(g.Canvas(ab), ad);
					ad.onShow(function() {
						var aj = Y.Scratch(ad.body),
							ak = Y.hide();
						U(ab, {
							css: {
								position: "absolute",
								left: 0,
								top: 0,
								"z-index": 1000,
								transform: "translateZ(10001px)"
							}
						}, ad.element);
						var ai = [],
							ah = x(ab, function(am) {
								var al = [],
									ao = true;
								ai.push(al);
								e = true;
								al.push({
									x: am.x,
									y: am.y
								});
								p.onMoveUp({
									onMove: function(ap) {
										U.remove(aj);
										al.push({
											x: ap.x,
											y: ap.y
										})
									},
									onUp: function() {
										ao = false
									}
								});
								var an = S.requestFrame(function() {
									T.drawImageLayout(ae, ac);
									ae.save();
									ae.lineCap = "round";
									ae.lineJoin = "round";
									ae.globalCompositeOperation = "destination-out";
									ae.beginPath();
									X.foreach(ai, function(ax) {
										X.foreach(ax, function(ay, az) {
											az === 0 ? ae.moveTo(ay.x, ay.y) : ae.lineTo(ay.x, ay.y)
										});
										ae.lineWidth = 50 * A;
										if (G.android) {
											ab.style.display = "none";
											ab.offsetHeight;
											ab.style.display = "inherit"
										}
										ae.stroke()
									});
									ae.restore();
									if (!ao) {
										var aq = false;
										an.remove();
										try {
											var av = ae.getImageData(0, 0, ab.width, ab.height),
												aw = av.data,
												at = 0;
											for (var ar = 0, ap = aw.length; ar < ap; ar += 4) {
												if (aw[ar + 3] < 128) {
													++at
												}
											}
										} catch (au) {
											aq = true
										}
										if (aq || at / (aw.length / 4) > 0.3) {
											ah.remove();
											R.runAnimation([ab,
											{
												100: {
													opacity: 0
												}
											},
											0.8], function() {
												ak.remove();
												aa.complete = true;
												U.remove(ab)
											})
										}
									}
								})
							});
						ad.onRemove(function() {
							ak.remove();
							U.remove(aj)
						})
					})
				}
			}
		}
	});
	N(function() {
		var X = E["1"],
			V = E["9"],
			S = E["6"],
			U = E["2"],
			Z = E["18"],
			p = E["11"],
			W = E["17"],
			Y = E["19"],
			T = E["43"];
		u["Sign-Up02"] = {
			create: function(ad, ae) {
				var ac = {
					top: 148,
					middle: 417,
					bottom: 687
				},
					aa = 125 * A << 0;
				l(g.ImageCover(ae.image(0), i, F), ad);
				var ab = l(g.Rect(aa, aa), ad);
				ab.x = I.center(ab);
				ab.y = I.transformCover(0, ac[ae.position(0)] / 2)[1];
				j(ab.element, function() {
					Y.jump(ae.actionlinks(0))
				})
			}
		};
		var R = Y.registLoginPage("sign-up", w.SignupSystem, function(ah, aa) {
			var aj = aa.template,
				ab = V("div.page-content", ah),
				ad = V("form", {
					action: "/"
				}, ab),
				ae = V("div.icon.back", [W.Icon("signup/close")], ah),
				af = null,
				ai = null,
				ac = [],
				ak = {};
			ah.classList.add("sign-up-form-slide-page");
			ah.classList.add("scroll");
			ah.classList.add("need-default");
			j(ae, Y.back);

			function ag() {
				var ao = [],
					ap = [];
				af && af.blur();

				function an(at, au) {
					ao.push({
						name: at.name,
						label: at.label,
						value: au
					})
				}
				var ar = [];
				X.foreach(ac, function(at) {
					var au = at.input.value;
					if (at.data.required) {
						if (au === "") {
							ap.push(at.data.label);
							at.input.classList.add("error")
						} else {
							var av = at.validate ? at.validate(au) : null;
							if (av) {
								ar.push(av);
								at.input.classList.add("error")
							} else {
								an(at.data, au);
								at.input.classList.remove("error")
							}
						}
					} else {
						an(at.data, at.input.value)
					}
				});
				if (ap.length !== 0 || ar.length !== 0) {
					B((ap.length ? [ap.join("，") + "不能为空。"] : []).concat(ar).join("<br>"))
				} else {
					var am = [],
						aq = Z.Loading(ah),
						al = {};
					M(ab);
					if (w.SignupSystem.isLogIn()) {
						am.push(function(at) {
							w.getUserInfo(function(au) {
								al = au;
								at()
							})
						})
					}
					S.concurrency(am, function() {
						var at = {
							"报名时间": new Date().getTime(),
							"微信昵称": al.NickName,
							"微信头像": al.HeadPhoto,
							"微信性别": al.Sex,
							"微信City": al.City,
							"微信Province": al.Province,
							"微信Country": al.Country
						};
						U.foreach(ak, function(au, av) {
							an(av, at[au] === undefined ? "" : at[au])
						});
						w.sendForm(function() {
							V.remove(aq);
							B(aj.data.submitComplete.value, 1000);
							setTimeout(function() {
								if (ah.isIn) {
									Y.back()
								}
							}, 1000)
						}, {
							id: aa.formId,
							data: ao
						})
					})
				}
			}
			V.bind(ad, "submit", function(al) {
				al.preventDefault()
			});
			X.foreach(aj.data.component, function(al) {
				if (al.enable) {
					if (al.visiable) {
						switch (al.name) {
						case "textbox":
							(function() {
								var ap = {},
									ao = V("label", ad),
									an = ap.caption = V("div.caption", al.label + "：", ao),
									am = ap.input = V("input", {
										placeholder: al.placeholder,
										name: al.id
									}, ao);
								switch (al.label) {
								case "电话":
									am.type = "tel";
									break;
								case "邮箱":
									am.type = "email";
									ap.validate = function(aq) {
										return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(aq) ? null : "请输入正确的邮箱地址"
									};
									break
								}
								V.bind(am, "focus", function() {
									af = am
								});
								if (al.required) {
									V("div.required.icon", an)
								}
								if (ai) {
									V.bind(ai, "keypress", function(aq) {
										if (aq.keyCode === 13) {
											am.focus()
										}
									})
								}
								ai = am;
								ap.data = al;
								ac.push(ap)
							})();
							break;
						case "btn":
							(function() {
								var am = V("label", ad),
									an = V("div.button", {
										innerHTML: al.value
									}, am);
								j(an, ag)
							})();
							break
						}
					} else {
						ak[al.label] = al
					}
				}
			});
			if (ai) {
				V.bind(ai, "keypress", function(al) {
					if (al.keyCode === 13) {
						ag()
					}
				})
			}
		});
		u["Sign-Up03"] = {
			create: function(ab, ac) {
				var ad = U.extend(ac.signup, {});
				ad.template = JSON.parse(ad.template);
				l(g.ImageCover(ac.image(0), i, F), ab);
				var aa = I.layImage(I.transformCover, ac.image(1), {
					alignX: 0.5,
					y: 208
				}, ab);
				j(aa.element, function() {
					R({
						data: ad,
						noLog: !ad.template.allowAnymous
					})
				})
			}
		}
	});
	N(function() {
		var T = E["9"],
			S = E["8"],
			W = E["11"],
			R = E["18"],
			p = E["12"],
			V = E["17"],
			U = E["19"];
		u.video = {
			resource: {
				play: "video/play"
			},
			create: function(Z, ab, aa) {
				var Y = O / 1008 * 1136,
					ad = ab.video(0);
				l(g.ImageCover(ab.image(0)), Z);
				var X = l(g.Image(aa.play, A), Z);
				var ac = l(g.Circle(X.width / 2, "#FFFFFF"), Z);
				ac.x = X.x = I.center(X);
				ac.y = X.y = X.y = 436 / 2 * Y;
				ac.visible = false;
				X.zi = 1;
				Z.onShow(function() {
					ac.visible = true;
					p.runAnimation([ac.element,
					{
						0: {
							opacity: 0.8
						},
						100: {
							transform: S.scale(2),
							opacity: 0
						}
					},
					2.5, "infinite"])
				});
				Z.onRemove(function() {
					ac.visible = false
				});
				j(X.element, function() {
					var af, ae;
					if (ae = T("div", ad).querySelector("iframe")) {
						af = T(U.SlidePage(), {
							css: {
								background: "black"
							}
						});
						af.onSlideIn(window.stopAudio);
						af.onSlideOut(window.playAudio);
						ae.width = i;
						ae.height = i / 16 * 9 << 0;
						S(ae, {
							position: "absolute",
							left: 0,
							top: S.px((F - ae.height) / 2 << 0)
						});
						var ag = R.Loading(af);
						ae.onload = function() {
							T.remove(ag);
							ae.onload = null
						};
						af.appendChild(ae);
						j(T("div", {
							css: {
								position: "absolute",
								right: "0",
								top: "0",
								width: "60px",
								height: "60px"
							},
							children: [V.Icon.center("video/close")]
						}, af), U.back)
					}
					if (af) {
						af.slideIn()
					} else {
						if (/(^http:\/\/)|(^https:\/\/)/.test(ad)) {
							U.jump(ad)
						} else {
							B("未识别的视频地址")
						}
					}
				})
			}
		}
	})
})();