if(!self.define){let n,s={};const i=(i,e)=>(i=new URL(i+".js",e).href,s[i]||new Promise((s=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=s,document.head.appendChild(n)}else n=i,importScripts(i),s()})).then((()=>{let n=s[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(e,l)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let r={};const o=n=>i(n,u),t={module:{uri:u},exports:r,require:o};s[u]=Promise.all(e.map((n=>t[n]||o(n)))).then((n=>(l(...n),r)))}}define(["./workbox-06abd18f"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_icons",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"_nuxt/_id_.697ZGH-Z.css",revision:null},{url:"_nuxt/3s9KjQGo.js",revision:null},{url:"_nuxt/4ptzRFgr.js",revision:null},{url:"_nuxt/BA5y66cd.js",revision:null},{url:"_nuxt/BamwlgOU.js",revision:null},{url:"_nuxt/BaseButton.CC-4kk7s.css",revision:null},{url:"_nuxt/BaseInput.juBS36OR.css",revision:null},{url:"_nuxt/BaseListItem.-LxUZC1n.css",revision:null},{url:"_nuxt/BaseLoader.CoOK8RLW.css",revision:null},{url:"_nuxt/BaseModal.DWNFTozT.css",revision:null},{url:"_nuxt/BaseTextarea.C6QH-ZQq.css",revision:null},{url:"_nuxt/BlbkCgg-.js",revision:null},{url:"_nuxt/BLcoo1Du.js",revision:null},{url:"_nuxt/BtA9Ak5S.js",revision:null},{url:"_nuxt/BTN4jSdN.js",revision:null},{url:"_nuxt/BYoZvR6M.js",revision:null},{url:"_nuxt/Chs9jgKT.js",revision:null},{url:"_nuxt/CN9IBZ3K.js",revision:null},{url:"_nuxt/confirm.9DoKEmOW.css",revision:null},{url:"_nuxt/Cpj98o6Y.js",revision:null},{url:"_nuxt/CQzZ7DRD.js",revision:null},{url:"_nuxt/CWmyFcLM.js",revision:null},{url:"_nuxt/CZCf_9hS.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D6fmP2ge.js",revision:null},{url:"_nuxt/default.BdHr54t1.css",revision:null},{url:"_nuxt/DgJypJvB.js",revision:null},{url:"_nuxt/DHQGxp4k.js",revision:null},{url:"_nuxt/DSwdcqQc.js",revision:null},{url:"_nuxt/entry.B5slr3w3.css",revision:null},{url:"_nuxt/icons-page.Cku9VSRx.css",revision:null},{url:"_nuxt/index.a1YMqJr7.css",revision:null},{url:"_nuxt/k57XqH9O.js",revision:null},{url:"_nuxt/login.BxBod5py.css",revision:null},{url:"_nuxt/n-HGUT9f.js",revision:null},{url:"_nuxt/p6mekisy.js",revision:null},{url:"_nuxt/Wro29C0J.js",revision:null},{url:"200",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"404",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"confirm",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"en/_icons",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"en/confirm",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"en",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"en/login",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"en/register",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"favicon.ico",revision:"4a959b4103b63ed4ec643321f32a25d7"},{url:"img/144x144.png",revision:"0ab5b17411044b92b9c96d24ebdb753d"},{url:"img/512x512.png",revision:"cd75044e24160ae9a5490460816f15ab"},{url:"img/72x72.png",revision:"79b88a5f5603400cc2bae989e0fd71a7"},{url:"img/96x96.png",revision:"d8eaaa078cf547686a0583e7534cac05"},{url:"img/logo.svg",revision:"75e0ed55d6fc8324c6e4d7eea8d7c205"},{url:"/n3-workspace/shopping-list/",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"login",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"register",revision:"625410d16694f5088d00f95aa22b6f46"},{url:"service-worker.js",revision:"547b6afb50d68344afa410285e5af5a4"},{url:"_nuxt/builds/latest.json",revision:"7e45347e67c8e5096cf8644d92095082"},{url:"_nuxt/builds/meta/0ea40a04-8970-4ffd-989a-b4dbb6ed4fea.json",revision:null},{url:"manifest.webmanifest",revision:"56b554428db21bf81fd975cfad32b677"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/n3-workspace/shopping-list/"),{denylist:[/^\//]})),n.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new n.CacheFirst({cacheName:"google-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),n.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new n.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
