import{_ as h}from"./C_Mjye87.js";import{_ as y,u as g,r as f,f as k,c,a as s,g as x,v as w,F as u,h as d,o as i,t as p,b as C}from"./DpzQfQpH.js";const I=[],S={class:"_icon-container"},z={class:"_icon-search-wrapper"},B={class:"_icon-sprite-title"},F={class:"_icon-card"},N={class:"_icon-svg"},V={class:"_icon-name"},b=["value"],D={__name:"icons-page",props:{size:{type:Number,default:60},onClick:{type:Function,default:()=>()=>{}}},setup(r){const _=r;g({title:"Icons list - @nuxtjs/svg-sprite"});const l=f(""),m=k(()=>I.filter(e=>l.value?e.match(l.value||""):!0).reduce((e,t)=>{const[o,n]=t.split("/");return e[o]=e[o]||{name:o,symbols:[]},e[o].symbols.push({name:n,key:t}),e},{})),v=e=>{const t=e.target;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),_.onClick(`Icon "${e.target.value}" copied to clipboard`)};return(e,t)=>{const o=h;return i(),c("div",S,[s("div",z,[x(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),class:"_icon-search",placeholder:"Search Icons"},null,512),[[w,l.value]])]),s("div",null,[(i(!0),c(u,null,d(m.value,n=>(i(),c("div",{key:n.name,class:"_icon-preview-wrapper"},[s("h2",B,p(n.name),1),(i(!0),c(u,null,d(n.symbols,a=>(i(),c("div",{key:a.key,class:"_icon-preview"},[s("div",F,[s("div",N,[C(o,{name:a.key,title:a.key,class:"icon",width:r.size+"px",height:r.size+"px"},null,8,["name","title","width","height"])]),s("code",V,p(a.name),1),s("input",{class:"_icon-name-input",type:"text",readonly:"",value:a.key,onClick:v},null,8,b)])]))),128))]))),128))])])}}},q=y(D,[["__scopeId","data-v-75645886"]]);export{q as default};