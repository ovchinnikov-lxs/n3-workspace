import{f as r,o as i,a as l,b as o,n as e,k as u,t as c,H as d,_ as p}from"./BnYqZO2s.js";const _={class:"BaseListItem"},v=["src"],y=r({__name:"BaseListItem",props:{name:{},count:{}},emits:["change","remove"],setup(N,{emit:m}){const a=m;return(s,n)=>(i(),l("div",_,[o("div",{class:e(s.$style.wrapper)},[o("img",{src:`https://cataas.com/cat?width=48&height=48&v=${s.name}`,alt:"",loading:"lazy",class:e(s.$style.icon)},null,10,v),o("div",{class:e(s.$style.name)},[u(c(s.name)+" ",1),+s.count>1?(i(),l("div",{key:0,class:e(s.$style.count)},c(s.count),3)):d("",!0)],2),o("div",{class:e(s.$style.action)},[o("div",{class:e(s.$style.change)},[o("div",{class:e(s.$style.plus),onClick:n[0]||(n[0]=t=>a("change",{count:+s.count+1}))},null,2),o("div",{class:e([s.$style.minus,{[s.$style["--is-disabled"]]:+s.count<2}]),onClick:n[1]||(n[1]=t=>a("change",{count:+s.count-1}))},null,2)],2),o("div",{class:e(s.$style.remove),onClick:n[2]||(n[2]=t=>a("remove"))},null,2)],2)],2)]))}}),$="_wrapper_i2a4o_8",g="_icon_i2a4o_20",h="_name_i2a4o_28",k="_count_i2a4o_35",f="_action_i2a4o_43",B="_change_i2a4o_49",C="_plus_i2a4o_55",w="_minus_i2a4o_56",b="_remove_i2a4o_57",I={wrapper:$,icon:g,name:h,count:k,action:f,change:B,plus:C,minus:w,remove:b,"--is-disabled":"_--is-disabled_i2a4o_90"},L={$style:I},z=p(y,[["__cssModules",L]]);export{z as default};
