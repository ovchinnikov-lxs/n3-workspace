const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BlVJHm2-.js","./entry.CA6sBNp5.css"])))=>i.map(i=>d[i]);
import{c as a,z as U,B as P,Z as r,f as c,o as l,a as S,y as d,s as m,a2 as f,a3 as B,a4 as g,a1 as $,x as o,ad as x,n as h}from"./BlVJHm2-.js";function p(e){const t="Ui";return{getClassName:a(()=>n=>[{[`${t}${n}`]:t,[`${e.classPrefix}${n}`]:!!e.classPrefix}])}}const q=U(()=>P(()=>import("./BlVJHm2-.js").then(e=>e.ae),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default||e.default||e));function N(e){const t=r(),s=a(()=>e.tag&&typeof e.tag!="string"?e.tag:t.to?q:t.href?"a":e.tag?e.tag:"button"),n=a(()=>[{"--is-interactive":!["span"].includes(String(s.value))}]);return{componentTag:s,routableClassList:n}}function E(e){return{sizeClassList:a(()=>[{[`--${e.size}-size`]:e.size}])}}function k(e){return{colorClassList:a(()=>[{[`--${e.color}-color`]:e.color}])}}function R(e){const t=a(()=>[{"--is-active":e.active,"--is-interesting":e.interesting,"--is-disabled":e.disabled,"--is-error":e.error,"--is-required":e.required,"--is-loading":e.loading}]),s=a(()=>({...!!e.error&&{"data-error":!!e.error},...e.disabled&&{"data-disabled":e.disabled},...e.required&&{required:e.required},...e.disabled&&{disabled:e.disabled}}));return{stateClassList:t,stateAttrs:s}}function T(e){return{styleClassList:a(()=>[{"--is-outline":e.outline,"--is-rounded":e.rounded,"--is-icon":e.icon}])}}const D=c({inheritAttrs:!1,__name:"UiButton",props:{classPrefix:{},tag:{},size:{},color:{},active:{type:Boolean},interesting:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},error:{type:[String,Number,null,Boolean]},loading:{type:Boolean},outline:{type:Boolean},rounded:{type:Boolean},icon:{type:[Boolean,String]}},setup(e){const t=e,{getClassName:s}=p(t),{componentTag:n,routableClassList:u}=N(t),{sizeClassList:i}=E(t),{colorClassList:y}=k(t),{stateClassList:_,stateAttrs:C}=R(t),{styleClassList:L}=T(t),b=a(()=>[u.value,i.value,y.value,_.value,L.value]),v=r(),z=a(()=>({...v,...C.value}));return(A,F)=>(l(),S("div",{class:h([o(s)("Button"),o(b)])},[(l(),d(x(o(n)),$({class:o(s)("Button__wrapper")},o(z)),{default:m(()=>[f(A.$slots,"default",B(g(t)))]),_:3},16,["class"]))],2))}});function w(e){const t=r();return{componentAttrs:a(()=>({...t,...e}))}}const O=c({__name:"BaseButton",props:{classPrefix:{default:"Base"},tag:{},size:{default:"medium"},color:{},active:{type:Boolean},interesting:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},error:{type:[String,Number,null,Boolean]},loading:{type:Boolean},outline:{type:Boolean},rounded:{type:Boolean},icon:{type:[Boolean,String]}},setup(e){const t=e,{componentAttrs:s}=w(t);return(n,u)=>{const i=D;return l(),d(i,B(g(o(s))),{default:m(()=>[f(n.$slots,"default")]),_:3},16)}}});export{O as _,E as a,k as b,R as c,T as d,w as e,p as u};
