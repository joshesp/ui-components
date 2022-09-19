(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))g(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&g(x)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function g(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N={exports:{}};(function(A){var S=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(g){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,x={},s={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof w?new w(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++d}),t.__id},clone:function t(e,n){n=n||{};var a,r;switch(s.util.type(e)){case"Object":if(r=s.util.objId(e),n[r])return n[r];a={},n[r]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=t(e[l],n));return a;case"Array":return r=s.util.objId(e),n[r]?n[r]:(a=[],n[r]=a,e.forEach(function(c,o){a[o]=t(c,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=u.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(u,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){a=a||s.languages;var r=a[t],l={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(c)||(l[c]=r[c])}var h=a[t];return a[t]=l,s.languages.DFS(s.languages,function(v,k){k===h&&v!=t&&(this[v]=l)}),l},DFS:function t(e,n,a,r){r=r||{};var l=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){n.call(e,c,e[c],a||c);var o=e[c],h=s.util.type(o);h==="Object"&&!r[l(o)]?(r[l(o)]=!0,t(o,n,null,r)):h==="Array"&&!r[l(o)]&&(r[l(o)]=!0,t(o,n,c,r))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var r=0,l;l=a.elements[r++];)s.highlightElement(l,e===!0,a.callback)},highlightElement:function(t,e,n){var a=s.util.getLanguage(t),r=s.languages[a];s.util.setLanguage(t,a);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(l,a);var c=t.textContent,o={element:t,language:a,grammar:r,code:c};function h(k){o.highlightedCode=k,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),n&&n.call(o.element)}if(s.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){s.hooks.run("complete",o),n&&n.call(o.element);return}if(s.hooks.run("before-highlight",o),!o.grammar){h(s.util.encode(o.code));return}if(e&&g.Worker){var v=new Worker(s.filename);v.onmessage=function(k){h(k.data)},v.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else h(s.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),w.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var r=new I;return E(r,r.head,t),z(t,r,e,r.head,0),B(r)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(!(!n||!n.length))for(var a=0,r;r=n[a++];)r(e)}},Token:w};g.Prism=s;function w(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=(a||"").length|0}w.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(h){a+=t(h,n)}),a}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),s.hooks.run("wrap",r);var c="";for(var o in r.attributes)c+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function C(t,e,n,a){t.lastIndex=e;var r=t.exec(n);if(r&&a&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function z(t,e,n,a,r,l){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var o=n[c];o=Array.isArray(o)?o:[o];for(var h=0;h<o.length;++h){if(l&&l.cause==c+","+h)return;var v=o[h],k=v.inside,U=!!v.lookbehind,G=!!v.greedy,Q=v.alias;if(G&&!v.pattern.global){var V=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,V+"g")}for(var Z=v.pattern||v,b=a.next,_=r;b!==e.tail&&!(l&&_>=l.reach);_+=b.value.length,b=b.next){var T=b.value;if(e.length>t.length)return;if(!(T instanceof w)){var H=1,F;if(G){if(F=C(Z,_,t,U),!F||F.index>=t.length)break;var M=F.index,ee=F.index+F[0].length,$=_;for($+=b.value.length;M>=$;)b=b.next,$+=b.value.length;if($-=b.value.length,_=$,b.value instanceof w)continue;for(var L=b;L!==e.tail&&($<ee||typeof L.value=="string");L=L.next)H++,$+=L.value.length;H--,T=t.slice(_,$),F.index-=_}else if(F=C(Z,0,T,U),!F)continue;var M=F.index,P=F[0],j=T.slice(0,M),W=T.slice(M+P.length),q=_+T.length;l&&q>l.reach&&(l.reach=q);var D=b.prev;j&&(D=E(e,D,j),_+=j.length),O(e,D,H);var te=new w(c,k?s.tokenize(P,k):P,Q,P);if(b=E(e,D,te),W&&E(e,b,W),H>1){var R={cause:c+","+h,reach:q};z(t,e,n,b.prev,_,R),l&&R.reach>l.reach&&(l.reach=R.reach)}}}}}}function I(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function E(t,e,n){var a=e.next,r={value:n,prev:e,next:a};return e.next=r,a.prev=r,t.length++,r}function O(t,e,n){for(var a=e.next,r=0;r<n&&a!==t.tail;r++)a=a.next;e.next=a,a.prev=e,t.length-=r}function B(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!g.document)return g.addEventListener&&(s.disableWorkerMessageHandler||g.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,a=e.code,r=e.immediateClose;g.postMessage(s.highlight(a,s.languages[n],n)),r&&g.close()},!1)),s;var f=s.util.currentScript();f&&(s.filename=f.src,f.hasAttribute("data-manual")&&(s.manual=!0));function p(){s.manual||s.highlightAll()}if(!s.manual){var m=document.readyState;m==="loading"||m==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}(S);A.exports&&(A.exports=i),typeof X<"u"&&(X.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(u,d){var x={};x["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[d]},x.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:x}};s["language-"+d]={pattern:/[\s\S]+/,inside:i.languages[d]};var w={};w[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:s},i.languages.insertBefore("markup","cdata",w)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(g,u){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:i.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(g){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var d=g.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var g="Loading\u2026",u=function(f,p){return"\u2716 Error "+f+" while fetching file: "+p},d="\u2716 Error: File does not exist or is empty",x={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",w="loading",C="loaded",z="failed",I="pre[data-src]:not(["+s+'="'+C+'"]):not(['+s+'="'+w+'"])';function E(f,p,m){var t=new XMLHttpRequest;t.open("GET",f,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?p(t.responseText):t.status>=400?m(u(t.status,t.statusText)):m(d))},t.send(null)}function O(f){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(p){var m=Number(p[1]),t=p[2],e=p[3];return t?e?[m,Number(e)]:[m,void 0]:[m,m]}}i.hooks.add("before-highlightall",function(f){f.selector+=", "+I}),i.hooks.add("before-sanity-check",function(f){var p=f.element;if(p.matches(I)){f.code="",p.setAttribute(s,w);var m=p.appendChild(document.createElement("CODE"));m.textContent=g;var t=p.getAttribute("data-src"),e=f.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=x[n]||n}i.util.setLanguage(m,e),i.util.setLanguage(p,e);var a=i.plugins.autoloader;a&&a.loadLanguages(e),E(t,function(r){p.setAttribute(s,C);var l=O(p.getAttribute("data-range"));if(l){var c=r.split(/\r\n?|\n/g),o=l[0],h=l[1]==null?c.length:l[1];o<0&&(o+=c.length),o=Math.max(0,Math.min(o-1,c.length)),h<0&&(h+=c.length),h=Math.max(0,Math.min(h,c.length)),r=c.slice(o,h).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(o+1))}m.textContent=r,i.highlightElement(m)},function(r){p.setAttribute(s,z),m.textContent=r})}}),i.plugins.fileHighlight={highlight:function(p){for(var m=(p||document).querySelectorAll(I),t=0,e;e=m[t++];)i.highlightElement(e)}};var B=!1;i.fileHighlight=function(){B||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),B=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(N);const y=N.exports,Y='<button class="btn-hover-icon">Hover me</button>',ne=`.btn-hover-icon {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    box-shadow: 1px 1px 5px #0907145e;
    background-color: #da70d6;
    color: #f9f8fd;
    width: 200px;
}`,ae=`.btn-hover-icon::after {
    content: "";
    display: block;
    width: 0px; /* Default width */
    height: 24px; 
    overflow: hidden;
    background-image: url("./arrow-forward.svg");  /* Svg icon */
    background-repeat: no-repeat;
    transition: width 200ms, margin-left 200ms;
}`,re=`.btn-hover-icon:is(:hover, :focus)::after {
    width: 24px; /* Update width */
    margin-left: 8px; /* Space between text and icon */
}`,ie=`
    <div class="ui__component">
        <div class="ui__component__preview">
            <h3 class="ui__component__title">Button hover icon</h3>
            <div class="ui__component__example">${Y}</div>
        </div>
        <div class="ui__component__code">
            <p>It's a simple button with class <code>btn-hover-icon</code>.</p>
            <pre class="language-html">${y.highlight(Y,y.languages.html,"html")}</pre>
            <p>Base style.</p>
            <pre class="language-css"><code>${y.highlight(ne,y.languages.css,"css")}</code></pre>
            <p>Style to svg icon in pseudo element <code>::after</code>.</p>
             <pre class="language-css"><code>${y.highlight(ae,y.languages.css,"css")}</code></pre>
            <p>Style in <code>hover</code> action.</p>
            <pre rel="css" class="language-css"><code>${y.highlight(re,y.languages.css,"css")}</code></pre>
        </div>
    </div>
`;const J=`<button class="btn-bg-hover-animate">
    <span>Hover me</span>
    <span class="material-icons">east</span>
</button>`,se=`.btn-bg-hover-animate {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  border: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background-color: transparent;
  color: #da70d6;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.35s ease-out; /* transition to color text */
}

/* Space between in the text and the icon */
button span:first-child {
  margin-right: 0.4rem;
}

button span:last-child {
  margin-left: 0.4rem;
}

/* Color to the icon */
.btn-bg-hover-animate .material-icons {
  color: #f9f8fd;
}`,oe=`/* Circular background button */
.btn-bg-hover-animate::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(calc(100% + 8px));  /* The background is on the right position */
  width: 45px;
  height: 45px;
  background-color: #da70d6;
  border-radius: 50px;
  transition: transform 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2), width 0.25s cubic-bezier(0, 0, 0.5, 2); /* transition to background change */
  z-index: -1;
}`,le=` /* Color text hover */
.btn-bg-hover-animate:hover {
  color: #f9f8fd;
  transition: color 0.35s ease-in;
}

/* Background button hover */
.btn-bg-hover-animate:hover::before {
  width: 100%;
  transform: translateY(-50%) translateX(0px);
  transition: transform 0.25s cubic-bezier(0, 0, 0.5, 1), width 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2);
}`,ue=`
    <div class="ui__component">
        <div class="ui__component__preview">
            <h3 class="ui__component__title">Button background hover animation</h3>
            <div class="ui__component__example">${J}</div>
        </div>
        <div class="ui__component__code">
            <p>Add a <code>button</code> tag and inside it add text and icon in <code>span</code> tag, in this case I use <a target="_new" href="https://fonts.google.com/icons?selected=Material+Icons">Material icons</a>.</p>
            <pre class="language-html"><code>${y.highlight(J,y.languages.html,"html")}</code></pre>
            <p>Base style.</p>
            <pre class="language-css"><code>${y.highlight(se,y.languages.css,"css")}</code></pre>
            <p>Style to background color and transition in pseudo element <code>::before</code>.</p>
            <pre class="language-css"><code>${y.highlight(oe,y.languages.css,"css")}</code></pre>
            <p>Style in <code>hover</code> action.</p>
            <pre rel="css" class="language-css"><code>${y.highlight(le,y.languages.css,"css")}</code></pre>
            <q>If you interested to know about more <code>cubic-bezier</code> function, check the next article: <a target="_new" href="https://css-tricks.com/advanced-css-animation-using-cubic-bezier/">Using cubic-bezier()</a>.</q>
        </div>
    </div>
`,ce=`
    ${ie}
    <div class="hr"></div>
    ${ue}
`,K=[{label:"Buttons",component:ce},{label:"Inputs",component:null},{label:"Loaders",component:null},{label:"Progress",component:null},{label:"Text",component:null}],ge=()=>K.map(({label:A})=>`
      <div class="ui__item" id="ui-${A.toLowerCase()}">
        <span>${A}</span>
      </div>
    `).join("");document.querySelector("#app").innerHTML=`
  <h1>UI components</h1>
  <div class="despcription">
    <p>This page contains regular UI elements for on the web such as buttons, loaders, inputs and others elements. The components are in <code>HTML, CSS</code> and a some have some <code>Javascript</code> code (basic code \u{1F610}).</p>
    <p>I hope this components will help you in some way and I'm still working on in it \u{1F468}\u200D\u{1F3ED}, so there will be more components soon.</p>
  </div>
  <div class="ui__container">
    <div class="ui__container__components-list">
      ${ge()}
    </div>
    <div class="ui__container__components"></div>
  </div>
`;document.querySelectorAll(".ui__item").forEach(A=>{A.addEventListener("click",S=>{var u;const i=A.getAttribute("id").replace("ui-",""),g=K.find(({label:d})=>d.toLowerCase()===i);document.querySelector(".ui__container__components").innerHTML=`${(u=g==null?void 0:g.component)!=null?u:"<h4>For this moment there are not elements to show \u{1F605}, I'm working on it.</h4>"}`,document.querySelectorAll(".ui__item").forEach(d=>d.classList.remove("active")),A.classList.add("active")})});
