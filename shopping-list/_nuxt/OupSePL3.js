const __vite__fileDeps=["./BtYSMTcS.js","./BaOzt4Xi.js","./BCjo55vN.js","./entry.B5slr3w3.css","./BaseButton.CC-4kk7s.css","./C5gOap6N.js","./BaseModal.DWNFTozT.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a5 as S,a6 as M,f as $,p as C,g as P,h as D,I as V,o as d,a as y,b as n,n as e,e as p,x as m,V as b,y as u,t as o,H as g,m as L,C as j,z as k,k as h,A as z,B as O,_ as f,q as E,w as N,a7 as T,F as A,d as F,a8 as R,a9 as x,a1 as H}from"./BCjo55vN.js";const B=S("modal",{state:()=>({isOpened:!1}),actions:{changeState(){this.isOpened=!this.isOpened}}}),I=M("/img/logo.svg"),U=z(()=>O(()=>import("./BtYSMTcS.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(l=>l.default||l)),q={class:"BaseHeader"},G=n("h1",null,o("Shopping list"),-1),J=n("img",{src:I,alt:"",loading:"lazy"},null,-1),K=$({__name:"BaseHeader",setup(l){const c=C(),s=P(),t=D(),_=()=>{B().changeState()},r=V(),a=async()=>{await c.auth.signOut(),L(t("/login"))};return(i,ze)=>{const w=j,v=U;return d(),y("header",q,[n("div",{class:e(i.$style.wrapper)},[n("main",{class:e([i.$style.container,"container"])},[p(w,{to:"/",class:e(i.$style.logo)},{default:m(()=>[G,J]),_:1},8,["class"]),p(b,{name:"bottom",mode:"out-in"},{default:m(()=>[u(r).params.id?(d(),k(v,{key:0,size:"small",onClick:_},{default:m(()=>[h(o(i.$t("header.button.share")),1)]),_:1})):g("",!0)]),_:1}),u(s)?(d(),y("div",{key:0,class:e(i.$style.user)},[n("b",null,o(u(s).email),1),p(v,{size:"small",class:e(i.$style.signOut),onClick:a},{default:m(()=>[h(o(i.$t("button.signOut")),1)]),_:1},8,["class"])],2)):g("",!0)],2)],2)])}}}),Q="_wrapper_lnxgy_7",W="_container_lnxgy_25",X="_logo_lnxgy_31",Y="_user_lnxgy_53",Z="_signOut_lnxgy_70",ee={wrapper:Q,container:W,logo:X,user:Y,signOut:Z},se={$style:ee},te=f(K,[["__cssModules",se]]),ae={class:"BaseFooter"},oe=["selected","value"],ne="Language",le=$({__name:"BaseFooter",setup(l){const c=E();function s(t){const _=t.target,r=R();try{L(r(_.value))}catch{}}return(t,_)=>{const r=x;return d(),y("div",ae,[n("div",{class:e(t.$style.wrapper)},[n("main",{class:e([t.$style.container,"container"])},[h(o(t.$t("app.version"))+o(": 2.0.0 |")+" ",1),p(r,{to:"https://github.com/ovchinnikov-lxs",class:e(t.$style.link)},{default:m(()=>[h(o("ME"))]),_:1},8,["class"]),h(" | "),p(r,{to:"https://github.com/ovchinnikov-lxs/shopping-list",class:e(t.$style.link)},{default:m(()=>[h(o("REPO"))]),_:1},8,["class"]),N(n("select",{"onUpdate:modelValue":_[0]||(_[0]=a=>u(c).locale.value=a),class:e(t.$style.locale),"aria-label":ne,onChange:s},[(d(!0),y(A,null,F(u(c).availableLocales,a=>(d(),y("option",{key:a,selected:u(c).locale.value===a,value:a},o(a),9,oe))),128))],34),[[T,u(c).locale.value]])],2)],2)])}}}),ce="_wrapper_1mvzz_7",_e="_container_1mvzz_19",re="_link_1mvzz_24",ie="_locale_1mvzz_28",ue={wrapper:ce,container:_e,link:re,locale:ie},de={$style:ue},pe=f(le,[["__cssModules",de]]),me=z(()=>O(()=>import("./C5gOap6N.js"),__vite__mapDeps([5,2,3,1,4,6]),import.meta.url).then(l=>l.default||l)),he=$({__name:"default",setup(l){const c=B();return(s,t)=>{const _=te,r=me,a=pe;return d(),y("div",{class:e(s.$style.DefaultLayout)},[p(_,{class:e(s.$style.header)},null,8,["class"]),n("div",{class:e(["container",s.$style.container])},[H(s.$slots,"default")],2),p(b,{name:"bottom",mode:"out-in"},{default:m(()=>[u(c).isOpened?(d(),k(r,{key:0,class:e(s.$style.modal)},null,8,["class"])):g("",!0)]),_:1}),p(a,{class:e(s.$style.footer)},null,8,["class"])],2)}}}),ye="_DefaultLayout_8bjah_7",ge="_header_8bjah_16",$e="_footer_8bjah_17",fe="_container_8bjah_21",ve="_modal_8bjah_33",be={DefaultLayout:ye,header:ge,footer:$e,container:fe,modal:ve},Le={$style:be},ke=f(he,[["__cssModules",Le]]),Be=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{Be as _,B as u};