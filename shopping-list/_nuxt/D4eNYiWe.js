import{f as r,Y as u,r as i,i as c,l as f,j as d,w as m,v as p,o as x,a as v}from"./BlVJHm2-.js";const g=r({__name:"BaseTextarea",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(s){const a=u(s,"modelValue"),e=i();function t(){if(!e.value)return!1;e.value.style.height="5px",e.value.style.height=`${e.value.scrollHeight}px`}function o(){t()}return c(()=>a.value,async()=>{await f(),t()}),d(()=>{t()}),(h,l)=>m((x(),v("textarea",{ref_key:"textareaRef",ref:e,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),cols:"1",class:"BaseTextarea",onInput:o},null,544)),[[p,a.value]])}});export{g as default};
