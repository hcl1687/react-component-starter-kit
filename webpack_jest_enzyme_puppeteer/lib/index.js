!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["React"],e):"object"==typeof exports?exports.SimpleComp=e(require("react")):t.SimpleComp=e(t.React)}(window,function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=60)}([function(e,r){e.exports=t},function(t,e,r){var n=r(10)(Object,"create");t.exports=n},function(t,e,r){var n=r(46);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(52);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(9),o=r(25),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==u}},function(t,e,r){var n=r(7).Symbol;t.exports=n},function(t,e,r){var n=r(21),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},function(t,e,r){t.exports=r(16)()},function(t,e,r){var n=r(6),o=r(23),u=r(24),a="[object Null]",i="[object Undefined]",c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:a:c&&c in Object(t)?o(t):u(t)}},function(t,e,r){var n=r(33),o=r(38);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t){t.exports=JSON.parse('{"title":"Title"}')},function(t){t.exports=JSON.parse('{"title":"标题"}')},function(t,e,r){var n=r(18);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var u=typeof n;if("string"===u||"number"===u)t.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&t.push(a)}else if("object"===u)for(var i in n)r.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},function(t,e,r){"use strict";var n=r(17);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,u,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){var n=r(19),o=r(59);t.exports=function(t,e){for(var r=0,u=(e=n(e,t)).length;null!=t&&r<u;)t=t[o(e[r++])];return r&&r==u?t:void 0}},function(t,e,r){var n=r(4),o=r(20),u=r(26),a=r(56);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:u(a(t))}},function(t,e,r){var n=r(4),o=r(5),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||a.test(t)||!u.test(t)||null!=e&&t in Object(e)}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(22))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(6),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var e=u.call(t,i),r=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[i]=r:delete t[i]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(27),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,a=n(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,r,n,o){e.push(n?o.replace(u,"$1"):r||t)}),e});t.exports=a},function(t,e,r){var n=r(28),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},function(t,e,r){var n=r(29),o="Expected a function";function u(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return r.cache=u.set(o,a)||u,a};return r.cache=new(u.Cache||n),r}u.Cache=n,t.exports=u},function(t,e,r){var n=r(30),o=r(51),u=r(53),a=r(54),i=r(55);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=a,c.prototype.set=i,t.exports=c},function(t,e,r){var n=r(31),o=r(43),u=r(50);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(u||o),string:new n}}},function(t,e,r){var n=r(32),o=r(39),u=r(40),a=r(41),i=r(42);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=a,c.prototype.set=i,t.exports=c},function(t,e,r){var n=r(1);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e,r){var n=r(34),o=r(35),u=r(11),a=r(37),i=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(n(t)?p:i).test(a(t))}},function(t,e,r){var n=r(9),o=r(11),u="[object AsyncFunction]",a="[object Function]",i="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==a||e==i||e==u||e==c}},function(t,e,r){var n,o=r(36),u=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!u&&u in t}},function(t,e,r){var n=r(7)["__core-js_shared__"];t.exports=n},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(1),o="__lodash_hash_undefined__",u=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return u.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(1),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(1),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(44),o=r(45),u=r(47),a=r(48),i=r(49);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=a,c.prototype.set=i,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(2),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(2);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(2);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(2);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(10)(r(7),"Map");t.exports=n},function(t,e,r){var n=r(3);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(3);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(3);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(3);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(57);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(6),o=r(58),u=r(4),a=r(5),i=1/0,c=n?n.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return o(e,t)+"";if(a(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-i?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(5),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},function(t,e,r){"use strict";r.r(e);r(61);var n,o=r(0),u=r.n(o),a=r(8),i=r.n(a);function c(t){return t.type===n.literal}function s(t){return t.type===n.argument}function l(t){return t.type===n.number}function f(t){return t.type===n.date}function p(t){return t.type===n.time}function h(t){return t.type===n.select}function v(t){return t.type===n.plural}!function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural"}(n||(n={}));var y,d=(y=function(t,e){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),m=function(){return(m=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=function(t){function e(r,n,o,u){var a=t.call(this)||this;return a.message=r,a.expected=n,a.found=o,a.location=u,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return d(e,t),e.buildMessage=function(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function u(t){switch(t.type){case"literal":return'"'+n(t.text)+'"';case"class":var e=t.parts.map(function(t){return Array.isArray(t)?o(t[0])+"-"+o(t[1]):o(t)});return"["+(t.inverted?"^":"")+e+"]";case"any":return"any character";case"end":return"end of input";case"other":return t.description}}return"Expected "+function(t){var e,r,n=t.map(u);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+((a=e)?'"'+n(a)+'"':"end of input")+" found.";var a},e}(Error);var b=function(t,e){e=void 0!==e?e:{};var r,o={},u={start:It},a=It,i=function(t){return t.join("")},c=function(t){return m({type:n.literal,value:t},ee())},s=kt("argumentElement"),l="{",f=Pt("{",!1),p="}",h=Pt("}",!1),v=function(t){return m({type:n.argument,value:t},ee())},y=kt("numberSkeletonId"),d=/^['\/{}]/,b=St(["'","/","{","}"],!1,!1),_={type:"any"},x=kt("numberSkeletonTokenOption"),O="/",A=Pt("/",!1),w=function(t){return t},j=kt("numberSkeletonToken"),C=function(t,e){return{stem:t,options:e}},T=function(t){return m({type:0,tokens:t},ee())},E="::",F=Pt("::",!1),P=function(t){return t},S=function(t){return t.replace(/\s*$/,"")},k=",",R=Pt(",",!1),N="number",M=Pt("number",!1),L=function(t,e,r){return m({type:"number"===e?n.number:"date"===e?n.date:n.time,style:r&&r[2],value:t},ee())},I=function(t){return m({type:1,pattern:t},ee())},D="date",z=Pt("date",!1),B="time",$=Pt("time",!1),q="plural",H=Pt("plural",!1),U="selectordinal",X=Pt("selectordinal",!1),J="offset:",W=Pt("offset:",!1),Z=function(t,e,r,o){return m({type:n.plural,pluralType:"plural"===e?"cardinal":"ordinal",value:t,offset:r?r[2]:0,options:o.reduce(function(t,e){var r=e.id,n=e.value,o=e.location;return t[r]={value:n,location:o},t},{})},ee())},G="select",V=Pt("select",!1),Y=function(t,e){return m({type:n.select,value:t,options:e.reduce(function(t,e){var r=e.id,n=e.value,o=e.location;return t[r]={value:n,location:o},t},{})},ee())},K="=",Q=Pt("=",!1),tt=function(t,e){return m({id:t,value:e},ee())},et=function(t,e){return m({id:t,value:e},ee())},rt=/^[\t-\r \x85\u200E\u200F\u2028\u2029]/,nt=St([["\t","\r"]," ","","‎","‏","\u2028","\u2029"],!1,!1),ot=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,ut=St([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),at=kt("optional whitespace"),it=/^[0-9]/,ct=St([["0","9"]],!1,!1),st=function(t){return parseInt(t.join(""),10)},lt=(kt("apostrophe"),"'"),ft=Pt("'",!1),pt=kt("double apostrophes"),ht="''",vt=Pt("''",!1),yt=function(){return"'"},dt=/^[{}]/,mt=St(["{","}"],!1,!1),gt=/^[^']/,bt=St(["'"],!0,!1),_t=function(t,e){return t+e.replace("''","'")},xt=/^[^{}]/,Ot=St(["{","}"],!0,!1),At=kt("keyword"),wt=0,jt=0,Ct=[{line:1,column:1}],Tt=0,Et=[],Ft=0;if(void 0!==e.startRule){if(!(e.startRule in u))throw new Error("Can't start parsing from rule \""+e.startRule+'".');a=u[e.startRule]}function Pt(t,e){return{type:"literal",text:t,ignoreCase:e}}function St(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function kt(t){return{type:"other",description:t}}function Rt(e){var r,n=Ct[e];if(n)return n;for(r=e-1;!Ct[r];)r--;for(n={line:(n=Ct[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Ct[e]=n,n}function Nt(t,e){var r=Rt(t),n=Rt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function Mt(t){wt<Tt||(wt>Tt&&(Tt=wt,Et=[]),Et.push(t))}function Lt(t,e,r){return new g(g.buildMessage(t,e),t,e,r)}function It(){return Dt()}function Dt(){var t,e;for(t=[],e=zt();e!==o;)t.push(e),e=zt();return t}function zt(){var e;return(e=function(){var t,e;return t=wt,(e=Bt())!==o&&(jt=t,e=c(e)),t=e}())===o&&(e=function(){var e,r,n,u;return Ft++,e=wt,123===t.charCodeAt(wt)?(r=l,wt++):(r=o,0===Ft&&Mt(f)),r!==o&&Gt()!==o&&(n=$t())!==o&&Gt()!==o?(125===t.charCodeAt(wt)?(u=p,wt++):(u=o,0===Ft&&Mt(h)),u!==o?(jt=e,r=v(n),e=r):(wt=e,e=o)):(wt=e,e=o),Ft--,e===o&&(r=o,0===Ft&&Mt(s)),e}())===o&&(e=function(){var e;return(e=function(){var e,r,n,u,a,i,c,s,v;return e=wt,123===t.charCodeAt(wt)?(r=l,wt++):(r=o,0===Ft&&Mt(f)),r!==o&&Gt()!==o&&(n=$t())!==o&&Gt()!==o?(44===t.charCodeAt(wt)?(u=k,wt++):(u=o,0===Ft&&Mt(R)),u!==o&&Gt()!==o?(t.substr(wt,6)===N?(a=N,wt+=6):(a=o,0===Ft&&Mt(M)),a!==o&&Gt()!==o?(i=wt,44===t.charCodeAt(wt)?(c=k,wt++):(c=o,0===Ft&&Mt(R)),c!==o&&(s=Gt())!==o&&(v=function(){var e,r,n;return e=wt,t.substr(wt,2)===E?(r=E,wt+=2):(r=o,0===Ft&&Mt(F)),r!==o&&(n=function(){var t,e,r;if(t=wt,e=[],(r=Ut())!==o)for(;r!==o;)e.push(r),r=Ut();else e=o;return e!==o&&(jt=t,e=T(e)),t=e}())!==o?(jt=e,r=P(n),e=r):(wt=e,e=o),e===o&&(e=wt,(r=Bt())!==o&&(jt=e,r=S(r)),e=r),e}())!==o?i=c=[c,s,v]:(wt=i,i=o),i===o&&(i=null),i!==o&&(c=Gt())!==o?(125===t.charCodeAt(wt)?(s=p,wt++):(s=o,0===Ft&&Mt(h)),s!==o?(jt=e,r=L(n,a,i),e=r):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o),e}())===o&&(e=function(){var e,r,n,u,a,i,c,s,v;return e=wt,123===t.charCodeAt(wt)?(r=l,wt++):(r=o,0===Ft&&Mt(f)),r!==o&&Gt()!==o&&(n=$t())!==o&&Gt()!==o?(44===t.charCodeAt(wt)?(u=k,wt++):(u=o,0===Ft&&Mt(R)),u!==o&&Gt()!==o?(t.substr(wt,4)===D?(a=D,wt+=4):(a=o,0===Ft&&Mt(z)),a===o&&(t.substr(wt,4)===B?(a=B,wt+=4):(a=o,0===Ft&&Mt($))),a!==o&&Gt()!==o?(i=wt,44===t.charCodeAt(wt)?(c=k,wt++):(c=o,0===Ft&&Mt(R)),c!==o&&(s=Gt())!==o&&(v=function(){var e,r,n;return e=wt,t.substr(wt,2)===E?(r=E,wt+=2):(r=o,0===Ft&&Mt(F)),r!==o&&(n=function(){var t,e;return t=wt,(e=Bt())!==o&&(jt=t,e=I(e)),t=e}())!==o?(jt=e,r=P(n),e=r):(wt=e,e=o),e===o&&(e=wt,(r=Bt())!==o&&(jt=e,r=S(r)),e=r),e}())!==o?i=c=[c,s,v]:(wt=i,i=o),i===o&&(i=null),i!==o&&(c=Gt())!==o?(125===t.charCodeAt(wt)?(s=p,wt++):(s=o,0===Ft&&Mt(h)),s!==o?(jt=e,r=L(n,a,i),e=r):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o),e}()),e}())===o&&(e=function(){var e,r,n,u,a,i,c,s,v,y,d;if(e=wt,123===t.charCodeAt(wt)?(r=l,wt++):(r=o,0===Ft&&Mt(f)),r!==o)if(Gt()!==o)if((n=$t())!==o)if(Gt()!==o)if(44===t.charCodeAt(wt)?(u=k,wt++):(u=o,0===Ft&&Mt(R)),u!==o)if(Gt()!==o)if(t.substr(wt,6)===q?(a=q,wt+=6):(a=o,0===Ft&&Mt(H)),a===o&&(t.substr(wt,13)===U?(a=U,wt+=13):(a=o,0===Ft&&Mt(X))),a!==o)if(Gt()!==o)if(44===t.charCodeAt(wt)?(i=k,wt++):(i=o,0===Ft&&Mt(R)),i!==o)if(Gt()!==o)if(c=wt,t.substr(wt,7)===J?(s=J,wt+=7):(s=o,0===Ft&&Mt(W)),s!==o&&(v=Gt())!==o&&(y=Vt())!==o?c=s=[s,v,y]:(wt=c,c=o),c===o&&(c=null),c!==o)if((s=Gt())!==o){if(v=[],(y=Jt())!==o)for(;y!==o;)v.push(y),y=Jt();else v=o;v!==o&&(y=Gt())!==o?(125===t.charCodeAt(wt)?(d=p,wt++):(d=o,0===Ft&&Mt(h)),d!==o?(jt=e,r=Z(n,a,c,v),e=r):(wt=e,e=o)):(wt=e,e=o)}else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;return e}())===o&&(e=function(){var e,r,n,u,a,i,c,s,v;if(e=wt,123===t.charCodeAt(wt)?(r=l,wt++):(r=o,0===Ft&&Mt(f)),r!==o)if(Gt()!==o)if((n=$t())!==o)if(Gt()!==o)if(44===t.charCodeAt(wt)?(u=k,wt++):(u=o,0===Ft&&Mt(R)),u!==o)if(Gt()!==o)if(t.substr(wt,6)===G?(a=G,wt+=6):(a=o,0===Ft&&Mt(V)),a!==o)if(Gt()!==o)if(44===t.charCodeAt(wt)?(i=k,wt++):(i=o,0===Ft&&Mt(R)),i!==o)if(Gt()!==o){if(c=[],(s=Xt())!==o)for(;s!==o;)c.push(s),s=Xt();else c=o;c!==o&&(s=Gt())!==o?(125===t.charCodeAt(wt)?(v=p,wt++):(v=o,0===Ft&&Mt(h)),v!==o?(jt=e,r=Y(n,c),e=r):(wt=e,e=o)):(wt=e,e=o)}else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;else wt=e,e=o;return e}()),e}function Bt(){var t,e,r;if(t=wt,e=[],(r=Yt())===o&&(r=Kt())===o&&(r=Qt()),r!==o)for(;r!==o;)e.push(r),(r=Yt())===o&&(r=Kt())===o&&(r=Qt());else e=o;return e!==o&&(jt=t,e=i(e)),t=e}function $t(){var e,r;return e=wt,(r=Vt())===o&&(r=te()),e=r!==o?t.substring(e,wt):r}function qt(){var e,r,n,u,a;if(Ft++,e=wt,r=[],n=wt,u=wt,Ft++,(a=Wt())===o&&(d.test(t.charAt(wt))?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(b))),Ft--,a===o?u=void 0:(wt=u,u=o),u!==o?(t.length>wt?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(_)),a!==o?n=u=[u,a]:(wt=n,n=o)):(wt=n,n=o),n!==o)for(;n!==o;)r.push(n),n=wt,u=wt,Ft++,(a=Wt())===o&&(d.test(t.charAt(wt))?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(b))),Ft--,a===o?u=void 0:(wt=u,u=o),u!==o?(t.length>wt?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(_)),a!==o?n=u=[u,a]:(wt=n,n=o)):(wt=n,n=o);else r=o;return e=r!==o?t.substring(e,wt):r,Ft--,e===o&&(r=o,0===Ft&&Mt(y)),e}function Ht(){var e,r,n;return Ft++,e=wt,47===t.charCodeAt(wt)?(r=O,wt++):(r=o,0===Ft&&Mt(A)),r!==o&&(n=qt())!==o?(jt=e,e=r=w(n)):(wt=e,e=o),Ft--,e===o&&(r=o,0===Ft&&Mt(x)),e}function Ut(){var t,e,r,n;if(Ft++,t=wt,Gt()!==o)if((e=qt())!==o){for(r=[],n=Ht();n!==o;)r.push(n),n=Ht();r!==o?(jt=t,t=C(e,r)):(wt=t,t=o)}else wt=t,t=o;else wt=t,t=o;return Ft--,t===o&&0===Ft&&Mt(j),t}function Xt(){var e,r,n,u,a;return e=wt,Gt()!==o&&(r=te())!==o&&Gt()!==o?(123===t.charCodeAt(wt)?(n=l,wt++):(n=o,0===Ft&&Mt(f)),n!==o&&(u=Dt())!==o?(125===t.charCodeAt(wt)?(a=p,wt++):(a=o,0===Ft&&Mt(h)),a!==o?(jt=e,e=tt(r,u)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o),e}function Jt(){var e,r,n,u,a;return e=wt,Gt()!==o&&(r=function(){var e,r,n,u;return e=wt,r=wt,61===t.charCodeAt(wt)?(n=K,wt++):(n=o,0===Ft&&Mt(Q)),n!==o&&(u=Vt())!==o?r=n=[n,u]:(wt=r,r=o),(e=r!==o?t.substring(e,wt):r)===o&&(e=te()),e}())!==o&&Gt()!==o?(123===t.charCodeAt(wt)?(n=l,wt++):(n=o,0===Ft&&Mt(f)),n!==o&&(u=Dt())!==o?(125===t.charCodeAt(wt)?(a=p,wt++):(a=o,0===Ft&&Mt(h)),a!==o?(jt=e,e=et(r,u)):(wt=e,e=o)):(wt=e,e=o)):(wt=e,e=o),e}function Wt(){var e;return rt.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=o,0===Ft&&Mt(nt)),e}function Zt(){var e;return ot.test(t.charAt(wt))?(e=t.charAt(wt),wt++):(e=o,0===Ft&&Mt(ut)),e}function Gt(){var e,r,n;for(Ft++,e=wt,r=[],n=Wt();n!==o;)r.push(n),n=Wt();return e=r!==o?t.substring(e,wt):r,Ft--,e===o&&(r=o,0===Ft&&Mt(at)),e}function Vt(){var e,r,n;if(e=wt,r=[],it.test(t.charAt(wt))?(n=t.charAt(wt),wt++):(n=o,0===Ft&&Mt(ct)),n!==o)for(;n!==o;)r.push(n),it.test(t.charAt(wt))?(n=t.charAt(wt),wt++):(n=o,0===Ft&&Mt(ct));else r=o;return r!==o&&(jt=e,r=st(r)),e=r}function Yt(){var e,r;return Ft++,e=wt,t.substr(wt,2)===ht?(r=ht,wt+=2):(r=o,0===Ft&&Mt(vt)),r!==o&&(jt=e,r=yt()),Ft--,(e=r)===o&&(r=o,0===Ft&&Mt(pt)),e}function Kt(){var e,r,n,u,a,i;if(e=wt,39===t.charCodeAt(wt)?(r=lt,wt++):(r=o,0===Ft&&Mt(ft)),r!==o)if(dt.test(t.charAt(wt))?(n=t.charAt(wt),wt++):(n=o,0===Ft&&Mt(mt)),n!==o){for(u=wt,a=[],t.substr(wt,2)===ht?(i=ht,wt+=2):(i=o,0===Ft&&Mt(vt)),i===o&&(gt.test(t.charAt(wt))?(i=t.charAt(wt),wt++):(i=o,0===Ft&&Mt(bt)));i!==o;)a.push(i),t.substr(wt,2)===ht?(i=ht,wt+=2):(i=o,0===Ft&&Mt(vt)),i===o&&(gt.test(t.charAt(wt))?(i=t.charAt(wt),wt++):(i=o,0===Ft&&Mt(bt)));(u=a!==o?t.substring(u,wt):a)!==o?(39===t.charCodeAt(wt)?(a=lt,wt++):(a=o,0===Ft&&Mt(ft)),a!==o?(jt=e,e=r=_t(n,u)):(wt=e,e=o)):(wt=e,e=o)}else wt=e,e=o;else wt=e,e=o;return e}function Qt(){var e,r;return e=wt,xt.test(t.charAt(wt))?(r=t.charAt(wt),wt++):(r=o,0===Ft&&Mt(Ot)),e=r!==o?t.substring(e,wt):r}function te(){var e,r,n,u,a;if(Ft++,e=wt,r=[],n=wt,u=wt,Ft++,(a=Wt())===o&&(a=Zt()),Ft--,a===o?u=void 0:(wt=u,u=o),u!==o?(t.length>wt?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(_)),a!==o?n=u=[u,a]:(wt=n,n=o)):(wt=n,n=o),n!==o)for(;n!==o;)r.push(n),n=wt,u=wt,Ft++,(a=Wt())===o&&(a=Zt()),Ft--,a===o?u=void 0:(wt=u,u=o),u!==o?(t.length>wt?(a=t.charAt(wt),wt++):(a=o,0===Ft&&Mt(_)),a!==o?n=u=[u,a]:(wt=n,n=o)):(wt=n,n=o);else r=o;return e=r!==o?t.substring(e,wt):r,Ft--,e===o&&(r=o,0===Ft&&Mt(At)),e}function ee(){return e&&e.captureLocation?{location:Nt(jt,wt)}:{}}if((r=a())!==o&&wt===t.length)return r;throw r!==o&&wt<t.length&&Mt({type:"end"}),Lt(Et,Tt<t.length?t.charAt(Tt):null,Tt<t.length?Nt(Tt,Tt+1):Nt(Tt,Tt))},_=/(^|[^\\])#/g;function x(t){return JSON.stringify(t.map(function(t){return t&&"object"==typeof t?(e=t,Object.keys(e).sort().map(function(t){var r;return(r={})[t]=e[t],r})):t;var e}))}var O,A=function(t,e){return void 0===e&&(e={}),function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=x(n),a=u&&e[u];return a||(a=new((r=t).bind.apply(r,[void 0].concat(n))),u&&(e[u]=a)),a}},w=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),j=/\\#/g,C=function(t){function e(e,r){var n=t.call(this,e)||this;return n.variableId=r,n}return w(e,t),e}(Error);function T(t,e,r,n,o,u){if(1===t.length&&c(t[0]))return[{type:0,value:t[0].value.replace(j,"#")}];for(var a,i=[],y=0,d=t;y<d.length;y++){var m=d[y];if(c(m))i.push({type:0,value:m.value.replace(j,"#")});else{var g=m.value;if(!(o&&g in o))throw new C('The intl string context variable "'+g+'" was not provided to the string "'+u+'"');var b=o[g];if(s(m))b&&"string"!=typeof b&&"number"!=typeof b?i.push({type:1,value:b}):i.push({type:0,value:"string"==typeof b||"number"==typeof b?String(b):""});else if(f(m)){var _="string"==typeof m.style?n.date[m.style]:void 0;i.push({type:0,value:r.getDateTimeFormat(e,_).format(b)})}else if(p(m)){_="string"==typeof m.style?n.time[m.style]:void 0;i.push({type:0,value:r.getDateTimeFormat(e,_).format(b)})}else if(l(m)){_="string"==typeof m.style?n.number[m.style]:void 0;i.push({type:0,value:r.getNumberFormat(e,_).format(b)})}else if(h(m)){if(!(x=m.options[b]||m.options.other))throw new RangeError('Invalid values for "'+m.value+'": "'+b+'". Options are "'+Object.keys(m.options).join('", "')+'"');i.push.apply(i,T(x.value,e,r,n,o))}else if(v(m)){var x;if(!(x=m.options["="+b])){var O=r.getPluralRules(e,{type:m.pluralType}).select(b-(m.offset||0));x=m.options[O]||m.options.other}if(!x)throw new RangeError('Invalid values for "'+m.value+'": "'+b+'". Options are "'+Object.keys(m.options).join('", "')+'"');i.push.apply(i,T(x.value,e,r,n,o))}else;}}return(a=i).length<2?a:a.reduce(function(t,e){var r=t[t.length-1];return r&&0===r.type&&0===e.type?r.value+=e.value:t.push(e),t},[])}var E="@@",F=/@@(.*?)@@/g,P=0;function S(t,e){return t.split(F).filter(Boolean).map(function(t){return e[t]||t})}function k(t,e,r,n,o,u){var a=T(t,e,r,n,o,u),i={},c=a.reduce(function(t,e){if("string"==typeof e.value||0===e.type)return t+e.value;var r=Date.now()+"_"+ ++P;return i[r]=e.value,t+""+E+r+E},"");if(!~c.indexOf("<"))return S(c,i);if(!o)throw new C("Message has placeholders but no values was given");if("undefined"==typeof DOMParser)throw new C("Cannot format XML message without DOMParser");O||(O=new DOMParser);var s=O.parseFromString("<template>"+c+"</template>","application/xml");if(s.getElementsByTagName("parsererror").length)throw new C("Malformed XML message "+s.getElementsByTagName("parsererror")[0].innerHTML);var l=s.firstChild;if(!l)throw new C("Malformed XML message "+c);return Object.keys(o).filter(function(t){return!!s.getElementsByTagName(t).length}).length?Array.prototype.slice.call(l.childNodes).reduce(function(t,e){var r=e.tagName,n=e.outerHTML,u=e.textContent;if(!r){var a=S(u||"",i);return t.concat(a)}if(!o[r])return 1===(a=S(n,i)).length?t.concat([a[0]]):t.concat(a);var c=o[r];if("function"==typeof c){if(null==u)return t.concat([c(u||void 0)]);a=S(u,i);return t.concat([c.apply(void 0,a)])}return t.concat([c])},[]):S(c,i)}var R=function(){return(R=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function N(t,e){return e?Object.keys(t).reduce(function(r,n){var o,u;return r[n]=(o=t[n],(u=e[n])?R({},o||{},u||{},Object.keys(o).reduce(function(t,e){return t[e]=R({},o[e],u[e]||{}),t},{})):o),r},R({},t)):t}var M=function(){function t(e,r,n,o){var u,a=this;if(void 0===r&&(r=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){return function(t,e,r,n,o,u){var a=T(t,e,r,n,o,u);return 1===a.length?a[0].value:a.reduce(function(t,e){return t+e.value},"")}(a.ast,a.locale,a.formatters,a.formats,t,a.message)},this.formatToParts=function(t){return T(a.ast,a.locale,a.formatters,a.formats,t,a.message)},this.formatXMLMessage=function(t){return k(a.ast,a.locale,a.formatters,a.formats,t,a.message)},this.resolvedOptions=function(){return{locale:a.locale}},this.getAst=function(){return a.ast},"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=t.__parse(e)}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=N(t.formats,n),this.locale=function(t){"string"==typeof t&&(t=[t]);try{return Intl.NumberFormat.supportedLocalesOf(t,{localeMatcher:"best fit"})[0]}catch(t){return M.defaultLocale}}(r||[]),this.formatters=o&&o.formatters||(void 0===(u=this.formatterCache)&&(u={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:A(Intl.NumberFormat,u.number),getDateTimeFormat:A(Intl.DateTimeFormat,u.dateTime),getPluralRules:A(Intl.PluralRules,u.pluralRules)}),function t(e,r,n,o){e.filter(function(t){return!s(t)&&!c(t)}).forEach(function(e){if(f(e)){var u="string"==typeof e.style?o.date[e.style]:void 0;n.getDateTimeFormat(r,u)}p(e)&&(u="string"==typeof e.style?o.time[e.style]:void 0,n.getDateTimeFormat(r,u)),l(e)&&(u="string"==typeof e.style?o.number[e.style]:void 0,n.getNumberFormat(r,u)),h(e)&&Object.keys(e.options).forEach(function(u){return t(e.options[u].value,r,n,o)}),v(e)&&(n.getPluralRules(r,{type:e.pluralType}),Object.keys(e.options).forEach(function(u){return t(e.options[u].value,r,n,o)}))})}(this.ast,this.locale,this.formatters,this.formats)}return t.defaultLocale="en",t.__parse=void 0,t.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),L=M;L.__parse=function(t,e){var r=b(t,e);return e&&!1===e.normalizeHashtagInPlural||function t(e){e.forEach(function(e){v(e)&&Object.keys(e.options).forEach(function(r){for(var n,o=e.options[r],u=-1,a=void 0,i=0;i<o.value.length;i++){var s=o.value[i];if(c(s)&&_.test(s.value)){u=i,a=s;break}}if(a){var l=a.value.replace(_,"$1{"+e.value+", number}"),f=b(l);(n=o.value).splice.apply(n,[u,1].concat(f))}t(o.value)})})}(r),r};var I=L,D={en:r(12),"zh-CN":r(13)},z=r(14),B=r.n(z);function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var q,H=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.languages=Object.assign({},D);var e=Object.keys(this.languages);this.locale=e.length>0?e[0]:""}var e,r,n;return e=t,(r=[{key:"getLanguages",value:function(){return this.languages}},{key:"setLanguages",value:function(t){return this.languages=Object.assign({},this.languages,t),this.languages}},{key:"getLocale",value:function(){return this.locale}},{key:"setLocale",value:function(t){this.locale=t}},{key:"translate",value:function(t,e){var r=this.languages[this.locale];if(!r)return t;var n=B()(r,t)||"";return new I(n,this.locale).format(e)}}])&&$(e.prototype,r),n&&$(e,n),t}();function U(){var t=(q||(q=new H),q);return t.translate.apply(t,arguments)}var X=r(15),J=r.n(X);function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function G(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,"default",function(){return et});var K,Q,tt,et=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,V(e).apply(this,arguments))}var r,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(e,o["Component"]),r=e,(n=[{key:"render",value:function(){var t=this.props,e=t.className,r=t.value;return u.a.createElement("div",{className:J()("simple",e)},u.a.createElement("div",{className:"title"},U("title")),u.a.createElement("div",{className:"content"},r))}}])&&Z(r.prototype,n),a&&Z(r,a),e}();K=et,Q="propTypes",tt={className:i.a.string,value:i.a.string.isRequired},Q in K?Object.defineProperty(K,Q,{value:tt,enumerable:!0,configurable:!0,writable:!0}):K[Q]=tt},function(t,e){}])});