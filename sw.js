if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>i(e,l),c={module:{uri:l},exports:o,require:u};n[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-06abd18f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_icons",revision:"86328227f49f30aad0648a2c20e074f1"},{url:"_nuxt/1Jgt2LPG.js",revision:null},{url:"_nuxt/BaN3J-wx.js",revision:null},{url:"_nuxt/C0CihBWx.js",revision:null},{url:"_nuxt/C48N8mb2.js",revision:null},{url:"_nuxt/CP-0Q5CZ.js",revision:null},{url:"_nuxt/CqgiozJH.js",revision:null},{url:"_nuxt/CvgfTZO1.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DdH2WE16.js",revision:null},{url:"_nuxt/DJ4lXpWY.js",revision:null},{url:"_nuxt/DX9wUBIN.js",revision:null},{url:"_nuxt/entry.4pGl3f_G.css",revision:null},{url:"_nuxt/error-404.BIzBJQeK.css",revision:null},{url:"_nuxt/error-500.CoWjIC1p.css",revision:null},{url:"_nuxt/gP_-yQB_.js",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.B3pkoT11.css",revision:null},{url:"_nuxt/IndexSkills.RAN0WZ3n.css",revision:null},{url:"200",revision:"b83ec045ce3e6841847f85718383097f"},{url:"404",revision:"b83ec045ce3e6841847f85718383097f"},{url:"en-US-sitemap.xml",revision:"b3f888d771b71de6e3f8c10668dda345"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"index-sitemap.xml",revision:"4fe65cb5cc3d6972bb77b418a396a0f7"},{url:"/n3-workspace/",revision:"1bcbd5e85f5aba674977ded23b1b2e5c"},{url:"print",revision:"0a531e154083e8e74e41edb09a0ca118"},{url:"ru-RU-sitemap.xml",revision:"6ec789d63a1eaf280c11a0d0f51bd6b3"},{url:"ru/_icons",revision:"31d45726c0e185d7ed942261daead6e4"},{url:"ru",revision:"a308a67d8a6eedf646aa40ac6370424d"},{url:"ru/print",revision:"9bc10341750e60887e0112b709be5ef8"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"sitemap.xml",revision:"22f8654326aff5b4c2efd404324cddc4"},{url:"_icons/_payload.json",revision:"837c498dcd891c0ef14eeacfaf50195c"},{url:"_payload.json",revision:"837c498dcd891c0ef14eeacfaf50195c"},{url:"print/_payload.json",revision:"b3b591aa8cfbd015ba2b6311485ec612"},{url:"ru/_icons/_payload.json",revision:"837c498dcd891c0ef14eeacfaf50195c"},{url:"ru/_payload.json",revision:"837c498dcd891c0ef14eeacfaf50195c"},{url:"ru/print/_payload.json",revision:"837c498dcd891c0ef14eeacfaf50195c"},{url:"_nuxt/builds/latest.json",revision:"06d726eb2dd177d59fe8ef0936b6af93"},{url:"_nuxt/builds/meta/fdcc8a53-3871-47d6-9b8e-ffaab0752db3.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
