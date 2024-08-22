import{_ as z}from"./DPuiCujd.js";import{f as I,p as P,D as T,q as U,s as j,r as E,U as w,c as h,g as q,h as D,i as F,o as r,a as u,b as y,t as o,e as l,y as s,x as d,V as G,n as $,E as O,C as x,k as c,F as b,H as A,l as H,m as W,_ as J}from"./BCjo55vN.js";import{_ as K}from"./BaOzt4Xi.js";const Q={class:"LoginPage"},R=I({__name:"login",setup(se){const V=P(),k=T(),m=U();j({title:()=>m.t("pages.login.title")});const n=E(!1),a=w({email:"",password:""}),t=w({status:"",details:""}),v=h(()=>m.t(`pages.login.info.${t.status}`));async function C(){if(n.value)return!1;t.details="",t.status="";try{n.value=!0;const{error:e}=await V.auth.signInWithPassword(a);e?(t.details=e.message,t.status="error"):t.status="success"}catch(e){t.status="undefinedError",console.error("LOGIN_PAGE:ON_SUBMIT:",e)}finally{n.value=!1}}const L=h(()=>[[k[`--${t.status}-status`]]]),B=q(),M=D();return F(B,async e=>{e&&(await H(),await W(M("/"),{replace:!0}))},{immediate:!0}),(e,i)=>{var f,_;const g=z,N=x,S=K;return r(),u("div",Q,[y("form",{class:$(e.$style.wrapper),onSubmit:O(C,["prevent"])},[y("h2",null,o(e.$t("pages.login.subtitle")),1),l(g,{id:"login-email",modelValue:s(a).email,"onUpdate:modelValue":i[0]||(i[0]=p=>s(a).email=p),maxlength:"255",autocomplete:"email",required:"",type:"email",placeholder:e.$t("pages.login.email.placeholder"),title:e.$t("pages.login.email.title")},null,8,["modelValue","placeholder","title"]),l(g,{id:"login-password",modelValue:s(a).password,"onUpdate:modelValue":i[1]||(i[1]=p=>s(a).password=p),maxlength:"255",autocomplete:"password",required:"",type:"password",placeholder:e.$t("pages.login.password.placeholder"),title:e.$t("pages.login.password.title")},null,8,["modelValue","placeholder","title"]),l(N,{to:"/register"},{default:d(()=>[c(o(e.$t("pages.login.registerLink")),1)]),_:1}),l(S,{disabled:!((f=s(a).email)!=null&&f.length)&&!((_=s(a).password)!=null&&_.length)},{default:d(()=>[s(n)?(r(),u(b,{key:0},[c(o(e.$t("pages.login.button.loading")),1)],64)):(r(),u(b,{key:1},[c(o(e.$t("pages.login.button.submit")),1)],64))]),_:1},8,["disabled"]),l(G,{name:"bottom",mode:"out-in"},{default:d(()=>[s(t).status?(r(),u("div",{key:0,class:$([e.$style.info,s(L)])},o(s(v))+" "+o(s(t).details),3)):A("",!0)]),_:1})],34)])}}}),X="_wrapper_jz0t5_7",Y="_info_jz0t5_15",Z={wrapper:X,info:Y,"--success-status":"_--success-status_jz0t5_18","--error-status":"_--error-status_jz0t5_21"},ee={$style:Z},le=J(R,[["__cssModules",ee]]);export{le as default};
