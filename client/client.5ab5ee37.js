function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,i){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=c(e,n,r,i);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t){return Array.from(t.childNodes)}function $(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return y(t," ")}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let _;function x(t){_=t}function w(){if(!_)throw new Error("Function called outside component initialization");return _}const E=[],S=[],R=[],N=[],P=Promise.resolve();let L=!1;function O(t){R.push(t)}let j=!1;const U=new Set;function q(){if(!j){j=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];x(e),A(e.$$)}for(x(null),E.length=0;S.length;)S.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];U.has(e)||(U.add(e),e())}R.length=0}while(E.length);for(;N.length;)N.pop()();L=!1,j=!1,U.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const C=new Set;let T;function k(){T={r:0,c:[],p:T}}function B(){T.r||o(T.c),T=T.p}function I(t,e){t&&t.i&&(C.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),T.c.push((()=>{C.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function K(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function D(t,e){t&&t.l(e)}function H(t,e,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,r),O((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(O)}function Y(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(E.push(t),L||(L=!0,P.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,n,s,i,c,a,l=[-1]){const u=_;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&z(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=g(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&I(e.$$.fragment),H(e,n.target,n.anchor),q()}x(u)}class G{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function X(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!W.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),W.push(n,e)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const Q={};function Z(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&a(r,n,t,t[0],e,null,null)},i(t){e||(I(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function tt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class et extends G{constructor(t){super(),F(this,t,tt,Z,i,{})}}function nt(e){let n,r,o,s,i,c,a,_=e[0].message+"";return{c(){n=p("h1"),r=d(e[1]),o=h(),s=p("p"),i=d(_),c=h(),a=m()},l(t){n=$(t,"H1",{});var l=g(n);r=y(l,e[1]),l.forEach(f),o=b(t),s=$(t,"P",{});var u=g(s);i=y(u,_),u.forEach(f),c=b(t),a=m()},m(t,e){u(t,n,e),l(n,r),u(t,o,e),u(t,s,e),l(s,i),u(t,c,e),u(t,a,e)},p(t,[e]){2&e&&v(r,t[1]),1&e&&_!==(_=t[0].message+"")&&v(i,_)},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(s),t&&f(c),t&&f(a)}}}function rt(t,e,n){let{error:r}=e,{status:o}=e;return t.$$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class ot extends G{constructor(t){super(),F(this,t,rt,nt,i,{error:0,status:1})}}function st(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&V(n.$$.fragment),r=m()},l(t){n&&D(n.$$.fragment,t),r=m()},m(t,e){n&&H(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?K(s,[M(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){k();const t=n;J(t.$$.fragment,1,0,(()=>{Y(t,1)})),B()}i?(n=new i(c()),V(n.$$.fragment),I(n.$$.fragment,1),H(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&I(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Y(n,t)}}}function it(t){let e,n;return e=new ot({props:{error:t[0],status:t[1]}}),{c(){V(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){H(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function ct(t){let e,n,r,o;const s=[it,st],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(k(),J(i[a],1,1,(()=>{i[a]=null})),B(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),I(n,1),n.m(r.parentNode,r))},i(t){o||(I(n),o=!0)},o(t){J(n),o=!1},d(t){i[e].d(t),t&&f(r)}}}function at(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ct]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new et({props:s}),{c(){V(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,e){H(n,t,e),r=!0},p(t,[e]){const r=12&e?K(o,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(I(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){Y(n,t)}}}function lt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,w().$$.after_update.push(u),f=Q,p=r,w().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class ut extends G{constructor(t){super(),F(this,t,lt,at,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ft=[],pt=[{js:()=>Promise.all([import("./index.af3002be.js"),]).then((function(t){return t[0]}))}],dt=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ht(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let gt,$t=1;const yt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},bt={};let vt,_t;function xt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(vt))return null;let e=t.pathname.slice(vt.length);if(""===e&&(e="/"),!ft.some((t=>t.test(e))))for(let n=0;n<dt.length;n+=1){const r=dt[n],o=r.pattern.exec(e);if(o){const n=xt(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Et(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=mt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=wt(o);if(s){Nt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),yt.pushState({id:gt},"",o.href)}}function St(){return{x:pageXOffset,y:pageYOffset}}function Rt(t){if(bt[gt]=St(),t.state){const e=wt(new URL(location.href));e?Nt(e,t.state.id):location.href=location.href}else $t=$t+1,function(t){gt=t}($t),yt.replaceState({id:gt},"",location.href)}function Nt(t,e,n,r){return ht(this,void 0,void 0,(function*(){const o=!!e;if(o)gt=e;else{const t=St();bt[gt]=t,gt=e=++$t,bt[gt]=n?t:{x:0,y:0}}if(yield _t(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=bt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),bt[gt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Pt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Lt,Ot=null;function jt(t){const e=mt(t.target);e&&"prefetch"===e.rel&&function(t){const e=wt(new URL(t,Pt(document)));if(e)Ot&&t===Ot.href||(Ot={href:t,promise:Ft(e)}),Ot.promise}(e.href)}function Ut(t){clearTimeout(Lt),Lt=setTimeout((()=>{jt(t)}),20)}function qt(t,e={noscroll:!1,replaceState:!1}){const n=wt(new URL(t,Pt(document)));return n?(yt[e.replaceState?"replaceState":"pushState"]({id:gt},"",t),Nt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ct,Tt,kt,Bt=!1,It=[],Jt="{}";const Kt={page:function(t){const e=X(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:X(null),session:X(At&&At.session)};let Mt,Vt,Dt;function Ht(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Yt(t){return ht(this,void 0,void 0,(function*(){Ct&&Kt.preloading.set(!0);const e=function(t){return Ot&&Ot.href===t.href?Ot.promise:Ft(t)}(t),n=Tt={},r=yield e,{redirect:o}=r;if(n===Tt)if(o)yield qt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield zt(n,e,Ht(e,t.page))}}))}function zt(t,e,n){return ht(this,void 0,void 0,(function*(){Kt.page.set(n),Kt.preloading.set(!1),Ct?Ct.$set(e):(e.stores={page:{subscribe:Kt.page.subscribe},preloading:{subscribe:Kt.preloading.subscribe},session:Kt.session},e.level0={props:yield kt},e.notify=Kt.page.notify,Ct=new ut({target:Dt,props:e,hydrate:!0})),It=t,Jt=JSON.stringify(n.query),Bt=!0,Vt=!1}))}function Ft(t){return ht(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!kt){const t=()=>({});kt=At.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Mt)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>ht(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Jt)return!0;const o=It[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const p=a++;if(!Vt&&!u&&It[c]&&It[c].part===e.i)return It[c];u=!1;const{default:d,preload:h}=yield pt[e.i].js();let m;return m=Bt||!At.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Mt):{}:At.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Gt,Wt,Xt;Kt.session.subscribe((t=>ht(void 0,void 0,void 0,(function*(){if(Mt=t,!Bt)return;Vt=!0;const e=wt(new URL(location.href)),n=Tt={},{redirect:r,props:o,branch:s}=yield Ft(e);n===Tt&&(r?yield qt(r.location,{replaceState:!0}):yield zt(s,o,Ht(o,e.page)))})))),Gt={target:document.querySelector("#sapper")},Wt=Gt.target,Dt=Wt,Xt=At.baseUrl,vt=Xt,_t=Yt,"scrollRestoration"in yt&&(yt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{yt.scrollRestoration="auto"})),addEventListener("load",(()=>{yt.scrollRestoration="manual"})),addEventListener("click",Et),addEventListener("popstate",Rt),addEventListener("touchstart",jt),addEventListener("mousemove",Ut),At.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=At;kt||(kt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:kt},level1:{props:{status:s,error:i},component:ot},segments:o},a=xt(n);zt([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;yt.replaceState({id:$t},"",e);const n=wt(new URL(location.href));if(n)return Nt(n,$t,!0,t)}));export{G as S,u as a,y as c,f as d,F as i,t as n,i as s,d as t};
