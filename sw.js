if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let u={};const l=e=>i(e,o),a={module:{uri:o},exports:u,require:l};n[o]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(s(...e),u)))}}define(["./workbox-06abd18f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_icons",revision:"062d2d6c97ac772615a862f57a8aaa25"},{url:"_nuxt/BN1ZZHOV.js",revision:null},{url:"_nuxt/C6RFJtSw.js",revision:null},{url:"_nuxt/CaYnVRVt.js",revision:null},{url:"_nuxt/Cc4nB9sW.js",revision:null},{url:"_nuxt/CgV1vkrk.js",revision:null},{url:"_nuxt/CSG0obXu.js",revision:null},{url:"_nuxt/CvgfTZO1.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DDuLQa9D.js",revision:null},{url:"_nuxt/DYhGbgW2.js",revision:null},{url:"_nuxt/Dzgulu7l.js",revision:null},{url:"_nuxt/entry.D3VdJ1pb.css",revision:null},{url:"_nuxt/error-404.BIzBJQeK.css",revision:null},{url:"_nuxt/error-500.CoWjIC1p.css",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.B3pkoT11.css",revision:null},{url:"_nuxt/IndexSkills.RAN0WZ3n.css",revision:null},{url:"_nuxt/XSdLEaMH.js",revision:null},{url:"200",revision:"6d8e42662a184cdf739fc52991b7cb3d"},{url:"404",revision:"6d8e42662a184cdf739fc52991b7cb3d"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"/n3-workspace/",revision:"18deccad5ce95b9f62aff43dcd7b7834"},{url:"print",revision:"03be5a199fc0f03eb937a73f46d17d1e"},{url:"ru/_icons",revision:"578094f6fb6a6af52a94fefc133b838a"},{url:"ru",revision:"790ca33c41a4bd885e86f45a3e14990f"},{url:"ru/print",revision:"b65e7732f306cec6aba4a785932c0f01"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"_icons/_payload.json",revision:"e6aad9be7ff73a8fc4441020245c803b"},{url:"_payload.json",revision:"8df1e91636523fe744949bbf9a25238b"},{url:"print/_payload.json",revision:"3644ea87db49c033a75f2892c1f9b002"},{url:"ru/_icons/_payload.json",revision:"8df1e91636523fe744949bbf9a25238b"},{url:"ru/_payload.json",revision:"8df1e91636523fe744949bbf9a25238b"},{url:"ru/print/_payload.json",revision:"1031c92fafa7ea91f46ba3b4c95f80ff"},{url:"_nuxt/builds/latest.json",revision:"0badf44de9184bb73049a953528cb012"},{url:"_nuxt/builds/meta/450efde9-b4fb-40cd-b869-e15b3f74c1b5.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
