import{u as M,a as P,b as h,c as $,d as w,e as x}from"./DgK-EIgk.js";import{f as C,W as B,X as D,Y as J,c as u,Z as O,o as m,a as d,b as R,w as g,$ as f,a0 as v,y as a,a1 as q,H as E,n as _,z as H,a2 as W,a3 as X}from"./DMuR8BuB.js";const Y=["type"],Z=C({__name:"UiInput",props:B({id:{},type:{default:"text"},mask:{},placeholder:{},classPrefix:{},size:{},color:{},active:{type:Boolean},interesting:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},error:{type:[String,Number,null,Boolean]},loading:{type:Boolean},outline:{type:Boolean},rounded:{type:Boolean},icon:{type:[Boolean,String]}},{modelValue:{},modelModifiers:{}}),emits:B(["maska"],["update:modelValue"]),setup(r,{emit:p}){const e=r,c=p,l=D(r,"modelValue"),{getClassName:o}=M(e),{sizeClassList:S}=P(e),{colorClassList:U}=h(e),{stateClassList:N,stateAttrs:b}=$(e),{styleClassList:z}=w(e),I=J(),k=u(()=>({...b,...I,placeholder:e.placeholder})),V=u(()=>[S.value,U.value,N.value,z.value]),A=u(()=>{var s,t,i,n,y;return{type:e.type==="number"?"text":e.type,...e.type==="number"&&{inputmode:"numeric"},"data-maska":typeof e.mask=="string"?JSON.stringify(e.mask):JSON.stringify((s=e.mask)==null?void 0:s.mask),...typeof e.mask!="string"&&((t=e.mask)==null?void 0:t.tokens)&&{"data-maska-tokens":JSON.stringify(e.mask.tokens)},...typeof e.mask!="string"&&((i=e.mask)==null?void 0:i.tokensReplace)&&{"data-maska-tokens-replace":e.mask.tokensReplace},...typeof e.mask!="string"&&((n=e.mask)==null?void 0:n.eager)&&{"data-maska-eager":e.mask.eager},...typeof e.mask!="string"&&((y=e.mask)==null?void 0:y.reversed)&&{"data-maska-reversed":e.mask.reversed},onMaska:L=>c("maska",L.detail)}});return(s,t)=>{const i=O("maska");return m(),d("div",{class:_([a(o)("Input"),a(V)])},[R("div",{class:_(a(o)("Input__wrapper"))},[s.mask?g((m(),d("input",v({key:1,"onUpdate:modelValue":t[1]||(t[1]=n=>l.value=n)},{...a(k),...a(A)},{class:a(o)("Input__item")}),null,16)),[[f,l.value],[i]]):g((m(),d("input",v({key:0},a(k),{"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),type:s.type,class:a(o)("Input__item")}),null,16,Y)),[[f,l.value]]),s.$slots.inner?q(s.$slots,"inner",{key:2}):E("",!0)],2)],2)}}}),G=C({__name:"BaseInput",props:{id:{},type:{},mask:{},placeholder:{},classPrefix:{default:"Base"},size:{default:"medium"},color:{},active:{type:Boolean},interesting:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean},error:{type:[String,Number,null,Boolean]},loading:{type:Boolean},outline:{type:Boolean},rounded:{type:Boolean},icon:{type:[Boolean,String]}},setup(r){const p=r,{componentAttrs:e}=x(p);return(c,l)=>{const o=Z;return m(),H(o,W(X(a(e))),null,16)}}});export{G as _};
