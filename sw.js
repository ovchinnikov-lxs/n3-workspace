if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>i(e,l),a={module:{uri:l},exports:o,require:u};n[l]=Promise.all(r.map((e=>a[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-06abd18f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_icons",revision:"04c3796c66d801d5da77781de25c2132"},{url:"_nuxt/0nOxuw1X.js",revision:null},{url:"_nuxt/aDOB7WCA.js",revision:null},{url:"_nuxt/B0HO1S_N.js",revision:null},{url:"_nuxt/B9-Fwdn1.js",revision:null},{url:"_nuxt/BbfsSRl_.js",revision:null},{url:"_nuxt/BPFYStzu.js",revision:null},{url:"_nuxt/BT5NktWd.js",revision:null},{url:"_nuxt/CvgfTZO1.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DFRrUK7R.js",revision:null},{url:"_nuxt/Du4Q8DV_.js",revision:null},{url:"_nuxt/entry.4pGl3f_G.css",revision:null},{url:"_nuxt/error-404.BIzBJQeK.css",revision:null},{url:"_nuxt/error-500.CoWjIC1p.css",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.B3pkoT11.css",revision:null},{url:"_nuxt/IndexSkills.RAN0WZ3n.css",revision:null},{url:"_nuxt/WNFY55OG.js",revision:null},{url:"200",revision:"93c758c2620c77bdf2f071faf29fde6a"},{url:"404",revision:"93c758c2620c77bdf2f071faf29fde6a"},{url:"en-US-sitemap.xml",revision:"b3f888d771b71de6e3f8c10668dda345"},{url:"favicon.ico",revision:"f3d3d649847d0b016b6754bcd61b1400"},{url:"img/android-chrome-192x192.png",revision:"de429e8b1962b49f5b1c21b595b7821e"},{url:"img/android-chrome-512x512.png",revision:"d31537ef7d1b50b46ab2b4c648f2c846"},{url:"img/apple-touch-icon.png",revision:"b4657895e5e86d24a30e4daef67bb354"},{url:"img/favicon-16x16.png",revision:"1cab9287228b99c15331948fb62037b6"},{url:"img/favicon-32x32.png",revision:"96438de7d7d202e0b730b5a4cd747fc5"},{url:"index-sitemap.xml",revision:"4fe65cb5cc3d6972bb77b418a396a0f7"},{url:"/n3-workspace/",revision:"8063ac1aa155de82099ac894671f87b6"},{url:"print",revision:"06e4d623fea678cd39e8873cfd54f228"},{url:"ru-RU-sitemap.xml",revision:"6ec789d63a1eaf280c11a0d0f51bd6b3"},{url:"ru/_icons",revision:"18e63c03c713958eb734b709f0de0cf7"},{url:"ru",revision:"50489056b52ac621aa7d2b927029be49"},{url:"ru/print",revision:"c484584e3bdd7c294eb82af9a7ee00ae"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"sitemap.xml",revision:"22f8654326aff5b4c2efd404324cddc4"},{url:"_icons/_payload.json",revision:"fb311bedc194a597253ce351b7eae651"},{url:"_payload.json",revision:"a54a2ad8ade4221b5d3338d0da013791"},{url:"print/_payload.json",revision:"a54a2ad8ade4221b5d3338d0da013791"},{url:"ru/_icons/_payload.json",revision:"fb311bedc194a597253ce351b7eae651"},{url:"ru/_payload.json",revision:"a54a2ad8ade4221b5d3338d0da013791"},{url:"ru/print/_payload.json",revision:"a54a2ad8ade4221b5d3338d0da013791"},{url:"_nuxt/builds/latest.json",revision:"556182769001a20b24f016e6bbeab82b"},{url:"_nuxt/builds/meta/b160165e-bbb0-44aa-90a9-0ea2bedc30b8.json",revision:null},{url:"manifest.webmanifest",revision:"ed3cc3873c2af05d4e0921a49c3e773b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/n3-workspace/"),{denylist:[/^\//]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
