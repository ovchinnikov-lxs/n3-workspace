if(!self.define){let n,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=e,document.head.appendChild(n)}else n=s,importScripts(s),e()})).then((()=>{let n=e[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(i,u)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let r={};const o=n=>s(n,l),c={module:{uri:l},exports:r,require:o};e[l]=Promise.all(i.map((n=>c[n]||o(n)))).then((n=>(u(...n),r)))}}define(["./workbox-06abd18f"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_icons",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"_nuxt/_id_.697ZGH-Z.css",revision:null},{url:"_nuxt/25oenpMq.js",revision:null},{url:"_nuxt/AYUcfahc.js",revision:null},{url:"_nuxt/B_OBdorj.js",revision:null},{url:"_nuxt/BaseButton.CC-4kk7s.css",revision:null},{url:"_nuxt/BaseInput.juBS36OR.css",revision:null},{url:"_nuxt/BaseListItem.-LxUZC1n.css",revision:null},{url:"_nuxt/BaseLoader.CoOK8RLW.css",revision:null},{url:"_nuxt/BaseModal.DWNFTozT.css",revision:null},{url:"_nuxt/BaseTextarea.C6QH-ZQq.css",revision:null},{url:"_nuxt/BkuTpr1F.js",revision:null},{url:"_nuxt/BSQf_OUC.js",revision:null},{url:"_nuxt/BtuHh1SL.js",revision:null},{url:"_nuxt/BupMvxZ6.js",revision:null},{url:"_nuxt/BxPKQe28.js",revision:null},{url:"_nuxt/BYoZvR6M.js",revision:null},{url:"_nuxt/C9Yf88Gf.js",revision:null},{url:"_nuxt/CGYY1x1z.js",revision:null},{url:"_nuxt/CNrzEThh.js",revision:null},{url:"_nuxt/confirm.9DoKEmOW.css",revision:null},{url:"_nuxt/Cp8bwhMy.js",revision:null},{url:"_nuxt/CpEQieKr.js",revision:null},{url:"_nuxt/Cpj98o6Y.js",revision:null},{url:"_nuxt/CudATSw_.js",revision:null},{url:"_nuxt/CzoP6pt8.js",revision:null},{url:"_nuxt/D3dTaAyO.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DAGu6hy0.js",revision:null},{url:"_nuxt/default.BdHr54t1.css",revision:null},{url:"_nuxt/DHQGxp4k.js",revision:null},{url:"_nuxt/entry.B5slr3w3.css",revision:null},{url:"_nuxt/F3w7wvVS.js",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.a1YMqJr7.css",revision:null},{url:"_nuxt/login.BxBod5py.css",revision:null},{url:"_nuxt/TKkBddOc.js",revision:null},{url:"_nuxt/Xf8xOg6_.js",revision:null},{url:"200",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"404",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"confirm",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"en/_icons",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"en/confirm",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"en",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"en/login",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"en/register",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"favicon.ico",revision:"4a959b4103b63ed4ec643321f32a25d7"},{url:"img/144x144.png",revision:"0ab5b17411044b92b9c96d24ebdb753d"},{url:"img/512x512.png",revision:"cd75044e24160ae9a5490460816f15ab"},{url:"img/72x72.png",revision:"79b88a5f5603400cc2bae989e0fd71a7"},{url:"img/96x96.png",revision:"d8eaaa078cf547686a0583e7534cac05"},{url:"img/logo.svg",revision:"75e0ed55d6fc8324c6e4d7eea8d7c205"},{url:"/n3-workspace/shopping-list/",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"login",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"register",revision:"7014fd4daafcec0b47c5a85eab88425c"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"_nuxt/builds/latest.json",revision:"3591acc05296a9ac3184e7eaa504035e"},{url:"_nuxt/builds/meta/af57d680-ccac-41ce-93f0-c36127f81acb.json",revision:null},{url:"manifest.webmanifest",revision:"56b554428db21bf81fd975cfad32b677"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/n3-workspace/shopping-list/"),{denylist:[/^\//]})),n.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new n.CacheFirst({cacheName:"google-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),n.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new n.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
