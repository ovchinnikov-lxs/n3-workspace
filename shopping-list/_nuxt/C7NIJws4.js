const __vite__fileDeps=["./C5ejyldr.js","./By1REIif.js","./DQ8erKAC.js","./entry.B5slr3w3.css","./BaseButton.CC-4kk7s.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as b,ab as at,T as lt,P as ct,y as p,c as O,i as ut,j as ft,S as ht,f as dt,q as mt,o as v,a as k,b as E,n as A,z as pt,x as W,F as j,k as R,t as F,H as gt,e as wt,E as yt,A as _t,B as Mt,_ as bt}from"./DQ8erKAC.js";import{_ as vt}from"./By1REIif.js";import{u as Et}from"./CeEks9af.js";function H(o){return lt()?(ct(o),!0):!1}function S(o){return typeof o=="function"?o():p(o)}const L=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const At=Object.prototype.toString,Pt=o=>At.call(o)==="[object Object]",Ct=()=>{};function zt(o){let t;function e(){return t||(t=o()),t}return e.reset=async()=>{const n=t;t=void 0,n&&await n},e}function St(o,t,e={}){const{immediate:n=!0}=e,s=b(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function a(){s.value=!1,i()}function l(...c){i(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,o(...c)},S(t))}return n&&(s.value=!0,L&&l()),H(a),{isPending:at(s),start:l,stop:a}}function Bt(o){var t;const e=S(o);return(t=e==null?void 0:e.$el)!=null?t:e}const kt=L?window:void 0,q=L?window.navigator:void 0;function X(...o){let t,e,n,s;if(typeof o[0]=="string"||Array.isArray(o[0])?([e,n,s]=o,t=kt):[t,e,n,s]=o,!t)return Ct;Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);const r=[],i=()=>{r.forEach(f=>f()),r.length=0},a=(f,u,h,d)=>(f.addEventListener(u,h,d),()=>f.removeEventListener(u,h,d)),l=ut(()=>[Bt(t),S(s)],([f,u])=>{if(i(),!f)return;const h=Pt(u)?{...u}:u;r.push(...e.flatMap(d=>n.map(g=>a(f,d,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return H(c),c}function Rt(){const o=b(!1),t=ht();return t&&ft(()=>{o.value=!0},t),o}function K(o){const t=Rt();return O(()=>(t.value,!!o()))}function Y(o,t={}){const{controls:e=!1,navigator:n=q}=t,s=K(()=>n&&"permissions"in n);let r;const i=typeof o=="string"?{name:o}:o,a=b(),l=()=>{r&&(a.value=r.state)},c=zt(async()=>{if(s.value){if(!r)try{r=await n.permissions.query(i),X(r,"change",l),l()}catch{a.value="prompt"}return r}});return c(),e?{state:a,isSupported:s,query:c}:a}function Ft(o={}){const{navigator:t=q,read:e=!1,source:n,copiedDuring:s=1500,legacy:r=!1}=o,i=K(()=>t&&"clipboard"in t),a=Y("clipboard-read"),l=Y("clipboard-write"),c=O(()=>i.value||r),f=b(""),u=b(!1),h=St(()=>u.value=!1,s);function d(){i.value&&U(a.value)?t.clipboard.readText().then(m=>{f.value=m}):f.value=it()}c.value&&e&&X(["copy","cut"],d);async function g(m=S(n)){c.value&&m!=null&&(i.value&&U(l.value)?await t.clipboard.writeText(m):B(m),f.value=m,u.value=!0,h.start())}function B(m){const w=document.createElement("textarea");w.value=m??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function it(){var m,w,D;return(D=(w=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:w.toString())!=null?D:""}function U(m){return m==="granted"||m==="prompt"}return{isSupported:c,text:f,copied:u,copy:g}}var M=(o=>(o[o.Border=-1]="Border",o[o.Data=0]="Data",o[o.Function=1]="Function",o[o.Position=2]="Position",o[o.Timing=3]="Timing",o[o.Alignment=4]="Alignment",o))(M||{}),Nt=Object.defineProperty,It=(o,t,e)=>t in o?Nt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,P=(o,t,e)=>(It(o,typeof t!="symbol"?t+"":t,e),e);const $t=[0,1],Z=[1,0],J=[2,3],Q=[3,2],Ot={L:$t,M:Z,Q:J,H:Q},Lt=/^[0-9]*$/,Tt=/^[A-Z0-9 $%*+.\/:-]*$/,N="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",T=1,x=40,G=3,xt=3,C=40,Vt=10,tt=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],et=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]];class Ut{constructor(t,e,n,s){if(this.version=t,this.ecc=e,P(this,"size"),P(this,"mask"),P(this,"modules",[]),P(this,"types",[]),t<T||t>x)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=t*4+17;const r=Array.from({length:this.size},()=>!1);for(let a=0;a<this.size;a++)this.modules.push(r.slice()),this.types.push(r.map(()=>0));this.drawFunctionPatterns();const i=this.addEccAndInterleave(n);if(this.drawCodewords(i),s===-1){let a=1e9;for(let l=0;l<8;l++){this.applyMask(l),this.drawFormatBits(l);const c=this.getPenaltyScore();c<a&&(s=l,a=c),this.applyMask(l)}}this.mask=s,this.applyMask(s),this.drawFormatBits(s)}getModule(t,e){return t>=0&&t<this.size&&e>=0&&e<this.size&&this.modules[e][t]}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2===0,M.Timing),this.setFunctionModule(n,6,n%2===0,M.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let s=0;s<e;s++)n===0&&s===0||n===0&&s===e-1||n===e-1&&s===0||this.drawAlignmentPattern(t[n],t[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.ecc[1]<<3|t;let n=e;for(let r=0;r<10;r++)n=n<<1^(n>>>9)*1335;const s=(e<<10|n)^21522;for(let r=0;r<=5;r++)this.setFunctionModule(8,r,y(s,r));this.setFunctionModule(8,7,y(s,6)),this.setFunctionModule(8,8,y(s,7)),this.setFunctionModule(7,8,y(s,8));for(let r=9;r<15;r++)this.setFunctionModule(14-r,8,y(s,r));for(let r=0;r<8;r++)this.setFunctionModule(this.size-1-r,8,y(s,r));for(let r=8;r<15;r++)this.setFunctionModule(8,this.size-15+r,y(s,r));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;for(let n=0;n<18;n++){const s=y(e,n),r=this.size-11+n%3,i=Math.floor(n/3);this.setFunctionModule(r,i,s),this.setFunctionModule(i,r,s)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let s=-4;s<=4;s++){const r=Math.max(Math.abs(s),Math.abs(n)),i=t+s,a=e+n;i>=0&&i<this.size&&a>=0&&a<this.size&&this.setFunctionModule(i,a,r!==2&&r!==4,M.Position)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let s=-2;s<=2;s++)this.setFunctionModule(t+s,e+n,Math.max(Math.abs(s),Math.abs(n))!==1,M.Alignment)}setFunctionModule(t,e,n,s=M.Function){this.modules[e][t]=n,this.types[e][t]=s}addEccAndInterleave(t){const e=this.version,n=this.ecc;if(t.length!==z(e,n))throw new RangeError("Invalid argument");const s=et[n[0]][e],r=tt[n[0]][e],i=Math.floor(I(e)/8),a=s-i%s,l=Math.floor(i/s),c=[],f=Kt(r);for(let h=0,d=0;h<s;h++){const g=t.slice(d,d+l-r+(h<a?0:1));d+=g.length;const B=Zt(g,f);h<a&&g.push(0),c.push(g.concat(B))}const u=[];for(let h=0;h<c[0].length;h++)c.forEach((d,g)=>{(h!==l-r||g>=a)&&u.push(d[h])});return u}drawCodewords(t){if(t.length!==Math.floor(I(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let s=0;s<this.size;s++)for(let r=0;r<2;r++){const i=n-r,l=(n+1&2)===0?this.size-1-s:s;!this.types[l][i]&&e<t.length*8&&(this.modules[l][i]=y(t[e>>>3],7-(e&7)),e++)}}}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let s;switch(t){case 0:s=(n+e)%2===0;break;case 1:s=e%2===0;break;case 2:s=n%3===0;break;case 3:s=(n+e)%3===0;break;case 4:s=(Math.floor(n/3)+Math.floor(e/2))%2===0;break;case 5:s=n*e%2+n*e%3===0;break;case 6:s=(n*e%2+n*e%3)%2===0;break;case 7:s=((n+e)%2+n*e%3)%2===0;break;default:throw new Error("Unreachable")}!this.types[e][n]&&s&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let r=0;r<this.size;r++){let i=!1,a=0;const l=[0,0,0,0,0,0,0];for(let c=0;c<this.size;c++)this.modules[r][c]===i?(a++,a===5?t+=G:a>5&&t++):(this.finderPenaltyAddHistory(a,l),i||(t+=this.finderPenaltyCountPatterns(l)*C),i=this.modules[r][c],a=1);t+=this.finderPenaltyTerminateAndCount(i,a,l)*C}for(let r=0;r<this.size;r++){let i=!1,a=0;const l=[0,0,0,0,0,0,0];for(let c=0;c<this.size;c++)this.modules[c][r]===i?(a++,a===5?t+=G:a>5&&t++):(this.finderPenaltyAddHistory(a,l),i||(t+=this.finderPenaltyCountPatterns(l)*C),i=this.modules[c][r],a=1);t+=this.finderPenaltyTerminateAndCount(i,a,l)*C}for(let r=0;r<this.size-1;r++)for(let i=0;i<this.size-1;i++){const a=this.modules[r][i];a===this.modules[r][i+1]&&a===this.modules[r+1][i]&&a===this.modules[r+1][i+1]&&(t+=xt)}let e=0;for(const r of this.modules)e=r.reduce((i,a)=>i+(a?1:0),e);const n=this.size*this.size,s=Math.ceil(Math.abs(e*20-n*10)/n)-1;return t+=s*Vt,t}getAlignmentPatternPositions(){if(this.version===1)return[];{const t=Math.floor(this.version/7)+2,e=this.version===32?26:Math.ceil((this.version*4+4)/(t*2-2))*2,n=[6];for(let s=this.size-7;n.length<t;s-=e)n.splice(1,0,s);return n}}finderPenaltyCountPatterns(t){const e=t[1],n=e>0&&t[2]===e&&t[3]===e*3&&t[4]===e&&t[5]===e;return(n&&t[0]>=e*4&&t[6]>=e?1:0)+(n&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){e[0]===0&&(t+=this.size),e.pop(),e.unshift(t)}}function _(o,t,e){if(t<0||t>31||o>>>t)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)e.push(o>>>n&1)}function y(o,t){return(o>>>t&1)!==0}class V{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}getData(){return this.bitData.slice()}}const Dt=[1,10,12,14],Wt=[2,9,11,13],jt=[4,8,16,16];function nt(o,t){return o[Math.floor((t+7)/17)+1]}function ot(o){const t=[];for(const e of o)_(e,8,t);return new V(jt,o.length,t)}function Yt(o){if(!st(o))throw new RangeError("String contains non-numeric characters");const t=[];for(let e=0;e<o.length;){const n=Math.min(o.length-e,3);_(Number.parseInt(o.substring(e,e+n),10),n*3+1,t),e+=n}return new V(Dt,o.length,t)}function Gt(o){if(!rt(o))throw new RangeError("String contains unencodable characters in alphanumeric mode");const t=[];let e;for(e=0;e+2<=o.length;e+=2){let n=N.indexOf(o.charAt(e))*45;n+=N.indexOf(o.charAt(e+1)),_(n,11,t)}return e<o.length&&_(N.indexOf(o.charAt(e)),6,t),new V(Wt,o.length,t)}function Ht(o){return o===""?[]:st(o)?[Yt(o)]:rt(o)?[Gt(o)]:[ot(Xt(o))]}function st(o){return Lt.test(o)}function rt(o){return Tt.test(o)}function qt(o,t){let e=0;for(const n of o){const s=nt(n.mode,t);if(n.numChars>=1<<s)return Number.POSITIVE_INFINITY;e+=4+s+n.bitData.length}return e}function Xt(o){o=encodeURI(o);const t=[];for(let e=0;e<o.length;e++)o.charAt(e)!=="%"?t.push(o.charCodeAt(e)):(t.push(Number.parseInt(o.substring(e+1,e+3),16)),e+=2);return t}function I(o){if(o<T||o>x)throw new RangeError("Version number out of range");let t=(16*o+128)*o+64;if(o>=2){const e=Math.floor(o/7)+2;t-=(25*e-10)*e-55,o>=7&&(t-=36)}return t}function z(o,t){return Math.floor(I(o)/8)-tt[t[0]][o]*et[t[0]][o]}function Kt(o){if(o<1||o>255)throw new RangeError("Degree out of range");const t=[];for(let n=0;n<o-1;n++)t.push(0);t.push(1);let e=1;for(let n=0;n<o;n++){for(let s=0;s<t.length;s++)t[s]=$(t[s],e),s+1<t.length&&(t[s]^=t[s+1]);e=$(e,2)}return t}function Zt(o,t){const e=t.map(n=>0);for(const n of o){const s=n^e.shift();e.push(0),t.forEach((r,i)=>e[i]^=$(r,s))}return e}function $(o,t){if(o>>>8||t>>>8)throw new RangeError("Byte out of range");let e=0;for(let n=7;n>=0;n--)e=e<<1^(e>>>7)*285,e^=(t>>>n&1)*o;return e}function Jt(o,t,e=1,n=40,s=-1,r=!0){if(!(T<=e&&e<=n&&n<=x)||s<-1||s>7)throw new RangeError("Invalid value");let i,a;for(i=e;;i++){const u=z(i,t)*8,h=qt(o,i);if(h<=u){a=h;break}if(i>=n)throw new RangeError("Data too long")}for(const u of[Z,J,Q])r&&a<=z(i,u)*8&&(t=u);const l=[];for(const u of o){_(u.mode[0],4,l),_(u.numChars,nt(u.mode,i),l);for(const h of u.getData())l.push(h)}const c=z(i,t)*8;_(0,Math.min(4,c-l.length),l),_(0,(8-l.length%8)%8,l);for(let u=236;l.length<c;u^=253)_(u,8,l);const f=Array.from({length:Math.ceil(l.length/8)},()=>0);return l.forEach((u,h)=>f[h>>>3]|=u<<7-(h&7)),new Ut(i,t,f,s)}function Qt(o,t){var u;const{ecc:e="L",boostEcc:n=!1,minVersion:s=1,maxVersion:r=40,maskPattern:i=-1,border:a=1}=t||{},l=typeof o=="string"?Ht(o):Array.isArray(o)?[ot(o)]:void 0;if(!l)throw new Error(`uqr only supports encoding string and binary data, but got: ${typeof o}`);const c=Jt(l,Ot[e],s,r,i,n),f=te({version:c.version,maskPattern:c.mask,size:c.size,data:c.modules,types:c.types},a);return t!=null&&t.invert&&(f.data=f.data.map(h=>h.map(d=>!d))),(u=t==null?void 0:t.onEncoded)==null||u.call(t,f),f}function te(o,t=1){if(!t)return o;const{size:e}=o,n=e+t*2;o.size=n,o.data.forEach(r=>{for(let i=0;i<t;i++)r.unshift(!1),r.push(!1)});for(let r=0;r<t;r++)o.data.unshift(Array.from({length:n},i=>!1)),o.data.push(Array.from({length:n},i=>!1));const s=M.Border;o.types.forEach(r=>{for(let i=0;i<t;i++)r.unshift(s),r.push(s)});for(let r=0;r<t;r++)o.types.unshift(Array.from({length:n},i=>s)),o.types.push(Array.from({length:n},i=>s));return o}function ee(o,t={}){const e=Qt(o,t),{pixelSize:n=10,whiteColor:s="white",blackColor:r="black"}=t,i=e.size*n,a=e.size*n;let l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${a} ${i}">`;const c=[];for(let f=0;f<e.size;f++)for(let u=0;u<e.size;u++){const h=u*n,d=f*n;e.data[f][u]&&c.push(`M${h},${d}h${n}v${n}h-${n}z`)}return l+=`<rect fill="${s}" width="${a}" height="${i}"/>`,l+=`<path fill="${r}" d="${c.join("")}"/>`,l+="</svg>",l}const ne=_t(()=>Mt(()=>import("./C5ejyldr.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.default||o)),oe={class:"BaseModal"},se=["innerHTML"],re=dt({__name:"BaseModal",setup(o){const t=ee(location.href,{whiteColor:"var(--ui-white-color)",blackColor:"var(--ui-black-color)"}),e=Et(),{t:n}=mt(),s=b(location.href),{copy:r,copied:i,isSupported:a}=Ft({source:s}),l=O(()=>`https://t.me/share/url?url=${location.href}`);return(c,f)=>{const u=ne,h=vt;return v(),k("div",oe,[E("div",{class:A(c.$style.wrapper),onClick:f[1]||(f[1]=yt((...d)=>p(e).changeState&&p(e).changeState(...d),["self"]))},[E("div",{class:A(c.$style.content)},[E("div",{class:A(c.$style.imageWrapper)},[E("div",{class:A(c.$style.image),innerHTML:p(t)},null,10,se)],2),p(a)?(v(),pt(u,{key:0,onClick:f[0]||(f[0]=d=>p(r)(p(s)))},{default:W(()=>[p(i)?(v(),k(j,{key:1},[R(F(p(n)("modal.button.share.link.copied")),1)],64)):(v(),k(j,{key:0},[R(F(p(n)("modal.button.share.link.copy")),1)],64))]),_:1})):gt("",!0),wt(h,{to:p(l),target:"_blank",size:"medium"},{default:W(()=>[R(F(p(n)("modal.button.share.tg")),1)]),_:1},8,["to"])],2)],2)])}}}),ie="_wrapper_1ctxf_7",ae="_content_1ctxf_16",le="_imageWrapper_1ctxf_26",ce="_image_1ctxf_26",ue={wrapper:ie,content:ae,imageWrapper:le,image:ce},fe={$style:ue},pe=bt(re,[["__cssModules",fe]]);export{pe as default};
