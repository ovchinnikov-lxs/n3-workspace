import{w as d}from"./D3smB9dX.js";import{f as m,r as f,i as v,o as r,a as i,t as o,I as c,b as y,n as g}from"./Cuf4x8j3.js";const u={},w="",h="",_="icons";function x(t){return t.toLowerCase().replace(/\.svg$/,"").replace(/[^a-z0-9-:]/g,"-").replace(/:/g,"--")}const p=async t=>{let[e,s]=t.split("/");s||(s=e,e=_);const a=u[e]?await u[e]():"";return{sprite:e,icon:s,url:a+`#${x(s)}`,class:`${w} ${h}${e}`}},B=["viewBox"],C={key:0},S={key:1},N=["href"],I=m({__name:"svg-icon",props:{name:{type:String,required:!0},title:{type:String,default:null},desc:{type:String,default:null},viewBox:{type:String,default:null,validator(t){return t.split(" ").every(e=>!isNaN(parseInt(e)))}}},async setup(t){let e,s;const a=t,n=f({url:"",class:""});return n.value=([e,s]=d(()=>p(a.name)),e=await e,s(),e),v(()=>a.name,async l=>{n.value=await p(l)}),(l,$)=>(r(),i("svg",{viewBox:t.viewBox,class:g(n.value.class)},[t.title?(r(),i("title",C,o(t.title),1)):c("",!0),t.desc?(r(),i("desc",S,o(t.desc),1)):c("",!0),y("use",{href:n.value.url},null,8,N)],10,B))}});export{I as _};
