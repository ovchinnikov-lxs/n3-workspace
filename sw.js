if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const u=e=>i(e,o),c={module:{uri:o},exports:l,require:u};n[o]=Promise.all(s.map((e=>c[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-77fa6515"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_icons",revision:"4a9d64a2dec795879edecd6a59f57d82"},{url:"_nuxt/1HCU5uFs.js",revision:null},{url:"_nuxt/B-apiwwO.js",revision:null},{url:"_nuxt/B4tWSOgR.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BocE4RN8.js",revision:null},{url:"_nuxt/C51BtLWU.js",revision:null},{url:"_nuxt/CeSzGgr4.js",revision:null},{url:"_nuxt/CHF0UiWo.js",revision:null},{url:"_nuxt/Ctg37VJf.js",revision:null},{url:"_nuxt/entry.B0jChZGe.css",revision:null},{url:"_nuxt/error-404.rWtxj5sD.css",revision:null},{url:"_nuxt/error-500.TVelTw4B.css",revision:null},{url:"_nuxt/icons-page.zUXPIGgV.css",revision:null},{url:"_nuxt/index.C7A1rP_w.css",revision:null},{url:"_nuxt/IZVpTZGM.js",revision:null},{url:"200",revision:"eea286f8d485f0dba2e7d6872fd133f2"},{url:"404",revision:"74371f2187bd7362321bea926991f41a"},{url:"en-sitemap.xml",revision:"0afc30be4e97e651136cadc770b8d845"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"index-sitemap.xml",revision:"4fe65cb5cc3d6972bb77b418a396a0f7"},{url:"/n3-workspace/",revision:"efe3263c34ff7b4754fb6e7122c3a94b"},{url:"ru-sitemap.xml",revision:"73f68742772271050dc61affe9c06f3f"},{url:"ru/_icons",revision:"e5801d1ac60117b7414d09f52fd0f8ea"},{url:"ru",revision:"e9c7a2be683758f96a6c16c99d30a6d0"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"sitemap.xml",revision:"22f8654326aff5b4c2efd404324cddc4"},{url:"_icons/_payload.json",revision:"e1fc9bac9411f99956337106168b16b6"},{url:"_payload.json",revision:"11fba7feb6d99314403c21b6b344628d"},{url:"ru/_icons/_payload.json",revision:"e1fc9bac9411f99956337106168b16b6"},{url:"ru/_payload.json",revision:"e1fc9bac9411f99956337106168b16b6"},{url:"_nuxt/builds/latest.json",revision:"f9d0b62ad4e63d88e0bc185f34d7f60a"},{url:"_nuxt/builds/meta/d79a9a69-1ab2-423b-a713-e70bfb05541a.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
