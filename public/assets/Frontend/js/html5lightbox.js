function loadHtml5LightBox(o) {
    !function(t) {
        t.fn.html5lightbox = function(i) {
            var e = this;
            e.options = jQuery.extend({freelink: "http://html5box.com/", defaultvideovolume: 1, autoplay: !0, html5player: !0, responsive: !0, nativehtml5controls: !1, videohidecontrols: !1, useflashonie9: !0, useflashonie10: !1, useflashonie11: !1, googleanalyticsaccount: "", arrowloop: !0, shownavigation: !0, thumbwidth: 96, thumbheight: 72, thumbgap: 4, thumbtopmargin: 12, thumbbottommargin: 12, thumbborder: 1, thumbbordercolor: "transparent", thumbhighlightbordercolor: "#fff", thumbopacity: 1, navbuttonwidth: 32, overlaybgcolor: "#000", overlayopacity: .8, bgcolor: "#fff", bordersize: 8, borderradius: 0, bordermargin: 16, barautoheight: !0, barheight: 48, loadingwidth: 64, loadingheight: 64, resizespeed: 400, fadespeed: 400, jsfolder: o, skinsfoldername: "skins/default/", loadingimage: "lightbox-loading.gif", nextimage: "lightbox-next.png", previmage: "lightbox-prev.png", closeimage: "lightbox-close.png", playvideoimage: "lightbox-playvideo.png", titlebgimage: "lightbox-titlebg.png", navarrowsprevimage: "nav-arrows-prev.png", navarrowsnextimage: "nav-arrows-next.png", showtitle: !0, titlestyle: "bottom", titleinsidecss: "{color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}", titlebottomcss: "{color:#333; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}", showdescription: !0, descriptioninsidecss: "{color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}", descriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}", errorwidth: 280, errorheight: 48, errorcss: "{text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}", enabletouchswipe: !0, supportesckey: !0, supportarrowkeys: !1, version: "3.3", stamp: !1, freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110", watermark: "", watermarklink: ""}, i), "undefined" != typeof html5lightbox_options && html5lightbox_options && jQuery.extend(e.options, html5lightbox_options), t("div#html5lightbox_options").length && t.each(t("div#html5lightbox_options").data(), function(o, t) {
                e.options[o.toLowerCase()] = t
            }), e.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), e.options.skinsfolder = e.options.skinsfoldername, e.options.skinsfolder.length > 0 && "/" != e.options.skinsfolder[e.options.skinsfolder.length - 1] && (e.options.skinsfolder += "/"), "/" != e.options.skinsfolder.charAt(0) && "http:" != e.options.skinsfolder.substring(0, 5) && "https:" != e.options.skinsfolder.substring(0, 6) && (e.options.skinsfolder = e.options.jsfolder + e.options.skinsfolder);
            var n, s, r = "", l = e.options.freemark.split(",");
            for (n = 0; n < l.length; n++)
                r += String.fromCharCode(l[n]);
            e.options.freemark = r;
            var a = "hmtamgli5cboxh.iclolms";
            for (n = 1; 5 >= n; n++)
                a = a.slice(0, n) + a.slice(n + 1);
            for (s = a.length, n = 0; 5 > n; n++)
                a = a.slice(0, s - 9 + n) + a.slice(s - 8 + n);
            -1 != e.options.htmlfolder.indexOf(a) && (e.options.stamp = !1), e.options.navheight = 0, e.options.thumbgap += 2 * e.options.thumbborder, e.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV"], e.elemArray = new Array, e.options.curElem = -1, e.options.flashInstalled = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e.options.flashInstalled = !0)
            } catch (h) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (e.options.flashInstalled = !0)
            }
            e.options.html5VideoSupported = !!document.createElement("video").canPlayType, e.options.isChrome = null != navigator.userAgent.match(/Chrome/i), e.options.isFirefox = null != navigator.userAgent.match(/Firefox/i), e.options.isOpera = null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i), e.options.isSafari = null != navigator.userAgent.match(/Safari/i), e.options.isIE11 = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/), e.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !e.options.isOpera, e.options.isIE10 = null != navigator.userAgent.match(/MSIE 10/i) && !this.options.isOpera, e.options.isIE9 = null != navigator.userAgent.match(/MSIE 9/i) && !e.options.isOpera, e.options.isIE8 = null != navigator.userAgent.match(/MSIE 8/i) && !e.options.isOpera, e.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !e.options.isOpera, e.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !e.options.isOpera, e.options.isIE678 = e.options.isIE6 || e.options.isIE7 || e.options.isIE8, e.options.isIE6789 = e.options.isIE6 || e.options.isIE7 || e.options.isIE8 || e.options.isIE9, e.options.isAndroid = null != navigator.userAgent.match(/Android/i), e.options.isIPad = null != navigator.userAgent.match(/iPad/i), e.options.isIPhone = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i), e.options.isIOS = e.options.isIPad || e.options.isIPhone, e.options.isMobile = e.options.isAndroid || e.options.isIPad || e.options.isIPhone, e.options.isIOSLess5 = e.options.isIPad && e.options.isIPhone && (null != navigator.userAgent.match(/OS 4/i) || null != navigator.userAgent.match(/OS 3/i)), e.options.supportCSSPositionFixed = !e.options.isIE6 && !e.options.isIOSLess5, e.options.iequirksmode = e.options.isIE6789 && "CSS1Compat" != document.compatMode, e.options.resizeTimeout = -1, e.options.isMobile && (e.options.autoplay = !1), e.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", e.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), t.getScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js")), e.init = function() {
                e.showing = !1, e.readData(), e.createMarkup(), e.supportKeyboard()
            };
            var d = 0, p = 1, c = 2, u = 3, m = 4, g = 5, b = 6, w = 7, f = 8, v = 9;
            return e.readData = function() {
                e.each(function() {
                    if ("a" == this.nodeName.toLowerCase() || "area" == this.nodeName.toLowerCase()) {
                        var o = t(this), i = "mediatype"in o.data() ? o.data("mediatype") : e.checkType(o.attr("href"));
                        if (!(0 > i)) {
                            for (var n = 0; n < e.elemArray.length; n++)
                                if (o.attr("href") == e.elemArray[n][p])
                                    return;
                            e.elemArray.push(new Array(i, o.attr("href"), o.attr("title"), o.data("group"), o.data("width"), o.data("height"), o.data("webm"), o.data("ogg"), o.data("thumbnail"), o.data("description")))
                        }
                    }
                })
            }, e.createMarkup = function() {
                "inside" == e.options.titlestyle ? (e.options.titlecss = e.options.titleinsidecss, e.options.descriptioncss = e.options.descriptioninsidecss) : "bottom" == e.options.titlestyle && (e.options.titlecss = e.options.titlebottomcss, e.options.descriptioncss = e.options.descriptionbottomcss);
                var o = "#html5-text " + e.options.titlecss;
                o += ".html5-description " + e.options.descriptioncss, o += ".html5-error " + e.options.errorcss, t("head").append("<style type='text/css'>" + o + "</style>"), e.$lightbox = jQuery("<div id='html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'><div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + e.options.overlaybgcolor + ";opacity:" + e.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(100 * e.options.overlayopacity) + ");'></div><div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'><div id='html5-elem-box' style='display:block;position:relative;margin:0px auto;text-align:center;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'><div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;background-color:" + e.options.bgcolor + ";'><div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + e.options.skinsfolder + e.options.loadingimage + "\") no-repeat center center;'></div><div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:" + e.options.bordersize + "px;text-align:center;width:" + e.options.errorwidth + "px;height:" + e.options.errorheight + "px;'>The requested content cannot be loaded.<br />Please try again later.</div><div id='html5-image' style='display:none;position:absolute;top:0px;left:0px;" + (e.options.iequirksmode ? "margin" : "padding") + ":" + e.options.bordersize + "px;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'></div><div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + e.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + e.options.skinsfolder + e.options.nextimage + "'></div><div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + e.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + e.options.skinsfolder + e.options.previmage + "'></div></div></div></div></div>"), e.$lightbox.css({position: e.options.supportCSSPositionFixed && e.options.responsive && !e.options.iequirksmode ? "fixed" : "absolute"}), e.$lightbox.appendTo("body"), e.$lightboxBox = t("#html5-lightbox-box", e.$lightbox), e.$elem = t("#html5-elem-box", e.$lightbox), e.$elemWrap = t("#html5-elem-wrap", e.$lightbox), e.$loading = t("#html5-loading", e.$lightbox), e.$error = t("#html5-error", e.$lightbox), e.$image = t("#html5-image", e.$lightbox), e.$next = t("#html5-next", e.$lightbox), e.$prev = t("#html5-prev", e.$lightbox);
                var i = "<div id='html5-elem-data-box' style='display:none;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";
                if (e.$elem.append(i), e.$elemData = t("#html5-elem-data-box", e.$lightbox), e.$text = t("#html5-text", e.$lightbox), e.options.borderradius > 0 && (e.$elem.css({"border-radius": e.options.borderradius + "px", "-moz-border-radius": e.options.borderradius + "px", "-webkit-border-radius": e.options.borderradius + "px"}), "inside" == e.options.titlestyle ? e.$elemWrap.css({"border-radius": e.options.borderradius + "px", "-moz-border-radius": e.options.borderradius + "px", "-webkit-border-radius": e.options.borderradius + "px"}) : (e.$elemWrap.css({"border-top-left-radius": e.options.borderradius + "px", "-moz-top-left-border-radius": e.options.borderradius + "px", "-webkit-top-left-border-radius": e.options.borderradius + "px", "border-top-right-radius": e.options.borderradius + "px", "-moz-top-right-border-radius": e.options.borderradius + "px", "-webkit-top-right-border-radius": e.options.borderradius + "px"}), e.$elemData.css({"border-bottom-left-radius": e.options.borderradius + "px", "-moz-top-bottom-border-radius": e.options.borderradius + "px", "-webkit-bottom-left-border-radius": e.options.borderradius + "px", "border-bottom-right-radius": e.options.borderradius + "px", "-moz-bottom-right-border-radius": e.options.borderradius + "px", "-webkit-bottom-right-border-radius": e.options.borderradius + "px"}))), "inside" == e.options.titlestyle ? (e.$elemData.css({position: "absolute", margin: e.options.bordersize + "px", bottom: 0, left: 0, "background-color": "#333", "background-color":"rgba(51, 51, 51, 0.6)"}), e.$text.css({padding: e.options.bordersize + "px " + 2 * e.options.bordersize + "px"})) : (e.$elemData.css({position: "relative", width: "100%", height: e.options.barautoheight ? "auto" : e.options.barheight + "px", padding: "0 0 " + e.options.bordersize + "px 0", "background-color": e.options.bgcolor, "text-align": "left"}), e.$text.css({margin: "0 " + e.options.bordersize + "px"})), e.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='" + e.options.skinsfolder + e.options.closeimage + "'></div>"), e.$close = t("#html5-close", e.$lightbox), e.$watermark = t("#html5-watermark", e.$lightbox), e.options.stamp)
                    e.$watermark.html("<a href='" + e.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" + e.options.freemark + "</div></div></a>");
                else if (e.options.watermark) {
                    var n = "<img src='" + e.options.watermark + "' style='border:none;' />";
                    e.options.watermarklink && (n = "<a href='" + e.options.watermarklink + "' target='_blank'>" + n + "</a>"), e.$watermark.html(n)
                }
                t("#html5-lightbox-overlay", e.$lightbox).click(e.finish), e.$close.click(e.finish), e.$next.click(function() {
                    e.options.nextElem <= e.options.curElem && e.options.onlastarrowclicked && window[e.options.onlastarrowclicked] && "function" == typeof window[e.options.onlastarrowclicked] && window[e.options.onlastarrowclicked](), e.gotoSlide(-1)
                }), e.$prev.click(function() {
                    e.options.prevElem >= e.options.curElem && e.options.onfirstarrowclicked && window[e.options.onfirstarrowclicked] && "function" == typeof window[e.options.onfirstarrowclicked] && window[e.options.onfirstarrowclicked](), e.gotoSlide(-2)
                }), t(window).resize(function() {
                    clearTimeout(e.options.resizeTimeout), e.options.resizeTimeout = setTimeout(function() {
                        e.resizeWindow()
                    }, 500)
                }), t(window).scroll(function() {
                    e.scrollBox()
                }), t(window).bind("orientationchange", function(o) {
                    e.options.isMobile && e.resizeWindow()
                }), e.options.isIPhone && (e.options.windowInnerHeight = window.innerHeight, setInterval(function() {
                    e.options.windowInnerHeight != window.innerHeight && (e.options.windowInnerHeight = window.innerHeight, e.resizeWindow())
                }, 500)), e.options.enabletouchswipe && e.enableSwipe()
            }, e.calcNextPrevElem = function() {
                e.options.nextElem = -1, e.options.prevElem = -1;
                var o, t = e.elemArray[e.options.curElem][u];
                if (void 0 != t && null != t) {
                    for (o = e.options.curElem + 1; o < e.elemArray.length; o++)
                        if (e.elemArray[o][u] == t) {
                            e.options.nextElem = o;
                            break
                        }
                    if (e.options.nextElem < 0)
                        for (o = 0; o < e.options.curElem; o++)
                            if (e.elemArray[o][u] == t) {
                                e.options.nextElem = o;
                                break
                            }
                    if (e.options.nextElem >= 0) {
                        for (o = e.options.curElem - 1; o >= 0; o--)
                            if (e.elemArray[o][u] == t) {
                                e.options.prevElem = o;
                                break
                            }
                        if (e.options.prevElem < 0)
                            for (o = e.elemArray.length - 1; o > e.options.curElem; o--)
                                if (e.elemArray[o][u] == t) {
                                    e.options.prevElem = o;
                                    break
                                }
                    }
                }
            }, e.clickHandler = function() {
                if (e.elemArray.length <= 0)
                    return!0;
                var o = t(this);
                e.hideObjects();
                for (var i = 0; i < e.elemArray.length && e.elemArray[i][p] != o.attr("href"); i++)
                    ;
                if (i == e.elemArray.length)
                    return!0;
                e.options.curElem = i, e.options.nextElem = -1, e.options.prevElem = -1, e.calcNextPrevElem(), e.$next.hide(), e.$prev.hide(), e.reset(), e.$lightbox.show(), e.options.supportCSSPositionFixed || e.$lightbox.css("top", t(window).scrollTop());
                var n = e.options.loadingwidth + 2 * e.options.bordersize, s = e.options.loadingheight + 2 * e.options.bordersize, r = window.innerHeight ? window.innerHeight : t(window).height(), l = Math.round(r / 2 - s / 2);
                return"inside" != e.options.titlestyle && (l -= Math.round(e.options.barheight / 2)), 16 > l && (l = 16), e.options.iequirksmode ? e.$lightboxBox.css({top: l}) : e.$lightboxBox.css({"margin-top": l}), e.$lightboxBox.css({width: n, height: s}), e.$elemWrap.css({width: n, height: s}), e.loadCurElem(), !1
            }, e.loadThumbnail = function(o, i) {
                var n = new Image;
                t(n).load(function() {
                    var n;
                    n = this.width / this.height <= e.options.thumbwidth / e.options.thumbheight ? "width:100%;" : "height:100%;", t(".html5-nav-thumb").eq(i).html("<img style='" + n + "' src='" + o + "' />")
                }), n.src = o
            }, e.showNavigation = function() {
                if (e.options.shownavigation && e.currentElem && e.currentElem[u]) {
                    var o, i = !1, n = e.currentElem[u];
                    for (o = 0; o < e.elemArray.length; o++)
                        if (n == e.elemArray[o][u] && e.elemArray[o][f] && e.elemArray[o][f].length > 0) {
                            i = !0;
                            break
                        }
                    if (i && (e.options.navheight = e.options.thumbheight + e.options.thumbtopmargin + e.options.thumbbottommargin, !(t(".html5-nav").length > 0))) {
                        t("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:" + e.options.navheight + "px;z-index:9999999;'><div class='html5-nav-container' style='position:relative;margin:" + e.options.thumbtopmargin + "px auto " + e.options.thumbbottommargin + "px;'><div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + e.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + e.options.skinsfolder + e.options.navarrowsprevimage + "\") no-repeat left center;'></div><div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'><div class='html5-nav-list'></div></div><div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + e.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + e.options.skinsfolder + e.options.navarrowsnextimage + "\") no-repeat right center;'></div></div></div>");
                        var s = 0;
                        for (o = 0; o < e.elemArray.length; o++)
                            n == e.elemArray[o][u] && e.elemArray[o][f] && e.elemArray[o][f].length > 0 && (t(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" + o + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + e.options.thumbopacity + ";margin: 0 " + e.options.thumbgap / 2 + "px;width:" + e.options.thumbwidth + "px;height:" + e.options.thumbheight + "px;border:" + e.options.thumbborder + "px solid " + e.options.thumbbordercolor + ";'></div>"), this.loadThumbnail(e.elemArray[o][f], s), s++);
                        t(".html5-nav-thumb").hover(function() {
                            t(this).css({opacity: 1}), t(this).css({border: e.options.thumbborder + "px solid " + e.options.thumbhighlightbordercolor})
                        }, function() {
                            t(this).css({opacity: e.options.thumbopacity}), t(this).css({border: e.options.thumbborder + "px solid " + e.options.thumbbordercolor})
                        }), t(".html5-nav-thumb").click(function() {
                            var o = t(this).data("arrayindex");
                            o >= 0 && e.gotoSlide(o)
                        }), e.options.totalwidth = s * (e.options.thumbgap + e.options.thumbwidth + 2 * e.options.thumbborder), t(".html5-nav-list").css({display: "block", position: "relative", "margin-left": 0, width: e.options.totalwidth + "px"}).append("<div style='clear:both;'></div>");
                        var r = t(".html5-nav-mask"), l = t(".html5-nav-prev"), a = t(".html5-nav-next");
                        l.click(function() {
                            var o = t(".html5-nav-list"), i = t(".html5-nav-next"), n = t(window).width(), s = n - 2 * e.options.navbuttonwidth, r = parseInt(o.css("margin-left")) + s;
                            r >= 0 ? (r = 0, t(this).css({"background-position": "center left"})) : t(this).css({"background-position": "center right"}), r <= s - e.options.totalwidth ? i.css({"background-position": "center left"}) : i.css({"background-position": "center right"}), o.animate({"margin-left": r})
                        }), a.click(function() {
                            var o = t(".html5-nav-list"), i = t(".html5-nav-prev"), n = t(window).width(), s = n - 2 * e.options.navbuttonwidth, r = parseInt(o.css("margin-left")) - s;
                            r <= s - e.options.totalwidth ? (r = s - e.options.totalwidth, t(this).css({"background-position": "center left"})) : t(this).css({"background-position": "center right"}), r >= 0 ? i.css({"background-position": "center left"}) : i.css({"background-position": "center right"}), o.animate({"margin-left": r})
                        });
                        var h = t(window).width();
                        e.options.totalwidth <= h ? (r.css({width: e.options.totalwidth + "px"}), l.hide(), a.hide()) : (r.css({width: h - 2 * e.options.navbuttonwidth + "px"}), l.show(), a.show())
                    }
                }
            }, e.loadElem = function(o) {
                switch (e.currentElem = o, e.showing = !0, e.showNavigation(), e.$elem.unbind("mouseenter").unbind("mouseleave").unbind("mousemove"), e.$loading.show(), e.options.onshowitem && window[e.options.onshowitem] && "function" == typeof window[e.options.onshowitem] && window[e.options.onshowitem](o), o[d]) {
                    case 0:
                        var i = new Image;
                        t(i).load(function() {
                            e.showImage(o, i.width, i.height)
                        }), t(i).error(function() {
                            e.showError()
                        }), i.src = o[p];
                        break;
                    case 1:
                        e.showSWF(o);
                        break;
                    case 2:
                    case 8:
                        e.showVideo(o);
                        break;
                    case 3:
                    case 4:
                    case 9:
                        e.showYoutubeVimeo(o);
                        break;
                    case 5:
                        e.showPDF(o);
                        break;
                    case 6:
                        e.showMP3(o);
                        break;
                    case 7:
                        e.showWeb(o);
                        break;
                    case 10:
                        e.showDiv(o)
                }
                e.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Lightbox", "Open", o[p]])
            }, e.loadCurElem = function() {
                e.loadElem(e.elemArray[e.options.curElem])
            }, e.showError = function() {
                e.$loading.hide(), e.resizeLightbox(e.options.errorwidth, e.options.errorheight, !0, function() {
                    e.$error.show(), e.$elem.fadeIn(e.options.fadespeed, function() {
                        e.showData()
                    })
                })
            }, e.calcTextWidth = function(o) {
                return o - 36
            }, e.showTitle = function(o, t, i) {
                "inside" == e.options.titlestyle && e.$elemData.css({width: o + "px"});
                var n = "";
                e.options.showtitle && t && t.length > 0 && (n += t), e.options.showdescription && i && i.length > 0 && (n += '<p class="html5-description">' + i + "</p>"), e.$text.html(n)
            }, e.showImage = function(o, t, i) {
                var n, s;
                o[m] ? n = o[m] : (n = t, o[m] = t), o[g] ? s = o[g] : (s = i, o[g] = i);
                var r = e.calcElemSize({w: n, h: s}, !0);
                e.resizeLightbox(r.w, r.h, !0, function() {
                    e.showTitle(r.w, o[c], o[v]), e.$image.css({width: r.w, height: r.h}).show(), e.$image.html("<img src='" + o[p] + "' width='100%' height='100%' />"), e.$elem.fadeIn(e.options.fadespeed, function() {
                        e.showData()
                    })
                })
            }, e.showSWF = function(o) {
                var i = o[m] ? o[m] : 960, n = o[g] ? o[g] : 540, s = e.calcElemSize({w: i, h: n}, !0);
                i = s.w, n = s.h, e.resizeLightbox(i, n, !0, function() {
                    e.showTitle(s.w, o[c], o[v]), e.$image.css({width: s.w, height: s.h}).html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show(), e.embedFlash(t("#html5lightbox-swf"), o[p], "window", {width: i, height: n}), e.$elem.show(), e.showData()
                })
            }, e.showVideo = function(o) {
                var i = o[m] ? o[m] : 960, n = o[g] ? o[g] : 540, s = e.calcElemSize({w: i, h: n}, !0);
                i = s.w, n = s.h, e.resizeLightbox(i, n, !0, function() {
                    e.showTitle(s.w, o[c], o[v]), e.$image.css({width: s.w, height: s.h}).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;background-color:#000;'></div>").show();
                    var r = !1;
                    if (e.options.isIE678 || 8 == o[d] || e.options.isIE9 && e.options.useflashonie9 || e.options.isIE10 && e.options.useflashonie10 || e.options.isIE11 && e.options.useflashonie11 ? r = !1 : e.options.isMobile ? r = !0 : !e.options.html5player && e.options.flashInstalled || !e.options.html5VideoSupported || (!e.options.isFirefox && !e.options.isOpera || (e.options.isFirefox || e.options.isOpera) && (o[w] || o[b])) && (r = !0), r) {
                        var l = o[p];
                        (e.options.isFirefox || e.options.isOpera || !l) && (l = o[b] ? o[b] : o[w]), e.embedHTML5Video(t("#html5lightbox-video"), l, e.options.autoplay)
                    } else {
                        var a = o[p];
                        "/" != a.charAt(0) && "http:" != a.substring(0, 5) && "https:" != a.substring(0, 6) && (a = e.options.htmlfolder + a), e.embedFlash(t("#html5lightbox-video"), e.options.jsfolder + "html5boxplayer.swf", "transparent", {width: i, height: n, hidecontrols: e.options.videohidecontrols ? "1" : "0", hideplaybutton: "0", videofile: a, hdfile: "", ishd: "0", defaultvolume: e.options.defaultvideovolume, autoplay: e.options.autoplay ? "1" : "0", errorcss: ".html5box-error" + e.options.errorcss, id: 0})
                    }
                    e.$elem.show(), e.showData()
                })
            }, e.getYoutubeParams = function(o) {
                var t = {};
                if (o.indexOf("?") < 0)
                    return t;
                for (var i = o.substring(o.indexOf("?") + 1).split("&"), e = 0; e < i.length; e++) {
                    var n = i[e].split("=");
                    n && 2 == n.length && "v" != n[0].toLowerCase() && (t[n[0].toLowerCase()] = n[1])
                }
                return t
            }, e.prepareYoutubeHref = function(o) {
                var t = "", i = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/, e = o.match(i);
                e && e[7] && 11 == e[7].length && (t = e[7]);
                var n = "https:" == window.location.protocol ? "https:" : "http:", s = n + "//www.youtube.com/embed/" + t, r = this.getYoutubeParams(o), l = !0;
                for (var a in r)
                    l ? (s += "?", l = !1) : s += "&", s += a + "=" + r[a];
                return s
            }, e.prepareDailymotionHref = function(o) {
                if (o.match(/\:\/\/.*(dai\.ly)/i)) {
                    var t = "https:" == window.location.protocol ? "https:" : "http:", i = o.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                    o = t + "//www.dailymotion.com/embed/video/" + i
                }
                return o
            }, e.showYoutubeVimeo = function(o) {
                var i = o[m] ? o[m] : 960, n = o[g] ? o[g] : 540, s = e.calcElemSize({w: i, h: n}, !0);
                i = s.w, n = s.h, e.resizeLightbox(i, n, !0, function() {
                    e.showTitle(s.w, o[c], o[v]), e.$image.css({width: s.w, height: s.h}).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;'></div>").show();
                    var i = o[p];
                    3 == o[d] && (i = e.prepareYoutubeHref(i)), 9 == o[d] && (i = e.prepareDailymotionHref(i)), e.options.autoplay && (i += i.indexOf("?") < 0 ? "?autoplay=1" : "&autoplay=1"), 3 == o[d] && (i += i.indexOf("?") < 0 ? "?wmode=transparent&rel=0" : "&wmode=transparent&rel=0", e.options.videohidecontrols && (i += "&controls=0&showinfo=0")), t("#html5lightbox-video").html("<iframe width='100%' height='100%' src='" + i + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), e.$elem.show(), e.showData()
                })
            }, e.showPDF = function(o) {
            }, e.showMP3 = function(o) {
            }, e.showDiv = function(o) {
                var i = t(window).width(), n = window.innerHeight ? window.innerHeight : t(window).height(), s = o[m] ? o[m] : i, r = o[g] ? o[g] : n - e.options.navheight, l = e.calcElemSize({w: s, h: r}, !1);
                s = l.w, r = l.h, e.resizeLightbox(s, r, !0, function() {
                    e.$loading.hide(), e.showTitle(l.w, o[c], o[v]), e.$image.css({width: l.w, height: l.h}).html("<div id='html5lightbox-div' style='display:block;width:100%;height:100%;" + (e.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") + "'></div>").show();
                    var i = o[p];
                    t(i).length > 0 ? t("#html5lightbox-div").html(t(i).html()) : t("#html5lightbox-div").html("<div class='html5-error'>The specified div ID does not exist.</div>"), e.$elem.show(), e.showData()
                })
            }, e.showWeb = function(o) {
                var i = t(window).width(), n = window.innerHeight ? window.innerHeight : t(window).height(), s = o[m] ? o[m] : i, r = o[g] ? o[g] : n - e.options.navheight, l = e.calcElemSize({w: s, h: r}, !1);
                s = l.w, r = l.h, e.resizeLightbox(s, r, !0, function() {
                    e.$loading.hide(), e.showTitle(l.w, o[c], o[v]), e.$image.css({width: l.w, height: l.h}).html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;" + (e.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show(), t("#html5lightbox-web").html("<iframe id='html5lightbox-web-iframe' width='100%' height='100%' src='" + o[p] + "' frameborder='0'></iframe>"), e.$elem.show(), e.showData()
                })
            }, e.scrollBox = function() {
                e.options.supportCSSPositionFixed || e.$lightbox.css("top", t(window).scrollTop())
            }, e.resizeWindow = function() {
                if (e.currentElem && e.options.responsive) {
                    var o = t(window).width(), i = window.innerHeight ? window.innerHeight : t(window).height(), n = e.currentElem[m] ? e.currentElem[m] : o, s = e.currentElem[g] ? e.currentElem[g] : i - e.options.navheight, r = 7 == e.currentElem[d] || 10 == e.currentElem[d] ? !1 : !0, l = e.calcElemSize({w: n, h: s}, r), i = window.innerHeight ? window.innerHeight : t(window).height(), a = l.w + 2 * e.options.bordersize, h = l.h + 2 * e.options.bordersize, p = Math.round((i - e.options.navheight) / 2 - h / 2);
                    if ("inside" != e.options.titlestyle && (p -= Math.round(e.options.barheight / 2)), 16 > p && (p = 16), e.$lightboxBox.css({"margin-top": p}), e.$lightboxBox.css({width: a, height: h}), e.$elemWrap.css({width: a, height: h}), e.$image.css({width: l.w, height: l.h}), !(t(".html5-nav").length <= 0)) {
                        t(".html5-nav-list").css({"margin-left": 0});
                        var c = t(".html5-nav-mask"), u = t(".html5-nav-prev"), b = t(".html5-nav-next"), o = t(window).width();
                        e.options.totalwidth <= o ? (c.css({width: e.options.totalwidth + "px"}), u.hide(), b.hide()) : (c.css({width: o - 2 * e.options.navbuttonwidth + "px"}), u.show(), b.show())
                    }
                }
            }, e.calcElemSize = function(o, i) {
                if (!e.options.responsive)
                    return o;
                var n = window.innerHeight ? window.innerHeight : t(window).height();
                n = n ? n : t(document).height();
                var s = n - e.options.navheight - 2 * e.options.bordersize - 2 * e.options.bordermargin;
                "inside" != e.options.titlestyle && (s -= e.options.barheight), o.h > s && (i && (o.w = Math.round(o.w * s / o.h)), o.h = s);
                var r = t(window).width();
                r = r ? r : t(document).width();
                var l = r - 2 * e.options.bordersize - 2 * e.options.bordermargin;
                return o.w > l && (i && (o.h = Math.round(o.h * l / o.w)), o.w = l), o
            }, e.showData = function() {
                e.$text.text().length > 0 && e.$elemData.show(), e.$text.text().length > 0 && "inside" != e.options.titlestyle && e.$lightboxBox.css({height: String(e.$lightboxBox.height() + e.options.barheight) + "px"}), t("#html5-lightbox-overlay", e.$lightbox).css({height: Math.max(t(window).height(), t(document).height())}), t(window).trigger("html5lightbox.lightboxopened")
            }, e.resizeLightbox = function(o, i, n, s) {
                var r = window.innerHeight ? window.innerHeight : t(window).height(), l = n ? e.options.resizespeed : 0, a = o + 2 * e.options.bordersize, h = i + 2 * e.options.bordersize, d = Math.round((r - e.options.navheight) / 2 - h / 2);
                "inside" != e.options.titlestyle && (d -= Math.round(e.options.barheight / 2)), 16 > d && (d = 16), a == e.$elemWrap.width() && h == e.$elemWrap.height() && (l = 0), e.$loading.hide(), e.$watermark.hide(), e.options.arrowloop || (e.options.prevElem >= e.options.curElem && e.$prev.hide(), e.options.nextElem <= e.options.curElem && e.$next.hide()), e.options.nextElem <= e.options.curElem && e.options.onlastitem && window[e.options.onlastitem] && "function" == typeof window[e.options.onlastitem] && window[e.options.onlastitem](e.currentElem), e.options.prevElem >= e.options.curElem && e.options.onfirstitem && window[e.options.onfirstitem] && "function" == typeof window[e.options.onfirstitem] && window[e.options.onfirstitem](e.currentElem), e.$elem.bind("mouseenter mousemove", function() {
                    (e.options.arrowloop && e.options.prevElem >= 0 || !e.options.arrowloop && e.options.prevElem >= 0 && e.options.prevElem < e.options.curElem) && e.$prev.fadeIn(), (e.options.arrowloop && e.options.nextElem >= 0 || !e.options.arrowloop && e.options.nextElem >= 0 && e.options.nextElem > e.options.curElem) && e.$next.fadeIn()
                }), e.$elem.bind("mouseleave", function() {
                    e.$next.fadeOut(), e.$prev.fadeOut()
                }), e.$lightboxBox.css({"margin-top": d}), e.$lightboxBox.css({width: a, height: h}), e.$elemWrap.animate({width: a}, l).animate({height: h}, l, function() {
                    e.$loading.show(), e.$watermark.show(), e.$close.show(), e.$elem.css({"background-color": e.options.bgcolor}), s()
                })
            }, e.reset = function() {
                e.options.stamp && e.$watermark.hide(), e.showing = !1, e.$image.empty(), e.$text.empty(), e.$error.hide(), e.$loading.hide(), e.$image.hide(), e.$elemData.hide(), e.$close.hide(), e.$elem.css({"background-color": ""})
            }, e.resetNavigation = function() {
                e.options.navheight = 0, t(".html5-nav").remove()
            }, e.finish = function() {
                t("#html5-lightbox-video", e.$lightbox).length && t("#html5-lightbox-video", e.$lightbox).attr("src", ""), e.reset(), e.resetNavigation(), e.$lightbox.hide(), e.showObjects(), e.options.oncloselightbox && window[e.options.oncloselightbox] && "function" == typeof window[e.options.oncloselightbox] && window[e.options.oncloselightbox](e.currentElem)
            }, e.pauseSlide = function() {
            }, e.playSlide = function() {
            }, e.gotoSlide = function(o) {
                if (-1 == o) {
                    if (e.options.nextElem < 0)
                        return;
                    e.options.curElem = e.options.nextElem
                } else if (-2 == o) {
                    if (e.options.prevElem < 0)
                        return;
                    e.options.curElem = e.options.prevElem
                } else
                    o >= 0 && (e.options.curElem = o);
                e.calcNextPrevElem(), e.reset(), e.loadCurElem()
            }, e.supportKeyboard = function() {
                t(document).keyup(function(o) {
                    e.showing && (e.options.supportesckey && 27 == o.keyCode ? e.finish() : e.options.supportarrowkeys && (39 == o.keyCode ? e.gotoSlide(-1) : 37 == o.keyCode && e.gotoSlide(-2)))
                })
            }, e.enableSwipe = function() {
                e.$elem.touchSwipe({preventWebBrowser: !0, swipeLeft: function() {
                        e.gotoSlide(-1)
                    }, swipeRight: function() {
                        e.gotoSlide(-2)
                    }})
            }, e.hideObjects = function() {
                t("select, embed, object").css({visibility: "hidden"})
            }, e.showObjects = function() {
                t("select, embed, object").css({visibility: "visible"})
            }, e.embedHTML5Video = function(o, i, n) {
                o.html("<div style='display:block;width:100%;height:100%;position:relative;'><video id='html5-lightbox-video' width='100%' height='100%'" + (n ? " autoplay" : "") + (e.options.nativehtml5controls && !e.options.videohidecontrols ? " controls='controls'" : "") + " src='" + i + "'></div>"), e.options.nativehtml5controls || (t("video", o).data("src", i), t("video", o).lightboxHTML5VideoControls(e.options.skinsfolder, e, e.options.videohidecontrols, !1, e.options.defaultvideovolume))
            }, e.embedFlash = function(o, i, n, s) {
                if (e.options.flashInstalled) {
                    var r = {pluginspage: "http://www.adobe.com/go/getflashplayer", quality: "high", allowFullScreen: "true", allowScriptAccess: "always", type: "application/x-shockwave-flash"};
                    r.width = "100%", r.height = "100%", r.src = i, r.flashVars = t.param(s), r.wmode = n;
                    var l = "";
                    for (var a in r)
                        l += a + "=" + r[a] + " ";
                    o.html("<embed " + l + "/>")
                } else
                    o.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
            }, e.checkType = function(o) {
                return o ? o.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ? 0 : o.match(/[^\.]\.(swf)\s*$/i) ? 1 : o.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i) ? 2 : o.match(/\:\/\/.*(youtube\.com)/i) || o.match(/\:\/\/.*(youtu\.be)/i) ? 3 : o.match(/\:\/\/.*(vimeo\.com)/i) ? 4 : o.match(/\:\/\/.*(dailymotion\.com)/i) || o.match(/\:\/\/.*(dai\.ly)/i) ? 9 : o.match(/[^\.]\.(pdf)\s*$/i) ? 5 : o.match(/[^\.]\.(mp3)\s*$/i) ? 6 : o.match(/[^\.]\.(flv)\s*$/i) ? 8 : o.match(/\#\w+/i) ? 10 : 7 : -1
            }, e.showLightbox = function(o, i, n, s, r, l, a, h, d) {
                e.$next.hide(), e.$prev.hide(), e.reset(), e.$lightbox.show(), e.options.supportCSSPositionFixed || e.$lightbox.css("top", t(window).scrollTop());
                var p = window.innerHeight ? window.innerHeight : t(window).height(), c = e.options.loadingwidth + 2 * e.options.bordersize, u = e.options.loadingheight + 2 * e.options.bordersize, m = Math.round(p / 2 - u / 2);
                "inside" != e.options.titlestyle && (m -= Math.round(e.options.barheight / 2)), 16 > m && (m = 16), e.$lightboxBox.css({"margin-top": m, width: c, height: u}), e.$elemWrap.css({width: c, height: u}), e.loadElem(new Array(o, i, n, null, s, r, l, a, h, d))
            }, e.addItem = function(o, t, i, n, s, r, l, a, h) {
                type = e.checkType(o), e.elemArray.push(new Array(type, o, t, i, n, s, r, l, a, h))
            }, e.showItem = function(o) {
                if (e.elemArray.length <= 0)
                    return!0;
                e.hideObjects();
                for (var i = 0; i < e.elemArray.length && e.elemArray[i][p] != o; i++)
                    ;
                if (i == e.elemArray.length)
                    return!0;
                e.options.curElem = i, e.options.nextElem = -1, e.options.prevElem = -1, e.calcNextPrevElem(), e.$next.hide(), e.$prev.hide(), e.reset(), e.$lightbox.show(), e.options.supportCSSPositionFixed || e.$lightbox.css("top", t(window).scrollTop());
                var n = window.innerHeight ? window.innerHeight : t(window).height(), s = e.options.loadingwidth + 2 * e.options.bordersize, r = e.options.loadingheight + 2 * e.options.bordersize, l = Math.round(n / 2 - r / 2);
                return"inside" != e.options.titlestyle && (l -= Math.round(e.options.barheight / 2)), 16 > l && (l = 16), e.$lightboxBox.css({"margin-top": l, width: s, height: r}), e.$elemWrap.css({width: s, height: r}), e.loadCurElem(), !1
            }, e.init(), e.unbind("click").click(e.clickHandler)
        }
    }(jQuery), function(o) {
        o.fn.touchSwipe = function(t) {
            var i = {preventWebBrowser: !1, swipeLeft: null, swipeRight: null, swipeTop: null, swipeBottom: null};
            return t && o.extend(i, t), this.each(function() {
                function t(o) {
                    var t = o.originalEvent;
                    t.targetTouches.length >= 1 ? (l = t.targetTouches[0].pageX, a = t.targetTouches[0].pageY) : s(o)
                }
                function e(o) {
                    i.preventWebBrowser && o.preventDefault();
                    var t = o.originalEvent;
                    t.targetTouches.length >= 1 ? (h = t.targetTouches[0].pageX, d = t.targetTouches[0].pageY) : s(o)
                }
                function n(o) {
                    h > 0 || d > 0 ? (r(), s(o)) : s(o)
                }
                function s(o) {
                    l = -1, a = -1, h = -1, d = -1
                }
                function r() {
                    h > l ? i.swipeRight && i.swipeRight.call() : i.swipeLeft && i.swipeLeft.call(), d > a ? i.swipeBottom && i.swipeBottom.call() : i.swipeTop && i.swipeTop.call()
                }
                var l = -1, a = -1, h = -1, d = -1;
                try {
                    o(this).bind("touchstart", t), o(this).bind("touchmove", e), o(this).bind("touchend", n), o(this).bind("touchcancel", s)
                } catch (p) {
                }
            })
        }
    }(jQuery), function(o) {
        o.fn.lightboxHTML5VideoControls = function(t, i, e, n, s) {
            var r = "ontouchstart"in window, l = r ? "touchstart" : "mousedown", a = r ? "touchmove" : "mousemove", h = r ? "touchcancel" : "mouseup", d = r ? "touchstart" : "click", p = 32, c = r ? 48 : 36, u = null, m = null, g = !1, b = !1, w = !0, f = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i), v = o(this).data("ishd"), x = o(this).data("hd"), y = o(this).data("src"), k = o(this);
            if (k.get(0).removeAttribute("controls"), f) {
                var E = k.height() - c;
                k.css({height: E})
            }
            var $ = o("<div class='html5boxVideoPlay'></div>");
            f || (k.after($), $.css({position: "absolute", top: "50%", left: "50%", display: "block", cursor: "pointer", width: 64, height: 64, "margin-left": -32, "margin-top": -32, "background-image": "url('" + t + "html5boxplayer_playvideo.png')", "background-position": "center center", "background-repeat": "no-repeat"}).bind(d, function() {
                k.get(0).play()
            }));
            var S = o("<div class='html5boxVideoFullscreenBg'></div>"), z = o("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");
            k.after(z), k.after(S), S.css({display: "none", position: "fixed", left: 0, top: 0, bottom: 0, right: 0, "z-index": 2147483647}), z.css({display: "block", position: "absolute", width: "100%", height: c, left: 0, bottom: 0, right: 0, "max-width": "640px", margin: "0 auto"});
            var A = function() {
                w = !0
            };
            k.bind(d, function() {
                w = !0
            }).hover(function() {
                w = !0
            }, function() {
                w = !1
            }), e || setInterval(function() {
                w && (z.show(), w = !1, clearTimeout(u), u = setTimeout(function() {
                    k.get(0).paused || z.fadeOut()
                }, 5e3))
            }, 250), o(".html5boxVideoControlsBg", z).css({display: "block", position: "absolute", width: "100%", height: "100%", left: 0, top: 0, "background-color": "#000000", opacity: .7, filter: "alpha(opacity=70)"}), o(".html5boxPlayPause", z).css({display: "block", position: "relative", width: p + "px", height: p + "px", margin: Math.floor((c - p) / 2), "float": "left"});
            var I = o(".html5boxPlay", z), T = o(".html5boxPause", z);
            I.css({display: "block", position: "absolute", top: 0, left: 0, width: p + "px", height: p + "px", cursor: "pointer", "background-image": "url('" + t + "html5boxplayer_playpause.png')", "background-position": "top left"}).hover(function() {
                o(this).css({"background-position": "bottom left"})
            }, function() {
                o(this).css({"background-position": "top left"})
            }).bind(d, function() {
                k.get(0).play()
            }), T.css({display: "none", position: "absolute", top: 0, left: 0, width: p + "px", height: p + "px", cursor: "pointer", "background-image": "url('" + t + "html5boxplayer_playpause.png')", "background-position": "top right"}).hover(function() {
                o(this).css({"background-position": "bottom right"})
            }, function() {
                o(this).css({"background-position": "top right"})
            }).bind(d, function() {
                k.get(0).pause()
            });
            var F = o(".html5boxTimeCurrent", z), M = o(".html5boxTimeTotal", z), H = o(".html5boxSeeker", z), P = o(".html5boxSeekerPlay", z), B = o(".html5boxSeekerBuffer", z), O = o(".html5boxSeekerHandler", z);
            if (F.css({display: "block", position: "relative", "float": "left", "line-height": c + "px", "font-weight": "normal", "font-size": "12px", margin: "0 8px", "font-family": "Arial, Helvetica, sans-serif", color: "#fff"}), M.css({display: "block", position: "relative", "float": "right", "line-height": c + "px", "font-weight": "normal", "font-size": "12px", margin: "0 8px", "font-family": "Arial, Helvetica, sans-serif", color: "#fff"}), H.css({display: "block", cursor: "pointer", overflow: "hidden", position: "relative", height: "10px", "background-color": "#222", margin: Math.floor((c - 10) / 2) + "px 4px"}).bind(l, function(o) {
                var t = r ? o.originalEvent.touches[0] : o, i = t.pageX - H.offset().left;
                P.css({width: i}), k.get(0).currentTime = i * k.get(0).duration / H.width(), H.bind(a, function(o) {
                    var t = r ? o.originalEvent.touches[0] : o, i = t.pageX - H.offset().left;
                    P.css({width: i}), k.get(0).currentTime = i * k.get(0).duration / H.width()
                })
            }).bind(h, function() {
                H.unbind(a)
            }), B.css({display: "block", position: "absolute", left: 0, top: 0, height: "100%", "background-color": "#444"}), P.css({display: "block", position: "absolute", left: 0, top: 0, height: "100%", "background-color": "#fcc500"}), !f && (k.get(0).requestFullscreen || k.get(0).webkitRequestFullScreen || k.get(0).mozRequestFullScreen || k.get(0).webkitEnterFullScreen || k.get(0).msRequestFullscreen)) {
                var L = function(o) {
                    o ? (k.get(0).requestFullscreen ? k.get(0).requestFullscreen() : k.get(0).webkitRequestFullScreen ? k.get(0).webkitRequestFullScreen() : k.get(0).mozRequestFullScreen ? k.get(0).mozRequestFullScreen() : k.get(0).webkitEnterFullScreen && k.get(0).webkitEnterFullScreen(), k.get(0).msRequestFullscreen && k.get(0).msRequestFullscreen()) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                }, C = function(t) {
                    z.css({position: t ? "fixed" : "absolute"});
                    var i = D.css("background-position") ? D.css("background-position").split(" ")[1] : D.css("background-position-y");
                    D.css({"background-position": (t ? "right" : "left") + " " + i}), S.css({display: t ? "block" : "none"}), t ? (o(document).bind("mousemove", A), z.css({"z-index": 2147483647})) : (o(document).unbind("mousemove", A), z.css({"z-index": ""}))
                };
                document.addEventListener("fullscreenchange", function() {
                    b = document.fullscreen, C(document.fullscreen)
                }, !1), document.addEventListener("mozfullscreenchange", function() {
                    b = document.mozFullScreen, C(document.mozFullScreen)
                }, !1), document.addEventListener("webkitfullscreenchange", function() {
                    b = document.webkitIsFullScreen, C(document.webkitIsFullScreen)
                }, !1), k.get(0).addEventListener("webkitbeginfullscreen", function() {
                    b = !0
                }, !1), k.get(0).addEventListener("webkitendfullscreen", function() {
                    b = !1
                }, !1), o("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
                var D = o(".html5boxFullscreen", z);
                D.css({display: "block", position: "relative", "float": "right", width: p + "px", height: p + "px", margin: Math.floor((c - p) / 2), cursor: "pointer", "background-image": "url('" + t + "html5boxplayer_fullscreen.png')", "background-position": "left top"}).hover(function() {
                    var t = o(this).css("background-position") ? o(this).css("background-position").split(" ")[0] : o(this).css("background-position-x");
                    o(this).css({"background-position": t + " bottom"})
                }, function() {
                    var t = o(this).css("background-position") ? o(this).css("background-position").split(" ")[0] : o(this).css("background-position-x");
                    o(this).css({"background-position": t + " top"})
                }).bind(d, function() {
                    b = !b, L(b)
                })
            }
            if (x) {
                var j = o(".html5boxHD", z);
                j.css({display: "block", position: "relative", "float": "right", width: p + "px", height: p + "px", margin: Math.floor((c - p) / 2), cursor: "pointer", "background-image": "url('" + t + "html5boxplayer_hd.png')", "background-position": (v ? "right" : "left") + " center"}).bind(d, function() {
                    v = !v, o(this).css({"background-position": (v ? "right" : "left") + " center"}), i.isHd = v;
                    var t = k.get(0).isPaused;
                    k.get(0).setAttribute("src", (v ? x : y) + "#t=" + k.get(0).currentTime), t ? f || k.get(0).pause() : k.get(0).play()
                })
            }
            k.get(0).volume = s;
            var V = 0 == s ? 1 : s, q = k.get(0).volume;
            if (k.get(0).volume = q / 2 + .1, k.get(0).volume === q / 2 + .1) {
                k.get(0).volume = q;
                var _ = o(".html5boxVolume", z), W = o(".html5boxVolumeButton", z), N = o(".html5boxVolumeBar", z), R = o(".html5boxVolumeBarBg", z), Y = o(".html5boxVolumeBarActive", z);
                _.css({display: "block", position: "relative", "float": "right", width: p + "px", height: p + "px", margin: Math.floor((c - p) / 2)}).hover(function() {
                    clearTimeout(m);
                    var o = k.get(0).volume;
                    Y.css({height: Math.round(100 * o) + "%"}), N.show()
                }, function() {
                    clearTimeout(m), m = setTimeout(function() {
                        N.hide()
                    }, 1e3)
                }), W.css({display: "block", position: "absolute", top: 0, left: 0, width: p + "px", height: p + "px", cursor: "pointer", "background-image": "url('" + t + "html5boxplayer_volume.png')", "background-position": "top " + (q > 0 ? "left" : "right")}).hover(function() {
                    var t = o(this).css("background-position") ? o(this).css("background-position").split(" ")[0] : o(this).css("background-position-x");
                    o(this).css({"background-position": t + " bottom"})
                }, function() {
                    var t = o(this).css("background-position") ? o(this).css("background-position").split(" ")[0] : o(this).css("background-position-x");
                    o(this).css({"background-position": t + " top"})
                }).bind(d, function() {
                    var t = k.get(0).volume;
                    t > 0 ? (V = t, t = 0) : t = V;
                    var i = o(this).css("background-position") ? o(this).css("background-position").split(" ")[1] : o(this).css("background-position-y");
                    W.css({"background-position": (t > 0 ? "left" : "right") + " " + i}), k.get(0).volume = t, Y.css({height: Math.round(100 * t) + "%"})
                }), N.css({display: "none", position: "absolute", left: 4, bottom: "100%", width: 24, height: 80, "margin-bottom": Math.floor((c - p) / 2), "background-color": "#000000", opacity: .7, filter: "alpha(opacity=70)"}), R.css({display: "block", position: "relative", width: 10, height: 68, margin: 7, cursor: "pointer", "background-color": "#222"}), Y.css({display: "block", position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", "background-color": "#fcc500"}), R.bind(l, function(o) {
                    var t = r ? o.originalEvent.touches[0] : o, i = 1 - (t.pageY - R.offset().top) / R.height();
                    i = i > 1 ? 1 : 0 > i ? 0 : i, Y.css({height: Math.round(100 * i) + "%"}), W.css({"background-position": "left " + (i > 0 ? "top" : "bottom")}), k.get(0).volume = i, R.bind(a, function(o) {
                        var t = r ? o.originalEvent.touches[0] : o, i = 1 - (t.pageY - R.offset().top) / R.height();
                        i = i > 1 ? 1 : 0 > i ? 0 : i, Y.css({height: Math.round(100 * i) + "%"}), W.css({"background-position": "left " + (i > 0 ? "top" : "bottom")}), k.get(0).volume = i
                    })
                }).bind(h, function() {
                    R.unbind(a)
                })
            }
            var Q = function(o) {
                var t = Math.floor(o / 3600), i = 10 > t ? "0" + t : t, e = Math.floor((o - 60 * t) / 60), n = 10 > e ? "0" + e : e, s = Math.floor(o - (3600 * t + 60 * e)), r = 10 > s ? "0" + s : s, l = n + ":" + r;
                return t > 0 && (l = i + ":" + l), l
            };
            n && $.hide(), e && z.hide();
            var X = function() {
                n || $.hide(), e || (I.hide(), T.show())
            }, G = function() {
                n || $.show(), e || (z.show(), clearTimeout(u), I.show(), T.hide())
            }, K = function() {
                o(window).trigger("html5lightbox.videoended"), n || $.show(), e || (z.show(), clearTimeout(u), I.show(), T.hide())
            }, U = function() {
                var o = k.get(0).currentTime;
                if (o) {
                    F.text(Q(o));
                    var t = k.get(0).duration;
                    if (t && (M.text(Q(t)), !g)) {
                        var i = H.width(), e = Math.round(i * o / t);
                        P.css({width: e}), O.css({left: e})
                    }
                }
            }, Z = function() {
                if (k.get(0).buffered && k.get(0).buffered.length > 0 && !isNaN(k.get(0).buffered.end(0)) && !isNaN(k.get(0).duration)) {
                    var o = H.width();
                    B.css({width: Math.round(o * k.get(0).buffered.end(0) / k.get(0).duration)})
                }
            };
            try {
                k.bind("play", X), k.bind("pause", G), k.bind("ended", K), k.bind("timeupdate", U), k.bind("progress", Z)
            } catch (J) {
            }
        }
    }(jQuery), jQuery(document).ready(function() {
        "undefined" == typeof html5Lightbox && (html5Lightbox = jQuery(".html5lightbox").html5lightbox())
    })
}
!function() {
    for (var o = document.getElementsByTagName("script"), t = "", i = 0; i < o.length; i++)
        o[i].src && o[i].src.match(/html5lightbox\.js/i) && (t = o[i].src.substr(0, o[i].src.lastIndexOf("/") + 1));
    var e = !1;
    if ("undefined" == typeof jQuery)
        e = !0;
    else {
        var n = jQuery.fn.jquery.split(".");
        (n[0] < 1 || 1 == n[0] && n[1] < 6) && (e = !0)
    }
    if (e) {
        var s = document.getElementsByTagName("head")[0], r = document.createElement("script");
        r.setAttribute("type", "text/javascript"), r.readyState ? r.onreadystatechange = function() {
            ("loaded" == r.readyState || "complete" == r.readyState) && (r.onreadystatechange = null, loadHtml5LightBox(t))
        } : r.onload = function() {
            loadHtml5LightBox(t)
        }, r.setAttribute("src", t + "jquery.js"), s.appendChild(r)
    } else
        loadHtml5LightBox(t)
}();