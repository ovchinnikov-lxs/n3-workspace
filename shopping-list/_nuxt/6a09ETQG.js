import{_ as U}from"./BaGRo9bd.js";import{f as z,p as T,D as j,q as E,s as P,r as q,U as w,c as h,g as I,h as D,i as F,o as n,a as u,b as y,t as o,e as r,y as s,x as d,V as x,n as $,E as A,C as G,k as c,F as b,H,l as O,m as R,_ as J}from"./CZX-o3-m.js";import{_ as K}from"./BN_FlngN.js";const Q={class:"RegisterPage"},W=z({__name:"register",setup(se){const V=T(),k=j(),m=E();P({title:()=>m.t("pages.register.title")});const l=q(!1),a=w({email:"",password:""}),t=w({status:"",details:""}),v=h(()=>m.t(`pages.register.info.${t.status}`));async function C(){if(l.value)return!1;t.details="",t.status="";try{l.value=!0;const{error:e}=await V.auth.signUp(a);e?(t.details=e.message,t.status="error"):t.status="success"}catch(e){t.status="undefinedError",console.error("register_PAGE:ON_SUBMIT:",e)}finally{l.value=!1}}const B=h(()=>[[k[`--${t.status}-status`]]]),M=I(),S=D();return F(M,async e=>{e&&(await O(),await R(S("/"),{replace:!0}))},{immediate:!0}),(e,i)=>{var f,_;const g=U,L=G,N=K;return n(),u("div",Q,[y("form",{class:$(e.$style.wrapper),onSubmit:A(C,["prevent"])},[y("h2",null,o(e.$t("pages.register.subtitle")),1),r(g,{id:"register-email",modelValue:s(a).email,"onUpdate:modelValue":i[0]||(i[0]=p=>s(a).email=p),maxlength:"255",autocomplete:"email",required:"",type:"email",placeholder:e.$t("pages.register.email.placeholder"),title:e.$t("pages.register.email.title")},null,8,["modelValue","placeholder","title"]),r(g,{id:"register-password",modelValue:s(a).password,"onUpdate:modelValue":i[1]||(i[1]=p=>s(a).password=p),maxlength:"255",autocomplete:"password",required:"",type:"password",placeholder:e.$t("pages.register.password.placeholder"),title:e.$t("pages.register.password.title")},null,8,["modelValue","placeholder","title"]),r(L,{to:"/login"},{default:d(()=>[c(o(e.$t("pages.register.loginLink")),1)]),_:1}),r(N,{disabled:!((f=s(a).email)!=null&&f.length)&&!((_=s(a).password)!=null&&_.length)},{default:d(()=>[s(l)?(n(),u(b,{key:0},[c(o(e.$t("pages.register.button.loading")),1)],64)):(n(),u(b,{key:1},[c(o(e.$t("pages.register.button.submit")),1)],64))]),_:1},8,["disabled"]),r(x,{name:"bottom",mode:"out-in"},{default:d(()=>[s(t).status?(n(),u("div",{key:0,class:$([e.$style.info,s(B)])},o(s(v))+" "+o(s(t).details),3)):H("",!0)]),_:1})],34)])}}}),X="_wrapper_jz0t5_7",Y="_info_jz0t5_15",Z={wrapper:X,info:Y,"--success-status":"_--success-status_jz0t5_18","--error-status":"_--error-status_jz0t5_21"},ee={$style:Z},re=J(W,[["__cssModules",ee]]);export{re as default};
