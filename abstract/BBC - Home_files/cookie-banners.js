!function(e){var o={};function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)n.d(t,i,function(o){return e[o]}.bind(null,i));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){e.exports=n(1)},function(e,o,n){"use strict";var t,i,r,c;t=function(){var e=1,o={inject:function(e){var o;return(o=document.createElement("script")).src=e,document.getElementsByTagName("head")[0].appendChild(o),o},jsonp:function(n,t,i){var r,c,s,a=!1;r=(i=i||{}).callbackName?i.callbackName:"jsonpcb"+e++,i.timeout&&(s=setTimeout(function(){a=!0,i.error&&i.error()},i.timeout));for(var u=r.split("."),l=u[u.length-1],d=window,m=0,C=u.length;m<C-1;m++)d=d[u[m]];d[l]=function(e){clearTimeout(s),a||t(e),c&&c.parentNode&&c.parentNode.removeChild(c),d[l]=void 0},c=o.inject(n+(-1===n.indexOf("?")?"?":"&")+"callback="+r)}};return o}.call((i={id:"orb/lib/_script",exports:{},loaded:!1}).exports,n,i.exports,i),i.loaded=!0,void 0!==t||(t=i.exports),r=[n(2)],c=function(e){function o(o){return e._setPolicy("ads",o),e._setPolicy("personalisation",o),e._setPolicy("performance",o),e._setPolicy("necessary",o)}return{isOrbitEnvironment:function(){return"object"==typeof bbccookies&&"function"!=typeof bbccookies._getCookieName},IMPLICIT_FLAG:bbccookies.IMPLICIT_FLAG,EXPLICIT_FLAG:bbccookies.EXPLICIT_FLAG,EXPLICIT_FLAG_EU:bbccookies.EXPLICIT_FLAG_EU,PRIVACY_COOKIE_NAME:bbccookies.PRIVACY_COOKIE_NAME,EXPLICIT_COOKIE_NAME:bbccookies.EXPLICIT_COOKIE_NAME,POLICY_COOKIE_NAME:bbccookies.POLICY_COOKIE_NAME,CURRENT_PRIVACY_POLICY:bbccookies.CURRENT_PRIVACY_POLICY,isEU:bbccookies.isEU,set:function(o,n){var t="https:"===document.location.protocol,i=new Date;if(i.setYear(i.getFullYear()+1),this.isOrbitEnvironment())return e.set(o,n,{domain:e._getCurrentDomain(),path:"/",expires:i,sameSite:"None",secure:t});var r=window.location.host.match(/(.bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i),c=o+"="+n+";domain="+(r&&".bbc.co.uk"===r[1]?".bbc.co.uk":".bbc.com")+";path=/;expires="+i.toUTCString()+";sameSite=None;secure="+t+";";return e.set(c)},get:function(o){return this.isOrbitEnvironment()?e.get(o):e.getCrumb(o)},copyPolicyCookiesCrossDomain:function(o){if(this.isOrbitEnvironment())return e.copyPolicyCookiesCrossDomain(o);o()},setDefaultCookiesSingleDomain:function(){return this.isOrbitEnvironment()?e.setDefaultCookiesSingleDomain():o(!1)},setDefaultCookiesCrossDomain:function(){return this.isOrbitEnvironment()?e.setDefaultCookiesCrossDomain():o(!1)},setExplicitCookiesCrossDomain:function(o){return!!this.isOrbitEnvironment()&&e.setCookieExplicitCrossDomain(o)},optInToAllCookiesCrossDomain:function(){if(this.isOrbitEnvironment()){return e.setCookiePolicyCrossDomain({ads:!0,personalisation:!0,performance:!0,necessary:!0})}return o(!0)},isCookiePolicySet:function(){return this.isOrbitEnvironment()?e.isCookiePolicySet():null!==this.get("ckns_policy")},setImplicitPolicy:e.setImplicitPolicy}}.apply(o,r),Promise.resolve().then(function(){(function(e,o){var n="",t="full-screen full-screen-bottom full-screen-overlay",i="full-screen",r=["usingthebbc."];function c(e){var n=o.get(o.EXPLICIT_COOKIE_NAME);if(null===n)return!1;if("gb"===e||"row"===e)return n>=o.EXPLICIT_FLAG;if("eu"===e)return n===o.EXPLICIT_FLAG_EU;throw new Error("region not recognised: "+e)}function s(e,o,t){o.style.display="none",t.style.display="none",e.className=n}function a(e,o,s,a,u){if(!c(a)){var l="eu"===a,d=function(e){for(var o=r,n=0;n<o.length;n++)if(e.search(o[n])>-1)return i;return t}(u);o.style.display="none",s.style.display="block",e.className=l?d:n,window.bbcpage.trackRegion(s,{linkLocation:"nav-banner-cookies"}),window.bbcuser.logEvent("view","nav-banner-cookies")}}function u(e,t){var i=document.getElementById("cookiePrompt"),r=document.getElementById("bbcprivacy"),c=document.getElementById("bbccookies");document.getElementById("bbcprivacy-continue-button").addEventListener("click",function(){s(i,r,c),a(i,r,c,e,t),window.bbcuser.logEvent("click-cta","nav-banner-privacy")}),document.getElementById("bbccookies-continue-button").addEventListener("click",function(){s(i,r,c),window.bbcuser.logEvent("click-continue","nav-banner-cookies"),o.optInToAllCookiesCrossDomain(),"gb"===e&&(o.set(o.EXPLICIT_COOKIE_NAME,o.EXPLICIT_FLAG),o.setExplicitCookiesCrossDomain(o.EXPLICIT_FLAG)),"eu"===e&&(o.set(o.EXPLICIT_COOKIE_NAME,o.EXPLICIT_FLAG_EU),o.setExplicitCookiesCrossDomain(o.EXPLICIT_FLAG_EU))});var u,l=document.getElementById("bbccookies-settings").getElementsByTagName("a")[0];l.addEventListener("click",(u=!1,function(n){u||(o.copyPolicyCookiesCrossDomain(function(){u=!0,l.click()}),"gb"===e&&(o.set(o.EXPLICIT_COOKIE_NAME,o.EXPLICIT_FLAG),o.setExplicitCookiesCrossDomain(o.EXPLICIT_FLAG)),"eu"===e&&(o.set(o.EXPLICIT_COOKIE_NAME,o.EXPLICIT_FLAG_EU),o.setExplicitCookiesCrossDomain(o.EXPLICIT_FLAG_EU)),n.preventDefault())}));var d=o.get(o.PRIVACY_COOKIE_NAME)===o.CURRENT_PRIVACY_POLICY;a(i,r,c,e,t),d?a(i,r,c,e,t):(!function(e,o,t){o.style.display="block",t.style.display="none",e.className=n,window.bbcpage.trackRegion(o,{linkLocation:"nav-banner-privacy"}),window.bbcuser.logEvent("view","nav-banner-privacy")}(i,r,c),o.set(o.PRIVACY_COOKIE_NAME,o.CURRENT_PRIVACY_POLICY))}function l(o,n,t,i){var r=function(e){var o="en";return"string"==typeof e&&e.length>=2&&(o=e.trim().substring(0,2).toLowerCase()),-1!==["en","cy","gd","ga"].indexOf(o)?o:"en"}(o),c=window.COOKIES_STATIC_HOST+"bbccookies.min.css",s=window.COOKIES_STATIC_HOST+r+".min.js";window.bbcpage.loadCSS(c).then(function(){e.jsonp(s,function(e){var o=e.replace(/<<bbcUrlPrefix>>/g,function(){if(window.orb.bbcUrlPrefix){var e=window.orb.bbcUrlPrefix+"bbc.com",o=window.location.host.match(/(bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i);return o&&"bbc.co.uk"===o[1]&&(e=e.replace("bbc.com","bbc.co.uk")),e}return""}());document.getElementById("cookiePrompt").innerHTML=o;for(var r=document.querySelectorAll("[data-region-filter]"),c=0;c<r.length;c++){var s=r[c];s.getAttribute("data-region-filter")!==t&&(s.style.display="none")}n(t,i)},{callbackName:"cookiePrompt"})})}Promise.all([window.bbcuser.isUKCombined(),window.bbcuser.getCountry(),window.bbcpage.getLanguage(),window.bbcpage.getName()]).then(function(e){var n,t=e[0],i=e[1],r=e[2],s=e[3],a=o.isEU(i);(c(n=t?"gb":a?"eu":"row")||(o.set(o.EXPLICIT_COOKIE_NAME,o.IMPLICIT_FLAG),o.setImplicitPolicy(n)),"gb"===n||"eu"===n)&&(o.get(o.PRIVACY_COOKIE_NAME)===o.CURRENT_PRIVACY_POLICY&&c(n)||l(r,u,n,s))}).catch(function(){l("en",u,"gb","")})}).apply(null,[t,c])}).catch(n.oe)},function(e,o,n){var t;!function(){var i={},r="https:"===document.location.protocol;i.IMPLICIT_FLAG="0",i.EXPLICIT_FLAG="1",i.EXPLICIT_FLAG_EU="2",i.POLICY_REFRESH_DATE_MILLIS=new Date(2015,4,21,0,0,0,0).getTime(),i.PRIVACY_COOKIE_NAME="ckns_privacy",i.EXPLICIT_COOKIE_NAME="ckns_explicit",i.POLICY_COOKIE_NAME="ckns_policy",i.CURRENT_PRIVACY_POLICY="july2019";var c,s="ckns_policy_exp",a=["AT","AX","BE","BG","BL","CY","CZ","DE","DK","EE","ES","EU","FI","FR","GB","GF","GG","GI","GP","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MF","MT","MQ","NL","NO","PL","PM","PT","RE","RO","SE","SI","SK","YT"],u={ads:!1,personalisation:!1,performance:!1,necessary:!0},l={},d={personalisation:"ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2",performance:"ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|RT",ads:"ckad_.+|rsi_segs|c",necessary:"optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie|i00"};function m(e,o){o&&o(new Error(e))}function C(e,o){if(void 0===e)return null;var n={};n.expires=new Date(0),o&&(n.domain=o.domain,n.path=o.path),document.cookie=y(e,"removed",n)}function E(e){var o=window.location.hostname.split(".");o.length;for(C(e),p(e);o.length&&-1==="|co.uk|com|".indexOf("|"+o.join(".")+"|");){if(o.length){var n=o.join(".");C(e,{domain:n}),p(e,n)}o.shift()}}function p(e,o){var n=window.location.pathname.split("/");for(C(e,o);n.length;){var t=n.join("/");""===t&&(t="/"),C(e,{domain:o,path:t}),C(e,{domain:"."+o,path:t}),n.pop()}}function f(){var e=new RegExp("(?:^|; ?)"+i.POLICY_COOKIE_NAME+"=(\\d)(\\d)(\\d)($|;)"),o=document.cookie.match(e);return o?{ads:!!+o[1],personalisation:!!+o[2],performance:!!+o[3],necessary:!0}:u}function b(){var e=new Date;return e.setYear(e.getFullYear()+1),e}function _(e,o,n){var t=b(),c=""+(e.ads?1:0)+(e.personalisation?1:0)+(e.performance?1:0),a=i._getCurrentDomain();i.set(i.POLICY_COOKIE_NAME,c,{domain:a,path:"/",expires:t,crossDomainEnabled:o,sameSite:"None",secure:r},n);var u=new Date(t.getTime());return u.setMonth(u.getMonth()+1),i.set(s,t.getTime(),{domain:a,path:"/",expires:u,sameSite:"None",secure:r}),e}function I(e,o,n){var t=b(),c=""+e,s=i._getCurrentDomain();return i.set(i.EXPLICIT_COOKIE_NAME,c,{domain:s,path:"/",expires:t,crossDomainEnabled:o,sameSite:"None",secure:r},n),e}function v(e){return e=(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29")}function y(e,o,n){n&&n.domain&&n.domain;var t=e+"="+(o=(o+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return t+=(n=n||{}).path?";path="+n.path:"",t+=n.domain?";domain="+n.domain:"",t+=n.expires?";expires="+n.expires.toUTCString():"",t+=";sameSite="+n.sameSite||!1,t+=n.secure||r?";secure":""}
/*!
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */i.isEU=function(e){return!!e&&-1!==a.indexOf(e.toUpperCase())},i.cookieOvenRequest=function(e,o,n){try{e.open("GET",o,!0),e.send()}catch(e){n&&n(e)}},i.cookieOvenClient=function(e,o,n,t){if("withCredentials"in new XMLHttpRequest){var r=[i.POLICY_COOKIE_NAME,i.EXPLICIT_COOKIE_NAME];try{if(!n)throw new Error("Cannot make request to cross domain cookie service when domain is not set.");if(r.indexOf(e)<=-1)throw new Error("Cookie name is not in the whitelist accepted by the cross domain cookie service.");var c={com:"co.uk","co.uk":"com"}[n.match(/(co.uk|com)/)[0]],s=function(e){var o=new XMLHttpRequest;return o.withCredentials=!0,o.onload=function(){e&&e(null,o.status)},o.onerror=function(n){m("Request to cross domain cookie service encountered an error with code"+o.status+". "+n,e)},o.onabort=function(){m("Request to cross domain cookie service was aborted.",e)},o.ontimeout=function(){m("Request to cross domain cookie service timed out.",e)},o}(t),a=function(e,o,n){return window.orb.partialCookieOvenUrl+"."+e+"/"+o+"/"+n}(c,e,o);i.cookieOvenRequest(s,a,t)}catch(e){t&&t(e)}}else t(new Error("Cannot make request to cross domain cookie service as this browser does not support XmlHttpRequest with credentials."))},i.set=function(e,o,n,t){var r,c;if(void 0!==o){c=y(r=v(e),o,n);var s=n&&n.crossDomainEnabled;i.isAllowed(r)&&s&&i.cookieOvenClient(e,o,n.domain,t)}else r=function(e){var o=(""+e).match(/^([^=]+)(?==)/);return o&&o.length?o[0]:""}(e),c=e;i.isAllowed(r)&&(document.cookie=c)},i.isAllowed=function(e){return!(e&&e.match&&e.match(/^ckns_cookietest[0-9]*/))&&function(e){var o=JSON.stringify(e);if(void 0!==l[o])return l[o];var n="";for(var t in e)e.hasOwnProperty(t)&&d[t]&&!0===e[t]&&(n+=(n?"|":"")+d[t]);return l[o]=new RegExp("^("+(n||".*")+")$","i"),l[o]}(i.readPolicy()).test(e)},i.readPolicy=function(e){var o=f();return e?o[e]:o},i.analyticsPolicyString=function(){var e=f();return"ad"+ +e.ads+"ps"+ +e.personalisation+"pf"+ +e.performance},i.get=function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:document.cookie},i.isCookiePolicySet=function(){return null!==i.get(i.POLICY_COOKIE_NAME)},i.setImplicitPolicy=function(e){"gb"===e?_({ads:!1,personalisation:!1,performance:!1,necessary:!0},!1):"eu"===e?_({ads:!1,personalisation:!1,performance:!1,necessary:!0},!1):"row"===e&&_({ads:!0,personalisation:!0,performance:!0,necessary:!0},!1)},i.setDefaultCookiesSingleDomain=function(){_(u,!1)},i.setDefaultCookiesCrossDomain=function(){_(u,!0)},i.copyPolicyCookiesCrossDomain=function(e){_(i.readPolicy(),!0,e)},i.setCookiePolicyCrossDomain=function(e){_(e,!0)},i._setPolicy=function(e,o,n,t){var r=i.readPolicy();r[e]=!!o,_(r,!n,function(){var e=i.get(i.EXPLICIT_COOKIE_NAME);null===e||e===i.IMPLICIT_FLAG?Promise.all([window.bbcuser.isUKCombined(),window.bbcuser.getCountry()]).then(function(e){var o=e[0],n=e[1],r=i.isEU(n);o||!r?I(i.EXPLICIT_FLAG,!0,t):r&&I(i.EXPLICIT_FLAG_EU,!0,t)}):t&&t()})},i.isCookieExplicitSet=function(){return null!==i.get(i.EXPLICIT_COOKIE_NAME)},i.copyExplicitCookiesCrossDomain=function(e){I(i.get(i.EXPLICIT_COOKIE_NAME),!0,e)},i.setCookieExplicitCrossDomain=function(e){I(e,!0)},i.cookiesEnabled=function(){try{document.cookie="cookietest=1";var e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}},i.delete=function(e,o){C(e=v(e),o)},i.del=i.delete,i._crunch=function(){E("");for(var e=document.cookie.split(";"),o=0;o<e.length;o++){var n=e[o].split("=")[0].trim();this.isAllowed(n)||E(n)}},i._getCurrentDomain=function(){try{return window.location.hostname.toLowerCase().match(/.*(bbc\.co\.uk|bbc\.com)\/*/)[1]}catch(e){return}},i._getPolicy=i.readPolicy,String.prototype.trim||(c=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(c,"")}),function(e,o){var n=!1,t=!0,i=e.document,r=i.documentElement,c=i.addEventListener,s=c?"addEventListener":"attachEvent",a=c?"removeEventListener":"detachEvent",u=c?"":"on",l=function(t){"readystatechange"===t.type&&"complete"!=i.readyState||(("load"===t.type?e:i)[a](u+t.type,l,!1),!n&&(n=!0)&&o.call(e,t.type||t))},d=function(){try{r.doScroll("left")}catch(e){return void setTimeout(d,50)}l("poll")};if("complete"===i.readyState)o.call(e,"lazy");else{if(!c&&r.doScroll){try{t=!e.frameElement}catch(e){}t&&d()}i[s](u+"DOMContentLoaded",l,!1),i[s](u+"readystatechange",l,!1),e[s](u+"load",l,!1)}}(window,function(){i._crunch()}),window.addEventListener?window.addEventListener("beforeunload",function(){i._crunch()},!1):window.attachEvent?window.attachEvent("onbeforeunload",function(){i._crunch()}):window.onbeforeunload=function(){i._crunch()},"object"==typeof window.bbccookies&&"function"==typeof window.bbccookies._getCookieName||(window.bbccookies=i,void 0===(t=function(){return i}.call(o,n,o,e))||(e.exports=t))}()}]);