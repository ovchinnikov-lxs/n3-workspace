const __vite__fileDeps=["./CL7OX6z_.js","./CZX-o3-m.js","./entry.B5slr3w3.css","./BaseLoader.CoOK8RLW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as N,p as P,g as S,q as T,h as z,s as I,c as f,o as n,a as c,b as o,n as s,t as i,e as h,x as k,y as d,z as q,F as $,d as V,k as p,A as M,m as F,B as G,C as O,_ as R}from"./CZX-o3-m.js";import{_ as U}from"./BN_FlngN.js";import{u as X}from"./DkmUE19z.js";import{w as Y}from"./yghpQrMH.js";const j=M(()=>G(()=>import("./CL7OX6z_.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>_.default||_)),Q={class:"IndexPage"},W=["onClick"],Z=N({__name:"index",async setup(_){let l,y;const u=P(),a=S(),m=T(),v=z();I({title:()=>m.t("pages.index.title")});const{data:w,pending:b,refresh:C}=([l,y]=Y(async()=>X(async()=>{var e;try{if(!((e=a==null?void 0:a.value)!=null&&e.id))return[];const{data:t}=await u.from("Lists").select().eq("user_id",a.value.id);return t}catch(t){return console.error("INDEX_PAGE:USE_LAZY_ASYNC_DATA",t),[]}},"$pqtWcjQkdb")),l=await l,y(),l),g=f(()=>w.value||[]);async function L(){var e;try{if(!((e=a.value)!=null&&e.id))return!1;const t=await u.from("Lists").insert({user_id:a.value.id}).select("id");t.data&&await F(v(`/list/${t.data[0].id}`))}catch(t){console.error("INDEX_PAGE:ON_CREATE:",t)}}async function A(e){await u.from("Lists").delete().eq("id",e),await C()}const E=f(()=>e=>{const t=new Date(e.created_at).toLocaleDateString(m.locale.value,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return`${m.t("pages.index.list.item.title")} - ${t}`});return(e,t)=>{const D=U,x=j,B=O;return n(),c("div",Q,[o("div",{class:s(e.$style.wrapper)},[o("header",{class:s(e.$style.header)},[o("h3",null,i(e.$t("pages.index.subtitle")),1),h(D,{onClick:L},{default:k(()=>[p(i(e.$t("pages.index.button.add")),1)]),_:1})],2),o("div",{class:s(e.$style.list)},[d(b)?(n(),q(x,{key:0,class:s(e.$style.loader)},null,8,["class"])):d(g).length?(n(!0),c($,{key:1},V(d(g),r=>(n(),c("div",{key:r.id,class:s(e.$style.item)},[h(B,{to:`/list/${r.id}`,class:s(e.$style.link)},{default:k(()=>[p(i(d(E)(r)),1)]),_:2},1032,["to","class"]),o("div",{class:s(e.$style.delete),onClick:oe=>A(r.id)},i("❌"),10,W)],2))),128)):(n(),c($,{key:2},[p(i(e.$t("pages.index.list.empty")),1)],64))],2)],2)])}}}),H="_wrapper_gbm9g_7",J="_header_gbm9g_15",K="_list_gbm9g_22",ee="_item_gbm9g_30",te="_loader_gbm9g_35",se="_link_gbm9g_39",ae={wrapper:H,header:J,list:K,item:ee,loader:te,link:se,delete:"_delete_gbm9g_48"},ne={$style:ae},de=R(Z,[["__cssModules",ne]]);export{de as default};
