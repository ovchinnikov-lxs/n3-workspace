if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,r)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let l={};const o=n=>i(n,u),c={module:{uri:u},exports:l,require:o};e[u]=Promise.all(s.map((n=>c[n]||o(n)))).then((n=>(r(...n),l)))}}define(["./workbox-06abd18f"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_icons",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"_nuxt/6qVg9vKk.js",revision:null},{url:"_nuxt/Ba4UcTMe.js",revision:null},{url:"_nuxt/BaUlNcxA.js",revision:null},{url:"_nuxt/BoFW8N7Q.js",revision:null},{url:"_nuxt/CqfCFefb.js",revision:null},{url:"_nuxt/CvgfTZO1.js",revision:null},{url:"_nuxt/CxjtcSA3.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DGEB1f3p.js",revision:null},{url:"_nuxt/entry.4pGl3f_G.css",revision:null},{url:"_nuxt/error-404.BIzBJQeK.css",revision:null},{url:"_nuxt/error-500.CoWjIC1p.css",revision:null},{url:"_nuxt/FDw0Huv1.js",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.B3pkoT11.css",revision:null},{url:"_nuxt/IndexSkills.RAN0WZ3n.css",revision:null},{url:"_nuxt/sJWYWpAG.js",revision:null},{url:"_nuxt/x2XDuNPb.js",revision:null},{url:"200",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"404",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"/n3-workspace/",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"print",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"ru/_icons",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"ru",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"ru/print",revision:"ccb1232faff4add66426d11b9a1953c0"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"_nuxt/builds/latest.json",revision:"aef8abc9c4b0c45dc2633fcc23d129ef"},{url:"_nuxt/builds/meta/e3e30080-6578-4566-a715-00209354f5d8.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),n.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new n.CacheFirst({cacheName:"google-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),n.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new n.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
