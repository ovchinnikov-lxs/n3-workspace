const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BLMryGbq.js","./BlVJHm2-.js","./entry.CA6sBNp5.css","./BaseLoader.hv_z-gM-.css"])))=>i.map(i=>d[i]);
import{f as N,g as P,p as S,h as T,q as z,c as f,o as n,a as c,b as o,n as s,t as i,e as h,s as k,x as d,y as I,F as $,d as q,k as p,m as V,z as M,A as F,B as G,_ as O}from"./BlVJHm2-.js";import{_ as R}from"./DYshdbTl.js";import{w as U}from"./BCOmJiNW.js";import{u as X}from"./DjtgJEpz.js";import{u as Y}from"./9lN6ouxJ.js";const j=M(()=>G(()=>import("./BLMryGbq.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>_.default||_)),Q={class:"IndexPage"},W=["onClick"],Z=N({__name:"index",async setup(_){let l,y;const u=X(),a=P(),m=S(),v=T();z({title:()=>m.t("pages.index.title")});const{data:w,pending:b,refresh:L}=([l,y]=U(async()=>Y(async()=>{var e;try{if(!((e=a==null?void 0:a.value)!=null&&e.id))return[];const{data:t}=await u.from("Lists").select().eq("user_id",a.value.id);return t}catch(t){return console.error("INDEX_PAGE:USE_LAZY_ASYNC_DATA",t),[]}},"$pqtWcjQkdb")),l=await l,y(),l),g=f(()=>w.value||[]);async function A(){var e;try{if(!((e=a.value)!=null&&e.id))return!1;const t=await u.from("Lists").insert({user_id:a.value.id}).select("id");t.data&&await V(v(`/list/${t.data[0].id}`))}catch(t){console.error("INDEX_PAGE:ON_CREATE:",t)}}async function C(e){await u.from("Lists").delete().eq("id",e),await L()}const E=f(()=>e=>{const t=new Date(e.created_at).toLocaleDateString(m.locale.value,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return`${m.t("pages.index.list.item.title")} - ${t}`});return(e,t)=>{const D=R,x=j,B=F;return n(),c("div",Q,[o("div",{class:s(e.$style.wrapper)},[o("header",{class:s(e.$style.header)},[o("h3",null,i(e.$t("pages.index.subtitle")),1),h(D,{onClick:A},{default:k(()=>[p(i(e.$t("pages.index.button.add")),1)]),_:1})],2),o("div",{class:s(e.$style.list)},[d(b)?(n(),I(x,{key:0,class:s(e.$style.loader)},null,8,["class"])):d(g).length?(n(!0),c($,{key:1},q(d(g),r=>(n(),c("div",{key:r.id,class:s(e.$style.item)},[h(B,{to:`/list/${r.id}`,class:s(e.$style.link)},{default:k(()=>[p(i(d(E)(r)),1)]),_:2},1032,["to","class"]),o("div",{class:s(e.$style.delete),onClick:oe=>C(r.id)},i("❌"),10,W)],2))),128)):(n(),c($,{key:2},[p(i(e.$t("pages.index.list.empty")),1)],64))],2)],2)])}}}),H="_wrapper_gbm9g_7",J="_header_gbm9g_15",K="_list_gbm9g_22",ee="_item_gbm9g_30",te="_loader_gbm9g_35",se="_link_gbm9g_39",ae={wrapper:H,header:J,list:K,item:ee,loader:te,link:se,delete:"_delete_gbm9g_48"},ne={$style:ae},_e=O(Z,[["__cssModules",ne]]);export{_e as default};
