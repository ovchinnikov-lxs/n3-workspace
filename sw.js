if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>i(e,l),a={module:{uri:l},exports:o,require:u};n[l]=Promise.all(r.map((e=>a[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-06abd18f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_icons",revision:"9731664ff8f54e8e6d1fa5ebbaa4f973"},{url:"_nuxt/B8TlQfbt.js",revision:null},{url:"_nuxt/BRTo21Tt.js",revision:null},{url:"_nuxt/CvgfTZO1.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DFMBQL8N.js",revision:null},{url:"_nuxt/Dscvt3u5.js",revision:null},{url:"_nuxt/DTOPEajl.js",revision:null},{url:"_nuxt/entry.4pGl3f_G.css",revision:null},{url:"_nuxt/error-404.BIzBJQeK.css",revision:null},{url:"_nuxt/error-500.CoWjIC1p.css",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.B3pkoT11.css",revision:null},{url:"_nuxt/IndexSkills.RAN0WZ3n.css",revision:null},{url:"_nuxt/kKKg30O8.js",revision:null},{url:"_nuxt/QrKd0AaN.js",revision:null},{url:"_nuxt/SMnuorEk.js",revision:null},{url:"_nuxt/uJkcVZkB.js",revision:null},{url:"_nuxt/XRIFoRLH.js",revision:null},{url:"200",revision:"04ffc7ac6bfbfb3915de5e0df7f1256b"},{url:"404",revision:"04ffc7ac6bfbfb3915de5e0df7f1256b"},{url:"en-US-sitemap.xml",revision:"b3f888d771b71de6e3f8c10668dda345"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"index-sitemap.xml",revision:"4fe65cb5cc3d6972bb77b418a396a0f7"},{url:"/n3-workspace/",revision:"f5a045e7a69d090fbd22eb3c8a99f1c9"},{url:"print",revision:"a46f7d2380a706eaacefa2af68800aff"},{url:"ru-RU-sitemap.xml",revision:"6ec789d63a1eaf280c11a0d0f51bd6b3"},{url:"ru/_icons",revision:"447b5934aad9c61ec2a555ebe665de5d"},{url:"ru",revision:"1a29ae25fa6db5cbd63a2c81745d639b"},{url:"ru/print",revision:"cee4f4321d625d803ae187167858cf61"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"sitemap.xml",revision:"22f8654326aff5b4c2efd404324cddc4"},{url:"_icons/_payload.json",revision:"b9d1230f2974ec1f4cffe2681a08f228"},{url:"_payload.json",revision:"e9084dc917a8123204d647803f681640"},{url:"print/_payload.json",revision:"8a1c73d86958973d1201a9f86cd79371"},{url:"ru/_icons/_payload.json",revision:"b9d1230f2974ec1f4cffe2681a08f228"},{url:"ru/_payload.json",revision:"e9084dc917a8123204d647803f681640"},{url:"ru/print/_payload.json",revision:"e9084dc917a8123204d647803f681640"},{url:"_nuxt/builds/latest.json",revision:"be79fdee12236140ae7417fb0ce8ba1c"},{url:"_nuxt/builds/meta/135009af-06a2-466e-a9c3-eabb05c6225e.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
