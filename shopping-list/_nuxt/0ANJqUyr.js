const __vite__fileDeps=["./DpJjlEes.js","./BCjo55vN.js","./entry.B5slr3w3.css","./BaseLoader.CoOK8RLW.css","./C3x29vzm.js","./BaseTextarea.C6QH-ZQq.css","./BtYSMTcS.js","./BaOzt4Xi.js","./BaseButton.CC-4kk7s.css","./Bf7UoK2e.js","./BaseListItem.-LxUZC1n.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as Z,p as K,q as Q,r as k,i as V,s as ee,D as te,c as ne,o as T,a as x,b as B,y as _,z as N,n as S,F as P,E as ae,e as z,G as re,x as oe,d as se,H as ie,A as I,k as ue,t as le,B as A,I as ce,J as de,_ as fe}from"./BCjo55vN.js";import{u as me}from"./BJKxlhZk.js";import{w as _e}from"./BVRUP_az.js";import{c as w,g as pe}from"./Cpj98o6Y.js";const ve="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let be=(e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=ve[o[e]&63];return t};function ye(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Y=ye,ge=typeof w=="object"&&w&&w.Object===Object&&w,he=ge,Te=he,Se=typeof self=="object"&&self&&self.Object===Object&&self,$e=Te||Se||Function("return this")(),H=$e,Le=H,je=function(){return Le.Date.now()},Ee=je,Oe=/\s/;function xe(e){for(var t=e.length;t--&&Oe.test(e.charAt(t)););return t}var we=xe,Ie=we,Ae=/^\s+/;function Ce(e){return e&&e.slice(0,Ie(e)+1).replace(Ae,"")}var De=Ce,ke=H,Re=ke.Symbol,J=Re,G=J,X=Object.prototype,Ve=X.hasOwnProperty,Be=X.toString,j=G?G.toStringTag:void 0;function Ne(e){var t=Ve.call(e,j),o=e[j];try{e[j]=void 0;var f=!0}catch{}var m=Be.call(e);return f&&(t?e[j]=o:delete e[j]),m}var Pe=Ne,ze=Object.prototype,Ge=ze.toString;function Me(e){return Ge.call(e)}var Fe=Me,M=J,We=Pe,Ue=Fe,qe="[object Null]",Ye="[object Undefined]",F=M?M.toStringTag:void 0;function He(e){return e==null?e===void 0?Ye:qe:F&&F in Object(e)?We(e):Ue(e)}var Je=He;function Xe(e){return e!=null&&typeof e=="object"}var Ze=Xe,Ke=Je,Qe=Ze,et="[object Symbol]";function tt(e){return typeof e=="symbol"||Qe(e)&&Ke(e)==et}var nt=tt,at=De,W=Y,rt=nt,U=NaN,ot=/^[-+]0x[0-9a-f]+$/i,st=/^0b[01]+$/i,it=/^0o[0-7]+$/i,ut=parseInt;function lt(e){if(typeof e=="number")return e;if(rt(e))return U;if(W(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=W(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=at(e);var o=st.test(e);return o||it.test(e)?ut(e.slice(2),o?2:8):ot.test(e)?U:+e}var ct=lt,dt=Y,R=Ee,q=ct,ft="Expected a function",mt=Math.max,_t=Math.min;function pt(e,t,o){var f,m,d,p,c,r,v=0,E=!1,b=!1,y=!0;if(typeof e!="function")throw new TypeError(ft);t=q(t)||0,dt(o)&&(E=!!o.leading,b="maxWait"in o,d=b?mt(q(o.maxWait)||0,t):d,y="trailing"in o?!!o.trailing:y);function $(a){var i=f,u=m;return f=m=void 0,v=a,p=e.apply(u,i),p}function C(a){return v=a,c=setTimeout(n,t),E?$(a):p}function D(a){var i=a-r,u=a-v,L=t-i;return b?_t(L,d-u):L}function O(a){var i=a-r,u=a-v;return r===void 0||i>=t||i<0||b&&u>=d}function n(){var a=R();if(O(a))return s(a);c=setTimeout(n,D(a))}function s(a){return c=void 0,y&&f?$(a):(f=m=void 0,p)}function g(){c!==void 0&&clearTimeout(c),v=0,f=r=m=c=void 0}function h(){return c===void 0?p:s(R())}function l(){var a=R(),i=O(a);if(f=arguments,m=this,r=a,i){if(c===void 0)return C(r);if(b)return clearTimeout(c),c=setTimeout(n,t),$(r)}return c===void 0&&(c=setTimeout(n,t)),p}return l.cancel=g,l.flush=h,l}var vt=pt;const bt=pe(vt),yt=I(()=>A(()=>import("./DpJjlEes.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.default||e)),gt=I(()=>A(()=>import("./C3x29vzm.js"),__vite__mapDeps([4,1,2,5]),import.meta.url).then(e=>e.default||e)),ht=I(()=>A(()=>import("./BtYSMTcS.js"),__vite__mapDeps([6,7,1,2,8]),import.meta.url).then(e=>e.default||e)),Tt=I(()=>A(()=>import("./Bf7UoK2e.js"),__vite__mapDeps([9,1,2,10]),import.meta.url).then(e=>e.default||e)),St={class:"ListDetailPage"},$t=Z({__name:"[id]",async setup(e){let t,o;const f=K(),m=Q(),{data:d,pending:p,error:c}=([t,o]=_e(async()=>me(async()=>{try{const n=ce(),{data:s}=await f.from("Lists").select().eq("id",n.params.id);if(!(s!=null&&s.length))return null;const[g]=s;return g}catch(n){return console.error("LIST_DETAIL_PAGE:USE_LAZY_ASYNC_DATA",n),null}},"$d5dhPY7EYe")),t=await t,o(),t),r=k([]);V(p,n=>{if(!n){if(c.value||!d.value)throw de({statusCode:404,message:m.t("pages.listDetail.notFound.message"),fatal:!0});r.value=d.value.list||[]}},{immediate:!0}),ee({title:()=>{if(!d.value)return"";const n=new Date(d.value.created_at).toLocaleDateString(m.locale.value,{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return`${m.t("pages.listDetail.title")} - ${n}`}});const v=k(!1);V(r,(n,s)=>{bt(async()=>{var h;if(!((h=d.value)!=null&&h.id)||s===void 0)return!1;v.value=!0,await f.from("Lists").update({list:n}).eq("id",d.value.id),v.value=!1},300)()},{deep:!0});function E(){const n=k(""),s=async()=>{if(!n.value||!d.value)return!1;n.value.split(`
`).forEach(l=>{const[a,i]=l.split(/,\s*/);r.value.push({id:be(4),name:a,count:Number(i||1)})}),n.value="",setTimeout(()=>{const l=document.querySelector("#product-input");l==null||l.focus()},100)};async function g(l){r.value=r.value.filter(a=>a.id!==l)}async function h(l,a){r.value=r.value.map(i=>i.id===l?a:i)}return{actualValue:n,onSubmit:s,onRemove:g,onChange:h}}const{onSubmit:b,actualValue:y,onChange:$,onRemove:C}=E(),D=te(),O=ne(()=>[{[D["--is-loading"]]:v.value}]);return(n,s)=>{var i;const g=yt,h=gt,l=ht,a=Tt;return T(),x("div",St,[B("div",{class:S([n.$style.wrapper,_(O)])},[_(p)?(T(),N(g,{key:0,class:S(n.$style.loader)},null,8,["class"])):(T(),x(P,{key:1},[B("form",{class:S(n.$style.header),onSubmit:s[1]||(s[1]=ae((...u)=>_(b)&&_(b)(...u),["prevent"]))},[z(h,{id:"product-input",modelValue:_(y),"onUpdate:modelValue":s[0]||(s[0]=u=>re(y)?y.value=u:null),placeholder:n.$t("pages.listDetail.input.placeholder"),class:S(n.$style.input)},null,8,["modelValue","placeholder","class"]),z(l,{disabled:!_(y),class:S(n.$style.button)},{default:oe(()=>[ue(le(n.$t("pages.listDetail.button.add")),1)]),_:1},8,["disabled","class"])],34),(i=_(r))!=null&&i.length?(T(),x("div",{key:0,class:S(n.$style.list)},[(T(!0),x(P,null,se(_(r),u=>(T(),N(a,{key:u.id,name:u.name,count:u.count,onRemove:L=>_(C)(u.id),onChange:L=>_($)(u.id,{...u,...L})},null,8,["name","count","onRemove","onChange"]))),128))],2)):ie("",!0)],64))],2)])}}}),Lt="_wrapper_1xdpg_7",jt="_loader_1xdpg_21",Et="_header_1xdpg_25",Ot="_input_1xdpg_41",xt="_button_1xdpg_50",wt="_list_1xdpg_54",It={wrapper:Lt,loader:jt,header:Et,input:Ot,button:xt,list:wt},At={$style:It},Vt=fe($t,[["__cssModules",At]]);export{Vt as default};
