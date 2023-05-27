import{p as g,a as C,$ as A,a0 as de,a1 as E,h as Ue,C as B,a2 as Ke,r as Ye,w as V,a3 as Xe,H as T,q as m,a4 as N,a5 as fe,a6 as te,f as c,P as ve,u as ne,a7 as Je,e as Qe,i as Ze,E as S,J as me,m as D,b as F,a8 as et,t as M,a9 as tt,aa as nt,ab as se,ac as st,ad as ae,S as ge,B as ye,T as q,D as L,ae as at,I as it,K as ie,L as rt,O as ot,af as lt,ag as j}from"./entry.21e1521a.js";const k=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Yt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return C()({name:t!=null?t:A(de(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...k()},setup(s,a){let{slots:i}=a;return()=>{var r;return E(s.tag,{class:[e,s.class],style:s.style},(r=i.default)==null?void 0:r.call(i))}}})}function P(e){const n=Ue("useRender");n.render=e}function Xt(e){const n=B(),t=B();if(Ke){const s=new ResizeObserver(a=>{e==null||e(a,s),a.length&&(t.value=a[0].contentRect)});Ye(()=>{s.disconnect()}),V(n,(a,i)=>{i&&(s.unobserve(i),t.value=void 0),a&&s.observe(a)},{flush:"post"})}return{resizeRef:n,contentRect:Xe(t)}}const Jt=g({border:[Boolean,Number,String]},"border");function Qt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:m(()=>{const s=N(e)?e.value:e.border,a=[];if(s===!0||s==="")a.push(`${n}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))a.push(`border-${i}`);return a})}}const ut=[null,"default","comfortable","compact"],ct=g({density:{type:String,default:"default",validator:e=>ut.includes(e)}},"density");function dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:m(()=>`${n}--density-${e.density}`)}}const Zt=g({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function en(e){return{elevationClasses:m(()=>{const t=N(e)?e.value:e.elevation,s=[];return t==null||s.push(`elevation-${t}`),s})}}const ft=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function vt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:m(()=>{const s=N(e)?e.value:e.rounded,a=[];if(s===!0||s==="")a.push(`${n}--rounded`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))a.push(`rounded-${i}`);return a})}}const O=g({tag:{type:String,default:"div"}},"tag");function G(e){return fe(()=>{const n=[],t={};return e.value.background&&(te(e.value.background)?t.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(te(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function he(e,n){const t=m(()=>({text:N(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:a}=G(t);return{textColorClasses:s,textColorStyles:a}}function tn(e,n){const t=m(()=>({background:N(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:a}=G(t);return{backgroundColorClasses:s,backgroundColorStyles:a}}const mt=["elevated","flat","tonal","outlined","text","plain"];function gt(e,n){return c(ve,null,[e&&c("span",{key:"overlay",class:`${n}__overlay`},null),c("span",{key:"underlay",class:`${n}__underlay`},null)])}const yt=g({color:String,variant:{type:String,default:"elevated",validator:e=>mt.includes(e)}},"variant");function ht(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const t=m(()=>{const{variant:i}=ne(e);return`${n}--variant-${i}`}),{colorClasses:s,colorStyles:a}=G(m(()=>{const{variant:i,color:r}=ne(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:s,colorStyles:a,variantClasses:t}}const St=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},"v-defaults-provider"),nn=C(!1)({name:"VDefaultsProvider",props:St(),setup(e,n){let{slots:t}=n;const{defaults:s,disabled:a,reset:i,root:r,scoped:o}=Je(e);return Qe(s,{reset:i,root:r,scoped:o,disabled:a}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}});const pt=["x-small","small","default","large","x-large"],Se=g({size:{type:[String,Number],default:"default"}},"size");function pe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return fe(()=>{let t,s;return Ze(pt,e.size)?t=`${n}--size-${e.size}`:e.size&&(s={width:S(e.size),height:S(e.size)}),{sizeClasses:t,sizeStyles:s}})}const _t=g({color:String,start:Boolean,end:Boolean,icon:me,...k(),...Se(),...O({tag:"i"}),...D()},"v-icon"),bt=C()({name:"VIcon",props:_t(),setup(e,n){let{attrs:t,slots:s}=n;const a=B(),{themeClasses:i}=F(e),{iconData:r}=et(m(()=>a.value||e.icon)),{sizeClasses:o}=pe(e),{textColorClasses:u,textColorStyles:l}=he(M(e,"color"));return P(()=>{var v,y;const f=(v=s.default)==null?void 0:v.call(s);return f&&(a.value=(y=f.filter(b=>b.type===tt&&b.children&&typeof b.children=="string")[0])==null?void 0:y.children),c(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:S(e.size),height:S(e.size),width:S(e.size)},l.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[f]})}),{}}});const H=Symbol("rippleStop"),Ct=80;function re(e,n){e.style.transform=n,e.style.webkitTransform=n}function W(e){return e.constructor.name==="TouchEvent"}function _e(e){return e.constructor.name==="KeyboardEvent"}const wt=function(e,n){var v;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,a=0;if(!_e(e)){const y=n.getBoundingClientRect(),b=W(e)?e.touches[e.touches.length-1]:e;s=b.clientX-y.left,a=b.clientY-y.top}let i=0,r=.3;(v=n._ripple)!=null&&v.circle?(r=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((s-i)**2+(a-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,l=t.center?o:`${s-i}px`,f=t.center?u:`${a-i}px`;return{radius:i,scale:r,x:l,y:f,centerX:o,centerY:u}},I={show(e,n){var b;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=n==null?void 0:n._ripple)!=null&&b.enabled))return;const s=document.createElement("span"),a=document.createElement("span");s.appendChild(a),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:i,scale:r,x:o,y:u,centerX:l,centerY:f}=wt(e,n,t),v=`${i*2}px`;a.className="v-ripple__animation",a.style.width=v,a.style.height=v,n.appendChild(s);const y=window.getComputedStyle(n);y&&y.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),re(a,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),re(a,`translate(${l}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),a=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},a)}};function be(e){return typeof e>"u"||!!e}function $(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[H])){if(e[H]=!0,W(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||_e(e),t._ripple.class&&(n.class=t._ripple.class),W(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{I.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var s;(s=t==null?void 0:t._ripple)!=null&&s.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Ct)}else I.show(e,t,n)}}function oe(e){e[H]=!0}function p(e){const n=e.currentTarget;if(!!(n!=null&&n._ripple)){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{p(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),I.hide(n)}}function Ce(e){const n=e.currentTarget;!(n!=null&&n._ripple)||(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let x=!1;function we(e){!x&&(e.keyCode===se.enter||e.keyCode===se.space)&&(x=!0,$(e))}function ke(e){x=!1,p(e)}function Ee(e){x&&(x=!1,p(e))}function Le(e,n,t){var r;const{value:s,modifiers:a}=n,i=be(s);if(i||I.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,nt(s)&&s.class&&(e._ripple.class=s.class),i&&!t){if(a.stop){e.addEventListener("touchstart",oe,{passive:!0}),e.addEventListener("mousedown",oe);return}e.addEventListener("touchstart",$,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",Ce,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",$),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",we),e.addEventListener("keyup",ke),e.addEventListener("blur",Ee),e.addEventListener("dragstart",p,{passive:!0})}else!i&&t&&$e(e)}function $e(e){e.removeEventListener("mousedown",$),e.removeEventListener("touchstart",$),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",Ce),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",we),e.removeEventListener("keyup",ke),e.removeEventListener("dragstart",p),e.removeEventListener("blur",Ee)}function kt(e,n){Le(e,n,!1)}function Et(e){delete e._ripple,$e(e)}function Lt(e,n){if(n.value===n.oldValue)return;const t=be(n.oldValue);Le(e,n,t)}const sn={mounted:kt,unmounted:Et,updated:Lt},$t=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xt(e){return{dimensionStyles:m(()=>({height:S(e.height),maxHeight:S(e.maxHeight),maxWidth:S(e.maxWidth),minHeight:S(e.minHeight),minWidth:S(e.minWidth),width:S(e.width)}))}}function an(e,n){const t=st("RouterLink"),s=m(()=>!!(e.href||e.to)),a=m(()=>(s==null?void 0:s.value)||ae(n,"click")||ae(e,"click"));if(typeof t=="string")return{isLink:s,isClickable:a,href:M(e,"href")};const i=e.to?t.useLink(e):void 0;return{isLink:s,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&m(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:m(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const rn=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Tt(e){return{aspectStyles:m(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const xe=g({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...$t()},"v-responsive"),le=C()({name:"VResponsive",props:xe(),setup(e,n){let{slots:t}=n;const{aspectStyles:s}=Tt(e),{dimensionStyles:a}=xt(e);return P(()=>{var i;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[c("div",{class:"v-responsive__sizer",style:s.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&c("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function Nt(e,n){if(!ge)return;const t=n.modifiers||{},s=n.value,{handler:a,options:i}=typeof s=="object"?s:{handler:s,options:{}},r=new IntersectionObserver(function(){var v;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const l=(v=e._observe)==null?void 0:v[n.instance.$.uid];if(!l)return;const f=o.some(y=>y.isIntersecting);a&&(!t.quiet||l.init)&&(!t.once||f||l.init)&&a(f,o,u),f&&t.once?Te(e,n):l.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Te(e,n){var s;const t=(s=e._observe)==null?void 0:s[n.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Pt={mounted:Nt,unmounted:Te},Rt=Pt,zt=g({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,n)=>{let{slots:t}=n;const{transition:s,disabled:a,...i}=e,{component:r=q,...o}=typeof s=="object"?s:{};return E(r,ye(typeof s=="string"?{name:a?"":s}:o,i,{disabled:a}),t)},Vt=g({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...xe(),...k(),...zt()},"v-img"),Bt=C()({name:"VImg",directives:{intersect:Rt},props:Vt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:s}=n;const a=L(""),i=B(),r=L(e.eager?"loading":"idle"),o=L(),u=L(),l=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=m(()=>l.value.aspect||o.value/u.value||0);V(()=>e.src,()=>{v(r.value!=="idle")}),V(f,(d,h)=>{!d&&h&&i.value&&R(i.value)}),at(()=>v());function v(d){if(!(e.eager&&d)&&!(ge&&!d&&!e.eager)){if(r.value="loading",l.value.lazySrc){const h=new Image;h.src=l.value.lazySrc,R(h,null)}!l.value.src||it(()=>{var h,w;if(t("loadstart",((h=i.value)==null?void 0:h.currentSrc)||l.value.src),(w=i.value)!=null&&w.complete){if(i.value.naturalWidth||b(),r.value==="error")return;f.value||R(i.value,null),y()}else f.value||R(i.value),Y()})}}function y(){var d;Y(),r.value="loaded",t("load",((d=i.value)==null?void 0:d.currentSrc)||l.value.src)}function b(){var d;r.value="error",t("error",((d=i.value)==null?void 0:d.currentSrc)||l.value.src)}function Y(){const d=i.value;d&&(a.value=d.currentSrc||d.src)}let X=-1;function R(d){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const w=()=>{clearTimeout(X);const{naturalHeight:Z,naturalWidth:ee}=d;Z||ee?(o.value=ee,u.value=Z):!d.complete&&r.value==="loading"&&h!=null?X=window.setTimeout(w,h):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};w()}const J=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),De=()=>{var w;if(!l.value.src||r.value==="idle")return null;const d=c("img",{class:["v-img__img",J.value],src:l.value.src,srcset:l.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:y,onError:b},null),h=(w=s.sources)==null?void 0:w.call(s);return c(z,{transition:e.transition,appear:!0},{default:()=>[ie(h?c("picture",{class:"v-img__picture"},[h,d]):d,[[ot,r.value==="loaded"]])]})},Fe=()=>c(z,{transition:e.transition},{default:()=>[l.value.lazySrc&&r.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",J.value],src:l.value.lazySrc,alt:e.alt},null)]}),Me=()=>s.placeholder?c(z,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!s.error)&&c("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,qe=()=>s.error?c(z,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&c("div",{class:"v-img__error"},[s.error()])]}):null,Ge=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,Q=L(!1);{const d=V(f,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Q.value=!0})}),d())})}return P(()=>{const[d]=le.filterProps(e);return ie(c(le,ye({class:["v-img",{"v-img--booting":!Q.value},e.class],style:e.style},d,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(ve,null,[c(De,null,null),c(Fe,null,null),c(Ge,null,null),c(Me,null,null),c(qe,null,null)]),default:s.default}),[[rt("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:a,image:i,state:r,naturalWidth:o,naturalHeight:u}}}),It=g({start:Boolean,end:Boolean,icon:me,image:String,...k(),...ct(),...ft(),...Se(),...O(),...D(),...yt({variant:"flat"})},"v-avatar"),on=C()({name:"VAvatar",props:It(),setup(e,n){let{slots:t}=n;const{themeClasses:s}=F(e),{colorClasses:a,colorStyles:i,variantClasses:r}=ht(e),{densityClasses:o}=dt(e),{roundedClasses:u}=vt(e),{sizeClasses:l,sizeStyles:f}=pe(e);return P(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},s.value,a.value,o.value,u.value,l.value,r.value,e.class],style:[i.value,f.value,e.style]},{default:()=>{var v;return[e.image?c(Bt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(bt,{key:"icon",icon:e.icon},null):(v=t.default)==null?void 0:v.call(t),gt(!1,"v-avatar")]}})),{}}}),At=g({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",t=arguments.length>2?arguments[2]:void 0;return C()({name:e,props:At({mode:t,origin:n}),setup(s,a){let{slots:i}=a;const r={onBeforeEnter(o){o.style.transformOrigin=s.origin},onLeave(o){if(s.leaveAbsolute){const{offsetTop:u,offsetLeft:l,offsetWidth:f,offsetHeight:v}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${u}px`,o.style.left=`${l}px`,o.style.width=`${f}px`,o.style.height=`${v}px`}s.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(s.leaveAbsolute&&(o==null?void 0:o._transitionInitialStyles)){const{position:u,top:l,left:f,width:v,height:y}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=u||"",o.style.top=l||"",o.style.left=f||"",o.style.width=v||"",o.style.height=y||""}}};return()=>{const o=s.group?lt:q;return E(o,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:r},i.default)}}})}function Ne(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return C()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(s,a){let{slots:i}=a;return()=>E(q,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:n},i.default)}})}function Pe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=de(`offset-${t}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[t]:r.style[t]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const u=`${r[s]}px`;r.style[t]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[t]=u})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[t]:r.style[t]},r.style.overflow="hidden",r.style[t]=`${r[s]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[t]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[t];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[t]=o),delete r._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const ln=Ne("expand-transition",Pe()),un=Ne("expand-x-transition",Pe("",!0));const jt=g({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...k(),...D()},"v-divider"),cn=C()({name:"VDivider",props:jt(),setup(e,n){let{attrs:t}=n;const{themeClasses:s}=F(e),{textColorClasses:a,textColorStyles:i}=he(M(e,"color")),r=m(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=S(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=S(e.thickness)),o});return P(()=>c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,a.value,e.class],style:[r.value,i.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const Re=(()=>j.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),ze=(()=>j.reduce((e,n)=>{const t="offset"+A(n);return e[t]={type:[String,Number],default:null},e},{}))(),Ve=(()=>j.reduce((e,n)=>{const t="order"+A(n);return e[t]={type:[String,Number],default:null},e},{}))(),ue={col:Object.keys(Re),offset:Object.keys(ze),order:Object.keys(Ve)};function Ot(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const Ht=["auto","start","end","center","baseline","stretch"],Wt=g({cols:{type:[Boolean,String,Number],default:!1},...Re,offset:{type:[String,Number],default:null},...ze,order:{type:[String,Number],default:null},...Ve,alignSelf:{type:String,default:null,validator:e=>Ht.includes(e)},...k(),...O()},"v-col"),dn=C()({name:"VCol",props:Wt(),setup(e,n){let{slots:t}=n;const s=m(()=>{const a=[];let i;for(i in ue)ue[i].forEach(o=>{const u=e[o],l=Ot(i,o,u);l&&a.push(l)});const r=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return E(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),U=["start","end","center"],Be=["space-between","space-around","space-evenly"];function K(e,n){return j.reduce((t,s)=>{const a=e+A(s);return t[a]=n(),t},{})}const Dt=[...U,"baseline","stretch"],Ie=e=>Dt.includes(e),Ae=K("align",()=>({type:String,default:null,validator:Ie})),Ft=[...U,...Be],je=e=>Ft.includes(e),Oe=K("justify",()=>({type:String,default:null,validator:je})),Mt=[...U,...Be,"stretch"],He=e=>Mt.includes(e),We=K("alignContent",()=>({type:String,default:null,validator:He})),ce={align:Object.keys(Ae),justify:Object.keys(Oe),alignContent:Object.keys(We)},qt={align:"align",justify:"justify",alignContent:"align-content"};function Gt(e,n,t){let s=qt[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const Ut=g({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ie},...Ae,justify:{type:String,default:null,validator:je},...Oe,alignContent:{type:String,default:null,validator:He},...We,...k(),...O()},"v-row"),fn=C()({name:"VRow",props:Ut(),setup(e,n){let{slots:t}=n;const s=m(()=>{const a=[];let i;for(i in ce)ce[i].forEach(r=>{const o=e[r],u=Gt(i,r,o);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return E(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}});export{Bt as A,un as B,fn as C,dn as D,cn as E,ln as F,z as M,sn as R,bt as V,k as a,ct as b,Zt as c,ft as d,O as e,yt as f,Qt as g,en as h,vt as i,P as j,Se as k,pe as l,Jt as m,he as n,Xt as o,tn as p,$t as q,rn as r,ht as s,xt as t,dt as u,an as v,gt as w,nn as x,Yt as y,on as z};